import { Injectable } from '@angular/core';

import { IProductos } from '../../interfaces/productos';
import { PRODUCTOS } from '../../mocks/mock-productos';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  productos: IProductos[];

  constructor() {
    this.productos = PRODUCTOS;
  }
}
