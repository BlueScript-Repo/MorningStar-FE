import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserLogin } from '../UserLogin';
import { UserRegistration } from '../UserRegistration';
import {Router} from "@angular/router";
import {PackageServiceService} from './../../package-service.service'
import {JwtHelperService} from '@auth0/angular-jwt';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  constructor(private userService: UserService,private router:Router,private http:PackageServiceService) { } 


  jwtHelper = new JwtHelperService();


  bucketName:any={};
  mainPage="Login Page";
  section1="Signin";
  section2="Signup";
  signin:any=[];
  signup:any=[];
  getImages(){
    this.bucketName=this.mainPage+"/"+this.section1;
    this.http.getImages(this.bucketName).subscribe(res=>{
      console.log(res);
      this.signin=res;
    })
    this.bucketName=this.mainPage+"/"+this.section2;
    this.http.getImages(this.bucketName).subscribe(res=>{
      console.log(res);
      this.signup=res;
    })
  }  
  
  ngOnInit(): void {
    this.getImages();
    this.user=this.userService.userName
    console.log(this.user);
  } 
  user:string='';
  expirey:any='';
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
    },(error=>{
      this.errcode=error.status;
      console.log(this.errcode);
      
      console.log("error is");
      console.log(error);
      console.log(error.status);
      if (error.status!=200) {
      //  alert(error.status);
       this.errcode=error.status;
       const container = document.querySelector('.popup1');
       container?.classList.toggle('active');
    }
    })
    );

  } 
  userLogin: UserLogin={
    userName:'',
    password:''
  }

  token:any={};
  jwtToken:any="";
  role:any;
  AgentId:any;
  Authorization:any;
rolestorage:any;
errcode:any=0;
  authenticate(user:any){
    this.userLogin={
      userName: user.userName,
      password: user.password
    }
    console.log(this.userLogin.userName);
    console.log(this.userLogin.password);
    
     this.userService.authenticate(this.userLogin).subscribe((result)=>{       
      console.log("This is Result: "+JSON.stringify(result));
      this.token=result;
      console.log(this.token.jwtToken);
      this.role=result.role;
      this.AgentId=result.agentId;
      console.log(this.AgentId);
      localStorage.setItem('agentId',this.AgentId);      
      console.log(this.role);
      localStorage.setItem('token', this.token.jwtToken);
      localStorage.setItem('role',this.role);
      this.rolestorage=localStorage.getItem('role')
      console.log(this.rolestorage);
      this.jwtToken = localStorage.getItem('token');
      console.log("Jwt Token Is  :______________"+JSON.stringify(this.jwtToken));

      const DecryptedToken=this.jwtHelper.decodeToken(this.jwtToken);
      console.log(DecryptedToken);
      this.expirey=DecryptedToken.exp;
      console.log(this.expirey);
      localStorage.setItem('expirationTime',this.expirey);
      
      this.userService.autologout(this.expirey);
      
        if (this.token.jwtToken) {
          this.userService.auth()
          console.log("Hiii welcome to login");
          this.errcode=200;
          console.log(this.errcode);
          
    this.router.navigate(["/landing/landingPage"]);
      }
     
    },(error=>{
      this.errcode=error.status;
      console.log(this.errcode);
      
      console.log("error is");
      console.log(error);
      console.log(error.status);
      if (error.status!=200) {
      //  alert(error.status);
       this.errcode=error.status;
       const container = document.querySelector('.popup1');
       container?.classList.toggle('active');
    }
    }));
  } 
  
  toggle(){
    var element=document.getElementById("sign-up-btn");
    // style=window.getComputedStyle(element);
    element?.addEventListener("click",function(){
      document.getElementsByClassName("container123")[0].classList.add("sign-up-mode");
    } )
  }
  toggle2(){
    document.getElementById("sign-in-btn")?.addEventListener("click",function(){
      document.getElementsByClassName("container123")[0].classList.remove("sign-up-mode");
    } )
  }
  toggle3(){
    document.getElementById("sign-up-btn1")?.addEventListener("click",function(){
      document.getElementsByClassName("container123")[0].classList.remove("sign-up-mode");
    } )
  }
 modal(){
  document.getElementById("open-popup-btn")?.addEventListener("click",function(){
    document.getElementsByClassName("popup")[0].classList.add("active");
  });
 }
 closeModal(){
  document.getElementById("dismiss-popup-btn")?.addEventListener("click",function(){
    document.getElementsByClassName("popup")[0].classList.remove("active");
  });
 }


// modal1(){
//   const container = document.querySelector('.container');
//    container?.classList.toggle('active');
//   }
 closeModal1(){
   
  document.getElementById("dismiss-popup1-btn")?.addEventListener("click",function(){
    document.getElementsByClassName("popup1")[0].classList.remove("active");
  });
 }
  
}
