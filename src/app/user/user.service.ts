import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from './UserLogin';
import { UserRegistration } from './UserRegistration';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl!: string; 

  constructor(private http: HttpClient) {
    this.usersUrl='http://localhost:8080/'
   }  

  createPackage(userRegistration: UserRegistration) {
   
    let url4 = this.usersUrl + 'user';
    return this.http.post<UserRegistration>(url4, userRegistration);
  } 

  authenticate(userLogin: UserLogin):Observable<any>{
    
    let url1 = this.usersUrl + 'authenticate';
    return this.http.post(url1,userLogin);
  }
}
