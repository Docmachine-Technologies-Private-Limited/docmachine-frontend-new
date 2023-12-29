import { Injectable, OnInit } from "@angular/core";
import { filterAnyTablePagination } from "./Api/filterAnyTablePagination";
import moment from "moment";
import { UserService } from "../user.service";
import { UploadServiceValidatorService } from "../../components/Upload/service/upload-service-validator.service";
import { ALLExportSummaryPageTitle } from "../../home/SummaryPage/Export/All-Export-Summary-Page-Title";

@Injectable({ providedIn: "root" })
export class TableServiceController {
    public authToken;
    api_base: string;
    USER_RESULT: any = [];
    TABLE_CONTROLLER_DATA: any = [];
    SHOW_TABLE_TBODY: boolean = false;
    FILTER_VALUE_LIST_NEW: any = {
        header: [],
        items: [],
        Expansion_header: [],
        Expansion_Items: [],
        Objectkeys: [],
        ExpansionKeys: [],
        TableHeaderClass: [],
        eventId: 2,
        Expansion_header2: [],
        Expansion_Items2: [],
        ExpansionKeys2: [],
        PageSize: 0
    }
    constructor(public filteranytablepagination: filterAnyTablePagination, private userService: UserService,
        public UploadServiceValidatorService: UploadServiceValidatorService,
        public ALLExportSummaryPageTitle: ALLExportSummaryPageTitle) {
        this.userService.getUserDetail().then((res: any) => {
            this.USER_RESULT = res?.result;
            console.log("this.USER_DATA", this.USER_RESULT);
            if (this.USER_RESULT?.sideMenu == 'export') {
                UploadServiceValidatorService.getBuyerLoad()
            } else {
                UploadServiceValidatorService.BenneLoad().then((res: any) => { })
            }
        });
    }

