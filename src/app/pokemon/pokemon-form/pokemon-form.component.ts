import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Router } from '@angular/router';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { LoaderComponent } from '../loader/loader.component';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'app-pokemon-form',
    templateUrl: './pokemon-form.component.html',
    styleUrls: ['./pokemon-form.component.css'],
    standalone: true,
    imports: [NgIf, FormsModule, NgFor, LoaderComponent, PokemonTypeColorPipe]
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon: any;
  types: string[];
  isAddForm: boolean;

  constructor(private pokemonService: PokemonService,
    private router: Router) { }

  ngOnInit(): void {
    this.types = this.pokemonService.getPokemonTypeList();
    this.isAddForm = this.router.url.includes('add');
  }

  hasType(type: string): boolean {
    return this.pokemon.types.includes(type);
  }

  selectType($event: Event, type: string) {
    const checked = ($event.target as HTMLInputElement).checked;
    if (checked) {
      this.pokemon.types.push(type);
    } else {
      const index = this.pokemon.types.indexOf(type);
      if (index > -1) {
        this.pokemon.types.splice(index, 1);
      }
    }
  }

  onSubmit() {
    if (this.isAddForm) {
      this.addPokemon();
    } else {
      this.updatePokemon();
    }
    this.pokemonService.updatePokemon(this.pokemon)
    .subscribe(() => this.router.navigate(['/pokemon', this.pokemon.id]));
  }

  addPokemon() {
    this.pokemonService.addPokemon(this.pokemon)
    .subscribe(() => this.router.navigate(['/pokemon', this.pokemon.id]));
  }

  updatePokemon() {
    this.pokemonService.updatePokemon(this.pokemon)
    .subscribe(() => this.router.navigate(['/pokemon', this.pokemon.id]));
  }

  isTypesValid(type: string): boolean {
    if (this.pokemon.types.length === 1 && this.hasType(type)) {
      return false;
    }
    if (this.pokemon.types.length >= 3 && !this.hasType(type)) {
      return false;
    }
    return true;
  }
}
