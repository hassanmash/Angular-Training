import { NgModule } from "@angular/core";
import { PipesOneComponent } from "./pipes-one/pipes-one.component";
import { PipesTwoComponent } from "./pipes-two/pipes-two.component";
import { CharHighlightDirective } from "./char-highlight.directive";
import { USPhoneNumberPipe } from "./usphone-number.pipe";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { PipesComponent } from './pipes/pipes.component';
import { CardComponent } from "../card/card.component";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";

const route: Routes = [
    { path: '' , component: PipesComponent }
];

@NgModule({
    declarations:[
        PipesOneComponent,
        PipesTwoComponent,
        CharHighlightDirective,
        USPhoneNumberPipe,
        PipesComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        RouterModule.forChild(route)
    ],
    exports: [
        PipesOneComponent,
        PipesTwoComponent,
        CharHighlightDirective,
        USPhoneNumberPipe,
        PipesComponent
    ]
})
export class PipesModule { }