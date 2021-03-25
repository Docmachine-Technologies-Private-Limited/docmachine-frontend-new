import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

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
      public master(user) {
        return this.http.post(`http://localhost:3000/v1/documents/uploadFile`, {
            "fullName": user.sbno
      });

      }
}