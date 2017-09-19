import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { UsuariosService } from 'app/admin/services/usuarios.service';
import { Usuario } from 'app/models/usuario';


@Component({
  selector: 'sx-usuarios-page',
  templateUrl: './usuarios-page.component.html',
  styleUrls: ['./usuarios-page.component.scss']
})
export class UsuariosPageComponent implements OnInit {

  usuarios$: Observable<Usuario[]>;

  users: Array<Usuario>;
  filteredUsers: Array<Usuario>;

  constructor(
    private usuariosService: UsuariosService
  ) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.usuariosService.list().subscribe(users => {
      this.users = users;
    }, response => {
      console.error('Http error ', response);
    }, () => {
      console.log('Filtrando los usuarios...');
      this.filteredUsers = Object.assign([], this.users);
    });
  }

  filterUsers(displayName: string = ''): void {
    this.filteredUsers = this.users.filter((user: Usuario) => {
      return user.nombre.toLowerCase().indexOf(displayName.toLowerCase()) > -1;
    });
  }

}
