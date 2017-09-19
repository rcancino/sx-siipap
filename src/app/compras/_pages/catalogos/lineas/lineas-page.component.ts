import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { LineasService } from 'app/compras/services/lineas.service';
import { Linea } from 'app/models';

@Component({
  selector: 'sx-lineas-page',
  templateUrl: './lineas-page.component.html',
  styleUrls: ['./lineas-page.component.scss']
})
export class LineasPageComponent implements OnInit {

  lineas$: Observable<Linea[]>;
  
  selected: Linea = undefined;

  constructor(
    private lineasService: LineasService
  ) { }

  ngOnInit() {
    this.reload();
  }

  reload() {
    this.lineas$ = this.lineasService.list();
  }

  onSelection(linea: Linea) {
    console.log('Linea seleccionada...', linea);
    this.selected = linea;
  }

  onModificacionNombre(nuevoNombre: string) {
    const linea = Object.assign({},this.selected);
    linea.linea = nuevoNombre;
    this.lineasService
      .update(linea)
      .subscribe(
        linea => {
          console.log('Nombre modificado', linea);
          this.selected.linea = nuevoNombre;
          this.reload();
          
        }, 
        response => {
          console.log('Error al modificar el nombre de  la linea...');
        })
    
  }

}