    LoadTableExport(Query: any = {}, PageFilter: any, TableName: any, TableFormat: any, ExtraData: any = {}) {
        this.SHOW_TABLE_TBODY = false;
        this.TABLE_CONTROLLER_DATA = [];
        TableFormat = {
            header: [],
            items: [],
            Expansion_header: [],
            Expansion_Items: [],
            Objectkeys: [],
            ExpansionKeys: [],
            TableHeaderClass: [],
            eventId: 2,
            Expansion_header2: [],
            Expansion_Items2: [],
            ExpansionKeys2: [],
            PageSize: 0
        }
        return {
            pi_po: async () => {
                return new Promise((resolve, reject) => {
                    TableFormat = {
                        header: [
                            "Invoice No.",
                            "Invoice Date",
                            "Consignee Name",
                            "BRANCH",
                            "Amount",
                            "Payment Term",
                            "Action"],
                        items: [],
                        Expansion_header: [],
                        Expansion_Items: [],
                        Objectkeys: [],
                        ExpansionKeys: [],
                        TableHeaderClass: [
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-2",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1"
                        ],
                        eventId: '0',
                        PageSize: 0
                    }
                    this.filteranytablepagination.PaginationfilterAnyTable(Query, PageFilter, 'pi_po').subscribe((res: any) => {
                        console.log("PaginationfilterAnyTable", res);
                        TableFormat['PageSize'] = res?.TOTAL_PAGE
                        TableFormat['items'] = [];
                        TableFormat['Expansion_Items'] = [];
                        this.removeEmpty(res?.data).then(async (newdata: any) => {
                            await newdata?.forEach(async (element) => {
                                await TableFormat['items'].push({
                                    "InvoiceNo": element['pi_poNo'],
                                    "InvoiceDate": moment(element['date']).format('DD-MM-YYYY'),
                                    "ConsigneeName": element['buyerName'],
                                    "BRANCH": element['location'],
                                    "Amount": element['amount'],
                                    "PaymentTerm": element['paymentTerm'][0]?.type?.value,
                                    isExpand: false,
                                    disabled: element['deleteflag'] != '-1' ? false : true,
                                    RoleType: this.USER_RESULT?.RoleCheckbox
                                })
                            });
                            if (TableFormat['items']?.length != 0) {
                                TableFormat['Objectkeys'] = await Object.keys(TableFormat['items'][0])?.filter((item: any) => item != 'isExpand')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'disabled')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'RoleType')
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            } else {
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            }
                        });
                    });
                })
            },
            commercials: async () => {
                return new Promise((resolve, reject) => {
                    TableFormat = {
                        header: [
                            "Pipo No.",
                            "DATE",
                            "SB No.",
                            "Payments Terms",
                            "Commercial Invoice No.",
                            "Commercial Amount",
                            "Buyer Name",
                            "Action"],
                        items: [],
                        Expansion_header: [],
                        Expansion_Items: [],
                        Objectkeys: [],
                        ExpansionKeys: [],
                        TableHeaderClass: [
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-2",
                            "col-td-th-2",
                            "col-td-th-2",
                            "col-td-th-1",
                            "col-td-th-1"
                        ],
                        eventId: '0',
                        PageSize: 0
                    }
                    this.filteranytablepagination.PaginationfilterAnyTable(Query, PageFilter, 'commercials').subscribe((res: any) => {
                        console.log("PaginationfilterAnyTable", res);
                        TableFormat['PageSize'] = res?.TOTAL_PAGE
                        TableFormat['items'] = [];
                        TableFormat['Expansion_Items'] = [];
                        this.removeEmpty(res?.data).then(async (newdata: any) => {
                            await newdata?.forEach(async (element) => {
                                await TableFormat['items'].push({
                                    PipoNo: this.getPipoNumber(element['pipo']),
                                    commercialDate: moment(element['commercialDate']).format("DD-MM-YYYY"),
                                    sbNo: element['sbNo'],
                                    type: element['type'],
                                    commercialNumber: element['commercialNumber'],
                                    amount: element['amount'],
                                    buyerName: element['buyerName'],
                                    isExpand: false,
                                    disabled: element['deleteflag'] != '-1' ? false : true,
                                    RoleType: this.USER_RESULT?.RoleCheckbox
                                })
                            });
                            if (TableFormat['items']?.length != 0) {
                                TableFormat['Objectkeys'] = await Object.keys(TableFormat['items'][0])?.filter((item: any) => item != 'isExpand')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'disabled')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'RoleType')
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            } else {
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            }
                        });
                    });
                })
            },
            masterrecord: async () => {
                return new Promise((resolve, reject) => {
                    TableFormat = {
                        header: [
                            "Pipo No.",
                            "SB DATE",
                            "SB NUMBER",
                            "BUYER NAME",
                            "CURRENCY",
                            "SB AMOUNT",
                            "AVAILABLE BALANCE",
                            "Action"],
                        items: [],
                        Expansion_header: [
                            "AD CODE",
                            "AD BILL NO",
                            "Consignee NAME",
                            "ORIGIN",
                            "DESTINATION",
                            "FIRX NUMBER",
                            "FIRX DATE",
                            "FIRX CURRENCY",
                            "FIRX AMOUNT",
                            "FIRX COMMISION",
                            "FIRX RECIEVED AMOUNT",
                        ],
                        Expansion_Items: [],
                        Objectkeys: [],
                        ExpansionKeys: [],
                        TableHeaderClass: [
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-2",
                            "col-td-th-1"
                        ],
                        eventId: 2,
                        Expansion_header2: [
                            "Invoice No.",
                            "Amount"
                        ],
                        Expansion_Items2: [],
                        ExpansionKeys2: [],
                        PageSize: 0
                    }
                    this.filteranytablepagination.PaginationfilterAnyTable(Query, PageFilter, 'masterrecord').subscribe((res: any) => {
                        console.log("PaginationfilterAnyTable", res);
                        res?.data?.forEach(element => {
                            let totalFirxAmount: any = 0;
                            let tp: any = {
                                firxNumber: [],
                                firxDate: [],
                                firxCurrency: [],
                                firxAmount: [],
                                firxCommision: [],
                                firxRecAmo: [],
                                id: [],
                            };
                            for (let index = 0; index < element?.firxdetails.length; index++) {
                                const elementfirxdetails = element?.firxdetails[index];
                                totalFirxAmount += parseFloat(this.FIRX_AMOUNT(elementfirxdetails?.firxAmount));

                                elementfirxdetails?.firxNumber.split(',').forEach(firxelementno => {
                                    tp?.firxNumber?.push(firxelementno)
                                });
                                elementfirxdetails?.firxDate.split(',').forEach(firxDateelement => {
                                    tp?.firxDate?.push(firxDateelement)
                                });
                                elementfirxdetails?.firxCurrency.split(',').forEach(firxCurrencyelement => {
                                    tp?.firxCurrency?.push(firxCurrencyelement)
                                });
                                elementfirxdetails?.firxAmount.split(',').forEach(firxAmountelement => {
                                    tp?.firxAmount?.push(firxAmountelement)
                                });
                                elementfirxdetails?.firxCommision.split(',').forEach(firxCommisionelement => {
                                    tp?.firxCommision?.push(firxCommisionelement)
                                });
                            }
                            element['FIRX_TOTAL_AMOUNT'] = totalFirxAmount;
                            element['FIRX_INFO'] = tp;
                        });
                        TableFormat['PageSize'] = res?.TOTAL_PAGE
                        TableFormat['items'] = [];
                        TableFormat['Expansion_Items'] = [];
                        this.removeEmpty(res?.data).then(async (newdata: any) => {
                            await newdata?.forEach(async (element) => {
                                let invoicedeatils: any = [];
                                (element?.invoices != "NF" ? element?.invoices : [])?.forEach((element2: any) => {
                                    invoicedeatils.push({
                                        InvoiceNo: element2?.invoiceno?.value,
                                        Amount: element2?.amount
                                    })
                                });
                                await TableFormat['items'].push({
                                    PipoNo: this.getPipoNumber(element['pipo']),
                                    sbdate: moment(element['sbdate']).format('DD-MM-YYYY'),
                                    sbno: element['sbno'],
                                    buyerName: element['buyerName'],
                                    fobCurrency: element['fobCurrency'],
                                    fobValue: element['fobValue'],
                                    balanceAvai: element['balanceAvai'] != '-1' ? element['balanceAvai'] : element['fobValue'],
                                    isExpand: false,
                                    isExpand2: false,
                                    disabled: element['deleteflag'] != '-1' ? false : true,
                                    RoleType: this.USER_RESULT?.RoleCheckbox,
                                    Expansion_Items: [{
                                        adCode: element['adCode'],
                                        adBillNo: element['adBillNo'],
                                        consigneeName: element['consigneeName'],
                                        exporterLocationCode: element['exporterLocationCode'],
                                        countryOfFinaldestination: element['countryOfFinaldestination'],
                                        firxNumber: this.ARRAY_TO_STRING(element?.FIRX_INFO, 'firxNumber'),
                                        firxDate: this.ARRAY_TO_STRING(element?.FIRX_INFO, 'firxDate'),
                                        firxCurrency: this.ARRAY_TO_STRING(element?.FIRX_INFO, 'firxCurrency'),
                                        firxAmount: this.ARRAY_TO_STRING(element?.FIRX_INFO, 'firxAmount'),
                                        firxCommision: this.ARRAY_TO_STRING(element?.FIRX_INFO, 'firxCommision'),
                                        FIRX_TOTAL_AMOUNT: element['FIRX_TOTAL_AMOUNT']
                                    }],
                                    Expansion_Items2: invoicedeatils
                                })
                            });
                            if (TableFormat['items']?.length != 0) {
                                TableFormat['Objectkeys'] = await Object.keys(TableFormat['items'][0])?.filter((item: any) => item != 'isExpand')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'isExpand2')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'disabled')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'RoleType')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'Expansion_Items');
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'Expansion_Items2');
                                TableFormat['ExpansionKeys'] = await Object.keys(TableFormat['items'][0]['Expansion_Items'][0])
                                TableFormat['ExpansionKeys2'] = await TableFormat['items'][0]['Expansion_Items2'].length != 0 ? Object.keys(TableFormat['items'][0]['Expansion_Items2'][0]) : []
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            } else {
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            }
                        });
                    });
                })
            },
            airwayblcopies: async () => {
                return new Promise((resolve, reject) => {
                    TableFormat = {
                        header: [
                            "Pipo No.",
                            "BL/Airway No.",
                            "DATE",
                            "SB No.",
                            "Buyer Name",
                            "Action"],
                        items: [],
                        Expansion_header: [],
                        Expansion_Items: [],
                        Objectkeys: [],
                        ExpansionKeys: [],
                        TableHeaderClass: [
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1"
                        ],
                        eventId: '0',
                        PageSize: 0
                    }
                    this.filteranytablepagination.PaginationfilterAnyTable(Query, PageFilter, 'airwayblcopies').subscribe((res: any) => {
                        console.log("PaginationfilterAnyTable", res);
                        TableFormat['PageSize'] = res?.TOTAL_PAGE
                        TableFormat['items'] = [];
                        TableFormat['Expansion_Items'] = [];
                        this.removeEmpty(res?.data).then(async (newdata: any) => {
                            await newdata?.forEach(async (element) => {
                                await TableFormat['items'].push({
                                    PipoNo: this.getPipoNumber(element['pipo']),
                                    airwayBlCopyNumber: element['airwayBlCopyNumber'],
                                    airwayBlCopydate: moment(element['date']).format("DD-MM-YYYY"),
                                    sbNo: element['sbNo'],
                                    buyerName: element['buyerName'],
                                    isExpand: false,
                                    disabled: element['deleteflag'] != '-1' ? false : true,
                                    RoleType: this.USER_RESULT?.RoleCheckbox
                                })
                            });
                            if (TableFormat['items']?.length != 0) {
                                TableFormat['Objectkeys'] = await Object.keys(TableFormat['items'][0])?.filter((item: any) => item != 'isExpand')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'disabled')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'RoleType')
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            } else {
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            }
                        });
                    });
                })
            },
            packinglists: async () => {
                return new Promise((resolve, reject) => {
                    TableFormat = {
                        header: [
                            "Pipo No.",
                            "DATE",
                            "SB No.",
                            "Packing List No.",
                            "Buyer Name",
                            "Action"],
                        items: [],
                        Expansion_header: [],
                        Expansion_Items: [],
                        Objectkeys: [],
                        ExpansionKeys: [],
                        TableHeaderClass: [
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-2",
                            "col-td-th-1",
                            "col-td-th-1"
                        ],
                        eventId: '',
                        PageSize: 0
                    }
                    this.filteranytablepagination.PaginationfilterAnyTable(Query, PageFilter, 'packinglists').subscribe((res: any) => {
                        console.log("PaginationfilterAnyTable", res);
                        TableFormat['PageSize'] = res?.TOTAL_PAGE
                        TableFormat['items'] = [];
                        TableFormat['Expansion_Items'] = [];
                        this.removeEmpty(res?.data).then(async (newdata: any) => {
                            await newdata?.forEach(async (element) => {
                                await TableFormat['items'].push({
                                    PipoNo: this.getPipoNumber(element['pipo']),
                                    packingListDate: moment(element['packingListDate']).format("DD-MM-YYYY"),
                                    sbNo: element['sbNo'],
                                    packingListNumber: element['packingListNumber'],
                                    buyerName: element['buyerName'],
                                    isExpand: false,
                                    disabled: element['deleteflag'] != '-1' ? false : true,
                                    RoleType: this.USER_RESULT?.RoleCheckbox
                                })
                            });
                            if (TableFormat['items']?.length != 0) {
                                TableFormat['Objectkeys'] = await Object.keys(TableFormat['items'][0])?.filter((item: any) => item != 'isExpand')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'disabled')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'RoleType')
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            } else {
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            }
                        });
                    });
                })
            },
            CertificateOfOrigin: async () => {
                return new Promise((resolve, reject) => {
                    TableFormat = {
                        header: [
                            "Pipo No.",
                            "DATE",
                            "COI Ref No.",
                            "CI No.",
                            "Action"],
                        items: [],
                        Expansion_header: [],
                        Expansion_Items: [],
                        Objectkeys: [],
                        ExpansionKeys: [],
                        TableHeaderClass: [
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                        ],
                        eventId: '',
                        PageSize: 0
                    }
                    this.filteranytablepagination.PaginationfilterAnyTable(Query, PageFilter, 'CertificateOfOrigin').subscribe((res: any) => {
                        console.log("PaginationfilterAnyTable", res);
                        TableFormat['PageSize'] = res?.TOTAL_PAGE
                        TableFormat['items'] = [];
                        TableFormat['Expansion_Items'] = [];
                        this.removeEmpty(res?.data).then(async (newdata: any) => {
                            await newdata?.forEach(async (element) => {
                                await TableFormat['items'].push({
                                    PipoNo: this.getPipoNumber(element['pipo']),
                                    date: moment(element['date']).format("DD-MM-YYYY"),
                                    COIREF: element['CertificateOriginNumber'],
                                    CommercialNumber: element['CommercialNumber']?.value,
                                    isExpand: false,
                                    disabled: element['deleteflag'] != '-1' ? false : true,
                                    RoleType: this.USER_RESULT?.RoleCheckbox
                                })
                            });
                            if (TableFormat['items']?.length != 0) {
                                TableFormat['Objectkeys'] = await Object.keys(TableFormat['items'][0])?.filter((item: any) => item != 'isExpand')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'disabled')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'RoleType')
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            } else {
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            }
                        });
                    });
                })
            },
            billofexchanges: async () => {
                return new Promise((resolve, reject) => {
                    TableFormat = {
                        header: [
                            "Pipo No.",
                            "DATE",
                            "Bill Of Ex. No.",
                            "Buyer Name",
                            "Action"],
                        items: [],
                        Expansion_header: [],
                        Expansion_Items: [],
                        Objectkeys: [],
                        ExpansionKeys: [],
                        TableHeaderClass: [
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1"
                        ],
                        eventId: '',
                        PageSize: 0
                    }
                    this.filteranytablepagination.PaginationfilterAnyTable(Query, PageFilter, 'billofexchanges').subscribe((res: any) => {
                        console.log("PaginationfilterAnyTable", res);
                        TableFormat['PageSize'] = res?.TOTAL_PAGE
                        TableFormat['items'] = [];
                        TableFormat['Expansion_Items'] = [];
                        this.removeEmpty(res?.data).then(async (newdata: any) => {
                            await newdata?.forEach(async (element) => {
                                await TableFormat['items'].push({
                                    PipoNo: this.getPipoNumber(element['pipo']),
                                    billOfExchangeDate: moment(element['billOfExchangeDate']).format("DD-MM-YYYY"),
                                    billExchangeNumber: element['billExchangeNumber'],
                                    buyerName: element['buyerName'],
                                    isExpand: false,
                                    disabled: element['deleteflag'] != '-1' ? false : true,
                                    RoleType: this.USER_RESULT?.RoleCheckbox
                                })
                            });
                            if (TableFormat['items']?.length != 0) {
                                TableFormat['Objectkeys'] = await Object.keys(TableFormat['items'][0])?.filter((item: any) => item != 'isExpand')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'disabled')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'RoleType')
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            } else {
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            }
                        });
                    });
                })
            },
            creditNote: async () => {
                return new Promise((resolve, reject) => {
                    TableFormat = {
                        header: [
                            "Pipo No.",
                            "DATE",
                            "C N No.",
                            "C N Amount",
                            "CURRENCY",
                            "Buyer Name",
                            "Action"],
                        items: [],
                        Expansion_header: [],
                        Expansion_Items: [],
                        Objectkeys: [],
                        ExpansionKeys: [],
                        TableHeaderClass: [
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1"
                        ],
                        eventId: '',
                        PageSize: 0
                    }
                    this.filteranytablepagination.PaginationfilterAnyTable(Query, PageFilter, 'creditNote').subscribe((res: any) => {
                        console.log("PaginationfilterAnyTable", res);
                        TableFormat['PageSize'] = res?.TOTAL_PAGE
                        TableFormat['items'] = [];
                        TableFormat['Expansion_Items'] = [];
                        this.removeEmpty(res?.data).then(async (newdata: any) => {
                            await newdata?.forEach(async (element) => {
                                await TableFormat['items'].push({
                                    PipoNo: this.getPipoNumber(element['pipo']),
                                    date: moment(element['date']).format('DD-MM-YYYY'),
                                    creditNoteNumber: element['creditNoteNumber'],
                                    creditNoteAmount: element['creditNoteAmount'],
                                    currency: element['currency'],
                                    buyerName: element['buyerName'],
                                    isExpand: false,
                                    disabled: element['deleteflag'] != '-1' ? false : true,
                                    RoleType: this.USER_RESULT?.RoleCheckbox
                                })
                            });
                            if (TableFormat['items']?.length != 0) {
                                TableFormat['Objectkeys'] = await Object.keys(TableFormat['items'][0])?.filter((item: any) => item != 'isExpand')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'disabled')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'RoleType')
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            } else {
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            }
                        });
                    });
                })
            },
            debitnotes: async () => {
                return new Promise((resolve, reject) => {
                    TableFormat = {
                        header: [
                            "Pipo No.",
                            "DATE",
                            "CI No.",
                            "D N No.",
                            "D N Amount",
                            "CURRENCY",
                            "Buyer Name",
                            "Action"],
                        items: [],
                        Expansion_header: [],
                        Expansion_Items: [],
                        Objectkeys: [],
                        ExpansionKeys: [],
                        TableHeaderClass: [
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1"
                        ],
                        eventId: '',
                        PageSize: 0
                    }
                    this.filteranytablepagination.PaginationfilterAnyTable(Query, PageFilter, 'debitnotes').subscribe((res: any) => {
                        console.log("PaginationfilterAnyTable", res);
                        TableFormat['PageSize'] = res?.TOTAL_PAGE
                        TableFormat['items'] = [];
                        TableFormat['Expansion_Items'] = [];
                        this.removeEmpty(res?.data).then(async (newdata: any) => {
                            await newdata?.forEach(async (element) => {
                                await TableFormat['items'].push({
                                    PipoNo: this.getPipoNumber(element['pipo']),
                                    date: moment(element['date']).format('DD-MM-YYYY'),
                                    commercialNumber: element['commercialNumber'],
                                    debitNoteNumber: element['debitNoteNumber'],
                                    DebitAmount: element['totalDebitAmount'],
                                    currency: element['currency'],
                                    buyerName: element['buyerName'],
                                    isExpand: false,
                                    disabled: element['deleteflag'] != '-1' ? false : true,
                                    RoleType: this.USER_RESULT?.RoleCheckbox
                                })
                            });
                            if (TableFormat['items']?.length != 0) {
                                TableFormat['Objectkeys'] = await Object.keys(TableFormat['items'][0])?.filter((item: any) => item != 'isExpand')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'disabled')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'RoleType')
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            } else {
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            }
                        });
                    });
                })
            },
            insurances: async () => {
                return new Promise((resolve, reject) => {
                    TableFormat = {
                        header: [
                            "Pipo No.",
                            "DATE",
                            "IP No.",
                            "Start Date",
                            "Expiry Date",
                            "IP Amount",
                            "CURRENCY",
                            "Buyer Name",
                            "Action"],
                        items: [],
                        Expansion_header: [],
                        Expansion_Items: [],
                        Objectkeys: [],
                        ExpansionKeys: [],
                        TableHeaderClass: [
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1"
                        ],
                        eventId: '',
                        PageSize: 0
                    }
                    this.filteranytablepagination.PaginationfilterAnyTable(Query, PageFilter, 'insurances').subscribe((res: any) => {
                        console.log("PaginationfilterAnyTable", res);
                        TableFormat['PageSize'] = res?.TOTAL_PAGE
                        TableFormat['items'] = [];
                        TableFormat['Expansion_Items'] = [];
                        this.removeEmpty(res?.data).then(async (newdata: any) => {
                            await newdata?.forEach(async (element) => {
                                await TableFormat['items'].push({
                                    PipoNo: this.getPipoNumber(element['UtilizationAddition']),
                                    date: moment(element['date']).format("DD-MM-YYYY"),
                                    insuranceNumber: element['insuranceNumber'],
                                    StartDate: moment(element['StartDate']).format("DD-MM-YYYY"),
                                    Expirydate: moment(element['Expirydate']).format("DD-MM-YYYY"),
                                    insuranceAmount: element['insuranceAmount'],
                                    currency: element['currency'],
                                    buyerName: this.getPipoBuyerName(element['UtilizationAddition']),
                                    isExpand: false,
                                    disabled: element['deleteflag'] != '-1' ? false : true,
                                    RoleType: this.USER_RESULT?.RoleCheckbox
                                })
                            });
                            if (TableFormat['items']?.length != 0) {
                                TableFormat['Objectkeys'] = await Object.keys(TableFormat['items'][0])?.filter((item: any) => item != 'isExpand')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'disabled')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'RoleType')
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            } else {
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            }
                        });
                    });
                })
            },
            letterlcs: async () => {
                return new Promise((resolve, reject) => {
                    TableFormat = {
                        header: [
                            "Pipo No.",
                            "DATE",
                            "L C No.",
                            "Expiry Date",
                            "Last Date of Shipment",
                            "L C Amount",
                            "CURRENCY",
                            "Buyer Name",
                            "Action"],
                        items: [],
                        Expansion_header: [],
                        Expansion_Items: [],
                        Objectkeys: [],
                        ExpansionKeys: [],
                        TableHeaderClass: [
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-2",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1"
                        ],
                        eventId: '',
                        PageSize: 0
                    }
                    this.filteranytablepagination.PaginationfilterAnyTable(Query, PageFilter, 'letterlcs').subscribe((res: any) => {
                        console.log("PaginationfilterAnyTable", res);
                        TableFormat['PageSize'] = res?.TOTAL_PAGE
                        TableFormat['items'] = [];
                        TableFormat['Expansion_Items'] = [];
                        this.removeEmpty(res?.data).then(async (newdata: any) => {
                            await newdata?.forEach(async (element) => {
                                await TableFormat['items'].push({
                                    PipoNo: this.getPipoNumber(element['pipo']),
                                    date: moment(element['date']).format("DD-MM-YYYY"),
                                    letterOfCreditNumber: element['letterOfCreditNumber'],
                                    Expirydate: element['Expirydate'],
                                    LastDateofShipment: element['LastDateofShipment'],
                                    letterOfCreditAmount: element['letterOfCreditAmount'],
                                    currency: element['currency'],
                                    buyerName: element['buyerName'],
                                    isExpand: false,
                                    disabled: element['deleteflag'] != '-1' ? false : true,
                                    RoleType: this.USER_RESULT?.RoleCheckbox
                                })
                            });
                            if (TableFormat['items']?.length != 0) {
                                TableFormat['Objectkeys'] = await Object.keys(TableFormat['items'][0])?.filter((item: any) => item != 'isExpand')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'disabled')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'RoleType')
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            } else {
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            }
                        });
                    });
                })
            },
            masterservices: async () => {
                return new Promise((resolve, reject) => {
                    TableFormat = {
                        header: [
                            "Pipo No.",
                            "DATE",
                            "M S A No.",
                            "Start Date",
                            "Expiry Date",
                            "Overseas Party Name",
                            "M S A Amount",
                            "CURRENCY",
                            "Buyer Name",
                            "Action"],
                        items: [],
                        Expansion_header: [],
                        Expansion_Items: [],
                        Objectkeys: [],
                        ExpansionKeys: [],
                        TableHeaderClass: [
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-2",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1"
                        ],
                        eventId: '',
                        PageSize: 0
                    }
                    this.filteranytablepagination.PaginationfilterAnyTable(Query, PageFilter, 'masterservices').subscribe((res: any) => {
                        console.log("PaginationfilterAnyTable", res);
                        TableFormat['PageSize'] = res?.TOTAL_PAGE
                        TableFormat['items'] = [];
                        TableFormat['Expansion_Items'] = [];
                        this.removeEmpty(res?.data).then(async (newdata: any) => {
                            await newdata?.forEach(async (element) => {
                                await TableFormat['items'].push({
                                    PipoNo: this.getPipoNumber(element['UtilizationAddition']),
                                    date: element['date'],
                                    masterServiceNumber: element['masterServiceNumber'],
                                    StartDate: moment(element['StartDate']).format("DD-MM-YYYY"),
                                    Expirydate: moment(element['Expirydate']).format("DD-MM-YYYY"),
                                    PartyName: element['PartyName']?.value,
                                    masterServiceAmount: element['masterServiceAmount'],
                                    currency: element['currency'],
                                    buyerName: this.getPipoBuyerName(element['UtilizationAddition']),
                                    isExpand: false,
                                    disabled: element['deleteflag'] != '-1' ? false : true,
                                    RoleType: this.USER_RESULT?.RoleCheckbox
                                })
                            });
                            if (TableFormat['items']?.length != 0) {
                                TableFormat['Objectkeys'] = await Object.keys(TableFormat['items'][0])?.filter((item: any) => item != 'isExpand')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'disabled')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'RoleType')
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            } else {
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            }
                        });
                    });
                })
            },
            thirdparties: async () => {
                return new Promise((resolve, reject) => {
                    TableFormat = {
                        header: [
                            "Pipo No.",
                            "DATE",
                            "T P A No.",
                            "T P A Amount",
                            "CURRENCY",
                            "Buyer Name",
                            "Action"],
                        items: [],
                        Expansion_header: [],
                        Expansion_Items: [],
                        Objectkeys: [],
                        ExpansionKeys: [],
                        TableHeaderClass: [
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1"
                        ],
                        eventId: '',
                        PageSize: 0
                    }
                    this.filteranytablepagination.PaginationfilterAnyTable(Query, PageFilter, 'thirdparties').subscribe((res: any) => {
                        console.log("PaginationfilterAnyTable", res);
                        TableFormat['PageSize'] = res?.TOTAL_PAGE
                        TableFormat['items'] = [];
                        TableFormat['Expansion_Items'] = [];
                        this.removeEmpty(res?.data).then(async (newdata: any) => {
                            await newdata?.forEach(async (element) => {
                                await TableFormat['items'].push({
                                    PipoNo: this.getPipoNumber(element['pipo']),
                                    date: moment(element['date']).format("DD-MM-YYYY"),
                                    triPartyAgreementNumber: element['triPartyAgreementNumber'],
                                    triPartyAgreementAmount: element['triPartyAgreementAmount'],
                                    currency: element['currency'],
                                    buyerName: element['buyerName'],
                                    isExpand: false,
                                    disabled: element['deleteflag'] != '-1' ? false : true,
                                    RoleType: this.USER_RESULT?.RoleCheckbox
                                })
                            });
                            if (TableFormat['items']?.length != 0) {
                                TableFormat['Objectkeys'] = await Object.keys(TableFormat['items'][0])?.filter((item: any) => item != 'isExpand')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'disabled')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'RoleType')
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            } else {
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            }
                        });
                    });
                })
            },
            opinionreports: async () => {
                return new Promise((resolve, reject) => {
                    TableFormat = {
                        header: [
                            "DATE",
                            "O R No.",
                            "Foreign Party Name",
                            "Report Date",
                            "Report Ratings",
                            "Buyer Name",
                            "Ageing Days",
                            "Action"],
                        items: [],
                        Expansion_header: [],
                        Expansion_Items: [],
                        Objectkeys: [],
                        ExpansionKeys: [],
                        TableHeaderClass: [
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-2",
                            "col-td-th-1",
                            "col-td-th-2",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                        ],
                        eventId: '',
                        PageSize: 0
                    }
                    this.filteranytablepagination.PaginationfilterAnyTable(Query, PageFilter, 'opinionreports').subscribe((res: any) => {
                        console.log("PaginationfilterAnyTable", res);
                        TableFormat['PageSize'] = res?.TOTAL_PAGE
                        TableFormat['items'] = [];
                        TableFormat['Expansion_Items'] = [];
                        this.removeEmpty(res?.data).then(async (newdata: any) => {
                            await newdata?.forEach(async (element) => {
                                await TableFormat['items'].push({
                                    date: moment(element['date']).format("DD-MM-YYYY"),
                                    opinionReportNumber: element['opinionReportNumber'],
                                    ForeignPartyName: element['ForeignPartyName']?.value,
                                    ReportDate: moment(element['ReportDate']).format("DD-MM-YYYY"),
                                    ReportRatings: element['ReportRatings'],
                                    buyerName: element['buyerName'],
                                    AgeingDays: this.SubtractDates(new Date(element['ReportDate']), new Date()),
                                    isExpand: false,
                                    disabled: element['deleteflag'] != '-1' ? false : true,
                                    RoleType: this.USER_RESULT?.RoleCheckbox
                                })
                            });
                            if (TableFormat['items']?.length != 0) {
                                TableFormat['Objectkeys'] = await Object.keys(TableFormat['items'][0])?.filter((item: any) => item != 'isExpand')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'disabled')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'RoleType')
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            } else {
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            }
                        });
                    });
                })
            },
            Inward_remittance: async () => {
                return new Promise((resolve, reject) => {
                    this.filteranytablepagination.PaginationfilterAnyTable(Query, PageFilter, 'Inward_remittance').subscribe((res: any) => {
                        if (ExtraData == "DisposalSubmitted") {
                            TableFormat = {
                                header: [
                                    "BankName",
                                    "PI/PO No.",
                                    "Ref_Number",
                                    "Submitted date",
                                    "Currency",
                                    "Amount",
                                    "Remitter_Name",
                                    "Amount Claimed",
                                    "Balance Amount",
                                    "Action"],
                                items: [],
                                Expansion_header: [],
                                Expansion_Items: [],
                                Objectkeys: [],
                                ExpansionKeys: [],
                                TableHeaderClass: [
                                    "col-td-th-1",
                                    "col-td-th-1",
                                    "col-td-th-1",
                                    "col-td-th-2",
                                    "col-td-th-1",
                                    "col-td-th-1",
                                    "col-td-th-2",
                                    "col-td-th-2",
                                    "col-td-th-2",
                                ],
                                eventId: '',
                                PageSize: 0
                            }
                            TableFormat['PageSize'] = res?.TOTAL_PAGE
                            TableFormat['items'] = [];
                            TableFormat['Expansion_Items'] = [];
                            this.removeEmpty(res?.data).then(async (newdata: any) => {
                                await newdata?.forEach(async (element) => {
                                    await TableFormat['items'].push({
                                        BankName: element['BankName'],
                                        Pipo: this.getPipoNumber(element['pipoRef']),
                                        Inward_reference_number: element['Inward_reference_number'],
                                        date: moment(new Date(element?.updatedAt)).format("DD-MM-YYYY"),
                                        currency: element['currency'],
                                        amount: element['amount'],
                                        Remitter_Name: element['Remitter_Name'],
                                        Inward_amount_for_disposal: element['Inward_amount_for_disposal'] != undefined ? element['Inward_amount_for_disposal'] : 0,
                                        BalanceAmount: parseFloat(element['amount']) - parseFloat(element['Inward_amount_for_disposal'] != undefined ? element['Inward_amount_for_disposal'] : 0),
                                        isExpand: false,
                                        disabled: element['deleteflag'] != '-1' ? false : true,
                                        RoleType: this.USER_RESULT?.RoleCheckbox
                                    })
                                })
                                if (TableFormat['items']?.length != 0) {
                                    TableFormat['Objectkeys'] = await Object.keys(TableFormat['items'][0])?.filter((item: any) => item != 'isExpand')
                                    TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'disabled')
                                    TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'RoleType')
                                    resolve(TableFormat);
                                    this.TABLE_CONTROLLER_DATA = res?.data;
                                    this.SHOW_TABLE_TBODY = true;
                                } else {
                                    resolve(TableFormat);
                                    this.TABLE_CONTROLLER_DATA = res?.data;
                                    this.SHOW_TABLE_TBODY = true;
                                }
                            });
                            console.log("PaginationfilterAnyTable", res, ExtraData);
                        } else if (ExtraData == "PendingCaliming") {
                            TableFormat = {
                                header: [
                                    "BankName",
                                    "Ref_Number",
                                    "Currency",
                                    "Amount",
                                    "Remitter_Name",
                                    "Amount Claimed",
                                    "Balance Amount",
                                    "Action"],
                                items: [],
                                Expansion_header: [],
                                Expansion_Items: [],
                                Objectkeys: [],
                                ExpansionKeys: [],
                                TableHeaderClass: [
                                    "col-td-th-1",
                                    "col-td-th-1",
                                    "col-td-th-1",
                                    "col-td-th-1",
                                    "col-td-th-2",
                                    "col-td-th-2",
                                    "col-td-th-2",
                                ],
                                eventId: '',
                                PageSize: 0
                            }
                            TableFormat['PageSize'] = res?.TOTAL_PAGE
                            TableFormat['items'] = [];
                            TableFormat['Expansion_Items'] = [];
                            this.removeEmpty(res?.data).then(async (newdata: any) => {
                                await newdata?.forEach(async (element) => {
                                    await TableFormat['items'].push({
                                        BankName: element['BankName'],
                                        Inward_reference_number: element['Inward_reference_number'],
                                        currency: element['currency'],
                                        amount: element['amount'],
                                        Remitter_Name: element['Remitter_Name'],
                                        Inward_amount_for_disposal: element['Inward_amount_for_disposal'] != undefined ? element['Inward_amount_for_disposal'] : 0,
                                        BalanceAmount: parseFloat(element['amount']) - parseFloat(element['Inward_amount_for_disposal'] != undefined ? element['Inward_amount_for_disposal'] : 0),
                                        isExpand: false,
                                        disabled: element['deleteflag'] != '-1' ? false : true,
                                        RoleType: this.USER_RESULT?.RoleCheckbox
                                    })
                                })
                                if (TableFormat['items']?.length != 0) {
                                    TableFormat['Objectkeys'] = await Object.keys(TableFormat['items'][0])?.filter((item: any) => item != 'isExpand')
                                    TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'disabled')
                                    TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'RoleType')
                                    resolve(TableFormat);
                                    this.TABLE_CONTROLLER_DATA = res?.data;
                                    this.SHOW_TABLE_TBODY = true;
                                } else {
                                    resolve(TableFormat);
                                    this.TABLE_CONTROLLER_DATA = res?.data;
                                    this.SHOW_TABLE_TBODY = true;
                                }
                                console.log("PaginationfilterAnyTable", res, newdata, ExtraData);
                            });
                        } else if (ExtraData == "Processed") {
                            TableFormat = {
                                header: [
                                    "BankName",
                                    "PI/PO No.",
                                    "FIRX No.",
                                    "Ref_Number",
                                    "Currency",
                                    "Amount",
                                    "Remitter_Name",
                                    "Amount Claimed",
                                    "Balance Amount",
                                    "Action"],
                                items: [],
                                Expansion_header: [],
                                Expansion_Items: [],
                                Objectkeys: [],
                                ExpansionKeys: [],
                                TableHeaderClass: [
                                    "col-td-th-1",
                                    "col-td-th-1",
                                    "col-td-th-1",
                                    "col-td-th-1",
                                    "col-td-th-1",
                                    "col-td-th-2",
                                    "col-td-th-2",
                                    "col-td-th-2",
                                ],
                                eventId: '',
                                PageSize: 0
                            }
                            TableFormat['PageSize'] = res?.TOTAL_PAGE
                            TableFormat['items'] = [];
                            TableFormat['Expansion_Items'] = [];
                            this.removeEmpty(res?.data).then(async (newdata: any) => {
                                await newdata?.forEach(async (element) => {
                                    await TableFormat['items'].push({
                                        BankName: element['BankName'],
                                        Pipo: this.getPipoNumber(element['pipoRef']),
                                        FirxNo: this.getFIRXNumber(element['AdviceRef']),
                                        Inward_reference_number: element['Inward_reference_number'],
                                        currency: element['currency'],
                                        amount: element['amount'],
                                        Remitter_Name: element['Remitter_Name'],
                                        Inward_amount_for_disposal: element['Inward_amount_for_disposal'] != undefined ? element['Inward_amount_for_disposal'] : 0,
                                        BalanceAmount: parseFloat(element['amount']) - parseFloat(element['Inward_amount_for_disposal'] != undefined ? element['Inward_amount_for_disposal'] : 0),
                                        isExpand: false,
                                        disabled: element['deleteflag'] != '-1' ? false : true,
                                        RoleType: this.USER_RESULT?.RoleCheckbox
                                    })
                                })
                                if (TableFormat['items']?.length != 0) {
                                    TableFormat['Objectkeys'] = await Object.keys(TableFormat['items'][0])?.filter((item: any) => item != 'isExpand')
                                    TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'disabled')
                                    TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'RoleType')
                                    resolve(TableFormat);
                                    this.TABLE_CONTROLLER_DATA = res?.data;
                                    this.SHOW_TABLE_TBODY = true;
                                } else {
                                    resolve(TableFormat);
                                    this.TABLE_CONTROLLER_DATA = res?.data;
                                    this.SHOW_TABLE_TBODY = true;
                                }
                            });
                            console.log("PaginationfilterAnyTable", res, ExtraData);
                        }
                    });
                })
            },
            iradvices: async () => {
                return new Promise((resolve, reject) => {
                    TableFormat = {
                        header: [
                            "Pipo No.",
                            "DATE",
                            "SB Number",
                            "Buyer Name",
                            "Currency",
                            "TT Amount",
                            "FIRX Number",
                            "Available Balance",
                            "Action"],
                        items: [],
                        Expansion_header: [
                            "From",
                            "Branch",
                            "Description",
                            "Recieved Date",
                            "Commission/Bank Charges",
                            "Recieved Amount USD",
                            "Conversion Date",
                            "Conversion Rate",
                            "Converted Amount",
                            "Payment Type"
                        ],
                        Expansion_Items: [],
                        Objectkeys: [],
                        ExpansionKeys: [],
                        TableHeaderClass: [
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-2"
                        ],
                        eventId: '',
                        PageSize: 0
                    }
                    this.filteranytablepagination.PaginationfilterAnyTable(Query, PageFilter, 'iradvices').subscribe((res: any) => {
                        console.log("PaginationfilterAnyTable", res);
                        TableFormat['PageSize'] = res?.TOTAL_PAGE
                        TableFormat['items'] = [];
                        TableFormat['Expansion_Items'] = [];
                        this.removeEmpty(res?.data).then(async (newdata: any) => {
                            await newdata?.forEach(async (element) => {
                                await TableFormat['items'].push({
                                    PipoNo: this.getPipoNumber(element['pipo']),
                                    date: moment(element['date']).format("DD-MM-YYYY"),
                                    boeno: element['sbno'],
                                    buyerName: element['buyerName'],
                                    currency: element['currency'],
                                    amount: element['amount'],
                                    billNo: element['billNo'],
                                    BalanceAvail: element['BalanceAvail'] != "-1" ? element['BalanceAvail'] : element['amount'],
                                    Expansion_Items: [{
                                        From: element['origin'],
                                        Branch: element['location'],
                                        Description: element['commodity'],
                                        RecievedDate: moment(element['recievedDate']).format("DD-MM-YYYY"),
                                        CommissionBankCharges: element['commision'],
                                        RecievedAmountUSD: element['recUSD'],
                                        ConversionDate: moment(element['conversionDate']).format("DD-MM-YYYY"),
                                        ConversionRate: element['exchangeRate'],
                                        ConvertedAmount: element['convertedAmount'],
                                        PaymentType: element['PaymentType'],
                                    }],
                                    isExpand: false,
                                    disabled: element['deleteflag'] != '-1' ? false : true,
                                    RoleType: this.USER_RESULT?.RoleCheckbox
                                })
                            });
                            if (TableFormat['items']?.length != 0) {
                                TableFormat['Objectkeys'] = await Object.keys(TableFormat['items'][0])?.filter((item: any) => item != 'isExpand')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'disabled')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'RoleType')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'Expansion_Items')
                                TableFormat['ExpansionKeys'] = await Object.keys(TableFormat['items'][0]['Expansion_Items'][0])
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            } else {
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            }
                        });
                    });
                })
            },
            destructions: async () => {
                return new Promise((resolve, reject) => {
                    TableFormat = {
                        header: [
                            "Pipo No.",
                            "DATE",
                            "Destruction Certificate No.",
                            "Buyer Name",
                            "Action"],
                        items: [],
                        Expansion_header: [],
                        Expansion_Items: [],
                        Objectkeys: [],
                        ExpansionKeys: [],
                        TableHeaderClass: [
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-2",
                            "col-td-th-1",
                            "col-td-th-1"
                        ],
                        eventId: '',
                        PageSize: 0
                    }
                    this.filteranytablepagination.PaginationfilterAnyTable(Query, PageFilter, 'destructions').subscribe((res: any) => {
                        console.log("PaginationfilterAnyTable", res);
                        TableFormat['PageSize'] = res?.TOTAL_PAGE
                        TableFormat['items'] = [];
                        TableFormat['Expansion_Items'] = [];
                        this.removeEmpty(res?.data).then(async (newdata: any) => {
                            await newdata?.forEach(async (element) => {
                                await TableFormat['items'].push({
                                    PipoNo: this.getPipoNumber(element['pipo']),
                                    destructionDate: moment(element['destructionDate']).format('DD-MM-YYYY'),
                                    destructionNumber: element['destructionNumber'],
                                    buyerName: element['buyerName'],
                                    isExpand: false,
                                    disabled: element['deleteflag'] != '-1' ? false : true,
                                    RoleType: this.USER_RESULT?.RoleCheckbox
                                })
                            });
                            if (TableFormat['items']?.length != 0) {
                                TableFormat['Objectkeys'] = await Object.keys(TableFormat['items'][0])?.filter((item: any) => item != 'isExpand')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'disabled')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'RoleType')
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            } else {
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            }
                        });
                    });
                })
            },
            blCopy: async () => {
                return new Promise((resolve, reject) => {
                    TableFormat = {
                        header: [
                            "Pipo No.",
                            "Sb no.",
                            "DATE",
                            "blcopy Ref No.",
                            "blcopy Amount",
                            "Buyer Name",
                            "Action"],
                        items: [],
                        Expansion_header: [],
                        Expansion_Items: [],
                        Objectkeys: [],
                        ExpansionKeys: [],
                        TableHeaderClass: [
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-2",
                            "col-td-th-2",
                            "col-td-th-1",
                        ],
                        eventId: '',
                        PageSize: 0
                    }
                    this.filteranytablepagination.PaginationfilterAnyTable(Query, PageFilter, 'blCopy').subscribe((res: any) => {
                        console.log("PaginationfilterAnyTable", res);
                        TableFormat['PageSize'] = res?.TOTAL_PAGE
                        TableFormat['items'] = [];
                        TableFormat['Expansion_Items'] = [];
                        this.removeEmpty(res?.data).then(async (newdata: any) => {
                            await newdata?.forEach(async (element) => {
                                await TableFormat['items'].push({
                                    PipoNo: this.getPipoNumber(element['pipo']),
                                    SbNo: element['SbRef'] != 'NF' ? element['SbRef'][0]?.sbno : 'NF',
                                    date: moment(element['date']).format('DD-MM-YYYY'),
                                    blcopyrefNumber: element['blcopyrefNumber'],
                                    amount: element['amount'],
                                    buyerName: element['buyerName'],
                                    isExpand: false,
                                    disabled: element['deleteflag'] != '-1' ? false : true,
                                    RoleType: this.USER_RESULT?.RoleCheckbox
                                })
                            });
                            if (TableFormat['items']?.length != 0) {
                                TableFormat['Objectkeys'] = await Object.keys(TableFormat['items'][0])?.filter((item: any) => item != 'isExpand')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'disabled')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'RoleType')
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            } else {
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            }
                        });
                    });
                })
            },
            EBRC: async () => {
                return new Promise((resolve, reject) => {
                    TableFormat = {
                        header: [
                            "Pipo No.",
                            "DATE",
                            "EBRC No.",
                            "Buyer Name",
                            "Action"],
                        items: [],
                        Expansion_header: [],
                        Expansion_Items: [],
                        Objectkeys: [],
                        ExpansionKeys: [],
                        TableHeaderClass: [
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                        ],
                        eventId: '',
                        PageSize: 0
                    }
                    this.filteranytablepagination.PaginationfilterAnyTable(Query, PageFilter, 'EBRC').subscribe((res: any) => {
                        console.log("PaginationfilterAnyTable", res);
                        TableFormat['PageSize'] = res?.TOTAL_PAGE
                        TableFormat['items'] = [];
                        TableFormat['Expansion_Items'] = [];
                        this.removeEmpty(res?.data).then(async (newdata: any) => {
                            await newdata?.forEach(async (element) => {
                                await TableFormat['items'].push({
                                    PipoNo: this.getPipoNumber(element['pipo']),
                                    date: moment(element['date']).format('DD-MM-YYYY'),
                                    EbrcNumber: element['EbrcNumber'],
                                    buyerName: element['buyerName'],
                                    isExpand: false,
                                    disabled: element['deleteflag'] != '-1' ? false : true,
                                    RoleType: this.USER_RESULT?.RoleCheckbox
                                })
                            });
                            if (TableFormat['items']?.length != 0) {
                                TableFormat['Objectkeys'] = await Object.keys(TableFormat['items'][0])?.filter((item: any) => item != 'isExpand')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'disabled')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'RoleType')
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            } else {
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            }
                        });
                    });
                })
            },
            SwiftCopyDocuments: async () => {
                return new Promise((resolve, reject) => {
                    TableFormat = {
                        header: [
                            "Pipo No.",
                            "DATE",
                            "Swift-Copy No.",
                            "Buyer Name",
                            "Action"],
                        items: [],
                        Expansion_header: [],
                        Expansion_Items: [],
                        Objectkeys: [],
                        ExpansionKeys: [],
                        TableHeaderClass: [
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-2",
                            "col-td-th-1",
                        ],
                        eventId: '',
                        PageSize: 0
                    }
                    this.filteranytablepagination.PaginationfilterAnyTable(Query, PageFilter, 'SwiftCopyDocuments').subscribe((res: any) => {
                        console.log("PaginationfilterAnyTable", res);
                        TableFormat['PageSize'] = res?.TOTAL_PAGE
                        TableFormat['items'] = [];
                        TableFormat['Expansion_Items'] = [];
                        this.removeEmpty(res?.data).then(async (newdata: any) => {
                            await newdata?.forEach(async (element) => {
                                await TableFormat['items'].push({
                                    PipoNo: this.getPipoNumber(element['pipo']),
                                    date: moment(element['date']).format('DD-MM-YYYY'),
                                    swiftCopyNumber: element['swiftCopyNumber'],
                                    buyerName: element['buyerName'],
                                    isExpand: false,
                                    disabled: element['deleteflag'] != '-1' ? false : true,
                                    RoleType: this.USER_RESULT?.RoleCheckbox
                                })
                            });
                            if (TableFormat['items']?.length != 0) {
                                TableFormat['Objectkeys'] = await Object.keys(TableFormat['items'][0])?.filter((item: any) => item != 'isExpand')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'disabled')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'RoleType')
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            } else {
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            }
                        });
                    });
                })
            },
        }
    }

    LoadTableImport(Query: any = {}, PageFilter: any, TableName: any, TableFormat: any, ExtraData: any = {}) {
        this.SHOW_TABLE_TBODY = false;
        this.TABLE_CONTROLLER_DATA = [];
        TableFormat = {
            header: [],
            items: [],
            Expansion_header: [],
            Expansion_Items: [],
            Objectkeys: [],
            ExpansionKeys: [],
            TableHeaderClass: [],
            eventId: 2,
            Expansion_header2: [],
            Expansion_Items2: [],
            ExpansionKeys2: [],
            PageSize: 0
        }
        return {
            pi_po: async () => {
                return new Promise((resolve, reject) => {
                    TableFormat = {
                        header: [
                            "DATE",
                            "INVOICE No.",
                            "INVOICE DATE",
                            "Beneficiary NAMES",
                            "CURRENCY",
                            "BRANCH",
                            "COMMODITY",
                            "Amount",
                            "Action"],
                        items: [],
                        Expansion_header: [
                            "BOE NO",
                            "BOE DATE",
                            "REGION",
                            "FOB VALUE",
                            "PORT CODE",
                            "BOE Balance Amount",
                            "Freight Charges"
                        ],
                        Expansion_header2: [
                            "TT DATE",
                            "TT USD",
                            "Payment Date",
                            "Amount",
                            "Currency",
                            "CCY Rate",
                            "INR Amount",
                            "ORM REF NUMBER/ID",
                            "TOTAL DEDUCTIONS/DAMGES/USD",
                            "FINAL AMOUNT - USD",
                            "DEBIT NOTE STATUS",
                            "STATUS OF BOE SUBMISSION IN BANK"
                        ],
                        Expansion_Items: [],
                        Expansion_Items2: [],
                        Objectkeys: [],
                        ExpansionKeys: [],
                        ExpansionKeys2: [],
                        TableHeaderClass: [
                            "col-td-th-0",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-2",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                        ],
                        eventId: 1,
                        PageSize: 0
                    }
                    this.filteranytablepagination.PaginationfilterAnyTable(Query, PageFilter, 'pi_po').subscribe((res: any) => {
                        console.log("PaginationfilterAnyTable", res);
                        TableFormat['PageSize'] = res?.TOTAL_PAGE
                        TableFormat['items'] = [];
                        TableFormat['Expansion_Items'] = [];
                        this.removeEmpty(res?.data).then(async (newdata: any) => {
                            await newdata?.forEach(async (element) => {
                                let boedata: any = [];
                                (element?.boeRef != 'NF' ? element?.boeRef : [{
                                    BOENO: "NF",
                                    BOEDATE: "NF",
                                    REGION: "NF",
                                    FOBVALUE: "NF",
                                    PORTCODE: "NF",
                                    BOEBalanceAmount: "NF",
                                    FreightCharges: "NF"
                                }])?.forEach(boeelement => {
                                    boedata.push({
                                        BOENO: boeelement['boeNumber'],
                                        BOEDATE: moment(boeelement['boeDate']).format("DD-MM-YYYY"),
                                        REGION: boeelement['origin'],
                                        FOBVALUE: boeelement['invoiceAmount'],
                                        PORTCODE: boeelement['iecCode'],
                                        BOEBalanceAmount: boeelement['balanceAmount'],
                                        FreightCharges: boeelement['freightAmount']
                                    })
                                });
                                let advice: any = [];
                                (element?.AdviceRef != 'NF' ? element?.AdviceRef : [{
                                    TTDATE: 'NF',
                                    TTUSD: 'NF',
                                    PaymentDate: 'NF',
                                    Amount: "NF",
                                    Currency: "NF",
                                    CCYRate: "NF",
                                    INRAmount: "NF",
                                    ORMREFNUMBERID: "NF",
                                    TOTALDEDUCTIONSDAMGESUSD: "NF",
                                    FINALAMOUNTUSD: "NF",
                                    DEBITNOTESTATUS: "NF",
                                    STATUSOFBOESUBMISSIONINBANK: "NF",
                                }])?.forEach(adviceelement => {
                                    advice.push({
                                        TTDATE: moment(adviceelement['date']).format("DD-MM-YYYY"),
                                        TTUSD: adviceelement['amount'],
                                        PaymentDate: adviceelement['amount'],
                                        Amount: adviceelement['amount'],
                                        Currency: adviceelement['currency'],
                                        CCYRate: adviceelement['amount'],
                                        INRAmount: adviceelement['amount'],
                                        ORMREFNUMBERID: adviceelement['billNo'],
                                        TOTALDEDUCTIONSDAMGESUSD: adviceelement['amount'],
                                        FINALAMOUNTUSD: adviceelement['amount'],
                                        DEBITNOTESTATUS: adviceelement['amount'],
                                        STATUSOFBOESUBMISSIONINBANK: adviceelement['amount'],
                                    })
                                });
                                await TableFormat['items'].push({
                                    DATE: moment(element['purchasedate']).format("DD-MM-YYYY"),
                                    INVOICENUMBER: element['pi_poNo'],
                                    INVOICEDATE: moment(element['date']).format("DD-MM-YYYY"),
                                    SELLERNAMES: element['benneName'],
                                    INVOICECURRENCY: element['currency'],
                                    BRANCH: element['location'],
                                    COMMODITY: element['commodity'],
                                    BALANCEIFANY: element['amount'],
                                    Expansion_Items: boedata,
                                    Expansion_Items2: advice,
                                    isExpand: false,
                                    isExpand2: false,
                                    disabled: element['deleteflag'] != '-1' ? false : true,
                                    RoleType: this.USER_RESULT?.RoleCheckbox
                                })
                            });

                            if (TableFormat['items']?.length != 0) {
                                TableFormat['Objectkeys'] = await Object.keys(TableFormat['items'][0])?.filter((item: any) => item != 'isExpand')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'isExpand2')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'disabled')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'RoleType')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'Expansion_Items')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'Expansion_Items2');
                                TableFormat['ExpansionKeys'] = await Object.keys(TableFormat['items'][0]['Expansion_Items'][0])
                                TableFormat['ExpansionKeys2'] = await TableFormat['items'][0]['Expansion_Items2'].length != 0 ? Object.keys(TableFormat['items'][0]['Expansion_Items2'][0]) : []
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            } else {
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            }
                        });
                    });
                })
            },
            commercials: async () => {
                return new Promise((resolve, reject) => {
                    TableFormat = {
                        header: [
                            "Pipo No.",
                            "DATE",
                            "Commercial Invoice No.",
                            "Advance No.",
                            "Currency",
                            "Amount",
                            "Beneficiary Name",
                            "Action"],
                        items: [],
                        Expansion_header: [
                            "BOE NO",
                            "BOE DATE",
                            "REGION",
                            "FOB VALUE",
                            "PORT CODE",
                            "BOE Balance Amount",
                            "Freight Charges"
                        ],
                        Expansion_header2: [
                            "TT DATE",
                            "TT USD",
                            "Payment Date",
                            "Amount",
                            "Currency",
                            "CCY Rate",
                            "INR Amount",
                            "ORM REF NUMBER/ID",
                            "TOTAL DEDUCTIONS/DAMGES/USD",
                            "FINAL AMOUNT - USD",
                            "DEBIT NOTE STATUS",
                            "STATUS OF BOE SUBMISSION IN BANK"
                        ],
                        Expansion_Items: [],
                        Expansion_Items2: [],
                        Objectkeys: [],
                        ExpansionKeys: [],
                        ExpansionKeys2: [],
                        TableHeaderClass: [
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-2",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-2",
                        ],
                        eventId: '0',
                        PageSize: 0
                    }
                    this.filteranytablepagination.PaginationfilterAnyTable(Query, PageFilter, 'commercials').subscribe((res: any) => {
                        console.log("PaginationfilterAnyTable", res);
                        TableFormat['PageSize'] = res?.TOTAL_PAGE
                        TableFormat['items'] = [];
                        TableFormat['Expansion_Items'] = [];
                        this.removeEmpty(res?.data).then(async (newdata: any) => {
                            await newdata?.forEach(async (element) => {
                                let boedata: any = [];
                                (element?.BoeRef != 'NF' ? element?.BoeRef : [{
                                    BOENO: "NF",
                                    BOEDATE: "NF",
                                    REGION: "NF",
                                    FOBVALUE: "NF",
                                    PORTCODE: "NF",
                                    BOEBalanceAmount: "NF",
                                    FreightCharges: "NF"
                                }])?.forEach(boeelement => {
                                    boedata.push({
                                        BOENO: boeelement['boeNumber'],
                                        BOEDATE: moment(boeelement['boeDate']).format("DD-MM-YYYY"),
                                        REGION: boeelement['origin'],
                                        FOBVALUE: boeelement['invoiceAmount'],
                                        PORTCODE: boeelement['iecCode'],
                                        BOEBalanceAmount: boeelement['balanceAmount'] != "-1" ? boeelement['balanceAmount'] : boeelement['invoiceAmount'],
                                        FreightCharges: boeelement['freightAmount']
                                    })
                                });
                                let advice: any = [];
                                (element?.ORM_Ref != 'NF' ? element?.ORM_Ref : [{
                                    TTDATE: 'NF',
                                    TTUSD: 'NF',
                                    PaymentDate: 'NF',
                                    Amount: "NF",
                                    Currency: "NF",
                                    CCYRate: "NF",
                                    INRAmount: "NF",
                                    ORMREFNUMBERID: "NF",
                                    TOTALDEDUCTIONSDAMGESUSD: "NF",
                                    FINALAMOUNTUSD: "NF",
                                    DEBITNOTESTATUS: "NF",
                                    STATUSOFBOESUBMISSIONINBANK: "NF",
                                }])?.forEach(adviceelement => {
                                    advice.push({
                                        TTDATE: moment(adviceelement['date']).format("DD-MM-YYYY"),
                                        TTUSD: adviceelement['amount'],
                                        PaymentDate: adviceelement['amount'],
                                        Amount: adviceelement['amount'],
                                        Currency: adviceelement['currency'],
                                        CCYRate: adviceelement['amount'],
                                        INRAmount: adviceelement['amount'],
                                        ORMREFNUMBERID: adviceelement['billNo'],
                                        TOTALDEDUCTIONSDAMGESUSD: adviceelement['amount'],
                                        FINALAMOUNTUSD: adviceelement['amount'],
                                        DEBITNOTESTATUS: adviceelement['amount'],
                                        STATUSOFBOESUBMISSIONINBANK: adviceelement['amount'],
                                    })
                                });
                                await TableFormat['items'].push({
                                    PipoNo: this.getPipoNumber(element['pipo']),
                                    commercialDate: moment(element['commercialDate']).format('DD-MM-YYYY'),
                                    commercialNumber: element['commercialNumber'],
                                    AdvanceNo: element['AdvanceNo'],
                                    AdvanceCurrency: element['currency'],
                                    AdvanceAmount: element['amount'],
                                    buyerName: element['buyerName'],
                                    Expansion_Items: boedata,
                                    Expansion_Items2: advice,
                                    isExpand: false,
                                    isExpand2: false,
                                    disabled: element['deleteflag'] != '-1' ? false : true,
                                    RoleType: this.USER_RESULT?.RoleCheckbox
                                })
                            });
                            if (TableFormat['items']?.length != 0) {
                                TableFormat['Objectkeys'] = await Object.keys(TableFormat['items'][0])?.filter((item: any) => item != 'isExpand')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'isExpand2')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'disabled')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'RoleType')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'Expansion_Items')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'Expansion_Items2');
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'ITEMS_STATUS')
                                TableFormat['ExpansionKeys'] = await Object.keys(TableFormat['items'][0]['Expansion_Items'][0])
                                TableFormat['ExpansionKeys2'] = await TableFormat['items'][0]['Expansion_Items2'].length != 0 ? Object.keys(TableFormat['items'][0]['Expansion_Items2'][0]) : []
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            } else {
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            }
                        });
                    });
                })
            },
            boerecords: async () => {
                return new Promise((resolve, reject) => {
                    TableFormat = {
                        header: [
                            "Pipo No.",
                            "DATE",
                            "CI NUMBER",
                            "BOE NUMBER",
                            "Beneficiary Name",
                            "CURRENCY",
                            "BOE AMOUNT",
                            "AVAILABLE BALANCE",
                            "Action"],
                        items: [],
                        Expansion_header: [
                            "AD CODE",
                            "AD BILL NO",
                            "IEC CODE",
                            "IEC NAME",
                            "ORIGIN",
                            "DISCHARGE PORT"
                        ],
                        Expansion_Items: [],
                        Objectkeys: [],
                        ExpansionKeys: [],
                        TableHeaderClass: [
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-2",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-2"
                        ],
                        eventId: 2,
                        Expansion_header2: [],
                        Expansion_Items2: [],
                        ExpansionKeys2: [],
                        PageSize: 0
                    }
                    this.filteranytablepagination.PaginationfilterAnyTable(Query, PageFilter, 'boerecords').subscribe((res: any) => {
                        console.log("PaginationfilterAnyTable", res);
                        TableFormat['PageSize'] = res?.TOTAL_PAGE
                        TableFormat['items'] = [];
                        TableFormat['Expansion_Items'] = [];
                        this.removeEmpty(res?.data).then(async (newdata: any) => {
                            await newdata?.forEach(async (element) => {
                                await TableFormat['items'].push({
                                    PipoNo: this.getPipoNumber(element['pipo']),
                                    date: moment(element['boeDate']).format('DD-MM-YYYY'),
                                    CINUMBER: element['commercialNumber'],
                                    BOENUMBER: element['boeNumber'],
                                    buyerName: element['benneName'],
                                    Currency: element['currency'],
                                    BOEAMOUNT: element['invoiceAmount'],
                                    balanceAvai: element['balanceAmount'] != '-1' ? element['balanceAmount'] : element['invoiceAmount'],
                                    isExpand: false,
                                    disabled: element['deleteflag'] != '-1' ? false : true,
                                    RoleType: this.USER_RESULT?.RoleCheckbox,
                                    Expansion_Items: [{
                                        adCode: element['adCode'],
                                        adBillNo: element['adBillNo'],
                                        IECCODE: element['iecCode'],
                                        IECNAME: element['iecName'],
                                        ORIGIN: element['origin'],
                                        DISCHARGEPORT: element['dischargePort']
                                    }]
                                })
                            });
                            if (TableFormat['items']?.length != 0) {
                                TableFormat['Objectkeys'] = await Object.keys(TableFormat['items'][0])?.filter((item: any) => item != 'isExpand')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'disabled')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'RoleType')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'Expansion_Items');
                                TableFormat['ExpansionKeys'] = await Object.keys(TableFormat['items'][0]['Expansion_Items'][0])
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            } else {
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            }
                        });
                    });
                })
            },
            airwayblcopies: async () => {
                return new Promise((resolve, reject) => {
                    TableFormat = {
                        header: [
                            "Pipo No.",
                            "DATE",
                            "BL/Airway No.",
                            "Beneficiary Name",
                            "Action"],
                        items: [],
                        Expansion_header: [],
                        Expansion_Items: [],
                        Objectkeys: [],
                        ExpansionKeys: [],
                        TableHeaderClass: [
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-2"
                        ],
                        eventId: '0',
                        PageSize: 0
                    }
                    this.filteranytablepagination.PaginationfilterAnyTable(Query, PageFilter, 'airwayblcopies').subscribe((res: any) => {
                        console.log("PaginationfilterAnyTable", res);
                        TableFormat['PageSize'] = res?.TOTAL_PAGE
                        TableFormat['items'] = [];
                        TableFormat['Expansion_Items'] = [];
                        this.removeEmpty(res?.data).then(async (newdata: any) => {
                            await newdata?.forEach(async (element) => {
                                await TableFormat['items'].push({
                                    PipoNo: this.getPipoNumber(element['pipo']),
                                    airwayBlCopyNumber: element['airwayBlCopyNumber'],
                                    airwayBlCopydate: moment(element['date']).format("DD-MM-YYYY"),
                                    buyerName: element['buyerName'],
                                    isExpand: false,
                                    disabled: element['deleteflag'] != '-1' ? false : true,
                                    RoleType: this.USER_RESULT?.RoleCheckbox
                                })
                            });
                            if (TableFormat['items']?.length != 0) {
                                TableFormat['Objectkeys'] = await Object.keys(TableFormat['items'][0])?.filter((item: any) => item != 'isExpand')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'disabled')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'RoleType')
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            } else {
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            }
                        });
                    });
                })
            },
            packinglists: async () => {
                return new Promise((resolve, reject) => {
                    TableFormat = {
                        header: [
                            "Pipo No.",
                            "DATE",
                            "Packing List No.",
                            "Beneficiary Name",
                            "Action"],
                        items: [],
                        Expansion_header: [],
                        Expansion_Items: [],
                        Objectkeys: [],
                        ExpansionKeys: [],
                        TableHeaderClass: [
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-2",
                            "col-td-th-2",
                        ],
                        eventId: '',
                        PageSize: 0
                    }
                    this.filteranytablepagination.PaginationfilterAnyTable(Query, PageFilter, 'packinglists').subscribe((res: any) => {
                        console.log("PaginationfilterAnyTable", res);
                        TableFormat['PageSize'] = res?.TOTAL_PAGE
                        TableFormat['items'] = [];
                        TableFormat['Expansion_Items'] = [];
                        this.removeEmpty(res?.data).then(async (newdata: any) => {
                            await newdata?.forEach(async (element) => {
                                await TableFormat['items'].push({
                                    PipoNo: this.getPipoNumber(element['pipo']),
                                    packingListDate: moment(element['packingListDate']).format("DD-MM-YYYY"),
                                    packingListNumber: element['packingListNumber'],
                                    buyerName: element['buyerName'],
                                    isExpand: false,
                                    disabled: element['deleteflag'] != '-1' ? false : true,
                                    RoleType: this.USER_RESULT?.RoleCheckbox
                                })
                            });
                            if (TableFormat['items']?.length != 0) {
                                TableFormat['Objectkeys'] = await Object.keys(TableFormat['items'][0])?.filter((item: any) => item != 'isExpand')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'disabled')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'RoleType')
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            } else {
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            }
                        });
                    });
                })
            },
            CertificateOfOrigin: async () => {
                return new Promise((resolve, reject) => {
                    TableFormat = {
                        header: [
                            "Pipo No.",
                            "DATE",
                            "COI Ref No.",
                            "CI No.",
                            "Action"],
                        items: [],
                        Expansion_header: [],
                        Expansion_Items: [],
                        Objectkeys: [],
                        ExpansionKeys: [],
                        TableHeaderClass: [
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                        ],
                        eventId: '',
                        PageSize: 0
                    }
                    this.filteranytablepagination.PaginationfilterAnyTable(Query, PageFilter, 'CertificateOfOrigin').subscribe((res: any) => {
                        console.log("PaginationfilterAnyTable", res);
                        TableFormat['PageSize'] = res?.TOTAL_PAGE
                        TableFormat['items'] = [];
                        TableFormat['Expansion_Items'] = [];
                        this.removeEmpty(res?.data).then(async (newdata: any) => {
                            await newdata?.forEach(async (element) => {
                                await TableFormat['items'].push({
                                    PipoNo: this.getPipoNumber(element['pipo']),
                                    date: moment(element['date']).format("DD-MM-YYYY"),
                                    COIREF: element['CertificateOriginNumber'],
                                    CommercialNumber: element['CommercialNumber']?.value,
                                    isExpand: false,
                                    disabled: element['deleteflag'] != '-1' ? false : true,
                                    RoleType: this.USER_RESULT?.RoleCheckbox
                                })
                            });
                            if (TableFormat['items']?.length != 0) {
                                TableFormat['Objectkeys'] = await Object.keys(TableFormat['items'][0])?.filter((item: any) => item != 'isExpand')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'disabled')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'RoleType')
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            } else {
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            }
                        });
                    });
                })
            },
            billofexchanges: async () => {
                return new Promise((resolve, reject) => {
                    TableFormat = {
                        header: [
                            "Pipo No.",
                            "DATE",
                            "Bill Of Ex. No.",
                            "Beneficiary Name",
                            "Action"],
                        items: [],
                        Expansion_header: [],
                        Expansion_Items: [],
                        Objectkeys: [],
                        ExpansionKeys: [],
                        TableHeaderClass: [
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-2",
                        ],
                        eventId: '',
                        PageSize: 0
                    }
                    this.filteranytablepagination.PaginationfilterAnyTable(Query, PageFilter, 'billofexchanges').subscribe((res: any) => {
                        console.log("PaginationfilterAnyTable", res);
                        TableFormat['PageSize'] = res?.TOTAL_PAGE
                        TableFormat['items'] = [];
                        TableFormat['Expansion_Items'] = [];
                        this.removeEmpty(res?.data).then(async (newdata: any) => {
                            await newdata?.forEach(async (element) => {
                                await TableFormat['items'].push({
                                    PipoNo: this.getPipoNumber(element['pipo']),
                                    billOfExchangeDate: moment(element['billOfExchangeDate']).format("DD-MM-YYYY"),
                                    billExchangeNumber: element['billExchangeNumber'],
                                    buyerName: element['buyerName'],
                                    isExpand: false,
                                    disabled: element['deleteflag'] != '-1' ? false : true,
                                    RoleType: this.USER_RESULT?.RoleCheckbox
                                })
                            });
                            if (TableFormat['items']?.length != 0) {
                                TableFormat['Objectkeys'] = await Object.keys(TableFormat['items'][0])?.filter((item: any) => item != 'isExpand')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'disabled')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'RoleType')
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            } else {
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            }
                        });
                    });
                })
            },
            creditNote: async () => {
                return new Promise((resolve, reject) => {
                    TableFormat = {
                        header: [
                            "Pipo No.",
                            "DATE",
                            "C N No.",
                            "C N Amount",
                            "CURRENCY",
                            "Beneficiary Name",
                            "Action"],
                        items: [],
                        Expansion_header: [],
                        Expansion_Items: [],
                        Objectkeys: [],
                        ExpansionKeys: [],
                        TableHeaderClass: [
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-2",
                            "col-td-th-1"
                        ],
                        eventId: '',
                        PageSize: 0
                    }
                    this.filteranytablepagination.PaginationfilterAnyTable(Query, PageFilter, 'creditNote').subscribe((res: any) => {
                        console.log("PaginationfilterAnyTable", res);
                        TableFormat['PageSize'] = res?.TOTAL_PAGE
                        TableFormat['items'] = [];
                        TableFormat['Expansion_Items'] = [];
                        this.removeEmpty(res?.data).then(async (newdata: any) => {
                            await newdata?.forEach(async (element) => {
                                await TableFormat['items'].push({
                                    PipoNo: this.getPipoNumber(element['pipo']),
                                    date: moment(element['date']).format('DD-MM-YYYY'),
                                    creditNoteNumber: element['creditNoteNumber'],
                                    creditNoteAmount: element['creditNoteAmount'],
                                    currency: element['currency'],
                                    buyerName: element['buyerName'],
                                    isExpand: false,
                                    disabled: element['deleteflag'] != '-1' ? false : true,
                                    RoleType: this.USER_RESULT?.RoleCheckbox
                                })
                            });
                            if (TableFormat['items']?.length != 0) {
                                TableFormat['Objectkeys'] = await Object.keys(TableFormat['items'][0])?.filter((item: any) => item != 'isExpand')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'disabled')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'RoleType')
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            } else {
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            }
                        });
                    });
                })
            },
            debitnotes: async () => {
                return new Promise((resolve, reject) => {
                    TableFormat = {
                        header: [
                            "Pipo No.",
                            "DATE",
                            "CI No.",
                            "D N No.",
                            "D N Amount",
                            "CURRENCY",
                            "Buyer Name",
                            "Action"],
                        items: [],
                        Expansion_header: [],
                        Expansion_Items: [],
                        Objectkeys: [],
                        ExpansionKeys: [],
                        TableHeaderClass: [
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1"
                        ],
                        eventId: '',
                        PageSize: 0
                    }
                    this.filteranytablepagination.PaginationfilterAnyTable(Query, PageFilter, 'debitnotes').subscribe((res: any) => {
                        console.log("PaginationfilterAnyTable", res);
                        TableFormat['PageSize'] = res?.TOTAL_PAGE
                        TableFormat['items'] = [];
                        TableFormat['Expansion_Items'] = [];
                        this.removeEmpty(res?.data).then(async (newdata: any) => {
                            await newdata?.forEach(async (element) => {
                                await TableFormat['items'].push({
                                    PipoNo: this.getPipoNumber(element['pipo']),
                                    date: moment(element['date']).format('DD-MM-YYYY'),
                                    commercialNumber: element['commercialNumber'],
                                    debitNoteNumber: element['debitNoteNumber'],
                                    DebitAmount: element['totalDebitAmount'],
                                    currency: element['currency'],
                                    buyerName: element['buyerName'],
                                    isExpand: false,
                                    disabled: element['deleteflag'] != '-1' ? false : true,
                                    RoleType: this.USER_RESULT?.RoleCheckbox
                                })
                            });
                            if (TableFormat['items']?.length != 0) {
                                TableFormat['Objectkeys'] = await Object.keys(TableFormat['items'][0])?.filter((item: any) => item != 'isExpand')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'disabled')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'RoleType')
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            } else {
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            }
                        });
                    });
                })
            },
            insurances: async () => {
                return new Promise((resolve, reject) => {
                    TableFormat = {
                        header: [
                            "Pipo No.",
                            "DATE",
                            "IP No.",
                            "Start Date",
                            "Expiry Date",
                            "IP Amount",
                            "CURRENCY",
                            "Beneficiary Name",
                            "Action"],
                        items: [],
                        Expansion_header: [],
                        Expansion_Items: [],
                        Objectkeys: [],
                        ExpansionKeys: [],
                        TableHeaderClass: [
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-2"
                        ],
                        eventId: '',
                        PageSize: 0
                    }
                    this.filteranytablepagination.PaginationfilterAnyTable(Query, PageFilter, 'insurances').subscribe((res: any) => {
                        console.log("PaginationfilterAnyTable", res);
                        TableFormat['PageSize'] = res?.TOTAL_PAGE
                        TableFormat['items'] = [];
                        TableFormat['Expansion_Items'] = [];
                        this.removeEmpty(res?.data).then(async (newdata: any) => {
                            await newdata?.forEach(async (element) => {
                                await TableFormat['items'].push({
                                    PipoNo: this.getPipoNumber(element['UtilizationAddition']),
                                    date: moment(element['date']).format("DD-MM-YYYY"),
                                    insuranceNumber: element['insuranceNumber'],
                                    StartDate: moment(element['StartDate']).format("DD-MM-YYYY"),
                                    Expirydate: moment(element['Expirydate']).format("DD-MM-YYYY"),
                                    insuranceAmount: element['insuranceAmount'],
                                    currency: element['currency'],
                                    buyerName: this.getPipoBuyerName(element['UtilizationAddition']),
                                    isExpand: false,
                                    disabled: element['deleteflag'] != '-1' ? false : true,
                                    RoleType: this.USER_RESULT?.RoleCheckbox
                                })
                            });
                            if (TableFormat['items']?.length != 0) {
                                TableFormat['Objectkeys'] = await Object.keys(TableFormat['items'][0])?.filter((item: any) => item != 'isExpand')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'disabled')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'RoleType')
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            } else {
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            }
                        });
                    });
                })
            },
            letterlcs: async () => {
                return new Promise((resolve, reject) => {
                    TableFormat = {
                        header: [
                            "Pipo No.",
                            "DATE",
                            "L C No.",
                            "L C Amount",
                            "CURRENCY",
                            "Beneficiary Name",
                            "Action"],
                        items: [],
                        Expansion_header: [],
                        Expansion_Items: [],
                        Objectkeys: [],
                        ExpansionKeys: [],
                        TableHeaderClass: [
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-2",
                        ],
                        eventId: '',
                        PageSize: 0
                    }
                    this.filteranytablepagination.PaginationfilterAnyTable(Query, PageFilter, 'letterlcs').subscribe((res: any) => {
                        console.log("PaginationfilterAnyTable", res);
                        TableFormat['PageSize'] = res?.TOTAL_PAGE
                        TableFormat['items'] = [];
                        TableFormat['Expansion_Items'] = [];
                        this.removeEmpty(res?.data).then(async (newdata: any) => {
                            await newdata?.forEach(async (element) => {
                                await TableFormat['items'].push({
                                    PipoNo: this.getPipoNumber(element['pipo']),
                                    date: moment(element['date']).format('DD-MM-YYYY'),
                                    letterOfCreditNumber: element['letterOfCreditNumber'],
                                    letterOfCreditAmount: element['letterOfCreditAmount'],
                                    currency: element['currency'],
                                    buyerName: element['buyerName'],
                                    isExpand: false,
                                    disabled: element['deleteflag'] != '-1' ? false : true,
                                    RoleType: this.USER_RESULT?.RoleCheckbox
                                })
                            });
                            if (TableFormat['items']?.length != 0) {
                                TableFormat['Objectkeys'] = await Object.keys(TableFormat['items'][0])?.filter((item: any) => item != 'isExpand')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'disabled')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'RoleType')
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            } else {
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            }
                        });
                    });
                })
            },
            masterservices: async () => {
                return new Promise((resolve, reject) => {
                    TableFormat = {
                        header: [
                            "Pipo No.",
                            "DATE",
                            "M S A No.",
                            "Start Date",
                            "Expiry Date",
                            "Overseas Party Name",
                            "M S A Amount",
                            "CURRENCY",
                            "Beneficiary Name",
                            "Action"],
                        items: [],
                        Expansion_header: [],
                        Expansion_Items: [],
                        Objectkeys: [],
                        ExpansionKeys: [],
                        TableHeaderClass: [
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-2",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-2",
                        ],
                        eventId: '',
                        PageSize: 0
                    }
                    this.filteranytablepagination.PaginationfilterAnyTable(Query, PageFilter, 'masterservices').subscribe((res: any) => {
                        console.log("PaginationfilterAnyTable", res);
                        TableFormat['PageSize'] = res?.TOTAL_PAGE
                        TableFormat['items'] = [];
                        TableFormat['Expansion_Items'] = [];
                        this.removeEmpty(res?.data).then(async (newdata: any) => {
                            await newdata?.forEach(async (element) => {
                                await TableFormat['items'].push({
                                    PipoNo: this.getPipoNumber(element['UtilizationAddition']),
                                    date: element['date'],
                                    masterServiceNumber: element['masterServiceNumber'],
                                    StartDate: moment(element['StartDate']).format("DD-MM-YYYY"),
                                    Expirydate: moment(element['Expirydate']).format("DD-MM-YYYY"),
                                    PartyName: element['PartyName']?.value,
                                    masterServiceAmount: element['masterServiceAmount'],
                                    currency: element['currency'],
                                    buyerName: this.getPipoBuyerName(element['UtilizationAddition']),
                                    isExpand: false,
                                    disabled: element['deleteflag'] != '-1' ? false : true,
                                    RoleType: this.USER_RESULT?.RoleCheckbox
                                })
                            });
                            if (TableFormat['items']?.length != 0) {
                                TableFormat['Objectkeys'] = await Object.keys(TableFormat['items'][0])?.filter((item: any) => item != 'isExpand')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'disabled')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'RoleType')
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            } else {
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            }
                        });
                    });
                })
            },
            thirdparties: async () => {
                return new Promise((resolve, reject) => {
                    TableFormat = {
                        header: [
                            "Pipo No.",
                            "DATE",
                            "T P A No.",
                            "T P A Amount",
                            "CURRENCY",
                            "Beneficiary Name",
                            "Action"],
                        items: [],
                        Expansion_header: [],
                        Expansion_Items: [],
                        Objectkeys: [],
                        ExpansionKeys: [],
                        TableHeaderClass: [
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-2"
                        ],
                        eventId: '',
                        PageSize: 0
                    }
                    this.filteranytablepagination.PaginationfilterAnyTable(Query, PageFilter, 'thirdparties').subscribe((res: any) => {
                        console.log("PaginationfilterAnyTable", res);
                        TableFormat['PageSize'] = res?.TOTAL_PAGE
                        TableFormat['items'] = [];
                        TableFormat['Expansion_Items'] = [];
                        this.removeEmpty(res?.data).then(async (newdata: any) => {
                            await newdata?.forEach(async (element) => {
                                await TableFormat['items'].push({
                                    PipoNo: this.getPipoNumber(element['pipo']),
                                    date: moment(element['date']).format('DD-MM-YYYY'),
                                    triPartyAgreementNumber: element['triPartyAgreementNumber'],
                                    triPartyAgreementAmount: element['triPartyAgreementAmount'],
                                    currency: element['currency'],
                                    buyerName: element['buyerName'],
                                    isExpand: false,
                                    disabled: element['deleteflag'] != '-1' ? false : true,
                                    RoleType: this.USER_RESULT?.RoleCheckbox
                                })
                            });
                            if (TableFormat['items']?.length != 0) {
                                TableFormat['Objectkeys'] = await Object.keys(TableFormat['items'][0])?.filter((item: any) => item != 'isExpand')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'disabled')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'RoleType')
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            } else {
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            }
                        });
                    });
                })
            },
            opinionreports: async () => {
                return new Promise((resolve, reject) => {
                    TableFormat = {
                        header: [
                            "DATE",
                            "O R No.",
                            "Foreign Party Name",
                            "Report Date",
                            "Report Ratings",
                            "Beneficiary Name",
                            "Ageing Days",
                            "Action"],
                        items: [],
                        Expansion_header: [],
                        Expansion_Items: [],
                        Objectkeys: [],
                        ExpansionKeys: [],
                        TableHeaderClass: [
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-2",
                            "col-td-th-2",
                            "col-td-th-2",
                            "col-td-th-2",
                        ],
                        eventId: '',
                        PageSize: 0
                    }
                    this.filteranytablepagination.PaginationfilterAnyTable(Query, PageFilter, 'opinionreports').subscribe((res: any) => {
                        console.log("PaginationfilterAnyTable", res);
                        TableFormat['PageSize'] = res?.TOTAL_PAGE
                        TableFormat['items'] = [];
                        TableFormat['Expansion_Items'] = [];
                        this.removeEmpty(res?.data).then(async (newdata: any) => {
                            await newdata?.forEach(async (element) => {
                                await TableFormat['items'].push({
                                    date: moment(element['date']).format("DD-MM-YYYY"),
                                    opinionReportNumber: element['opinionReportNumber'],
                                    ForeignPartyName: element['ForeignPartyName']?.value,
                                    ReportDate: element['ReportDate'],
                                    ReportRatings: element['ReportRatings'],
                                    buyerName: element['buyerName'],
                                    AgeingDays: this.SubtractDates(new Date(element['ReportDate']), new Date()),
                                    isExpand: false,
                                    disabled: element['deleteflag'] != '-1' ? false : true,
                                    RoleType: this.USER_RESULT?.RoleCheckbox
                                })
                            });
                            if (TableFormat['items']?.length != 0) {
                                TableFormat['Objectkeys'] = await Object.keys(TableFormat['items'][0])?.filter((item: any) => item != 'isExpand')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'disabled')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'RoleType')
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            } else {
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            }
                        });
                    });
                })
            },
            Inward_remittance: async () => {
                return new Promise((resolve, reject) => {
                    this.filteranytablepagination.PaginationfilterAnyTable(Query, PageFilter, 'Inward_remittance').subscribe((res: any) => {
                        if (ExtraData == "DisposalSubmitted") {
                            TableFormat = {
                                header: [
                                    "BankName",
                                    "PI/PO No.",
                                    "Ref_Number",
                                    "Submitted date",
                                    "Currency",
                                    "Amount",
                                    "Remitter_Name",
                                    "Amount Claimed",
                                    "Balance Amount",
                                    "Action"],
                                items: [],
                                Expansion_header: [],
                                Expansion_Items: [],
                                Objectkeys: [],
                                ExpansionKeys: [],
                                TableHeaderClass: [
                                    "col-td-th-1",
                                    "col-td-th-1",
                                    "col-td-th-1",
                                    "col-td-th-2",
                                    "col-td-th-1",
                                    "col-td-th-1",
                                    "col-td-th-2",
                                    "col-td-th-2",
                                    "col-td-th-2",
                                ],
                                eventId: '',
                                PageSize: 0
                            }
                            TableFormat['PageSize'] = res?.TOTAL_PAGE
                            TableFormat['items'] = [];
                            TableFormat['Expansion_Items'] = [];
                            this.removeEmpty(res?.data).then(async (newdata: any) => {
                                await newdata?.forEach(async (element) => {
                                    await TableFormat['items'].push({
                                        BankName: element['BankName'],
                                        Pipo: this.getPipoNumber(element['pipoRef']),
                                        Inward_reference_number: element['Inward_reference_number'],
                                        date: moment(new Date(element?.updatedAt)).format("DD-MM-YYYY"),
                                        currency: element['currency'],
                                        amount: element['amount'],
                                        Remitter_Name: element['Remitter_Name'],
                                        Inward_amount_for_disposal: element['Inward_amount_for_disposal'] != undefined ? element['Inward_amount_for_disposal'] : 0,
                                        BalanceAmount: parseFloat(element['amount']) - parseFloat(element['Inward_amount_for_disposal'] != undefined ? element['Inward_amount_for_disposal'] : 0),
                                        isExpand: false,
                                        disabled: element['deleteflag'] != '-1' ? false : true,
                                        RoleType: this.USER_RESULT?.RoleCheckbox
                                    })
                                })
                                if (TableFormat['items']?.length != 0) {
                                    TableFormat['Objectkeys'] = await Object.keys(TableFormat['items'][0])?.filter((item: any) => item != 'isExpand')
                                    TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'disabled')
                                    TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'RoleType')
                                    resolve(TableFormat);
                                    this.TABLE_CONTROLLER_DATA = res?.data;
                                    this.SHOW_TABLE_TBODY = true;
                                } else {
                                    resolve(TableFormat);
                                    this.TABLE_CONTROLLER_DATA = res?.data;
                                    this.SHOW_TABLE_TBODY = true;
                                }
                            });
                            console.log("PaginationfilterAnyTable", res, ExtraData);
                        } else if (ExtraData == "PendingCaliming") {
                            TableFormat = {
                                header: [
                                    "BankName",
                                    "Ref_Number",
                                    "Currency",
                                    "Amount",
                                    "Remitter_Name",
                                    "Amount Claimed",
                                    "Balance Amount",
                                    "Action"],
                                items: [],
                                Expansion_header: [],
                                Expansion_Items: [],
                                Objectkeys: [],
                                ExpansionKeys: [],
                                TableHeaderClass: [
                                    "col-td-th-1",
                                    "col-td-th-1",
                                    "col-td-th-1",
                                    "col-td-th-1",
                                    "col-td-th-2",
                                    "col-td-th-2",
                                    "col-td-th-2",
                                ],
                                eventId: '',
                                PageSize: 0
                            }
                            TableFormat['PageSize'] = res?.TOTAL_PAGE
                            TableFormat['items'] = [];
                            TableFormat['Expansion_Items'] = [];
                            this.removeEmpty(res?.data).then(async (newdata: any) => {
                                await newdata?.forEach(async (element) => {
                                    await TableFormat['items'].push({
                                        BankName: element['BankName'],
                                        Inward_reference_number: element['Inward_reference_number'],
                                        currency: element['currency'],
                                        amount: element['amount'],
                                        Remitter_Name: element['Remitter_Name'],
                                        Inward_amount_for_disposal: element['Inward_amount_for_disposal'] != undefined ? element['Inward_amount_for_disposal'] : 0,
                                        BalanceAmount: parseFloat(element['amount']) - parseFloat(element['Inward_amount_for_disposal'] != undefined ? element['Inward_amount_for_disposal'] : 0),
                                        isExpand: false,
                                        disabled: element['deleteflag'] != '-1' ? false : true,
                                        RoleType: this.USER_RESULT?.RoleCheckbox
                                    })
                                })
                                if (TableFormat['items']?.length != 0) {
                                    TableFormat['Objectkeys'] = await Object.keys(TableFormat['items'][0])?.filter((item: any) => item != 'isExpand')
                                    TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'disabled')
                                    TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'RoleType')
                                    resolve(TableFormat);
                                    this.TABLE_CONTROLLER_DATA = res?.data;
                                    this.SHOW_TABLE_TBODY = true;
                                } else {
                                    resolve(TableFormat);
                                    this.TABLE_CONTROLLER_DATA = res?.data;
                                    this.SHOW_TABLE_TBODY = true;
                                }
                                console.log("PaginationfilterAnyTable", res, newdata, ExtraData);
                            });
                        } else if (ExtraData == "Processed") {
                            TableFormat = {
                                header: [
                                    "BankName",
                                    "PI/PO No.",
                                    "FIRX No.",
                                    "Ref_Number",
                                    "Currency",
                                    "Amount",
                                    "Remitter_Name",
                                    "Amount Claimed",
                                    "Balance Amount",
                                    "Action"],
                                items: [],
                                Expansion_header: [],
                                Expansion_Items: [],
                                Objectkeys: [],
                                ExpansionKeys: [],
                                TableHeaderClass: [
                                    "col-td-th-1",
                                    "col-td-th-1",
                                    "col-td-th-1",
                                    "col-td-th-1",
                                    "col-td-th-1",
                                    "col-td-th-2",
                                    "col-td-th-2",
                                    "col-td-th-2",
                                ],
                                eventId: '',
                                PageSize: 0
                            }
                            TableFormat['PageSize'] = res?.TOTAL_PAGE
                            TableFormat['items'] = [];
                            TableFormat['Expansion_Items'] = [];
                            this.removeEmpty(res?.data).then(async (newdata: any) => {
                                await newdata?.forEach(async (element) => {
                                    await TableFormat['items'].push({
                                        BankName: element['BankName'],
                                        Pipo: this.getPipoNumber(element['pipoRef']),
                                        FirxNo: this.getFIRXNumber(element['AdviceRef']),
                                        Inward_reference_number: element['Inward_reference_number'],
                                        currency: element['currency'],
                                        amount: element['amount'],
                                        Remitter_Name: element['Remitter_Name'],
                                        Inward_amount_for_disposal: element['Inward_amount_for_disposal'] != undefined ? element['Inward_amount_for_disposal'] : 0,
                                        BalanceAmount: parseFloat(element['amount']) - parseFloat(element['Inward_amount_for_disposal'] != undefined ? element['Inward_amount_for_disposal'] : 0),
                                        isExpand: false,
                                        disabled: element['deleteflag'] != '-1' ? false : true,
                                        RoleType: this.USER_RESULT?.RoleCheckbox
                                    })
                                })
                                if (TableFormat['items']?.length != 0) {
                                    TableFormat['Objectkeys'] = await Object.keys(TableFormat['items'][0])?.filter((item: any) => item != 'isExpand')
                                    TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'disabled')
                                    TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'RoleType')
                                    resolve(TableFormat);
                                    this.TABLE_CONTROLLER_DATA = res?.data;
                                    this.SHOW_TABLE_TBODY = true;
                                } else {
                                    resolve(TableFormat);
                                    this.TABLE_CONTROLLER_DATA = res?.data;
                                    this.SHOW_TABLE_TBODY = true;
                                }
                            });
                            console.log("PaginationfilterAnyTable", res, ExtraData);
                        }
                    });
                })
            },
            iradvices: async () => {
                return new Promise((resolve, reject) => {
                    TableFormat = {
                        header: [
                            "Pipo No.",
                            "DATE",
                            "BOE Number",
                            "Party Name",
                            "Currency",
                            "TT Amount",
                            "Ref No.",
                            "Available Balance",
                            "Action"],
                        items: [],
                        Expansion_header: [
                            "Branch",
                            "Description",
                            "Payment Date",
                            "Commission/Bank Charges",
                            "Payment Amount",
                            "Conversion Date",
                            "Conversion Rate",
                            "Converted Amount",
                            "Payment Type"
                        ],
                        Expansion_Items: [],
                        Objectkeys: [],
                        ExpansionKeys: [],
                        TableHeaderClass: [
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-2",
                            "col-td-th-1"
                        ],
                        eventId: '',
                        PageSize: 0
                    }
                    this.filteranytablepagination.PaginationfilterAnyTable(Query, PageFilter, 'iradvices').subscribe((res: any) => {
                        console.log("PaginationfilterAnyTable", res);
                        TableFormat['PageSize'] = res?.TOTAL_PAGE
                        TableFormat['items'] = [];
                        TableFormat['Expansion_Items'] = [];
                        res?.data?.forEach(element => {
                            let BOE_NO: any = [];
                            element?.BOE_Ref?.forEach(BOE_Element => {
                                BOE_NO.push(BOE_Element?.boeNumber)
                            });
                            element['BOENO'] = BOE_NO?.join(',')
                        });
                        this.removeEmpty(res?.data).then(async (newdata: any) => {
                            await newdata?.forEach(async (element) => {
                                await TableFormat['items'].push({
                                    PipoNo: this.getPipoNumber(element['pipo']),
                                    date: moment(element['date']).format("DD-MM-YYYY"),
                                    boeno: element['BOENO'],
                                    beneficiaryName: element['beneficiaryName'],
                                    currency: element['currency'],
                                    amount: element['amount'],
                                    billNo: element['billNo'],
                                    BalanceAvail: element['BalanceAvail'] != '-1' ? element['BalanceAvail'] : element['amount'],
                                    Expansion_Items: [{
                                        Branch: element['location'],
                                        Description: element['commodity'],
                                        RecievedDate: moment(element['recievedDate']).format("DD-MM-YYYY"),
                                        CommissionBankCharges: element['commision'],
                                        RecievedAmountUSD: element['recUSD'],
                                        ConversionDate: moment(element['conversionDate']).format("DD-MM-YYYY"),
                                        ConversionRate: element['exchangeRate'],
                                        ConvertedAmount: element['convertedAmount'],
                                        PaymentType: element['PaymentType'],
                                    }],
                                    isExpand: false,
                                    disabled: element['deleteflag'] != '-1' ? false : true,
                                    RoleType: this.USER_RESULT?.RoleCheckbox
                                })
                            });
                            if (TableFormat['items']?.length != 0) {
                                TableFormat['Objectkeys'] = await Object.keys(TableFormat['items'][0])?.filter((item: any) => item != 'isExpand')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'disabled')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'RoleType')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'Expansion_Items')
                                TableFormat['ExpansionKeys'] = await Object.keys(TableFormat['items'][0]['Expansion_Items'][0])
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            } else {
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            }
                        });
                    });
                })


            },
            destructions: async () => {
                return new Promise((resolve, reject) => {
                    TableFormat = {
                        header: [
                            "Pipo No.",
                            "DATE",
                            "Destruction Certificate No.",
                            "Beneficiary Name",
                            "Action"],
                        items: [],
                        Expansion_header: [],
                        Expansion_Items: [],
                        Objectkeys: [],
                        ExpansionKeys: [],
                        TableHeaderClass: [
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-2",
                            "col-td-th-2"
                        ],
                        eventId: '',
                        PageSize: 0
                    }
                    this.filteranytablepagination.PaginationfilterAnyTable(Query, PageFilter, 'destructions').subscribe((res: any) => {
                        console.log("PaginationfilterAnyTable", res);
                        TableFormat['PageSize'] = res?.TOTAL_PAGE
                        TableFormat['items'] = [];
                        TableFormat['Expansion_Items'] = [];
                        this.removeEmpty(res?.data).then(async (newdata: any) => {
                            await newdata?.forEach(async (element) => {
                                await TableFormat['items'].push({
                                    PipoNo: this.getPipoNumber(element['pipo']),
                                    destructionDate: moment(element['destructionDate']).format('DD-MM-YYYY'),
                                    destructionNumber: element['destructionNumber'],
                                    buyerName: element['buyerName'],
                                    isExpand: false,
                                    disabled: element['deleteflag'] != '-1' ? false : true,
                                    RoleType: this.USER_RESULT?.RoleCheckbox
                                })
                            });
                            if (TableFormat['items']?.length != 0) {
                                TableFormat['Objectkeys'] = await Object.keys(TableFormat['items'][0])?.filter((item: any) => item != 'isExpand')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'disabled')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'RoleType')
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            } else {
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            }
                        });
                    });
                })
            },
            blCopy: async () => {
                return new Promise((resolve, reject) => {
                    TableFormat = {
                        header: [
                            "Pipo No.",
                            "DATE",
                            "blcopy Ref No.",
                            "Amount",
                            "Beneficiary Name",
                            "Action"],
                        items: [],
                        Expansion_header: [],
                        Expansion_Items: [],
                        Objectkeys: [],
                        ExpansionKeys: [],
                        TableHeaderClass: [
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-2",
                            "col-td-th-1",
                            "col-td-th-2",
                        ],
                        eventId: '',
                        PageSize: 0
                    }
                    this.filteranytablepagination.PaginationfilterAnyTable(Query, PageFilter, 'blCopy').subscribe((res: any) => {
                        console.log("PaginationfilterAnyTable", res);
                        TableFormat['PageSize'] = res?.TOTAL_PAGE
                        TableFormat['items'] = [];
                        TableFormat['Expansion_Items'] = [];
                        this.removeEmpty(res?.data).then(async (newdata: any) => {
                            await newdata?.forEach(async (element) => {
                                await TableFormat['items'].push({
                                    PipoNo: this.getPipoNumber(element['pipo']),
                                    date: moment(element['date']).format('DD-MM-YYYY'),
                                    blcopyrefNumber: element['blcopyrefNumber'],
                                    amount: element['amount'],
                                    buyerName: element['buyerName'],
                                    isExpand: false,
                                    disabled: element['deleteflag'] != '-1' ? false : true,
                                    RoleType: this.USER_RESULT?.RoleCheckbox
                                })
                            });
                            if (TableFormat['items']?.length != 0) {
                                TableFormat['Objectkeys'] = await Object.keys(TableFormat['items'][0])?.filter((item: any) => item != 'isExpand')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'disabled')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'RoleType')
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            } else {
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            }
                        });
                    });
                })
            },
            EBRC: async () => {
                return new Promise((resolve, reject) => {
                    TableFormat = {
                        header: [
                            "Pipo No.",
                            "DATE",
                            "EBRC No.",
                            "Buyer Name",
                            "Action"],
                        items: [],
                        Expansion_header: [],
                        Expansion_Items: [],
                        Objectkeys: [],
                        ExpansionKeys: [],
                        TableHeaderClass: [
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-1",
                        ],
                        eventId: '',
                        PageSize: 0
                    }
                    this.filteranytablepagination.PaginationfilterAnyTable(Query, PageFilter, 'EBRC').subscribe((res: any) => {
                        console.log("PaginationfilterAnyTable", res);
                        TableFormat['PageSize'] = res?.TOTAL_PAGE
                        TableFormat['items'] = [];
                        TableFormat['Expansion_Items'] = [];
                        this.removeEmpty(res?.data).then(async (newdata: any) => {
                            await newdata?.forEach(async (element) => {
                                await TableFormat['items'].push({
                                    PipoNo: this.getPipoNumber(element['pipo']),
                                    date: moment(element['date']).format('DD-MM-YYYY'),
                                    EbrcNumber: element['EbrcNumber'],
                                    buyerName: element['buyerName'],
                                    isExpand: false,
                                    disabled: element['deleteflag'] != '-1' ? false : true,
                                    RoleType: this.USER_RESULT?.RoleCheckbox
                                })
                            });
                            if (TableFormat['items']?.length != 0) {
                                TableFormat['Objectkeys'] = await Object.keys(TableFormat['items'][0])?.filter((item: any) => item != 'isExpand')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'disabled')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'RoleType')
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            } else {
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            }
                        });
                    });
                })
            },
            SwiftCopyDocuments: async () => {
                return new Promise((resolve, reject) => {
                    TableFormat = {
                        header: [
                            "Pipo No.",
                            "DATE",
                            "Swift-Copy No.",
                            "Beneficiary Name",
                            "Action"],
                        items: [],
                        Expansion_header: [],
                        Expansion_Items: [],
                        Objectkeys: [],
                        ExpansionKeys: [],
                        TableHeaderClass: [
                            "col-td-th-1",
                            "col-td-th-1",
                            "col-td-th-2",
                            "col-td-th-2",
                        ],
                        eventId: '',
                        PageSize: 0
                    }
                    this.filteranytablepagination.PaginationfilterAnyTable(Query, PageFilter, 'SwiftCopyDocuments').subscribe((res: any) => {
                        console.log("PaginationfilterAnyTable", res);
                        TableFormat['PageSize'] = res?.TOTAL_PAGE
                        TableFormat['items'] = [];
                        TableFormat['Expansion_Items'] = [];
                        this.removeEmpty(res?.data).then(async (newdata: any) => {
                            await newdata?.forEach(async (element) => {
                                await TableFormat['items'].push({
                                    PipoNo: this.getPipoNumber(element['pipo']),
                                    date: moment(element['date']).format('DD-MM-YYYY'),
                                    swiftCopyNumber: element['swiftCopyNumber'],
                                    buyerName: element['buyerName'],
                                    isExpand: false,
                                    disabled: element['deleteflag'] != '-1' ? false : true,
                                    RoleType: this.USER_RESULT?.RoleCheckbox
                                })
                            });
                            if (TableFormat['items']?.length != 0) {
                                TableFormat['Objectkeys'] = await Object.keys(TableFormat['items'][0])?.filter((item: any) => item != 'isExpand')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'disabled')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'RoleType')
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            } else {
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            }
                        });
                    });
                })
            },
            Outward_remittance: async () => {
                return new Promise((resolve, reject) => {
                    this.filteranytablepagination.PaginationfilterAnyTable(Query, PageFilter, 'Inward_remittance').subscribe((res: any) => {
                        TableFormat = {
                            header: [
                                "Bank Name",
                                "PI/PO No.",
                                "Ref_Number",
                                "Currency",
                                "Amount",
                                "Party Name",
                                // "Amount Claimed",
                                // "Balance Amount",
                                "Action"],
                            items: [],
                            Expansion_header: [],
                            Expansion_Items: [],
                            Objectkeys: [],
                            ExpansionKeys: [],
                            TableHeaderClass: [
                                "col-td-th-1",
                                "col-td-th-1",
                                "col-td-th-2",
                                "col-td-th-1",
                                "col-td-th-1",
                                "col-td-th-2",
                                // "col-td-th-1",
                                // "col-td-th-1",
                            ],
                            eventId: '',
                            PageSize: 0
                        }
                        TableFormat['PageSize'] = res?.TOTAL_PAGE
                        TableFormat['items'] = [];
                        TableFormat['Expansion_Items'] = [];
                        this.removeEmpty(res?.data).then(async (newdata: any) => {
                            await newdata?.forEach(async (element) => {
                                await TableFormat['items'].push({
                                    BankName: element['BankName'],
                                    Pipo: this.getPipoNumber(element['pipoRef']),
                                    Inward_reference_number: element['Inward_reference_number'],
                                    currency: element['currency'],
                                    amount: element['amount'],
                                    Remitter_Name: element['Remitter_Name'],
                                    // Inward_amount_for_disposal: element['Inward_amount_for_disposal'] != undefined ? element['Inward_amount_for_disposal'] : 0,
                                    // BalanceAmount: parseFloat(element['amount']) - parseFloat(element['Inward_amount_for_disposal'] != undefined ? element['Inward_amount_for_disposal'] : 0),
                                    isExpand: false,
                                    disabled: element['deleteflag'] != '-1' ? false : true,
                                    RoleType: this.USER_RESULT?.RoleCheckbox
                                })
                            })
                            if (TableFormat['items']?.length != 0) {
                                TableFormat['Objectkeys'] = await Object.keys(TableFormat['items'][0])?.filter((item: any) => item != 'isExpand')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'disabled')
                                TableFormat['Objectkeys'] = await TableFormat['Objectkeys']?.filter((item: any) => item != 'RoleType')
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            } else {
                                resolve(TableFormat);
                                this.TABLE_CONTROLLER_DATA = res?.data;
                                this.SHOW_TABLE_TBODY = true;
                            }
                        });
                        console.log("PaginationfilterAnyTable", res, ExtraData);
                    });
                })
            },
        }
    }

    BOE_DETAIILS(element: any) {
        let BOE_DATA: any = [];
        (element?.BOE_Ref != 'NF' ? element?.BOE_Ref : [])?.forEach(BOE_Element => {
            BOE_DATA.puhs(BOE_Element?.boeNumber)
        });
        return BOE_DATA?.join(',')
    }

    async removeEmpty(data: any) {
        await data.forEach(element => {
            for (const key in element) {
                if ((element[key] == '' || element[key] == null || element[key] == undefined) && element[key] != 'object') {
                    element[key] = 'NF'
                }
            }
        });
        return await new Promise(async (resolve, reject) => { await resolve(data) });
    }

    getPipoNumber(pipo: any) {
        let temp: any = [];
        (pipo != 'NF' ? pipo : []).forEach(element => {
            temp.push(element?.pi_poNo);
        });
        return temp.join(',')
    }

    ARRAY_TO_STRING(array, key) {
        return array[key]?.join(',')
    }

    FIRX_AMOUNT(amountarray: any): any {
        return parseFloat(amountarray?.split(',')?.reduce((a, b) => parseFloat(a) + parseFloat(b), 0)).toFixed(3);
    }

    getPipoBuyerName(pipo: any) {
        let temp: any = [];
        (pipo != 'NF' ? pipo : []).forEach(element => {
            temp.push(element?.buyerName);
        });
        return temp.join(',')
    }

    getFIRXNumber(pipo: any) {
        let temp: any = [];
        (pipo != 'NF' ? pipo : []).forEach(element => {
            temp.push(element?.billNo);
        });
        return temp.join(',')
    }

    public SubtractDates(startDate: Date, endDate: Date): any {
        let dateDiff = (endDate.getTime() - startDate.getTime()) / 1000;
        var h: any = Math.floor(dateDiff / 3600);
        return (h > 24 ? this.SplitTime(h)?.Days + 'days' : startDate.toDateString());
    }
    SplitTime(numberOfHours) {
        var Days = Math.floor(numberOfHours / 24);
        var Remainder = numberOfHours % 24;
        var Hours = Math.floor(Remainder);
        var Minutes = Math.floor(60 * (Remainder - Hours));
        return ({ "Days": Days, "Hours": Hours, "Minutes": Minutes })
    }
    
    removeNullOrEmpty(o) {
        if (typeof o !== "object") {
          return o;
        }
        let oKeys = Object.keys(o)
        for (let j = 0; j < oKeys.length; j++) {
          let p = oKeys[j]
          switch (typeof (o[p])) {
            case 'object':
              if (Array.isArray(o[p])) {
                for (let i = 0; i < o[p].length; i++) {
                  o[p][i] = this.removeNullOrEmpty(o[p][i])
                  if (this.isEmpty(o[p][i])) {
                    o[p].splice(i, 1)
                    i--
                  }
                }
                if (o[p].length === 0) {
                  if (Array.isArray(o)) {
                    o.splice(parseInt(p), 1)
                    j--
                  } else {
                    delete o[p]
                  }
                }
              } else {
                if (this.isEmpty(o[p])) {
                  delete o[p]
                } else {
                  o[p] = this.removeNullOrEmpty(o[p])
                  if (this.isEmpty(o[p])) {
                    delete o[p]
                  }
                }
              }
              break
            default:
              if (this.isEmpty(o[p])) {
                delete o[p]
              }
              break
          }
        }
        if (Object.keys(o).length === 0) {
          return
        }
        return o
      }
      isEmpty(obj: any) {
        if (obj === '' || obj === null || JSON.stringify(obj) === '{}' || JSON.stringify(obj) === '[]' || (obj) === undefined || (obj) === '{}') {
          return true
        } else {
          return false
        }
      }
}
