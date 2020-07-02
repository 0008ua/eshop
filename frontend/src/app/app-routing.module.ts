import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './components/page404/page404.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path: 'products',
    loadChildren: './modules/products/products.module#ProductsModule',
  },
  {
    path: 'feedback',
    loadChildren: './modules/feedback/feedback.module#FeedbackModule',
  },
  {
    path: 'page-404',
    component: Page404Component
  },
  {
    path: 'common',
    redirectTo: ''
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  { path: '**', component: Page404Component }, // MAKE redirect
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
