import { Injectable } from "@angular/core";
import { DocumentService } from "../../../../service/document.service";
import { UserService } from "../../../../service/user.service";
import { ToastrService } from "ngx-toastr";
import { CustomConfirmDialogModelComponent } from "../../../../custom/custom-confirm-dialog-model/custom-confirm-dialog-model.component";

@Injectable({ providedIn: 'root' })
export class ExportBillLodgementData {
    SHIPPING_BILL_DATA: any = [];
    SHIPPING_BILL_DATA_LINKAGE: any = [];
    BUYER_LIST: any = [];
    FIREX_DETAILS: any = [];
    TOTAL_FIRX_AMOUNT: any = 0;
    SELECTED_SHIPPING_BILL: any = [];
    SELECTED_COMMERICAIL_DATA: any = [];
    SELECTED_SHIPPING_BILL_TRANSACTION: any = {};
    SELECTED_SHIPPING_BILL_TRANSACTION_OBEJCT_KEYS: any = [];
    SELECTED_COMMERICAIL_DATA_TRANSACTION: any = [];
    SELECTED_BUYER_NAME: any = ''
    TOTAL_CI_AMOUNT: any = 0;
    TRANSACTION_SHIPPING_BILL: any = [];
    TRANSACTION_SELECTED_COMMERICAIL_DATA: any = [];
    ALL_RELATED_DOCUMENTS: any = [];
    ALL_COMMERCIAL_DATA_LIST: any = [];
    PREVIWES_URL: any = ''
    IS_AGAINST_ADVANCE_YES_NO: boolean = false;

    constructor(public documentService: DocumentService,
        private toastr: ToastrService,
        public confrimModel: CustomConfirmDialogModelComponent,
        private userService: UserService) {
        this.getBuyerList();
        this.SHIPPING_BILL_DATA = []
        this.TRANSACTION_SHIPPING_BILL = [];
        this.SHIPPING_BILL_DATA_LINKAGE = [];
        this.TRANSACTION_SHIPPING_BILL = [];
        this.SELECTED_COMMERICAIL_DATA = []
        this.TRANSACTION_SELECTED_COMMERICAIL_DATA = [];
        this.SELECTED_SHIPPING_BILL = [];
        this.SELECTED_BUYER_NAME = ''
    }

    clear() {
        this.SELECTED_SHIPPING_BILL_TRANSACTION = [];
        this.SELECTED_SHIPPING_BILL_TRANSACTION_OBEJCT_KEYS = []
        this.SHIPPING_BILL_DATA = []
        this.SHIPPING_BILL_DATA_LINKAGE = [];
        this.TRANSACTION_SHIPPING_BILL = [];
        this.SELECTED_COMMERICAIL_DATA = []
        this.TRANSACTION_SELECTED_COMMERICAIL_DATA = [];
        this.SELECTED_SHIPPING_BILL = [];
        this.SELECTED_BUYER_NAME = ''
    }

    get Reload() {
        this.getShippingBill(this.SELECTED_BUYER_NAME, "MatchOff");
        return;
    }

