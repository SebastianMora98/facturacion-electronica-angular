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
@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    AccesoriosComponent,
    ListaAccesoriosComponent,
    AgregarAccesorioComponent,
    AdministrarOrdenesComponent,
    ListaClientesComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
