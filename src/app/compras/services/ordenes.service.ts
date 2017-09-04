import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Compra } from '../../models/compra';
import { environment} from '../../../environments/environment';

@Injectable()
export class OrdenesService {

  readonly apiUrl = environment.apiUrl + '/compras';

  constructor(private http: HttpClient) { }

  save(compra: Compra) {
    compra.folio = 0;
    return this.http.post(this.apiUrl, compra);
  }

}
