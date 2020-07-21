import { Component, OnInit } from '@angular/core';
import { CatalogService } from 'src/app/services/catalog.service';
import { ICatalog } from 'src/app/interfaces';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dashboardRootMenu: ICatalog[];

  constructor(
    private catalogService: CatalogService,
    public sharedService: SharedService,
  ) { }

  ngOnInit() {
    this.catalogService.getChildren('dashboard')
      .subscribe(
        dashboardRootMenu => this.dashboardRootMenu = dashboardRootMenu,
        err => console.log('err', err.error.message));
  }

}
