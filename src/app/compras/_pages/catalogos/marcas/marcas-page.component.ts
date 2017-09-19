import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MarcasService } from 'app/compras/services/marcas.service';
import { Marca } from 'app/models';

@Component({
  selector: 'sx-marcas-page',
  templateUrl: './marcas-page.component.html',
  styleUrls: ['./marcas-page.component.scss']
})
export class MarcasPageComponent implements OnInit {

  marcas$: Observable<Marca[]>;
  
  selected: Marca = undefined;

  constructor(
    private marcasService: MarcasService
  ) { }

  ngOnInit() {
    this.reload();
  }

  reload() {
    this.marcas$ = this.marcasService.list();
  }

  onSelection(marca: Marca) {
    this.selected = marca;
  }

  onModificacionNombre(nuevoNombre: string) {
    const marca = Object.assign({},this.selected);
    marca.marca = nuevoNombre;
    this.marcasService
      .update(marca)
      .subscribe(
        marca => {
          console.log('Nombre modificado',  marca);
          this.selected.marca = nuevoNombre;
          this.reload();
          
        }, 
        response => {
          console.log('Error al modificar el nombre de  la marca...');
        })
    
  }

}
