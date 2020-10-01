import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../../services/productos/productos.service';
import { PrimeNGConfig } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { IProductos } from 'src/app/interfaces/productos';
@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  providers: [MessageService],
  styleUrls: ['./lista-productos.component.css'],
})
export class ListaProductosComponent implements OnInit {
  productosClonados: { [s: string]: IProductos } = {};
  constructor(
    private messageService: MessageService,
    public productosService: ProductosService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
  onRowEditInit(producto: IProductos) {
    this.productosClonados[producto.codigo] = { ...producto };
  }

  onRowEditSave(producto: IProductos) {
    if (producto.codigo && producto.nombre) {
      delete this.productosClonados[producto.codigo];
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

  onRowEditCancel(producto: IProductos, index: number) {
    this.productosService.productos[index] = this.productosClonados[
      producto.codigo
    ];
  }
}
