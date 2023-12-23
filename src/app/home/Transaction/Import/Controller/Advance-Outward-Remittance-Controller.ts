import { Injectable } from "@angular/core";
import { UserService } from "../../../../service/user.service";
import { ToastrService } from "ngx-toastr";
import { DocumentService } from "../../../../service/document.service";
import { BlendMode, PDFDocument } from "pdf-lib";
import { Router } from "@angular/router";
import moment from 'moment';

@Injectable({ providedIn: 'root' })
export class AdvanceOutwardRemittanceControllerData {
    COMPANY_INFO: any = {};
    CURRENT_DATE: any = moment(new Date()).format('DD-MM-YYYY')
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
                    let formUrl = './../../../assets/pdf/FedralBank/Remittance_Advance_Against_Imports_Edit.pdf'
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
                    getAllFields[0]?.setText(validator.COMPANY_INFO[0]?.BranchName);
                    getAllFields[17]?.setText(validator.COMPANY_INFO[0]?.teamName + '\n' + validator.COMPANY_INFO[0]?.adress);
                    getAllFields[18]?.setText(BENEFICIARY_DETAILS[0]?.benneName + '\n' + BENEFICIARY_DETAILS[0]?.beneAdrs);
                    getAllFields[19]?.setText(BENEFICIARY_DETAILS[0]?.beneBankName + '\n' + BENEFICIARY_DETAILS[0]?.beneBankAdress);
                    getAllFields[20]?.setText('');
                    getAllFields[21]?.setText(BENEFICIARY_DETAILS[0]?.beneAccNo + '\n' + BENEFICIARY_DETAILS[0]?.iban);
                    getAllFields[22]?.setText(BENEFICIARY_DETAILS[0]?.beneBankSwiftCode);
                    getAllFields[23]?.setText(BENEFICIARY_DETAILS[0]?.sortCode);
                    getAllFields[25]?.setText(BENEFICIARY_DETAILS[0]?.beneBankSwiftCode);

