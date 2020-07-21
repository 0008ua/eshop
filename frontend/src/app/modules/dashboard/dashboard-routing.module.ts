import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { Page404Component } from 'src/app/components/page404/page404.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      // {
      //   path: 'product-form',
      //   component: ProductFormComponent,
      //   // canActivate: [AuthGuard],
      //   // data: { auth: 'guest' },
      // },
      // {
      //   path: 'product-form',
      //   component: ProductFormComponent,
      //   // canActivate: [AuthGuard],
      //   // data: { auth: 'guest' },
      // },
      {
        path: '',
        component: Page404Component,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
