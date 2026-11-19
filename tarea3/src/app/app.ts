import { Component } from '@angular/core';

interface Producto {
  nombre: string;
  precio: number;
  disponible: boolean;
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  nombreTienda: string = 'Tienda de celulares UAB';
  encargado: string = 'Alex Calle Fernández';
  numeroSucursal: number = 1;
  tiendaAbierta: boolean = true;
  categorias: string[] = ['Smartphones', 'Fundas y Protectores', 'Cargadores y Audio','accesorios'];

  producto: Producto = {
    nombre: 'Samsung Galaxy S24 Ultra 256GB',
    precio: 8000,
    disponible: false
  };
}