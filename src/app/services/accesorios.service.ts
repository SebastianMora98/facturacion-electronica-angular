import { Injectable } from '@angular/core';

import { IAccesorio } from '../interfaces/accesorio';
import { ACCESORIOS } from '../mock-accesorios';

@Injectable({
  providedIn: 'root',
})
export class AccesoriosService {
  accesorios: IAccesorio[];

  constructor() {
    this.accesorios = ACCESORIOS;
  }
}
