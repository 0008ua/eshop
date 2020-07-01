import { Component, OnInit } from '@angular/core';
import { ICatalog } from 'src/app/interfaces';
import { CatalogService } from 'src/app/services/catalog.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-scroll-nav',
  templateUrl: './scroll-nav.component.html',
  styleUrls: ['./scroll-nav.component.scss']
})
export class ScrollNavComponent implements OnInit {

  scrollNav: ICatalog[];

  constructor(
    private catalogService: CatalogService,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {

    // const routerEvents$ = this.router.events.pipe(
    //   filter((event) => event instanceof NavigationEnd),
    //   map((event: NavigationEnd) => {

    //     if (event.url.split('/')[1] === 'products' || event.url.split('/')[1] === '') {
    //       this.productsUrl = true;
    //     } else {
    //       this.productsUrl = false;
    //     }
    //     gtag('config', 'UA-151728431-1',
    //       {
    //         page_path: event.urlAfterRedirects
    //       }
    //     );
    //   }),
    //   map(() => this.route),
    //   map((route) => {
    //     while (route.firstChild) {
    //       route = route.firstChild;
    //     }
    //     return route;
    //   }),
    //   filter(route => route.outlet === 'primary'));

    // const store$ = this.store.select('app');

    // combineLatest(
    //   routerEvents$.pipe(mergeMap((route) => route.queryParamMap)), // query params
    //   routerEvents$.pipe(mergeMap((route) => route.data)), // routing.module data
    //   store$.pipe(map(appStore => appStore.lang)) // fires on lang changed
    // )


    this.route.paramMap.pipe(
      switchMap(paramMap => {
        // this.product = paramMap.get('product');
        // console.log('this.product', this.product);
        return this.catalogService.getScrollableChildren('products');
      }))
      .subscribe(scrollNav => this.scrollNav = scrollNav);


    // this.catalogService.getScrollableChildren('products')
    //   .subscribe(scrollNav => this.scrollNav = scrollNav);
  }

}
