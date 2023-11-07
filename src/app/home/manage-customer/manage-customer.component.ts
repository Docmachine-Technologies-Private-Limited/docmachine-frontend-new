import { UserService } from "./../../service/user.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DocumentService } from "../../service/document.service";
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { WindowInformationService } from "../../service/window-information.service";
import { AprrovalPendingRejectTransactionsService } from "../../service/aprroval-pending-reject-transactions.service";
import { ToastrService } from "ngx-toastr";
import { ConfirmDialogBoxComponent, ConfirmDialogModel } from "../confirm-dialog-box/confirm-dialog-box.component";
import { MatDialog } from "@angular/material/dialog";
import { UploadServiceValidatorService } from "../../components/Upload/service/upload-service-validator.service";
@Component({
  selector: "app-manage-customer",
  templateUrl: "./manage-customer.component.html",
  styleUrls: ["./manage-customer.component.scss"],
})
export class ManageCustomerComponent implements OnInit {
  item2: any;
  loginForm: FormGroup;
  buyerForm: FormGroup;
  closeResult: string;
  file: any;
  USER_DATA: any = [];
  FILTER_VALUE_LIST_NEW: any = {
    header: [
      "Name",
      "Bank Name",
      "Account Number",
      "IBAN",
      "Sort Code",
      "Action"],
    items: [],
    Expansion_header: [],
    Expansion_Items: [],
    Objectkeys: [],
    ExpansionKeys: [],
    TableHeaderClass: [
      "col-td-th-1",
      "col-td-th-1",
      "col-td-th-1",
      "col-td-th-1",
      "col-td-th-1",
      "col-td-th-1"
    ],
    eventId: ''
  }
  TABLE_BENE_SELECTED_VALUE: any = '';
  TABLE_BUYER_SELECTED_VALUE: any = '';

