import { Injectable } from "@angular/core";
import { DocumentService } from "../../../../service/document.service";
import { UserService } from "../../../../service/user.service";
import { ToastrService } from "ngx-toastr";

@Injectable({ providedIn: 'root' })
export class ExportBillLodgementData {
    SHIPPING_BILL_DATA: any = [];
    SHIPPING_BILL_DATA_LINKAGE: any = [];
    BUYER_LIST: any = [];
    FIREX_DETAILS: any = [];
    TOTAL_FIRX_AMOUNT: any = 0;
    SELECTED_SHIPPING_BILL: any = [];
    SELECTED_COMMERICAIL_DATA: any = [];
    SELECTED_BUYER_NAME: any = ''
    TOTAL_CI_AMOUNT: any = 0;
    TRANSACTION_SHIPPING_BILL: any = [];
    TRANSACTION_SELECTED_COMMERICAIL_DATA: any = [];

    constructor(public documentService: DocumentService,
        private toastr: ToastrService,
        private userService: UserService) {
        this.getBuyerList();
        console.log("adsdadadasdasdasdadasdasdasdasdadasdsadsds")
    }
    getShippingBill(buyerName: any, type: any) {
        this.setBuyerName(buyerName)
        if (buyerName != undefined && buyerName != null && buyerName != '') {
            this.documentService.getMasterBuyer(buyerName?.buyerName).subscribe((res: any) => {
                let data: any = [];
                this.TRANSACTION_SHIPPING_BILL = [];
                this.SHIPPING_BILL_DATA_LINKAGE = [];
                res?.data?.forEach(element => {
                    element['balanceAvai'] = element['balanceAvai'] != '-1' ? element['balanceAvai'] : element?.fobValue;
                    element['debitAmount'] = '0';
                    element['SB_Amout_Realized'] = '-1';
                    element['IRADVICE_SUM'] = '0'
                    element['IRADVICE_DATA'] = []
                    element['CheckBoxEnabled'] = false
                    element['TOTAL_CI_AMOUNT'] = false
                    if (element?.balanceAvai != '0') {
                        data.push(element);
                    }
                    if (type == "MatchOff") {
                        element?.commercialdetails?.forEach((element1: any, index) => {
                            element1['CheckBoxEnabled'] = false;
                            element1['Firxbutton'] = true;
                            element1['SB_Amout_Realized'] = '0';
                            element1['IRADVICE_SUM'] = '0'
                            element1['IRADVICE_DATA'] = []
                            element1['debitAmount'] = '0';
                            element1['ReamaingAmount'] = '-1';
                            if (element1?.IRM_REF?.length != 0) {
                                element?.commercialdetails?.splice(index, 1)
                            }
                        });
                    }
                    if (element?.FIRX_INFO?.length != 0) {
                        this.TRANSACTION_SHIPPING_BILL.push(element);
                        this.SHIPPING_BILL_DATA_LINKAGE.push(element);
                    }
                });

                this.SHIPPING_BILL_DATA = data;
                this.getbyFIRXPartyName(buyerName?.buyerName);
                console.log(buyerName, this.TRANSACTION_SHIPPING_BILL, "getShippingBill")
            });
        }
    }
    getBuyerList() {
        this.userService.getBuyer(1).subscribe((res: any) => this.BUYER_LIST = res?.data);
    }
    getbyFIRXPartyName(buyerName: any) {
        this.documentService.getbyPartyName(buyerName).subscribe((res: any) => {
            let data: any = [];
            res?.data?.forEach(element => {
                element['BalanceAvail'] = element['BalanceAvail'] != "-1" ? element['BalanceAvail'] : element?.amount
                element['InputValue'] = element['BalanceAvail'] != "-1" ? element['BalanceAvail'] : element?.amount;
                element['UsedAmount'] = '0';
                element['ReamaingAmount'] = '0';
                if (element?.BalanceAvail?.toString() != '0') {
                    data.push(element);
                }
            });
            this.TOTAL_FIRX_AMOUNT = data?.reduce((a, b) => parseFloat(a) + parseFloat(b?.amount), 0);
            this.FIREX_DETAILS = data;
            console.log(res, "getbyFIRXPartyName")
        });
    }

