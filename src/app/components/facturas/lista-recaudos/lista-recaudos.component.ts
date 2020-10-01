import { Component, OnInit } from '@angular/core';
import { FacturasService } from '../../../services/facturas/facturas.service';

@Component({
  selector: 'app-lista-recaudos',
  templateUrl: './lista-recaudos.component.html',
  styleUrls: ['./lista-recaudos.component.css'],
})
export class ListaRecaudosComponent implements OnInit {
  constructor(public facturaService: FacturasService) {}

  ngOnInit(): void {}
}
