import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AppConfig } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { Router } from "@angular/router";
import { BehaviorSubjectListService } from "../home/CommanSubjectApi/BehaviorSubjectListService/BehaviorSubjectList.service";

@Injectable({
  providedIn: 'root'
})
export class TallyAuthorizationService {
  public role;
  public authToken;
  public name;
  api_base: string;
  userData;
  USER_RESULT: any = [];
  public loginData = new BehaviorSubject({});
  public userDataListener$ = this.loginData.asObservable();
  constructor(private http: HttpClient, public router: Router, public SubjectListService: BehaviorSubjectListService) {
    this.api_base = AppConfig.TALLY_API;
    console.log(this.api_base)
  }

  public addLoginData(data) {
    this.loginData.next(data);
    this.userData = data
  }

  public addToken(token) {
    console.log(token);
    sessionStorage.setItem("token", token);
    this.authToken = token;
  }
  public loadFromLocalStorage() {
    const token = sessionStorage.getItem("token");
    this.authToken = token;
    return this.authToken;
  }

  public TallygetUser() {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/team/getUser`, { team: "team", }, httpOptions);
  }

  public getTallyUserbyEmail(loginData) {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };
    console.log(httpOptions);
    return this.http.post(`${this.api_base}/authenticate/getUserbyEmail`, loginData, httpOptions);
  }

  public TallyUserlogin(loginData) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + btoa(loginData.email + ":" + loginData.password),
      }),
    };
    console.log('httpOptions');
    console.log(httpOptions);
    return this.http.post(`${this.api_base}/authenticate/login`, null, httpOptions);
  }

  TallyloginVerfiy(data) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/otp/login/verify`, { data: data }, httpOptions);
  }

  Tallyloginlogout(bool) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = { headers: new HttpHeaders({ Authorization: this.authToken }) };
    return this.http.post(`${this.api_base}/otp/loginlogout`, { status: bool }, httpOptions);
  }
  
  Rolelogin(data: any) {
    let authToken: any = this.loadFromLocalStorage();
    console.log(authToken, data);
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + btoa(data.emailId + ":" + data.password),
      }),
    };
    console.log('httpOptions');
    console.log(httpOptions);
    return this.http.post(`${this.api_base}/authenticate/SingIn`, null, httpOptions);
  }

}
