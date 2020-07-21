import { Action } from '@ngrx/store';

export enum ScrollingActionTypes {
  ElementOnScreen = '[Scrolling] Element On Screen',
  ScrollTo = '[Scrolling] Scroll To',
  ElementSticky = '[Scrolling] Element sticky'
}

export class ElementOnScreen implements Action {
  readonly type = ScrollingActionTypes.ElementOnScreen;
  constructor(public payload: { elementOnScreen: string }) { }
}

export class ScrollTo implements Action {
  readonly type = ScrollingActionTypes.ScrollTo;
  constructor(public payload: { scrollTo: string }) { }
}

export class ElementSticky implements Action {
  readonly type = ScrollingActionTypes.ElementSticky;
  constructor(public payload: { elementSticky: boolean }) { }
}

export type ScrollingActions =
  ElementOnScreen
  | ScrollTo
  | ElementSticky;

