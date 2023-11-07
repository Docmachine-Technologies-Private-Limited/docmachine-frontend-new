import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';
import { observable, Observable, of, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { AppConfig } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LEIRecordsService {
  authToken: any;
  public headers;
  api_base: string;
  constructor(public http: HttpClient, private router: Router,) {
    this.api_base = AppConfig?.BASE_URL;
    console.log(this.api_base);
  }
  public loadFromLocalStorage() {
    const token = sessionStorage.getItem('token');
    this.authToken = token;
    return this.authToken;
  }

  getRecordsLEI(id:any) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    let url = `${this.api_base}/LEI_RECORDS/post`;
    return this.http.post(url, { 'lei': id }, httpOptions);
  }
}
