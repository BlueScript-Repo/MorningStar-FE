import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from './UserLogin';
import { UserRegistration } from './UserRegistration';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  Role:string='';

  private usersUrl!: string; 

  userName="Mayur Bhakare";

  constructor(private http: HttpClient) {
       this.usersUrl='http://morningstarapis-env.eba-k8smp6gh.ap-south-1.elasticbeanstalk.com/';
   }  

   setRole(data:any){
     this.Role=data;
   }

   getRole(){
     return this.Role;
   }

  createUser(userRegistration: UserRegistration) {
   
    let url4 = this.usersUrl + 'user';
    console.log(userRegistration);
    
    return this.http.post<UserRegistration>(url4, userRegistration);
  } 

  authenticate(userLogin: UserLogin):Observable<any>{
    let url1 = this.usersUrl + 'authenticate';
    console.log(userLogin);
    return this.http.post(url1,userLogin);
  }
}