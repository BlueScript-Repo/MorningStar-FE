import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ForgotPassword } from '../ForgotPassword';
import { ResetPassword } from '../ResetPassword';
import { UserService } from '../user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private userService: UserService,private route:Router ) { }

  email :String='';
  // conformNewPassword :String='';
  // newPassword:String='';

  // OneTimePass:any=localStorage.getItem('OTP');
  forgotpassword :ForgotPassword={
    email:'',
  }

  resetPassword :ResetPassword={
    conformNewPassword :'',
    newPassword :''
  }
  
  otp:any='';
  value:any='';
  getOtp(value:String){
    this.otp=value;
    console.log(this.otp);
    this.userService.getNewPassword(this.otp).subscribe((data)=>{
      console.log(data);
    }
    ,(error=>{
      console.log(error.error.text);
      this.value=error.error.text;
      localStorage.setItem("otp",this.value);
    }),
    // (error=>{
    //   console.lob(error.)
    // })
    );
    // localStorage.setItem("OTP",this.otp);  
    
    this.route.navigate(["/admin/resetPassword"]);
    
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


// getPassword()
// {
//   this.OneTimePass= localStorage.getItem('OTP');
//   if(this.OneTimePass==this.otp)
//   {
    // this.conformNewPassword=value1;
    // this.newPassword=value2;
    // this.userService.getResetPassword()
//     this.userService.getResetPassword().subscribe((res)=>{
//       console.log(res);
//     });

//   }
//   else{
//     console.log("Wrong Password")
//   }
// }
  

  ngOnInit(): void {
  }

}