    setSelectedShippingBill($event, data: any) {
        if (data?.blCopyDoc) {
            if (data.commercialDoc) {
                if ($event?.target?.checked == true) {
                    this.SELECTED_SHIPPING_BILL = data;
                    this.SHIPPING_BILL_DATA?.forEach(element => {
                        element['CheckBoxEnabled'] = false
                        element?.commercialdetails?.forEach(commercialdetailselement => {
                            commercialdetailselement['CheckBoxEnabled'] = false;
                            commercialdetailselement['Firxbutton'] = true;
                            commercialdetailselement['SB_Amout_Realized'] = '0';
                            commercialdetailselement['IRADVICE_SUM'] = '0'
                            commercialdetailselement['IRADVICE_DATA'] = []
                            commercialdetailselement['debitAmount'] = '0';
                            commercialdetailselement['ReamaingAmount'] = '0';
                        });
                    });
                    this.SELECTED_COMMERICAIL_DATA?.forEach(element => {
                        element['CheckBoxEnabled'] = false;
                        element['Firxbutton'] = true;
                    });
                    this.SELECTED_COMMERICAIL_DATA = [];
                    data['CheckBoxEnabled'] = true;
                } else {
                    $event.target.checked = false
                    data['CheckBoxEnabled'] = false
                }
            } else {
                $event.target.checked = false
                this.toastr.error("You Don't Have Any Commercial Invoice Linkend with this Shipping Bill");
            }
        } else {
            $event.target.checked = false
            this.toastr.error("You Don't Have Any AirWay / BLCopy Documnet Linkend with this Shipping Bill");
        }
        console.log(data, "setSelectedShippingBill")
    }

    setBuyerName(name: any) {
        this.SELECTED_BUYER_NAME = name;
    }

    TotalCommercialSum($event, sbdata: any, commercialdata: any) {
        if ($event?.target?.checked == true) {
            if (!this.SELECTED_COMMERICAIL_DATA?.includes(commercialdata?._id)) {
                commercialdata['CheckBoxEnabled'] = true;
                commercialdata['Firxbutton'] = false;
                this.SELECTED_COMMERICAIL_DATA.push(commercialdata)
            }
            commercialdata['SB_Amout_Realized'] = commercialdata?.amount;
        } else {
            commercialdata['Firxbutton'] = true;
            commercialdata['CheckBoxEnabled'] = false;
            let findIndex: any = this.SELECTED_COMMERICAIL_DATA?.findIndex(item => item?._id == commercialdata?._id);
            this.SELECTED_COMMERICAIL_DATA?.splice(findIndex, 1);
            commercialdata['SB_Amout_Realized'] = '0';
        }
        this.TOTAL_CI_AMOUNT = this.SELECTED_COMMERICAIL_DATA?.reduce((a, b) => parseFloat(a) + parseFloat(b?.amount), 0);;
        sbdata['TOTAL_CI_AMOUNT'] = commercialdata?.amount;
    }

