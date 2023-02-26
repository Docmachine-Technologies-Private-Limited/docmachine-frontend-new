"use strict";
(self["webpackChunkdm_frontend"] = self["webpackChunkdm_frontend"] || []).push([["src_app_home_buyers-credit-request_buyers-credit-request-module_ts"],{

/***/ 64148:
/*!****************************************************************************!*\
  !*** ./src/app/home/buyers-credit-request/buyers-credit-request-module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuyersCreditRequestModule": () => (/* binding */ BuyersCreditRequestModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../confirm-dialog/confirm-dialog.service */ 12579);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ 71010);
/* harmony import */ var _shared_Data_Servies_shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared-Data-Servies/shared-data.service */ 10241);
/* harmony import */ var _shared_home_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-home.module */ 69408);
/* harmony import */ var _buyers_credit_request_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buyers-credit-request.component */ 78531);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);










let BuyersCreditRequestModule = /*#__PURE__*/(() => {
  class BuyersCreditRequestModule {}

  BuyersCreditRequestModule.ɵfac = function BuyersCreditRequestModule_Factory(t) {
    return new (t || BuyersCreditRequestModule)();
  };

  BuyersCreditRequestModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: BuyersCreditRequestModule
  });
  BuyersCreditRequestModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    providers: [_confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialogService, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal, _shared_Data_Servies_shared_data_service__WEBPACK_IMPORTED_MODULE_1__.SharedDataService],
    imports: [_shared_home_module__WEBPACK_IMPORTED_MODULE_2__.SharedHomeModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild([{
      path: "",
      component: _buyers_credit_request_component__WEBPACK_IMPORTED_MODULE_3__.BuyersCreditRequestComponent,
      pathMatch: "full"
    }]), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__.ModalModule.forRoot()]
  });
  return BuyersCreditRequestModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](BuyersCreditRequestModule, {
    declarations: [_buyers_credit_request_component__WEBPACK_IMPORTED_MODULE_3__.BuyersCreditRequestComponent],
    imports: [_shared_home_module__WEBPACK_IMPORTED_MODULE_2__.SharedHomeModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__.ModalModule]
  });
})();

/***/ }),

/***/ 78531:
/*!*******************************************************************************!*\
  !*** ./src/app/home/buyers-credit-request/buyers-credit-request.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuyersCreditRequestComponent": () => (/* binding */ BuyersCreditRequestComponent)
/* harmony export */ });
/* harmony import */ var _service_document_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/document.service */ 76852);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/user.service */ 84981);
/* harmony import */ var src_app_service_window_information_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/window-information.service */ 23087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);













function BuyersCreditRequestComponent_section_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 5)(1, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Buyers Credit Request ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 7)(4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "All Transaction");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 10)(9, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BuyersCreditRequestComponent_section_3_Template_span_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.onNewTrans());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Create New Transaction");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}

function BuyersCreditRequestComponent_table_4_tr_12_td_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Completed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function BuyersCreditRequestComponent_table_4_tr_12_td_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Pending ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function BuyersCreditRequestComponent_table_4_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BuyersCreditRequestComponent_table_4_tr_12_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const task_r6 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.viewTask(task_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Submitted to Yes bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, BuyersCreditRequestComponent_table_4_tr_12_td_5_Template, 2, 0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, BuyersCreditRequestComponent_table_4_tr_12_td_6_Template, 2, 0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Download & Share icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const task_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", task_r6.transactionDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", task_r6.completed === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", task_r6.completed === false);
  }
}

function BuyersCreditRequestComponent_table_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "table", 12)(1, "thead")(2, "tr", 13)(3, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "tbody", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, BuyersCreditRequestComponent_table_4_tr_12_Template, 9, 3, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.allTransactions);
  }
}

function BuyersCreditRequestComponent_div_5_option_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const bene_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", bene_r15.benneName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", bene_r15.benneName, " ");
  }
}

function BuyersCreditRequestComponent_div_5_div_26_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", i_r17.boeNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", i_r17.boeNumber, " ");
  }
}

function BuyersCreditRequestComponent_div_5_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 42)(1, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Select a BOE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "select", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function BuyersCreditRequestComponent_div_5_div_26_Template_select_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r18.selectedDoc1 = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Select BOE Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, BuyersCreditRequestComponent_div_5_div_26_option_6_Template, 2, 2, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r12.selectedDoc1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r12.item);
  }
}

function BuyersCreditRequestComponent_div_5_div_27_p_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BuyersCreditRequestComponent_div_5_div_27_p_10_Template_p_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24);
      const bene_r22 = restoredCtx.$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r23.clickPipo("PI", bene_r22.pi_poNo, bene_r22.benneName, bene_r22.amount, bene_r22));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const bene_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" PI-", bene_r22.pi_poNo, "-", bene_r22.benneName, "");
  }
}

function BuyersCreditRequestComponent_div_5_div_27_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " This PI/PO doesn't contain any BL copy. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function BuyersCreditRequestComponent_div_5_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 44)(1, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Select PIPO*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 45)(4, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 48)(8, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, BuyersCreditRequestComponent_div_5_div_27_p_10_Template, 3, 2, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, BuyersCreditRequestComponent_div_5_div_27_div_11_Template, 2, 0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r13.pipoValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r13.item3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r13.alertToggle);
  }
}

function BuyersCreditRequestComponent_div_5_p_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BuyersCreditRequestComponent_div_5_p_29_Template_i_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28);
      const i_r26 = restoredCtx.index;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r27.removePipo(i_r26));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r25, " ");
  }
}

function BuyersCreditRequestComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 21)(1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Setup: 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Create Transaction:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Select a bank*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function BuyersCreditRequestComponent_div_5_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r29.myRadio = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Yes Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function BuyersCreditRequestComponent_div_5_Template_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r31.myRadio = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Axis Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "br")(15, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Any Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "br")(19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Select a Beneficiary");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function BuyersCreditRequestComponent_div_5_Template_select_ngModelChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r32.selectedDoc = $event);
    })("change", function BuyersCreditRequestComponent_div_5_Template_select_change_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r33.modo($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Select Bene Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, BuyersCreditRequestComponent_div_5_option_25_Template, 2, 2, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, BuyersCreditRequestComponent_div_5_div_26_Template, 7, 2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, BuyersCreditRequestComponent_div_5_div_27_Template, 12, 3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, BuyersCreditRequestComponent_div_5_p_29_Template, 3, 1, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 38)(31, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BuyersCreditRequestComponent_div_5_Template_button_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r34.showThisPdf());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, " Generate Document ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Assign Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.myRadio);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.myRadio);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.selectedDoc);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.beneDetail);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.boe);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.boe);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.arrayData);
  }
}

