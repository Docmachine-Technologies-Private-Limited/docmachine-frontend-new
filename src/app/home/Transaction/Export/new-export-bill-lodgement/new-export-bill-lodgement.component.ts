import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PDFDocument } from 'pdf-lib';
import { UserService } from '../../../../service/user.service';
import { DocumentService } from '../../../../service/document.service';
import { DateFormatService } from '../../../../DateFormat/date-format.service';
import { PipoDataService } from '../../../../service/homeservices/pipo.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { UploadServiceValidatorService } from '../../../../components/Upload/service/upload-service-validator.service';
import { ExportBillLodgementData } from './export-bill-lodgemet-data';

@Component({
  selector: 'new-export-bill-lodgement',
  templateUrl: './new-export-bill-lodgement.component.html',
  styleUrls: ['./new-export-bill-lodgement.component.scss', '../../commoncss/common.component.scss']
})
export class NewExportBillLodgementComponent implements OnInit {
  @Input('data') data: any = [];
  @Input('BankId') BankId: any = '';
  PREVIWES_URL: any = '';
  VISIBLITY_PDF: boolean = false;
  @Input('RequiredLetterHead') RequiredLetterHead: boolean = false;
  @Output('event') event = new EventEmitter();
  TOTAL_SUM_FIREX: any = 0;
  TOTAL_SUM_FIREX_COMMISION: any = 0
  CURRENCY: string = ''
  TICK_MARKS: any = ''
  FIRX_DATE_NO: any = {
    NUMBER: [],
    DATE: [],
    AMOUNT: []
  }
  TOTAL_PIPO_AMOUNT: any = 0;
  SB_NO: any = '';
  FILETR_AMOUNT: any = [];
  SELECT_BUYER_DETAILS: any = '';
  LETTER_HEAD_URL: any = '';
  publicUrl: any = '';
  UPLOAD_FORM: any = [];
  CURRENCY_LIST: any = [];
  BUYER_DETAILS: any = [];
  BUYER_ADDRESS_DETAILS: any = [];
  ConsigneeNameList: any = [];
  btndisabled: boolean = true;
  PIPO_DATA: any = [];
  INVOICE_LIST: any = {
    sno: '1',
    invoiceno: '',
    amount: '',
    currency: ''
  };
  pipourl1: any = '';
  pipoArr: any = [];
  dynamicFormGroup: FormGroup;
  fields: any = [];
  model = {};
  SHIPPING_BILL_LIST: any = [];
  BUYER_LIST: any = [];
  CommercialNumber: any = [];
  COMMERCIAL_LIST: any = [];
  commerciallist: any = [];
  SHIPPING_BUNDEL: any = [];
  SUBMIT_ERROR: boolean = false;
  cicreate: any = [];
  GroupLabel: any = [];
  CI_INFO_SUM: any = {
    CI_SUM: 0,
    TOTAL_CI: 0,
    PIPO_AMOUNT: 0,
    REMAINING_AMOUNT: 0
  }

  FORM_VALUE: any = null;

  constructor(public sanitizer: DomSanitizer,
    public documentService: DocumentService,
    public date_format: DateFormatService,
    public pipoDataService: PipoDataService,
    public toastr: ToastrService,
    public router: Router,
    public validator: UploadServiceValidatorService,
    public exportbilllodgementdata:ExportBillLodgementData,
    public userService: UserService) { }

  ngOnInit(): void {
    console.log(this.exportbilllodgementdata,"exportbilllodgementdata")
    this.response(null);
  }

  urlletterhead(url: any) {
    this.LETTER_HEAD_URL = url;
  }

