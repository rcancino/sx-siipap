import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Producto } from 'app/models';

@Component({
  selector: 'sx-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductosListComponent implements OnInit {

  @Input() productos: Producto[] = [];

  @Output() selection = new EventEmitter<Producto>();

  selected: Producto = undefined;

  constructor() { }

  ngOnInit() {
  }

  select(producto: Producto) {
    this.selected = producto;
    this.selection.emit(producto);
  }

  isSelected(row: Producto) {
    return this.selected ? this.selected.id === row.id : false;
  }

}
