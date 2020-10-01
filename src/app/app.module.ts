import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//componentes
import { MenubarComponent } from './shared/menubar/menubar.component';
import { ListaAccesoriosComponent } from './components/accesorios/lista-accesorios/lista-accesorios.component';
import { AgregarAccesorioComponent } from './components/accesorios/agregar-accesorio/agregar-accesorio.component';
import { ListaFacturasComponent } from './components/facturas/lista-facturas/lista-facturas.component';
import { GestionarRecaudosComponent } from './pages/gestionar-recaudos/gestionar-recaudos.component';
import { DetallesFacturaComponent } from './components/facturas/detalles-factura/detalles-factura.component';
import { ListaRecaudosComponent } from './components/facturas/lista-recaudos/lista-recaudos.component';
//paginas
import { AccesoriosComponent } from './pages/accesorios/accesorios.component';
import { AdministrarOrdenesComponent } from './pages/administrar-ordenes/administrar-ordenes.component';

//primeng modules
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ListaClientesComponent } from './components/clientes/lista-clientes/lista-clientes.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import { DialogModule } from 'primeng/dialog';
import { GenerarRecaudosComponent } from './components/facturas/generar-recaudos/generar-recaudos.component';
import { ListaProductosComponent } from './components/productos/lista-productos/lista-productos.component';
import { AgregarProductosComponent } from './components/productos/agregar-productos/agregar-productos.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    AccesoriosComponent,
    ListaAccesoriosComponent,
    AgregarAccesorioComponent,
    AdministrarOrdenesComponent,
    ListaClientesComponent,
    ListaFacturasComponent,
    GestionarRecaudosComponent,
    DetallesFacturaComponent,
    ListaRecaudosComponent,
    GenerarRecaudosComponent,
    ListaProductosComponent,
    AgregarProductosComponent,
    HomeComponent,
    ProductosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    RippleModule,
    MenubarModule,
    TableModule,
    ToastModule,
    ButtonModule,
    InputTextModule,
    DynamicDialogModule,
    DropdownModule,
    InputTextareaModule,
    MultiSelectModule,
    CalendarModule,
    ConfirmDialogModule,
    MessagesModule,
    DialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
