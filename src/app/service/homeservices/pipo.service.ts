import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {BehaviorSubject, Observable} from 'rxjs';
import {PipoDisplayListViewItem, PipoDisplayListView, PipoModel} from "../../../model/pipo.model";
import {DocumentService} from '../../service/document.service';

@Injectable({ providedIn: "root" })
export class PipoDataService {
  public pipolistSubsciber = new BehaviorSubject([]);
  public pipolistModelSubsciber = new BehaviorSubject([]);
  public pipoSingleSubsciber = new BehaviorSubject(new PipoDisplayListViewItem({}));
  public PI_PO_NUMBER_LIST:any={
    PI_PO_BUYER_NAME:[],
    PI_PO_BENNE_NAME:[]
  };
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
          console.log(res,'resssss.................')
          let temppipo = new PipoDisplayListView(res.data, type);
          this.pipolistModelSubsciber.next(temppipo.pipoModelList);
          this.pipolistSubsciber.next(temppipo.pipolist);
          console.log(temppipo,'temppipo')
          this.pipolistModelSubsciber.subscribe((pipo_lits:any)=>{
          var data:any=pipo_lits;
          this.PI_PO_NUMBER_LIST['PI_PO_BUYER_NAME']=[];
          this.PI_PO_NUMBER_LIST['PI_PO_BENNE_NAME']=[];
          for (let index = 0; index < data.length; index++) {
                if (data[index]?.buyerName!='' || data[index].pi_poNo!='' ) {
                  this.PI_PO_NUMBER_LIST['PI_PO_BUYER_NAME'].push({
                    pi_po_buyerName:'PI-'+data[index]?.pi_poNo+'-'+data[index].buyerName,
                    id:[data[index].pi_poNo,data[index]?.buyerName],
                    _id:data[index]?._id
                  })
                  this.PI_PO_NUMBER_LIST['PI_PO_BENNE_NAME'].push({
                    pi_po_buyerName:'PI-'+data[index]?.pi_poNo+'-'+data[index].benneName,
                    id:[data[index].pi_poNo,data[index]?.benneName],
                    _id:data[index]?._id
                  })
                }
              }
          })
          resolve(temppipo);
        },
        (err) => reject(err)
      );
    });
  }

  getPipoListByCustomer = (type,customer) => {
    return new Promise((resolve, reject) => {
      this.documentService.getPipoByCustomer(type,customer).subscribe(
        (res: any) => {
          console.log(res,'resssss.................')
          let temppipo = new PipoDisplayListView(res.data, type);
          console.log( temppipo,'temppipo')
          this.pipolistModelSubsciber.next(temppipo.pipoModelList);
          this.pipolistSubsciber.next(temppipo.pipolist);
          this.pipolistModelSubsciber.subscribe((pipo_lits:any)=>{
            var data:any=pipo_lits;
            this.PI_PO_NUMBER_LIST['PI_PO_BUYER_NAME']=[];
            this.PI_PO_NUMBER_LIST['PI_PO_BENNE_NAME']=[];
            for (let index = 0; index < data.length; index++) {
                  if (data[index]?.buyerName!='' || data[index].pi_poNo!='' ) {
                    this.PI_PO_NUMBER_LIST['PI_PO_BUYER_NAME'].push({
                      pi_po_buyerName:'PI-'+data[index]?.pi_poNo+'-'+data[index].buyerName,
                      id:[data[index].pi_poNo,data[index]?.buyerName],
                      _id:data[index]?._id
                    })
                    this.PI_PO_NUMBER_LIST['PI_PO_BENNE_NAME'].push({
                      pi_po_buyerName:'PI-'+data[index]?.pi_poNo+'-'+data[index].benneName,
                      id:[data[index].pi_poNo,data[index]?.benneName],
                      _id:data[index]?._id
                    })
                  }
                }
            })
          resolve(temppipo);
        },
        (err) => reject(err)
      );
    });
  }


  getShippingBillById(shippingBillId) {
    let pipolist = this.pipolistModelSubsciber.value;
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
    let pipolist = this.pipolistModelSubsciber.value;
    console.log('pipolist',pipolist);
    for (let i in pipolist) {
      if (pipolist[i]._id == pipoid) {
        return pipolist[i].sbRef;
      }
    }
  }
  getShippingNo() {
    let pipolist = this.pipolistModelSubsciber.value;
    console.log('pipolist',pipolist);
    var temp:any=[];
    for (let i in pipolist) {
      for (let index = 0; index < pipolist[i]?.sbRef.length; index++) {
        temp.push(pipolist[i]?.sbRef[index]);
      }
      }
      return temp;
    }
}
