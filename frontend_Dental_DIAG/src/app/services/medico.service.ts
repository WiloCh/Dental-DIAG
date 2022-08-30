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

  public detail(id: number): Observable<Medico> {
    return this.httpClient.get<Medico>(`${this.medicoURL}${id}`);
  }

  public save(medico: Medico): Observable<any> {
    return this.httpClient.post<any>(`${this.medicoURL}`, medico);
  }

  public update(id: number, medico: Medico): Observable<any> {
    return this.httpClient.put<any>(`${this.medicoURL}${id}`, medico);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.medicoURL}${id}`);
  }
}
