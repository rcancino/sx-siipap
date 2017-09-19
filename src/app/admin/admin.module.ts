import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import * as pages from './_pages';
import * as components from './components';
import { UsuariosService } from 'app/admin/services/usuarios.service';

const PAGES = [
  pages.MainPageComponent,
  pages.MainDashboardComponent,
  pages.SecurityPageComponent,
  pages.UsuariosPageComponent,
  pages.UsuarioCreateComponent,
  pages.RolesPageComponent,
];

const COMPONENTS = [
  components.UsuarioCreateFormComponent
];

@NgModule({
  imports: [
    SharedModule,
    AdminRoutingModule
  ],
  declarations: [
    ...PAGES,
    ...COMPONENTS
  ],
  providers: [UsuariosService]
})
export class AdminModule { }
