import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tratamiento } from '../models/tratamiento';

@Injectable({
  providedIn: 'root'
})
export class TratamientoService {

  tratamientoURL = environment.tratamiento;

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Tratamiento[]> {
    return this.httpClient.get<Tratamiento[]>(`${this.tratamientoURL}`);
  }

  public detail(id: number): Observable<Tratamiento> {
    return this.httpClient.get<Tratamiento>(`${this.tratamientoURL}${id}`);
  }

  public save(tratamiento: Tratamiento): Observable<any> {
    return this.httpClient.post<any>(`${this.tratamientoURL}`, tratamiento);
  }

  public update(id: number, tratamiento: Tratamiento): Observable<any> {
    return this.httpClient.put<any>(`${this.tratamientoURL}${id}`, tratamiento);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.tratamientoURL}${id}`);
  }
}
