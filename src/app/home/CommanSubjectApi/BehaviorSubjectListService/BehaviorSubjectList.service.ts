import { Injectable } from '@angular/core';
import { DocumentService } from '../../../service/document.service';
import { BehaviorSubject, Subject, async } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from '../../../app.config';

@Injectable({
  providedIn: 'root'
})
export class BehaviorSubjectListService {
  TEAMS_LIST: any = new BehaviorSubject([]);
  ALL_USER_DETAILS_LIST: any = new BehaviorSubject([]);
  USER_DETAILS: any = new BehaviorSubject([]);
  NEW_USER_DETAILS: any = [];
  ALL_MEMBER_DETAILS_LIST: any = new BehaviorSubject([]);
  public authToken;
  httpOptions:any = {};
  api_base: string;

  constructor(public servicesObj: DocumentService,private http: HttpClient, public appconfig: AppConfig) {
    this.loadFromLocalStorage();
    this.api_base = appconfig.apiUrl;
    this.httpOptions = {headers: new HttpHeaders({ Authorization: this.authToken })};
    this.callAllCommonApi();
  }
  public loadFromLocalStorage() {
    const token = sessionStorage.getItem("token");
    this.authToken = token;
    return this.authToken;
  }
  callAllCommonApi(){
    console.log('callAllCommonApi');
    this.callAllUser().then((res:any)=>{
      this.ALL_USER_DETAILS_LIST=res;
   });
    this.callTeamList().then((res:any)=>{
       this.TEAMS_LIST=res;
    });
    this.callUser().then((res:any)=>{
      this.USER_DETAILS=res;
   });
    this.callAllUserMember().then((res:any)=>{
      this.ALL_MEMBER_DETAILS_LIST=res;
   });
    this.callUserDetail().then((res:any)=>{
      this.NEW_USER_DETAILS=res;
   });
  }
  callTeamList() {
    return this.http.post(`${this.api_base}/team/get`,{team: "team"},this.httpOptions).toPromise();
  }
  callAllUser() {
    return this.http.get(`${this.api_base}/authenticate/getAllUser`).toPromise();
  }
  callUser(){
    return this.http.post(`${this.api_base}/team/getUser`,{team: "team",},this.httpOptions).toPromise();
  }
  callAllUserMember(){
    return this.http.get(`${this.api_base}/user/getAllUserMember`,this.httpOptions).toPromise();
  }
  callUserDetail(){
    return this.http.get(`${this.api_base}/user/profile`, this.httpOptions).toPromise();
  }
  getAllUser(){ return this.ALL_USER_DETAILS_LIST.asObservable(); }
  getTeamList(){return this.TEAMS_LIST.asObservable();}
  getUser(){return this.USER_DETAILS.asObservable();}
  getAllUserMember(){return this.ALL_MEMBER_DETAILS_LIST.asObservable();}
  getUserDetail(){
  return new Promise(async (resolve,reject)=>{
      await resolve(this.NEW_USER_DETAILS);
  })}
}
