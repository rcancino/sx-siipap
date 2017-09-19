import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { environment } from 'environments/environment';
import { Linea } from 'app/models';




@Injectable()
export class LineasService {

  readonly apiUrl = environment.apiUrl + '/lineas';

  constructor(private http: HttpClient) { }

  list(): Observable<Linea[]> {
    return this.http.get<Linea[]>(this.apiUrl)
      .shareReplay();
  }

  save(linea: Linea) {
    return this.http.post(this.apiUrl, linea);
  }

  update(linea: Linea) {
    return this.http.put(this.apiUrl+'/'+linea.id, linea);
  }

}
