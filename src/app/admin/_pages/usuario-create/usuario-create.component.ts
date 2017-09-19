import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from 'app/models/usuario';
import { UsuariosService } from 'app/admin/services/usuarios.service';


@Component({
  selector: 'sx-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {

  constructor(
    private usuarioService: UsuariosService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSave(usuario: Usuario){
    console.log('Salvando usuario: ', usuario);
    this.usuarioService
    .save(usuario)
    .subscribe(res => {
      this.router.navigate(['/admin/security/usuarios']);
    }, response => {
      console.log('Error salvando usuario ', usuario);
    })
  }

  

}
