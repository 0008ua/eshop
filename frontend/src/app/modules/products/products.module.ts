import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductFeedComponent } from './product-feed/product-feed.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { ProductsRoutingModule } from './products-routing.module';
import { DirectivesModule } from 'src/app/directives/directives.module';



@NgModule({
  declarations: [ProductsComponent, ProductFeedComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // uncomment to use as lazy loading module
    // this module is using by home component (eager loading)
    // ProductsRoutingModule,
    MaterialModule,
    DirectivesModule,
  ],
  exports: [
    ProductFeedComponent
  ]
})
export class ProductsModule { }
