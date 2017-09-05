import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SignedInRoutingModule } from './signed-in-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SignedInRoutingModule,
    FormsModule
  ],
  declarations: []
})
export class SignedInModule { }
