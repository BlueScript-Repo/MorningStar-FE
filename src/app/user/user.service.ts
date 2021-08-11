import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from './UserLogin';
import { UserRegistration } from './UserRegistration';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Router} from "@angular/router";
import { ResetPassword } from './ResetPassword';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  jwtHelper = new JwtHelperService();

  isAuthenticated:boolean=false;
  Role:any=localStorage.getItem('role');
  private usersUrl!: string; 

  userName="Mayur Bhakare";

  constructor(private http: HttpClient,private router:Router) {
       this.usersUrl='http://morningstarweb-env.eba-pb7idjdb.ap-south-1.elasticbeanstalk.com/';
   }  

  

  createUser(userRegistration: UserRegistration) {
   
    let url4 = this.usersUrl + 'user';
    console.log(userRegistration);
    
    return this.http.post<UserRegistration>(url4, userRegistration);
  } 

  username:any='';
  authenticate(userLogin: UserLogin):Observable<any>{
    let url1 = this.usersUrl + 'authenticate';
    this.username=userLogin.userName;
    localStorage.setItem("user",this.username);
    console.log("This is user login:    "+JSON.stringify(userLogin));
    return this.http.post(url1,userLogin);
  }
  auth(){
    this.Role=localStorage.getItem('role');
    console.log("2"+this.Role);
  }
  

  autologout(expiryTime:any){
    console.log("In autologout");
    setTimeout(() =>{
      this.logOut();
    },expiryTime)

  }
  expiryTime:any=0;
  autoLogin(){
    console.log("In autologin Function.......................");
    let username=localStorage.getItem('user');
    let token=localStorage.getItem('token');
    let expiryTime=localStorage.getItem('expirationTime');
    if(!username && !token && !expiryTime){
      console.log("In if loop........................");
      return;
    }
 
    console.log("Autologout function");
    this.autologout(expiryTime);   
    
  }

    logOut(){
      this.Role=localStorage.removeItem('role');
      localStorage.removeItem('token')
      console.log("After Logout"+this.Role);
      localStorage.removeItem('user');
      localStorage.removeItem('agentId');
      localStorage.removeItem('expirationTime');
      // localStorage.removeItem('code')
      this.Role='';
    this.router.navigate(["/admin/register"])
    }

    getNewPassword(email:string){
      let Email=this.usersUrl + "login/OTP?email="+email;
      console.log("successful"+email);
      return this.http.get(Email);
     
    }
 
    // getResetPassword(newpassword:string,otp:string)
    // {
      // console.log("email"+email);
      //  this.OneTimePass= localStorage.getItem('OTP');
    //   let newPassword=this.usersUrl + "/login/passwordReset?email="+;
    //   console.log("newpassword");
    //   return this.http.put(newPassword,otp);
    // }

    changePass(mail:any,newPass:any,confirmPass:any){
      let url=this.usersUrl+"login/passwordReset?email="+mail;
      let data={
        conformNewPassword:confirmPass,
        newPassword:newPass
      }
      console.log("Change Pass api");
      return this.http.put(url,data)

    }

}