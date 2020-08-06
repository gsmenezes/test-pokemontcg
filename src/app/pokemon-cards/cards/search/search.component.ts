import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Cards } from '../interfaces/cards.model';
import { PokemonCardsService } from '../../pokemon-cards.services';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  cardsByName: Cards[];
  message: string;
  pokemon: string;
  formPokemon: FormGroup;

 @Output() pokemonEmmiter = new EventEmitter<Cards[]>();

  constructor(
    private fb: FormBuilder,
    private pokemonService: PokemonCardsService,
  ) { }


  ngOnInit() {
    this.initForm();
  }

  getName(): any {
    const name = this.formPokemon.get('name').value;
    if (name && name.length > 0) {
      this.pokemonService.getCardsByName(name).subscribe((response: any) => {
        this.pokemonService.setPokemonSubject(response.cards);
      });
    }
  }

  private initForm(): void {
    this.formPokemon = this.fb.group({
      name: [' ']
    })
  }
}