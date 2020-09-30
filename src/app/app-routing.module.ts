import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccesoriosComponent } from './pages/accesorios/accesorios.component';
import { AdministrarOrdenesComponent } from './pages/administrar-ordenes/administrar-ordenes.component';

const routes: Routes = [
  { path: 'accesorios', component: AccesoriosComponent },
  { path: 'administrar-ordenes', component: AdministrarOrdenesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
