import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { 
  MainPageComponent,
  MainDashboardComponent,
  SecurityPageComponent,
  UsuariosPageComponent,
  UsuarioCreateComponent,
  RolesPageComponent,
} from './_pages';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: MainDashboardComponent
      },
      {
        path: 'security',
        component: SecurityPageComponent,
        children: [
          { path: '', redirectTo: 'usuarios', pathMatch: 'full'},
          { path: 'usuarios', component: UsuariosPageComponent},
          { path: 'usuario/create', component: UsuarioCreateComponent},
          { path: 'rols', component: RolesPageComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
