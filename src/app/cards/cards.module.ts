import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { CardsService } from "./cards.service";

@NgModule({
    declarations: [],

    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [],
    providers: [CardsService],
})

export class CardsModule { }