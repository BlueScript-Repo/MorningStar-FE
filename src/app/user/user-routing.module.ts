import {NgModule} from "@angular/core";
import {Routes,RouterModule} from "@angular/router";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";

import {UserRegistrationComponent} from "./user-registration/user-registration.component";


const route:Routes = [
{path:"register",component:UserRegistrationComponent},
{path:"forgot",component:ForgotPasswordComponent}
]

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})

export class UserRoutingModule{}