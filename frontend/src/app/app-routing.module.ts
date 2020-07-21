import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './components/page404/page404.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './modules/products/product-detail/product-detail.component';
import { ProductsComponent } from './modules/products/products.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  {
    path: 'feedback',
    loadChildren: () => import('./modules/feedback/feedback.module').then(mod => mod.FeedbackModule),
  },
  // {
  //   path: 'products',
  //   loadChildren: () => import('./modules/products/products.module').then(mod => mod.ProductsModule),
  // },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'products/:product',
    component: ProductDetailComponent,
  },
  {
    path: 'page-404',
    component: Page404Component
  },
  {
    path: 'user',
    loadChildren: './modules/user/user.module#UserModule',
  },
  {
    path: 'dashboard',
    loadChildren: './modules/dashboard/dashboard.module#DashboardModule',
    canActivate: [AuthGuard],
    data: { auth: 'manager' },
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
