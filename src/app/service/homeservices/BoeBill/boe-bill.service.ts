import { Injectable } from "@angular/core";
import {BehaviorSubject, Observable} from 'rxjs';
import {BoeBillDisplayListViewItem, BoeBill} from "./BoeBill.model";
import {DocumentService} from '../../document.service';
@Injectable({
  providedIn: 'root'
})
export class BoeBillService {
  public BoeBillSubsciber = new BehaviorSubject([]);
  constructor(public documentService: DocumentService) {}
  
  get Boebills$(): Observable<Array<BoeBillDisplayListViewItem>> {
    return this.BoeBillSubsciber.asObservable();
  }

  setBoeData(data) {
    let temppipo: any = new BoeBillDisplayListViewItem(data);
    this.BoeBillSubsciber.next(temppipo.BoeBillList);
    return temppipo;
  }

  getBoeBillList = () => {
    return new Promise((resolve, reject) => {
      this.documentService.getBoe(1).subscribe(
        (res: any) => {
          console.log(res,'getBoeBillList')
          let temppipo:any = new BoeBillDisplayListViewItem(res.data);
          this.BoeBillSubsciber.next(temppipo?.BoeBillList);
          resolve(temppipo);
        },
        (err) => reject(err)
      );
    });
  }
  getBoeBillList_Master = () => {
    return new Promise((resolve, reject) => {
      this.documentService.getBoe(1).subscribe(
        (res: any) => {
          resolve(res?.data);
        },
        (err) => reject(err)
      );
    });
  }
}
