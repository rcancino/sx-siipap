import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sx-compras-main-page',
  templateUrl: './compras-main-page.component.html',
  styleUrls: ['./compras-main-page.component.scss']
})
export class ComprasMainPageComponent implements OnInit {

  
  navigation: Object[] = [
    {path: 'ordenes', nombre: 'Compras', descripcion: 'Ordenes de compra', icon:  'store'},
    {path: 'alcance', nombre: 'Alcances', icon: 'repeat'},
    {path: 'recepciones', nombre: 'Recepciones', icon: 'flight_land'},
    {path: 'existencias', nombre: 'Existencias', icon: 'layers'},
    {path: 'dashboard', nombre: 'Tableros', icon: 'dashboard'},
    {path: 'catalogos', nombre: 'Catálogos', icon: 'view_quilt'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
