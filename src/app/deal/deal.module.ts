import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealsComponent } from './deals/deals.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {DealRoutingModule} from './deal-routing.module';


@NgModule({
  declarations: [
    DealsComponent
  ],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports: [DealRoutingModule]
})
export class DealModule { }
