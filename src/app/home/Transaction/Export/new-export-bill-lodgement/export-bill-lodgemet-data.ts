import { Injectable } from "@angular/core";
import { DocumentService } from "../../../../service/document.service";
import { UserService } from "../../../../service/user.service";

@Injectable({ providedIn: 'root' })
export class ExportBillLodgementData {
    SHIPPING_BILL_DATA: any = [];
    BUYER_LIST: any = [];
    FIREX_DETAILS: any = [];

    constructor(public documentService: DocumentService,
        private userService: UserService) {
        this.getBuyerList();
        console.log("adsdadadasdasdasdadasdasdasdasdadasdsadsds")
    }
    getShippingBill(buyerName: any) {
        console.log(buyerName, "getShippingBill")
        if (buyerName != undefined && buyerName != null && buyerName != '') {
            this.documentService.getMasterBuyer(buyerName).subscribe((res: any) => {
                let data:any=[];
                res?.data?.forEach(element => {
                    element['balanceAvai'] = element['balanceAvai'] != '-1' ? element['balanceAvai'] : element?.fobValue
                    if (element?.balanceAvai!='0') {
                        data.push(element);
                    }
                });
                this.SHIPPING_BILL_DATA = data;
                this.getbyFIRXPartyName(buyerName);
            });
        }
        this.SHIPPING_BILL_DATA = [];
    }
    getBuyerList() {
        this.userService.getBuyer(1).subscribe((res: any) => this.BUYER_LIST = res?.data);
    }
    getbyFIRXPartyName(buyerName: any) {
        this.documentService.getbyPartyName(buyerName).subscribe((res: any) => {
           let data:any=[];
            res?.data?.forEach(element => {
                element['BalanceAvail'] =  element['BalanceAvail'] != undefined ? element['BalanceAvail'] : element?.amount
                if (element?.BalanceAvail!='0') {
                    data.push(element);
                }
            });
            this.FIREX_DETAILS = data;
            console.log(res, "getbyFIRXPartyName")
        });
    }
}