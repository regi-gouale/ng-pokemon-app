import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';

@Component({
  selector: 'app-root',
  template: `<h1>Liste de Pokémons</h1>`
})
export class AppComponent implements OnInit{
  pokemonList:Array<Pokemon>= POKEMONS;

  ngOnInit(): void {
    console.table(this.pokemonList);
    this.selectPokemon(this.pokemonList[0]);
  }

  selectPokemon(pokemon: Pokemon): void {
    console.log(`Vous avez cliqué sur le pokemon ${pokemon.name}`);
  }

}
