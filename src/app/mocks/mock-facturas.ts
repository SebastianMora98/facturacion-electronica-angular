import { IFactura } from '../interfaces/factura';

export const FACTURAS: IFactura[] = [
  {
    id: 1,
    consecutivos: '2290',
    estado: 'A',
    fechaExpedicion: new Date('2020-09-30'),
    subTotal: 25000,
    valorIva: 4000,
    valorRecaudo: 0,
    cedula: '800315845-5',
    nombres: 'INSTITUCION EDUCATIVA POLITECNICO',
    detalles: [
      {
        cantidad: 1,
        codigoProducto: '',
        descripcion: 'Caterias AAA',
      },
      {
        cantidad: 2,
        codigoProducto: '',
        descripcion: 'Cable fuente de alimentacion',
      },
    ],
    recaudos: [
      {
        numRecaudo: '0',
        numFactura: '2290',
        numApertura: '31',
        fechaRecaudo: new Date('2020-09-30'),
        horaRecaudo: '00:44',
        valorRecaudo: 0,
        tipoRecaudo: 'Abono',
        estado: 'A',
      },
    ],
  },
  {
    id: 2,
    consecutivos: '2291',
    estado: 'P',
    fechaExpedicion: new Date('2020-09-30'),
    subTotal: 2125000,
    valorIva: 0,
    valorRecaudo: 2125000,
    cedula: '805003737-9',
    nombres: 'UNIVERSIDAD PEDAGÓGICA Y TECNOLÓGICA DE COLOMBIA',
    detalles: [
      {
        cantidad: 3,
        codigoProducto: '',
        descripcion: 'Bateria Portatil Acer',
      },
    ],
    recaudos: [],
  },
];
