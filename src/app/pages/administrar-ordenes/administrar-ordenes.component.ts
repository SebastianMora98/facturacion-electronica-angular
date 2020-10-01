import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ListaClientesComponent } from 'src/app/components/clientes/lista-clientes/lista-clientes.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { ICliente } from 'src/app/interfaces/clientes';
import { AccesoriosService } from '../../services/accesorios.service';
import { OrdenesService } from '../../services/ordenes.service';
import { IOrden } from 'src/app/interfaces/orden';

interface IDropdown {
  name: string;
  code: string;
}
interface Message {
  severity: string;
  summary: string;
  detail: string;
}
@Component({
  selector: 'app-administrar-ordenes',
  templateUrl: './administrar-ordenes.component.html',
  providers: [DialogService, MessageService, ConfirmationService],
  styleUrls: ['./administrar-ordenes.component.css'],
})
export class AdministrarOrdenesComponent implements OnInit {
  accesorios: IDropdown[] = [];
  estado: IDropdown[] = [];
  accesorioSeleccionado: IDropdown[];
  estadoSeleccionado: IDropdown[];
  fecha: Date = new Date();
  orden: String;
  msgs: Message[] = [];

  position: string;

  constructor(
    public dialogService: DialogService,
    public messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    private confirmationService: ConfirmationService,
    private accesoriosService: AccesoriosService,
    private ordenesService: OrdenesService
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
    this.orden = ordenesService.ordenes.length.toString();
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
  nuevo(form: NgForm) {
    this.accesorioSeleccionado = [];
    this.estadoSeleccionado = [];
    form.reset();
  }
  cambiarOrden(form: NgForm) {
    this.confirmationService.confirm({
      message:
        'Esta seguro que quiere cambiar el numero de orden?, perdera todos los cambios que haya realizado.',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        let encontro: boolean = false;
        let ordenEncontrada: IOrden;
        this.ordenesService.ordenes.map((orden) => {
          if (orden.numOrden == form.value.cambiarOrden.toString()) {
            encontro = true;
            ordenEncontrada = orden;
          }
        });

        if (encontro) {
          form.controls['cedula'].setValue(ordenEncontrada.cedula);
          form.controls['nombre'].setValue(ordenEncontrada.nombre);
          form.controls['direccion'].setValue(ordenEncontrada.direccion);
          form.controls['equipo'].setValue(ordenEncontrada.equipo);
          form.controls['marca'].setValue(ordenEncontrada.marca);
          form.controls['modelo'].setValue(ordenEncontrada.modelo);
          form.controls['placa'].setValue(ordenEncontrada.placa);
          form.controls['serie'].setValue(ordenEncontrada.serie);
          form.controls['tecnico'].setValue(ordenEncontrada.tecnico);
          form.controls['averias'].setValue(ordenEncontrada.averias);
          this.estadoSeleccionado = ordenEncontrada.estadoSeleccionado;
          this.accesorioSeleccionado = ordenEncontrada.accesorioSeleccionado;
          this.msgs = [
            {
              severity: 'info',
              summary: 'Confirmed',
              detail: 'You have accepted',
            },
          ];
          this.orden = form.value.cambiarOrden;
        } else {
          this.msgs = [
            {
              severity: 'warn',
              summary: 'No se encontro el numero de orden',
              detail: 'Este numero de orden esta disponible',
            },
          ];
          this.orden = form.value.cambiarOrden;
          form.reset();
        }
      },
      reject: () => {
        this.msgs = [
          {
            severity: 'info',
            summary: 'Rejected',
            detail: 'You have rejected',
          },
        ];
      },
    });
  }
  guardar(form: NgForm) {
    let encontro: boolean = false;
    let indice: number;
    this.ordenesService.ordenes.map((orden, i) => {
      if (orden.numOrden == this.orden.toString()) {
        encontro = true;
        indice = i;
      }
    });
    if (encontro) {
      this.ordenesService.ordenes[indice].cedula = form.value.cedula;
      this.ordenesService.ordenes[indice].nombre = form.value.nombres;
      this.ordenesService.ordenes[indice].direccion = form.value.direccion;
      this.ordenesService.ordenes[indice].equipo = form.value.equipo;
      this.ordenesService.ordenes[indice].marca = form.value.marca;
      this.ordenesService.ordenes[indice].modelo = form.value.modelo;
      this.ordenesService.ordenes[indice].placa = form.value.placa;
      this.ordenesService.ordenes[indice].serie = form.value.serie;
      this.ordenesService.ordenes[indice].tecnico = form.value.tecnico;
      this.ordenesService.ordenes[indice].averias = form.value.averias;
    } else {
      this.ordenesService.ordenes.push({
        fecha: new Date(),
        accesorioSeleccionado: this.accesorioSeleccionado,
        estadoSeleccionado: this.estadoSeleccionado,
        averias: form.value.averias,
        cedula: form.value.cedula,
        direccion: form.value.direccion,
        equipo: form.value.equipo,
        informe: '',
        marca: form.value.marca,
        modelo: form.value.modelo,
        nombre: form.value.nombres,
        numOrden: this.orden.toString(),
        placa: form.value.placa,
        serie: form.value.serie,
        tecnico: form.value.tecnico,
      });
    }
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
