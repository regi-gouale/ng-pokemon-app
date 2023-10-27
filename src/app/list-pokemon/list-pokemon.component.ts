import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [
  ]
})
export class ListPokemonComponent implements OnInit{
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.table(this.pokemonList);
  }

  selectPokemon(pokemonId: string): void {
    const pokemon: Pokemon | undefined = this.pokemonList.find(
      pokemon => pokemon.id === +(pokemonId)
    );
    if (!pokemon) {
      console.error(`Le Pokémon avec ID: ${pokemonId} n'a pas été trouvé`);
      this.pokemonSelected = undefined;
      return;
    }
    // console.log(`Vous avez selectionné ${pokemon.name}`);
    this.pokemonSelected = pokemon;
  }

  goToPokemonDetail(pokemon: Pokemon): void {
    const link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }
}
