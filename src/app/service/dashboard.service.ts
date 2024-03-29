import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AppConfig } from "../../environments/environment";
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: "root" })
export class DashBoardService {
  api_base: string;
  authToken: any;
  DASH_BOARD_TYPES:string='';

  public loginData = new BehaviorSubject({});
  constructor(private http: HttpClient) {
    this.api_base = AppConfig.BASE_URL;
    console.log(this.api_base)
  }

  public loadFromLocalStorage() {
    const token = sessionStorage.getItem('token');
    this.authToken = token;
    return this.authToken;
  }

  getDashboardData(){
    this.loadFromLocalStorage();
    const httpOptions = {
      headers: new HttpHeaders({Authorization : this.authToken}),
    };
    let url = `${this.api_base}/dashboard-Data`;
    return this.http.get(url, httpOptions);
  }
  getDashboardDataAll(){
    this.loadFromLocalStorage();
    const httpOptions = {
      headers: new HttpHeaders({Authorization : this.authToken}),
    };
    let url = `${this.api_base}/dashboard-Data/getExceldata`;
    return this.http.get(url, httpOptions);
  }
  getOrderShipment(filterData){
    this.loadFromLocalStorage();
    const httpOptions = {
      headers: new HttpHeaders({Authorization : this.authToken}),
    };
    let url = `${this.api_base}/dashboard-Data/orderShipment?filtertype=${filterData}`;
    return this.http.get(url, httpOptions);
  }


}
