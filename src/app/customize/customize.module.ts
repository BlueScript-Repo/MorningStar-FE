import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomizeRoutingModule } from './customize-routing.module';
import { ProductcustomizationComponent } from './productcustomization/productcustomization.component';


@NgModule({
  declarations: [
    ProductcustomizationComponent
  ],
  imports: [
    CommonModule,
    CustomizeRoutingModule
  ]
})
export class CustomizeModule { }
