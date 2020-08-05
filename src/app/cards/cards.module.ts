import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CardsService } from "./cards.service";
import { HttpService } from "./services/http.service";
import { DataExchangeService } from "./services/data-exchange.service";

@NgModule({
    declarations: [],

    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [],
    providers: [CardsService, HttpService, DataExchangeService],
})

export class CardsModule { }