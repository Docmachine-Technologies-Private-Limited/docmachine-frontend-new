"use strict";
(self["webpackChunkdm_frontend"] = self["webpackChunkdm_frontend"] || []).push([[6319],{

/***/ 65852:
/*!*********************************************************************!*\
  !*** ./src/app/home/bill-of-exchange/bill-of-exchange.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillOfExchangeComponent": () => (/* binding */ BillOfExchangeComponent)
/* harmony export */ });
/* harmony import */ var D_Bharathexim_Repo_docmachine_frontend_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 8239);
/* harmony import */ var _shared_Data_Servies_shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared-Data-Servies/shared-data.service */ 10241);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! xlsx */ 64841);
/* harmony import */ var _service_document_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/document.service */ 76852);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 93329);
/* harmony import */ var _currency_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../currency.json */ 35743);
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../service/user.service */ 84981);
/* harmony import */ var _service_window_information_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/window-information.service */ 23087);
/* harmony import */ var _service_aprroval_pending_reject_transactions_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/aprroval-pending-reject-transactions.service */ 56869);
/* harmony import */ var _confirm_dialog_box_confirm_dialog_box_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../confirm-dialog-box/confirm-dialog-box.component */ 43970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 64537);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 5998);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ 48292);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 7976);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 88696);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 88692);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 20092);
/* harmony import */ var _custom_Filter_filter_toggle_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../custom/Filter/filter-toggle.directive */ 72173);





























const _c0 = ["billOfExchange"];

