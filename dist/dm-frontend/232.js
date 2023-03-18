"use strict";
(self["webpackChunkdm_frontend"] = self["webpackChunkdm_frontend"] || []).push([[232],{

/***/ 7829:
/*!***********************************************************************!*\
  !*** ./src/app/home/edpms-recon-table/edpms-recon-table.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EdpmsReconTableComponent": () => (/* binding */ EdpmsReconTableComponent)
/* harmony export */ });
/* harmony import */ var _service_document_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/document.service */ 76852);
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/user.service */ 84981);
/* harmony import */ var _service_window_information_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/window-information.service */ 23087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 64537);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7976);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 88692);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 20092);












function EdpmsReconTableComponent_option_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const acc_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", acc_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](acc_r5);
  }
}

function EdpmsReconTableComponent_tr_48_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EdpmsReconTableComponent_tr_48_div_23_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      const act_r9 = restoredCtx.$implicit;
      const row_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.actionEvent(act_r9, row_r6 == null ? null : row_r6.sbNo));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const act_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", act_r9 === "Create Documents" || act_r9 === "Upload Documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](act_r9);
  }
}

function EdpmsReconTableComponent_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 21)(1, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, EdpmsReconTableComponent_tr_48_div_23_Template, 2, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r6 == null ? null : row_r6.sbNo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 11, row_r6 == null ? null : row_r6.sbDate, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r6 == null ? null : row_r6.adCode, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r6 == null ? null : row_r6.portCode, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r6 == null ? null : row_r6.edpmsStatus, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r6 == null ? null : row_r6.adRefNo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r6 == null ? null : row_r6.sbAmount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r6 == null ? null : row_r6.sbBalanceAmount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r6 == null ? null : row_r6.systemStatus, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r6 == null ? null : row_r6.docAvailable, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", row_r6 == null ? null : row_r6.action);
  }
}

function EdpmsReconTableComponent_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 29)(1, "div", 30)(2, "div", 31)(3, "div", 32)(4, "div", 33)(5, "div", 34)(6, "div", 35)(7, "h6", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Debit Note");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "iframe", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EdpmsReconTableComponent_ng_template_49_Template_button_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);
      const modal_r13 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](modal_r13.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
  }
}

