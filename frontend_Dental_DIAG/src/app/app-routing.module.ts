import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarConsultaComponent } from './consulta/editar-consulta.component';
import { ListaConsultaComponent } from './consulta/lista-consulta.component';
import { NuevoConsultaComponent } from './consulta/nuevo-consulta.component';
import { EditarCuentaComponent } from './cuenta/editar-cuenta.component';
import { ListaCuentaComponent } from './cuenta/lista-cuenta.component';
import { NuevoCuentaComponent } from './cuenta/nuevo-cuenta.component';
import { DentalhomeComponent } from './home/dentalhome.component';
import { EditarMedicoComponent } from './medico/editar-medico.component';
import { ListaMedicoComponent } from './medico/lista-medico.component';
import { NuevoMedicoComponent } from './medico/nuevo-medico.component';
import { EditarPacienteComponent } from './paciente/editar-paciente.component';
import { ListaPacienteComponent } from './paciente/lista-paciente.component';
import { NuevoPacienteComponent } from './paciente/nuevo-paciente.component';
import { EditarTratamientoComponent } from './tratamiento/editar-tratamiento.component';
import { ListaTratamientoComponent } from './tratamiento/lista-tratamiento.component';
import { NuevoTratamientoComponent } from './tratamiento/nuevo-tratamiento.component';

const routes: Routes = [
  //Inicio
  {path: '', component: DentalhomeComponent},
  //Medico
  {path: 'medico', component: ListaMedicoComponent},
  {path: 'medico/nuevo', component: NuevoMedicoComponent},
  {path: 'medico/editar/:id', component: EditarMedicoComponent},
  //Paciente
  {path: 'paciente', component: ListaPacienteComponent},
  {path: 'paciente/nuevo', component: NuevoPacienteComponent},
  {path: 'paciente/editar/:id', component: EditarPacienteComponent},
  //Tratamiento
  {path: 'tratamiento', component: ListaTratamientoComponent},
  {path: 'tratamiento/nuevo', component: NuevoTratamientoComponent},
  {path: 'tratamiento/editar/:id', component: EditarTratamientoComponent},
  //Cuenta
  {path: 'cuenta', component: ListaCuentaComponent},
  {path: 'cuenta/nuevo', component: NuevoCuentaComponent},
  {path: 'cuenta/editar/:id', component: EditarCuentaComponent},
  //Consulta
  {path: 'consulta', component: ListaConsultaComponent},
  {path: 'consulta/nuevo', component: NuevoConsultaComponent},
  {path: 'consulta/editar/:id', component: EditarConsultaComponent},
  
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
