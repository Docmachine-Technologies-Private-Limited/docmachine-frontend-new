import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SigninRoutingModule } from './signin-routing.module';

import { SigninComponent } from './signin.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SigninComponent],
  imports: [CommonModule, SharedModule, SigninRoutingModule, ReactiveFormsModule]
})
export class SigninModule {}