    FirxSelection($event: any, index: any, data: any) {
        console.log($event, index, data, "FirxSelection")
        if ($event?.target?.checked == true) {
            if (this.SELECTED_SHIPPING_BILL?.length != 0) {
                if (this.SELECTED_COMMERICAIL_DATA?.length != 0) {
                    this.SELECTED_SHIPPING_BILL['IRADVICE_DATA']?.push(data);
                    this.SELECTED_COMMERICAIL_DATA[index]['IRADVICE_DATA']?.push(data);
                    let TOTAL_CI_FIRX_SELECTED_AMOUNT = this.SELECTED_COMMERICAIL_DATA[index]?.IRADVICE_DATA?.reduce((a, b) => parseFloat(a) + parseFloat(b?.UsedAmount), 0);
                    if (parseFloat(this.SELECTED_COMMERICAIL_DATA[index]['IRADVICE_SUM']) != parseFloat(this.SELECTED_COMMERICAIL_DATA[index]?.amount)) {
                        if (parseFloat(data?.BalanceAvail) >= parseFloat(this.SELECTED_COMMERICAIL_DATA[index]['amount'])) {
                            data['BalanceAvail'] = parseFloat(data?.BalanceAvail) - parseFloat(this.SELECTED_COMMERICAIL_DATA[index]['ReamaingAmount']);
                            data['UsedAmount'] = parseFloat(this.SELECTED_COMMERICAIL_DATA[index]['ReamaingAmount']) != 0 ? parseFloat(this.SELECTED_COMMERICAIL_DATA[index]['ReamaingAmount']) : parseFloat(data['BalanceAvail']);
                            data['InputValue'] = parseFloat(this.SELECTED_COMMERICAIL_DATA[index]['ReamaingAmount']) != 0 ? parseFloat(this.SELECTED_COMMERICAIL_DATA[index]['ReamaingAmount']) : parseFloat(data['BalanceAvail']);
                        } else {
                            this.SELECTED_COMMERICAIL_DATA[index]['ReamaingAmount'] = parseFloat(this.SELECTED_COMMERICAIL_DATA[index]?.amount) - parseFloat(data?.BalanceAvail);
                            data['UsedAmount'] = data['BalanceAvail'];
                            data['InputValue'] = data['BalanceAvail'];
                        }
                        console.log(this.SELECTED_SHIPPING_BILL, "else SELECTED_SHIPPING_BILL")
                    } else {
                        this.SELECTED_SHIPPING_BILL['IRADVICE_DATA']?.pop();
                        this.SELECTED_COMMERICAIL_DATA[index]['IRADVICE_DATA']?.pop();
                        $event.target.checked = false;
                        this.toastr.error("You've exceeded the maximum transaction amount set by your Sb amount..")
                    }
                    let TOTAL_FIRX_SELECTED_AMOUNT = this.SELECTED_SHIPPING_BILL?.IRADVICE_DATA?.reduce((a, b) => parseFloat(a) + parseFloat(b?.UsedAmount), 0);;
                    this.SELECTED_SHIPPING_BILL['IRADVICE_SUM'] = TOTAL_FIRX_SELECTED_AMOUNT;
                    this.SELECTED_COMMERICAIL_DATA[index]['IRADVICE_SUM'] = TOTAL_CI_FIRX_SELECTED_AMOUNT;
                } else {
                    $event.target.checked = false
                    this.toastr.error("Please select atleast one commercial no.")
                }
            } else {
                $event.target.checked = false
                this.toastr.error("Please select atleast one Shipping bill.")
            }
        } else {
            let findIndex: any = this.SELECTED_SHIPPING_BILL?.IRADVICE_DATA?.findIndex(item => item?._id == data?._id);
            this.SELECTED_SHIPPING_BILL?.IRADVICE_DATA?.splice(findIndex, 1);
            this.SELECTED_COMMERICAIL_DATA[index]['IRADVICE_DATA']?.splice(findIndex, 1);
        }
        setTimeout(() => {
            let TOTAL_FIRX_SELECTED_AMOUNT = this.SELECTED_SHIPPING_BILL?.IRADVICE_DATA?.reduce((a, b) => parseFloat(a) + parseFloat(b?.UsedAmount), 0);;
            this.SELECTED_SHIPPING_BILL['IRADVICE_SUM'] = TOTAL_FIRX_SELECTED_AMOUNT;
            let TOTAL_CI_FIRX_SELECTED_AMOUNT = this.SELECTED_COMMERICAIL_DATA[index]?.IRADVICE_DATA?.reduce((a, b) => parseFloat(a) + parseFloat(b?.UsedAmount), 0);;
            this.SELECTED_COMMERICAIL_DATA[index]['IRADVICE_SUM'] = TOTAL_CI_FIRX_SELECTED_AMOUNT;
        }, 200);
    }
    CLEAR_TIMEOUT: any = null;
    FIRXAMOUNT(data: any, value: any) {
        console.log(data, value, parseFloat(data?.InputValue) <= parseFloat(data?.BalanceAvail), "FIRXAMOUNT")
        clearTimeout(this.CLEAR_TIMEOUT);
        this.CLEAR_TIMEOUT = setTimeout(() => {
            if (data?.InputValue != '0') {
                if (parseFloat(data?.InputValue) <= parseFloat(data?.BalanceAvail)) {
                } else {
                    data.InputValue = data?.BalanceAvail;
                    this.toastr.error("You've exceeded the maximum transaction amount set by your FIRX amount..")
                }
            } else {
                data['Enabled'] = true
            }
        }, 200);
    }
    tp: any = {
        firxNumber: [],
        firxDate: [],
        firxCurrency: [],
        firxAmount: [],
        firxCommision: [],
        firxRecAmo: [],
        FirxUsed_Balance: [],
        id: [],
    };
    SaveChanges(data: any, index: any) {
        if (data?.IRADVICE_DATA?.length != 0 && data?.IRADVICE_DATA != undefined) {
            this.tp = {
                firxNumber: [],
                firxDate: [],
                firxCurrency: [],
                firxAmount: [],
                firxCommision: [],
                firxRecAmo: [],
                FirxUsed_Balance: [],
                id: [],
            };
            data?.IRADVICE_DATA?.forEach(element => {
                this.tp['firxNumber'].push(element?.billNo)
                this.tp['firxDate'].push(element?.recievedDate)
                this.tp['firxCurrency'].push(element?.currency)
                this.tp['firxAmount'].push(element?.UsedAmount)
                if (element?.CommissionUsed == false) {
                    this.tp['firxCommision'].push(element?.commision)
                } else {
                    this.tp['firxCommision'].push(0);
                }
                this.tp['FirxUsed_Balance'].push(element?.UsedAmount)
                this.tp['firxRecAmo'].push(0);
                this.tp['id'].push(element?._id);
                this.documentService.Update_Amount_by_Table({
                    tableName: 'iradvices',
                    id: element._id,
                    query: {
                        sbno: [data?.sbno],
                        BalanceAvail: parseInt(element?.BalanceAvail) == parseInt(element?.InputValue) ? 0 : parseInt(element?.BalanceAvail),
                        CommissionUsed: true,
                        MatchOffData: element
                    }
                }).subscribe((list: any) => {

                })
            });
            data?.commercialdetails?.forEach(async (element) => {
                if (element?.IRADVICE_DATA?.length != 0 && element?.IRADVICE_DATA != undefined) {
                    let FIRX_ID: any = [];
                    await element?.IRADVICE_DATA?.forEach(async (element1) => {
                        await FIRX_ID.push(element1?._id);
                        this.documentService.Update_Amount_by_Table({
                            tableName: 'iradvices',
                            id: element1._id,
                            query: {
                                CI_REF: [element?._id]
                            }
                        }).subscribe((list: any) => { })
                    });
                    await this.documentService.Update_Amount_by_Table({
                        tableName: 'commercials',
                        id: element?._id,
                        query: { IRM_REF: FIRX_ID, TransctionEnabled: true }
                    }).subscribe((r2: any) => { });
                }
            });

            let Createquery = {
                firxNumber: this.tp?.firxNumber.join(','),
                firxDate: this.tp?.firxDate.join(','),
                firxCurrency: this.tp?.firxCurrency.join(','),
                firxAmount: this.tp?.firxAmount.join(','),
                firxCommision: this.tp?.firxCommision.join(','),
                firxRecAmo: '0',
                FirxUsed_Balance: this.tp?.FirxUsed_Balance.join(','),
                MatchOffData: data?.IRADVICE_DATA
            }
            this.documentService.Update_Amount_by_TableSB({
                tableName: 'masterrecord',
                id: data?._id,
                query: Createquery
            }).subscribe((r2: any) => {
                let sumfixAmount: any = parseInt(this.FIRX_AMOUNT(this.tp?.FirxUsed_Balance))
                let sumfixCommisionAmount: any = parseInt(this.FIRX_AMOUNT(this.tp?.firxCommision))
                this.documentService.Update_Amount_by_Table({
                    tableName: 'masterrecord',
                    id: data?._id,
                    query: { balanceAvai: parseFloat(data?.balanceAvai) - (parseFloat(sumfixAmount) + parseFloat(sumfixCommisionAmount)) }
                }).subscribe((r3: any) => {
                    this.toastr.success("Update Changes...")
                    this.getShippingBill(this.SELECTED_BUYER_NAME?.buyerName, "MatchOff");
                });
            });
        } else {
            this.toastr.error("No Changes Found...")
        }
        console.log(data, index, "SaveChanges")
    }

