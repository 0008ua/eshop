import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/interfaces';

@Component({
  selector: 'app-product-feed',
  templateUrl: './product-feed.component.html',
  styleUrls: ['./product-feed.component.scss']
})
export class ProductFeedComponent implements OnInit {

  @Input() product: IProduct;

  constructor() { }

  ngOnInit(): void {
  }

}
