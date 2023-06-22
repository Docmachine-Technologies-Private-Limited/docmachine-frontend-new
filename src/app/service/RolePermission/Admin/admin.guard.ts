import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, CanMatch, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuard } from '../../authguard.service';
import { UserService } from '../../user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  role:any = '';
  constructor(public user_service:UserService,
    public authGuard: AuthGuard,
    public router:Router){
  }
 async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      this.role=this.authGuard.getLocalStorage('PERMISSION')!=null && this.authGuard.getLocalStorage('PERMISSION')!=""?JSON.parse(this.authGuard.getLocalStorage('PERMISSION')):[];
      return this.role['role']=='manager'?true:this.FALSE();
  }
  FALSE() {
    this.user_service.Url_Change_Authorization('/authorization');
    return false;
  }
}
