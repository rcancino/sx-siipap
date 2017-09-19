import { Component, OnInit, Input, ChangeDetectionStrategy, ViewContainerRef, Output, EventEmitter  } from '@angular/core';
import { TdDialogService } from '@covalent/core';
import { Clase } from 'app/models';

@Component({
  selector: 'sx-clase-view',
  templateUrl: './clase-view.component.html',
  styleUrls: ['./clase-view.component.scss']
})
export class ClaseViewComponent implements OnInit {


  @Input() clase: Clase
  @Output() modificacionNombre = new EventEmitter<string>();

  constructor(
    private _dialogService: TdDialogService,
    private _viewContainerRef: ViewContainerRef
  ){}

  ngOnInit() {
  }

  modificar() {
    this._dialogService.openPrompt({
      message: 'Modificar el nombre de la clase. Tenga en cuenta que esto puede afectar reportes de estadisitcas e informativos, es recomendable reclasificar las operaciones de los productos de esta linea',
      viewContainerRef: this._viewContainerRef, 
      title: 'Cambio de nombre', 
      value: this.clase.clase, 
      cancelButton: 'Cancelar', 
      acceptButton: 'Aceptar',
    }).afterClosed().subscribe((newValue: string) => {
      if (newValue) {
        console.log('Actualizando nombre: ', newValue);
        this.modificacionNombre.emit(newValue);
      } else {
        console.log('Cancelando modificación');
      }
    });
  }

}

