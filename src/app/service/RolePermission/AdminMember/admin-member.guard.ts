import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, CanMatch, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuard } from '../../authguard.service';
import { UserService } from '../../user.service';
@Injectable({
  providedIn: 'root'
})
export class AdminMemberGuard implements CanActivate {
  role:any = '';
  constructor(public user_service:UserService,public router:Router,
    public authGuard: AuthGuard){
  }
 async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      this.role=this.authGuard.getLocalStorage('PERMISSION')!=null?JSON.parse(this.authGuard.getLocalStorage('PERMISSION')):[];
      return this.role['role']=='member' || this.role['role']=='manager'?true:this.FALSE();
  }
  FALSE() {
    this.user_service.Url_Change_Authorization('/authorization');
    return false;
  }
}
