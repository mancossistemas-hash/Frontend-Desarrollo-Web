import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProveedoresService, Proveedor } from '../services/proveedores.service';

@Component({
  selector: 'app-proveedores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proveedores.component.html'
})
export class ProveedoresComponent implements OnInit {
  proveedores: Proveedor[] = [];

  constructor(private service: ProveedoresService) {}

  ngOnInit(): void {
    this.service.obtenerProveedores().subscribe(p => (this.proveedores = p));
  }
}
