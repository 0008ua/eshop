import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces';
import { ProductService } from 'src/app/services/product.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  private product: IProduct;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.route.paramMap.pipe(

      switchMap(paramMap => {
        const id = paramMap.get('product');
        console.log('id', id);
        
        return this.productService.getProduct(id);
      })
    )
      .subscribe(product => this.product = product);
  }

}
