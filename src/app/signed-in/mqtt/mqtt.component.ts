import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pi-mqtt',
  templateUrl: './mqtt.component.html',
  styleUrls: ['./mqtt.component.scss']
})
export class MqttComponent implements OnInit {
  messageForm: FormGroup;

  constructor(formbuilder: FormBuilder) {
    this.messageForm = formbuilder.group({
      'message': ['']
    });
  }

  messages = [];

  ngOnInit() {
  }

  publishMessage() {
    if (this.messageForm.value.message === null || this.messageForm.value.message === '') {
      return;
    }
    console.log( this.messageForm.value.message );
  }

}
