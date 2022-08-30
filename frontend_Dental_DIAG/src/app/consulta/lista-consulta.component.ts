import { Component, OnInit } from '@angular/core';
import { Consulta } from '../models/consulta';
import { ConsultaService } from '../services/consulta.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-consulta',
  templateUrl: './lista-consulta.component.html',
  styleUrls: ['./lista-consulta.component.css']
})
export class ListaConsultaComponent implements OnInit {

  consultas: Consulta[] = [];

  listaVacia = undefined;

  constructor(
    private consultaService: ConsultaService
    ) { }

  ngOnInit(): void {
    this.cargarConsultas();
  }

  cargarConsultas(): void {
    this.consultaService.lista().subscribe(
      data => {
        this.consultas = data;
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
        this.consultaService.delete(id!).subscribe(res => this.cargarConsultas());
        Swal.fire(
          'Borrado',
          'El Consulta ha sido borrado.',
          'success'
        )
      }
    })
  }

}
