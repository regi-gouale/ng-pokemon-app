import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { LoaderComponent } from '../loader/loader.component';
import { NgIf, NgFor, DatePipe } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styles: [],
  standalone: true,
  imports: [NgIf, NgFor, LoaderComponent, DatePipe, PokemonTypeColorPipe]
})
export class DetailPokemonComponent implements OnInit {
  pokemon: Pokemon | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService,
    private title: Title
  ) { }

  ngOnInit(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pokemonService.getPokemonById(+id).subscribe(
        (pokemon) => { this.pokemon = pokemon; this.initTitle(pokemon); }
      );
    }
  }
  goToPokemonList(): void {
    this.router.navigate(['/pokemons']);
  }

  goToEditPokemon(): void {
    if (this.pokemon) {
      this.router.navigate(['/edit/pokemon', this.pokemon.id]);
    }
  }

  deletePokemon(): void {
    if (this.pokemon) {
      this.pokemonService.deletePokemonById(this.pokemon.id).subscribe(
        () => this.goToPokemonList()
      );
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
