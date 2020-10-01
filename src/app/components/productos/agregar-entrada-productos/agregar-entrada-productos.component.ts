import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../../services/productos/productos.service';

import { MessageService } from 'primeng/api';
interface IDropdown {
  name: string;
  code: string;
}
@Component({
  selector: 'app-agregar-entrada-productos',
  templateUrl: './agregar-entrada-productos.component.html',
  providers: [MessageService],
  styleUrls: ['./agregar-entrada-productos.component.css'],
})
export class AgregarEntradaProductosComponent implements OnInit {
  codigo: string;
  codigoProducto: string;
  fechaIngreso: Date;
  valorUnitario: number;
  cantidad: number;
  totalCompra: number;
  proveedor: string;
  estado: string;
  constructor(
    public productosService: ProductosService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {}

  agregarProducto(): void {
    if (this.codigoProducto && this.codigo) {
      const id = this.productosService.ingresoProductos.length.toString();
      this.productosService.ingresoProductos.push({
        id: id,
        codigo: this.codigo,
        codigoProducto: this.codigoProducto,
        fechaIngreso: this.fechaIngreso,
        valorUnitario: this.valorUnitario,
        cantidad: this.cantidad,
        totalCompra: this.totalCompra,
        proveedor: this.proveedor,
        estado: this.estado,
      });
      this.messageService.add({
        severity: 'success',
        summary: 'Exito',
        detail: 'Accesorio agregado',
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Los campos no pueden estar vacios',
      });
    }
  }
}
