import { Component, OnInit, Input } from '@angular/core';
import { ICatalog } from 'src/app/interfaces';

@Component({
  selector: 'app-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: ['./sub-nav.component.scss']
})
export class SubNavComponent implements OnInit {

  @Input() nav: ICatalog[];

  constructor() { }

  ngOnInit(): void {
  }

}
