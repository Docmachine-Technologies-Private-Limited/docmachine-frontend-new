import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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
     
}