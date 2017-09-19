import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { 
  ComprasMainPageComponent,
  OrdenesPageComponent,
  OrdenesCreatePageComponent,
  ComprasMainDashboardComponent,
  CatalogosPageComponent,
  LineasPageComponent,
  MarcasPageComponent,
  ClasesPageComponent,
  ProductosPageComponent,
  ProveedoresPageComponent,
  ProductoEditComponent,
 } from "./_pages";


const routes: Routes = [
  {
    path: '',
    component: ComprasMainPageComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: "full"},
      { path: 'dashboard', component: ComprasMainDashboardComponent},
      { path: 'ordenes', component: OrdenesPageComponent},
      { path: 'ordenes/create', component: OrdenesCreatePageComponent},
      { 
        path: 'catalogos',
        component: CatalogosPageComponent,
        children: [
          {path: 'lineas', component: LineasPageComponent},
          {path: 'marcas', component: MarcasPageComponent},
          {path: 'clases', component: ClasesPageComponent},
          {path: 'productos', component: ProductosPageComponent},
          {path: 'productos/edit/:id', component: ProductoEditComponent},
          {path: 'proveedores', component: ProveedoresPageComponent}
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComprasRoutingModule { }
