import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import * as io from '../../../../node_modules/socket.io-client/dist/socket.io.js';

@Injectable()
export class SocketIoService {

  constructor( private http: HttpClient ) { }

  private socket = io();

  getMessage( messageArr ) {
    this.socket.on('piconnect-socket-io', function (data) {
      messageArr.push( data.message );
    });
  }

  sendMessage( data ) {
    this.socket.emit('piconnect-socket-io', { message : data.message });
  }

}
