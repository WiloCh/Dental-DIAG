import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Tratamiento } from '../models/tratamiento';
import { TratamientoService } from '../services/tratamiento.service';

@Component({
  selector: 'app-editar-tratamiento',
  templateUrl: './editar-tratamiento.component.html',
  styleUrls: ['./editar-tratamiento.component.css']
})
export class EditarTratamientoComponent implements OnInit {

  tratamiento!: Tratamiento;

  constructor(
    private tratamientoService: TratamientoService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.tratamientoService.detail(id).subscribe(
      data => {
        this.tratamiento = data;
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/tratamiento']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.tratamientoService.update(id, this.tratamiento).subscribe(
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
