import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({ providedIn: 'root' })
export class AuthenticateService {
    public authToken;
    constructor(private http: HttpClient,private userService: UserService,) { }

    public addToken(token) {
      console.log(token)
      sessionStorage.setItem('token', token);
      this.authToken = token;
    }
    public logout() {
      this.userService.loginlogout(false).subscribe((res:any)=>{console.log(res,'loginlogout');this.authToken = null;
      sessionStorage.clear();})
    }
     
}