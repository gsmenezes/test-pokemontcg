import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PokemonCardsService } from '../../pokemon-cards.services';
import { DetailsCards } from '../interfaces/details-cards.model';

@Component({
  selector: 'app-details-cards',
  templateUrl: './details-cards.component.html',
  styleUrls: ['./details-cards.component.css']
})
export class DetailsCardsComponent implements OnInit {

  details: DetailsCards;

  constructor(
    private router: ActivatedRoute,
    private pokemonService: PokemonCardsService,
  ) { }

  ngOnInit() {
    
    this.pokemonService.getDetailsById(this.getParamId()).subscribe((response: any) => {
      this.details = response.card;     
    });

  }


  private getParamId(): any {
    return String(this.router.snapshot.paramMap.get('id'));
    
  }

}
