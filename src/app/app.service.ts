import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Home } from './home/home.model';
import { Pokemon } from './detail/pokemon.model';
import { PO_API } from './app.api';
import { ErrorHandler } from './app.error-handler';

@Injectable()

export class AppService {

  constructor(private http: HttpClient) {}

  pokemons(url: string = ''): Observable<Home> {
    url = url || `${PO_API}pokemon/`;

    return this.http.get(url)
                .pipe<Home>(
                  map((e: Response) => e),
                  catchError((e: HttpErrorResponse) => ErrorHandler.handleError(e))
                );
  }

  pokemon(url: string): Observable<Pokemon> {
    return this.http.get(url)
                .pipe<Pokemon>(
                  map((e: Response) => e),
                  catchError((e: HttpErrorResponse) => ErrorHandler.handleError(e))
                );
  }

}
