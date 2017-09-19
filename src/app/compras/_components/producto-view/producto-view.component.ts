import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sx-producto-view',
  templateUrl: './producto-view.component.html',
  styleUrls: ['./producto-view.component.scss']
})
export class ProductoViewComponent implements OnInit {

  @Input() producto = undefined;

  constructor() { }

  ngOnInit() {
  }

}
