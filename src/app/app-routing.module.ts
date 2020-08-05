import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsComponent } from './cards/cards.component';

const routes: Routes = [

  { path: 'cards', component: CardsComponent },
  { path: '', pathMatch: 'full', redirectTo: 'cards'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
