import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sx-proveedor-view',
  templateUrl: './proveedor-view.component.html',
  styleUrls: ['./proveedor-view.component.scss']
})
export class ProveedorViewComponent implements OnInit {

  @Input() proveedor = undefined;

  constructor() { }

  ngOnInit() {
  }

}
