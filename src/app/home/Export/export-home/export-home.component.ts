import { Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewChildren } from "@angular/core";
import { DocumentService } from "../../../service/document.service";
import { FormGroup, FormControl } from "@angular/forms";
import { ActivatedRoute, NavigationStart, Router } from "@angular/router";
import * as data from '../../../inward.json';
import { ToastrService } from 'ngx-toastr';
import { DomSanitizer } from "@angular/platform-browser";
import { UserService } from "../../../service/user.service";
import { ConfirmDialogService } from "../../../confirm-dialog/confirm-dialog.service";
import { degrees, PDFDocument, PDFPage, rgb, StandardFonts } from 'pdf-lib';
import { formatDate } from '@angular/common';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as importedSaveAs from 'file-saver';
import { MatPaginator } from "@angular/material/paginator";
import { WindowInformationService } from "../../../service/window-information.service";
import { AprrovalPendingRejectTransactionsService } from "../../../service/aprroval-pending-reject-transactions.service";
import { CustomConfirmDialogModelComponent } from "../../../custom/custom-confirm-dialog-model/custom-confirm-dialog-model.component";
import { PipoDataService } from "../../../service/homeservices/pipo.service";
import { StorageEncryptionDecryptionService } from "../../../Storage/storage-encryption-decryption.service";
import { MergePdfListService } from "../../merge-pdf-list.service";
import $ from "jquery";
import htmlToPdfmake from 'html-to-pdfmake';
declare var kendo: any;

@Component({
  selector: 'app-export-home',
  templateUrl: './export-home.component.html',
  styleUrls: ['./export-home.component.scss']
})
export class ExportHomeComponent implements OnInit, OnDestroy {
  @ViewChildren('ngSelect') ngSelect: ElementRef;

  closeResult: string;
  public item1;
  public item2;
  public user;
  public selectedRow;
  public showInvoice;
  public select = false;
  public tableWidth;
  public export = false;
  public import = false;
  public lastIndex;
  public showPdf = false;
  public greaterAmount = 0;
  public selectedDoc = "";
  public Question1 = '';
  public Question2 = '';
  public Question3 = '';
  public Question4 = '';
  public Question5 = '';
  redirectid: any;
  redirectindex: any;
  redirectpage: any;
  public allTransactions: any = [];
  SBBuyerName: string = 'BuyerName';
  PIPONumbersBuyerName: string = 'BuyerName';
  buyerName: any = [];
  selectSB = '';

  public generateIndex;
  lodgement1: any;
  lodgement2: any;
  Ax1: boolean;
  Ax2: boolean;
  step1: any;
  public buyerDetail: any = [];
  commoditydata: any;
  locationdata: any;
  nameSearch: string = '';
  nameSearch1: string = '';
  nameSearch2: string = '';
  nameSearch3: string = '';
  startDate: any = '';
  endDate: any = '';
  myRadio: any;
  myRadio1: any;
  myRadio2: any;
  myRadio3: any;
  myRadio4: any;
  myRadio5: any;
  myRadio6: any;
  purposeSelect = false;
  selectPurpose = false
  public selectedPurpose: any = [];
  url: any;
  file: any;
  purposeCode: any;
  detail: any;
  jsondata: any;
  purposeRows: any[];
  dataJson: any;
  pgNumber = 0;
  pcNumber = 0;
  selectedPipo: boolean = false;
  selectedRowSb: boolean = false;
  item3: any = [];
  selectedSb: boolean;
  proceed: boolean = true;
  c: any;
  pipoArray: any = [];
  sbArray: any = [];
  tryArray: any = [];
  bankReference: any;
  generate0: boolean = false;
  generate3: boolean = false;
  generate1: boolean = false;
  generate2: boolean = false;
  generate4: boolean = false;
  generate5: boolean = false;
  generate6: boolean = false;
  data4: any;
  data5: any;
  data6: any;
  data7: any = [];
  done: boolean;
  doc: any = [];
  generate: boolean;
  generatePurpose: any = [];
  sbPurpose: any = [];
  sbPurpose1: any = [];
  importPurpose: any = [];
  noImportPurpose: any = [];
  donePurpose: any = [];
  doneSbPurpose: any = [];
  doneImportPurpose: any = [];
  mailArray: any = [];
  mainDoc: any = [];
  mainDoc1: any = [];
  mainDoc2: any = [];
  mainDoc3: any = [];
  mainDoc4: any = [];
  doc1: boolean;
  data8: any = [];
  data9: any = [];
  dataImport: any = [];
  sbPurposeDone1: any = [];
  item4: any = [];
  bankRef: any;
  newTask: any = [];
  z: any;
  zToggle: any = [];
  isDone: boolean;
  arr: any;
  item5: any = [];
  item6: any = [];
  item7 = [];
  isDoneAll: any;
  draftPipo: any = [];
  ir: string = 'no';
  draftSb: any = [];
  drafttry: any = [];
  bankArray: any = [];
  bankToggle: boolean;
  bankValue: any;
  bank: any = [];
  allBank: any = [];
  newBankArray: any = [];
  credit: any;
  charge: any = [];
  value: any;
  newDone = false;
  bgColor = false
  jstoday = '';
  today = new Date();
  buyerAds: any;
  itemArray: any = [];
  filterToggle: boolean;
  e: boolean;
  d: boolean;
  model = { option: 'Bank options' };
  model1 = { option: 'Bank options' };
  model2 = { option: 'Bank options' };
  selectedPdfs: any = [];
  selectedPdfs2: any;
  generateChecked: boolean = true;
  formerge: string | ArrayBuffer | Uint8Array;
  id: any;
  Inward_Remittance: any = ["P0102", "P0103", "P0104", "P0105", "P0107", "P0801", "P0802", "P0803", "P01P0804", "P0805", "P0806",
    "P1003", "P1004", "P1005", "P1006", "P1007", "P1008", "P1009", "P1011", "P1012", "P1013", "P1019"];

  default_value: any = [];
  old_data: any = [];
  INPUT_SERACH: any = [];
  Blcopyref: any = [];
  ThirdPartydata: any = [];
  Inward_Remittancefilter: any = [];
  SELECT_ThirdPartydata: any = '';
  SELECT_bankreferencenumber: any = [];
  Lodgement: any = [];
  selection: any = [];
  Select_A_bank: any = [];
  GetDownloadStatus: any = [];
  Export_Direct_Dispatch: any = []

  constructor(
    public documentService: DocumentService,
    private router: Router,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private userService: UserService,
    private modalService: NgbModal,
    private confirmDialogService: ConfirmDialogService,
    public wininfo: WindowInformationService,
    public pipoDataService: PipoDataService,
    public AprrovalPendingRejectService: AprrovalPendingRejectTransactionsService,
    public CustomConfirmDialogModel: CustomConfirmDialogModelComponent,
    public sessionstorage: StorageEncryptionDecryptionService,
    public pdfmerge: MergePdfListService,
  ) {
    console.log("hello")
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy', 'en-US', '+0530');
    console.log(this.jstoday)
    for (let index = 0; index < this.Inward_Remittance.length; index++) {
      this.Lodgement[this.Inward_Remittance[index]] = {
        'Lodgement': {
          Show: '',
          Hide: ''
        },
        'BuyerRemitter': {
          Show: '',
          Hide: ''
        },
        'Invoicereduction': {
          Show: '',
          Hide: ''
        },
        'BuyerRemitterDifferent': {
          Show: '',
          Hide: ''
        },
        'InvoiceReduction2': {
          Show: '',
          Hide: ''
        }
      }
    }
    console.log(this.Lodgement, 'dcsdsdsadsadsdasdasdsadsad')
  }
  ThirdPartydataoldata: any = [];
  Blcopyrefoldata: any = [];
  buyer: string = '';
  location: string = '';
  commodity: string = '';
  page: number = 0
  limit: number = 1000;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  filtervisible: boolean = false
  dataSource: any = [];
  OLD_dataSource: any = [];
  USER_DATA: any = [];
  STORE_URL: any = [];
  Inward_Remittance_MT103: any = [];
  MT103_URL: any = '';

  async ngOnInit() {
    this.wininfo.set_controller_of_width(250, '.content_top_common')
    await this.userService.getUserDetail().then((res: any) => {
      this.USER_DATA = res['result'];
    });
    console.log(this.USER_DATA, 'this.USER_DATA')
    this.redirectid = this.route.snapshot.paramMap.get('pipo')
    this.redirectindex = this.route.snapshot.paramMap.get('index')
    this.redirectpage = this.route.snapshot.paramMap.get('page')
    console.log("pipoId", this.redirectid);
    for (let index = 0; index < data['default'].length; index++) {
      var temp: any = [];
      for (let j = 0; j < data['default'][index]['purpose'].length; j++) {
        if (this.Inward_Remittance.includes(data['default'][index]['purpose'][j].code)) {
          temp.push(data['default'][index]['purpose'][j]);
        }
      }
      if (temp.length != 0) {
        this.default_value[data['default'][index]['groupname']] = temp;
      }
    }
    this.documentService.getBlcopyrefPromies().then((res: any) => {
      this.Blcopyref = res;
      this.Blcopyrefoldata = res;
      this.Export_Direct_Dispatch = res;
      // this.Blcopyref.forEach(element => {
      //   element?.pipo.forEach(pipoelement => {
      //     pipoelement?.TransactionRef.forEach(Transactionelement => {
      //       if (Transactionelement?.TypeTransaction=="Export-Direct-Dispatch") {
      //         Transactionelement?.data?.extradata?.COMMERCIAL.forEach(Advance_reference_Numberelement => {
      //           Advance_reference_Numberelement?.IRADVICE_INFO.forEach((IRADVICE_INFOElement:any) => {
      //             IRADVICE_INFOElement['irDataItem']['SB_Amount_Realized']=Advance_reference_Numberelement?.SB_Amout_Realized
      //             IRADVICE_INFOElement['irDataItem']['balanceAvai']=Advance_reference_Numberelement?.sbRef[0]?.balanceAvai
      //             IRADVICE_INFOElement['irDataItem']['SB_Amount']=Advance_reference_Numberelement?.sbRef[0]?.fobValue
      //             IRADVICE_INFOElement['irDataItem']['billrefno']=element?.blcopyrefNumber
      //             this.Export_Direct_Dispatch.push(IRADVICE_INFOElement?.irDataItem)
      //         });
      //       });
      //       }
      //     });
      //   });
      // });
      console.log(res, this.Export_Direct_Dispatch, 'getBlcopyref')

    }).catch((error) => {
      this.Blcopyref = [];
    });
    this.documentService.getMaster(1).subscribe(
      (res: any) => {
        console.log(res, 'res.data')
        res.data.forEach((element, i) => {
          if (element.buyerName != '' && element.buyerName != undefined) {
            this.PARTY_NAME.push(element.buyerName);
          }
        });
      },
      (err) => console.log(err)
    );
    this.Inward_Remittancefilter = this.Inward_Remittance;
    this.old_data = this.default_value;

    this.documentService.getPipos(this.page, this.limit, this.commodity, this.location, this.buyer, 'export').subscribe((res: any) => {
      console.log(res, 'resssssssssssssss');
      this.OLD_dataSource = res.docs;
      this.dataSource = res.docs
      console.log("res", this.dataSource)
      // this.paginator.length = res.totalDocs
    })

    console.log(data['default'])
    this.jsondata = data['default'];
    console.log(this.jsondata[0].purpose)
    this.dataJson = this.jsondata
    this.purposeFun(this.default_value)
    this.documentService.getInward_remittance().subscribe((res: any) => {
      this.Inward_Remittance_MT103 = res?.data;
      this.userService.mergePdf(this.Inward_Remittance_MT103[this.Inward_Remittance_MT103.length - 1]?.file).subscribe((res: any) => {
        res.arrayBuffer().then((data: any) => {
          var base64String = this._arrayBufferToBase64(data)
          const x = 'data:application/pdf;base64,' + base64String;
          this.MT103_URL = x;
          console.log('mergePdf_downloadEachFile', data);
        });
      });
      console.log(res, 'getInward_remittance')
    })

    this.documentService.getThird().subscribe(
      (res: any) => {
        console.log('Data fetched successfully', res);
        for (let value of res['data']) {
          if (value['file'] == 'export') {
            this.ThirdPartydata.push(value);
            this.ThirdPartydataoldata.push(value);
            console.log('ThirdPartydata', this.ThirdPartydata)
          }
        }
      },
      (err) => console.log(err)
    );
    this.route.params.subscribe(params => {
      this.file = this.route.snapshot.params['file'];
      this.showInvoice = false;
      console.log("hello")
    });
    //buyer details
    this.userService.getBuyer(1).subscribe(
      (res: any) => {
        (this.buyerDetail = res.data),
          console.log("Benne Detail4", this.buyerDetail);
      },
      (err) => console.log("Error", err)
    );
    //pipo details
    this.documentService.getPipo().subscribe(
      (res: any) => {
        console.log("HEre Response cheching for", res), (this.item3 = res.data);
        let value1: any = []
        for (let value of this.item3) {
          if (value.file == 'export') {
            value1.push(value)
          }
        }
        this.item3 = value1
        console.log('Export Pipo', this.item3)
      },
      (err) => console.log(err)
    );
    this.buyerName = [];
    this.documentService.getMaster(1).subscribe(
      (res: any) => {
        this.item1 = res.data;
        this.ShippingbillNumberfilter = res.data;
        var tempbuyer: any = [];
        this.item1.forEach((element, i) => {
          var temp: any = this.buyerName.filter((itemtemp: any) => itemtemp?.value?.indexOf(element.buyerName) != -1)
          if (element.buyerName != null && element.buyerName != undefined && temp.length == 0) {
            tempbuyer.push(element.buyerName)
          }
        });
        var fitertemp: any = tempbuyer.filter(n => n)
        fitertemp.forEach(element => {
          this.buyerName.push({ value: element })
        });
      },
      (err) => console.log(err)
    );



    this.documentService.getThird().subscribe(
      (res: any) => {
        console.log("HEre Response Third", res);
        this.item7 = res.data;
        for (let value of this.item7) {
          if (value['file'] == 'export') {

            this.item4.push(value);
            console.log('awwww', this.item4);
          }
        }
      },
      (err) => console.log(err)
    );

    // used details
    this.userService.getUserDetail().then((res: any) => {
      console.log('********USer Details', res);

      this.id = res.result.emailId;
      console.log('***********userId', this.id);
    });

    let date = ['27-JAN-21', '29-JAN-2021', '31-JAN-2021']
    const myArray = date[0].split(" ");

    this.userService.getTeam()
      .subscribe(
        data => {
          console.log("king123")
          console.log(data['data'][0])
          this.item5 = data['data'][0]
          console.log("checking for location commodity", this.item5)
          this.commoditydata = this.item5.commodity;
          console.log("checking for commodity", this.commoditydata)
          this.locationdata = this.item5.location;
          console.log("checking for location", this.locationdata)
          this.arr = this.item5.gst.split('');
          this.bankArray = this.item5.bankDetails
          for (let value of this.bankArray) {
            this.allBank.push(value.bank)
          }
          console.log(this.allBank)
          this.bank = this.allBank.filter(function (item, index, inputArray) {
            return inputArray.indexOf(item) == index;
          });
          console.log(this.bank, 'sallBankallBankallBankallBankallBank')
        },
        error => {
          console.log("error")
        });

    if (this.documentService.draft) {
      console.log('inside')
      this.proceed = false
      this.c = this.documentService.task.task[0].purposeCode;
      let newArray: any = [];
      let i = 0;
      for (let value of this.documentService.task.task) {

        newArray.push(value.purposeCode)

        if (value.purposeCode != "P0102" && value.purposeCode != "P0104" && value.purposeCode != "P0105" && value.purposeCode != "P0107") {
          //*ngIf='c != "P0102" && c != "P0104" && c != "P0105" && c != "P0107"'
          console.log('jdhdhjdhj')
          if (value.pipoUrls && !value.generateDoc1) {
            this.zToggle[i] = false
            this.generatePurpose[i] = value.purposeCode;
            let gene: any = []
            for (let value1 of value.pipoUrls) {
              gene.push(this.sanitizer.bypassSecurityTrustResourceUrl(
                value1.changingThisBreaksApplicationSecurity
              ))
            }
            this.draftPipo[i] = value.pipoNumbers
            this.mainDoc[i] = gene
            console.log("Line no. 287", this.mainDoc)

          }
          else if (value.pipoUrls && value.generateDoc1) {
            this.zToggle[i] = true
            this.generatePurpose[i] = value.purposeCode;
            this.donePurpose[i] = value.purposeCode;
            let gene: any = []
            for (let value1 of value.pipoUrls) {
              gene.push(this.sanitizer.bypassSecurityTrustResourceUrl(
                value1.changingThisBreaksApplicationSecurity
              ))
            }
            this.mainDoc[i] = gene;
            console.log("Line no. 301", this.mainDoc)
            if (value.generateDoc1) {
              console.log('hshshsh')
              this.data7[i] = this.sanitizer.bypassSecurityTrustResourceUrl(
                value.generateDoc1.changingThisBreaksApplicationSecurity
              )
            }
          }
        }

        else if (value.purposeCode == "P0102" || value.purposeCode == "P0104" || value.purposeCode == "P0105" || value.purposeCode == "P0107") {
          //*ngIf='c != "P0102" && c != "P0104" && c != "P0105" && c != "P0107"'
          console.log('hhhhh')
          if (value.lodgeDone == 'no') {
            if (!value.generateDoc1) {
              if (value.ir == 'yes') {
                this.sbPurpose1[i] = value.purposeCode;
              }
              this.zToggle[i] = false
              this.sbPurpose[i] = value.purposeCode;
              if (value.sbUrls) {
                let gene: any = []
                for (let value1 of value.sbUrls) {
                  gene.push(this.sanitizer.bypassSecurityTrustResourceUrl(
                    value1.changingThisBreaksApplicationSecurity
                  ))
                }
                this.draftSb[i] = value.sbNumbers
                this.mainDoc1[i] = gene
              }

              if (value.tryUrls) {
                let gene1: any = []
                for (let value1 of value.tryUrls) {
                  gene1.push(this.sanitizer.bypassSecurityTrustResourceUrl(
                    value1.changingThisBreaksApplicationSecurity
                  ))
                }
                this.drafttry[i] = value.tryNumbers
                this.mainDoc3[i] = gene1
              }
            }
            else if (value.generateDoc1) {
              this.sbPurpose[i] = value.purposeCode;
              this.doneSbPurpose[i] = value.purposeCode;
              console.log('ggggg')
              this.zToggle[i] = true

              if (value.sbUrls) {
                let gene: any = []
                for (let value1 of value.sbUrls) {
                  gene.push(this.sanitizer.bypassSecurityTrustResourceUrl(
                    value1.changingThisBreaksApplicationSecurity
                  ))
                }
                this.draftSb[i] = value.sbNumbers
                this.mainDoc1[i] = gene
              }

              if (value.tryUrls) {
                let gene1: any = []
                for (let value1 of value.tryUrls) {
                  gene1.push(this.sanitizer.bypassSecurityTrustResourceUrl(
                    value1.changingThisBreaksApplicationSecurity
                  ))
                }
                this.drafttry[i] = value.tryNumbers
                this.mainDoc3[i] = gene1

                if (value.generateDoc1) {
                  console.log('hshshsh')
                  this.data8[i] = this.sanitizer.bypassSecurityTrustResourceUrl(
                    value.generateDoc1.changingThisBreaksApplicationSecurity
                  )
                }
                if (value.ir == 'yes') {
                  if (value.generateDoc2) {
                    console.log('hshshsh')
                    this.dataImport[i] = this.sanitizer.bypassSecurityTrustResourceUrl(
                      value.generateDoc1.changingThisBreaksApplicationSecurity
                    )
                  }

                  this.sbPurposeDone1[i] = value.purposeCode
                }

              }
            }
          }
          if (value.lodgeDone == 'yes') {
            if (!value.generateDoc1) {
              if (value.ir == 'yes') {
                this.sbPurpose1[i] = value.purposeCode;
              }
              this.zToggle[i] = false
              this.sbPurpose[i] = value.purposeCode;
              if (value.sbUrls) {
                let gene: any = []
                for (let value1 of value.sbUrls) {
                  gene.push(this.sanitizer.bypassSecurityTrustResourceUrl(
                    value1.changingThisBreaksApplicationSecurity
                  ))
                }
                this.draftSb[i] = value.sbNumbers
                this.mainDoc1[i] = gene
              }

              if (value.tryUrls) {
                let gene1: any = []
                for (let value1 of value.tryUrls) {
                  gene1.push(this.sanitizer.bypassSecurityTrustResourceUrl(
                    value1.changingThisBreaksApplicationSecurity
                  ))
                }
                this.drafttry[i] = value.tryNumbers
                this.mainDoc3[i] = gene1
              }
            }
            else if (value.generateDoc1) {
              this.sbPurpose[i] = value.purposeCode;
              this.doneSbPurpose[i] = value.purposeCode;
              console.log('ggggg')
              this.zToggle[i] = true

              if (value.sbUrls) {
                let gene: any = []
                for (let value1 of value.sbUrls) {
                  gene.push(this.sanitizer.bypassSecurityTrustResourceUrl(
                    value1.changingThisBreaksApplicationSecurity
                  ))
                }
                this.draftSb[i] = value.sbNumbers
                this.mainDoc1[i] = gene
              }

              if (value.tryUrls) {
                let gene1: any = []
                for (let value1 of value.tryUrls) {
                  gene1.push(this.sanitizer.bypassSecurityTrustResourceUrl(
                    value1.changingThisBreaksApplicationSecurity
                  ))
                }
                this.drafttry[i] = value.tryNumbers
                this.mainDoc3[i] = gene1

                if (value.generateDoc1) {
                  console.log('hshshsh')
                  this.data8[i] = this.sanitizer.bypassSecurityTrustResourceUrl(
                    value.generateDoc1.changingThisBreaksApplicationSecurity
                  )
                }
                if (value.ir == 'yes') {
                  if (value.generateDoc2) {
                    console.log('hshshsh')
                    this.dataImport[i] = this.sanitizer.bypassSecurityTrustResourceUrl(
                      value.generateDoc1.changingThisBreaksApplicationSecurity
                    )
                  }

                  this.sbPurposeDone1[i] = value.purposeCode
                }

              }
            }
          }

        }
        i++
      }
      this.selectedPurpose = newArray
    }
    else {
      this.Question5 = '';
    }
    this.INPUT_SERACH = $('.search_box_new');
    console.log(this.mainDoc, 'dfsdfdfdfsd')
  }
  InputClick() {
    this.sessionstorage.set('MT102', JSON.stringify(this.Inward_Remittance_MT103[this.Inward_Remittance_MT103.length - 1]), 1)
    this.documentService.MT102_SUBJECT = (this.Inward_Remittance_MT103[this.Inward_Remittance_MT103.length - 1]);
  }
  removeSession() {
    this.sessionstorage.remove('MT102')
    this.documentService.MT102_SUBJECT = []
  }
  myFunction() {
    console.log("windwow", window.scroll)
  }
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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

