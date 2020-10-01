import { Component, OnInit } from '@angular/core';
import { ICliente } from '../../../interfaces/clientes';
import { ClientesService } from '../../../services/clientes/clientes.service';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css'],
})
export class ListaClientesComponent implements OnInit {
  clientes: ICliente[];
  constructor(
    private clientesService: ClientesService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}

  ngOnInit(): void {
    this.clientes = this.clientesService.clientes;
  }

  seleccionarCliente(cliente: ICliente) {
    this.ref.close(cliente);
  }
}
