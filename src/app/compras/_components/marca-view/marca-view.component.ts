import { Component, OnInit, Input, ChangeDetectionStrategy, ViewContainerRef, Output, EventEmitter  } from '@angular/core';
import { TdDialogService } from '@covalent/core';
import { Marca } from 'app/models';

@Component({
  selector: 'sx-marca-view',
  templateUrl: './marca-view.component.html',
  styleUrls: ['./marca-view.component.scss']
})
export class MarcaViewComponent implements OnInit {

  @Input() marca: Marca
  @Output() modificacionNombre = new EventEmitter<string>();

  constructor(
    private _dialogService: TdDialogService,
    private _viewContainerRef: ViewContainerRef
  ){}

  ngOnInit() {
  }

  modificar() {
    this._dialogService.openPrompt({
      message: 'Modificar el nombre de la marca. Tenga en cuenta que esto puede afectar reportes de estadisitcas e informativos, es recomendable reclasificar las operaciones de los productos de esta linea',
      viewContainerRef: this._viewContainerRef, 
      title: 'Title', 
      value: this.marca.marca, 
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

