"use strict";
(self["webpackChunkdm_frontend"] = self["webpackChunkdm_frontend"] || []).push([["src_app_home_bill-of-exchange_bill-of-exchange_module_ts"],{

/***/ 65852:
/*!*********************************************************************!*\
  !*** ./src/app/home/bill-of-exchange/bill-of-exchange.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillOfExchangeComponent": () => (/* binding */ BillOfExchangeComponent)
/* harmony export */ });
/* harmony import */ var D_Bharathexim_Repo_docmachine_frontend_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _shared_Data_Servies_shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared-Data-Servies/shared-data.service */ 10241);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! xlsx */ 4126);
/* harmony import */ var src_app_service_document_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/document.service */ 76852);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _currency_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../currency.json */ 35743);
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../service/user.service */ 84981);
/* harmony import */ var src_app_service_window_information_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/window-information.service */ 23087);
/* harmony import */ var src_app_service_aprroval_pending_reject_transactions_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/aprroval-pending-reject-transactions.service */ 56869);
/* harmony import */ var _confirm_dialog_box_confirm_dialog_box_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../confirm-dialog-box/confirm-dialog-box.component */ 43970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _custom_Filter_filter_toggle_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../custom/Filter/filter-toggle.directive */ 72173);





























const _c0 = ["billOfExchange"];

function BillOfExchangeComponent_option_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const Buyer_Name_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", Buyer_Name_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", Buyer_Name_r9, " ");
  }
}

function BillOfExchangeComponent_option_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const PI_PO_No_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", PI_PO_No_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", PI_PO_No_r10, " ");
  }
}

function BillOfExchangeComponent_option_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const Origin_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", Origin_r11, " ");
  }
}

function BillOfExchangeComponent_option_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const SB_DATE_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", SB_DATE_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", SB_DATE_r12, " ");
  }
}

function BillOfExchangeComponent_tr_78_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", data_r13.billExchangeNumber, " ");
  }
}

function BillOfExchangeComponent_tr_78_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BillOfExchangeComponent_tr_78_div_7_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r23);
      const data_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](data_r13.billExchangeNumber = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", data_r13.billExchangeNumber);
  }
}

function BillOfExchangeComponent_tr_78_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BillOfExchangeComponent_tr_78_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      const data_r13 = ctx_r26.$implicit;
      const i_r14 = ctx_r26.index;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r25.toSave(data_r13, i_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function BillOfExchangeComponent_tr_78_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BillOfExchangeComponent_tr_78_button_14_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r30);
      const i_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().index;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r28.toEdit(i_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function BillOfExchangeComponent_tr_78_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BillOfExchangeComponent_tr_78_button_15_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      const data_r13 = ctx_r32.$implicit;
      const i_r14 = ctx_r32.index;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r31.handleDelete(data_r13._id, i_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}

function BillOfExchangeComponent_tr_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr", 46)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, BillOfExchangeComponent_tr_78_div_6_Template, 2, 1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, BillOfExchangeComponent_tr_78_div_7_Template, 2, 1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "td", 49)(11, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BillOfExchangeComponent_tr_78_Template_a_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r35);
      const data_r13 = restoredCtx.$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](80);

      ctx_r34.openBillofExchange(_r7);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r34.viewCN(data_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, BillOfExchangeComponent_tr_78_button_13_Template, 2, 0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, BillOfExchangeComponent_tr_78_button_14_Template, 2, 0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, BillOfExchangeComponent_tr_78_button_15_Template, 3, 0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx_r6.AprrovalPendingRejectService.truefalse(data_r13["deleteflag"] == "0") || ctx_r6.AprrovalPendingRejectService.truefalse((ctx_r6.USER_DATA == null ? null : ctx_r6.USER_DATA.result == null ? null : ctx_r6.USER_DATA.result.Role_Type) != "Approver"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r13.billOfExchangeDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r6.getPipoNumbers(data_r13), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r6.optionsVisibility[i_r14]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r6.optionsVisibility[i_r14]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r13.buyerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r6.optionsVisibility[i_r14]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r6.optionsVisibility[i_r14]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r6.optionsVisibility[i_r14]);
  }
}

function BillOfExchangeComponent_ng_template_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 61)(1, "div", 62)(2, "div", 63)(3, "div", 64)(4, "div", 65)(5, "div", 5)(6, "div", 66)(7, "h6", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Bill Of Exchange");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "iframe", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BillOfExchangeComponent_ng_template_79_Template_button_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r38);
      const modal_r36 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](modal_r36.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()()();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx_r8.viewData, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeResourceUrl"]);
  }
}

