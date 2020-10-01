import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FacturasService } from '../../../services/facturas/facturas.service';
import { MessageService } from 'primeng/api';
interface IDropdown {
  name: string;
  code: string;
}
@Component({
  selector: 'app-generar-recaudos',
  providers: [MessageService],
  templateUrl: './generar-recaudos.component.html',
  styleUrls: ['./generar-recaudos.component.css'],
})
export class GenerarRecaudosComponent implements OnInit {
  tipoRecaudo: IDropdown[] = [];
  tipoRecaudoSeleccionado: IDropdown;
  constructor(
    public facturasService: FacturasService,
    private messageService: MessageService
  ) {
    this.tipoRecaudo = [
      {
        name: 'Abono',
        code: 'Abono',
      },
      {
        name: 'PagoTotal',
        code: 'PagoTotal',
      },
      {
        name: 'Reembolso',
        code: 'Reembolso',
      },
    ];
  }

  ngOnInit(): void {}

  submitRecaudo(form: NgForm) {
    console.log('HOLA', form);
    if (
      form.value.numRecaudo &&
      form.value.numFactura &&
      form.value.numApertura &&
      form.value.fechaRecaudo &&
      form.value.horaRecaudo &&
      form.value.valorRecaudo &&
      form.value.estado
    ) {
      this.facturasService.facturas.map((factura) => {
        if (factura.consecutivos == form.value.numFactura) {
          factura.recaudos.push({
            numRecaudo: form.value.numRecaudo,
            numFactura: form.value.numFactura,
            numApertura: form.value.numApertura,
            fechaRecaudo: form.value.fechaRecaudo,
            horaRecaudo: form.value.horaRecaudo,
            valorRecaudo: form.value.valorRecaudo,
            tipoRecaudo: this.tipoRecaudoSeleccionado.name,
            estado: form.value.estado,
          });
        }
      });
      this.messageService.add({
        severity: 'info',
        summary: 'Product Selected',
        detail: 'se ha creado',
      });
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Falta campos por rellenar',
        detail: 'No se ha registrado el recaudo',
      });
    }
  }
}
