import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { AppConfig } from '../../app/app.config';

@Injectable({ providedIn: "root" })
export class DocumentService {
  authToken: string;
  public headers;
  api_base: string;
  constructor(private http: HttpClient, public appconfig: AppConfig) {
    this.api_base = appconfig.apiUrl;
    console.log(this.api_base)
  }
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
    let url = `${this.api_base}/master/get`;
    return this.http.get(url, httpOptions);
  }

  getBoe(user) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    let url = `${this.api_base}/boe/get`;
    return this.http.get(url, httpOptions);
  }

  updateMaster(user, _id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/master/update`,
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
      `${this.api_base}/master/updateBySb`,
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
      `${this.api_base}/boe/update`,
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
      `${this.api_base}/boe/updateByBoe`,
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
      `${this.api_base}/boe/getBoeByBoe`,
      {
        boeNumber: boeNumber,
      },
      httpOptions
    );
  }

  getBoeByBene(bene) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/boe/getBoeByBene`,
      {
        bene: bene,
      },
      httpOptions
    );
  }

  getPipoByBene(bene) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/pipo/getPipoByBene`,
      {
        bene: bene,
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
      `${this.api_base}/master/getMasterBySb`,
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
      .post(`${this.api_base}/pdf/generate`, data, httpOptions);
  }

  addPipo(pipo) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };

    return this.http.post(
      `${this.api_base}/pipo/post`,
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

    return this.http.get(`${this.api_base}/pipo/get`, httpOptions);
  }
  getPipoByPipoNo(id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/pipo/getSinglePipo`,
      {
        id: id,
      },
      httpOptions
    );
  }

  addThird(pipo) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };

    return this.http.post(
      `${this.api_base}/third/post`,
      { third: pipo },
      httpOptions
    );
  }

  getThird() {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };

    return this.http.get(`${this.api_base}/third/get`, httpOptions);
  }
  getThirdByThirdValue(id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/third/getSingleThird`,
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
      `${this.api_base}/task/post`,
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
      "${this.api_base}/task/getPipo",
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
      "${this.api_base}/task/getBoeTask",
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
      "${this.api_base}/task/getSbTask",
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
      "${this.api_base}/task/getPipoInwardTask",
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
      "${this.api_base}/task/getLcTask",
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
      "${this.api_base}/task/getAllTask",
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
      "${this.api_base}/task/getTask",
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
      "${this.api_base}/task/getPipoCaTask",
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
      "${this.api_base}/task/getBcTask",
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
      "${this.api_base}/task/getCaTask",
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
      "${this.api_base}/task/getOne",
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
      "${this.api_base}/task/complete",
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
      "${this.api_base}/task/taskEmail",
      data,
      httpOptions
    );
  }

  addExportTask(data) {
    console.log("I am in service");
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/exportTask/post`,
      {
        task: data,
      },
      httpOptions
    );
  }

  getAllExport(data) {
    console.log("I am in service");
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.get(
      `${this.api_base}/exportTask/get`,
      httpOptions
    );
  }

  getOneExportTask(data) {
    console.log("I am in service calling transacytions");
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      '${this.api_base}/exportTask/getOne',
      data,
      httpOptions
    );
  }

  getTypeExportTask(data) {
    console.log("I am in service calling transacytions");
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      '${this.api_base}/exportTask/getFromType',
      data,
      httpOptions
    );
  }

  updateExportTask(user, _id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/exportTask/update`,
      {
        id: _id,
        task: user,
      },
      httpOptions
    );
  }

  exportEmail(data) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };

    return this.http.post(
      "${this.api_base}/task/exportEmail",
      data,
      httpOptions
    );
  }


}
