import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { jqxSchedulerComponent } from 'jqwidgets-ng/jqxscheduler';
import { DocumentService } from '../service/document.service';

@Component({
    selector: 'custom-jpxscheduler',
    templateUrl: './custom-jpxscheduler.component.html',
    styleUrls: ['./custom-jpxscheduler.component.scss']
})
export class CustomJPXSchedulerComponent implements AfterViewInit, OnInit {
    @ViewChild("schedulerReference") scheduler: jqxSchedulerComponent;
    SCHEDULER_DATA: any = {
        "Export-Direct-Dispatch": [],
        "SHIPPING-BILL": [],
        "Bill-of-Entry": [],
        "Inward-Remitance-Dispoal": []
    };
    constructor(public docservice: DocumentService) { }
    ngAfterViewInit(): void { }

    ngOnInit(): void {
        this.docservice.getMasterScheduler().subscribe((MasterScheduler: any) => {
            this.SCHEDULER_DATA['SHIPPING-BILL'] = MasterScheduler?.data;
            this.docservice.getTransactionScheduler().subscribe((TransactionScheduler: any) => {
                this.SCHEDULER_DATA['Export-Direct-Dispatch'] = TransactionScheduler?.data;
                this.SCHEDULER_DATA['Inward-Remitance-Dispoal'] = TransactionScheduler?.INWARD_DISPOSAL;
                this.docservice.getBOEScheduler().subscribe((BOEScheduler: any) => {
                    this.SCHEDULER_DATA['Bill-of-Entry'] = BOEScheduler?.data;
                    console.log(MasterScheduler, TransactionScheduler, BOEScheduler,this.SCHEDULER_DATA,'All Scheduler')
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
                        date: new jqx.date(2020, 11, 23),
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
                        subject: `SHIPPING BILL`, calendar: "Sb No",
                        start: new Date(weeklist_element?.date), end: new Date(weeklist_element?.date),
                        status: 'Pending'
                    };
                    appointments.push(appointment);
                });
            }
        });
        data[1].forEach(element => {
            if (element?.Ref_Data == '' || element?.Ref_Data == undefined) {
                element?.weeklist?.forEach(weeklist_element => {
                    let appointment = {
                        id: element?.UniqueId, description: `Export-Direct-Dispatch Id ${element?.UniqueId} Bank not submit these documents`, location: "",
                        subject: `Export-Direct-Dispatch`, calendar: "Export-Direct-Dispatch Id : " + element?.UniqueId,
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
                        subject: `Bill-of-Entry`, calendar: "Boe No. : " + element?.boeNumber,
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
                        subject: `Inward-Remitance-Dispoal`, calendar: "Inward-Remitance-Dispoal Id : " + element?.UniqueId,
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
        Appointment_1?.displayShow
        console.log(event?.args?.appointment?.subject, this.SCHEDULER_DATA[event?.args?.appointment?.subject], 'dfsdfd')
    }
     // called when the dialog is craeted.
     editDialogCreate = (dialog, fields, editAppointment) => {
       console.log(dialog,fields,editAppointment,'asdsdasdasdasdasdas')
    };
}
