import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { environment } from 'environments/environment';
import { Proveedor } from 'app/models';


@Injectable()
export class ProveedoresService {

  readonly apiUrl = environment.apiUrl + '/proveedores';

  constructor(private http: HttpClient) { }

  list(term: string, filter:{ [key:string]: any; } = {}): Observable<Proveedor[]> {
    let params = new HttpParams()
      .set('term', term);
    return this.http.get<Proveedor[]>(this.apiUrl, {params: params});
  }

  save(proveedor: Proveedor) {
    return this.http.post(this.apiUrl, proveedor);
  }

  update(proveedor: Proveedor) {
    return this.http.put(this.apiUrl+'/'+proveedor.id, proveedor);
  }

}
