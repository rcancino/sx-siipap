import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { environment } from 'environments/environment';
import { Marca } from 'app/models';




@Injectable()
export class MarcasService {

  readonly apiUrl = environment.apiUrl + '/marcas';

  constructor(private http: HttpClient) { }

  list(): Observable<Marca[]> {
    return this.http.get<Marca[]>(this.apiUrl)
      .shareReplay();
  }

  save(marca: Marca) {
    return this.http.post(this.apiUrl, marca);
  }

  update(marca: Marca) {
    return this.http.put(this.apiUrl+'/'+ marca.id, marca);
  }

}
