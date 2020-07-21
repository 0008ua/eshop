import { Directive, HostListener, ElementRef, OnInit, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appScrolling]'
})
export class ScrollingDirective implements OnInit {

  @Output() elementOnScreen = new EventEmitter();
  @Output() elementSticky = new EventEmitter();

  private lastBottom: number;
  private sticky: boolean;
  private currentElementId: string;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }

  isElementSticky(elem: ElementRef['nativeElement']) {
    // observing for bottom edge of above element
    const box = elem.getBoundingClientRect();
    const elementBottom = box.bottom;
    if (elementBottom >= 0 && this.lastBottom < 0) {
      this.lastBottom = box.bottom;
      this.sticky = false;
      return true;
    } else if (elementBottom < 0 && this.lastBottom >= 0) {
      this.lastBottom = box.bottom;
      this.sticky = true;
      return true;
    } else {
      this.lastBottom = box.bottom;
      return false;
    }
  }

  isElementOnScreen(elem: ElementRef['nativeElement']) {
    // elem.getBoundingClientRect(); видима обасть екрану до елемента
    // pageYOffset верх сторінки до верху видимой обасті
    // innerHeight висота видимої області
    const box = elem.getBoundingClientRect();
    // const screenTop = pageYOffset;
    // const screenBottom = pageYOffset + innerHeight;
    const elementTop = box.top;
    const elementBottom = box.bottom;
    if (elementBottom > 0 && elementTop <= innerHeight - innerHeight * .4 && elementBottom > innerHeight - innerHeight * .4) {
      return true;
    } else {
      return false;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(e) {
    if (this.isElementOnScreen(this.elementRef.nativeElement)) {
      this.elementOnScreen.emit();
    }
    if (this.isElementSticky(this.elementRef.nativeElement)) {
      this.elementSticky.emit(this.sticky);
    }
  }

}

