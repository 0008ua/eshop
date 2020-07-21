import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatIconModule, MatInputModule, MatCardModule, MatProgressBarModule,
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
    MatProgressBarModule,
    // BrowserModule,
    // BrowserAnimationsModule,
    ],
  exports: [
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatProgressBarModule,
  ],
})

export class MaterialModule {}
