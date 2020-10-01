import { Injectable } from '@angular/core';

import { ICliente } from '../../interfaces/clientes';
import { CLIENTES } from '../../mocks/mock-clientes';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  clientes: ICliente[];

  constructor() {
    this.clientes = CLIENTES;
  }

  obtenerCliente(cedula: string): ICliente {
    return this.clientes.find((cliente) => cliente.cedula == cedula);
  }
}
