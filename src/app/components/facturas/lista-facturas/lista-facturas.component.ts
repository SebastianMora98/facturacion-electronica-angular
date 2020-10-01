import { Component, OnInit } from '@angular/core';
import { FacturasService } from '../../../services/facturas/facturas.service';
import { IFactura } from '../../../interfaces/factura';

import { MessageService } from 'primeng/api';
export interface Country {
  name?: string;
  code?: string;
}

export interface Representative {
  name?: string;
  image?: string;
}

export interface Customer {
  id?: number;
  name?: string;
  country?: Country;
  company?: string;
  date?: string;
  status?: string;
  representative?: Representative;
}
@Component({
  selector: 'app-lista-facturas',
  templateUrl: './lista-facturas.component.html',
  providers: [MessageService],
  styleUrls: ['./lista-facturas.component.css'],
})
export class ListaFacturasComponent implements OnInit {
  facturaSeleccionada: IFactura;

  customers1: Customer[];
  selectedCustomer1: Customer;
  constructor(
    private messageService: MessageService,
    public facturaService: FacturasService
  ) {
    this.customers1 = [
      {
        id: 1000,
        name: 'James Butt',
        country: {
          name: 'Algeria',
          code: 'dz',
        },
        company: 'Benton, John B Jr',
        date: '2015-09-13',
        status: 'unqualified',

        representative: {
          name: 'Ioni Bowcher',
          image: 'ionibowcher.png',
        },
      },
      {
        id: 1001,
        name: 'Josephine Darakjy',
        country: {
          name: 'Egypt',
          code: 'eg',
        },
        company: 'Chanay, Jeffrey A Esq',
        date: '2019-02-09',
        status: 'proposal',

        representative: {
          name: 'Amy Elsner',
          image: 'amyelsner.png',
        },
      },
    ];
  }

  ngOnInit(): void {}
}