  changeCheckbox(value) {
    let j = this.selectPIPO.indexOf(value)
    if (j == -1) {
      this.selectPIPO.push(value)
    }
    else {
      this.selectPIPO.splice(j, 1)
    }

    console.log(this.selectPIPO)
  }

  changeCheckbox1(value) {
    let j = this.sbArray.indexOf(value)
    if (j == -1) {
      this.sbArray.push(value)
    }
    else {
      this.sbArray.splice(j, 1)
    }

    if (this.sbArray.length > 0) {
      this.selectSB = this.sbArray.toString()
    }

    console.log(this.sbArray)
  }
  selectPIPO: any = []
  changeCheckboxPIPO(value, id) {
    let j = this.selectPIPO.indexOf(value)
    if (j == -1) {
      this.selectPIPO.push(value)
    }
    else {
      this.selectPIPO.splice(j, 1)
    }
    console.log(this.selectPIPO, 'selectPIPO')
  }

  changeCheckbox2(value) {
    let j = this.tryArray.indexOf(value)
    if (j == -1) {
      this.tryArray.push(value)
    }
    else {
      this.tryArray.splice(j, 1)
    }

    console.log(this.tryArray)
  }

  searchData(e) {
    console.log(e)

    this.jsondata = []
    if (e != null && e != '') {
      for (let data of this.dataJson) {
        if (data.groupname.toLowerCase().indexOf(e.toLowerCase()) != -1) {
          this.jsondata.push(data)
        }
        else {
          let purpose: any = []
          for (let value of data.purpose) {
            if (value.code.toLowerCase().indexOf(e.toLowerCase()) != -1
              || value.description.toLowerCase().indexOf(e.toLowerCase()) != -1) {
              purpose.push({
                "code": value.code,
                "description": value.description
              })
            }
          }
          if (purpose.length > 0) {
            this.jsondata[data.groupname] = purpose;
          }
        }

      }
      console.log(this.jsondata.length)
      this.pgNumber = Object.keys(this.jsondata).length
      this.pcNumber = 0;
      for (let data of this.jsondata) {
        console.log(data.purpose.length)
        this.pcNumber = this.pcNumber + data.purpose.length
      }
      this.default_value = this.jsondata
      this.purposeFun(this.default_value)
    } else {
      this.default_value = this.old_data;
      this.purposeFun(this.default_value)
    }

  }
  searchMulitpleData(multipleselectedvalue) {
    console.log(multipleselectedvalue, 'multipleselectedvalue')
    this.jsondata = [];
    if (multipleselectedvalue.length != 0) {
      for (let index = 0; index < multipleselectedvalue.length; index++) {

        for (let data of this.dataJson) {
          if (data.groupname.toLowerCase().indexOf(multipleselectedvalue[index].toLowerCase()) != -1) {
            this.jsondata.push(data)
          }
          else {
            let purpose: any = []
            for (let value of data.purpose) {
              if (value.code.toLowerCase().indexOf(multipleselectedvalue[index].toLowerCase()) != -1
                || value.description.toLowerCase().indexOf(multipleselectedvalue[index].toLowerCase()) != -1) {
                purpose.push({
                  "code": value.code,
                  "description": value.description
                })
              }
            }
            if (purpose.length > 0) {
              this.jsondata[data.groupname] = purpose;
            }
          }
        }
      }
      console.log(this.jsondata.length)
      this.pgNumber = Object.keys(this.jsondata).length
      this.pcNumber = 0;
      for (let data of this.jsondata) {
        console.log(data.purpose.length)
        this.pcNumber = this.pcNumber + data.purpose.length
      }
      this.default_value = this.jsondata
      this.purposeFun(this.default_value)
    } else {
      this.default_value = this.old_data;
      this.purposeFun(this.default_value)
    }

  }

  purposeFun(data: any) {
    this.purposeRows = [];
    for (let key in data) {
      for (let j = 0; j < data[key].length; j++) {
        let columns = [
          {
            text: key,
            rowSpan: data[key].length
          },
          {
            text: data[key][j].code,
            rowSpan: 1
          },
          {
            text: data[key][j].description,
            rowSpan: 1
          },
        ]
        if (j != 0) {
          columns.splice(0, 1);
        }
        console.log(columns, 'column')
        this.purposeRows.push(columns);
      }
    }
    console.log(this.purposeRows, 'purposeRows')
  }
  handleSearch = (arr, searchInput) => {
    let filteredData = arr.filter(value => {
      return (
        value.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        value.days.toString().includes(searchInput.toString())
      );
    });
    console.log(filteredData);
    //this.setState({ list: filteredData });
  }


  async generateDoc(code, j) {
    this.generate = true
    this.generatePurpose[j] = code;
    console.log(this.item3, 'item')
    this.itemArray = this.item3;
    console.log(this.itemArray)
    let generateDoc1: any = [];
    let pipo = false;
    let pipoValue = this.itemArray[0]
    let buyerValue
    console.log(pipoValue)
    console.log("645 line", this.itemArray)
    for (let item of this.itemArray) {
      for (let pipo of this.selectPIPO) {
        console.log("item.doc")
        if (item.pi_poNo === pipo) {
          buyerValue = item.buyerName
          if (item.doc) {
            generateDoc1.push(this.sanitizer.bypassSecurityTrustResourceUrl(
              item.doc  //item.doc is Profoma Invoice document
            ))
            this.STORE_URL.push(item.doc)
          }
          else {
            generateDoc1.push(this.sanitizer.bypassSecurityTrustResourceUrl(
              item.doc1 //item.doc1 is purchase order document
            ))
            this.STORE_URL.push(item.doc1)
          }
        }
      }
    }

    console.log(buyerValue)
    const data: any = await this.userService.getBuyerByName(
      buyerValue
    );
    console.log('shshhss', data.data)
    this.buyerAds = data.data.buyerAdrs
    console.log(pipo)
    console.log("this is pipo", pipoValue)
    this.mainDoc[j] = generateDoc1
    console.log("line no 664", this.mainDoc[j])

    this.newTask[j] = {
      pipoNumbers: this.selectPIPO,
      pipoUrls: this.mainDoc[j],
      purposeCode: code
    }
    console.log(this.doc)
    console.log(this.generate1)
    console.log(this.c)
    this.fillForm(pipoValue)
    this.newTask[j] = {
      pipoNumbers: this.selectPIPO,
      pipoUrls: this.mainDoc[j],
      purposeCode: code,
    }
    console.log("hello there", this.newTask);
  }
  replaceText(text: any, repl_text: any) {
    return (text.replace(repl_text, '')).trim()
  }
  PREVIWES_URL: any = '';

