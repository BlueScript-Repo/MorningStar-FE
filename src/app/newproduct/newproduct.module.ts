import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { NewproductRoutingModule } from './newproduct-routing.module';
import { AddproductComponent } from './addproduct/addproduct.component';


@NgModule({
  declarations: [
    AddproductComponent
  ],
  imports: [
    CommonModule,
    NewproductRoutingModule,
    FormsModule
  ]
})
export class NewproductModule { }
