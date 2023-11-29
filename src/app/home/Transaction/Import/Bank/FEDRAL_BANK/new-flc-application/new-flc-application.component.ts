import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BlendMode, PDFDocument, rgb } from 'pdf-lib';
import { UserService } from '../../../../../../service/user.service';
import { DocumentService } from '../../../../../../service/document.service';
import { DateFormatService } from '../../../../../../DateFormat/date-format.service';
import { PipoDataService } from '../../../../../../service/homeservices/pipo.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { UploadServiceValidatorService } from '../../../../../../components/Upload/service/upload-service-validator.service';
import { ExportBillLodgementData } from '../../../../Export/new-export-bill-lodgement/export-bill-lodgemet-data';
import { AprrovalPendingRejectTransactionsService } from '../../../../../../service/aprroval-pending-reject-transactions.service';
import { StorageEncryptionDecryptionService } from '../../../../../../Storage/storage-encryption-decryption.service';
import { MergePdfListService } from '../../../../../merge-pdf-list.service';
import moment from 'moment'
import { filterAnyTablePagination } from '../../../../../../service/v1/Api/filterAnyTablePagination';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogBoxComponent, ConfirmDialogModel } from '../../../../../confirm-dialog-box/confirm-dialog-box.component';

@Component({
  selector: 'app-new-flc-application',
  templateUrl: './new-flc-application.component.html',
  styleUrls: ['./new-flc-application.component.scss', '../../../../commoncss/common.component.scss']
})
export class NewFLCApplicationComponent implements OnInit {
  @Input('data') data: any = [];
  @Input('BankId') BankId: any = '';
  PREVIWES_URL: any = '';
  VISIBLITY_PDF: boolean = false;
  @Input('RequiredLetterHead') RequiredLetterHead: boolean = false;
  @Output('event') event = new EventEmitter();
  OTHER_DOCUMENTS: any = [];
  SINGLE_TAB_MULITIPLE_TAB: any = '-1';

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
  USER_DATA: any = [];
  FORM_VALUE: any = null;
  ExportBillLodgement_Form: any = '';
  GetDownloadStatus: any = [];
  BUTTON_INDEX: any = ''
  selectedIndex: number = 0;
  LIST_OF_QUESTION: any = [];
  LIST_OF_QUESTION2: any = [];
  LCTransaction_Data: any = []
  PDF_VIEW_URL: any = ''
  CURRENT_DATE: any = moment(new Date()).format('DD-MM-YYYY')
  SubmitButtonDisabled: boolean = true;

