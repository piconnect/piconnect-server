import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SocketIoRoutingModule } from './socket-io-routing.module';

import { SocketIoComponent } from './socket-io.component';

import { MaterialModule } from '../../shared/material.module';

@NgModule({
  imports: [
    CommonModule,
    SocketIoRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    SocketIoComponent
  ]
})
export class SocketIoModule { }
