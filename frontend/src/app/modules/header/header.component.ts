import { Component, OnInit, Input } from '@angular/core';
import { CatalogService } from 'src/app/services/catalog.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { switchMap, filter, map } from 'rxjs/operators';
import { ICatalog } from 'src/app/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  scrollNav: ICatalog[];

  constructor(
    private catalogService: CatalogService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((event: NavigationEnd) => {
        const url = event.url.split('/');
        const lastUrlSegment = url[url.length - 1];
        console.log('lastUrlSegment', lastUrlSegment);
        return lastUrlSegment;
      }),
      switchMap(lastUrlSegment => {
        return this.catalogService.getScrollableChildren(lastUrlSegment || 'common');
      })
    )
      .subscribe(scrollNav => this.scrollNav = scrollNav);
  }

}
