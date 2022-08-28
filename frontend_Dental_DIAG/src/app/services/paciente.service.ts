import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Paciente } from '../models/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  pacienteURL = environment.pacienteURL;

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Paciente[]> {
    return this.httpClient.get<Paciente[]>(`${this.pacienteURL}`);
  }

  public detail(cedula: number): Observable<Paciente> {
    return this.httpClient.get<Paciente>(`${this.pacienteURL}${cedula}`);
  }

  public save(paciente: Paciente): Observable<any> {
    return this.httpClient.post<any>(`${this.pacienteURL}`, paciente);
  }

  public update(cedula: number, paciente: Paciente): Observable<any> {
    return this.httpClient.put<any>(`${this.pacienteURL}${cedula}`, paciente);
  }

  public delete(cedula: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.pacienteURL}${cedula}`);
  }
}
