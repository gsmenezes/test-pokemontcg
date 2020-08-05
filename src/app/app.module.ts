import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CardsComponent } from './cards/cards.component';
import { SearchComponent } from './cards/search/search.component';
import { CardsService } from './cards/cards.service';
import { CardsModule } from './cards/cards.module';
import { HttpService } from './cards/services/http.service';
import { DataExchangeService } from "./cards/services/data-exchange.service";
import { FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { DetailsCardsComponent } from './cards/details-cards/details-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    SearchComponent,
    DetailsCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    CardsModule,
    ReactiveFormsModule
  ],
  providers: [
    CardsService,
    FormBuilder,
    HttpService,
    DataExchangeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
