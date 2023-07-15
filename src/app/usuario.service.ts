import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './models/login.models';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private API_URL = 'http://localhost:8080/usuario';

  constructor(private http: HttpClient) { }

  crearUsuario(usuario: Usuario): Observable<any> {
    return this.http.post<any>(`${this.API_URL}`, usuario);
  }

  obtenerUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.API_URL}/usuarios`);
  }

  cambiarContra(username: string, contraActual: string, nuevaContra: string): Observable<string> {
    return this.http.put<string>(`${this.API_URL}/${username}/change-password`, { contraActual, nuevaContra });
  }

  loginUser(nombreUsuario: string, clave: string): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/login`, { nombreUsuario, clave }, { responseType: 'text' as 'json' });
  }  
}
