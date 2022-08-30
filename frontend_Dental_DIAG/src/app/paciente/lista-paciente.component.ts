import { Component, OnInit } from '@angular/core';
import { Paciente } from '../models/paciente';
import { PacienteService } from '../services/paciente.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-paciente',
  templateUrl: './lista-paciente.component.html',
  styleUrls: ['./lista-paciente.component.css']
})
export class ListaPacienteComponent implements OnInit {

  pacientes: Paciente[] = [];

  listaVacia = undefined;

  constructor(
    private pacienteService: PacienteService
    ) { }

  ngOnInit(): void {
    this.cargarPacientes();
  }

  cargarPacientes(): void {
    this.pacienteService.lista().subscribe(
      data => {
        this.pacientes = data;
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
        this.pacienteService.delete(id!).subscribe(res => this.cargarPacientes());
        Swal.fire(
          'Borrado',
          'El Paciente ha sido borrado.',
          'success'
        )
      }
    })
  }

}
