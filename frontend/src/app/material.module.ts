import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatIconModule, MatInputModule, MatCardModule,
 } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ ],
  imports: [
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    // BrowserModule,
    // BrowserAnimationsModule,
    ],
  exports: [
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
  ],
})

export class MaterialModule {}
