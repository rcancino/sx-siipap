import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Socket } from 'ng-socket-io';

import { environment } from "../../../../environments/environment";
import { Cliente } from "../../../models";



@Component({
  selector: 'sx-clientes',
  templateUrl: './clientes.component.html',
  styles: []
})
export class ClientesComponent implements OnInit {

  readonly url = environment.apiUrl + '/clientes';

  tarjeta;

  searchStream = new BehaviorSubject<string>('');

  clientes$: Observable<Cliente[]>;

  constructor(
    private socket: Socket,
    private http: HttpClient
  ) { }


  ngOnInit() {
    /*
    this.socket.fromEvent('rfid')
    .subscribe(value => {
      console.log('RFID: ', value);
      this.tarjeta = value;
    });
    */
    this.clientes$ = this.searchStream
    .debounceTime(500)
    .distinctUntilChanged()
    .filter( value=> value.length>0)
    .switchMap( term => {
      return this.http.get<Cliente[]>(this.url, {params: this.getParams(term)})
    });
    
  }

  private getParams(term){
    const params = new HttpParams()
    .set('max', '10')
    .set('sort', 'lastUpdated')
    .set('order', 'desc')
    .set('term', term);
    return params
  }

  onSearch(term: string) {
    this.searchStream.next(term);
  }

}
