import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

import { Producto } from 'app/models';
import { ProductoService } from 'app/productos/services';



@Component({
  selector: 'sx-producto-edit',
  templateUrl: './producto-edit.component.html',
  styleUrls: ['./producto-edit.component.scss']
})
export class ProductoEditComponent implements OnInit {

  producto$: Observable<Producto>;

  loading = false;

  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.producto$ = this.route.paramMap
      .map( params => params.get('id'))
      .switchMap( id => this.productoService.get(id))
  }

  onSave(producto: Producto) {
    // console.log('Salvando producto...', producto);
    this.loading = true;
    this.productoService
      .update(producto)
      .subscribe( result => {
        console.log('Producto salvado OK ', result);
        this.loading = false;
      }, response => {
        console.log('Error actualizando producto', response);
        this.loading = false;
      });
  }

}
