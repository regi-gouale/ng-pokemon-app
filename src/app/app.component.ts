import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Welcome to {{ pokemonList[0] }}!</h1>`
})
export class AppComponent implements OnInit{
  pokemonList:Array<string> = ['Pikachu', 'Salamèche', 'Bulbizarre', 'Carapuce'];

  ngOnInit(): void {
    console.table(this.pokemonList);
    this.selectPokemon(this.pokemonList[2]);
  }

  selectPokemon(pokemonName: string): void {
    console.log(`Vous avez cliqué sur le pokemon ${pokemonName}`);
  }

}