let BuyersCreditRequestComponent = /*#__PURE__*/(() => {
  class BuyersCreditRequestComponent {
    constructor(documentService, router, route, userService, wininfo) {
      this.documentService = documentService;
      this.router = router;
      this.route = route;
      this.userService = userService;
      this.wininfo = wininfo;
      this.export = false;
      this.import = false;
      this.showPdf = false;
      this.greaterAmount = 0;
      this.selectedDoc = "";
      this.selectedDoc1 = "";
      this.allTransactions = [];
      this.piPoForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
        pi_poNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(""),
        benneName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(""),
        currency: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(""),
        amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(""),
        incoterm: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(""),
        lastDayShipment: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(""),
        paymentTerm: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(""),
        pcRefNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("")
      });
      this.boe = false;
      this.pipoValue = 'select PI/PO';
      this.arrayData = [];
      this.beneArray = [];
      this.pipoArr = [];
      this.amountArray = [];
      this.amountArray1 = [];
      console.log("hello");
    }

    ngOnInit() {
      this.wininfo.set_controller_of_width(270, '.content-wrap');
      this.route.params.subscribe(params => {
        this.file = this.route.snapshot.params['file'];
        this.showInvoice = false;
        console.log("hello");
      });
      this.documentService.getPipo().subscribe(res => {
        console.log("HEre Response", res), this.item1 = res.data;
      }, err => console.log(err));
      this.userService.getBene(1).subscribe(res => {
        this.beneDetail = res.data, console.log("Benne Detail", this.beneDetail);
      }, err => console.log("Error", err));
      this.documentService.getBcTask({
        file: "buyerCredit"
      }).subscribe(res => {
        this.allTransactions = res.task;
        console.log("ALL TRANSACTIONS", this.allTransactions);
      }, err => console.log(err));
    }

    clickPipo(a, b, c, d, e) {
      if (e['airwayBlcopy']) {
        let x = a + "-" + b + "-" + c;

        if (this.arrayData.length > 0) {
          if (c == this.beneArray[0]) {
            let j = this.arrayData.indexOf(x);

            if (j == -1) {
              this.arrayData.push(x);
              this.pipoArr.push(b);
              this.beneArray.push(c);
              let l = parseInt(d);
              this.amountArray.push(l); //this.amount = this.amount + parseInt(d)
            } else {
              console.log("x");
            }

            console.log(this.arrayData);
          } else {
            this.alertToggle = true;
            setTimeout(() => {
              console.log('hi');
              this.alertToggle = false;
            }, 5000);
            return;
          }
        } else {
          //this.amount = this.amount + parseInt(d)
          this.arrayData.push(x);
          this.pipoArr.push(b);
          this.beneArray.push(c);
          let l = parseInt(d);
          this.amountArray.push(l);
        }
      } else {
        this.alertToggle = true;
        setTimeout(() => {
          console.log('hi');
          this.alertToggle = false;
        }, 5000);
        return;
      }
    }

    amountFun(a, b) {
      console.log('shshshh');
      this.amountArray1[b] = parseInt(a);
      let z = 0;

      for (let value of this.amountArray1) {
        z = z + value;
      }

      this.amount = z;
      console.log(this.amountArray1);
      console.log(this.amount);
      console.log('shshshh');
    }

    removePipo(i) {
      this.arrayData.splice(i, 1);
      this.pipoArr.splice(i, 1);
      this.beneArray.splice(i, 1);
      this.amount = this.amount - this.amountArray[i];
    } // getTransactions(selectedRowValues) {
    //   this.documentService.getLcTask({ pi_poNo: selectedRowValues, file:this.file }).subscribe(
    //     (res: any) => {
    //       this.allTransactions = res.task;
    //       console.log("ALL TRANSACTIONS", this.allTransactions);
    //     },
    //     (err) => console.log(err)
    //   );
    // }


    getInvoices(selectedRowValues, i) {
      console.log("SELECTED", selectedRowValues);
      console.log("INDEX", i);
      this.lastIndex = i;
      return this.selectedRow = selectedRowValues, this.showInvoice = true, this.tableWidth = "30%", this.greaterAmount = parseInt(this.selectedRow.amount);
    }

    modo(a) {
      console.log(a);
      this.documentService.getBoe(a).subscribe(data => {
        this.boe = true;
        this.item = data['data'];
        console.log("king123");
        console.log(data['data']);
        console.log("Boe Data", this.item);
        this.documentService.getPipoByBene(a).subscribe(data1 => {
          this.boe = true;
          this.item3 = data1['data'];
          console.log("king123");
          console.log(data1); //this.router.navigate(['/login'], { queryParams: { registered: true }});
        }, error1 => {
          console.log("error");
        });
      }, error => {
        console.log("error");
      });
    }

    onNewTrans() {
      this.step1 = !this.step1;
    }

    toggleStep1() {
      this.step1 = false;
      this.showPdf = false;
    } // getTrasactions() {
    //   const data: any = this.documentService.getTask();
    //   this.allTransactions = data.task;
    // }


    viewTask(data) {
      console.log(data);
      console.log(data.beneDetail.benneName);

      if (!data.completed) {
        this.documentService.task = data;
        this.documentService.draft = true; //data.pipoDetail["_id"] = data._id;

        this.documentService.pdfData = data.pipoDetail;

        if (data.bank == 'yesBank') {
          this.router.navigate(['home/tradeRequestLetter', data.beneDetail.benneName]);
        } else if (data.bank == 'axisBank') {
          this.router.navigate(['home/buyersCreditAxis', data.beneDetail.benneName]);
        }
      } else {
        this.router.navigateByUrl(`/home/completed-task/${data._id}`);
      }
    }

    showThisPdf() {
      this.documentService.draft = false;
      console.log(this.selectedDoc);
      console.log(this.pipoArr);

      if (this.myRadio == 'axisBank') {
        console.log("h");
        this.router.navigate(['home/buyersCreditAxis', {
          pipo: this.pipoArr,
          amount: this.selectedDoc
        }]); //this.router.navigate(['home/buyersCreditAxis', this.selectedDoc]);
      } else {
        //this.router.navigate(['home/tradeRequestLetter', this.selectedDoc]);
        this.router.navigate(['home/tradeRequestLetter', {
          pipo: this.pipoArr,
          amount: this.selectedDoc
        }]);
      }
    }

  }

  BuyersCreditRequestComponent.ɵfac = function BuyersCreditRequestComponent_Factory(t) {
    return new (t || BuyersCreditRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_document_service__WEBPACK_IMPORTED_MODULE_0__.DocumentService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_service_window_information_service__WEBPACK_IMPORTED_MODULE_2__.WindowInformationService));
  };

  BuyersCreditRequestComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: BuyersCreditRequestComponent,
    selectors: [["app-buyers-credit-request"]],
    decls: 6,
    vars: 3,
    consts: [[1, "content-wrap", "pb-2", "scroll-bar-main"], ["id", "content", "role", "main", 1, "content", "table-padding"], ["class", "header-panel", 4, "ngIf"], ["class", "table table-striped mb-0", "style", "margin-left: 40px; float: left; margin-top: 20px; width: 92%;", 4, "ngIf"], ["class", "radio1", "style", "\n                margin-left: 10px;\n                padding: 4% 0;\n                padding-left: 3%;\n            ", 4, "ngIf"], [1, "header-panel"], [1, "heading"], [2, "float", "left", "margin-top", "20px"], [1, "at", 2, "border-right", "1px solid black", "color", "#49a2d7"], [1, "at"], [2, "margin-right", "80px", "float", "right", "margin-top", "20px"], [1, "ctb", 3, "click"], [1, "table", "table-striped", "mb-0", 2, "margin-left", "40px", "float", "left", "margin-top", "20px", "width", "92%"], [1, "text-muted", "table-heading"], ["scope", "col"], [1, "text-dark"], ["class", "table-row", 3, "click", 4, "ngFor", "ngForOf"], [1, "table-row", 3, "click"], [1, "pl-4", "fw-normal"], [1, "sb-no"], [4, "ngIf"], [1, "radio1", 2, "margin-left", "10px", "padding", "4% 0", "padding-left", "3%"], [1, "stp1"], [1, "stp2"], [1, "stp3"], ["type", "radio", "id", "options1", "value", "yesBank", 1, "circular_input", 3, "ngModel", "ngModelChange"], ["for", "male", 1, "label1"], ["type", "radio", "id", "options2", "value", "axisBank", 1, "circular_input", 3, "ngModel", "ngModelChange"], ["for", "female", 1, "label1"], ["type", "radio", "name", "bank", "value", "Any Bank", 1, "circular_input"], [2, "margin-bottom", "2px"], [2, "border", "0.5px solid black", 3, "ngModel", "ngModelChange", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["style", "margin-top: 10px;", 4, "ngIf"], ["style", "display: flex; align-items: center; margin-top: 10px;", 4, "ngIf"], [2, "margin-left", "95px"], ["class", "arrayData", 4, "ngFor", "ngForOf"], [2, "display", "flex", "width", "100%", "margin-top", "5%", "justify-content", "left"], [1, "opt", 2, "margin-right", "1%", 3, "click"], [1, "opt"], [3, "value"], [2, "margin-top", "10px"], [2, "border", "0.5px solid black", 3, "ngModel", "ngModelChange"], [2, "display", "flex", "align-items", "center", "margin-top", "10px"], [1, "customDropdown", 2, "flex-direction", "row"], [2, "color", "#323e4a !important", "min-width", "150px"], [1, "dropIco", 2, "float", "right"], ["id", "down3", 1, "fas", "fa-angle-down"], ["id", "up3", 1, "fas", "fa-angle-up", 2, "display", "none"], [1, "dropdown-content", 2, "margin-top", "-2px"], [3, "click", 4, "ngFor", "ngForOf"], ["style", "color: red;", 4, "ngIf"], [3, "click"], [2, "color", "red"], [1, "arrayData"], [1, "fas", "fa-times", 2, "float", "right", "margin", "4px 10px", 3, "click"]],
    template: function BuyersCreditRequestComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "main", 1)(2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, BuyersCreditRequestComponent_section_3_Template, 11, 0, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, BuyersCreditRequestComponent_table_4_Template, 13, 1, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, BuyersCreditRequestComponent_div_5_Template, 35, 7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.step1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.step1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.step1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel],
    styles: ["*[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.heading[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 20px;\n  font-weight: 700;\n  margin-left: 23px;\n  color: #323e4a;\n}\n\n.table-heading[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 500;\n  color: #747474;\n}\n\n.box-shadow[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n\n.table-padding[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fff;\n  border-radius: 10px;\n  margin: 0;\n  box-shadow: 0 2px 10px rgba(58, 53, 65, 0.1019607843);\n}\n\n.upload-button[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n  font-weight: 100;\n  font-family: Poppins, sans-serif;\n  padding: 5px 8px;\n  font-size: 14px;\n  background-color: #49A2D7;\n  border: none;\n  border-radius: 5px;\n  margin-left: 2px;\n  margin-right: 2rem;\n}\n\nbutton[_ngcontent-%COMP%] {\n  outline: none;\n}\n\n.table-row[_ngcontent-%COMP%] {\n  background-color: #ffffff !important;\n  color: #707683;\n}\n\n.table-row[_ngcontent-%COMP%]:hover {\n  background: #f6f9ff !important;\n  border-left: 5px solid #49a2d7;\n}\n\nselect[_ngcontent-%COMP%] {\n  text-decoration: none;\n  border: none;\n  background: none;\n  color: #49a2d7;\n}\n\nselect[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.rect[_ngcontent-%COMP%] {\n  text-align: right;\n  min-width: 80px !important;\n}\n\n.sb-no[_ngcontent-%COMP%] {\n  color: #49a2d7;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  height: 68px;\n  vertical-align: middle !important;\n}\n\n.image[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  margin-top: 12fvpx;\n}\n\n.image2[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  margin-left: -13px;\n}\n\n.fl[_ngcontent-%COMP%] {\n  float: \"left\";\n}\n\n.fr[_ngcontent-%COMP%] {\n  float: \"right\";\n}\n\nspan.fs20[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\nspan.fs16[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\np.fs14[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.fs12[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.p-4[_ngcontent-%COMP%] {\n  padding: 4px;\n}\n\n.p-8[_ngcontent-%COMP%] {\n  z-index: 5000;\n  transform: scale(1, 1);\n  display: grid;\n  grid-template-columns: 29% 70%;\n}\n\n.p-20[_ngcontent-%COMP%] {\n  padding: 20px !important;\n}\n\n.p-12[_ngcontent-%COMP%] {\n  padding: 12px !important;\n}\n\n.p-16[_ngcontent-%COMP%] {\n  padding: 16px !important;\n}\n\n.pr-4[_ngcontent-%COMP%] {\n  padding-right: 4px;\n}\n\n.pr-8[_ngcontent-%COMP%] {\n  padding-right: 8px !important;\n}\n\n.pr-16[_ngcontent-%COMP%] {\n  padding-right: 16px;\n}\n\n.pt-30[_ngcontent-%COMP%] {\n  padding-top: 30px !important;\n}\n\n.pt-28[_ngcontent-%COMP%] {\n  padding-top: 28px !important;\n}\n\n.pt-25[_ngcontent-%COMP%] {\n  padding-top: 25px !important;\n}\n\n.pt-24[_ngcontent-%COMP%] {\n  padding-top: 24px !important;\n}\n\n.pt-22[_ngcontent-%COMP%] {\n  padding-top: 22px !important;\n}\n\n.pt-20[_ngcontent-%COMP%] {\n  padding-top: 20px !important;\n}\n\n.pt-19[_ngcontent-%COMP%] {\n  padding-top: 19px !important;\n}\n\n.pt-16[_ngcontent-%COMP%] {\n  padding-top: 16px !important;\n}\n\n.pt-14[_ngcontent-%COMP%] {\n  padding-top: 14px !important;\n}\n\n.pt-10[_ngcontent-%COMP%] {\n  padding-top: 10px !important;\n}\n\n.pt-8[_ngcontent-%COMP%] {\n  padding-top: 8px !important;\n}\n\n.pt-4[_ngcontent-%COMP%] {\n  padding-top: 4px;\n}\n\n.pt-2[_ngcontent-%COMP%] {\n  padding-top: 2px;\n}\n\n.pt-0[_ngcontent-%COMP%] {\n  padding-top: 0px !important;\n}\n\n.pb-28[_ngcontent-%COMP%] {\n  padding-bottom: 28px !important;\n}\n\n.pb-16[_ngcontent-%COMP%] {\n  padding-bottom: 16px !important;\n}\n\n.pv-4[_ngcontent-%COMP%] {\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n\n.pv-8[_ngcontent-%COMP%] {\n  padding-top: 8px !important;\n  padding-bottom: 8px !important;\n}\n\n.pv-10[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.pv-20[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.pv-14[_ngcontent-%COMP%] {\n  padding-top: 14px !important;\n  padding-bottom: 14px !important;\n}\n\n.pv-16[_ngcontent-%COMP%] {\n  padding-top: 16px !important;\n  padding-bottom: 16px !important;\n}\n\n.ph-5[_ngcontent-%COMP%] {\n  padding-right: 5px !important;\n  padding-left: 5px !important;\n}\n\n.ph-16[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n.ph-8[_ngcontent-%COMP%] {\n  padding-left: 8px !important;\n  padding-right: 8px !important;\n}\n\n.ph-10[_ngcontent-%COMP%] {\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n}\n\n.ph-4[_ngcontent-%COMP%] {\n  padding-left: 4px;\n  padding-right: 4px;\n}\n\n.ph-32[_ngcontent-%COMP%] {\n  padding-left: 32px;\n  padding-right: 32px;\n}\n\n.ph-38[_ngcontent-%COMP%] {\n  padding-left: 38px;\n  padding-right: 38px;\n}\n\n.ph-44[_ngcontent-%COMP%] {\n  padding-left: 44px;\n  padding-right: 44px;\n}\n\n.bb[_ngcontent-%COMP%] {\n  border-bottom: 0.1px solid #d3d3d3;\n  border-right: 0.1px solid #d3d3d3;\n}\n\n.bc[_ngcontent-%COMP%] {\n  background-color: #f8fafd;\n}\n\n.bcw[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #323e4a !important;\n}\n\n\n\n\n\n.m-4[_ngcontent-%COMP%] {\n  margin: 4px !important;\n}\n\n.m-8[_ngcontent-%COMP%] {\n  margin: 8px !important;\n}\n\n.m-16[_ngcontent-%COMP%] {\n  margin: 16px !important;\n}\n\n.mr-20[_ngcontent-%COMP%] {\n  margin-right: 20px !important;\n}\n\n.mr-8[_ngcontent-%COMP%] {\n  margin-right: 8px !important;\n}\n\n.ml-20[_ngcontent-%COMP%] {\n  margin-left: 20px !important;\n}\n\n.ml-24[_ngcontent-%COMP%] {\n  margin-left: 24px !important;\n}\n\n.mt-4[_ngcontent-%COMP%] {\n  margin-top: 4px !important;\n}\n\n.mt-8[_ngcontent-%COMP%] {\n  margin-top: 8px !important;\n}\n\n.mt-16[_ngcontent-%COMP%] {\n  margin-top: 16px !important;\n}\n\n.mt-24[_ngcontent-%COMP%] {\n  margin-top: 24px !important;\n}\n\n.mt-38[_ngcontent-%COMP%] {\n  margin-top: 38px !important;\n}\n\n.mh-8[_ngcontent-%COMP%] {\n  margin-left: 8px !important;\n  margin-right: 8px !important;\n}\n\n.mh-16[_ngcontent-%COMP%] {\n  margin-left: 16px !important;\n  margin-right: 16px !important;\n}\n\n.mv-4[_ngcontent-%COMP%] {\n  margin-top: 4px !important;\n  margin-bottom: 4px !important;\n}\n\n.mv-16[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  margin-bottom: 16px;\n}\n\n.mv-24[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  margin-bottom: 24px;\n}\n\n.mh--16[_ngcontent-%COMP%] {\n  margin-left: -16px !important;\n  margin-right: -16px !important;\n}\n\n.mh-8[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n.w100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.w70[_ngcontent-%COMP%] {\n  width: 70%;\n}\n\n.w50[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.w30[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.pc1[_ngcontent-%COMP%] {\n  width: 44.5%;\n  height: 35px;\n  float: right;\n  border-left: 1px solid rgb(104, 103, 103);\n}\n\n.tabbed[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  \n  background-color: #f8fafd;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding-right: 28px;\n  padding-left: 32px;\n}\n\n.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  \n  display: none;\n}\n\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  list-style: none;\n  background-color: white;\n  height: 100%;\n  padding: 1% 0;\n  padding-left: 30px;\n  margin-left: -30px;\n  width: 113%;\n}\n\n.tabs[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.tab[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 10px;\n  padding-right: 12px;\n  color: #606670;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-right: 10px;\n  border-right: 1px solid black;\n}\n\n.tab[_ngcontent-%COMP%]:hover   label[_ngcontent-%COMP%] {\n  border-top-color: #333;\n  color: #333;\n}\n\n.tab-content[_ngcontent-%COMP%] {\n  display: none;\n  color: #777;\n  background: #f8fafd;\n  margin: 10px !important;\n}\n\n\n\n.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(1):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(1)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(2):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(2)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(3):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(3)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(4):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(4)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(5):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(5)   label[_ngcontent-%COMP%] {\n  color: #49a2d7;\n  margin-right: 10px;\n}\n\n.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(1):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(1), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(2):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(2), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(3):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(3), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(4):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(4) {\n  display: block;\n}\n\n.hhu[_ngcontent-%COMP%]:active, .hhu[_ngcontent-%COMP%]:focus {\n  border: 2px solid red;\n}\n\n.form[_ngcontent-%COMP%] {\n  margin-left: 38px !important;\n  margin-right: 5%;\n  top: 50%;\n  left: 50%;\n  height: 316px;\n  background-color: white;\n  border: 1px dashed rgba(0, 0, 0, 0.4);\n}\n\n.form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif !important;\n  text-align: center;\n  line-height: 30px;\n  color: #303030;\n}\n\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-family: \"EuropaNuova-Regular\", sans-serif !important;\n  position: absolute;\n  margin: 0;\n  width: 89%;\n  height: 313px;\n  padding: 0;\n  outline: none;\n  cursor: pointer;\n  opacity: 0;\n}\n\n.form[_ngcontent-%COMP%]   .form_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  margin-left: 36.5%;\n  height: 42px;\n  cursor: pointer;\n  width: 160px;\n  background-color: #49a2d7;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #149174;\n  color: #0c5645;\n}\n\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  border: 0;\n}\n\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.xbutton[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #49a2d7;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.ybutton[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #0c354d;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.zbutton[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #947551;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.border1[_ngcontent-%COMP%] {\n  border-left: 3px solid #174d72;\n}\n\n.border2[_ngcontent-%COMP%] {\n  border-left: 3px solid #5fe6e7;\n}\n\n.border3[_ngcontent-%COMP%] {\n  border-left: 3px solid #e7845f;\n}\n\n.form-wrapper1[_ngcontent-%COMP%] {\n  flex-direction: column;\n  width: 100%;\n}\n\n.form-wrapper1[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 5.5%;\n}\n\n.form-wrapper1.td[_ngcontent-%COMP%] {\n  width: 100%;\n  width: 7%;\n}\n\n.full-input[_ngcontent-%COMP%] {\n  margin-left: 18px;\n  margin-bottom: 10px;\n  display: inline-block;\n  padding: 3px;\n  height: 74px;\n  width: 177px;\n  background-color: white;\n  border-radius: 5px;\n  box-shadow: 4px 4px 8px 4px #eeeefa;\n}\n\n.smalll-input[_ngcontent-%COMP%] {\n  width: 160px !important;\n  outline: none;\n  border: none;\n  display: block;\n  border-radius: 4px;\n  border: 1px solid #d5dbe8;\n  height: 35px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  padding: 5px 0px 5px 5px;\n  margin-bottom: 0px !important;\n  font-size: 12px;\n  font-weight: 500;\n  color: #72768a;\n}\n\n.sh1[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  margin-top: 15px;\n  font-size: 16px;\n  color: #606670;\n}\n\n.ss[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n\n#customers[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100% !important;\n  margin-left: 19px !important;\n  border-right: 1px solid #ddd;\n  border-left: 1px solid #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  height: 52px !important;\n  text-align: left;\n  font-weight: 300;\n  background-color: #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 52px !important;\n}\n\n.tab1[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  \n  display: inline-block;\n  height: 17px;\n  width: 17px;\n  color: #49a2d7;\n  margin-bottom: 10px;\n}\n\n.tab1[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + input[_ngcontent-%COMP%] {\n  background-color: #bfb;\n  border-color: #4c4;\n}\n\n.label1[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 10px;\n  padding-right: 12px;\n  color: #606670;\n  font-size: 12px;\n  letter-spacing: 1px;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-left: 30px;\n}\n\n.tab1[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.at[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding-right: 20px;\n  padding-left: 10px;\n}\n\n.ctb[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin-left: 210px;\n  background-color: #49a2d7;\n  padding: 12px 30px 11px 30px;\n  color: white;\n  border-radius: 4px;\n  cursor: pointer;\n  font-weight: 500;\n}\n\n.radio1[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  \n  display: inline-block;\n  height: 17px;\n  width: 17px;\n  color: #49a2d7;\n  margin-bottom: 10px;\n  border: 2px solid #49a2d7;\n}\n\n.radio1[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + input[_ngcontent-%COMP%] {\n  background-color: #bfb;\n  border-color: #4c4;\n}\n\n.label1[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 10px;\n  padding-right: 12px;\n  color: #606670;\n  font-size: 12px;\n  letter-spacing: 1px;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-left: 30px;\n}\n\n.radio1[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.stp1[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 500;\n  margin-bottom: 10px;\n  color: black;\n}\n\n.stp2[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin-bottom: 10px;\n  color: black;\n}\n\n.stp3[_ngcontent-%COMP%] {\n  color: #4a4a4a;\n  font-size: 14px;\n}\n\n.of1[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  font: 16px/26px Georgia, Garamond, Serif;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.side_document_list[_ngcontent-%COMP%] {\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 170vh;\n  border-right: 0.3px solid rgba(0, 0, 0, 0.2);\n}\n\n.profile_class[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  border-bottom: 0.3px solid rgba(0, 0, 0, 0.2);\n  padding: 3% 6%;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.activeBtn[_ngcontent-%COMP%] {\n  background-color: #f8fafd;\n  border-left: 8px solid rgb(61, 116, 197);\n}\n\n.table_top[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 29.55% 33% 30% 6%;\n  border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);\n  align-items: center;\n}\n\n.invoices_tab[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  height: 100vh;\n  background-color: #f8fafd;\n}\n\n.invoices_inner[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #f8fafd;\n}\n\n.inner_tab_content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  background-color: white;\n}\n\n.invoice_head[_ngcontent-%COMP%] {\n  width: 95%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 5%;\n}\n\n.serial_detail[_ngcontent-%COMP%] {\n  width: 93%;\n  margin-top: 10px;\n  display: flex;\n  justify-content: right;\n  text-align: right;\n  font-weight: 500;\n}\n\n.transaction_tab[_ngcontent-%COMP%] {\n  width: 770px;\n  height: 1387px;\n}\n\n.form_inner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  justify-content: center;\n}\n\n.opt[_ngcontent-%COMP%] {\n  background-color: #49a2d7;\n  padding: 0 3%;\n  height: 42px;\n  box-shadow: 4px 0px 7px #109cf1;\n  border: none;\n  color: white;\n}\n\n#container[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n.savBtn[_ngcontent-%COMP%] {\n  background-color: #49A2D7;\n  color: white;\n  border: 1px solid rgba(0, 0, 0, 0.4);\n  font-size: 14px;\n  cursor: pointer;\n  border-radius: 2px;\n  width: 60px;\n  margin-left: -2%;\n}\n\n.content-wrap[_ngcontent-%COMP%] {\n  z-index: 0;\n  height: 100vh;\n  position: absolute;\n  left: 260px;\n  margin: auto;\n  width: 78vw;\n}\n\n#container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  min-height: 100%;\n}\n\ntable[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.analytics[_ngcontent-%COMP%]   .support[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.header-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 0.8%;\n  padding-left: 1%;\n  padding-bottom: 0.8%;\n  border-bottom: 1px solid black;\n  width: 99%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1eWVycy1jcmVkaXQtcmVxdWVzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtDQUFBO0FBQ0o7O0FBS0E7RUFDSSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUZKOztBQVNBO0VBQ0ksa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFOSjs7QUFVQTtFQUNJLDJCQUFBO0FBUEo7O0FBVUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxxREFBQTtBQVBKOztBQVVBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBUEo7O0FBVUE7RUFDSSxhQUFBO0FBUEo7O0FBVUE7RUFDSSxvQ0FBQTtFQUNBLGNBQUE7QUFQSjs7QUFVQTtFQUNJLDhCQUFBO0VBQ0EsOEJBQUE7QUFQSjs7QUFVQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQVBKOztBQVVBO0VBQ0ksYUFBQTtBQVBKOztBQVVBO0VBQ0ksaUJBQUE7RUFDQSwwQkFBQTtBQVBKOztBQVVBO0VBQ0ksY0FBQTtBQVBKOztBQVVBOztFQUVJLFlBQUE7RUFDQSxpQ0FBQTtBQVBKOztBQVVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBUEo7O0FBVUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBUEo7O0FBVUE7RUFDSSxhQUFBO0FBUEo7O0FBVUE7RUFDSSxjQUFBO0FBUEo7O0FBVUE7RUFDSSxlQUFBO0FBUEo7O0FBVUE7RUFDSSxlQUFBO0FBUEo7O0FBVUE7RUFDSSxlQUFBO0FBUEo7O0FBVUE7RUFDSSxlQUFBO0FBUEo7O0FBVUE7RUFDSSxZQUFBO0FBUEo7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LFlBQUE7QUEzQko7O0FBOEJBO0VBQ0ksY0FBQTtBQTNCSjs7QUE4QkE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUEzQko7O0FBOEJBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQTNCSjs7QUE4QkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBM0JKOztBQThCQTtFQUNJLGdCQUFBO0FBM0JKOztBQThCQTtFQUNJLGdCQUFBO0FBM0JKOztBQThCQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7QUEzQkoiLCJmaWxlIjoiYnV5ZXJzLWNyZWRpdC1yZXF1ZXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi8vIC50YWJsZSB0aGVhZCB0aHtcclxuLy8gICAgIGJvcmRlcjogbm9uZTtcclxuLy8gfVxyXG4uaGVhZGluZyB7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIzcHg7XHJcbiAgICBjb2xvcjogIzMyM2U0YTtcclxufVxyXG5cclxuLy8gLmRyb3Bkb3duIHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTRweDtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbi8vIH1cclxuLnRhYmxlLWhlYWRpbmcge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjNzQ3NDc0O1xyXG4gICAgLy9vcGFjaXR5OiA1MCU7XHJcbn1cclxuXHJcbi5ib3gtc2hhZG93IHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRhYmxlLXBhZGRpbmcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggIzNhMzU0MTFhO1xyXG59XHJcblxyXG4udXBsb2FkLWJ1dHRvbiB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLCBzYW5zLXNlcmlmO1xyXG4gICAgcGFkZGluZzogNXB4IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OUEyRDc7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLnRhYmxlLXJvdyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzcwNzY4MztcclxufVxyXG5cclxuLnRhYmxlLXJvdzpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjZmOWZmICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0OWEyZDc7XHJcbn1cclxuXHJcbnNlbGVjdCB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgY29sb3I6ICM0OWEyZDc7XHJcbn1cclxuXHJcbnNlbGVjdDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ucmVjdCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIG1pbi13aWR0aDogODBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2Itbm8ge1xyXG4gICAgY29sb3I6ICM0OWEyZDc7XHJcbn1cclxuXHJcbnRoLFxyXG50ZCB7XHJcbiAgICBoZWlnaHQ6IDY4cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi10b3A6IDEyZnZweDtcclxufVxyXG5cclxuLmltYWdlMiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xM3B4O1xyXG59XHJcblxyXG4uZmwge1xyXG4gICAgZmxvYXQ6IFwibGVmdFwiO1xyXG59XHJcblxyXG4uZnIge1xyXG4gICAgZmxvYXQ6IFwicmlnaHRcIjtcclxufVxyXG5cclxuc3Bhbi5mczIwIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuc3Bhbi5mczE2IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxucC5mczE0IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmZzMTIge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ucC00IHtcclxuICAgIHBhZGRpbmc6IDRweDtcclxufVxyXG5cclxuLnAtOCB7XHJcbiAgICB6LWluZGV4OiA1MDAwO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI5JSA3MCU7XHJcbn1cclxuXHJcbi5wLTIwIHtcclxuICAgIHBhZGRpbmc6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnAtMTIge1xyXG4gICAgcGFkZGluZzogMTJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucC0xNiB7XHJcbiAgICBwYWRkaW5nOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wci00IHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcclxufVxyXG5cclxuLnByLTgge1xyXG4gICAgcGFkZGluZy1yaWdodDogOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wci0xNiB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG59XHJcblxyXG4ucHQtMzAge1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnB0LTI4IHtcclxuICAgIHBhZGRpbmctdG9wOiAyOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wdC0yNSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHQtMjQge1xyXG4gICAgcGFkZGluZy10b3A6IDI0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnB0LTIyIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wdC0yMCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHQtMTkge1xyXG4gICAgcGFkZGluZy10b3A6IDE5cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnB0LTE2IHtcclxuICAgIHBhZGRpbmctdG9wOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wdC0xNCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHQtMTAge1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnB0LTgge1xyXG4gICAgcGFkZGluZy10b3A6IDhweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHQtNCB7XHJcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG59XHJcblxyXG4ucHQtMiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG59XHJcblxyXG4ucHQtMCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wYi0yOCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjhweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGItMTYge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE2cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnB2LTQge1xyXG4gICAgcGFkZGluZy10b3A6IDRweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbn1cclxuXHJcbi5wdi04IHtcclxuICAgIHBhZGRpbmctdG9wOiA4cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnB2LTEwIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5wdi0yMCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ucHYtMTQge1xyXG4gICAgcGFkZGluZy10b3A6IDE0cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wdi0xNiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE2cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBoLTUge1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGgtMTYge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcclxufVxyXG5cclxuLnBoLTgge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDhweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGgtMTAge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5waC00IHtcclxuICAgIHBhZGRpbmctbGVmdDogNHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNHB4O1xyXG59XHJcblxyXG4ucGgtMzIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzJweDtcclxufVxyXG5cclxuLnBoLTM4IHtcclxuICAgIHBhZGRpbmctbGVmdDogMzhweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDM4cHg7XHJcbn1cclxuXHJcbi5waC00NCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQ0cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0NHB4O1xyXG59XHJcblxyXG4uYmIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMC4xcHggc29saWQgI2QzZDNkMztcclxuICAgIGJvcmRlci1yaWdodDogMC4xcHggc29saWQgI2QzZDNkMztcclxufVxyXG5cclxuLmJjIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmQ7XHJcbn1cclxuXHJcbi5iY3cge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogIzMyM2U0YSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS1wYWRkaW5nLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tbWFyZ2luLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi5tLTQge1xyXG4gICAgbWFyZ2luOiA0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm0tOCB7XHJcbiAgICBtYXJnaW46IDhweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubS0xNiB7XHJcbiAgICBtYXJnaW46IDE2cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1yLTIwIHtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXItOCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWwtMjAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1sLTI0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tdC00IHtcclxuICAgIG1hcmdpbi10b3A6IDRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXQtOCB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm10LTE2IHtcclxuICAgIG1hcmdpbi10b3A6IDE2cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm10LTI0IHtcclxuICAgIG1hcmdpbi10b3A6IDI0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm10LTM4IHtcclxuICAgIG1hcmdpbi10b3A6IDM4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1oLTgge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1oLTE2IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm12LTQge1xyXG4gICAgbWFyZ2luLXRvcDogNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm12LTE2IHtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG4ubXYtMjQge1xyXG4gICAgbWFyZ2luLXRvcDogMjRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbn1cclxuXHJcbi5taC0tMTYge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5taC04IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLncxMDAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi53NzAge1xyXG4gICAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuLnc1MCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4udzMwIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbn1cclxuXHJcbi5wYzEge1xyXG4gICAgd2lkdGg6IDQ0LjUlO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2IoMTA0LCAxMDMsIDEwMyk7XHJcbn1cclxuXHJcbi50YWJiZWQge1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgLyogc28gd2UgY291bGQgZWFzaWx5IGhpZGUgdGhlIHJhZGlvIGlucHV0cyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmZDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyOHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMnB4O1xyXG59XHJcblxyXG4udGFiYmVkIFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgLyogaGlkaW5nIHRoZSBpbnB1dHMgKi9cclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi50YWJzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAvL21hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxJSAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xyXG4gICAgd2lkdGg6IDExMyU7XHJcbn1cclxuXHJcbi50YWJzIGxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLnRhYj5sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xyXG4gICAgY29sb3I6ICM2MDY2NzA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4udGFiOmhvdmVyIGxhYmVsIHtcclxuICAgIGJvcmRlci10b3AtY29sb3I6ICMzMzM7XHJcbiAgICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLnRhYi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBjb2xvcjogIzc3NztcclxuICAgIGJhY2tncm91bmQ6ICNmOGZhZmQ7XHJcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgLy8gcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4vKiBBcyB3ZSBjYW5ub3QgcmVwbGFjZSB0aGUgbnVtYmVycyB3aXRoIHZhcmlhYmxlcyBvciBjYWxscyB0byBlbGVtZW50IHByb3BlcnRpZXMsIHRoZSBudW1iZXIgb2YgdGhpcyBzZWxlY3RvciBwYXJ0cyBpcyBvdXIgdGFiIGNvdW50IGxpbWl0ICovXHJcblxyXG4udGFiYmVkIFt0eXBlPVwicmFkaW9cIl06bnRoLW9mLXR5cGUoMSk6Y2hlY2tlZH4udGFicyAudGFiOm50aC1vZi10eXBlKDEpIGxhYmVsLFxyXG4udGFiYmVkIFt0eXBlPVwicmFkaW9cIl06bnRoLW9mLXR5cGUoMik6Y2hlY2tlZH4udGFicyAudGFiOm50aC1vZi10eXBlKDIpIGxhYmVsLFxyXG4udGFiYmVkIFt0eXBlPVwicmFkaW9cIl06bnRoLW9mLXR5cGUoMyk6Y2hlY2tlZH4udGFicyAudGFiOm50aC1vZi10eXBlKDMpIGxhYmVsLFxyXG4udGFiYmVkIFt0eXBlPVwicmFkaW9cIl06bnRoLW9mLXR5cGUoNCk6Y2hlY2tlZH4udGFicyAudGFiOm50aC1vZi10eXBlKDQpIGxhYmVsLFxyXG4udGFiYmVkIFt0eXBlPVwicmFkaW9cIl06bnRoLW9mLXR5cGUoNSk6Y2hlY2tlZH4udGFicyAudGFiOm50aC1vZi10eXBlKDUpIGxhYmVsIHtcclxuICAgIGNvbG9yOiAjNDlhMmQ3O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4udGFiYmVkIFt0eXBlPVwicmFkaW9cIl06bnRoLW9mLXR5cGUoMSk6Y2hlY2tlZH4udGFiLWNvbnRlbnQ6bnRoLW9mLXR5cGUoMSksXHJcbi50YWJiZWQgW3R5cGU9XCJyYWRpb1wiXTpudGgtb2YtdHlwZSgyKTpjaGVja2Vkfi50YWItY29udGVudDpudGgtb2YtdHlwZSgyKSxcclxuLnRhYmJlZCBbdHlwZT1cInJhZGlvXCJdOm50aC1vZi10eXBlKDMpOmNoZWNrZWR+LnRhYi1jb250ZW50Om50aC1vZi10eXBlKDMpLFxyXG4udGFiYmVkIFt0eXBlPVwicmFkaW9cIl06bnRoLW9mLXR5cGUoNCk6Y2hlY2tlZH4udGFiLWNvbnRlbnQ6bnRoLW9mLXR5cGUoNCkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5oaHU6YWN0aXZlLFxyXG4uaGh1OmZvY3VzIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcclxufVxyXG5cclxuLmZvcm0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM4cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIGhlaWdodDogMzE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbn1cclxuXHJcbi5mb3JtIHAge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICAvLyBoZWlnaHQ6IDIzcHggIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgY29sb3I6ICMzMDMwMzA7XHJcbn1cclxuXHJcbi5mb3JtIGlucHV0IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkV1cm9wYU51b3ZhLVJlZ3VsYXJcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6IDg5JTtcclxuICAgIGhlaWdodDogMzEzcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5mb3JtIC5mb3JtX2lubmVyIGJ1dHRvbiB7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogMzYlO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM2LjUlO1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5YTJkNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IDBweCAjNDlhMmQ3O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmZvcm0gYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMxNDkxNzQ7XHJcbiAgICBjb2xvcjogIzBjNTY0NTtcclxufVxyXG5cclxuLmZvcm0gYnV0dG9uOmFjdGl2ZSB7XHJcbiAgICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzLFxyXG50ZXh0YXJlYTpmb2N1cyxcclxuc2VsZWN0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi54YnV0dG9uIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDlhMmQ3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggMHB4ICM0OWEyZDc7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ueWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBjMzU0ZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IDBweCAjNDlhMmQ3O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLnpidXR0b24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NDc1NTE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAwcHggIzQ5YTJkNztcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5ib3JkZXIxIHtcclxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzE3NGQ3MjtcclxufVxyXG5cclxuLmJvcmRlcjIge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjNWZlNmU3O1xyXG59XHJcblxyXG4uYm9yZGVyMyB7XHJcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNlNzg0NWY7XHJcbn1cclxuXHJcbi5mb3JtLXdyYXBwZXIxIHtcclxuICAgIC8vZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZvcm0td3JhcHBlcjEgZGl2IHRkIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDUuNSU7XHJcbn1cclxuXHJcbi5mb3JtLXdyYXBwZXIxLnRkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgd2lkdGg6IDclO1xyXG59XHJcblxyXG4uZnVsbC1pbnB1dCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMThweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBoZWlnaHQ6IDc0cHg7XHJcbiAgICB3aWR0aDogMTc3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggOHB4IDRweCAjZWVlZWZhO1xyXG59XHJcblxyXG4uc21hbGxsLWlucHV0IHtcclxuICAgIHdpZHRoOiAxNjBweCAhaW1wb3J0YW50O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q1ZGJlODtcclxuICAgIGhlaWdodDogMzVweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA1cHggMHB4IDVweCA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzcyNzY4YTtcclxufVxyXG5cclxuLnNoMSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzYwNjY3MDtcclxufVxyXG5cclxuLnNzIHtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jY3VzdG9tZXJzIHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTlweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RkZDtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RkZDtcclxufVxyXG5cclxuI2N1c3RvbWVycyB0ZCxcclxuI2N1c3RvbWVycyB0aCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxufVxyXG5cclxuI2N1c3RvbWVycyB0aCB7XHJcbiAgICBoZWlnaHQ6IDUycHggIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxufVxyXG5cclxuI2N1c3RvbWVycyB0ZCB7XHJcbiAgICBoZWlnaHQ6IDUycHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRhYjEgW3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgICAvKiBoaWRpbmcgdGhlIGlucHV0cyAqL1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxN3B4O1xyXG4gICAgd2lkdGg6IDE3cHg7XHJcbiAgICBjb2xvcjogIzQ5YTJkNztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi50YWIxIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkK2lucHV0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZmI7XHJcbiAgICBib3JkZXItY29sb3I6ICM0YzQ7XHJcbn1cclxuXHJcbi5sYWJlbDEge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcbiAgICBjb2xvcjogIzYwNjY3MDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4udGFiMSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uYXQge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuLmN0YiB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDlhMmQ3O1xyXG4gICAgcGFkZGluZzogMTJweCAzMHB4IDExcHggMzBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5yYWRpbzEgW3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgICAvKiBoaWRpbmcgdGhlIGlucHV0cyAqL1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxN3B4O1xyXG4gICAgd2lkdGg6IDE3cHg7XHJcbiAgICBjb2xvcjogIzQ5YTJkNztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNDlhMmQ3O1xyXG59XHJcblxyXG4ucmFkaW8xIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkK2lucHV0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZmI7XHJcbiAgICBib3JkZXItY29sb3I6ICM0YzQ7XHJcbn1cclxuXHJcbi5sYWJlbDEge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcbiAgICBjb2xvcjogIzYwNjY3MDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4ucmFkaW8xIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5zdHAxIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uc3RwMiB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uc3RwMyB7XHJcbiAgICBjb2xvcjogIzRhNGE0YTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLm9mMSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgZm9udDogMTZweC8yNnB4IEdlb3JnaWEsIEdhcmFtb25kLCBTZXJpZjtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG50YWJsZSB0Ym9keSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8vU0lERSBQRU9QTEUgTElTVFxyXG4uc2lkZV9kb2N1bWVudF9saXN0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxNzB2aDtcclxuICAgIGJvcmRlci1yaWdodDogMC4zcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4vL1BST0ZJTEUgQ0xBU1NTU1MvXHJcbi5wcm9maWxlX2NsYXNzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1ib3R0b206IDAuM3B4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIHBhZGRpbmc6IDMlIDYlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8vIC5wcm9maWxlX2NsYXNzOmhvdmVyIHtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZkO1xyXG4vLyAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgcmdiKDYxLCAxMTYsIDE5Nyk7XHJcbi8vIH1cclxuLmFjdGl2ZUJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZkO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCByZ2IoNjEsIDExNiwgMTk3KTtcclxufVxyXG5cclxuLnRhYmxlX3RvcCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyOS41NSUgMzMlIDMwJSA2JTtcclxuICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnZvaWNlc190YWIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmQ7XHJcbn1cclxuXHJcbi5pbnZvaWNlc19pbm5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmQ7XHJcbn1cclxuXHJcbi5pbm5lcl90YWJfY29udGVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaW52b2ljZV9oZWFkIHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbn1cclxuXHJcbi5zZXJpYWxfZGV0YWlsIHtcclxuICAgIHdpZHRoOiA5MyU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogcmlnaHQ7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbl90YWIge1xyXG4gICAgd2lkdGg6IDc3MHB4O1xyXG4gICAgaGVpZ2h0OiAxMzg3cHg7XHJcbn1cclxuXHJcbi5mb3JtX2lubmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLm9wdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDlhMmQ3O1xyXG4gICAgcGFkZGluZzogMCAzJTtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIGJveC1zaGFkb3c6IDRweCAwcHggN3B4ICMxMDljZjE7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNjb250YWluZXIge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5zYXZCdG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5QTJENztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yJTtcclxufVxyXG5cclxuLmNvbnRlbnQtd3JhcCB7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDI2MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDc4dnc7XHJcbn1cclxuXHJcbiNjb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uYW5hbHl0aWNzIC5zdXBwb3J0IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5oZWFkZXItcGFuZWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDAuOCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDElO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuOCU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICB3aWR0aDogOTklO1xyXG59Il19 */"]
  });
  return BuyersCreditRequestComponent;
})();

/***/ })

}]);
//# sourceMappingURL=src_app_home_buyers-credit-request_buyers-credit-request-module_ts.js.map