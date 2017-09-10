import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ForgetPasswordRoutingModule } from './forget-password-routing.module';

import { MaterialModule } from '../shared/material.module';

import { ForgetPasswordComponent } from './forget-password.component';

@NgModule({
  imports: [
    CommonModule,
    ForgetPasswordRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    ForgetPasswordComponent
  ]
})
export class ForgetPasswordModule { }
