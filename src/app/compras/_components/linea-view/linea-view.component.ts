import { Component, OnInit, Input, ChangeDetectionStrategy, ViewContainerRef, Output, EventEmitter  } from '@angular/core';
import { TdDialogService } from '@covalent/core';
import { Linea } from 'app/models';

@Component({
  selector: 'sx-linea-view',
  templateUrl: './linea-view.component.html',
  styleUrls: ['./linea-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LineaViewComponent implements OnInit {

  @Input() linea: Linea
  @Output() modificacionNombre = new EventEmitter<string>();

  constructor(
    private _dialogService: TdDialogService,
    private _viewContainerRef: ViewContainerRef
  ){}

  ngOnInit() {
  }

  modificar() {
    this._dialogService.openPrompt({
      message: 'Modificar el nombre de la línea. Tenga en cuenta que esto puede afectar reportes de estadisitcas e informativos, es recomendable reclasificar las operaciones de los productos de esta linea',
      viewContainerRef: this._viewContainerRef, 
      title: 'Title', 
      value: this.linea.linea, 
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
