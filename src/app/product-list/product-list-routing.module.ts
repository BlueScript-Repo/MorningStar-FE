import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PackagelistComponent} from './packagelist/packagelist.component';

const routes: Routes = [
  {path: 'list',component:PackagelistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductListRoutingModule { }
