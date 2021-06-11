import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomizationComponent } from './customization/customization.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule,Routes} from '@angular/router';
import { UpdateComponent } from './update/update.component'
import { UserRegistrationComponent } from './user/user-registration/user-registration.component';
import { AuthInterceptor } from './user/AuthInterceptor';
import { OwlModule } from 'ngx-owl-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import { SiteImagesComponent } from './site-images/site-images.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CommonModule } from '@angular/common';  
import { AuthGuard } from './auth.guard';
import { AgentGuard } from './agent.guard';
import { UserGuard } from './user.guard';
import {DeferLoadModule} from "@trademe/ng-defer-load";

const route:Routes=[
  {path:'LoginPage',component: UserRegistrationComponent},
  {path:'updatePage',component: UpdateComponent,canActivate:[AuthGuard]},
  {path:"uploadProduct",component:AddProductComponent,canActivate:[AuthGuard]},
  {path:"productDetails",component:ProductDetailsComponent},
  {path:"CMS",component:SiteImagesComponent},
] 
  

@NgModule({
  declarations: [
    AppComponent, 
    CustomizationComponent,
    HeaderComponent,
    FooterComponent,
    UpdateComponent,  
    AddProductComponent,
    SiteImagesComponent,
    ProductDetailsComponent,

  ],
  imports: [
    ReactiveFormsModule,
    CarouselModule ,
    OwlModule,
    BrowserModule,
    DeferLoadModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule.forRoot(route,{useHash:true})
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }