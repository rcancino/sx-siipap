import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import { environment } from "environments/environment";
import { Producto } from "app/models";

@Injectable()
export class ProductoService {

  readonly apiUrl = environment.apiUrl + '/productos';

  constructor(
    private http: HttpClient
  ) { }

  list(term: string, filter:{ [key:string]: any; } = {}): Observable<Producto[]> {
    
    let params = new HttpParams()
      .set('term', term);
    if (filter.activos === true) {
      params = params.set('activos','activos')
    } if( filter.deLinea === true) {
      params = params.set('deLinea','deLinea')  
    }
    return this.http.get<Producto[]>(this.apiUrl, {params: params});
  }

  get(id: string): Observable<Producto> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Producto>(url)
  }

  update( producto: Producto) {
    const url = `${this.apiUrl}/${producto.id}`;
    return this.http.put(url, producto);
  }
}


