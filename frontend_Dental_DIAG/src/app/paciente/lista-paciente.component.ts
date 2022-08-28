import { Component, OnInit } from '@angular/core';
import { Paciente } from '../models/paciente';
import { PacienteService } from '../services/paciente.service';

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
    this.cargarProductos();
  }

  cargarProductos(): void {
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

  borrar(cedula: number): void {
    console.log('borrar');
  }

}
