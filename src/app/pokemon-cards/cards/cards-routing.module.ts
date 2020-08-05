import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CardsComponent } from "./cards.component";

const routes: Routes = [
    {
        path: '',
        component: CardsComponent
    }
];

@NgModule({
    imports: [
        RouterModule
    ],
    exports: [
        RouterModule
    ],
})

export class CardsRoutingModule { }