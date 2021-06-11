import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InquiryComponent} from './inquiry/inquiry.component';

const routes: Routes = [
  {path: 'inquiries',component:InquiryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InquiriesRoutingModule { }
