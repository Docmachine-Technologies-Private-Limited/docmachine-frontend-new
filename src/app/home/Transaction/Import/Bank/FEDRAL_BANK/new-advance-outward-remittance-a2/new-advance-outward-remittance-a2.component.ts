import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PDFDocument } from 'pdf-lib';
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
import { A2AdvanceOutwardRemittanceControllerData } from '../../../Controller/A2-Advance-Outward-Remittance-Controller';
import { ImportLetterHeadService } from '../../../../../AllBankFormat/FederalBank/import-letter-head/import-letter-head.component';

@Component({
  selector: 'app-new-advance-outward-remittance-a2',
  templateUrl: './new-advance-outward-remittance-a2.component.html',
  styleUrls: ['./new-advance-outward-remittance-a2.component.scss', '../../../../commoncss/common.component.scss']
})
export class NewAdvanceOutwardRemittanceA2Component implements OnInit {
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
    public A2AdvanceOutwardRemittanceControllerData:A2AdvanceOutwardRemittanceControllerData,
    public ImportLetterHeadService: ImportLetterHeadService,
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
          },
          ChargeLabelHide:true,
        },
        BankCharges: {
          type: "xyzzzz",
          value: "",
          label: "",
          rules: {
            required: true,
          }
        },
        ADBranch: {
          type: "text",
          value: "",
          label: "Name of AD Branch",
          rules: {
            required: true,
          }
        },
        CustomerID: {
          type: "text",
          value: "",
          label: "Customer ID",
          rules: {
            required: true,
          },
          maxLength: 10
        },
        PANNo: {
          type: "text",
          value: "",
          label: "PAN No.",
          rules: {
            required: true,
          },
          maxLength: 10
        },
        ForeignBankCharges: {
          type: "MultiCheckBox",
          value: "",
          label: "Select Foreign Bank Charges",
          checkboxlabel: [
            { text: "Beneficiary", type: "checkbox", value: 'BeneficiaryAccount' },
            { text: 'Own', type: "checkbox", value: 'OwnAccount' },
            { text: 'Sharing', type: "checkbox", value: 'SharingAccount' }
          ],
          rules: {
            required: true,
          }
        },
        paymentTerm: {
          type: "formGroup",
          label: "",
          GroupLabel: ['PI/PO 1'],
          AddNewRequried: true,
          rules: {
            required: false,
          },
          formArray: [
            [
              {
                type: "PIPO_LIST",
                value: "",
                label: "Select",
                name: 'PIPO_LIST',
                rules: {
                  required: true,
                },
                callback: (item: any) => {
                  const myForm: any = item?.form?.controls[item?.fieldName] as FormGroup;
                  let currentVal = item?.value;
                  item.form['value'][item?.fieldName][item?.OptionfieldIndex]["RemittanceAmount"] = (currentVal?.amount);
                  myForm.controls[item?.OptionfieldIndex]?.controls["amount"]?.setValue(currentVal?.amount);
                  myForm.controls[item?.OptionfieldIndex]?.controls["RemittanceAmount"]?.setValue(currentVal?.amount);
                  myForm.controls[item?.OptionfieldIndex]?.controls["currency"]?.setValue(currentVal?.currency);
                  myForm['touched'] = true;
                  myForm['status'] = 'VALID';
                  let TotalPIAmount = currentVal?.paymentTerm?.reduce((a, b) => parseFloat(a) + parseFloat(b?.amount), 0);
                  myForm?.root?.controls['TotalPIAmount'].setValue(TotalPIAmount)
                  myForm.root['value']['TotalPIAmount'] = TotalPIAmount;
                  console.log(item, TotalPIAmount, "callback")
                  if (currentVal!='' && currentVal!=undefined && currentVal!=null) {
                    this.validator.dynamicFormGroup['IMPORT_TRANSACTION'].controls['PIPODOCUMENTS'].setValue(true);
                  }else{
                    this.validator.dynamicFormGroup['IMPORT_TRANSACTION'].controls['PIPODOCUMENTS'].setValue(false);
                  }
                },
              },
              {
                type: "text",
                value: "",
                label: "Available Amount",
                name: 'amount',
                rules: {
                  required: true,
                },
                disabled: true,
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
        TotalPIAmount: {
          type: "text",
          value: "",
          label: "Total PI Amount",
          rules: {
            required: true,
          }
        },
        PURPOSE_CODE: {
          type: "PURPOSE_CODE",
          value: "",
          label: "Select Purpose Code",
          rules: {
            required: true,
          }
        },
        "15CA": {
          type: "button",
          value: "",
          text: "Select 15 CA",
          rules: {
            required: true,
          }
        },
        "15CB": {
          type: "button",
          value: "",
          text: "Select 15 CB",
          rules: {
            required: true,
          }
        },
        "A2CUMAPPLICATION": {
          type: "checkbox",
          value: false,
          label: "Form A2 Cum Application",
          rules: {
            required: true,
          },
          CheckboxDisabled: true
        },
        "15CADOCUMENTS": {
          type: "checkbox",
          value: false,
          label: "15 CA",
          rules: {
            required: true,
          },
          CheckboxDisabled: true
        },
        "15CBDOCUMENTS": {
          type: "checkbox",
          value: false,
          label: "15 CB",
          rules: {
            required: true,
          },
          CheckboxDisabled: true
        },
        "PIPODOCUMENTS": {
          type: "checkbox",
          value: false,
          label: "Invoice/Debit Note",
          rules: {
            required: true,
          },
          CheckboxDisabled: true
        },
      }, 'IMPORT_TRANSACTION');
      console.log(this.UPLOAD_FORM, this.cicreate, 'UPLOAD_FORM')
    }, 200);
  }

  AddButton(event, panel1, panel2) {
    if (event?.text == "Select 15 CA") {
      panel1?.displayShow;
      this.get_by_REQUEST_TYPE_CA("CA")
    } else if (event?.text == "Select 15 CB") {
      this.get_by_REQUEST_TYPE_CA("CB")
      panel2?.displayShow;
    }
    console.log(event)
  }
  
  onTabChanges(event:any){
    if (event?.name == "15 CA Generate Summary") {
      this.get_by_REQUEST_TYPE_CA("CA")
    } else if (event?.name == "15 CB Request Summary") {
      this.get_by_REQUEST_TYPE_CA("CB")
    }
    console.log(event,"onTabChanges")
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
    }, 'pi_po').subscribe((res: any) => {
      res?.data.forEach(element => {
        element['ischecked'] = false;
        element['isDisabled'] = false;
      });
      this.validator.PIPO_LIST = res?.data
      this.PIPO_LIST = res?.data
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

  RequestforCASubmit(value: any,panel:any) {
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
    value.value['RequestType'] = "CA"
    value.value['BenneName']=value.value['BenneName']?.value!=undefined?value.value['BenneName']?.value:value.value['BenneName'];
    value.value['Commodity']=value.value['Commodity']?.value!=undefined?value.value['Commodity']?.value:value.value['Commodity'];
    this.documentService.CA_Certificate_add(value?.value).subscribe((buyer_beneficiary_creditaddres: any) => {
      console.log(buyer_beneficiary_creditaddres, 'buyer_beneficiary_creditaddres')
      this.toastr.success('buyer_beneficiary_credit added successfully....')
      this.documentService.SendMaildocuments({ subject: 'Buyer credit details added...', documentsList: filterdoc, data: value?.value }).subscribe((docres: any) => {
        this.toastr.success('Mail Sended Successfully....')
        this.get_by_REQUEST_TYPE_CA("CA");
        panel?.resetForm;
      })
    })
  }
  
  RequestforCBSubmit(value: any,panel:any) {
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
    value.value['BenneName']=value.value['BenneName']?.value!=undefined?value.value['BenneName']?.value:value.value['BenneName'];
    value.value['Commodity']=value.value['Commodity']?.value!=undefined?value.value['Commodity']?.value:value.value['Commodity'];
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
      this.CA_DUMP_SLEECTION[index] = this.CA_CERTIFICATE_DATA[index];
      this.CA_SELECTION_INDEX[index] = true;
    } else {
      this.CA_DUMP_SLEECTION[index] = '';
      this.CA_SELECTION_INDEX[index] = false;
    }

  }

  CB_SELECTION_DATA: any = [];
  CB_SELECTION_INDEX: any = [];
  CB_DUMP_SLEECTION: any = [];

  CB_SELECTION(event: any, index: any) {
    console.log(event, 'CB_SELECTION')
    if (event?.target?.checked) {
      this.CB_DUMP_SLEECTION[index] = this.CA_CERTIFICATE_DATA[index];
      this.CB_SELECTION_INDEX[index] = true;
    } else {
      this.CB_DUMP_SLEECTION[index] = ''
      this.CB_SELECTION_INDEX[index] = false;
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
      this.validator.dynamicFormGroup['IMPORT_TRANSACTION'].controls['15CA'].setValue(this.CA_SELECTION_DATA);
    } else {
      this.validator.dynamicFormGroup['IMPORT_TRANSACTION'].controls['15CA'].setValue('');
    }
    if (this.CA_SELECTION_DATA.length != 0) {
      this.validator.dynamicFormGroup['IMPORT_TRANSACTION'].controls['15CADOCUMENTS'].setValue(true);
    } else {
      this.validator.dynamicFormGroup['IMPORT_TRANSACTION'].controls['15CADOCUMENTS'].setValue(false);
    }
  }

  addCB() {
    this.CB_SELECTION_DATA = [];
    this.EXTRA_DOCUMENTS['CB_DOCUMENTS'] = [];
    this.CB_DUMP_SLEECTION.forEach(element => {
      this.EXTRA_DOCUMENTS['CB_DOCUMENTS'].push(element?.document);
      this.CB_SELECTION_DATA.push(element)
    });
    if (this.CA_SELECTION_DATA.length != 0) {
      this.validator.dynamicFormGroup['IMPORT_TRANSACTION'].controls['15CB'].setValue(this.CA_SELECTION_DATA);
    } else {
      this.validator.dynamicFormGroup['IMPORT_TRANSACTION'].controls['15CB'].setValue('');
    }
    if (this.CB_SELECTION_DATA.length != 0) {
      this.validator.dynamicFormGroup['IMPORT_TRANSACTION'].controls['15CBDOCUMENTS'].setValue(true);
    } else {
      this.validator.dynamicFormGroup['IMPORT_TRANSACTION'].controls['15CBDOCUMENTS'].setValue(false);
    }
  }
  
  TIMEOUT: any = ''
  async fillForm(filldata: any) {
    console.log(filldata, "fillForm")
    let formUrl: any = '';
    this.VISIBLITY_PDF = false;
    return new Promise(async (resolve, reject) => {
      if (this.BankId == 'F_B_L_6') {
        this.A2AdvanceOutwardRemittanceControllerData.BankFormatLoad().
          Fedral(this.validator, this.BENEFICIARY_DETAILS, filldata, this.ToForwardContract_Selected).then((res: any) => {
            this.VISIBLITY_PDF = false;
            this.PREVIWES_URL = ''
            this.TIMEOUT = setTimeout(async () => {
              this.PREVIWES_URL = res;
              this.VISIBLITY_PDF = true;
              this.LETTER_HEAD_URL=''
              this.ImportLetterHeadService.createLetterHead().FedralAdvance(this.validator, this.BENEFICIARY_DETAILS, filldata).then(async (letterhead) => {
                this.LETTER_HEAD_URL = letterhead;
                await resolve({ BankUrl: this.PREVIWES_URL, LetterHeadUrl: letterhead })
                this.event.emit({ BankUrl: this.PREVIWES_URL, LetterHeadUrl: letterhead });
                console.log(this.PREVIWES_URL, 'this.PREVIWES_URL')
              })
            
            }, 200);
          })
      }else if (this.BankId == "H_B_L_7") {
        this.A2AdvanceOutwardRemittanceControllerData.BankFormatLoad().
        HDFC(this.validator, this.BENEFICIARY_DETAILS, filldata, this.ToForwardContract_Selected).then((res: any) => {
          this.VISIBLITY_PDF = false;
          this.PREVIWES_URL = ''
          this.TIMEOUT = setTimeout(async () => {
            this.PREVIWES_URL = res;
            this.VISIBLITY_PDF = true;
            this.LETTER_HEAD_URL=''
            this.ImportLetterHeadService.createLetterHead().FedralAdvance(this.validator, this.BENEFICIARY_DETAILS, filldata).then(async (letterhead) => {
              this.LETTER_HEAD_URL = letterhead;
              await resolve({ BankUrl: this.PREVIWES_URL, LetterHeadUrl: letterhead })
              this.event.emit({ BankUrl: this.PREVIWES_URL, LetterHeadUrl: letterhead });
              console.log(this.PREVIWES_URL, 'this.PREVIWES_URL')
            })
          }, 200);
        })
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
            this.SELECTED_PIPO_URL_LIST.push({ name: 'pipo-' + (index + 1), pdf: paymentTermelement?.PIPO_LIST?.doc })
            this.alldocuments.push(paymentTermelement?.PIPO_LIST?.doc);
          });

          this.ExportBillLodgement_Form["15CA"]?.forEach((paymentTermelement, index) => {
            paymentTermelement?.documents?.forEach(caelement => {
              if (caelement != '' && caelement != undefined && caelement != null) {
                this.SELECTED_PIPO_URL_LIST.push({ name: 'CA-' + (index + 1), pdf: caelement })
                this.alldocuments.push(caelement);
              }
            });
          });
          
          this.ExportBillLodgement_Form["15CB"]?.forEach((paymentTermelement, index) => {
            paymentTermelement?.documents?.forEach(caelement => {
              if (caelement != '' && caelement != undefined && caelement != null) {
                this.SELECTED_PIPO_URL_LIST.push({ name: 'CB-' + (index + 1), pdf: caelement })
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

  SendApproval(Status: string, UniqueId: any,PREVIEWS_PANEL) {
    if (UniqueId != null) {
      var pipo_id: any = [];
      var boe_id: any = [];
      var pipo_name: any = [];
      for (let index = 0; index < this.ExportBillLodgement_Form?.paymentTerm?.length; index++) {
        const element = this.ExportBillLodgement_Form?.paymentTerm[index];
        pipo_id.push(element?.PIPO_LIST?._id)
        pipo_name.push(element?.PIPO_LIST?.pipo_no)
      }

      var approval_data: any = {
        id: UniqueId + '_' + this.randomId(10),
        tableName: 'Outward-Remittance-A2',
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
                ALL_DATA_HSCODE_FORWARD: this.ALL_DATA_HSCODE_FORWARD
              },
              TypeTransaction: 'Outward-Remittance-A2',
              fileType: this.validator.userData?.sideMenu,
              UserDetails: approval_data?.id,
              pipo: pipo_id,
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
                  const sum = parseFloat(element?.PIPO_LIST?.paymentTerm[0].BalanceAmount) - parseFloat(element?.RemittanceAmount);
                  this.userService.updatePipo({ balanceAmount: sum }, element?.PIPO_LIST?._id).subscribe((data) => {
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
                        PREVIEWS_PANEL?.displayHidden;
                        this.toastr.success("Outward-Remittance-A2 transaction created successfully...")
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
}