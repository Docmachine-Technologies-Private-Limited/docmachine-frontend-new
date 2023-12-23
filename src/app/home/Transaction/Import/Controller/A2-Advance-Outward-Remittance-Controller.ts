import { Injectable } from "@angular/core";
import { UserService } from "../../../../service/user.service";
import { ToastrService } from "ngx-toastr";
import { DocumentService } from "../../../../service/document.service";
import { PDFDocument } from "pdf-lib";
import { Router } from "@angular/router";
import moment from 'moment';

@Injectable({ providedIn: 'root' })
export class A2AdvanceOutwardRemittanceControllerData {
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
                    let formUrl = './../../../assets/pdf/FedralBank/Revised_Form_A2_BLANK.pdf'
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
                    getAllFields[8]?.setText(validator.COMPANY_INFO[0]?.teamName);
                    getAllFields[14]?.setText(validator.COMPANY_INFO[0]?.teamName + '\n' + validator.COMPANY_INFO[0]?.adress);

                    if (BENEFICIARY_DETAILS?.length != 0) {
                        getAllFields[70]?.setText(BENEFICIARY_DETAILS[0]?.benneName);
                        getAllFields[71]?.setText(BENEFICIARY_DETAILS[0]?.beneAdrs);
                        getAllFields[72]?.setText(BENEFICIARY_DETAILS[0]?.beneAccNo + '\n' + BENEFICIARY_DETAILS[0]?.iban);
                        getAllFields[73]?.setText(BENEFICIARY_DETAILS[0]?.beneBankName + '' + BENEFICIARY_DETAILS[0]?.beneBankAdress);

                        let spliSwiftCode: any = BENEFICIARY_DETAILS[0]?.beneBankSwiftCode?.split('');
                        if (spliSwiftCode != undefined) {
                            getAllFields[74]?.setText(spliSwiftCode[0]);
                            getAllFields[75]?.setText(spliSwiftCode[1]);
                            getAllFields[76]?.setText(spliSwiftCode[2]);
                            getAllFields[77]?.setText(spliSwiftCode[3]);
                            getAllFields[78]?.setText(spliSwiftCode[4]);
                            getAllFields[79]?.setText(spliSwiftCode[5]);
                            getAllFields[80]?.setText(spliSwiftCode[6]);
                            getAllFields[81]?.setText(spliSwiftCode[7]);
                            getAllFields[82]?.setText(spliSwiftCode[8]);
                            getAllFields[83]?.setText(spliSwiftCode[9]);
                            getAllFields[84]?.setText(spliSwiftCode[10]);
                        }
                        getAllFields[85]?.setText(BENEFICIARY_DETAILS[0]?.sortCode);
                        getAllFields[86]?.setText(BENEFICIARY_DETAILS[0]?.interBankName);

                        let spliIntermediarySwiftCode: any = BENEFICIARY_DETAILS[0]?.interBankSwiftCode?.split('')
                        if (spliIntermediarySwiftCode != undefined) {
                            getAllFields[87]?.setText(spliIntermediarySwiftCode[0]);
                            getAllFields[88]?.setText(spliIntermediarySwiftCode[1]);
                            getAllFields[89]?.setText(spliIntermediarySwiftCode[2]);
                            getAllFields[90]?.setText(spliIntermediarySwiftCode[3]);
                            getAllFields[91]?.setText(spliIntermediarySwiftCode[4]);
                            getAllFields[92]?.setText(spliIntermediarySwiftCode[5]);
                            getAllFields[93]?.setText(spliIntermediarySwiftCode[6]);
                            getAllFields[94]?.setText(spliIntermediarySwiftCode[7]);
                            getAllFields[95]?.setText(spliIntermediarySwiftCode[8]);
                            getAllFields[96]?.setText(spliIntermediarySwiftCode[9]);
                            getAllFields[97]?.setText(spliIntermediarySwiftCode[10]);
                        }
                    }

