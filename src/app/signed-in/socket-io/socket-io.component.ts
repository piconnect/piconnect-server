import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { SocketIoService } from '../../core/socket-io/socket-io.service';

@Component({
  selector: 'app-pi-socket-io',
  templateUrl: './socket-io.component.html',
  styleUrls: ['./socket-io.component.css']
})
export class SocketIoComponent implements OnInit {
  messageForm: FormGroup;

  constructor( formbuilder: FormBuilder, private socketService: SocketIoService  ) {
    this.messageForm = formbuilder.group({
      'message': [ '', Validators.required ]
    });
  }

  messages = [];

  ngOnInit() {
    this.socketService.getMessage( this.messages );
  }

  sendMessage() {
    if ( this.messageForm.status === 'INVALID' ) {
      return;
    }
    this.socketService.sendMessage( this.messageForm.value );
    this.messageForm.reset();
  }
}
