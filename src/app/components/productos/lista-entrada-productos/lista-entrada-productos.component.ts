import { Component, OnInit } from '@angular/core';

import { ProductosService } from '../../../services/productos/productos.service';
import { PrimeNGConfig } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { IIngresoProductos } from 'src/app/interfaces/productos';

@Component({
  selector: 'app-lista-entrada-productos',
  templateUrl: './lista-entrada-productos.component.html',
  providers: [MessageService],
  styleUrls: ['./lista-entrada-productos.component.css'],
})
export class ListaEntradaProductosComponent implements OnInit {
  ingresoProductosClonados: { [s: string]: IIngresoProductos } = {};
  constructor(
    private messageService: MessageService,
    public productosService: ProductosService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit(): void {}
  onRowEditInit(ingresoProducto: IIngresoProductos) {
    this.ingresoProductosClonados[ingresoProducto.codigo] = {
      ...ingresoProducto,
    };
  }
  onRowEditSave(ingresoProducto: IIngresoProductos) {
    if (ingresoProducto.codigo) {
      delete this.ingresoProductosClonados[ingresoProducto.codigo];
      this.messageService.add({
        severity: 'success',
        summary: 'Exito',
        detail: 'Producto actualizado',
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Los campos no pueden estar vacios',
      });
    }
  }

  onRowEditCancel(ingresoProducto: IIngresoProductos, index: number) {
    this.productosService.ingresoProductos[
      index
    ] = this.ingresoProductosClonados[ingresoProducto.codigo];
  }
}
