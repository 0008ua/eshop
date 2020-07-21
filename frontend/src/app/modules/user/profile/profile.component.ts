import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../reducers';
import { IUser } from '../../../interfaces';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: IUser;

  constructor(
    private store: Store<State>,
  ) { }

  ngOnInit() {
    this.store.select('auth')
      .subscribe(store => this.user = store.user);
  }

}
