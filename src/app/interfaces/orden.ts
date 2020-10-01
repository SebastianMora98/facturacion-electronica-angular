export interface IOrden {
  fecha: Date;
  accesorioSeleccionado: IDropdown[];
  estadoSeleccionado: IDropdown[];
  averias: string;
  cedula: string;
  direccion: string;
  equipo: string;
  informe: string;
  marca: string;
  modelo: string;
  nombre: string;
  numOrden: string;
  placa: string;
  serie: string;
  tecnico: string;
}
interface IDropdown {
  name: string;
  code: string;
}
