import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserRegistrationComponent} from "./user-registration/user-registration.component";
import { FormsModule } from '@angular/forms';
import {UserRoutingModule} from "./user-routing.module";
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [UserRegistrationComponent, ForgotPasswordComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule
  ]
})
export class UserModule { }