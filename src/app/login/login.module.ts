import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';

import { MaterialModule } from '../shared/material.module';

import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    MaterialModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
