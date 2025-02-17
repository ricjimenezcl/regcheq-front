import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // Registrar usuario
  registerUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/register`, user);
  }

  // Iniciar sesión
  loginUser(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login`, credentials);
  }

  // Crear catálogo
  createCatalog(catalog: any, token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${this.baseUrl}/catalogs`, catalog, { headers });
  }

  // Obtener todos los catálogos
  getAllCatalogs(): Observable<any> {
    return this.http.get(`${this.baseUrl}/catalogs`);
  }

  // Obtener catálogo por id
  getCatalogById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/catalogs`, { params: { id } });
  }
}
