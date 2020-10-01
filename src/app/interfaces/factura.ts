export interface IFactura {
  id: number;
  consecutivos: string;
  estado: string;
  fechaExpedicion: Date;
  subTotal: number;
  valorIva: number;
  valorRecaudo: number;
  cedula: string;
  nombres: string;
  detalles?: IDetallesFactura[];
  recaudos?: IRecaudos[];
}

export interface IDetallesFactura {
  cantidad: number;
  codigoProducto?: string;
  descripcion: string;
}

export interface IRecaudos {
  numRecaudo: string;
  numFactura: string;
  numApertura: string;
  fechaRecaudo: Date;
  horaRecaudo: string;
  valorRecaudo: number;
  tipoRecaudo: string;
  estado: string;
}
