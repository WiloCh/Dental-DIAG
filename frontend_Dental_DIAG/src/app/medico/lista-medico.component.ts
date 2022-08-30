import { Component, OnInit } from '@angular/core';
import { Medico } from '../models/medico';
import { MedicoService } from '../services/medico.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-medico',
  templateUrl: './lista-medico.component.html',
  styleUrls: ['./lista-medico.component.css']
})
export class ListaMedicoComponent implements OnInit {

  medicos: Medico[] = [];

  listaVacia = undefined;

  constructor(
    private medicoService: MedicoService
    ) { }

  ngOnInit(): void {
    this.cargarMedicos();
  }

  cargarMedicos(): void {
    this.medicoService.lista().subscribe(
      data => {
        this.medicos = data;
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
        this.medicoService.delete(id!).subscribe(res => this.cargarMedicos());
        Swal.fire(
          'Borrado',
          'El Paciente ha sido borrado.',
          'success'
        )
      }
    })
  }

}
