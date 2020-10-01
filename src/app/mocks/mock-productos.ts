import { IProductos, IIngresoProductos } from '../interfaces/productos';

export const PRODUCTOS: IProductos[] = [
  {
    id: '1',
    codigo: 'xs2001',
    nombre: 'Cargador de Pilas Maxuss',
    cantidadStock: 25,
    stockMinimo: 5,
    StockMaximo: 150,
  },
  {
    id: '2',
    codigo: 'xs2002',
    nombre: 'Cable UTP Cat5 x Metro',
    cantidadStock: 25,
    stockMinimo: 5,
    StockMaximo: 150,
  },
];

export const INGRESO_PRODUCTOS: IIngresoProductos[] = [
  {
    id: '1',
    codigo: '1',
    codigoProducto: 'xs2001',
    fechaIngreso: new Date('2020-09-30'),
    valorUnitario: 21000,
    cantidad: 100,
    totalCompra: 2100000,
    proveedor: '900054545-9',
    estado: 'Confirmado',
  },
  {
    id: '2',
    codigo: '2',
    codigoProducto: 'xs2002',
    fechaIngreso: new Date('2020-09-30'),
    valorUnitario: 10000,
    cantidad: 50,
    totalCompra: 500000,
    proveedor: '900054545-9',
    estado: 'Confirmado',
  },
  {
    id: '3',
    codigo: '3',
    codigoProducto: 'xs2002',
    fechaIngreso: new Date('2020-09-30'),
    valorUnitario: 10000,
    cantidad: 20,
    totalCompra: 200000,
    proveedor: '900054545-9',
    estado: 'Confirmado',
  },
];
