import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PDFDocument, rgb } from 'pdf-lib';
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
import moment from 'moment';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

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
    public AprrovalPendingRejectService: AprrovalPendingRejectTransactionsService,
    public userService: UserService) {
    exportbilllodgementdata.clear();
  }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(async (params) => {
      this.exportbilllodgementdata.clear();
      this.PREVIWES_URL = ''
      this.VISIBLITY_PDF = false;
      this.validator.PIPO_LIST = [];
      this.NewAdvanceOutwardRemittanceA2ComponentForm();
      this.CA15Form();
      this.CB15Form();
    });
  }

  NewAdvanceOutwardRemittanceA2ComponentForm() {
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
        BankDebit: {
          type: "BankCheckBox",
          value: "",
          label: "Select Bank",
          Banklabel: "To Debit Account no. & Account Type*",
          TypeOfCurrency: "INR",
          Banklabel2: "To Debit Charges Account no. & Account Type*",
          fieldName2: "BankCharges",
          rules: {
            required: true,
          }
        },
        BankCharges: {
          type: "xyzzzz",
          value: "",
          label: "",
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
                value: this.validator.PIPO_LIST[0],
                label: "Select",
                name: 'PIPO_LIST',
                rules: {
                  required: true,
                },
                callback: (item: any) => {
                  const myForm: any = item?.form?.controls[item?.fieldName] as FormGroup;
                  let currentVal = item?.value;
                  item.form['value'][item?.fieldName][item?.OptionfieldIndex]["RemittanceAmount"] = (currentVal?.paymentTerm[0]?.BalanceAmount);
                  myForm.controls[item?.OptionfieldIndex]?.controls["amount"]?.setValue(currentVal?.paymentTerm[0]?.BalanceAmount);
                  myForm.controls[item?.OptionfieldIndex]?.controls["RemittanceAmount"]?.setValue(currentVal?.paymentTerm[0]?.BalanceAmount);
                  myForm.controls[item?.OptionfieldIndex]?.controls["currency"]?.setValue(currentVal?.currency);
                  myForm['touched'] = true;
                  myForm['status'] = 'VALID';
                  console.log(item, "callback")
                },
              },
              {
                type: "text",
                value: this.validator.PIPO_LIST[0]?.paymentTerm[0]?.BalanceAmount,
                label: "Available Amount",
                name: 'amount',
                rules: {
                  required: true,
                },
                disabled: true,
              },
              {
                type: "currency",
                value: this.validator.PIPO_LIST[0]?.currency,
                label: "Currency",
                name: 'currency',
                rules: {
                  required: true,
                },
                disabled: true
              },
              {
                type: "TextValiadtion",
                value: this.validator.PIPO_LIST[0]?.paymentTerm[0]?.BalanceAmount,
                label: "Remittance amount",
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
  }

  AddButton(event, panel1, panel2) {
    if (event?.text == "Select BC Quote") {
      panel1?.displayShow;
      this.getbuyer_beneficiary_credit()
    }
    console.log(event)
  }

  onTabChanges(event: any) {
    if (event?.name == "BC Quote Summary") {
      this.getbuyer_beneficiary_credit()
    }
    console.log(event, "onTabChanges")
  }

  BUYER_BENEFICIARY_CREDIT_DATA: any = []
  BUYER_BENEFICIARY_CREDIT_ACCEPT_DATA: any = []
  getbuyer_beneficiary_credit() {
    this.documentService.buyer_beneficiary_creditget().subscribe((res: any) => {
      this.BUYER_BENEFICIARY_CREDIT_DATA = res?.data;
      this.BUYER_BENEFICIARY_CREDIT_ACCEPT_DATA = [];
      res?.data.forEach(element => {
        if (element?.AcceptReject == 'Accept') {
          this.BUYER_BENEFICIARY_CREDIT_ACCEPT_DATA.push(element)
        }
      });
      console.log(res, this.BUYER_BENEFICIARY_CREDIT_ACCEPT_DATA, 'buyer_beneficiary_creditaddres')
    })
  }

  CA15Form() {
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
        BOE: {
          type: "BOE",
          value: "",
          label: "Select BOE",
          rules: {
            required: true,
          },
          callback: (item: any) => {
            item?.dynamicFormGroup?.controls['Currency']?.setValue(item?.value?.currency)
            item?.dynamicFormGroup?.controls['LCNoBOENo']?.setValue(item?.value?.boeNumber)
            item?.dynamicFormGroup?.controls['LCBOEAmount']?.setValue(item?.value?.invoiceAmount)

            item.dynamicFormGroup.value['Currency'] = (item?.value?.currency)
            item.dynamicFormGroup.value['LCNoBOENo'] = (item?.value?.boeNumber)
            item.dynamicFormGroup.value['LCBOEAmount'] = (item?.value?.invoiceAmount)
            console.log(item, "BOE_Value")
          }
        },
        ApplicantName: {
          type: "text",
          value: "",
          label: "Applicant Name",
          rules: {
            required: true,
          }
        },
        LCIssuingBank: {
          type: "text",
          value: "",
          label: "LC Issuing Bank",
          rules: {
            required: true,
          },
        },
        SupplierName: {
          type: "text",
          value: "",
          label: "Supplier Name",
          rules: {
            required: true,
          },
        },
        SupplierBankNameSWIFTCode: {
          type: "text",
          value: "",
          label: "Supplier Bank Name & SWIFT Code",
          rules: {
            required: true,
          }
        },
        Currency: {
          type: "currency",
          value: "",
          label: "Currency",
          rules: {
            required: true,
          },
        },
        LCNoBOENo: {
          type: "text",
          value: "",
          label: "LC No/BOE No.",
          rules: {
            required: true,
          },
        },
        LCBOEAmount: {
          type: "text",
          value: "",
          label: "LC/BOE Amount",
          rules: {
            required: true,
          }
        },
        Tenor: {
          type: "text",
          value: "",
          label: "Tenor",
          rules: {
            required: true,
          },
        },
        Commodity: {
          type: "commodity",
          value: "",
          label: "Commodity",
          rules: {
            required: true,
          },
        },
        LatestdateofShipment: {
          type: "date",
          value: "",
          label: "Latest date of Shipment",
          rules: {
            required: true,
          },
        },
        OriginOfGoods: {
          type: "text",
          value: "",
          label: "Origin Of Goods",
          rules: {
            required: true,
          }
        },
        PortofLoading: {
          type: "text",
          value: "",
          label: "Port of Loading",
          rules: {
            required: true,
          },
        },
        PortofDischarge: {
          type: "text",
          value: "",
          label: "Port of Discharge",
          rules: {
            required: true,
          },
        },
        NumberofShipment: {
          type: "text",
          value: "",
          label: "Number of Shipment",
          rules: {
            required: true,
          },
        },
        ConfirmationChargesborneby: {
          type: "ArrayList",
          value: "",
          item: [{ value: "Beneficiary" }, { value: "Applicant" }],
          bindLabel: "value",
          label: "Confirmation Charges borne by",
          rules: {
            required: true,
          },
        },
        DiscountingChargesborneby: {
          type: "ArrayList",
          value: "",
          item: [{ value: "Beneficiary" }, { value: "Applicant" }],
          bindLabel: "value",
          label: "Discounting Charges borne by",
          rules: {
            required: true,
          },
        },
      }, 'From_Client_Generate_15_CA');
      console.log(this.UPLOAD_FORM, this.cicreate, 'UPLOAD_FORM')
    }, 200);
  }

  CB15Form() {
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
        BOE: {
          type: "BOE",
          value: "",
          label: "Select BOE",
          rules: {
            required: true,
          },
          callback: (item: any) => {
            item?.dynamicFormGroup?.controls['Currency']?.setValue(item?.value?.currency)
            item?.dynamicFormGroup?.controls['LCNoBOENo']?.setValue(item?.value?.boeNumber)
            item?.dynamicFormGroup?.controls['LCBOEAmount']?.setValue(item?.value?.invoiceAmount)

            item.dynamicFormGroup.value['Currency'] = (item?.value?.currency)
            item.dynamicFormGroup.value['LCNoBOENo'] = (item?.value?.boeNumber)
            item.dynamicFormGroup.value['LCBOEAmount'] = (item?.value?.invoiceAmount)
            console.log(item, "BOE_Value")
          }
        },
        ApplicantName: {
          type: "text",
          value: "",
          label: "Applicant Name",
          rules: {
            required: true,
          }
        },
        LCIssuingBank: {
          type: "text",
          value: "",
          label: "LC Issuing Bank",
          rules: {
            required: true,
          },
        },
        SupplierName: {
          type: "text",
          value: "",
          label: "Supplier Name",
          rules: {
            required: true,
          },
        },
        SupplierBankNameSWIFTCode: {
          type: "text",
          value: "",
          label: "Supplier Bank Name & SWIFT Code",
          rules: {
            required: true,
          }
        },
        Currency: {
          type: "currency",
          value: "",
          label: "Currency",
          rules: {
            required: true,
          },
        },
        LCNoBOENo: {
          type: "text",
          value: "",
          label: "LC No/BOE No.",
          rules: {
            required: true,
          },
        },
        LCBOEAmount: {
          type: "text",
          value: "",
          label: "LC/BOE Amount",
          rules: {
            required: true,
          }
        },
        Tenor: {
          type: "text",
          value: "",
          label: "Tenor",
          rules: {
            required: true,
          },
        },
        Commodity: {
          type: "commodity",
          value: "",
          label: "Commodity",
          rules: {
            required: true,
          },
        },
        LatestdateofShipment: {
          type: "date",
          value: "",
          label: "Latest date of Shipment",
          rules: {
            required: true,
          },
        },
        OriginOfGoods: {
          type: "text",
          value: "",
          label: "Origin Of Goods",
          rules: {
            required: true,
          }
        },
        PortofLoading: {
          type: "text",
          value: "",
          label: "Port of Loading",
          rules: {
            required: true,
          },
        },
        PortofDischarge: {
          type: "text",
          value: "",
          label: "Port of Discharge",
          rules: {
            required: true,
          },
        },
        NumberofShipment: {
          type: "text",
          value: "",
          label: "Number of Shipment",
          rules: {
            required: true,
          },
        },
        ConfirmationChargesborneby: {
          type: "ArrayList",
          value: "",
          item: [{ value: "Beneficiary" }, { value: "Applicant" }],
          bindLabel: "value",
          label: "Confirmation Charges borne by",
          rules: {
            required: true,
          },
        },
        DiscountingChargesborneby: {
          type: "ArrayList",
          value: "",
          item: [{ value: "Beneficiary" }, { value: "Applicant" }],
          bindLabel: "value",
          label: "Discounting Charges borne by",
          rules: {
            required: true,
          },
        },
      }, 'From_Client_Generate_15_CB');
      console.log(this.UPLOAD_FORM, this.cicreate, 'UPLOAD_FORM')
    }, 200);
  }

  ToForwardContract_Selected: any = []
  ToHSCode_Selected: any = [];
  ToForwardContract(event: any, value: any, index: any) {
    if (event?.target?.checked == true) {
      this.ToForwardContract_Selected[0] = value;
    } else {
      this.ToForwardContract_Selected[0] = '';
    }
  }

  ALL_DATA_HSCODE_FORWARD: any = {};
  DoneButton() {
    let temp2: any = [];
    this.ToHSCode_Selected.forEach(element => {
      temp2.push(element?.hscode);
    });
    this.ALL_DATA_HSCODE_FORWARD = {
      HS_CODE: temp2?.join(','),
      FORWARD_CONTRACT: this.ToForwardContract_Selected
    };
  }

  urlletterhead(url: any) {
    this.LETTER_HEAD_URL = url;
  }

  setSelectedBankDetails(bank: any) {
    this.BankId = bank?.BankUniqueId;
    this.SELECT_BUYER_DETAILS = bank;
    console.log(bank, "setSelectedBankDetails")
    this.fillForm(null);
  }

  BENEFICIARY_DETAILS: any = [];
  PIPO_LIST: any = [];
  BENEFICIARY_CALLBACK(value: any) {
    this.BENEFICIARY_DETAILS = this.validator.BENEFICIARY_DETAILS_LIST.filter((item: any) => item?._id == value?.id);
    this.documentService.filterAnyTable({
      benneName: value?.value,
    }, 'boerecords').subscribe((res: any) => {
      res?.data.forEach(element => {
        element['ischecked'] = false;
        element['isDisabled'] = false;
      });
      this.validator.BOE_LIST = res?.data
      console.log(value, res, this.BENEFICIARY_DETAILS, "BENEFICIARY_CALLBACK")
    });
  }

  BENEFICIARY_CALLBACK_CA_15(value: any) {
    this.documentService.filterAnyTable({
      benneName: value?.value,
    }, 'boerecords').subscribe((res: any) => {
      this.validator.BOE_LIST = res?.data;
      console.log(value, res, "BENEFICIARY_CALLBACK_CA_15")
    });
  }


  BENEFICIARY_CALLBACK_CB_15(value: any) {
    this.documentService.filterAnyTable({
      benneName: value?.value,
    }, 'boerecords').subscribe((res: any) => {
      this.validator.BOE_LIST = res?.data;
      console.log(value, res, "BENEFICIARY_CALLBACK_CA_15")
    });
  }

  formvalue: any = [];
  SubmitButton(formvalue: any) {
    this.FormValue(formvalue);
    this.formvalue = formvalue?.value
    console.log(formvalue, "SubmitButton")
  }

  RequestforCASubmit(value: any, panel: any) {
    console.log(value, 'RequestforBCQuote')
    var temp_doc: any = [];
    var pipo_id: any = [];
    var pipo_name: any = [];
    for (let index = 0; index < value?.value?.BOE.length; index++) {
      pipo_id.push(value?.value?.BOE[index]?.pipo[0]?._id)
      pipo_name.push(value?.value?.BOE[index]?.pipo[0]?.pipo_no)
    }
    value.value['documents'] = temp_doc;
    value.value['pipo'] = pipo_id;
    var filterdoc = temp_doc.filter(n => n)
    value.value['BenneName'] = value.value['BenneName']?.value != undefined ? value.value['BenneName']?.value : value.value['BenneName'];
    value.value['Commodity'] = value.value['Commodity']?.value != undefined ? value.value['Commodity']?.value : value.value['Commodity'];
    this.documentService.buyer_beneficiary_creditadd(value?.value).subscribe((buyer_beneficiary_creditaddres: any) => {
      console.log(buyer_beneficiary_creditaddres, 'buyer_beneficiary_creditaddres')
      this.toastr.success('buyer_beneficiary_credit added successfully....')
      this.documentService.SendMaildocuments({ subject: 'Buyer credit details added...', documentsList: filterdoc, data: value?.value }).subscribe((docres: any) => {
        this.toastr.success('Mail Sended Successfully....')
        this.getbuyer_beneficiary_credit()
        panel?.resetForm;
      })
    })
  }

  RequestforCBSubmit(value: any, panel: any) {
    console.log(value, 'RequestforBCQuote')
    var temp_doc: any = [];
    var pipo_id: any = [];
    var pipo_name: any = [];
    for (let index = 0; index < value?.value?.BOE.length; index++) {
      pipo_id.push(value?.value?.BOE[index]?.pipo[0]?._id)
      pipo_name.push(value?.value?.BOE[index]?.pipo[0]?.pipo_no)
    }
    value.value['documents'] = temp_doc;
    value.value['pipo'] = pipo_id;
    var filterdoc = temp_doc.filter(n => n)
    value.value['RequestType'] = "CB"
    value.value['BenneName'] = value.value['BenneName']?.value != undefined ? value.value['BenneName']?.value : value.value['BenneName'];
    value.value['Commodity'] = value.value['Commodity']?.value != undefined ? value.value['Commodity']?.value : value.value['Commodity'];
    this.documentService.CA_Certificate_add(value?.value).subscribe((buyer_beneficiary_creditaddres: any) => {
      console.log(buyer_beneficiary_creditaddres, 'buyer_beneficiary_creditaddres')
      this.toastr.success('buyer_beneficiary_credit added successfully....')
      this.documentService.SendMaildocuments({ subject: 'Buyer credit details added...', documentsList: filterdoc, data: value?.value }).subscribe((docres: any) => {
        this.toastr.success('Mail Sended Successfully....')
        this.get_by_REQUEST_TYPE_CA("CB");
        panel?.resetForm;
      })
    })
  }

  CA_CERTIFICATE_DATA: any = []
  get_by_REQUEST_TYPE_CA(type: any) {
    this.documentService.CA_Certificate_RequestType_get(type).subscribe((res: any) => {
      this.CA_CERTIFICATE_DATA = res?.data;
      console.log(res, this.CA_CERTIFICATE_DATA, 'get_CA_CB')
    })
  }

  AcceptReject(id: any, data: any) {
    this.AprrovalPendingRejectService.CustomConfirmDialogModel.YesNoDialogModel(`Are you sure you want to ${data?.AcceptReject} this item?`, '', (resmodel) => {
      if (resmodel?.value == 'Yes') {
        this.documentService.buyer_beneficiary_credit_update({ id: id, data: data }).subscribe((res: any) => {
          this.toastr.success('Successfully updated....');
          this.getbuyer_beneficiary_credit()
        })
      }
    })
  }

  CA_SELECTION_DATA: any = [];
  CA_SELECTION_INDEX: any = [];
  CA_DUMP_SLEECTION: any = [];
  EXTRA_DOCUMENTS: any = {
    CA_DOCUMENTS: [],
    CB_DOCUMENTS: [],
    INVOICE_DOCUMENTS: [],
    DEBIT_NOTES_DOCUMENTS: [],
    PURPOSE_CODE_DATA: []
  };
  CA_SELECTION(event: any, index: any) {
    console.log(event, 'CA_SELECTION')
    if (event?.target?.checked) {
      this.CA_DUMP_SLEECTION[index] = this.BUYER_BENEFICIARY_CREDIT_ACCEPT_DATA[index];
      this.CA_SELECTION_INDEX[index] = true;
    } else {
      this.CA_DUMP_SLEECTION[index] = '';
      this.CA_SELECTION_INDEX[index] = false;
    }
  }

  addCA() {
    this.CA_SELECTION_DATA = [];
    this.EXTRA_DOCUMENTS['CA_DOCUMENTS'] = [];
    this.CA_DUMP_SLEECTION.forEach(element => {
      this.CA_SELECTION_DATA.push(element)
      this.EXTRA_DOCUMENTS['CA_DOCUMENTS'].push(element?.document);
    });
    if (this.CA_SELECTION_DATA.length != 0) {
      this.validator.dynamicFormGroup['IMPORT_TRANSACTION'].controls['BCQuote'].setValue(this.CA_SELECTION_DATA);
    } else {
      this.validator.dynamicFormGroup['IMPORT_TRANSACTION'].controls['BCQuote'].setValue('');
    }
  }
  
  async fillForm(filldata: any) {
    console.log(filldata, "fillForm")
    this.VISIBLITY_PDF = false;
    return new Promise(async (resolve, reject) => {
      if (this.BankId == 'F_B_L_6') {
        let doc:any = new jsPDF();
        var pageWidth =
          doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
        doc.setFontSize(11);
        doc.text(
          'APPLICATION AND GUARANTEE FOR ISSUE OF IRREVOCABLE DOCUMENTARY LETTER OF CREDIT',
          pageWidth / 2,
          20,
          { align: 'center' }
        );
        var strArr1 = doc.splitTextToSize(
          `The Branch Head, \n______BANK LTD,`,
          200
        );
        doc.text(strArr1, 30, 30, { align: 'center' });
        var strArr1 = doc.splitTextToSize(`Branch`, 200);
        doc.text(strArr1, 20, 40, { align: 'center' });
        var strArr1 = doc.splitTextToSize(`Dear Sir,`, 200);
        doc.text(strArr1, 22, 48, { align: 'center' });
        var strArr1 = doc.splitTextToSize(
          `I/We request you to establish with your correspondents in (Country) Documentary credit as per details below:`,
          200
        );
        doc.text(strArr1, pageWidth / 2, 60, { align: 'center' });
        
        let startY = 65;
        let currentPage = 1;
        let height = doc.internal.pageSize.getHeight();
        doc.autoTable({
          margin: { left: 10, bottom: 0 },
          columnStyles: {
            0: { cellWidth: 20 },
            1: { cellWidth: 30 },
          },
          startY: startY,
          bodyStyles: {
            lineWidth: 0.2,
            lineColor: 'black',
            overflow: 'linebreak',
          },
          body: [
            ['40A:***', 'TYPE OF L/C', 'IRREVOCABLE'],
            ['31D:***', 'DATE & PLACE OF EXPIRY:', ''],
            ['50:***', 'NAME AND ADDRESS OF THE APPLICANT', ''],
            ['59:***', 'NAME AND ADDRESS OF THE BENEFICIARY', ''],
            ['32B:***', 'CURRENCY & AMOUNT OF CREDIT IN FIGURES AND IN', ''],
            ['39A:#', 'PERCENTAGE CREDIT AMOUNT TOLERANCE', ''],
            ['39B:#', 'MAXIMUM CREDIT AMOUNT', ''],
            ['39C:', 'ADDITIONAL AMOUNTS COVERED (USANCE INTEREST)', ''],
            ['41a:(A/D) ***', 'CREDIT AVAILABLE WITH CREDIT AVAILABLE BY', ''],
            ['42c:', 'DRAFTS AT', 'AT SIGHT DAYS FROM DATE OF SHIPMENT'],
            ['42a:', 'DRAWEE', ''],
            ['43P:', 'PARTIAL SHIPMENTS', 'PROHIBITED  PERMITTED'],
            ['43T:', 'TRANSHIPMENTS', 'PROHIBITED  PERMITTED'],
            ['44A:', 'SHIPMENT FROM', ''],
            ['44B:*', 'SHIPMENT TO', ''],
            ['44C:', 'LATEST DATE OF SHIPMENT', ''],
            ['45A:', 'QUANTITY AND DESCRIPTION OF GOODS (BRIEF DETAILS)', ''],
            [
              '46A:',
              'DOCUMENTS REQUIRED',
              `SIGNED DRAFTS FOR 100% OF THE INVOICE VALUE.
            SIGNED COMMERCIAL INVOICE (S) IN ----- COPIES 
            FULL SET OF SIGNED CLEAN "ON BOARD" OCEAN BILLS OF LADING MADE OUT TO ORDER AND BLANK ENDORSED
            MARKED FREIGHT PREPAID/FREIGHT PAYABLE AT DESTINATION EVIDENCING SHIPMENT OF MERCHANDISE DESCRIBED ABOVE.
            BILLS OF LADING MUST STATE FULL NAME AND ADDRESS OF BOTH APPLICANT AND __________ BANK LIMITED AS PARTIES
            TO BE NOTIFIED.
            OR
            AIRWAY BILL (ORIGINAL PLUS THREE COPIES) ISSUED BY AIRLINE OR IT’S AGENT MADE IN THE NAME OF __________
            BANK LIMITED FOR ACCOUNT APPLICANT EVIDENCING THE CURRENT AIRFREIGHT OF GOODS. AIRWAY BILL SHOULD BE
            MARKED FREIGHT PREPAID/TO COLLECT. AIRWAY BILLS MUST STATE FULL NAME AND ADDRESS OF APPLICANT AND
            __________ BANK LIMITED AS PARTIES TO BE NOTIFIED. AIRWAY BILL MUST INDICATE FLIGHT NUMBER AND DATE.
            MARINE/AVIATION INSURANCE POLICY OR CERTIFICATE (ORIGINAL PLUS COPY) DATED NOT LATER THAN THE DATE OF BILLS
            OF LADING/ AIRWAY BILL SIGNED AND ISSUED BY INSURANCE COMPANY MADE TO ORDER AND BLANK ENDORSED IN
            CURRENCY OF THE CREDIT FOR 110 % OF CIF INVOICE VALUE , COVERING INSTITUTE CARGO CLAUSE (A), WITH EXTENDED
            COVER FOR TRANSHIPMENT RISKS, IF APPLICABLE, THEFT, PILFERAGE, BREAKAGE AND NON-DELIVERY, INSTITUTE WAR CLAUSE
            (CARGO) AND INSTITUTE STRIKES CLAUSE (CARGO), INSTITUTE TRANSIT CLAUSES FOR WAREHOUSE TO WAREHOUSE COVER
            WITH CLAIMS PAYABLE IN INDIA IRRESPECTIVE OF PERCENTAGE.
            SIGNED PACKING LIST IN TRIPLICATE
            CERTIFICATE OF ORIGIN ISSUED BY CHAMBER OF COMMERCE IN TRILICATE CERTIFYING GOODS OF
            ORIGIN.
            SHIPPING COMPANYS OR THEIR AGENTS CERTIFICATE (IN DUPLICATE) STATING THAT THE CARRYING VESSEL NAMED IN
            THE BILL OF LADING IS A SEAWORTHY VESSEL, NOT MORE THAN TWENTY-FIVE YEARS OLD, HAS BEEN APPROVED UNDER
            INSTITUTE CLASSIFICATION CLAUSE (CLASS MAINTAINED EQUIVALENT TO LLOYDS 100 A1) AND HAS BEEN REGISTERED WITH
            AN APPROVED CLASSIFICATION SOCIETY (CERTIFICATE TO SPECIFY THE NAME OF THE CLASSIFICATION SOCIETY).
            A CERTIFICATE IN DUPLICATE ISSUED BY THE SHIPPING COMPANY OR THEIR AGENT STATING THAT THE VESSEL MENTIONED
            IN THE BILL OF LADING AND THE PORTS FROM/TO WHICH THE GOODS ARE SHIPPED ARE FREE FROM EMBARGOS AND THAT
            THERE ARE NO SUBSISTING SANCTIONS IMPOSED ON THE VESSEL/PORT.
            BENEFICIARY'S CERTIFICATE TO THE EFFECT THAT ONE ADDITIONAL SET OF NON- NEGOTIABLE DOCUMENTS INCLUDING ONE
            COPY EACH OF INVOICE,AWB/BL,INSURANCE DOCUMENTS IF ANY,CERTIFICATE OF ORIGIN HAS BEEN FORWARDED TO THE
            APPLICANT BY COURIER AT THE EARLIEST BUT NOT MORE THAN TWO WORKING DAYS AFTER SHIPMENT.
            (ANY OTHER DOCUMENTS AS MAY BE REQUIRED )`,
            ],
            [
              '47 A:T',
              'ADDITIONAL CONDITIONS',
              `SEPARATE DRAFT AND INVOICE FOR INTEREST AMOUNT REQUIRED
            INVOICE SHOULD QUOTE IMPORT LICENCE/OGL REFERENCE AND CERTIFY THAT THE GOODS SUPPLIED ARE AS PER PURCHASE
            ORDER OF THE APPLICANT. GROSS FOB/CIF/CFR VALUE OF THE GOODS BEFORE DEDUCTION OF AGENT''S COMMISSION,
            IF ANY, MUST NOT EXCEED THE MAXIMUM CREDIT AMOUNT.
            ALL DOCUMENTS MUST BE IN ENGLISH
            ALL DOCUMENTS MUST MENTION OUR L/C NUMBER AND DATE AND THAT THE GOODS ARE FREELY IMPORTABLE
            UNDER EXIM POLICY 2009-2014 / ARE IMPORTED UNDER LICENSE NUMBER
            (WHICHEVER IS APPLICABLE)
            DOCUMENTS PRODUCED BY REPROGRAPIC PROCESS/COMPUTERISED CARBON COPIES ARE NOT ACCEPTABLE UNLESS
            MARKED ORIGINAL AND SIGNED.
            OTHERS, PLEASE SPECIFY`,
            ],
            ['71B:', 'SPECIFY IF ANY CHARGES ARE TO BENEFICIARY’S ACCOUNT', ''],
            [
              '48:',
              'PERIOD OF PRESENTATION OF DOCUMENTS',
              `WITHIN DAYS FROM THE DATE OF`,
            ],
            [
              '49:***',
              'CONFIRMATION INSTRUCTIONS',
              `WITH WITHOUT CHARGES PAYABLE BY`,
            ],
            ['57a', 'ADVISE THROUGH BANK', ''],
            ['72:', 'SENDER TO RECEIVER INFORMATION', ''],
          ],
          didDrawPage: (data) => {
            let table_height = data.cursor.y
            if (startY + table_height + 10 > height) {
              startY = 0;
              currentPage++;
            }
          },
        });
        let finalY = doc.lastAutoTable.finalY;
        var strArr1 = doc.splitTextToSize(
          `<div><p>*** indicates mandatory fields   # Only one of the fields 39A OR 39B is to be filled</p></div>`,
          200
        );
        let doc2 = doc.fromHTML(strArr1?.join(''), 20, finalY);
    
        var text = `<div><p>I/We hereby declare that the transaction covered under the credit (the "transaction") , does not involve, <br>and is Not designed for the purpose of any contravention of the provisions of the Foreign Exchange Management <br> Act 1999 or of any rule, regulation, notification, direction or order made thereunder. I/We also hereby agree and <br>undertake to give such information/documents as will reasonably satisfy you about the transaction in terms of <br>above declaration.</p></div>`;
        var strArr2 = doc.splitTextToSize(text, 200);
        var pdfDocument = doc.fromHTML(strArr2?.join(''), 10, doc2.y-10);
        var text = `<div>
        <p>We hereby confirm and certify that:</p>
        <p>(a) The goods imported / being imported by us under the Credit are not covered under Prohibited/Negative List of <br> Imports as mentioned current Foreign Trade Policy
        and amendments thereto till date.
        </p>
        <p>(b) The goods imported / being imported by us under the Credit are not covered under Negative List of Imports<br> as mentioned in current Foreign Trade Policy and
        amendments thereto till date and the original license <br>issued by the DGFT is attached herewith. (Strike out whichever is not applicable)</p>
        <p>(c) We are eligible to import the above mentioned goods under the current Foreign Trade Policy in place.</p>
        <p>(d) The said goods imported / being imported by us are not restricted for import through specific licensing under<br> the above mentioned policy and amendments
        thereto till date.</p>
        <p>(e) ITC(HS) Classification Code No.----------</p>
        <p>(f) The carrying vessel and the ports from/to which the goods are shipped as mentioned in our application form <br>and guarantee for issue of irrevocable documentary
        letter of credit are free from embargos and that there are<br> no subsisting sanctions imposed on the vessel/s and the port/s.</p>
        <p>(g) In case if the goods imported are capital in nature, we confirm that the goods are capital goods as defined in<br> the Foreign Trade Policy issued by DGFT from time to
        time.</p>
        <p>(h) We also confirm that the period of trade credit is well within the operating cycle of the commodity.</p>
    </div>`;
        var strArr1 = doc.splitTextToSize(text, 200);
        var pdfDocument1 = doc.fromHTML(text, 10, pdfDocument?.y);
    
        var text = `<div>
        <p>Trade Credit - Supplier Credit</p>
        <p>All in Cost : </p>
        <p>Period of Credit : </p>
        <p>Declaration in line with A.P. (DIR Series) Circular No. 23 dated 13 Mar, 2019 (Tick whichever is applicable):
        <br>We hereby declare that value of each shipment and presentation under the said Foreign Letter of Credit<br> shall not exceed</p>
        <p>( ) USD 150 Million or equivalent per import transaction. - Applicable in case of importer being oil/gas refining <br> & marketing, airline and shipping companies</p>
        <p>( ) USD 50 Million or equivalent per import transaction Applicable in case of importer being other than oil/gas <br>refining  & marketing, airline and shipping companies (Any FLC issuance beyond above stated amount will be <br> subject to RBI approval.)</p>
        <p>We also undertake to submit the relative Exchange Control Copy of the Bill of Entry / Postal Wrappers to you <br> immediately after clearance of the said goods, in any case within
        3 months from the date of remittance / payment.<br> Further, we declare that the items imported will be used / disposed of as per the provision contained in the <br>policy /
        procedure/We further declare that the undersigned has the authority to give the declarations,<br> undertakings and instructions as above, on behalf of the Company.</p>
        <p>This Letter of Credit is subject to UCPDC 2007 Revision ICC No 600 read along with ICC Document no URR725,<br> ISP98 AND ISBP LATEST VERSION.</p>
        <span>Declaration/Undertaking</span>
        <p>In consideration of your opening a Letter of Credit as above.I/we hereby undertake to accept and pay in due course<br> all drafts drawn within the terms thereof, and/ or to take up and pay for all documents negotiated there under on<br> presentation and in default of my/our so doing you may sell the goods before or after arrival and I/We
        undertake <br>forthwith on demand made by you in writing to deposit with you such sum or security or further sum or security as <br>you may from time to time specify as any
        security for the due fulfillment of our obligations hereunder and any <br>security so deposited with you as may be sold by you on your giving reasonable notice of sale
        to us and the said sum <br>or the proceeds of sale of the security may be appropriated by you in or towards satisfaction of our said obligations<br> and any liability of ours arising
        out of the non fulfillment thereof.</p>
        <p>You are to have lien on all goods, documents and policies and proceeds thereof for any obligations or liabilities<br> present or future incurred by you under or arising out of
        this credit.</p>
        <p>I/ We approve of the negotiation of drafts under this Credit being confined to your branches.</p>
        <p>Wherever, based on reimbursement clause of LC, the negotiating bank has claimed reimbursement and our Nostro<br> account is debited before receipt of documents/payments,
        we agree to pay applicable interest from the date of<br> Nostro debit till the date of payment of import bill.</p>
        <p>The relative shipping documents have to be surrendered to me/us against payment /acceptance.
        <br>
        </p>
        <p>If at any time and from time to time hereafter and at our request you enhance the amount of the Letter of Credit <br>or amend any of the terms thereof ( including
          extension of the validity of the credit for shipment and/or negotiation <br> of documents) ,then notwithstanding the amount and the terms specified in this application , our guarantee shall<br> cover and be deemed to cover the entire amount of the enhanced Letter of Credit issued by you and other <br>amendments effected thereto and our liability will be for the entire amount of the Letter of Credit to be enhanced<br> and /or amended at our request. We shall continue to be bound by all other terms and conditions of the application <br>and guarantee  notwithstanding such enhancement or amendments from time to time as you may make at your <br>request in the value and terms of the letter
          of credit.</p>
    
          <p>We hereby agree and declare that in the event of my/our failing to retire the bills drawn under L/C on due dates<br> in case of usance bills and within 5 banking days from
          date of receipt of documents by you in case of sight bills.<br> You shall be at liberty to crystallize the foreign currency rupee liability thereunder on the due date or on the expiry<br>
          of the 5th banking day as the case may be and contract rate whichever may be applicable.</p>
    
          <p>I/ We undertake to reimburse to you on demand the rupee equivalent so determined together with the interest <br>thereon at normal rate from date of negotiation to the date
          of crystallization and thereafter at penal rate as applicable <br>thereof.</p>
    
          <p>You would book forward contracts if, we decide to cover the fluctuations in the exchange rates.<br> I /We undertake to book such forward contracts forms part of the
          arrangement by you under the L/c.<br> If I/We book forward contracts with other banks against this Letter of Credit I/we are/am liable to pay to you <br>commission in lieu of
          exchange as per the rates prescribed by the bank from time to time in addition to swap<br> and interest from the date of negotiation at the foreign centre till the date of
          credit of proceeds in your <br>Nostro account.</p>
    
          <p>In case I /we do not book the forward contract, I/We undertake to buy the relative foreign exchange in connection<br> with retirement of bills/documents etc under the letter of
          credit from you at the ruling rate of exchange. <br>In case foreign exchange in connection with retirement is not being bought from you I/we shall pay commission<br> in lieu of
          exchange in addition to swap cost and interest from the date of negotiation at the foreign center till <br>the date of credit of proceeds in your Nostro account.</p>
    
          <p>I/We confirm that we are aware of  Bank Ltd's Sanctions Policy Statement and that Bank, including its subsidiaries <br>and affiliates ("the Group"), is
          firmly committed to complying with all applicable sanctions laws (as imposed by UN,<br> US, UK, EU or any other Government and/or Regulatory authorities) that are legally
          binding upon the Group and<br> its businesses.</p>
    
          <p>I/We are further aware that  Bank Ltd may be unable to process any transactions that involves or have <br>linkages/reference to any sanctioned
    countries*/territories*/parties including for cases where transhipment<br> is involved</p>
    
    <p>I/We confirm that shipment and / or transhipment of goods covered under this transaction shall not involve any <br>sanctioned countries /territories /parties.
    *Sanctioned Countries and Territories include Cuba, Iran, Syria, <br>North Korea (also known as Democratic People's Republic of Korea), Crimea and Sevastopol <br>(also known as
    Crimean Autonomous Republic) and Sectorial Sanctioned Countries and Territories include<br> Russia and Venezuela.</p>
    
    <p>OFAC Declaration: In this connection, we declare, confirm and undertake that:</p>
    <p>i) We are aware that (name of the country) is an entity against which sanctions by the Office of Foreign <br>Assets (OFAC) of USA is in place.
    We undertake not to hold __________ Bank Ltd responsible for in any <br>manner whatsoever in nature and hold __________ Bank Ltd fully indemnified
    against all losses and damages <br>that may be caused to us on account of the funds remitted under this transaction being confiscated or blocked <br>or seized by
    any authority/government/agency.</p>
    <p>ii) We further declare that we shall furnish any material information relating to this transaction as required by<br> any authority/government/agency, now or
    in future. Also we authorize __________ Bank Ltd to make available any <br>of the material information pertains our transaction to any
    authority/agency/entity without referring the matter to us.</p>
    
    <p>* I/We further declare that the undersigned has/have the authority to give this application, declaration and <br>undertaking on behalf of the firm/company.</p>
    
    <p>As per the terms of sanction given by the Bank, we have to provide margin at ..................... % for the above <br>mentioned LC.</p>
    
    <p>We authorize you to debit the necessary LC commission / other charges to our operating account<br> number ............................................. with your Bank</p>
    </div>`;
        var strArr1 = doc.splitTextToSize(text, 200);
        var pdfDocument2 = doc.fromHTML(
          strArr1?.join(''), 10,pdfDocument1?.y);
    
        var strArr1 = doc.splitTextToSize(
          `<div><p>Yours faithfully, </p></div>`,
          200
        );
        doc.fromHTML(strArr1?.join(''), 10, pdfDocument2?.y + 50);
    
        var strArr1 = doc.splitTextToSize(
          `<div><p>(Signature of the applicant)</p></div>`,
          200
        );
        var pdfDocument4 = doc.fromHTML(
          strArr1?.join(''),
          pageWidth / 2 + 30,
          pdfDocument2?.y + 50
        );
    
        var strArr1 = doc.splitTextToSize(`<div><p>Date : </p></div>`, 200);
        doc.fromHTML(strArr1?.join(''), 10, pdfDocument4?.y);
    
        var strArr1 = doc.splitTextToSize(`<div><p>Account No.:</p></div>`, 200);
        var pdfDocument5 = doc.fromHTML(
          strArr1?.join(''),
          pageWidth / 2 + 30,
          pdfDocument4?.y
        );
    
        var strArr1 = doc.splitTextToSize(`<div><p>Place : </p></div>`, 200);
        doc.fromHTML(strArr1?.join(''), 10, pdfDocument5?.y);
    
        var strArr1 = doc.splitTextToSize(`<div><p>Address:</p></div>`, 200);
        var pdfDocument6 = doc.fromHTML(
          strArr1?.join(''),
          pageWidth / 2 + 30,
          pdfDocument5?.y
        );
    
        var strArr1 = doc.splitTextToSize(
          `<div><p>*Applicable when the application /declaration /undertaking is signed on behalf of the firm / company</p></div>`,
          200
        );
        var pdfDocument7 = doc.fromHTML(strArr1?.join(''), 10, pdfDocument6?.y);
    
        let tableuri = doc.output('arraybuffer');
        console.log(tableuri, 'tableuri');
        const x1 = 'data:application/pdf;base64,' + this._arrayBufferToBase64(tableuri);
        this.PREVIWES_URL = ''
        setTimeout(() => {
          this.PREVIWES_URL = x1;
          this.VISIBLITY_PDF = true;
          setTimeout(() => {
            resolve({ BankUrl: this.PREVIWES_URL, LetterHeadUrl: this.LETTER_HEAD_URL })
            this.event.emit({ BankUrl: this.PREVIWES_URL, LetterHeadUrl: this.LETTER_HEAD_URL });
          }, 200);
        }, 200);
      }
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
    return words_string?.toUpperCase();
  }



  TITLE_CHANGED: string = 'Direct Import Payment'

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
      fromValue.value['BenneName'] = this.BENEFICIARY_DETAILS
      this.ExportBillLodgement_Form = fromValue?.value;
      this.PREVIEWS_URL_LIST = ''
      this.alldocuments = [];
      this.SELECTED_PIPO_URL_LIST = []
      this.fillForm(fromValue?.value).then(async (res: any) => {
        await this.getS3Url().then(async (res: any) => {
          await res?.forEach(element => {
            this.alldocuments.push(element)
          });
          await this.OTHER_DOCUMENTS?.forEach(element => {
            this.alldocuments.push(element?.pdf)
          });
          this.ExportBillLodgement_Form?.paymentTerm?.forEach((paymentTermelement, index) => {
            this.SELECTED_PIPO_URL_LIST.push({ name: 'BOE-' + (index + 1), pdf: paymentTermelement?.BOE?.doc })
            this.alldocuments.push(paymentTermelement?.BOE?.doc);
          });

          this.ExportBillLodgement_Form["BCQuote"]?.forEach((paymentTermelement, index) => {
            paymentTermelement?.documents?.forEach(caelement => {
              if (caelement != '' && caelement != undefined && caelement != null) {
                this.SELECTED_PIPO_URL_LIST.push({ name: 'BCQuote-' + (index + 1), pdf: caelement })
                this.alldocuments.push(caelement);
              }
            });
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

  SendApproval(Status: string, UniqueId: any) {
    if (UniqueId != null) {
      var pipo_id: any = [];
      var boe_id: any = [];
      var pipo_name: any = [];
      for (let index = 0; index < this.ExportBillLodgement_Form?.paymentTerm?.length; index++) {
        const element = this.ExportBillLodgement_Form?.paymentTerm[index];
        pipo_id.push(element?.BOE?.pipo[0]?._id)
        boe_id.push(element?.BOE?._id)
        pipo_name.push(element?.BOE?.pipo[0]?.pipo_no)
      }

      var approval_data: any = {
        id: UniqueId + '_' + this.randomId(10),
        tableName: 'Buyer-Credit',
        deleteflag: '-1',
        userdetails: this.validator.userData,
        status: 'pending',
        documents: this.alldocuments,
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
                formdata: this.ExportBillLodgement_Form,
                documents: this.alldocuments,
                pipo_1: pipo_id,
                Url_Redirect: { file: 'import', document: 'orAdvice', pipo: pipo_name.toString() },
              },
              TypeTransaction: 'Buyer-Credit',
              fileType: this.validator.userData?.sideMenu,
              UserDetails: approval_data?.id,
              pipo: pipo_id,
              BOERef:[boe_id]
            }
            this.documentService.addExportBillLodgment(data).subscribe((res1: any) => {
              let updatedData = {
                "TransactionRef": [
                  res1._id,
                ]
              }
              this.userService.updateManyPipo(pipo_id, 'import', '', updatedData).subscribe((data) => {
                console.log('king123');
                console.log(data, this.ExportBillLodgement_Form?.paymentTerm);
                for (let index = 0; index < this.ExportBillLodgement_Form?.paymentTerm?.length; index++) {
                  const element: any = this.ExportBillLodgement_Form?.paymentTerm[index];
                  const sum = parseFloat(element?.BOE?.invoiceAmount) - parseFloat(element?.RemittanceAmount);
                  this.documentService.updateBoe({ balanceAmount: sum, moredata: [element] }, element?.BOE?._id).subscribe((updateBoeres: any) => {
                    console.log('king123');
                    console.log(data);
                    if ((index + 1) == this.ExportBillLodgement_Form?.paymentTerm.length) {
                      var updateapproval_data: any = {
                        RejectData: {
                          tableName: 'pi_po',
                          id: approval_data?.id,
                          TransactionId: res1._id,
                          data: this.ExportBillLodgement_Form,
                          pipo_id: pipo_id,
                          pipo_name: pipo_name,
                          BOERef: boe_id
                        }
                      }
                      this.documentService.UpdateApproval(approval_data?.id, updateapproval_data).subscribe((res1: any) => {
                        this.router.navigate(['/home/dashboardTask'])
                        this.toastr.success("Buyer-Credit transaction created successfully...")
                      });
                    }
                  }, (error) => {
                    console.log('error');
                  }
                  );
                }
              }, (error) => {
                console.log('error');
              });
              this.documentService.getDownloadStatus({ id: UniqueId, deleteflag: '-1' }).subscribe((res: any) => {
                console.log(res, 'dsdsdsdsdsdsds');
                this.GetDownloadStatus = res[0];
                if (res.length == 0) {
                  this.documentService.getDownloadStatus({ id: UniqueId, deleteflag: '2' }).subscribe((res: any) => {
                    console.log(res, 'dsdsdsdsdsdsds');
                    this.GetDownloadStatus = res[0];
                  })
                }
              })
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
  PDF_VIEW_URL: any = ''
  VIEW_DOCUMENTS(index: any, data: any) {
    this.PDF_VIEW_URL = ''
    setTimeout(() => { this.PDF_VIEW_URL = data?.document }, 100)
  }
}