  constructor(
    private documentService: DocumentService,
    public router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    public wininfo: WindowInformationService,
    private toastr: ToastrService,
    public dialog: MatDialog,
    public validator: UploadServiceValidatorService,
    public AprrovalPendingRejectService: AprrovalPendingRejectTransactionsService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(async (params) => {
      this.file = this.route.snapshot.params['id'];
      if (this.file === "import") {
        this.FILTER_VALUE_LIST_NEW['header'] = [
          "Name",
          "Bank Name",
          "Account Number",
          "IBAN",
          "Sort Code",
          "Action"]
        this.userService.getBene(1).subscribe((data) => {
          console.log(data["data"], 'getBene');
          this.item2 = data["data"];
          this.BuyerBeneficiaryTable(this.item2)
        }, (error) => { console.log("errrrror") });

        this.loginForm = this.formBuilder.group({
          benneName: ['', Validators.required],
          beneAdrs: ['', Validators.required],
          beneBankName: ['', Validators.required],
          beneAccNo: ['', Validators.required],
          beneBankAdress: ['', Validators.required],
          beneBankSwiftCode: ['', Validators.required],
          sortCode: ['', Validators.required],
          iban: ['', Validators.required],
          interBankSwiftCode: ['', Validators.required],
          interBankName: ['', Validators.required],
        });
        this.validator.BANK_NAME_LIST_GLOABL = await this.documentService.getBankNameList();
        console.log("USER_DATA loaddata", this.validator.BANK_NAME_LIST_GLOABL)
        this.validator.buildForm({
          benneName: {
            type: "text",
            value: "",
            label: "Beneficiary Name",
            maxLength:300,
            placeholderText: 'Beneficiary name',
            rules: {
              required: true,
            }
          },
          beneAdrs: {
            type: "text",
            typeOf: 'Address',
            value: "",
            label: "Beneficiary Address",
            placeholderText: 'Ex: street address, City. PIN',
            maxLength: 300,
            rules: {
              required: true,
            }
          },
          beneBankName: {
            type: "BankList",
            value: "",
            label: "Beneficiary Bank Name",
            placeholderText: 'Enter Bank Name',
            rules: {
              required: true,
            }
          },
          beneAccNo: {
            type: "text",
            typeOf: 'Address',
            value: "",
            label: "Beneficiary Account No.",
            placeholderText: '',
            rules: {
              required: true,
            }
          },
          beneBankAdress: {
            type: "text",
            typeOf: 'Address',
            value: "",
            label: "Beneficiary’s bank’s address including country",
            placeholderText: 'Ex: street address, City. PIN',
            maxLength: 300,
            rules: {
              required: true,
            }
          },
          beneBankSwiftCode: {
            type: "text",
            value: "",
            label: "Beneficiary’s bank’s (any one) SWIFT code*",
            placeholderText: '',
            rules: {
              required: true,
            }
          },
          sortCode: {
            type: "text",
            value: "",
            label: "Sort Code",
            placeholderText: '',
            rules: {
              required: false,
            }
          },
          iban: {
            type: "text",
            value: "",
            label: "IBAN",
            placeholderText: '',
            rules: {
              required: false,
            }
          },
          interBankSwiftCode: {
            type: "text",
            value: "",
            label: "Intermediary Bank details (if applicable) SWIFT Code",
            maxLength: 300,
            placeholderText: '',
            rules: {
              required: false,
            }
          },
          interBankName: {
            type: "BankList",
            value: "",
            maxLength:300,
            label: "Intermediary Bank Name (if any)",
            placeholderText: '',
            rules: {
              required: false,
            }
          }
        }, 'CreateNewBeneficiary');
        this.validator.buildForm({
          benneName: {
            type: "text",
            value: "",
            label: "Beneficiary Name",
            maxLength: 300,
            placeholderText: 'Beneficiary name',
            rules: {
              required: true,
            }
          },
          beneAdrs: {
            type: "text",
            typeOf: 'Address',
            value: "",
            label: "Beneficiary Address",
            placeholderText: 'Ex: street address, City. PIN',
            maxLength: 300,
            rules: {
              required: true,
            }
          },
          beneBankName: {
            type: "BankList",
            value: "",
            label: "Beneficiary Bank Name",
            placeholderText: 'Enter Bank Name',
            maxLength: 300,
            rules: {
              required: true,
            }
          },
          beneAccNo: {
            type: "text",
            typeOf: 'Address',
            value: "",
            label: "Beneficiary Account No.",
            placeholderText: '',
            rules: {
              required: true,
            }
          },
          beneBankAdress: {
            type: "text",
            typeOf: 'Address',
            value: "",
            label: "Beneficiary’s bank’s address including country",
            placeholderText: 'Ex: street address, City. PIN',
            maxLength: 300,
            rules: {
              required: true,
            }
          },
          beneBankSwiftCode: {
            type: "text",
            value: "",
            label: "Beneficiary’s bank’s (any one) SWIFT code*",
            placeholderText: '',
            rules: {
              required: true,
            }
          },
          sortCode: {
            type: "text",
            value: "",
            label: "Sort Code",
            placeholderText: '',
            rules: {
              required: false,
            }
          },
          iban: {
            type: "text",
            value: "",
            label: "IBAN",
            placeholderText: '',
            rules: {
              required: false,
            }
          },
          interBankSwiftCode: {
            type: "text",
            value: "",
            label: "Intermediary Bank details (if applicable) SWIFT Code",
            maxLength: 300,
            placeholderText: '',
            rules: {
              required: false,
            }
          },
          interBankName: {
            type: "BankList",
            value: "",
            label: "Intermediary Bank Name (if any)",
            placeholderText: '',
            maxLength: 300,
            rules: {
              required: false,
            }
          }
        }, 'CreateNewBeneficiaryMember');

      }
      else if (this.file === "export") {
        this.validator.BANK_NAME_LIST_GLOABL = await this.documentService.getBankNameList();
        console.log("USER_DATA loaddata", this.validator.BANK_NAME_LIST_GLOABL)
        this.FILTER_VALUE_LIST_NEW['header'] = [
          "Buyer Name",
          "Buyer Address",
          "Consignee Name",
          "Consignee Address",
          "Buyer Bank",
          "Buyer Bank Address",
          "Action"]
        this.FILTER_VALUE_LIST_NEW['TableHeaderClass'] = [
          "col-td-th-1",
          "col-td-th-2",
          "col-td-th-2",
          "col-td-th-2",
          "col-td-th-2",
          "col-td-th-2",
          "col-td-th-1"
        ],
          this.userService.getBuyer(1).subscribe((data) => {
            console.log(data["data"], 'getBuyer');
            this.item2 = data["data"];
            this.BuyerBeneficiaryTable(this.item2)
          }, (error) => {
            console.log("errrrror");
          }
          );
        this.validator.buildForm({
          buyerName: {
            type: "text",
            value: "",
            label: "Buyer Name",
            placeholderText: 'Buyer’s name',
            maxLength: 300,
            rules: {
              required: true,
            }
          },
          buyerAdrs: {
            type: "text",
            typeOf: 'Address',
            value: "",
            label: "Buyer Address",
            placeholderText: 'Ex: street address, City. PIN',
            maxLength: 300,
            rules: {
              required: true,
            }
          },
          ConsigneeName: {
            type: "text",
            value: "",
            label: "Consignee Name",
            maxLength: 300,
            placeholderText: 'Enter Consignee Name',
            rules: {
              required: true,
            }
          },
          ConsigneeAddress: {
            type: "text",
            typeOf: 'Address',
            value: "",
            label: "Consignee Address",
            placeholderText: 'Ex: Consignee street address, City. PIN',
            maxLength: 300,
            rules: {
              required: true,
            }
          },
          buyerbank: {
            type: "BankList",
            value: "",
            label: "BUYER BANK NAME",
            maxLength: 300,
            placeholderText: 'Select Bank Name',
            rules: {
              required: true,
            }
          },
          buyerbankaddress: {
            type: "text",
            typeOf: 'Address',
            value: "",
            label: "BANK ADDRESS",
            placeholderText: 'Ex: street address, City. PIN',
            maxLength: 300,
            rules: {
              required: true,
            }
          }
        }, 'CreateNewBuyer');
        this.validator.buildForm({
          buyerName: {
            type: "text",
            value: "",
            label: "Buyer Name",
            placeholderText: 'Buyer’s name',
            maxLength: 300,
            rules: {
              required: true,
            }
          },
          buyerAdrs: {
            type: "text",
            typeOf: 'Address',
            value: "",
            label: "Buyer Address",
            placeholderText: 'Ex: street address, City. PIN',
            maxLength: 300,
            rules: {
              required: true,
            }
          },
          ConsigneeName: {
            type: "text",
            value: "",
            label: "Consignee Name",
            maxLength: 300,
            placeholderText: 'Enter Consignee Name',
            rules: {
              required: true,
            }
          },
          ConsigneeAddress: {
            type: "text",
            typeOf: 'Address',
            value: "",
            label: "Consignee Address",
            placeholderText: 'Ex: Consignee street address, City. PIN',
            maxLength: 300,
            rules: {
              required: true,
            }
          },
          buyerbank: {
            type: "BankList",
            value: "",
            label: "BUYER BANK NAME",
            maxLength: 300,
            placeholderText: 'Select Bank Name',
            rules: {
              required: true,
            }
          },
          buyerbankaddress: {
            type: "text",
            typeOf: 'Address',
            value: "",
            label: "BANK ADDRESS",
            placeholderText: 'Ex: street address, City. PIN',
            maxLength: 300,
            rules: {
              required: true,
            }
          }
        }, 'CreateNewBuyerwithConsignee');
      }
    });
    this.userService.getUserDetail().then((status: any) => {
      this.USER_DATA = status['result'];
      console.log(this.USER_DATA, this.USER_DATA?.sideMenu, 'USER_DETAILS');
    });

    this.buyerForm = this.formBuilder.group({
      buyerName: ['', Validators.required],
      buyerAdrs: ['', Validators.required],
      buyerbank: ['', Validators.required],
      buyerbankaddress: ['', Validators.required],
      ConsigneeName: ['', Validators.required],
      ConsigneeAddress: ['', Validators.required]
    });
  }

