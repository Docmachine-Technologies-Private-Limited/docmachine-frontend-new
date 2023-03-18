"use strict";
(self["webpackChunkdm_frontend"] = self["webpackChunkdm_frontend"] || []).push([[426],{

/***/ 88324:
/*!***********************************************************!*\
  !*** ./src/app/home/edpms-recon/edpms-recon.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EdpmsReconComponent": () => (/* binding */ EdpmsReconComponent)
/* harmony export */ });
/* harmony import */ var D_Bharathexim_Repo_docmachine_frontend_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 8239);
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/user.service */ 84981);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 91786);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 65857);
/* harmony import */ var src_app_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.config */ 49670);
/* harmony import */ var src_app_service_document_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/document.service */ 76852);
/* harmony import */ var src_app_service_window_information_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/window-information.service */ 23087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 64537);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7976);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 88692);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 20092);
/* harmony import */ var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-dropzone-wrapper */ 48020);


















function EdpmsReconComponent_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const acc_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", acc_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](acc_r3);
  }
}

function EdpmsReconComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15)(1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "EDPMS Upload Progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("width", ctx_r1.width + "%");
  }
}

function EdpmsReconComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 18)(1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EdpmsReconComponent_div_24_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.compareEDPMS());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Compare");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}

let EdpmsReconComponent = /*#__PURE__*/(() => {
  class EdpmsReconComponent {
    constructor(userService, appconfig, documentService, router, wininfo) {
      this.userService = userService;
      this.appconfig = appconfig;
      this.documentService = documentService;
      this.router = router;
      this.wininfo = wininfo;
      this.uploading = false;
      this.uploaded = false;
      this.documentType = '';
      this.benneDetail = [];
      this.buyerDetail = [];
      this.width = 0;
      this.bankAccounts = [];
      this.bankSelection = "";
      this.disableUpload = true;

      this.fileInputClick = event => {
        // Open file dialog
        if (this.disableUpload) {
          return true;
        } // Do not open file dialog
        else {
          event.preventDefault();
          event.stopPropagation();
          return false;
        }
      };

      this.api_base = appconfig.apiUrl;
      this.loadFromLocalStorage();
      this.headers = {
        Authorization: this.authToken
      };
      this.config3 = {
        url: `${this.api_base}/documents/uploadFile3`,
        method: `POST`,
        maxFiles: 1,
        maxFilesize: 5,
        addRemoveLinks: true,
        headers: this.headers,
        timeout: 820000,
        // autoProcessQueue: false,
        dictDefaultMessage: "Drag a document here",
        acceptedFiles: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",
        previewTemplate: '<div  class="dz-preview dz-file-preview" style="text-align: right; margin-right:3px;">\n <div class="dz-image" style="text-align: right; margin-right:3px;"> <img data-dz-thumbnail /></div>\n <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <i style="color: red; text-align: center;font-size: 30px;" class="fa fa-exclamation-circle"></i>\n  </div>\n</div>'
      };
    }

    loadFromLocalStorage() {
      const token = localStorage.getItem("token");
      this.authToken = token;
      return this.authToken;
    }

    getUserID() {
      var _this = this;

      return (0,D_Bharathexim_Repo_docmachine_frontend_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const data = yield _this.userService.getUserDetail();
        _this.applicant = data.result?.companyId;
      })();
    }

    ngOnInit() {
      this.wininfo.set_controller_of_width(270, '.content-wrap');
      this.userService.getTeam().subscribe(res => {
        this.masterTeam = res?.data[0]?.bankDetails;
        this.masterTeam.forEach(acc => this.bankAccounts.push(acc?.bank));
        console.log('banks:', this.bankAccounts);
      }, err => {
        console.log(err);
      });
      this.getUserID();
      this.documentService.getBlcopyref().subscribe(res => {
        this.blMaster = res?.data;
      }, err => {
        console.log(err);
      });
      this.documentService.getAllExport("hhh").subscribe(res => {
        this.tasksMaster = res?.data;
        console.log('tasksMaster:', this.tasksMaster);
      }, err => console.log(err));
      this.documentService.getMaster(1).subscribe(res => {
        this.masterSB = res?.data;
        console.log('getMaster:', res);
      }, err => {
        console.log(err);
      });
      this.documentService.getPipo().subscribe(res => {
        this.masterPIPO = res?.data;
        console.log('getPipo:', res);
      }, err => {
        console.log(err);
      });
      this.documentService.getIrAdvice('').subscribe(res => {
        this.masterIR = res?.data;
        console.log('getIrAdvice:', res);
      }, err => {
        console.log(err);
      });
    }

    chooseBank() {
      if (this.bankSelection && this.bankSelection !== "") {
        this.disableUpload = false;
      } else {
        this.disableUpload = true;
      }
    }

    saveData() {
      this.documentService.createEDPMS(this.preparePayload()).subscribe(res => {
        console.log('create edpms res: ', res);
        this.router.navigateByUrl('/home/edpms-recon-table');
      }, err => {
        console.log('create EDPMS error: ', err);
      });
    }

    preparePayload() {
      let payload = [];
      this.masterExcelData.forEach(item => {
        const tempObject = {
          userId: this.applicant,
          bank: this.bankSelection,
          sbNo: item['Shipping Bill No'],
          sbDate: new Date((item['Shipping Bill Date'] - 25569) * 24 * 60 * 60 * 1000),
          adCode: item['AD Code'],
          portCode: item['Port Code'],
          edpmsStatus: item['STATUS'],
          adRefNo: item['adBillNo'],
          sbAmount: item['sbAmount'],
          sbBalanceAmount: this.getSBbalanceAmount(item['pipo'], item['sbAmount']),
          sbCurrency: item['sbCurrency'],
          statusMeaning: this.getStatusMeaning(item['STATUS']),
          systemStatus: this.getSystemStatus(item['systemStatus'], item['pipo'], item['sbAmount'], item['Shipping Bill No']),
          docAvailable: item['systemStatus'] === 'Available' ? true : false,
          action: this.getAction(item['systemStatus'])
        };
        payload.push(tempObject);
      });
      return payload;
    }

    getSystemStatus(status, pipo, sbAmount, sbNo) {
      if (!(status === 'Available')) {
        return 'DOC NOT AVAILABLE IN SYSTEM';
      } else if (this.getSBbalanceAmount(pipo, sbAmount) > 0) {
        return 'PARTIALLY REALISED';
      } else if (this.checkIfBLDone(pipo)) {
        return 'SUBMITTED & BANK REF NO. RECEIVED';
      } else if (this.checkifDownloaded(sbNo)) {
        return 'SUBMITTED BUT BANK REF NOT RECEIVED';
      } else {
        return 'NOT SUBMITTED TO BANK';
      }
    }

    checkifDownloaded(sbNo) {
      if (this.tasksMaster?.some(task => task?.task?.some(t => t?.sbNumbers?.contains(sbNo)))) {
        return true;
      } else {
        return false;
      }
    }

    checkIfBLDone(pipo) {
      if (this.blMaster.some(bl => bl?.pipo?.contains(pipo))) {
        return true;
      } else {
        return false;
      }
    }

    getAction(status) {
      let actionStatus = [];

      if (!(status === 'Available')) {
        actionStatus.push('Upload Documents');
      } else {
        actionStatus.push('Create Documents', 'Netoff/Setoff', 'ETX/Writeoff');
      }

      return actionStatus;
    }

    getSBbalanceAmount(pipo, total) {
      let paidAmount = 0;
      this.masterIR.forEach(ir => {
        if (pipo === ir?.pipo[0]) {
          paidAmount = paidAmount + parseInt(ir?.amount, 10);
        }
      });
      return parseInt(total, 10) - paidAmount;
    }

    getStatusMeaning(status) {
      if (status === 'PARTIALLY_PAID') {
        return 'Lodgement done but partially realised';
      } else if (status === 'PENDING_AD_ACK') {
        return 'Lodgement not done';
      } else if (status === 'PENDING_PAYMENT') {
        return 'Lodgement done';
      } else {
        return 'EDPMS Status is not clear';
      }
    }

    onUploadError(args) {
      this.uploading = false;
      console.log("onUploadError:", args, args[1].message);
    }

    onUploadInit(args) {
      console.log("onUploadInit:", args);
    }

    onUploadSuccess(args) {
      this.uploading = false;
      this.uploaded = true;
      console.log("onUploadSuccess ARGS", args);
      this.masterExcelData = args[1].data;
      console.log("onUploadSuccess DATA", this.masterExcelData);
    }

    compareEDPMS() {
      this.gatherSBdata();
      this.saveData();
    }

    gatherSBdata() {
      this.masterExcelData.forEach((data, i) => {
        var index = -1;

        for (let j = 0; j < this.masterSB.length; j++) {
          if (this.masterSB[j] && this.masterSB[j].sbno && this.masterSB[j].sbno == data['Shipping Bill No']) {
            index = j;
            break;
          }
        } // const index = this.masterSB.findIndex( sb => sb?.sbno === data['Shipping Bill No']);


        console.log("index:", index);

        if (index !== -1) {
          this.masterExcelData[i]['systemStatus'] = 'Available';
          this.masterExcelData[i]['sbAmount'] = this.masterSB[index]?.fobValue;
          this.masterExcelData[i]['sbCurrency'] = this.masterSB[index]?.fobCurrency;
          this.masterExcelData[i]['adBillNo'] = this.masterSB[index]?.adBillNo;
          this.masterExcelData[i]['pipo'] = this.masterSB[index]?.pipo[0];
        } else {
          this.masterExcelData[i]['systemStatus'] = 'NOT_AVAILABLE';
        }
      });
      console.log('this.masterExcelData', this.masterExcelData);
    }

    submit(args) {
      this.uploading = true;
      console.log('submit: ', args);
      this.size = this.formatBytes(args[0].size); //document.getElementById("uploadError").style.display = "none";

      this.runProgressBar(args[0].size);
    }

    formatBytes(bytes) {
      if (bytes < 1024) {
        return bytes + " Bytes";
      } else if (bytes < 1048576) {
        return (bytes / 1024).toFixed(3) + " KB";
      } else if (bytes < 1073741824) {
        return (bytes / 1048576).toFixed(3) + " MB";
      } else {
        return (bytes / 1073741824).toFixed(3) + " GB";
      }
    }

    runProgressBar(value) {
      console.log(value / 1500);
      (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.timer)(0, value / 2500).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeWhile)(() => this.isWidthWithinLimit())).subscribe(() => {
        this.width = this.width + 1;
      });
      this.userService.getBene(1).subscribe(res => {
        this.benneDetail = res.data;
      }, err => console.log("Error", err));
      this.userService.getBuyer(1).subscribe(res => {
        this.buyerDetail = res.data;
      }, err => console.log("Error", err));
    }

    isWidthWithinLimit() {
      if (this.width === 100) {
        return false;
      } else {
        return true;
      }
    }

  }

  EdpmsReconComponent.ɵfac = function EdpmsReconComponent_Factory(t) {
    return new (t || EdpmsReconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_app_config__WEBPACK_IMPORTED_MODULE_2__.AppConfig), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_document_service__WEBPACK_IMPORTED_MODULE_3__.DocumentService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_window_information_service__WEBPACK_IMPORTED_MODULE_4__.WindowInformationService));
  };

  EdpmsReconComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: EdpmsReconComponent,
    selectors: [["app-edpms-recon"]],
    decls: 25,
    vars: 6,
    consts: [[1, "content-wrap", "pb-2", "scroll-bar-main"], ["id", "content", "role", "main", 1, "content", "table-padding"], [1, "heading"], [2, "flex-direction", "row", "font-size", "20px", "margin-top", "10px", ";color", "#303030"], [2, "display", "flex", "align-items", "center", 3, "ngModel", "ngModelChange"], ["value", "", "disabled", "", "hidden", ""], ["style", "min-width:100%;", 3, "value", 4, "ngFor", "ngForOf"], [1, "heading2"], ["method", "POST", 1, "form"], ["type", "file", "id", "dropzone", 1, "dropzone", "dropzone-container", 3, "dropzone", "error", "init", "success", "sending", "click"], [1, "fas", "fa-file-upload"], ["type", "submit"], ["class", "progressbar", 4, "ngIf"], ["style", "text-align:center; margin-top: 20px", 4, "ngIf"], [2, "min-width", "100%", 3, "value"], [1, "progressbar"], [1, "processheading"], [1, "meter"], [2, "text-align", "center", "margin-top", "20px"], [3, "click"]],
    template: function EdpmsReconComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "main", 1)(2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "New EDPMS Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Select Bank*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function EdpmsReconComponent_Template_select_ngModelChange_6_listener($event) {
          return ctx.bankSelection = $event;
        })("ngModelChange", function EdpmsReconComponent_Template_select_ngModelChange_6_listener() {
          return ctx.chooseBank();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Select Bank");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, EdpmsReconComponent_option_9_Template, 2, 2, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Upload EDPMS Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 8)(13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("error", function EdpmsReconComponent_Template_input_error_13_listener($event) {
          return ctx.onUploadError($event);
        })("init", function EdpmsReconComponent_Template_input_init_13_listener($event) {
          return ctx.onUploadInit($event);
        })("success", function EdpmsReconComponent_Template_input_success_13_listener($event) {
          return ctx.onUploadSuccess($event);
        })("sending", function EdpmsReconComponent_Template_input_sending_13_listener($event) {
          return ctx.submit($event);
        })("click", function EdpmsReconComponent_Template_input_click_13_listener($event) {
          return ctx.fileInputClick($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Drag and Drop files here to upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Files Supported: XLSX");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Choose File");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Maximum Size: 5MB");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, EdpmsReconComponent_div_23_Template, 5, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, EdpmsReconComponent_div_24_Template, 3, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.bankSelection);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.bankAccounts);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dropzone", ctx.config3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("disabled", ctx.disableUpload ? "" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.uploading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.uploaded);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_11__.DropzoneDirective],
    styles: ["*[_ngcontent-%COMP%] {\n  font-family: \"EuropaNuova-Regular\", sans-serif !important;\n  background-color: white;\n}\n\n.heading[_ngcontent-%COMP%] {\n  font-family: \"EuropaNuova-Regular\", sans-serif !important;\n  font-size: 20px;\n  font-weight: 400;\n  color: #323E4A;\n  padding-bottom: 10px !important;\n  margin-bottom: 5px !important;\n  border-bottom: 1px solid #eaedf3;\n}\n\n.content-wrap[_ngcontent-%COMP%] {\n  margin-left: 300px;\n  margin-top: 100px;\n}\n\n.customDropdown[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  padding-left: 12px;\n  padding-right: 10px;\n  height: 24px;\n  border-radius: 2px;\n  border: 1px solid black;\n  cursor: pointer;\n  z-index: 1;\n}\n\n.customDropdown[_ngcontent-%COMP%]:hover {\n  color: #4b74ff !important;\n}\n\n.customDropdown[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  font-size: 14px;\n  padding-left: 12px;\n  padding-right: 10px;\n  height: 24px;\n  border-radius: 2px;\n  border: 1px solid black;\n  margin-right: 12px;\n  cursor: pointer;\n  z-index: 1;\n}\n\n.customDropdown[_ngcontent-%COMP%]:hover {\n  color: #4b74ff !important;\n}\n\n.dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  border: 0.01em solid black;\n  background: white;\n  transform: translate(-14px, -1px);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  cursor: pointer;\n  padding: 0px 6px;\n  color: #000000;\n  height: 24px;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #49a2d7;\n  color: white;\n}\n\n.customDropdown[_ngcontent-%COMP%]   .dropIco[_ngcontent-%COMP%] {\n  margin-left: 7px;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #000000;\n}\n\n.customDropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.customDropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.fas[_ngcontent-%COMP%] {\n  font-family: \"Font Awesome 5 Free\" !important;\n}\n\n.heading2[_ngcontent-%COMP%] {\n  font-family: \"EuropaNuova-Regular\", sans-serif !important;\n  font-size: 20px;\n  font-weight: 400;\n  color: #323E4A;\n  padding-bottom: 10px !important;\n  margin-bottom: 5px !important;\n  margin-top: 30px;\n}\n\n.form[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-right: 5%;\n  top: 50%;\n  left: 50%;\n  width: 82%;\n  height: 300px;\n  background-color: white;\n  border: 2px dashed rgba(0, 0, 0, 0.2);\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 2%;\n}\n\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-family: \"EuropaNuova-Regular\", sans-serif !important;\n  position: absolute;\n  margin: 0;\n  width: 75%;\n  height: 221px;\n  padding: 0;\n  outline: none;\n  opacity: 0;\n}\n\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 400;\n  border: none;\n  height: 52px;\n  width: 160px;\n  background-color: #ebebeb;\n  padding-top: 1%;\n  padding-bottom: 1%;\n  border-radius: 6px;\n  color: rgba(0, 0, 0, 0.6);\n  outline: none;\n  margin-bottom: 2px;\n}\n\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #149174;\n  color: #0c5645;\n}\n\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  border: 0;\n}\n\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  border: 0;\n}\n\n.form[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 35px;\n  color: rgba(0, 0, 0, 0.2);\n  margin-bottom: 2%;\n}\n\n.meter[_ngcontent-%COMP%] {\n  margin-left: 35px;\n  width: 80%;\n  height: 4px;\n  \n  position: relative;\n  background: #d8d8d8;\n  border-radius: 25px;\n  box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3);\n}\n\n.meter[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  border-top-right-radius: 20px;\n  border-bottom-right-radius: 20px;\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n  background-color: #2992fc;\n  background-image: linear-gradient(center bottom, rgb(43, 194, 83) 37%, rgb(84, 240, 84) 69%);\n  box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3), inset 0 -2px 6px rgba(0, 0, 0, 0.4);\n  position: relative;\n  overflow: hidden;\n}\n\n.progressbar[_ngcontent-%COMP%] {\n  height: 53px;\n  margin-top: 60px;\n}\n\n.processheading[_ngcontent-%COMP%] {\n  padding-left: 30px;\n}\n\n*[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.heading[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 20px;\n  font-weight: 700;\n  margin-left: 23px;\n  color: #323e4a;\n}\n\n.table-heading[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 500;\n  color: #747474;\n}\n\n.box-shadow[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n\n.table-padding[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fff;\n  border-radius: 10px;\n  margin: 0;\n  box-shadow: 0 2px 10px rgba(58, 53, 65, 0.1019607843);\n}\n\n.upload-button[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n  font-weight: 100;\n  font-family: Poppins, sans-serif;\n  padding: 5px 8px;\n  font-size: 14px;\n  background-color: #49A2D7;\n  border: none;\n  border-radius: 5px;\n  margin-left: 2px;\n  margin-right: 2rem;\n}\n\nbutton[_ngcontent-%COMP%] {\n  outline: none;\n}\n\n.table-row[_ngcontent-%COMP%] {\n  background-color: #ffffff !important;\n  color: #707683;\n  border-left: 2px solid #fff;\n}\n\n.table-row[_ngcontent-%COMP%]:hover {\n  background: #f6f9ff !important;\n  border-left: 2px solid #49a2d7;\n}\n\nselect[_ngcontent-%COMP%] {\n  text-decoration: none;\n  border: none;\n  background: none;\n  color: #49a2d7;\n}\n\nselect[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.rect[_ngcontent-%COMP%] {\n  text-align: right;\n  min-width: 80px !important;\n}\n\n.sb-no[_ngcontent-%COMP%] {\n  color: #49a2d7;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  height: 68px;\n  vertical-align: middle !important;\n}\n\n.image[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  margin-top: 12fvpx;\n}\n\n.image2[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  margin-left: -13px;\n}\n\n.fl[_ngcontent-%COMP%] {\n  float: \"left\";\n}\n\n.fr[_ngcontent-%COMP%] {\n  float: \"right\";\n}\n\nspan.fs20[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\nspan.fs16[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\np.fs14[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.fs12[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.p-4[_ngcontent-%COMP%] {\n  padding: 4px;\n}\n\n.p-8[_ngcontent-%COMP%] {\n  z-index: 5000;\n  transform: scale(1, 1);\n  display: grid;\n  grid-template-columns: 29% 70%;\n}\n\n.p-20[_ngcontent-%COMP%] {\n  padding: 20px !important;\n}\n\n.p-12[_ngcontent-%COMP%] {\n  padding: 12px !important;\n}\n\n.p-16[_ngcontent-%COMP%] {\n  padding: 16px !important;\n}\n\n.pr-4[_ngcontent-%COMP%] {\n  padding-right: 4px;\n}\n\n.pr-8[_ngcontent-%COMP%] {\n  padding-right: 8px !important;\n}\n\n.pr-16[_ngcontent-%COMP%] {\n  padding-right: 16px;\n}\n\n.pt-30[_ngcontent-%COMP%] {\n  padding-top: 30px !important;\n}\n\n.pt-28[_ngcontent-%COMP%] {\n  padding-top: 28px !important;\n}\n\n.pt-25[_ngcontent-%COMP%] {\n  padding-top: 25px !important;\n}\n\n.pt-24[_ngcontent-%COMP%] {\n  padding-top: 24px !important;\n}\n\n.pt-22[_ngcontent-%COMP%] {\n  padding-top: 22px !important;\n}\n\n.pt-20[_ngcontent-%COMP%] {\n  padding-top: 20px !important;\n}\n\n.pt-19[_ngcontent-%COMP%] {\n  padding-top: 19px !important;\n}\n\n.pt-16[_ngcontent-%COMP%] {\n  padding-top: 16px !important;\n}\n\n.pt-14[_ngcontent-%COMP%] {\n  padding-top: 14px !important;\n}\n\n.pt-10[_ngcontent-%COMP%] {\n  padding-top: 10px !important;\n}\n\n.pt-8[_ngcontent-%COMP%] {\n  padding-top: 8px !important;\n}\n\n.pt-4[_ngcontent-%COMP%] {\n  padding-top: 4px;\n}\n\n.pt-2[_ngcontent-%COMP%] {\n  padding-top: 2px;\n}\n\n.pt-0[_ngcontent-%COMP%] {\n  padding-top: 0px !important;\n}\n\n.pb-28[_ngcontent-%COMP%] {\n  padding-bottom: 28px !important;\n}\n\n.pb-16[_ngcontent-%COMP%] {\n  padding-bottom: 16px !important;\n}\n\n.pv-4[_ngcontent-%COMP%] {\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n\n.pv-8[_ngcontent-%COMP%] {\n  padding-top: 8px !important;\n  padding-bottom: 8px !important;\n}\n\n.pv-10[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.pv-20[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.pv-14[_ngcontent-%COMP%] {\n  padding-top: 14px !important;\n  padding-bottom: 14px !important;\n}\n\n.pv-16[_ngcontent-%COMP%] {\n  padding-top: 16px !important;\n  padding-bottom: 16px !important;\n}\n\n.ph-5[_ngcontent-%COMP%] {\n  padding-right: 5px !important;\n  padding-left: 5px !important;\n}\n\n.ph-16[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n.ph-8[_ngcontent-%COMP%] {\n  padding-left: 8px !important;\n  padding-right: 8px !important;\n}\n\n.ph-10[_ngcontent-%COMP%] {\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n}\n\n.ph-4[_ngcontent-%COMP%] {\n  padding-left: 4px;\n  padding-right: 4px;\n}\n\n.ph-32[_ngcontent-%COMP%] {\n  padding-left: 32px;\n  padding-right: 32px;\n}\n\n.ph-38[_ngcontent-%COMP%] {\n  padding-left: 38px;\n  padding-right: 38px;\n}\n\n.ph-44[_ngcontent-%COMP%] {\n  padding-left: 44px;\n  padding-right: 44px;\n}\n\n.bb[_ngcontent-%COMP%] {\n  border-bottom: 0.1px solid #d3d3d3;\n  border-right: 0.1px solid #d3d3d3;\n}\n\n.bc[_ngcontent-%COMP%] {\n  background-color: #f8fafd;\n}\n\n.bcw[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #323e4a !important;\n}\n\n\n\n\n\n.m-4[_ngcontent-%COMP%] {\n  margin: 4px !important;\n}\n\n.m-8[_ngcontent-%COMP%] {\n  margin: 8px !important;\n}\n\n.m-16[_ngcontent-%COMP%] {\n  margin: 16px !important;\n}\n\n.mr-20[_ngcontent-%COMP%] {\n  margin-right: 20px !important;\n}\n\n.mr-8[_ngcontent-%COMP%] {\n  margin-right: 8px !important;\n}\n\n.ml-20[_ngcontent-%COMP%] {\n  margin-left: 20px !important;\n}\n\n.ml-24[_ngcontent-%COMP%] {\n  margin-left: 24px !important;\n}\n\n.mt-4[_ngcontent-%COMP%] {\n  margin-top: 4px !important;\n}\n\n.mt-8[_ngcontent-%COMP%] {\n  margin-top: 8px !important;\n}\n\n.mt-16[_ngcontent-%COMP%] {\n  margin-top: 16px !important;\n}\n\n.mt-24[_ngcontent-%COMP%] {\n  margin-top: 24px !important;\n}\n\n.mt-38[_ngcontent-%COMP%] {\n  margin-top: 38px !important;\n}\n\n.mh-8[_ngcontent-%COMP%] {\n  margin-left: 8px !important;\n  margin-right: 8px !important;\n}\n\n.mh-16[_ngcontent-%COMP%] {\n  margin-left: 16px !important;\n  margin-right: 16px !important;\n}\n\n.mv-4[_ngcontent-%COMP%] {\n  margin-top: 4px !important;\n  margin-bottom: 4px !important;\n}\n\n.mv-16[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  margin-bottom: 16px;\n}\n\n.mv-24[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  margin-bottom: 24px;\n}\n\n.mh--16[_ngcontent-%COMP%] {\n  margin-left: -16px !important;\n  margin-right: -16px !important;\n}\n\n.mh-8[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n.w100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.w70[_ngcontent-%COMP%] {\n  width: 70%;\n}\n\n.w50[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.w30[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.pc1[_ngcontent-%COMP%] {\n  width: 44.5%;\n  height: 35px;\n  float: right;\n  border-left: 1px solid rgb(104, 103, 103);\n}\n\n.tabbed[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  \n  background-color: #f8fafd;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding-right: 28px;\n  padding-left: 32px;\n}\n\n.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  \n  display: none;\n}\n\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  list-style: none;\n  background-color: white;\n  height: 100%;\n  padding: 1% 0;\n  padding-left: 30px;\n  margin-left: -30px;\n  width: 113%;\n}\n\n.tabs[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.tab[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 10px;\n  padding-right: 12px;\n  color: #606670;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-right: 10px;\n  border-right: 1px solid black;\n}\n\n.tab[_ngcontent-%COMP%]:hover   label[_ngcontent-%COMP%] {\n  border-top-color: #333;\n  color: #333;\n}\n\n.tab-content[_ngcontent-%COMP%] {\n  display: none;\n  color: #777;\n  background: #f8fafd;\n  margin: 10px !important;\n}\n\n\n\n.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(1):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(1)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(2):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(2)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(3):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(3)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(4):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(4)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(5):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(5)   label[_ngcontent-%COMP%] {\n  color: #49a2d7;\n  margin-right: 10px;\n}\n\n.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(1):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(1), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(2):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(2), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(3):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(3), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(4):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(4) {\n  display: block;\n}\n\n.hhu[_ngcontent-%COMP%]:active, .hhu[_ngcontent-%COMP%]:focus {\n  border: 2px solid red;\n}\n\n.form[_ngcontent-%COMP%] {\n  margin-left: 38px !important;\n  margin-right: 5%;\n  top: 50%;\n  left: 50%;\n  height: 316px;\n  background-color: white;\n  border: 1px dashed rgba(0, 0, 0, 0.4);\n}\n\n.form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif !important;\n  text-align: center;\n  line-height: 30px;\n  color: #303030;\n}\n\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-family: \"EuropaNuova-Regular\", sans-serif !important;\n  position: absolute;\n  margin: 0;\n  width: 89%;\n  height: 313px;\n  padding: 0;\n  outline: none;\n  cursor: pointer;\n  opacity: 0;\n}\n\n.form[_ngcontent-%COMP%]   .form_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  margin-left: 36.5%;\n  height: 42px;\n  cursor: pointer;\n  width: 160px;\n  background-color: #49a2d7;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #149174;\n  color: #0c5645;\n}\n\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  border: 0;\n}\n\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.xbutton[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #49a2d7;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.ybutton[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #0c354d;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.zbutton[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #947551;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.border1[_ngcontent-%COMP%] {\n  border-left: 3px solid #174d72;\n}\n\n.border2[_ngcontent-%COMP%] {\n  border-left: 3px solid #5fe6e7;\n}\n\n.border3[_ngcontent-%COMP%] {\n  border-left: 3px solid #e7845f;\n}\n\n.form-wrapper1[_ngcontent-%COMP%] {\n  flex-direction: column;\n  width: 100%;\n}\n\n.form-wrapper1[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 5.5%;\n}\n\n.form-wrapper1.td[_ngcontent-%COMP%] {\n  width: 100%;\n  width: 7%;\n}\n\n.full-input[_ngcontent-%COMP%] {\n  margin-left: 18px;\n  margin-bottom: 10px;\n  display: inline-block;\n  padding: 3px;\n  height: 74px;\n  width: 177px;\n  background-color: white;\n  border-radius: 5px;\n  box-shadow: 4px 4px 8px 4px #eeeefa;\n}\n\n.smalll-input[_ngcontent-%COMP%] {\n  width: 160px !important;\n  outline: none;\n  border: none;\n  display: block;\n  border-radius: 4px;\n  border: 1px solid #d5dbe8;\n  height: 35px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  padding: 5px 0px 5px 5px;\n  margin-bottom: 0px !important;\n  font-size: 12px;\n  font-weight: 500;\n  color: #72768a;\n}\n\n.sh1[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  margin-top: 15px;\n  font-size: 16px;\n  color: #606670;\n}\n\n.ss[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n\n#customers[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100% !important;\n  margin-left: 19px !important;\n  border-right: 1px solid #ddd;\n  border-left: 1px solid #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  height: 52px !important;\n  text-align: left;\n  font-weight: 300;\n  background-color: #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 52px !important;\n}\n\n.tab1[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  \n  display: inline-block;\n  height: 17px;\n  width: 17px;\n  color: #49a2d7;\n  margin-bottom: 10px;\n}\n\n.tab1[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + input[_ngcontent-%COMP%] {\n  background-color: #bfb;\n  border-color: #4c4;\n}\n\n.label1[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 10px;\n  padding-right: 12px;\n  color: #606670;\n  font-size: 12px;\n  letter-spacing: 1px;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-left: 30px;\n}\n\n.tab1[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.at[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding-right: 20px;\n  padding-left: 10px;\n}\n\n.ctb[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin-left: 210px;\n  background-color: #49a2d7;\n  padding: 12px 30px 11px 30px;\n  color: white;\n  border-radius: 4px;\n  cursor: pointer;\n  font-weight: 500;\n}\n\n.radio1[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  \n  display: inline-block;\n  height: 17px;\n  width: 17px;\n  color: #49a2d7;\n  margin-bottom: 10px;\n  border: 2px solid #49a2d7;\n}\n\n.radio1[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + input[_ngcontent-%COMP%] {\n  background-color: #bfb;\n  border-color: #4c4;\n}\n\n.label1[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 10px;\n  padding-right: 12px;\n  color: #606670;\n  font-size: 12px;\n  letter-spacing: 1px;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-left: 30px;\n}\n\n.radio1[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.stp1[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 500;\n  margin-bottom: 10px;\n  color: black;\n}\n\n.stp2[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin-bottom: 10px;\n  color: black;\n}\n\n.stp3[_ngcontent-%COMP%] {\n  color: #4a4a4a;\n  font-size: 14px;\n}\n\n.of1[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  font: 16px/26px Georgia, Garamond, Serif;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.side_document_list[_ngcontent-%COMP%] {\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 170vh;\n  border-right: 0.3px solid rgba(0, 0, 0, 0.2);\n}\n\n.profile_class[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  border-bottom: 0.3px solid rgba(0, 0, 0, 0.2);\n  padding: 3% 6%;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.activeBtn[_ngcontent-%COMP%] {\n  background-color: #f8fafd;\n  border-left: 8px solid rgb(61, 116, 197);\n}\n\n.table_top[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 29.55% 33% 30% 6%;\n  border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);\n  align-items: center;\n}\n\n.invoices_tab[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  height: 100vh;\n  background-color: #f8fafd;\n}\n\n.invoices_inner[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #f8fafd;\n}\n\n.inner_tab_content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  background-color: white;\n}\n\n.invoice_head[_ngcontent-%COMP%] {\n  width: 95%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 5%;\n}\n\n.serial_detail[_ngcontent-%COMP%] {\n  width: 93%;\n  margin-top: 10px;\n  display: flex;\n  justify-content: right;\n  text-align: right;\n  font-weight: 500;\n}\n\n.transaction_tab[_ngcontent-%COMP%] {\n  width: 770px;\n  height: 1387px;\n}\n\n.form_inner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  justify-content: center;\n}\n\n.opt[_ngcontent-%COMP%] {\n  background-color: #49a2d7;\n  padding: 0 3%;\n  height: 42px;\n  box-shadow: 4px 0px 7px #109cf1;\n  border: none;\n  color: white;\n}\n\n#container[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n.savBtn[_ngcontent-%COMP%] {\n  background-color: #49A2D7;\n  color: white;\n  border: 1px solid rgba(0, 0, 0, 0.4);\n  font-size: 14px;\n  cursor: pointer;\n  border-radius: 2px;\n  width: 60px;\n  margin-left: -2%;\n}\n\n.content-wrap[_ngcontent-%COMP%] {\n  z-index: 0;\n  height: 100vh;\n  position: absolute;\n  left: 260px;\n  margin: auto;\n  width: 78vw;\n  background: transparent;\n}\n\n#container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  min-height: 100%;\n}\n\ntable[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.analytics[_ngcontent-%COMP%]   .support[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.header-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 0.8%;\n  padding-left: 1%;\n  padding-bottom: 0.8%;\n  border-bottom: 1px solid black;\n  width: 99%;\n}\n\nselect[_ngcontent-%COMP%] {\n  text-decoration: none;\n  border: 1px solid;\n  background: none;\n  color: #49a2d7;\n  padding: 5px;\n  border-radius: 5px;\n}"]
  });
  return EdpmsReconComponent;
})();

