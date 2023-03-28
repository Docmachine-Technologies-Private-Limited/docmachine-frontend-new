import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';
import { PipoDisplayListViewItem, PipoDisplayListView, PipoModel } from "../../../model/pipo.model";
import { DocumentService } from '../../service/document.service';

@Injectable({ providedIn: "root" })
export class PipoDataService {
  public pipolistSubsciber = new BehaviorSubject([]);
  public pipolistModelSubsciber = new BehaviorSubject([]);
  public pipoSingleSubsciber = new BehaviorSubject(new PipoDisplayListViewItem({}));
  public PI_PO_NUMBER_LIST: any = {
    PI_PO_BUYER_NAME: [],
    PI_PO_BENNE_NAME: [],
    PIPO_TRANSACTION:[]
  };
  PIPO_LIST:any=[]
  constructor(public documentService: DocumentService) {

  }
  get pipo$(): Observable<Array<PipoDisplayListViewItem>> {
    return this.pipolistSubsciber.asObservable();
  }
  get pipoSingle$(): Observable<PipoDisplayListViewItem> {
    return this.pipoSingleSubsciber.asObservable();
  }
  get pipolistModel$(): Observable<Array<PipoModel>> {
    return this.pipolistModelSubsciber.asObservable();
  }
  setPipoData(data, type?: string) {
    let temppipo: any = new PipoDisplayListView(data, type);
    this.pipolistSubsciber.next(temppipo.pipolist);
    return temppipo;
  }
  setSinglePipoData(data) {
    this.pipoSingleSubsciber.next(new PipoDisplayListViewItem(data));
  }

  getPipoList = (type) => {
    return new Promise((resolve, reject) => {
      this.documentService.getPipo().subscribe(
        (res: any) => {
          console.log(res, 'resssss.................')
          let temppipo:any = new PipoDisplayListView(res.data, type);
          this.pipolistModelSubsciber.next(temppipo.pipoModelList);
          this.pipolistSubsciber.next(temppipo.pipolist);
          console.log(temppipo, 'temppipo')
          this.pipolistModelSubsciber.subscribe((pipo_lits: any) => {
            var data: any = pipo_lits;
            this.PI_PO_NUMBER_LIST['PI_PO_BUYER_NAME'] = [];
            this.PI_PO_NUMBER_LIST['PI_PO_BENNE_NAME'] = [];
            this.PI_PO_NUMBER_LIST['PIPO_TRANSACTION'] = [];
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
            console.log(this.PI_PO_NUMBER_LIST, type, 'PI_PO_NUMBER_LIST')
          })
          resolve(temppipo);
        },
        (err) => reject(err)
      );
    });
  }

