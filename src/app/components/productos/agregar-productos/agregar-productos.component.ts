import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../../services/productos/productos.service';

import { MessageService } from 'primeng/api';
interface IDropdown {
  name: string;
  code: string;
}
export interface IProductos {
  id: number;
  codigo: string;
  nombre: string;
  cantidadStock: number;
  stockMinimo: number;
  StockMaximo: number;
}

@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.component.html',
  providers: [MessageService],
  styleUrls: ['./agregar-productos.component.css'],
})
export class AgregarProductosComponent implements OnInit {
  codigo: string;
  nombre: string;
  cantidadStock: number;
  stockMinimo: number;
  StockMaximo: number;

  iva: IDropdown[] = [];
  ivaSeleccionado: IDropdown[];
  constructor(
    private messageService: MessageService,
    public productosService: ProductosService
  ) {
    this.iva = [
      {
        name: 'Seleccionar Impuesto',
        code: 'Seleccionar Impuesto',
      },
      {
        name: 'iva 19%',
        code: 'iva 19%',
      },
      {
        name: 'iva 16%',
        code: 'iva 16%',
      },
    ];
  }

  ngOnInit(): void {}

  agregarProducto(): void {
    if (this.nombre && this.cantidadStock) {
      const id = this.productosService.productos.length.toString();
      this.productosService.productos.push({
        id: id,
        codigo: this.codigo,
        nombre: this.nombre,
        cantidadStock: this.cantidadStock,
        stockMinimo: this.stockMinimo,
        StockMaximo: this.StockMaximo,
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
