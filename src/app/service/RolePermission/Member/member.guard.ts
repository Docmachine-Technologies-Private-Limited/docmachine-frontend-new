import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { AuthGuard } from '../../authguard.service';
import { UserService } from '../../user.service';

@Injectable({
  providedIn: 'root'
})
export class MemberGuard implements CanActivate {
  USER_PROFILE:any=[];
  role:any =[];
  constructor(public authGuard: AuthGuard,
    public user_service:UserService,
    public router:Router){
  }
 canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot) {
      this.role=this.authGuard.getLocalStorage('PERMISSION')!=null?JSON.parse(this.authGuard.getLocalStorage('PERMISSION')):[];
      return this.role['role']=='member'?true:this.FALSE();
  }
  FALSE() {
    this.user_service.Url_Change_Authorization('/authorization');
    return false;
  }
}
