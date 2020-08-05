import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cards } from './interfaces/cards.model';
import { PokemonCardsService } from '../pokemon-cards.services';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cards: Cards[];

  pokemons = this.pokemonService.getCards()

  constructor(
    private pokemonService: PokemonCardsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.pokemonService.getCards().subscribe((response: any) => {
      this.cards = response.cards.sort((a, b) => (a.name > b.name) ? 1 : -1)
    });
  }

  getDetailsById(id: string) {
    this.router.navigate(['details/', id]);
  }

}
