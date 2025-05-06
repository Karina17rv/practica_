import { Component } from '@angular/core';
import { cocteles } from './interfaces/cocteles';
import { CoctelesService } from './services/cocteles.service';
import { CardComponent } from "./card/card.component";
import { PaginacionComponent } from "./paginacion/paginacion.component";
import { StartupSnapshot } from 'node:v8';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-cocteles',
  imports: [CardComponent, PaginacionComponent, SearchComponent],
  templateUrl: './cocteles.component.html',
  styleUrl: './cocteles.component.css'
})
export class CoctelesComponent {
  cocteles: cocteles | undefined;


  constructor(
    private _srvCocteles: CoctelesService
  ){}

  ngOnInit(): void {
    this._srvCocteles.getCocteles().subscribe((data: cocteles) => {
      this.cocteles = data;
    });
  }


  siguientepagina(pagina: string) {
    this._srvCocteles.getSeiguientePagina(pagina).subscribe(data => {
      this.cocteles = data;
    })
  }

  bucarCoctel(termino: string): void {
    if(!termino){
      this.ngOnInit();
      return;
    }
    const esunnumero = /^\d+$/.test(termino);
    if (esunnumero) {
      this._srvCocteles.getCoctelPorId(termino).subscribe(data => {
        this.cocteles = data;
      });
    } else {
      this._srvCocteles.getCoctelPorNombre(termino).subscribe(data => {
        this.cocteles = data;
      });
    }
  }
}
