import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css'],
})
export class MenubarComponent implements OnInit {
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Facturación',
      },
      {
        label: 'Recibos de Caja',
        items: [
          {
            label: 'Abrir Caja',
          },
          {
            label: 'Gestionar Recaudos',
            routerLink: '/gestionar-recaudos',
          },
          {
            label: 'Autorización Anular Pagos',
          },
          {
            label: 'Cerrar Caja',
          },

          {
            label: 'Maestro',
            items: [
              {
                label: 'Cajas',
              },
              { label: 'Formas de Pago' },
            ],
          },
        ],
      },
      {
        label: 'Ordenes de Servicio',
        items: [
          { label: 'Administrar Ordenes', routerLink: '/administrar-ordenes' },
          { label: 'Informes Técnicos' },
        ],
      },
      {
        label: 'Administración',
        items: [
          {
            label: 'Maestro',
            items: [
              { label: 'Accesorios', routerLink: '/accesorios' },
              { label: 'Marcas' },
              { label: 'Equipos' },
            ],
          },
          { label: 'Configuración' },
          { label: 'Clientes' },
          { label: 'Proveedores' },
          { label: 'Backup' },
          { label: 'Productos' },
        ],
      },
    ];
  }
}
