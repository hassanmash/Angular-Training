import { RouterModule, Routes } from "@angular/router";
import { SampleComponent } from "./sample/sample.component";

const route: Routes = [
    { path: '' , component: SampleComponent }
];

export default RouterModule.forChild(route);