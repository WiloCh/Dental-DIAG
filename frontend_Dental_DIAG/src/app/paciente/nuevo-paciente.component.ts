import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Paciente } from '../models/paciente';
import { PacienteService } from '../services/paciente.service';

@Component({
  selector: 'app-nuevo-paciente',
  templateUrl: './nuevo-paciente.component.html',
  styleUrls: ['./nuevo-paciente.component.css']
})
export class NuevoPacienteComponent implements OnInit {

  cedula: number = 0;
  nombre = '';
  edad: number = 0;
  sexo = '';
  celular = '';
  correo = '';

  constructor(
    private pacienteService: PacienteService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const producto = new Paciente(this.cedula, this.nombre, this.edad, this.sexo, this.celular, this.correo);
    this.pacienteService.save(producto).subscribe(
      data => {
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/paciente']);
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }

  volver(): void {
    this.router.navigate(['/paciente']);
  }

}
