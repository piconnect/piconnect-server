import { Component, OnInit } from '@angular/core';
import * as io from '../../../../node_modules/socket.io-client/dist/socket.io.js';

@Component({
  selector: 'app-pi-socket-io',
  templateUrl: './socket-io.component.html',
  styleUrls: ['./socket-io.component.css']
})
export class SocketIoComponent implements OnInit {

  constructor() { }

  private socket = io.connect('/');
  messages = [];

  ngOnInit() {
    this.socket.on('piconnect-socket-io', function (data) {
      this.messages.push(data);
      // this.emit('my other event', { my: 'data' });
    });
  }

  checkMessage() {
    this.socket.on('piconnect-socket-io', function (data) {
      this.messages.push(data);
      // this.emit('my other event', { my: 'data' });
    });
  }
}
