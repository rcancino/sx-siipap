import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Proveedor } from 'app/models';
import { ProveedoresService } from 'app/compras/services/proveedores.service';

@Component({
  selector: 'sx-proveedores-page',
  templateUrl: './proveedores-page.component.html',
  styleUrls: ['./proveedores-page.component.scss']
})
export class ProveedoresPageComponent implements OnInit {

  selected: Proveedor

  proveedores$: Observable<Proveedor[]>;

  search$ = new BehaviorSubject(null);

  constructor(
    private proveedoresService: ProveedoresService
  ) { }

  ngOnInit() {
    this.proveedores$ = this.search$
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => {
        if( term === null || term.length<= 0)
          return Observable.of([]);
        return this.proveedoresService.list(term)
      });
  }

  search(term: string ){
    this.search$.next(term);
  }

  onSelection(proveedor: Proveedor){
    this.selected = proveedor;
  }

}

