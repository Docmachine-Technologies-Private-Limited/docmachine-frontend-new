import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";

@Injectable({ providedIn: "root" })
export class DocumentService {
  authToken: string;
  public headers;
  constructor(private http: HttpClient) {}
  public loadFromLocalStorage() {
    const token = localStorage.getItem("token");
    this.authToken = token;
    return this.authToken;
  }
  showInvoice = false;
  draft;
  task
  pdfData: any = [];

  getMaster(user) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    let url = `http://localhost:3000/v1/master/get`;
    return this.http.get(url, httpOptions);
  }

  getBoe(user) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    let url = `http://localhost:3000/v1/boe/get`;
    return this.http.get(url, httpOptions);
  }

  updateMaster(user, _id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `http://localhost:3000/v1/master/update`,
      {
        _id: _id,
        master: user,
      },
      httpOptions
    );
  }

  updateMasterBySb(user, _id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `http://localhost:3000/v1/master/updateBySb`,
      {
        _id: _id,
        master: user,
      },
      httpOptions
    );
  }

  updateBoe(user, _id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `http://localhost:3000/v1/boe/update`,
      {
        _id: _id,
        master: user,
      },
      httpOptions
    );
  }

  updateBoeByBoe(user, _id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `http://localhost:3000/v1/boe/updateByBoe`,
      {
        _id: _id,
        master: user,
      },
      httpOptions
    );
  }
  getBoeByBoe(boeNumber) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `http://localhost:3000/v1/boe/getBoeByBoe`,
      {
        boeNumber: boeNumber,
      },
      httpOptions
    );
  }

  public getPDF(data): Observable<any> {
    console.log("inside service");
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http
      .post(`http://localhost:3000/v1/pdf/generate`, data, httpOptions)
      .map((res) => res);
  }

  addPipo(pipo) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };

    return this.http.post(
      `http://localhost:3000/v1/pipo/post`,
      { pipo: pipo },
      httpOptions
    );
  }

  getPipo() {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };

    return this.http.get(`http://localhost:3000/v1/pipo/get`, httpOptions);
  }
  getPipoByPipoNo(id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `http://localhost:3000/v1/pipo/getSinglePipo`,
      {
        id: id,
      },
      httpOptions
    );
  }

  addTask(data) {
    console.log("I am in service");
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `http://localhost:3000/v1/task/post`,
      data,
      httpOptions
    );
  }

  getTask(data) {
    console.log("I am in service calling transacytions");
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      "http://localhost:3000/v1/task/get",
      data,
      httpOptions
    );
  }
  getBoeTask(data) {
    console.log("I am in service calling transacytions");
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      "http://localhost:3000/v1/task/getBoeTask",
      data,
      httpOptions
    );
  }

  getOneTask(data) {
    console.log("I am in service calling transacytions");
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      "http://localhost:3000/v1/task/getOne",
      data,
      httpOptions
    );
  }

  completeTask(data) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };

    return this.http.post(
      "http://localhost:3000/v1/task/complete",
      data,
      httpOptions
    );
  }
}