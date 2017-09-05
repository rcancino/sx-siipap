import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CrmRoutingModule } from './crm-routing.module';
import { 
  MainPageComponent, 
  MainDashboardComponent,
  ClientesComponent } from './_pages';

@NgModule({
  imports: [
    SharedModule,
    CrmRoutingModule
  ],
  declarations: [
    MainPageComponent, 
    MainDashboardComponent, 
    ClientesComponent]
})
export class CrmModule { }
