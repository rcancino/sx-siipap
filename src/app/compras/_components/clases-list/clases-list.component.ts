import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Clase } from 'app/models';

@Component({
  selector: 'sx-clases-list',
  templateUrl: './clases-list.component.html',
  styleUrls: ['./clases-list.component.scss']
})
export class ClasesListComponent implements OnInit {

  @Input() clases: Clase[];

  selected: Clase;

  @Output() selection = new EventEmitter<Clase>();

  constructor() { }

  ngOnInit() {
  }

  select(clase: Clase) {
    this.selected = clase;
    this.selection.emit(clase);
  }

  isSelected(row: Clase) {
    return this.selected ? this.selected.id === row.id : false;
  }

}

