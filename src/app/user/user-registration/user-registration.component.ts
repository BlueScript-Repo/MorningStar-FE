import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserLogin } from '../UserLogin';
import { UserRegistration } from '../UserRegistration';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  constructor(private userService: UserService) { } 

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

    this.userService.createPackage(this.userRegistration).subscribe((res)=>{
      console.log(res);
    });
  } 
  userLogin: UserLogin={
    userName:'',
    password:''
  }

  authenticate(user:any){
    this.userLogin={
      userName: user.userName,
      password: user.password
    }
     this.userService.authenticate(this.userLogin).subscribe((result)=>{
      console.log(result);
    });
  }
 
  ngOnInit(): void {
  }

}
