import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Linea } from 'app/models';

@Component({
  selector: 'sx-lineas-list',
  templateUrl: './lineas-list.component.html',
  styleUrls: ['./lineas-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LineasListComponent implements OnInit {

  @Input() lineas: Linea[];

  selected: Linea;

  @Output() selection = new EventEmitter<Linea>();

  constructor() { }

  ngOnInit() {
  }

  select(linea: Linea) {
    this.selected = linea;
    this.selection.emit(linea);
  }

  isSelected(row: Linea) {
    return this.selected ? this.selected.id === row.id : false;
  }

}
