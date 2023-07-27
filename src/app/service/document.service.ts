import { Injectable, OnInit } from '@angular/core';
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
  AppConfig: any = AppConfig
  Inner_loading: boolean = false;
  public PI_PO_NUMBER_LIST: any = {
    PI_PO_BUYER_NAME: [],
    PI_PO_BENNE_NAME: [],
    PIPO_TRANSACTION: [],
    PIPO_NO: []
  };
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

  getPipoListNo = (type, pipolist: any) => {
    this.PI_PO_NUMBER_LIST = {
      PI_PO_BUYER_NAME: [],
      PI_PO_BENNE_NAME: [],
      PIPO_TRANSACTION: [],
      PIPO_NO: []
    };

    this.getPipoNoList().subscribe((res: any) => {
      console.log(res, 'resssss.................')
      var data: any = res?.data;
      this.PI_PO_NUMBER_LIST['PI_PO_BUYER_NAME'] = [];
      this.PI_PO_NUMBER_LIST['PI_PO_BENNE_NAME'] = [];
      this.PI_PO_NUMBER_LIST['PIPO_TRANSACTION'] = [];
      this.PI_PO_NUMBER_LIST['PIPO_NO'] = data;
      for (let index = 0; index < data.length; index++) {
        if (data[index]?.buyerName != '' || data[index].pi_poNo != '') {
          this.PI_PO_NUMBER_LIST['PI_PO_BUYER_NAME'].push({
            pi_po_buyerName: 'PI-' + data[index]?.pi_poNo + '-' + data[index].buyerName,
            id: [data[index].pi_poNo, data[index]?.buyerName],
            _id: data[index]?._id
          })
          this.PI_PO_NUMBER_LIST['PI_PO_BENNE_NAME'].push({
            pi_po_buyerName: 'PI-' + data[index]?.pi_poNo + '-' + data[index].benneName,
            id: [data[index].pi_poNo, data[index]?.benneName],
            _id: data[index]?._id
          })
        }
      }
      for (let index = 0; index < pipolist?.length; index++) {
        const element = pipolist[index];
        var t: any = data.filter((item: any) => item?.pi_poNo.indexOf(element) != -1)
        if (type == 'import') {
          t.forEach(item => {
            this.PI_PO_NUMBER_LIST['PIPO_TRANSACTION'].push({
              pi_po_buyerName: 'PI-' + item?.pi_poNo + '-' + item.benneName,
              id: [item.pi_poNo, item?.benneName],
              _id: item?._id
            })
          });
        } else {
          t.forEach(item => {
            this.PI_PO_NUMBER_LIST['PIPO_TRANSACTION'].push({
              pi_po_buyerName: 'PI-' + item?.pi_poNo + '-' + item.buyerName,
              id: [item.pi_poNo, item?.buyerName],
              _id: item?._id
            })
          });
        }
      }
      console.log(this.PI_PO_NUMBER_LIST, type, 'getPipoListNo');
    })
  }

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

  getEDPMSbyLimit(limit: any) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    let url = `${this.api_base}/edpms/getEDPMSbylimit`;
    return this.http.post(url, { limit: limit }, httpOptions);
  }

  getclearedEDPMS(limit: any) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    let url = `${this.api_base}/edpms/getcleared`;
    return this.http.post(url, { limit: limit }, httpOptions);
  }

  createIDPMS(payload) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(
      `${this.api_base}/idpms/addIDPMS`,
      payload,
      httpOptions
    );
  }

  getIDPMS() {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    let url = `${this.api_base}/idpms/getIDPMS`;
    return this.http.get(url, httpOptions);
  }

  getIDPMSbyLimit(limit: any) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    let url = `${this.api_base}/idpms/getIDPMSbylimit`;
    return this.http.post(url, { limit: limit }, httpOptions);
  }

  getclearedIDPMS(limit: any) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    let url = `${this.api_base}/idpms/getcleared`;
    return this.http.post(url, { limit: limit }, httpOptions);
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

  getPipoNoList() {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    let url = `${this.api_base}/pipo/getPipoNo`;
    return this.http.get(url, httpOptions);
  }

  getMasterScheduler() {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    let url = `${this.api_base}/master/getScheduler`;
    return this.http.get(url, httpOptions);
  }

  getTransactionScheduler() {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    let url = `${this.api_base}/Transaction/getByIdTransactionType`;
    return this.http.get(url, httpOptions);
  }

  getBOEScheduler() {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    let url = `${this.api_base}/boe/getByIdScheduler`;
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

  getInward_remittanceName() {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = { headers: new HttpHeaders({ Authorization: this.authToken }) };
    return this.http.get(`${this.api_base}/Inward_remittance/getSomeInfo`, httpOptions);
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
    return this.http.post(`${this.api_base}/pipo/getPipoByCustomer`, { filetype: type, buyer: buyer }, httpOptions);
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

  UpdateApproval(id: any, data: any) {
    this.loadFromLocalStorage();
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/Approval/UpdateApproval`, { id: id, data: data }, httpOptions);
  }

  getDataAnyTable(tableName: any, id: any) {
    this.loadFromLocalStorage();
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/Approval/getDataAnyTable`, { tableName: tableName, id: id }, httpOptions);
  }

  UpdateAnyTable(tableName: any, id: any, data: any) {
    this.loadFromLocalStorage();
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/Approval/UpdateAnyTable`, { tableName: tableName, id: id, data: data }, httpOptions);
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

  getAirwayBlcopy(pipono: any) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/airwayBlCopy/get`, { PipoNo: pipono }, httpOptions);
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

  getBoebyPipo(name: string) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/boe/getBoebyPipo`, { benneName: name }, httpOptions);
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
    return this.http.post(`${this.api_base}/Transaction/add`, { data: data }, httpOptions);
  }

  UpdateTransaction(data) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/Transaction/update`, data, httpOptions);
  }

  Update_Amount_by_Table(data) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = { headers: new HttpHeaders({ Authorization: this.authToken }) };
    return this.http.post(`${this.api_base}/Transaction/Amount_Update`, data, httpOptions);
  }
  Update_Amount_by_TableSB(data) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = { headers: new HttpHeaders({ Authorization: this.authToken }) };
    return this.http.post(`${this.api_base}/Transaction/Amount_UpdateSB`, data, httpOptions);
  }
  getExportBillLodgment() {
    console.log('I am in service');
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.get(`${this.api_base}/Transaction/get`, httpOptions);
  }
  getByIdExportBillLodgment(id: any) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/Transaction/getById`, { id: id }, httpOptions);
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
    return this.http.post(`${this.api_base}/task/sendmailnormal`, data, httpOptions);
  }

  buyer_beneficiary_creditadd(data: any) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/buyer_beneficiary_credit/add`, { data: data }, httpOptions);
  }

  buyer_beneficiary_creditget() {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.get(`${this.api_base}/buyer_beneficiary_credit/get`, httpOptions);
  }

  buyer_beneficiary_credit_update(data) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/buyer_beneficiary_credit/update`, data, httpOptions);
  }

  CA_Certificate_add(data: any) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/CA_Certificate/add`, { data: data }, httpOptions);
  }

  CA_Certificate_get() {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.get(`${this.api_base}/CA_Certificate/get`, httpOptions);
  }

  CA_Certificate_RequestType_get(data: any) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/CA_Certificate/getRequestType`, { type: data }, httpOptions);
  }


  CA_Certificate_update(data) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/CA_Certificate/update`, data, httpOptions);
  }

  ForwardContractadd(data: any) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/ForwardContract/add`, { data: data }, httpOptions);
  }

  ForwardContractget() {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.get(`${this.api_base}/ForwardContract/get`, httpOptions);
  }

  ForwardContract_update(data) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/ForwardContract/update`, data, httpOptions);
  }

  SendMailNormalTextdcouments(data) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/task/sendmailnormal`, data, httpOptions);
  }

  SendMaildocuments(data) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    return this.http.post(`${this.api_base}/task/documentsmail`, data, httpOptions);
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
  async getBankNameList() {
    return await this.getBankInfo()
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
      { BankUniqueId: '', urlpdf: '', value: "SBI Bank" },
    ]
    let addmorebank: any = this.getAddMoreBank();
    for (const key in addmorebank) {
      temp.push({ BankUniqueId: '', value: key })
    }
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

  Hide_InnerLoader() {
    setTimeout(() => {
      this.Inner_loading = false;
    }, 300);
  }

  getDateStatus(date: any) {
    return new Date().toLocaleDateString() === new Date(date).toLocaleDateString();
  }

  getAddMoreBank() {
    return {
      "AXIS BANK": "AXIS",
      "BANK OF AMERICA": "BOA",
      "BANK OF INDIA": "BOI",
      "YES BANK": "YESBANK",
      "THE ANDHRA PRADESH STATE COOPERATIVE BANK LIMITED": "APCOB",
      "THE NASIK MERCHANTS COOPERATIVE BANK LIMITED": "NAMCOBANK",
      "APNA SAHAKARI BANK LIMITED": "APNABANK",
      "AUSTRALIA AND NEW ZEALAND BANKING GROUP LIMITED": "ANZ",
      "CAPITAL SMALL FINANCE BANK LIMITED": "CAPITALBANK",
      "BANK OF MAHARASHTRA": "BOM",
      "JALGAON JANATA SAHAKARI BANK LIMITED": "JJSBL",
      "JANATA SAHAKARI BANK LIMITED": "JANATABANK",
      "KALLAPPANNA AWADE ICHALKARANJI JANATA SAHAKARI BANK LIMITED": "IJSBANK",
      "THE MUMBAI DISTRICT CENTRAL COOPERATIVE BANK LIMITED": "MDCCBANK",
      "PRIME COOPERATIVE BANK LIMITED": "PRIMEBANK",
      "THE THANE BHARAT SAHAKARI BANK LIMITED": "THANEBHARATBANK",
      "THE A.P. MAHESH COOPERATIVE URBAN BANK LIMITED": "APMAHESHBANK",
      "BANK OF TOKYO MITSUBISHI LIMITED": "MUFG",
      "THE GUJARAT STATE COOPERATIVE BANK LIMITED": "GSCBANK",
      "KARNATAKA VIKAS GRAMEENA BANK": "KVGBANK",
      "THE MUNICIPAL COOPERATIVE BANK LIMITED": "MUNICIPALBANK",
      "NAGPUR NAGARIK SAHAKARI BANK LIMITED": "NNSBANK",
      "THE KANGRA CENTRAL COOPERATIVE BANK LIMITED": "KCCB",
      "THE RAJASTHAN STATE COOPERATIVE BANK LIMITED": "RSCB",
      "THE SURAT DISTRICT COOPERATIVE BANK LIMITED": "SUDICOBANK",
      "THE VISHWESHWAR SAHAKARI BANK LIMITED": "VISHWESHWARBANK",
      "WOORI BANK": "WOORIBANK",
      "SUTEX COOPERATIVE BANK LIMITED": "SUTEXBANK",
      "BARCLAYS BANK": "BARCLAYS",
      "GURGAON GRAMIN BANK": "SHGB",
      "COMMONWEALTH BANK OF AUSTRALIA": "COMMBANK",
      "PRATHAMA BANK": "PRATHAMABANK",
      "NORTH MALABAR GRAMIN BANK": "KERALAGBANK",
      "THE VARACHHA COOPERATIVE BANK LIMITED": "VARACHHABANK",
      "SBER BANK": "SBERBANK",
      "TUMKUR GRAIN MERCHANTS COOPERATIVE BANK LIMITED": "TGMCBANK",
      "VASAI VIKAS SAHAKARI BANK LIMITED": "VASAIVIKASBANK",
      "VASAI VIKAS SAHAKARI BANK LTD": "VASAIVIKASBANK",
      "BASSEIN CATHOLIC COOPERATIVE BANK LIMITED": "BCCB",
      "WESTPAC BANKING CORPORATION": "WESTPAC",
      "ANDHRA PRAGATHI GRAMEENA BANK": "APGB",
      "SUMITOMO MITSUI BANKING CORPORATION": "SMBC",
      "THE SEVA VIKAS COOPERATIVE BANK LIMITED": "SEVAVIKASBANK",
      "THE THANE DISTRICT CENTRAL COOPERATIVE BANK LIMITED": "THANEDISTRICTBANK",
      "JP MORGAN BANK": "JPMORGAN",
      "THE GADCHIROLI DISTRICT CENTRAL COOPERATIVE BANK LIMITED": "GDCCBANK",
      "THE AKOLA DISTRICT CENTRAL COOPERATIVE BANK": "AKOLADCC",
      "THE KURMANCHAL NAGAR SAHAKARI BANK LIMITED": "KURMANCHALBANK",
      "THE JALGAON PEOPELS COOPERATIVE BANK LIMITED": "JPCBANK",
      "PARIBAS": "BNPPARIBAS",
      "NATIONAL AUSTRALIA BANK LIMITED": "NAB",
      "SAHEBRAO DESHMUKH COOPERATIVE BANK LIMITED": "SDCBANK",
      "BANK INTERNASIONAL INDONESIA": "MAYBANK",
      "SOLAPUR JANATA SAHAKARI BANK LIMITED": "SJSBBANK",
      "INDUSTRIAL AND COMMERCIAL BANK OF CHINA LIMITED": "ICBC",
      "UNITED OVERSEAS BANK LIMITED": "UOB",
      "ZILA SAHAKRI BANK LIMITED GHAZIABAD": "ZSBL",
      "JANASEVA SAHAKARI BANK BORIVLI LIMITED": "JANASEVABANK",
      "RAJGURUNAGAR SAHAKARI BANK LIMITED": "RAJGURUNAGARBANK",
      "CANARA BANK": "CANARABANK",
      "NAGAR URBAN CO OPERATIVE BANK": "NUCB",
      "AKOLA JANATA COMMERCIAL COOPERATIVE BANK": "AKOLAJANATABANK",
      "BHARATIYA MAHILA BANK LIMITED": "BMB",
      "HSBC BANK OMAN SAOG": "HSBC",
      "THE KANGRA COOPERATIVE BANK LIMITED": "KANGRABANK",
      "THE ZOROASTRIAN COOPERATIVE BANK LIMITED": "ZOROASTRIANBANK",
      "SHIKSHAK SAHAKARI BANK LIMITED": "SHIKSHAKBANK",
      "THE HASTI COOP BANK LTD": "HASTIBANK",
      "CATHOLIC SYRIAN BANK LIMITED": "CSB",
      "KERALA GRAMIN BANK": "KERALAGBANK",
      "PRAGATHI KRISHNA GRAMIN BANK": "PRAGATHIKRISHNABANK",
      "DEPOSIT INSURANCE AND CREDIT GUARANTEE CORPORATION": "DICGC",
      "DEVELOPMENT BANK OF SINGAPORE": "DBS",
      "DOHA BANK": "DOHABANK",
      "DOHA BANK QSC": "DOHABANK",
      "EXPORT IMPORT BANK OF INDIA": "EXIMBANK",
      "JANAKALYAN SAHAKARI BANK LIMITED": "JKSBL",
      "TJSB SAHAKARI BANK LIMITED": "TJSBBANK",
      "TJSB SAHAKARI BANK LTD": "TJSBBANK",
      "THE COSMOS CO OPERATIVE BANK LIMITED": "COSMOSBANK",
      "SURAT NATIONAL COOPERATIVE BANK LIMITED": "SURATNATIONALBANK",
      "CENTRAL BANK OF INDIA": "CENTRALBANK",
      "IDFC BANK LIMITED": "IDFC",
      "INDUSTRIAL BANK OF KOREA": "IBK",
      "SBM BANK MAURITIUS LIMITED": "SBM",
      "NATIONAL BANK OF ABU DHABI PJSC": "NBAD",
      "KEB HANA BANK": "KEBHANA",
      "THE PANDHARPUR URBAN CO OP. BANK LTD. PANDHARPUR": "PANDHARPURBANK",
      "SAMARTH SAHAKARI BANK LTD": "SAMARTHBANK",
      "SHIVALIK MERCANTILE CO OPERATIVE BANK LTD": "SHIVALIKBANK",
      "HIMACHAL PRADESH STATE COOPERATIVE BANK LTD": "HPSCB",
      "DEOGIRI NAGARI SAHAKARI BANK LTD. AURANGABAD": "DEOGIRIBANK",
      "CHINATRUST COMMERCIAL BANK LIMITED": "CHINATRUST",
      "PT BANK MAYBANK INDONESIA TBK": "MAYBANK",
      "MAHARASHTRA GRAMIN BANK": "MAHAGRAMIN",
      "EQUITAS SMALL FINANCE BANK LIMITED": "EQUITAS",
      "AIRTEL PAYMENTS BANK LIMITED": "AIRTEL",
      "CITI BANK": "CITIBANK",
      "CITIZEN CREDIT COOPERATIVE BANK LIMITED": "CITIZENCREDITBANK",
      "CITY UNION BANK LIMITED": "CUB",
      "CORPORATION BANK": "CORPBANK",
      "CREDIT AGRICOLE CORPORATE AND INVESTMENT BANK CALYON BANK": "CACIB",
      "DENA BANK": "DENABANK",
      "DEUSTCHE BANK": "DB",
      "DCB BANK LIMITED": "DCB",
      "DHANALAKSHMI BANK": "DHANBANK",
      "DOMBIVLI NAGARI SAHAKARI BANK LIMITED": "DNSBANK",
      "FIRSTRAND BANK LIMITED": "FIRSTRAND",
      "HDFC BANK": "HDFC",
      "HSBC BANK": "HSBC",
      "ICICI BANK LIMITED": "ICICI",
      "IDBI BANK": "IDBI",
      "INDIAN BANK": "INDIANBANK",
      "INDIAN OVERSEAS BANK": "IOB",
      "INDUSIND BANK": "INDUSIND",
      "JANASEVA SAHAKARI BANK LIMITED": "JANASEVABANK",
      "KAPOL COOPERATIVE BANK LIMITED": "KAPOLBANK",
      "KARNATAKA BANK LIMITED": "KARNATAKABANK",
      "KARUR VYSYA BANK": "KVB",
      "KOTAK MAHINDRA BANK LIMITED": "KOTAK",
      "MAHANAGAR COOPERATIVE BANK": "MAHANAGARBANK",
      "MAHARASHTRA STATE COOPERATIVE BANK": "MSCBANK",
      "MASHREQBANK PSC": "MASHREQBANK",
      "MIZUHO BANK LTD": "MIZUHOBANK",
      "NEW INDIA COOPERATIVE BANK LIMITED": "NEWINDIABANK",
      "NKGSB COOPERATIVE BANK LIMITED": "NKGSB",
      "NUTAN NAGARIK SAHAKARI BANK LIMITED": "NUTANBANK",
      "ORIENTAL BANK OF COMMERCE": "OBC",
      "PARSIK BANK": "GPPARSIKBANK",
      "PUNJAB AND MAHARSHTRA COOPERATIVE BANK": "PMC",
      "PUNJAB AND SIND BANK": "PSB",
      "PUNJAB NATIONAL BANK": "PNB",
      "RAJKOT NAGRIK SAHAKARI BANK LIMITED": "RNSB",
      "RESERVE BANK OF INDIA": "RBI",
      "SHINHAN BANK": "SHINHAN",
      "SOCIETE GENERALE": "SOCIETEGENERALE",
      "SOUTH INDIAN BANK": "SOUTHINDIANBANK",
      "STANDARD CHARTERED BANK": "SC",
      "STATE BANK OF BIKANER AND JAIPUR": "SBBJ",
      "STATE BANK OF HYDERABAD": "SBHYD",
      "STATE BANK OF INDIA": "SBI",
      "STATE BANK OF MAURITIUS LIMITED": "SBMGROUP",
      "STATE BANK OF MYSORE": "SBM",
      "STATE BANK OF PATIALA": "SBP",
      "STATE BANK OF TRAVANCORE": "SBT",
      "SYNDICATE BANK": "SYNDICATEBANK",
      "TAMILNAD MERCANTILE BANK LIMITED": "TMBL",
      "THE BANK OF NOVA SCOTIA": "SCOTIABANK",
      "AHMEDABAD MERCANTILE COOPERATIVE BANK": "AMCOBANK",
      "BHARAT COOPERATIVE BANK MUMBAI LIMITED": "BHARATBANK",
      "FEDERAL BANK": "FEDERALBANK",
      "THE GREATER BOMBAY COOPERATIVE BANK LIMITED": "GREATERBANK",
      "JAMMU AND KASHMIR BANK LIMITED": "JKBANK",
      "KALUPUR COMMERCIAL COOPERATIVE BANK": "KALUPURBANK",
      "THE KARANATAKA STATE COOPERATIVE APEX BANK LIMITED": "KARNATAKAAPEX",
      "KALYAN JANATA SAHAKARI BANK": "KALYANJANATA",
      "LAXMI VILAS BANK": "LVB",
      "THE MEHSANA URBAN COOPERATIVE BANK": "MUCBANK",
      "THE NAINITAL BANK LIMITED": "NAINITALBANK",
      "RBL BANK LIMITED": "RBL",
      "THE ROYAL BANK OF SCOTLAND": "RBS",
      "SARASWAT COOPERATIVE BANK LIMITED": "SARASWATBANK",
      "THE SHAMRAO VITHAL COOPERATIVE BANK": "SVCBANK",
      "THE SURATH PEOPLES COOPERATIVE BANK LIMITED": "SPCBL",
      "THE TAMIL NADU STATE APEX COOPERATIVE BANK": "TNSCBANK",
      "THE WEST BENGAL STATE COOPERATIVE BANK": "WBSCB",
      "UCO BANK": "UCOBANK",
      "UNION BANK OF INDIA": "UNIONBANK",
      "UNITED BANK OF INDIA": "UNITEDBANK",
      "VIJAYA BANK": "VIJAYABANK",
      "BANK OF BARODA": "BOB",
      'COMERICA BANK DALLAS, TX US': 'CMBD',
      'JPMORGAN CHASE BANK, N.A. NEW YORK, NY US': 'JPCHBUS'
    }
  }
  getCountryWise() {
    return [
      { "name": "Afghanistan", "code": "AF" },
      { "name": "Åland Islands", "code": "AX" },
      { "name": "Albania", "code": "AL" },
      { "name": "Algeria", "code": "DZ" },
      { "name": "American Samoa", "code": "AS" },
      { "name": "Andorra", "code": "AD" },
      { "name": "Angola", "code": "AO" },
      { "name": "Anguilla", "code": "AI" },
      { "name": "Antarctica", "code": "AQ" },
      { "name": "Antigua and Barbuda", "code": "AG" },
      { "name": "Argentina", "code": "AR" },
      { "name": "Armenia", "code": "AM" },
      { "name": "Aruba", "code": "AW" },
      { "name": "Australia", "code": "AU" },
      { "name": "Austria", "code": "AT" },
      { "name": "Azerbaijan", "code": "AZ" },
      { "name": "Bahamas (the)", "code": "BS" },
      { "name": "Bahrain", "code": "BH" },
      { "name": "Bangladesh", "code": "BD" },
      { "name": "Barbados", "code": "BB" },
      { "name": "Belarus", "code": "BY" },
      { "name": "Belgium", "code": "BE" },
      { "name": "Belize", "code": "BZ" },
      { "name": "Benin", "code": "BJ" },
      { "name": "Bermuda", "code": "BM" },
      { "name": "Bhutan", "code": "BT" },
      { "name": "Bolivia (Plurinational State of)", "code": "BO" },
      { "name": "Bonaire, Sint Eustatius and Saba", "code": "BQ" },
      { "name": "Bosnia and Herzegovina", "code": "BA" },
      { "name": "Botswana", "code": "BW" },
      { "name": "Bouvet Island", "code": "BV" },
      { "name": "Brazil", "code": "BR" },
      { "name": "British Indian Ocean Territory (the)", "code": "IO" },
      { "name": "Brunei Darussalam", "code": "BN" },
      { "name": "Bulgaria", "code": "BG" },
      { "name": "Burkina Faso", "code": "BF" },
      { "name": "Burundi", "code": "BI" },
      { "name": "Cabo Verde", "code": "CV" },
      { "name": "Cambodia", "code": "KH" },
      { "name": "Cameroon", "code": "CM" },
      { "name": "Canada", "code": "CA" },
      { "name": "Cayman Islands (the)", "code": "KY" },
      { "name": "Central African Republic (the)", "code": "CF" },
      { "name": "Chad", "code": "TD" },
      { "name": "Chile", "code": "CL" },
      { "name": "China", "code": "CN" },
      { "name": "Christmas Island", "code": "CX" },
      { "name": "Cocos (Keeling) Islands (the)", "code": "CC" },
      { "name": "Colombia", "code": "CO" },
      { "name": "Comoros (the)", "code": "KM" },
      { "name": "Congo (the Democratic Republic of the)", "code": "CD" },
      { "name": "Congo (the)", "code": "CG" },
      { "name": "Cook Islands (the)", "code": "CK" },
      { "name": "Costa Rica", "code": "CR" },
      { "name": "Croatia", "code": "HR" },
      { "name": "Cuba", "code": "CU" },
      { "name": "Curaçao", "code": "CW" },
      { "name": "Cyprus", "code": "CY" },
      { "name": "Czechia", "code": "CZ" },
      { "name": "Côte d'Ivoire", "code": "CI" },
      { "name": "Denmark", "code": "DK" },
      { "name": "Djibouti", "code": "DJ" },
      { "name": "Dominica", "code": "DM" },
      { "name": "Dominican Republic (the)", "code": "DO" },
      { "name": "Ecuador", "code": "EC" },
      { "name": "Egypt", "code": "EG" },
      { "name": "El Salvador", "code": "SV" },
      { "name": "Equatorial Guinea", "code": "GQ" },
      { "name": "Eritrea", "code": "ER" },
      { "name": "Estonia", "code": "EE" },
      { "name": "Eswatini", "code": "SZ" },
      { "name": "Ethiopia", "code": "ET" },
      { "name": "Falkland Islands (the) [Malvinas]", "code": "FK" },
      { "name": "Faroe Islands (the)", "code": "FO" },
      { "name": "Fiji", "code": "FJ" },
      { "name": "Finland", "code": "FI" },
      { "name": "France", "code": "FR" },
      { "name": "French Guiana", "code": "GF" },
      { "name": "French Polynesia", "code": "PF" },
      { "name": "French Southern Territories (the)", "code": "TF" },
      { "name": "Gabon", "code": "GA" },
      { "name": "Gambia (the)", "code": "GM" },
      { "name": "Georgia", "code": "GE" },
      { "name": "Germany", "code": "DE" },
      { "name": "Ghana", "code": "GH" },
      { "name": "Gibraltar", "code": "GI" },
      { "name": "Greece", "code": "GR" },
      { "name": "Greenland", "code": "GL" },
      { "name": "Grenada", "code": "GD" },
      { "name": "Guadeloupe", "code": "GP" },
      { "name": "Guam", "code": "GU" },
      { "name": "Guatemala", "code": "GT" },
      { "name": "Guernsey", "code": "GG" },
      { "name": "Guinea", "code": "GN" },
      { "name": "Guinea-Bissau", "code": "GW" },
      { "name": "Guyana", "code": "GY" },
      { "name": "Haiti", "code": "HT" },
      { "name": "Heard Island and McDonald Islands", "code": "HM" },
      { "name": "Holy See (the)", "code": "VA" },
      { "name": "Honduras", "code": "HN" },
      { "name": "Hong Kong", "code": "HK" },
      { "name": "Hungary", "code": "HU" },
      { "name": "Iceland", "code": "IS" },
      { "name": "India", "code": "IN" },
      { "name": "Indonesia", "code": "ID" },
      { "name": "Iran (Islamic Republic of)", "code": "IR" },
      { "name": "Iraq", "code": "IQ" },
      { "name": "Ireland", "code": "IE" },
      { "name": "Isle of Man", "code": "IM" },
      { "name": "Israel", "code": "IL" },
      { "name": "Italy", "code": "IT" },
      { "name": "Jamaica", "code": "JM" },
      { "name": "Japan", "code": "JP" },
      { "name": "Jersey", "code": "JE" },
      { "name": "Jordan", "code": "JO" },
      { "name": "Kazakhstan", "code": "KZ" },
      { "name": "Kenya", "code": "KE" },
      { "name": "Kiribati", "code": "KI" },
      { "name": "Korea (the Democratic People's Republic of)", "code": "KP" },
      { "name": "Korea (the Republic of)", "code": "KR" },
      { "name": "Kuwait", "code": "KW" },
      { "name": "Kyrgyzstan", "code": "KG" },
      { "name": "Lao People's Democratic Republic (the)", "code": "LA" },
      { "name": "Latvia", "code": "LV" },
      { "name": "Lebanon", "code": "LB" },
      { "name": "Lesotho", "code": "LS" },
      { "name": "Liberia", "code": "LR" },
      { "name": "Libya", "code": "LY" },
      { "name": "Liechtenstein", "code": "LI" },
      { "name": "Lithuania", "code": "LT" },
      { "name": "Luxembourg", "code": "LU" },
      { "name": "Macao", "code": "MO" },
      { "name": "Madagascar", "code": "MG" },
      { "name": "Malawi", "code": "MW" },
      { "name": "Malaysia", "code": "MY" },
      { "name": "Maldives", "code": "MV" },
      { "name": "Mali", "code": "ML" },
      { "name": "Malta", "code": "MT" },
      { "name": "Marshall Islands (the)", "code": "MH" },
      { "name": "Martinique", "code": "MQ" },
      { "name": "Mauritania", "code": "MR" },
      { "name": "Mauritius", "code": "MU" },
      { "name": "Mayotte", "code": "YT" },
      { "name": "Mexico", "code": "MX" },
      { "name": "Micronesia (Federated States of)", "code": "FM" },
      { "name": "Moldova (the Republic of)", "code": "MD" },
      { "name": "Monaco", "code": "MC" },
      { "name": "Mongolia", "code": "MN" },
      { "name": "Montenegro", "code": "ME" },
      { "name": "Montserrat", "code": "MS" },
      { "name": "Morocco", "code": "MA" },
      { "name": "Mozambique", "code": "MZ" },
      { "name": "Myanmar", "code": "MM" },
      { "name": "Namibia", "code": "NA" },
      { "name": "Nauru", "code": "NR" },
      { "name": "Nepal", "code": "NP" },
      { "name": "Netherlands (the)", "code": "NL" },
      { "name": "New Caledonia", "code": "NC" },
      { "name": "New Zealand", "code": "NZ" },
      { "name": "Nicaragua", "code": "NI" },
      { "name": "Niger (the)", "code": "NE" },
      { "name": "Nigeria", "code": "NG" },
      { "name": "Niue", "code": "NU" },
      { "name": "Norfolk Island", "code": "NF" },
      { "name": "Northern Mariana Islands (the)", "code": "MP" },
      { "name": "Norway", "code": "NO" },
      { "name": "Oman", "code": "OM" },
      { "name": "Pakistan", "code": "PK" },
      { "name": "Palau", "code": "PW" },
      { "name": "Palestine, State of", "code": "PS" },
      { "name": "Panama", "code": "PA" },
      { "name": "Papua New Guinea", "code": "PG" },
      { "name": "Paraguay", "code": "PY" },
      { "name": "Peru", "code": "PE" },
      { "name": "Philippines (the)", "code": "PH" },
      { "name": "Pitcairn", "code": "PN" },
      { "name": "Poland", "code": "PL" },
      { "name": "Portugal", "code": "PT" },
      { "name": "Puerto Rico", "code": "PR" },
      { "name": "Qatar", "code": "QA" },
      { "name": "Republic of North Macedonia", "code": "MK" },
      { "name": "Romania", "code": "RO" },
      { "name": "Russian Federation (the)", "code": "RU" },
      { "name": "Rwanda", "code": "RW" },
      { "name": "Réunion", "code": "RE" },
      { "name": "Saint Barthélemy", "code": "BL" },
      { "name": "Saint Helena, Ascension and Tristan da Cunha", "code": "SH" },
      { "name": "Saint Kitts and Nevis", "code": "KN" },
      { "name": "Saint Lucia", "code": "LC" },
      { "name": "Saint Martin (French part)", "code": "MF" },
      { "name": "Saint Pierre and Miquelon", "code": "PM" },
      { "name": "Saint Vincent and the Grenadines", "code": "VC" },
      { "name": "Samoa", "code": "WS" },
      { "name": "San Marino", "code": "SM" },
      { "name": "Sao Tome and Principe", "code": "ST" },
      { "name": "Saudi Arabia", "code": "SA" },
      { "name": "Senegal", "code": "SN" },
      { "name": "Serbia", "code": "RS" },
      { "name": "Seychelles", "code": "SC" },
      { "name": "Sierra Leone", "code": "SL" },
      { "name": "Singapore", "code": "SG" },
      { "name": "Sint Maarten (Dutch part)", "code": "SX" },
      { "name": "Slovakia", "code": "SK" },
      { "name": "Slovenia", "code": "SI" },
      { "name": "Solomon Islands", "code": "SB" },
      { "name": "Somalia", "code": "SO" },
      { "name": "South Africa", "code": "ZA" },
      { "name": "South Georgia and the South Sandwich Islands", "code": "GS" },
      { "name": "South Sudan", "code": "SS" },
      { "name": "Spain", "code": "ES" },
      { "name": "Sri Lanka", "code": "LK" },
      { "name": "Sudan (the)", "code": "SD" },
      { "name": "Suriname", "code": "SR" },
      { "name": "Svalbard and Jan Mayen", "code": "SJ" },
      { "name": "Sweden", "code": "SE" },
      { "name": "Switzerland", "code": "CH" },
      { "name": "Syrian Arab Republic", "code": "SY" },
      { "name": "Taiwan (Province of China)", "code": "TW" },
      { "name": "Tajikistan", "code": "TJ" },
      { "name": "Tanzania, United Republic of", "code": "TZ" },
      { "name": "Thailand", "code": "TH" },
      { "name": "Timor-Leste", "code": "TL" },
      { "name": "Togo", "code": "TG" },
      { "name": "Tokelau", "code": "TK" },
      { "name": "Tonga", "code": "TO" },
      { "name": "Trinidad and Tobago", "code": "TT" },
      { "name": "Tunisia", "code": "TN" },
      { "name": "Turkey", "code": "TR" },
      { "name": "Turkmenistan", "code": "TM" },
      { "name": "Turks and Caicos Islands (the)", "code": "TC" },
      { "name": "Tuvalu", "code": "TV" },
      { "name": "Uganda", "code": "UG" },
      { "name": "Ukraine", "code": "UA" },
      { "name": "United Arab Emirates (the)", "code": "AE" },
      { "name": "United Kingdom of Great Britain and Northern Ireland (the)", "code": "GB" },
      { "name": "United States Minor Outlying Islands (the)", "code": "UM" },
      { "name": "United States of America (the)", "code": "US" },
      { "name": "Uruguay", "code": "UY" },
      { "name": "Uzbekistan", "code": "UZ" },
      { "name": "Vanuatu", "code": "VU" },
      { "name": "Venezuela (Bolivarian Republic of)", "code": "VE" },
      { "name": "Viet Nam", "code": "VN" },
      { "name": "Virgin Islands (British)", "code": "VG" },
      { "name": "Virgin Islands (U.S.)", "code": "VI" },
      { "name": "Wallis and Futuna", "code": "WF" },
      { "name": "Western Sahara", "code": "EH" },
      { "name": "Yemen", "code": "YE" },
      { "name": "Zambia", "code": "ZM" },
      { "name": "Zimbabwe", "code": "ZW" },
    ]
  }

  removeAllSpecialChar(string: any) {
    return string?.replace(/[^a-zA-Z ]/g, "");
  }

  addNewBankInfo(bank) {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    let url = `${this.api_base}/BankInformantion/post`;
    return this.http.post(url, { data: bank }, httpOptions);
  }

  getBankInfo() {
    this.loadFromLocalStorage();
    console.log(this.authToken);
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: this.authToken }),
    };
    let url = `${this.api_base}/BankInformantion/getAllBankList`;
    return this.http.get(url, httpOptions).toPromise();
  }
}