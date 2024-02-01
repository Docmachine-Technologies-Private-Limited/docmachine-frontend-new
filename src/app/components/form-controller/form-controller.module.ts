import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { StepTrackerIconsComponent } from './step-nav/step-tracker-icons.component';
import { ProgressionButtonsComponent } from './progression-buttons/progression-buttons.component';
import { FormControllerComponent } from './form/form.component';
import { FormControllerService } from './form/form.service';
import { UploadServiceValidatorService } from '../Upload/service/upload-service-validator.service';
import { SharedHomeModule } from '../../home/shared-home.module';

@NgModule({
  declarations: [
    StepTrackerIconsComponent,
    ProgressionButtonsComponent,
    FormControllerComponent,
  ],
  providers: [FormControllerService,UploadServiceValidatorService],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    SharedHomeModule
  ],
  exports: [
    MatSlideToggleModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    StepTrackerIconsComponent,
    ProgressionButtonsComponent,
    FormControllerComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class FormControllerModule { }
