import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageEncryptionDecryptionService } from '../Storage/storage-encryption-decryption.service';

@Injectable({ providedIn: 'root'})
export class AuthGuard {
  public token: any;
  public role: any;
    authToken: any;

  constructor(public router: Router, public sessionstorage: StorageEncryptionDecryptionService) { }

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
    return this.sessionstorage.get(key)!=undefined && this.sessionstorage.get(key)!=""?this.sessionstorage.get(key):null;
  }
}