  BuyerBeneficiaryTable(data: any) {
    this.FILTER_VALUE_LIST_NEW['items'] = [];
    this.FILTER_VALUE_LIST_NEW['Expansion_Items'] = [];
    this.removeEmpty(data).then(async (newdata: any) => {
      if (this.file === "export") {
        await newdata?.forEach(async (element) => {
          await this.FILTER_VALUE_LIST_NEW['items'].push({
            BuyerName: element['buyerName'],
            BuyerAddress: element['buyerAdrs'],
            ConsigneeName: element['ConsigneeName'],
            ConsigneeAddress: element['ConsigneeAddress'],
            BuyerBank: element['buyerbank'],
            BuyerBankAddress: element['buyerbankaddress'],
            isExpand: false,
            disabled: element['deleteflag'] != '-1' ? false : true,
            RoleType: this.USER_DATA?.result?.RoleCheckbox
          })
        });
        if (this.FILTER_VALUE_LIST_NEW['items']?.length != 0) {
          this.FILTER_VALUE_LIST_NEW['Objectkeys'] = await Object.keys(this.FILTER_VALUE_LIST_NEW['items'][0])?.filter((item: any) => item != 'isExpand')
          this.FILTER_VALUE_LIST_NEW['Objectkeys'] = await this.FILTER_VALUE_LIST_NEW['Objectkeys']?.filter((item: any) => item != 'disabled')
          this.FILTER_VALUE_LIST_NEW['Objectkeys'] = await this.FILTER_VALUE_LIST_NEW['Objectkeys']?.filter((item: any) => item != 'RoleType')
        }
      } else if (this.file === "import") {
        await newdata?.forEach(async (element) => {
          await this.FILTER_VALUE_LIST_NEW['items'].push({
            Name: element['benneName'],
            BankName: element['beneBankName'],
            AccountNumber: element['beneAccNo'],
            IBAN: element['iban'],
            SortCode: element['sortCode'],
            isExpand: false,
            disabled: element['deleteflag'] != '-1' ? false : true,
            RoleType: this.USER_DATA?.result?.RoleCheckbox
          })
        });
        if (this.FILTER_VALUE_LIST_NEW['items']?.length != 0) {
          this.FILTER_VALUE_LIST_NEW['Objectkeys'] = await Object.keys(this.FILTER_VALUE_LIST_NEW['items'][0])?.filter((item: any) => item != 'isExpand')
          this.FILTER_VALUE_LIST_NEW['Objectkeys'] = await this.FILTER_VALUE_LIST_NEW['Objectkeys']?.filter((item: any) => item != 'disabled')
          this.FILTER_VALUE_LIST_NEW['Objectkeys'] = await this.FILTER_VALUE_LIST_NEW['Objectkeys']?.filter((item: any) => item != 'RoleType')
        }
      }
    });
  }

