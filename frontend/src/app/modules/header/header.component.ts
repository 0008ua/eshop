import { Component, OnInit, Input } from '@angular/core';
import { CatalogService } from 'src/app/services/catalog.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { switchMap, filter, map, mergeMap } from 'rxjs/operators';
import { ICatalog, PictureTypes, ScreenTypes } from 'src/app/interfaces';
import { combineLatest, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { ElementSticky } from 'src/app/actions/scrolling.actions';
import { MediaObserver, MediaChange } from '@angular/flex-layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  scrollNav: ICatalog[];
  subNav: ICatalog[];
  lastParentSegment: string;
  sticky = false;
  elementTopTouchedTop: string;
  scrollNavTopTouchedTop: string;
  mainNavTopTouchedBottom: string;
  showMainMenu = false;
  navType: 'top' | 'aside';

  constructor(
    private catalogService: CatalogService,
    private router: Router,
    private store: Store<State>,
  ) { }

  ngOnInit(): void {

    this.store.select('screen')
      .subscribe(store => {
        if (store && (store.screenSize === ScreenTypes.xs || store.screenSize === ScreenTypes.sm)) {
          this.navType = 'aside';
        } else {
          this.navType = 'top';
        }
      });

    this.store.select('scrolling')
      .subscribe(store => {
        this.sticky = store.elementSticky;
      });

    const routerEvents$ = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((event: NavigationEnd) => {
        const url = event.url.split('/');
        const lastUrlSegment = url[url.length - 1];
        this.lastParentSegment = '';
        if (url.length >= 2) {
          this.lastParentSegment = url[url.length - 2];
        }
        return lastUrlSegment;
      }),
    );

    combineLatest(
      routerEvents$.pipe(
        mergeMap(lastUrlSegment => {
          return this.catalogService.getScrollableChildren(lastUrlSegment || 'common');
        }),
      ),
      routerEvents$.pipe(
        mergeMap(lastUrlSegment => {
          return this.lastParentSegment === 'products' ? this.catalogService.getAllSiblingsOfCurrentCategory(lastUrlSegment) : of([]);
        }),
      )
    )
      .subscribe(nav => {
        this.scrollNav = nav[0];
        this.subNav = [];
        if (!nav[0].length) {
          this.subNav = nav[1];
        }
      });
  }

  elementSticky(e: boolean) {
    this.store.dispatch(new ElementSticky({ elementSticky: e }));
  }

  switchMainMenu() {
    this.showMainMenu = !this.showMainMenu;
  }
}
