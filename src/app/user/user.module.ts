import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserRegistrationComponent} from "./user-registration/user-registration.component";
import { FormsModule } from '@angular/forms';
import {UserRoutingModule} from "./user-routing.module";


@NgModule({
  declarations: [UserRegistrationComponent],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule
  ]
})
export class UserModule { }
