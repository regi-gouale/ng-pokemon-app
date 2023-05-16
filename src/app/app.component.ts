import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
  pokemonList:Array<Pokemon>= POKEMONS;

  ngOnInit(): void {
    // console.table(this.pokemonList);
    // this.selectPokemon(this.pokemonList[0]);
  }

  selectPokemon(event: MouseEvent): void {
    const index: number = +((event.target as HTMLInputElement).value);
    console.log(`Vous avez cliqué sur le pokemon ${this.pokemonList[index].name}`);
  }

}
