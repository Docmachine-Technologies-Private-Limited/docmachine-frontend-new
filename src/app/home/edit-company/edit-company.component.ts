import { FormGroup } from '@angular/forms'
import { UserService } from './../../service/user.service';
import { DropzoneDirective, DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { Component, ElementRef, Inject, Input, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import * as data from '../../bank.json';
import * as data1 from '../../currency.json';
import { WindowInformationService } from '../../service/window-information.service';
import $ from 'jquery'
import { DomSanitizer } from '@angular/platform-browser';
import { takeWhile, timer } from 'rxjs';
import { DocumentService } from '../../service/document.service';
import { UploadServiceValidatorService } from '../../components/Upload/service/upload-service-validator.service';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.scss']
})
export class EditCompanyComponent implements OnInit {
  @Input() que: any;
  @Input() entities: any;
  @ViewChild('inputName', { static: true }) public inputRef: ElementRef;
  public type: string = 'directive';
  public disabled: boolean = false;
  @ViewChild(DropzoneDirective, { static: true }) directiveRef?: DropzoneDirective;
  item: any;
  authToken: any;
  headers: any;
  file: Array<any> = [];
  loginForm: any = FormGroup;
  letterHead = false;
  roundSeal = false;
  forSeal = false;
  letterHeadDone = false;
  roundSealDone = false;
  forSealDone = false;
  public config: DropzoneConfigInterface;
  public config1: DropzoneConfigInterface;

  letterHead1: any;
  roundSeal1: any;
  forSeal1: any;
  fs: boolean = true;
  rs: boolean = true;
  lh: boolean = true;
  editable: boolean = false;
  isItem: boolean = false;
  submitted: boolean;
  isDisabled: boolean;
  file1: any;
  bankDetails: any;
  Details: any;
  details: any;
  i: number;
  k = 2;
  showLess = false;
  jsondata: any;
  dataJson: any;
  bankName: any = [];
  currencyName = [];
  toggle: boolean;
  dataJson1: any;
  jsondata1: any;
  toggle1: boolean;
  value = 100;
  value1: any;
  submitted1: boolean;
  z: any;
  api_base: any;
  l: number = 2;
  showLessLoc: boolean;
  m: number = 2;
  showLessCom: boolean;
  location: any = [];
  commodity: any = [];
  x: number;
  y: number;
  p: any;
  q: any;
  userData: any = [];
  TEXT_CHANGED: string = 'Details';
  UPDATED_DETAILS: any = [];
  VALIDATION_FORM: any = {
    adress: '',
    bankDetails: [],
    caEmail: '',
    chaEmail: '',
    commodity: [],
    file: [],
    gst: '',
    iec: '',
    location: [],
    phone: '',
    teamName: ''
  };
  CURRENCY_LIST: any = [];
  Account_Type: any = [{
    type: 'OD-over draft'
  }, {
    type: 'CC-cash credit'
  }, {
    type: 'CA-Current account'
  }, {
    type: 'EEFC - Exchange earner Foreign currency'
  }, {
    type: 'PCFC- packing credit Foreign currency'
  }, {
    type: 'EBRD- Bill discounting accoun'
  }];

  BANK_NAME_LIST: any = [];
  ADD_REMOVE_OPTION: any = {
    Location: [],
    Commodity: [],
    Bank_Details: []
  }

  OPTION_CHANGED: boolean = false;
  constructor(@Inject(PLATFORM_ID) public platformId,
    private userService: UserService,
    private toastr: ToastrService,
    private sanitizer: DomSanitizer,
    public docservice: DocumentService,
    public validator: UploadServiceValidatorService,
    public wininfo: WindowInformationService) {
    this.loadFromLocalStorage()
    this.api_base = userService.api_base;
    this.headers = {
      Authorization: this.authToken,
    }
  }

