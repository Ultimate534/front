import {Injectable} from "@angular/core";
import {Usuario} from "../interfaces/registrar.interface";
import {forkJoin, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})



export class RegistrarService {
  private apiUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) {}

  crearUsuario(usuario:Usuario):Observable<any>{

    const guardarRegistro$ = this.http.post(`${this.apiUrl}/usuario`, usuario);
    return forkJoin(guardarRegistro$);
  }
}




