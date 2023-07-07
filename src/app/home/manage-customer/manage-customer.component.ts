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
@Component({
  selector: "app-manage-customer",
  templateUrl: "./manage-customer.component.html",
  styleUrls: [
    "../../../sass/application.scss",
    "./manage-customer.component.scss",
  ],
})
export class ManageCustomerComponent implements OnInit {
  item2: any;
  loginForm: FormGroup;
  buyerForm: FormGroup;
  closeResult: string;
  file: any;
  BANK_NAME_LIST: any = [];
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
    public AprrovalPendingRejectService: AprrovalPendingRejectTransactionsService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
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
        },
          (error) => {
            console.log("errrrror");
          }
        );
      }
      else if (this.file === "export") {
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
      }
    });
    this.userService.getUserDetail().then((status: any) => {
      this.USER_DATA = status['result'];
      console.log(this.USER_DATA, this.USER_DATA?.sideMenu, 'USER_DETAILS');
    });
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

    this.buyerForm = this.formBuilder.group({
      buyerName: ['', Validators.required],
      buyerAdrs: ['', Validators.required],
      buyerbank: ['', Validators.required],
      buyerbankaddress: ['', Validators.required],
      ConsigneeName: ['', Validators.required],
      ConsigneeAddress: ['', Validators.required]
    });
    this.BANK_NAME_LIST = this.documentService.getBankNameList();
    console.log(this.BANK_NAME_LIST, 'BANK_NAME_LIST')
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

  onSubmit(panel:any) {
    this.userService.creatBene(this.loginForm.value).subscribe(data => {
      console.log("king123")
      console.log(data)
      panel?.displayHidden;
      this.ngOnInit()
    }, error => {
      console.log("error")
    });
  }

  onSubmitBuyer(panel:any) {
    this.userService.creatBuyer(this.buyerForm.value).subscribe(data => {
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

  onSubmitBuyerMember() {
    let approval_data = {
      id: 'BuyerMember' + '_' + this.guid(),
      tableName: '',
      deleteflag: '-1',
      userdetails: this.USER_DATA,
      status: 'pending',
      data: this.buyerForm.value,
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

  onSubmitBeneficiaryMember() {
    let approval_data = {
      id: 'BeneficiaryMember' + '_' + this.guid(),
      tableName: '',
      deleteflag: '-1',
      userdetails: this.USER_DATA,
      status: 'pending',
      data: this.loginForm.value,
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
}
