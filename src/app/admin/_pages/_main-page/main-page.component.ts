import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { TdLoadingService, TdDigitsPipe, TdMediaService } from '@covalent/core';

@Component({
  selector: 'sx-main-page',
  templateUrl: './main-page.component.html',
  styles: []
})
export class MainPageComponent implements OnInit, AfterViewInit {

  // Esta variable se puede colocar en el store relacionado con contabilidad ui
  navigation = [
    {path: '', nombre: 'Inicio', descripcion: 'Inicio del sistema', icon: 'home'},
    {path: 'home', nombre: 'Dashboard', descripcion: 'Dashboard', icon: 'dashboard'},
    {path: 'security', nombre: 'Seguridad', descripcion: 'Adminsitración de seguridad', icon: 'security'},
    {path: 'configuracion', nombre: 'Configuración', descripcion: 'Configuración general del sistema', icon: 'settings'},
    {path: 'procesos', nombre: 'Proccesos ', descripcion: 'Procesos programados', icon: 'storage'},
  ];

  constructor(
    public media: TdMediaService,
    private _titleService: Title,
  ) { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    this.media.broadcast();
    this._titleService.setTitle( 'SX-ADMI' );
  }

}
