import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { UpdatedataRoutingModule } from './updatedata-routing.module';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [
    UpdateComponent
  ],
  imports: [
    CommonModule,
    UpdatedataRoutingModule,
    FormsModule
  ]
})
export class UpdatedataModule { }
