import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NewproductRoutingModule } from './newproduct-routing.module';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    NewproductRoutingModule,
    ReactiveFormsModule
  ]
})
export class NewproductModule { }
