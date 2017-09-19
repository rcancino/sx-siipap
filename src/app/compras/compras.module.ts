import { NgModule } from '@angular/core';

import { ComprasRoutingModule } from './compras-routing.module';
import { SharedModule } from "../shared/shared.module";
import * as pages from './_pages';
import * as components from './_components';

import { OrdenAddPartidaComponent } from './_components/orden-add-partida/orden-add-partida.component';
import { ProveedorFieldComponent } from './_components/proveedor-field/proveedor-field.component';
import { OrdenesService } from "./services/ordenes.service";
import { OrdenPartidasListComponent } from './_components/orden-partidas-list/orden-partidas-list.component';
import { OrdenesListComponent } from './_components/ordenes-list/ordenes-list.component';

import { LineasService } from './services/lineas.service';
import { MarcasService } from './services/marcas.service';
import { ClasesService } from './services/clases.service';
import { ProveedoresService } from './services/proveedores.service';

const PAGES = [
  pages.ComprasMainPageComponent,
  pages.OrdenesPageComponent,
  pages.OrdenesCreatePageComponent,
  pages.ComprasMainDashboardComponent,
  pages.CatalogosPageComponent,
  pages.LineasPageComponent,
  pages.MarcasPageComponent,
  pages.ClasesPageComponent,
  pages.ProductosPageComponent,
  pages.ProveedoresPageComponent,
  pages.ProductoEditComponent,
];

const COMPONENTS = [
  OrdenAddPartidaComponent, 
  ProveedorFieldComponent, 
  OrdenPartidasListComponent, 
  OrdenesListComponent,
  components.LineasListComponent,
  components.LineaViewComponent,
  components.MarcasListComponent,
  components.MarcaViewComponent,
  components.ClasesListComponent,
  components.ClaseViewComponent,
  components.ProductosListComponent,
  components.ProductoViewComponent,
  components.ProductoFormComponent,
  components.ProveedoresListComponent,
  components.ProveedorViewComponent,
];

@NgModule({
  imports: [
    SharedModule,
    ComprasRoutingModule,
  ],
  declarations: [
    ...PAGES,
    ...COMPONENTS
  ],
  providers: [OrdenesService, LineasService, MarcasService, ClasesService, ProveedoresService]
})
export class ComprasModule { }
