import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Cards } from './interfaces/cards.model';
import { PokemonCardsService } from '../pokemon-cards.services';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cards: Cards[];

  pokemons = this.pokemonService.getCards();


  constructor(
    private pokemonService: PokemonCardsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    let pokemonName = this.route.snapshot.paramMap.get('name');
    if (pokemonName === null) {
      this.pokemonService.getCards().subscribe((response: any) => {
        this.cards = response.cards.sort((a, b) => (a.name > b.name) ? 1 : -1)
        console.log(this.cards);
      });
    } else {
      this.pokemonService.getCardsByName(pokemonName).subscribe((response: any) => {
        this.cards = response.cards
        console.log(this.cards);
      });
    }
  }

  ngOnDestroy(){
    this.onReload();
  }

  getDetails(id: string) {
    this.router.navigate(['cards/', id]);
  }

  onReload() {
    console.log()
  }
}
