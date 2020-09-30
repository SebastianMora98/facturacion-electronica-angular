import { Component, OnInit } from '@angular/core';
import { ListaClientesComponent } from 'src/app/components/clientes/lista-clientes/lista-clientes.component';
import { DialogService } from 'primeng/dynamicdialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { ICliente } from 'src/app/interfaces/clientes';
import { PrimeNGConfig } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import { IAccesorio } from '../../interfaces/accesorio';
import { AccesoriosService } from '../../services/accesorios.service';
import { AccesoriosComponent } from '../accesorios/accesorios.component';
import { NgForm } from '@angular/forms';
interface IDropdown {
  name: string;
  code: string;
}
@Component({
  selector: 'app-administrar-ordenes',
  templateUrl: './administrar-ordenes.component.html',
  providers: [DialogService, MessageService],
  styleUrls: ['./administrar-ordenes.component.css'],
})
export class AdministrarOrdenesComponent implements OnInit {
  accesorios: IDropdown[] = [];
  estado: IDropdown[] = [];
  accesorioSeleccionado: IDropdown[];
  estadoSeleccionado: IDropdown[];
  fecha: Date = new Date();

  constructor(
    public dialogService: DialogService,
    public messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    private accesoriosService: AccesoriosService
  ) {
    this.accesoriosService.accesorios.map(({ nombre, codigo }) => {
      this.accesorios.push({ name: nombre, code: codigo });
    });
    this.estado = [
      {
        name: 'Abierto',
        code: 'Abierto',
      },
      {
        name: 'Cerrado',
        code: 'Cerrado',
      },
    ];
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  ref: DynamicDialogRef;
  clienteSelected: ICliente = null;

  show(form: NgForm) {
    this.ref = this.dialogService.open(ListaClientesComponent, {
      header: 'Buscar cliente',
      width: '70%',
      contentStyle: { 'max-height': '500px', overflow: 'auto' },
      baseZIndex: 10000,
    });

    this.ref.onClose.subscribe((cliente: ICliente) => {
      if (cliente) {
        form.controls['cedula'].setValue(cliente.cedula);
        form.controls['nombre'].setValue(cliente.nombres);

        this.messageService.add({
          severity: 'info',
          summary: 'Cliente seleccionado',
          detail: `Cliente con cedula ${cliente.cedula} seleccionado`,
        });
      }
    });
  }

  rellenar(form: NgForm) {
    form.controls['cedula'].setValue('1057548324');
    form.controls['nombre'].setValue('Holman');
    form.controls['direccion'].setValue('Calle 1');
    form.controls['equipo'].setValue('Ordenador portatil');
    form.controls['marca'].setValue('Lenovo');
    form.controls['modelo'].setValue('s340');
    form.controls['placa'].setValue('2');
    form.controls['serie'].setValue('14iwl');
    form.controls['tecnico'].setValue('Walter');
    form.controls['averias'].setValue(
      'Enciende pero se apaga despues del logo del bios'
    );
  }

  submitOrden(form: NgForm) {
    console.log(form);
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }
}
