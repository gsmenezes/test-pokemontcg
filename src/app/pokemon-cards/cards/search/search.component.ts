import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { Cards } from '../interfaces/cards.model';
import { PokemonCardsService } from '../../pokemon-cards.services';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {


  queryField = new FormControl();

  readonly BASE_URL = 'https://api.pokemontcg.io/v1';

  results$: Observable<any>;

  cards: Cards[];
  name: string;
  message: string;
  form: FormGroup;
  public unsubscribe: any;

  constructor(
    private pokemonService: PokemonCardsService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }


  ngOnInit() {
    this.createForm();
    // this.showResults();
  }


  onSearch() {

    let value = this.queryField.value;
    
    if (value && (value = value.trim()) !== '') {
     
      this.results$ = this.pokemonService.getCardsByName(value);

      this.router.navigate(['/cards?name=name']);
    }

  }

  showResults() {

    let options = {};

    if (this.form.get('name').valid) {
      options = { queryParams: { name } };
      this.pokemonService.getCardsByName(name).subscribe((response: any) => {
        this.cards = response.cards
        console.log(response.cards);
      });

      this.router.navigate(['/cards?name='], options);

    }
    if (this.form.get('name').invalid) {
      this.message = 'Ooooops.. digite o nome do Pokémon novamente!';
    }
  }


  private createForm() {
    this.form = this.formBuilder.group({
      name: [
        this.name, Validators.required,
        Validators.minLength(3),
      ]
    })
  }

}