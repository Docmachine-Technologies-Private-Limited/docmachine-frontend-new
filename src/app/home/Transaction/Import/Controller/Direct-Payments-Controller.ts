import { Injectable } from "@angular/core";
import { UserService } from "../../../../service/user.service";
import { ToastrService } from "ngx-toastr";
import { DocumentService } from "../../../../service/document.service";
import { PDFDocument } from "pdf-lib";
import { Router } from "@angular/router";
import moment from 'moment';

@Injectable({ providedIn: 'root' })
export class DirectPaymentsControllerData {
    COMPANY_INFO: any = {};
    CURRENT_DATE: any = moment(new Date).format('DD-MM-YYYY')
    constructor(public documentService: DocumentService,
        private router: Router,
        private toastr: ToastrService,
        private userService: UserService) {
        this.userService.getTeam().subscribe((data: any) => { this.COMPANY_INFO = data?.data[0] }, error => { console.log("error", error) });
    }

    BankFormatLoad() {
        return {
            Fedral: async (validator, BENEFICIARY_DETAILS, filldata, ToForwardContract_Selected) => {
                return new Promise(async (resolve, reject) => {
                    console.log(validator, BENEFICIARY_DETAILS, filldata, ToForwardContract_Selected, "ToForwardContract_Selected")
                    let formUrl = './../../../assets/pdf/FedralBank/Direct_Import_Bills_new.pdf'
                    console.log(filldata, 'filldata')
                    const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())
                    const pdfDoc = await PDFDocument.load(formPdfBytes)
                    const form: any = pdfDoc.getForm()
                    const getAllFields = form?.getFields();
                    getAllFields?.forEach(element => {
                        const elementvalue: any = element?.acroField?.dict?.values();
                        if (elementvalue[0]?.encodedName == '/Tx') {
                            element?.setFontSize(11);
                            element?.enableReadOnly();
                            const [widget]: any = element?.acroField?.getWidgets();
                            widget?.getOrCreateBorderStyle()?.setWidth(0);
                        }
                    });
                    getAllFields[16]?.setText(validator.COMPANY_INFO[0]?.teamName + '\n' + validator.COMPANY_INFO[0]?.adress);
                    getAllFields[23]?.setText(BENEFICIARY_DETAILS[0]?.benneName + '\n' + BENEFICIARY_DETAILS[0]?.beneAdrs);
                    getAllFields[24]?.setText(BENEFICIARY_DETAILS[0]?.beneAccNo + '\n' + BENEFICIARY_DETAILS[0]?.iban);
                    getAllFields[25]?.setText(BENEFICIARY_DETAILS[0]?.sortCode);
                    getAllFields[26]?.setText(BENEFICIARY_DETAILS[0]?.beneBankName + '\n' + BENEFICIARY_DETAILS[0]?.beneBankAdress);
                    getAllFields[27]?.setText(BENEFICIARY_DETAILS[0]?.beneBankSwiftCode);
                    getAllFields[28]?.setText(BENEFICIARY_DETAILS[0]?.interBankName);
                    getAllFields[29]?.setText(BENEFICIARY_DETAILS[0]?.beneBankSwiftCode);

                    if (filldata != undefined && filldata != null && filldata != '') {
                        getAllFields[0]?.setText('');
                        getAllFields[1]?.setText('');
                        let paymentTermSum: any = filldata?.paymentTerm?.reduce((a, b) => parseFloat(a) + parseFloat(b?.RemittanceAmount), 0)
                        getAllFields[2]?.setText(filldata?.paymentTerm[0]?.PIPO_LIST?.currency + ' ' + paymentTermSum?.toString());

                        var today: any = new Date();
                        var dd = String(today.getDate()).padStart(2, '0');
                        var mm = String(today.getMonth() + 1).padStart(2, '0');
                        var yyyy = today.getFullYear();
                        today = yyyy + "-" + mm + "-" + dd;
                        today = today?.split("-")
                        getAllFields[3]?.setText(today[2]?.split('')[0]);
                        getAllFields[4]?.setText(today[2]?.split('')[1]);
                        getAllFields[5]?.setText(today[1]?.split('')[0]);
                        getAllFields[6]?.setText(today[1]?.split('')[1]);
                        getAllFields[7]?.setText(today[0]?.split('')[2]);
                        getAllFields[8]?.setText(today[0]?.split('')[3]);
                        getAllFields[9]?.setText(paymentTermSum?.toString() != undefined ? filldata?.paymentTerm[0]?.PIPO_LIST?.currency + ' ' + this.ConvertNumberToWords(paymentTermSum?.toString()) : '-');

                        let BOE_DETAIILSSum: any = filldata?.BOE_DETAIILS?.reduce((a, b) => parseFloat(a) + parseFloat(b?.BOEAmount), 0)
                        let BOE_DETAIILS_FILTER: any = {
                            boeNumber: [],
                            boeDate: [],
                            BOEAmount: []
                        }
                        filldata?.BOE_DETAIILS?.forEach(element => {
                            BOE_DETAIILS_FILTER['boeNumber'].push(element?.BOE?.boeNumber)
                            BOE_DETAIILS_FILTER['boeDate'].push(element?.BOE?.boeDate)
                            BOE_DETAIILS_FILTER['BOEAmount'].push(element?.BOEAmount)
                        });
                        getAllFields[19]?.setText(BOE_DETAIILS_FILTER['boeNumber']?.join(','));
                        getAllFields[20]?.setText(BOE_DETAIILS_FILTER['boeDate']?.join(','));
                        getAllFields[21]?.setText(filldata?.paymentTerm[0]?.PIPO_LIST?.dischargePort);
                        getAllFields[22]?.setText(BOE_DETAIILSSum?.toString());

                        getAllFields[30]?.setText(filldata?.BankDebit?.accNumber?.split('')[0]);
                        getAllFields[31]?.setText(filldata?.BankDebit?.accNumber?.split('')[1]);
                        getAllFields[32]?.setText(filldata?.BankDebit?.accNumber?.split('')[2]);
                        getAllFields[33]?.setText(filldata?.BankDebit?.accNumber?.split('')[3]);
                        getAllFields[34]?.setText(filldata?.BankDebit?.accNumber?.split('')[4]);
                        getAllFields[35]?.setText(filldata?.BankDebit?.accNumber?.split('')[5]);
                        getAllFields[36]?.setText(filldata?.BankDebit?.accNumber?.split('')[6]);
                        getAllFields[37]?.setText(filldata?.BankDebit?.accNumber?.split('')[7]);
                        getAllFields[38]?.setText(filldata?.BankDebit?.accNumber?.split('')[8]);
                        getAllFields[39]?.setText(filldata?.BankDebit?.accNumber?.split('')[9]);
                        getAllFields[40]?.setText(filldata?.BankDebit?.accNumber?.split('')[10]);
                        getAllFields[41]?.setText(filldata?.BankDebit?.accNumber?.split('')[11]);
                        getAllFields[42]?.setText(filldata?.BankDebit?.accNumber?.split('')[12]);
                        getAllFields[43]?.setText(filldata?.BankDebit?.accNumber?.split('')[13]);

                        getAllFields[44]?.setText(filldata?.BankCharges?.accNumber?.split('')[0]);
                        getAllFields[45]?.setText(filldata?.BankCharges?.accNumber?.split('')[1]);
                        getAllFields[46]?.setText(filldata?.BankCharges?.accNumber?.split('')[2]);
                        getAllFields[47]?.setText(filldata?.BankCharges?.accNumber?.split('')[3]);
                        getAllFields[48]?.setText(filldata?.BankCharges?.accNumber?.split('')[4]);
                        getAllFields[49]?.setText(filldata?.BankCharges?.accNumber?.split('')[5]);
                        getAllFields[50]?.setText(filldata?.BankCharges?.accNumber?.split('')[6]);
                        getAllFields[51]?.setText(filldata?.BankCharges?.accNumber?.split('')[7]);
                        getAllFields[52]?.setText(filldata?.BankCharges?.accNumber?.split('')[8]);
                        getAllFields[53]?.setText(filldata?.BankCharges?.accNumber?.split('')[9]);
                        getAllFields[54]?.setText(filldata?.BankCharges?.accNumber?.split('')[10]);
                        getAllFields[55]?.setText(filldata?.BankCharges?.accNumber?.split('')[11]);
                        getAllFields[56]?.setText(filldata?.BankCharges?.accNumber?.split('')[12]);
                        getAllFields[57]?.setText(filldata?.BankCharges?.accNumber?.split('')[13]);

                        if (ToForwardContract_Selected?.length != 0 && ToForwardContract_Selected != undefined) {
                            let booking_date: any = ToForwardContract_Selected[0]?.BookingDate?.split('-');
                            let due_date: any = ToForwardContract_Selected[0]?.ToDate?.split('-');
                            getAllFields[58]?.setText(ToForwardContract_Selected[0]?.ForwardRefNo);

                            if (booking_date != undefined) {
                                getAllFields[59]?.setText(booking_date[2]?.split('')[0]);
                                getAllFields[60]?.setText(booking_date[2]?.split('')[1]);
                                getAllFields[61]?.setText(booking_date[1]?.split('')[0]);
                                getAllFields[62]?.setText(booking_date[1]?.split('')[1]);
                                getAllFields[63]?.setText(booking_date[0]?.split('')[0]);
                                getAllFields[64]?.setText(booking_date[0]?.split('')[1]);
                                getAllFields[65]?.setText(booking_date[0]?.split('')[2]);
                                getAllFields[66]?.setText(booking_date[0]?.split('')[3]);
                            }

                            getAllFields[67]?.setText(ToForwardContract_Selected[0]?.BookingAmount);

                            if (due_date != undefined) {
                                getAllFields[68]?.setText(due_date[2]?.split('')[0]);
                                getAllFields[69]?.setText(due_date[2]?.split('')[1]);
                                getAllFields[70]?.setText(due_date[1]?.split('')[0]);
                                getAllFields[71]?.setText(due_date[1]?.split('')[1]);
                                getAllFields[72]?.setText(due_date[0]?.split('')[0]);
                                getAllFields[73]?.setText(due_date[0]?.split('')[1]);
                                getAllFields[74]?.setText(due_date[0]?.split('')[2]);
                                getAllFields[75]?.setText(due_date[0]?.split('')[3]);
                            }

                            getAllFields[76]?.setText(ToForwardContract_Selected[0]?.UtilizedAmount);
                            getAllFields[77]?.setText(ToForwardContract_Selected[0]?.NetRate);
                        }
                        getAllFields[80]?.setText(filldata?.paymentTerm[0]?.PIPO_LIST?.HSCODE);
                        getAllFields[81]?.setText('');
                        getAllFields[82]?.setText('');
                        getAllFields[83]?.setText('');
                        getAllFields[84]?.setText('');
                        getAllFields[85]?.setText(moment(new Date()).format('DD-MM-YYYY'));
                        getAllFields[86]?.setText('');
                        getAllFields[87]?.setText('');

                        getAllFields[95]?.setText(moment(new Date()).format('DD-MM-YYYY'));
                        getAllFields[96]?.setText('');
                        getAllFields[97]?.setText('');
                    }
                    const pdfBytes = await pdfDoc.save()
                    var base64String = this._arrayBufferToBase64(pdfBytes)
                    const x = 'data:application/pdf;base64,' + base64String;
                    const mergedPdf = await PDFDocument.create();
                    const copiedPages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
                    copiedPages.forEach((page) => {
                        mergedPdf.addPage(page);
                    });
                    const mergedPdfFile = await pdfDoc.save();
                    var base64String1 = this._arrayBufferToBase64(mergedPdfFile)
                    const x1 = 'data:application/pdf;base64,' + base64String1;
                    console.log(x1, "base64String1")
                    await resolve(x1);
                })
            },
            HDFC: async (validator, BENEFICIARY_DETAILS, filldata, ToForwardContract_Selected) => {
                return new Promise(async (resolve, reject) => {
                    console.log(validator, BENEFICIARY_DETAILS, filldata, ToForwardContract_Selected, "ToForwardContract_Selected")
                    let formUrl = './../../../assets/pdf/HDFC/OutwardRemittance.pdf'
                    console.log(filldata, 'filldata')
                    const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())
                    const pdfDoc = await PDFDocument.load(formPdfBytes)
                    const form: any = pdfDoc.getForm()
                    const getAllFields = form?.getFields();
                    getAllFields?.forEach(element => {
                        const elementvalue: any = element?.acroField?.dict?.values();
                        if (elementvalue[0]?.encodedName == '/Tx') {
                            element?.setFontSize(11);
                            element?.enableReadOnly();
                            const [widget]: any = element?.acroField?.getWidgets();
                            widget?.getOrCreateBorderStyle()?.setWidth(0);
                        }
                    });
                  
                    const mergedPdfFile = await pdfDoc.save();
                    var base64String1 = this._arrayBufferToBase64(mergedPdfFile)
                    const x1 = 'data:application/pdf;base64,' + base64String1;
                    console.log(x1, "base64String1")
                    await resolve(x1);
                })
            }
        }
    }

    _arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = new Uint8Array(buffer);
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
    }

    ConvertNumberToWords(number: any) {
        var words = new Array();
        words[0] = '';
        words[1] = 'One';
        words[2] = 'Two';
        words[3] = 'Three';
        words[4] = 'Four';
        words[5] = 'Five';
        words[6] = 'Six';
        words[7] = 'Seven';
        words[8] = 'Eight';
        words[9] = 'Nine';
        words[10] = 'Ten';
        words[11] = 'Eleven';
        words[12] = 'Twelve';
        words[13] = 'Thirteen';
        words[14] = 'Fourteen';
        words[15] = 'Fifteen';
        words[16] = 'Sixteen';
        words[17] = 'Seventeen';
        words[18] = 'Eighteen';
        words[19] = 'Nineteen';
        words[20] = 'Twenty';
        words[30] = 'Thirty';
        words[40] = 'Forty';
        words[50] = 'Fifty';
        words[60] = 'Sixty';
        words[70] = 'Seventy';
        words[80] = 'Eighty';
        words[90] = 'Ninety';
        number = number.toString();
        var atemp = number.split(".");
        var number = atemp[0].split(",").join("");
        var n_length = number.length;
        var words_string = "";
        if (n_length <= 9) {
            var n_array: any = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
            var received_n_array = new Array();
            for (var i = 0; i < n_length; i++) {
                received_n_array[i] = number.substr(i, 1);
            }
            for (var i = 9 - n_length, j = 0; i < 9; i++, j++) {
                n_array[i] = received_n_array[j];
            }
            for (var i = 0, j = 1; i < 9; i++, j++) {
                if (i == 0 || i == 2 || i == 4 || i == 7) {
                    if (n_array[i] == 1) {
                        n_array[j] = 10 + parseInt(n_array[j]);
                        n_array[i] = 0;
                    }
                }
            }
            var value: any = "";
            for (var i = 0; i < 9; i++) {
                if (i == 0 || i == 2 || i == 4 || i == 7) {
                    value = n_array[i] * 10;
                } else {
                    value = n_array[i];
                }
                if (value != 0) {
                    words_string += words[value] + " ";
                }
                if ((i == 1 && value != 0) || (i == 0 && value != 0 && n_array[i + 1] == 0)) {
                    words_string += "Crores ";
                }
                if ((i == 3 && value != 0) || (i == 2 && value != 0 && n_array[i + 1] == 0)) {
                    words_string += "Lakhs ";
                }
                if ((i == 5 && value != 0) || (i == 4 && value != 0 && n_array[i + 1] == 0)) {
                    words_string += "Thousand ";
                }
                if (i == 6 && value != 0 && (n_array[i + 1] != 0 && n_array[i + 2] != 0)) {
                    words_string += "Hundred and ";
                } else if (i == 6 && value != 0) {
                    words_string += "Hundred ";
                }
            }
            words_string = words_string.split("  ").join(" ");
        }
        return words_string;
    }
}