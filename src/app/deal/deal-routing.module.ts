import {NgModule} from "@angular/core";
import {Routes,RouterModule} from "@angular/router";
import {DealsComponent} from "./deals/deals.component";

const route:Routes = [
{path:"deal",component:DealsComponent},
]

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})

export class DealRoutingModule{}