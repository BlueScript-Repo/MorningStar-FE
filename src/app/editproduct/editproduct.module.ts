import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { EditproductRoutingModule } from './editproduct-routing.module';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    EditComponent
  ],
  imports: [
    CommonModule,
    EditproductRoutingModule,
    FormsModule
  ]
})
export class EditproductModule { }
