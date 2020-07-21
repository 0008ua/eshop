import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { ScrollNavComponent } from './scroll-nav/scroll-nav.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { SubNavComponent } from './sub-nav/sub-nav.component';
import { DirectivesModule } from 'src/app/directives/directives.module';



@NgModule({
  declarations: [HeaderComponent, MainNavComponent, ScrollNavComponent, SubNavComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    DirectivesModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule { }
