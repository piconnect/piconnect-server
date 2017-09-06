import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SignedInRoutingModule } from './signed-in-routing.module';

import { SignedInComponent } from './signed-in.component';

@NgModule({
  imports: [
    CommonModule,
    SignedInRoutingModule,
    FormsModule
  ],
  declarations: [
    SignedInComponent
  ]
})
export class SignedInModule { }
