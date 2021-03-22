import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomizationComponent } from './customization/customization.component';



@NgModule({
  declarations: [CustomizationComponent],
  imports: [
    CommonModule
  ],
  exports:[
    CustomizationComponent
  ]
})
export class PackageCustomizatonModule { }
