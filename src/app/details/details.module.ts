import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { DetailsRoutingModule } from './details-routing.module';
import { ProductdetailsComponent } from './productdetails/productdetails.component';


@NgModule({
  declarations: [
    ProductdetailsComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    FormsModule
  ]
})
export class DetailsModule { }
