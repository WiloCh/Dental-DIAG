import { Component, OnInit } from '@angular/core';
import { Tratamiento } from '../models/tratamiento';
import { TratamientoService } from '../services/tratamiento.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-tratamiento',
  templateUrl: './lista-tratamiento.component.html',
  styleUrls: ['./lista-tratamiento.component.css']
})
export class ListaTratamientoComponent implements OnInit {

  tratamientos: Tratamiento[] = [];

  listaVacia = undefined;

  constructor(
    private tratamientoService: TratamientoService
    ) { }

  ngOnInit(): void {
    this.cargarTratamientos();
  }

  cargarTratamientos(): void {
    this.tratamientoService.lista().subscribe(
      data => {
        this.tratamientos = data;
        this.listaVacia = undefined;
      },
      err => {
        this.listaVacia = err.error.message;
      }
    );
  }

  borrar(id?: number): void {
    Swal.fire({
      title: '¿Esta seguros?',
      text: "no hay vuelta atras!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, elimínalo.'
    }).then((result) => {
      if (result.isConfirmed) {
        this.tratamientoService.delete(id!).subscribe(res => this.cargarTratamientos());
        Swal.fire(
          'Borrado',
          'El Tratamiento ha sido borrado.',
          'success'
        )
      }
    })
  }

}
