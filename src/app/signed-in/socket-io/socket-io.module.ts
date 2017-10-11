import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocketIoRoutingModule } from './socket-io-routing.module';

import { SocketIoComponent } from './socket-io.component';

import { MaterialModule } from '../../shared/material.module';

@NgModule({
  imports: [
    CommonModule,
    SocketIoRoutingModule,
    MaterialModule
  ],
  declarations: [
    SocketIoComponent
  ]
})
export class SocketIoModule { }
