import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { InquiriesRoutingModule } from './inquiries-routing.module';
import { InquiryComponent } from './inquiry/inquiry.component';


@NgModule({
  declarations: [
    InquiryComponent
  ],
  imports: [
    CommonModule,
    InquiriesRoutingModule,
    FormsModule
  ]
})
export class InquiriesModule { }
