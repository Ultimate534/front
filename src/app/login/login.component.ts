import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nombreUsuario: string;
  clave: string;
  errorMessage: string;

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() { }

  login() {
    this.usuarioService.loginUser(this.nombreUsuario, this.clave).subscribe(
      response => {
        console.log(response);
        // Redirigir a la página de inicio
        this.router.navigate(['/perfil']);
      },
      error => {
        if (error.status == 401) {
          this.errorMessage = 'Credenciales inválidas';
          console.log("Contraseña o Usuario incorrecto");
        } else {
          this.errorMessage = 'Ocurrió un error en la solicitud';
        }
      }
    );
  }
}
