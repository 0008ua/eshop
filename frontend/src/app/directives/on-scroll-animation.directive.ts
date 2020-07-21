import { Directive, HostListener, ElementRef, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  AnimationPlayer,
  AnimationBuilder,
  AnimationMetadata,
} from '@angular/animations';

@Directive({
  selector: '[appOnScrollAnimation]',
})

export class OnScrollAnimationDirective {
  player: AnimationPlayer;
  currentAppOnScrollAnimation: string;
  forwardAnimationDirection: boolean;

  @Input('appOnScrollAnimation') onScrollAnimation: string;

  constructor(
    private builder: AnimationBuilder,
    private el: ElementRef
  ) { }

  private slide(forwardAnimationDirection: boolean): AnimationMetadata[] {
    if (forwardAnimationDirection) {
      return [
        style({
          opacity: 0,
          transform: 'translate(-100%, 0)'
        }),
        animate('1000ms ease-in',
          style({
            opacity: 1,
            transform: 'translate(0, 0)'
          })
        ),
      ];
    } else {
      return [
        style({
          opacity: 1,
          transform: 'translate(0, 0)'
        }),
        animate('1000ms ease-in',
          style({
            opacity: 0,
            transform: 'translate(-100%, 0)'
          })
        ),
      ];
    }

  }

  private fade(forwardAnimationDirection: boolean): AnimationMetadata[] {
    if (forwardAnimationDirection) {
      return [
        style({ opacity: 0 }),
        animate('400ms ease-in', style({ opacity: 1 })),
      ];
    } else {
      return [
        style({ opacity: '*' }),
        animate('400ms ease-in', style({ opacity: 0 })),
      ];
    }

  }

  doAnimation(appOnScrollAnimation: string, forwardAnimationDirection: boolean) {
    if (
      !this.currentAppOnScrollAnimation ||
      this.currentAppOnScrollAnimation !== appOnScrollAnimation ||
      this.forwardAnimationDirection !== forwardAnimationDirection) {

      if (this.player) {
        this.player.destroy();
      }

      const metadata = this[appOnScrollAnimation](forwardAnimationDirection);

      const factory = this.builder.build(metadata);
      const player = factory.create(this.el.nativeElement);
      player.play();
      this.currentAppOnScrollAnimation = appOnScrollAnimation;
      this.forwardAnimationDirection = forwardAnimationDirection;
    } else {
      return;
    }
  }

  isElementOnScreen(elem: ElementRef['nativeElement']) {
    const box = elem.getBoundingClientRect();
    const elementTop = box.top;
    const elementBottom = box.bottom;
    if (elementBottom > 0 && elementTop <= innerHeight - innerHeight * .4 && elementBottom > innerHeight - innerHeight * .4) {
      return true;
    } else {
      return false;
    }
  }

  @HostListener('window:scroll', [])
  onScroll() {
    if (this.isElementOnScreen(this.el.nativeElement)) {
      this.doAnimation(this.onScrollAnimation, true);
    } else {
      this.doAnimation(this.onScrollAnimation, false);
    }
  }
}
