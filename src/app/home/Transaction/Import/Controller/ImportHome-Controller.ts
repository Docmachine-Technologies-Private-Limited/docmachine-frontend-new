import { Injectable } from "@angular/core";
import { UserService } from "../../../../service/user.service";
import { ToastrService } from "ngx-toastr";
import { DocumentService } from "../../../../service/document.service";
import { PDFDocument } from "pdf-lib";
import { Router } from "@angular/router";
import moment from 'moment';

@Injectable({ providedIn: 'root' })
export class ImportHomeControllerData {
    COMPANY_INFO: any = {};
    CURRENT_DATE:any=moment(new Date).format('DD-MM-YYYY')
    constructor(public documentService: DocumentService,
        private router: Router,
        private toastr: ToastrService,
        private userService: UserService) {
        this.userService.getTeam().subscribe((data: any) => { this.COMPANY_INFO = data?.data[0] }, error => { console.log("error", error) });
    }

    BankFormatLoad() {
        return {
            Fedral: async (charge, credit, Inward_Remittance_MT103, generatePurpose, ToForwardContract_Selected) => {
                return new Promise(async (resolve, reject) => {
                console.log(charge, credit, Inward_Remittance_MT103, generatePurpose, ToForwardContract_Selected,"ToForwardContract_Selected")
                    const formUrl = './../../../assets/pdf/FedralBank/Inward_Remittance_disposal_format.pdf'
                    const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())
                    const pdfDoc = await PDFDocument.load(formPdfBytes)
                    const form: any = pdfDoc.getForm()
                    const getAllFields = form?.getFields();
                    getAllFields?.forEach(element => {
                        const elementvalue: any = element?.acroField?.dict?.values();
                        if (elementvalue[0]?.encodedName == '/Tx') {
                            element?.setFontSize(8);
                            element?.enableReadOnly();
                            const [widget]: any = element?.acroField?.getWidgets();
                            widget?.getOrCreateBorderStyle()?.setWidth(0); // trying to restore border
                        }
                    });
                    getAllFields[0].setText(this.COMPANY_INFO?.BranchName)
                    getAllFields[3].setText(this.COMPANY_INFO?.teamName)
                    if (charge?.length!=0) {
                        getAllFields[4].setText(charge[0])
                        getAllFields[5].setText(charge[1])
                        getAllFields[6].setText(charge[2])
                        getAllFields[7].setText(charge[3])
                        getAllFields[8].setText(charge[4])
                        getAllFields[9].setText(charge[5])
                        getAllFields[10].setText(charge[6])
                        getAllFields[11].setText(charge[7])
                        getAllFields[12].setText(charge[8])
                        getAllFields[13].setText(charge[9])
                        getAllFields[14].setText(charge[10])
                        getAllFields[15].setText(charge[11])
                        getAllFields[16].setText(charge[12])
                        getAllFields[17].setText(charge[13])
                        getAllFields[18].setText('Export')
                        getAllFields[19].setText('')
                        const updatedata: any = Inward_Remittance_MT103[Inward_Remittance_MT103.length - 1];
                        getAllFields[20].setText(updatedata?.currency)
                        getAllFields[21].setText(this.documentService.toWords(updatedata?.Inward_amount_for_disposal).toUpperCase())
                        getAllFields[22].setText(updatedata?.Inward_amount_for_disposal?.toString())
                        getAllFields[23].setText(updatedata?.BuyerName?.value)
                        getAllFields[24].setText(updatedata?.BuyerName?.Address)
                        getAllFields[25].setText('ADVANCE AGAINST EXPORT')
                        getAllFields[25].setFontSize(8);
                        getAllFields[26].setText(generatePurpose[0])

                        getAllFields[77].setText(credit[0])
                        getAllFields[78].setText(credit[1])
                        getAllFields[79].setText(credit[2])
                        getAllFields[80].setText(credit[3])
                        getAllFields[81].setText(credit[4])
                        getAllFields[82].setText(credit[5])
                        getAllFields[83].setText(credit[6])
                        getAllFields[84].setText(credit[7])
                        getAllFields[85].setText(credit[8])
                        getAllFields[86].setText(credit[9])
                        getAllFields[87].setText(credit[10])
                        getAllFields[88].setText(credit[11])
                        getAllFields[89].setText(credit[12])
                        getAllFields[90].setText(credit[13])

                        getAllFields[105].setText(charge[0])
                        getAllFields[106].setText(charge[1])
                        getAllFields[107].setText(charge[2])
                        getAllFields[108].setText(charge[3])
                        getAllFields[109].setText(charge[4])
                        getAllFields[110].setText(charge[5])
                        getAllFields[111].setText(charge[6])
                        getAllFields[112].setText(charge[7])
                        getAllFields[113].setText(charge[8])
                        getAllFields[114].setText(charge[9])
                        getAllFields[115].setText(charge[10])
                        getAllFields[116].setText(charge[11])
                        getAllFields[117].setText(charge[12])
                        getAllFields[118].setText(charge[13])
                    }
                    if (ToForwardContract_Selected != undefined && ToForwardContract_Selected?.length != 0) {
                        let bookingdatesplit = ToForwardContract_Selected[0]?.BookingDate?.replaceAll('-', '')?.split('');
                        let duedatesplit = ToForwardContract_Selected[0]?.ToDate?.replaceAll('-', '')?.split('');
                        getAllFields[119].setText(ToForwardContract_Selected[0]?.ForwardRefNo)
                        getAllFields[120].setText(bookingdatesplit[6])
                        getAllFields[121].setText(bookingdatesplit[7])
                        getAllFields[122].setText(bookingdatesplit[4])
                        getAllFields[123].setText(bookingdatesplit[5])
                        getAllFields[124].setText(bookingdatesplit[0])
                        getAllFields[125].setText(bookingdatesplit[1])
                        getAllFields[126].setText(bookingdatesplit[2])
                        getAllFields[127].setText(bookingdatesplit[3])

                        getAllFields[128].setText(duedatesplit[6])
                        getAllFields[129].setText(duedatesplit[7])
                        getAllFields[130].setText(duedatesplit[4])
                        getAllFields[131].setText(duedatesplit[5])
                        getAllFields[132].setText(duedatesplit[0])
                        getAllFields[133].setText(duedatesplit[1])
                        getAllFields[134].setText(duedatesplit[2])
                        getAllFields[135].setText(duedatesplit[3])

                        getAllFields[136].setText(ToForwardContract_Selected[0]?.BookingAmount)
                        getAllFields[137].setText(ToForwardContract_Selected[0]?.UtilizedAmount)
                        getAllFields[138].setText(ToForwardContract_Selected[0]?.NetRate);
                    }

                    getAllFields[139].setText(this.CURRENT_DATE)
                    const mergedPdfFile = await pdfDoc.save();
                    var base64String1 = this._arrayBufferToBase64(mergedPdfFile)
                    const x1 = 'data:application/pdf;base64,' + base64String1;
                    console.log(x1,"base64String1")
                    await resolve(x1);
                })
            },
            HDFC: async (charge, credit, Inward_Remittance_MT103, generatePurpose, ToForwardContract_Selected) => {
                return new Promise(async (resolve, reject) => {
                console.log(charge, credit, Inward_Remittance_MT103, generatePurpose, ToForwardContract_Selected,"ToForwardContract_Selected")
                    const formUrl = './../../../assets/pdf/FedralBank/Inward_Remittance_disposal_format.pdf'
                    const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())
                    const pdfDoc = await PDFDocument.load(formPdfBytes)
                    const form: any = pdfDoc.getForm()
                    const getAllFields = form?.getFields();
                    getAllFields?.forEach(element => {
                        const elementvalue: any = element?.acroField?.dict?.values();
                        if (elementvalue[0]?.encodedName == '/Tx') {
                            element?.setFontSize(8);
                            element?.enableReadOnly();
                            const [widget]: any = element?.acroField?.getWidgets();
                            widget?.getOrCreateBorderStyle()?.setWidth(0); // trying to restore border
                        }
                    });
                    getAllFields[0].setText(this.COMPANY_INFO?.BranchName)
                    getAllFields[3].setText(this.COMPANY_INFO?.teamName)
                    if (charge?.length!=0) {
                        getAllFields[4].setText(charge[0])
                        getAllFields[5].setText(charge[1])
                        getAllFields[6].setText(charge[2])
                        getAllFields[7].setText(charge[3])
                        getAllFields[8].setText(charge[4])
                        getAllFields[9].setText(charge[5])
                        getAllFields[10].setText(charge[6])
                        getAllFields[11].setText(charge[7])
                        getAllFields[12].setText(charge[8])
                        getAllFields[13].setText(charge[9])
                        getAllFields[14].setText(charge[10])
                        getAllFields[15].setText(charge[11])
                        getAllFields[16].setText(charge[12])
                        getAllFields[17].setText(charge[13])
                        getAllFields[18].setText('Export')
                        getAllFields[19].setText('')
                        const updatedata: any = Inward_Remittance_MT103[Inward_Remittance_MT103.length - 1];
                        getAllFields[20].setText(updatedata?.currency)
                        getAllFields[21].setText(this.documentService.toWords(updatedata?.Inward_amount_for_disposal).toUpperCase())
                        getAllFields[22].setText(updatedata?.Inward_amount_for_disposal?.toString())
                        getAllFields[23].setText(updatedata?.BuyerName?.value)
                        getAllFields[24].setText(updatedata?.BuyerName?.Address)
                        getAllFields[25].setText('ADVANCE AGAINST EXPORT')
                        getAllFields[25].setFontSize(8);
                        getAllFields[26].setText(generatePurpose[0])

                        getAllFields[77].setText(credit[0])
                        getAllFields[78].setText(credit[1])
                        getAllFields[79].setText(credit[2])
                        getAllFields[80].setText(credit[3])
                        getAllFields[81].setText(credit[4])
                        getAllFields[82].setText(credit[5])
                        getAllFields[83].setText(credit[6])
                        getAllFields[84].setText(credit[7])
                        getAllFields[85].setText(credit[8])
                        getAllFields[86].setText(credit[9])
                        getAllFields[87].setText(credit[10])
                        getAllFields[88].setText(credit[11])
                        getAllFields[89].setText(credit[12])
                        getAllFields[90].setText(credit[13])

                        getAllFields[105].setText(charge[0])
                        getAllFields[106].setText(charge[1])
                        getAllFields[107].setText(charge[2])
                        getAllFields[108].setText(charge[3])
                        getAllFields[109].setText(charge[4])
                        getAllFields[110].setText(charge[5])
                        getAllFields[111].setText(charge[6])
                        getAllFields[112].setText(charge[7])
                        getAllFields[113].setText(charge[8])
                        getAllFields[114].setText(charge[9])
                        getAllFields[115].setText(charge[10])
                        getAllFields[116].setText(charge[11])
                        getAllFields[117].setText(charge[12])
                        getAllFields[118].setText(charge[13])
                    }
                    if (ToForwardContract_Selected != undefined && ToForwardContract_Selected?.length != 0) {
                        let bookingdatesplit = ToForwardContract_Selected[0]?.BookingDate?.replaceAll('-', '')?.split('');
                        let duedatesplit = ToForwardContract_Selected[0]?.ToDate?.replaceAll('-', '')?.split('');
                        getAllFields[119].setText(ToForwardContract_Selected[0]?.ForwardRefNo)
                        getAllFields[120].setText(bookingdatesplit[6])
                        getAllFields[121].setText(bookingdatesplit[7])
                        getAllFields[122].setText(bookingdatesplit[4])
                        getAllFields[123].setText(bookingdatesplit[5])
                        getAllFields[124].setText(bookingdatesplit[0])
                        getAllFields[125].setText(bookingdatesplit[1])
                        getAllFields[126].setText(bookingdatesplit[2])
                        getAllFields[127].setText(bookingdatesplit[3])

                        getAllFields[128].setText(duedatesplit[6])
                        getAllFields[129].setText(duedatesplit[7])
                        getAllFields[130].setText(duedatesplit[4])
                        getAllFields[131].setText(duedatesplit[5])
                        getAllFields[132].setText(duedatesplit[0])
                        getAllFields[133].setText(duedatesplit[1])
                        getAllFields[134].setText(duedatesplit[2])
                        getAllFields[135].setText(duedatesplit[3])

                        getAllFields[136].setText(ToForwardContract_Selected[0]?.BookingAmount)
                        getAllFields[137].setText(ToForwardContract_Selected[0]?.UtilizedAmount)
                        getAllFields[138].setText(ToForwardContract_Selected[0]?.NetRate);
                    }

                    getAllFields[139].setText(this.CURRENT_DATE)
                    const mergedPdfFile = await pdfDoc.save();
                    var base64String1 = this._arrayBufferToBase64(mergedPdfFile)
                    const x1 = 'data:application/pdf;base64,' + base64String1;
                    console.log(x1,"base64String1")
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