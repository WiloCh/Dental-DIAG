import { Component, OnInit } from '@angular/core';
import { Medico } from '../models/medico';
import { MedicoService } from '../services/medico.service';

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
    this.cargarProductos();
  }

  cargarProductos(): void {
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

  borrar(cedula: number): void {
    console.log('borrar');
  }

}
