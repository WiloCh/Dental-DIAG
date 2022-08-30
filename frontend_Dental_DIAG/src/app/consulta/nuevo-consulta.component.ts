import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Consulta } from '../models/consulta';
import { ConsultaService } from '../services/consulta.service';

@Component({
  selector: 'app-nuevo-consulta',
  templateUrl: './nuevo-consulta.component.html',
  styleUrls: ['./nuevo-consulta.component.css']
})
export class NuevoConsultaComponent implements OnInit {

  fecha!: Date;
  motivo = '';
  paciente: number = 0;
  medico: number = 0;

  constructor(
    private consultaService: ConsultaService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const producto = new Consulta(this.fecha, this.motivo, this.medico, this.paciente);
    this.consultaService.save(producto).subscribe(
      data => {
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/consulta']);
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }

  volver(): void {
    this.router.navigate(['/consulta']);
  }

}
