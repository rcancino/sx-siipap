import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Producto } from 'app/models';
import { ProductoService } from 'app/productos/services';

@Component({
  selector: 'sx-productos-page',
  templateUrl: './productos-page.component.html',
  styleUrls: ['./productos-page.component.scss']
})
export class ProductosPageComponent implements OnInit {

  selected: Producto

  productos$: Observable<Producto[]>;

  search$ = new BehaviorSubject(null);

  constructor(
    private productosService: ProductoService
  ) { }

  ngOnInit() {
    this.productos$ = this.search$
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => {
        if( term === null || term.length<= 0)
          return Observable.of([]);
        return this.productosService.list(term)
      });
    
    
  }

  search(term: string ){
    this.search$.next(term);
  }

  onSelection(producto: Producto){
    this.selected = producto;
  }

}
