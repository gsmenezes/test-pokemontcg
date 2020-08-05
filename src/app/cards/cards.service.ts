import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Cards } from './interfaces/cards.model';
import { DetailsCards } from './interfaces/details-cards.model';
import { ControlContainer } from '@angular/forms';

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

    getCardsByName(name: string): Observable<Cards> {
        return this.http.get<Cards>(URL + '?name=' + name);
    }

    getDetailsById(id: string): Observable<DetailsCards> {
        return this.http.get<DetailsCards>(URL + '/' + id);
    }
}

