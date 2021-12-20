import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

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

  getBoeByBene(bene) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `http://localhost:3000/v1/boe/getBoeByBene`,
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
      `http://localhost:3000/v1/pipo/getPipoByBene`,
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
      `http://localhost:3000/v1/master/getMasterBySb`,
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
      .post(`http://localhost:3000/v1/pdf/generate`, data, httpOptions);
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

  addThird(pipo) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };

    return this.http.post(
      `http://localhost:3000/v1/third/post`,
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

    return this.http.get(`http://localhost:3000/v1/third/get`, httpOptions);
  }
  getThirdByThirdValue(id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `http://localhost:3000/v1/third/getSingleThird`,
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



  getPipoTask(data) {
    console.log("I am in service calling transacytions");
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      "http://localhost:3000/v1/task/getPipo",
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

  getSbTask(data) {
    console.log("I am in service calling transacytions");
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      "http://localhost:3000/v1/task/getSbTask",
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
      "http://localhost:3000/v1/task/getPipoInwardTask",
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
      "http://localhost:3000/v1/task/getLcTask",
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
      "http://localhost:3000/v1/task/getAllTask",
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
      "http://localhost:3000/v1/task/getTask",
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
      "http://localhost:3000/v1/task/getPipoCaTask",
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
      "http://localhost:3000/v1/task/getBcTask",
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
      "http://localhost:3000/v1/task/getCaTask",
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

  taskEmail(data) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };

    return this.http.post(
      "http://localhost:3000/v1/task/taskEmail",
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
      `http://localhost:3000/v1/exportTask/post`,
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
      `http://localhost:3000/v1/exportTask/get`,
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
      'http://localhost:3000/v1/exportTask/getOne',
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
      'http://localhost:3000/v1/exportTask/getFromType',
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
      `http://localhost:3000/v1/exportTask/update`,
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
      "http://localhost:3000/v1/task/exportEmail",
      data,
      httpOptions
    );
  }


}
