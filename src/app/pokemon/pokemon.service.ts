import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable()
export class PokemonService {
  constructor(private http: HttpClient) { }

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap(pokemonList => this.log(pokemonList)),
      catchError(
        (error) => this.handleError(error, []))
    );
  }

  getPokemonById(id: number): Observable<Pokemon | undefined> {
    return this.http.get<Pokemon>(`api/pokemons/${id}`).pipe(
      tap(pokemon => this.log(pokemon)),
      catchError(
        (error) => this.handleError(error, undefined))
    );
  }

  updatePokemon(pokemon: Pokemon): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put<Pokemon>(`api/pokemons/${pokemon.id}`, pokemon, httpOptions).pipe(
      tap(pokemon => this.log(pokemon)),
      catchError(
        (error) => this.handleError(error, null))
    );
  }

  deletePokemonById(id: number): Observable<null> {
    return this.http.delete(`api/pokemons/${id}`).pipe(
      tap(pokemon => this.log(pokemon)),
      catchError(
        (error) => this.handleError(error, null))
    );
  }

  private log(response: any): void {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  };

  getPokemonTypeList(): string[] {
    return [
      'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
      'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
    ];
  }
}
