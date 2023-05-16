import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  pokemonList: Array<Pokemon> = POKEMONS;
  pokemonSelected: Pokemon | undefined;

  ngOnInit(): void {
  }

  selectPokemon(pokemonId: string): void {
    const pokemon: Pokemon | undefined = this.pokemonList.find(pokemon => pokemon.id === +(pokemonId));
    // this.pokemonSelected = this.pokemonList.find(pokemon => pokemon.id === index);
    if (pokemon) {
      console.log(`Vous avez sélectionné sur le pokemon: ${pokemon?.name}`);
      this.pokemonSelected = pokemon;
    } else {
      console.log(`Le pokemon ${pokemonId} n'existe pas`);
      this.pokemonSelected = undefined;
    }

  }

}
