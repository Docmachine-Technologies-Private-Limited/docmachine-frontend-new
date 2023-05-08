import { UserService } from "./../../service/user.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DocumentService } from "../../service/document.service";
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { WindowInformationService } from "../../service/window-information.service";
import { AprrovalPendingRejectTransactionsService } from "../../service/aprroval-pending-reject-transactions.service";
import { ToastrService } from "ngx-toastr";
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

  constructor(
    private documentService: DocumentService,
    public router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    public wininfo: WindowInformationService,
    private toastr: ToastrService,
    public AprrovalPendingRejectService: AprrovalPendingRejectTransactionsService,
  ) { }

  ngOnInit(): void {
    this.wininfo.set_controller_of_width(270, '.content-wrap')
    this.route.params.subscribe(params => {
      this.file = this.route.snapshot.params['id'];
      if (this.file === "import") {
        this.userService.getBene(1).subscribe(
          (data) => {
            console.log("king123");
            console.log(data["data"]);
            this.item2 = data["data"];
            //this.router.navigate(['/login'], { queryParams: { registered: true }});
          },
          (error) => {
            console.log("errrrror");
          }
        );
      }
      else if (this.file === "export") {
        this.userService.getBuyer(1).subscribe(
          (data) => {
            console.log("king123");
            console.log(data["data"]);
            this.item2 = data["data"];
            //this.router.navigate(['/login'], { queryParams: { registered: true }});
          },
          (error) => {
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

  onSubmit() {
    this.userService.creatBene(this.loginForm.value)
      .subscribe(
        data => {
          console.log("king123")
          console.log(data)
          this.userService.getBene(1).subscribe(
            (res: any) => {
              this.item2 = res["data"];
              this.modalService.dismissAll();
              this.loginForm.reset();
            },
            (err) => console.log("Error", err)
          );

        },
        error => {
          console.log("error")
        });
  }

  onSubmitBuyer() {
    this.userService.creatBuyer(this.buyerForm.value)
      .subscribe(
        data => {
          console.log("king123")
          console.log(data)
          this.userService.getBuyer(1).subscribe(
            (res: any) => {
              this.item2 = res["data"];
              this.modalService.dismissAll();
              this.buyerForm.reset();
            },
            (err) => console.log("Error", err)
          );

        },
        error => {
          console.log("error")
        });
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  open1(content1, content2) {
    if (this.USER_DATA['role']!='member') {
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
    // this.userService.creatBuyer(this.buyerForm.value)
    //   .subscribe(
    //     data => {
    //       console.log("king123")
    //       console.log(data)
    //       this.userService.getBuyer(1).subscribe(
    //         (res: any) => {
    //           this.item2 = res["data"];
    //           this.modalService.dismissAll();
    //           this.buyerForm.reset();
    //         },
    //         (err) => console.log("Error", err)
    //       );

    //     },
    //     error => {
    //       console.log("error")
    //     });
  }
  guid() {
    let s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '_' + s4() + '_' + s4() + '_' + s4() + '_' + s4() + s4() + s4();
  }
}
