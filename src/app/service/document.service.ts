import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable({ providedIn: 'root' })

export class DocumentService {
    authToken: string;
    public headers;
    constructor(private http: HttpClient) { }
    public loadFromLocalStorage() {
        const token = localStorage.getItem('token');
        this.authToken = token;
        return this.authToken;
      }
    
    getMaster(user) {
      this.loadFromLocalStorage();
      console.log(this.authToken)
      const httpOptions = {
          headers: new HttpHeaders({'Authorization': this.authToken })
      };
      let url = `http://localhost:3000/v1/master/get`;
      return this.http.get(url, httpOptions);
    }

    getBoe(user) {
      this.loadFromLocalStorage();
      console.log(this.authToken)
      const httpOptions = {
          headers: new HttpHeaders({'Authorization': this.authToken })
      };
      let url = `http://localhost:3000/v1/boe/get`;
      return this.http.get(url, httpOptions);
    }

    updateMaster(user,_id) {
      this.loadFromLocalStorage();
      console.log(this.authToken)
      const httpOptions = {
          headers: new HttpHeaders({'Authorization': this.authToken })
      };
        return this.http.post(`http://localhost:3000/v1/master/update`, {
            "_id": _id,
            "master": user
      },httpOptions);
    }

    updateMasterBySb(user,_id) {
      this.loadFromLocalStorage();
      console.log(this.authToken)
      const httpOptions = {
          headers: new HttpHeaders({'Authorization': this.authToken })
      };
        return this.http.post(`http://localhost:3000/v1/master/updateBySb`, {
            "_id": _id,
            "master": user
      },httpOptions);
    }

    updateBoe(user,_id) {
      this.loadFromLocalStorage();
      console.log(this.authToken)
      const httpOptions = {
          headers: new HttpHeaders({'Authorization': this.authToken })
      };
        return this.http.post(`http://localhost:3000/v1/boe/update`, {
            "_id": _id,
            "master": user
      },httpOptions);
    }

    updateBoeByBoe(user,_id) {
      this.loadFromLocalStorage();
      console.log(this.authToken)
      const httpOptions = {
          headers: new HttpHeaders({'Authorization': this.authToken })
      };
        return this.http.post(`http://localhost:3000/v1/boe/updateByBoe`, {
            "_id": _id,
            "master": user
      },httpOptions);
    }
    getBoeByBoe(boeNumber) {
      this.loadFromLocalStorage();
      console.log(this.authToken)
      const httpOptions = {
          headers: new HttpHeaders({'Authorization': this.authToken })
      };
        return this.http.post(`http://localhost:3000/v1/boe/getBoeByBoe`, {
            "boeNumber": boeNumber
      },httpOptions);
    }


    public getPDF(data): Observable<any> {
      console.log("inside service")
      const httpOptions = {
        headers: new HttpHeaders({'Authorization': this.authToken })
    };
      return this.http.post(`http://localhost:3000/v1/pdf/generate`, data, httpOptions)
      .map(res => res );
    }
     
}