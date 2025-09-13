import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { ClientesComponent } from './clientes/clientes.component';
import { CatalogoCuentasComponent } from './catalogo-cuentas/catalogo-cuentas.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ReportesComponent } from './reportes/reportes.component';
import { TransaccionesComponent } from './transacciones/transacciones.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'catalogo', component: CatalogoCuentasComponent },
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'reportes', component: ReportesComponent },
  { path: 'transacciones', component: TransaccionesComponent },
  { path: '', redirectTo: 'clientes', pathMatch: 'full' }
];