  async ngOnInit() {
    await this.userService.getUserDetail().then((user: any) => {
      this.userData = user?.result
      console.log("userData", this.userData)
      for (let index = 0; index < data1['default']?.length; index++) {
        this.CURRENCY_LIST.push({
          type: data1['default'][index]['value']
        })
      }
      console.log(this.CURRENCY_LIST, 'CURRENCY_LIST')
      this.docservice.getBankNameList().then((res) => {
        this.validator.BANK_NAME_LIST_GLOABL = res;
      });
      console.log(this.validator.BANK_NAME_LIST_GLOABL, this.userService.UserData, 'BANK_NAME_LIST')
    });
    this.docservice.getBankNameList().then((res: any) => {
      this.BANK_NAME_LIST = res;
      console.log(this.BANK_NAME_LIST, 'BANK_NAME_LIST')
    })
    this.jsondata = data['default'];
    this.dataJson = data['default']
    this.jsondata1 = data1['default'];
    this.dataJson1 = data1['default']
    this.userService.getTeam().subscribe(data => {
      console.log(data['data'][0], "getTeam")
      this.item = data['data'][0]
      this.UPDATED_DETAILS = this.item;
      delete this.UPDATED_DETAILS['updatedAt'];
      delete this.UPDATED_DETAILS['userId'];
      delete this.UPDATED_DETAILS['__v'];
      delete this.UPDATED_DETAILS['member'];

      if (this.UPDATED_DETAILS['Starhousecertificate_Details'] == undefined) {
        this.UPDATED_DETAILS['Starhousecertificate_Details'] = {
          CertificateNo: '',
          Issuesdate: '',
          ExpiryDate: '',
          file: ''
        };
      }
      this.isItem = true;
      console.log(this.item, "item")
      this.file1 = data['data'][0].file;
      this.loadFormData()
    }, error => {
      console.log("error")
    });
  }

