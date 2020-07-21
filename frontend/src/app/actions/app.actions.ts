import { Action } from '@ngrx/store';

export enum AppActionTypes {
  LoadApps = '[App] Load Apps',
  LoadAppsSuccess = '[App] Load Apps Success',
  LoadAppsFailure = '[App] Load Apps Failure',
}

export class LoadApps implements Action {
  readonly type = AppActionTypes.LoadApps;
}

export class LoadAppsSuccess implements Action {
  readonly type = AppActionTypes.LoadAppsSuccess;
  constructor(public payload: { data: any }) { }
}

export class LoadAppsFailure implements Action {
  readonly type = AppActionTypes.LoadAppsFailure;
  constructor(public payload: { error: any }) { }
}

export type AppActions = LoadApps | LoadAppsSuccess | LoadAppsFailure;

