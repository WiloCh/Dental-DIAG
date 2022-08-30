import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Consulta } from '../models/consulta';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  consultaURL = environment.consultaURL;

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Consulta[]> {
    return this.httpClient.get<Consulta[]>(`${this.consultaURL}`);
  }

  public detail(id: number): Observable<Consulta> {
    return this.httpClient.get<Consulta>(`${this.consultaURL}${id}`);
  }

  public save(consulta: Consulta): Observable<any> {
    return this.httpClient.post<any>(`${this.consultaURL}`, consulta);
  }

  public update(id: number, consulta: Consulta): Observable<any> {
    return this.httpClient.put<any>(`${this.consultaURL}${id}`, consulta);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.consultaURL}${id}`);
  }
}
