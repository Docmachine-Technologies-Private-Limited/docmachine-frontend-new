import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupRoutingModule } from './signup-routing.module';

import { SignupComponent } from './signup.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SignupComponent],
  imports: [CommonModule, SharedModule, SignupRoutingModule, ReactiveFormsModule]
})
export class SignupModule {}
