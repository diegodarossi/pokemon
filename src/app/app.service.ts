import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

import { Home } from './home/home.model';
import { Pokemon } from './detail/pokemon.model';
import { PO_API } from '../app/app.api';

@Injectable()

export class AppService {

  constructor(private http: HttpClient) {}

  pokemons(url: string = ''): Observable<Home> {
    url = url || `${PO_API}pokemon/`;

    return this.http.get(url)
                .pipe<Home>(
                  map((e: Response) => e)
                );
  }

  pokemon(url: string): Observable<Pokemon> {
    return this.http.get(url)
                .pipe<Pokemon>(
                  map((e: Response) => e)
                );
  }

}