let BillOfExchangeComponent = /*#__PURE__*/(() => {
  class BillOfExchangeComponent {
    constructor(documentService, sanitizer, modalService, toastr, router, userService, sharedData, wininfo, AprrovalPendingRejectService, dialog) {
      this.documentService = documentService;
      this.sanitizer = sanitizer;
      this.modalService = modalService;
      this.toastr = toastr;
      this.router = router;
      this.userService = userService;
      this.sharedData = sharedData;
      this.wininfo = wininfo;
      this.AprrovalPendingRejectService = AprrovalPendingRejectService;
      this.dialog = dialog;
      this.item = [];
      this.optionsVisibility = [];
      this.USER_DATA = [];
      this.filtervisible = false;
      this.FILTER_VALUE_LIST = [];
      this.ALL_FILTER_DATA = {
        PI_PO_No: [],
        Buyer_Name: [],
        Bill_Of_Exchange_No: [],
        Currency: [],
        DATE: []
      };
    }

    ngOnInit() {
      var _this = this;

      return (0,D_Bharathexim_Repo_docmachine_frontend_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this.wininfo.set_controller_of_width(270, '.content-wrap');

        _this.USER_DATA = yield _this.userService.getUserDetail();
        console.log("this.USER_DATA", _this.USER_DATA);

        for (let index = 0; index < _currency_json__WEBPACK_IMPORTED_MODULE_3__?.length; index++) {
          _this.ALL_FILTER_DATA['Currency'].push(_currency_json__WEBPACK_IMPORTED_MODULE_3__[index]['value']);
        }

        _this.item = [];

        _this.documentService.getBillExchangefile("export").subscribe(res => {
          _this.item = res?.data;
          _this.FILTER_VALUE_LIST = _this.item;

          for (let value of res.data) {
            if (_this.ALL_FILTER_DATA['PI_PO_No'].includes(value?.currency) == false) {
              _this.ALL_FILTER_DATA['PI_PO_No'].push(_this.getPipoNumbers(value));
            }

            value?.buyerName.forEach(element => {
              if (_this.ALL_FILTER_DATA['Buyer_Name'].includes(element) == false && element != '' && element != undefined) {
                _this.ALL_FILTER_DATA['Buyer_Name'].push(element);
              }
            });

            if (_this.ALL_FILTER_DATA['Bill_Of_Exchange_No'].includes(value?.billExchangeNumber) == false) {
              _this.ALL_FILTER_DATA['Bill_Of_Exchange_No'].push(value?.billExchangeNumber);
            }

            if (_this.ALL_FILTER_DATA['DATE'].includes(value?.billOfExchangeDate) == false) {
              _this.ALL_FILTER_DATA['DATE'].push(value?.billOfExchangeDate);
            }
          }

          console.log(res, 'getBillExchangefile');
        }, err => console.log(err));
      })();
    }

    filter(value, key) {
      this.FILTER_VALUE_LIST = this.item.filter(item => item[key].indexOf(value) != -1);

      if (this.FILTER_VALUE_LIST.length == 0) {
        this.FILTER_VALUE_LIST = this.item;
      }
    }

    resetFilter() {
      this.FILTER_VALUE_LIST = this.item;
    }

    openBillofExchange(content) {
      this.modalService.open(content, {
        ariaLabelledBy: 'modal-basic-title',
        size: 'lg'
      }).result.then(result => {
        this.closeResult = `Closed with: ${result}`;
      }, reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }

    getDismissReason(reason) {
      if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
    }

    getPipoNumbers(data) {
      return data.pipo.map(x => {
        return x.pi_poNo;
      });
    }

    viewCN(a) {
      this.viewData = this.sanitizer.bypassSecurityTrustResourceUrl(a['doc']);
    }

    toSave(data, index) {
      this.optionsVisibility[index] = false;
      console.log(data);
      this.documentService.updateBillExchange(data, data._id).subscribe(data => {
        console.log('king123');
        this.toastr.success('Bill Of Exchange updated successfully.');
      }, error => {
        // this.toastr.error('Invalid inputs, please check!');
        console.log('error');
      });
    }

    newCredit() {
      this.sharedData.changeretunurl('home/bill-of-exchange');
      this.router.navigate(['home/upload', {
        file: 'export',
        document: 'billOfExchange'
      }]);
    }

    exportToExcel() {
      const ws = xlsx__WEBPACK_IMPORTED_MODULE_11__.utils.table_to_sheet(this.billOfExchange.nativeElement);
      const wb = xlsx__WEBPACK_IMPORTED_MODULE_11__.utils.book_new();
      xlsx__WEBPACK_IMPORTED_MODULE_11__.utils.book_append_sheet(wb, ws, 'Sheet1');
      xlsx__WEBPACK_IMPORTED_MODULE_11__.writeFile(wb, 'billOfExchange.xlsx');
    }

    toEdit(index) {
      this.optionsVisibility[index] = true;
      this.toastr.warning('Bill of Exchange Is In Edit Mode');
    }

    handleDelete(id, index) {
      console.log(id, index, 'dfsfhsfgsdfgdss');
      const message = `Are you sure you want to delete this?`;
      const dialogData = new _confirm_dialog_box_confirm_dialog_box_component__WEBPACK_IMPORTED_MODULE_7__.ConfirmDialogModel("Confirm Action", message);
      const dialogRef = this.dialog.open(_confirm_dialog_box_confirm_dialog_box_component__WEBPACK_IMPORTED_MODULE_7__.ConfirmDialogBoxComponent, {
        maxWidth: "400px",
        data: dialogData
      });
      dialogRef.afterClosed().subscribe(dialogResult => {
        console.log("---->", dialogResult);

        if (dialogResult) {
          this.deleteByRoleType(this.USER_DATA['result']['RoleCheckbox'], id, index);
        }
      });
    }

    deleteByRoleType(RoleCheckbox, id, index) {
      if (RoleCheckbox == '') {
        this.documentService.deleteById({
          id: id,
          tableName: 'billofexchanges'
        }).subscribe(res => {
          console.log(res);

          if (res) {
            this.ngOnInit();
          }
        }, err => console.log(err));
      } else if (RoleCheckbox == 'Maker' || RoleCheckbox == 'Checker' || RoleCheckbox == 'Approver') {
        var approval_data = {
          id: id,
          tableName: 'billofexchanges',
          deleteflag: '-1',
          userdetails: this.USER_DATA['result'],
          status: 'pending',
          dummydata: this.item[index],
          Types: 'deletion',
          TypeOfPage: 'summary',
          FileType: this.USER_DATA?.result?.sideMenu
        };
        this.AprrovalPendingRejectService.deleteByRole_PI_PO_Type(RoleCheckbox, id, index, approval_data, () => {
          this.ngOnInit();
        });
      }
    }

  }

  BillOfExchangeComponent.ɵfac = function BillOfExchangeComponent_Factory(t) {
    return new (t || BillOfExchangeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_service_document_service__WEBPACK_IMPORTED_MODULE_2__.DocumentService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_13__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_Data_Servies_shared_data_service__WEBPACK_IMPORTED_MODULE_1__.SharedDataService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_service_window_information_service__WEBPACK_IMPORTED_MODULE_5__.WindowInformationService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_service_aprroval_pending_reject_transactions_service__WEBPACK_IMPORTED_MODULE_6__.AprrovalPendingRejectTransactionsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog));
  };

  BillOfExchangeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: BillOfExchangeComponent,
    selectors: [["app-bill-of-exchange"]],
    viewQuery: function BillOfExchangeComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 5);
      }

      if (rf & 2) {
        let _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.billOfExchange = _t.first);
      }
    },
    decls: 81,
    vars: 5,
    consts: [[1, "content-wrap", "pb-2", "scroll-bar-main"], [1, "import_export_sec"], [1, "heading_common_tag"], ["id", "content", "role", "main", 1, "content", "table-padding"], [1, "filter_section_top"], [1, "row"], [1, "col-md-4", "col-sm-4", "col-12"], [1, "col-md-8", "col-sm-8", "col-12"], [1, "filter_right_new", "padding_new_top"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "ex_icon"], [1, "filter_posit"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "fi_icon"], ["appFilterToggle", "", 1, "bg-white", "filter_main_sec", "mt-2", 2, "display", "none"], ["filter_Popup", ""], [1, "select_filter_options"], [1, "col-md-6", "col-12"], ["for", "exampleFormControlInput1", 1, "form-label"], ["aria-label", "Default select example", "name", "Buyer_Name", 1, "form-select", "form-control", 3, "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["aria-label", "Default select example", "name", "Company_Name", 1, "form-select", "form-control", 3, "change"], ["aria-label", "Default select example", "name", "Origin", 1, "form-select", "form-control", 3, "change"], [4, "ngFor", "ngForOf"], ["aria-label", "Default select example", "name", "date", 1, "form-select", "form-control", 3, "change"], [1, "footer_buttons"], ["type", "button", 1, "btn", "btn-light", 3, "click"], [1, "upload-button", "btn", "btn-success", 3, "click"], [1, "add_icon"], [1, "analytics"], [1, "analytics_top", 2, "width", "100%"], ["billOfExchange", ""], [1, "row", 2, "width", "100%"], ["id", "container", 1, ""], [1, "middle_datatable"], [1, "widget-body", "p-0", "support", "table-wrapper"], [1, "table", "table-striped", "mb-0"], [2, "width", "100%", "background", "white", "position", "sticky", "top", "0"], [1, "text-muted", "table-heading", 2, "border-bottom", "1px solid #f2f4f8"], ["scope", "col"], [1, "pl-3", 2, "margin-left", "9px"], [1, "text-dark"], ["class", "table-row", 3, "ngClass", 4, "ngFor", "ngForOf"], ["content", ""], [3, "value"], [1, "table-row", 3, "ngClass"], [1, "sb-no"], [4, "ngIf"], [1, "view_edit_button"], ["title", "View", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-eye"], ["title", "Save", "class", "savBtn bgnone", 3, "click", 4, "ngIf"], ["title", "Edit", "class", "savBtn bgnone", 3, "click", 4, "ngIf"], ["name", "billExchangeNumber", "type", "text", "placeholder", "Bill Exchange Number", 1, "tblInput", "form-control", 3, "ngModel", "ngModelChange"], ["title", "Save", 1, "savBtn", "bgnone", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-floppy-o"], ["title", "Edit", 1, "savBtn", "bgnone", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-pencil-square-o"], ["title", "Delete", "href", "javascript:void(0)"], ["aria-hidden", "true", 1, "fa", "fa-trash-o"], [1, "modal-body"], [1, "row", "no-gutter"], [1, "col-md-7", 2, "margin", "10px"], [1, "login", "d-flex", "py-5", 2, "padding", "0px !important"], [1, "container", "popup"], [1, "col-lg-10", "col-xl-7", "mrg"], [1, "display-6"], ["width", "315%", "height", "500px", 3, "src"], ["type", "submit", 1, "submitBTN", 2, "margin-left", "250px", 3, "click"]],
    template: function BillOfExchangeComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Bill Of Exchange Documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "main", 3)(5, "div", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BillOfExchangeComponent_Template_button_click_10_listener() {
          return ctx.exportToExcel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "Export");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 11)(14, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BillOfExchangeComponent_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r39);

          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](18);

          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](_r0.style.display = "block");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div", 14, 15)(19, "form", 16)(20, "div", 5)(21, "div", 17)(22, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "Buyer name");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function BillOfExchangeComponent_Template_select_change_24_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r39);

          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](18);

          ctx.filter($event.target.value, "buyerName");
          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](_r0.style.display = "none");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "Buyer name");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](27, BillOfExchangeComponent_option_27_Template, 2, 2, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "div", 17)(29, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, "PI/PO No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function BillOfExchangeComponent_Template_select_change_31_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r39);

          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](18);

          ctx.filter($event.target.value, "pipo");
          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](_r0.style.display = "none");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, "PI/PO No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](34, BillOfExchangeComponent_option_34_Template, 2, 2, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "div", 17)(36, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37, "Bill Of Exchange No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function BillOfExchangeComponent_Template_select_change_38_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r39);

          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](18);

          ctx.filter($event.target.value, "billExchangeNumber");
          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](_r0.style.display = "none");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40, "Bill Of Exchange No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](41, BillOfExchangeComponent_option_41_Template, 2, 1, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "div", 17)(43, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44, "DATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function BillOfExchangeComponent_Template_select_change_45_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r39);

          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](18);

          ctx.filter($event.target.value, "billOfExchangeDate");
          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](_r0.style.display = "none");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](47, "DATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](48, BillOfExchangeComponent_option_48_Template, 2, 2, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "div", 26)(50, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BillOfExchangeComponent_Template_button_click_50_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r39);

          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](18);

          ctx.resetFilter();
          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](_r0.style.display = "none");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](51, "RESET");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](52, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BillOfExchangeComponent_Template_button_click_53_listener() {
          return ctx.newCredit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](54, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](55, " ADD NEW ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "div", 30)(57, "div", 31, 32)(59, "div", 33)(60, "div", 34)(61, "section", 35)(62, "div", 36)(63, "table", 37)(64, "thead", 38)(65, "tr", 39)(66, "th", 40)(67, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](68, "DATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](69, "th", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](70, "PI/PO No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](71, "th", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](72, "Bill Of Exchange No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](73, "th", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](74, "Buyer Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](75, "th", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](76, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](77, "tbody", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](78, BillOfExchangeComponent_tr_78_Template, 16, 9, "tr", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](79, BillOfExchangeComponent_ng_template_79_Template, 12, 1, "ng-template", null, 44, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.ALL_FILTER_DATA == null ? null : ctx.ALL_FILTER_DATA.Buyer_Name);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.ALL_FILTER_DATA == null ? null : ctx.ALL_FILTER_DATA.PI_PO_No);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.ALL_FILTER_DATA == null ? null : ctx.ALL_FILTER_DATA.Bill_Of_Exchange_No);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.ALL_FILTER_DATA == null ? null : ctx.ALL_FILTER_DATA.DATE);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.FILTER_VALUE_LIST);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgForm, _custom_Filter_filter_toggle_directive__WEBPACK_IMPORTED_MODULE_8__.FilterToggleDirective],
    styles: ["*[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.heading[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 20px;\n  font-weight: 700;\n  margin-left: 23px;\n  color: #323e4a;\n}\n\n.table-heading[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 500;\n  color: #747474;\n}\n\n.box-shadow[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n\n.table-padding[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fff;\n  border-radius: 10px;\n  margin: 0;\n  box-shadow: 0 2px 10px rgba(58, 53, 65, 0.1019607843);\n}\n\n.upload-button[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n  font-weight: 100;\n  font-family: Poppins, sans-serif;\n  padding: 5px 8px;\n  font-size: 14px;\n  background-color: #49A2D7;\n  border: none;\n  border-radius: 5px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  outline: none;\n}\n\n.table-row[_ngcontent-%COMP%] {\n  background-color: #ffffff !important;\n  color: #707683;\n  border-left: 2px solid #fff;\n}\n\n.table-row[_ngcontent-%COMP%]:hover {\n  background: #f6f9ff !important;\n  border-left: 2px solid #49a2d7;\n}\n\nselect[_ngcontent-%COMP%] {\n  text-decoration: none;\n  border: none;\n  background: none;\n  color: #49a2d7;\n}\n\nselect[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.rect[_ngcontent-%COMP%] {\n  text-align: right;\n  min-width: 80px !important;\n}\n\n.sb-no[_ngcontent-%COMP%] {\n  color: #49a2d7;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  height: 68px;\n  vertical-align: middle !important;\n}\n\n.image[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  margin-top: 12fvpx;\n}\n\n.image2[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  margin-left: -13px;\n}\n\n.fl[_ngcontent-%COMP%] {\n  float: \"left\";\n}\n\n.fr[_ngcontent-%COMP%] {\n  float: \"right\";\n}\n\nspan.fs20[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\nspan.fs16[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\np.fs14[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.fs12[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.p-4[_ngcontent-%COMP%] {\n  padding: 4px;\n}\n\n.p-8[_ngcontent-%COMP%] {\n  z-index: 5000;\n  transform: scale(1, 1);\n  display: grid;\n  grid-template-columns: 29% 70%;\n}\n\n.p-20[_ngcontent-%COMP%] {\n  padding: 20px !important;\n}\n\n.p-12[_ngcontent-%COMP%] {\n  padding: 12px !important;\n}\n\n.p-16[_ngcontent-%COMP%] {\n  padding: 16px !important;\n}\n\n.pr-4[_ngcontent-%COMP%] {\n  padding-right: 4px;\n}\n\n.pr-8[_ngcontent-%COMP%] {\n  padding-right: 8px !important;\n}\n\n.pr-16[_ngcontent-%COMP%] {\n  padding-right: 16px;\n}\n\n.pt-30[_ngcontent-%COMP%] {\n  padding-top: 30px !important;\n}\n\n.pt-28[_ngcontent-%COMP%] {\n  padding-top: 28px !important;\n}\n\n.pt-25[_ngcontent-%COMP%] {\n  padding-top: 25px !important;\n}\n\n.pt-24[_ngcontent-%COMP%] {\n  padding-top: 24px !important;\n}\n\n.pt-22[_ngcontent-%COMP%] {\n  padding-top: 22px !important;\n}\n\n.pt-20[_ngcontent-%COMP%] {\n  padding-top: 20px !important;\n}\n\n.pt-19[_ngcontent-%COMP%] {\n  padding-top: 19px !important;\n}\n\n.pt-16[_ngcontent-%COMP%] {\n  padding-top: 16px !important;\n}\n\n.pt-14[_ngcontent-%COMP%] {\n  padding-top: 14px !important;\n}\n\n.pt-10[_ngcontent-%COMP%] {\n  padding-top: 10px !important;\n}\n\n.pt-8[_ngcontent-%COMP%] {\n  padding-top: 8px !important;\n}\n\n.pt-4[_ngcontent-%COMP%] {\n  padding-top: 4px;\n}\n\n.pt-2[_ngcontent-%COMP%] {\n  padding-top: 2px;\n}\n\n.pt-0[_ngcontent-%COMP%] {\n  padding-top: 0px !important;\n}\n\n.pb-28[_ngcontent-%COMP%] {\n  padding-bottom: 28px !important;\n}\n\n.pb-16[_ngcontent-%COMP%] {\n  padding-bottom: 16px !important;\n}\n\n.pv-4[_ngcontent-%COMP%] {\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n\n.pv-8[_ngcontent-%COMP%] {\n  padding-top: 8px !important;\n  padding-bottom: 8px !important;\n}\n\n.pv-10[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.pv-20[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.pv-14[_ngcontent-%COMP%] {\n  padding-top: 14px !important;\n  padding-bottom: 14px !important;\n}\n\n.pv-16[_ngcontent-%COMP%] {\n  padding-top: 16px !important;\n  padding-bottom: 16px !important;\n}\n\n.ph-5[_ngcontent-%COMP%] {\n  padding-right: 5px !important;\n  padding-left: 5px !important;\n}\n\n.ph-16[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n.ph-8[_ngcontent-%COMP%] {\n  padding-left: 8px !important;\n  padding-right: 8px !important;\n}\n\n.ph-10[_ngcontent-%COMP%] {\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n}\n\n.ph-4[_ngcontent-%COMP%] {\n  padding-left: 4px;\n  padding-right: 4px;\n}\n\n.ph-32[_ngcontent-%COMP%] {\n  padding-left: 32px;\n  padding-right: 32px;\n}\n\n.ph-38[_ngcontent-%COMP%] {\n  padding-left: 38px;\n  padding-right: 38px;\n}\n\n.ph-44[_ngcontent-%COMP%] {\n  padding-left: 44px;\n  padding-right: 44px;\n}\n\n.bb[_ngcontent-%COMP%] {\n  border-bottom: 0.1px solid #d3d3d3;\n  border-right: 0.1px solid #d3d3d3;\n}\n\n.bc[_ngcontent-%COMP%] {\n  background-color: #f8fafd;\n}\n\n.bcw[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #323e4a !important;\n}\n\n\n\n\n\n.m-4[_ngcontent-%COMP%] {\n  margin: 4px !important;\n}\n\n.m-8[_ngcontent-%COMP%] {\n  margin: 8px !important;\n}\n\n.m-16[_ngcontent-%COMP%] {\n  margin: 16px !important;\n}\n\n.mr-20[_ngcontent-%COMP%] {\n  margin-right: 20px !important;\n}\n\n.mr-8[_ngcontent-%COMP%] {\n  margin-right: 8px !important;\n}\n\n.ml-20[_ngcontent-%COMP%] {\n  margin-left: 20px !important;\n}\n\n.ml-24[_ngcontent-%COMP%] {\n  margin-left: 24px !important;\n}\n\n.mt-4[_ngcontent-%COMP%] {\n  margin-top: 4px !important;\n}\n\n.mt-8[_ngcontent-%COMP%] {\n  margin-top: 8px !important;\n}\n\n.mt-16[_ngcontent-%COMP%] {\n  margin-top: 16px !important;\n}\n\n.mt-24[_ngcontent-%COMP%] {\n  margin-top: 24px !important;\n}\n\n.mt-38[_ngcontent-%COMP%] {\n  margin-top: 38px !important;\n}\n\n.mh-8[_ngcontent-%COMP%] {\n  margin-left: 8px !important;\n  margin-right: 8px !important;\n}\n\n.mh-16[_ngcontent-%COMP%] {\n  margin-left: 16px !important;\n  margin-right: 16px !important;\n}\n\n.mv-4[_ngcontent-%COMP%] {\n  margin-top: 4px !important;\n  margin-bottom: 4px !important;\n}\n\n.mv-16[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  margin-bottom: 16px;\n}\n\n.mv-24[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  margin-bottom: 24px;\n}\n\n.mh--16[_ngcontent-%COMP%] {\n  margin-left: -16px !important;\n  margin-right: -16px !important;\n}\n\n.mh-8[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n.w100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.w70[_ngcontent-%COMP%] {\n  width: 70%;\n}\n\n.w50[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.w30[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.pc1[_ngcontent-%COMP%] {\n  width: 44.5%;\n  height: 35px;\n  float: right;\n  border-left: 1px solid rgb(104, 103, 103);\n}\n\n.tabbed[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  \n  background-color: #f8fafd;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding-right: 28px;\n  padding-left: 32px;\n}\n\n.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  \n  display: none;\n}\n\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  list-style: none;\n  background-color: white;\n  height: 100%;\n  padding: 1% 0;\n  padding-left: 30px;\n  margin-left: -30px;\n  width: 113%;\n}\n\n.tabs[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.tab[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 10px;\n  padding-right: 12px;\n  color: #606670;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-right: 10px;\n  border-right: 1px solid black;\n}\n\n.tab[_ngcontent-%COMP%]:hover   label[_ngcontent-%COMP%] {\n  border-top-color: #333;\n  color: #333;\n}\n\n.tab-content[_ngcontent-%COMP%] {\n  display: none;\n  color: #777;\n  background: #f8fafd;\n  margin: 10px !important;\n}\n\n\n\n.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(1):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(1)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(2):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(2)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(3):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(3)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(4):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(4)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(5):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(5)   label[_ngcontent-%COMP%] {\n  color: #49a2d7;\n  margin-right: 10px;\n}\n\n.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(1):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(1), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(2):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(2), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(3):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(3), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(4):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(4) {\n  display: block;\n}\n\n.hhu[_ngcontent-%COMP%]:active, .hhu[_ngcontent-%COMP%]:focus {\n  border: 2px solid red;\n}\n\n.form[_ngcontent-%COMP%] {\n  margin-left: 38px !important;\n  margin-right: 5%;\n  top: 50%;\n  left: 50%;\n  height: 316px;\n  background-color: white;\n  border: 1px dashed rgba(0, 0, 0, 0.4);\n}\n\n.form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif !important;\n  text-align: center;\n  line-height: 30px;\n  color: #303030;\n}\n\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-family: \"EuropaNuova-Regular\", sans-serif !important;\n  position: absolute;\n  margin: 0;\n  width: 89%;\n  height: 313px;\n  padding: 0;\n  outline: none;\n  cursor: pointer;\n  opacity: 0;\n}\n\n.form[_ngcontent-%COMP%]   .form_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  margin-left: 36.5%;\n  height: 42px;\n  cursor: pointer;\n  width: 160px;\n  background-color: #49a2d7;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #149174;\n  color: #0c5645;\n}\n\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  border: 0;\n}\n\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.xbutton[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #49a2d7;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.ybutton[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #0c354d;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.zbutton[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #947551;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.border1[_ngcontent-%COMP%] {\n  border-left: 3px solid #174d72;\n}\n\n.border2[_ngcontent-%COMP%] {\n  border-left: 3px solid #5fe6e7;\n}\n\n.border3[_ngcontent-%COMP%] {\n  border-left: 3px solid #e7845f;\n}\n\n.form-wrapper1[_ngcontent-%COMP%] {\n  flex-direction: column;\n  width: 100%;\n}\n\n.form-wrapper1[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 5.5%;\n}\n\n.form-wrapper1.td[_ngcontent-%COMP%] {\n  width: 100%;\n  width: 7%;\n}\n\n.full-input[_ngcontent-%COMP%] {\n  margin-left: 18px;\n  margin-bottom: 10px;\n  display: inline-block;\n  padding: 3px;\n  height: 74px;\n  width: 177px;\n  background-color: white;\n  border-radius: 5px;\n  box-shadow: 4px 4px 8px 4px #eeeefa;\n}\n\n.smalll-input[_ngcontent-%COMP%] {\n  width: 160px !important;\n  outline: none;\n  border: none;\n  display: block;\n  border-radius: 4px;\n  border: 1px solid #d5dbe8;\n  height: 35px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  padding: 5px 0px 5px 5px;\n  margin-bottom: 0px !important;\n  font-size: 12px;\n  font-weight: 500;\n  color: #72768a;\n}\n\n.sh1[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  margin-top: 15px;\n  font-size: 16px;\n  color: #606670;\n}\n\n.ss[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n\n#customers[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100% !important;\n  margin-left: 19px !important;\n  border-right: 1px solid #ddd;\n  border-left: 1px solid #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  height: 52px !important;\n  text-align: left;\n  font-weight: 300;\n  background-color: #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 52px !important;\n}\n\n.tab1[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  \n  display: inline-block;\n  height: 17px;\n  width: 17px;\n  color: #49a2d7;\n  margin-bottom: 10px;\n}\n\n.tab1[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + input[_ngcontent-%COMP%] {\n  background-color: #bfb;\n  border-color: #4c4;\n}\n\n.label1[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 10px;\n  padding-right: 12px;\n  color: #606670;\n  font-size: 12px;\n  letter-spacing: 1px;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-left: 30px;\n}\n\n.tab1[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.at[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding-right: 20px;\n  padding-left: 10px;\n}\n\n.ctb[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin-left: 210px;\n  background-color: #49a2d7;\n  padding: 12px 30px 11px 30px;\n  color: white;\n  border-radius: 4px;\n  cursor: pointer;\n  font-weight: 500;\n}\n\n.radio1[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  \n  display: inline-block;\n  height: 17px;\n  width: 17px;\n  color: #49a2d7;\n  margin-bottom: 10px;\n  border: 2px solid #49a2d7;\n}\n\n.radio1[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + input[_ngcontent-%COMP%] {\n  background-color: #bfb;\n  border-color: #4c4;\n}\n\n.label1[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 10px;\n  padding-right: 12px;\n  color: #606670;\n  font-size: 12px;\n  letter-spacing: 1px;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-left: 30px;\n}\n\n.radio1[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.stp1[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 500;\n  margin-bottom: 10px;\n  color: black;\n}\n\n.stp2[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin-bottom: 10px;\n  color: black;\n}\n\n.stp3[_ngcontent-%COMP%] {\n  color: #4a4a4a;\n  font-size: 14px;\n}\n\n.of1[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  font: 16px/26px Georgia, Garamond, Serif;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.side_document_list[_ngcontent-%COMP%] {\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 170vh;\n  border-right: 0.3px solid rgba(0, 0, 0, 0.2);\n}\n\n.profile_class[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  border-bottom: 0.3px solid rgba(0, 0, 0, 0.2);\n  padding: 3% 6%;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.activeBtn[_ngcontent-%COMP%] {\n  background-color: #f8fafd;\n  border-left: 8px solid rgb(61, 116, 197);\n}\n\n.table_top[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 29.55% 33% 30% 6%;\n  border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);\n  align-items: center;\n}\n\n.invoices_tab[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  height: 100vh;\n  background-color: #f8fafd;\n}\n\n.invoices_inner[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #f8fafd;\n}\n\n.inner_tab_content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  background-color: white;\n}\n\n.invoice_head[_ngcontent-%COMP%] {\n  width: 95%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 5%;\n}\n\n.serial_detail[_ngcontent-%COMP%] {\n  width: 93%;\n  margin-top: 10px;\n  display: flex;\n  justify-content: right;\n  text-align: right;\n  font-weight: 500;\n}\n\n.transaction_tab[_ngcontent-%COMP%] {\n  width: 770px;\n  height: 1387px;\n}\n\n.form_inner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  justify-content: center;\n}\n\n.opt[_ngcontent-%COMP%] {\n  background-color: #49a2d7;\n  padding: 0 3%;\n  height: 42px;\n  box-shadow: 4px 0px 7px #109cf1;\n  border: none;\n  color: white;\n}\n\n#container[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n.savBtn[_ngcontent-%COMP%] {\n  background-color: #49A2D7;\n  color: white;\n  border: 1px solid rgba(0, 0, 0, 0.4);\n  font-size: 14px;\n  cursor: pointer;\n  border-radius: 2px;\n}\n\n.content-wrap[_ngcontent-%COMP%] {\n  z-index: 0;\n  height: 100vh;\n  position: absolute;\n  left: 260px;\n  margin: auto;\n  width: 78vw;\n}\n\n#container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  min-height: 100%;\n}\n\ntable[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.analytics[_ngcontent-%COMP%]   .support[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.header-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 0.8%;\n  padding-left: 1%;\n  padding-bottom: 0.8%;\n  border-bottom: 1px solid black;\n  width: 99%;\n}\n\n.view_edit_button[_ngcontent-%COMP%] {\n  color: #777;\n  padding: 0 4px;\n  font-size: 15px;\n  display: inline-block;\n}\n\n.view_edit_button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #777;\n  padding: 0 4px;\n  font-size: 15px;\n  display: inline-block;\n}\n\n.view_edit_button[_ngcontent-%COMP%]   .savBtn[_ngcontent-%COMP%]   .fa.fa-floppy-o[_ngcontent-%COMP%]:before {\n  color: green;\n  font-size: 16px;\n}\n\n.none[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbGwtb2YtZXhjaGFuZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtBQUNKOztBQUtBO0VBQ0ksa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFGSjs7QUFTQTtFQUNJLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBTko7O0FBVUE7RUFDSSwyQkFBQTtBQVBKOztBQVVBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EscURBQUE7QUFQSjs7QUFVQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBUEo7O0FBVUE7RUFDSSxhQUFBO0FBUEo7O0FBVUE7RUFDSSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtBQVBKOztBQVVBO0VBQ0ksOEJBQUE7RUFDQSw4QkFBQTtBQVBKOztBQVVBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBUEo7O0FBVUE7RUFDSSxhQUFBO0FBUEo7O0FBVUE7RUFDSSxpQkFBQTtFQUNBLDBCQUFBO0FBUEo7O0FBVUE7RUFDSSxjQUFBO0FBUEo7O0FBVUE7O0VBRUksWUFBQTtFQUNBLGlDQUFBO0FBUEo7O0FBVUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFQSjs7QUFVQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFQSjs7QUFVQTtFQUNJLGFBQUE7QUFQSjs7QUFVQTtFQUNJLGNBQUE7QUFQSjs7QUFVQTtFQUNJLGVBQUE7QUFQSjs7QUFVQTtFQUNJLGVBQUE7QUFQSjs7QUFVQTtFQUNJLGVBQUE7QUFQSjs7QUFVQTtFQUNJLGVBQUE7QUFQSjs7QUFVQTtFQUNJLFlBQUE7QUFQSjs7QUFVQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQVBKOztBQVVBO0VBQ0ksd0JBQUE7QUFQSjs7QUFVQTtFQUNJLHdCQUFBO0FBUEo7O0FBVUE7RUFDSSx3QkFBQTtBQVBKOztBQVVBO0VBQ0ksa0JBQUE7QUFQSjs7QUFVQTtFQUNJLDZCQUFBO0FBUEo7O0FBVUE7RUFDSSxtQkFBQTtBQVBKOztBQVVBO0VBQ0ksNEJBQUE7QUFQSjs7QUFVQTtFQUNJLDRCQUFBO0FBUEo7O0FBVUE7RUFDSSw0QkFBQTtBQVBKOztBQVVBO0VBQ0ksNEJBQUE7QUFQSjs7QUFVQTtFQUNJLDRCQUFBO0FBUEo7O0FBVUE7RUFDSSw0QkFBQTtBQVBKOztBQVVBO0VBQ0ksNEJBQUE7QUFQSjs7QUFVQTtFQUNJLDRCQUFBO0FBUEo7O0FBVUE7RUFDSSw0QkFBQTtBQVBKOztBQVVBO0VBQ0ksNEJBQUE7QUFQSjs7QUFVQTtFQUNJLDJCQUFBO0FBUEo7O0FBVUE7RUFDSSxnQkFBQTtBQVBKOztBQVVBO0VBQ0ksZ0JBQUE7QUFQSjs7QUFVQTtFQUNJLDJCQUFBO0FBUEo7O0FBVUE7RUFDSSwrQkFBQTtBQVBKOztBQVVBO0VBQ0ksK0JBQUE7QUFQSjs7QUFVQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUFQSjs7QUFVQTtFQUNJLDJCQUFBO0VBQ0EsOEJBQUE7QUFQSjs7QUFVQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7QUFQSjs7QUFVQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7QUFQSjs7QUFVQTtFQUNJLDRCQUFBO0VBQ0EsK0JBQUE7QUFQSjs7QUFVQTtFQUNJLDRCQUFBO0VBQ0EsK0JBQUE7QUFQSjs7QUFVQTtFQUNJLDZCQUFBO0VBQ0EsNEJBQUE7QUFQSjs7QUFVQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUFQSjs7QUFVQTtFQUNJLDRCQUFBO0VBQ0EsNkJBQUE7QUFQSjs7QUFVQTtFQUNJLDZCQUFBO0VBQ0EsOEJBQUE7QUFQSjs7QUFVQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFQSjs7QUFVQTtFQUNJLGtCQUFB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QkE7RUFDSSxjQUFBO0FBM0JKOztBQThCQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQTNCSjs7QUE4QkE7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBM0JKOztBQThCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUEzQko7O0FBOEJBO0VBQ0ksZ0JBQUE7QUEzQko7O0FBOEJBO0VBQ0ksZ0JBQUE7QUEzQko7O0FBOEJBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtBQTNCSjs7QUE4QkE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQTNCSjs7QUE4QkE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQTNCSjs7QUE4QkE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQTNCSjs7QUE2QkE7RUFDSSxvQkFBQTtFQUNBLFlBQUE7QUExQkoiLCJmaWxlIjoiYmlsbC1vZi1leGNoYW5nZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLy8gLnRhYmxlIHRoZWFkIHRoe1xuLy8gICAgIGJvcmRlcjogbm9uZTtcbi8vIH1cbi5oZWFkaW5nIHtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luLWxlZnQ6IDIzcHg7XG4gICAgY29sb3I6ICMzMjNlNGE7XG59XG5cbi8vIC5kcm9wZG93biB7XG4vLyAgICAgZm9udC1zaXplOiAxNHB4O1xuLy8gICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4vLyB9XG4udGFibGUtaGVhZGluZyB7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICM3NDc0NzQ7XG4gICAgLy9vcGFjaXR5OiA1MCU7XG59XG5cbi5ib3gtc2hhZG93IHtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi50YWJsZS1wYWRkaW5nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggIzNhMzU0MTFhO1xufVxuXG4udXBsb2FkLWJ1dHRvbiB7XG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLCBzYW5zLXNlcmlmO1xuICAgIHBhZGRpbmc6IDVweCA4cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OUEyRDc7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuYnV0dG9uIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4udGFibGUtcm93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICM3MDc2ODM7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZmZmO1xufVxuXG4udGFibGUtcm93OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjZmOWZmICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjNDlhMmQ3O1xufVxuXG5zZWxlY3Qge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBjb2xvcjogIzQ5YTJkNztcbn1cblxuc2VsZWN0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4ucmVjdCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWluLXdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zYi1ubyB7XG4gICAgY29sb3I6ICM0OWEyZDc7XG59XG5cbnRoLFxudGQge1xuICAgIGhlaWdodDogNjhweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XG59XG5cbi5pbWFnZSB7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW4tdG9wOiAxMmZ2cHg7XG59XG5cbi5pbWFnZTIge1xuICAgIG1hcmdpbi10b3A6IDIycHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xM3B4O1xufVxuXG4uZmwge1xuICAgIGZsb2F0OiBcImxlZnRcIjtcbn1cblxuLmZyIHtcbiAgICBmbG9hdDogXCJyaWdodFwiO1xufVxuXG5zcGFuLmZzMjAge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuc3Bhbi5mczE2IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbnAuZnMxNCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZnMxMiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ucC00IHtcbiAgICBwYWRkaW5nOiA0cHg7XG59XG5cbi5wLTgge1xuICAgIHotaW5kZXg6IDUwMDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjklIDcwJTtcbn1cblxuLnAtMjAge1xuICAgIHBhZGRpbmc6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLnAtMTIge1xuICAgIHBhZGRpbmc6IDEycHggIWltcG9ydGFudDtcbn1cblxuLnAtMTYge1xuICAgIHBhZGRpbmc6IDE2cHggIWltcG9ydGFudDtcbn1cblxuLnByLTQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcbn1cblxuLnByLTgge1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweCAhaW1wb3J0YW50O1xufVxuXG4ucHItMTYge1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbi5wdC0zMCB7XG4gICAgcGFkZGluZy10b3A6IDMwcHggIWltcG9ydGFudDtcbn1cblxuLnB0LTI4IHtcbiAgICBwYWRkaW5nLXRvcDogMjhweCAhaW1wb3J0YW50O1xufVxuXG4ucHQtMjUge1xuICAgIHBhZGRpbmctdG9wOiAyNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wdC0yNCB7XG4gICAgcGFkZGluZy10b3A6IDI0cHggIWltcG9ydGFudDtcbn1cblxuLnB0LTIyIHtcbiAgICBwYWRkaW5nLXRvcDogMjJweCAhaW1wb3J0YW50O1xufVxuXG4ucHQtMjAge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wdC0xOSB7XG4gICAgcGFkZGluZy10b3A6IDE5cHggIWltcG9ydGFudDtcbn1cblxuLnB0LTE2IHtcbiAgICBwYWRkaW5nLXRvcDogMTZweCAhaW1wb3J0YW50O1xufVxuXG4ucHQtMTQge1xuICAgIHBhZGRpbmctdG9wOiAxNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wdC0xMCB7XG4gICAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLnB0LTgge1xuICAgIHBhZGRpbmctdG9wOiA4cHggIWltcG9ydGFudDtcbn1cblxuLnB0LTQge1xuICAgIHBhZGRpbmctdG9wOiA0cHg7XG59XG5cbi5wdC0yIHtcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xufVxuXG4ucHQtMCB7XG4gICAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ucGItMjgge1xuICAgIHBhZGRpbmctYm90dG9tOiAyOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wYi0xNiB7XG4gICAgcGFkZGluZy1ib3R0b206IDE2cHggIWltcG9ydGFudDtcbn1cblxuLnB2LTQge1xuICAgIHBhZGRpbmctdG9wOiA0cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcbn1cblxuLnB2LTgge1xuICAgIHBhZGRpbmctdG9wOiA4cHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wdi0xMCB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5wdi0yMCB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi5wdi0xNCB7XG4gICAgcGFkZGluZy10b3A6IDE0cHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTRweCAhaW1wb3J0YW50O1xufVxuXG4ucHYtMTYge1xuICAgIHBhZGRpbmctdG9wOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDE2cHggIWltcG9ydGFudDtcbn1cblxuLnBoLTUge1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5waC0xNiB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbi5waC04IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweCAhaW1wb3J0YW50O1xufVxuXG4ucGgtMTAge1xuICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLnBoLTQge1xuICAgIHBhZGRpbmctbGVmdDogNHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcbn1cblxuLnBoLTMyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMycHg7XG4gICAgcGFkZGluZy1yaWdodDogMzJweDtcbn1cblxuLnBoLTM4IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDM4cHg7XG4gICAgcGFkZGluZy1yaWdodDogMzhweDtcbn1cblxuLnBoLTQ0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDQ0cHg7XG4gICAgcGFkZGluZy1yaWdodDogNDRweDtcbn1cblxuLmJiIHtcbiAgICBib3JkZXItYm90dG9tOiAwLjFweCBzb2xpZCAjZDNkM2QzO1xuICAgIGJvcmRlci1yaWdodDogMC4xcHggc29saWQgI2QzZDNkMztcbn1cblxuLmJjIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZkO1xufVxuXG4uYmN3IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogIzMyM2U0YSAhaW1wb3J0YW50O1xufVxuXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tcGFkZGluZy0tLS0tLS0tLS0tLS0tLS0gKi9cblxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLW1hcmdpbi0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi5tLTQge1xuICAgIG1hcmdpbjogNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tLTgge1xuICAgIG1hcmdpbjogOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tLTE2IHtcbiAgICBtYXJnaW46IDE2cHggIWltcG9ydGFudDtcbn1cblxuLm1yLTIwIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLm1yLTgge1xuICAgIG1hcmdpbi1yaWdodDogOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tbC0yMCB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLm1sLTI0IHtcbiAgICBtYXJnaW4tbGVmdDogMjRweCAhaW1wb3J0YW50O1xufVxuXG4ubXQtNCB7XG4gICAgbWFyZ2luLXRvcDogNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tdC04IHtcbiAgICBtYXJnaW4tdG9wOiA4cHggIWltcG9ydGFudDtcbn1cblxuLm10LTE2IHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tdC0yNCB7XG4gICAgbWFyZ2luLXRvcDogMjRweCAhaW1wb3J0YW50O1xufVxuXG4ubXQtMzgge1xuICAgIG1hcmdpbi10b3A6IDM4cHggIWltcG9ydGFudDtcbn1cblxuLm1oLTgge1xuICAgIG1hcmdpbi1sZWZ0OiA4cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweCAhaW1wb3J0YW50O1xufVxuXG4ubWgtMTYge1xuICAgIG1hcmdpbi1sZWZ0OiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tdi00IHtcbiAgICBtYXJnaW4tdG9wOiA0cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiA0cHggIWltcG9ydGFudDtcbn1cblxuLm12LTE2IHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5tdi0yNCB7XG4gICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuXG4ubWgtLTE2IHtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5taC04IHtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4udzEwMCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi53NzAge1xuICAgIHdpZHRoOiA3MCU7XG59XG5cbi53NTAge1xuICAgIHdpZHRoOiA1MCU7XG59XG5cbi53MzAge1xuICAgIHdpZHRoOiAzMCU7XG59XG5cbi5wYzEge1xuICAgIHdpZHRoOiA0NC41JTtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiKDEwNCwgMTAzLCAxMDMpO1xufVxuXG4udGFiYmVkIHtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgLyogc28gd2UgY291bGQgZWFzaWx5IGhpZGUgdGhlIHJhZGlvIGlucHV0cyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmctcmlnaHQ6IDI4cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzMnB4O1xufVxuXG4udGFiYmVkIFt0eXBlPVwicmFkaW9cIl0ge1xuICAgIC8qIGhpZGluZyB0aGUgaW5wdXRzICovXG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRhYnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAvL21hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAxJSAwO1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBtYXJnaW4tbGVmdDogLTMwcHg7XG4gICAgd2lkdGg6IDExMyU7XG59XG5cbi50YWJzIGxhYmVsIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbi50YWI+bGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTJweDtcbiAgICBjb2xvcjogIzYwNjY3MDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLnRhYjpob3ZlciBsYWJlbCB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogIzMzMztcbiAgICBjb2xvcjogIzMzMztcbn1cblxuLnRhYi1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGNvbG9yOiAjNzc3O1xuICAgIGJhY2tncm91bmQ6ICNmOGZhZmQ7XG4gICAgLy8gcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICAvLyBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cblxuLyogQXMgd2UgY2Fubm90IHJlcGxhY2UgdGhlIG51bWJlcnMgd2l0aCB2YXJpYWJsZXMgb3IgY2FsbHMgdG8gZWxlbWVudCBwcm9wZXJ0aWVzLCB0aGUgbnVtYmVyIG9mIHRoaXMgc2VsZWN0b3IgcGFydHMgaXMgb3VyIHRhYiBjb3VudCBsaW1pdCAqL1xuXG4udGFiYmVkIFt0eXBlPVwicmFkaW9cIl06bnRoLW9mLXR5cGUoMSk6Y2hlY2tlZH4udGFicyAudGFiOm50aC1vZi10eXBlKDEpIGxhYmVsLFxuLnRhYmJlZCBbdHlwZT1cInJhZGlvXCJdOm50aC1vZi10eXBlKDIpOmNoZWNrZWR+LnRhYnMgLnRhYjpudGgtb2YtdHlwZSgyKSBsYWJlbCxcbi50YWJiZWQgW3R5cGU9XCJyYWRpb1wiXTpudGgtb2YtdHlwZSgzKTpjaGVja2Vkfi50YWJzIC50YWI6bnRoLW9mLXR5cGUoMykgbGFiZWwsXG4udGFiYmVkIFt0eXBlPVwicmFkaW9cIl06bnRoLW9mLXR5cGUoNCk6Y2hlY2tlZH4udGFicyAudGFiOm50aC1vZi10eXBlKDQpIGxhYmVsLFxuLnRhYmJlZCBbdHlwZT1cInJhZGlvXCJdOm50aC1vZi10eXBlKDUpOmNoZWNrZWR+LnRhYnMgLnRhYjpudGgtb2YtdHlwZSg1KSBsYWJlbCB7XG4gICAgY29sb3I6ICM0OWEyZDc7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4udGFiYmVkIFt0eXBlPVwicmFkaW9cIl06bnRoLW9mLXR5cGUoMSk6Y2hlY2tlZH4udGFiLWNvbnRlbnQ6bnRoLW9mLXR5cGUoMSksXG4udGFiYmVkIFt0eXBlPVwicmFkaW9cIl06bnRoLW9mLXR5cGUoMik6Y2hlY2tlZH4udGFiLWNvbnRlbnQ6bnRoLW9mLXR5cGUoMiksXG4udGFiYmVkIFt0eXBlPVwicmFkaW9cIl06bnRoLW9mLXR5cGUoMyk6Y2hlY2tlZH4udGFiLWNvbnRlbnQ6bnRoLW9mLXR5cGUoMyksXG4udGFiYmVkIFt0eXBlPVwicmFkaW9cIl06bnRoLW9mLXR5cGUoNCk6Y2hlY2tlZH4udGFiLWNvbnRlbnQ6bnRoLW9mLXR5cGUoNCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaGh1OmFjdGl2ZSxcbi5oaHU6Zm9jdXMge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbn1cblxuLmZvcm0ge1xuICAgIG1hcmdpbi1sZWZ0OiAzOHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgaGVpZ2h0OiAzMTZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4uZm9ybSBwIHtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgICAvLyBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIC8vIHdpZHRoOiAxMDAlO1xuICAgIC8vIGhlaWdodDogMjNweCAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBjb2xvcjogIzMwMzAzMDtcbn1cblxuLmZvcm0gaW5wdXQge1xuICAgIGZvbnQtZmFtaWx5OiBcIkV1cm9wYU51b3ZhLVJlZ3VsYXJcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW46IDA7XG4gICAgd2lkdGg6IDg5JTtcbiAgICBoZWlnaHQ6IDMxM3B4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLmZvcm0gLmZvcm1faW5uZXIgYnV0dG9uIHtcbiAgICAvLyBtYXJnaW4tbGVmdDogMzYlO1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbi1sZWZ0OiAzNi41JTtcbiAgICBoZWlnaHQ6IDQycHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAxNjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDlhMmQ3O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggMHB4ICM0OWEyZDc7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLmZvcm0gYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMTQ5MTc0O1xuICAgIGNvbG9yOiAjMGM1NjQ1O1xufVxuXG4uZm9ybSBidXR0b246YWN0aXZlIHtcbiAgICBib3JkZXI6IDA7XG59XG5cbmlucHV0OmZvY3VzLFxudGV4dGFyZWE6Zm9jdXMsXG5zZWxlY3Q6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi54YnV0dG9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGhlaWdodDogNDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDlhMmQ3O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggMHB4ICM0OWEyZDc7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLnlidXR0b24ge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgaGVpZ2h0OiA0MnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYzM1NGQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAwcHggIzQ5YTJkNztcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uemJ1dHRvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBoZWlnaHQ6IDQycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk0NzU1MTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IDBweCAjNDlhMmQ3O1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5ib3JkZXIxIHtcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICMxNzRkNzI7XG59XG5cbi5ib3JkZXIyIHtcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICM1ZmU2ZTc7XG59XG5cbi5ib3JkZXIzIHtcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNlNzg0NWY7XG59XG5cbi5mb3JtLXdyYXBwZXIxIHtcbiAgICAvL2Rpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm0td3JhcHBlcjEgZGl2IHRkIHtcbiAgICB3aWR0aDogMzAlO1xuICAgIGhlaWdodDogNS41JTtcbn1cblxuLmZvcm0td3JhcHBlcjEudGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHdpZHRoOiA3JTtcbn1cblxuLmZ1bGwtaW5wdXQge1xuICAgIG1hcmdpbi1sZWZ0OiAxOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBoZWlnaHQ6IDc0cHg7XG4gICAgd2lkdGg6IDE3N3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDhweCA0cHggI2VlZWVmYTtcbn1cblxuLnNtYWxsbC1pbnB1dCB7XG4gICAgd2lkdGg6IDE2MHB4ICFpbXBvcnRhbnQ7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNWRiZTg7XG4gICAgaGVpZ2h0OiAzNXB4O1xufVxuXG5sYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogNXB4IDBweCA1cHggNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjNzI3NjhhO1xufVxuXG4uc2gxIHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzYwNjY3MDtcbn1cblxuLnNzIHtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuI2N1c3RvbWVycyB7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAxOXB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RkZDtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkZGQ7XG59XG5cbiNjdXN0b21lcnMgdGQsXG4jY3VzdG9tZXJzIHRoIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbn1cblxuI2N1c3RvbWVycyB0aCB7XG4gICAgaGVpZ2h0OiA1MnB4ICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG5cbiNjdXN0b21lcnMgdGQge1xuICAgIGhlaWdodDogNTJweCAhaW1wb3J0YW50O1xufVxuXG4udGFiMSBbdHlwZT1cInJhZGlvXCJdIHtcbiAgICAvKiBoaWRpbmcgdGhlIGlucHV0cyAqL1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IDE3cHg7XG4gICAgd2lkdGg6IDE3cHg7XG4gICAgY29sb3I6ICM0OWEyZDc7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnRhYjEgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQraW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZmI7XG4gICAgYm9yZGVyLWNvbG9yOiAjNGM0O1xufVxuXG4ubGFiZWwxIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xuICAgIGNvbG9yOiAjNjA2NjcwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuLnRhYjEge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5hdCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uY3RiIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OWEyZDc7XG4gICAgcGFkZGluZzogMTJweCAzMHB4IDExcHggMzBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ucmFkaW8xIFt0eXBlPVwicmFkaW9cIl0ge1xuICAgIC8qIGhpZGluZyB0aGUgaW5wdXRzICovXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogMTdweDtcbiAgICB3aWR0aDogMTdweDtcbiAgICBjb2xvcjogIzQ5YTJkNztcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM0OWEyZDc7XG59XG5cbi5yYWRpbzEgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQraW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZmI7XG4gICAgYm9yZGVyLWNvbG9yOiAjNGM0O1xufVxuXG4ubGFiZWwxIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xuICAgIGNvbG9yOiAjNjA2NjcwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuLnJhZGlvMSB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnN0cDEge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4uc3RwMiB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4uc3RwMyB7XG4gICAgY29sb3I6ICM0YTRhNGE7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ub2YxIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGZvbnQ6IDE2cHgvMjZweCBHZW9yZ2lhLCBHYXJhbW9uZCwgU2VyaWY7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbnRhYmxlIHRib2R5IHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8vU0lERSBQRU9QTEUgTElTVFxuLnNpZGVfZG9jdW1lbnRfbGlzdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxNzB2aDtcbiAgICBib3JkZXItcmlnaHQ6IDAuM3B4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLy9QUk9GSUxFIENMQVNTU1NTL1xuLnByb2ZpbGVfY2xhc3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWJvdHRvbTogMC4zcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIHBhZGRpbmc6IDMlIDYlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLy8gLnByb2ZpbGVfY2xhc3M6aG92ZXIge1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZkO1xuLy8gICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHJnYig2MSwgMTE2LCAxOTcpO1xuLy8gfVxuLmFjdGl2ZUJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmZDtcbiAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHJnYig2MSwgMTE2LCAxOTcpO1xufVxuXG4udGFibGVfdG9wIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjkuNTUlIDMzJSAzMCUgNiU7XG4gICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbnZvaWNlc190YWIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZkO1xufVxuXG4uaW52b2ljZXNfaW5uZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmQ7XG59XG5cbi5pbm5lcl90YWJfY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmludm9pY2VfaGVhZCB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogNSU7XG59XG5cbi5zZXJpYWxfZGV0YWlsIHtcbiAgICB3aWR0aDogOTMlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi50cmFuc2FjdGlvbl90YWIge1xuICAgIHdpZHRoOiA3NzBweDtcbiAgICBoZWlnaHQ6IDEzODdweDtcbn1cblxuLmZvcm1faW5uZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ub3B0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDlhMmQ3O1xuICAgIHBhZGRpbmc6IDAgMyU7XG4gICAgaGVpZ2h0OiA0MnB4O1xuICAgIGJveC1zaGFkb3c6IDRweCAwcHggN3B4ICMxMDljZjE7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuI2NvbnRhaW5lciB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5zYXZCdG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OUEyRDc7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLmNvbnRlbnQtd3JhcCB7XG4gICAgei1pbmRleDogMDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAyNjBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDc4dnc7XG59XG5cbiNjb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG50YWJsZSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmFuYWx5dGljcyAuc3VwcG9ydCB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmhlYWRlci1wYW5lbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAwLjglO1xuICAgIHBhZGRpbmctbGVmdDogMSU7XG4gICAgcGFkZGluZy1ib3R0b206IDAuOCU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHdpZHRoOiA5OSU7XG59XG5cbi52aWV3X2VkaXRfYnV0dG9uIHtcbiAgICBjb2xvcjogIzc3NztcbiAgICBwYWRkaW5nOiAwIDRweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4udmlld19lZGl0X2J1dHRvbiBhIGkge1xuICAgIGNvbG9yOiAjNzc3O1xuICAgIHBhZGRpbmc6IDAgNHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi52aWV3X2VkaXRfYnV0dG9uIC5zYXZCdG4gLmZhLmZhLWZsb3BweS1vOmJlZm9yZSB7XG4gICAgY29sb3I6IGdyZWVuO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5ub25le1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIG9wYWNpdHk6IC43O1xuICB9XG4iXX0= */"]
  });
  return BillOfExchangeComponent;
})();