                    if (filldata != undefined && filldata != null && filldata != '') {
                        if (filldata?.ForeignBankCharges == "BeneficiaryAccount") {
                            getAllFields[98]?.uncheck()
                            getAllFields[99]?.check()
                        } else if (filldata?.ForeignBankCharges == "OwnAccount") {
                            getAllFields[98]?.check()
                            getAllFields[99]?.uncheck()
                        }

                        getAllFields[9]?.setText(filldata?.ADBranch);
                        let remitancedata: any = {
                            Currency: filldata?.paymentTerm[0]?.PIPO_LIST?.currency,
                            CurrencyAmount: [],
                            ExchangeRate: [],
                            INREquivalentAmount: []
                        }
                        filldata?.paymentTerm?.forEach(element => {
                            remitancedata?.CurrencyAmount.push(element?.RemittanceAmount);
                        });
                        getAllFields[10]?.setText(remitancedata?.Currency);
                        getAllFields[11]?.setText(remitancedata?.CurrencyAmount?.join(','))

                        let splitDebitAccount: any = filldata?.BankDebit?.accNumber?.split('');
                        if (splitDebitAccount != undefined) {
                            getAllFields[40]?.setText(splitDebitAccount[0]);
                            getAllFields[41]?.setText(splitDebitAccount[1]);
                            getAllFields[42]?.setText(splitDebitAccount[2]);
                            getAllFields[43]?.setText(splitDebitAccount[3]);
                            getAllFields[44]?.setText(splitDebitAccount[4]);
                            getAllFields[45]?.setText(splitDebitAccount[5]);
                            getAllFields[46]?.setText(splitDebitAccount[6]);
                            getAllFields[47]?.setText(splitDebitAccount[7]);
                            getAllFields[48]?.setText(splitDebitAccount[8]);
                            getAllFields[49]?.setText(splitDebitAccount[9]);
                            getAllFields[50]?.setText(splitDebitAccount[10]);
                            getAllFields[51]?.setText(splitDebitAccount[11]);
                            getAllFields[52]?.setText(splitDebitAccount[12]);
                            getAllFields[53]?.setText(splitDebitAccount[13]);
                        }

                        let splitcustomerid: any = filldata?.CustomerID?.split('')
                        getAllFields[15]?.setText(splitcustomerid[0]);
                        getAllFields[16]?.setText(splitcustomerid[1]);
                        getAllFields[17]?.setText(splitcustomerid[2]);
                        getAllFields[18]?.setText(splitcustomerid[3]);
                        getAllFields[19]?.setText(splitcustomerid[4]);
                        getAllFields[20]?.setText(splitcustomerid[5]);
                        getAllFields[21]?.setText(splitcustomerid[6]);
                        getAllFields[22]?.setText(splitcustomerid[7]);
                        getAllFields[23]?.setText(splitcustomerid[8]);
                        getAllFields[24]?.setText(splitcustomerid[9]);

                        let splitPANNo: any = filldata?.PANNo?.split('')
                        getAllFields[25]?.setText(splitPANNo[0]);
                        getAllFields[26]?.setText(splitPANNo[1]);
                        getAllFields[27]?.setText(splitPANNo[2]);
                        getAllFields[28]?.setText(splitPANNo[3]);
                        getAllFields[29]?.setText(splitPANNo[4]);
                        getAllFields[30]?.setText(splitPANNo[5]);
                        getAllFields[31]?.setText(splitPANNo[6]);
                        getAllFields[32]?.setText(splitPANNo[7]);
                        getAllFields[33]?.setText(splitPANNo[8]);
                        getAllFields[34]?.setText(splitPANNo[9]);



                        let splitDebitChargesAccount: any = filldata?.BankCharges?.accNumber?.split('')
                        if (splitDebitChargesAccount != undefined) {
                            getAllFields[54]?.setText(splitDebitChargesAccount[0]);
                            getAllFields[55]?.setText(splitDebitChargesAccount[1]);
                            getAllFields[56]?.setText(splitDebitChargesAccount[2]);
                            getAllFields[57]?.setText(splitDebitChargesAccount[3]);
                            getAllFields[58]?.setText(splitDebitChargesAccount[4]);
                            getAllFields[59]?.setText(splitDebitChargesAccount[5]);
                            getAllFields[60]?.setText(splitDebitChargesAccount[6]);
                            getAllFields[61]?.setText(splitDebitChargesAccount[7]);
                            getAllFields[62]?.setText(splitDebitChargesAccount[8]);
                            getAllFields[63]?.setText(splitDebitChargesAccount[9]);
                            getAllFields[64]?.setText(splitDebitChargesAccount[10]);
                            getAllFields[65]?.setText(splitDebitChargesAccount[11]);
                            getAllFields[66]?.setText(splitDebitChargesAccount[12]);
                            getAllFields[67]?.setText(splitDebitChargesAccount[13]);
                        }

                        let purppose: any = { Code: [], Description: [] }
                        validator.SELECTED_PURPOSE_CODE_DUMP_SLEECTION?.forEach(element => {
                            purppose?.Code?.push(element?.PurposeCode)
                            purppose?.Description?.push(element?.Description?.join(','))
                        });
                        getAllFields[106]?.setText(purppose?.Code?.join(','));
                        getAllFields[107]?.setText(purppose?.Description?.join(','));
                    }
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
                    let formUrl = './../../../assets/pdf/HDFC/A2.pdf'
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