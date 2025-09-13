import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Cuenta {
  id: number;
  nombre: string;
  tipo: string;
  codigo: string;
  nivel: number;
  descripcion?: string;
}

@Injectable({ providedIn: 'root' })
export class CatalogoCuentasService {
  private apiUrl = 'http://localhost:8080/catalogo-cuentas';

  constructor(private http: HttpClient) {}

  obtenerCuentas(): Observable<Cuenta[]> {
    return this.http.get<Cuenta[]>(this.apiUrl, { headers: this.getHeaders() });
  }

  crearCuenta(cuenta: Omit<Cuenta, 'id'>): Observable<Cuenta> {
    return this.http.post<Cuenta>(this.apiUrl, cuenta, { headers: this.getHeaders() });
  }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders(token ? { Authorization: `Bearer ${token}` } : {});
  }
}
