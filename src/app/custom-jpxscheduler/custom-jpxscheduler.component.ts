import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { jqxSchedulerComponent } from 'jqwidgets-ng/jqxscheduler';
import { DocumentService } from '../service/document.service';
import { UserService } from '../service/user.service';

@Component({
    selector: 'custom-jpxscheduler',
    templateUrl: './custom-jpxscheduler.component.html',
    styleUrls: ['./custom-jpxscheduler.component.scss']
})
export class CustomJPXSchedulerComponent implements AfterViewInit, OnInit {
    @ViewChild("schedulerReference") scheduler: jqxSchedulerComponent;
    FILTER_VALUE_LIST_NEW: any = {
        header: [
            "Pipo No.",
            "SB DATE",
            "SB NUMBER",
            "BUYER NAME",
            "CURRENCY",
            "SB AMOUNT",
            "AVAILABLE BALANCE"],
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
            "col-td-th-2"
        ],
        eventId: ''
    }

    SCHEDULER_DATA: any = {
        "Export-Direct-Dispatch": [],
        "SHIPPING-BILL": [],
        "Bill-of-Entry": [],
        "Inward-Remitance-Dispoal": []
    };
    USER_DATA: any = [];

    constructor(public docservice: DocumentService, private userService: UserService) { }
    ngAfterViewInit(): void { }

    async ngOnInit() {
        this.USER_DATA = await this.userService.getUserDetail();
        console.log("this.USER_DATA", this.USER_DATA)

        this.docservice.getMasterScheduler().subscribe((MasterScheduler: any) => {
            this.SCHEDULER_DATA['SHIPPING-BILL'] = [];
            MasterScheduler?.data.forEach(element => {
                if (element?.balanceAvai == '-1' || element?.balanceAvai != 0) {
                    this.SCHEDULER_DATA['SHIPPING-BILL'].push(element);
                }
            });
            this.docservice.getTransactionScheduler().subscribe((TransactionScheduler: any) => {
                this.SCHEDULER_DATA['Export-Direct-Dispatch'] = [];
                this.SCHEDULER_DATA['Inward-Remitance-Dispoal'] = [];
                TransactionScheduler?.data.forEach(element => {
                    if (element?.Ref_Data == '' || element?.Ref_Data == undefined) {
                        this.SCHEDULER_DATA['Export-Direct-Dispatch'].push(element);
                    }
                });

                TransactionScheduler?.INWARD_DISPOSAL.forEach(element => {
                    if (element?.Ref_Data == '' || element?.Ref_Data == undefined) {
                        this.SCHEDULER_DATA['Inward-Remitance-Dispoal'].push(element);
                    }
                });

                this.docservice.getBOEScheduler().subscribe((BOEScheduler: any) => {
                    this.SCHEDULER_DATA['Bill-of-Entry'] = [];
                    BOEScheduler?.data.forEach(element => {
                        if (element?.balanceAvai == '-1' || element?.balanceAvai != 0) {
                            this.SCHEDULER_DATA['Bill-of-Entry'].push(element);
                        }
                    });
                    console.log(MasterScheduler, TransactionScheduler, BOEScheduler, this.SCHEDULER_DATA, 'All Scheduler')
                    const source = {
                        dataType: "array",
                        dataFields: [
                            { name: "id", type: "string" },
                            { name: "description", type: "string" },
                            { name: "location", type: "string" },
                            { name: "subject", type: "string" },
                            { name: "calendar", type: "string" },
                            { name: "start", type: "date" },
                            { name: "end", type: "date" },
                            { name: "status", type: "string" }
                        ],
                        id: "id",
                        localData: this.generateAppointments([MasterScheduler?.data, TransactionScheduler?.data, BOEScheduler?.data, TransactionScheduler?.INWARD_DISPOSAL])
                    }
                    const dataAdapter = new jqx.dataAdapter(source);
                    const schedulerSettings: jqwidgets.SchedulerOptions = {
                        date: new jqx.date(new Date()),
                        width: 100 + '%',
                        height: 95 + "%",
                        source: dataAdapter,
                        view: "monthView",
                        showLegend: true,
                        appointmentDataFields: {
                            from: "start",
                            to: "end",
                            id: "id",
                            description: "description",
                            location: "location",
                            subject: "subject",
                            resourceId: "calendar",
                            status: 'status'
                        },
                        resources: {
                            colorScheme: "scheme05",
                            dataField: "calendar",
                            source: new jqx.dataAdapter(source)
                        },
                        views: [
                            "dayView",
                            "weekView",
                            "monthView"
                        ],
                    };
                    this.scheduler.createComponent(schedulerSettings);
                    this.scheduler.ensureAppointmentVisible("id1");
                });
            });
        });
    }

    generateAppointments(data: any): any {
        let appointments = new Array();
        data[0].forEach(element => {
            if (element?.balanceAvai == '-1' || element?.balanceAvai != 0) {
                element?.weeklist?.forEach(weeklist_element => {
                    let appointment = {
                        id: element?.sbno, description: `Sb no. ${element?.sbno} Bank not submit these documents`, location: "",
                        subject: `SHIPPING-BILL`, calendar: "Sb No.",
                        start: new Date(weeklist_element?.date), end: new Date(weeklist_element?.date),
                        status: 'Pending'
                    };
                    const date1: any = new Date(weeklist_element?.date);
                    const date2: any = new Date();
                    const diffTime = Math.abs(date2 - date1);
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                    console.log(diffDays, this.getDateList(weeklist_element?.date,diffDays));
                    appointments.push(appointment);
                });
            }
        });
        data[1].forEach(element => {
            if (element?.Ref_Data == '' || element?.Ref_Data == undefined) {
                element?.weeklist?.forEach(weeklist_element => {
                    let appointment = {
                        id: element?.UniqueId, description: `Export-Direct-Dispatch Id ${element?.UniqueId} Bank not submit these documents`, location: "",
                        subject: `Export-Direct-Dispatch`, calendar: "Export-Direct-Dispatch",
                        start: new Date(weeklist_element?.date), end: new Date(weeklist_element?.date),
                        status: 'Pending'
                    };
                    appointments.push(appointment);
                });
            }
        });
        data[2].forEach(element => {
            if (element?.balanceAvai == '-1' || element?.balanceAvai != 0) {
                element?.weeklist?.forEach(weeklist_element => {
                    let appointment = {
                        id: element?.boeNumber, description: `Boe No. ${element?.boeNumber} Bank not submit these documents`, location: "",
                        subject: `Bill-of-Entry`, calendar: "Boe No.",
                        start: new Date(weeklist_element?.date), end: new Date(weeklist_element?.date),
                        status: 'Pending'
                    };
                    appointments.push(appointment);
                });
            }
        });
        data[3].forEach(element => {
            if (element?.Ref_Data == '' || element?.Ref_Data == undefined) {
                element?.weeklist?.forEach(weeklist_element => {
                    let appointment = {
                        id: element?.UniqueId, description: `Inward-Remitance-Dispoal Id ${element?.UniqueId} Bank not submit these documents`, location: "",
                        subject: `Inward-Remitance-Dispoal`, calendar: "Inward-Remitance-Dispoal",
                        start: new Date(weeklist_element?.date), end: new Date(weeklist_element?.date),
                        status: 'Pending'
                    };
                    appointments.push(appointment);
                });
            }
        });
        return appointments;
    }

    onCellClick(event: any, Appointment_1: any) {
        Appointment_1?.displayShow;
        if (event?.args?.appointment?.subject == 'SHIPPING-BILL') {
            this.FILTER_VALUE_LIST_NEW['header'] = [
                "Pipo No.",
                "SB DATE",
                "SB NUMBER",
                "BUYER NAME",
                "CURRENCY",
                "SB AMOUNT",
                "AVAILABLE BALANCE"]
            this.FILTER_VALUE_LIST_NEW['TableHeaderClass'] = [
                "col-td-th-1",
                "col-td-th-1",
                "col-td-th-1",
                "col-td-th-1",
                "col-td-th-1",
                "col-td-th-1",
                "col-td-th-2"
            ]
            this.getShippingBillTable(this.SCHEDULER_DATA[event?.args?.appointment?.subject]);
        } else if (event?.args?.appointment?.subject == 'Export-Direct-Dispatch') {
            this.FILTER_VALUE_LIST_NEW['header'] = [
                "Pipo No.",
                "SB DATE",
                "SB NUMBER",
                "BUYER NAME",
                "CURRENCY",
                "SB AMOUNT",
                "AVAILABLE BALANCE"]
            this.FILTER_VALUE_LIST_NEW['TableHeaderClass'] = [
                "col-td-th-1",
                "col-td-th-1",
                "col-td-th-1",
                "col-td-th-1",
                "col-td-th-1",
                "col-td-th-1",
                "col-td-th-2"
            ]
            this.getExportDirectDispatchTable(this.SCHEDULER_DATA[event?.args?.appointment?.subject]);
        } else if (event?.args?.appointment?.subject == 'Bill-of-Entry') {
            this.FILTER_VALUE_LIST_NEW['header'] = [
                "Pipo No.",
                "DATE",
                "BOE NUMBER",
                "BUYER NAME",
                "CURRENCY",
                "AMOUNT",
                "AVAILABLE BALANCE"]
            this.FILTER_VALUE_LIST_NEW['TableHeaderClass'] = [
                "col-td-th-1",
                "col-td-th-1",
                "col-td-th-1",
                "col-td-th-1",
                "col-td-th-1",
                "col-td-th-1",
                "col-td-th-2"
            ]
            this.getBillOfEntryTable(this.SCHEDULER_DATA[event?.args?.appointment?.subject]);
        } else if (event?.args?.appointment?.subject == 'Inward-Remitance-Dispoal') {
            this.FILTER_VALUE_LIST_NEW['header'] = [
                "Pipo No.",
                "SB DATE",
                "SB NUMBER",
                "BUYER NAME",
                "CURRENCY",
                "SB AMOUNT",
                "AVAILABLE BALANCE"]
            this.FILTER_VALUE_LIST_NEW['TableHeaderClass'] = [
                "col-td-th-1",
                "col-td-th-1",
                "col-td-th-1",
                "col-td-th-1",
                "col-td-th-1",
                "col-td-th-1",
                "col-td-th-2"
            ]
            this.getInwardRemitanceDispoalTable(this.SCHEDULER_DATA[event?.args?.appointment?.subject]);
        }
        console.log(event?.args?.appointment?.subject, this.SCHEDULER_DATA[event?.args?.appointment?.subject], 'onCellClick')
    }
    // called when the dialog is craeted.
    editDialogCreate = (dialog, fields, editAppointment) => {
        console.log(dialog, fields, editAppointment, 'asdsdasdasdasdasdas')
    };

    getShippingBillTable(data: any) {
        this.FILTER_VALUE_LIST_NEW['items'] = [];
        this.removeEmpty(data).then(async (newdata: any) => {
            await newdata?.forEach(async (element) => {
                await this.FILTER_VALUE_LIST_NEW['items'].push({
                    PipoNo: this.getPipoNumber(element['pipo']),
                    sbdate: element['sbdate'],
                    sbno: element['sbno'],
                    buyerName: element['buyerName'],
                    fobCurrency: element['fobCurrency'],
                    fobValue: element['fobValue'],
                    balanceAvai: element['balanceAvai'] != '-1' ? element['balanceAvai'] : element['fobValue'],
                    isExpand: false,
                    disabled: element['deleteflag'] != '-1' ? false : true,
                    RoleType: this.USER_DATA?.result?.RoleCheckbox
                })
            });
            this.FILTER_VALUE_LIST_NEW['Objectkeys'] = await Object.keys(this.FILTER_VALUE_LIST_NEW['items'][0])?.filter((item: any) => item != 'isExpand');
            this.FILTER_VALUE_LIST_NEW['Objectkeys'] = await this.FILTER_VALUE_LIST_NEW['Objectkeys']?.filter((item: any) => item != 'disabled');
            this.FILTER_VALUE_LIST_NEW['Objectkeys'] = await this.FILTER_VALUE_LIST_NEW['Objectkeys']?.filter((item: any) => item != 'RoleType');
        });
    }
    getExportDirectDispatchTable(data: any) {
        this.FILTER_VALUE_LIST_NEW['items'] = [];
        this.removeEmpty(data).then(async (newdata: any) => {
            await newdata?.forEach(async (element) => {
                await this.FILTER_VALUE_LIST_NEW['items'].push({
                    PipoNo: this.getPipoNumber(element['pipo']),
                    sbdate: element['sbdate'],
                    sbno: element['sbno'],
                    buyerName: element['buyerName'],
                    fobCurrency: element['fobCurrency'],
                    fobValue: element['fobValue'],
                    balanceAvai: element['balanceAvai'] != '-1' ? element['balanceAvai'] : element['fobValue'],
                    isExpand: false,
                    disabled: element['deleteflag'] != '-1' ? false : true,
                    RoleType: this.USER_DATA?.result?.RoleCheckbox
                })
            });
            this.FILTER_VALUE_LIST_NEW['Objectkeys'] = await Object.keys(this.FILTER_VALUE_LIST_NEW['items'][0])?.filter((item: any) => item != 'isExpand');
            this.FILTER_VALUE_LIST_NEW['Objectkeys'] = await this.FILTER_VALUE_LIST_NEW['Objectkeys']?.filter((item: any) => item != 'disabled');
            this.FILTER_VALUE_LIST_NEW['Objectkeys'] = await this.FILTER_VALUE_LIST_NEW['Objectkeys']?.filter((item: any) => item != 'RoleType');
        });
    }
    getBillOfEntryTable(data: any) {
        this.FILTER_VALUE_LIST_NEW['items'] = [];
        this.removeEmpty(data).then(async (newdata: any) => {
            await newdata?.forEach(async (element) => {
                await this.FILTER_VALUE_LIST_NEW['items'].push({
                    PipoNo: this.getPipoNumber(element['pipo']),
                    boeDate: element['boeDate'],
                    boeNumber: element['boeNumber'],
                    buyerName: element['buyerName'],
                    currency: element['currency'],
                    invoiceAmount: element['invoiceAmount'],
                    balanceAvai: element['balanceAmount'] != '-1' ? element['balanceAmount'] : element['invoiceAmount'],
                    isExpand: false,
                    disabled: element['deleteflag'] != '-1' ? false : true,
                    RoleType: this.USER_DATA?.result?.RoleCheckbox
                })
            });
            this.FILTER_VALUE_LIST_NEW['Objectkeys'] = await Object.keys(this.FILTER_VALUE_LIST_NEW['items'][0])?.filter((item: any) => item != 'isExpand');
            this.FILTER_VALUE_LIST_NEW['Objectkeys'] = await this.FILTER_VALUE_LIST_NEW['Objectkeys']?.filter((item: any) => item != 'disabled');
            this.FILTER_VALUE_LIST_NEW['Objectkeys'] = await this.FILTER_VALUE_LIST_NEW['Objectkeys']?.filter((item: any) => item != 'RoleType');
        });
    }
    getInwardRemitanceDispoalTable(data: any) {
        this.FILTER_VALUE_LIST_NEW['items'] = [];
        this.removeEmpty(data).then(async (newdata: any) => {
            await newdata?.forEach(async (element) => {
                await this.FILTER_VALUE_LIST_NEW['items'].push({
                    PipoNo: this.getPipoNumber(element['pipo']),
                    sbdate: element['sbdate'],
                    sbno: element['sbno'],
                    buyerName: element['buyerName'],
                    fobCurrency: element['fobCurrency'],
                    fobValue: element['fobValue'],
                    balanceAvai: element['balanceAvai'] != '-1' ? element['balanceAvai'] : element['fobValue'],
                    isExpand: false,
                    disabled: element['deleteflag'] != '-1' ? false : true,
                    RoleType: this.USER_DATA?.result?.RoleCheckbox
                })
            });
            this.FILTER_VALUE_LIST_NEW['Objectkeys'] = await Object.keys(this.FILTER_VALUE_LIST_NEW['items'][0])?.filter((item: any) => item != 'isExpand');
            this.FILTER_VALUE_LIST_NEW['Objectkeys'] = await this.FILTER_VALUE_LIST_NEW['Objectkeys']?.filter((item: any) => item != 'disabled');
            this.FILTER_VALUE_LIST_NEW['Objectkeys'] = await this.FILTER_VALUE_LIST_NEW['Objectkeys']?.filter((item: any) => item != 'RoleType');
        });
    }

    getPipoNumber(pipo: any) {
        let temp: any = [];
        if (pipo != 'NF') {
            pipo?.forEach(element => {
                temp.push(element?.pi_poNo);
            });
        }
        return temp.join(',')
    }

    async removeEmpty(data: any) {
        await data.forEach(element => {
            for (const key in element) {
                if (element[key] == '' || element[key] == null || element[key] == undefined) {
                    element[key] = 'NF'
                }
            }
        });
        return await new Promise(async (resolve, reject) => { await resolve(data) });
    }
    ARRAY_TO_STRING(array, key) {
        return array[key]?.join(',')
    }
    getDateList(date:any,loopsize: any) {
        let templist: any = [];
        for (let index = 0; index < loopsize; index++) {
            const event = new Date(date);
            event.setDate(event.getDate() + (index + 1));
            templist.push(event)
        }
        return templist;
    }
}
