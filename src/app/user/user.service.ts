import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from './UserLogin';
import { UserRegistration } from './UserRegistration';
import {JwtHelperService} from '@auth0/angular-jwt'

@Injectable({
  providedIn: 'root'
})
export class UserService {


  jwtHelper = new JwtHelperService();


  isAuthenticated:boolean=false;
  Role:any=localStorage.getItem('role');
  private usersUrl!: string; 

  userName="Mayur Bhakare";

  constructor(private http: HttpClient) {
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
  
    logOut(){
      this.Role=localStorage.removeItem('role');
      localStorage.removeItem('token')
      console.log("After Logout"+this.Role);
      localStorage.removeItem('user')
      this.Role='';
    }


    


}