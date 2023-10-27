import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styles: [
  ]
})
export class DetailPokemonComponent implements OnInit {
  pokemonLiist = POKEMONS;
  pokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pokemon = this.pokemonLiist.find(pokemon => pokemon.id === +id);
    }
  }
  goToPokemonList(): void {
    this.router.navigate(['/pokemons']);
  }
}
