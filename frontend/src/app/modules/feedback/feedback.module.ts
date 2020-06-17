import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackComponent } from './feedback.component';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FeedbackRoutingModule } from './feedback-routing.module';


@NgModule({
  declarations: [FeedbackComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FeedbackRoutingModule,
    MaterialModule,
  ]
})
export class FeedbackModule { }
