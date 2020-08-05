import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PokemonCardsService } from '../../pokemon-cards.services';

@Component({
  selector: 'app-details-cards',
  templateUrl: './details-cards.component.html',
  styleUrls: ['./details-cards.component.css']
})
export class DetailsCardsComponent implements OnInit {

  details;
  isDetail = false;

  constructor(
    private router: ActivatedRoute,
    private pokemonService: PokemonCardsService,
  ) { }

  ngOnInit() {
    this.getDetails();
  }

  private getId(): any {
    return String(this.router.snapshot.params['id']);
  }

  private getDetails(): any {
    console.log('Get Details details-card component')
    this.pokemonService.getDetailsById(this.getId())
      .subscribe((response: any) => {
        this.isDetail = true;
        this.details = response.card;
        console.log(this.details.name)
      });
  }

}
