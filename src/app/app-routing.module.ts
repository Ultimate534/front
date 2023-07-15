import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'
import { CatalogoComponent } from './catalogo/catalogo.component';
import { EpecialistaComponent } from './epecialista/epecialista.component';
import { RegistroComponent } from './registro/registro.component';
import { RutinasComponent } from './rutinas/rutinas.component';
import { PerfilComponent } from './perfil/perfil.component';
import { TiporutinaComponent } from './tiporutina/tiporutina.component';
const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'login',component: LoginComponent},
  {path: 'catalogo',component: CatalogoComponent},
  {path: 'especialista',component: EpecialistaComponent},
  {path: 'registro',component: RegistroComponent},
  {path: 'rutinas',component: RutinasComponent},
  {path: 'perfil',component: PerfilComponent},
  {path: 'tiporutina',component: TiporutinaComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
