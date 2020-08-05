import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsComponent } from './cards/cards.component';
import { DetailsCardsComponent } from './cards/details-cards/details-cards.component';


const routes: Routes = [

  { path: 'cards', component: CardsComponent },
  // { path: '', pathMatch: 'full', redirectTo: 'cards' },
  { path: '?name=name', component: CardsComponent },
  { path: 'details/:id', component: DetailsCardsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
