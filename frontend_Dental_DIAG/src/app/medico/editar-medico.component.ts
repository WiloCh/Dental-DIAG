import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Medico } from '../models/medico';
import { MedicoService } from '../services/medico.service';

@Component({
  selector: 'app-editar-medico',
  templateUrl: './editar-medico.component.html',
  styleUrls: ['./editar-medico.component.css']
})
export class EditarMedicoComponent implements OnInit {

  medico!: Medico;

  constructor(
    private medicoService: MedicoService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const cedula = this.activatedRoute.snapshot.params['cedula'];
    this.medicoService.detail(cedula).subscribe(
      data => {
        this.medico = data;
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/medico']);
      }
    );
  }

  onUpdate(): void {
    const cedula = this.activatedRoute.snapshot.params['cedula'];
    this.medicoService.update(cedula, this.medico).subscribe(
      data => {
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/medico']);
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

  volver(): void {
    this.router.navigate(['/medico']);
  }

}
