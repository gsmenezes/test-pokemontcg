import { Component, OnInit } from '@angular/core';
import { Cards } from './interfaces/cards.model';
import { CardsService } from './cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cards: Cards[];

  pokemons = this.cardsService.getCards()

  constructor(
    private cardsService: CardsService,
  ) { }

  ngOnInit() {
    this.cardsService.getCards().subscribe((response: any) => {
      this.cards = response.cards.sort((a, b) => (a.name > b.name)? 1: -1)
    });
  }

}
