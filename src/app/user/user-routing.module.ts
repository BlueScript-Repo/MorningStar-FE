import {NgModule} from "@angular/core";
import {Routes,RouterModule} from "@angular/router";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { ResetPassword } from "./ResetPassword";
import {UserRegistrationComponent} from "./user-registration/user-registration.component";


const route:Routes = [
{path:"register",component:UserRegistrationComponent},
{path:"forgot",component:ForgotPasswordComponent},
{path:"resetPassword",component:ResetPasswordComponent}
]

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})

export class UserRoutingModule{}