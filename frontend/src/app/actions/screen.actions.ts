import { Action } from '@ngrx/store';
import { PictureTypes } from '../interfaces';
import { ScreenState } from '../reducers/screen.reducer';

export enum ScreenActionTypes {
  LoadScreens = '[Screen] Load Screens',
  ChangedScreens = '[Screen] Changed Screens',
}

export class LoadScreens implements Action {
  readonly type = ScreenActionTypes.LoadScreens;
}

export class ChangedScreens implements Action {
  readonly type = ScreenActionTypes.ChangedScreens;
  constructor(public payload: ScreenState) { }
}

export type ScreenActions =
  LoadScreens |
  ChangedScreens;
