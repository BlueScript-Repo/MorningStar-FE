import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {PackageServiceService} from './../package-service.service';
import {UserService} from './../user/user.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  role:any;
  constructor(public authenticate1:PackageServiceService,public authenticate:UserService,) { }
  rolestorage:any;
  ngOnInit(): void {
    // this.role=localStorage.getItem('role');
    // console.log("Calling "+this.role);
    // this.rolestorage=this.http.getRole()
    // console.log("Rolestorage:-"+this.rolestorage);
    
  }
  logout(){
    this.authenticate.logOut();
  }
}
