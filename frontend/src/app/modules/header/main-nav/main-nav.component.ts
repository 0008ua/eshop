import { Component, OnInit } from '@angular/core';
import { CatalogService } from 'src/app/services/catalog.service';
import { ICatalog } from 'src/app/interfaces';
import { Observable, combineLatest } from 'rxjs';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  mainNavCommon$: Observable<ICatalog[]>;
  mainNavSystem$: Observable<ICatalog[]>;
  mainNavCommon: ICatalog[];
  mainNavSystem: ICatalog[];

  constructor(
    private catalogService: CatalogService,
  ) { }

  ngOnInit(): void {
    this.mainNavCommon$ = this.catalogService.getChildren('common');
    this.mainNavSystem$ = this.catalogService.getChildren('system');
    combineLatest(this.mainNavCommon$, this.mainNavSystem$)
      .subscribe(data => {
        this.mainNavCommon = data[0];
        this.mainNavSystem = data[1];
      });
  }

}
