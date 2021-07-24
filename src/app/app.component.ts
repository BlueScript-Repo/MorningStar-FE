import { Component } from '@angular/core';
import {PackageServiceService} from './package-service.service';
import { UserService } from './user/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = '';
  constructor(public authService:PackageServiceService,public http:UserService,){}
    ngOnInit(): void {
      // this.http.autologout(10000);  
      this.http.autoLogin();
  }
}
