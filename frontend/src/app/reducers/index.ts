import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

import * as fromScrolling from './scrolling.reducer';
import * as fromScreen from './screen.reducer';
import * as fromUser from './user.reducer';

export interface State {
  scrolling: fromScrolling.ScrollingState;
  screen: fromScreen.ScreenState;
  auth: fromUser.UserState;
}

export const reducers: ActionReducerMap<State> = {
  scrolling: fromScrolling.reducer,
  screen: fromScreen.reducer,
  auth: fromUser.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
