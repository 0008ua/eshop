import { Action } from '@ngrx/store';
import { ScreenActionTypes, ScreenActions } from '../actions/screen.actions';
import { PictureTypes, IPictureState } from '../interfaces';
import { ScreenTypes } from '../interfaces';


export const screenFeatureKey = 'screen';

export interface ScreenState {
  pictureLink: {
    [key: string]: IPictureState;
  };
  picturesOnPage: number;
  screenSize: ScreenTypes | null;
}

export const initialState: ScreenState = {
  pictureLink: {
    [PictureTypes.ProductPicture]: { link: '/', size: { w: 0, h: 0 } },
    [PictureTypes.DashboardProductPicture]: { link: '/', size: { w: 0, h: 0 } },
  },
  picturesOnPage: 6,
  screenSize: null,
  
};

export function reducer(state = initialState, action: ScreenActions): ScreenState {
  switch (action.type) {
    case ScreenActionTypes.ChangedScreens:
      return { ...state, ...action.payload };

    case ScreenActionTypes.LoadScreens:
      break;

    default:
      return state;
  }
}
