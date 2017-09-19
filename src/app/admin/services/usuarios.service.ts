import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { environment } from 'environments/environment';
import { Usuario } from 'app/models/usuario';




@Injectable()
export class UsuariosService {

  readonly apiUrl = environment.apiUrl + '/security/users';

  constructor(private http: HttpClient) { }

  list(term: string = '', filter:{ [key:string]: any; } = {}): Observable<Usuario[]> {
    let params = new HttpParams()
      .set('term', term);
    return this.http.get<Usuario[]>(this.apiUrl, {params: params});
  }

  save(user: Usuario) {
    return this.http.post(this.apiUrl, user);
  }

  update(user: Usuario) {
    return this.http.put(this.apiUrl+'/'+user.id, user);
  }

}

