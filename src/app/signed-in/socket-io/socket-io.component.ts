import { Component, OnInit } from '@angular/core';
import * as io from '../../../../node_modules/socket.io-client/dist/socket.io.js';

@Component({
  selector: 'app-pi-socket-io',
  templateUrl: './socket-io.component.html',
  styleUrls: ['./socket-io.component.css']
})
export class SocketIoComponent implements OnInit {

  constructor() { }

  // socket = io.connect('http://localhost:3200');

  ngOnInit() {
    // this.socket.on('news', function (data) {
    //   console.log(data);
    //   this.socket.emit('my other event', { my: 'data' });
    // });
  }
}
