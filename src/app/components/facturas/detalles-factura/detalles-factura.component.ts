import { Component, OnInit } from '@angular/core';

import { FacturasService } from '../../../services/facturas/facturas.service';
@Component({
  selector: 'app-detalles-factura',
  templateUrl: './detalles-factura.component.html',

  styleUrls: ['./detalles-factura.component.css'],
})
export class DetallesFacturaComponent implements OnInit {
  constructor(public facturaService: FacturasService) {}

  ngOnInit(): void {}
}
