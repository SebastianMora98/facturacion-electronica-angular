import { Injectable } from '@angular/core';

import { IOrden } from '../../interfaces/orden';
import { ORDENES } from '../../mocks/mock-ordenes';

@Injectable({
  providedIn: 'root',
})
export class OrdenesService {
  ordenes: IOrden[];
  constructor() {
    this.ordenes = ORDENES;
  }
}