let EdpmsReconTableComponent = /*#__PURE__*/(() => {
  class EdpmsReconTableComponent {
    constructor(userService, documentService, router, wininfo) {
      this.userService = userService;
      this.documentService = documentService;
      this.router = router;
      this.wininfo = wininfo;
      this.bankAccounts = [];
      this.bankSelection = "";
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
      this.documentService.getEDPMS().subscribe(res => {
        this.edpmsData = res?.data;
        console.log("Edpms Data", this.edpmsData);
      }, err => {
        console.log(err);
      });
    }

    chooseBank() {
      if (this.bankSelection && this.bankSelection !== "") {
        console.log(this.bankSelection, ' is selected');
      }
    }

    actionEvent(act, sbNo) {
      if (act === 'Upload Documents') {
        this.router.navigateByUrl('/home/upload;file=export;document=pipo');
      } else if (act === 'Create Documents') {
        this.router.navigate(['/home/bill-lodgement', {
          sbNo: sbNo
        }]);
      }
    }

    openNew() {
      this.router.navigateByUrl('/home/edpms-recon');
    }

  }

  EdpmsReconTableComponent.ɵfac = function EdpmsReconTableComponent_Factory(t) {
    return new (t || EdpmsReconTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_document_service__WEBPACK_IMPORTED_MODULE_0__.DocumentService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_window_information_service__WEBPACK_IMPORTED_MODULE_2__.WindowInformationService));
  };

  EdpmsReconTableComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: EdpmsReconTableComponent,
    selectors: [["app-edpms-recon-table"]],
    decls: 51,
    vars: 3,
    consts: [[1, "content-wrap", "pb-2", "scroll-bar-main"], ["id", "content", "role", "main", 1, "content", "table-padding"], [1, "header-panel"], [2, "display", "flex", "align-items", "center", "width", "190px"], [1, "heading"], [2, "display", "flex", "flex-direction", "row", "justify-content", "space-between", "align-items", "center", "padding-top", "0.8%", "padding-left", "3%", "padding-bottom", "0.8%", "margin-left", "10px", "width", "300px"], [2, "display", "flex", "align-items", "center"], [2, "display", "flex", "align-items", "center", 3, "ngModel", "ngModelChange"], ["value", "", "disabled", "", "hidden", ""], ["style", "min-width:100%;", 3, "value", 4, "ngFor", "ngForOf"], [2, "padding-top", "0.7%"], [1, "upload-button", 3, "click"], [1, "analytics"], [1, "analytics-side", 2, "width", "100%"], ["debitnotes", ""], [1, "row", 2, "width", "100%"], ["id", "container", 1, "col-12", "mb-lg", "padding", 2, "width", "100%", "height", "523px"], [1, "widget", "pb-0", "box-shadow", 2, "width", "120%", "margin-left", "10px"], [1, "widget-body", "p-0", "support", "table-wrapper"], [1, "table", "table-striped", "mb-0", 2, "width", "100%"], [2, "width", "100%"], [1, "table-tr"], ["scope", "col", 1, "col-td-th-3"], ["class", "table-tr", 4, "ngFor", "ngForOf"], ["content", ""], [2, "min-width", "100%", 3, "value"], [1, "col-td-th-3"], [3, "active", "click", 4, "ngFor", "ngForOf"], [3, "click"], [1, "modal-body"], [1, "row", "no-gutter"], [1, "col-md-7", 2, "margin", "10px"], [1, "login", "d-flex", "py-5", 2, "padding", "0px !important"], [1, "container", "popup"], [1, "row"], [1, "col-lg-10", "col-xl-7", "mrg"], [1, "display-6"], ["width", "315%", "height", "500px"], ["type", "submit", 1, "submitBTN", 2, "margin-left", "250px", 3, "click"]],
    template: function EdpmsReconTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "main", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "EDPMS Recon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EdpmsReconTableComponent_Template_select_ngModelChange_8_listener($event) {
          return ctx.bankSelection = $event;
        })("ngModelChange", function EdpmsReconTableComponent_Template_select_ngModelChange_8_listener() {
          return ctx.chooseBank();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Select Bank");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, EdpmsReconTableComponent_option_11_Template, 2, 2, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 10)(13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EdpmsReconTableComponent_Template_button_click_13_listener() {
          return ctx.openNew();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " Upload New ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 12)(16, "div", 13, 14)(18, "div", 15)(19, "div", 16)(20, "section", 17)(21, "div", 18)(22, "table", 19)(23, "thead", 20)(24, "tr", 21)(25, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Shipping Bill No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Shipping Bill Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "AD Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Port Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "EDPMS STATUS");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "AD Ref No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "SB Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "SB Balance amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "System Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Doc Available");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, EdpmsReconTableComponent_tr_48_Template, 24, 14, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, EdpmsReconTableComponent_ng_template_49_Template, 12, 0, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.bankSelection);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.bankAccounts);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.edpmsData);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
    styles: [".table-padding[_ngcontent-%COMP%] {\n  background: white !important;\n}\n\n.table_top[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 28.55% 33% 36%;\n  border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);\n  align-items: center;\n}\n\n.bcw[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #323e4a !important;\n}\n\n.heading[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 20px;\n  font-weight: 700;\n  color: #323e4a;\n}\n\n.table-heading[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 500;\n  color: #747474;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: #49a2d7;\n  cursor: pointer;\n}\n\ntable[_ngcontent-%COMP%] {\n  margin-left: 29px;\n  width: 98% !important;\n}\n\n.dropdown[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.upload-button[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n  font-weight: 100;\n  font-family: Poppins, sans-serif;\n  padding: 5px 8px;\n  font-size: 14px;\n  background-color: #49A2D7;\n  border: none;\n  border-radius: 5px;\n  margin-left: 2px;\n  margin-right: 1rem;\n}\n\n.box-shadow[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n  overflow: hidden;\n}\n\n.rect[_ngcontent-%COMP%] {\n  text-align: right;\n  min-width: 80px !important;\n}\n\n.table-row[_ngcontent-%COMP%] {\n  background-color: #ffffff !important;\n  color: #707683;\n}\n\n.table-row[_ngcontent-%COMP%]:hover {\n  background: #f6f9ff !important;\n  border-left: 5px solid #49a2d7;\n  cursor: pointer;\n}\n\n.sb-no[_ngcontent-%COMP%] {\n  color: #49a2d7;\n}\n\n.display-6[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 600;\n  color: #606670;\n  font-size: 22px;\n  margin-bottom: 12px;\n  margin-top: 20px;\n}\n\n.submitBTN[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  width: 160px;\n  height: 40px;\n  border: 2px white solid;\n  border-radius: 20px;\n  background-color: #51AEE5;\n  font-size: 12px;\n  color: #ffffff;\n}\n\n.tblInput[_ngcontent-%COMP%] {\n  border: 1px solid #e3e6ee;\n  border-radius: 3px;\n  width: 140px;\n}\n\n.savBtn[_ngcontent-%COMP%] {\n  background-color: #49A2D7;\n  color: white;\n  border: 1px solid rgba(0, 0, 0, 0.4);\n  font-size: 14px;\n  cursor: pointer;\n  border-radius: 2px;\n  width: 60px;\n}\n\n.customDropdown[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  padding-left: 12px;\n  padding-right: 10px;\n  height: 24px;\n  border-radius: 2px;\n  border: 1px solid black;\n  cursor: pointer;\n  z-index: 1;\n}\n\n.customDropdown[_ngcontent-%COMP%]:hover {\n  color: #4b74ff !important;\n}\n\n.customDropdown[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  font-size: 14px;\n  padding-left: 12px;\n  padding-right: 10px;\n  height: 24px;\n  border-radius: 2px;\n  border: 1px solid black;\n  margin-right: 12px;\n  cursor: pointer;\n  z-index: 1;\n}\n\n.customDropdown[_ngcontent-%COMP%]:hover {\n  color: #4b74ff !important;\n}\n\n.dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  border: 0.01em solid black;\n  background: white;\n  transform: translate(-14px, -1px);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  cursor: pointer;\n  padding: 0px 6px;\n  color: #000000;\n  height: 24px;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #49a2d7;\n  color: white;\n}\n\n.customDropdown[_ngcontent-%COMP%]   .dropIco[_ngcontent-%COMP%] {\n  margin-left: 7px;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #000000;\n}\n\n.customDropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.customDropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.fas[_ngcontent-%COMP%] {\n  font-family: \"Font Awesome 5 Free\" !important;\n}\n\n\n\n\n\n#drawer-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n}\n\n#drawer-toggle-label[_ngcontent-%COMP%] {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n  left: 0px;\n  height: 50px;\n  width: 50px;\n  display: block;\n  position: fixed;\n  background: rgba(255, 255, 255, 0);\n  z-index: 1;\n}\n\n\n\n#drawer-toggle-label[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 2px;\n  width: 24px;\n  background: #8d8d8d;\n  left: 13px;\n  top: 18px;\n  box-shadow: 0 6px 0 #8d8d8d, 0 12px 0 #8d8d8d;\n}\n\n\n\n#drawer[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: -300px;\n  height: 100%;\n  width: 300px;\n  background: #2f2f2f;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  padding: 20px;\n  -webkit-overflow-scrolling: touch;\n}\n\n\n\n#page-content[_ngcontent-%COMP%] {\n  margin-left: 0px;\n  margin-top: 50px;\n  width: 100%;\n  height: calc(100% - 50px);\n  overflow-x: hidden;\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n  padding: 20px;\n}\n\n\n\n#drawer-toggle[_ngcontent-%COMP%]:checked    ~ #drawer-toggle-label[_ngcontent-%COMP%] {\n  height: 100%;\n  width: calc(100% - 300px);\n  background: rgba(255, 255, 255, 0.8);\n}\n\n#drawer-toggle[_ngcontent-%COMP%]:checked    ~ #drawer-toggle-label[_ngcontent-%COMP%], #drawer-toggle[_ngcontent-%COMP%]:checked    ~ header[_ngcontent-%COMP%] {\n  left: 300px;\n}\n\n#drawer-toggle[_ngcontent-%COMP%]:checked    ~ #drawer[_ngcontent-%COMP%] {\n  left: 0px;\n}\n\n#drawer-toggle[_ngcontent-%COMP%]:checked    ~ #page-content[_ngcontent-%COMP%] {\n  margin-left: 300px;\n}\n\n\n\n#drawer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n\n#drawer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  padding: 10px;\n  color: #c7c7c7;\n  text-decoration: none;\n}\n\n#drawer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n\n\n\n@media all and (max-width: 350px) {\n  #drawer-toggle[_ngcontent-%COMP%]:checked    ~ #drawer-toggle-label[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 50px;\n  }\n  #drawer-toggle[_ngcontent-%COMP%]:checked    ~ #drawer-toggle-label[_ngcontent-%COMP%], #drawer-toggle[_ngcontent-%COMP%]:checked    ~ header[_ngcontent-%COMP%] {\n    left: calc(100% - 50px);\n  }\n  #drawer-toggle[_ngcontent-%COMP%]:checked    ~ #drawer[_ngcontent-%COMP%] {\n    width: calc(100% - 50px);\n    padding: 20px;\n  }\n  #drawer-toggle[_ngcontent-%COMP%]:checked    ~ #page-content[_ngcontent-%COMP%] {\n    margin-left: calc(100% - 50px);\n  }\n}\n\n*[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.heading[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 20px;\n  font-weight: 700;\n  margin-left: 23px;\n  color: #323e4a;\n}\n\n.table-heading[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 500;\n  color: #747474;\n}\n\n.box-shadow[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n\n.table-padding[_ngcontent-%COMP%] {\n  background: white !important;\n  width: 100%;\n  border-radius: 10px;\n  box-shadow: 0px 0px 2px 3px rgba(0, 0, 0, 0.168627451);\n  max-height: 100%;\n}\n\n.upload-button[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n  font-weight: 100;\n  font-family: Poppins, sans-serif;\n  padding: 5px 8px;\n  font-size: 14px;\n  background-color: #49A2D7;\n  border: none;\n  border-radius: 5px;\n  margin-left: 2px;\n  margin-right: 2rem;\n}\n\nbutton[_ngcontent-%COMP%] {\n  outline: none;\n}\n\n.table-row[_ngcontent-%COMP%] {\n  background-color: #ffffff !important;\n  color: #707683;\n}\n\n.table-row[_ngcontent-%COMP%]:hover {\n  background: #f6f9ff !important;\n  border-left: 5px solid #49a2d7;\n}\n\nselect[_ngcontent-%COMP%] {\n  text-decoration: none;\n  border: none;\n  background: none;\n  color: #49a2d7;\n}\n\nselect[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.rect[_ngcontent-%COMP%] {\n  text-align: right;\n  min-width: 80px !important;\n}\n\n.sb-no[_ngcontent-%COMP%] {\n  color: #49a2d7;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  height: 68px;\n  vertical-align: middle !important;\n}\n\n.image[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  margin-top: 12fvpx;\n}\n\n.image2[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  margin-left: -13px;\n}\n\n.fl[_ngcontent-%COMP%] {\n  float: \"left\";\n}\n\n.fr[_ngcontent-%COMP%] {\n  float: \"right\";\n}\n\nspan.fs20[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\nspan.fs16[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\np.fs14[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.fs12[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.p-4[_ngcontent-%COMP%] {\n  padding: 4px;\n}\n\n.p-8[_ngcontent-%COMP%] {\n  z-index: 5000;\n  transform: scale(1, 1);\n  display: grid;\n  grid-template-columns: 29% 70%;\n}\n\n.p-20[_ngcontent-%COMP%] {\n  padding: 20px !important;\n}\n\n.p-12[_ngcontent-%COMP%] {\n  padding: 12px !important;\n}\n\n.p-16[_ngcontent-%COMP%] {\n  padding: 16px !important;\n}\n\n.pr-4[_ngcontent-%COMP%] {\n  padding-right: 4px;\n}\n\n.pr-8[_ngcontent-%COMP%] {\n  padding-right: 8px !important;\n}\n\n.pr-16[_ngcontent-%COMP%] {\n  padding-right: 16px;\n}\n\n.pt-30[_ngcontent-%COMP%] {\n  padding-top: 30px !important;\n}\n\n.pt-28[_ngcontent-%COMP%] {\n  padding-top: 28px !important;\n}\n\n.pt-25[_ngcontent-%COMP%] {\n  padding-top: 25px !important;\n}\n\n.pt-24[_ngcontent-%COMP%] {\n  padding-top: 24px !important;\n}\n\n.pt-22[_ngcontent-%COMP%] {\n  padding-top: 22px !important;\n}\n\n.pt-20[_ngcontent-%COMP%] {\n  padding-top: 20px !important;\n}\n\n.pt-19[_ngcontent-%COMP%] {\n  padding-top: 19px !important;\n}\n\n.pt-16[_ngcontent-%COMP%] {\n  padding-top: 16px !important;\n}\n\n.pt-14[_ngcontent-%COMP%] {\n  padding-top: 14px !important;\n}\n\n.pt-10[_ngcontent-%COMP%] {\n  padding-top: 10px !important;\n}\n\n.pt-8[_ngcontent-%COMP%] {\n  padding-top: 8px !important;\n}\n\n.pt-4[_ngcontent-%COMP%] {\n  padding-top: 4px;\n}\n\n.pt-2[_ngcontent-%COMP%] {\n  padding-top: 2px;\n}\n\n.pt-0[_ngcontent-%COMP%] {\n  padding-top: 0px !important;\n}\n\n.pb-28[_ngcontent-%COMP%] {\n  padding-bottom: 28px !important;\n}\n\n.pb-16[_ngcontent-%COMP%] {\n  padding-bottom: 16px !important;\n}\n\n.pv-4[_ngcontent-%COMP%] {\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n\n.pv-8[_ngcontent-%COMP%] {\n  padding-top: 8px !important;\n  padding-bottom: 8px !important;\n}\n\n.pv-10[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.pv-20[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.pv-14[_ngcontent-%COMP%] {\n  padding-top: 14px !important;\n  padding-bottom: 14px !important;\n}\n\n.pv-16[_ngcontent-%COMP%] {\n  padding-top: 16px !important;\n  padding-bottom: 16px !important;\n}\n\n.ph-5[_ngcontent-%COMP%] {\n  padding-right: 5px !important;\n  padding-left: 5px !important;\n}\n\n.ph-16[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n.ph-8[_ngcontent-%COMP%] {\n  padding-left: 8px !important;\n  padding-right: 8px !important;\n}\n\n.ph-10[_ngcontent-%COMP%] {\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n}\n\n.ph-4[_ngcontent-%COMP%] {\n  padding-left: 4px;\n  padding-right: 4px;\n}\n\n.ph-32[_ngcontent-%COMP%] {\n  padding-left: 32px;\n  padding-right: 32px;\n}\n\n.ph-38[_ngcontent-%COMP%] {\n  padding-left: 38px;\n  padding-right: 38px;\n}\n\n.ph-44[_ngcontent-%COMP%] {\n  padding-left: 44px;\n  padding-right: 44px;\n}\n\n.bb[_ngcontent-%COMP%] {\n  border-bottom: 0.1px solid #d3d3d3;\n  border-right: 0.1px solid #d3d3d3;\n}\n\n.bc[_ngcontent-%COMP%] {\n  background-color: #f8fafd;\n}\n\n.bcw[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #323e4a !important;\n}\n\n\n\n\n\n.m-4[_ngcontent-%COMP%] {\n  margin: 4px !important;\n}\n\n.m-8[_ngcontent-%COMP%] {\n  margin: 8px !important;\n}\n\n.m-16[_ngcontent-%COMP%] {\n  margin: 16px !important;\n}\n\n.mr-20[_ngcontent-%COMP%] {\n  margin-right: 20px !important;\n}\n\n.mr-8[_ngcontent-%COMP%] {\n  margin-right: 8px !important;\n}\n\n.ml-20[_ngcontent-%COMP%] {\n  margin-left: 20px !important;\n}\n\n.ml-24[_ngcontent-%COMP%] {\n  margin-left: 24px !important;\n}\n\n.mt-4[_ngcontent-%COMP%] {\n  margin-top: 4px !important;\n}\n\n.mt-8[_ngcontent-%COMP%] {\n  margin-top: 8px !important;\n}\n\n.mt-16[_ngcontent-%COMP%] {\n  margin-top: 16px !important;\n}\n\n.mt-24[_ngcontent-%COMP%] {\n  margin-top: 24px !important;\n}\n\n.mt-38[_ngcontent-%COMP%] {\n  margin-top: 38px !important;\n}\n\n.mh-8[_ngcontent-%COMP%] {\n  margin-left: 8px !important;\n  margin-right: 8px !important;\n}\n\n.mh-16[_ngcontent-%COMP%] {\n  margin-left: 16px !important;\n  margin-right: 16px !important;\n}\n\n.mv-4[_ngcontent-%COMP%] {\n  margin-top: 4px !important;\n  margin-bottom: 4px !important;\n}\n\n.mv-16[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  margin-bottom: 16px;\n}\n\n.mv-24[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  margin-bottom: 24px;\n}\n\n.mh--16[_ngcontent-%COMP%] {\n  margin-left: -16px !important;\n  margin-right: -16px !important;\n}\n\n.mh-8[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n.w100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.w70[_ngcontent-%COMP%] {\n  width: 70%;\n}\n\n.w50[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.w30[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.pc1[_ngcontent-%COMP%] {\n  width: 44.5%;\n  height: 35px;\n  float: right;\n  border-left: 1px solid rgb(104, 103, 103);\n}\n\n.tabbed[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  \n  background-color: #f8fafd;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding-right: 28px;\n  padding-left: 32px;\n}\n\n.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  \n  display: none;\n}\n\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  list-style: none;\n  background-color: white;\n  height: 100%;\n  padding: 1% 0;\n  padding-left: 30px;\n  margin-left: -30px;\n  width: 113%;\n}\n\n.tabs[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.tab[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 10px;\n  padding-right: 12px;\n  color: #606670;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-right: 10px;\n  border-right: 1px solid black;\n}\n\n.tab[_ngcontent-%COMP%]:hover   label[_ngcontent-%COMP%] {\n  border-top-color: #333;\n  color: #333;\n}\n\n.tab-content[_ngcontent-%COMP%] {\n  display: none;\n  color: #777;\n  background: #f8fafd;\n  margin: 10px !important;\n}\n\n\n\n.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(1):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(1)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(2):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(2)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(3):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(3)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(4):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(4)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(5):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(5)   label[_ngcontent-%COMP%] {\n  color: #49a2d7;\n  margin-right: 10px;\n}\n\n.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(1):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(1), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(2):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(2), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(3):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(3), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(4):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(4) {\n  display: block;\n}\n\n.hhu[_ngcontent-%COMP%]:active, .hhu[_ngcontent-%COMP%]:focus {\n  border: 2px solid red;\n}\n\n.form[_ngcontent-%COMP%] {\n  margin-left: 38px !important;\n  margin-right: 5%;\n  top: 50%;\n  left: 50%;\n  height: 316px;\n  background-color: white;\n  border: 1px dashed rgba(0, 0, 0, 0.4);\n}\n\n.form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif !important;\n  text-align: center;\n  line-height: 30px;\n  color: #303030;\n}\n\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-family: \"EuropaNuova-Regular\", sans-serif !important;\n  position: absolute;\n  margin: 0;\n  width: 89%;\n  height: 313px;\n  padding: 0;\n  outline: none;\n  cursor: pointer;\n  opacity: 0;\n}\n\n.form[_ngcontent-%COMP%]   .form_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  margin-left: 36.5%;\n  height: 42px;\n  cursor: pointer;\n  width: 160px;\n  background-color: #49a2d7;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #149174;\n  color: #0c5645;\n}\n\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  border: 0;\n}\n\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.xbutton[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #49a2d7;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.ybutton[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #0c354d;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.zbutton[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #947551;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.border1[_ngcontent-%COMP%] {\n  border-left: 3px solid #174d72;\n}\n\n.border2[_ngcontent-%COMP%] {\n  border-left: 3px solid #5fe6e7;\n}\n\n.border3[_ngcontent-%COMP%] {\n  border-left: 3px solid #e7845f;\n}\n\n.form-wrapper1[_ngcontent-%COMP%] {\n  flex-direction: column;\n  width: 100%;\n}\n\n.form-wrapper1[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 5.5%;\n}\n\n.form-wrapper1.td[_ngcontent-%COMP%] {\n  width: 100%;\n  width: 7%;\n}\n\n.full-input[_ngcontent-%COMP%] {\n  margin-left: 18px;\n  margin-bottom: 10px;\n  display: inline-block;\n  padding: 3px;\n  height: 74px;\n  width: 177px;\n  background-color: white;\n  border-radius: 5px;\n  box-shadow: 4px 4px 8px 4px #eeeefa;\n}\n\n.smalll-input[_ngcontent-%COMP%] {\n  width: 160px !important;\n  outline: none;\n  border: none;\n  display: block;\n  border-radius: 4px;\n  border: 1px solid #d5dbe8;\n  height: 35px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  padding: 5px 0px 5px 5px;\n  margin-bottom: 0px !important;\n  font-size: 12px;\n  font-weight: 500;\n  color: #72768a;\n}\n\n.sh1[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  margin-top: 15px;\n  font-size: 16px;\n  color: #606670;\n}\n\n.ss[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n\n#customers[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100% !important;\n  margin-left: 19px !important;\n  border-right: 1px solid #ddd;\n  border-left: 1px solid #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  height: 52px !important;\n  text-align: left;\n  font-weight: 300;\n  background-color: #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 52px !important;\n}\n\n.tab1[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  \n  display: inline-block;\n  height: 17px;\n  width: 17px;\n  color: #49a2d7;\n  margin-bottom: 10px;\n}\n\n.tab1[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + input[_ngcontent-%COMP%] {\n  background-color: #bfb;\n  border-color: #4c4;\n}\n\n.label1[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 10px;\n  padding-right: 12px;\n  color: #606670;\n  font-size: 12px;\n  letter-spacing: 1px;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-left: 30px;\n}\n\n.tab1[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.at[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding-right: 20px;\n  padding-left: 10px;\n}\n\n.ctb[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin-left: 210px;\n  background-color: #49a2d7;\n  padding: 12px 30px 11px 30px;\n  color: white;\n  border-radius: 4px;\n  cursor: pointer;\n  font-weight: 500;\n}\n\n.radio1[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  \n  display: inline-block;\n  height: 17px;\n  width: 17px;\n  color: #49a2d7;\n  margin-bottom: 10px;\n  border: 2px solid #49a2d7;\n}\n\n.radio1[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + input[_ngcontent-%COMP%] {\n  background-color: #bfb;\n  border-color: #4c4;\n}\n\n.label1[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 10px;\n  padding-right: 12px;\n  color: #606670;\n  font-size: 12px;\n  letter-spacing: 1px;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-left: 30px;\n}\n\n.radio1[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.stp1[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 500;\n  margin-bottom: 10px;\n  color: black;\n}\n\n.stp2[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin-bottom: 10px;\n  color: black;\n}\n\n.stp3[_ngcontent-%COMP%] {\n  color: #4a4a4a;\n  font-size: 14px;\n}\n\n.of1[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  font: 16px/26px Georgia, Garamond, Serif;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.side_document_list[_ngcontent-%COMP%] {\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 170vh;\n  border-right: 0.3px solid rgba(0, 0, 0, 0.2);\n}\n\n.profile_class[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  border-bottom: 0.3px solid rgba(0, 0, 0, 0.2);\n  padding: 3% 6%;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.activeBtn[_ngcontent-%COMP%] {\n  background-color: #f8fafd;\n  border-left: 8px solid rgb(61, 116, 197);\n}\n\n.table_top[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 29.55% 33% 30% 6%;\n  border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);\n  align-items: center;\n}\n\n.invoices_tab[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  height: 100vh;\n  background-color: #f8fafd;\n}\n\n.invoices_inner[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #f8fafd;\n}\n\n.inner_tab_content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  background-color: white;\n}\n\n.invoice_head[_ngcontent-%COMP%] {\n  width: 95%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 5%;\n}\n\n.serial_detail[_ngcontent-%COMP%] {\n  width: 93%;\n  margin-top: 10px;\n  display: flex;\n  justify-content: right;\n  text-align: right;\n  font-weight: 500;\n}\n\n.transaction_tab[_ngcontent-%COMP%] {\n  width: 770px;\n  height: 1387px;\n}\n\n.form_inner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  justify-content: center;\n}\n\n.opt[_ngcontent-%COMP%] {\n  background-color: #49a2d7;\n  padding: 0 3%;\n  height: 42px;\n  box-shadow: 4px 0px 7px #109cf1;\n  border: none;\n  color: white;\n}\n\n#container[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n.savBtn[_ngcontent-%COMP%] {\n  background-color: #49A2D7;\n  color: white;\n  border: 1px solid rgba(0, 0, 0, 0.4);\n  font-size: 14px;\n  cursor: pointer;\n  border-radius: 2px;\n  width: 60px;\n  margin-left: -2%;\n}\n\n.content-wrap[_ngcontent-%COMP%] {\n  z-index: 0;\n  height: 100vh;\n  position: absolute;\n  left: 260px;\n  margin: auto;\n  width: 78vw;\n}\n\n#container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  min-height: 100%;\n}\n\ntable[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.analytics[_ngcontent-%COMP%]   .support[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.header-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 0.8%;\n  padding-left: 1%;\n  padding-bottom: 0.8%;\n  border-bottom: 1px solid black;\n  width: 99%;\n}\n\nselect[_ngcontent-%COMP%] {\n  text-decoration: none;\n  border: 1px solid;\n  background: none;\n  color: #49a2d7;\n  padding: 5px;\n  border-radius: 5px;\n}"]
  });
  return EdpmsReconTableComponent;
})();

