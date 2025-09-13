import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesService, Cliente } from '../services/clientes.service';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private clientesService: ClientesService) {}

  ngOnInit(): void {
    this.clientesService.getClientes().subscribe((data) => (this.clientes = data));
  }
}
