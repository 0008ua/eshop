import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of, from } from 'rxjs';
import { map, switchMap, delay, catchError, timeout } from 'rxjs/operators';

import { UserActions, UserActionTypes, GetUser, Authenticated, NotAuthenticated, AuthError } from '../actions/user.actions';
import { UserService } from '../services/user.service';

import { User } from '../interfaces';



@Injectable()
export class UserEffects {

  @Effect()
  getUser: Observable<Action> = this.actions$.pipe(
    ofType(UserActionTypes.getUser),
    map((action: GetUser) => action.payload),
    switchMap(payload => this.userService.getUser().pipe(
      map(user => {
        if (user) {
          // User logged in
          return new Authenticated({ user });
        } else {
          // User not logged in
          return new NotAuthenticated();
        }
      })
    )),
    catchError(err => of(new AuthError()))
  );

  // @Effect()
  // login: Observable<Action> = this.actions$.pipe(
  //   ofType(UserActionTypes.googleLogin),
  //   map((action: UserActions) => action.payload),
  //   switchMap(payload => from(this.fireService.googleSignin()).pipe(
  //     // successful login
  //     map(credential => new GetUser()))),
  //   catchError(err => of(new AuthError({ error: err.message })))
  // );

  // @Effect()
  // logout: Observable<Action> = this.actions$.pipe(
  //   ofType(UserActionTypes.logout),
  //   map((action: UserActions) => action.payload),
  //   switchMap(payload => of(this.afAuth.auth.signOut()).pipe(
  //     map(authData => new NotAuthenticated()),
  //     catchError(err => of(new AuthError({ error: err.message })))
  //   ))
  // );

  constructor(
    private actions$: Actions,
    private userService: UserService,
    // private afAuth: AngularFireAuth,
  ) { }

}
