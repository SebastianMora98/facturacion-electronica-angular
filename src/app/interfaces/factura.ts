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
}

export interface IDetallesFactura {
  cantidad: number;
  codigoProducto?: string;
  descripcion: string;
}
