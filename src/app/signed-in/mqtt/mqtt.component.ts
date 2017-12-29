import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { SocketIoService } from '../../core/socket-io/socket-io.service';

@Component({
  selector: 'app-pi-mqtt',
  templateUrl: './mqtt.component.html',
  styleUrls: ['./mqtt.component.scss']
})
export class MqttComponent implements OnInit {
  messageForm: FormGroup;

  constructor( formbuilder: FormBuilder, private socketService: SocketIoService ) {
    this.messageForm = formbuilder.group({
      'message': ['']
    });
  }

  messages = [];

  ngOnInit() {
    this.socketService.getMqttMessage(this.messages);
  }

  publishMessage() {
    if (this.messageForm.value.message === null || this.messageForm.value.message === '') {
      return;
    }
    this.socketService.publishMqttMessage(this.messageForm.value.message);
    this.messageForm.reset();
  }

}
