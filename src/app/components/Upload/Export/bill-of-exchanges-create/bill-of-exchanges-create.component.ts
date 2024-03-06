import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BlendMode, PDFDocument, rgb } from 'pdf-lib';
import { UserService } from '../../../../service/user.service';
import { DocumentService } from '../../../../service/document.service';
import { DateFormatService } from '../../../../DateFormat/date-format.service';
import { PipoDataService } from '../../../../service/homeservices/pipo.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { UploadServiceValidatorService } from '../../service/upload-service-validator.service';
import moment from 'moment';
import { filterAnyTablePagination } from '../../../../service/v1/Api/filterAnyTablePagination';

@Component({
  selector: 'format-bill-of-exchanges',
  templateUrl: './bill-of-exchanges-create.component.html',
  styleUrls: ['./bill-of-exchanges-create.component.scss', '../../commoncss/common.component.scss']
})
export class FormatBillOfExchangesComponent implements OnInit, OnChanges {
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
    public filteranytablepagination: filterAnyTablePagination,
    public userService: UserService) { }

  ngOnInit(): void {
    this.fillForm(null)
  }

  urlletterhead(url: any) {
    this.LETTER_HEAD_URL = url;
  }

  async fillForm(filldata: any) {
    let formUrl: any = '';
    this.VISIBLITY_PDF = false;
    formUrl = './../../assets/pdf/Other/whiteimage.pdf'
    const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())
    const pdfDoc = await PDFDocument.load(formPdfBytes)
    const form: any = pdfDoc.getForm()
    const getAllFields = form?.getFields();
    console.log(this.validator.COMPANY_INFO, "COMPANY_INFO")
    getAllFields.forEach(element => {
      const elementvalue: any = element?.acroField?.dict?.values();
      if (elementvalue[0]?.encodedName == '/Tx') {
        element.setFontSize(8)
        element?.enableReadOnly();
        const [widget]: any = element?.acroField?.getWidgets();
        widget?.getOrCreateBorderStyle()?.setWidth(0);
      }
    });
    if (filldata != null) {
      let sumofci = filldata?.CommericalNoList?.reduce((a, b) => parseFloat(a) + parseFloat(b?.amount), 0);
      let LIST_CI_NO: any = [];
      let LIST_CI_CURRENCY: any = [];

      filldata?.CommericalNoList?.forEach((element: any) => {
        LIST_CI_NO.push(element?.value);
        LIST_CI_CURRENCY.push(element?.currency);
      });
      getAllFields[0]?.setText(filldata?.billExchangeNumber);
      getAllFields[1]?.setText(moment(filldata?.DATE)?.format("DD/MM/YYYY"));
      getAllFields[2]?.setText(LIST_CI_CURRENCY[0] + ' ' + sumofci.toString());
      getAllFields[3]?.setText(filldata?.Bank?.bank + filldata?.Bank?.bicAddress);
      getAllFields[4]?.setText(this.ConvertNumberToWords(sumofci));
      getAllFields[5]?.setText(LIST_CI_NO?.join(','));
      getAllFields[6]?.setText(moment(filldata?.CI_DATE)?.format("DD/MM/YYYY"));
      getAllFields[7]?.setText(filldata?.BLCopy?.value);
      getAllFields[8]?.setText('For ' + this.validator.COMPANY_INFO[0]?.teamName);
      getAllFields[9]?.setText(this.BUYER_DETAILS?.buyerbank + '' + this.BUYER_DETAILS?.buyerbankaddress);
    }
    const pdfBytes = await pdfDoc.save()
    var base64String = this._arrayBufferToBase64(pdfBytes)
    const x = 'data:application/pdf;base64,' + base64String;
    // Fetch PNG image
    const mergedPdf = await PDFDocument.create();
    let jpgImage: any = ''
    if (this.validator.COMPANY_INFO?.length != 0) {
      jpgImage = await mergedPdf.embedPng(this.validator.COMPANY_INFO[0]?.letterHead)
    }
    const copiedPages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
    copiedPages.forEach((page) => {
      page.setFontColor(rgb(0, 0, 0))
      mergedPdf.addPage(page);
      if (this.validator.COMPANY_INFO?.length != 0) {
        const { width, height } = page.getSize();
        page.drawImage(jpgImage, {
          x: 0,
          y: 0,
          width: width,
          height: height,
          opacity: 0.5,
          blendMode: BlendMode.Normal
        });
      }
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
        billExchangeNumber: {
          type: "text",
          value: "",
          label: "Bill Exchange Number",
          rules: {
            required: true,
          }
        },
        DATE: {
          type: "date",
          value: '',
          label: "Current Date",
          rules: {
            required: true,
          }
        },
        CI_DATE: {
          type: "date",
          value: '',
          label: "CI DATE",
          rules: {
            required: true,
          }
        },
        BL_DATE: {
          type: "date",
          value: '',
          label: "BL DATE*",
          rules: {
            required: true,
          }
        },
        Bank: {
          type: "BankCheckBox",
          value: "",
          label: "Select Bank",
          rules: {
            required: true,
          },
          TypeOfCurrency: 'INR',
          ChargeLabelHide: null
        },
        sbNo: {
          type: "ShippingBill",
          value: "",
          label: "Select Shipping Bill",
          rules: {
            required: true,
          }
        },
        CommericalNoList: {
          type: "CommericalListCheckBox",
          value: "",
          label: "Commerical Number*",
          rules: {
            required: true,
          },
          ShowCheckBox: true,
        },
        BLCopy: {
          type: "BLCopy",
          value: "",
          label: "BLCopy Number*",
          rules: {
            required: true,
          }
        },
      }, 'EXPORT_BILL_OF_EXCHANGE').then((res) => this.validator.CHECK_BOX_BANK_LIST_CHARGES = []);
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
      let PIPO_ID_ARRAY: any = [];
      let PI_PO_BUYER_NAME_PI_PO_BENNE_NAME: any = [];
      event?.forEach(element => {
        PIPO_ID_ARRAY.push(element?._id)
        PI_PO_BUYER_NAME_PI_PO_BENNE_NAME.push(element?.id[1])
      });

      this.pipoArr = PIPO_ID_ARRAY?.filter(function (item, pos) { return PIPO_ID_ARRAY.indexOf(item) == pos });
      console.log('Array List', this.pipoArr);
      this.BUYER_LIST = PI_PO_BUYER_NAME_PI_PO_BENNE_NAME
      this.BUYER_LIST = this.BUYER_LIST?.filter(n => n);
      this.response(null);
      this.validator.SHIPPING_BILL_LIST = [];
      this.LoadShippingBill(this.pipoArr);
      this.COMMERCIAL_LIST = [];
      console.log(event, 'sdfsdfdsfdfdsfdsfdsfdsf')
    } else {
      this.btndisabled = true;
    }
    console.log(event, 'sdfsdfdsfdfdsfdsfdsfdsf')
  }

  LoadShippingBill(pipoArr: any) {
    this.filteranytablepagination.PaginationfilterAnyTable({
      pipo: pipoArr
    }, { limit: 20 }, 'masterrecord').subscribe((res: any) => {
      console.log(res, "LoadShippingBill")
      this.validator.SHIPPING_BILL_MASTER_DATA = res?.data;
      this.validator.origin = [];
      this.validator.SHIPPING_BUNDEL = [];
      this.validator.SHIPPING_BILL_LIST = [];
      res?.data?.forEach((element, i) => {
        if (element?.sbno != null && element?.sbno != undefined && element?.sbno != '') {
          this.validator.SHIPPING_BUNDEL.push({ pipo: element?.pipo[0], id: element?.pipo[0]?._id, sbno: element?.sbno, SB_ID: element?._id, amount: element?.fobValue });
          this.validator.SHIPPING_BILL_LIST.push({ pipo: element?.pipo[0], id: element?.pipo[0]?._id, sbno: element?.sbno, SB_ID: element?._id, amount: element?.fobValue });
        }
        this.validator.origin[i] = { value: element?.countryOfFinaldestination, id: element?._id };
      });
      console.log('Master Country', this.validator.SHIPPING_BUNDEL, this.validator.origin);
    })
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
