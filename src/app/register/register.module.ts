import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RegisterRoutingModule } from './register-routing.module';

import { MaterialModule } from '../shared/material.module';

import { RegisterComponent } from './register.component';

@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    RegisterComponent
  ]
})
export class RegisterModule { }
