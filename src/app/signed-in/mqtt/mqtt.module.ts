import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MqttRoutingModule } from './mqtt-routing.module';

import { MqttComponent } from './mqtt.component';

import { MaterialModule } from '../../shared/material.module';

@NgModule({
  imports: [
    CommonModule,
    MqttRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    MqttComponent
  ]
})
export class MqttModule { }
