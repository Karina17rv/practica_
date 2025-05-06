import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cocteles } from '../interfaces/cocteles';

@Injectable({
  providedIn: 'root'
})
export class CoctelesService {
  private apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';
  constructor(
    private http: HttpClient
  ) { }

  getCocteles(): Observable<cocteles>{
    return this.http.get<cocteles>(this.apiUrl);
  }

  getSeiguientePagina(pagina: string): Observable<cocteles> {
    const apiUrl1 = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${pagina}`;
    return this.http.get<cocteles>(apiUrl1);
  }

  getCoctelPorNombre(nombre: string): Observable<cocteles> {
    const apiUrl2 = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nombre}`;
    return this.http.get<cocteles>(apiUrl2);
  }

  getCoctelPorId(id: string): Observable<cocteles> {
    const apiUrl3 = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    return this.http.get<cocteles>(apiUrl3);
  }
}