/***/ }),

/***/ 16319:
/*!******************************************************************!*\
  !*** ./src/app/home/bill-of-exchange/bill-of-exchange.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillOfExchangeModule": () => (/* binding */ BillOfExchangeModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../confirm-dialog/confirm-dialog.service */ 12579);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ 71010);
/* harmony import */ var _shared_Data_Servies_shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared-Data-Servies/shared-data.service */ 10241);
/* harmony import */ var _shared_home_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-home.module */ 69408);
/* harmony import */ var _bill_of_exchange_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bill-of-exchange.component */ 65852);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);










let BillOfExchangeModule = /*#__PURE__*/(() => {
  class BillOfExchangeModule {}

  BillOfExchangeModule.ɵfac = function BillOfExchangeModule_Factory(t) {
    return new (t || BillOfExchangeModule)();
  };

  BillOfExchangeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: BillOfExchangeModule
  });
  BillOfExchangeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    providers: [_confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialogService, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal, _shared_Data_Servies_shared_data_service__WEBPACK_IMPORTED_MODULE_1__.SharedDataService],
    imports: [_shared_home_module__WEBPACK_IMPORTED_MODULE_2__.SharedHomeModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild([{
      path: "",
      component: _bill_of_exchange_component__WEBPACK_IMPORTED_MODULE_3__.BillOfExchangeComponent,
      pathMatch: "full"
    }]), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__.ModalModule.forRoot()]
  });
  return BillOfExchangeModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](BillOfExchangeModule, {
    declarations: [_bill_of_exchange_component__WEBPACK_IMPORTED_MODULE_3__.BillOfExchangeComponent],
    imports: [_shared_home_module__WEBPACK_IMPORTED_MODULE_2__.SharedHomeModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__.ModalModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_home_bill-of-exchange_bill-of-exchange_module_ts.js.map