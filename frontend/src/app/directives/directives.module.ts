import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingDirective } from './scrolling.directive';
import { OnScrollAnimationDirective } from './on-scroll-animation.directive';


@NgModule({
  declarations: [
    ScrollingDirective,
    OnScrollAnimationDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ScrollingDirective,
    OnScrollAnimationDirective,
  ]
})
export class DirectivesModule { }
