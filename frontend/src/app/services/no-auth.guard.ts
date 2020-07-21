import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { IUser } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
  user: IUser;

  constructor(
    private userService: UserService,
    private store: Store<State>,
  ) {
    this.store.select('auth')
      .subscribe(storeState => this.user = storeState.user);
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // access permitted for all roles included 'null'
    // access denied from next.data.auth
    const restrictedRoleForAuthorization = next.data.auth; // from routing.module

    if (!this.user._id) {
      return true;
    } else {
      return !(restrictedRoleForAuthorization.indexOf(this.user.role) >= 0);
    }
  }
}
