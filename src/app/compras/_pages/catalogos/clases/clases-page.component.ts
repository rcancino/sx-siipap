import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ClasesService } from 'app/compras/services/clases.service';
import { Clase } from 'app/models';

@Component({
  selector: 'sx-clases-page',
  templateUrl: './clases-page.component.html',
  styleUrls: ['./clases-page.component.scss']
})
export class ClasesPageComponent implements OnInit {

  clases$: Observable<Clase[]>;
  
  selected: Clase = undefined;

  constructor(
    private clasesService: ClasesService
  ) { }

  ngOnInit() {
    this.reload();
  }

  reload() {
    this.clases$ = this.clasesService.list();
  }

  onSelection(clase: Clase) {
    this.selected = clase;
  }

  onModificacionNombre(nuevoNombre: string) {
    const clase = Object.assign({},this.selected);
    clase.clase = nuevoNombre;
    this.clasesService
      .update(clase)
      .subscribe(
        clase => {
          console.log('Nombre modificado', clase);
          this.selected.clase = nuevoNombre;
          this.reload();
          
        }, 
        response => {
          console.log('Error al modificar el nombre de  la clase...');
        })
    
  }

}
