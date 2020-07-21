import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { IProduct } from 'src/app/interfaces';
import { ProductService } from 'src/app/services/product.service';
import { ElementOnScreen } from 'src/app/actions/scrolling.actions';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private products: IProduct[];
  @ViewChildren('scrollerMarker') scrollerMarker: QueryList<any>;
  currentElementId: string;

  constructor(
    private productService: ProductService,
    private store: Store<State>,
  ) { }

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products);

    this.store
      .select('scrolling')
      .subscribe(store => {
        const elementId = store.scrollTo;
        if (this.scrollerMarker) {
          this.scrollerMarker.forEach(el => {
            if (el.nativeElement.id === elementId) {
              el.nativeElement.scrollIntoView(
                { behavior: 'smooth' }
              );
            }
          });
        }
      });
  }

  private isNewElementOnScreen(elemId: string) {
    if (this.currentElementId !== elemId) {
      this.currentElementId = elemId;
      return true;
    } else {
      return false;
    }
  }

  onElementOnScreen(elementOnScreen: string) {
    if (this.isNewElementOnScreen(elementOnScreen)) {
      this.store.dispatch(new ElementOnScreen({ elementOnScreen }));
    }
  }
}
