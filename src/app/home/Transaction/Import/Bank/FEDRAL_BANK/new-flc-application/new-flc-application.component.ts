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
    this.EDIT_OPTION_ENABLED = false;
    console.log(this.LIST_OF_QUESTION, 'LIST_OF_QUESTION');
  }

  ResetQuestion() {
    this.LIST_OF_QUESTION.forEach(element => {
      element['Active'] = false
    });
  }

  LIST_OF_QUESTION_VALUE: any = [];
  QuestionDoneButton(value: any,AutofillLCTablePanel) {
    this.SubmitButtonDisabled = true;
    if (value?.status != "INVALID") {
      this.LIST_OF_QUESTION_VALUE = value?.value;
      this.SubmitButtonDisabled = false;
      AutofillLCTablePanel?.displayHidden
    } else {
      this.toastr.error("Fill All mandorty field...")
    }
    console.log(value, this.LIST_OF_QUESTION, this.LIST_OF_QUESTION_VALUE, this.formvalue, "LIST_OF_QUESTION")
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
      setTimeout(() => {
        this.validator.buildForm({
          SequenceofTotal: {
            type: "LABLE_CHECKBOX",
            value: "",
            label: "27 | Sequence of Total",
            id: '27',
            rules: {
              required: true,
            },
            option: [
              {
                value: ``,
                type: "textarea",
                label: "Sequence of Total",
                style: `height:100px !important;`
              },
            ]
          },
          "FormofDocumentaryCredit": {
            type: "LABLE_CHECKBOX",
            value: "",
            label: "40A | Form of Documentary Credit",
            fieldName: '3',
            id: '40A',
            rules: {
              required: true,
            },
            option: [
              {
                value: ``,
                type: "textarea",
                label: "Form of Documentary Credit",
                style: `height:100px !important;`
              },
            ]
          },
          "DocumentaryCreditNumber": {
            type: "LABLE_CHECKBOX",
            value: "",
            label: "20 | Documentary Credit Number",
            fieldName: '2',
            id: '20',
            rules: {
              required: true,
            },
            option: [
              {
                value: ``,
                type: "textarea",
                label: "Documentary Credit Number",
                style: `height:100px !important;`
              },
            ]
          },
          "ReferencetoPreAdvice": {
            type: "LABLE_CHECKBOX",
            value: "",
            label: "23 | Reference to Pre-Advice",
            fieldName: '3',
            id: '23',
            rules: {
              required: false,
            },
            option: [
              {
                value: ``,
                type: "textarea",
                label: "Reference to Pre-Advice",
                style: `height:100px !important;`
              },
            ]
          },
          "DateofIssue": {
            type: "LABLE_CHECKBOX",
            value: "",
            label: "31C | Date of Issue",
            fieldName: '3',
            id: '31C',
            rules: {
              required: true,
            },
            option: [
              {
                value: ``,
                type: "date",
                label: "Date of Issue",
                style: `height:100px !important;`
              },
            ]
          },
          "ApplicableRules": {
            type: "LABLE_CHECKBOX",
            value: "",
            label: "40E | Applicable Rules",
            fieldName: '4',
            id: '40E',
            rules: {
              required: true,
            },
            option: [
              {
                value: ``,
                type: "textarea",
                label: "Applicable Rules",
                style: `height:100px !important;`
              },
            ]
          },
          "DateandPlaceofExpiry": {
            type: "LABLE_CHECKBOX",
            value: "",
            label: "31D | Date and Place of Expiry",
            fieldName: '5',
            id: '31D',
            rules: {
              required: true,
            },
            option: [
              {
                value: ``,
                type: "textarea",
                label: "Date and Place of Expiry",
                style: `height:100px !important;`
              },
            ]
          },
          "ApplicantBank": {
            type: "LABLE_CHECKBOX",
            value: "",
            label: "51a | Applicant Bank",
            fieldName: '3',
            id: '51a',
            rules: {
              required: false,
            },
            option: [
              {
                value: ``,
                type: "textarea",
                label: "Applicant Bank",
                style: `height:100px !important;`
              },
            ]
          },
          "Applicant": {
            type: "LABLE_CHECKBOX",
            value: "",
            label: "50 | Applicant",
            fieldName: '3',
            id: '50',
            rules: {
              required: true,
            },
            option: [
              {
                value: ``,
                type: "textarea",
                label: "Applicant",
                style: `height:100px !important;`
              },
            ]
          },
          "Beneficiary": {
            type: "LABLE_CHECKBOX",
            value: "",
            label: "59 | Beneficiary",
            fieldName: '3',
            id: '59',
            rules: {
              required: true,
            },
            option: [
              {
                value: ``,
                type: "textarea",
                label: "Beneficiary",
                style: `height:100px !important;`
              },
            ]
          },
          "CurrencyCodeAmount": {
            type: "LABLE_CHECKBOX",
            value: "",
            label: "32B | Currency Code, Amount",
            fieldName: '3',
            id: '32B',
            rules: {
              required: true,
            },
            option: [
              {
                value: ``,
                type: "textarea",
                label: "Currency Code, Amount",
              },
            ]
          },
          "PercentageCreditAmountTolerance": {
            type: "LABLE_CHECKBOX",
            value: "",
            label: "39A | Percentage Credit Amount Tolerance",
            fieldName: '3',
            id: '39A',
            rules: {
              required: false,
            },
            option: [
              {
                value: ``,
                type: "textarea",
                label: "Percentage Credit Amount Tolerance",
                style: `height:100px !important;`
              },
            ]
          },
          "AdditionalAmountsCovered": {
            type: "LABLE_CHECKBOX",
            value: "",
            label: "39C | Additional Amounts Covered",
            fieldName: '3',
            id: '39C',
            rules: {
              required: false,
            },
            option: [
              {
                value: ``,
                type: "textarea",
                label: "Additional Amounts Covered",
                style: `height:100px !important;`
              },
            ]
          },
          "AvailableWithBy": {
            type: "LABLE_CHECKBOX",
            value: "",
            label: "41a | Available With ... By ...",
            fieldName: '3',
            id: '41a',
            rules: {
              required: true,
            },
            option: [
              {
                value: ``,
                type: "textarea",
                label: "Available With ... By ...",
                style: `height:300px !important;`
              },
            ]
          },
          "DraftsAt": {
            type: "LABLE_CHECKBOX",
            value: "",
            label: "42C | Drafts at ...",
            fieldName: '3',
            id: '42C',
            rules: {
              required: false,
            },
            option: [
              {
                value: ``,
                type: "textarea",
                label: "Drafts at ...",
                style: `height:100px !important;`
              },
            ]
          },
          "Drawee": {
            type: "LABLE_CHECKBOX",
            value: "",
            label: "42a | Drawee",
            fieldName: '3',
            id: '42a',
            rules: {
              required: false,
            },
            option: [
              {
                value: ``,
                type: "textarea",
                label: "Drawee",
                style: `height:100px !important;`
              },
            ]
          },
          "MixedPaymentDetails": {
            type: "LABLE_CHECKBOX",
            value: "",
            label: "42M | Mixed Payment Details",
            fieldName: '6',
            id: '42M',
            rules: {
              required: false,
            },
            option: [
              {
                value: ``,
                type: "textarea",
                label: "Mixed Payment Details",
                style: `height:100px !important;`
              },
            ]
          },
          "NegotiationDeferredPaymentDetails": {
            type: "LABLE_CHECKBOX",
            value: "",
            label: "42P | Negotiation/Deferred Payment Details",
            fieldName: '3',
            id: '42P',
            rules: {
              required: false,
            },
            option: [
              {
                value: ``,
                type: "textarea",
                label: "Negotiation/Deferred Payment Details",
                style: `height:100px !important;`
              },
            ]
          },
          "PartialShipments": {
            type: "LABLE_CHECKBOX",
            value: "",
            label: "43P | Partial Shipments",
            fieldName: '7',
            id: '43P',
            rules: {
              required: false,
            },
            option: [
              {
                value: ``,
                type: "textarea",
                label: "Partial Shipments",
                style: `height:100px !important;`
              },
            ]
          },
          "Transhipment": {
            type: "LABLE_CHECKBOX",
            value: "",
            label: "43T | Transhipment",
            fieldName: '7',
            id: '43T',
            rules: {
              required: false,
            },
            option: [
              {
                value: ``,
                type: "textarea",
                label: "Transhipment",
                style: `height:100px !important;`
              },
            ]
          },
          "PlaceofTakinginChargeDispatchfromPlaceofReceipt": {
            type: "LABLE_CHECKBOX",
            value: "",
            label: "44A | Place of Taking in Charge/Dispatch from .../Place of Receipt",
            fieldName: '7',
            id: '44A',
            rules: {
              required: false,
            },
            option: [
              {
                value: ``,
                type: "textarea",
                label: "Place of Taking in Charge/Dispatch from .../Place of Receipt",
                style: `height:100px !important;`
              },
            ]
          },
          "PortofLoadingAirportofDeparture": {
            type: "LABLE_CHECKBOX",
            value: "",
            label: "44E | Port of Loading/Airport of Departure",
            fieldName: '7',
            id: '44E',
            rules: {
              required: false,
            },
            option: [
              {
                value: ``,
                type: "textarea",
                label: "Port of Loading/Airport of Departure",
                style: `height:100px !important;`
              },
            ]
          },
          "PortofDischargeAirportofDestination": {
            type: "LABLE_CHECKBOX",
            value: "",
            label: "44F | Port of Discharge/Airport of Destination",
            fieldName: '7',
            id: '44F',
            rules: {
              required: false,
            },
            option: [
              {
                value: ``,
                type: "textarea",
                label: "Port of Discharge/Airport of Destination",
                style: `height:100px !important;`
              },
            ]
          },
          "PlaceofFinalDestinationTransportationPlaceofDelivery": {
            type: "LABLE_CHECKBOX",
            value: "",
            label: "44B | Place of Final Destination/For Transportation to .../Place of Delivery",
            fieldName: '7',
            id: '44B',
            rules: {
              required: false,
            },
            option: [
              {
                value: ``,
                type: "textarea",
                label: "Place of Final Destination/For Transportation to .../Place of Delivery",
                style: `height:100px !important;`
              },
            ]
          },
          "LatestDateofShipment": {
            type: "LABLE_CHECKBOX",
            value: "",
            label: "44C | Latest Date of Shipment",
            fieldName: '7',
            id: '44C',
            rules: {
              required: false,
            },
            option: [
              {
                value: ``,
                type: "textarea",
                label: "Latest Date of Shipment",
                style: `height:100px !important;`
              },
            ]
          },
          "ShipmentPeriod": {
            type: "LABLE_CHECKBOX",
            value: "",
            label: "44D | Shipment Period",
            fieldName: '7',
            id: '44D',
            rules: {
              required: false,
            },
            option: [
              {
                value: ``,
                type: "textarea",
                label: "Shipment Period",
                style: `height:100px !important;`
              },
            ]
          },
          "DescriptionofGoodsServices": {
            type: "LABLE_CHECKBOX",
            value: "",
            label: "45A | Description of Goods and/or Services",
            fieldName: '7',
            id: '45A',
            rules: {
              required: false,
            },
            option: [
              {
                value: ``,
                type: "textarea",
                label: "Description of Goods and/or Services",
                style: `height:100px !important;`
              },
            ]
          },
          "DocumentsRequired": {
            type: "LABLE_CHECKBOX",
            value: "",
            label: "46A | Documents Required",
            fieldName: '7',
            id: '46A',
            rules: {
              required: false,
            },
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
                label: "Documents Required",
                style: `height:100px !important;`
              },
            ]
          },
          "AdditionalConditions": {
            type: "LABLE_CHECKBOX",
            value: "",
            label: "47A | Additional Conditions",
            fieldName: '7',
            id: '47A',
            rules: {
              required: false,
            },
            option: [
              {
                value: `SEPARATE DRAFT AND INVOICE FOR INTEREST AMOUNT REQUIRED INVOICE SHOULD QUOTE IMPORT LICENCE/OGL REFERENCE AND 
                CERTIFY THAT THE GOODS SUPPLIED ARE AS PER PURCHASE ORDER OF THE APPLICANT. GROSS FOB/CIF/CFR VALUE OF THE GOODS BEFORE 
                DEDUCTION OF AGENT’S COMMISSION, IF ANY, MUST NOT EXCEED THE MAXIMUM CREDIT AMOUNT. ALL DOCUMENTS MUST BE IN ENGLISH ALL
                DOCUMENTS MUST MENTION OUR L/C NUMBER AND DATE AND THAT THE GOODS ARE FREELY IMPORTABLE UNDER EXIM POLICY 2009-2014 / ARE 
                IMPORTED UNDER LICENSE NUMBER (WHICHEVER IS APPLICABLE) DOCUMENTS PRODUCED BY REPROGRAPIC PROCESS/COMPUTERISED CARBON COPIES 
                ARE NOT ACCEPTABLE UNLESS MARKED ORIGINAL AND SIGNED. OTHERS, PLEASE SPECIFY`,
                type: "textarea",
                label: "Additional Conditions",
                style: `height:100px !important;`
              },
            ]
          },
          "SpecialPaymentConditionsforBeneficiary": {
            type: "LABLE_CHECKBOX",
            value: "",
            label: "49G | Special Payment Conditions for Beneficiary",
            fieldName: '7',
            id: '49G',
            rules: {
              required: false,
            },
            option: [
              {
                value: ``,
                type: "textarea",
                label: "Special Payment Conditions for Beneficiary",
                style: `height:100px !important;`
              },
            ]
          },
          "SpecialPaymentConditionsforBankOnly": {
            type: "LABLE_CHECKBOX",
            value: "",
            label: "49H | Special Payment Conditions for Bank Only",
            fieldName: '7',
            id: '49H',
            rules: {
              required: false,
            },
            option: [
              {
                value: ``,
                type: "textarea",
                label: "Special Payment Conditions for Bank Only",
                style: `height:100px !important;`
              },
            ]
          },
          "Charges": {
            type: "LABLE_CHECKBOX",
            value: "",
            label: "71D | Charges",
            fieldName: '7',
            id: '71D',
            rules: {
              required: false,
            },
            option: [
              {
                value: ``,
                type: "textarea",
                label: "Charges",
                style: `height:100px !important;`
              },
            ]
          }
        }, 'AutofillLCTableForm');
        console.log(this.UPLOAD_FORM, this.cicreate, 'UPLOAD_FORM')
      }, 200);
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
          ChargeLabelHide: false,
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

        // getAllFields[2]?.setText(this.CURRENT_DATE?.toString());
        // getAllFields[3]?.setText(this.validator.COMPANY_INFO[0]?.teamName + ' & ' + this.validator.COMPANY_INFO[0]?.adress);

        if (filldata != null && filldata != undefined && filldata != '') {
          this.formvalue["AutoFillValue"] = this.LIST_OF_QUESTION_VALUE
          getAllFields[0]?.setText(filldata?.BankDebit?.bank + '\n' + filldata?.BankDebit?.bicAddress);
          // getAllFields[4]?.setText(filldata?.BenneName?.value + '\n' + filldata?.BenneName?.Address);
          if (filldata?.AutoFillValue != undefined && filldata?.AutoFillValue?.length != 0) {
            getAllFields[2]?.setText(filldata?.AutoFillValue?.SequenceofTotal);
            getAllFields[3]?.setText(filldata?.AutoFillValue?.FormofDocumentaryCredit);
            getAllFields[4]?.setText(filldata?.AutoFillValue?.DocumentaryCreditNumber);
            getAllFields[5]?.setText(filldata?.AutoFillValue?.ReferencetoPreAdvice);
            getAllFields[6]?.setText(filldata?.AutoFillValue?.DateofIssue);
            getAllFields[7]?.setText(filldata?.AutoFillValue?.ApplicableRules);
            getAllFields[8]?.setText(filldata?.AutoFillValue?.DateandPlaceofExpiry);
            getAllFields[9]?.setText(filldata?.AutoFillValue?.ApplicantBank);
            getAllFields[10]?.setText(filldata?.AutoFillValue?.Applicant);
            getAllFields[11]?.setText(filldata?.AutoFillValue?.Beneficiary);
            getAllFields[12]?.setText(this.ConvertNumberToWords(filldata?.paymentTerm[0]?.RemittanceAmount, filldata?.paymentTerm[0]?.PIPO_LIST?.currency));
            getAllFields[13]?.setText(this.ConvertNumberToWords(filldata?.paymentTerm[0]?.RemittanceAmount, filldata?.paymentTerm[0]?.PIPO_LIST?.currency));
            getAllFields[14]?.setText(filldata?.AutoFillValue?.AdditionalAmountsCovered);
            getAllFields[15]?.setText(filldata?.AutoFillValue?.AvailableWithBy);
            getAllFields[16]?.setText(filldata?.AutoFillValue?.DraftsAt);
            getAllFields[17]?.setText(filldata?.AutoFillValue?.Drawee);
            getAllFields[18]?.setText(filldata?.AutoFillValue?.MixedPaymentDetails);
            getAllFields[19]?.setText(filldata?.AutoFillValue?.NegotiationDeferredPaymentDetails);
            getAllFields[20]?.setText(filldata?.AutoFillValue?.PartialShipments);
            getAllFields[21]?.setText(filldata?.AutoFillValue?.Transhipment);
            getAllFields[22]?.setText(filldata?.AutoFillValue?.PlaceofTakinginChargeDispatchfromPlaceofReceipt);
            getAllFields[23]?.setText(filldata?.AutoFillValue?.PortofLoadingAirportofDeparture);
            getAllFields[24]?.setText(filldata?.AutoFillValue?.PortofDischargeAirportofDestination);
            getAllFields[25]?.setText(filldata?.AutoFillValue?.PlaceofFinalDestinationTransportationPlaceofDelivery);
            getAllFields[26]?.setText(filldata?.AutoFillValue?.LatestDateofShipment);
            getAllFields[27]?.setText(filldata?.AutoFillValue?.ShipmentPeriod);
            getAllFields[28]?.setText(filldata?.AutoFillValue?.DescriptionofGoodsServices);
            getAllFields[29]?.setText(filldata?.AutoFillValue?.DocumentsRequired);
            getAllFields[30]?.setText(filldata?.AutoFillValue?.AdditionalConditions);
            getAllFields[31]?.setText(filldata?.AutoFillValue?.SpecialPaymentConditionsforBeneficiary);
            getAllFields[32]?.setText(filldata?.AutoFillValue?.SpecialPaymentConditionsforBankOnly);
            getAllFields[33]?.setText(filldata?.AutoFillValue?.Charge);

            getAllFields[46]?.setText(this.CURRENT_DATE);
            getAllFields[47]?.setText(filldata?.BankDebit?.bank);
            getAllFields[48]?.setText(filldata?.BankDebit?.accNumber);
            getAllFields[49]?.setText(this.validator.COMPANY_INFO[0]?.adress);
          }
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
        value: "",
        label: "27 | Sequence of Total",
        fieldName: '3',
        id: '27',
        option: [
          {
            value: ``,
            type: "textarea",
            label: "Sequence of Total",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: "",
        label: "40A | Form of Documentary Credit",
        fieldName: '3',
        id: '40A',
        option: [
          {
            value: ``,
            type: "textarea",
            label: "Form of Documentary Credit",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: "",
        label: "20 | Documentary Credit Number",
        fieldName: '2',
        id: '20',
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
        label: "23 | Reference to Pre-Advice",
        fieldName: '3',
        id: '23',
        option: [
          {
            value: `Drawn at ____90______ days from Shipment Date`,
            type: "textarea",
            label: "Reference to Pre-Advice",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: "",
        label: "31C | Date of Issue",
        fieldName: '3',
        id: '31C',
        option: [
          {
            value: ``,
            type: "date",
            label: "Date of Issue",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: "",
        label: "40E | Applicable Rules",
        fieldName: '4',
        id: '40E',
        option: [
          {
            value: ``,
            type: "textarea",
            label: "Applicable Rules",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: "",
        label: "31D | Date and Place of Expiry",
        fieldName: '5',
        id: '31D',
        option: [
          {
            value: ``,
            type: "textarea",
            label: "Date and Place of Expiry",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: "",
        label: "51a | Applicant Bank",
        fieldName: '3',
        id: '51a',
        option: [
          {
            value: ``,
            type: "textarea",
            label: "Applicant Bank",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: "",
        label: "50 | Applicant",
        fieldName: '3',
        id: '50',
        option: [
          {
            value: ``,
            type: "textarea",
            label: "Applicant",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: "",
        label: "59 | Beneficiary",
        fieldName: '3',
        id: '59',
        option: [
          {
            value: ``,
            type: "date",
            label: "Beneficiary",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: "",
        label: "32B | Currency Code, Amount",
        fieldName: '3',
        id: '32B',
        option: [
          {
            value: ``,
            type: "textarea",
            label: "Currency Code, Amount",
          },
        ]
      },
      {
        type: "checkbox",
        value: "",
        label: "39A | Percentage Credit Amount Tolerance",
        fieldName: '3',
        id: '39A',
        option: [
          {
            value: ``,
            type: "textarea",
            label: "Percentage Credit Amount Tolerance",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: "",
        label: "39C | Additional Amounts Covered",
        fieldName: '3',
        id: '39C',
        option: [
          {
            value: ``,
            type: "textarea",
            label: "Additional Amounts Covered",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: "",
        label: "41a | Available With ... By ...",
        fieldName: '3',
        id: '41a',
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
            label: "Available With ... By ...",
            style: `height:300px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: "",
        label: "42C | Drafts at ...",
        fieldName: '3',
        id: '42C',
        option: [
          {
            value: ``,
            type: "textarea",
            label: "Drafts at ...",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: "",
        label: "42a | Drawee",
        fieldName: '3',
        id: '42a',
        option: [
          {
            value: ``,
            type: "textarea",
            label: "Drawee",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: "",
        label: "42M | Mixed Payment Details",
        fieldName: '6',
        id: '42M',
        option: [
          {
            value: ``,
            type: "textarea",
            label: "Mixed Payment Details",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: "",
        label: "42P | Negotiation/Deferred Payment Details",
        fieldName: '3',
        id: '42P',
        option: [
          {
            value: ``,
            type: "textarea",
            label: "Negotiation/Deferred Payment Details",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: "",
        label: "43P | Partial Shipments",
        fieldName: '7',
        id: '43P',
        option: [
          {
            value: ``,
            type: "textarea",
            label: "Partial Shipments",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: "",
        label: "43T | Transhipment",
        fieldName: '7',
        id: '43T',
        option: [
          {
            value: ``,
            type: "textarea",
            label: "Transhipment",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: "",
        label: "44A | Place of Taking in Charge/Dispatch from .../Place of Receipt",
        fieldName: '7',
        id: '44A',
        option: [
          {
            value: ``,
            type: "textarea",
            label: "Place of Taking in Charge/Dispatch from .../Place of Receipt",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: "",
        label: "44E | Port of Loading/Airport of Departure",
        fieldName: '7',
        id: '44E',
        option: [
          {
            value: ``,
            type: "textarea",
            label: "Port of Loading/Airport of Departure",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: "",
        label: "44F | Port of Discharge/Airport of Destination",
        fieldName: '7',
        id: '44F',
        option: [
          {
            value: ``,
            type: "textarea",
            label: "Port of Discharge/Airport of Destination",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: "",
        label: "44B | Place of Final Destination/For Transportation to .../Place of Delivery",
        fieldName: '7',
        id: '44B',
        option: [
          {
            value: ``,
            type: "textarea",
            label: "Place of Final Destination/For Transportation to .../Place of Delivery",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: "",
        label: "44C | Latest Date of Shipment",
        fieldName: '7',
        id: '44C',
        option: [
          {
            value: ``,
            type: "textarea",
            label: "Latest Date of Shipment",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: "",
        label: "44D | Shipment Period",
        fieldName: '7',
        id: '44D',
        option: [
          {
            value: ``,
            type: "textarea",
            label: "Shipment Period",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: "",
        label: "45A | Description of Goods and/or Services",
        fieldName: '7',
        id: '45A',
        option: [
          {
            value: ``,
            type: "textarea",
            label: "Description of Goods and/or Services",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: "",
        label: "46A | Documents Required",
        fieldName: '7',
        id: '46A',
        option: [
          {
            value: ``,
            type: "textarea",
            label: "Documents Required",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: "",
        label: "47A | Additional Conditions",
        fieldName: '7',
        id: '47A',
        option: [
          {
            value: ``,
            type: "textarea",
            label: "Additional Conditions",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: "",
        label: "49G | Special Payment Conditions for Beneficiary",
        fieldName: '7',
        id: '49G',
        option: [
          {
            value: ``,
            type: "textarea",
            label: "Special Payment Conditions for Beneficiary",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: "",
        label: "49H | Special Payment Conditions for Bank Only",
        fieldName: '7',
        id: '49H',
        option: [
          {
            value: ``,
            type: "textarea",
            label: "Special Payment Conditions for Bank Only",
            style: `height:100px !important;`
          },
        ]
      },
      {
        type: "checkbox",
        value: "",
        label: "71D | Charges",
        fieldName: '7',
        id: '71D',
        option: [
          {
            value: ``,
            type: "textarea",
            label: "Charges",
            style: `height:100px !important;`
          },
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
      setTimeout(() => {
        this.validator.buildForm({
          SequenceofTotal: {
            type: "LABLE_CHECKBOX",
            value: items?.bundel[0]?.AutoFillValue?.SequenceofTotal,
            label: "27 | Sequence of Total",
            id: '27',
            rules: {
              required: true,
            },
            option: [
              {
                value: items?.bundel[0]?.AutoFillValue?.SequenceofTotal,
                type: "textarea",
                label: "Sequence of Total",
                style: `height:100px !important;`
              },
            ]
          },
          "FormofDocumentaryCredit": {
            type: "LABLE_CHECKBOX",
            value: items?.bundel[0]?.AutoFillValue?.FormofDocumentaryCredit,
            label: "40A | Form of Documentary Credit",
            fieldName: '3',
            id: '40A',
            rules: {
              required: true,
            },
            option: [
              {
                value: items?.bundel[0]?.AutoFillValue?.FormofDocumentaryCredit,
                type: "textarea",
                label: "Form of Documentary Credit",
                style: `height:100px !important;`
              },
            ]
          },
          "DocumentaryCreditNumber": {
            type: "LABLE_CHECKBOX",
            value: items?.bundel[0]?.AutoFillValue?.DocumentaryCreditNumber,
            label: "20 | Documentary Credit Number",
            fieldName: '2',
            id: '20',
            rules: {
              required: true,
            },
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
          "ReferencetoPreAdvice": {
            type: "LABLE_CHECKBOX",
            value: items?.bundel[0]?.AutoFillValue?.ReferencetoPreAdvice,
            label: "23 | Reference to Pre-Advice",
            fieldName: '3',
            id: '23',
            rules: {
              required: false,
            },
            option: [
              {
                value: items?.bundel[0]?.AutoFillValue?.ReferencetoPreAdvice,
                type: "textarea",
                label: "Reference to Pre-Advice",
                style: `height:100px !important;`
              },
            ]
          },
          "DateofIssue": {
            type: "LABLE_CHECKBOX",
            value: items?.bundel[0]?.AutoFillValue?.DateofIssue,
            label: "31C | Date of Issue",
            fieldName: '3',
            id: '31C',
            rules: {
              required: true,
            },
            option: [
              {
                value: items?.bundel[0]?.AutoFillValue?.DateofIssue,
                type: "date",
                label: "Date of Issue",
                style: `height:100px !important;`
              },
            ]
          },
          "ApplicableRules": {
            type: "LABLE_CHECKBOX",
            value: items?.bundel[0]?.AutoFillValue?.ApplicableRules,
            label: "40E | Applicable Rules",
            fieldName: '4',
            id: '40E',
            rules: {
              required: true,
            },
            option: [
              {
                value: items?.bundel[0]?.AutoFillValue?.ApplicableRules,
                type: "textarea",
                label: "Applicable Rules",
                style: `height:100px !important;`
              },
            ]
          },
          "DateandPlaceofExpiry": {
            type: "LABLE_CHECKBOX",
            value: items?.bundel[0]?.AutoFillValue?.DateandPlaceofExpiry,
            label: "31D | Date and Place of Expiry",
            fieldName: '5',
            id: '31D',
            rules: {
              required: true,
            },
            option: [
              {
                value: items?.bundel[0]?.AutoFillValue?.DateandPlaceofExpiry,
                type: "date",
                label: "Date and Place of Expiry",
                style: `height:100px !important;`
              },
            ]
          },
          "ApplicantBank": {
            type: "LABLE_CHECKBOX",
            value: items?.bundel[0]?.AutoFillValue?.ApplicantBank,
            label: "51a | Applicant Bank",
            fieldName: '3',
            id: '51a',
            rules: {
              required: false,
            },
            option: [
              {
                value: items?.bundel[0]?.AutoFillValue?.ApplicantBank,
                type: "textarea",
                label: "Applicant Bank",
                style: `height:100px !important;`
              },
            ]
          },
          "Applicant": {
            type: "LABLE_CHECKBOX",
            value:items?.bundel[0]?.AutoFillValue?.Applicant,
            label: "50 | Applicant",
            fieldName: '3',
            id: '50',
            rules: {
              required: true,
            },
            option: [
              {
                value: items?.bundel[0]?.AutoFillValue?.Applicant,
                type: "textarea",
                label: "Applicant",
                style: `height:100px !important;`
              },
            ]
          },
          "Beneficiary": {
            type: "LABLE_CHECKBOX",
            value: items?.bundel[0]?.AutoFillValue?.Beneficiary,
            label: "59 | Beneficiary",
            fieldName: '3',
            id: '59',
            rules: {
              required: true,
            },
            option: [
              {
                value: items?.bundel[0]?.AutoFillValue?.Beneficiary,
                type: "textarea",
                label: "Beneficiary",
                style: `height:100px !important;`
              },
            ]
          },
          "CurrencyCodeAmount": {
            type: "LABLE_CHECKBOX",
            value: items?.bundel[0]?.AutoFillValue?.CurrencyCodeAmount,
            label: "32B | Currency Code, Amount",
            fieldName: '3',
            id: '32B',
            rules: {
              required: true,
            },
            option: [
              {
                value: items?.bundel[0]?.AutoFillValue?.CurrencyCodeAmount,
                type: "textarea",
                label: "Currency Code, Amount",
              },
            ]
          },
          "PercentageCreditAmountTolerance": {
            type: "LABLE_CHECKBOX",
            value:items?.bundel[0]?.AutoFillValue?.PercentageCreditAmountTolerance,
            label: "39A | Percentage Credit Amount Tolerance",
            fieldName: '3',
            id: '39A',
            rules: {
              required: false,
            },
            option: [
              {
                value: items?.bundel[0]?.AutoFillValue?.PercentageCreditAmountTolerance,
                type: "textarea",
                label: "Percentage Credit Amount Tolerance",
                style: `height:100px !important;`
              },
            ]
          },
          "AdditionalAmountsCovered": {
            type: "LABLE_CHECKBOX",
            value:items?.bundel[0]?.AutoFillValue?.AdditionalAmountsCovered,
            label: "39C | Additional Amounts Covered",
            fieldName: '3',
            id: '39C',
            rules: {
              required: false,
            },
            option: [
              {
                value: items?.bundel[0]?.AutoFillValue?.AdditionalAmountsCovered,
                type: "textarea",
                label: "Additional Amounts Covered",
                style: `height:100px !important;`
              },
            ]
          },
          "AvailableWithBy": {
            type: "LABLE_CHECKBOX",
            value: items?.bundel[0]?.AutoFillValue?.AvailableWithBy,
            label: "41a | Available With ... By ...",
            fieldName: '3',
            id: '41a',
            rules: {
              required: true,
            },
            option: [
              {
                value: items?.bundel[0]?.AutoFillValue?.AvailableWithBy,
                type: "textarea",
                label: "Available With ... By ...",
                style: `height:300px !important;`
              },
            ]
          },
          "DraftsAt": {
            type: "LABLE_CHECKBOX",
            value: items?.bundel[0]?.AutoFillValue?.DraftsAt,
            label: "42C | Drafts at ...",
            fieldName: '3',
            id: '42C',
            rules: {
              required: false,
            },
            option: [
              {
                value: items?.bundel[0]?.AutoFillValue?.DraftsAt,
                type: "textarea",
                label: "Drafts at ...",
                style: `height:100px !important;`
              },
            ]
          },
          "Drawee": {
            type: "LABLE_CHECKBOX",
            value: items?.bundel[0]?.AutoFillValue?.Drawee,
            label: "42a | Drawee",
            fieldName: '3',
            id: '42a',
            rules: {
              required: false,
            },
            option: [
              {
                value: items?.bundel[0]?.AutoFillValue?.Drawee,
                type: "textarea",
                label: "Drawee",
                style: `height:100px !important;`
              },
            ]
          },
          "MixedPaymentDetails": {
            type: "LABLE_CHECKBOX",
            value: items?.bundel[0]?.AutoFillValue?.MixedPaymentDetails,
            label: "42M | Mixed Payment Details",
            fieldName: '6',
            id: '42M',
            rules: {
              required: false,
            },
            option: [
              {
                value: items?.bundel[0]?.AutoFillValue?.MixedPaymentDetails,
                type: "textarea",
                label: "Mixed Payment Details",
                style: `height:100px !important;`
              },
            ]
          },
          "NegotiationDeferredPaymentDetails": {
            type: "LABLE_CHECKBOX",
            value: items?.bundel[0]?.AutoFillValue?.NegotiationDeferredPaymentDetails,
            label: "42P | Negotiation/Deferred Payment Details",
            fieldName: '3',
            id: '42P',
            rules: {
              required: false,
            },
            option: [
              {
                value: items?.bundel[0]?.AutoFillValue?.NegotiationDeferredPaymentDetails,
                type: "textarea",
                label: "Negotiation/Deferred Payment Details",
                style: `height:100px !important;`
              },
            ]
          },
          "PartialShipments": {
            type: "LABLE_CHECKBOX",
            value: items?.bundel[0]?.AutoFillValue?.PartialShipments,
            label: "43P | Partial Shipments",
            fieldName: '7',
            id: '43P',
            rules: {
              required: false,
            },
            option: [
              {
                value: items?.bundel[0]?.AutoFillValue?.PartialShipments,
                type: "textarea",
                label: "Partial Shipments",
                style: `height:100px !important;`
              },
            ]
          },
          "Transhipment": {
            type: "LABLE_CHECKBOX",
            value: items?.bundel[0]?.AutoFillValue?.Transhipment,
            label: "43T | Transhipment",
            fieldName: '7',
            id: '43T',
            rules: {
              required: false,
            },
            option: [
              {
                value: items?.bundel[0]?.AutoFillValue?.Transhipment,
                type: "textarea",
                label: "Transhipment",
                style: `height:100px !important;`
              },
            ]
          },
          "PlaceofTakinginChargeDispatchfromPlaceofReceipt": {
            type: "LABLE_CHECKBOX",
            value: items?.bundel[0]?.AutoFillValue?.PlaceofTakinginChargeDispatchfromPlaceofReceipt,
            label: "44A | Place of Taking in Charge/Dispatch from .../Place of Receipt",
            fieldName: '7',
            id: '44A',
            rules: {
              required: false,
            },
            option: [
              {
                value: items?.bundel[0]?.AutoFillValue?.PlaceofTakinginChargeDispatchfromPlaceofReceipt,
                type: "textarea",
                label: "Place of Taking in Charge/Dispatch from .../Place of Receipt",
                style: `height:100px !important;`
              },
            ]
          },
          "PortofLoadingAirportofDeparture": {
            type: "LABLE_CHECKBOX",
            value: items?.bundel[0]?.AutoFillValue?.PortofLoadingAirportofDeparture,
            label: "44E | Port of Loading/Airport of Departure",
            fieldName: '7',
            id: '44E',
            rules: {
              required: false,
            },
            option: [
              {
                value: items?.bundel[0]?.AutoFillValue?.PortofLoadingAirportofDeparture,
                type: "textarea",
                label: "Port of Loading/Airport of Departure",
                style: `height:100px !important;`
              },
            ]
          },
          "PortofDischargeAirportofDestination": {
            type: "LABLE_CHECKBOX",
            value: items?.bundel[0]?.AutoFillValue?.PortofDischargeAirportofDestination,
            label: "44F | Port of Discharge/Airport of Destination",
            fieldName: '7',
            id: '44F',
            rules: {
              required: false,
            },
            option: [
              {
                value: items?.bundel[0]?.AutoFillValue?.PortofDischargeAirportofDestination,
                type: "textarea",
                label: "Port of Discharge/Airport of Destination",
                style: `height:100px !important;`
              },
            ]
          },
          "PlaceofFinalDestinationTransportationPlaceofDelivery": {
            type: "LABLE_CHECKBOX",
            value: items?.bundel[0]?.AutoFillValue?.PlaceofFinalDestinationTransportationPlaceofDelivery,
            label: "44B | Place of Final Destination/For Transportation to .../Place of Delivery",
            fieldName: '7',
            id: '44B',
            rules: {
              required: false,
            },
            option: [
              {
                value: items?.bundel[0]?.AutoFillValue?.PlaceofFinalDestinationTransportationPlaceofDelivery,
                type: "textarea",
                label: "Place of Final Destination/For Transportation to .../Place of Delivery",
                style: `height:100px !important;`
              },
            ]
          },
          "LatestDateofShipment": {
            type: "LABLE_CHECKBOX",
            value: items?.bundel[0]?.AutoFillValue?.LatestDateofShipment,
            label: "44C | Latest Date of Shipment",
            fieldName: '7',
            id: '44C',
            rules: {
              required: false,
            },
            option: [
              {
                value: items?.bundel[0]?.AutoFillValue?.LatestDateofShipment,
                type: "textarea",
                label: "Latest Date of Shipment",
                style: `height:100px !important;`
              },
            ]
          },
          "ShipmentPeriod": {
            type: "LABLE_CHECKBOX",
            value: items?.bundel[0]?.AutoFillValue?.ShipmentPeriod,
            label: "44D | Shipment Period",
            fieldName: '7',
            id: '44D',
            rules: {
              required: false,
            },
            option: [
              {
                value: items?.bundel[0]?.AutoFillValue?.ShipmentPeriod,
                type: "textarea",
                label: "Shipment Period",
                style: `height:100px !important;`
              },
            ]
          },
          "DescriptionofGoodsServices": {
            type: "LABLE_CHECKBOX",
            value: items?.bundel[0]?.AutoFillValue?.DescriptionofGoodsServices,
            label: "45A | Description of Goods and/or Services",
            fieldName: '7',
            id: '45A',
            rules: {
              required: false,
            },
            option: [
              {
                value: items?.bundel[0]?.AutoFillValue?.DescriptionofGoodsServices,
                type: "textarea",
                label: "Description of Goods and/or Services",
                style: `height:100px !important;`
              },
            ]
          },
          "DocumentsRequired": {
            type: "LABLE_CHECKBOX",
            value: items?.bundel[0]?.AutoFillValue?.DocumentsRequired,
            label: "46A | Documents Required",
            fieldName: '7',
            id: '46A',
            rules: {
              required: false,
            },
            option: [
              {
                value: items?.bundel[0]?.AutoFillValue?.DocumentsRequired,
                type: "textarea",
                label: "Documents Required",
                style: `height:100px !important;`
              },
            ]
          },
          "AdditionalConditions": {
            type: "LABLE_CHECKBOX",
            value: items?.bundel[0]?.AutoFillValue?.AdditionalConditions,
            label: "47A | Additional Conditions",
            fieldName: '7',
            id: '47A',
            rules: {
              required: false,
            },
            option: [
              {
                value: items?.bundel[0]?.AutoFillValue?.AdditionalConditions,
                type: "textarea",
                label: "Additional Conditions",
                style: `height:100px !important;`
              },
            ]
          },
          "SpecialPaymentConditionsforBeneficiary": {
            type: "LABLE_CHECKBOX",
            value: items?.bundel[0]?.AutoFillValue?.SpecialPaymentConditionsforBeneficiary,
            label: "49G | Special Payment Conditions for Beneficiary",
            fieldName: '7',
            id: '49G',
            rules: {
              required: false,
            },
            option: [
              {
                value: items?.bundel[0]?.AutoFillValue?.SpecialPaymentConditionsforBeneficiary,
                type: "textarea",
                label: "Special Payment Conditions for Beneficiary",
                style: `height:100px !important;`
              },
            ]
          },
          "SpecialPaymentConditionsforBankOnly": {
            type: "LABLE_CHECKBOX",
            value: items?.bundel[0]?.AutoFillValue?.SpecialPaymentConditionsforBankOnly,
            label: "49H | Special Payment Conditions for Bank Only",
            fieldName: '7',
            id: '49H',
            rules: {
              required: false,
            },
            option: [
              {
                value: items?.bundel[0]?.AutoFillValue?.SpecialPaymentConditionsforBankOnly,
                type: "textarea",
                label: "Special Payment Conditions for Bank Only",
                style: `height:100px !important;`
              },
            ]
          },
          "Charges": {
            type: "LABLE_CHECKBOX",
            value: items?.bundel[0]?.AutoFillValue?.Charges,
            label: "71D | Charges",
            fieldName: '7',
            id: '71D',
            rules: {
              required: false,
            },
            option: [
              {
                value: items?.bundel[0]?.AutoFillValue?.Charges,
                type: "textarea",
                label: "Charges",
                style: `height:100px !important;`
              },
            ]
          }
        }, 'AutofillLCTableForm');
        console.log(this.UPLOAD_FORM, this.cicreate, 'UPLOAD_FORM')
      }, 200);
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