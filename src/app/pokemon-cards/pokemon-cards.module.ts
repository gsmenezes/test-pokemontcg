import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { HeaderComponent } from './cards/header/header.component';
import { CardsRoutingModule } from './cards/cards-routing.module';
import { CardsModule } from './cards/cards.module';
import { PokemonCardsService } from './pokemon-cards.services';



@NgModule({
    declarations: [HeaderComponent],
    imports: [CommonModule,
        FormsModule,
        CardsModule,
        CardsRoutingModule
        ],
    exports: [
        HeaderComponent,
        CardsRoutingModule
    ],
    providers: [PokemonCardsService],
})
export class PokemonCardsModule {}