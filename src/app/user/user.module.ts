import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';



@NgModule({
  declarations: [UserLoginComponent, UserRegistrationComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
