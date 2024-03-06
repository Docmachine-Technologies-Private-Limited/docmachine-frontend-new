import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
import { AdvanceOutwardRemittanceControllerData } from '../../../Controller/Advance-Outward-Remittance-Controller';
import { A1WIthFEMAControllerData } from '../../../Controller/A1-Form-with-FEMA';
import { ImportLetterHeadService } from '../../../../../AllBankFormat/FederalBank/import-letter-head/import-letter-head.component';

@Component({
  selector: 'app-new-advance-import-payments',
  templateUrl: './new-advance-import-payments.component.html',
  styleUrls: ['./new-advance-import-payments.component.scss', '../../../../commoncss/common.component.scss']
})
export class NewAdvanceImportPaymentsComponent implements OnInit {
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
    public AdvanceOutwardRemittanceControllerData: AdvanceOutwardRemittanceControllerData,
    public AprrovalPendingRejectService: AprrovalPendingRejectTransactionsService,
    public ImportLetterHeadService: ImportLetterHeadService,
    public A1WIthFEMAControllerData: A1WIthFEMAControllerData,
    public userService: UserService) {
    exportbilllodgementdata.clear();
  }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(async (params) => {
      this.exportbilllodgementdata.clear();
      this.PREVIWES_URL = ''
      this.VISIBLITY_PDF = false;

      this.validator.PIPO_LIST = [];
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
        }, 'Invoice_IMPORT_TRANSACTION');
      }, 200);
    });
  }

  response(args: any) {
    this.publicUrl = '';
    setTimeout(() => {
      let PIPO_FORM: any = []
      this.validator?.PIPO_LIST?.forEach(element => {
        let form: any = [
          {
            type: "PIPO_LIST",
            value: element,
            label: "PIPO DETAILS",
            name: 'PIPO_LIST',
            rules: {
              required: true,
            },
            Inputdisabled: true,
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
            value: element?.paymentTerm[0]?.BalanceAmount,
            label: "Available Amount",
            name: 'amount',
            rules: {
              required: true,
            },
            disabled: true,
          },
          {
            type: "currency",
            value: element?.currency,
            label: "Currency",
            name: 'currency',
            rules: {
              required: true,
            },
            disabled: true
          },
          {
            type: "TextValiadtion",
            value: element?.paymentTerm[0]?.BalanceAmount,
            label: "Remittance amount",
            name: 'RemittanceAmount',
            EqualName: "amount",
            rules: {
              required: true,
            },
            errormsg: 'Remittance amount should be lesser than  or equal to the available amount.',
          }
        ]
        PIPO_FORM.push(form)
      });
      console.log(PIPO_FORM, this.validator.PIPO_LIST, "PIPO_FORM")
      this.validator.buildForm({
        BankCharges: {
          type: "BankCheckBox",
          value: "",
          label: "Select Bank",
          Banklabel: "To Debit Charges Account no. & Account Type*",
          TypeOfCurrency: "INR",
          Banklabel2: "To Debit Account no. & Account Type*",
          fieldName2: "BankDebit",
          ChargeLabelHide: true,
          rules: {
            required: true,
          }
        },
        BankDebit: {
          type: "xyzzzz",
          value: "",
          label: "",
          rules: {
            required: true,
          }
        },
        A1Form: {
          type: "yesnocheckbox",
          value: '',
          label: "Do you want Form A1?",
          rules: {
            required: true,
          },
          YesNo: '',
        },
        FEMAForm: {
          type: "yesnocheckbox",
          value: '',
          label: "Do you want FEMA DECLARATION?",
          rules: {
            required: true,
          },
          YesNo: '',
        },
        forwardCall: {
          type: "button",
          value: "",
          text: "Select FWC",
          rules: {
            required: false,
          }
        },
        Remittance: {
          type: "MultiCheckBox",
          value: "",
          label: "Select Remittance",
          checkboxlabel: [
            { text: "Part", type: "checkbox", value: 'Part' },
            { text: 'Full/Final', type: "checkbox", value: 'Full/Final' }
          ],
          rules: {
            required: true,
          }
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
        TypeofGoods: {
          type: "MultiCheckBox",
          value: "",
          label: "Select Type of Goods",
          checkboxlabel: [
            { text: "Capital", type: "checkbox", value: 'Capital' },
            { text: 'Non-Capital', type: "checkbox", value: 'NonCapital' }
          ],
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
          formArray: PIPO_FORM
        },
        FBG_WAVIER: {
          type: "OnlyLabelShow",
          value: false,
          label: "",
          rules: {
            required: false,
          }
        },
      }, 'IMPORT_TRANSACTION');
      console.log(this.UPLOAD_FORM, this.cicreate, 'UPLOAD_FORM')
    }, 200);
    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
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
    console.log(url, "sadsdasdasdsdas")
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
      "paymentTerm": { $elemMatch: { type: { value: "Advance Payment" } } }
    }, 'pi_po').subscribe((res: any) => {
      res?.data.forEach(element => {
        element['ischecked'] = false;
        element['isDisabled'] = false;
        let filterDirectImports = element?.paymentTerm?.filter((item: any) => item?.type?.value === "Advance Payment")
        filterDirectImports.forEach((paymentTermelement: any) => {
          paymentTermelement['BalanceAmount'] = paymentTermelement?.BalanceAmount != '-1' && paymentTermelement?.BalanceAmount != undefined ? paymentTermelement['BalanceAmount'] : paymentTermelement?.amount
          if (paymentTermelement['BalanceAmount'] == '0' && paymentTermelement['BalanceAmount'] == 0) {
            element['isDisabled'] = true;
            element['ischecked'] = true;
          }
        });
        element["paymentTerm"] = filterDirectImports;
      });

      this.PIPO_LIST = res?.data
      console.log(value, res, this.BENEFICIARY_DETAILS, "BENEFICIARY_CALLBACK")
    });
  }

  PIPO_AMOUNT_VALIDATION: any = 0;
  PIPO_REMITTANCE_AMOUNT: any = 0;
  PIPO_LIST_CHECKED($event, value: any, index: any) {
    if ($event?.target?.checked == true) {
      let currecnyvalidator = this.validator.PIPO_LIST?.filter((item) => item?.currency == value?.currency);
      if (currecnyvalidator?.length != 0 || this.validator.PIPO_LIST?.length == 0) {
        this.validator.PIPO_LIST.push(value)
        this.documentService.filterAnyTable({
          Currency: value?.currency,
        }, 'ForwardContract').subscribe((res: any) => {
          this.ForwardContractDATA = res?.data;
          console.log(res, 'ForwardContractDATA')
        });
        this.response(null);
        value['ischecked'] = true;
        this.PIPO_AMOUNT_VALIDATION = this.validator.PIPO_LIST?.reduce((a, b) => parseFloat(a) + parseFloat(b?.amount), 0);
        console.log(this.PIPO_AMOUNT_VALIDATION, "PIPO_AMOUNT_VALIDATION")
      } else {
        this.toastr.error("Please select same currency...")
        value['ischecked'] = false;
        $event.target.checked = false
      }
    } else {
      let PIPO_INDEX: any = this.validator.PIPO_LIST?.findIndex((item: any) => item?.pi_poNo == value?.pi_poNo)
      this.validator.PIPO_LIST.splice(PIPO_INDEX, 1);
      value['ischecked'] = false;
      this.response(null);
      $event.target.checked = false
      this.PIPO_AMOUNT_VALIDATION = this.validator.PIPO_LIST?.reduce((a, b) => parseFloat(a) + parseFloat(b?.amount), 0);
      console.log(this.PIPO_AMOUNT_VALIDATION, PIPO_INDEX, this.validator.PIPO_LIST, "PIPO_AMOUNT_VALIDATION")
    }

  }

  getORMRef(advice: any) {
    let advicelist: any = [];
    advice?.forEach(element => {
      advicelist.push(element?.billNo)
    });
    return advicelist?.join(',')
  }

  getORMAmount(advice: any) {
    let advicelist: any = [];
    advice?.forEach(element => {
      advicelist.push(element?.amount)
    });
    return advice?.length != 0 ? advice?.reduce((a, b) => parseFloat(a) + parseFloat(b?.amount), 0) : '';
  }

  getBOERef(advice: any) {
    let advicelist: any = [];
    advice?.forEach(element => {
      advicelist.push(element?.billNo)
    });
    return advicelist?.join(',')
  }

  getBOEAmount(advice: any) {
    let advicelist: any = [];
    advice?.forEach(element => {
      advicelist.push(element?.invoiceAmount)
    });
    return advice?.length != 0 ? advice?.reduce((a, b) => parseFloat(a) + parseFloat(b?.invoiceAmount), 0) : '';
  }

  getBOEBalanceAmount(advice: any) {
    advice?.forEach(element => {
      element['balanceAmount'] = element['balanceAmount'] != '-1' ? element['balanceAmount'] : element['invoiceAmount']
    });
    return advice?.length != 0 ? advice?.reduce((a, b) => parseFloat(a) + parseFloat(b?.balanceAmount), 0) : '';
  }

  BalanceINV(advice: any) {
    let ORMAmount = this.getORMAmount(advice?.AdviceRef);
    advice?.boeRef?.forEach(element => {
      element['balanceAmount'] = element['balanceAmount'] != '-1' ? element['balanceAmount'] : element['invoiceAmount']
    });
    let BOEBalanceAmount = this.getBOEBalanceAmount(advice?.boeRef)
    return parseFloat(advice?.amount) - parseFloat(ORMAmount) - parseFloat(BOEBalanceAmount);
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

  A1_FORM_VISIBLE: boolean = false;
  A1_FORM_PDF_URL: any = ''
  FEMA_FORM_VISIBLE: boolean = false;
  FEMA_FORM_PDF_URL: any = ''
  FBG_FORM_VISIBLE: boolean = false;
  FBG_FORM_PDF_URL: any = ''
  TIMEOUT: any = ''
  PIPO_REMITTANCE_AMOUNT_TRUE_FALSE: boolean = false;

  async fillForm(filldata: any) {
    console.log(filldata, "sdfsdfsdfdsfd")
    this.VISIBLITY_PDF = false;
    return new Promise(async (resolve, reject) => {
      if (this.BankId == 'F_B_L_6') {
        this.AdvanceOutwardRemittanceControllerData.BankFormatLoad().
          Fedral(this.validator, this.BENEFICIARY_DETAILS, filldata, this.ToForwardContract_Selected).then((res: any) => {
            this.VISIBLITY_PDF = false;
            this.PREVIWES_URL = ''
            this.TIMEOUT = setTimeout(async () => {
              this.PREVIWES_URL = res;
              this.VISIBLITY_PDF = true
              if (filldata?.A1Form?.id == "A1Form") {
                if (filldata?.A1Form?.bool == true) {
                  this.A1_FORM_PDF_URL = ''
                  this.A1_FORM_VISIBLE = false;
                  this.A1WIthFEMAControllerData.BankFormatLoad()?.Fedral(this.validator, this.BENEFICIARY_DETAILS, filldata,
                    this.ToForwardContract_Selected)?.A1FORM()?.then((A1PDFres) => {
                      console.log(A1PDFres, "A1PDFres")
                      this.A1_FORM_VISIBLE = true;
                      this.A1_FORM_PDF_URL = A1PDFres;
                    })
                } else {
                  this.A1_FORM_PDF_URL = ''
                  this.A1_FORM_VISIBLE = false;
                }
              }

              if (filldata?.FEMAForm?.id == "FEMAForm") {
                if (filldata?.FEMAForm?.bool == true) {
                  this.FEMA_FORM_VISIBLE = false;
                  this.FEMA_FORM_PDF_URL = ''
                  this.A1WIthFEMAControllerData.BankFormatLoad()?.Fedral(this.validator, this.BENEFICIARY_DETAILS, filldata,
                    this.ToForwardContract_Selected)?.FEMAPDF()?.then((A1PDFres) => {
                      console.log(A1PDFres, "FEMAPDF")
                      this.FEMA_FORM_VISIBLE = true;
                      this.FEMA_FORM_PDF_URL = A1PDFres;
                    })
                } else {
                  this.FEMA_FORM_VISIBLE = false;
                  this.FEMA_FORM_PDF_URL = ''
                }
              };
              this.PIPO_REMITTANCE_AMOUNT = this.ExportBillLodgement_Form?.paymentTerm?.reduce((a, b) => parseFloat(a) + parseFloat(b?.RemittanceAmount));
              console.log(this.validator.FIELDS_DATA['IMPORT_TRANSACTION'], "IMPORT_TRANSACTION")
              if (this.PIPO_AMOUNT_VALIDATION > 300000 || this.PIPO_REMITTANCE_AMOUNT > 300000) {
                this.PIPO_REMITTANCE_AMOUNT_TRUE_FALSE = true
                this.FBG_FORM_VISIBLE = false;
                this.FBG_FORM_PDF_URL = ''
                this.validator.FIELDS_DATA['IMPORT_TRANSACTION'][this.validator.FIELDS_DATA['IMPORT_TRANSACTION']?.length - 1]['label'] = 'FBG Waiver added...'
                this.validator.FIELDS_DATA['IMPORT_TRANSACTION'][this.validator.FIELDS_DATA['IMPORT_TRANSACTION']?.length - 1]['visible'] = true
                this.AdvanceOutwardRemittanceControllerData.BankFormatLoad()?.FBG(this.validator, this.BENEFICIARY_DETAILS, filldata, this.ToForwardContract_Selected).then((res: any) => {
                  this.FBG_FORM_VISIBLE = true;
                  this.FBG_FORM_PDF_URL = res
                });
              } else {
                this.PIPO_REMITTANCE_AMOUNT_TRUE_FALSE = false
                this.FBG_FORM_VISIBLE = false;
                this.FBG_FORM_PDF_URL = ''
                this.validator.FIELDS_DATA['IMPORT_TRANSACTION'][this.validator.FIELDS_DATA['IMPORT_TRANSACTION']?.length - 1]['label'] = ''
                this.validator.FIELDS_DATA['IMPORT_TRANSACTION'][this.validator.FIELDS_DATA['IMPORT_TRANSACTION']?.length - 1]['visible'] = false;
              }
              this.LETTER_HEAD_URL=''
              await this.ImportLetterHeadService.createLetterHead().FedralAdvance(this.validator, this.BENEFICIARY_DETAILS, filldata).then(async (letterhead) => {
                this.LETTER_HEAD_URL = letterhead;
                await resolve({ BankUrl: this.PREVIWES_URL, LetterHeadUrl: letterhead })
                this.event.emit({ BankUrl: this.PREVIWES_URL, LetterHeadUrl: letterhead });
                console.log(this.PREVIWES_URL, 'this.PREVIWES_URL')
              })
            }, 200);
          })
      } else if (this.BankId == "H_B_L_7") {
        this.AdvanceOutwardRemittanceControllerData.BankFormatLoad().
          HDFC(this.validator, this.BENEFICIARY_DETAILS, filldata, this.ToForwardContract_Selected).then((res: any) => {
            this.VISIBLITY_PDF = false;
            this.PREVIWES_URL = ''
            this.TIMEOUT = setTimeout(async () => {
              this.PREVIWES_URL = res;
              this.VISIBLITY_PDF = true;
              if (filldata?.A1Form?.id == "A1Form") {
                if (filldata?.A1Form?.bool == true) {
                  this.A1_FORM_PDF_URL = ''
                  this.A1_FORM_VISIBLE = false;
                  this.A1WIthFEMAControllerData.BankFormatLoad()?.Fedral(this.validator, this.BENEFICIARY_DETAILS, filldata,
                    this.ToForwardContract_Selected)?.A1FORM()?.then((A1PDFres) => {
                      console.log(A1PDFres, "A1PDFres")
                      this.A1_FORM_VISIBLE = true;
                      this.A1_FORM_PDF_URL = A1PDFres;
                    })
                } else {
                  this.A1_FORM_PDF_URL = ''
                  this.A1_FORM_VISIBLE = false;
                }
              } else if (filldata?.FEMAForm?.id == "FEMAForm") {
                if (filldata?.FEMAForm?.bool == true) {
                  this.FEMA_FORM_VISIBLE = false;
                  this.FEMA_FORM_PDF_URL = ''
                  this.A1WIthFEMAControllerData.BankFormatLoad()?.Fedral(this.validator, this.BENEFICIARY_DETAILS, filldata,
                    this.ToForwardContract_Selected)?.FEMAPDF()?.then((A1PDFres) => {
                      console.log(A1PDFres, "A1PDFres")
                      this.FEMA_FORM_VISIBLE = true;
                      this.FEMA_FORM_PDF_URL = A1PDFres;
                    })
                } else {
                  this.FEMA_FORM_VISIBLE = false;
                  this.FEMA_FORM_PDF_URL = ''
                }
              };
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
          await reslove(temp);
        });
      });
    })
  }

  async getS3Url2() {
    return new Promise(async (reslove, reject) => {
      let url: any = [{
        fileName: this.guid() + '.pdf', buffer: this.A1_FORM_PDF_URL,
        type: 'application/pdf'
      }, {
        fileName: this.guid() + '.pdf', buffer: this.FEMA_FORM_PDF_URL,
        type: 'application/pdf'
      },
      {
        fileName: this.guid() + '.pdf', buffer: this.FBG_FORM_PDF_URL,
        type: 'application/pdf'
      }]
      var fitertemp: any = url?.filter((n) => n?.buffer!='' && n?.buffer!=undefined && n?.buffer!=null);
      if (fitertemp?.length == 0) {
        reslove([])
      }
      console.log(fitertemp, "fitertemp")
      await this.userService?.UploadListS3Buket(fitertemp).subscribe(async (pdfresponse1: any) => {
        console.log(pdfresponse1, "UploadListS3Buket")
        reslove(pdfresponse1)
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
          await this.getS3Url2().then(async (res1: any) => {
            await res1?.forEach(element => {
              this.alldocuments.push(element?.url)
            });
          })
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

  SendApproval(Status: string, UniqueId: any,PREVIEWS_PANEL) {
    if (UniqueId != null) {
      var pipo_id: any = [];
      var pipo_name: any = [];
      for (let index = 0; index < this.ExportBillLodgement_Form?.paymentTerm?.length; index++) {
        const element = this.ExportBillLodgement_Form?.paymentTerm[index];
        pipo_id.push(element?.PIPO_LIST?._id)
        pipo_name.push(element?.PIPO_LIST?.pipo_no)
      }

      var approval_data: any = {
        id: UniqueId + '_' + this.randomId(10),
        tableName: 'Advance-Outward-Remittance',
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
         delete this.ExportBillLodgement_Form?.A1Form?.field;
         delete this.ExportBillLodgement_Form?.A1Form?.form
         
         delete this.ExportBillLodgement_Form?.FEMAForm?.field;
         delete this.ExportBillLodgement_Form?.FEMAForm?.form

          this.AprrovalPendingRejectService.DownloadByRole_Transaction_Type(this.validator.userData['RoleCheckbox'], approval_data, () => {
            var data: any = {
              data: {
                formdata: this.ExportBillLodgement_Form,
                documents: this.alldocuments,
                pipo_1: pipo_id,
                Url_Redirect: { file: 'import', document: 'orAdvice', pipo: pipo_name.toString() },
                ALL_DATA_HSCODE_FORWARD: this.ALL_DATA_HSCODE_FORWARD
              },
              TypeTransaction: 'Advance-Outward-Remittance',
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
                  element.PIPO_LIST.paymentTerm[0].BalanceAmount = sum;
                  this.documentService.AnyUpdateTable({
                    _id: element?.PIPO_LIST?._id,
                    "paymentTerm.type.value": "Advance Payment"
                  }, {
                    "paymentTerm.$.BalanceAmount": sum, 'TransActionType': [{
                      TransactionId: res1._id,
                      Type: 'Advance Payment'
                    }]
                  }, 'pi_po').subscribe((res: any) => { })

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
                          pipo_name: pipo_name
                        }
                      }
                      this.documentService.UpdateApproval(approval_data?.id, updateapproval_data).subscribe((res1: any) => {
                        this.router.navigate(['/home/dashboardTask'])
                        PREVIEWS_PANEL?.displayHidden;
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

  YesNoCheckBox(value: any, filldata = null) {

    console.log(value, "YesNoCheckBox")
  }
}
