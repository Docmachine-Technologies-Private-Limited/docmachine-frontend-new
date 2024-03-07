import { Injectable } from "@angular/core";
import { UserService } from "../../../../service/user.service";
import { DocumentService } from "../../../../service/document.service";
import { BlendMode, PDFDocument } from "pdf-lib";
import moment from 'moment';

@Injectable({ providedIn: 'root' })
export class A1WIthFEMAControllerData {
    COMPANY_INFO: any = {};
    CURRENT_DATE: any = moment(new Date).format('DD-MM-YYYY')
    constructor(public documentService: DocumentService,
        private userService: UserService) {
        this.userService.getTeam().subscribe((data: any) => { this.COMPANY_INFO = data?.data[0] }, error => { console.log("error", error) });
    }

    BankFormatLoad() {
        return {
            Fedral: (validator, BENEFICIARY_DETAILS, filldata, ToForwardContract_Selected) => {
                return {
                    A1FORM: async () => {
                        return new Promise(async (resolve, reject) => {
                            console.log(validator, BENEFICIARY_DETAILS, filldata, ToForwardContract_Selected, "ToForwardContract_Selected")
                            let formUrl = './../../../assets/pdf/FedralBank/A1_Form296.pdf'
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
                            getAllFields[0]?.setText(validator.COMPANY_INFO[0]?.teamName + '\n' + validator.COMPANY_INFO[0]?.adress);

                            if (filldata != undefined && filldata != null && filldata != '') {
                                getAllFields[1]?.setText(filldata?.BankCharges?.bank + '\n' + filldata?.BankCharges?.bicAddress);

                                let PIPO_DATA: any = {
                                    Currency: [],
                                    Amount: [],
                                    Commodity: [],
                                    HSCODE: [],
                                    DATE_NO: [],
                                    CurrencyAmount: []
                                }

                                filldata?.paymentTerm?.forEach(element => {
                                    PIPO_DATA["Currency"].push(element?.PIPO_LIST?.currency)
                                    PIPO_DATA["Amount"].push(element?.RemittanceAmount)
                                    PIPO_DATA["Commodity"].push(element?.PIPO_LIST?.commodity)
                                    PIPO_DATA["HSCODE"].push(element?.PIPO_LIST?.HSCODE)
                                    PIPO_DATA["DATE_NO"].push(element?.PIPO_LIST?.date + ' | ' + element?.PIPO_LIST?.pi_poNo)
                                    PIPO_DATA["CurrencyAmount"].push(element?.PIPO_LIST?.currency + ' | ' + element?.PIPO_LIST?.amount)
                                });
                                let RemittanceAmount: any = PIPO_DATA["Amount"]?.reduce((a, b) => parseFloat(a) + parseFloat(b), 0)
                                getAllFields[2]?.setText(PIPO_DATA?.Currency[0]);
                                getAllFields[3]?.setText(RemittanceAmount?.toString() + ' ' + this.ConvertNumberToWords(RemittanceAmount));
                            }
                            getAllFields[4]?.setText(BENEFICIARY_DETAILS[0]?.benneName + '\n' + BENEFICIARY_DETAILS[0]?.beneAdrs + '\n' + BENEFICIARY_DETAILS[0]?.beneAccNo);
                            getAllFields[5]?.setText(BENEFICIARY_DETAILS[0]?.beneBankName + '\n' + BENEFICIARY_DETAILS[0]?.beneBankAdress + '\n' + BENEFICIARY_DETAILS[0]?.iban + '\n' + BENEFICIARY_DETAILS[0]?.beneBankSwiftCode);
                            getAllFields[8]?.setText(this.CURRENT_DATE);
                            // getAllFields[9]?.setText(validator.COMPANY_INFO[0]?.teamName + '\n' + validator.COMPANY_INFO[0]?.adress);
                            await pdfDoc.save();

                            this.addForSealWaterMark(pdfDoc, validator, [
                                {
                                    index: 1,
                                    x: 350,
                                    y: 120
                                }]).then(async (res: any) => {
                                    const pdfBytes = await res?.save()
                                    var base64String1 = this._arrayBufferToBase64(pdfBytes)
                                    const x1 = 'data:application/pdf;base64,' + base64String1;
                                    await resolve(x1);
                                })
                            // var base64String1 = this._arrayBufferToBase64(mergedPdfFile)
                            // const x1 = 'data:application/pdf;base64,' + base64String1;
                            // console.log(x1, "base64String1")
                            // await resolve(x1);
                        })
                    },
                    FEMAPDF: async () => {
                        return new Promise(async (resolve, reject) => {
                            console.log(validator, BENEFICIARY_DETAILS, filldata, ToForwardContract_Selected, "ToForwardContract_Selected")
                            let formUrl = './../../../assets/pdf/FedralBank/FEMA.pdf'
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

                            // getAllFields[0]?.setText(validator.COMPANY_INFO[0]?.teamName + '\n' + validator.COMPANY_INFO[0]?.adress);
                            getAllFields[1]?.setText(this.CURRENT_DATE);
                            // const mergedPdfFile = await pdfDoc.save();
                            // var base64String1 = this._arrayBufferToBase64(mergedPdfFile)
                            // const x1 = 'data:application/pdf;base64,' + base64String1;
                            // console.log(x1, "base64String1")
                            // await resolve(x1);
                            await pdfDoc.save();

                            this.addForSealWaterMark(pdfDoc, validator, [
                                {
                                    index: 0,
                                    x: 580,
                                    y: 25
                                }]).then(async (res: any) => {
                                    const pdfBytes = await res?.save()
                                    var base64String1 = this._arrayBufferToBase64(pdfBytes)
                                    const x1 = 'data:application/pdf;base64,' + base64String1;
                                    await resolve(x1);
                                })
                        })
                    }
                }
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

    addForSealWaterMark(pdfDoc: any, validator, indexList: any = []) {
        return new Promise(async (resolve, reject) => {
            let jpgImage: any = ''
            const mergedPdf = await PDFDocument.create();
            if (validator.COMPANY_INFO?.length != 0) {
                jpgImage = await mergedPdf.embedPng(validator.COMPANY_INFO[0]?.forSeal)
            }
            const copiedPages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
            copiedPages.forEach((page, index) => {
                const { width, height } = page.getSize();
                let data = indexList?.filter((item: any) => item?.index == index);
                if (data?.length != 0) {
                    page.drawImage(jpgImage, {
                        x: width - data[0]?.x,
                        y: data[0]?.y,
                        width: 250,
                        height: 250,
                        opacity: 1,
                        blendMode: BlendMode.Multiply
                    });
                }
                mergedPdf.addPage(page);
            });
            const mergedPdfFile = await mergedPdf.save();
            const mergedPdfload = await PDFDocument.load(mergedPdfFile);
            resolve(mergedPdfload)
        })
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