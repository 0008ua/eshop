import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICatalog } from 'src/app/interfaces';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { ScrollTo } from 'src/app/actions/scrolling.actions';

@Component({
  selector: 'app-scroll-nav',
  templateUrl: './scroll-nav.component.html',
  styleUrls: ['./scroll-nav.component.scss']
})
export class ScrollNavComponent implements OnInit {

  @Input() nav: ICatalog[];
  @Input() navType: 'top' | 'aside';
  elementOnScreen: string;
  showScrollMenu = false;

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit(): void {
    this.store.select('scrolling')
      .subscribe(store => {
        this.elementOnScreen = store.elementOnScreen;
      });
  }

  scrollTo(elementId: string) {
    this.store.dispatch(new ScrollTo({ scrollTo: elementId}));
  }

  switchScrollMenu() {
    this.showScrollMenu = !this.showScrollMenu;
  }
}
