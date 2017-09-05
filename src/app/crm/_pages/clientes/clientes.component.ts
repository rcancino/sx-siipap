import { Component, OnInit } from '@angular/core';
import { Socket } from 'ng-socket-io';

@Component({
  selector: 'sx-clientes',
  templateUrl: './clientes.component.html',
  styles: []
})
export class ClientesComponent implements OnInit {

  tarjeta;

  constructor(private socket: Socket) { }


  ngOnInit() {
    this.socket.fromEvent('rfid')
    .subscribe(value => {
      console.log('RFID: ', value);
      this.tarjeta = value;
    });
  }

}
