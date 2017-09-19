import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { environment } from 'environments/environment';
import { Clase } from 'app/models';




@Injectable()
export class ClasesService {

  readonly apiUrl = environment.apiUrl + '/clases';

  constructor(private http: HttpClient) { }

  list(): Observable<Clase[]> {
    return this.http.get<Clase[]>(this.apiUrl)
      .shareReplay();
  }

  save(clase: Clase) {
    return this.http.post(this.apiUrl, clase);
  }

  update(clase: Clase) {
    return this.http.put(this.apiUrl+'/'+ clase.id, clase);
  }

}
