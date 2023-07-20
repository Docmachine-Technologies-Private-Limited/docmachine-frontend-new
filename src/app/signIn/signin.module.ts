import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin.component';
import { SharedModule } from '../shared/shared.module';
import {TwoFactorAuthComponent} from "../shared/components/two-factor-auth";
import { SharedHomeModule } from '../home/shared-home.module';

@NgModule({
  declarations: [SigninComponent, TwoFactorAuthComponent],
  imports: [CommonModule, SharedModule, SigninRoutingModule, ReactiveFormsModule,SharedHomeModule]
})
export class SigninModule {}
