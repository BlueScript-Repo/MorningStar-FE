import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForgotPassword } from '../ForgotPassword';
import { UserService } from '../user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private userService: UserService,private route:Router ) { }

  email :String='';

  forgotpassword :ForgotPassword={
    email:'',
  }
  
  otp:any='';
  getOtp(value:String){
    this.otp=value;
    console.log(this.otp);
    this.userService.getNewPassword(this.otp).subscribe((data)=>{
      console.log(data);
    });
  }
  submitEmail(submitForm:any){
  //   this.forgotpassword = {
  //   email: submitForm.email,
  // };
  // console.log(this.forgotpassword.email)
  // this.email=this.forgotpassword.email;
  // console.log(this.email)
  // this.userService.getNewPassword(this.email).subscribe((data)=>{
  //   console.log(data);
  // });
}
  

  ngOnInit(): void {
  }

}