/***/ }),

/***/ 40232:
/*!********************************************************************!*\
  !*** ./src/app/home/edpms-recon-table/edpms-recon-table.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EdpmsReconTableModule": () => (/* binding */ EdpmsReconTableModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7976);
/* harmony import */ var _confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../confirm-dialog/confirm-dialog.service */ 12579);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 93329);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ 35581);
/* harmony import */ var _shared_Data_Servies_shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared-Data-Servies/shared-data.service */ 10241);
/* harmony import */ var _shared_home_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-home.module */ 69408);
/* harmony import */ var _edpms_recon_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edpms-recon-table.component */ 7829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 64537);










let EdpmsReconTableModule = /*#__PURE__*/(() => {
  class EdpmsReconTableModule {}

  EdpmsReconTableModule.ɵfac = function EdpmsReconTableModule_Factory(t) {
    return new (t || EdpmsReconTableModule)();
  };

  EdpmsReconTableModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: EdpmsReconTableModule
  });
  EdpmsReconTableModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    providers: [_confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialogService, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal, _shared_Data_Servies_shared_data_service__WEBPACK_IMPORTED_MODULE_1__.SharedDataService],
    imports: [_shared_home_module__WEBPACK_IMPORTED_MODULE_2__.SharedHomeModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild([{
      path: "",
      component: _edpms_recon_table_component__WEBPACK_IMPORTED_MODULE_3__.EdpmsReconTableComponent,
      pathMatch: "full"
    }]), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__.ModalModule.forRoot()]
  });
  return EdpmsReconTableModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](EdpmsReconTableModule, {
    declarations: [_edpms_recon_table_component__WEBPACK_IMPORTED_MODULE_3__.EdpmsReconTableComponent],
    imports: [_shared_home_module__WEBPACK_IMPORTED_MODULE_2__.SharedHomeModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__.ModalModule]
  });
})();

/***/ })

}]);