  constructor(public sanitizer: DomSanitizer,
    public documentService: DocumentService,
    public date_format: DateFormatService,
    public pipoDataService: PipoDataService,
    public toastr: ToastrService,
    public router: Router,
    public validator: UploadServiceValidatorService,
    public exportbilllodgementdata: ExportBillLodgementData,
    public sessionstorage: StorageEncryptionDecryptionService,
    public pdfmerge: MergePdfListService,
    private actRoute: ActivatedRoute,
    public dialog: MatDialog,
    public filteranytablepagination: filterAnyTablePagination,
    public AprrovalPendingRejectService: AprrovalPendingRejectTransactionsService,
    public userService: UserService) {
    exportbilllodgementdata.clear();
    this.LIST_OF_QUESTION = [
      {
        type: "checkbox",
        value: "",
        label: "39A:*** | PERCENTAGE CREDIT AMOUNT TOLERANCE",
        fieldName: '3',
        id: '39A:***',
        option: [
          {
            value: ``,
            type: "textarea",
            label: "PERCENTAGE CREDIT AMOUNT TOLERANCE",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: "",
        label: "39C:*** | ADDITIONAL AMOUNTS COVERED (USANCE INTEREST)",
        fieldName: '3',
        id: '39C:***',
        option: [
          {
            value: ``,
            type: "textarea",
            label: "ADDITIONAL AMOUNTS COVERED (USANCE INTEREST)",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: "",
        label: "41a : (A/D):*** | CREDIT AVAILABLE WITH CREDIT AVAILABLE BY",
        fieldName: '2',
        id: '41a',
        option: [
          {
            value: "By Sight Payment",
            text: "By Sight Payment",
            type: "checkbox",
          },
          {
            value: "By Deferred Payment",
            text: "By Deferred Payment",
            type: "checkbox",
          },
          {
            value: "By Negotiation",
            text: "By Negotiation",
            type: "checkbox",
          },
          {
            value: "By Acceptance",
            text: "By Acceptance",
            type: "checkbox",
          },
        ]
      },
      {
        type: "checkbox",
        value: "Drawn at ____90______ days from Shipment Date",
        label: "42c:*** | DRAFTS AT",
        fieldName: '3',
        id: '42c:***',
        option: [
          {
            value: `Drawn at ____90______ days from Shipment Date`,
            type: "textarea",
            label: "DRAFTS AT",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: "",
        label: "42a:*** | DRAWEE",
        fieldName: '3',
        id: '42a:***',
        option: [
          {
            value: ``,
            type: "textarea",
            label: "DRAWEE",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: "",
        label: "43P:*** | PARTIAL SHIPMENTS",
        fieldName: '4',
        id: '43P',
        option: [
          {
            value: "PROHIBITED",
            text: "PROHIBITED",
            type: "checkbox",
          },
          {
            value: "PERMITTED",
            text: "PERMITTED",
            type: "checkbox",
          }
        ]
      },
      {
        type: "checkbox",
        value: "",
        label: "TRANSHIPMENTS",
        fieldName: '5',
        id: '43T',
        option: [
          {
            value: "PROHIBITED",
            text: "PROHIBITED",
            type: "checkbox",
          },
          {
            value: "PERMITTED",
            text: "PERMITTED",
            type: "checkbox",
          }
        ]
      },
      {
        type: "checkbox",
        value: "",
        label: "44A:*** | TYPE OF L/C",
        fieldName: '3',
        id: '44A:***',
        option: [
          {
            value: ``,
            type: "textarea",
            label: "TYPE OF L/C",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: "",
        label: "44B:*** | SHIPMENT TO",
        fieldName: '3',
        id: '44B:***',
        option: [
          {
            value: ``,
            type: "textarea",
            label: "SHIPMENT TO",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: "",
        label: "44C:*** | LATEST DATE OF SHIPMENT",
        fieldName: '3',
        id: '44C:***',
        option: [
          {
            value: ``,
            type: "date",
            label: "LATEST DATE OF SHIPMENT",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: "",
        label: "45A:*** | QUANTITY AND DESCRIPTION OF GOODS (BRIEF DETAILS)",
        fieldName: '3',
        id: '45A:***',
        option: [
          {
            value: ``,
            type: "textarea",
            label: "QUANTITY AND DESCRIPTION OF GOODS (BRIEF DETAILS)",
          },
        ]
      },
      {
        type: "checkbox",
        value: "",
        label: "*** | IMPORT LICENCE/OGL DETAILS",
        fieldName: '3',
        id: '***',
        option: [
          {
            value: ``,
            type: "textarea",
            label: "IMPORT LICENCE/OGL DETAILS",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: "",
        label: "*** | IMPORT EXPORT CODE NO.",
        fieldName: '3',
        id: '***',
        option: [
          {
            value: ``,
            type: "textarea",
            label: "IMPORT EXPORT CODE NO.",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: "",
        label: "46A:*** | DOCUMENTS REQUIRED",
        fieldName: '3',
        id: '46A:***',
        option: [
          {
            value: `SIGNED DRAFTS FOR 100% OF THE INVOICE VALUE.
            SIGNED COMMERCIAL INVOICE (S) IN COPIES FULL SET OF SIGNED “CLEAN” "ON BOARD" OCEAN BILLS OF LADING MADE OUT TO ORDER AND BLANK ENDORSED MARKED 
            FREIGHT PREPAID/FREIGHT PAYABLE AT DESTINATION EVIDENCING SHIPMENT OF MERCHANDISE DESCRIBED ABOVE. 
            BILLS OF LADING MUST STATE FULL NAME AND ADDRESS OF BOTH APPLICANT AND ____________________________ BANK LIMITED AS PARTIES TO BE NOTIFIED. 
            OR AIRWAY BILL (ORIGINAL PLUS THREE COPIES) ISSUED BY AIRLINE OR IT’S AGENT MADE IN THE NAME OF ___________________________________ BANK LIMITED 
            FOR ACCOUNT APPLICANT EVIDENCING THE CURRENT AIRFREIGHT OF GOODS. AIRWAY BILL SHOULD BE MARKED “FREIGHT PREPAID/TO COLLECT”. AIRWAY BILLS MUST 
            STATE FULL NAME AND ADDRESS OF APPLICANT AND __________________________ BANK LIMITED AS PARTIES TO BE NOTIFIED. AIRWAY BILL MUST INDICATE FLIGHT NUMBER AND DATE.
            MARINE/AVIATION INSURANCE POLICY OR CERTIFICATE (ORIGINAL PLUS COPY) DATED NOT LATER THAN THE DATE OF BILLS OF LADING/ AIRWAY BILL SIGNED AND ISSUED BY INSURANCE 
            COMPANY MADE TO ORDER AND BLANK ENDORSED IN CURRENCY OF THE CREDIT FOR 110 % OF CIF INVOICE VALUE , COVERING INSTITUTE CARGO CLAUSE (A), WITH EXTENDED COVER FOR 
            TRANSHIPMENT RISKS, IF APPLICABLE, THEFT, PILFERAGE, BREAKAGE AND NON-DELIVERY, INSTITUTE WAR CLAUSE (CARGO) AND INSTITUTE STRIKES CLAUSE (CARGO), 
            INSTITUTE TRANSIT CLAUSES FOR WAREHOUSE TO WAREHOUSE COVER WITH CLAIMS PAYABLE IN INDIA IRRESPECTIVE OF PERCENTAGE.
            SIGNED PACKING LIST IN TRIPLICATE CERTIFICATE OF ORIGIN ISSUED BY CHAMBER OF COMMERCE IN TRILICATE CERTIFYING GOODS OF ORIGIN. 
            SHIPPING COMPANY’S OR THEIR AGENT’S CERTIFICATE (IN DUPLICATE) STATING THAT THE CARRYING VESSEL NAMED IN THE BILL OF LADING IS A SEAWORTHY VESSEL, 
            NOT MORE THAN TWENTY-FIVE YEARS OLD, HAS BEEN APPROVED UNDER INSTITUTE CLASSIFICATION CLAUSE (CLASS MAINTAINED EQUIVALENT TO LLOYDS 100 A1) AND HAS
            BEEN REGISTERED WITH AN APPROVED CLASSIFICATION SOCIETY (CERTIFICATE TO SPECIFY THE NAME OF THE CLASSIFICATION SOCIETY). A CERTIFICATE IN DUPLICATE
            ISSUED BY THE SHIPPING COMPANY OR THEIR AGENT STATING THAT THE VESSEL MENTIONED IN THE BILL OF LADING AND THE PORTS FROM/TO WHICH THE GOODS ARE SHIPPED 
            ARE FREE FROM EMBARGOS AND THAT THERE ARE NO SUBSISTING SANCTIONS IMPOSED ON THE VESSEL/PORT. BENEFICIARY’S CERTIFICATE TO THE EFFECT THAT ONE ADDITIONAL
            SET OF NON- NEGOTIABLE DOCUMENTS INCLUDING ONE COPY EACH OF INVOICE, AWB/BL, INSURANCE DOCUMENTS IF ANY, CERTIFICATE OF ORIGIN HAS BEEN FORWARDED TO THE APPLICANT
            BY COURIER AT THE EARLIEST BUT NOT MORE THAN TWO WORKING DAYS AFTER SHIPMENT. (ANY OTHER DOCUMENTS AS MAY BE REQUIRED)`,
            type: "textarea",
            label: "DOCUMENTS REQUIRED",
            style: `height:300px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: "",
        label: "47 A:T | ADDITIONAL CONDITIONS",
        fieldName: '3',
        id: '47 A:T',
        option: [
          {
            value: `SEPARATE DRAFT AND INVOICE FOR INTEREST AMOUNT REQUIRED INVOICE SHOULD QUOTE IMPORT LICENCE/OGL REFERENCE AND 
            CERTIFY THAT THE GOODS SUPPLIED ARE AS PER PURCHASE ORDER OF THE APPLICANT. GROSS FOB/CIF/CFR VALUE OF THE GOODS BEFORE 
            DEDUCTION OF AGENT’S COMMISSION, IF ANY, MUST NOT EXCEED THE MAXIMUM CREDIT AMOUNT. ALL DOCUMENTS MUST BE IN ENGLISH ALL
            DOCUMENTS MUST MENTION OUR L/C NUMBER AND DATE AND THAT THE GOODS ARE FREELY IMPORTABLE UNDER EXIM POLICY 2009-2014 / ARE 
            IMPORTED UNDER LICENSE NUMBER (WHICHEVER IS APPLICABLE) DOCUMENTS PRODUCED BY REPROGRAPIC PROCESS/COMPUTERISED CARBON COPIES 
            ARE NOT ACCEPTABLE UNLESS MARKED ORIGINAL AND SIGNED. OTHERS, PLEASE SPECIFY`,
            type: "textarea",
            label: "ADDITIONAL CONDITIONS",
            style: `height:300px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: "",
        label: "71 B:*** | SPECIFY IF ANY CHARGES ARE TO BENEFICIARY’S ACCOUNT",
        fieldName: '3',
        id: '71 B:***',
        option: [
          {
            value: ``,
            type: "textarea",
            label: "SPECIFY IF ANY CHARGES ARE TO BENEFICIARY’S ACCOUNT",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: "",
        label: "48:*** | PERIOD OF PRESENTATION OF DOCUMENTS",
        fieldName: '3',
        id: '48:***',
        option: [
          {
            value: ``,
            type: "textarea",
            label: "PERIOD OF PRESENTATION OF DOCUMENTS",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: "",
        label: "49:*** | CONFIRMATION INSTRUCTIONS",
        fieldName: '6',
        id: '49:***',
        option: [
          {
            value: "WITHOUT",
            text: "WITHOUT",
            type: "checkbox",
          },
          {
            value: "CHARGES PAYABLE BY",
            text: "CHARGES PAYABLE BY",
            type: "checkbox",
          }
        ]
      },
      {
        type: "checkbox",
        value: "",
        label: "57a | “ADVISE THROUGH” BANK",
        fieldName: '3',
        id: '57a',
        option: [
          {
            value: ``,
            type: "textarea",
            label: "“ADVISE THROUGH” BANK",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: "",
        label: "72: | SENDER TO RECEIVER INFORMATION",
        fieldName: '7',
        id: '72',
        option: [
          {
            value: "NOT APPLICABLE",
            text: "NOT APPLICABLE",
            type: "checkbox",
          }
        ]
      }
    ]
    this.LIST_OF_QUESTION.forEach((element, index) => {
      element['index'] = index;
      element['Active'] = false
    });
    this.EDIT_OPTION_ENABLED = false;
    console.log(this.LIST_OF_QUESTION, 'LIST_OF_QUESTION');
  }

  ResetQuestion() {
    this.LIST_OF_QUESTION.forEach(element => {
      element['Active'] = false
    });
  }

  LIST_OF_QUESTION_VALUE: any = [];
  QuestionDoneButton() {
    this.LIST_OF_QUESTION_VALUE = [];
    this.LIST_OF_QUESTION.forEach(element => {
      this.LIST_OF_QUESTION_VALUE.push(element?.value);
    });
    console.log(this.LIST_OF_QUESTION, this.LIST_OF_QUESTION_VALUE, this.formvalue, "LIST_OF_QUESTION")
    this.SubmitButtonDisabled = false;
  }

  SUMMARY_LC_DATA: any = [];
  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(async (params) => {
      this.exportbilllodgementdata.clear();
      this.PREVIWES_URL = ''
      this.VISIBLITY_PDF = false;
      this.validator.PIPO_LIST = [];
      this.response(null)
      this.loadData();
    });
    this.EDIT_OPTION_ENABLED = false;
  }
  
  loadData() {
    this.filteranytablepagination.PaginationfilterAnyTable({}, { limit: 10000 }, 'LCTransaction').subscribe((res: any) => {
      this.LCTransaction_Data = res?.data;
      console.log(res, "SendApprovalgetLCTransaction false")
    })
    this.filteranytablepagination.PaginationfilterAnyTable({ SendApproval: true }, { limit: 10000 }, 'LCTransaction').subscribe((res: any) => {
      this.SUMMARY_LC_DATA = res?.data;
      console.log(res, "SendApprovalgetLCTransaction true")
    })
  }
  
  response(args: any) {
    this.publicUrl = '';
    setTimeout(() => {
      this.validator.buildForm({
        BenneName: {
          type: "benne",
          value: "",
          label: "Select Beneficiary",
          rules: {
            required: true,
          }
        },
        SingleMultiple: {
          type: "yesnocheckbox",
          value: '',
          label: "Do you need add Covering Letter?",
          CoveringLetter: true,
          rules: {
            required: true,
          },
          YesNo: '',
        },
        BankDebit: {
          type: "BankCheckBox",
          value: "",
          label: "Select Bank",
          Banklabel: "To Debit Account no. & Account Type*",
          TypeOfCurrency: "INR",
          ChargeLabelHide: true,
          rules: {
            required: true,
          }
        },
        paymentTerm: {
          type: "formGroup",
          label: "",
          GroupLabel: ['PI/PO 1'],
          AddNewRequried: false,
          rules: {
            required: false,
          },
          formArray: [
            [
              {
                type: "PIPO_LIST",
                value: "",
                label: "Select PIPO",
                name: 'PIPO_LIST',
                rules: {
                  required: true,
                },
                callback: (item: any) => {
                  const myForm: any = item?.form?.controls[item?.fieldName] as FormGroup;
                  let currentVal = item?.value;
                  item.form['value'][item?.fieldName][item?.OptionfieldIndex]["RemittanceAmount"] = (currentVal?.amount);
                  myForm.controls[item?.OptionfieldIndex]?.controls["RemittanceAmount"]?.setValue(currentVal?.amount);
                  myForm.controls[item?.OptionfieldIndex]?.controls["currency"]?.setValue(currentVal?.currency);
                  myForm['touched'] = true;
                  myForm['status'] = 'VALID';
                  console.log(item, "callback")
                },
              },
              {
                type: "currency",
                value: "",
                label: "Currency",
                name: 'currency',
                rules: {
                  required: true,
                },
                disabled: true
              },
              {
                type: "TextValiadtion",
                value: "",
                label: "Remittance Amount",
                name: 'RemittanceAmount',
                EqualName: "amount",
                rules: {
                  required: true,
                },
                errormsg: 'Remittance amount should be lesser than  or equal to the available amount.',
              },
            ]
          ]
        },
      }, 'IMPORT_TRANSACTION');
      console.log(this.UPLOAD_FORM, this.cicreate, 'UPLOAD_FORM')
    }, 200);
    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }

  urlletterhead(url: any) {
    this.LETTER_HEAD_URL = url;
    console.log(url, "sadsdasdasdsdas")
  }

  setSelectedBankDetails(bank: any, formvalue: any) {
    this.BankId = bank?.BankUniqueId;
    this.SELECT_BUYER_DETAILS = bank;
    console.log(bank, "setSelectedBankDetails")
    this.fillForm(formvalue);
  }

  BENEFICIARY_DETAILS: any = [];
  PIPO_LIST: any = [];
  BENEFICIARY_CALLBACK(value: any) {
    this.BENEFICIARY_DETAILS = this.validator.BENEFICIARY_DETAILS_LIST.filter((item: any) => item?._id == value?.id);
    this.documentService.filterAnyTable({
      benneName: value?.value,
    }, 'pi_po').subscribe((res: any) => {
      this.PIPO_LIST = res?.data;
      this.validator.PIPO_LIST = this.PIPO_LIST
      console.log(value, res, this.BENEFICIARY_DETAILS, "BENEFICIARY_CALLBACK")
    });
  }

  PIPO_LIST_CHECKED(value: any, index: any) {
    this.validator.PIPO_LIST = [value]
    this.validator.BOE_LIST = value?.boeRef
    this.documentService.filterAnyTable({
      Currency: value?.currency,
    }, 'ForwardContract').subscribe((res: any) => {
      this.ForwardContractDATA = res?.data;
      console.log(res, 'ForwardContractDATA')
    });
    this.response(null);
    this.PIPO_LIST.forEach((element, i) => {
      if (i != index) {
        element['ischecked'] = false;
      } else {
        element['ischecked'] = true;
      }
    });
  }

  getORMRef(advice: any) {
    let advicelist: any = [];
    advice?.forEach(element => {
      advicelist.push(element?.billNo)
    });
    return advicelist?.join(',')
  }

  SELECTED_PIPO_ORM_DETAILS: any = [];
  PIPO_CALLBACK(value: any, panel: any) {
    this.SELECTED_PIPO_ORM_DETAILS = value;
    this.validator.BOE_LIST = value?.boeRef
    panel?.displayShow
  }
  formvalue: any = [];

  SubmitButton(formvalue: any) {
    this.FormValue(formvalue);
    this.formvalue = formvalue?.value
    console.log(formvalue, "SubmitButton")
  }

  async fillForm(filldata: any) {
    console.log(filldata, "fillForm")
    this.VISIBLITY_PDF = false;
    return new Promise(async (resolve, reject) => {
      if (this.BankId == 'F_B_L_6') {
        const formUrl = './../assets/pdf/APPLICATION_LETTER_OF_CREDIT.pdf'
        const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())
        const pdfDoc = await PDFDocument.load(formPdfBytes);
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

        getAllFields[2]?.setText(this.CURRENT_DATE?.toString());
        getAllFields[3]?.setText(this.validator.COMPANY_INFO[0]?.teamName + ' & ' + this.validator.COMPANY_INFO[0]?.adress);

        if (filldata != null && filldata != undefined && filldata != '') {
          this.formvalue["AutoFillValue"] = this.LIST_OF_QUESTION_VALUE
          getAllFields[0]?.setText(filldata?.BankDebit?.bank + '\n' + filldata?.BankDebit?.bicAddress);
          // getAllFields[1]?.setText(this.CURRENT_DATE?.toString());
          getAllFields[4]?.setText(filldata?.BenneName?.value + '\n' + filldata?.BenneName?.Address);
          getAllFields[5]?.setText(this.ConvertNumberToWords(filldata?.paymentTerm[0]?.RemittanceAmount, filldata?.paymentTerm[0]?.PIPO_LIST?.currency));
          getAllFields[7]?.setText(this.ConvertNumberToWords(filldata?.paymentTerm[0]?.RemittanceAmount, filldata?.paymentTerm[0]?.PIPO_LIST?.currency));
          if (filldata?.AutoFillValue != undefined && filldata?.AutoFillValue?.length != 0) {
            getAllFields[6]?.setText(filldata?.AutoFillValue[0]);
            getAllFields[8]?.setText(filldata?.AutoFillValue[1]);
            getAllFields[9]?.setText(filldata?.AutoFillValue[2]);
            getAllFields[10]?.setText(filldata?.AutoFillValue[3]);
            getAllFields[11]?.setText(filldata?.AutoFillValue[4]);
            getAllFields[12]?.setText(filldata?.AutoFillValue[5]);
            getAllFields[13]?.setText(filldata?.AutoFillValue[6]);
            getAllFields[14]?.setText(filldata?.AutoFillValue[7]);
            getAllFields[15]?.setText(filldata?.AutoFillValue[8]);
            getAllFields[16]?.setText(filldata?.AutoFillValue[9]);
            getAllFields[17]?.setText(filldata?.AutoFillValue[10]);
            getAllFields[18]?.setText(filldata?.AutoFillValue[11]);
            getAllFields[19]?.setText(filldata?.AutoFillValue[12]);
            getAllFields[20]?.setText(filldata?.AutoFillValue[13]);
            getAllFields[21]?.setText(filldata?.AutoFillValue[14]);
            getAllFields[22]?.setText(filldata?.AutoFillValue[15]);
            getAllFields[23]?.setText(filldata?.AutoFillValue[16]);
            getAllFields[24]?.setText(filldata?.AutoFillValue[17]);
            getAllFields[25]?.setText(filldata?.AutoFillValue[18]);
            getAllFields[26]?.setText(filldata?.AutoFillValue[19]);


            getAllFields[38]?.setText(this.CURRENT_DATE);
            // getAllFields[39]?.setText(filldata?.BankDebit?.bank);
            getAllFields[40]?.setText(filldata?.BankDebit?.accNumber);
            getAllFields[41]?.setText(this.validator.COMPANY_INFO[0]?.adress);
          }
          // getAllFields[5]?.setText('');
        }
        await pdfDoc.save()
        await this.addWaterMark(pdfDoc, filldata != null ? filldata?.SingleMultiple?.bool : false).then(async (Res: any) => {
          const pdfBytes = await Res.save()
          var base64String1 = this._arrayBufferToBase64(pdfBytes)
          const x1 = 'data:application/pdf;base64,' + base64String1;
          this.PREVIWES_URL = ''
          setTimeout(() => {
            this.PREVIWES_URL = x1;
            this.VISIBLITY_PDF = true;
            setTimeout(() => {
              resolve({ BankUrl: this.PREVIWES_URL, LetterHeadUrl: this.LETTER_HEAD_URL })
              this.event.emit({ BankUrl: this.PREVIWES_URL, LetterHeadUrl: this.LETTER_HEAD_URL });
            }, 200);
          }, 200);
        })
      }
    })
  }

  addWaterMark(pdfDoc: any, condition: boolean) {
    return new Promise(async (resolve, reject) => {
      let jpgImage: any = ''
      const mergedPdf = await PDFDocument.create();
      if (this.validator.COMPANY_INFO?.length != 0) {
        jpgImage = await mergedPdf.embedPng(this.validator.COMPANY_INFO[0]?.letterHead)
      }
      const copiedPages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
      console.log(pdfDoc, pdfDoc.getPageIndices(), copiedPages, jpgImage, this.validator.COMPANY_INFO[0]?.letterHead, "copiedPages")
      copiedPages.forEach((page) => {
        const { width, height } = page.getSize();
        if (condition == true) {
          page.drawImage(jpgImage, {
            x: 0,
            y: 0,
            width: width,
            height: height,
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
    console.log(changes)
  }

  getCurrentDate() {
    const date = new Date();
    let currentDay = String(date.getDate()).padStart(2, '0');
    let currentMonth = String(date.getMonth() + 1).padStart(2, "0");
    let currentYear = date.getFullYear();
    let currentDate = `${currentDay}-${currentMonth}-${currentYear}`;
    return currentDate;
  }

  ConvertNumberToWords(number: any, currentValue: any = '') {
    const amount = number;
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
    var words_string = "";
    if (number != undefined && number != null && number != '') {
      number = number.toString();
      var atemp = number.split(".");
      var number = atemp[0].split(",").join("");
      var n_length = number.length;
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
        words_string = (currentValue + " " + amount + " ( " + currentValue + " " + words_string.split("  ").join(" ") + " ONLY/-)")?.toString()?.toLocaleUpperCase();
      }
    }
    return words_string;
  }

  TITLE_CHANGED: string = 'ADVANCE OUTWARD REMITTANCE'

  async getS3Url() {
    return new Promise(async (reslove, reject) => {
      let temp: any = [];
      await this.userService?.UploadS3Buket({
        fileName: this.guid() + '.pdf', buffer: this.PREVIWES_URL != '' ? this.PREVIWES_URL : this.exportbilllodgementdata.PREVIWES_URL,
        type: 'application/pdf'
      }).subscribe(async (pdfresponse1: any) => {
        temp[1] = pdfresponse1?.url;
        await this.userService?.UploadS3Buket({
          fileName: this.guid() + '.pdf', buffer: this.LETTER_HEAD_URL,
          type: 'application/pdf'
        }).subscribe(async (pdfresponse2: any) => {
          temp[0] = pdfresponse2?.url;
          reslove(temp);
        });
      });
    })
  }

  guid() {
    let s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '_' + s4() + '_' + s4() + '_' + s4() + '_' + s4() + s4() + s4();
  }

  randomId(length = 6) {
    return Math.random().toString(36).substring(2, length + 2);
  };

  PREVIEWS_URL_LIST: any = '';
  alldocuments: any = [];
  SELECTED_PIPO_URL_LIST: any = []
  SELECTED_PREVIEWS_URL: any = ''
  ForwardContractDATA: any = [];
  Send_for_Approval_button: boolean = false;
  async FormValue(fromValue: any) {
    console.log(fromValue?.value, "FormValue");
    if (fromValue?.status != "INVALID") {
      this.ExportBillLodgement_Form = fromValue?.value;
      this.PREVIEWS_URL_LIST = ''
      this.alldocuments = [];
      this.SELECTED_PIPO_URL_LIST = []
      this.Send_for_Approval_button = false;
      this.fillForm(fromValue?.value).then(async (res: any) => {
        await this.getS3Url().then(async (res: any) => {
          await res?.forEach(element => {
            this.alldocuments.push(element)
          });
          await this.OTHER_DOCUMENTS?.forEach(element => {
            this.alldocuments.push(element?.pdf)
          });
          this.ExportBillLodgement_Form?.paymentTerm?.forEach((paymentTermelement, index) => {
            this.SELECTED_PIPO_URL_LIST.push({ name: 'pipo-' + (index + 1), pdf: paymentTermelement?.PIPO_LIST?.doc })
            this.alldocuments.push(paymentTermelement?.PIPO_LIST?.doc);
          });
          var fitertemp: any = this.alldocuments.filter(n => n);
          this.SELECTED_PREVIEWS_URL = '';
          await this.pdfmerge._multiple_merge_pdf(fitertemp).then(async (merge: any) => {
            this.PREVIEWS_URL_LIST = merge?.pdfurl;
            this.SELECTED_PREVIEWS_URL = merge?.pdfurl
            this.Send_for_Approval_button = true;
            console.log(merge?.pdfurl, this.PREVIEWS_URL_LIST, 'FormValuePreviewSlideToggle')
          });
        });
      })
    }
  }

  SaveAsDraft(Id: string, UniqueId: any) {
    if (UniqueId != null) {
      var pipo_id: any = [];
      var pipo_name: any = [];
      for (let index = 0; index < this.formvalue?.paymentTerm?.length; index++) {
        const element = this.formvalue?.paymentTerm[index];
        pipo_id.push(element?.PIPO_LIST?._id)
        pipo_name.push(element?.PIPO_LIST?.pipo_no)
      }
      let sumnewId: any = Id + '' + this.randomId(50)?.toUpperCase()
      this.documentService.addLCTransaction({
        bundel: [this.formvalue],
        file: this.USER_DATA?.sideMenu,
        doc: this.alldocuments[1],
        Documents: this.alldocuments,
        "pipo": pipo_id,
        id: sumnewId,
        SendApproval: false
      }).subscribe((res2: any) => {
        this.router.navigate(['/home/dashboardTask'])
      })
    }
    console.log(UniqueId, this.ExportBillLodgement_Form, 'uiiiiiiiiiiiiii')
  }

  SEND_APPROVAL_DATA: any = [];
  OpenSendApprovalPopUp(data: any, AutofillLCTableButton: any) {
    this.SEND_APPROVAL_DATA = data;
    console.log(data, AutofillLCTableButton, "OpenSendApprovalPopUp")
  }

  SendApproval(Status: string, SEND_APPROVAL_DATA: any, UniqueId: any, POPUP_CLOSE) {
    if (UniqueId != null) {
      var pipo_id: any = [];
      var pipo_name: any = [];
      for (let index = 0; index < SEND_APPROVAL_DATA?.bundel[0]?.paymentTerm?.length; index++) {
        const element = SEND_APPROVAL_DATA?.bundel[0]?.paymentTerm[index];
        pipo_id.push(element?.PIPO_LIST?._id)
        pipo_name.push(element?.PIPO_LIST?.pipo_no)
      }

      var approval_data: any = {
        id: UniqueId + '_' + this.randomId(10),
        tableName: 'LC-Transaction',
        deleteflag: '-1',
        userdetails: this.validator.userData,
        status: 'pending',
        documents: SEND_APPROVAL_DATA?.Documents,
        Types: 'downloadPDF',
        TypeOfPage: 'Transaction',
        FileType: this.validator.userData?.sideMenu
      }
      this.getStatusCheckerMaker(approval_data?.id).then((res: any) => {
        console.log(approval_data, res, 'approval_data')
        if (res?.id != approval_data?.id || res == undefined) {
          this.AprrovalPendingRejectService.DownloadByRole_Transaction_Type(this.validator.userData['RoleCheckbox'], approval_data, () => {
            var data: any = {
              data: {
                formdata: SEND_APPROVAL_DATA,
                documents: SEND_APPROVAL_DATA?.Documents,
                pipo_1: pipo_id,
                Url_Redirect: { file: 'import', document: 'orAdvice', pipo: pipo_name.toString() },
              },
              TypeTransaction: 'LC-Transaction',
              fileType: this.validator.userData?.sideMenu,
              UserDetails: approval_data?.id,
              pipo: pipo_id,
              LCTransactionRef: [SEND_APPROVAL_DATA?._id]
            }
            this.documentService.addExportBillLodgment(data).subscribe((res1: any) => {
              let updatedData = {
                "TransactionRef": [
                  res1._id,
                ]
              }
              this.userService.updateManyPipo(pipo_id, 'import', '', updatedData).subscribe((data) => {
                console.log(data);
                this.toastr.success("LC transaction created successfully...")
                POPUP_CLOSE?.displayHide
                this.documentService.updateLCTransaction(SEND_APPROVAL_DATA?._id, {
                  SendApproval: true
                }).subscribe((res: any) => {

                })
              }, (error) => {
                console.log('error');
              });
            });
          });
        } else {
          this.AprrovalPendingRejectService.CustomConfirmDialogModel.Notification_DialogModel('Send for Approval',
            `You already send for approval <br>&<br>also check ${Status} panel`)
        }
      });
    }
    console.log(UniqueId, approval_data, this.ExportBillLodgement_Form, 'uiiiiiiiiiiiiii')
  }

  getStatusCheckerMaker(id: any) {
    return new Promise((resolve, reject) => {
      this.documentService.getDownloadStatus({ id: id, $or: [{ "deleteflag": '-1' }, { "deleteflag": '1' }, { "deleteflag": '2' }] }).subscribe((res: any) => resolve(res[0]))
    })
  }

  view_pdf(url: any) {
    this.PDF_VIEW_URL = '';
    setTimeout(() => {
      this.PDF_VIEW_URL = url;
    }, 200);
  }

  delete(items: any) {
    const message = `Are you sure you want to delete this?`;
    const dialogData = new ConfirmDialogModel("Confirm Action", message);
    const dialogRef = this.dialog.open(ConfirmDialogBoxComponent, {
      maxWidth: "400px",
      data: dialogData
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.documentService.deleteLCTransaction(items?._id).subscribe((res: any) => {
          this.toastr.success("Sucessfully delete data...")
          this.loadData();
        })
      }
    });
  }

  EDIT_OPTION_ENABLED: boolean = false;
  Edit(items: any, AutofillLCTableButton: any) {
    this.SubmitButtonDisabled = true;
    this.EDIT_OPTION_ENABLED = false;
    console.log(items, AutofillLCTableButton, "Edit")
    this.LIST_OF_QUESTION = [
      {
        type: "checkbox",
        value: items?.bundel[0]?.AutoFillValue[0],
        label: "39A:*** | PERCENTAGE CREDIT AMOUNT TOLERANCE",
        fieldName: '3',
        id: '39A:***',
        option: [
          {
            value: items?.bundel[0]?.AutoFillValue[0],
            type: "textarea",
            label: "PERCENTAGE CREDIT AMOUNT TOLERANCE",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: items?.bundel[0]?.AutoFillValue[1],
        label: "39C:*** | ADDITIONAL AMOUNTS COVERED (USANCE INTEREST)",
        fieldName: '3',
        id: '39C:***',
        option: [
          {
            value: items?.bundel[0]?.AutoFillValue[1],
            type: "textarea",
            label: "ADDITIONAL AMOUNTS COVERED (USANCE INTEREST)",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: items?.bundel[0]?.AutoFillValue[2],
        label: "41a : (A/D):*** | CREDIT AVAILABLE WITH CREDIT AVAILABLE BY",
        fieldName: '2',
        id: '41a',
        option: [
          {
            value: "By Sight Payment",
            text: "By Sight Payment",
            type: "checkbox",
          },
          {
            value: "By Deferred Payment",
            text: "By Deferred Payment",
            type: "checkbox",
          },
          {
            value: "By Negotiation",
            text: "By Negotiation",
            type: "checkbox",
          },
          {
            value: "By Acceptance",
            text: "By Acceptance",
            type: "checkbox",
          },
        ]
      },
      {
        type: "checkbox",
        value: items?.bundel[0]?.AutoFillValue[3],
        label: "42c:*** | DRAFTS AT",
        fieldName: '3',
        id: '42c:***',
        option: [
          {
            value: `Drawn at ____90______ days from Shipment Date`,
            type: "textarea",
            label: "DRAFTS AT",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: items?.bundel[0]?.AutoFillValue[4],
        label: "42a:*** | DRAWEE",
        fieldName: '3',
        id: '42a:***',
        option: [
          {
            value: items?.bundel[0]?.AutoFillValue[4],
            type: "textarea",
            label: "DRAWEE",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: items?.bundel[0]?.AutoFillValue[5],
        label: "43P:*** | PARTIAL SHIPMENTS",
        fieldName: '4',
        id: '43P',
        option: [
          {
            value: "PROHIBITED",
            text: "PROHIBITED",
            type: "checkbox",
          },
          {
            value: "PERMITTED",
            text: "PERMITTED",
            type: "checkbox",
          }
        ]
      },
      {
        type: "checkbox",
        value: items?.bundel[0]?.AutoFillValue[6],
        label: "TRANSHIPMENTS",
        fieldName: '5',
        id: '43T',
        option: [
          {
            value: "PROHIBITED",
            text: "PROHIBITED",
            type: "checkbox",
          },
          {
            value: "PERMITTED",
            text: "PERMITTED",
            type: "checkbox",
          }
        ]
      },
      {
        type: "checkbox",
        value: items?.bundel[0]?.AutoFillValue[7],
        label: "44A:*** | TYPE OF L/C",
        fieldName: '3',
        id: '44A:***',
        option: [
          {
            value: items?.bundel[0]?.AutoFillValue[7],
            type: "textarea",
            label: "TYPE OF L/C",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: items?.bundel[0]?.AutoFillValue[8],
        label: "44B:*** | SHIPMENT TO",
        fieldName: '3',
        id: '44B:***',
        option: [
          {
            value: items?.bundel[0]?.AutoFillValue[8],
            type: "textarea",
            label: "SHIPMENT TO",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: items?.bundel[0]?.AutoFillValue[9],
        label: "44C:*** | LATEST DATE OF SHIPMENT",
        fieldName: '3',
        id: '44C:***',
        option: [
          {
            value: items?.bundel[0]?.AutoFillValue[9],
            type: "date",
            label: "LATEST DATE OF SHIPMENT",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: items?.bundel[0]?.AutoFillValue[10],
        label: "45A:*** | QUANTITY AND DESCRIPTION OF GOODS (BRIEF DETAILS)",
        fieldName: '3',
        id: '45A:***',
        option: [
          {
            value: items?.bundel[0]?.AutoFillValue[10],
            type: "textarea",
            label: "QUANTITY AND DESCRIPTION OF GOODS (BRIEF DETAILS)",
          },
        ]
      },
      {
        type: "checkbox",
        value: items?.bundel[0]?.AutoFillValue[11],
        label: "*** | IMPORT LICENCE/OGL DETAILS",
        fieldName: '3',
        id: '***',
        option: [
          {
            value: items?.bundel[0]?.AutoFillValue[11],
            type: "textarea",
            label: "IMPORT LICENCE/OGL DETAILS",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: items?.bundel[0]?.AutoFillValue[12],
        label: "*** | IMPORT EXPORT CODE NO.",
        fieldName: '3',
        id: '***',
        option: [
          {
            value: items?.bundel[0]?.AutoFillValue[12],
            type: "textarea",
            label: "IMPORT EXPORT CODE NO.",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: items?.bundel[0]?.AutoFillValue[13],
        label: "46A:*** | DOCUMENTS REQUIRED",
        fieldName: '3',
        id: '46A:***',
        option: [
          {
            value: items?.bundel[0]?.AutoFillValue[13],
            type: "textarea",
            label: "DOCUMENTS REQUIRED",
            style: `height:300px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: items?.bundel[0]?.AutoFillValue[14],
        label: "47 A:T | ADDITIONAL CONDITIONS",
        fieldName: '3',
        id: '47 A:T',
        option: [
          {
            value: items?.bundel[0]?.AutoFillValue[14],
            type: "textarea",
            label: "ADDITIONAL CONDITIONS",
            style: `height:300px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: items?.bundel[0]?.AutoFillValue[15],
        label: "71 B:*** | SPECIFY IF ANY CHARGES ARE TO BENEFICIARY’S ACCOUNT",
        fieldName: '3',
        id: '71 B:***',
        option: [
          {
            value: items?.bundel[0]?.AutoFillValue[15],
            type: "textarea",
            label: "SPECIFY IF ANY CHARGES ARE TO BENEFICIARY’S ACCOUNT",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: items?.bundel[0]?.AutoFillValue[16],
        label: "48:*** | PERIOD OF PRESENTATION OF DOCUMENTS",
        fieldName: '3',
        id: '48:***',
        option: [
          {
            value: items?.bundel[0]?.AutoFillValue[16],
            type: "textarea",
            label: "PERIOD OF PRESENTATION OF DOCUMENTS",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: items?.bundel[0]?.AutoFillValue[17],
        label: "49:*** | CONFIRMATION INSTRUCTIONS",
        fieldName: '6',
        id: '49:***',
        option: [
          {
            value: "WITHOUT",
            text: "WITHOUT",
            type: "checkbox",
          },
          {
            value: "CHARGES PAYABLE BY",
            text: "CHARGES PAYABLE BY",
            type: "checkbox",
          }
        ]
      },
      {
        type: "checkbox",
        value: items?.bundel[0]?.AutoFillValue[18],
        label: "57a | “ADVISE THROUGH” BANK",
        fieldName: '3',
        id: '57a',
        option: [
          {
            value: items?.bundel[0]?.AutoFillValue[18],
            type: "textarea",
            label: "“ADVISE THROUGH” BANK",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: items?.bundel[0]?.AutoFillValue[19],
        label: "72: | SENDER TO RECEIVER INFORMATION",
        fieldName: '7',
        id: '72',
        option: [
          {
            value: "NOT APPLICABLE",
            text: "NOT APPLICABLE",
            type: "checkbox",
          }
        ]
      }
    ]
    this.LIST_OF_QUESTION.forEach((element, index) => {
      element['index'] = index;
      element['Active'] = false
    });
    this.BANK_CHECKBOX(items?.bundel[0]?.BankDebit)
    setTimeout(() => {
      this.validator.buildForm({
        BenneName: {
          type: "benne",
          value: items?.bundel[0]?.BenneName,
          label: "Select Beneficiary",
          rules: {
            required: true,
          }
        },
        SingleMultiple: {
          type: "yesnocheckbox",
          value: items?.bundel[0]?.SingleMultiple,
          label: "Do you need add Covering Letter?",
          CoveringLetter: true,
          rules: {
            required: true,
          },
          YesNo: items?.bundel[0]?.SingleMultiple,
        },
        BankDebit: {
          type: "BankCheckBox",
          value: items?.bundel[0]?.BankDebit,
          label: "Select Bank",
          Banklabel: "To Debit Account no. & Account Type",
          TypeOfCurrency: "INR",
          ChargeLabelHide: true,
          bindLabel: 'BankUniqueId',
          rules: {
            required: true,
          }
        },
        paymentTerm: {
          type: "formGroup",
          label: "",
          GroupLabel: ['PI/PO 1'],
          AddNewRequried: false,
          rules: {
            required: false,
          },
          formArray: [
            [
              {
                type: "PIPO_LIST",
                value: items?.bundel[0]?.paymentTerm[0]?.PIPO_LIST,
                label: "Select PIPO",
                name: 'PIPO_LIST',
                rules: {
                  required: true,
                },
                callback: (item: any) => {
                  const myForm: any = item?.form?.controls[item?.fieldName] as FormGroup;
                  let currentVal = item?.value;
                  item.form['value'][item?.fieldName][item?.OptionfieldIndex]["RemittanceAmount"] = (currentVal?.amount);
                  myForm.controls[item?.OptionfieldIndex]?.controls["RemittanceAmount"]?.setValue(currentVal?.amount);
                  myForm.controls[item?.OptionfieldIndex]?.controls["currency"]?.setValue(currentVal?.currency);
                  myForm['touched'] = true;
                  myForm['status'] = 'VALID';
                  console.log(item, "callback")
                },
              },
              {
                type: "currency",
                value: items?.bundel[0]?.paymentTerm[0]?.PIPO_LIST?.currency,
                label: "Currency",
                name: 'currency',
                rules: {
                  required: true,
                },
                disabled: true
              },
              {
                type: "TextValiadtion",
                value: items?.bundel[0]?.paymentTerm[0]?.RemittanceAmount,
                label: "Remittance Amount",
                name: 'RemittanceAmount',
                EqualName: "amount",
                rules: {
                  required: true,
                },
                errormsg: 'Remittance amount should be lesser than  or equal to the available amount.',
              },
            ]
          ]
        },
      }, 'IMPORT_TRANSACTION').then((res) => {
        this.SubmitButtonDisabled = false
        AutofillLCTableButton?.click();
        this.BENEFICIARY_CALLBACK(items?.bundel[0]?.BenneName)
        this.setSelectedBankDetails(items?.bundel[0]?.BankDebit, items?.bundel[0])
        this.EDIT_OPTION_ENABLED = true;
      });
      console.log(this.UPLOAD_FORM, this.cicreate, 'UPLOAD_FORM')
    }, 200);
  }

  BANK_CHECKBOX(value: any) {
    console.log(value, this.validator?.bankDetail[value?.BankUniqueId], this.validator?.bankDetail, "BANK_CHECKBOX")
    this.validator.CHECK_BOX_BANK_LIST = this.validator?.bankDetail[value?.BankUniqueId];
    this.validator.CHECK_BOX_BANK_LIST_CHARGES = []
    this.validator.CHECK_BOX_BANK_LIST_CHARGES = this.validator?.ToCreditAccountdata[value?.BankUniqueId];
    this.validator.CHECK_BOX_BANK_LIST?.forEach(element => {
      if (value?.accNumber == element?.accNumber) {
        element['checked'] = true;
      } else {
        element['checked'] = false;
      }
    });
    this.validator.CHECK_BOX_BANK_LIST_CHARGES?.forEach(element => {
      if (value?.accNumber == element?.accNumber) {
        element['checked'] = true;
      } else {
        element['checked'] = false;
      }
    });
  }

  DownloadPopUp(item: any) {
    this.userService.getReadS3File({ fileName: item?.doc }).subscribe((res: any) => {
      this.userService.ConvertPdfDocx(this._arrayBufferToBase64(res?.pdf?.data)).subscribe((res: any) => {
        console.log(res, "ConvertPdfImage")
        this.arrayBufferToBase64(res?.pdf2doc)
      })
      console.log('data:application/pdf;base64,' + this._arrayBufferToBase64(res?.pdf?.data))
    });
    console.log(item, "DownloadPopUp")
  }

  downloadBuffer(arrayBuffer) {
    const a = document.createElement('a')
    a.href = URL.createObjectURL(new Blob(
      [arrayBuffer],
      { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' }
    ))
    a.download = `LC_${new Date().getTime()}.docx`
    a.click()
  }

  arrayBufferToBase64(Arraybuffer) {
    const url = `data:application/docx;base64,` + Arraybuffer;
    const a = document.createElement('a');
    a.href = url;
    a.download = `LC_${new Date().getTime()}.docx`
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }
}