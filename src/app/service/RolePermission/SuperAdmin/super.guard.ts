import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuard } from '../../authguard.service';
import { UserService } from '../../user.service';

@Injectable({
  providedIn: 'root'
})
export class SuperGuard implements CanActivate {
  USER_PROFILE:any=[];
  role:any = '';
  constructor(public authGuard: AuthGuard,
    public user_service:UserService,
    public router:Router){
  }
 async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      this.role=this.authGuard.getLocalStorage('PERMISSION')!=null?JSON.parse(this.authGuard.getLocalStorage('PERMISSION')):[];
      return this.role['emailId']=='docmachinetec@gmail.com'?true:this.FALSE();
  }
  FALSE() {
    this.user_service.Url_Change_Authorization('/authorization');
    return false;
  }
}
