import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { PokemonFormComponent } from '../pokemon-form/pokemon-form.component';
import { NgIf } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-pokemon',
  template: `
    <h2 class="center">Modifier {{pokemon?.name}} </h2>
    <p *ngIf="pokemon" class="center">
      <img [src]="pokemon.picture" [alt]="pokemon.name">
    </p>
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `,
  styles: [],
  standalone: true,
  imports: [NgIf, PokemonFormComponent]
})
export class EditPokemonComponent implements OnInit {
  pokemon: Pokemon | undefined;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private title: Title
  ) { }

  ngOnInit(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pokemonService.getPokemonById(+id).subscribe(
        (pokemon) => { this.pokemon = pokemon; this.initTitle(pokemon); }
      );
    } else {
      this.pokemon = undefined;
    }
  }
  initTitle(pokemon: Pokemon | undefined): void {
    if (!pokemon) {
      this.title.setTitle('Pas de Pokémon');
      return;
    }
    this.title.setTitle(`${pokemon.name}`);
  }
}