  getPipoList1 = (type,pipolist:any) => {
    return new Promise((resolve, reject) => {
      this.documentService.getPipo().subscribe(
        (res: any) => {
          console.log(res, 'resssss.................')
          let temppipo:any = new PipoDisplayListView(res.data, type);
          this.pipolistModelSubsciber.next(temppipo.pipoModelList);
          this.pipolistSubsciber.next(temppipo.pipolist);
          console.log(temppipo, 'temppipo')
          this.pipolistModelSubsciber.subscribe((pipo_lits: any) => {
            var data: any = pipo_lits;
            this.PI_PO_NUMBER_LIST['PI_PO_BUYER_NAME'] = [];
            this.PI_PO_NUMBER_LIST['PI_PO_BENNE_NAME'] = [];
            this.PI_PO_NUMBER_LIST['PIPO_TRANSACTION'] = [];
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
              var t:any=data.filter((item:any)=>item?.pi_poNo.indexOf(element)!=-1)
              if (type=='import') {
                t.forEach(item => {
                  this.PI_PO_NUMBER_LIST['PIPO_TRANSACTION'].push({pi_po_buyerName: 'PI-' + item?.pi_poNo + '-' + item.benneName,
                  id: [item.pi_poNo, item?.benneName],
                  _id: item?._id}) 
               });
              } else {
                t.forEach(item => {
                  this.PI_PO_NUMBER_LIST['PIPO_TRANSACTION'].push({pi_po_buyerName: 'PI-' + item?.pi_poNo + '-' + item.buyerName,
                  id: [item.pi_poNo, item?.buyerName],
                  _id: item?._id}) 
               });
              }
            }
            console.log(this.PI_PO_NUMBER_LIST, type, 'PI_PO_NUMBER_LIST')
          })
          resolve(temppipo);
        },
        (err) => reject(err)
      );
    });
  }

  getPipoListByCustomer = (type, customer) => {
    return new Promise((resolve, reject) => {
      this.documentService.getPipoByCustomer(type, customer).subscribe(
        (res: any) => {
          console.log(res,customer,'resssss.................')
          let temppipo:any = new PipoDisplayListView(res.data, type);
          console.log(temppipo, 'temppipo')
          this.pipolistModelSubsciber.next(temppipo.pipoModelList);
          this.pipolistSubsciber.next(temppipo.pipolist);
          this.pipolistModelSubsciber.subscribe((pipo_lits: any) => {
            var data: any = pipo_lits;
            this.PI_PO_NUMBER_LIST['PI_PO_BUYER_NAME'] = [];
            this.PI_PO_NUMBER_LIST['PI_PO_BENNE_NAME'] = [];
            for (let index = 0; index < data.length; index++) {
              if (data[index]?.benneName != '' || data[index].pi_poNo != '') {
                if (data[index]?.benneName === customer) {
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
            }
          })
          resolve(temppipo);
        },
        (err) => reject(err)
      );
    });
  }

  getPipoListBy = (type,datalist:any) => {
    return new Promise((resolve, reject) => {
    var temp:any=[];
      this.documentService.getPipo().subscribe((res: any) => {
          console.log(res, 'resssss.................')
          var data: any = res?.data;
            for (let index = 0; index < datalist.length; index++) {
              const element = datalist[index];
              var t:any=data.filter((item:any)=>item?.pi_poNo.indexOf(element)!=-1)
              if (type=='import') {
                t.forEach(item => {
                  temp.push('PI-' + item?.pi_poNo + '-' + item.benneName) 
               });
              } else {
                t.forEach(item => {
                  temp.push('PI-' + item?.pi_poNo + '-' + item.buyerName) 
               });
              }
            }
            this.PIPO_LIST= temp.filter((c, index) => {
              return temp.indexOf(c) !== index;
            })
            console.log(this.PIPO_LIST,temp,datalist,'hfhgfffghgffg')
            resolve(this.PIPO_LIST);
        },
        (err) => reject(err)
      );
    });
  }
  getShippingBillById(shippingBillId) {
    let pipolist:any = this.pipolistModelSubsciber.value;
    for (let i in pipolist) {
      if (pipolist[i]) {
        for (let j in pipolist[i].sbRef) {
          if (pipolist[i].sbRef[j]._id == shippingBillId) {
            return pipolist[i].sbRef[j];
          }
        }
      }
    }
  }

  getShippingBills(pipoid) {
    let pipolist:any = this.pipolistModelSubsciber.value;
    console.log('pipolist', pipolist);
    for (let i in pipolist) {
      if (pipolist[i]._id == pipoid) {
        return pipolist[i].sbRef;
      }
    }
  }
  SHIPPING_BILL_LIST:any=[];
  getShippingNo(id: any,type: string) {
    let pipolist:any = this.pipolistModelSubsciber.value;
    console.log('pipolist',id,pipolist);
    this.SHIPPING_BILL_LIST = [];
    if (type=='export') {
    for (let i in pipolist) {
      if (id == pipolist[i]._id) {
      for (let index = 0; index < pipolist[i]?.sbRef.length; index++) {
          this.SHIPPING_BILL_LIST.push(pipolist[i]?.sbRef[index]);
        }
      }
    }
    }else{
      this.documentService.getBoe(1).subscribe((res: any) => {
        for (let value of res.data) {
          if (value['file'] == 'import') {
            this.SHIPPING_BILL_LIST.push({
              _id:value['_id'],
              sbno:value['boeNumber']
            });
          }
        }
      },(err) => console.log(err)
    );
    }
  }
  getPiPobyId(id,type){
    return new Promise((resolve, reject) => {
      this.documentService.getPipo().subscribe((res: any) => {
          let temppipo:any = new PipoDisplayListView(res.data, type);
          this.pipolistModelSubsciber.next(temppipo.pipoModelList);
          this.pipolistSubsciber.next(temppipo.pipolist);
          this.pipolistModelSubsciber.subscribe((pipo_lits: any) => {
            var data: any = pipo_lits.filter((item:any)=>item?._id==id);
            resolve(data[0]);          
          })
        },
        (err) => reject(err)
      );
    });
  }
  getBoeBillById(id) {
    return new Promise((resolve, reject) => {
      this.documentService.getBoe(1).subscribe((res: any) => {
            var data: any = res?.data?.filter((item:any)=>item?._id==id);
            resolve(data[0]);          
        },(err) => reject(err));
    });
  }
}
