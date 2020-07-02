import { Component, OnInit, Input } from '@angular/core';
import { ICatalog } from 'src/app/interfaces';


@Component({
  selector: 'app-scroll-nav',
  templateUrl: './scroll-nav.component.html',
  styleUrls: ['./scroll-nav.component.scss']
})
export class ScrollNavComponent implements OnInit {

  @Input() scrollNav: ICatalog[];

  constructor(

  ) { }

  ngOnInit(): void {
  }

}
