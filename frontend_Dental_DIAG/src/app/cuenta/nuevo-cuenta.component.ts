import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cuenta } from '../models/cuenta';
import { CuentaService } from '../services/cuenta.service';

@Component({
  selector: 'app-nuevo-cuenta',
  templateUrl: './nuevo-cuenta.component.html',
  styleUrls: ['./nuevo-cuenta.component.css']
})
export class NuevoCuentaComponent implements OnInit {

  descripcion = '';
  paciente: number = 0;
  tratamiento: number = 0;

  constructor(
    private cuentaService: CuentaService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const producto = new Cuenta(this.descripcion, this.paciente, this.tratamiento);
    this.cuentaService.save(producto).subscribe(
      data => {
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/cuenta']);
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }

  volver(): void {
    this.router.navigate(['/cuenta']);
  }

}
