import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddpackageComponent } from './addpackage/addpackage.component';
import {PackageRoutingModule} from './package-routing.module';


@NgModule({
  declarations: [
    AddpackageComponent
  ],
  imports: [
    CommonModule,
    PackageRoutingModule
  ]
})
export class PackageModule { }
