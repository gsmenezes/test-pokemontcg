import { Injectable } from '@angular/core';

import { DetailsCards } from '../interfaces/details-cards.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataExchangeService {

    pokeName: string;

    private results = <DetailsCards[]>[];
    private selectCard = <number[]>[];
    
    private httpResponse = new BehaviorSubject(this.results);
    currentResponse = this.httpResponse.asObservable();

    private pokemonName = new BehaviorSubject(this.pokeName);
    currentPokemonName = this.pokemonName.asObservable();

    private selectedCard = new BehaviorSubject(this.selectCard);
    currentSelectedCard = this.selectedCard.asObservable();

    constructor() { }

    changeHttpResponse(res: DetailsCards[]) {
        this.httpResponse.next(res);
    }

    changePokemonName(pokeName: string) {
        this.pokemonName.next(pokeName);
    }

    changeSelectedCard(selectCard: number[]) {
        this.selectedCard.next(selectCard);
    }

}