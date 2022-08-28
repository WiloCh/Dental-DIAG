import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Tratamiento } from '../models/tratamiento';
import { TratamientoService } from '../services/tratamiento.service';

@Component({
  selector: 'app-nuevo-tratamiento',
  templateUrl: './nuevo-tratamiento.component.html',
  styleUrls: ['./nuevo-tratamiento.component.css']
})
export class NuevoTratamientoComponent implements OnInit {

  nombre = '';

  constructor(
    private tratamientoService: TratamientoService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const tratamiento = new Tratamiento(this.nombre);
    this.tratamientoService.save(tratamiento).subscribe(
      data => {
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/tratamiento']);
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

  volver(): void {
    this.router.navigate(['/tratamiento']);
  }

}
