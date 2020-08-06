import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Cards } from './cards/interfaces/cards.model';
import { DetailsCards } from './cards/interfaces/details-cards.model';

const URL = 'https://api.pokemontcg.io/v1/cards';

@Injectable({
    providedIn: 'root'
})

export class PokemonCardsService {

    constructor(
        private http: HttpClient) { }

    getCards(): Observable<Cards> {
        return this.http.get<Cards>(URL);
    }

    getCardsByName(name: string): Observable<Cards> {
        return this.http.get<Cards>(URL + '/?name=' + name);
    }

    getDetailsById(id: string): Observable<DetailsCards> {
        return this.http.get<DetailsCards>(URL + '/' + id);
    }
}