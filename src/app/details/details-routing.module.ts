import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductdetailsComponent} from './productdetails/productdetails.component';
const routes: Routes = [
  {path: 'productdetails', component: ProductdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsRoutingModule { }
