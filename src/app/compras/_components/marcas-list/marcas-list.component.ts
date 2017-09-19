import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Marca } from 'app/models';

@Component({
  selector: 'sx-marcas-list',
  templateUrl: './marcas-list.component.html',
  styleUrls: ['./marcas-list.component.scss']
})
export class MarcasListComponent implements OnInit {

  @Input() marcas: Marca[];
  
    selected: Marca;
  
    @Output() selection = new EventEmitter<Marca>();
  
    constructor() { }
  
    ngOnInit() {
    }
  
    select(marca: Marca) {
      this.selected = marca;
      this.selection.emit(marca);
    }
  
    isSelected(row: Marca) {
      return this.selected ? this.selected.id === row.id : false;
    }
  

}
