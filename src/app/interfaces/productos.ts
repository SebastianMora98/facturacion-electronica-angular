export interface IProductos {
  id: string;
  codigo: string;
  nombre: string;
  cantidadStock: number;
  stockMinimo: number;
  StockMaximo: number;
}

export interface IIngresoProductos {
  id: string;
  codigo: string;
  codigoProducto: string;
  fechaIngreso: Date;
  valorUnitario: number;
  cantidad: number;
  totalCompra: number;
  proveedor: string;
  estado: string;
}