function BillOfExchangeComponent_option_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 43);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 43);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 43);
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

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "input", 51);
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

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BillOfExchangeComponent_tr_78_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      const data_r13 = ctx_r26.$implicit;
      const i_r14 = ctx_r26.index;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r25.toSave(data_r13, i_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function BillOfExchangeComponent_tr_78_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BillOfExchangeComponent_tr_78_button_14_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r30);
      const i_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().index;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r28.toEdit(i_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function BillOfExchangeComponent_tr_78_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BillOfExchangeComponent_tr_78_button_15_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      const data_r13 = ctx_r32.$implicit;
      const i_r14 = ctx_r32.index;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r31.handleDelete(data_r13._id, i_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}

function BillOfExchangeComponent_tr_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr", 44)(1, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, BillOfExchangeComponent_tr_78_div_6_Template, 2, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, BillOfExchangeComponent_tr_78_div_7_Template, 2, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "td", 45)(11, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BillOfExchangeComponent_tr_78_Template_a_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r35);
      const data_r13 = restoredCtx.$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](80);

      ctx_r34.openBillofExchange(_r7);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r34.viewCN(data_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, BillOfExchangeComponent_tr_78_button_13_Template, 2, 0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, BillOfExchangeComponent_tr_78_button_14_Template, 2, 0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, BillOfExchangeComponent_tr_78_button_15_Template, 3, 0, "button", 50);
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

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 58)(1, "div", 59)(2, "div", 60)(3, "div", 61)(4, "div", 62)(5, "div", 5)(6, "div", 63)(7, "h6", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Bill Of Exchange");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "iframe", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "button", 66);
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
    return new (t || BillOfExchangeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_service_document_service__WEBPACK_IMPORTED_MODULE_2__.DocumentService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_13__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_Data_Servies_shared_data_service__WEBPACK_IMPORTED_MODULE_1__.SharedDataService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_service_window_information_service__WEBPACK_IMPORTED_MODULE_5__.WindowInformationService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_service_aprroval_pending_reject_transactions_service__WEBPACK_IMPORTED_MODULE_6__.AprrovalPendingRejectTransactionsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog));
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
    consts: [[1, "content-wrap", "pb-2", "scroll-bar-main"], [1, "import_export_sec"], [1, "heading_common_tag"], ["id", "content", "role", "main", 1, "content", "table-padding"], [1, "filter_section_top"], [1, "row"], [1, "col-md-4", "col-sm-4", "col-12"], [1, "col-md-8", "col-sm-8", "col-12"], [1, "filter_right_new", "padding_new_top"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "ex_icon"], [1, "filter_posit"], ["type", "button", 1, "btn", "btn-secondary", "filter-popup", 3, "click"], [1, "fi_icon"], ["appFilterToggle", "", 1, "bg-white", "filter_main_sec", "mt-2", 2, "display", "none"], ["filter_Popup", ""], [1, "select_filter_options"], [1, "col-md-6", "col-12"], ["for", "exampleFormControlInput1", 1, "form-label"], ["aria-label", "Default select example", "name", "Buyer_Name", 1, "form-select", "form-control", 3, "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["aria-label", "Default select example", "name", "Company_Name", 1, "form-select", "form-control", 3, "change"], ["aria-label", "Default select example", "name", "Origin", 1, "form-select", "form-control", 3, "change"], [4, "ngFor", "ngForOf"], ["aria-label", "Default select example", "name", "date", 1, "form-select", "form-control", 3, "change"], [1, "footer_buttons"], ["type", "button", 1, "btn", "btn-light", 3, "click"], [1, "upload-button", "btn", "btn-success", 3, "click"], [1, "add_icon"], [1, "analytics"], [1, "analytics_top", 2, "width", "100%"], ["billOfExchange", ""], [1, "row", 2, "width", "100%"], ["id", "container", 1, ""], [1, "middle_datatable"], [1, "widget-body", "p-0", "support", "table-wrapper"], [1, "table", "table-hover"], [1, "table-tr"], ["scope", "col", 1, "col-td-th-3"], [1, "pl-3", 2, "margin-left", "9px"], ["class", "table-tr", 3, "ngClass", 4, "ngFor", "ngForOf"], ["content", ""], [3, "value"], [1, "table-tr", 3, "ngClass"], [1, "col-td-th-3"], [4, "ngIf"], ["title", "View", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-eye"], ["title", "Save", "class", "savBtn bgnone", 3, "click", 4, "ngIf"], ["title", "Edit", "class", "savBtn bgnone", 3, "click", 4, "ngIf"], ["name", "billExchangeNumber", "type", "text", "placeholder", "Bill Exchange Number", 1, "tblInput", "form-control", 3, "ngModel", "ngModelChange"], ["title", "Save", 1, "savBtn", "bgnone", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-floppy-o"], ["title", "Edit", 1, "savBtn", "bgnone", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-pencil-square-o"], ["title", "Delete", "href", "javascript:void(0)"], ["aria-hidden", "true", 1, "fa", "fa-trash-o"], [1, "modal-body"], [1, "row", "no-gutter"], [1, "col-md-7", 2, "margin", "10px"], [1, "login", "d-flex", "py-5", 2, "padding", "0px !important"], [1, "container", "popup"], [1, "col-lg-10", "col-xl-7", "mrg"], [1, "display-6"], ["width", "315%", "height", "500px", 3, "src"], ["type", "submit", 1, "submitBTN", 2, "margin-left", "250px", 3, "click"]],
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
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "div", 30)(57, "div", 31, 32)(59, "div", 33)(60, "div", 34)(61, "section", 35)(62, "div", 36)(63, "table", 37)(64, "thead")(65, "tr", 38)(66, "th", 39)(67, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](68, "DATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](69, "th", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](70, "PI/PO No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](71, "th", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](72, "Bill Of Exchange No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](73, "th", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](74, "Buyer Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](75, "th", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](76, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](77, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](78, BillOfExchangeComponent_tr_78_Template, 16, 9, "tr", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](79, BillOfExchangeComponent_ng_template_79_Template, 12, 1, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
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
    styles: ["*[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.heading[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 20px;\n  font-weight: 700;\n  margin-left: 23px;\n  color: #323e4a;\n}\n\n.table-heading[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 500;\n  color: #747474;\n}\n\n.box-shadow[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n\n.table-padding[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fff;\n  border-radius: 10px;\n  margin: 0;\n  box-shadow: 0 2px 10px rgba(58, 53, 65, 0.1019607843);\n}\n\n.upload-button[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n  font-weight: 100;\n  font-family: Poppins, sans-serif;\n  padding: 5px 8px;\n  font-size: 14px;\n  background-color: #49A2D7;\n  border: none;\n  border-radius: 5px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  outline: none;\n}\n\n.table-row[_ngcontent-%COMP%] {\n  background-color: #ffffff !important;\n  color: #707683;\n  border-left: 2px solid #fff;\n}\n\n.table-row[_ngcontent-%COMP%]:hover {\n  background: #f6f9ff !important;\n  border-left: 2px solid #49a2d7;\n}\n\nselect[_ngcontent-%COMP%] {\n  text-decoration: none;\n  border: none;\n  background: none;\n  color: #49a2d7;\n}\n\nselect[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.rect[_ngcontent-%COMP%] {\n  text-align: right;\n  min-width: 80px !important;\n}\n\n.sb-no[_ngcontent-%COMP%] {\n  color: #49a2d7;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  height: 68px;\n  vertical-align: middle !important;\n}\n\n.image[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  margin-top: 12fvpx;\n}\n\n.image2[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  margin-left: -13px;\n}\n\n.fl[_ngcontent-%COMP%] {\n  float: \"left\";\n}\n\n.fr[_ngcontent-%COMP%] {\n  float: \"right\";\n}\n\nspan.fs20[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\nspan.fs16[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\np.fs14[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.fs12[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.p-4[_ngcontent-%COMP%] {\n  padding: 4px;\n}\n\n.p-8[_ngcontent-%COMP%] {\n  z-index: 5000;\n  transform: scale(1, 1);\n  display: grid;\n  grid-template-columns: 29% 70%;\n}\n\n.p-20[_ngcontent-%COMP%] {\n  padding: 20px !important;\n}\n\n.p-12[_ngcontent-%COMP%] {\n  padding: 12px !important;\n}\n\n.p-16[_ngcontent-%COMP%] {\n  padding: 16px !important;\n}\n\n.pr-4[_ngcontent-%COMP%] {\n  padding-right: 4px;\n}\n\n.pr-8[_ngcontent-%COMP%] {\n  padding-right: 8px !important;\n}\n\n.pr-16[_ngcontent-%COMP%] {\n  padding-right: 16px;\n}\n\n.pt-30[_ngcontent-%COMP%] {\n  padding-top: 30px !important;\n}\n\n.pt-28[_ngcontent-%COMP%] {\n  padding-top: 28px !important;\n}\n\n.pt-25[_ngcontent-%COMP%] {\n  padding-top: 25px !important;\n}\n\n.pt-24[_ngcontent-%COMP%] {\n  padding-top: 24px !important;\n}\n\n.pt-22[_ngcontent-%COMP%] {\n  padding-top: 22px !important;\n}\n\n.pt-20[_ngcontent-%COMP%] {\n  padding-top: 20px !important;\n}\n\n.pt-19[_ngcontent-%COMP%] {\n  padding-top: 19px !important;\n}\n\n.pt-16[_ngcontent-%COMP%] {\n  padding-top: 16px !important;\n}\n\n.pt-14[_ngcontent-%COMP%] {\n  padding-top: 14px !important;\n}\n\n.pt-10[_ngcontent-%COMP%] {\n  padding-top: 10px !important;\n}\n\n.pt-8[_ngcontent-%COMP%] {\n  padding-top: 8px !important;\n}\n\n.pt-4[_ngcontent-%COMP%] {\n  padding-top: 4px;\n}\n\n.pt-2[_ngcontent-%COMP%] {\n  padding-top: 2px;\n}\n\n.pt-0[_ngcontent-%COMP%] {\n  padding-top: 0px !important;\n}\n\n.pb-28[_ngcontent-%COMP%] {\n  padding-bottom: 28px !important;\n}\n\n.pb-16[_ngcontent-%COMP%] {\n  padding-bottom: 16px !important;\n}\n\n.pv-4[_ngcontent-%COMP%] {\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n\n.pv-8[_ngcontent-%COMP%] {\n  padding-top: 8px !important;\n  padding-bottom: 8px !important;\n}\n\n.pv-10[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.pv-20[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.pv-14[_ngcontent-%COMP%] {\n  padding-top: 14px !important;\n  padding-bottom: 14px !important;\n}\n\n.pv-16[_ngcontent-%COMP%] {\n  padding-top: 16px !important;\n  padding-bottom: 16px !important;\n}\n\n.ph-5[_ngcontent-%COMP%] {\n  padding-right: 5px !important;\n  padding-left: 5px !important;\n}\n\n.ph-16[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n.ph-8[_ngcontent-%COMP%] {\n  padding-left: 8px !important;\n  padding-right: 8px !important;\n}\n\n.ph-10[_ngcontent-%COMP%] {\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n}\n\n.ph-4[_ngcontent-%COMP%] {\n  padding-left: 4px;\n  padding-right: 4px;\n}\n\n.ph-32[_ngcontent-%COMP%] {\n  padding-left: 32px;\n  padding-right: 32px;\n}\n\n.ph-38[_ngcontent-%COMP%] {\n  padding-left: 38px;\n  padding-right: 38px;\n}\n\n.ph-44[_ngcontent-%COMP%] {\n  padding-left: 44px;\n  padding-right: 44px;\n}\n\n.bb[_ngcontent-%COMP%] {\n  border-bottom: 0.1px solid #d3d3d3;\n  border-right: 0.1px solid #d3d3d3;\n}\n\n.bc[_ngcontent-%COMP%] {\n  background-color: #f8fafd;\n}\n\n.bcw[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #323e4a !important;\n}\n\n\n\n\n\n.m-4[_ngcontent-%COMP%] {\n  margin: 4px !important;\n}\n\n.m-8[_ngcontent-%COMP%] {\n  margin: 8px !important;\n}\n\n.m-16[_ngcontent-%COMP%] {\n  margin: 16px !important;\n}\n\n.mr-20[_ngcontent-%COMP%] {\n  margin-right: 20px !important;\n}\n\n.mr-8[_ngcontent-%COMP%] {\n  margin-right: 8px !important;\n}\n\n.ml-20[_ngcontent-%COMP%] {\n  margin-left: 20px !important;\n}\n\n.ml-24[_ngcontent-%COMP%] {\n  margin-left: 24px !important;\n}\n\n.mt-4[_ngcontent-%COMP%] {\n  margin-top: 4px !important;\n}\n\n.mt-8[_ngcontent-%COMP%] {\n  margin-top: 8px !important;\n}\n\n.mt-16[_ngcontent-%COMP%] {\n  margin-top: 16px !important;\n}\n\n.mt-24[_ngcontent-%COMP%] {\n  margin-top: 24px !important;\n}\n\n.mt-38[_ngcontent-%COMP%] {\n  margin-top: 38px !important;\n}\n\n.mh-8[_ngcontent-%COMP%] {\n  margin-left: 8px !important;\n  margin-right: 8px !important;\n}\n\n.mh-16[_ngcontent-%COMP%] {\n  margin-left: 16px !important;\n  margin-right: 16px !important;\n}\n\n.mv-4[_ngcontent-%COMP%] {\n  margin-top: 4px !important;\n  margin-bottom: 4px !important;\n}\n\n.mv-16[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  margin-bottom: 16px;\n}\n\n.mv-24[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  margin-bottom: 24px;\n}\n\n.mh--16[_ngcontent-%COMP%] {\n  margin-left: -16px !important;\n  margin-right: -16px !important;\n}\n\n.mh-8[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n.w100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.w70[_ngcontent-%COMP%] {\n  width: 70%;\n}\n\n.w50[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.w30[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.pc1[_ngcontent-%COMP%] {\n  width: 44.5%;\n  height: 35px;\n  float: right;\n  border-left: 1px solid rgb(104, 103, 103);\n}\n\n.tabbed[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  \n  background-color: #f8fafd;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding-right: 28px;\n  padding-left: 32px;\n}\n\n.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  \n  display: none;\n}\n\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  list-style: none;\n  background-color: white;\n  height: 100%;\n  padding: 1% 0;\n  padding-left: 30px;\n  margin-left: -30px;\n  width: 113%;\n}\n\n.tabs[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.tab[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 10px;\n  padding-right: 12px;\n  color: #606670;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-right: 10px;\n  border-right: 1px solid black;\n}\n\n.tab[_ngcontent-%COMP%]:hover   label[_ngcontent-%COMP%] {\n  border-top-color: #333;\n  color: #333;\n}\n\n.tab-content[_ngcontent-%COMP%] {\n  display: none;\n  color: #777;\n  background: #f8fafd;\n  margin: 10px !important;\n}\n\n\n\n.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(1):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(1)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(2):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(2)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(3):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(3)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(4):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(4)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(5):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(5)   label[_ngcontent-%COMP%] {\n  color: #49a2d7;\n  margin-right: 10px;\n}\n\n.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(1):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(1), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(2):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(2), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(3):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(3), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(4):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(4) {\n  display: block;\n}\n\n.hhu[_ngcontent-%COMP%]:active, .hhu[_ngcontent-%COMP%]:focus {\n  border: 2px solid red;\n}\n\n.form[_ngcontent-%COMP%] {\n  margin-left: 38px !important;\n  margin-right: 5%;\n  top: 50%;\n  left: 50%;\n  height: 316px;\n  background-color: white;\n  border: 1px dashed rgba(0, 0, 0, 0.4);\n}\n\n.form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif !important;\n  text-align: center;\n  line-height: 30px;\n  color: #303030;\n}\n\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-family: \"EuropaNuova-Regular\", sans-serif !important;\n  position: absolute;\n  margin: 0;\n  width: 89%;\n  height: 313px;\n  padding: 0;\n  outline: none;\n  cursor: pointer;\n  opacity: 0;\n}\n\n.form[_ngcontent-%COMP%]   .form_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  margin-left: 36.5%;\n  height: 42px;\n  cursor: pointer;\n  width: 160px;\n  background-color: #49a2d7;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #149174;\n  color: #0c5645;\n}\n\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  border: 0;\n}\n\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.xbutton[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #49a2d7;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.ybutton[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #0c354d;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.zbutton[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #947551;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.border1[_ngcontent-%COMP%] {\n  border-left: 3px solid #174d72;\n}\n\n.border2[_ngcontent-%COMP%] {\n  border-left: 3px solid #5fe6e7;\n}\n\n.border3[_ngcontent-%COMP%] {\n  border-left: 3px solid #e7845f;\n}\n\n.form-wrapper1[_ngcontent-%COMP%] {\n  flex-direction: column;\n  width: 100%;\n}\n\n.form-wrapper1[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 5.5%;\n}\n\n.form-wrapper1.td[_ngcontent-%COMP%] {\n  width: 100%;\n  width: 7%;\n}\n\n.full-input[_ngcontent-%COMP%] {\n  margin-left: 18px;\n  margin-bottom: 10px;\n  display: inline-block;\n  padding: 3px;\n  height: 74px;\n  width: 177px;\n  background-color: white;\n  border-radius: 5px;\n  box-shadow: 4px 4px 8px 4px #eeeefa;\n}\n\n.smalll-input[_ngcontent-%COMP%] {\n  width: 160px !important;\n  outline: none;\n  border: none;\n  display: block;\n  border-radius: 4px;\n  border: 1px solid #d5dbe8;\n  height: 35px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  padding: 5px 0px 5px 5px;\n  margin-bottom: 0px !important;\n  font-size: 12px;\n  font-weight: 500;\n  color: #72768a;\n}\n\n.sh1[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  margin-top: 15px;\n  font-size: 16px;\n  color: #606670;\n}\n\n.ss[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n\n#customers[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100% !important;\n  margin-left: 19px !important;\n  border-right: 1px solid #ddd;\n  border-left: 1px solid #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  height: 52px !important;\n  text-align: left;\n  font-weight: 300;\n  background-color: #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 52px !important;\n}\n\n.tab1[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  \n  display: inline-block;\n  height: 17px;\n  width: 17px;\n  color: #49a2d7;\n  margin-bottom: 10px;\n}\n\n.tab1[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + input[_ngcontent-%COMP%] {\n  background-color: #bfb;\n  border-color: #4c4;\n}\n\n.label1[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 10px;\n  padding-right: 12px;\n  color: #606670;\n  font-size: 12px;\n  letter-spacing: 1px;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-left: 30px;\n}\n\n.tab1[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.at[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding-right: 20px;\n  padding-left: 10px;\n}\n\n.ctb[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin-left: 210px;\n  background-color: #49a2d7;\n  padding: 12px 30px 11px 30px;\n  color: white;\n  border-radius: 4px;\n  cursor: pointer;\n  font-weight: 500;\n}\n\n.radio1[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  \n  display: inline-block;\n  height: 17px;\n  width: 17px;\n  color: #49a2d7;\n  margin-bottom: 10px;\n  border: 2px solid #49a2d7;\n}\n\n.radio1[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + input[_ngcontent-%COMP%] {\n  background-color: #bfb;\n  border-color: #4c4;\n}\n\n.label1[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 10px;\n  padding-right: 12px;\n  color: #606670;\n  font-size: 12px;\n  letter-spacing: 1px;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-left: 30px;\n}\n\n.radio1[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.stp1[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 500;\n  margin-bottom: 10px;\n  color: black;\n}\n\n.stp2[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin-bottom: 10px;\n  color: black;\n}\n\n.stp3[_ngcontent-%COMP%] {\n  color: #4a4a4a;\n  font-size: 14px;\n}\n\n.of1[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  font: 16px/26px Georgia, Garamond, Serif;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.side_document_list[_ngcontent-%COMP%] {\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 170vh;\n  border-right: 0.3px solid rgba(0, 0, 0, 0.2);\n}\n\n.profile_class[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  border-bottom: 0.3px solid rgba(0, 0, 0, 0.2);\n  padding: 3% 6%;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.activeBtn[_ngcontent-%COMP%] {\n  background-color: #f8fafd;\n  border-left: 8px solid rgb(61, 116, 197);\n}\n\n.table_top[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 29.55% 33% 30% 6%;\n  border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);\n  align-items: center;\n}\n\n.invoices_tab[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  height: 100vh;\n  background-color: #f8fafd;\n}\n\n.invoices_inner[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #f8fafd;\n}\n\n.inner_tab_content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  background-color: white;\n}\n\n.invoice_head[_ngcontent-%COMP%] {\n  width: 95%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 5%;\n}\n\n.serial_detail[_ngcontent-%COMP%] {\n  width: 93%;\n  margin-top: 10px;\n  display: flex;\n  justify-content: right;\n  text-align: right;\n  font-weight: 500;\n}\n\n.transaction_tab[_ngcontent-%COMP%] {\n  width: 770px;\n  height: 1387px;\n}\n\n.form_inner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  justify-content: center;\n}\n\n.opt[_ngcontent-%COMP%] {\n  background-color: #49a2d7;\n  padding: 0 3%;\n  height: 42px;\n  box-shadow: 4px 0px 7px #109cf1;\n  border: none;\n  color: white;\n}\n\n#container[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n.savBtn[_ngcontent-%COMP%] {\n  background-color: #49A2D7;\n  color: white;\n  border: 1px solid rgba(0, 0, 0, 0.4);\n  font-size: 14px;\n  cursor: pointer;\n  border-radius: 2px;\n}\n\n.content-wrap[_ngcontent-%COMP%] {\n  z-index: 0;\n  height: 100vh;\n  position: absolute;\n  left: 260px;\n  margin: auto;\n  width: 78vw;\n}\n\n#container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  min-height: 100%;\n}\n\ntable[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.analytics[_ngcontent-%COMP%]   .support[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.header-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 0.8%;\n  padding-left: 1%;\n  padding-bottom: 0.8%;\n  border-bottom: 1px solid black;\n  width: 99%;\n}\n\n.view_edit_button[_ngcontent-%COMP%] {\n  color: #777;\n  padding: 0 4px;\n  font-size: 15px;\n  display: inline-block;\n}\n\n.view_edit_button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #777;\n  padding: 0 4px;\n  font-size: 15px;\n  display: inline-block;\n}\n\n.view_edit_button[_ngcontent-%COMP%]   .savBtn[_ngcontent-%COMP%]   .fa.fa-floppy-o[_ngcontent-%COMP%]:before {\n  color: green;\n  font-size: 16px;\n}\n\n.none[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.7;\n}"]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7976);
/* harmony import */ var _confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../confirm-dialog/confirm-dialog.service */ 12579);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 93329);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ 35581);
/* harmony import */ var _shared_Data_Servies_shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared-Data-Servies/shared-data.service */ 10241);
/* harmony import */ var _shared_home_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-home.module */ 69408);
/* harmony import */ var _bill_of_exchange_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bill-of-exchange.component */ 65852);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 64537);










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