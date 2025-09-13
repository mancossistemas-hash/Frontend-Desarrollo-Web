import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { ClientesComponent } from './clientes/clientes.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: '', redirectTo: 'clientes', pathMatch: 'full' }
];
