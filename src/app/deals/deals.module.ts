import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from "@angular/router";
import { DealsComponent } from './deals.component';

const route: Routes=[
{path:'',component:DealsComponent}
]

@NgModule({
  declarations: [
    DealsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  ]
})
export class DealsModule { }
