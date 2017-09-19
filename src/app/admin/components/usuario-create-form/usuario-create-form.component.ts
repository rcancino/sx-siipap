import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { Usuario } from 'app/models/usuario';
import { Observable } from 'rxjs/Observable';

export function passwordValdator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const password = control.parent.controls['password'].value;
    const valid = password === control.value
    console.log('Validando password');
    return valid ? {'confirmPassword': {value: control.value}} : null;
  };
}

@Component({
  selector: 'sx-usuario-create-form',
  templateUrl: './usuario-create-form.component.html',
  styleUrls: ['./usuario-create-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsuarioCreateFormComponent implements OnInit {

  @Output() save = new EventEmitter<Usuario>();
  
  form: FormGroup;
  nombre$: Observable<string>;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.buildForm();
    
    this.nombre$ = Observable.combineLatest(
      this.form.get('apellidoPaterno').valueChanges,
      this.form.get('apellidoMaterno').valueChanges,
      this.form.get('nombres').valueChanges,
      (ap,am,n) => { return `${ap} ${am} ${n}`;} 
    ).startWith(''); 
  }

  buildForm(){
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      apellidoPaterno: ['', [Validators.required, Validators.minLength(3)]],
      apellidoMaterno: ['', [Validators.required, Validators.minLength(3)]],
      nombres: ['', [Validators.required, Validators.minLength(3)]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required, passwordValdator]]
    });
  }

  onSave() {
    if( this.form.valid) {
      const user = this.prepareUsuario();
      this.save.emit(user);
    }
  }

  prepareUsuario() {
    const user = this.form.getRawValue();
    user.nombre = user.apellidoPaterno; // To fix server validation... temporal
    return user;
  }

  cancel() {
    history.back();
  }
  
  reset() {
    this.form.reset();
  }

}
