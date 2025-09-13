import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CatalogoCuentasService, Cuenta } from '../services/catalogo-cuentas.service';

@Component({
  selector: 'app-catalogo-cuentas',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './catalogo-cuentas.component.html'
})
export class CatalogoCuentasComponent implements OnInit {
  cuentas: Cuenta[] = [];
  private fb = inject(FormBuilder);
  cuentaForm = this.fb.group({
    nombre: [''],
    tipo: [''],
    codigo: [''],
    nivel: [0],
    descripcion: ['']
  });

  constructor(private service: CatalogoCuentasService) {}

  ngOnInit(): void {
    this.cargar();
  }

  cargar(): void {
    this.service.obtenerCuentas().subscribe(c => (this.cuentas = c));
  }

  crear(): void {
    if (this.cuentaForm.valid) {
      this.service.crearCuenta(this.cuentaForm.value as any).subscribe(() => {
        this.cuentaForm.reset();
        this.cargar();
      });
    }
  }
}
