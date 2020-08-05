import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Cards } from './interfaces/cards.model';

const URL = 'https://api.pokemontcg.io/v1/cards';

@Injectable({
    providedIn: 'root'
})

export class CardsService {

    constructor(
        private http: HttpClient) { }

    getCards(): Observable<Cards> {
        return this.http.get<Cards>(URL);
    }
}

