import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Cards } from '../interfaces/cards.model';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  cardsByName: Cards[];
  pokemonName = new FormControl('');
  message: string;
  pokemon: string;

  private subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
  ) { }


  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  getName(): any {
    this.pokemon = this.pokemonName.value;
    if (this.pokemon) {
      this.router.navigate(['/cards/name/', this.pokemon]);  
    }
    this.message = 'Ooooops.. digite o nome do Pokémon novamente!';
  }
}