import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sx-main-page',
  templateUrl: './main-page.component.html',
  styles: []
})
export class MainPageComponent implements OnInit {

  // Esta variable se puede colocar en el store relacionado con contabilidad ui
  navigation = [
    {path: '', nombre: 'Inicio', descripcion: 'Inicio del sistema', icon: 'home'},
    {path: 'home', nombre: 'Dashboard', descripcion: 'Tesorería dashboard', icon: 'dashboard'},
    {path: 'cuentas', nombre: 'Cuentas bancarias', descripcion: 'Cuentas bancarias', icon: 'account_balance_wallet'},
    {path: 'saldos', nombre: 'Saldos', descripcion: 'Saldos y movimientos de cuentas', icon: ''},
    {path: 'pagos', nombre: 'Pagos', descripcion: '', icon: ''},
    {path: 'cobros', nombre: 'Cobros', descripcion: '', icon: ''},
    {path: 'cheques', nombre: 'Cheques', descripcion: 'Mantenimiento de chequeras', icon: ''},
    {path: 'comisiones', nombre: 'Comisiones', descripcion: 'Administración de comisiones bancarias', icon: ''},
    {path: 'inversiones', nombre: 'Inversiones', descripcion: 'Administración de inversiones bancarias', icon: ''},
    {path: 'reportes', nombre: 'Reportes', descripcion: 'Reportes y BI', icon: 'insert_chart'},
  ];

  constructor() { }

  ngOnInit() {
    console.log('Inicializando tesoreria main dashboard....')
  }

}
