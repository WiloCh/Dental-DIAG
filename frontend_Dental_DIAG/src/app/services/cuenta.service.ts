import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cuenta } from '../models/cuenta';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  cuentaURL = environment.cuentaURL;

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Cuenta[]> {
    return this.httpClient.get<Cuenta[]>(`${this.cuentaURL}`);
  }

  public detail(id: number): Observable<Cuenta> {
    return this.httpClient.get<Cuenta>(`${this.cuentaURL}${id}`);
  }

  public save(cuenta: Cuenta): Observable<any> {
    return this.httpClient.post<any>(`${this.cuentaURL}`, cuenta);
  }

  public update(id: number, cuenta: Cuenta): Observable<any> {
    return this.httpClient.put<any>(`${this.cuentaURL}${id}`, cuenta);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.cuentaURL}${id}`);
  }
}
