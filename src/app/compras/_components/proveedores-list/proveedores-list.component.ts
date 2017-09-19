import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Proveedor } from 'app/models';

@Component({
  selector: 'sx-proveedores-list',
  templateUrl: './proveedores-list.component.html',
  styleUrls: ['./proveedores-list.component.scss']
})
export class ProveedoresListComponent implements OnInit {

  @Input() proveedores: Proveedor[] = [];

  @Output() selection = new EventEmitter<Proveedor>();

  selected: Proveedor = undefined;

  constructor() { }

  ngOnInit() {
  }

  select(proveedor: Proveedor) {
    this.selected = proveedor;
    this.selection.emit(proveedor);
  }

  isSelected(row: Proveedor) {
    return this.selected ? this.selected.id === row.id : false;
  }

}