  loadFormData() {
    let AdCode: any = [];
    this.item?.AdCode?.forEach(element => {
      AdCode.push([{
        type: "LabelShow",
        value: element?.AdCode,
        label: "AD Code",
        name: 'AdCode',
        rules: {
          required: true,
        },
      },])
    });

    let location: any = [];
    this.item?.location?.forEach(element => {
      location.push([{
        type: "LabelShow",
        value: element?.loc,
        label: "Add Location",
        name: 'loc',
        rules: {
          required: false,
        },
      }])
    });

    let commodity: any = [];
    this.item?.commodity?.forEach(element => {
      commodity.push([{
        type: "LabelShow",
        value: element?.como,
        label: "Add Commodity",
        name: 'como',
        rules: {
          required: true,
        },
      },
      {
        type: "LabelShow",
        value: element?.HSCODE,
        label: "Select HS Code",
        name: "HSCODE",
        rules: {
          required: true,
        }
      },])
    });

    let bankDetails: any = [];
    this.item?.bankDetails?.forEach(element => {
      bankDetails.push([{
        type: "LabelShow",
        value: element?.bank,
        label: "Bank Name",
        name: 'bank',
        rules: {
          required: true,
        },
      },
      {
        type: "LabelShow",
        value: element?.SwiftCode,
        label: "Bank Swift Code",
        name: 'SwiftCode',
        rules: {
          required: true,
        },
      },
      {
        type: "LabelShow",
        value: element?.bicAddress,
        label: "Bank Address",
        name: 'bicAddress',
        rules: {
          required: true,
        },
      },
      {
        type: "LabelShow",
        value: element?.accNumber,
        label: "Bank Account Number",
        name: 'accNumber',
        rules: {
          required: true,
        },

      },
      {
        type: "LabelShow",
        value: element?.accType,
        label: "Bank Account Type",
        name: 'accType',
        rules: {
          required: true,
        },
      },
      {
        type: "LabelShow",
        value: element?.currency,
        label: "Bank Currency Type",
        name: 'currency',
        rules: {
          required: true,
        },
      },])
    });
    this.validator.buildForm({
      teamName: {
        type: "LabelShow",
        value: this.item?.teamName,
        label: "Company Name",
        rules: {
          required: true,
        },
        Inputdisabled: true,
        placeholderText: 'Your Company Name'
      },
      iec: {
        type: "LabelShow",
        value: this.item?.iec,
        label: "*Importer exporter code (IEC)",
        rules: {
          required: true,
        },
        Inputdisabled: true,
        placeholderText: 'User Full Name'
      },
      adress: {
        type: "LabelShow",
        InputType: "text",
        value: this.item?.adress,
        label: "Company Address",
        rules: {
          required: true,
        },
        Inputdisabled: true,
        placeholderText: 'Your Email Id',
      },
      phone: {
        type: "LabelShow",
        value: this.item?.phone,
        label: "Contact Phone number",
        rules: {
          required: true,
        },
        Inputdisabled: true,
        placeholderText: 'Enter your mobile no.',
      },
      AdCode: {
        type: "formGroup",
        label: "AD Code",
        GroupLabel: [''],
        AddNewRequried: false,
        rules: {
          required: false,
        },
        formArray: AdCode
      },
      caEmail: {
        type: "LabelShow",
        value: this.item?.caEmail,
        label: `CA email id \n
        Ex: CA email ID’s for submission of documents for documents like 15B,annual statutory auditor certificate, write off etc.,`,
        rules: {
          required: true,
        },
        Inputdisabled: true,
        placeholderText: 'Enter your mobile no.',
      },
      chaEmail: {
        type: "LabelShow",
        value: this.item?.chaEmail,
        label: "CHA email id",
        rules: {
          required: true,
        },
        Inputdisabled: true,
        placeholderText: 'Enter your mobile no.',
      },
      gst: {
        type: "LabelShow",
        value: this.item?.gst,
        label: "*GSTIN",
        rules: {
          required: true,
        },
        Inputdisabled: true,
        placeholderText: 'Enter your mobile no.',
      },
      location: {
        type: "formGroup",
        label: "Branch List",
        GroupLabel: [''],
        AddNewRequried: false,
        rules: {
          required: false,
        },
        formArray: location
      },
      commodity: {
        type: "formGroup",
        label: "Commodity List",
        GroupLabel: [''],
        AddNewRequried: false,
        rules: {
          required: false,
        },
        formArray: commodity
      },
      bankDetails: {
        type: "formGroup",
        label: "Bank Details",
        GroupLabel: [''],
        AddNewRequried: false,
        rules: {
          required: false,
        },
        formArray: bankDetails
      },
      BranchName: {
        type: "LabelShow",
        value: this.item?.BranchName,
        label: "Main Branch Name",
        rules: {
          required: true,
        },
        Inputdisabled: true,
        placeholderText: 'Enter your mobile no.',
      },
      BranchAddress: {
        type: "LabelShow",
        value: this.item?.BranchAddress,
        label: "Main Branch Address",
        rules: {
          required: true,
        },
        Inputdisabled: true,
        placeholderText: 'Enter your mobile no.',
      },
      letterHead: {
        type: "LabelShow",
        value: this.item?.letterHead,
        label: "Letter Head",
        rules: {
          required: true,
        },
        Inputdisabled: true,
        ShowButton: true,
        placeholderText: 'Enter your mobile no.',
      },
      roundSeal: {
        type: "LabelShow",
        value: this.item?.roundSeal,
        label: "Round Seal",
        rules: {
          required: true,
        },
        Inputdisabled: true,
        ShowButton: true,
        placeholderText: 'Enter your mobile no.',
      },
      forSeal: {
        type: "LabelShow",
        value: this.item?.forSeal,
        label: "For Seal",
        rules: {
          required: true,
        },
        Inputdisabled: true,
        ShowButton: true,
        placeholderText: 'Enter your mobile no.',
      },
      Starhousecertificate_Details: {
        type: "formGroup",
        label: "Upload Star house certificate",
        GroupLabel: [''],
        AddNewRequried: false,
        rules: {
          required: false,
        },
        formArray: [
          [{
            type: "LabelShow",
            value: this.item?.Starhousecertificate_Details[0]?.CertificateNo,
            label: "Certificate no.",
            name: 'CertificateNo',
            rules: {
              required: false,
            },
          },
          {
            type: "LabelShow",
            value: this.item?.Starhousecertificate_Details[0]?.Issuesdate,
            label: "Issues date",
            name: 'Issuesdate',
            rules: {
              required: false,
            },
          },
          {
            type: "LabelShow",
            value: this.item?.Starhousecertificate_Details[0]?.ExpiryDate,
            label: "Expiry Date",
            name: 'ExpiryDate',
            rules: {
              required: false,
            },
          },
          {
            type: "LabelShow",
            value: this.item?.Starhousecertificate_Details[0]?.ExpiryDate,
            label: "Documents",
            name: 'Documents',
            rules: {
              required: false,
            },
            ShowButton: true,
          }
          ]
        ]
      },
    }, 'SHOW_COMPANY_INFO');
    this.EditForm();
  }

