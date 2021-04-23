import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserLogin } from '../UserLogin';
import { UserRegistration } from '../UserRegistration';
import {Router} from "@angular/router";
@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  constructor(private userService: UserService,private router:Router) { } 
user:string='';
  userRegistration : UserRegistration={

    email:'',
    password:'',
    confirmPassword: '',
    contactNo:'',
    pincode:'',
    firstName:'',
    lastName:''

  }

  submitUser(submitForm:any){
    this.userRegistration = {
      email: submitForm.email,
      password: submitForm.password,
      confirmPassword: submitForm.confirmPassword,
      firstName: submitForm.firstName,
      lastName: submitForm.lastName,
      pincode:submitForm.pincode,
      contactNo: submitForm.contactNo
    };
    this.userService.createUser(this.userRegistration).subscribe((res)=>{
      console.log(res);
    });
  } 
  userLogin: UserLogin={
    userName:'',
    password:''
  }

  token:any={};
  role:any;
  Authorization:any;
rolestorage:any;
  authenticate(user:any){
    this.userLogin={
      userName: user.userName,
      password: user.password
    }
    console.log(this.userLogin.userName);
    console.log(this.userLogin.password);
    
     this.userService.authenticate(this.userLogin).subscribe((result)=>{       
      console.log(result);
      this.token=result;
      console.log(this.token.jwtToken);
      this.role=result.role;
      console.log(this.role);
      localStorage.setItem('token', this.token.jwtToken);
      localStorage.setItem('role',this.role);
      this.rolestorage=localStorage.getItem('role')
      console.log(this.rolestorage);
        if (this.token.jwtToken) {
    this.router.navigate(["/HomePage"]);
    alert("Welcome")
      }
     
    });
  } 
  ngOnInit(): void {
    this.user=this.userService.userName
    console.log(this.user);
  }
  
}
