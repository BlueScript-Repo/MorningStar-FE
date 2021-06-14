import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddpackageComponent} from './addpackage/addpackage.component';

const routes: Routes = [
  {path: 'newproduct', component: AddpackageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackageRoutingModule{}