  EditForm() {
    let AdCode: any = [];
    this.item?.AdCode?.forEach(element => {
      AdCode.push([{
        type: "text",
        value: element?.AdCode,
        label: "AD Code",
        name: 'AdCode',
        rules: {
          required: true,
        },
      },])
    });

    let location: any = [];
    this.item?.location?.forEach(element => {
      location.push([{
        type: "text",
        value: element?.loc,
        label: "Add Location",
        name: 'loc',
        rules: {
          required: false,
        },
      }])
    });

    let commodity: any = [];
    this.item?.commodity?.forEach(element => {
      commodity.push([{
        type: "text",
        value: element?.como,
        label: "Add Commodity",
        name: 'como',
        rules: {
          required: true,
        },
      },
      {
        type: "HSCODE",
        value: element?.HSCODE,
        label: "Select HS Code",
        name: "HSCODE",
        rules: {
          required: true,
        }
      },])
    });

    let bankDetails: any = [];
    this.item?.bankDetails?.forEach(element => {
      bankDetails.push([{
        type: "BankList",
        value: element?.bank,
        label: "Bank Name",
        name: 'bank',
        rules: {
          required: true,
        },
      },
      {
        type: "text",
        value: element?.SwiftCode,
        label: "Bank Swift Code",
        name: 'SwiftCode',
        rules: {
          required: true,
        },
      },
      {
        type: "text",
        value: element?.bicAddress,
        label: "Bank Address",
        name: 'bicAddress',
        rules: {
          required: true,
        },
      },
      {
        type: "text",
        value: element?.accNumber,
        label: "Bank Account Number",
        name: 'accNumber',
        rules: {
          required: true,
        },

      },
      {
        type: "AccountType",
        value: element?.accType,
        label: "Bank Account Type",
        name: 'accType',
        rules: {
          required: true,
        },
      },
      {
        type: "currency",
        value: element?.currency,
        label: "Bank Currency Type",
        name: 'currency',
        rules: {
          required: true,
        },
      },])
    });
    this.validator.buildForm({
      teamName: {
        type: "text",
        value: this.item?.teamName,
        label: "Company Name",
        rules: {
          required: true,
        },
        Inputdisabled: true,
        placeholderText: 'Your Company Name'
      },
      iec: {
        type: "text",
        value: this.item?.iec,
        label: "*Importer exporter code (IEC)",
        rules: {
          required: true,
        },
        Inputdisabled: true,
        placeholderText: 'User Full Name'
      },
      adress: {
        type: "text",
        InputType: "text",
        value: this.item?.adress,
        label: "Company Address",
        rules: {
          required: true,
        },
        Inputdisabled: true,
        placeholderText: 'Your Email Id',
      },
      phone: {
        type: "text",
        value: this.item?.phone,
        label: "Contact Phone number",
        rules: {
          required: true,
        },
        Inputdisabled: true,
        placeholderText: 'Enter your mobile no.',
      },
      caEmail: {
        type: "text",
        value: this.item?.caEmail,
        label: `CA email id<br>
        Ex: CA email ID’s for submission of documents for documents like 15B,annual statutory auditor certificate, write off etc.,`,
        rules: {
          required: true,
        },
        Inputdisabled: true,
        placeholderText: 'Enter your mobile no.',
      },
      chaEmail: {
        type: "text",
        value: this.item?.chaEmail,
        label: "CHA email id",
        rules: {
          required: true,
        },
        Inputdisabled: true,
        placeholderText: 'Enter your mobile no.',
      },
      gst: {
        type: "text",
        value: this.item?.gst,
        label: "*GSTIN",
        rules: {
          required: true,
        },
        Inputdisabled: true,
        placeholderText: 'Enter your mobile no.',
      },
      BranchName: {
        type: "text",
        value: this.item?.BranchName,
        label: "Main Branch Name",
        rules: {
          required: true,
        },
        Inputdisabled: true,
        placeholderText: 'Enter your mobile no.',
      },
      BranchAddress: {
        type: "text",
        value: this.item?.BranchAddress,
        label: "Main Branch Address",
        rules: {
          required: true,
        },
        Inputdisabled: true,
        placeholderText: 'Enter your mobile no.',
      },
      AdCode: {
        type: "formGroup",
        label: "AD Code",
        GroupLabel: [''],
        AddNewRequried: true,
        rules: {
          required: false,
        },
        formArray: AdCode
      },
      location: {
        type: "formGroup",
        label: "Branch List",
        GroupLabel: [''],
        AddNewRequried: true,
        rules: {
          required: false,
        },
        formArray: location
      },
      commodity: {
        type: "formGroup",
        label: "Commodity List",
        GroupLabel: [''],
        AddNewRequried: true,
        rules: {
          required: false,
        },
        formArray: commodity
      },
      bankDetails: {
        type: "formGroup",
        label: "Bank Details",
        GroupLabel: [''],
        AddNewRequried: true,
        rules: {
          required: false,
        },
        formArray: bankDetails
      },
      letterHead: {
        type: "UploadLetterHead",
        value: this.item?.letterHead,
        label: "Letter Head",
        rules: {
          required: true,
        },
        Inputdisabled: true,
        placeholderText: 'Enter your mobile no.',
      },
      roundSeal: {
        type: "UploadLetterHead",
        value: this.item?.roundSeal,
        label: "Round Seal",
        rules: {
          required: true,
        },
        Inputdisabled: true,
        placeholderText: 'Enter your mobile no.',
      },
      forSeal: {
        type: "UploadLetterHead",
        value: this.item?.forSeal,
        label: "For Seal",
        rules: {
          required: true,
        },
        Inputdisabled: true,
        placeholderText: 'Enter your mobile no.',
      },
      Starhousecertificate_Details: {
        type: "formGroup",
        label: "Upload Star house certificate",
        GroupLabel: [''],
        AddNewRequried: false,
        rules: {
          required: false,
        },
        formArray: [
          [
            {
              type: "text",
              value: this.item?.Starhousecertificate_Details[0]?.CertificateNo,
              label: "Certificate no.",
              name: 'CertificateNo',
              rules: {
                required: false,
              },
            },
            {
              type: "date",
              value: this.item?.Starhousecertificate_Details[0]?.Issuesdate,
              label: "Issues date",
              name: 'Issuesdate',
              rules: {
                required: false,
              },
            },
            {
              type: "date",
              value: this.item?.Starhousecertificate_Details[0]?.ExpiryDate,
              label: "Expiry Date",
              name: 'ExpiryDate',
              rules: {
                required: false,
              },
            },
            {
              type: "NewReUpload",
              value: this.item?.Starhousecertificate_Details[0]?.Documents,
              label: "Upload Documents",
              name: 'Documents',
              url: '/member/uploadImage',
              id: "Starhousecertificate_Details",
              rules: {
                required: false,
              },
            }
          ]
        ]
      },
    }, 'EDIT_COMPANY_INFO');
  }

