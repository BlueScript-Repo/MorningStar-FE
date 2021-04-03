import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomizationComponent } from './customization/customization.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule,Routes} from '@angular/router';
import { UpdateComponent } from './update/update.component'
import { UserRegistrationComponent } from './user/user-registration/user-registration.component';
import { AuthInterceptor } from './user/AuthInterceptor';
import { PackageListComponent } from './package-list/package-list.component';
import { PackageDetailsComponent } from './package-details/package-details.component';


const route:Routes=[
  {path: 'LandingPage', component: LandingPageComponent},
  {path:'customPackage',component: CustomizationComponent},
  {path:'LoginPage',component: UserRegistrationComponent},
  {path:'updatePage',component: UpdateComponent},
  {path:'',redirectTo:'/LandingPage',pathMatch:'full'}
] 
  

@NgModule({
  declarations: [
    AppComponent, 
    CustomizationComponent,
    LandingPageComponent,
    HeaderComponent,
    FooterComponent,
    UpdateComponent,
    UserRegistrationComponent,
    PackageListComponent,
    PackageDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(route)
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }