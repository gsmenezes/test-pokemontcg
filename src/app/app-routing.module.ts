import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsComponent } from './pokemon-cards/cards/cards.component';
import { DetailsCardsComponent } from '../app/pokemon-cards/cards/details-cards/details-cards.component';



const routes: Routes = [

  { path: 'cards', component: CardsComponent },
  { path: '', pathMatch: 'full', redirectTo: 'cards' },
  { path: 'cards/name/:name', component: CardsComponent },
  { path: 'cards/:id', component: DetailsCardsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
