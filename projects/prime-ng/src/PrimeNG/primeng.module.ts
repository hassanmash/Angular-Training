import { NgModule } from "@angular/core";
import { DropdownModule } from "primeng/dropdown";
import { TableModule } from "primeng/table";
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from "primeng/paginator";
import { ButtonModule } from "primeng/button";
import { PickListModule } from "primeng/picklist";
import { InputMaskModule } from "primeng/inputmask";

const PrimeComponents = [
    DropdownModule,
    TableModule,
    InputTextModule,
    PaginatorModule,
    ButtonModule,
    PickListModule,
    InputMaskModule
]

@NgModule({
    imports: [ PrimeComponents ],
    exports: [ PrimeComponents ]
})
export class PrimeNGModule { }