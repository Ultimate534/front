import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  nombreUsuario: string;
  clave: string;
  estado: boolean;
  mensaje: string; // Crear una nueva variable para el mensaje
  esError: boolean; // Crear una nueva variable para manejar si es un mensaje de error

  constructor(private usuarioService: UsuarioService) { }

  registrar() {
    const usuario: Usuario = {
      nombreUsuario: this.nombreUsuario,
      clave: this.clave,
      estado: this.estado
    };

    this.usuarioService.crearUsuario(usuario).subscribe(
      (response: any) => {
        console.log('Usuario registrado exitosamente:', response);
        this.mensaje = 'Usuario registrado exitosamente!';
        this.esError = false; // No es un mensaje de error
      },
      (error: any) => {
        console.log('Error al registrar usuario:', error);
        this.mensaje = 'Error al registrar usuario!';
        this.esError = true; // Es un mensaje de error
      }
    );
  }
}
