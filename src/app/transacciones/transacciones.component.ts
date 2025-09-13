import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TransaccionesService, Transaccion } from '../services/transacciones.service';

@Component({
  selector: 'app-transacciones',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './transacciones.component.html'
})
export class TransaccionesComponent {
  private fb = inject(FormBuilder);
  form = this.fb.group({
    tipo_transaccion: [''],
    monto: [0],
    descripcion: [''],
    debe: [0],
    haber: [0]
  });

  error = '';

  constructor(private service: TransaccionesService) {}

  registrar(): void {
    if (this.form.valid) {
      const { debe, haber } = this.form.value;
      if (debe !== haber) {
        this.error = 'El debe y el haber deben ser iguales';
        return;
      }
      this.error = '';
      const transaccion: Transaccion = {
        ...(this.form.value as any),
        fecha: new Date().toISOString().split('T')[0]
      };
      this.service.crearTransaccion(transaccion).subscribe(() => {
        this.form.reset();
      });
    }
  }
}
