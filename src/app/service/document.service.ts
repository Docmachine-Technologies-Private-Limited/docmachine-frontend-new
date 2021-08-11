import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";

@Injectable({ providedIn: "root" })
export class DocumentService {
  authToken: string;
  public headers;
  constructor(private http: HttpClient) { }
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
    let url = `https://dm.uipep.com/v1/master/get`;
    return this.http.get(url, httpOptions);
  }

  getBoe(user) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    let url = `https://dm.uipep.com/v1/boe/get`;
    return this.http.get(url, httpOptions);
  }

  updateMaster(user, _id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `https://dm.uipep.com/v1/master/update`,
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
      `https://dm.uipep.com/v1/master/updateBySb`,
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
      `https://dm.uipep.com/v1/boe/update`,
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
      `https://dm.uipep.com/v1/boe/updateByBoe`,
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
      `https://dm.uipep.com/v1/boe/getBoeByBoe`,
      {
        boeNumber: boeNumber,
      },
      httpOptions
    );
  }

  getMasterBySb(sbno) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `https://dm.uipep.com/v1/master/getMasterBySb`,
      {
        sbno: sbno,
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
      .post(`https://dm.uipep.com/v1/pdf/generate`, data, httpOptions)
      .map((res) => res);
  }

  addPipo(pipo) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };

    return this.http.post(
      `https://dm.uipep.com/v1/pipo/post`,
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

    return this.http.get(`https://dm.uipep.com/v1/pipo/get`, httpOptions);
  }
  getPipoByPipoNo(id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `https://dm.uipep.com/v1/pipo/getSinglePipo`,
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
      `https://dm.uipep.com/v1/task/post`,
      data,
      httpOptions
    );
  }

  getPipoTask(data) {
    console.log("I am in service calling transacytions");
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      "https://dm.uipep.com/v1/task/getPipo",
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
      "https://dm.uipep.com/v1/task/getBoeTask",
      data,
      httpOptions
    );
  }

  getSbTask(data) {
    console.log("I am in service calling transacytions");
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      "https://dm.uipep.com/v1/task/getSbTask",
      data,
      httpOptions
    );
  }

  getPipoInwardTask(data) {
    console.log("I am in service calling transacytions");
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      "https://dm.uipep.com/v1/task/getPipoInwardTask",
      data,
      httpOptions
    );
  }

  getLcTask(data) {
    console.log("I am in service calling transacytions");
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      "https://dm.uipep.com/v1/task/getLcTask",
      data,
      httpOptions
    );
  }

  getAllTask(data) {
    console.log("I am in service calling transacytions");
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      "https://dm.uipep.com/v1/task/getAllTask",
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
      "https://dm.uipep.com/v1/task/getTask",
      data,
      httpOptions
    );
  }

  getPipoCaTask(data) {
    console.log("I am in service calling transacytions");
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      "https://dm.uipep.com/v1/task/getPipoCaTask",
      data,
      httpOptions
    );
  }

  getBcTask(data) {
    console.log("I am in service calling transacytions");
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      "https://dm.uipep.com/v1/task/getBcTask",
      data,
      httpOptions
    );
  }

  getCaTask(data) {
    console.log("I am in service calling transacytions");
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      "https://dm.uipep.com/v1/task/getCaTask",
      "data",
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
      "https://dm.uipep.com/v1/task/getOne",
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
      "https://dm.uipep.com/v1/task/complete",
      data,
      httpOptions
    );
  }

  taskEmail(data) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };

    return this.http.post(
      "https://dm.uipep.com/v1/task/taskEmail",
      data,
      httpOptions
    );
  }
}