import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { ScreenActionTypes, LoadScreens, ChangedScreens } from '../actions/screen.actions';
import { switchMap, map } from 'rxjs/operators';
import { SharedService } from '../services/shared.service';
// import { LoadApp, LoadAppProductsSuccess } from '../actions/app.actions';



@Injectable()
export class ScreenEffects {

  @Effect()
  getScreens: Observable<Action> = this.actions$.pipe(
    ofType(ScreenActionTypes.LoadScreens),
    switchMap(_ => this.sharedService.loadScreens().pipe(
      switchMap(state =>
        {
        return [
          new ChangedScreens(state),
          // new LoadAppProductsSuccess({limit: state.picturesOnPage})
        ]
        }
       )
    )),
  );

  constructor(
    private actions$: Actions,
    private sharedService: SharedService,
    ) {}
}
