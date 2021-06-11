import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { ProductListRoutingModule } from './product-list-routing.module';
import { PackagelistComponent } from './packagelist/packagelist.component';


@NgModule({
  declarations: [
    PackagelistComponent
  ],
  imports: [
    CommonModule,
    ProductListRoutingModule,
    FormsModule
  ]
})
export class ProductListModule { }
