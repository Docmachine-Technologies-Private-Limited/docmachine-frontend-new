import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, CanMatch, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../../user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  USER_PROFILE:any=[];
  role:any = '';
  constructor(public user_service:UserService,public router:Router){
  }
 async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    await this.user_service.getUser_Profile().then(role_Authorization=>this.role=role_Authorization['role']);
      if (this.role=="manager") {
        return true;
      } else {
        this.user_service.Url_Change_Authorization('/authorization');
         return false;
      }
  }
}
