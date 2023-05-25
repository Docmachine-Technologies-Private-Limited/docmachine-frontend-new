import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root'})
export class AuthGuard {
  public token: any;
  public role: any;
    authToken: any;

  constructor(public router: Router) { }

  canActivate() {
    if (this.isLoggedIn()) {
      return true;
    } else {
      alert('You don\'t have permission to view this page');
      this.router.navigate(['/signin']);
      return false;
    }
  }

  isLoggedIn(): boolean {
    this.token = sessionStorage.getItem('token');
    if (this.token === null) {
      return false;
    } else {
      return true;
    }
  }

  public loadFromLocalStorage() {
    const token = sessionStorage.getItem('token');
    this.authToken = token;
    return this.authToken;
  }
  public setLocalStorage(key: string, value:any){
    sessionStorage.setItem(key,value);
  }
  public getLocalStorage(key: string):any{
    return sessionStorage.getItem(key);
  }
}
