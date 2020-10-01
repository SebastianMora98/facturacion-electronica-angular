import { Component, OnInit } from '@angular/core';
import { FacturasService } from '../../../services/facturas/facturas.service';
import { ConfirmationService, Message } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-lista-facturas',
  templateUrl: './lista-facturas.component.html',
  providers: [MessageService, ConfirmationService],
  styleUrls: ['./lista-facturas.component.css'],
})
export class ListaFacturasComponent implements OnInit {
  msgs: Message[] = [];
  display: boolean = false;

  constructor(
    private messageService: MessageService,
    public facturaService: FacturasService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {}

  generarRecaudo() {
    console.log(this.facturaService.facturaSeleccionada);
    this.display = true;
  }

  anularFactura() {
    this.confirmationService.confirm({
      message: 'Esta seguro de anular esta factura?',
      header: 'Confirmacion de anulacion de factura',
      icon: 'pi pi-info-circle',
      accept: () => {
        if (this.facturaService.facturas.length == 1) {
          this.facturaService.facturas = [];
          this.facturaService.facturaSeleccionada = null;
        } else {
          const id = this.facturaService.facturaSeleccionada.id;
          const facturas = this.facturaService.facturas.filter(
            (factura) => factura.id == id
          );
          this.facturaService.facturas = facturas;
          this.facturaService.facturaSeleccionada = null;
        }
        this.msgs = [
          {
            severity: 'info',
            summary: 'Confimación',
            detail: 'Factura eliminada',
          },
        ];
      },
      reject: () => {
        this.msgs = [
          {
            severity: 'info',
            summary: 'Cancelado',
            detail: 'Se ha cancelado la operación',
          },
        ];
      },
    });
  }

  inprimirFactura() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.msgs = [
          {
            severity: 'info',
            summary: 'Confirmed',
            detail: 'You have accepted',
          },
        ];
      },
      reject: () => {
        this.msgs = [
          {
            severity: 'info',
            summary: 'Rejected',
            detail: 'You have rejected',
          },
        ];
      },
    });
  }
}
