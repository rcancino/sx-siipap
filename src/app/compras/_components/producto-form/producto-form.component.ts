import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { TdLoadingService } from '@covalent/core';

import { Producto } from 'app/models';

@Component({
  selector: 'sx-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductoFormComponent implements OnInit, OnChanges {

  form: FormGroup;

  @Input() producto: Producto
  

  @Output() save = new EventEmitter<Producto>();
  
  constructor(
    private fb: FormBuilder,
    private _loadingService: TdLoadingService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes detected: ', changes);
    if(changes.producto && changes.producto.currentValue){
      const prod = changes.producto.currentValue;
      console.log('Producto: ', prod);
      this.form.patchValue(prod);
      if( prod.id){
        this.form.get('clave').disable();
      }
    }
  }

  @Input() set loading(value: boolean) {
    if(value) {
      this._loadingService.register('asyncCall');
    } else {
      this._loadingService.resolve('asyncCall');
    }
  }

  buildForm() {
    this.form = this.fb.group({
      clave: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(15)]],
      descripcion: [null, [Validators.required, Validators.minLength(15), Validators.maxLength(255)]],
      comentario: [null, [Validators.required, Validators.minLength(15), Validators.maxLength(255)]]
    })
  }

  onSubmit() {
    const producto = this.prepareProducto();
    //this.form.reset(this.form.getRawValue);
    this.save.emit(producto);
  }

  private prepareProducto() {
    if(this.producto && this.producto.id) {
      const result = Object.assign({}, this.producto)
      return {
        ...result,
        ...this.form.getRawValue()
      }
    } else {
      return Object.assign({}, this.form.getRawValue());
    }
    
  }

}
