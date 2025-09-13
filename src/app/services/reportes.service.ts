import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ReportesService {
  private apiUrl = 'http://localhost:8080/api/reportes';

  constructor(private http: HttpClient) {}

  generarBalance(inicio: string, fin: string): Observable<Blob> {
    const url = `${this.apiUrl}/balance?inicio=${inicio}&fin=${fin}`;
    return this.http.post(url, {}, { headers: this.getHeaders(), responseType: 'blob' });
  }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders(token ? { Authorization: `Bearer ${token}` } : {});
  }
}
