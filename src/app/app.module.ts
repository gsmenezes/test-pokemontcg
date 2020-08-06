import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CardsComponent } from './pokemon-cards/cards/cards.component';
import { SearchComponent } from './pokemon-cards/cards/search/search.component';
import { CardsModule } from './pokemon-cards/cards/cards.module';
import { ReactiveFormsModule} from '@angular/forms';
import { DetailsCardsComponent } from '../app/pokemon-cards/cards/details-cards/details-cards.component';
import { PokemonCardsComponent } from './pokemon-cards/pokemon-cards.component';
import { PokemonCardsModule } from './pokemon-cards/pokemon-cards.module';
import { PokemonCardsService } from './pokemon-cards/pokemon-cards.services';
@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    SearchComponent,
    DetailsCardsComponent,
    PokemonCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    CardsModule,
    PokemonCardsModule,
    ReactiveFormsModule
  ],
  providers: [
   PokemonCardsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
