import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ResetPasswordRoutingModule } from './reset-password-routing.module';

import { MaterialModule } from '../shared/material.module';

import { ResetPasswordComponent } from './reset-password.component';

@NgModule({
  imports: [
    CommonModule,
    ResetPasswordRoutingModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    ResetPasswordComponent
  ]
})
export class ResetPasswordModule { }
