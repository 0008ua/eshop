import { Action } from '@ngrx/store';
import { ScrollingActionTypes, ScrollingActions } from '../actions/scrolling.actions';


export const scrollingFeatureKey = 'scrolling';

export interface ScrollingState {
  elementOnScreen: string | null;
  elementSticky: boolean;
  scrollTo: string | null;
}

export const initialState: ScrollingState = {
  elementOnScreen: 'plankit',
  elementSticky: false,
  scrollTo: null,
};

export function reducer(state = initialState, action: ScrollingActions): ScrollingState {
  switch (action.type) {

    case ScrollingActionTypes.ElementOnScreen:
      return { ...state, ...action.payload };

    case ScrollingActionTypes.ScrollTo:
      return { ...state, ...action.payload };

    case ScrollingActionTypes.ElementSticky:
      return { ...state, ...action.payload };

    default:
      return state;
  }
}
