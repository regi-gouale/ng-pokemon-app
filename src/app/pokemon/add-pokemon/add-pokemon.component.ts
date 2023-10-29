import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-add-pokemon',
  template: `
    <h2 class="text center">Ajouter un nouveau Pokémon</h2>
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `
})
export class AddPokemonComponent implements OnInit{
  pokemon: Pokemon | undefined;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe(pokemonList => {
      console.table(pokemonList);
      const id = pokemonList.length + 1;
      this.pokemon = new Pokemon(id);
      console.log(this.pokemon);
    });
  }
}