    FIRX_AMOUNT(amountarray: any): any {
        return parseFloat(amountarray?.reduce((a, b) => parseFloat(a) + parseFloat(b), 0)).toFixed(3);
    }

    setSelectCommercialData($event, sbdata: any, commercialdata: any) {
        if ($event?.target?.checked == true) {
            if (!this.TRANSACTION_SELECTED_COMMERICAIL_DATA?.includes(commercialdata?._id)) {
                commercialdata['CheckBoxEnabled'] = true;
                commercialdata['Firxbutton'] = false;
                commercialdata['sbdata'] = sbdata;
                this.TRANSACTION_SELECTED_COMMERICAIL_DATA.push(commercialdata)
            }
            commercialdata['SB_Amout_Realized'] = commercialdata?.amount;
        } else {
            commercialdata['Firxbutton'] = true;
            commercialdata['CheckBoxEnabled'] = false;
            let findIndex: any = this.TRANSACTION_SELECTED_COMMERICAIL_DATA?.findIndex(item => item?._id == commercialdata?._id);
            this.TRANSACTION_SELECTED_COMMERICAIL_DATA?.splice(findIndex, 1);
            commercialdata['SB_Amout_Realized'] = '0';
        }
        this.TOTAL_CI_AMOUNT = this.TRANSACTION_SELECTED_COMMERICAIL_DATA?.reduce((a, b) => parseFloat(a) + parseFloat(b?.amount), 0);;
        sbdata['TOTAL_CI_AMOUNT'] = commercialdata?.amount;
        console.log(sbdata, this.TRANSACTION_SELECTED_COMMERICAIL_DATA)
    }


}