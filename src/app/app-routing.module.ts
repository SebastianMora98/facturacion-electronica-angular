import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccesoriosComponent } from './pages/accesorios/accesorios.component';
import { AdministrarOrdenesComponent } from './pages/administrar-ordenes/administrar-ordenes.component';
import { GestionarRecaudosComponent } from './pages/gestionar-recaudos/gestionar-recaudos.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { EntradaProductosComponent } from './pages/entrada-productos/entrada-productos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'accesorios', component: AccesoriosComponent },
  { path: 'administrar-ordenes', component: AdministrarOrdenesComponent },
  { path: 'gestionar-recaudos', component: GestionarRecaudosComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'entrada-productos', component: EntradaProductosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
