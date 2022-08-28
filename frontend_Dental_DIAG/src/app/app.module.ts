import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { ListaMedicoComponent } from './medico/lista-medico.component';
import { ListaPacienteComponent } from './paciente/lista-paciente.component';
import { ListaTratamientoComponent } from './tratamiento/lista-tratamiento.component';
import { ListaCuentaComponent } from './cuenta/lista-cuenta.component';
import { ListaConsultaComponent } from './consulta/lista-consulta.component';
import { NuevoMedicoComponent } from './medico/nuevo-medico.component';
import { EditarMedicoComponent } from './medico/editar-medico.component';
import { EditarPacienteComponent } from './paciente/editar-paciente.component';
import { NuevoPacienteComponent } from './paciente/nuevo-paciente.component';
import { NuevoTratamientoComponent } from './tratamiento/nuevo-tratamiento.component';
import { EditarTratamientoComponent } from './tratamiento/editar-tratamiento.component';
import { EditarCuentaComponent } from './cuenta/editar-cuenta.component';
import { NuevoCuentaComponent } from './cuenta/nuevo-cuenta.component';
import { EditarConsultaComponent } from './consulta/editar-consulta.component';
import { NuevoConsultaComponent } from './consulta/nuevo-consulta.component';
import { DentalhomeComponent } from './home/dentalhome.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaMedicoComponent,
    ListaPacienteComponent,
    ListaTratamientoComponent,
    ListaCuentaComponent,
    ListaConsultaComponent,
    NuevoMedicoComponent,
    EditarMedicoComponent,
    EditarPacienteComponent,
    NuevoPacienteComponent,
    NuevoTratamientoComponent,
    EditarTratamientoComponent,
    EditarCuentaComponent,
    NuevoCuentaComponent,
    EditarConsultaComponent,
    NuevoConsultaComponent,
    DentalhomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