                    if (filldata != undefined && filldata != null && filldata != '') {
                        getAllFields[1]?.setText('');
                        let PIPO_DATA: any = {
                            Currency: [],
                            Amount: [],
                            Commodity: [],
                            HSCODE: [],
                            DATE_NO: [],
                            CurrencyAmount: [],
                            ORIGIN: [],
                            TRANSPORTER: [],
                            LASTDATE: [],
                            PurposeRemittance: []
                        }

                        filldata?.paymentTerm?.forEach(element => {
                            PIPO_DATA["Currency"].push(element?.PIPO_LIST?.currency)
                            PIPO_DATA["Amount"].push(element?.RemittanceAmount)
                            PIPO_DATA["Commodity"].push(element?.PIPO_LIST?.commodity)
                            PIPO_DATA["HSCODE"].push(element?.PIPO_LIST?.HSCODE)
                            PIPO_DATA["DATE_NO"].push(element?.PIPO_LIST?.pi_poNo + ' | ' + element?.PIPO_LIST?.date)
                            PIPO_DATA["CurrencyAmount"].push(element?.PIPO_LIST?.currency + ' | ' + element?.PIPO_LIST?.amount)
                            PIPO_DATA["ORIGIN"].push(element?.PIPO_LIST?.location)
                            PIPO_DATA["PurposeRemittance"].push('Import ' + element?.PIPO_LIST?.MaterialTypes)
                            if (element?.PIPO_LIST?.ModeofTransport[1]?.AirportCustoms == true) {
                                PIPO_DATA["TRANSPORTER"].push("Air")
                            } else {
                                PIPO_DATA["TRANSPORTER"].push("Sea")
                            }
                            element?.PIPO_LIST?.paymentTerm?.forEach(PaymentTermElement => {
                                PIPO_DATA["LASTDATE"].push(PaymentTermElement?.date)
                            });
                        });
                        let RemittanceAmount: any = PIPO_DATA["Amount"]?.reduce((a, b) => parseFloat(a) + parseFloat(b), 0)
                        getAllFields[2]?.setText(PIPO_DATA?.Currency[0] + ' ' + RemittanceAmount);
                        getAllFields[24]?.setText(PIPO_DATA["PurposeRemittance"]?.join('\n'));

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

                        getAllFields[9]?.setText(RemittanceAmount != undefined ? PIPO_DATA?.Currency[0] + ' ' + this.ConvertNumberToWords(RemittanceAmount) : '-');
                        getAllFields[10]?.setText('');
                        getAllFields[13]?.setText('-');
                        getAllFields[14]?.setText('-');

                        if (filldata?.Remittance == "Full/Final") {
                            getAllFields[11]?.uncheck()
                            getAllFields[12]?.check()
                        } else if (filldata?.Remittance == "Part") {
                            getAllFields[11]?.check()
                            getAllFields[12]?.uncheck()
                        }

                        if (filldata?.ForeignBankCharges == "OwnAccount") {
                            getAllFields[15]?.uncheck();
                            getAllFields[16]?.check();
                        } else if (filldata?.ForeignBankCharges == "BeneficiaryAccount") {
                            getAllFields[15]?.check();
                            getAllFields[16]?.uncheck();
                        }

                        if (filldata?.TypeofGoods == "Capital") {
                            getAllFields[26]?.check();
                            getAllFields[27]?.uncheck();
                        } else if (filldata?.TypeofGoods == "NonCapital") {
                            getAllFields[26]?.uncheck();
                            getAllFields[27]?.check();
                        }

                        getAllFields[28]?.setText(PIPO_DATA?.Commodity?.join('\n'));
                        getAllFields[29]?.setText(PIPO_DATA?.HSCODE?.join('\n'));

                        getAllFields[30]?.setText(filldata?.BankCharges?.accNumber?.split('')[0]);
                        getAllFields[31]?.setText(filldata?.BankCharges?.accNumber?.split('')[1]);
                        getAllFields[32]?.setText(filldata?.BankCharges?.accNumber?.split('')[2]);
                        getAllFields[33]?.setText(filldata?.BankCharges?.accNumber?.split('')[3]);
                        getAllFields[34]?.setText(filldata?.BankCharges?.accNumber?.split('')[4]);
                        getAllFields[35]?.setText(filldata?.BankCharges?.accNumber?.split('')[5]);
                        getAllFields[36]?.setText(filldata?.BankCharges?.accNumber?.split('')[6]);
                        getAllFields[37]?.setText(filldata?.BankCharges?.accNumber?.split('')[7]);
                        getAllFields[38]?.setText(filldata?.BankCharges?.accNumber?.split('')[8]);
                        getAllFields[39]?.setText(filldata?.BankCharges?.accNumber?.split('')[9]);
                        getAllFields[40]?.setText(filldata?.BankCharges?.accNumber?.split('')[10]);
                        getAllFields[41]?.setText(filldata?.BankCharges?.accNumber?.split('')[11]);
                        getAllFields[42]?.setText(filldata?.BankCharges?.accNumber?.split('')[12]);
                        getAllFields[43]?.setText(filldata?.BankCharges?.accNumber?.split('')[13]);

                        getAllFields[44]?.setText(filldata?.BankDebit?.accNumber?.split('')[0]);
                        getAllFields[45]?.setText(filldata?.BankDebit?.accNumber?.split('')[1]);
                        getAllFields[46]?.setText(filldata?.BankDebit?.accNumber?.split('')[2]);
                        getAllFields[47]?.setText(filldata?.BankDebit?.accNumber?.split('')[3]);
                        getAllFields[48]?.setText(filldata?.BankDebit?.accNumber?.split('')[4]);
                        getAllFields[49]?.setText(filldata?.BankDebit?.accNumber?.split('')[5]);
                        getAllFields[50]?.setText(filldata?.BankDebit?.accNumber?.split('')[6]);
                        getAllFields[51]?.setText(filldata?.BankDebit?.accNumber?.split('')[7]);
                        getAllFields[52]?.setText(filldata?.BankDebit?.accNumber?.split('')[8]);
                        getAllFields[53]?.setText(filldata?.BankDebit?.accNumber?.split('')[9]);
                        getAllFields[54]?.setText(filldata?.BankDebit?.accNumber?.split('')[10]);
                        getAllFields[55]?.setText(filldata?.BankDebit?.accNumber?.split('')[11]);
                        getAllFields[56]?.setText(filldata?.BankDebit?.accNumber?.split('')[12]);
                        getAllFields[57]?.setText(filldata?.BankDebit?.accNumber?.split('')[13]);

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
                        getAllFields[78]?.setText(PIPO_DATA?.DATE_NO?.join('\n'));
                        getAllFields[79]?.setText(PIPO_DATA?.CurrencyAmount?.join('\n'));
                        getAllFields[80]?.setText(PIPO_DATA?.HSCODE?.join('\n'));
                        // getAllFields[81]?.setText(PIPO_DATA?.ORIGIN?.join('\n'));
                        // getAllFields[82]?.setText(PIPO_DATA?.ORIGIN?.join('\n'));
                        getAllFields[83]?.setText(PIPO_DATA?.TRANSPORTER?.join('\n'));
                        getAllFields[84]?.setText(PIPO_DATA?.LASTDATE?.join('\n'));
                        getAllFields[85]?.setText(moment(new Date()).format('DD-MM-YYYY'));
                        getAllFields[86]?.setText('');
                        // getAllFields[87]?.uncheck();
                        // getAllFields[88]?.uncheck()
                        // getAllFields[89]?.uncheck();
                        // getAllFields[90]?.uncheck();
                        // getAllFields[91]?.uncheck();
                        // getAllFields[92]?.uncheck();
                        getAllFields[94]?.setText(moment(new Date()).format('DD-MM-YYYY'));
                        // getAllFields[94]?.setText('');
                        // getAllFields[95]?.setText('');
                        // getAllFields[96]?.setText('');
                    }
                    const mergedPdfFile = await pdfDoc.save();
                    var base64String1 = this._arrayBufferToBase64(mergedPdfFile)
                    const x1 = 'data:application/pdf;base64,' + base64String1;
                    console.log(x1, "base64String1")
                    await resolve(x1);
                })
            },
            FBG: async (validator, BENEFICIARY_DETAILS, filldata, ToForwardContract_Selected) => {
                return new Promise(async (resolve, reject) => {
                    console.log(validator, BENEFICIARY_DETAILS, filldata, ToForwardContract_Selected, "ToForwardContract_Selected")
                    let formUrl = './../../../assets/pdf/FedralBank/FBG_Waiver_Format.pdf'
                    console.log(filldata, 'filldata')
                    const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())
                    const pdfDoc = await PDFDocument.load(formPdfBytes)
                    const form: any = pdfDoc.getForm()
                    const getAllFields = form?.getFields();
                    getAllFields?.forEach(element => {
                        const elementvalue: any = element?.acroField?.dict?.values();
                        if (elementvalue[0]?.encodedName == '/Tx') {
                            element?.setFontSize(9);
                            element?.enableReadOnly();
                            const [widget]: any = element?.acroField?.getWidgets();
                            widget?.getOrCreateBorderStyle()?.setWidth(0);
                        }
                    });
                    getAllFields[0]?.setText(this.CURRENT_DATE);
                    getAllFields[1]?.setText(BENEFICIARY_DETAILS[0]?.beneBankName + '\n' + BENEFICIARY_DETAILS[0]?.beneBankAdress);
                    getAllFields[2]?.setText(this.CURRENT_DATE);
                    getAllFields[4]?.setText(BENEFICIARY_DETAILS[0]?.benneName);
                    getAllFields[11]?.setText(validator.COMPANY_INFO[0]?.teamName + '\n' + validator.COMPANY_INFO[0]?.adress);

                    if (filldata != undefined && filldata != null && filldata != '') {
                        let PIPO_DATA: any = {
                            NO:[],
                            Currency: [],
                            Amount: [],
                            Commodity: [],
                            HSCODE: [],
                            DATE_NO: [],
                            CurrencyAmount: [],
                            ORIGIN: [],
                            DATE:[],
                            TRANSPORTER: [],
                            LASTDATE: [],
                            PurposeRemittance:[]
                        }

                        filldata?.paymentTerm?.forEach(element => {
                            PIPO_DATA["Currency"].push(element?.PIPO_LIST?.currency)
                            PIPO_DATA["NO"].push(element?.PIPO_LIST?.pi_poNo)
                            PIPO_DATA["Amount"].push(element?.RemittanceAmount)
                            PIPO_DATA["Commodity"].push(element?.PIPO_LIST?.commodity)
                            PIPO_DATA["HSCODE"].push(element?.PIPO_LIST?.HSCODE)
                            PIPO_DATA["DATE_NO"].push(element?.PIPO_LIST?.pi_poNo + ' | ' + element?.PIPO_LIST?.date)
                            PIPO_DATA["DATE"].push(element?.PIPO_LIST?.date)
                            PIPO_DATA["CurrencyAmount"].push(element?.PIPO_LIST?.currency + ' | ' + element?.PIPO_LIST?.amount)
                            PIPO_DATA["ORIGIN"].push(element?.PIPO_LIST?.location)
                            PIPO_DATA["PurposeRemittance"].push('Import '+element?.PIPO_LIST?.MaterialTypes)
                            if (element?.PIPO_LIST?.ModeofTransport[1]?.AirportCustoms == true) {
                                PIPO_DATA["TRANSPORTER"].push("Air")
                            } else {
                                PIPO_DATA["TRANSPORTER"].push("Sea")
                            }
                            element?.PIPO_LIST?.paymentTerm?.forEach(PaymentTermElement => {
                                PIPO_DATA["LASTDATE"].push(PaymentTermElement?.date)
                            });
                        });
                        let RemittanceAmount: any = PIPO_DATA["Amount"]?.reduce((a, b) => parseFloat(a) + parseFloat(b), 0)
                        getAllFields[3]?.setText(PIPO_DATA?.Currency[0] + ' ' + RemittanceAmount);
                        getAllFields[5]?.setText(PIPO_DATA["Commodity"]?.join(','));
                        getAllFields[6]?.setText(PIPO_DATA["NO"]?.join(','));
                        getAllFields[7]?.setText(PIPO_DATA["DATE"]?.join(','));
                    }
                    await pdfDoc.save()
                    await this.addWaterMark(pdfDoc, validator).then(async (Res: any) => {
                        const pdfBytes = await Res.save()
                        var base64String1 = this._arrayBufferToBase64(pdfBytes)
                        const x1 = 'data:application/pdf;base64,' + base64String1;
                        await resolve(x1);
                    });
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
                    getAllFields[0]?.check();
                    getAllFields[2]?.setText(BENEFICIARY_DETAILS[0]?.beneBankName + '\n' + BENEFICIARY_DETAILS[0]?.beneBankAdress);
                    getAllFields[5]?.setText(validator.COMPANY_INFO[0]?.teamName + '\n' + validator.COMPANY_INFO[0]?.adress);
                    getAllFields[6]?.setText(validator.COMPANY_INFO[0]?.iec);
                    getAllFields[10]?.setText(`on us a/c no  ${BENEFICIARY_DETAILS[0]?.beneAccNo}`);
                    getAllFields[11]?.setText(`Net off i.e. On beneficiary`);
                    getAllFields[14]?.setText(BENEFICIARY_DETAILS[0]?.benneName + '\n' + BENEFICIARY_DETAILS[0]?.beneAdrs);
                    getAllFields[15]?.setText(`Swift Code: ${BENEFICIARY_DETAILS[0]?.beneBankSwiftCode} \nABA: \nRouting No: \nSort Code: ${BENEFICIARY_DETAILS[0]?.sortCode}`);
                    getAllFields[48]?.setText(validator.COMPANY_INFO[0]?.teamName + '\n' + validator.COMPANY_INFO[0]?.adress);

                    if (filldata != undefined && filldata != null && filldata != '') {
                        getAllFields[7]?.setText(`INR A/C No : NIL \n For: (CCY & AMT) NIL\n FCY A/C No : ${BENEFICIARY_DETAILS[0]?.beneAccNo}\n For: (CCY & AMT) ${filldata?.paymentTerm[0]?.PIPO_LIST?.currency + ' ' + filldata?.paymentTerm[0]?.RemittanceAmount}/-\n (Remittance by SEZ units from INR accounts to beneficiaries within India not allowed)`);
                        getAllFields[12]?.setText(`${filldata?.paymentTerm[0]?.PIPO_LIST?.currency + ' ' + filldata?.paymentTerm[0]?.RemittanceAmount} /- (${filldata?.paymentTerm[0]?.PIPO_LIST?.currency + ' ' + this.ConvertNumberToWords(filldata?.paymentTerm[0]?.RemittanceAmount)}) - 30% ADVANCE PAYMENT.`);
                        getAllFields[19]?.setText(`Expected Date of Despatch / Download (software) – MID OF NOV 2022\n Name of the shipping company / airlines – (BY SEA)\n Port of Despatch - ANY PORT IN COLOMBIA\n Destination Port – CHENNAI, INDIA \nProforma Invoice details (In case the invoice is older than 6 months then a declaration\n to be provided stating the reason for delay)\n PROFORMA Invoice no - ${filldata?.paymentTerm[0]?.PIPO_LIST?.currency} CO Dated ${filldata?.paymentTerm[0]?.PIPO_LIST?.date}, Amount - ${filldata?.paymentTerm[0]?.PIPO_LIST?.currency} ${filldata?.paymentTerm[0]?.RemittanceAmount}/-`);
                        getAllFields[20]?.setText(filldata?.paymentTerm[0]?.PIPO_LIST?.HSCODE);

                    }
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

    addWaterMark(pdfDoc: any, validator) {
        return new Promise(async (resolve, reject) => {
            let jpgImage: any = ''
            const mergedPdf = await PDFDocument.create();
            if (validator.COMPANY_INFO?.length != 0) {
                jpgImage = await mergedPdf.embedPng(validator.COMPANY_INFO[0]?.letterHead)
            }
            const copiedPages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
            console.log(pdfDoc, pdfDoc.getPageIndices(), copiedPages, jpgImage, validator.COMPANY_INFO[0]?.letterHead, "copiedPages")
            copiedPages.forEach((page) => {
                const { width, height } = page.getSize();
                page.drawImage(jpgImage, {
                    x: 0,
                    y: 0,
                    width: width,
                    height: height,
                    opacity: 1,
                    blendMode: BlendMode.Multiply
                });
                mergedPdf.addPage(page);
            });
            const mergedPdfFile = await mergedPdf.save();
            const mergedPdfload = await PDFDocument.load(mergedPdfFile);
            resolve(mergedPdfload)
        })
    }
}