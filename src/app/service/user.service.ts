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

    public updatePsw(data,email) {
      

      return this.http.put(`http://localhost:3000/v1/authenticate/updatepsw`, {
        newPassword:data.password1,
        emailId: email

      });
    }


    public forgotpsw(loginData) {
      

      return this.http.put(`http://localhost:3000/v1/authenticate/forgotpsw`, {
        emailId:loginData.emailId
      });
    }

    public creatTeam(team) {
      this.loadFromLocalStorage();
      console.log(this.authToken)
      const httpOptions = {
          headers: new HttpHeaders({'Authorization': this.authToken })
      };
        return this.http.post(`http://localhost:3000/v1/team/post`, {
            "team": team
      },httpOptions);
    }

    public getUser() {
      this.loadFromLocalStorage();
      console.log(this.authToken)
      const httpOptions = {
          headers: new HttpHeaders({'Authorization': this.authToken })
      };
        return this.http.post(`http://localhost:3000/v1/team/getUser`, {
            "team": "team"
      },httpOptions);
    }

    public creatBene(bene) {
      this.loadFromLocalStorage();
      console.log(this.authToken)
      const httpOptions = {
          headers: new HttpHeaders({'Authorization': this.authToken })
      };
        return this.http.post(`http://localhost:3000/v1/bene/post`, {
            "bene": bene
      },httpOptions);
    }


    getBene(boeNumber) {
      this.loadFromLocalStorage();
      console.log(this.authToken)
      const httpOptions = {
          headers: new HttpHeaders({'Authorization': this.authToken })
      };
        return this.http.post(`http://localhost:3000/v1/bene/get`, {
            "boeNumber": boeNumber
      },httpOptions);
    }
    getSingleBene(id) {
      this.loadFromLocalStorage();
      console.log(this.authToken)
      const httpOptions = {
          headers: new HttpHeaders({'Authorization': this.authToken })
      };
        return this.http.post(`http://localhost:3000/v1/bene/getSingleBene`, {
            "id": id
      },httpOptions);
    }

    updateBene(id,bene) {
      this.loadFromLocalStorage();
      console.log(this.authToken)
      const httpOptions = {
          headers: new HttpHeaders({'Authorization': this.authToken })
      };
        return this.http.post(`http://localhost:3000/v1/bene/update`, {
            "id": id,
            "bene":bene
      },httpOptions);
    }

    public addMemeber(id,member) {
      this.loadFromLocalStorage();
      console.log(this.authToken)
      const httpOptions = {
          headers: new HttpHeaders({'Authorization': this.authToken })
      };
        return this.http.post(`http://localhost:3000/v1/member/post`, {
            "id": id,
            "member": member
      },httpOptions);
    }
    public getMemeber(id) {
      this.loadFromLocalStorage();
      console.log(this.authToken)
      const httpOptions = {
          headers: new HttpHeaders({'Authorization': this.authToken })
      };
        return this.http.post(`http://localhost:3000/v1/member/get`, {
            "teamId": id
      },httpOptions);
    }
     
}