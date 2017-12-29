import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import * as io from 'socket.io-client/dist/socket.io.js';

@Injectable()
export class SocketIoService {

  constructor( private http: HttpClient ) { }

  private socket = io();

  getMessage( messageArr ) {
    this.socket.on('piconnect-socket-io', function (data) {
      messageArr.push( data );
    });
  }

  sendMessage( data ) {
    this.socket.emit('piconnect-socket-io', {
      message : data.message,
      name : localStorage.getItem( 'name' )
    });
  }

  getMqttMessage( messageArr ) {
    this.socket.on('piconnect-mqtt-test', function (data) {
      messageArr.push(data);
    });
  }

  publishMqttMessage( data ) {
    this.socket.emit('piconnect-mqtt-test', data);
  }

}
