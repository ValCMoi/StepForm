import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsModule } from 'primeng/steps';
import { StepFormComponent } from './step-form/step-form.component';
import { ChildStepFormComponent } from './child-step-form/child-step-form.component';

@NgModule({
  declarations:[
    StepFormComponent,
    ChildStepFormComponent
  ],
  imports: [
    CommonModule,
    StepsModule
  ],
  exports:[
    StepFormComponent
  ]
})
export class StepFormModule { }