  onSubmit(id, UPDATED_DETAILS: any) {
    console.log(UPDATED_DETAILS, 'UPDATED_DETAILS');
    if (UPDATED_DETAILS?.status == "VALID") {
      UPDATED_DETAILS.value.Starhousecertificate_Details = UPDATED_DETAILS?.value?.Starhousecertificate_Details;
      this.userService.updateTeamById(UPDATED_DETAILS?.value, id).subscribe(data => {
        console.log("king123")
        console.log(data['data'])
        this.toastr.success('Company details updated successfully.');
        this.ngOnInit();
        this.OPTION_CHANGED = false;
      }, error => {
        this.toastr.error('Invalid inputs, please check!');
        console.log("error")
        this.OPTION_CHANGED = true;
      });
    }
  }

  letterheadUrl: any = ''
  letterheadView(url: any) {
    this.letterheadUrl = url;
  }

  ForSealheadUrl: any = ''
  ForSealheadView(url: any) {
    setTimeout(() => {
      this.ForSealheadUrl = ''
      this.ForSealheadUrl = url;
    }, 200);
  }

  public loadFromLocalStorage() {
    const token = sessionStorage.getItem('token');
    this.authToken = token;
    return this.authToken;
  }

  Starhousecertificate_Url: any = '';
  Starhousecertificate_DetailsView(item: any) {
    this.Starhousecertificate_Url = ''
    setTimeout(() => {
      this.Starhousecertificate_Url = item?.file
    }, 200);
  }

  bankClick(e, i) {
    this.bankName[i] = e;
    this.UPDATED_DETAILS.bankDetails[i]['BankUniqueId'] = e?.BankUniqueId
    console.log(this.bankName, e, 'this.loginForm.value.bankDetails.')
  }

  LETTER_HEADE_URL: any = ''
  onFileSelect(input) {
    console.log(input.files);
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = async (e: any) => {
        let data = e.target.result.substr(e.target.result.indexOf(',') + 1)
        this.userService.ConvertPdfImage(data).subscribe((res: any) => {
          console.log(res, "ConvertPdfImage")
          this.LETTER_HEADE_URL = res?.pdf2imgae;
        })
      }
      reader.readAsDataURL(input.files[0]);
    }
  }
}
