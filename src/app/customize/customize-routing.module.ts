import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductcustomizationComponent} from './productcustomization/productcustomization.component';

const routes: Routes = [
  {path:"custom",component:ProductcustomizationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomizeRoutingModule { }
