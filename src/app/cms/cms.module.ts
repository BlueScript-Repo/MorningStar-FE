import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { CmsRoutingModule } from './cms-routing.module';
import { UploadimagesComponent } from './uploadimages/uploadimages.component';


@NgModule({
  declarations: [
    UploadimagesComponent
  ],
  imports: [
    CommonModule,
    CmsRoutingModule,
    FormsModule
  ]
})
export class CmsModule { }
