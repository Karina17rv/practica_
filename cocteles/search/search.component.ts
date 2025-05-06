import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Output() eventSearch = new EventEmitter<string>();

  buscador(buscar:string){
    this.eventSearch.emit(buscar);
  }
}
