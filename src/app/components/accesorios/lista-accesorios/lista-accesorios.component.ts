import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { IAccesorio } from '../../../interfaces/accesorio';
import { AccesoriosService } from '../../../services/accesorios/accesorios.service';

import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-lista-accesorios',
  templateUrl: './lista-accesorios.component.html',
  providers: [MessageService],
  styleUrls: ['./lista-accesorios.component.css'],
})
export class ListaAccesoriosComponent implements OnInit {
  accesoriosClonados: { [s: string]: IAccesorio } = {};
  constructor(
    private messageService: MessageService,
    public accesorioService: AccesoriosService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  onRowEditInit(accesorio: IAccesorio) {
    this.accesoriosClonados[accesorio.codigo] = { ...accesorio };
  }

  onRowEditSave(accesorio: IAccesorio) {
    if (accesorio.codigo && accesorio.nombre && accesorio.descripcion) {
      delete this.accesoriosClonados[accesorio.codigo];
      this.messageService.add({
        severity: 'success',
        summary: 'Exito',
        detail: 'Accesorio actualizado',
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Los campos no pueden estar vacios',
      });
    }
  }

  onRowEditCancel(accesorio: IAccesorio, index: number) {
    this.accesorioService.accesorios[index] = this.accesoriosClonados[
      accesorio.codigo
    ];
  }
}
