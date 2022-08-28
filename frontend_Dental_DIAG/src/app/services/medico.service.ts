import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Medico } from '../models/medico';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  medicoURL = environment.medicoURL;

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Medico[]> {
    return this.httpClient.get<Medico[]>(`${this.medicoURL}`);
  }

  public detail(cedula: number): Observable<Medico> {
    return this.httpClient.get<Medico>(`${this.medicoURL}${cedula}`);
  }

  public save(medico: Medico): Observable<any> {
    return this.httpClient.post<any>(`${this.medicoURL}`, medico);
  }

  public update(cedula: number, medico: Medico): Observable<any> {
    return this.httpClient.put<any>(`${this.medicoURL}${cedula}`, medico);
  }

  public delete(cedula: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.medicoURL}${cedula}`);
  }
}
