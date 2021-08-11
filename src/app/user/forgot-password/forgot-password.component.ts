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
        document.querySelector("#progress")?.classList.add("active");
        document.querySelector(".Form1")?.classList.add("active");
        document.querySelector(".Form2")?.classList.add("active");
      console.log(error.error.text);
      this.value=error.error.text;
      localStorage.setItem("otp",this.value);
      // this.next();
      //   document.querySelector(".Form1")?.classList.toggle("active");
      //   document.querySelector("#progress")?.classList.toggle("active");
        
  
    }),
    // (error=>{
    //   console.lob(error.)
    // })
    );
    // localStorage.setItem("OTP",this.otp);  
    
    // this.route.navigate(["/admin/resetPassword"]);
    
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
  
next(){
  // document.getElementById('next1')?.addEventListener('click',function(){
  //   document.getElementsByClassName('Form1')[0].classList.add('active');
  //   document.getElementsByClassName('Form2')[0].classList.add('active');
  //   document.getElementById('progress')?.classList.add('active');
  // })

        
}


CheckOtp(val:any){
  console.log(val);
  let UserOtp=val;
  let OTP=localStorage.getItem('otp');
  if(UserOtp==OTP){
    document.querySelector("#progress")?.classList.add("active1");
    document.querySelector(".Form2")?.classList.add("active1");
    document.querySelector(".Form3")?.classList.add("active");

      // document.getElementsByClassName('Form2')[0].classList.add('active1');
      // document.getElementsByClassName('Form3')[0].classList.add('active');
      // document.getElementById('progress')?.classList.add('active1');
  }
  else if(UserOtp!=OTP){
    alert("UnSuccess..........!");
  }
}

errCode=0;
ChangePass(newPass:any,confirmPass:any){
  if(newPass==confirmPass){
    // alert("Successfull");
    this.userService.changePass(this.otp,newPass,confirmPass).subscribe(res=>{
      console.log("Changed Pass");
      this.errCode=200;
    
      if (this.errCode==200){
        const container = document.querySelector('.popup');
         container?.classList.toggle('active');
         console.log("Error code is equals to 200");
      }
    },(error=>{
      this.errCode=error.status;
          console.log(this.errCode);
          if (this.errCode!=200) {
            const container = document.querySelector('.popup1');
            container?.classList.toggle('active');
            console.log("Error code is not equals to 200");     
          } 
    }))
   
  }
  else if(newPass!=confirmPass){
    alert("Unsuccessful");
  }


}

closeModal(){
     
  // document.getElementById("dismiss-popup-btn")?.addEventListener("click",function(){
  //   document.getElementsByClassName("popup")[0].classList.remove("active");
  // });

  document.querySelector(".popup")?.classList.remove("active");
  this.route.navigate(['/admin/register']);

 }
 closeModal1(){
 
  document.getElementById("dismiss-popup1-btn")?.addEventListener("click",function(){
    document.getElementsByClassName("popup1")[0].classList.remove("active");
  });
 }
  ngOnInit(): void {
  }

}
