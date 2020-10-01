import { Injectable } from '@angular/core';

import { IFactura } from '../../interfaces/factura';
import { FACTURAS } from '../../mocks/mock-facturas';

@Injectable({
  providedIn: 'root',
})
export class FacturasService {
  facturas: IFactura[];
  facturaSeleccionada: IFactura;
  constructor() {
    this.facturas = FACTURAS;
  }
}
