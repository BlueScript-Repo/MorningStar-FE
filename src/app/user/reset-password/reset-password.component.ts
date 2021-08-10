import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResetPassword } from '../ResetPassword';
import { UserService } from '../user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  
  constructor(private userService:UserService,private route:Router) { }

  OneTimePassword:any=localStorage.getItem('otp');
  conformNewPassword :String='';
  newPassword:String='';

  
  resetPassword :ResetPassword={
    conformNewPassword :'',
    newPassword :''
  }
  // getPassword(value1:string,value2:string)
  // {
  // //   this.OneTimePass= localStorage.getItem('OTP');
  //   if(this.OneTimePassword==)
  //   {
  //     this.conformNewPassword=value1;
  //     this.newPassword=value2;
  //     this.userService.getResetPassword(value1,value2).subscribe((res)=>{
  //       console.log(res);
  //     });
  
  //   }
  //   else{
  //     console.log("Wrong Password")
  //   }
  // }

  // }

  submitPassword(submitForm:any){
  }

  ngOnInit(): void {
  }

}
