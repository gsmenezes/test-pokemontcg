import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CardsService } from '../cards.service';
import { DetailsCards } from '../interfaces/details-cards.model';

const URL = 'https://api.pokemontcg.io/v1/cards';


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
    private cardsService: CardsService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getDetails();
  }

  private getId(): any {
    return String(this.router.snapshot.params['id']);
  }

  private getDetails(): any {
    console.log('Get Details details-card component')
    this.cardsService.getDetailsById(this.getId())
      .subscribe((response: any) => {
        this.isDetail = true;
        this.details = response.card;
        console.log(this.details.name)
      });
  }

}
