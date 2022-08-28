import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Medico } from '../models/medico';
import { MedicoService } from '../services/medico.service';

@Component({
  selector: 'app-nuevo-medico',
  templateUrl: './nuevo-medico.component.html',
  styleUrls: ['./nuevo-medico.component.css']
})
export class NuevoMedicoComponent implements OnInit {

  cedula: number = 0;
  nombre = '';
  celular = '';
  especialidad = '';

  constructor(
    private medicoService: MedicoService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const producto = new Medico(this.cedula, this.nombre, this.celular, this.especialidad);
    this.medicoService.save(producto).subscribe(
      data => {
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/medico']);
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }

  volver(): void {
    this.router.navigate(['/medico']);
  }

}
