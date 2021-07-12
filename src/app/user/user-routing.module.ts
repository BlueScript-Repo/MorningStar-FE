import {NgModule} from "@angular/core";
import {Routes,RouterModule} from "@angular/router";
import {UserRegistrationComponent} from "./user-registration/user-registration.component";


const route:Routes = [
{path:"register",component:UserRegistrationComponent}
]

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})

export class UserRoutingModule{}