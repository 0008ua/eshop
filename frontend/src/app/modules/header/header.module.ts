import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { ScrollNavComponent } from './scroll-nav/scroll-nav.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [HeaderComponent, MainNavComponent, ScrollNavComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,

  ],
  exports: [HeaderComponent],
})
export class HeaderModule { }
