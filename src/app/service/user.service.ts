import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UserService {
    public authToken;
    constructor(private http: HttpClient) { }

    public addToken(token) {
      console.log(token)
      localStorage.setItem('token', token);
      this.authToken = token;
    }
    public loadFromLocalStorage() {
      const token = localStorage.getItem('token');
      this.authToken = token;
      return this.authToken;
    }

    

    register(user) {
        return this.http.post(`http://localhost:3000/v1/authenticate/signup`, {
            "fullName": user.fullName,
            "emailId": user.email,
            "password": user.password,
            "confirmPassword": user.confirmPassword,
      });
    }
    public login(loginData) {
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json', 'Authorization': 'Bearer ' +
              btoa(loginData.email + ':' + loginData.password)
          })
        };
        console.log(httpOptions)

        return this.http.post(`http://localhost:3000/v1/authenticate/login`, null, httpOptions);
      }
     
}