import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignedInRoutingModule } from './signed-in-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestPageComponent } from './test-page/test-page.component';

@NgModule({
  imports: [
    CommonModule,
    SignedInRoutingModule
  ],
  declarations: [
    DashboardComponent,
    TestPageComponent
  ],
  exports: [
    DashboardComponent,
    TestPageComponent
  ]
})
export class SignedInModule { }
