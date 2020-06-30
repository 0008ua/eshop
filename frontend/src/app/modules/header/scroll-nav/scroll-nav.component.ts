import { Component, OnInit } from '@angular/core';
import { ICatalog } from 'src/app/interfaces';
import { CatalogService } from 'src/app/services/catalog.service';

@Component({
  selector: 'app-scroll-nav',
  templateUrl: './scroll-nav.component.html',
  styleUrls: ['./scroll-nav.component.scss']
})
export class ScrollNavComponent implements OnInit {

  scrollNav: ICatalog[];

  constructor(
    private catalogService: CatalogService,
  ) { }

  ngOnInit(): void {
    this.catalogService.getScrollableChildren('common')
      .subscribe(scrollNav => this.scrollNav = scrollNav);
  }

}