  async removeEmpty(data: any) {
    await data.forEach(element => {
      for (const key in element) {
        if (element[key] == '' || element[key] == null || element[key] == undefined) {
          element[key] = 'NF'
        }
      }
    });
    return await new Promise(async (resolve, reject) => { await resolve(data) });
  }

  onSubmit(e: any, panel: any) {
    e.value.beneBankName = e?.value?.beneBankName?.value != undefined ? e?.value?.beneBankName?.value : e?.value?.beneBankName;
    e.value.interBankName = e?.value?.interBankName?.value != undefined ? e?.value?.interBankName?.value : e?.value?.beneBankName
    this.userService.creatBene(e.value).subscribe(data => {
      console.log("king123")
      console.log(data)
      panel?.displayHidden;
      this.ngOnInit()
    }, error => {
      console.log("error")
    });
  }

  onSubmitBuyer(e: any, panel: any) {
    e.value.buyerbank = e?.value?.buyerbank?.value != undefined ? e?.value?.buyerbank?.value : e?.value?.buyerbank;
    this.userService.creatBuyer(e?.value).subscribe(data => {
      console.log("king123")
      console.log(data)
      panel?.displayHidden;
      this.ngOnInit()
    }, error => {
      console.log("error")
    });
  }

  open(content1, content2) {
    if (this.USER_DATA['role'] != 'member') {
      this.modalService.open(content1, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    } else {
      this.modalService.open(content2, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  }

  open1(content1, content2) {
    if (this.USER_DATA['role'] != 'member') {
      this.modalService.open(content1, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    } else {
      this.modalService.open(content2, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  }
  private getDismissReason(reason: any): string {
    console.log('ddhdhdhh')
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onSubmitBuyerMember(e: any) {
    e.value.buyerbank = e?.value?.buyerbank?.value != undefined ? e?.value?.buyerbank?.value : e?.value?.buyerbank;
    let approval_data = {
      id: 'BuyerMember' + '_' + this.guid(),
      tableName: '',
      deleteflag: '-1',
      userdetails: this.USER_DATA,
      status: 'pending',
      data: e?.value,
      Types: 'BuyerAddition',
      TypeOfPage: 'BuyerAddition',
      FileType: this.USER_DATA?.sideMenu
    }
    this.AprrovalPendingRejectService.DownloadByRole_Transaction_Type(this.USER_DATA['RoleCheckbox'], approval_data, () => {
      this.toastr.success('Successfully added BuyerAddition in Approval Pending queu...');
      this.router.navigate(['/home/dashboardTask']);
      this.modalService.dismissAll();
    });
  }

  onSubmitBeneficiaryMember(e: any) {
    e.value.beneBankName = e?.value?.beneBankName?.value != undefined ? e?.value?.beneBankName?.value : e?.value?.beneBankName;
    e.value.interBankName = e?.value?.interBankName?.value != undefined ? e?.value?.interBankName?.value : e?.value?.beneBankName
    let approval_data = {
      id: 'BeneficiaryMember' + '_' + this.guid(),
      tableName: '',
      deleteflag: '-1',
      userdetails: this.USER_DATA,
      status: 'pending',
      data: e.value,
      Types: 'BeneficiaryAddition',
      TypeOfPage: 'BeneficiaryAddition',
      FileType: this.USER_DATA?.sideMenu
    }
    this.AprrovalPendingRejectService.DownloadByRole_Transaction_Type(this.USER_DATA['RoleCheckbox'], approval_data, () => {
      this.toastr.success('Successfully added Beneficiary in Approval Pending queu...');
      this.router.navigate(['/home/dashboardTask']);
      this.modalService.dismissAll();
    });
  }

  guid() {
    let s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '_' + s4() + '_' + s4() + '_' + s4() + '_' + s4() + s4() + s4();
  }

  onEditBeneSubmit(id, values, panel: any) {
    console.log("FORM VALUE", values.form.value);
    this.userService.updateBene(id, values.form.value).subscribe((data) => {
      this.toastr.success('Successfully updated Beneficiary');
      panel?.displayHidden;
      this.ngOnInit()
    }, (error) => {
      console.log("error");
    });
  }

  onEditBuyerSubmit(id: any, values, panel: any) {
    console.log("FORM VALUE", values.form.value);
    this.userService.updateBuyer(id, values.form.value).subscribe((data) => {
      this.toastr.success('Successfully upadted buyer');
      panel?.displayHidden;
      this.ngOnInit()
    }, (error) => {
      console.log("error");
    });
  }

  clickbenetable(data: any, panel: any) {
    if (this.USER_DATA?.role != 'member') {
      this.TABLE_BENE_SELECTED_VALUE = this.item2[data?.index];
      panel?.displayShow
    } else {
      this.toastr.error('Sorry you have not access to edit Beneficiary...');
    }
  }

  clickbuyertable(data: any, panel: any) {
    if (this.USER_DATA?.role != 'member') {
      this.TABLE_BUYER_SELECTED_VALUE = this.item2[data?.index];
      panel?.displayShow
    } else {
      this.toastr.error('Sorry you have not access to edit buyer...');
    }
  }

  clickdeletebenetable(data: any, panel: any) {
    if (this.USER_DATA?.role != 'member') {
      const message = `Are you sure you want to delete this?`;
      const dialogData = new ConfirmDialogModel("Confirm Action", message);
      const dialogRef: any = this.dialog?.open(ConfirmDialogBoxComponent, {
        maxWidth: "400px",
        data: dialogData
      });
      dialogRef.afterClosed().subscribe(dialogResult => {
        console.log("---->", dialogResult)
        if (dialogResult) {
          this.userService.deleteBene(this.item2[data?.index]?._id).then((data) => {
            this.toastr.success('Successfully delete Beneficiary');
            this.ngOnInit()
          }, (error) => {
            console.log("error");
          });
        }
      });
    } else {
      this.toastr.error('Sorry you have not access to delete Beneficiary...');
    }
  }

  clickdeletebuyertable(data: any, panel: any) {
    if (this.USER_DATA?.role != 'member') {
      const message = `Are you sure you want to delete this?`;
      const dialogData = new ConfirmDialogModel("Confirm Action", message);
      const dialogRef: any = this.dialog?.open(ConfirmDialogBoxComponent, {
        maxWidth: "400px",
        data: dialogData
      });
      dialogRef.afterClosed().subscribe(dialogResult => {
        console.log("---->", dialogResult)
        if (dialogResult) {
          this.userService.deleteBuyer(this.item2[data?.index]?._id).then((data) => {
            this.toastr.success('Successfully delete buyer');
            this.ngOnInit()
          }, (error) => {
            console.log("error");
          });
        }
      });
    } else {
      this.toastr.error('Sorry you have not access to delete buyer...');
    }
  }
  
  CreateFormBank() {
    this.validator.buildForm({
      BankName: {
        type: "text",
        value: "",
        label: "Bank Name",
        placeholderText: 'Bank Name',
        rules: {
          required: true,
        },
        maxLength: 200
      },
    }, 'AddNewBankName');
  }
  
  addNewBank(e: any, panel: any) {
    this.documentService.addNewBankInfo({ value: e?.value?.BankName, BankUniqueId: this.initialName(this.removeAllSpecialChar(e?.value?.BankName)) }).subscribe(async (res: any) => {
      this.validator.BANK_NAME_LIST_GLOABL = await this.documentService.getBankNameList();
      this.toastr.success(res?.message);
      panel?.displayHidden;
    })
  }
  initialName(words) {
    'use strict'
    return words
      .replace(/\b(\w)\w+/g, '$1_')
      .replace(/\s/g, '')
      .replace(/\.$/, '')
      .toUpperCase();
  }

  removeAllSpecialChar(string: any) {
    return string?.replace(/[^a-zA-Z ]/g, "");
  }
}
