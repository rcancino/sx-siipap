import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ClientesRoutingModule } from './clientes-routing.module';
import { 
  MainPageComponent, MainDashboardComponent } from './_pages';


@NgModule({
  imports: [
    SharedModule,
    ClientesRoutingModule
  ],
  declarations: [
    MainPageComponent, 
    MainDashboardComponent]
})
export class ClientesModule { }
