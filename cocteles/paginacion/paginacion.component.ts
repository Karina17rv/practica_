import { CommonModule, NgFor } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-paginacion',
  imports: [NgFor, CommonModule],
  templateUrl: './paginacion.component.html',
  styleUrl: './paginacion.component.css'
})
export class PaginacionComponent {
  @Output() eventPagina = new EventEmitter<string>();

  abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  letraActiva: string = 'a'; // Nota: usa minúscula si tus datos están en minúsculas

  paginaSiguiente(pagina: string): void {
    this.letraActiva = pagina;
    this.eventPagina.emit(pagina);
  }

}
