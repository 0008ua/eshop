import { Action } from '@ngrx/store';

export enum UserActionTypes {
  getUser = '[User] Get user',
  authenticated = '[User] Authenticated',
  notAuthenticated = '[User] Not Authenticated',

  // googleLogin = '[User] Google login attempt',
  // logout = '[User] Logout',

  authError = '[User] Error',
}

// Get User AuthState
export class GetUser implements Action {
  readonly type = UserActionTypes.getUser;
  constructor(public payload?: any) { }
}

export class Authenticated implements Action {
  readonly type = UserActionTypes.authenticated;
  constructor(public payload?: any) { }
}

export class NotAuthenticated implements Action {
  readonly type = UserActionTypes.notAuthenticated;
  constructor(public payload?: any) { }
}

export class AuthError implements Action {
  readonly type = UserActionTypes.authError;
  constructor(public payload?: any) { }
}

// // Google Login Actions
// export class GoogleLogin implements Action {
//   readonly type = UserActionTypes.googleLogin;
//   constructor(public payload?: any) { }
// }

// // Logout Actions
// export class Logout implements Action {
//   readonly type = UserActionTypes.logout;
//   constructor(public payload?: any) { }
// }

export type UserActions
  = GetUser
  | Authenticated
  | NotAuthenticated
  // | GoogleLogin
  | AuthError;
  // | Logout;
