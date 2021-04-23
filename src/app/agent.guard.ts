import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {  UserService} from "./user/user.service";

@Injectable({
  providedIn: 'root'
})
export class AgentGuard implements CanActivate {
  constructor(private authenticate:UserService,private router:Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authenticate.Role=='AGENT'){
        return true
      }
this.router.navigate([''])
    return false;
  }
  
}
