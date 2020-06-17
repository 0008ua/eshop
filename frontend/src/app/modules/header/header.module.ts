import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { ScrollNavComponent } from './scroll-nav/scroll-nav.component';



@NgModule({
  declarations: [HeaderComponent, MainNavComponent, ScrollNavComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent],
})
export class HeaderModule { }