/***/ }),

/***/ 60426:
/*!********************************************************!*\
  !*** ./src/app/home/edpms-recon/edpms-recon.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EdpmsReconModule": () => (/* binding */ EdpmsReconModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7976);
/* harmony import */ var _confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../confirm-dialog/confirm-dialog.service */ 12579);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 93329);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ 35581);
/* harmony import */ var _shared_Data_Servies_shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared-Data-Servies/shared-data.service */ 10241);
/* harmony import */ var _shared_home_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-home.module */ 69408);
/* harmony import */ var _edpms_recon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edpms-recon.component */ 88324);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 64537);










let EdpmsReconModule = /*#__PURE__*/(() => {
  class EdpmsReconModule {}

  EdpmsReconModule.ɵfac = function EdpmsReconModule_Factory(t) {
    return new (t || EdpmsReconModule)();
  };

  EdpmsReconModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: EdpmsReconModule
  });
  EdpmsReconModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    providers: [_confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialogService, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal, _shared_Data_Servies_shared_data_service__WEBPACK_IMPORTED_MODULE_1__.SharedDataService],
    imports: [_shared_home_module__WEBPACK_IMPORTED_MODULE_2__.SharedHomeModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild([{
      path: "",
      component: _edpms_recon_component__WEBPACK_IMPORTED_MODULE_3__.EdpmsReconComponent,
      pathMatch: "full"
    }]), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__.ModalModule.forRoot()]
  });
  return EdpmsReconModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](EdpmsReconModule, {
    declarations: [_edpms_recon_component__WEBPACK_IMPORTED_MODULE_3__.EdpmsReconComponent],
    imports: [_shared_home_module__WEBPACK_IMPORTED_MODULE_2__.SharedHomeModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__.ModalModule]
  });
})();

/***/ })

}]);