  async fillForm(filldata: any) {
    let formUrl: any = '';
    this.VISIBLITY_PDF = false;
    if (this.BankId != '') {
      if (this.BankId == 'F_B_L_6') {
        formUrl = './../../assets/pdf/FedralBank/Export_bill_submission_format.pdf'
      }
      const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())
      const pdfDoc = await PDFDocument.load(formPdfBytes)
      const form: any = pdfDoc.getForm()
      const getAllFields = form?.getFields();
      getAllFields.forEach(element => {
        const elementvalue: any = element?.acroField?.dict?.values();
        if (elementvalue[0]?.encodedName == '/Tx') {
          // element?.setFontSize(11);
          element.setFontSize(8)
          element?.enableReadOnly();
          const [widget]: any = element?.acroField?.getWidgets();
          widget?.getOrCreateBorderStyle()?.setWidth(0);
        }
      });

      getAllFields[0]?.setText('');
      getAllFields[1]?.setText('');
      getAllFields[2]?.setText('');
      getAllFields[3]?.setText('');
      getAllFields[4]?.setText('');
      getAllFields[5]?.setText(filldata[3]?.teamName);
      getAllFields[6]?.setText(filldata[3]?.adress);
      getAllFields[7]?.setText('');
      getAllFields[8]?.setText('');
      getAllFields[8]?.setText('');
      getAllFields[9]?.setText('');
      getAllFields[10]?.setText('');
      getAllFields[11]?.setText('');
      getAllFields[12]?.setText(this.SELECT_BUYER_DETAILS?.buyerName);
      getAllFields[13]?.setText(this.SELECT_BUYER_DETAILS?.buyerAdrs);
      getAllFields[14]?.setText('');
      getAllFields[15]?.setText('');
      getAllFields[16]?.setText('');
      getAllFields[17]?.setText('');
      getAllFields[18]?.setText('');
      getAllFields[19]?.uncheck()
      getAllFields[20]?.uncheck()
      getAllFields[21]?.setText(filldata[2][0]?.bank + '\n' + filldata[2][0]?.bicAddress);
      getAllFields[22]?.uncheck()
      getAllFields[23]?.uncheck()
      getAllFields[24]?.setText(filldata[0][0] != undefined ? filldata[0][0]['commercialdetails'][0]?.commercialNumber : '');
      getAllFields[25]?.setText(this.SELECT_BUYER_DETAILS?.buyerbank + '' + this.SELECT_BUYER_DETAILS?.buyerbankaddress);

      if (filldata[0][0]?.balanceAvai != undefined) {
        if (filldata[0][0]?.balanceAvai > (this.TOTAL_SUM_FIREX + this.TOTAL_SUM_FIREX_COMMISION)) {
          getAllFields[26]?.check()
          getAllFields[27]?.uncheck()
        } else {
          getAllFields[26]?.uncheck()
          getAllFields[27]?.check()
        }
      } else {
        getAllFields[26]?.uncheck()
        getAllFields[27]?.uncheck()
      }
      getAllFields[28]?.setText(this.FIRX_DATE_NO?.NUMBER.join(','));
      getAllFields[29]?.setText(this.FIRX_DATE_NO?.DATE.join(','));
      getAllFields[30]?.setText(this.CURRENCY);
      getAllFields[31]?.setText(!isNaN(this.TOTAL_SUM_FIREX) ? this.TOTAL_SUM_FIREX.toString() : '0');
      getAllFields[32]?.setText(this.CURRENCY);
      getAllFields[33]?.setText(filldata[0][0]?.invoices[0]?.amount != undefined ? this.ConvertNumberToWords(filldata[0][0]?.invoices[0]?.amount).toUpperCase() : '0');
      getAllFields[34]?.setText(filldata[0][0]?.invoices[0]?.amount);
      getAllFields[35]?.uncheck();
      getAllFields[36]?.uncheck();
      getAllFields[37]?.setText('');
      getAllFields[38]?.setText('');
      getAllFields[39]?.setText('');
      getAllFields[40]?.setText(this.HSCODE_LIST?.join(","));
      getAllFields[41]?.setText('');
      getAllFields[42]?.setText(filldata[0][0]?.countryOfFinaldestination);
      getAllFields[43]?.setText(filldata[0][0] != undefined ? filldata[0][0]['blcopydetails'][0]?.airwayBlCopyNumber : '');
      getAllFields[44]?.setText(this.SB_NO?.toString());
      getAllFields[45]?.setText(filldata[0][0]?.portCode);
      getAllFields[46]?.setText(filldata[0][0]?.sbdate);
      getAllFields[47]?.setText('');
      getAllFields[48]?.setText('');
      getAllFields[49]?.setText('');
      getAllFields[50]?.setText('');
      getAllFields[51]?.setText('');
      getAllFields[52]?.setText('');
      getAllFields[53]?.setText('');
      getAllFields[54]?.setText('');
      getAllFields[55]?.setText('');
      getAllFields[56]?.setText('');
      getAllFields[57]?.setText('');
      getAllFields[58]?.setText('');
      getAllFields[59]?.setText('');
      getAllFields[60]?.setText('');
      getAllFields[61]?.setText('');
      getAllFields[62]?.setText('');
      getAllFields[63]?.setText('');
      getAllFields[64]?.setText('');
      // OD/CC/CA
      getAllFields[65]?.setText(filldata[2][0]?.accNumber?.split('')[0]);
      getAllFields[66]?.setText(filldata[2][0]?.accNumber?.split('')[1]);
      getAllFields[67]?.setText(filldata[2][0]?.accNumber?.split('')[2]);
      getAllFields[68]?.setText(filldata[2][0]?.accNumber?.split('')[3]);
      getAllFields[69]?.setText(filldata[2][0]?.accNumber?.split('')[4]);
      getAllFields[70]?.setText(filldata[2][0]?.accNumber?.split('')[5]);
      getAllFields[71]?.setText(filldata[2][0]?.accNumber?.split('')[6]);
      getAllFields[72]?.setText(filldata[2][0]?.accNumber?.split('')[7]);
      getAllFields[73]?.setText(filldata[2][0]?.accNumber?.split('')[8]);
      getAllFields[74]?.setText(filldata[2][0]?.accNumber?.split('')[9]);
      getAllFields[75]?.setText(filldata[2][0]?.accNumber?.split('')[10]);
      getAllFields[76]?.setText(filldata[2][0]?.accNumber?.split('')[11]);
      getAllFields[77]?.setText(filldata[2][0]?.accNumber?.split('')[12]);
      getAllFields[78]?.setText('');
      getAllFields[79]?.uncheck();
      getAllFields[80]?.uncheck();
      getAllFields[81]?.uncheck();
      getAllFields[82]?.uncheck();
      getAllFields[83]?.uncheck();
      getAllFields[84]?.setText('');
      getAllFields[85]?.uncheck();
      getAllFields[86]?.uncheck();
      getAllFields[87]?.uncheck();
      getAllFields[88]?.setText('');
      getAllFields[89]?.uncheck();
      getAllFields[90]?.uncheck();
      getAllFields[91]?.uncheck();
      getAllFields[92]?.uncheck();
      getAllFields[93]?.uncheck();
      getAllFields[94]?.uncheck();
      getAllFields[95]?.setText('');
      getAllFields[96]?.setText('');
      getAllFields[97]?.setText('');
      getAllFields[98]?.setText('');
      getAllFields[99]?.setText('');
      getAllFields[100]?.setText('');
      getAllFields[101]?.setText(this.FIRX_DATE_NO?.DATE[0]);
      getAllFields[102]?.setText(this.FIRX_DATE_NO?.NUMBER[0]);
      getAllFields[103]?.setText(this.FIRX_DATE_NO?.AMOUNT[0]);
      getAllFields[104]?.setText(filldata[0][0]?.fobValue?.toString());
      if (this.FIRX_DATE_NO?.DATE[1] != undefined) {
        getAllFields[105]?.setText(this.FIRX_DATE_NO?.DATE[1]);
        getAllFields[106]?.setText(this.FIRX_DATE_NO?.NUMBER[1]);
        getAllFields[107]?.setText(this.FIRX_DATE_NO?.AMOUNT[1]);
        getAllFields[108]?.setText(filldata[0][0]?.fobValue?.toString());
      }

      if (this.FIRX_DATE_NO?.DATE[2] != undefined) {
        getAllFields[109]?.setText(this.FIRX_DATE_NO?.DATE[2]);
        getAllFields[110]?.setText(this.FIRX_DATE_NO?.NUMBER[2]);
        getAllFields[111]?.setText(this.FIRX_DATE_NO?.AMOUNT[2]);
        getAllFields[112]?.setText(filldata[0][0]?.fobValue?.toString());
      }
      getAllFields[113]?.setText('');

      const pdfBytes = await pdfDoc.save()
      var base64String = this._arrayBufferToBase64(pdfBytes)
      const x = 'data:application/pdf;base64,' + base64String;

      const mergedPdf = await PDFDocument.create();
      const copiedPages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
      copiedPages.forEach((page) => {
        mergedPdf.addPage(page);
      });
      const mergedPdfFile = await mergedPdf.save();
      const mergedPdfload = await PDFDocument.load(mergedPdfFile);
      const mergedPdfFileload = await mergedPdfload.save();
      var base64String1 = this._arrayBufferToBase64(mergedPdfFileload)
      const x1 = 'data:application/pdf;base64,' + base64String1;
      this.PREVIWES_URL = '';
      setTimeout(() => {
        this.PREVIWES_URL = x1;
        this.VISIBLITY_PDF = true;
        setTimeout(() => {
          this.event.emit({ BankUrl: this.PREVIWES_URL, LetterHeadUrl: this.LETTER_HEAD_URL });
        }, 200);
      }, 200);
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

  HSCODE_LIST: any = [];
  ngOnChanges(changes: SimpleChanges): void {
    this.data = changes?.data?.currentValue != undefined ? changes?.data?.currentValue : this.data;
    console.log(changes, 'asdasdasdasdasdasds')
    this.BankId = changes?.data?.currentValue[2][0]?.BankUniqueId != undefined ? changes?.data?.currentValue[2][0]?.BankUniqueId : this.BankId;
    if (this.data != undefined) {
      this.SB_NO = changes?.data?.currentValue[5];
      if (this.data[0].length != 0) {
        this.FILETR_AMOUNT = this.data[0].filter((item: any) => item?.sbno?.includes(this.SB_NO))
        this.TOTAL_PIPO_AMOUNT = this.FILETR_AMOUNT[0]?.invoices[0]?.amount
        this.FIRX_DATE_NO['NUMBER'] = [];
        this.FIRX_DATE_NO['DATE'] = [];
        this.FIRX_DATE_NO['AMOUNT'] = [];
        this.TOTAL_SUM_FIREX = this.data[1]['SB_' + this.SB_NO]?.reduce(function (a, b) { return parseFloat(a) + parseFloat(b?.irDataItem?.Used_Balance) }, 0);
        this.TOTAL_SUM_FIREX_COMMISION = 0;
        this.data[1]['SB_' + this.SB_NO]?.forEach(element => {
          if (element?.irDataItem?.CommissionUsed == false) {
            this.TOTAL_SUM_FIREX_COMMISION = parseInt(this.TOTAL_SUM_FIREX_COMMISION) + parseInt(element?.irDataItem?.commision)
          }
        });
        this.HSCODE_LIST = [];
        changes?.data?.currentValue[0]?.forEach(element => {
          console.log(element?.pipo[0], "HSCODE")
          this.HSCODE_LIST.push(element?.pipo[0]?.HSCODE)
        });
        this.TOTAL_SUM_FIREX = this.TOTAL_SUM_FIREX - this.TOTAL_SUM_FIREX_COMMISION;
        console.log(this.TOTAL_SUM_FIREX_COMMISION, (this.TOTAL_SUM_FIREX - this.TOTAL_SUM_FIREX_COMMISION), this.data[1]['SB_' + this.SB_NO], "TOTAL_SUM_FIREX_COMMISION")
        this.CURRENCY = this.FILETR_AMOUNT[0]?.currency;
        this.data[1]['SB_' + this.SB_NO]?.forEach(element => {
          this.FIRX_DATE_NO?.NUMBER?.push(element?.irDataItem?.billNo)
          this.FIRX_DATE_NO?.DATE?.push(element?.irDataItem?.date)
          this.FIRX_DATE_NO?.AMOUNT?.push(element?.irDataItem?.Used_Balance)
        });
      }

      this.SELECT_BUYER_DETAILS = changes?.data?.currentValue[6]
      setTimeout(() => {
        this.fillForm(this.data);
      }, 200);
    }
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


  response(args: any) {
    this.publicUrl = '';
    setTimeout(() => {
      this.validator.buildForm({
        Bank: {
          type: "BankCheckBox",
          value: "",
          label: "Select Bank",
          rules: {
            required: true,
          }
        },
        AgainstAdvanceReceipt: {
          type: "yesnocheckbox",
          value: '',
          label: "Against advance receipt?",
          rules: {
            required: true,
          },
          YesNo: ''
        },
        SHIPPING_BILL: {
          type: "PopupOpen",
          value: '',
          label: "Select PI/PO or shipping bill",
          rules: {
            required: true,
          },
          class: "PopupOpen",
          bindLabel: "value",
          item: [{ value: 'Shipping bill' }],
          id: "SHIPING_BILL_POPUP",
        },
        DirectDispatch: {
          type: "yesnocheckbox",
          value: '',
          label: "Direct Dispatch?",
          rules: {
            required: true,
          },
          YesNo: ''
        },
        UnderLC: {
          type: "yesnocheckbox",
          value: '',
          label: "Under LC?",
          rules: {
            required: true,
          },
          YesNo: ''
        },
        Sight: {
          type: "yesnocheckbox",
          value: '',
          label: "Sight?",
          rules: {
            required: true,
          },
          YesNo: ''
        },
        Usance: {
          type: "yesnocheckbox",
          value: '',
          label: "Usance?",
          rules: {
            required: true,
          },
          YesNo: ''
        },
        WithScrutiny: {
          type: "yesnocheckbox",
          value: '',
          label: "With Discount?",
          rules: {
            required: true,
          },
          YesNo: ''
        },
        BuyerRemitterDifferent: {
          type: "yesnocheckbox",
          value: '',
          label: "Is Buyer remitter different?",
          rules: {
            required: true,
          },
          YesNo: ''
        },
        InvoiceReduction: {
          type: "yesnocheckbox",
          value: '',
          label: "Is Invoice reduction?",
          rules: {
            required: true,
          },
          YesNo: ''
        },
        WithDiscount: {
          type: "yesnocheckbox",
          value: '',
          label: "With Discount?",
          rules: {
            required: true,
          },
          YesNo: ''
        },
      }, 'EXPORT_BILL_OF_EXCHANGE');
      console.log(this.UPLOAD_FORM, this.cicreate, 'UPLOAD_FORM')
    }, 200);
    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }

  onSubmit(e: any) {
    console.log(e, 'value')
    this.fillForm(e);
    this.FORM_VALUE = e;
  }

  checkValueExit(list: any) {
    return new Promise((resolve, reject) => {
      let counterlist: any = {
        count: 0,
        no: [],
        status: false
      };
      if (list?.length == 0) {
        resolve(counterlist);
        return;
      }
      for (let index = 0; index < list.length; index++) {
        const element: any = list[index];
        this.documentService.getInvoice_No({
          commercialNumber: element?.commercialNumber
        }, 'commercials').subscribe((resp: any) => {
          if (resp.data.length != 0) {
            counterlist['count'] += 1;
            counterlist['no'].push(element?.commercialNumber);
          }
          if ((index + 1) == list.length) {
            counterlist['status'] = counterlist['count'] == 0 ? true : false
            resolve(counterlist);
          }
        });
      }
    })
  }
  clickPipo(event: any) {
    if (event != undefined) {
      this.btndisabled = false;
      this.pipoArr = [event?._id]
      console.log('Array List', this.pipoArr);
      this.BUYER_LIST[0] = (event?.id[1])
      this.BUYER_LIST = this.BUYER_LIST?.filter(n => n);
      this.BUYER_DETAILS = this.validator.BUYER_DETAILS_MASTER.filter((item: any) => item?.buyerName?.includes(event?.id[1]))[0]
      this.response(null);
      // this.pipoDataService.getShippingNo(event?._id, 'export');
      // this.validator.SHIPPING_BILL_LIST = [];
      // for (let j = 0; j < this.validator.SHIPPING_BUNDEL.length; j++) {
      //   if (this.validator.SHIPPING_BUNDEL[j]?.id == event?._id) {
      //     this.validator.SHIPPING_BILL_LIST.push(this.validator.SHIPPING_BUNDEL[j]);
      //   }
      // }
      this.COMMERCIAL_LIST = [];
      console.log(event, 'sdfsdfdsfdfdsfdsfdsfdsf')
    } else {
      this.btndisabled = true;
    }
    console.log(event, 'sdfsdfdsfdfdsfdsfdsfdsf')
  }
  onChangeShippingBill(data: any) {
    console.log(data, "onChangeShippingBill")
    this.validator.COMMERICAL_NO = [];
    let fileterdata = this.validator.SHIPPING_BILL_MASTER_DATA.filter((item: any) => item?._id?.includes(data?.SB_ID))[0];
    fileterdata?.commercialdetails?.forEach(element => {
      let checkexit = this.validator.COMMERICAL_NO.filter((item: any) => item?.value?.includes(element?.commercialNumber))
      if (checkexit?.length == 0) {
        this.validator.COMMERICAL_NO.push({
          value: element?.commercialNumber,
          id: element?._id, sbno: element?.sbNo,
          sbid: element?.sbRef[0],
          doc: element?.commercialDoc,
          currency: element?.currency,
          amount: element?.amount
        });
      }
    });
    this.validator.BL_COPY_LIST = [];
    fileterdata?.blcopydetails?.forEach(element => {
      let checkexit = this.validator.BL_COPY_LIST.filter((item: any) => item?.value?.includes(element?.airwayBlCopyNumber))
      if (checkexit?.length == 0) {
        this.validator.BL_COPY_LIST.push({ value: element?.airwayBlCopyNumber, id: element?._id, no: element?.sbNo, sbid: element?.sbRef[0], doc: element?.commercialDoc });
      }
    });

    console.log('changedCommercial', fileterdata, this.validator.COMMERICAL_NO, this.validator.BL_COPY_LIST)
  }

  onFillForm(callback: any) {
    if (this.FORM_VALUE != undefined && this.FORM_VALUE != null) {
      this.documentService.getInvoice_No({
        billExchangeNumber: this.FORM_VALUE?.billExchangeNumber
      }, 'billOfExchange').subscribe(async (resp: any) => {
        console.log('billOfExchangeRef Invoice_No', resp)
        if (resp.data.length == 0) {
          await this.userService?.UploadS3Buket({
            fileName: this.guid() + '.pdf', buffer: this.PREVIWES_URL,
            type: 'application/pdf'
          }).subscribe(async (pdfresponse1: any) => {
            this.FORM_VALUE.file = 'export';
            this.FORM_VALUE.pipo = this.pipoArr;
            console.log('pipoarrya', this.pipoArr);
            this.FORM_VALUE.doc = pdfresponse1?.url;
            this.FORM_VALUE.buyerName = this.BUYER_LIST;
            this.documentService.addBillExchange(this.FORM_VALUE).subscribe((res: any) => {
              this.toastr.success(`BillExchange Invoice Added Successfully`);
              let updatedData = {
                "billOfExchangeRef": [
                  res.data._id,
                ],
              }
              this.userService.updateManyPipo(this.pipoArr, 'commercial', pdfresponse1?.url, updatedData).subscribe((data) => {
                console.log('commercial', data);
                this.router.navigate(['home/Summary/Export/bill-of-exchange']);
              }, (error) => {
                console.log('error');
              });
            }, (err) => console.log('Error adding pipo'));
          });
        } else {
          this.toastr.error(`Please check this BillExchange no. : ${this.FORM_VALUE?.billExchangeNumber} already exit...`);
        }
      });
    }
  }

  guid() {
    let s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '_' + s4() + '_' + s4() + '_' + s4() + '_' + s4() + s4() + s4();
  }
  onChangeBLCopy(data: any) {
  }
}