  async fillForm(a) {
    console.log(a, 'dshdsfdsfdgjsdhfgdsjf')
    var data_temp: any = this.documentService.getSessionData('InwardSheet');
    const formUrl = './../../assets/DXB.pdf'
    if (data_temp == undefined || data_temp == null || data_temp == '') {
      const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())
      const pdfDoc = await PDFDocument.load(formPdfBytes)
      const form = pdfDoc.getForm()
      const pages = pdfDoc.getPages()
      const firstpage = pages[0]
      const textField = form.createTextField('best.text')
      textField.setText('KOZHIKODE')
      textField.addToPage(firstpage, {
        x: 150, y: 728, width: 400,
        height: 16, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const rocketField = form.createCheckBox('favorite.rocket')
      rocketField.addToPage(firstpage, { x: 320, y: 705, width: 20, height: 20, borderWidth: 0 })

      const rocket1Field = form.createCheckBox('favorite.rocket1')
      rocket1Field.addToPage(firstpage, { x: 540, y: 705, width: 20, height: 20, borderWidth: 0 })

      const text1Field = form.createTextField('best.text1')
      text1Field.setText(this.item5.teamName)
      text1Field.addToPage(firstpage, {
        x: 150, y: 680, width: 400,
        height: 16, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text2Field = form.createTextField('best.text2')
      text2Field.setText(this.charge[0])
      text2Field.addToPage(firstpage, {
        x: 155, y: 657, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text3Field = form.createTextField('best.text3')
      text3Field.setText(this.charge[1])
      text3Field.addToPage(firstpage, {
        x: 190, y: 657, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text4Field = form.createTextField('best.text4')
      text4Field.setText(this.charge[2])
      text4Field.addToPage(firstpage, {
        x: 220, y: 657, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text5Field = form.createTextField('best.text5')
      text5Field.setText(this.charge[3])
      text5Field.addToPage(firstpage, {
        x: 250, y: 657, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text6Field = form.createTextField('best.text6')
      text6Field.setText(this.charge[4])
      text6Field.addToPage(firstpage, {
        x: 270, y: 657, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text7Field = form.createTextField('best.text7')
      text7Field.setText(this.charge[5])
      text7Field.addToPage(firstpage, {
        x: 300, y: 657, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text8Field = form.createTextField('best.text8')
      text8Field.setText(this.charge[6])
      text8Field.addToPage(firstpage, {
        x: 330, y: 657, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text9Field = form.createTextField('best.text9')
      text9Field.setText(this.charge[7])
      text9Field.addToPage(firstpage, {
        x: 360, y: 657, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text10Field = form.createTextField('best.text10')
      text10Field.setText(this.charge[8])
      text10Field.addToPage(firstpage, {
        x: 390, y: 657, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text11Field = form.createTextField('best.text11')
      text11Field.setText(this.charge[9])
      text11Field.addToPage(firstpage, {
        x: 420, y: 657, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text12Field = form.createTextField('best.text12')
      text12Field.setText(this.charge[10])
      text12Field.addToPage(firstpage, {
        x: 450, y: 657, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text13Field = form.createTextField('best.text13')
      text13Field.setText(this.charge[11])
      text13Field.addToPage(firstpage, {
        x: 480, y: 657, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text14Field = form.createTextField('best.text14')
      text14Field.setText(this.charge[12])
      text14Field.addToPage(firstpage, {
        x: 510, y: 657, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text15Field = form.createTextField('best.text15')
      text15Field.setText(this.charge[13])
      text15Field.addToPage(firstpage, {
        x: 540, y: 657, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      // const text16Field = form.createTextField('best.text16')
      // text16Field.setText('15')
      // text16Field.addToPage(firstpage, {
      //   x: 540, y: 657, width: 15,
      //   height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      // })

      const text17Field = form.createTextField('best.text17')
      text17Field.setText('Export')
      text17Field.addToPage(firstpage, {
        x: 192, y: 635, width: 75,
        height: 16, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text18Field = form.createTextField('best.text18')
      text18Field.setText('')
      text18Field.addToPage(firstpage, {
        x: 460, y: 635, width: 90,
        height: 16, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text19Field = form.createTextField('best.text19')
      text19Field.setText(a['currency'])
      text19Field.addToPage(firstpage, {
        x: 150, y: 590, width: 80,
        height: 16, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text20Field = form.createTextField('best.text20')
      let amount = a['amount'].toString()
      var updatedata: any = this.Inward_Remittance_MT103[this.Inward_Remittance_MT103.length - 1];
      console.log(updatedata, 'updatedata')
      text20Field.setText(updatedata?.Inward_amount_for_disposal)
      text20Field.addToPage(firstpage, {
        x: 150, y: 565, width: 80,
        height: 16, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text21Field = form.createTextField('best.text21')
      text21Field.setText(this.Number_to_word(updatedata?.Inward_amount_for_disposal))
      text21Field.addToPage(firstpage, {
        x: 340, y: 580, width: 220,
        height: 16, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text22Field = form.createTextField('best.text22')
      text22Field.setText(a['buyerName'])
      text22Field.addToPage(firstpage, {
        x: 150, y: 540, width: 90,
        height: 16, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text23Field = form.createTextField('best.text23')
      text23Field.setText(this.buyerAds)
      text23Field.addToPage(firstpage, {
        x: 150, y: 500, width: 400,
        height: 16, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text24Field = form.createTextField('best.text24')
      text24Field.setText('ADVANCE AGAINST EXPORT')
      text24Field.addToPage(firstpage, {
        x: 150, y: 450, width: 100,
        height: 16, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text25Field = form.createTextField('best.text25')
      text25Field.setText(this.generatePurpose[0])
      text25Field.addToPage(firstpage, {
        x: 430, y: 450, width: 120,
        height: 16, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })


      // please mention theexpected date of shipment

      const text26Field = form.createTextField('best.text26')
      text26Field.setText('')
      text26Field.addToPage(firstpage, {
        x: 290, y: 420, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text27Field = form.createTextField('best.text27')
      text27Field.setText('')
      text27Field.addToPage(firstpage, {
        x: 327, y: 420, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text28Field = form.createTextField('best.text28')
      text28Field.setText('')
      text28Field.addToPage(firstpage, {
        x: 363, y: 420, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text29Field = form.createTextField('best.text29')
      text29Field.setText('')
      text29Field.addToPage(firstpage, {
        x: 401, y: 420, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text30Field = form.createTextField('best.text30')
      text30Field.setText('')
      text30Field.addToPage(firstpage, {
        x: 434, y: 420, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text31Field = form.createTextField('best.text31')
      text31Field.setText('')
      text31Field.addToPage(firstpage, {
        x: 471, y: 420, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text32Field = form.createTextField('best.text32')
      text32Field.setText('')
      text32Field.addToPage(firstpage, {
        x: 505, y: 420, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text33Field = form.createTextField('best.text33')
      text33Field.setText('')
      text33Field.addToPage(firstpage, {
        x: 540, y: 420, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })



      // Details of accounts for crediting the received amount
      //line1
      const text34Field = form.createTextField('best.text34')
      text34Field.setText('')
      text34Field.addToPage(firstpage, {
        x: 270, y: 375, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text35Field = form.createTextField('best.text35')
      text35Field.setText('')
      text35Field.addToPage(firstpage, {
        x: 294, y: 375, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text36Field = form.createTextField('best.text36')
      text36Field.setText('')
      text36Field.addToPage(firstpage, {
        x: 315, y: 375, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text37Field = form.createTextField('best.text37')
      text37Field.setText('')
      text37Field.addToPage(firstpage, {
        x: 337, y: 375, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text38Field = form.createTextField('best.text38')
      text38Field.setText('')
      text38Field.addToPage(firstpage, {
        x: 359, y: 375, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text39Field = form.createTextField('best.text39')
      text39Field.setText('')
      text39Field.addToPage(firstpage, {
        x: 380, y: 375, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text40Field = form.createTextField('best.text40')
      text40Field.setText('')
      text40Field.addToPage(firstpage, {
        x: 399, y: 375, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text41Field = form.createTextField('best.text41')
      text41Field.setText('')
      text41Field.addToPage(firstpage, {
        x: 419, y: 375, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text42Field = form.createTextField('best.text42')
      text42Field.setText('')
      text42Field.addToPage(firstpage, {
        x: 443, y: 375, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text43Field = form.createTextField('best.text43')
      text43Field.setText('')
      text43Field.addToPage(firstpage, {
        x: 464, y: 375, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text44Field = form.createTextField('best.text44')
      text44Field.setText('')
      text44Field.addToPage(firstpage, {
        x: 487, y: 375, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text45Field = form.createTextField('best.text45')
      text45Field.setText('')
      text45Field.addToPage(firstpage, {
        x: 507, y: 375, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text46Field = form.createTextField('best.text46')
      text46Field.setText('')
      text46Field.addToPage(firstpage, {
        x: 528, y: 375, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text47Field = form.createTextField('best.text47')
      text47Field.setText('')
      text47Field.addToPage(firstpage, {
        x: 549, y: 375, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })


      //line2
      const text48Field = form.createTextField('best.text48')
      text48Field.setText('')
      text48Field.addToPage(firstpage, {
        x: 270, y: 340, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text49Field = form.createTextField('best.text49')
      text49Field.setText('')
      text49Field.addToPage(firstpage, {
        x: 294, y: 340, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text50Field = form.createTextField('best.text50')
      text50Field.setText('')
      text50Field.addToPage(firstpage, {
        x: 315, y: 340, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text51Field = form.createTextField('best.text51')
      text51Field.setText('')
      text51Field.addToPage(firstpage, {
        x: 337, y: 340, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text52Field = form.createTextField('best.text52')
      text38Field.setText('')
      text38Field.addToPage(firstpage, {
        x: 359, y: 340, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text53Field = form.createTextField('best.text53')
      text53Field.setText('')
      text53Field.addToPage(firstpage, {
        x: 380, y: 340, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text54Field = form.createTextField('best.text54')
      text54Field.setText('')
      text54Field.addToPage(firstpage, {
        x: 399, y: 340, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text55Field = form.createTextField('best.text55')
      text55Field.setText('')
      text55Field.addToPage(firstpage, {
        x: 419, y: 340, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text56Field = form.createTextField('best.text56')
      text56Field.setText('')
      text56Field.addToPage(firstpage, {
        x: 443, y: 340, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text57Field = form.createTextField('best.text57')
      text57Field.setText('')
      text57Field.addToPage(firstpage, {
        x: 464, y: 340, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text58Field = form.createTextField('best.text58')
      text58Field.setText('')
      text58Field.addToPage(firstpage, {
        x: 487, y: 340, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text59Field = form.createTextField('best.text59')
      text59Field.setText('')
      text59Field.addToPage(firstpage, {
        x: 507, y: 340, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text60Field = form.createTextField('best.text60')
      text60Field.setText('')
      text60Field.addToPage(firstpage, {
        x: 528, y: 340, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text61Field = form.createTextField('best.text61')
      text61Field.setText('')
      text61Field.addToPage(firstpage, {
        x: 549, y: 340, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      //line3
      const text62Field = form.createTextField('best.text62')
      text62Field.setText('')
      text62Field.addToPage(firstpage, {
        x: 270, y: 310, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text63Field = form.createTextField('best.text63')
      text63Field.setText('')
      text63Field.addToPage(firstpage, {
        x: 294, y: 310, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text64Field = form.createTextField('best.text64')
      text64Field.setText('')
      text64Field.addToPage(firstpage, {
        x: 315, y: 310, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text65Field = form.createTextField('best.text65')
      text65Field.setText('')
      text65Field.addToPage(firstpage, {
        x: 337, y: 310, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text66Field = form.createTextField('best.text66')
      text66Field.setText('')
      text66Field.addToPage(firstpage, {
        x: 359, y: 310, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text67Field = form.createTextField('best.text67')
      text67Field.setText('')
      text67Field.addToPage(firstpage, {
        x: 380, y: 310, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text68Field = form.createTextField('best.text68')
      text68Field.setText('')
      text68Field.addToPage(firstpage, {
        x: 399, y: 310, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text69Field = form.createTextField('best.text69')
      text69Field.setText('')
      text69Field.addToPage(firstpage, {
        x: 419, y: 310, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text70Field = form.createTextField('best.text70')
      text70Field.setText('')
      text70Field.addToPage(firstpage, {
        x: 443, y: 310, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text71Field = form.createTextField('best.text71')
      text71Field.setText('')
      text71Field.addToPage(firstpage, {
        x: 464, y: 310, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text72Field = form.createTextField('best.text72')
      text72Field.setText('')
      text72Field.addToPage(firstpage, {
        x: 487, y: 310, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text73Field = form.createTextField('best.text73')
      text73Field.setText('')
      text73Field.addToPage(firstpage, {
        x: 507, y: 310, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text74Field = form.createTextField('best.text74')
      text74Field.setText('')
      text74Field.addToPage(firstpage, {
        x: 528, y: 310, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text75Field = form.createTextField('best.text75')
      text75Field.setText('')
      text75Field.addToPage(firstpage, {
        x: 549, y: 310, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })


      //line4
      const text76Field = form.createTextField('best.text76')
      text76Field.setText(this.credit[0])
      text76Field.addToPage(firstpage, {
        x: 270, y: 280, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text77Field = form.createTextField('best.text77')
      text77Field.setText(this.credit[1])
      text77Field.addToPage(firstpage, {
        x: 294, y: 280, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text78Field = form.createTextField('best.text78')
      text78Field.setText(this.credit[2])
      text78Field.addToPage(firstpage, {
        x: 315, y: 280, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text79Field = form.createTextField('best.text79')
      text79Field.setText(this.credit[3])
      text79Field.addToPage(firstpage, {
        x: 337, y: 280, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text80Field = form.createTextField('best.text80')
      text80Field.setText(this.credit[4])
      text80Field.addToPage(firstpage, {
        x: 359, y: 280, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text81Field = form.createTextField('best.text81')
      text81Field.setText(this.credit[5])
      text81Field.addToPage(firstpage, {
        x: 380, y: 280, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text82Field = form.createTextField('best.text82')
      text82Field.setText(this.credit[6])
      text82Field.addToPage(firstpage, {
        x: 399, y: 280, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text83Field = form.createTextField('best.text83')
      text83Field.setText(this.credit[7])
      text83Field.addToPage(firstpage, {
        x: 419, y: 280, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text84Field = form.createTextField('best.text84')
      text84Field.setText(this.credit[8])
      text84Field.addToPage(firstpage, {
        x: 443, y: 280, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text85Field = form.createTextField('best.text85')
      text85Field.setText(this.credit[9])
      text85Field.addToPage(firstpage, {
        x: 464, y: 280, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text86Field = form.createTextField('best.text86')
      text86Field.setText(this.credit[10])
      text86Field.addToPage(firstpage, {
        x: 487, y: 280, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text87Field = form.createTextField('best.text87')
      text87Field.setText(this.credit[11])
      text87Field.addToPage(firstpage, {
        x: 507, y: 280, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text88Field = form.createTextField('best.text88')
      text88Field.setText(this.credit[12])
      text88Field.addToPage(firstpage, {
        x: 528, y: 280, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text89Field = form.createTextField('best.text89')
      text89Field.setText(this.credit[13])
      text89Field.addToPage(firstpage, {
        x: 549, y: 280, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })
      //line5
      const text90Field = form.createTextField('best.text90')
      text90Field.setText('')
      text90Field.addToPage(firstpage, {
        x: 270, y: 250, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text91Field = form.createTextField('best.text91')
      text91Field.setText('')
      text91Field.addToPage(firstpage, {
        x: 294, y: 250, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text92Field = form.createTextField('best.text92')
      text92Field.setText('')
      text92Field.addToPage(firstpage, {
        x: 315, y: 250, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text93Field = form.createTextField('best.text93')
      text93Field.setText('')
      text93Field.addToPage(firstpage, {
        x: 337, y: 250, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text94Field = form.createTextField('best.text94')
      text94Field.setText('')
      text94Field.addToPage(firstpage, {
        x: 359, y: 250, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text95Field = form.createTextField('best.text95')
      text95Field.setText('')
      text95Field.addToPage(firstpage, {
        x: 380, y: 250, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text96Field = form.createTextField('best.text96')
      text96Field.setText('')
      text96Field.addToPage(firstpage, {
        x: 399, y: 250, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text97Field = form.createTextField('best.text97')
      text97Field.setText('')
      text97Field.addToPage(firstpage, {
        x: 419, y: 250, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text98Field = form.createTextField('best.text98')
      text98Field.setText('')
      text98Field.addToPage(firstpage, {
        x: 443, y: 250, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const text99Field = form.createTextField('best.text99')
      text99Field.setText('')
      text99Field.addToPage(firstpage, {
        x: 464, y: 250, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const texta1Field = form.createTextField('best.texta186')
      texta1Field.setText('')
      texta1Field.addToPage(firstpage, {
        x: 487, y: 250, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const texta2Field = form.createTextField('best.texta2')
      texta2Field.setText('')
      texta2Field.addToPage(firstpage, {
        x: 507, y: 250, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const texta3Field = form.createTextField('best.texta3')
      texta3Field.setText('')
      texta3Field.addToPage(firstpage, {
        x: 528, y: 250, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const texta4Field = form.createTextField('best.texta4')
      texta4Field.setText('')
      texta4Field.addToPage(firstpage, {
        x: 549, y: 250, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })
      //line 6

      const texta5Field = form.createTextField('best.texta5')
      texta5Field.setText(this.charge[0])
      texta5Field.addToPage(firstpage, {
        x: 270, y: 220, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const texta6Field = form.createTextField('best.texta6')
      texta6Field.setText(this.charge[1])
      texta6Field.addToPage(firstpage, {
        x: 294, y: 220, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const texta7Field = form.createTextField('best.texta7')
      texta7Field.setText(this.charge[2])
      texta7Field.addToPage(firstpage, {
        x: 315, y: 220, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const texta8Field = form.createTextField('best.texta8')
      texta8Field.setText(this.charge[3])
      texta8Field.addToPage(firstpage, {
        x: 337, y: 220, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const texta9Field = form.createTextField('best.texta9')
      texta9Field.setText(this.charge[4])
      texta9Field.addToPage(firstpage, {
        x: 359, y: 220, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const textb1Field = form.createTextField('best.textb1')
      textb1Field.setText(this.charge[5])
      textb1Field.addToPage(firstpage, {
        x: 380, y: 220, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const textb2Field = form.createTextField('best.textb2')
      textb2Field.setText(this.charge[6])
      textb2Field.addToPage(firstpage, {
        x: 399, y: 220, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const textb3Field = form.createTextField('best.textb3')
      textb3Field.setText(this.charge[7])
      textb3Field.addToPage(firstpage, {
        x: 419, y: 220, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const textb4Field = form.createTextField('best.textb4')
      textb4Field.setText(this.charge[8])
      textb4Field.addToPage(firstpage, {
        x: 443, y: 220, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const textb5Field = form.createTextField('best.textb5')
      textb5Field.setText(this.charge[9])
      textb5Field.addToPage(firstpage, {
        x: 464, y: 220, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const textb6Field = form.createTextField('best.texta1b6')
      textb6Field.setText(this.charge[10])
      textb6Field.addToPage(firstpage, {
        x: 487, y: 220, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const textb7Field = form.createTextField('best.textb7')
      textb7Field.setText(this.charge[11])
      textb7Field.addToPage(firstpage, {
        x: 507, y: 220, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const textb8Field = form.createTextField('best.textb8')
      textb8Field.setText(this.charge[12])
      textb8Field.addToPage(firstpage, {
        x: 528, y: 220, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const textb9Field = form.createTextField('best.textb9')
      textb9Field.setText(this.charge[13])
      textb9Field.addToPage(firstpage, {
        x: 550, y: 220, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const textc1Field = form.createTextField('best.textc1')
      textc1Field.setText(this.charge[14])
      textc1Field.addToPage(firstpage, {
        x: 549, y: 220, width: 15,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })




      // *WE AUTHORISE YOU TO CONVERT THE UNUTILISED PORTION OF CAPTIONED INWARD REMITTANCE CREDITED

      const textc2Field = form.createTextField('best.textc2')
      textc2Field.setText('')
      textc2Field.addToPage(firstpage, {
        x: 160, y: 150, width: 110,
        height: 16, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const textc3Field = form.createTextField('best.textc3')
      textc3Field.setText('')
      textc3Field.addToPage(firstpage, {
        x: 160, y: 125, width: 110,
        height: 16, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })


      const textc4Field = form.createTextField('best.textc4')
      textc4Field.setText('')
      textc4Field.addToPage(firstpage, {
        x: 160, y: 100, width: 110,
        height: 16, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })


      // Booking date
      const textaField = form.createTextField('best.texta')
      textaField.setText('')
      textaField.addToPage(firstpage, {
        x: 413, y: 150, width: 12,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const textbField = form.createTextField('best.textb')
      textbField.setText('')
      textbField.addToPage(firstpage, {
        x: 430, y: 150, width: 12,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const textcField = form.createTextField('best.textc')
      textcField.setText('')
      textcField.addToPage(firstpage, {
        x: 450, y: 150, width: 12,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const textdField = form.createTextField('best.textd')
      textdField.setText('')
      textdField.addToPage(firstpage, {
        x: 467, y: 150, width: 12,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const texteField = form.createTextField('best.texte')
      texteField.setText('')
      texteField.addToPage(firstpage, {
        x: 485, y: 150, width: 12,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const textfField = form.createTextField('best.textf')
      textfField.setText('')
      textfField.addToPage(firstpage, {
        x: 503, y: 150, width: 12,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const textgField = form.createTextField('best.textg')
      textgField.setText('')
      textgField.addToPage(firstpage, {
        x: 523, y: 150, width: 12,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const texthField = form.createTextField('best.texth')
      texthField.setText('')
      texthField.addToPage(firstpage, {
        x: 539, y: 150, width: 12,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })


      // Due date

      const textiField = form.createTextField('best.texti')
      textiField.setText('')
      textiField.addToPage(firstpage, {
        x: 413, y: 125, width: 12,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const textjField = form.createTextField('best.textj')
      textjField.setText('')
      textjField.addToPage(firstpage, {
        x: 430, y: 125, width: 12,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const textkField = form.createTextField('best.textk')
      textkField.setText('')
      textkField.addToPage(firstpage, {
        x: 450, y: 125, width: 12,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const textlField = form.createTextField('best.textl')
      textlField.setText('')
      textlField.addToPage(firstpage, {
        x: 467, y: 125, width: 12,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const textmField = form.createTextField('best.textm')
      textmField.setText('')
      textmField.addToPage(firstpage, {
        x: 485, y: 125, width: 12,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const textnField = form.createTextField('best.textn')
      textnField.setText('')
      textnField.addToPage(firstpage, {
        x: 503, y: 125, width: 12,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const textoField = form.createTextField('best.texto')
      textoField.setText('')
      textoField.addToPage(firstpage, {
        x: 523, y: 125, width: 12,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const textzField = form.createTextField('best.textz')
      textzField.setText('')
      textzField.addToPage(firstpage, {
        x: 539, y: 125, width: 12,
        height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const textc5Field = form.createTextField('best.textc5')
      textc5Field.setText('')
      textc5Field.addToPage(firstpage, {
        x: 420, y: 100, width: 130,
        height: 16, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      const textc5Field1 = form.createTextField('best.textc5y')
      textc5Field1.setText(this.jstoday)
      textc5Field1.addToPage(firstpage, {
        x: 50, y: 52, width: 100,
        height: 16, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
      })

      var bankformat: any = this.documentService?.getBankFormat()?.filter((item: any) => item.value?.indexOf(this.bankValue) != -1);
      console.log(this.newBankArray, bankformat, 'this.newBankArray')
      if (bankformat.length != 0 && bankformat[0]?.urlpdf != '') {
        const pdfBytes = await pdfDoc.save()
        console.log(pdfDoc, "pdf")
        console.log(pdfBytes, "pdfBytes")
        console.log(form, "form")
        var base64String = this._arrayBufferToBase64(pdfBytes)

        const x = 'data:application/pdf;base64,' + base64String;

        const url = window.URL.createObjectURL(new Blob([pdfBytes], { type: 'application/pdf' }));
        console.log(url, 'dsjkfhsdkjfsdhfksfhsd')
        this.formerge = x
        this.value = base64String;
        this.newTask[0].generateDoc1 = x

        const mergedPdf = await PDFDocument.create();
        const copiedPages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
        copiedPages.forEach((page) => {
          mergedPdf.addPage(page);
        });
        const mergedPdfFile = await mergedPdf.save();
        const mergedPdfload = await PDFDocument.load(mergedPdfFile);
        await this.disabledTextbox(pdfDoc)
        const mergedPdfFileload = await mergedPdfload.save();
        var base64String1 = this._arrayBufferToBase64(mergedPdfFileload)
        const x1 = 'data:application/pdf;base64,' + base64String1;
        this.PREVIWES_URL = this.sanitizer.bypassSecurityTrustResourceUrl(x1);
        console.log(this.PREVIWES_URL, 'this.PREVIWES_URL')
      } else {
        this.newDone = false;
        $('#ProceedPreview').click()
      }
    } else {
      this.uploadingData(data_temp, a)
    }
  }
  sendFileDownload(fileName: any) {
    this.userService.mergePdfChecking({ listFile: fileName })
  }
  async getPdfFile(item: any) {
    let array = new Uint8Array(item);
    let blob = new Blob([array], { type: 'application/pdf' });
    var urlCreator = window.URL || window.webkitURL;
    let url = urlCreator.createObjectURL(blob);
    let fileName: string = new Date().toLocaleDateString();
    try {
      const link = document.createElement('a');
      if (link.download !== undefined) {
        link.setAttribute('href', url);
        link.setAttribute('download', fileName);
        link.target = '_blank';
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        var evt = document.createEvent('MouseEvents');
        evt.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
        link.dispatchEvent(evt);
        link.click();
        document.body.removeChild(link);
      }
    } catch (e) {
      console.error('BlobToSaveAs error', e);
    }
  }
  async disabledTextbox(pdfDoc: any) {
    pdfDoc.getForm()
      .getFields()
      .forEach((field) => {
        field.enableReadOnly();
        console.log(field,)
      });
  }
  async uploadingData(data_temp: any, a: any) {
    console.log(data_temp, 'PDF_DOCUMENTS_DATA')
    const formUrl = './../../assets/DXB.pdf'
    const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())
    const pdfDoc = await PDFDocument.load(formPdfBytes)
    const form = pdfDoc.getForm()
    const pages = pdfDoc.getPages()
    const firstpage = pages[0]
    const textField = form.createTextField('best.text')
    textField.setText('KOZHIKODE')
    textField.addToPage(firstpage, {
      x: 150, y: 728, width: 400,
      height: 16, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const rocketField = form.createCheckBox('favorite.rocket')
    rocketField.addToPage(firstpage, { x: 320, y: 705, width: 20, height: 20, borderWidth: 0 })

    const rocket1Field = form.createCheckBox('favorite.rocket1')
    rocket1Field.addToPage(firstpage, { x: 540, y: 705, width: 20, height: 20, borderWidth: 0 })

    const text1Field = form.createTextField('best.text1')
    text1Field.setText(this.replaceText(data_temp['Beneficiary Customer Name'], ' 59A '))
    text1Field.addToPage(firstpage, {
      x: 150, y: 680, width: 400,
      height: 16, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    var ACCOUNT_NUMBER_SPLIT = (this.replaceText(data_temp['Beneficiary Customer'], '59A /')).split('');
    console.log(ACCOUNT_NUMBER_SPLIT, 'ACCOUNT_NUMBER_SPLIT')
    const text2Field = form.createTextField('best.text2')
    text2Field.setText(ACCOUNT_NUMBER_SPLIT[0])
    text2Field.addToPage(firstpage, {
      x: 155, y: 657, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text3Field = form.createTextField('best.text3')
    text3Field.setText(ACCOUNT_NUMBER_SPLIT[1])
    text3Field.addToPage(firstpage, {
      x: 190, y: 657, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text4Field = form.createTextField('best.text4')
    text4Field.setText(ACCOUNT_NUMBER_SPLIT[2])
    text4Field.addToPage(firstpage, {
      x: 220, y: 657, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text5Field = form.createTextField('best.text5')
    text5Field.setText(ACCOUNT_NUMBER_SPLIT[3])
    text5Field.addToPage(firstpage, {
      x: 250, y: 657, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text6Field = form.createTextField('best.text6')
    text6Field.setText(ACCOUNT_NUMBER_SPLIT[4])
    text6Field.addToPage(firstpage, {
      x: 270, y: 657, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text7Field = form.createTextField('best.text7')
    text7Field.setText(ACCOUNT_NUMBER_SPLIT[5])
    text7Field.addToPage(firstpage, {
      x: 300, y: 657, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text8Field = form.createTextField('best.text8')
    text8Field.setText(ACCOUNT_NUMBER_SPLIT[6])
    text8Field.addToPage(firstpage, {
      x: 330, y: 657, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text9Field = form.createTextField('best.text9')
    text9Field.setText(ACCOUNT_NUMBER_SPLIT[7])
    text9Field.addToPage(firstpage, {
      x: 360, y: 657, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text10Field = form.createTextField('best.text10')
    text10Field.setText(ACCOUNT_NUMBER_SPLIT[8])
    text10Field.addToPage(firstpage, {
      x: 390, y: 657, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text11Field = form.createTextField('best.text11')
    text11Field.setText(ACCOUNT_NUMBER_SPLIT[9])
    text11Field.addToPage(firstpage, {
      x: 420, y: 657, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text12Field = form.createTextField('best.text12')
    text12Field.setText(ACCOUNT_NUMBER_SPLIT[10])
    text12Field.addToPage(firstpage, {
      x: 450, y: 657, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text13Field = form.createTextField('best.text13')
    text13Field.setText(ACCOUNT_NUMBER_SPLIT[11])
    text13Field.addToPage(firstpage, {
      x: 480, y: 657, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text14Field = form.createTextField('best.text14')
    text14Field.setText(ACCOUNT_NUMBER_SPLIT[12])
    text14Field.addToPage(firstpage, {
      x: 510, y: 657, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text15Field = form.createTextField('best.text15')
    text15Field.setText(ACCOUNT_NUMBER_SPLIT[13])
    text15Field.addToPage(firstpage, {
      x: 540, y: 657, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text16Field = form.createTextField('best.text16')
    text16Field.setText(ACCOUNT_NUMBER_SPLIT[14])
    text16Field.addToPage(firstpage, {
      x: 580, y: 657, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text17Field = form.createTextField('best.text17')
    text17Field.setText('Export')
    text17Field.addToPage(firstpage, {
      x: 192, y: 635, width: 75,
      height: 16, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text18Field = form.createTextField('best.text18')
    text18Field.setText('')
    text18Field.addToPage(firstpage, {
      x: 460, y: 635, width: 90,
      height: 16, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text19Field = form.createTextField('best.text19')
    text19Field.setText(this.replaceText(data_temp['Currency Code'], '32A '))
    text19Field.addToPage(firstpage, {
      x: 150, y: 590, width: 80,
      height: 16, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text20Field = form.createTextField('best.text20')
    let amount = a['amount'].toString()
    var updatedata: any = this.Inward_Remittance_MT103[this.Inward_Remittance_MT103.length - 1];
    console.log(updatedata, 'updatedata')
    text20Field.setText(updatedata?.Inward_amount_for_disposal)
    text20Field.addToPage(firstpage, {
      x: 150, y: 565, width: 80,
      height: 16, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text21Field = form.createTextField('best.text21')
    text21Field.setText(this.Number_to_word(updatedata?.Inward_amount_for_disposal))
    text21Field.addToPage(firstpage, {
      x: 340, y: 580, width: 220,
      height: 16, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text22Field = form.createTextField('best.text22')
    text22Field.setText('')
    text22Field.addToPage(firstpage, {
      x: 150, y: 540, width: 90,
      height: 16, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text23Field = form.createTextField('best.text23')
    text23Field.setText(this.replaceText(data_temp['Remitter Customer Details'], '50A/50K '))
    text23Field.addToPage(firstpage, {
      x: 150, y: 500, width: 400,
      height: 16, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text24Field = form.createTextField('best.text24')
    text24Field.setText('ADVANCE AGAINST EXPORT')
    text24Field.addToPage(firstpage, {
      x: 150, y: 450, width: 100,
      height: 16, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text25Field = form.createTextField('best.text25')
    text25Field.setText(this.generatePurpose[0])
    text25Field.addToPage(firstpage, {
      x: 430, y: 450, width: 120,
      height: 16, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })


    // please mention theexpected date of shipment

    const text26Field = form.createTextField('best.text26')
    text26Field.setText('')
    text26Field.addToPage(firstpage, {
      x: 290, y: 420, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text27Field = form.createTextField('best.text27')
    text27Field.setText('')
    text27Field.addToPage(firstpage, {
      x: 327, y: 420, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text28Field = form.createTextField('best.text28')
    text28Field.setText('')
    text28Field.addToPage(firstpage, {
      x: 363, y: 420, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text29Field = form.createTextField('best.text29')
    text29Field.setText('')
    text29Field.addToPage(firstpage, {
      x: 401, y: 420, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text30Field = form.createTextField('best.text30')
    text30Field.setText('')
    text30Field.addToPage(firstpage, {
      x: 434, y: 420, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text31Field = form.createTextField('best.text31')
    text31Field.setText('')
    text31Field.addToPage(firstpage, {
      x: 471, y: 420, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text32Field = form.createTextField('best.text32')
    text32Field.setText('')
    text32Field.addToPage(firstpage, {
      x: 505, y: 420, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text33Field = form.createTextField('best.text33')
    text33Field.setText('')
    text33Field.addToPage(firstpage, {
      x: 540, y: 420, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })



    // Details of accounts for crediting the received amount
    //line1
    const text34Field = form.createTextField('best.text34')
    text34Field.setText('')
    text34Field.addToPage(firstpage, {
      x: 270, y: 375, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text35Field = form.createTextField('best.text35')
    text35Field.setText('')
    text35Field.addToPage(firstpage, {
      x: 294, y: 375, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text36Field = form.createTextField('best.text36')
    text36Field.setText('')
    text36Field.addToPage(firstpage, {
      x: 315, y: 375, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text37Field = form.createTextField('best.text37')
    text37Field.setText('')
    text37Field.addToPage(firstpage, {
      x: 337, y: 375, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text38Field = form.createTextField('best.text38')
    text38Field.setText('')
    text38Field.addToPage(firstpage, {
      x: 359, y: 375, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text39Field = form.createTextField('best.text39')
    text39Field.setText('')
    text39Field.addToPage(firstpage, {
      x: 380, y: 375, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text40Field = form.createTextField('best.text40')
    text40Field.setText('')
    text40Field.addToPage(firstpage, {
      x: 399, y: 375, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text41Field = form.createTextField('best.text41')
    text41Field.setText('')
    text41Field.addToPage(firstpage, {
      x: 419, y: 375, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text42Field = form.createTextField('best.text42')
    text42Field.setText('')
    text42Field.addToPage(firstpage, {
      x: 443, y: 375, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text43Field = form.createTextField('best.text43')
    text43Field.setText('')
    text43Field.addToPage(firstpage, {
      x: 464, y: 375, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text44Field = form.createTextField('best.text44')
    text44Field.setText('')
    text44Field.addToPage(firstpage, {
      x: 487, y: 375, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text45Field = form.createTextField('best.text45')
    text45Field.setText('')
    text45Field.addToPage(firstpage, {
      x: 507, y: 375, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text46Field = form.createTextField('best.text46')
    text46Field.setText('')
    text46Field.addToPage(firstpage, {
      x: 528, y: 375, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text47Field = form.createTextField('best.text47')
    text47Field.setText('')
    text47Field.addToPage(firstpage, {
      x: 549, y: 375, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })


    //line2
    const text48Field = form.createTextField('best.text48')
    text48Field.setText('')
    text48Field.addToPage(firstpage, {
      x: 270, y: 340, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text49Field = form.createTextField('best.text49')
    text49Field.setText('')
    text49Field.addToPage(firstpage, {
      x: 294, y: 340, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text50Field = form.createTextField('best.text50')
    text50Field.setText('')
    text50Field.addToPage(firstpage, {
      x: 315, y: 340, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text51Field = form.createTextField('best.text51')
    text51Field.setText('')
    text51Field.addToPage(firstpage, {
      x: 337, y: 340, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text52Field = form.createTextField('best.text52')
    text38Field.setText('')
    text38Field.addToPage(firstpage, {
      x: 359, y: 340, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text53Field = form.createTextField('best.text53')
    text53Field.setText('')
    text53Field.addToPage(firstpage, {
      x: 380, y: 340, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text54Field = form.createTextField('best.text54')
    text54Field.setText('')
    text54Field.addToPage(firstpage, {
      x: 399, y: 340, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text55Field = form.createTextField('best.text55')
    text55Field.setText('')
    text55Field.addToPage(firstpage, {
      x: 419, y: 340, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text56Field = form.createTextField('best.text56')
    text56Field.setText('')
    text56Field.addToPage(firstpage, {
      x: 443, y: 340, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text57Field = form.createTextField('best.text57')
    text57Field.setText('')
    text57Field.addToPage(firstpage, {
      x: 464, y: 340, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text58Field = form.createTextField('best.text58')
    text58Field.setText('')
    text58Field.addToPage(firstpage, {
      x: 487, y: 340, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text59Field = form.createTextField('best.text59')
    text59Field.setText('')
    text59Field.addToPage(firstpage, {
      x: 507, y: 340, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text60Field = form.createTextField('best.text60')
    text60Field.setText('')
    text60Field.addToPage(firstpage, {
      x: 528, y: 340, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text61Field = form.createTextField('best.text61')
    text61Field.setText('')
    text61Field.addToPage(firstpage, {
      x: 549, y: 340, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    //line3
    const text62Field = form.createTextField('best.text62')
    text62Field.setText('')
    text62Field.addToPage(firstpage, {
      x: 270, y: 310, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text63Field = form.createTextField('best.text63')
    text63Field.setText('')
    text63Field.addToPage(firstpage, {
      x: 294, y: 310, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text64Field = form.createTextField('best.text64')
    text64Field.setText('')
    text64Field.addToPage(firstpage, {
      x: 315, y: 310, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text65Field = form.createTextField('best.text65')
    text65Field.setText('')
    text65Field.addToPage(firstpage, {
      x: 337, y: 310, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text66Field = form.createTextField('best.text66')
    text66Field.setText('')
    text66Field.addToPage(firstpage, {
      x: 359, y: 310, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text67Field = form.createTextField('best.text67')
    text67Field.setText('')
    text67Field.addToPage(firstpage, {
      x: 380, y: 310, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text68Field = form.createTextField('best.text68')
    text68Field.setText('')
    text68Field.addToPage(firstpage, {
      x: 399, y: 310, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text69Field = form.createTextField('best.text69')
    text69Field.setText('')
    text69Field.addToPage(firstpage, {
      x: 419, y: 310, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text70Field = form.createTextField('best.text70')
    text70Field.setText('')
    text70Field.addToPage(firstpage, {
      x: 443, y: 310, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text71Field = form.createTextField('best.text71')
    text71Field.setText('')
    text71Field.addToPage(firstpage, {
      x: 464, y: 310, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text72Field = form.createTextField('best.text72')
    text72Field.setText('')
    text72Field.addToPage(firstpage, {
      x: 487, y: 310, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text73Field = form.createTextField('best.text73')
    text73Field.setText('')
    text73Field.addToPage(firstpage, {
      x: 507, y: 310, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text74Field = form.createTextField('best.text74')
    text74Field.setText('')
    text74Field.addToPage(firstpage, {
      x: 528, y: 310, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text75Field = form.createTextField('best.text75')
    text75Field.setText('')
    text75Field.addToPage(firstpage, {
      x: 549, y: 310, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })


    //line4
    const text76Field = form.createTextField('best.text76')
    text76Field.setText(this.credit[0])
    text76Field.addToPage(firstpage, {
      x: 270, y: 280, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text77Field = form.createTextField('best.text77')
    text77Field.setText(this.credit[1])
    text77Field.addToPage(firstpage, {
      x: 294, y: 280, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text78Field = form.createTextField('best.text78')
    text78Field.setText(this.credit[2])
    text78Field.addToPage(firstpage, {
      x: 315, y: 280, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text79Field = form.createTextField('best.text79')
    text79Field.setText(this.credit[3])
    text79Field.addToPage(firstpage, {
      x: 337, y: 280, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text80Field = form.createTextField('best.text80')
    text80Field.setText(this.credit[4])
    text80Field.addToPage(firstpage, {
      x: 359, y: 280, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text81Field = form.createTextField('best.text81')
    text81Field.setText(this.credit[5])
    text81Field.addToPage(firstpage, {
      x: 380, y: 280, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text82Field = form.createTextField('best.text82')
    text82Field.setText(this.credit[6])
    text82Field.addToPage(firstpage, {
      x: 399, y: 280, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text83Field = form.createTextField('best.text83')
    text83Field.setText(this.credit[7])
    text83Field.addToPage(firstpage, {
      x: 419, y: 280, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text84Field = form.createTextField('best.text84')
    text84Field.setText(this.credit[8])
    text84Field.addToPage(firstpage, {
      x: 443, y: 280, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text85Field = form.createTextField('best.text85')
    text85Field.setText(this.credit[9])
    text85Field.addToPage(firstpage, {
      x: 464, y: 280, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text86Field = form.createTextField('best.text86')
    text86Field.setText(this.credit[10])
    text86Field.addToPage(firstpage, {
      x: 487, y: 280, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text87Field = form.createTextField('best.text87')
    text87Field.setText(this.credit[11])
    text87Field.addToPage(firstpage, {
      x: 507, y: 280, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text88Field = form.createTextField('best.text88')
    text88Field.setText(this.credit[12])
    text88Field.addToPage(firstpage, {
      x: 528, y: 280, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text89Field = form.createTextField('best.text89')
    text89Field.setText(this.credit[13])
    text89Field.addToPage(firstpage, {
      x: 549, y: 280, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })
    //line5
    const text90Field = form.createTextField('best.text90')
    text90Field.setText('')
    text90Field.addToPage(firstpage, {
      x: 270, y: 250, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text91Field = form.createTextField('best.text91')
    text91Field.setText('')
    text91Field.addToPage(firstpage, {
      x: 294, y: 250, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text92Field = form.createTextField('best.text92')
    text92Field.setText('')
    text92Field.addToPage(firstpage, {
      x: 315, y: 250, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text93Field = form.createTextField('best.text93')
    text93Field.setText('')
    text93Field.addToPage(firstpage, {
      x: 337, y: 250, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text94Field = form.createTextField('best.text94')
    text94Field.setText('')
    text94Field.addToPage(firstpage, {
      x: 359, y: 250, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text95Field = form.createTextField('best.text95')
    text95Field.setText('')
    text95Field.addToPage(firstpage, {
      x: 380, y: 250, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text96Field = form.createTextField('best.text96')
    text96Field.setText('')
    text96Field.addToPage(firstpage, {
      x: 399, y: 250, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text97Field = form.createTextField('best.text97')
    text97Field.setText('')
    text97Field.addToPage(firstpage, {
      x: 419, y: 250, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text98Field = form.createTextField('best.text98')
    text98Field.setText('')
    text98Field.addToPage(firstpage, {
      x: 443, y: 250, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const text99Field = form.createTextField('best.text99')
    text99Field.setText('')
    text99Field.addToPage(firstpage, {
      x: 464, y: 250, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const texta1Field = form.createTextField('best.texta186')
    texta1Field.setText('')
    texta1Field.addToPage(firstpage, {
      x: 487, y: 250, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const texta2Field = form.createTextField('best.texta2')
    texta2Field.setText('')
    texta2Field.addToPage(firstpage, {
      x: 507, y: 250, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const texta3Field = form.createTextField('best.texta3')
    texta3Field.setText('')
    texta3Field.addToPage(firstpage, {
      x: 528, y: 250, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const texta4Field = form.createTextField('best.texta4')
    texta4Field.setText('')
    texta4Field.addToPage(firstpage, {
      x: 549, y: 250, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })
    //line 6

    const texta5Field = form.createTextField('best.texta5')
    texta5Field.setText(this.charge[0])
    texta5Field.addToPage(firstpage, {
      x: 270, y: 220, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const texta6Field = form.createTextField('best.texta6')
    texta6Field.setText(this.charge[1])
    texta6Field.addToPage(firstpage, {
      x: 294, y: 220, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const texta7Field = form.createTextField('best.texta7')
    texta7Field.setText(this.charge[2])
    texta7Field.addToPage(firstpage, {
      x: 315, y: 220, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const texta8Field = form.createTextField('best.texta8')
    texta8Field.setText(this.charge[3])
    texta8Field.addToPage(firstpage, {
      x: 337, y: 220, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const texta9Field = form.createTextField('best.texta9')
    texta9Field.setText(this.charge[4])
    texta9Field.addToPage(firstpage, {
      x: 359, y: 220, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const textb1Field = form.createTextField('best.textb1')
    textb1Field.setText(this.charge[5])
    textb1Field.addToPage(firstpage, {
      x: 380, y: 220, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const textb2Field = form.createTextField('best.textb2')
    textb2Field.setText(this.charge[6])
    textb2Field.addToPage(firstpage, {
      x: 399, y: 220, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const textb3Field = form.createTextField('best.textb3')
    textb3Field.setText(this.charge[7])
    textb3Field.addToPage(firstpage, {
      x: 419, y: 220, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const textb4Field = form.createTextField('best.textb4')
    textb4Field.setText(this.charge[8])
    textb4Field.addToPage(firstpage, {
      x: 443, y: 220, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const textb5Field = form.createTextField('best.textb5')
    textb5Field.setText(this.charge[9])
    textb5Field.addToPage(firstpage, {
      x: 464, y: 220, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const textb6Field = form.createTextField('best.texta1b6')
    textb6Field.setText(this.charge[10])
    textb6Field.addToPage(firstpage, {
      x: 487, y: 220, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const textb7Field = form.createTextField('best.textb7')
    textb7Field.setText(this.charge[11])
    textb7Field.addToPage(firstpage, {
      x: 507, y: 220, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const textb8Field = form.createTextField('best.textb8')
    textb8Field.setText(this.charge[12])
    textb8Field.addToPage(firstpage, {
      x: 528, y: 220, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const textb9Field = form.createTextField('best.textb9')
    textb9Field.setText(this.charge[13])
    textb9Field.addToPage(firstpage, {
      x: 550, y: 220, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const textc1Field = form.createTextField('best.textc1')
    textc1Field.setText(this.charge[14])
    textc1Field.addToPage(firstpage, {
      x: 549, y: 220, width: 15,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })




    // *WE AUTHORISE YOU TO CONVERT THE UNUTILISED PORTION OF CAPTIONED INWARD REMITTANCE CREDITED

    const textc2Field = form.createTextField('best.textc2')
    textc2Field.setText('')
    textc2Field.addToPage(firstpage, {
      x: 160, y: 150, width: 110,
      height: 16, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const textc3Field = form.createTextField('best.textc3')
    textc3Field.setText('')
    textc3Field.addToPage(firstpage, {
      x: 160, y: 125, width: 110,
      height: 16, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })


    const textc4Field = form.createTextField('best.textc4')
    textc4Field.setText('')
    textc4Field.addToPage(firstpage, {
      x: 160, y: 100, width: 110,
      height: 16, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })


    // Booking date
    const textaField = form.createTextField('best.texta')
    textaField.setText('')
    textaField.addToPage(firstpage, {
      x: 413, y: 150, width: 12,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const textbField = form.createTextField('best.textb')
    textbField.setText('')
    textbField.addToPage(firstpage, {
      x: 430, y: 150, width: 12,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const textcField = form.createTextField('best.textc')
    textcField.setText('')
    textcField.addToPage(firstpage, {
      x: 450, y: 150, width: 12,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const textdField = form.createTextField('best.textd')
    textdField.setText('')
    textdField.addToPage(firstpage, {
      x: 467, y: 150, width: 12,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const texteField = form.createTextField('best.texte')
    texteField.setText('')
    texteField.addToPage(firstpage, {
      x: 485, y: 150, width: 12,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const textfField = form.createTextField('best.textf')
    textfField.setText('')
    textfField.addToPage(firstpage, {
      x: 503, y: 150, width: 12,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const textgField = form.createTextField('best.textg')
    textgField.setText('')
    textgField.addToPage(firstpage, {
      x: 523, y: 150, width: 12,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const texthField = form.createTextField('best.texth')
    texthField.setText('')
    texthField.addToPage(firstpage, {
      x: 539, y: 150, width: 12,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })


    // Due date

    const textiField = form.createTextField('best.texti')
    textiField.setText('')
    textiField.addToPage(firstpage, {
      x: 413, y: 125, width: 12,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const textjField = form.createTextField('best.textj')
    textjField.setText('')
    textjField.addToPage(firstpage, {
      x: 430, y: 125, width: 12,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const textkField = form.createTextField('best.textk')
    textkField.setText('')
    textkField.addToPage(firstpage, {
      x: 450, y: 125, width: 12,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const textlField = form.createTextField('best.textl')
    textlField.setText('')
    textlField.addToPage(firstpage, {
      x: 467, y: 125, width: 12,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const textmField = form.createTextField('best.textm')
    textmField.setText('')
    textmField.addToPage(firstpage, {
      x: 485, y: 125, width: 12,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const textnField = form.createTextField('best.textn')
    textnField.setText('')
    textnField.addToPage(firstpage, {
      x: 503, y: 125, width: 12,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const textoField = form.createTextField('best.texto')
    textoField.setText('')
    textoField.addToPage(firstpage, {
      x: 523, y: 125, width: 12,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const textzField = form.createTextField('best.textz')
    textzField.setText('')
    textzField.addToPage(firstpage, {
      x: 539, y: 125, width: 12,
      height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const textc5Field = form.createTextField('best.textc5')
    textc5Field.setText('')
    textc5Field.addToPage(firstpage, {
      x: 420, y: 100, width: 130,
      height: 16, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })

    const textc5Field1 = form.createTextField('best.textc5y')
    textc5Field1.setText(this.jstoday)
    textc5Field1.addToPage(firstpage, {
      x: 50, y: 52, width: 100,
      height: 16, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
    })
    const pdfBytes = await pdfDoc.save()
    var base64String = this._arrayBufferToBase64(pdfBytes)
    var x: any = 'data:application/pdf;base64,' + base64String;
    this.formerge = x
    this.value = base64String;
    this.newTask[0].generateDoc1 = x
    console.log('jhshshjshj', this.newTask[0])
    console.log("line no. 1735asdsadsa", this.value)
    const link: any = document.createElement("a");
    link.id = "dwnldLnk";
    link.style = "display:none;";
    document.body.appendChild(link);
    const dlnk: any = document.getElementById("dwnldLnk");
    dlnk.href = x;
    dlnk.download = 'file.pdf';
    dlnk.click();
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

  generateDoc1(code, j) {
    console.log(code, j)
    this.generate = true
    this.sbPurpose[j] = code;
    this.ir = this.Question5
    if (this.Question5 == 'yes') {
      console.log("shdhshs")

      this.sbPurpose1[j] = code;
    }
    let generateDoc2: any = [];
    for (let item of this.item1) {
      for (let sb of this.sbArray) {
        if (item.sbno === sb) {
          generateDoc2.push(this.sanitizer.bypassSecurityTrustResourceUrl(
            item.doc
          ))
        }
      }
    }
    this.mainDoc1[j] = generateDoc2

    let generateDoc3: any = [];
    if (this.Question2 == 'yes') {
      for (let item of this.item4) {
        for (let sb of this.tryArray) {
          if (item.thirdNumber === sb) {
            generateDoc3.push(this.sanitizer.bypassSecurityTrustResourceUrl(
              item.doc
            ))
          }
        }
      }
      this.mainDoc3[j] = generateDoc3
    }

    if (this.Question2 == 'yes') {
      this.newTask[j] = {
        sbNumbers: this.sbArray,
        sbUrls: this.mainDoc1[j],
        tryNumbers: this.tryArray,
        tryUrls: this.mainDoc3[j],
        purposeCode: code,
        lodgeDone: 'no',
        ir: this.ir
      }
    }
    else if (this.Question2 == 'no') {
      this.newTask[j] = {
        sbNumbers: this.sbArray,
        sbUrls: this.mainDoc1[j],
        purposeCode: code,
        lodgeDone: 'no',
        ir: this.ir
      }
    }



    console.log(this.mainDoc1[j])
    console.log(this.generate1)
    console.log(this.c)
  }
  GENRATE_DOCMENTS_FILL: any = [];
  generateDoc2(SHOW_HIDE_CODE, code, j) {
    console.log(code, j)
    this.generate = true;
    this.ir = SHOW_HIDE_CODE
    this.SELECT_bankreferencenumber.forEach(element => {
      const tempfilter = this.Blcopyref.filter((item: any) => item?.blcopyrefNumber.includes(element));
      tempfilter.forEach((filterItem) => {
        this.GENRATE_DOCMENTS_FILL.push(filterItem)
      })
    });
    console.log(this.GENRATE_DOCMENTS_FILL, 'this.GENRATE_DOCMENTS_FILL')
    if (SHOW_HIDE_CODE == 'yes') {
      this.importPurpose[j] = code;
    }
    else if (SHOW_HIDE_CODE == 'no') {
      this.noImportPurpose[j] = code;
    }
    let generateDoc2: any = [];
    for (let item of this.item4) {
      for (let sb of this.tryArray) {
        if (item.thirdNumber === sb) {
          generateDoc2.push(this.sanitizer.bypassSecurityTrustResourceUrl(item.doc))
        }
      }
    }
    this.mainDoc2[j] = generateDoc2
    this.newTask[j] = {
      tryNumbers: this.tryArray,
      tryUrls: this.mainDoc2[j],
      purposeCode: code,
      lodgeDone: 'yes',
      ir: this.ir,
      br: 'yes'
    }
  }

  exportAsPDF(code, i) {
    if (this.documentService.draft == true) {
      if (this.documentService.task.task[i].pipoUrls) {
        this.selectPIPO = this.documentService.task.task[i].pipoNumbers
      }
    }
    this.donePurpose[i] = code;
    const height =
      Math.round($("#mainId").outerHeight() as any * 0.0104166667 * 10) / 10;
    console.log($("#mainId").html());
    this.documentService
      .getPDF({
        data: $("#mainId").html(),
        filename: "Final Report",
        format: {
          paperWidth: 7,
          paperHeight: height + 5,
          marginTop: 0,
          marginBottom: 0,
          marginLeft: 0,
          marginRight: 0,
        },
        template:
          "./app/modules/pdfGenerationModule/pdfTemplate/finalreport.ejs",
      })
      .subscribe((data) => {
        if (data && data.success) {
          console.log(data);
          this.data4 = data
          this.data5 = data.file.replace('application/octet-stream', 'application/pdf')
          console.log(this.data5)
          this.data6 = this.sanitizer.bypassSecurityTrustResourceUrl(
            this.data5
          );
          console.log(this.data6)
          this.data7[i] = this.data6
          //this.newTask.url1 = this.data5;
          this.done = true;
          //this.downloadPDF(data);
          this.zToggle[i] = true;
          this.newTask[i] = {
            pipoNumbers: this.selectPIPO,
            pipoUrls: this.mainDoc[i],
            purposeCode: code,
            generateDoc1: this.data7[i]
          }
          console.log(this.newTask[i])
          let allTrue = true;
          for (let value of this.zToggle) {
            allTrue = allTrue && value;
          }
          if (allTrue) {
            this.isDone = true;
          }
        }
      });


  }


  doneDox() {

    if (this.documentService.draft) {
      this.documentService.updateExportTask({ task: this.newTask, completed: 'yes', fileType: 'IRD' }, this.documentService.task._id).subscribe(
        (data) => {
          console.log("king123");
          console.log(this.newTask);
          console.log("data");
          this.documentService.draft = false
          this.documentService.task.id = ''
          this.isDoneAll = true
          console.log("advanceOutward")
          this.userService.updateManyPipo(this.newTask[0]['pipoNumbers'], 'advanceOutward', this.newTask[0].generateDoc1)
            .subscribe(
              data => {
                console.log("king123")
                console.log(data)
                this.toastr.success('Task saved as completed successfully!!!!!!!!!!!!');
                if (this.redirectid) {
                  this.router.navigate([
                    'home/pipo-export',
                    {
                      id: this.redirectid,
                      page: this.redirectpage,
                      index: this.redirectindex,
                    },
                  ]);
                } else {
                  window.location.reload();
                }
                //this.router.navigate(["/home/advance-outward-remittance"]);
              },
              error => {
                // this.toastr.error('Invalid inputs, please check!');
                console.log("error")
              });

          //this.router.navigate(['/login'], { queryParams: { registered: true }});
        },
        (error) => {
          console.log("error");
        }
      );
    }
    else {
      console.log(this.newTask)
      console.log("advanceOutward")
      this.documentService.addExportTask({ task: this.newTask, completed: 'yes', fileType: 'IRD' }).subscribe(
        (res) => {
          this.isDoneAll = true
          console.log("advanceOutward")
          this.userService.updateManyPipo(this.newTask[0]['pipoNumbers'], 'advanceOutward', this.newTask[0].generateDoc1)
            .subscribe(
              data => {
                console.log("king123")
                console.log(data)
                this.toastr.success('Task saved as completed successfully!');
                if (this.redirectid) {
                  this.router.navigate([
                    'home/pipo-export',
                    {
                      id: this.redirectid,
                      page: this.redirectpage,
                      index: this.redirectindex,
                    },
                  ]);
                } else {
                  window.location.reload();
                }
                //this.router.navigate(["/home/dashboardTask"]);
                //this.router.navigate(["/home/advance-outward-remittance"]);
              },
              error => {
                // this.toastr.error('Invalid inputs, please check!');
                console.log("error")
              });


        },
        (err) => {
          this.toastr.error('Error!');
          console.log("Error saving the transaction")
        }
      );
    }


  }

  exportAsPDF1(code, i) {
    console.log(code, i)
    this.doneSbPurpose[i] = code;
    const height =
      Math.round($("#mainId").outerHeight() as any * 0.0104166667 * 10) / 10;
    console.log($("#mainId").html());
    this.documentService
      .getPDF({
        data: $("#mainId").html(),
        filename: "Final Report",
        format: {
          paperWidth: 7,
          paperHeight: height + 5,
          marginTop: 0,
          marginBottom: 0,
          marginLeft: 0,
          marginRight: 0,
        },
        template:
          "./app/modules/pdfGenerationModule/pdfTemplate/finalreport.ejs",
      })
      .subscribe((data) => {
        if (data && data.success) {
          console.log(data);
          this.data4 = data
          this.data5 = data.file.replace('application/octet-stream', 'application/pdf')
          console.log(this.data5)
          this.data6 = this.sanitizer.bypassSecurityTrustResourceUrl(
            this.data5
          );
          console.log(this.data6)
          this.data8[i] = this.data6
          console.log(this.data8[i])
          //this.newTask.url1 = this.data5;
          this.done = true;
          console.log(this.sbPurpose1[i])
          console.log(code)
          if (this.sbPurpose1[i] == code) {
            const height1 =
              Math.round($("#mainId1").outerHeight() as any * 0.0104166667 * 10) / 10;
            console.log($("#mainId1").html());
            this.documentService
              .getPDF({
                data: $("#mainId1").html(),
                filename: "Final Report",
                format: {
                  paperWidth: 7,
                  paperHeight: height1 + 5,
                  marginTop: 0,
                  marginBottom: 0,
                  marginLeft: 0,
                  marginRight: 0,
                },
                template:
                  "./app/modules/pdfGenerationModule/pdfTemplate/finalreport.ejs",
              })
              .subscribe((data) => {
                if (data && data.success) {
                  console.log(data);
                  this.data4 = data
                  this.data5 = data.file.replace('application/octet-stream', 'application/pdf')
                  console.log(this.data5)
                  this.data6 = this.sanitizer.bypassSecurityTrustResourceUrl(
                    this.data5
                  );

                  console.log(this.data6)
                  this.dataImport[i] = this.data6
                  this.sbPurposeDone1[i] = code
                  console.log(this.dataImport[i])
                  //this.newTask.url1 = this.data5;
                  this.done = true;

                  //this.downloadPDF(data);
                  if (this.Question2 == 'yes') {
                    this.newTask[i] = {
                      sbNumbers: this.sbArray,
                      sbUrls: this.mainDoc1[i],
                      tryNumbers: this.tryArray,
                      tryUrls: this.mainDoc3[i],
                      purposeCode: code,
                      generateDoc1: this.data8[i],
                      generateDoc2: this.dataImport[i],
                      lodgeDone: 'no',
                      ir: 'yes'
                    }
                  }
                  else if (this.Question2 == 'no') {
                    this.newTask[i] = {
                      sbNumbers: this.sbArray,
                      sbUrls: this.mainDoc1[i],
                      tryNumbers: this.tryArray,
                      tryUrls: this.mainDoc3[i],
                      purposeCode: code,
                      generateDoc1: this.data8[i],
                      generateDoc2: this.dataImport[i],
                      lodgeDone: 'no',
                      ir: 'yes'
                    }
                  }

                }

              });

            console.log(this.newTask[i])
          }
          else {
            this.sbPurposeDone1[i] = ''
            this.newTask[i] = {
              sbNumbers: this.sbArray,
              sbUrls: this.mainDoc1[i],
              tryNumbers: this.tryArray,
              tryUrls: this.mainDoc3[i],
              purposeCode: code,
              generateDoc1: this.data8[i],
              lodgeDone: 'no',
              ir: 'no'
            }
            console.log(this.newTask[i])
          }
          this.zToggle[i] = true;

          let allTrue = true;
          for (let value of this.zToggle) {
            allTrue = allTrue && value;
          }
          if (allTrue) {
            this.isDone = true;
          }

          //this.downloadPDF(data);
        }
      });
  }
  calculateAmount(amount1, amount2) {
    return !isNaN(parseFloat(amount1)) ? parseFloat(amount1) - parseFloat(amount2) : 0;
  }
  P102_PDF: any = ''
  exportAsPDF2(code, i) {
    console.log(code, i)
    $(document).ready(() => {
      kendo.drawing.drawDOM($("#HTML_PDF_TABLE")).then(function (group) {
        return kendo.drawing.exportPDF(group, {
          paperSize: "auto",
          margin: { left: "1cm", top: "1cm", right: "1cm", bottom: "1cm" }
        });
      }).done((data) => {
        console.log('hhjjhhjjh', data, this.mainDoc2)
        this.P102_PDF = data;
        this.data9[i] = this.sanitizer.bypassSecurityTrustResourceUrl(data);
        this.doneImportPurpose[i] = code;
        this.done = true;
        this.zToggle[i] = true;
        this.newTask[i] = {
          tryNumbers: this.tryArray,
          tryUrls: this.mainDoc2[i],
          purposeCode: code,
          generateDoc1: this.data9[i],
          lodgeDone: 'yes',
          ir: 'no',
          br: 'yes'
        }
        let allTrue = true;
        for (let value of this.zToggle) {
          allTrue = allTrue && value;
        }
        if (allTrue) {
          this.isDone = true;
        }
        this.documentService.getDownloadStatus({ id: this.Inward_Remittance_MT103[this.Inward_Remittance_MT103.length - 1]?._id, deleteflag: '-1' }).subscribe((res: any) => {
          console.log(res, 'dsdsdsdsdsdsds');
          this.GetDownloadStatus = res[0];
          if (res.length == 0) {
            this.documentService.getDownloadStatus({ id: this.Inward_Remittance_MT103[this.Inward_Remittance_MT103.length - 1]?._id, deleteflag: '2' }).subscribe((res: any) => {
              console.log(res, 'dsdsdsdsdsdsds');
              this.GetDownloadStatus = res[0];
            })
          }
        })
      });
    });
    // this.documentService
    //   .getPDF({
    //     data: $("#mainId1").html(),
    //     filename: "Final Report",
    //     format: {
    //       paperWidth: 7,
    //       paperHeight: height + 5,
    //       marginTop: 0,
    //       marginBottom: 0,
    //       marginLeft: 0,
    //       marginRight: 0,
    //     },
    //     template:
    //       "./app/modules/pdfGenerationModule/pdfTemplate/finalreport.ejs",
    //   })
    //   .subscribe((data) => {
    //     if (data && data.success) {
    //       console.log(data);
    //       this.data4 = data
    //       this.data5 = data.file.replace('application/octet-stream', 'application/pdf')
    //       console.log(this.data5)
    //       this.data6 = this.sanitizer.bypassSecurityTrustResourceUrl(
    //         this.data5
    //       );
    //       console.log(this.data6)
    //       this.data9[i] = this.data6
    //       console.log(this.data9[i])
    //       //this.newTask.url1 = this.data5;
    //       this.done = true;
    //       //this.downloadPDF(data);
    //       this.zToggle[i] = true;
    //       this.newTask[i] = {
    //         tryNumbers: this.tryArray,
    //         tryUrls: this.mainDoc2[i],
    //         purposeCode: code,
    //         generateDoc1: this.data9[i],
    //         lodgeDone: 'yes',
    //         ir: 'no',
    //         br: 'yes'
    //       }
    //       let allTrue = true;
    //       for (let value of this.zToggle) {
    //         allTrue = allTrue && value;
    //       }
    //       if (allTrue) {
    //         this.isDone = true;
    //       }
    //     }
    //   });
  }

  change(e) {
    console.log(e.target.value);
    this.bankRef = e.target.value
  }
  ARRAY_BUFFER_PDF: any = [];
  showPreview(id: any) {
    // this.PREVIWES_URL='./../../assets/DXB.pdf'
    console.log("2214 line", this.STORE_URL)
    this.bgColor = true
    this.newDone = true
    this.ARRAY_BUFFER_PDF = [];
    if (this.formerge != null && this.formerge != '') {
      this.ARRAY_BUFFER_PDF[0] = this.formerge;
      this.ARRAY_BUFFER_PDF[1] = this.MT103_URL;
    } else {
      this.ARRAY_BUFFER_PDF[0] = this.MT103_URL;
    }
    for (let index = 0; index < this.STORE_URL.length; index++) {
      this.userService.mergePdf(this.STORE_URL[index]).subscribe((res: any) => {
        res.arrayBuffer().then((data: any) => {
          var base64String = this._arrayBufferToBase64(data)
          const x = 'data:application/pdf;base64,' + base64String;
          this.ARRAY_BUFFER_PDF.push(x);
          console.log('mergePdf_downloadEachFile', data);
        });
      });
    }
    this.documentService.getDownloadStatus({ id: this.Inward_Remittance_MT103[this.Inward_Remittance_MT103.length - 1]?._id, deleteflag: '-1' }).subscribe((res: any) => {
      console.log(res, 'dsdsdsdsdsdsds');
      this.GetDownloadStatus = res[0];
      if (res.length == 0) {
        this.documentService.getDownloadStatus({ id: this.Inward_Remittance_MT103[this.Inward_Remittance_MT103.length - 1]?._id, deleteflag: '2' }).subscribe((res: any) => {
          console.log(res, 'dsdsdsdsdsdsds');
          this.GetDownloadStatus = res[0];
        })
      }
    })
  }
  hidePreview() {
    this.bgColor = false
    this.newDone = false
  }


  sendMail(j, code) {
    var filterValue: any = {
      Amount: [],
      Number: [],
      Documents: []
    }
    this.SELECT_bankreferencenumber.forEach(element => {
      const tempfilter = this.Blcopyref.filter((item: any) => item?.blcopyrefNumber.includes(element));
      tempfilter.forEach((filterItem) => {
        filterValue['Amount'].push(filterItem?.amount)
        filterValue['Number'].push(filterItem?.blcopyrefNumber)
        filterValue['Documents'].push(filterItem?.doc)
      })
    });
    this.pdfmerge._multiple_merge_pdf(filterValue?.Documents).then((mergeres: any) => {
      console.log('mergePdf_downloadEachFile', data);
      let val = {
        number: filterValue['Number'].toString(),
        amount: filterValue['Amount'].toString(),
        pdf: mergeres?.withoutBase64
      }
      console.log(val, 'sendMail')
      this.documentService.SendMail_TextPdf({ task: val }).subscribe(
        (res2) => {
          this.toastr.success('Message sent successfully!');
          console.log("Email Sent");
          if (this.Question4 == 'no') {
            this.mailArray[j] = code
            this.newTask[j] = {
              tryNumbers: this.tryArray,
              tryUrls: this.mainDoc2[j],
              purposeCode: code,
              bankRef: this.bankRef,
              lodgeDone: 'yes',
              ir: 'no',
              br: 'yes'
            }
            this.zToggle[j] = true;
            let allTrue = true;
            for (let value of this.zToggle) {
              allTrue = allTrue && value;
            }
            if (allTrue) {
              this.isDone = true;
            }
          }
          else {
            this.mailArray[j] = code
            this.newTask[j] = {
              purposeCode: code,
              bankRef: this.bankRef,
              lodgeDone: 'yes',
              ir: 'no',
              br: 'no'
            }
            this.zToggle[j] = true;
            let allTrue = true;
            for (let value of this.zToggle) {
              allTrue = allTrue && value;
            }
            if (allTrue) {
              this.isDone = true;
            }
          }
        },
        (err) => console.log("ERROR")
      );
    });


  }
  OLD_INPUT_VALUE: string = '';
  purposeClick(e, f, inputid: any) {
    if (e.startsWith("P0") || e.startsWith("P1")) {
      if (this.Inward_Remittance.includes(e)) {
        if (this.selectedPurpose.includes(e)) {
          this.toastr.warning(`This purpose code already added`);
        }
        else if (!this.selectedPurpose.includes(e)) {
          this.OLD_INPUT_VALUE = e;
          // $(inputid).val(e);
          // this.searchData(e)
          this.selectedPurpose.push(e)
          this.toastr.info(`Purpose code added`);
          this.selection = this.selectedPurpose[0];
        }
      }
      else {
        this.toastr.warning(`You can't add this purpose code`);
      }

    }
    else {
      this.toastr.error(`Click on purpose code`);
    }

    // this.select = true;
    // this.purposeCode = e
    // this.detail = f
  }

  removeClick(i) {
    this.selectedPurpose.splice(i, 1)
  }

  onChange() {
    this.purposeCode = ''
    this.detail = ''
    this.purposeSelect = false
  }
  hide(id) {
    this.proceed = true;
    this.c = false;
  }
  hide1(code, j) {
    code === this.c;
    this.sbPurpose[j] != code
    this.importPurpose[j] != code
    this.noImportPurpose[j] != code
    this.mailArray[j] != code
    code !== this.c
    this.importPurpose[j] != code
    //  this.doneImportPurpose[j] == code

  }

  proceedClick() {
    console.log("gggg")
    this.proceed = false
    this.c = this.selectedPurpose[0];
    let i = 0
    for (let value of this.selectedPurpose) {
      this.generatePurpose.push('')
      this.donePurpose.push('');
      this.sbPurpose.push('');
      this.doneSbPurpose.push('');
      this.importPurpose.push('');
      this.noImportPurpose.push('');
      this.doneImportPurpose.push('');
      this.zToggle.push(false)
      this.mailArray.push('')
      this.newTask[i] = {
        purposeCode: value
      }
      i++
    }
    this.z = this.selectedPurpose.length
  }

  tabClick(a, i) {
    this.c = a
    this.Question1 = '';
    this.Question2 = '';
    this.Question3 = '';
    this.Question4 = '';
    this.Question5 = '';
    this.selectPIPO = [];
    this.sbArray = [];
    this.tryArray = [];
    let allTrue = true;
    this.selection = a;
    console.log(this.Select_A_bank, 'Select_A_bank')
    for (let value of this.zToggle) {
      allTrue = allTrue && value;
    }
    if (allTrue) {
      this.isDone = true;
    }
  }

  onClass(e) {

  }

  edit() {

  }
  downloadPDF() {

  }

  ngOnDestroy() {
    console.log("Inside draft");

    if (!this.isDoneAll && !this.proceed && !this.documentService.draft) {
      console.log('hhhhh')
      // this.confirmDialogService.confirmThis('Do you want to save this task?', () => {
      //   if (this.isDone) {
      //     this.documentService.addExportTask({ task: this.newTask, completed: 'yes', fileType: 'IRD' }).subscribe(
      //       (res) => {
      //         this.toastr.success('Saved the transaction as completed');
      //         console.log("Transaction Saved");
      //         //this.router.navigate(["/home/dashboardNew"]);

      //       },
      //       (err) => {
      //         this.toastr.error('Error!');
      //         console.log("Error saving the transaction")
      //       }
      //     );
      //   }
      //   else {
      //     this.documentService.addExportTask({ task: this.newTask, completed: 'no', fileType: 'IRD' }).subscribe(
      //       (res) => {
      //         this.toastr.success('Saved the transaction in draft');
      //         console.log("Transaction Saved");
      //         //this.router.navigate(["/home/dashboardNew"]);

      //       },
      //       (err) => {
      //         this.toastr.error('Error!');
      //         console.log("Error saving the transaction")
      //       }
      //     );
      //   }

      // }, () => {
      //   console.log("no");
      // });
    }

  }

  setradio(a, input, event) {
    console.log(a)
    if (input == '') {
      event.target.checked = false
      alert('Please select pipo number');
      return;
    }
    this.bankToggle = true
    this.bankValue = a
    this.newBankArray = []
    var bankformat: any = this.documentService?.getBankFormat()?.filter((item: any) => item.value?.indexOf(this.bankValue) != -1);
    console.log(this.newBankArray, bankformat, 'this.newBankArray')
    if (bankformat.length != 0 && bankformat[0]?.urlpdf != '') {
      this.bankArray.forEach((value, index) => {
        console.log('shshsh')
        if (value.bank == a) {
          this.newBankArray.push(value)
        }
      });
    } else {
      this.bankArray.forEach((value, index) => {
        console.log('shshsh')
        if (value.bank == a) {
          this.newBankArray.push(value)
        }
      });
      this.toastr.error("You don't have bank format,please select valid bank name!");
    }
    console.log(a)
  }

  creditTo(a) {
    var n = a.accNumber
    this.credit = n.split("");
    console.log(this.credit)
  }

  chargesTo(a) {
    var n = a.accNumber
    this.charge = n.split("");
    console.log(this.charge)
  }

  openToPdf(content2, pipo) {
    console.log("Line 2488", pipo, this.selectedPurpose, this.mainDoc)
    this.selectedPdfs = [];
    this.selectedPdfs[0] = this.value;
    this.selectedPdfs[1] = this.MT103_URL;
    for (let index = 0; index < this.ARRAY_BUFFER_PDF.length; index++) {
      this.selectedPdfs.push(this.ARRAY_BUFFER_PDF[index])
    }
    console.log('line no. 2493', this.selectedPdfs);

    // this.modalService.open(content2, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then(
    //   (result) => {
    //     this.closeResult = `Closed with: ${result}`;
    //   },
    //   (reason) => {
    //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    //   }
    // );
  }

  addPdfToSelectedPdf(value, e) {
    if (e.target.checked) {
      if (this.selectedPdfs.includes(value) === false) {
        this.selectedPdfs.push(value);
      }
    } else if (!e.target.checked) {
      this.selectedPdfs = this.selectedPdfs.filter((item) => item !== value);
    }
    console.log("line no. 2495", this.selectedPdfs);
  }

  mergeAllPDFs = async (type: String) => {
    let urls = this.selectedPdfs;
    console.log("2542 Line", urls)
    const numDocs = urls.length;
    const pdfDoc = await PDFDocument.create();

    var appendEachPage = async (donorPdfDoc, currentpage, docLength) => {
      if (currentpage < docLength) {
        console.log('Inside Page', currentpage, 'total pages', docLength);
        const [donorPage] = await pdfDoc.copyPages(donorPdfDoc, [currentpage]);
        pdfDoc.addPage(donorPage);
        await appendEachPage(donorPdfDoc, currentpage + 1, docLength);
      }
    };
    var appendEachFile = async (bytes) => {
      const donorPdfDoc = await PDFDocument.load(bytes);
      const docLength = donorPdfDoc.getPageCount();
      console.log('donorPdfDoc', donorPdfDoc, 'docLength', docLength);
      await appendEachPage(donorPdfDoc, 0, docLength);
    };
    var appendAllFiles = async (pdflist, currentfile) => {
      if (currentfile < numDocs) {
        await appendEachFile(pdflist[currentfile]);
        console.log('Inside file', currentfile);
        await appendAllFiles(pdflist, currentfile + 1);
      } else {
        if (type == 'download') {
          this.downloadAsSingleFile(pdfDoc);
        } else {
          this.sendMail2(pdfDoc);
        }
      }
    };

    // download single file;
    let downloadEachFile = (filename) => {
      return new Promise((resolve, reject) => {
        this.userService.mergePdf(filename).subscribe((res: any) => {
          console.log('downloadEachFile', res);
          resolve(res.arrayBuffer());
        },
          (err) => reject('Failed to fetch the pdf')
        );
      });
    };
    // download all the pdfs
    let downloadAllFiles = () => {
      var promises: any = [];
      for (var i = 0; i < urls.length; i++) {
        if (urls[i] != '' && urls[i] != undefined) {
          promises.push(urls[i]);
        }
      }
      Promise.all(promises).then((pdfList) => {
        appendAllFiles(pdfList, 0);
        console.log('pdfList2', pdfList);
      }, (error) => {
        // write code to send error to user
        // res.send({"error": "failed to fetch the document try again later/ contact administrator"})''
      }
      );
    };
    downloadAllFiles();
  };

  downloadAsSingleFile = async (pdfDoc: any) => {
    const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
    var data_pdf = pdfDataUri.substring(pdfDataUri.indexOf(',') + 1);
    //const byteCharacters = atob(data_pdf);
    if (this.generateChecked == true) {
      var merge = 'data:application/pdf;base64,' + data_pdf //this.value


      const mergedPdf = await PDFDocument.create();
      const pdfA = await PDFDocument.load(this.formerge);
      const pdfB = await PDFDocument.load(merge);
      const copiedPagesA = await mergedPdf.copyPages(pdfA, pdfA.getPageIndices());
      copiedPagesA.forEach((page) => mergedPdf.addPage(page));

      const copiedPagesB = await mergedPdf.copyPages(pdfB, pdfB.getPageIndices());
      copiedPagesB.forEach((page) => mergedPdf.addPage(page));
      const mergedPdfFile = await mergedPdf.save();
      var base64String = this._arrayBufferToBase64(mergedPdfFile);
      const byteCharacters = atob(base64String);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
        // console.log("bytenumbers", byteNumbers[i])
      }
      const byteArray = new Uint8Array(byteNumbers);
      importedSaveAs(
        new Blob([byteArray], { type: 'application/pdf' }),
        'BankAttachment'
      );

    }
    else {

      const byteCharacters1 = atob(data_pdf);
      const byteNumbers1 = new Array(byteCharacters1.length);
      for (let i = 0; i < byteCharacters1.length; i++) {
        byteNumbers1[i] = byteCharacters1.charCodeAt(i);
        // console.log("bytenumbers", byteNumbers[i])
      }
      const byteArray1 = new Uint8Array(byteNumbers1);
      importedSaveAs(
        new Blob([byteArray1], { type: 'application/pdf' }),
        'InwardRemittanceDisposal'
      );

    }
  };

  blobToSaveAs(fileName: string, exportText: any) {
    try {
      const linkSource = exportText;
      const downloadLink = document.createElement("a");
      downloadLink.href = linkSource;
      downloadLink.download = fileName;
      downloadLink.click();
    } catch (e) {
      console.error('BlobToSaveAs error', e);
    }
  }

  sendMail2 = async (pdfDoc: any) => {
    const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
    console.log('5417****', pdfDataUri);
    var data_pdf = pdfDataUri.substring(pdfDataUri.indexOf(',') + 1);
    const byteCharacters = atob(data_pdf);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
      // console.log("bytenumbers", byteNumbers[i])
    }
    const byteArray = new Uint8Array(byteNumbers);
    // this.BytePdfDoc = byteArray.toString();

    // console.log("**BytePdfDoc",this.BytePdfDoc)
    console.log('**user id', this.id);
    console.log('99999999999999999999999', data_pdf);
    if (this.generateChecked == true) {
      var merge = 'data:application/pdf;base64,' + data_pdf //this.value

      const mergedPdf = await PDFDocument.create();
      console.log('xx')
      console.log("2679", this.formerge)
      const pdfA = await PDFDocument.load(this.formerge);
      console.log('a')
      const pdfB = await PDFDocument.load(merge);
      console.log('b')
      const copiedPagesA = await mergedPdf.copyPages(pdfA, pdfA.getPageIndices());
      copiedPagesA.forEach((page) => mergedPdf.addPage(page));

      const copiedPagesB = await mergedPdf.copyPages(pdfB, pdfB.getPageIndices());
      copiedPagesB.forEach((page) => mergedPdf.addPage(page));
      const mergedPdfFile = await mergedPdf.save();
      var base64String = this._arrayBufferToBase64(mergedPdfFile);

      this.userService.documentSend(this.id, base64String).subscribe(
        (data) => {
          console.log('king123');
          console.log(data);
          // this.message = data['message']
          // this.no = false;
          //
        },
        (error) => {
          // this.no = true;
          // this.message = null;
          console.log('error');
        }
      );

    }
    else {


      this.userService.documentSend(this.id, data_pdf).subscribe(
        (data) => {
          console.log('king123');
          console.log(data);
          // this.message = data['message']
          // this.no = false;
          //
        },
        (error) => {
          // this.no = true;
          // this.message = null;
          console.log('error');
        }
      );
    }
  };
  changePurposeCode(value) {
    // this.Inward_Remittancefilter = this.filterPurposeCode(value)
  }
  filterPurposeCode(searchvalue) {
    this.Inward_Remittancefilter = [];
    if (searchvalue != null && searchvalue != undefined) {
      this.Inward_Remittancefilter = this.Inward_Remittance.filter((e) => ((e).toLowerCase()).indexOf(searchvalue.toLowerCase()) != -1);
    }
    else {
      this.Inward_Remittancefilter = this.Inward_Remittancefilter;
    }
    return this.Inward_Remittancefilter;
  }

  PIPOFilter(searchvalue) {
    if (searchvalue != null && searchvalue != undefined && searchvalue != 'BuyerName') {
      this.dataSource = this.OLD_dataSource.filter((e) => {
        var temp = (e['buyerName']);
        if (temp != null && temp != undefined) {
          if ((temp.toLowerCase()).indexOf(searchvalue.toLowerCase()) != -1) {
            return e;
          }
        }
      });
    }
    else {
      this.dataSource = this.OLD_dataSource;
    }
  }
  ShippingBillnumberFil(searchvalue) {
    if (searchvalue != '' && searchvalue[0] != null && searchvalue[0] != undefined && searchvalue[0] != 'BuyerName') {
      this.ShippingbillNumberfilter = this.item1.filter((e: any) => e?.buyerName[0]?.indexOf(searchvalue[0]) != -1);
    }
    else {
      this.ShippingbillNumberfilter = this.item1;
    }
    console.log(this.ShippingbillNumberfilter, this.item1, 'ShippingbillNumberfilter');

  }
  ClickbankNumber(name: any, inputsetvalue: any, hiddenprops) {
    let indexof = this.SELECT_bankreferencenumber.indexOf(name);
    if (indexof == -1) {
      this.SELECT_bankreferencenumber.push(name);
    } else {
      this.SELECT_bankreferencenumber.splice(indexof, 1);
    }
    console.log(name, this.SELECT_bankreferencenumber, inputsetvalue, 'bnk_reff')
    this.bankRef = name;
  }
  ArrayToString(array: any) {
    return array.length != 0 ? array.toString() : '';
  }
  loadPopup(inputid, hidden_props) {
    var oldata: any = [];
    this.documentService.getBlcopyrefPromies().then((res: any) => {
      this.Blcopyref = res;
      oldata = res;
      console.log(res, 'getBlcopyref')
    }).catch((error) => {
      this.Blcopyref = [];
    });
    var timer: any = null;
    $(inputid).keyup((e: any) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        var value = $(inputid).val();
        if (value) {
          this.Blcopyref = this.filterBlcopyref(oldata, value)
        } else {
          this.Blcopyref = oldata;
        }
      }, 200);
    });
  }
  loadPopupThirdParty(event, dropdownid) {
    var timer: any = null;
    clearTimeout(timer);
    $(dropdownid).css('display', 'none')
    timer = setTimeout(() => {
      $(dropdownid).css('display', 'block');
      this.ThirdPartydata = this.filterThirdParty(this.ThirdPartydataoldata, event.target.value)
      if (this.ThirdPartydata.length == 0) {
        $(dropdownid).css('display', 'none')
      } else {
        this.ThirdPartydata = this.ThirdPartydataoldata;
      }
    }, 200);
  }
  SearchSelectValue(value: any) {
    if (value != null && value != undefined && value != '') {
      this.Blcopyref = this.filterBlcopyref(this.Blcopyrefoldata, value);
    }
  }
  ShippingbillNumberfilter: any = [];
  PARTY_NAME: any = [];
  loadPopupPIPONumbers(inputid, hidden_props) {

  }
  filterBlcopyref(data, searchvalue) {
    return data.filter((e) => ((e.buyerName).toLowerCase()).indexOf(searchvalue.toLowerCase()) != -1);
  }
  filterThirdParty(data, searchvalue) {
    return data.filter((e) => (e.buyerName.toLowerCase()).indexOf(searchvalue.toLowerCase()) != -1);
  }

  filtershippingbillnumber(data, searchvalue) {
    return data.filter((e) => (e.sbno.toLowerCase()).indexOf(searchvalue.toLowerCase()) != -1);
  }
  StringConverter(item) {
    // console.log(item,'itemmmmmmmmm')
    if (item.length == 0) {
      return ''
    } else {
      return item.toString();
    }
  }
  ClassRetrun(mainkey, key, class1, class2, condition) {
    if (this.Lodgement[this.selection][mainkey][key] === condition) {
      return class1;
    }
    else {
      return class2;
    }
  }
  Changebutton(mainkey, Showkey, hidekey, value) {
    this.Lodgement[this.selection][mainkey][Showkey] = value
    this.Lodgement[this.selection][mainkey][hidekey] = '';
    // console.log(this.Lodgement[this.selection],'Lodgement')
  }
  Number_to_word(numberInput: any) {
    let oneToTwenty = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ',
      'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
    let tenth = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    //let num = ('0000000000'+ numberInput).slice(-10).match(/^(\d{1})(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    let num: any = ('0000000' + numberInput).slice(-7).match(/^(\d{1})(\d{1})(\d{2})(\d{1})(\d{2})$/);
    console.log(num);
    if (numberInput.toString().length > 7 || !num) {
      return '';
    } else {
      console.log(numberInput);
      let outputText = num[1] != 0 ? (oneToTwenty[Number(num[1])] || `${tenth[num[1][0]]} ${oneToTwenty[num[1][1]]}`) + ' million ' : '';
      outputText += num[2] != 0 ? (oneToTwenty[Number(num[2])] || `${tenth[num[2][0]]} ${oneToTwenty[num[2][1]]}`) + 'hundred ' : '';
      outputText += num[3] != 0 ? (oneToTwenty[Number(num[3])] || `${tenth[num[3][0]]} ${oneToTwenty[num[3][1]]}`) + ' thousand ' : '';
      outputText += num[4] != 0 ? (oneToTwenty[Number(num[4])] || `${tenth[num[4][0]]} ${oneToTwenty[num[4][1]]}`) + 'hundred ' : '';
      outputText += num[5] != 0 ? (oneToTwenty[Number(num[5])] || `${tenth[num[5][0]]} ${oneToTwenty[num[5][1]]} `) : '';
      return outputText;
    }
  }
 async SendApproval(Status: string, UniqueId: any, code: any) {
    var temp_doc: any = [];
    var approval_data: any = [];
    var UpdatedUrl:any=[];
    if (code == 'P0102') {
      temp_doc[0] = {name:'P0102',pdf:this.P102_PDF};
      temp_doc[1] = {name:'Inward_Remittance_MT103',pdf:this.Inward_Remittance_MT103[this.Inward_Remittance_MT103.length - 1]?.file};
      for (let index = 0; index < this.selectedPdfs.length; index++) {
        temp_doc.push({name:'documents_'+(index+1),pdf:this.selectedPdfs[index]})
      }
      for (let index = 0; index < temp_doc.length; index++) {
        if (temp_doc[index]?.pdf != '' && temp_doc[index]?.pdf != undefined) {
          if (temp_doc[index]?.pdf.indexOf('data:application/pdf;base64,') != -1) {
            await this.userService?.UploadS3Buket({
              fileName: temp_doc[index]?.name + '.pdf', buffer: temp_doc[index]?.pdf,
              type: 'application/pdf'
            }).subscribe((response: any) => {
              console.log(response, 'response')
              UpdatedUrl.push(response?.url)
            })
          } else {
            UpdatedUrl.push(temp_doc[index]?.pdf)
          }
        }
        if ((index+1==temp_doc.length)) {
          var filterValue: any = {
            Amount: [],
            Number: [],
            Documents: []
          }
          var tempPipo: any = [];
          var P102_DATA: any = [];
          this.SELECT_bankreferencenumber.forEach(element => {
            const tempfilter = this.Blcopyref.filter((item: any) => item?.blcopyrefNumber.includes(element));
            tempfilter.forEach((filterItem) => {
              P102_DATA.push(filterItem?._id);
              filterValue['Amount'].push(filterItem?.amount)
              filterValue['Number'].push(filterItem?.blcopyrefNumber)
              filterValue['Documents'].push(filterItem?.doc)
              tempPipo.push(filterItem?.pipo[0]?._id)
            })
          });
          approval_data = {
            id: 'IRDR' + '_' + UniqueId,
            tableName: 'Inward-Remitance-Dispoal-Realization',
            deleteflag: '-1',
            userdetails: this.USER_DATA,
            status: 'pending',
            documents: UpdatedUrl,
            Types: 'downloadPDF',
            TypeOfPage: 'Transaction',
            FileType: this.USER_DATA?.sideMenu,
            SendMailData: filterValue,
          }
          var updatedata: any = this.Inward_Remittance_MT103[this.Inward_Remittance_MT103.length - 1];
          updatedata['documents'] = UpdatedUrl;
          updatedata['extradata'] = P102_DATA;
          console.log(approval_data, this.mainDoc, this.selectPIPO, this.item3, updatedata, 'approval_data')
          if (Status == '' || Status == null || Status == 'Rejected') {
            this.AprrovalPendingRejectService.DownloadByRole_Transaction_Type(this.USER_DATA['RoleCheckbox'], approval_data, () => {
              var data: any = {
                data: updatedata,
                TypeTransaction: 'Inward-Remitance-Dispoal-Realization',
                fileType: 'Export',
                UserDetails: approval_data?.id,
                pipo: tempPipo,
                UniqueId: approval_data?.id
              }
              this.documentService.addExportBillLodgment(data).subscribe((res1: any) => {
                console.log(res1, 'addExportBillLodgment')
                let updatedData = {
                  "TransactionRef": [
                    res1._id,
                  ]
                }
                this.userService.updateManyPipo(tempPipo, 'export', '', updatedData).subscribe((data) => {
                  console.log('king123');
                  console.log(data);
                  this.router.navigate(['/home/dashboardTask'])
                }, (error) => {
                  console.log('error');
                });
              });
            });
          }
        }
      }
     
    } else {
      if (this.value != '' && this.value != null) {
        temp_doc[0] = {name:'Bank format',pdf:'data:application/pdf;base64,' + this.value};
        temp_doc[1] = {name:'Inward_Remittance_MT103',pdf:this.Inward_Remittance_MT103[this.Inward_Remittance_MT103.length - 1]?.file};
      } else {
        temp_doc[0] ={name:'Inward_Remittance_MT103',pdf:this.Inward_Remittance_MT103[this.Inward_Remittance_MT103.length - 1]?.file};
      }
      for (let index = 0; index < this.mainDoc[0].length; index++) {
        temp_doc.push({name:'documents'+(index+1),pdf:this.mainDoc[0][index]?.changingThisBreaksApplicationSecurity})
      }
      for (let index = 0; index < temp_doc.length; index++) {
        if (temp_doc[index]?.pdf != '' && temp_doc[index]?.pdf != undefined) {
          if (temp_doc[index]?.pdf.indexOf('data:application/pdf;base64,') != -1) {
            await this.userService?.UploadS3Buket({
              fileName: temp_doc[index]?.name + '.pdf', buffer: temp_doc[index]?.pdf,
              type: 'application/pdf'
            }).subscribe((response: any) => {
              console.log(response, 'response')
              UpdatedUrl.push(response?.url)
            })
          } else {
            UpdatedUrl.push(temp_doc[index]?.pdf)
          }
        }
        if ((index+1==temp_doc.length)) {
          approval_data = {
            id: 'Inward_Remitance_Dispoal' + '_' + UniqueId,
            tableName: 'Inward-Remitance-Dispoal',
            deleteflag: '-1',
            userdetails: this.USER_DATA,
            status: 'pending',
            documents: UpdatedUrl,
            Types: 'downloadPDF',
            TypeOfPage: 'Transaction',
            FileType: this.USER_DATA?.sideMenu,
          }
          var tempPipo: any = [];
          for (let index = 0; index < this.selectPIPO.length; index++) {
            var findPipo: any = this.item3.filter((item: any) => item?.pi_poNo.indexOf(this.selectPIPO[index]) != -1)
            tempPipo.push(findPipo[0]?._id)
          }
          var updatedata: any = this.Inward_Remittance_MT103[this.Inward_Remittance_MT103.length - 1];
          updatedata['documents'] = UpdatedUrl;
          console.log(approval_data, this.mainDoc, this.selectPIPO, this.item3, updatedata, 'approval_data')
          if (Status == '' || Status == null || Status == 'Rejected') {
            this.AprrovalPendingRejectService.DownloadByRole_Transaction_Type(this.USER_DATA['RoleCheckbox'], approval_data, () => {
              var data: any = {
                data: updatedata,
                TypeTransaction: 'Inward-Remitance-Dispoal',
                fileType: 'Export',
                UserDetails: approval_data?.id,
                pipo: tempPipo,
                UniqueId: approval_data?.id
              }
              this.documentService.addExportBillLodgment(data).subscribe((res1: any) => {
                console.log(res1, 'addExportBillLodgment')
                let updatedData = {
                  "TransactionRef": [
                    res1._id,
                  ]
                }
                this.userService.updateManyPipo(tempPipo, 'export', '', updatedData).subscribe((data) => {
                  console.log('king123');
                  console.log(data);
                  this.router.navigate(['/home/dashboardTask'])
                }, (error) => {
                  console.log('error');
                });
              });
            });
          }
        }
      }
    }
    console.log(UniqueId, approval_data, 'uiiiiiiiiiiiiii')
  }

 async SendApproval_2(Status: string, UniqueId: any, code: any) {
    var temp_doc: any = [];
    var approval_data: any = [];
    this.checkapproval('IRDR').then(async (res) => {
      if (code == 'P0102') {
        temp_doc[0] = this.Inward_Remittance_MT103[this.Inward_Remittance_MT103.length - 1]?.file;
        var filterValue: any = {
          Amount: [],
          Number: [],
          Documents: []
        }
        var tempPipo: any = [];
        var P102_DATA: any = [];
        this.SELECT_bankreferencenumber.forEach(element => {
          const tempfilter = this.Blcopyref.filter((item: any) => item?.blcopyrefNumber.includes(element));
          tempfilter.forEach((filterItem) => {
            P102_DATA.push(filterItem?._id);
            filterValue['Amount'].push(filterItem?.amount)
            filterValue['Number'].push(filterItem?.blcopyrefNumber)
            filterValue['Documents'].push(filterItem?.doc)
            tempPipo.push(filterItem?.pipo[0]?._id)
          })
        });
        approval_data = {
          id: 'IRDR' + '_' + UniqueId,
          tableName: 'Inward-Remitance-Dispoal-Realization',
          deleteflag: '-1',
          userdetails: this.USER_DATA,
          status: 'pending',
          documents: temp_doc,
          Types: 'downloadPDF',
          TypeOfPage: 'Transaction',
          FileType: this.USER_DATA?.sideMenu,
          SendMailData: filterValue,
        }
        var updatedata: any = this.Inward_Remittance_MT103[this.Inward_Remittance_MT103.length - 1];
        updatedata['documents'] = temp_doc;
        updatedata['extradata'] = P102_DATA;
        console.log(approval_data, this.mainDoc, this.selectPIPO, this.item3, updatedata, P102_DATA, 'approval_data')
        if (Status == '' || Status == null || Status == 'Rejected') {
          this.AprrovalPendingRejectService.DownloadByRole_Transaction_Type(this.USER_DATA['RoleCheckbox'], approval_data, () => {
            var data: any = {
              data: updatedata,
              TypeTransaction: 'Inward-Remitance-Dispoal-Realization',
              fileType: 'Export',
              UserDetails: approval_data?.id,
              pipo: tempPipo,
              UniqueId: approval_data?.id
            }
            console.log(UniqueId, approval_data, data, 'uiiiiiiiiiiiiii')
            this.documentService.addExportBillLodgment(data).subscribe((res1: any) => {
              console.log(res1, 'addExportBillLodgment')
              let updatedData = {
                "TransactionRef": [
                  res1._id,
                ]
              }
              this.userService.updateManyPipo(tempPipo, 'export', '', updatedData).subscribe((data) => {
                console.log('king123');
                console.log(data);
                this.router.navigate(['/home/dashboardTask'])
              }, (error) => {
                console.log('error');
              });
            });
          });
        }
      }
    });

  }
  checkapproval(name: any) {
    return new Promise((resolve, reject) => {
      this.documentService.getApprovedData(name + '_' + this.Inward_Remittance_MT103[this.Inward_Remittance_MT103.length - 1]?._id).subscribe((res: any) => {
        console.log(res, 'dsdsdsdsdsdsds');
        if (res.length == 0) {
          resolve(true)
        } else {
          reject(false);
          this.CustomConfirmDialogModel.Confirm_DialogModel("Apporval Status", 'Already you send for Apporval');
        }
      })
    })
  }


}


