import { Injectable } from '@angular/core';
import { HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';
import { observable, Observable, of, Subject } from 'rxjs';
// import { AppConfig } from '../../app/app.config';
import * as data1 from './../currency.json';
import { Router } from '@angular/router';
import { AppConfig } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class DocumentService {
  authToken: any;
  public headers;
  api_base: string;
  loading: boolean = false;
  EXPORT_IMPORT: any = {
    export: false,
    import: false,
    callback: () => { }
  };
  PDF_DOCUMENTS_DATA: any = [];
  pipolist: any = [];
  OUTWARD_REMITTANCE_ADVICE_SHEET: any = [];
  MT102_SUBJECT: any = []
  AppConfig:any=AppConfig
  
  constructor(public http: HttpClient, private router: Router,) {
    this.api_base = AppConfig?.BASE_URL;
    console.log(this.api_base);
  }
  public loadFromLocalStorage() {
    const token = sessionStorage.getItem('token');
    this.authToken = token;
    return this.authToken;
  }
  
  showInvoice = false;
  draft;
  task;
  pdfData: any = [];
  item2: any;
  item1: any;

  // Inward inwardRemittance Advice
  setSessionData(key: any, data: any) {
    sessionStorage.setItem(key, JSON.stringify(data));
  }
  getSessionData(key: string) {
    var temp: any = sessionStorage.getItem(key);
    return temp != undefined && temp != 'undefined' && temp != null ? JSON.parse(temp) : null;
  }
  getIrAdvice(user) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    let url = `${this.api_base}/irAdvice/get`;
    return this.http.get(url, httpOptions);
  }

  getOrAdvice(user) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    let url = `${this.api_base}/orAdvice/get`;
    return this.http.get(url, httpOptions);
  }

  updateIrAdvice(user, _id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/irAdvice/update`,
      {
        _id: _id,
        master: user,
      },
      httpOptions
    );
  }

  updateOrAdvice(user, _id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/orAdvice/update`,
      {
        _id: _id,
        master: user,
      },
      httpOptions
    );
  }

  updateByIrAdvice(data, _id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/irAdvice/updateByIrAdvice`,
      {
        _id: _id,
        master: data,
      },
      httpOptions
    );
  }

  updateByOrAdvice(data, _id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/orAdvice/updateByOrAdvice`,
      {
        _id: _id,
        master: data,
      },
      httpOptions
    );
  }

  addIrAdvice(data) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/orAdvice/add`, { data: data }, httpOptions);
  }
  getBillNo(id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/orAdvice/getByIdBillNo`, { _id: id }, httpOptions);
  }
  getInvoice_No(query, table_name: any) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    console.log(query, 'getInvoice_No')
    return this.http.post(`${this.api_base}/orAdvice/getInvoice_No`, { query: query, tableName: table_name }, httpOptions);
  }


  updateByIr(data, _id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/irAdvice/updateIrAdvice`,
      {
        _id: _id,
        master: data,
      },
      httpOptions
    );
  }

  updateByOr(data, _id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/orAdvice/updateOrAdvice`,
      {
        _id: _id,
        master: data,
      },
      httpOptions
    );
  }

  getIrAdviceByIrAdvice(billNo) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/irAdvice/getIrAdviceByIrAdvice`,
      {
        billNo: billNo,
      },
      httpOptions
    );
  }

  getOrAdviceByOrAdvice(billNo) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/orAdvice/getOrAdviceByOrAdvice`,
      {
        billNo: billNo,
      },
      httpOptions
    );
  }

  getIrAdviceByBillNo(billNo) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/irAdvice/getIrAdviceByBillNo`,
      {
        billNo: billNo,
      },
      httpOptions
    );
  }

  getOrAdviceByBillNo(billNo) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/orAdvice/getOrAdviceByBillNo`,
      {
        billNo: billNo,
      },
      httpOptions
    );
  }

  createEDPMS(payload) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/edpms/addEDPMS`,
      payload,
      httpOptions
    );
  }

  getEDPMS() {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    let url = `${this.api_base}/edpms/getEDPMS`;
    return this.http.get(url, httpOptions);
  }



  getMaster(user) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    let url = `${this.api_base}/master/get`;
    return this.http.get(url, httpOptions);
  }

  getMasterWithPipo(user) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    let url = `${this.api_base}/master/mergePISb`;
    return this.http.get(url, httpOptions);
  }
  // getMaster1(): Observable<any[]> {
  //   let arrayMain = [];
  //   this.getMaster(1).subscribe(
  //     (res: any) => {
  //      let data:[] = res.data;
  //       console.log('hello the');
  //       // data.sort((a:any,b:any)=> a.);
  //       for (let value1 of data) {
  //         for (let value2 of this.item2) {
  //           for (let a of value2.pipo) {
  //             if (a == value1.pi_poNo) {
  //               const newVal = { ...value1 };
  //               newVal['sbno'] = value2.sbno;
  //               newVal['sbdate'] = value2.sbdate;
  //               newVal['portCode'] = value2.portCode;
  //               newVal['region'] = value2.countryOfFinaldestination;
  //               newVal['fobValue'] = value2.fobValue;

  //               // console.log("Hello Ranjit", a);
  //               // value1.sbno = value2.sbno
  //               // value1.sbdate = value2.sbdate
  //               arrayMain.push(newVal);
  //               // console.log("hello Sj", value2);
  //             }
  //           }
  //         }
  //       }
  //       console.log('Hello There', arrayMain);
  //       if (arrayMain.length > 0) {
  //         this.item1 = arrayMain;
  //       }

  //     },
  //     (err) => console.log(err)
  //   );
  //   return of(arrayMain);
  // }

  getBoe(user) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    let url = `${this.api_base}/boe/get`;
    return this.http.get(url, httpOptions);
  }
  getBoedatabyPartName(benneName) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    let url = `${this.api_base}/boe/getbyPartName`;
    return this.http.post(url, { benneName: benneName }, httpOptions);
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

  // updateMasterBySb(user, sbno) {
  //   this.loadFromLocalStorage();
  //   console.log(this.authToken);
  //   const httpOptions = {
  //     headers: new HttpHeaders({ Authorization: this.authToken }),
  //   };
  //   return this.http.post(
  //     `${this.api_base}/master/updateBySb`,
  //     {
  //       sbno: sbno,
  //       master: user,
  //     },
  //     httpOptions
  //   );
  // }

  updateMasterBySb(user, sbno, _id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/master/updateBySb`,
      {
        master: user,
        sbno: sbno,
        _id: _id,

      },
      httpOptions
    );
  }

  addMasterBySb(data) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/master/add`, { data: data }, httpOptions);
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

  CHECK_ALL_INVOICES(data: any) {
    this.loadFromLocalStorage();
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/invoice/get`, data, httpOptions);
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
  addBoe(data) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/boe/post`, { data: data }, httpOptions);
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
  addInward_remittance(Inward_remittance) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/Inward_remittance/post`, { Inward_remittance: Inward_remittance }, httpOptions);
  }

  getPipo() {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = { headers: new HttpHeaders({ Authorization: this.authToken }) };
    return this.http.get(`${this.api_base}/pipo/get`, httpOptions);
  }
  getInward_remittance() {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = { headers: new HttpHeaders({ Authorization: this.authToken }) };
    return this.http.get(`${this.api_base}/Inward_remittance/get`, httpOptions);
  }

  getPipoByType(type) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };

    return this.http.get(`${this.api_base}/pipo/getPipoByType?filetype=${type}`, httpOptions);
  }

  getPipoByCustomer(type, buyer) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };

    return this.http.get(`${this.api_base}/pipo/getPipoByCustomer?filetype=${type}&buyer=${buyer}`, httpOptions);
  }

  getPipos(page, limit, commodity, location, buyer, type) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };

    return this.http.get(`${this.api_base}/pipo/getPipos?page=${page}&limit=${limit}&commodity=${commodity}&location=${location}&buyer=${buyer}&type=${type}`, httpOptions);
  }
  deletflagPiPo(data: any) {
    this.loadFromLocalStorage();
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/pipo/deleteflag`, data, httpOptions);
  }
  adddeletflag(data: any) {
    this.loadFromLocalStorage();
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/Approval/add`, { data: data }, httpOptions);
  }
  
  getPendingStatus(id: any) {
    this.loadFromLocalStorage();
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/Approval/getPendingStatus`, { FileType: id }, httpOptions);
  }
  
  UpdateApproval(id: any,data:any) {
    this.loadFromLocalStorage();
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/Approval/UpdateApproval`, { id: id,data:data }, httpOptions);
  }
  
  getDataAnyTable(tableName: any,id:any) {
    this.loadFromLocalStorage();
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/Approval/getDataAnyTable`, { tableName: tableName,id:id}, httpOptions);
  }
  
  UpdateAnyTable(tableName: any,id:any,data:any) {
    this.loadFromLocalStorage();
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/Approval/UpdateAnyTable`, { tableName: tableName,id:id,data:data}, httpOptions);
  }
  
  getVerifyStatus(id: any) {
    this.loadFromLocalStorage();
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/Approval/getVerifyStatus`, { FileType: id }, httpOptions);
  }
  getApprovedStatus(id: any) {
    this.loadFromLocalStorage();
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/Approval/getApprovedStatus`, { FileType: id }, httpOptions);
  }
  getApprovedData(id: any) {
    this.loadFromLocalStorage();
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/Approval/get`, { id: id }, httpOptions);
  }
  getRejectStatus(id: any) {
    this.loadFromLocalStorage();
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/Approval/getRejectStatus`, { FileType: id }, httpOptions);
  }
  DeleteStatus(data) {
    this.loadFromLocalStorage();
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/Approval/delete`, { data: data }, httpOptions);
  }
  getDownloadStatus(data) {
    this.loadFromLocalStorage();
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/Approval/getDownloadStatus`, data, httpOptions);
  }
  setDownloadStatus(data) {
    this.loadFromLocalStorage();
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/Approval/UpdateDownloadStatus`, data, httpOptions);
  }
  UpdateStatus(data) {
    this.loadFromLocalStorage();
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/Approval/UpdateStatus`, data, httpOptions);
  }

  RejectedStatus(data) {
    this.loadFromLocalStorage();
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/Approval/reject`, { data: data }, httpOptions);
  }

  updatePipobyId(id, data) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };

    return this.http.patch(
      `${this.api_base}/pipo/updatePipo/${id}`, data, httpOptions);

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


  getPipoByid(id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.get(
      `${this.api_base}/pipo/getPipo/${id}`,
      httpOptions
    );
  }



  deletePipoByid(id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.delete(
      `${this.api_base}/pipo/deletePIPO/${id}`,
      httpOptions
    );
  }
  deleteById(data: any) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/Approval/delete_by_id/`, data, httpOptions);
  }

  getSBDetailsByPIPO(id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.get(
      `${this.api_base}/master/getSbByPipo/${id}`,
      httpOptions
    );
  }


  getInwardDetailsByPIPO(id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.get(
      `${this.api_base}/irAdvice/getInwardByPipo/${id}`,
      httpOptions
    );
  }
  getbyPartyName(partyName) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/irAdvice/getbyPartyName`, { partyName: partyName }, httpOptions);
  }

  public getPDF(data): Observable<any> {
    console.log('inside service');
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/pdf/generate`, data, httpOptions);
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

  updateThird(pipo, id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    console.log(pipo)
    console.log(id)
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/third/update`,
      {
        pipo: pipo,
        id: id
      },
      httpOptions
    );
  }

  // Get Credit Api

  addCredit(pipo) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };

    return this.http.post(
      `${this.api_base}/credit/post`,
      { credit: pipo },
      httpOptions
    );
  }

  getCredit() {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };

    return this.http.get(`${this.api_base}/credit/get`, httpOptions);
  }

  getCreditByCreditValue(id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/credit/getSingleCredit`,
      {
        id: id,
      },
      httpOptions
    );
  }

  updateCredit(pipo, id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    console.log(pipo)
    console.log(id)
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/credit/update`,
      {
        pipo: pipo,
        id: id
      },
      httpOptions
    );
  }
  //get blcopy refno and advice copy api
  addBlcopyref(pipo) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };

    return this.http.post(
      `${this.api_base}/blcopy/post`,
      { blcopy: pipo },
      httpOptions
    );
  }
  getBlcopyref() {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.get(`${this.api_base}/blcopy/get`, httpOptions);
  }
  getBlcopyrefPromies() {
    return new Promise((resolve, reject) => {
      this.loadFromLocalStorage();
      console.log(this.authToken);
      const httpOptions = {
        headers: new HttpHeaders({ Authorization: this.authToken }),
      };
      this.http.get(`${this.api_base}/blcopy/get`, httpOptions).subscribe((res) => { resolve(res['data']) });
    });
  }
  getBlcopyrefByblValue(id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/blcopy/getSingleSwift`,
      {
        id: id,
      },
      httpOptions
    );
  }
  updateBlcopyref(pipo, id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    console.log(pipo)
    console.log(id)
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/blcopy/update`,
      {
        pipo: pipo,
        id: id
      },
      httpOptions
    );
  }
  updateBlcopyrefSB(data, id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    console.log(id)
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/blcopy/updateSB`, { data: data, id: id }, httpOptions);
  }

  //get airway blcopy and advice copy api
  addAirwayBlcopyFile(pipo) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };

    return this.http.post(
      `${this.api_base}/airwayBlCopy/post`,
      { airwayBlCopy: pipo },
      httpOptions
    );
  }
  getAirwayBlcopy() {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };

    return this.http.get(`${this.api_base}/airwayBlCopy/get`, httpOptions);
  }

  getAirwayBlcopyByBlValue(id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/airwayBlCopy/getSingleAirwayBlcopy`,
      {
        id: id,
      },
      httpOptions
    );
  }

  updateAirwayBlcopy(pipo, id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    console.log(pipo)
    console.log(id)
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/airwayblcopy/update`,
      {
        pipo: pipo,
        id: id
      },
      httpOptions
    );
  }

  // Get Commercial Api

  addCommercial(pipo) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };

    return this.http.post(
      `${this.api_base}/commercial/post`,
      { commercial: pipo },
      httpOptions
    );
  }

  getCommercial() {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };

    return this.http.get(`${this.api_base}/commercial/get`, httpOptions);
  }

  getCommercialByFiletype(filetype, pipo_id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };

    return this.http.get(`${this.api_base}/commercial/getByFiletype/${filetype}/${pipo_id}`, httpOptions);
  }

  getCommercialByCommercialValue(id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/commercial/getSingleCommercial/`,
      {
        id: id,
      },
      httpOptions
    );
  }

  updateCommercial(pipo, id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    console.log(pipo)
    console.log(id)
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/commercial/update`,
      {
        pipo: pipo,
        id: id
      },
      httpOptions
    );
  }

  // Get BillExchange Api

  addBillExchange(pipo) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };

    return this.http.post(
      `${this.api_base}/billOfExchange/post`,
      { billOfExchange: pipo },
      httpOptions
    );
  }

  getBillExchange() {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };

    return this.http.get(`${this.api_base}/billOfExchange/get`, httpOptions);
  }
  getBillExchangefile(type: string) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/billOfExchange/filetype`, { file: type }, httpOptions);
  }

  getBillExchangeByBillExchangeValue(id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/billExchange/getSingleBillOfExchange`,
      {
        id: id,
      },
      httpOptions
    );
  }

  updateBillExchange(pipo, id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    console.log(pipo)
    console.log(id)
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/billOfExchange/update`,
      {
        pipo: pipo,
        id: id
      },
      httpOptions
    );
  }

  // Get Destruction Api

  addDestruction(pipo) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };

    return this.http.post(
      `${this.api_base}/destruction/post`,
      { destruction: pipo },
      httpOptions
    );
  }

  getDestruction() {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };

    return this.http.get(`${this.api_base}/destruction/get`, httpOptions);
  }
  getDestructionfile(type: string) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/destruction/filetype`, { file: type }, httpOptions);
  }

  getDestructionByDestructionValue(id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/destruction/getSingleDestruction`,
      {
        id: id,
      },
      httpOptions
    );
  }

  updateDestruction(pipo, id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    console.log(pipo)
    console.log(id)
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/destruction/update`,
      {
        pipo: pipo,
        id: id
      },
      httpOptions
    );
  }


  // Get Other Document Api

  addPackingList(pipo) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };

    return this.http.post(
      `${this.api_base}/packingList/post`,
      { packingList: pipo },
      httpOptions
    );
  }

  getPackingList() {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };

    return this.http.get(`${this.api_base}/packingList/get`, httpOptions);
  }
  getPackingListfile(type: string) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/packingList/filetype`, { file: type }, httpOptions);
  }
  getPackingListByPackingListValue(id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/packingList/getSinglepackingList`,
      {
        id: id,
      },
      httpOptions
    );
  }

  updatePackingList(pipo, id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    console.log(pipo)
    console.log(id)
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/packingList/update`,
      {
        pipo: pipo,
        id: id
      },
      httpOptions
    );
  }

  // get Swift Api
  addSwift(pipo) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };

    return this.http.post(
      `${this.api_base}/swift/post`,
      { swift: pipo },
      httpOptions
    );
  }
  getSwift() {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };

    return this.http.get(`${this.api_base}/swift/get`, httpOptions);
  }
  getSwiftBySwiftValue(id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/swift/getSingleSwift`,
      {
        id: id,
      },
      httpOptions
    );
  }
  updateSwift(pipo, id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    console.log(pipo)
    console.log(id)
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/swift/update`,
      {
        pipo: pipo,
        id: id
      },
      httpOptions
    );
  }

  //Get EBRC Api
  addEbrc(pipo) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };

    return this.http.post(
      `${this.api_base}/ebrc/post`,
      { ebrc: pipo },
      httpOptions
    );
  }
  getEbrc() {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };

    return this.http.get(`${this.api_base}/ebrc/get`, httpOptions);
  }
  getEbrcByEbrcValue(id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/ebrc/getSingleSwift`,
      {
        id: id,
      },
      httpOptions
    );
  }
  updateEbrc(pipo, id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    console.log(pipo)
    console.log(id)
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/ebrc/update`,
      {
        pipo: pipo,
        id: id
      },
      httpOptions
    );
  }

  // Get Debit Api

  addDebit(pipo) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };

    return this.http.post(
      `${this.api_base}/debit/post`,
      { debit: pipo },
      httpOptions
    );
  }

  getDebit() {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };

    return this.http.get(`${this.api_base}/debit/get`, httpOptions);
  }

  getDebitByDebitValue(id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/debit/getSingleDebit`,
      {
        id: id,
      },
      httpOptions
    );
  }

  updateDebit(pipo, id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    console.log(pipo)
    console.log(id)
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/debit/update`,
      {
        pipo: pipo,
        id: id
      },
      httpOptions
    );
  }

  // Get Insurance Api

  addInsurance(pipo) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };

    return this.http.post(
      `${this.api_base}/insurance/post`,
      { insurance: pipo },
      httpOptions
    );
  }

  getInsurance() {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };

    return this.http.get(`${this.api_base}/insurance/get`, httpOptions);
  }

  getInsuranceByInsuranceValue(id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/insurance/getSingleInsurance`,
      {
        id: id,
      },
      httpOptions
    );
  }

  updateInsurance(pipo, id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    console.log(pipo)
    console.log(id)
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/insurance/update`,
      {
        pipo: pipo,
        id: id
      },
      httpOptions
    );
  }

  // Get LetterLC Api

  addLetterLC(pipo) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };

    return this.http.post(
      `${this.api_base}/letterLC/post`,
      { letterLC: pipo },
      httpOptions
    );
  }

  getLetterLC() {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };

    return this.http.get(`${this.api_base}/letterLC/get`, httpOptions);
  }
  getLetterLCfile(type: string) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/letterLC/filetype`, { file: type }, httpOptions);
  }
  getLetterLCByLetterLCValue(id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/letterLC/getSingleLetterLC`,
      {
        id: id,
      },
      httpOptions
    );
  }

  updateLetterLC(pipo, id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    console.log(pipo)
    console.log(id)
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/letterLC/update`,
      {
        pipo: pipo,
        id: id
      },
      httpOptions
    );
  }

  // Get Master Service Api

  addMasterService(pipo) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };

    return this.http.post(
      `${this.api_base}/masterService/post`,
      { masterService: pipo },
      httpOptions
    );
  }

  getMasterService() {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };

    return this.http.get(`${this.api_base}/masterService/get`, httpOptions);
  }
  getMasterServiceFile(type: string) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/masterService/filetype`, { file: type }, httpOptions);
  }
  getMasterSerByMasterSerValue(id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/masterService/getSingleMasterService`,
      {
        id: id,
      },
      httpOptions
    );
  }

  updateMasterService(pipo, id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    console.log(pipo)
    console.log(id)
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/masterService/update`,
      {
        pipo: pipo,
        id: id
      },
      httpOptions
    );
  }


  // Get Opinion Report Api

  addOpinionReport(pipo) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };

    return this.http.post(
      `${this.api_base}/opinionReport/post`,
      { opinionReport: pipo },
      httpOptions
    );
  }

  getOpinionReport() {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };

    return this.http.get(`${this.api_base}/opinionReport/get`, httpOptions);
  }
  getOpinionReportfile(type: string) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/opinionReport/filetype`, { file: type }, httpOptions);
  }

  getOpinionByOpinionValue(id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/opinionReport/getSingleCredit`,
      {
        id: id,
      },
      httpOptions
    );
  }

  updateOpinionReport(pipo, id) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    console.log(pipo)
    console.log(id)
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/opinionReport/update`,
      {
        pipo: pipo,
        id: id
      },
      httpOptions
    );
  }

  addTask(data) {
    console.log('I am in service');
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/task/post`, data, httpOptions);
  }

  getPipoTask(data) {
    console.log('I am in service calling transacytions');
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/task/getPipo`, data, httpOptions);
  }

  getBoeTask(data) {
    console.log('I am in service calling transacytions');
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/task/getBoeTask`,
      data,
      httpOptions
    );
  }

  getSbTask(data) {
    console.log('I am in service calling transacytions');
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/task/getSbTask`, data, httpOptions);
  }

  getPipoInwardTask(data) {
    console.log('I am in service calling transacytions');
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/task/getPipoInwardTask`,
      data,
      httpOptions
    );
  }

  getLcTask(data) {
    console.log('I am in service calling transacytions');
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/task/getLcTask`, data, httpOptions);
  }

  getAllTask(data) {
    console.log('I am in service calling transacytions');
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/task/getAllTask`,
      data,
      httpOptions
    );
  }

  getTask(data) {
    console.log('I am in service calling transacytions');
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/task/getTask`, data, httpOptions);
  }

  getPipoCaTask(data) {
    console.log('I am in service calling transacytions');
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/task/getPipoCaTask`,
      data,
      httpOptions
    );
  }

  getBcTask(data) {
    console.log('I am in service calling transacytions');
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/task/getBcTask`, data, httpOptions);
  }

  getCaTask(data) {
    console.log('I am in service calling transacytions');
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/task/getCaTask`,
      'data',
      httpOptions
    );
  }

  getOneTask(data) {
    console.log('I am in service calling transacytions');
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/task/getOne`, data, httpOptions);
  }

  completeTask(data) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };

    return this.http.post(`${this.api_base}/task/complete`, data, httpOptions);
  }

  taskEmail(data) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };

    return this.http.post(`${this.api_base}/task/taskEmail`, data, httpOptions);
  }

  addExportTask(data) {
    console.log('I am in service');
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
    console.log('I am in service');
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.get(`${this.api_base}/exportTask/get`, httpOptions);
  }

  addExportBillLodgment(data) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/ExportBillLodgement/add`, { data: data }, httpOptions);
  }
  
  UpdateTransaction(data) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/ExportBillLodgement/update`, data, httpOptions);
  }

  Update_Amount_by_Table(data) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = { headers: new HttpHeaders({ Authorization: this.authToken }) };
    return this.http.post(`${this.api_base}/ExportBillLodgement/Amount_Update`, data, httpOptions);
  }
  Update_Amount_by_TableSB(data) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = { headers: new HttpHeaders({ Authorization: this.authToken }) };
    return this.http.post(`${this.api_base}/ExportBillLodgement/Amount_UpdateSB`, data, httpOptions);
  }
  getExportBillLodgment() {
    console.log('I am in service');
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.get(`${this.api_base}/ExportBillLodgement/get`, httpOptions);
  }
  getByIdExportBillLodgment(id: any) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/ExportBillLodgement/getById`, { id: id }, httpOptions);
  }

  getOneExportTask(data) {
    console.log('I am in service calling transacytions');
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/exportTask/getOne`,
      data,
      httpOptions
    );
  }

  getTypeExportTask(data) {
    console.log('I am in service calling transacytions');
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/exportTask/getFromType`,
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
      `${this.api_base}/task/exportEmail`,
      data,
      httpOptions
    );
  }
  SendMail_TextPdf(data) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/task/textpdf`,
      data,
      httpOptions
    );
  }
  
  SendMailNormal(data) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/task/sendmailnormal`,data,httpOptions);
  }

  buyer_beneficiary_creditadd(data:any){
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/buyer_beneficiary_credit/add`,{data:data},httpOptions);
  }
  
  buyer_beneficiary_creditget(){
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.get(`${this.api_base}/buyer_beneficiary_credit/get`,httpOptions);
  }
  
  buyer_beneficiary_credit_update(data){
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/buyer_beneficiary_credit/update`,data,httpOptions);
  }
  
  CA_Certificate_add(data:any){
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/CA_Certificate/add`,{data:data},httpOptions);
  }
  
  CA_Certificate_get(){
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.get(`${this.api_base}/CA_Certificate/get`,httpOptions);
  }
  
  CA_Certificate_RequestType_get(data:any){
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/CA_Certificate/getRequestType`,{type:data},httpOptions);
  }
  
  
  CA_Certificate_update(data){
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/CA_Certificate/update`,data,httpOptions);
  }
  
  ForwardContractadd(data:any){
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/ForwardContract/add`,{data:data},httpOptions);
  }
  
  ForwardContractget(){
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.get(`${this.api_base}/ForwardContract/get`,httpOptions);
  }
  
  ForwardContract_update(data){
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/ForwardContract/update`,data,httpOptions);
  }
  
  SendMailNormalTextdcouments(data) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/task/sendmailnormal`,data,httpOptions);
  }
  
  SendMaildocuments(data) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/task/documentsmail`,data,httpOptions);
  }
  downloadDocuments(data: any) {
    console.log("downloadDocuments", data)
    const httpOptions: any = {
      headers: data['headers'],
      responseType: 'blob'
    };
    return this.http.get(data['url'], httpOptions);
  }

  updateUserById(id, data) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.patch(`${this.api_base}/user/updateUserById/${id}`, data, httpOptions);
  }
  
  updateUserByCompanyId(id, data) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.patch(`${this.api_base}/user/updateUserByCompanyId/${id}`, data, httpOptions);
  }
  
  getCurrencyList() {
    var CURRENCY_LIST: any = [];
    for (let index = 0; index < data1['default']?.length; index++) {
      CURRENCY_LIST.push({
        type: data1['default'][index]['value'],
        type1: data1['default'][index]['value'],
      })
    }
    return CURRENCY_LIST;
  }
  getBankNameList() {
    var temp: any = [
      { BankUniqueId: '', value: "Bandhan Bank Ltd.", },
      { BankUniqueId: '', value: "CSB Bank Limited" },
      { BankUniqueId: '', value: "City Union Bank Ltd." },
      { BankUniqueId: '', value: "DCB Bank Ltd." },
      { BankUniqueId: '', value: "Dhanlaxmi Bank Ltd." },
      { BankUniqueId: '', value: "Federal Bank Ltd." },
      { BankUniqueId: '', value: "HDFC Bank Ltd" },
      { BankUniqueId: '', value: "Axis Bank Ltd" },
      { BankUniqueId: '', value: "ICICI Bank Ltd." },
      { BankUniqueId: '', value: "IndusInd Bank Ltd" },
      { BankUniqueId: '', value: "IDFC FIRST Bank Limited" },
      { BankUniqueId: '', value: "Jammu & Kashmir Bank Ltd." },
      { BankUniqueId: '', value: "Karnataka Bank Ltd." },
      { BankUniqueId: '', value: "Karur Vysya Bank Ltd." },
      { BankUniqueId: '', value: "Kotak Mahindra Bank Ltd" },
      { BankUniqueId: '', value: "Nainital bank Ltd." },
      { BankUniqueId: '', value: "RBL Bank Ltd." },
      { BankUniqueId: '', value: "South Indian Bank Ltd." },
      { BankUniqueId: '', value: "Tamilnad Mercantile Bank Ltd." },
      { BankUniqueId: '', value: "YES Bank Ltd." },
      { BankUniqueId: '', value: "IDBI Bank Limited" },
      { BankUniqueId: '', value: "Au Small Finance Bank Ltd." },
      { BankUniqueId: '', value: "Capital Small Finance Bank Ltd" },
      { BankUniqueId: '', value: "Fincare Small Finance Bank Ltd." },
      { BankUniqueId: '', value: "Equitas Small Finance Bank Ltd" },
      { BankUniqueId: '', value: "ESAF Small Finance Bank Ltd." },
      { BankUniqueId: '', value: "Suryoday Small Finance Bank Ltd." },
      { BankUniqueId: '', value: "Ujjivan Small Finance Bank Ltd." },
      { BankUniqueId: '', value: "Utkarsh Small Finance Bank Ltd." },
      { BankUniqueId: '', value: "North East Small finance Bank Ltd" },
      { BankUniqueId: '', value: "Jana Small Finance Bank Ltd" },
      { BankUniqueId: '', value: "Shivalik Small Finance Bank Ltd" },
      { BankUniqueId: '', value: "Unity Small Finance Bank Ltd" },
      { BankUniqueId: '', value: "Airtel Payments Bank Ltd" },
      { BankUniqueId: '', value: "India Post Payments Bank Ltd" },
      { BankUniqueId: '', value: "FINO Payments Bank Ltd" },
      { BankUniqueId: '', value: "Paytm Payments Bank Ltd" },
      { BankUniqueId: '', value: "Jio Payments Bank Ltd" },
      { BankUniqueId: '', value: "NSDL Payments Bank Limited" },
      { BankUniqueId: '', value: "Bank of Baroda" },
      { BankUniqueId: '', value: "Bank of India" },
      { BankUniqueId: '', value: "Bank of Maharashtra" },
      { BankUniqueId: '', value: "Canara Bank" },
      { BankUniqueId: '', value: "Central Bank of India" },
      { BankUniqueId: '', value: "Indian Bank" },
      { BankUniqueId: '', value: "Indian Overseas Bank" },
      { BankUniqueId: '', value: "Punjab & Sind Bank" },
      { BankUniqueId: '', value: "Punjab National Bank" },
      { BankUniqueId: '', value: "State Bank of India" },
      { BankUniqueId: '', value: "UCO Bank" },
      { BankUniqueId: '', value: "Union Bank of India" },
      { BankUniqueId: '', value: "Australia and New Zealand Banking Group Ltd." },
      { BankUniqueId: '', value: "National Australia Bank" },
      { BankUniqueId: '', value: "Westpac Banking Corporation" },
      { BankUniqueId: '', value: "Bank of Bahrain & Kuwait BSC" },
      { BankUniqueId: '', value: "AB Bank Ltd." },
      { BankUniqueId: '', value: "Sonali Bank Ltd.{BankUniqueId:'',  value:" },
      { BankUniqueId: '', value: "Bank of Nova Scotia" },
      { BankUniqueId: '', value: "Industrial & Commercial Bank of China Ltd." },
      { BankUniqueId: '', value: "BNP Paribas" },
      { BankUniqueId: '', value: "Credit Agricole Corporate & Investment Bank" },
      { BankUniqueId: '', value: "Societe Generale" },
      { BankUniqueId: '', value: "Deutsche Bank" },
      { BankUniqueId: '', value: "HSBC Ltd #" },
      { BankUniqueId: '', value: "PT Bank Maybank Indonesia TBK" },
      { BankUniqueId: '', value: "Mizuho Bank Ltd." },
      { BankUniqueId: '', value: "Sumitomo Mitsui Banking Corporation" },
      { BankUniqueId: '', value: "MUFG Bank, Ltd." },
      { BankUniqueId: '', value: "Cooperatieve Rabobank U.A." },
      { BankUniqueId: '', value: "Doha Bank" },
      { BankUniqueId: '', value: "Qatar National Bank SAQ" },
      { BankUniqueId: '', value: "JSC VTB Bank" },
      { BankUniqueId: '', value: "Sberbank" },
      { BankUniqueId: '', value: "DBS Bank Ltd." },
      { BankUniqueId: '', value: "United Overseas Bank Ltd." },
      { BankUniqueId: '', value: "FirstRand Bank Ltd." },
      { BankUniqueId: '', value: "Shinhan Bank" },
      { BankUniqueId: '', value: "Woori Bank" },
      { BankUniqueId: '', value: "KEB Hana Bank" },
      { BankUniqueId: '', value: "Industrial Bank of Korea" },
      { BankUniqueId: '', value: "Bank of Ceylon" },
      { BankUniqueId: '', value: "Credit Suisse A.G" },
      { BankUniqueId: '', value: "CTBC Bank Co., Ltd." },
      { BankUniqueId: '', value: "Krung Thai Bank Public Co. Ltd." },
      { BankUniqueId: '', value: "Abu Dhabi Commercial Bank Ltd." },
      { BankUniqueId: '', value: "Mashreq Bank PSC" },
      { BankUniqueId: '', value: "First Abu Dhabi Bank PJSC" },
      { BankUniqueId: '', value: "Emirates NBD Bank PJSC" },
      { BankUniqueId: '', value: "Barclays Bank Plc." },
      { BankUniqueId: '', value: "Standard Chartered Bank" },
      { BankUniqueId: '', value: "NatWest Markets plc" },
      { BankUniqueId: '', value: "American Express Banking Corp." },
      { BankUniqueId: '', value: "Bank of America" },
      { BankUniqueId: '', value: "Citibank N.A." },
      { BankUniqueId: '', value: "J.P. Morgan Chase Bank N.A." },
      { BankUniqueId: '', value: "SBI Bank" }
    ]
    temp.forEach((element, index) => {
      element.BankUniqueId = this.initialName(element.value) + (index + 1)
    });
    return temp;
  }
  getBankFormat() {
    var temp: any = [
      { BankUniqueId: '', urlpdf: '', value: "Bandhan Bank Ltd." },
      { BankUniqueId: '', urlpdf: '', value: "CSB Bank Limited" },
      { BankUniqueId: '', urlpdf: '', value: "City Union Bank Ltd." },
      { BankUniqueId: '', urlpdf: '', value: "DCB Bank Ltd." },
      { BankUniqueId: '', urlpdf: '', value: "Dhanlaxmi Bank Ltd." },
      { BankUniqueId: '', urlpdf: './../../assets/billUnder.pdf', value: "Federal Bank Ltd." },
      { BankUniqueId: '', urlpdf: '', value: "HDFC Bank Ltd" },
      { BankUniqueId: '', urlpdf: '', value: "Axis Bank Ltd" },
      { BankUniqueId: '', urlpdf: '', value: "ICICI Bank Ltd." },
      { BankUniqueId: '', urlpdf: '', value: "IndusInd Bank Ltd" },
      { BankUniqueId: '', urlpdf: '', value: "IDFC FIRST Bank Limited" },
      { BankUniqueId: '', urlpdf: '', value: "Jammu & Kashmir Bank Ltd." },
      { BankUniqueId: '', urlpdf: '', value: "Karnataka Bank Ltd." },
      { BankUniqueId: '', urlpdf: '', value: "Karur Vysya Bank Ltd." },
      { BankUniqueId: '', urlpdf: '', value: "Kotak Mahindra Bank Ltd" },
      { BankUniqueId: '', urlpdf: '', value: "Nainital bank Ltd." },
      { BankUniqueId: '', urlpdf: '', value: "RBL Bank Ltd." },
      { BankUniqueId: '', urlpdf: '', value: "South Indian Bank Ltd." },
      { BankUniqueId: '', urlpdf: '', value: "Tamilnad Mercantile Bank Ltd." },
      { BankUniqueId: '', urlpdf: '', value: "YES Bank Ltd." },
      { BankUniqueId: '', urlpdf: '', value: "IDBI Bank Limited" },
      { BankUniqueId: '', urlpdf: '', value: "Au Small Finance Bank Ltd." },
      { BankUniqueId: '', urlpdf: '', value: "Capital Small Finance Bank Ltd" },
      { BankUniqueId: '', urlpdf: '', value: "Fincare Small Finance Bank Ltd." },
      { BankUniqueId: '', urlpdf: '', value: "Equitas Small Finance Bank Ltd" },
      { BankUniqueId: '', urlpdf: '', value: "ESAF Small Finance Bank Ltd." },
      { BankUniqueId: '', urlpdf: '', value: "Suryoday Small Finance Bank Ltd." },
      { BankUniqueId: '', urlpdf: '', value: "Ujjivan Small Finance Bank Ltd." },
      { BankUniqueId: '', urlpdf: '', value: "Utkarsh Small Finance Bank Ltd." },
      { BankUniqueId: '', urlpdf: '', value: "North East Small finance Bank Ltd" },
      { BankUniqueId: '', urlpdf: '', value: "Jana Small Finance Bank Ltd" },
      { BankUniqueId: '', urlpdf: '', value: "Shivalik Small Finance Bank Ltd" },
      { BankUniqueId: '', urlpdf: '', value: "Unity Small Finance Bank Ltd" },
      { BankUniqueId: '', urlpdf: '', value: "Airtel Payments Bank Ltd" },
      { BankUniqueId: '', urlpdf: '', value: "India Post Payments Bank Ltd" },
      { BankUniqueId: '', urlpdf: '', value: "FINO Payments Bank Ltd" },
      { BankUniqueId: '', urlpdf: '', value: "Paytm Payments Bank Ltd" },
      { BankUniqueId: '', urlpdf: '', value: "Jio Payments Bank Ltd" },
      { BankUniqueId: '', urlpdf: '', value: "NSDL Payments Bank Limited" },
      { BankUniqueId: '', urlpdf: '', value: "Bank of Baroda" },
      { BankUniqueId: '', urlpdf: '', value: "Bank of India" },
      { BankUniqueId: '', urlpdf: '', value: "Bank of Maharashtra" },
      { BankUniqueId: '', urlpdf: '', value: "Canara Bank" },
      { BankUniqueId: '', urlpdf: '', value: "Central Bank of India" },
      { BankUniqueId: '', urlpdf: '', value: "Indian Bank" },
      { BankUniqueId: '', urlpdf: '', value: "Indian Overseas Bank" },
      { BankUniqueId: '', urlpdf: '', value: "Punjab & Sind Bank" },
      { BankUniqueId: '', urlpdf: '', value: "Punjab National Bank" },
      { BankUniqueId: '', urlpdf: '', value: "State Bank of India" },
      { BankUniqueId: '', urlpdf: '', value: "UCO Bank" },
      { BankUniqueId: '', urlpdf: '', value: "Union Bank of India" },
      { BankUniqueId: '', urlpdf: '', value: "Australia and New Zealand Banking Group Ltd." },
      { BankUniqueId: '', urlpdf: '', value: "National Australia Bank" },
      { BankUniqueId: '', urlpdf: '', value: "Westpac Banking Corporation" },
      { BankUniqueId: '', urlpdf: '', value: "Bank of Bahrain & Kuwait BSC" },
      { BankUniqueId: '', urlpdf: '', value: "AB Bank Ltd." },
      { BankUniqueId: '', urlpdf: '', value: "Sonali Bank Ltd." },
      { BankUniqueId: '', urlpdf: '', value: "Bank of Nova Scotia" },
      { BankUniqueId: '', urlpdf: '', value: "Industrial & Commercial Bank of China Ltd." },
      { BankUniqueId: '', urlpdf: '', value: "BNP Paribas" },
      { BankUniqueId: '', urlpdf: '', value: "Credit Agricole Corporate & Investment Bank" },
      { BankUniqueId: '', urlpdf: '', value: "Societe Generale" },
      { BankUniqueId: '', urlpdf: '', value: "Deutsche Bank" },
      { BankUniqueId: '', urlpdf: '', value: "HSBC Ltd #" },
      { BankUniqueId: '', urlpdf: '', value: "PT Bank Maybank Indonesia TBK" },
      { BankUniqueId: '', urlpdf: '', value: "Mizuho Bank Ltd." },
      { BankUniqueId: '', urlpdf: '', value: "Sumitomo Mitsui Banking Corporation" },
      { BankUniqueId: '', urlpdf: '', value: "MUFG Bank, Ltd." },
      { BankUniqueId: '', urlpdf: '', value: "Cooperatieve Rabobank U.A." },
      { BankUniqueId: '', urlpdf: '', value: "Doha Bank" },
      { BankUniqueId: '', urlpdf: '', value: "Qatar National Bank SAQ" },
      { BankUniqueId: '', urlpdf: '', value: "JSC VTB Bank" },
      { BankUniqueId: '', urlpdf: '', value: "Sberbank" },
      { BankUniqueId: '', urlpdf: '', value: "DBS Bank Ltd." },
      { BankUniqueId: '', urlpdf: '', value: "United Overseas Bank Ltd." },
      { BankUniqueId: '', urlpdf: '', value: "FirstRand Bank Ltd." },
      { BankUniqueId: '', urlpdf: '', value: "Shinhan Bank" },
      { BankUniqueId: '', urlpdf: '', value: "Woori Bank" },
      { BankUniqueId: '', urlpdf: '', value: "KEB Hana Bank" },
      { BankUniqueId: '', urlpdf: '', value: "Industrial Bank of Korea" },
      { BankUniqueId: '', urlpdf: '', value: "Bank of Ceylon" },
      { BankUniqueId: '', urlpdf: '', value: "Credit Suisse A.G" },
      { BankUniqueId: '', urlpdf: '', value: "CTBC Bank Co., Ltd." },
      { BankUniqueId: '', urlpdf: '', value: "Krung Thai Bank Public Co. Ltd." },
      { BankUniqueId: '', urlpdf: '', value: "Abu Dhabi Commercial Bank Ltd." },
      { BankUniqueId: '', urlpdf: '', value: "Mashreq Bank PSC" },
      { BankUniqueId: '', urlpdf: '', value: "First Abu Dhabi Bank PJSC" },
      { BankUniqueId: '', urlpdf: '', value: "Emirates NBD Bank PJSC" },
      { BankUniqueId: '', urlpdf: '', value: "Barclays Bank Plc." },
      { BankUniqueId: '', urlpdf: '', value: "Standard Chartered Bank" },
      { BankUniqueId: '', urlpdf: '', value: "NatWest Markets plc" },
      { BankUniqueId: '', urlpdf: '', value: "American Express Banking Corp." },
      { BankUniqueId: '', urlpdf: '', value: "Bank of America" },
      { BankUniqueId: '', urlpdf: '', value: "Citibank N.A." },
      { BankUniqueId: '', urlpdf: '', value: "J.P. Morgan Chase Bank N.A." },
      { BankUniqueId: '', urlpdf: '', value: "SBI Bank" }
    ]

    temp.forEach((element, index) => {
      element.BankUniqueId = this.initialName(element.value) + (index + 1)
    });
    return temp;
  }
  initialName(words) {
    'use strict'
    return words
      .replace(/\b(\w)\w+/g, '$1_')
      .replace(/\s/g, '')
      .replace(/\.$/, '')
      .toUpperCase();
  }
}



