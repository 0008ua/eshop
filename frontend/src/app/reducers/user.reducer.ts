import { Action } from '@ngrx/store';
import { IUser, User } from '../interfaces';
import { UserActions, UserActionTypes } from '../actions/user.actions';

export const userFeatureKey = 'user';

export interface UserState {
  user: IUser;
}

export const initialState: UserState = {
  user: new User(null, 'Guest', 'guest')
};

export function reducer(state = initialState, action: UserActions): UserState {
  // console.log('screen reducer');

  switch (action.type) {

    // fires and then effect fires on same action to fetch data
    // here is only for set loading to true (e. g. to show spinner)
    case UserActionTypes.getUser:
      return { ...state, user: { ...state.user, loading: true } };

    case UserActionTypes.authenticated:
      return { ...state, user: { ...action.payload.user, loading: false } };

    case UserActionTypes.notAuthenticated:
      return { ...state, user: { ...initialState.user, loading: false } };

    // case UserActionTypes.googleLogin:
    //   return { ...state, user: { ...state.user, loading: true } };

    case UserActionTypes.authError:
      return { ...state, user: { ...action.payload.user, loading: false } };

    // case UserActionTypes.logout:
    //   return { ...state, user: { ...state.user, loading: true } };

    default:
      return state;
  }
}
