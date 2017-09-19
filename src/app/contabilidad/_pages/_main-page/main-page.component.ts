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
    {path: 'home', nombre: 'Dashboard', descripcion: 'Contabilidad main sashboard', icon: 'dashboard'},
    {path: 'cuentas', nombre: 'Cuentas', descripcion: 'Catálogo de cuentas contables', icon: 'format_list_numbered'},
    {path: 'saldos', nombre: 'Saldos', descripcion: 'Saldos y movimientos de cuentas', icon: 'exposure'},
    {path: 'polizas', nombre: 'Pólizas', descripcion: 'Pólizas contables', icon: 'blur_linear'},
    {path: 'balanza', nombre: 'Balanza', descripcion: 'Balanza contables', icon: 'account_balance'},
    {path: 'sat', nombre: 'Electrónica', descripcion: 'Contabilidad electrónica del SAT ', icon: 'developer_board'},
    {path: 'reportes', nombre: 'Reportes', descripcion: 'Reportes y BI', icon: 'insert_chart'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