    getShippingBill(buyerName: any, type: any) {
        this.setBuyerName(buyerName)
        console.log(buyerName, "buyerName")
        if (buyerName != undefined && buyerName != null && buyerName != '') {
            this.documentService.getMasterBuyer(buyerName?.buyerName).subscribe((res: any) => {
                let data: any = [];
                this.SHIPPING_BILL_DATA = []
                this.SHIPPING_BILL_DATA_LINKAGE = [];
                this.SELECTED_COMMERICAIL_DATA = []
                this.TRANSACTION_SELECTED_COMMERICAIL_DATA = [];
                this.SELECTED_SHIPPING_BILL = [];
                this.TRANSACTION_SHIPPING_BILL = [];
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
                            let sum_of_irm: any = 0
                            element1?.MatchOffData?.forEach(MatchOffDataElement => {
                                if (MatchOffDataElement?.YesNo == "true") {
                                    sum_of_irm += parseFloat(MatchOffDataElement?.InputValue) + parseFloat(MatchOffDataElement?.commision)
                                } else {
                                    sum_of_irm += parseFloat(MatchOffDataElement?.InputValue)
                                }
                            });
                            console.log(sum_of_irm, "sum_of_irm")
                            if (parseFloat(element1?.amount) == parseFloat(sum_of_irm)) {
                                element1['AmountUsed'] = true;
                                element1['SB_Amout_Realized'] = sum_of_irm;
                                element1['IRADVICE_SUM'] = sum_of_irm
                                element1['debitAmount'] = '0';
                            } else {
                                element1['CheckBoxEnabled'] = true;
                                element1['Firxbutton'] = true;
                                element1['SB_Amout_Realized'] = '0';
                                element1['IRADVICE_SUM'] = '0'
                                element1['IRADVICE_DATA'] = []
                                element1['debitAmount'] = '0';
                                element1['ReamaingAmount'] = '-1';
                                element1['AmountUsed'] = false;
                            }
                        });
                    }
                    if (element?.FIRX_INFO?.length != 0) {
                        this.TRANSACTION_SHIPPING_BILL.push(element);
                        this.SHIPPING_BILL_DATA_LINKAGE.push(element);
                    }
                });

                this.SHIPPING_BILL_DATA = data;
                if (this.IS_AGAINST_ADVANCE_YES_NO == true) {
                    this.TRANSACTION_SHIPPING_BILL = this.SHIPPING_BILL_DATA?.filter((item: any) => item?.firxdetails?.length != 0)
                } else if (this.IS_AGAINST_ADVANCE_YES_NO == false) {
                    this.TRANSACTION_SHIPPING_BILL = this.SHIPPING_BILL_DATA?.filter((item: any) => item?.firxdetails?.length == 0)
                }
                this.getbyFIRXPartyName(buyerName?.buyerName);
                console.log(buyerName, res?.data, this.TRANSACTION_SHIPPING_BILL, this.IS_AGAINST_ADVANCE_YES_NO, "getShippingBill")
            });
        }
    }
    getBuyerList() {
        this.userService.getBuyer(1).subscribe((res: any) => this.BUYER_LIST = res?.data);
    }
    getbyFIRXPartyName(buyerName: any) {
        // this.documentService.getbyPartyName(buyerName).subscribe((res: any) => {
        //     let data: any = [];
        //     res?.data?.forEach(element => {
        //         element['BalanceAvail'] = element['BalanceAvail'] != "-1" ? element['BalanceAvail'] : element?.amount
        //         element['InputValue'] = element['BalanceAvail'] != "-1" ? element['BalanceAvail'] : element?.amount;
        //         element['UsedAmount'] = element['BalanceAvail'] != "-1" ? element['BalanceAvail'] : element?.amount;;
        //         element['ReamaingAmount'] = '0';
        //         element['isChecked'] = false;
        //         element['YesNo'] = '';
        //         if (element?.BalanceAvail?.toString() != '0') {
        //             data.push(element);
        //         }
        //     });
        //     this.TOTAL_FIRX_AMOUNT = data?.reduce((a, b) => parseFloat(a) + parseFloat(b?.amount), 0);
        //     this.FIREX_DETAILS = data;
        //     console.log(res, "getbyFIRXPartyName")
        // });
    }

    getbyFIRXPartyNamebyPipo(pipoId) {
        this.documentService.filterAnyTable({
            pipo: [pipoId]
        }, 'iradvices').subscribe((res: any) => {
            let data: any = [];
            res?.data?.forEach(element => {
                element['BalanceAvail'] = element['BalanceAvail'] != "-1" ? element['BalanceAvail'] : element?.amount
                element['InputValue'] = element['BalanceAvail'] != "-1" ? element['BalanceAvail'] : element?.amount;
                element['UsedAmount'] = element['BalanceAvail'] != "-1" ? element['BalanceAvail'] : element?.amount;;
                element['ReamaingAmount'] = '0';
                element['isChecked'] = false;
                element['YesNo'] = '';
                if (element?.BalanceAvail?.toString() != '0') {
                    data.push(element);
                }
            });
            this.TOTAL_FIRX_AMOUNT = data?.reduce((a, b) => parseFloat(a) + parseFloat(b?.amount), 0);
            this.FIREX_DETAILS = data;
            console.log(res, "getbyFIRXPartyName")
        })

        // this.documentService.getbyPartyName(buyerName).subscribe((res: any) => {
        //     let data: any = [];
        //     res?.data?.forEach(element => {
        //         element['BalanceAvail'] = element['BalanceAvail'] != "-1" ? element['BalanceAvail'] : element?.amount
        //         element['InputValue'] = element['BalanceAvail'] != "-1" ? element['BalanceAvail'] : element?.amount;
        //         element['UsedAmount'] = element['BalanceAvail'] != "-1" ? element['BalanceAvail'] : element?.amount;;
        //         element['ReamaingAmount'] = '0';
        //         element['isChecked'] = false;
        //         element['YesNo'] = '';
        //         if (element?.BalanceAvail?.toString() != '0') {
        //             data.push(element);
        //         }
        //     });
        //     this.TOTAL_FIRX_AMOUNT = data?.reduce((a, b) => parseFloat(a) + parseFloat(b?.amount), 0);
        //     this.FIREX_DETAILS = data;
        //     console.log(res, "getbyFIRXPartyName")
        // });
    }
    setSelectedShippingBill($event, data: any) {
        if (data?.blCopyDoc) {
            if (data.commercialDoc) {
                if ($event?.target?.checked == true) {
                    this.SELECTED_SHIPPING_BILL = data;
                    this.FIREX_DETAILS?.forEach(element => {
                        element['isChecked'] = false;
                    });
                    this.SHIPPING_BILL_DATA?.forEach(element => {
                        element['CheckBoxEnabled'] = false
                        element['Firxbutton'] = true;
                        element['SB_Amout_Realized'] = '0';
                        element['IRADVICE_SUM'] = '0'
                        element['IRADVICE_DATA'] = []
                        element['debitAmount'] = '0';
                        element['ReamaingAmount'] = '-1';
                        element?.commercialdetails?.forEach(commercialdetailselement => {
                            commercialdetailselement['CheckBoxEnabled'] = false;
                            commercialdetailselement['Firxbutton'] = false;
                            commercialdetailselement['SB_Amout_Realized'] = '0';
                            commercialdetailselement['IRADVICE_SUM'] = '0'
                            commercialdetailselement['IRADVICE_DATA'] = []
                            commercialdetailselement['debitAmount'] = '0';
                            commercialdetailselement['ReamaingAmount'] = '0';
                            commercialdetailselement['UsedAmount'] = commercialdetailselement?.amount;
                        });
                    });
                    this.SELECTED_COMMERICAIL_DATA['CheckBoxEnabled'] = false;
                    this.SELECTED_COMMERICAIL_DATA['Firxbutton'] = false;
                    let sum_of_irm: any = this.SELECTED_COMMERICAIL_DATA?.IRM_REF?.reduce((a, b) => parseFloat(a) + (parseFloat(b?.MatchOffData?.InputValue) + parseFloat(b?.MatchOffData?.commision)), 0);
                    if (parseFloat(this.SELECTED_COMMERICAIL_DATA?.amount) == parseFloat(sum_of_irm)) {
                        this.SELECTED_COMMERICAIL_DATA['AmountUsed'] = true;
                        this.SELECTED_COMMERICAIL_DATA['SB_Amout_Realized'] = sum_of_irm;
                        this.SELECTED_COMMERICAIL_DATA['IRADVICE_SUM'] = sum_of_irm
                        this.SELECTED_COMMERICAIL_DATA['debitAmount'] = '0';
                    } else {
                        this.SELECTED_COMMERICAIL_DATA['CheckBoxEnabled'] = false;
                        this.SELECTED_COMMERICAIL_DATA['Firxbutton'] = false;
                        this.SELECTED_COMMERICAIL_DATA['SB_Amout_Realized'] = '0';
                        this.SELECTED_COMMERICAIL_DATA['IRADVICE_SUM'] = '0'
                        this.SELECTED_COMMERICAIL_DATA['IRADVICE_DATA'] = []
                        this.SELECTED_COMMERICAIL_DATA['debitAmount'] = '0';
                        this.SELECTED_COMMERICAIL_DATA['ReamaingAmount'] = '-1';
                        this.SELECTED_COMMERICAIL_DATA['AmountUsed'] = false;
                    }
                    this.SELECTED_COMMERICAIL_DATA = [];
                    data['CheckBoxEnabled'] = true;
                    this.getbyFIRXPartyNamebyPipo(data?.pipo[0]?._id)
                } else {
                    this.FIREX_DETAILS?.forEach(element => {
                        element['isChecked'] = false;
                    });
                    this.SELECTED_COMMERICAIL_DATA.IRADVICE_DATA = [];
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

    setSelectedShippingBillTransaction($event, index, data: any) {
        if (data?.blCopyDoc) {
            if (data.commercialDoc) {
                if ($event?.target?.checked == true) {
                    data["COMMERICAIL_DATA"] = [];
                    data["ALL_RELATED_DOCUMENTS"] = [];
                    data["FORM_URL_LIST"] = [];
                    data["PREVIEWS_URL_LIST"] = '';

                    this.SHIPPING_BILL_DATA?.forEach(element => {
                        element?.commercialdetails?.forEach(commercialdetailselement => {
                            commercialdetailselement['CheckBoxEnabled'] = false;
                        });
                    });
                    this.SELECTED_SHIPPING_BILL_TRANSACTION["SB_INDEX_" + index] = data;
                    data['CheckBoxEnabled'] = true;
                } else {
                    delete this.SELECTED_SHIPPING_BILL_TRANSACTION["SB_INDEX_" + index];
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
        this.SELECTED_SHIPPING_BILL_TRANSACTION_OBEJCT_KEYS = Object.keys(this.SELECTED_SHIPPING_BILL_TRANSACTION);
        console.log(data, this.SELECTED_SHIPPING_BILL_TRANSACTION, "setSelectedShippingBill")
    }

    setSelectCommercialDataTransaction($event, SB_Index, CI_Index, sbdata: any, commercialdata: any) {
        if ($event?.target?.checked == true) {
            commercialdata['CheckBoxEnabled'] = true;
            commercialdata['Firxbutton'] = false;
            commercialdata['sbdata'] = sbdata;
            commercialdata['SB_Amout_Realized'] = commercialdata?.amount;
            this.SELECTED_SHIPPING_BILL_TRANSACTION[SB_Index]["COMMERICAIL_DATA"].push(commercialdata);
        } else {
            commercialdata['Firxbutton'] = true;
            commercialdata['CheckBoxEnabled'] = false;
            commercialdata['SB_Amout_Realized'] = '0';
            this.SELECTED_SHIPPING_BILL_TRANSACTION[SB_Index]["COMMERICAIL_DATA"]?.splice(CI_Index, 1);
        }
        this.TOTAL_CI_AMOUNT = this.SELECTED_SHIPPING_BILL_TRANSACTION[SB_Index]["COMMERICAIL_DATA"]?.reduce((a, b) => parseFloat(a) + parseFloat(b?.amount), 0);;
        sbdata['TOTAL_CI_AMOUNT'] = commercialdata?.amount;
        console.log(sbdata, this.SELECTED_SHIPPING_BILL_TRANSACTION[SB_Index]["COMMERICAIL_DATA"], "COMMERICAIL_DATA")
    }

    setBuyerName(name: any) {
        this.SELECTED_BUYER_NAME = name;
    }

    TotalCommercialSum($event, sbdata: any, commercialdata: any) {
        if ($event?.target?.checked == true) {
            this.SHIPPING_BILL_DATA?.forEach(element => {
                element?.commercialdetails?.forEach(commercialdetailselement => {
                    commercialdetailselement['CheckBoxEnabled'] = false;
                    commercialdetailselement['Firxbutton'] = true;
                    commercialdetailselement['SB_Amout_Realized'] = '0';
                    commercialdetailselement['IRADVICE_SUM'] = '0'
                    commercialdetailselement['IRADVICE_DATA'] = []
                    commercialdetailselement['debitAmount'] = '0';
                    commercialdetailselement['ReamaingAmount'] = '0';
                    commercialdetailselement['UsedAmount'] = commercialdetailselement?.amount;
                });
            });
            commercialdata['CheckBoxEnabled'] = true;
            commercialdata['Firxbutton'] = false;
            commercialdata['SB_Amout_Realized'] = commercialdata?.amount;
            this.SELECTED_COMMERICAIL_DATA = commercialdata;
            this.TOTAL_CI_AMOUNT = commercialdata?.amount;
            sbdata['TOTAL_CI_AMOUNT'] = commercialdata?.amount;
        } else {
            commercialdata['Firxbutton'] = true;
            commercialdata['CheckBoxEnabled'] = false;
            this.SELECTED_COMMERICAIL_DATA = []
            commercialdata['SB_Amout_Realized'] = '0';
            this.TOTAL_CI_AMOUNT = 0;
            sbdata['TOTAL_CI_AMOUNT'] = 0;
        }
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

    FirxSelection($event: any, index: any, data: any) {
        if ($event?.target?.checked == true) {
            if (this.SELECTED_SHIPPING_BILL?.length != 0) {
                if (this.SELECTED_COMMERICAIL_DATA?.length != 0) {
                    this.SELECTED_SHIPPING_BILL['IRADVICE_DATA']?.push(data);
                    this.SELECTED_COMMERICAIL_DATA['IRADVICE_DATA']?.push(data);
                    data.Enabled = true;
                    if (parseFloat(this.SELECTED_COMMERICAIL_DATA['IRADVICE_SUM']) < parseFloat(this.SELECTED_COMMERICAIL_DATA?.amount)) {
                        let amount: any = 0;
                        let FIRX_AMOUNT: any = 0;
                        if (parseFloat(this.SELECTED_COMMERICAIL_DATA?.UsedAmount) > parseFloat(data?.InputValue)) {
                            FIRX_AMOUNT = parseFloat(data?.InputValue)
                            amount = parseFloat(data?.InputValue)
                            data['InputValue'] = FIRX_AMOUNT;
                        } else {
                            amount = (parseFloat(data?.InputValue) - parseFloat(this.SELECTED_COMMERICAIL_DATA?.UsedAmount))
                            FIRX_AMOUNT = (parseFloat(data?.InputValue) - parseFloat(this.SELECTED_COMMERICAIL_DATA?.UsedAmount))
                            data['InputValue'] = parseFloat(this.SELECTED_COMMERICAIL_DATA?.UsedAmount)
                        }
                        this.SELECTED_COMMERICAIL_DATA['UsedAmount'] = parseFloat(this.SELECTED_COMMERICAIL_DATA?.UsedAmount) - parseFloat(data?.InputValue)
                        data.isChecked = true;
                    } else {
                        this.SELECTED_SHIPPING_BILL['IRADVICE_DATA']?.pop();
                        this.SELECTED_COMMERICAIL_DATA['IRADVICE_DATA']?.pop();
                        $event.target.checked = false;
                        data.isChecked = false;
                        data.Enabled = false;
                        this.toastr.error("You've exceeded the maximum transaction amount set by your Sb amount..");
                    }
                    let TOTAL_CI_FIRX_SELECTED_AMOUNT = this.SELECTED_COMMERICAIL_DATA?.IRADVICE_DATA?.reduce((a, b) => parseFloat(a) + parseFloat(b?.InputValue), 0);
                    this.SELECTED_SHIPPING_BILL['IRADVICE_SUM'] = TOTAL_CI_FIRX_SELECTED_AMOUNT;
                    this.SELECTED_COMMERICAIL_DATA['IRADVICE_SUM'] = TOTAL_CI_FIRX_SELECTED_AMOUNT;
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
            this.SELECTED_COMMERICAIL_DATA['IRADVICE_DATA']?.splice(findIndex, 1);
            let TOTAL_CI_FIRX_SELECTED_AMOUNT = this.SELECTED_COMMERICAIL_DATA?.IRADVICE_DATA?.reduce((a, b) => parseFloat(a) + parseFloat(b?.InputValue), 0);
            this.SELECTED_SHIPPING_BILL['IRADVICE_SUM'] = TOTAL_CI_FIRX_SELECTED_AMOUNT;
            this.SELECTED_COMMERICAIL_DATA['IRADVICE_SUM'] = TOTAL_CI_FIRX_SELECTED_AMOUNT;
            data['InputValue'] = parseFloat(data?.UsedAmount)
        }
    }

    CLEAR_TIMEOUT: any = null;
    FIRXAMOUNT(data: any, value: any) {
        console.log(data, value, "FIRXAMOUNT")
        clearTimeout(this.CLEAR_TIMEOUT);
        data.isChecked = false;
        this.CLEAR_TIMEOUT = setTimeout(() => {
            if (data?.InputValue != '0') {
                if (parseFloat(data?.InputValue) <= parseFloat(data?.UsedAmount)) {

                } else {
                    data.InputValue = data?.UsedAmount;
                    this.toastr.error("You've exceeded the maximum transaction amount set by your FIRX amount..")
                }
                let TOTAL_CI_FIRX_SELECTED_AMOUNT = this.SELECTED_COMMERICAIL_DATA?.IRADVICE_DATA?.reduce((a, b) => parseFloat(a) + parseFloat(b?.InputValue), 0);
                this.SELECTED_SHIPPING_BILL['IRADVICE_SUM'] = TOTAL_CI_FIRX_SELECTED_AMOUNT;
                this.SELECTED_COMMERICAIL_DATA['IRADVICE_SUM'] = TOTAL_CI_FIRX_SELECTED_AMOUNT;
            } else {
                data['Enabled'] = true
            }
            console.log(data, "FirxSelection")
        }, 200);
    }

    BankChargesAmount(data: any, value: any) {
        if (value == "Yes") {
            data["InputValue"] = parseFloat(data["BalanceAvail"]) - parseFloat(data["commision"])
            let TOTAL_CI_FIRX_SELECTED_AMOUNT = this.SELECTED_COMMERICAIL_DATA?.IRADVICE_DATA?.reduce((a, b) => parseFloat(a) + parseFloat(b?.InputValue), 0);
            this.SELECTED_SHIPPING_BILL['IRADVICE_SUM'] = TOTAL_CI_FIRX_SELECTED_AMOUNT;
            this.SELECTED_COMMERICAIL_DATA['IRADVICE_SUM'] = TOTAL_CI_FIRX_SELECTED_AMOUNT;
            console.log(this.SELECTED_SHIPPING_BILL,
                this.SELECTED_COMMERICAIL_DATA, TOTAL_CI_FIRX_SELECTED_AMOUNT, "FirxSelection")
        } else {
            data["InputValue"] = parseFloat(data["BalanceAvail"]);
            let TOTAL_CI_FIRX_SELECTED_AMOUNT = this.SELECTED_COMMERICAIL_DATA?.IRADVICE_DATA?.reduce((a, b) => parseFloat(a) + parseFloat(b?.InputValue), 0);
            this.SELECTED_SHIPPING_BILL['IRADVICE_SUM'] = TOTAL_CI_FIRX_SELECTED_AMOUNT;
            this.SELECTED_COMMERICAIL_DATA['IRADVICE_SUM'] = TOTAL_CI_FIRX_SELECTED_AMOUNT;
            console.log(this.SELECTED_SHIPPING_BILL,
                this.SELECTED_COMMERICAIL_DATA, TOTAL_CI_FIRX_SELECTED_AMOUNT, "FirxSelection")
        }

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
                this.tp['firxAmount'].push(element?.InputValue)
                if (element?.CommissionUsed == false) {
                    if (element?.YesNo == "true") {
                        this.tp['firxCommision'].push(element?.commision)
                    }
                } else {
                    this.tp['firxCommision'].push(0);
                }
                this.tp['FirxUsed_Balance'].push(element?.InputValue)
                this.tp['firxRecAmo'].push(0);
                this.tp['id'].push(element?._id);
                var amount: number = 0;
                if (element?.YesNo == "true") {
                    amount = parseInt(element?.UsedAmount) == (parseInt(element?.InputValue)) ? 0 : parseInt(element?.UsedAmount) - (parseInt(element?.InputValue) + parseFloat(element?.commision));
                } else {
                    amount = parseInt(element?.UsedAmount) == (parseInt(element?.InputValue)) ? 0 : parseInt(element?.UsedAmount) - parseInt(element?.InputValue);
                }
                this.documentService.Update_Amount_by_Table({
                    tableName: 'iradvices',
                    id: element._id,
                    query: {
                        sbno: [data?.sbno],
                        BalanceAvail: amount,
                        CommissionUsed: true,
                        MatchOffData: element,
                        UsedAmount: element?.InputValue
                    }
                }).subscribe((list: any) => {

                })
            });
            data?.commercialdetails?.forEach(async (element) => {
                if (element?.IRADVICE_DATA?.length != 0 && element?.IRADVICE_DATA != undefined) {
                    let FIRX_ID: any = [];
                    let FIRX_DATA: any = [];
                    await element?.IRADVICE_DATA?.forEach(async (element1) => {
                        await FIRX_ID.push(element1?._id);
                        element1["BalanceAvail"] = parseInt(element1?.BalanceAvail) == parseInt(element1?.InputValue) ? 0 : parseInt(element1?.BalanceAvail) - parseInt(element1?.InputValue);
                        element1["UsedAmount"] = element1?.InputValue
                        await FIRX_DATA.push(element1);
                        this.documentService.Update_Amount_by_Table({
                            tableName: 'iradvices',
                            id: element1._id,
                            query: {
                                CI_REF: [element?._id],
                            }
                        }).subscribe((list: any) => { })
                    });
                    await this.documentService.Update_Amount_by_Table({
                        tableName: 'commercials',
                        id: element?._id,
                        query: {
                            IRM_REF: FIRX_ID,
                            TransctionEnabled: true,
                            MatchOffData: FIRX_DATA,
                        }
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
                console.log(sumfixAmount, sumfixCommisionAmount, "sumfixCommisionAmount")
                let sumfixAmount2 = 0;
                if (parseFloat(sumfixAmount) == parseFloat(data?.balanceAvai)) {
                    sumfixAmount2 = parseFloat(data?.balanceAvai) - parseFloat(sumfixAmount)
                } else {
                    sumfixAmount2 = parseFloat(data?.balanceAvai) - (parseFloat(sumfixAmount) + parseFloat(sumfixCommisionAmount))
                }
                this.documentService.Update_Amount_by_Table({
                    tableName: 'masterrecord',
                    id: data?._id,
                    query: { balanceAvai: sumfixAmount2 }
                }).subscribe((r3: any) => {
                    this.toastr.success("Update Changes...")
                    this.getShippingBill(this.SELECTED_BUYER_NAME, "MatchOff");
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

    dselect(data: any) {
        console.log(data, "sdfsdfdfdfsfffsdfsfs")
        this.confrimModel.YesNoDialogModel("Reset All Data<br/> Do you want d-select all data with this shipping bill no. : " + data?.sbno, "", (value: any) => {
            if (value?.value === "Yes") {
                this.documentService.Update_Amount_by_Table({
                    tableName: 'masterrecord',
                    id: data?._id,
                    query: {
                        firxdetails: [],
                        balanceAvai: data?.fobValue
                    }
                }).subscribe(async (r3: any) => {
                    for (let index = 0; index < data?.commercialdetails?.length; index++) {
                        const element = data?.commercialdetails?.[index];
                        if (element?.IRM_REF?.length != 0) {
                            element?.IRM_REF?.forEach(IRM_REF_element => {
                                this.documentService.Update_Amount_by_Table({
                                    tableName: 'iradvices',
                                    id: IRM_REF_element?._id,
                                    query: {
                                        sbno: [],
                                        BalanceAvail: parseFloat(IRM_REF_element?.BalanceAvail) + parseFloat(IRM_REF_element?.MatchOffData?.InputValue),
                                        CommissionUsed: false,
                                        MatchOffData: {},
                                        UsedAmount: parseFloat(IRM_REF_element?.BalanceAvail) + parseFloat(IRM_REF_element?.MatchOffData?.InputValue),
                                        CI_REF: []
                                    }
                                }).subscribe(async (list: any) => {
                                    await this.documentService.Update_Amount_by_Table({
                                        tableName: 'commercials',
                                        id: element?._id,
                                        query: { IRM_REF: [], TransctionEnabled: false, MatchOffData: [] }
                                    }).subscribe((r2: any) => {
                                        if ((index + 1) == data?.commercialdetails?.length) {
                                            this.toastr.success("Changes Updated...")
                                            console.log(this.SELECTED_BUYER_NAME, "SELECTED_BUYER_NAME")
                
                                            this.getShippingBill(this.SELECTED_BUYER_NAME, "MatchOff");
                                        }
                                    });
                                })
                            });
                        }
                    }
                });
            }
            console.log(value, "jhsdjkfhgdkfsdfdfsdfd")
        })
    }

}