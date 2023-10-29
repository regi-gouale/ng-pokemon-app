import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [
  ]
})
export class ListPokemonComponent implements OnInit {
  pokemonList: Pokemon[];
  pokemonSelected: Pokemon | undefined;

  constructor(private router: Router, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemonList().
      subscribe(
        (pokemonList) => this.pokemonList = pokemonList
      );
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
