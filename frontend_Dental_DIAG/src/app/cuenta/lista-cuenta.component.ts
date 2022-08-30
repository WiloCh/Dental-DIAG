import { Component, OnInit } from '@angular/core';
import { Cuenta } from '../models/cuenta';
import { CuentaService } from '../services/cuenta.service';

import Swal from 'sweetalert2';
import { Paciente } from '../models/paciente';
import { PacienteService } from '../services/paciente.service';

@Component({
  selector: 'app-lista-cuenta',
  templateUrl: './lista-cuenta.component.html',
  styleUrls: ['./lista-cuenta.component.css']
})
export class ListaCuentaComponent implements OnInit {

  cuentas: Cuenta[] = [];
  pacientes: Paciente[] = [];

  listaVacia = undefined;

  constructor(
    private cuentaService: CuentaService,
    private pacienteService: PacienteService
    ) { }

  ngOnInit(): void {
    this.cargarCuentas();
    this.cargarPacientes();
  }

  cargarCuentas(): void {
    this.cuentaService.lista().subscribe(
      data => {
        this.cuentas = data;
        this.listaVacia = undefined;
      },
      err => {
        this.listaVacia = err.error.message;
      }
    );
  }

  cargarPacientes(): void {
    this.pacienteService.lista().subscribe(
      data => {
        this.pacientes = data;
        this.listaVacia = undefined;
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
        this.cuentaService.delete(id!).subscribe(res => this.cargarCuentas());
        Swal.fire(
          'Borrado',
          'El Cuenta ha sido borrado.',
          'success'
        )
      }
    })
  }

}
