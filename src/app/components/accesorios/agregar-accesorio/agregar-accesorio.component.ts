import { Component, OnInit } from '@angular/core';
import { AccesoriosService } from '../../../services/accesorios/accesorios.service';

import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-agregar-accesorio',
  templateUrl: './agregar-accesorio.component.html',
  providers: [MessageService],
  styleUrls: ['./agregar-accesorio.component.css'],
})
export class AgregarAccesorioComponent implements OnInit {
  nombre: string;
  descripcion: string;
  constructor(
    private messageService: MessageService,
    public accesorioService: AccesoriosService
  ) {}

  ngOnInit(): void {}

  agregarAccesorio(): void {
    if (this.nombre && this.descripcion) {
      const id = this.accesorioService.accesorios.length.toString();
      this.accesorioService.accesorios.push({
        codigo: id,
        nombre: this.nombre,
        descripcion: this.descripcion,
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
