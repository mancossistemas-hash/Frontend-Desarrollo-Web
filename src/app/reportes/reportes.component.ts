import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ReportesService } from '../services/reportes.service';

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reportes.component.html'
})
export class ReportesComponent {
  private fb = inject(FormBuilder);
  form = this.fb.group({
    inicio: [''],
    fin: ['']
  });

  constructor(private service: ReportesService) {}

  generar(): void {
    if (this.form.valid) {
      const { inicio, fin } = this.form.value;
      this.service.generarBalance(inicio!, fin!).subscribe(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `balance-${inicio}-${fin}.pdf`;
        a.click();
        window.URL.revokeObjectURL(url);
      });
    }
  }
}
