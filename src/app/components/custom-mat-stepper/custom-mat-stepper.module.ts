import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMatStepperComponent } from './custom-mat-stepper.component';
import { CustomMatStepperHeaderComponent } from './custom-mat-stepper-header/custom-mat-stepper-header.component';
import { CustomMatStepComponent } from './custom-mat-step/custom-mat-step.component';

@NgModule({
  declarations: [
    CustomMatStepperComponent,
    CustomMatStepperHeaderComponent,
    CustomMatStepComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CustomMatStepperComponent,
    CustomMatStepperHeaderComponent,
    CustomMatStepComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CustomMatStepperModule { }
