import { Injectable } from '@angular/core';

import { IProductos, IIngresoProductos } from '../../interfaces/productos';
import { PRODUCTOS, INGRESO_PRODUCTOS } from '../../mocks/mock-productos';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  productos: IProductos[];
  ingresoProductos: IIngresoProductos[];
  constructor() {
    this.productos = PRODUCTOS;
    this.ingresoProductos = INGRESO_PRODUCTOS;
  }
}
