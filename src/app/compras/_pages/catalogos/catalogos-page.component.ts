import { Component, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TdMediaService } from '@covalent/core';

@Component({
  selector: 'sx-catalogos-page',
  templateUrl: './catalogos-page.component.html',
  styleUrls: ['./catalogos-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogosPageComponent implements AfterViewInit {

  navigation: Object[] = [
    {route: 'lineas', title: 'Lineas', descripcion: '', icon:  'blur_linear'},
    {route: 'marcas', title: 'Marcas', icon: 'gamepad'},
    {route: 'clases', title: 'Clases', icon: 'view_list'},
    {route: 'productos', title: 'Productos', icon: 'layers'},
    {route: 'proveedores', title: 'Proveedores', icon: 'people'},
  ];

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    public media: TdMediaService
  ) {}

  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    this.media.broadcast();
    this._changeDetectorRef.detectChanges();
  }

}
