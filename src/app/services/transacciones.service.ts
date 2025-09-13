import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Transaccion {
  fecha: string;
  tipo_transaccion: string;
  monto: number;
  descripcion?: string;
  cliente_id?: number;
  proveedor_id?: number;
  banco_id?: number;
  debe: number;
  haber: number;
}

@Injectable({ providedIn: 'root' })
export class TransaccionesService {
  private apiUrl = 'http://localhost:8080/api/transacciones';

  constructor(private http: HttpClient) {}

  crearTransaccion(transaccion: Transaccion): Observable<any> {
    return this.http.post(this.apiUrl, transaccion, { headers: this.getHeaders() });
  }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders(token ? { Authorization: `Bearer ${token}` } : {});
  }
}
