import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styles: [
  ]
})
export class DetailPokemonComponent implements OnInit {
  pokemon: Pokemon | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pokemon = this.pokemonService.getPokemonById(+id);
    }
  }
  goToPokemonList(): void {
    this.router.navigate(['/pokemons']);
  }
}
