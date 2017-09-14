import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SignedInRoutingModule } from './signed-in-routing.module';

import { MaterialModule } from '../shared/material.module';

import { SignedInComponent } from './signed-in.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    SignedInRoutingModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    SignedInComponent,
    HeaderComponent,
    SidebarComponent
  ]
})
export class SignedInModule { }
