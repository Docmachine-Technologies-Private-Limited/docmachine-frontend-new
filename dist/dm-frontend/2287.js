"use strict";
(self["webpackChunkdm_frontend"] = self["webpackChunkdm_frontend"] || []).push([[2287],{

/***/ 24289:
/*!*******************************************!*\
  !*** ./src/app/home/boe/boe.component.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BOEComponent": () => (/* binding */ BOEComponent)
/* harmony export */ });
/* harmony import */ var D_Bharathexim_Repo_docmachine_frontend_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 8239);
/* harmony import */ var _service_document_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/document.service */ 76852);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! xlsx */ 64841);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 93329);
/* harmony import */ var _shared_Data_Servies_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-Data-Servies/shared-data.service */ 10241);
/* harmony import */ var src_app_service_window_information_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/window-information.service */ 23087);
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../service/user.service */ 84981);
/* harmony import */ var _currency_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../currency.json */ 35743);
/* harmony import */ var src_app_service_aprroval_pending_reject_transactions_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/aprroval-pending-reject-transactions.service */ 56869);
/* harmony import */ var _confirm_dialog_box_confirm_dialog_box_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../confirm-dialog-box/confirm-dialog-box.component */ 43970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 64537);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 7976);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 5998);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ 48292);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 88696);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 88692);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 20092);
/* harmony import */ var _custom_Filter_filter_toggle_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../custom/Filter/filter-toggle.directive */ 72173);





























const _c0 = ["epltable"];

function BOEComponent_div_5_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function BOEComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "People collaborated");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, BOEComponent_div_5_span_5_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 16)(8, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BOEComponent_div_5_Template_img_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r10.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind3"](6, 1, ctx_r0.item1, 0, 3));
  }
}

function BOEComponent_div_6_option_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const Buyer_Name_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", Buyer_Name_r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", Buyer_Name_r23, " ");
  }
}

function BOEComponent_div_6_option_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const PI_PO_No_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", PI_PO_No_r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", PI_PO_No_r24, " ");
  }
}

function BOEComponent_div_6_option_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const Origin_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", Origin_r25, " ");
  }
}

function BOEComponent_div_6_option_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const Origin_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", Origin_r26, " ");
  }
}

function BOEComponent_div_6_option_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const Origin_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", Origin_r27, " ");
  }
}

function BOEComponent_div_6_option_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const Origin_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", Origin_r28, " ");
  }
}

function BOEComponent_div_6_option_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const Origin_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", Origin_r29, " ");
  }
}

function BOEComponent_div_6_option_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const Origin_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", Origin_r30, " ");
  }
}

function BOEComponent_div_6_option_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const Currency_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", Currency_r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", Currency_r31, " ");
  }
}

function BOEComponent_div_6_option_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const SB_DATE_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", SB_DATE_r32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", SB_DATE_r32, " ");
  }
}

function BOEComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 20)(1, "div", 21)(2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 24)(5, "div", 25)(6, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BOEComponent_div_6_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r33.exportToExcel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Export");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 28)(10, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BOEComponent_div_6_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r34);

      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](14);

      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](_r12.style.display = "block");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "Filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 31, 32)(15, "form", 33)(16, "div", 22)(17, "div", 34)(18, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "Buyer name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "select", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function BOEComponent_div_6_Template_select_change_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r34);

      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](14);

      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      ctx_r36.filter($event.target.value, "benneName");
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](_r12.style.display = "none");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "Buyer name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, BOEComponent_div_6_option_23_Template, 2, 2, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "div", 34)(25, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "BOE NUMBER");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "select", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function BOEComponent_div_6_Template_select_change_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r34);

      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](14);

      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      ctx_r37.filter($event.target.value, "boeNumber");
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](_r12.style.display = "none");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "BOE NUMBER");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](30, BOEComponent_div_6_option_30_Template, 2, 2, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "div", 34)(32, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, "AD CODE");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "select", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function BOEComponent_div_6_Template_select_change_34_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r34);

      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](14);

      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      ctx_r38.filter($event.target.value, "adCode");
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](_r12.style.display = "none");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36, "AD CODE");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](37, BOEComponent_div_6_option_37_Template, 2, 1, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "div", 34)(39, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40, "AD BILL NO.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "select", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function BOEComponent_div_6_Template_select_change_41_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r34);

      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](14);

      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      ctx_r39.filter($event.target.value, "adBillNo");
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](_r12.style.display = "none");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](43, "AD BILL NO.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](44, BOEComponent_div_6_option_44_Template, 2, 1, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "div", 34)(46, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](47, "IEC CODE");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "select", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function BOEComponent_div_6_Template_select_change_48_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r34);

      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](14);

      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      ctx_r40.filter($event.target.value, "iecCode");
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](_r12.style.display = "none");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](50, "IEC CODE");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](51, BOEComponent_div_6_option_51_Template, 2, 1, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "div", 34)(53, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](54, "IEC NAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](55, "select", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function BOEComponent_div_6_Template_select_change_55_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r34);

      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](14);

      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      ctx_r41.filter($event.target.value, "iecName");
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](_r12.style.display = "none");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](57, "IEC NAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](58, BOEComponent_div_6_option_58_Template, 2, 1, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](59, "div", 34)(60, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](61, "ORIGIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](62, "select", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function BOEComponent_div_6_Template_select_change_62_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r34);

      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](14);

      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      ctx_r42.filter($event.target.value, "origin");
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](_r12.style.display = "none");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](63, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](64, "ORIGIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](65, BOEComponent_div_6_option_65_Template, 2, 1, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](66, "div", 34)(67, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](68, "DISCHARGE PORT");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](69, "select", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function BOEComponent_div_6_Template_select_change_69_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r34);

      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](14);

      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      ctx_r43.filter($event.target.value, "dischargePort");
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](_r12.style.display = "none");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](70, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](71, "DISCHARGE PORT");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](72, BOEComponent_div_6_option_72_Template, 2, 1, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](73, "div", 34)(74, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](75, "Currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](76, "select", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function BOEComponent_div_6_Template_select_change_76_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r34);

      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](14);

      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      ctx_r44.filter($event.target.value, "currency");
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](_r12.style.display = "none");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](77, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](78, "Currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](79, BOEComponent_div_6_option_79_Template, 2, 2, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](80, "div", 34)(81, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](82, "DATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](83, "select", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function BOEComponent_div_6_Template_select_change_83_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r34);

      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](14);

      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      ctx_r45.filter($event.target.value, "boeDate");
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](_r12.style.display = "none");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](84, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](85, "DATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](86, BOEComponent_div_6_option_86_Template, 2, 2, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](87, "div", 44)(88, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BOEComponent_div_6_Template_button_click_88_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r34);

      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](14);

      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      ctx_r46.resetFilter();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](_r12.style.display = "none");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](89, "RESET");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](90, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](91, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BOEComponent_div_6_Template_button_click_91_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r34);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r47.uploadNew());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](92, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](93, " ADD NEW ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r1.ALL_FILTER_DATA == null ? null : ctx_r1.ALL_FILTER_DATA.Buyer_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r1.ALL_FILTER_DATA == null ? null : ctx_r1.ALL_FILTER_DATA.BOE_NUMBER);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r1.ALL_FILTER_DATA == null ? null : ctx_r1.ALL_FILTER_DATA.AD_CODE);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r1.ALL_FILTER_DATA == null ? null : ctx_r1.ALL_FILTER_DATA.AD_BILL_NO);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r1.ALL_FILTER_DATA == null ? null : ctx_r1.ALL_FILTER_DATA.IEC_CODE);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r1.ALL_FILTER_DATA == null ? null : ctx_r1.ALL_FILTER_DATA.IEC_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r1.ALL_FILTER_DATA == null ? null : ctx_r1.ALL_FILTER_DATA.ORIGIN);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r1.ALL_FILTER_DATA == null ? null : ctx_r1.ALL_FILTER_DATA.DISCHARGE_PORT);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r1.ALL_FILTER_DATA == null ? null : ctx_r1.ALL_FILTER_DATA.Currency);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r1.ALL_FILTER_DATA == null ? null : ctx_r1.ALL_FILTER_DATA.DATE);
  }
}

function BOEComponent_div_9_div_2_tr_36_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", data_r50.boeDate, " ");
  }
}

function BOEComponent_div_9_div_2_tr_36_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BOEComponent_div_9_div_2_tr_36_div_3_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r80);
      const data_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](data_r50.boeDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", data_r50.boeDate);
  }
}

function BOEComponent_div_9_div_2_tr_36_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BOEComponent_div_9_div_2_tr_36_div_9_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r84);
      const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      const data_r50 = ctx_r83.$implicit;
      const i_r51 = ctx_r83.index;
      const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r82.getInvoices(data_r50, i_r51) && ctx_r82.getTransactions(data_r50));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", data_r50.boeNumber, " ");
  }
}

function BOEComponent_div_9_div_2_tr_36_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BOEComponent_div_9_div_2_tr_36_div_10_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r88);
      const data_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](data_r50.boeNumber = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", data_r50.boeNumber);
  }
}

function BOEComponent_div_9_div_2_tr_36_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", data_r50.adCode, " ");
  }
}

function BOEComponent_div_9_div_2_tr_36_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BOEComponent_div_9_div_2_tr_36_div_13_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r93);
      const data_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](data_r50.adCode = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", data_r50.adCode);
  }
}

function BOEComponent_div_9_div_2_tr_36_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", data_r50.adBillNo, " ");
  }
}

function BOEComponent_div_9_div_2_tr_36_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BOEComponent_div_9_div_2_tr_36_div_16_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r98);
      const data_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](data_r50.adBillNo = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", data_r50.adBillNo);
  }
}

function BOEComponent_div_9_div_2_tr_36_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", data_r50.benneName, " ");
  }
}

function BOEComponent_div_9_div_2_tr_36_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BOEComponent_div_9_div_2_tr_36_div_19_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r103);
      const data_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](data_r50.benneName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", data_r50.benneName);
  }
}

function BOEComponent_div_9_div_2_tr_36_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", data_r50.iecCode, " ");
  }
}

function BOEComponent_div_9_div_2_tr_36_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BOEComponent_div_9_div_2_tr_36_div_22_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r108);
      const data_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](data_r50.iecCode = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", data_r50.iecCode);
  }
}

function BOEComponent_div_9_div_2_tr_36_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", data_r50.iecName, " ");
  }
}

function BOEComponent_div_9_div_2_tr_36_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BOEComponent_div_9_div_2_tr_36_div_25_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r113);
      const data_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](data_r50.iecName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", data_r50.iecName);
  }
}

function BOEComponent_div_9_div_2_tr_36_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", data_r50.origin, " ");
  }
}

function BOEComponent_div_9_div_2_tr_36_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BOEComponent_div_9_div_2_tr_36_div_28_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r118);
      const data_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](data_r50.origin = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", data_r50.origin);
  }
}

function BOEComponent_div_9_div_2_tr_36_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", data_r50.dischargePort, " ");
  }
}

function BOEComponent_div_9_div_2_tr_36_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BOEComponent_div_9_div_2_tr_36_div_31_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r123);
      const data_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](data_r50.dischargePort = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", data_r50.dischargePort);
  }
}

function BOEComponent_div_9_div_2_tr_36_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", data_r50.currency, " ");
  }
}

function BOEComponent_div_9_div_2_tr_36_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BOEComponent_div_9_div_2_tr_36_div_34_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r128);
      const data_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](data_r50.currency = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", data_r50.currency);
  }
}

function BOEComponent_div_9_div_2_tr_36_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", data_r50.invoiceAmount, " ");
  }
}

function BOEComponent_div_9_div_2_tr_36_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r133 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BOEComponent_div_9_div_2_tr_36_div_37_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r133);
      const data_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](data_r50.invoiceAmount = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", data_r50.invoiceAmount);
  }
}

function BOEComponent_div_9_div_2_tr_36_button_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BOEComponent_div_9_div_2_tr_36_button_41_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r137);
      const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      const data_r50 = ctx_r136.$implicit;
      const i_r51 = ctx_r136.index;
      const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r135.toSave(data_r50, i_r51));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function BOEComponent_div_9_div_2_tr_36_button_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r140 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BOEComponent_div_9_div_2_tr_36_button_42_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r140);
      const i_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().index;
      const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r138.toEdit(i_r51));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function BOEComponent_div_9_div_2_tr_36_button_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r143 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BOEComponent_div_9_div_2_tr_36_button_43_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r143);
      const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      const data_r50 = ctx_r142.$implicit;
      const i_r51 = ctx_r142.index;
      const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r141.handleDelete(data_r50._id, i_r51));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "a", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}

function BOEComponent_div_9_div_2_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr", 60)(1, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, BOEComponent_div_9_div_2_tr_36_div_2_Template, 2, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, BOEComponent_div_9_div_2_tr_36_div_3_Template, 2, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, BOEComponent_div_9_div_2_tr_36_div_9_Template, 2, 1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, BOEComponent_div_9_div_2_tr_36_div_10_Template, 2, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, BOEComponent_div_9_div_2_tr_36_div_12_Template, 2, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, BOEComponent_div_9_div_2_tr_36_div_13_Template, 2, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, BOEComponent_div_9_div_2_tr_36_div_15_Template, 2, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, BOEComponent_div_9_div_2_tr_36_div_16_Template, 2, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, BOEComponent_div_9_div_2_tr_36_div_18_Template, 2, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, BOEComponent_div_9_div_2_tr_36_div_19_Template, 2, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](21, BOEComponent_div_9_div_2_tr_36_div_21_Template, 2, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](22, BOEComponent_div_9_div_2_tr_36_div_22_Template, 2, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](24, BOEComponent_div_9_div_2_tr_36_div_24_Template, 2, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](25, BOEComponent_div_9_div_2_tr_36_div_25_Template, 2, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](27, BOEComponent_div_9_div_2_tr_36_div_27_Template, 2, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](28, BOEComponent_div_9_div_2_tr_36_div_28_Template, 2, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](30, BOEComponent_div_9_div_2_tr_36_div_30_Template, 2, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](31, BOEComponent_div_9_div_2_tr_36_div_31_Template, 2, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](33, BOEComponent_div_9_div_2_tr_36_div_33_Template, 2, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](34, BOEComponent_div_9_div_2_tr_36_div_34_Template, 2, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](36, BOEComponent_div_9_div_2_tr_36_div_36_Template, 2, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](37, BOEComponent_div_9_div_2_tr_36_div_37_Template, 2, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "td", 61)(39, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BOEComponent_div_9_div_2_tr_36_Template_a_click_39_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r145);
      const data_r50 = restoredCtx.$implicit;
      const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);

      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](12);

      ctx_r144.openBoe(_r5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r144.viewCN(data_r50));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](40, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](41, BOEComponent_div_9_div_2_tr_36_button_41_Template, 2, 0, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](42, BOEComponent_div_9_div_2_tr_36_button_42_Template, 2, 0, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](43, BOEComponent_div_9_div_2_tr_36_button_43_Template, 3, 0, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r50 = ctx.$implicit;
    const i_r51 = ctx.index;
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx_r49.AprrovalPendingRejectService.truefalse(data_r50["deleteflag"] == "0") || ctx_r49.AprrovalPendingRejectService.truefalse((ctx_r49.USER_DATA == null ? null : ctx_r49.USER_DATA.result == null ? null : ctx_r49.USER_DATA.result.Role_Type) != "Approver"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r49.optionsVisibility[i_r51]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r49.optionsVisibility[i_r51]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r49.getPipoNumbers(data_r50));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", data_r50.commercialNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r49.optionsVisibility[i_r51]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r49.optionsVisibility[i_r51]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r49.optionsVisibility[i_r51]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r49.optionsVisibility[i_r51]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r49.optionsVisibility[i_r51]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r49.optionsVisibility[i_r51]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r49.optionsVisibility[i_r51]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r49.optionsVisibility[i_r51]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r49.optionsVisibility[i_r51]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r49.optionsVisibility[i_r51]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r49.optionsVisibility[i_r51]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r49.optionsVisibility[i_r51]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r49.optionsVisibility[i_r51]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r49.optionsVisibility[i_r51]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r49.optionsVisibility[i_r51]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r49.optionsVisibility[i_r51]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r49.optionsVisibility[i_r51]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r49.optionsVisibility[i_r51]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r49.optionsVisibility[i_r51]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r49.optionsVisibility[i_r51]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r49.optionsVisibility[i_r51]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r49.optionsVisibility[i_r51]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r49.optionsVisibility[i_r51]);
  }
}

function BOEComponent_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 52)(1, "section", 53)(2, "div", 54)(3, "table", 55)(4, "thead")(5, "tr", 56)(6, "th", 57)(7, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "DATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "PIPO NUMBER");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "CI NUMBER");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "BOE NUMBER");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "AD CODE");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "AD BILL NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "Beneficiary Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "IEC CODE");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "IEC NAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "ORIGIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "DISCHARGE PORT");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, "CURRENCY");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, "SB AMOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34, "Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](36, BOEComponent_div_9_div_2_tr_36_Template, 44, 28, "tr", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r48.FILTER_VALUE_LIST);
  }
}

function BOEComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 49)(1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, BOEComponent_div_9_div_2_Template, 37, 1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r3.showInvoice);
  }
}

function BOEComponent_div_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r153 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BOEComponent_div_10_div_2_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r153);
      const data_r150 = restoredCtx.$implicit;
      const i_r151 = restoredCtx.index;
      const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r152.getInvoices(data_r150, i_r151) && ctx_r152.getTransactions(data_r150.pi_poNo));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "img", 19)(3, "img", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 110)(5, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "p", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const data_r150 = ctx.$implicit;
    const i_r151 = ctx.index;
    const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx_r146.lastIndex == i_r151 ? "activeBtn" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", data_r150.boeNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", data_r150.boeDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r150.benneName);
  }
}

function BOEComponent_div_10_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 114)(1, "div", 115)(2, "span", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 117)(5, "div", 118)(6, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "PI/PO DETAILS");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 118)(9, "span", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 50)(12, "div", 121)(13, "section", 122)(14, "div", 123)(15, "div", 124)(16, "label", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "PI/PO NO.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "p", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 127)(21, "div", 128)(22, "label", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "Benne Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "p", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "div", 123)(27, "div", 128)(28, "label", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "Currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "p", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "div", 123)(33, "div", 128)(34, "label", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](35, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "p", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "div", 127)(39, "div", 128)(40, "label", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](41, "LEO DATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "p", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "div", 123)(45, "div", 128)(46, "label", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](47, "Last Day Of Shipment");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "p", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "div", 123)(51, "div", 128)(52, "label", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](53, "Payment Term");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "p", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "div", 127)(57, "div", 128)(58, "label", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](59, "PC Ref No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](60, "p", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](62, "div", 123)(63, "div", 128)(64, "label", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](65, "Due Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](66, "p", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](68, "iframe", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("PI/PO NUMBER:\u2003", ctx_r147.selectedRow.pi_poNo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("SHIPPING BILL DATE:\u2003", ctx_r147.selectedRow.date, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r147.selectedRow.pi_poNo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r147.selectedRow.benneName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r147.selectedRow.currency, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r147.selectedRow.amount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r147.selectedRow.incoterm, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r147.selectedRow.lastDayShipment, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r147.selectedRow.paymentTerm, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r147.selectedRow.pcRefNo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r147.selectedRow.dueDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx_r147.docu, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeResourceUrl"]);
  }
}

function BOEComponent_div_10_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r155 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 130)(1, "div", 131)(2, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 118)(5, "span", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "SB DETAILS");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 50)(10, "div", 121)(11, "section", 134)(12, "tr", 135)(13, "td", 136)(14, "label", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "DISCHARGE PORT");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "input", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BOEComponent_div_10_div_20_Template_input_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r155);
      const ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r154.selectedRow.dischargePort = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "td", 139)(18, "label", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "IEC CODE");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "input", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BOEComponent_div_10_div_20_Template_input_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r155);
      const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r156.selectedRow.iecCode = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "td", 142)(22, "label", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "IEC NAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "input", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BOEComponent_div_10_div_20_Template_input_ngModelChange_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r155);
      const ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r157.selectedRow.iecName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "td", 136)(27, "label", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "AD CODE");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "input", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BOEComponent_div_10_div_20_Template_input_ngModelChange_29_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r155);
      const ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r158.selectedRow.adCode = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "p", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31, "INVOICE DETAILS");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "td", 136)(33, "label", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34, "INVOICE NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "input", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BOEComponent_div_10_div_20_Template_input_ngModelChange_35_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r155);
      const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r159.selectedRow.invoiceNumber = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "td", 139)(37, "label", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38, "INVOICE AMOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "input", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BOEComponent_div_10_div_20_Template_input_ngModelChange_39_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r155);
      const ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r160.selectedRow.invoiceAmount = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "td", 142)(41, "label", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](42, "CURRENCY");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "input", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BOEComponent_div_10_div_20_Template_input_ngModelChange_43_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r155);
      const ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r161.selectedRow.currency = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](44, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "td", 136)(46, "label", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](47, "SETTELED AMOIUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "input", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BOEComponent_div_10_div_20_Template_input_ngModelChange_48_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r155);
      const ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r162.selectedRow.settledAmount = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "td", 139)(50, "label", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](51, "STATUS");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "input", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BOEComponent_div_10_div_20_Template_input_ngModelChange_52_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r155);
      const ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r163.selectedRow.status = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](53, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "p", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](55, "FOB and FREIGHT");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "td", 139)(57, "label", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](58, "FREIGHT AMOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](59, "input", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BOEComponent_div_10_div_20_Template_input_ngModelChange_59_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r155);
      const ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r164.selectedRow.freightAmount = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](60, "td", 142)(61, "label", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](62, "FREIGHT CURRENCY");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](63, "input", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BOEComponent_div_10_div_20_Template_input_ngModelChange_63_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r155);
      const ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r165.selectedRow.freightCurrency = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](64, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](65, "p", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](66, "INSURANCE");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](67, "td", 139)(68, "label", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](69, "INSURANCE AMOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](70, "input", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BOEComponent_div_10_div_20_Template_input_ngModelChange_70_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r155);
      const ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r166.selectedRow.insuranceAmount = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](71, "td", 142)(72, "label", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](73, "INSURANCE CURRENCY");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](74, "input", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BOEComponent_div_10_div_20_Template_input_ngModelChange_74_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r155);
      const ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r167.selectedRow.insuranceCurrency = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](75, "p", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](76, "DISCOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](77, "td", 139)(78, "label", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](79, "DISCOUNT AMOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](80, "input", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BOEComponent_div_10_div_20_Template_input_ngModelChange_80_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r155);
      const ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r168.selectedRow.discountAmount = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](81, "td", 142)(82, "label", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](83, "DISCOUNT CURRENCY");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](84, "input", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BOEComponent_div_10_div_20_Template_input_ngModelChange_84_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r155);
      const ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r169.selectedRow.discountCurrency = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](85, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](86, "p", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](87, "MISCELLANEOUS");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](88, "td", 139)(89, "label", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](90, "MISCELLANEOUS AMOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](91, "input", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BOEComponent_div_10_div_20_Template_input_ngModelChange_91_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r155);
      const ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r170.selectedRow.miscellaneousAmount = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](92, "td", 142)(93, "label", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](94, "MISCELLANEOUS CURRENCY");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](95, "input", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BOEComponent_div_10_div_20_Template_input_ngModelChange_95_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r155);
      const ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r171.selectedRow.miscellaneousCurrency = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](96, "p", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](97, "COMMISSION");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](98, "td", 139)(99, "label", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](100, "COMMISSION AMOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](101, "input", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BOEComponent_div_10_div_20_Template_input_ngModelChange_101_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r155);
      const ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r172.selectedRow.commissionAmount = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](102, "td", 142)(103, "label", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](104, "COMMISSION CURRENCY");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](105, "input", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BOEComponent_div_10_div_20_Template_input_ngModelChange_105_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r155);
      const ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r173.selectedRow.commissionCurrency = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](106, "iframe", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("BOE NUMBER:\u2003", ctx_r148.selectedRow.boeNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("BOE DATE:\u2003", ctx_r148.selectedRow.boeDate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r148.selectedRow.dischargePort);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r148.selectedRow.iecCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r148.selectedRow.iecName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r148.selectedRow.adCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r148.selectedRow.invoiceNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r148.selectedRow.invoiceAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r148.selectedRow.currency);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r148.selectedRow.settledAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r148.selectedRow.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r148.selectedRow.freightAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r148.selectedRow.freightCurrency);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r148.selectedRow.insuranceAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r148.selectedRow.insuranceCurrency);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r148.selectedRow.discountAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r148.selectedRow.discountCurrency);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r148.selectedRow.miscellaneousAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r148.selectedRow.miscellaneousCurrency);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r148.selectedRow.commissionAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r148.selectedRow.commissionCurrency);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx_r148.docu, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeResourceUrl"]);
  }
}

function BOEComponent_div_10_div_21_tr_120_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const obj_r175 = ctx.$implicit;
    const i_r176 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](i_r176 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](obj_r175.invoiceno);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](obj_r175.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](obj_r175.currency);
  }
}

function BOEComponent_div_10_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r178 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 130)(1, "div", 131)(2, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 118)(5, "span", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "SB DETAILS");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 50)(10, "div", 121)(11, "section", 134)(12, "tr", 178)(13, "div")(14, "td", 136)(15, "label", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "PORT CODE");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "input", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BOEComponent_div_10_div_21_Template_input_ngModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r178);
      const ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r177.selectedRow.portCode = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "td", 139)(19, "label", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "IEC CODE");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "input", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BOEComponent_div_10_div_21_Template_input_ngModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r178);
      const ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r179.selectedRow.ieccode = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "td", 142)(23, "label", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "IEC NAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "input", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BOEComponent_div_10_div_21_Template_input_ngModelChange_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r178);
      const ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r180.selectedRow.iecName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "div")(28, "td", 136)(29, "label", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, "AD CODE");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "input", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BOEComponent_div_10_div_21_Template_input_ngModelChange_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r178);
      const ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r181.selectedRow.adCode = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "td", 139)(33, "label", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34, "LEO DATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "input", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BOEComponent_div_10_div_21_Template_input_ngModelChange_35_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r178);
      const ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r182.selectedRow.leodate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "td", 142)(37, "label", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38, "PROCESSING STATUS");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "input", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BOEComponent_div_10_div_21_Template_input_ngModelChange_39_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r178);
      const ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r183.selectedRow.processingStaus = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](40, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "div")(42, "p", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](43, "FOB and FREIGHT");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "td", 136)(45, "label", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](46, "FOB CURRENCY");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "input", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BOEComponent_div_10_div_21_Template_input_ngModelChange_47_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r178);
      const ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r184.selectedRow.fobCurrency = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "td", 139)(49, "label", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](50, "FOB VALUE");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "input", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BOEComponent_div_10_div_21_Template_input_ngModelChange_51_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r178);
      const ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r185.selectedRow.fobValue = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "td", 142)(53, "label", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](54, "REALIZED FOB VALUE");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](55, "input", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BOEComponent_div_10_div_21_Template_input_ngModelChange_55_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r178);
      const ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r186.selectedRow.realizedFobValue = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](56, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](57, "div")(58, "td", 136)(59, "label", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](60, "EQUIVALENT FOB VALUE");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](61, "input", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BOEComponent_div_10_div_21_Template_input_ngModelChange_61_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r178);
      const ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r187.selectedRow.equivalentFobValue = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](62, "td", 139)(63, "label", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](64, "FREIGHT CURRENCY");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](65, "input", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BOEComponent_div_10_div_21_Template_input_ngModelChange_65_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r178);
      const ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r188.selectedRow.freightCurrency = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](66, "td", 142)(67, "label", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](68, "FREIGHT VALUE");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](69, "input", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BOEComponent_div_10_div_21_Template_input_ngModelChange_69_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r178);
      const ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r189.selectedRow.realizedFreightValue = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](70, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](71, "div")(72, "p", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](73, "INSURANCE");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](74, "td", 139)(75, "label", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](76, "INSURANCE CURRENCY");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](77, "input", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BOEComponent_div_10_div_21_Template_input_ngModelChange_77_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r178);
      const ctx_r190 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r190.selectedRow.insuranceCurrency = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](78, "td", 142)(79, "label", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](80, "INSURANCE VALUE");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](81, "input", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BOEComponent_div_10_div_21_Template_input_ngModelChange_81_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r178);
      const ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r191.selectedRow.insuranceValue = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](82, "td", 136)(83, "label", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](84, "REALIZED INSURANCE VALUE");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](85, "input", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BOEComponent_div_10_div_21_Template_input_ngModelChange_85_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r178);
      const ctx_r192 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r192.selectedRow.realizedInsuranceValue = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](86, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](87, "div")(88, "p", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](89, "Additional");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](90, "td", 139)(91, "label", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](92, "BANKING CHARGES");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](93, "input", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BOEComponent_div_10_div_21_Template_input_ngModelChange_93_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r178);
      const ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r193.selectedRow.bankingCharges = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](94, "td", 142)(95, "label", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](96, "PAYMENT LAST DATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](97, "input", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BOEComponent_div_10_div_21_Template_input_ngModelChange_97_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r178);
      const ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r194.selectedRow.expectedPaymentlastdate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](98, "td", 136)(99, "label", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](100, "ADDED DATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](101, "input", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BOEComponent_div_10_div_21_Template_input_ngModelChange_101_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r178);
      const ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r195.selectedRow.AddedDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](102, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](103, "div")(104, "td", 139)(105, "label", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](106, "MODIFIED DATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](107, "input", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BOEComponent_div_10_div_21_Template_input_ngModelChange_107_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r178);
      const ctx_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r196.selectedRow.modifiedDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](108, "p", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](109, "Invoices");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](110, "table", 209)(111, "tr")(112, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](113, " Serial Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](114, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](115, "Invoice Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](116, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](117, "Invoice Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](118, "th", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](119, " Currency ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](120, BOEComponent_div_10_div_21_tr_120_Template, 9, 4, "tr", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](121, "iframe", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("SB NUMBER:\u2003", ctx_r149.selectedRow.sbno, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("SB DATE:\u2003", ctx_r149.selectedRow.sbdate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r149.selectedRow.portCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r149.selectedRow.ieccode);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r149.selectedRow.iecName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r149.selectedRow.adCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r149.selectedRow.leodate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r149.selectedRow.processingStaus);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r149.selectedRow.fobCurrency);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r149.selectedRow.fobValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r149.selectedRow.realizedFobValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r149.selectedRow.equivalentFobValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r149.selectedRow.freightCurrency);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r149.selectedRow.realizedFreightValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r149.selectedRow.insuranceCurrency);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r149.selectedRow.insuranceValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r149.selectedRow.realizedInsuranceValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r149.selectedRow.bankingCharges);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r149.selectedRow.expectedPaymentlastdate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r149.selectedRow.AddedDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r149.selectedRow.modifiedDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r149.selectedRow.invoices);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx_r149.docu, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeResourceUrl"]);
  }
}

function BOEComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 86)(1, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, BOEComponent_div_10_div_2_Template, 11, 4, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 89)(4, "div", 90)(5, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "input", 92)(7, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "ul", 94)(9, "div")(10, "ul", 94)(11, "li", 95)(12, "label", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "li", 95)(15, "label", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "Additional Documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div", 98)(18, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, BOEComponent_div_10_div_19_Template, 69, 12, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, BOEComponent_div_10_div_20_Template, 107, 22, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](21, BOEComponent_div_10_div_21_Template, 122, 23, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 102)(23, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](24, "input", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "div", 105)(26, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "Drag a document here");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "or");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "button", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()()();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r4.item1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("data-index", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("data-index", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("data-index", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("data-index", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("data-index", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r4.selectedRow.pi_poNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r4.selectedRow.boeNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r4.selectedRow.sbno);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("data-index", 2);
  }
}

function BOEComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r199 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 212)(1, "div", 213)(2, "div", 214)(3, "div", 215)(4, "div", 216)(5, "div", 22)(6, "div", 217)(7, "h6", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Boe");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "iframe", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "button", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BOEComponent_ng_template_11_Template_button_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r199);
      const modal_r197 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](modal_r197.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()()();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx_r6.viewData, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeResourceUrl"]);
  }
}

let BOEComponent = /*#__PURE__*/(() => {
  class BOEComponent {
    constructor(documentService, router, route, sanitizer, toastr, modalService, sharedData, userService, wininfo, AprrovalPendingRejectService, dialog) {
      this.documentService = documentService;
      this.router = router;
      this.route = route;
      this.sanitizer = sanitizer;
      this.toastr = toastr;
      this.modalService = modalService;
      this.sharedData = sharedData;
      this.userService = userService;
      this.wininfo = wininfo;
      this.AprrovalPendingRejectService = AprrovalPendingRejectService;
      this.dialog = dialog;
      this.item1 = [];
      this.greaterAmount = 0;
      this.allTransactions = [];
      this.optionsVisibility = [];
      this.filtervisible = false;
      this.USER_DATA = [];
      this.FILTER_VALUE_LIST = [];
      this.ALL_FILTER_DATA = {
        BOE_NUMBER: [],
        Buyer_Name: [],
        AD_CODE: [],
        AD_BILL_NO: [],
        IEC_CODE: [],
        IEC_NAME: [],
        ORIGIN: [],
        DISCHARGE_PORT: [],
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
        _this.item1 = [];

        for (let index = 0; index < _currency_json__WEBPACK_IMPORTED_MODULE_5__?.length; index++) {
          _this.ALL_FILTER_DATA['Currency'].push(_currency_json__WEBPACK_IMPORTED_MODULE_5__[index]['value']);
        }

        _this.documentService.getBoe(1).subscribe(res => {
          for (let value of res.data) {
            if (value['file'] == 'import') {
              _this.item1.push(value);

              value?.benneName.forEach(element => {
                if (_this.ALL_FILTER_DATA['Buyer_Name'].includes(element) == false && element != '' && element != undefined) {
                  _this.ALL_FILTER_DATA['Buyer_Name'].push(element);
                }
              });

              if (_this.ALL_FILTER_DATA['BOE_NUMBER'].includes(value?.boeNumber) == false) {
                _this.ALL_FILTER_DATA['BOE_NUMBER'].push(value?.boeNumber);
              }

              if (_this.ALL_FILTER_DATA['AD_CODE'].includes(value?.adCode) == false) {
                _this.ALL_FILTER_DATA['AD_CODE'].push(value?.adCode);
              }

              if (_this.ALL_FILTER_DATA['AD_BILL_NO'].includes(value?.adBillNo) == false) {
                _this.ALL_FILTER_DATA['AD_BILL_NO'].push(value?.adBillNo);
              }

              if (_this.ALL_FILTER_DATA['IEC_CODE'].includes(value?.iecCode) == false) {
                _this.ALL_FILTER_DATA['IEC_CODE'].push(value?.iecCode);
              }

              if (_this.ALL_FILTER_DATA['IEC_NAME'].includes(value?.iecName) == false) {
                _this.ALL_FILTER_DATA['IEC_NAME'].push(value?.iecName);
              }

              if (_this.ALL_FILTER_DATA['ORIGIN'].includes(value?.origin) == false) {
                _this.ALL_FILTER_DATA['ORIGIN'].push(value?.origin);
              }

              if (_this.ALL_FILTER_DATA['DISCHARGE_PORT'].includes(value?.dischargePort) == false) {
                _this.ALL_FILTER_DATA['DISCHARGE_PORT'].push(value?.dischargePort);
              }

              if (_this.ALL_FILTER_DATA['DATE'].includes(value?.boeDate) == false) {
                _this.ALL_FILTER_DATA['DATE'].push(value?.boeDate);
              }
            }
          }

          _this.FILTER_VALUE_LIST = _this.item1;
          console.log(res, 'yuyuyuyuyuyuyuuy');
        }, err => console.log(err));
      })();
    }

    openBoe(content) {
      this.modalService.open(content, {
        ariaLabelledBy: 'modal-basic-title',
        size: 'lg'
      }).result.then(result => {
        this.closeResult = `Closed with: ${result}`;
      }, reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }

    filter(value, key) {
      this.FILTER_VALUE_LIST = this.item1.filter(item => item[key].indexOf(value) != -1);

      if (this.FILTER_VALUE_LIST.length == 0) {
        this.FILTER_VALUE_LIST = this.item1;
      }
    }

    resetFilter() {
      this.FILTER_VALUE_LIST = this.item1;
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

    exportToExcel() {
      const ws = xlsx__WEBPACK_IMPORTED_MODULE_11__.utils.table_to_sheet(this.epltable.nativeElement);
      const wb = xlsx__WEBPACK_IMPORTED_MODULE_11__.utils.book_new();
      xlsx__WEBPACK_IMPORTED_MODULE_11__.utils.book_append_sheet(wb, ws, 'Sheet1');
      xlsx__WEBPACK_IMPORTED_MODULE_11__.writeFile(wb, 'BOE.xlsx');
    }

    uploadNew() {
      this.sharedData.changeretunurl('home/boe');
      this.router.navigate(['home/upload', {
        file: 'import',
        document: 'boe'
      }]);
    }

    getInvoices(selectedRowValues, i) {
      console.log("SELECTED", selectedRowValues);
      console.log("INDEX", i);
      console.log(selectedRowValues.doc);
      this.lastIndex = i;
      this.docu = this.sanitizer.bypassSecurityTrustResourceUrl(selectedRowValues.doc);
      return this.selectedRow = selectedRowValues, this.showInvoice = true, this.tableWidth = "30%", this.greaterAmount = parseInt(this.selectedRow.amount);
    }

    getTransactions(selectedRowValues) {
      this.documentService.getTask({
        pi_poNo: selectedRowValues,
        file: "advance"
      }).subscribe(res => {
        this.allTransactions = res.task;
        console.log("ALL TRANSACTIONS", this.allTransactions);
      }, err => console.log(err));
    }

    hide() {
      this.showInvoice = false;
    }

    viewCN(a) {
      this.viewData = this.sanitizer.bypassSecurityTrustResourceUrl(a['doc']);
    }

    toSave(data, index) {
      this.optionsVisibility[index] = false;
      console.log(data);
      this.documentService.updateBoe(data, data._id).subscribe(data => {
        console.log("king123");
        console.log(data);
        this.toastr.success('Bill Of Entry row is updated'); // this.router.navigate(["home/view-document/sb"]);
        //this.router.navigate(['/login'], { queryParams: { registered: true }});
      }, error => {
        console.log("error");
      });
    }

    toEdit(index) {
      this.optionsVisibility[index] = true;
      this.toastr.warning('Bill Of Entry Row Is In Edit Mode');
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

    getPipoNumbers(data) {
      return data.pipo.map(x => {
        return x.pi_poNo;
      });
    }

    deleteByRoleType(RoleCheckbox, id, index) {
      if (RoleCheckbox == '') {
        this.documentService.deleteById({
          id: id,
          tableName: 'boerecords'
        }).subscribe(res => {
          console.log(res);

          if (res) {
            this.ngOnInit();
          }
        }, err => console.log(err));
      } else if (RoleCheckbox == 'Maker' || RoleCheckbox == 'Checker' || RoleCheckbox == 'Approver') {
        var approval_data = {
          id: id,
          tableName: 'boerecords',
          deleteflag: '-1',
          userdetails: this.USER_DATA['result'],
          status: 'pending',
          dummydata: this.item1[index],
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

  BOEComponent.ɵfac = function BOEComponent_Factory(t) {
    return new (t || BOEComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_service_document_service__WEBPACK_IMPORTED_MODULE_1__.DocumentService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_14__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_Data_Servies_shared_data_service__WEBPACK_IMPORTED_MODULE_2__.SharedDataService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_service_window_information_service__WEBPACK_IMPORTED_MODULE_3__.WindowInformationService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_service_aprroval_pending_reject_transactions_service__WEBPACK_IMPORTED_MODULE_6__.AprrovalPendingRejectTransactionsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog));
  };

  BOEComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: BOEComponent,
    selectors: [["app-boe"]],
    viewQuery: function BOEComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 5);
      }

      if (rf & 2) {
        let _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.epltable = _t.first);
      }
    },
    decls: 13,
    vars: 4,
    consts: [[1, "content-wrap", "pb-2", "scroll-bar-main"], [1, "import_export_sec"], [1, "heading_common_tag"], ["id", "content", "role", "main", 1, "content", "table-padding"], ["class", "table_top", 4, "ngIf"], ["class", "header-panel", 4, "ngIf"], [1, "analytics"], ["epltable", ""], ["style", "width: 100%", "class", "analytics_top", 4, "ngIf"], ["class", "p-8 bc", "style", "padding-left: 0.8%", 4, "ngIf"], ["content", ""], [1, "table_top"], [2, "width", "100%", "font-weight", "300"], [2, "font-weight", "400"], [2, "width", "100%", "padding-right", "5%"], ["style", "float: right; margin-right: 3%", 4, "ngFor", "ngForOf"], [2, "margin-right", "8%"], ["src", "../../../assets/cross.png", 2, "width", "20px", "height", "20px", "margin-left", "10px", "cursor", "pointer", 3, "click"], [2, "float", "right", "margin-right", "3%"], ["src", "./assets/images/cc1d1196dbafb374fe2d91e177dc16f8517532d6.png", "height", "30px", "width", "30px", 1, "image"], [1, "header-panel"], [1, "filter_section_top"], [1, "row"], [1, "col-md-4", "col-sm-4", "col-12"], [1, "col-md-8", "col-sm-8", "col-12"], [1, "filter_right_new", "padding_new_top"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "ex_icon"], [1, "filter_posit"], ["type", "button", 1, "btn", "btn-secondary", "filter-popup", 3, "click"], [1, "fi_icon"], ["appFilterToggle", "", 1, "bg-white", "filter_main_sec", "mt-2"], ["filter_Popup", ""], [1, "select_filter_options"], [1, "col-md-6", "col-12"], ["for", "exampleFormControlInput1", 1, "form-label"], ["aria-label", "Default select example", "name", "Buyer_Name", 1, "form-select", "form-control", 3, "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["aria-label", "Default select example", "name", "Company_Name", 1, "form-select", "form-control", 3, "change"], ["aria-label", "Default select example", "name", "Origin", 1, "form-select", "form-control", 3, "change"], [4, "ngFor", "ngForOf"], ["aria-label", "Default select example", "name", "Currency", 1, "form-select", "form-control", 3, "change"], ["aria-label", "Default select example", "name", "date", 1, "form-select", "form-control", 3, "change"], [1, "footer_buttons"], ["type", "button", 1, "btn", "btn-light", 3, "click"], [1, "upload-button", "btn", "btn-success", 3, "click"], [1, "add_icon"], [3, "value"], [1, "analytics_top", 2, "width", "100%"], [1, "row", 2, "width", "100%"], ["class", "", "id", "container", 4, "ngIf"], ["id", "container", 1, ""], [1, "middle_datatable"], [1, "widget-body", "p-0", "support", "table-wrapper"], [1, "table", "table-hover"], [1, "table-tr"], ["scope", "col", 1, "col-td-th-3"], [1, "pl-3"], ["class", "table-tr", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "table-tr", 3, "ngClass"], [1, "col-td-th-3"], [4, "ngIf"], [3, "click", 4, "ngIf"], ["title", "View", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-eye"], ["title", "Save", "class", "savBtn bgnone", 3, "click", 4, "ngIf"], ["title", "Edit", "class", "savBtn bgnone", 3, "click", 4, "ngIf"], ["name", "boeDate", "type", "text", "placeholder", "BOE Date", 1, "tblInput", "form-control", 3, "ngModel", "ngModelChange"], [3, "click"], ["name", "boeNumber", "type", "text", "placeholder", "BOE Number", 1, "tblInput", "form-control", 3, "ngModel", "ngModelChange"], ["name", "adCode", "type", "text", "placeholder", "AD Code", 1, "tblInput", "form-control", 3, "ngModel", "ngModelChange"], ["name", "adBillNo", "type", "text", "placeholder", "AD Bill No", 1, "tblInput", "form-control", 3, "ngModel", "ngModelChange"], ["name", "benneName", "type", "text", "placeholder", "Buyer Name", 1, "tblInput", "form-control", 3, "ngModel", "ngModelChange"], ["name", "iecCode", "type", "text", "placeholder", "IEC Code", 1, "tblInput", "form-control", 3, "ngModel", "ngModelChange"], ["name", "iecName", "type", "text", "placeholder", "IEC Name", 1, "tblInput", "form-control", 3, "ngModel", "ngModelChange"], ["name", "origin", "type", "text", "placeholder", "Origin", 1, "tblInput", "form-control", 3, "ngModel", "ngModelChange"], ["name", "dischargePort", "type", "text", "placeholder", "Destination", 1, "tblInput", "form-control", 3, "ngModel", "ngModelChange"], ["name", "currency", "type", "text", "placeholder", "Currency", 1, "tblInput", "form-control", 3, "ngModel", "ngModelChange"], ["name", "invoiceAmount", "type", "text", "placeholder", "Invoice Amount", 1, "tblInput", "form-control", 3, "ngModel", "ngModelChange"], ["title", "Save", 1, "savBtn", "bgnone", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-floppy-o"], ["title", "Edit", 1, "savBtn", "bgnone", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-pencil-square-o"], ["title", "Delete", "href", "javascript:void(0)"], ["aria-hidden", "true", 1, "fa", "fa-trash-o"], [1, "p-8", "bc", 2, "padding-left", "0.8%"], [1, "side_document_list"], ["id", "profile", "class", "profile_class", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "invoices_tab"], [1, "invoices_inner"], [1, "tabbed"], ["type", "radio", "id", "1", "name", "css-tabs", "checked", ""], ["type", "radio", "id", "2", "name", "css-tabs"], [1, "tabs"], [1, "tab"], ["for", "1"], ["for", "2"], [1, "tab-content", "form-wrapper"], [1, "inner_tab_content"], ["style", "\n                                              background-color: white;\n                                              width: 100%;\n                                              height: 100vh;\n                                              padding-right: 60px;\n                                              ", 4, "ngIf"], ["style", "width: 98%; background-color: 'white'", 4, "ngIf"], [1, "tab-content", "form-wrapper", 2, "height", "100vh", "padding-left", "20px", "padding-top", "4%", "background-color", "white", "width", "97%"], ["method", "POST", 1, "form"], ["id", "dropzone", 1, "dropzone", "dropzone-container"], [1, "form_inner"], ["type", "submit"], ["id", "profile", 1, "profile_class", 3, "ngClass", "click"], [1, "", 2, "display", "flex"], ["src", "./assets/images/cc1d1196dbafb374fe2d91e177dc16f8517532d6.png", "height", "30px", "width", "30px", 1, "image", "image2"], [1, "", 2, "width", "100%", "padding", "3%"], [1, "fl", "fs16"], [1, "fr", "fs12", 2, "float", "right"], [1, "fs14"], [2, "background-color", "white", "width", "100%", "height", "100vh", "padding-right", "60px"], [1, "serial_detail"], [2, "width", "100%", "float", "right", "font-size", "14px", "margin-top", "18.77px", "color", "black"], [1, "invoice_head"], [2, "width", "100%"], [2, "width", "65%", "float", "left", "font-size", "20px", "font-weight", "500"], [2, "float", "right", "font-weight", "500", "font-size", "14px", "color", "black"], [1, "col-12", "mb-lg", "padding", 2, "width", "100%"], [1, "widget", "pb-0", "box-shadow", 2, "padding-left", "45px", "display", "grid", "grid-template-columns", "33% 33% 33%", "margin-top", "3%"], [2, "width", "85%", "margin-bottom", "24px", "border-radius", "8px", "box-shadow", "4px 4px 8px 4px #eeeefa", "border-left", "3px solid #e7845f"], [2, "height", "100px", "padding-top", "5%", "padding-bottom", "17px", "padding-left", "3%"], [2, "color", "#72768a !important", "font-size", "102%"], [2, "margin-left", "5%", "color", "#000000", "font-size", "102%"], [2, "width", "85%", "margin-bottom", "24px", "border-radius", "8px", "box-shadow", "4px 4px 8px 4px #eeeefa", "border-left", "3px solid #5fe6e7"], [2, "height", "100px", "padding-top", "14px", "padding-bottom", "17px", "padding-left", "3%"], [2, "height", "600px", "width", "400px", "margin-left", "19px", 3, "src"], [2, "width", "98%", "background-color", "white"], [2, "width", "100%", "margin-top", "10px"], [2, "width", "35%", "float", "right", "font-size", "14px"], [2, "width", "65%", "float", "left", "font-size", "16px", "margin-top", "20px", "padding-left", "25px"], [1, "widget", "pb-0", "box-shadow"], [1, "form-wrapper1"], [1, "full-input", "border1"], ["for", "dischargePort"], ["type", "text", "name", "dischargePort", 1, "smalll-input", 3, "ngModel", "ngModelChange"], [1, "full-input", "border2"], ["for", "iecCode"], ["type", "text", "name", "iecCode", 1, "smalll-input", 3, "ngModel", "ngModelChange"], [1, "full-input", "border3"], ["for", "iecName"], ["type", "text", "name", "iecName", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "adCode"], ["type", "text", "name", "adCode", 1, "smalll-input", 3, "ngModel", "ngModelChange"], [1, "sh1"], ["for", "invoiceNumber"], ["type", "text", "name", "invoiceNumber", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "invoiceAmount"], ["type", "text", "name", "invoiceAmount", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "currency"], ["type", "text", "name", "currency", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "settledAmount"], ["type", "text", "name", "settledAmount", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "status"], ["type", "text", "name", "status", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "freightAmount"], ["type", "text", "name", "freightAmount", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "freightCurrency"], ["type", "text", "name", "freightCurrency", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "insuranceAmount"], ["type", "text", "name", "insuranceAmount", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "insuranceCurrency"], ["type", "text", "name", "insuranceCurrency", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "discountAmount"], ["type", "text", "name", "discountAmount", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "discountCurrency"], ["type", "text", "name", "discountCurrency", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "miscellaneousAmount"], ["type", "text", "name", "miscellaneousAmount", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "miscellaneousCurrency"], ["type", "text", "name", "miscellaneousCurrency", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "commissionAmount"], ["type", "text", "name", "commissionAmount", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "commissionCurrency"], ["type", "text", "name", "commissionCurrency", 1, "smalll-input", 3, "ngModel", "ngModelChange"], [1, "form-wrapper1", 2, "width", "100%"], ["for", "portCode"], ["type", "text", "name", "portCode", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "ieccode"], ["type", "text", "name", "ieccode", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "leodate"], ["type", "text", "name", "leodate", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "processingStaus"], ["type", "text", "name", "processingStaus", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "fobCurrency"], ["type", "text", "name", "fobCurrency", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "fobValue"], ["type", "text", "name", "fobValue", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "realizedFobValue"], ["type", "text", "name", "realizedFobValue", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "equivalentFobValue"], ["type", "text", "name", "equivalentFobValue", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "realizedFreightValue"], ["type", "text", "name", "realizedFreightValue", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "insuranceValue"], ["type", "text", "name", "insuranceValue", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "realizedInsuranceValue"], ["type", "text", "name", "realizedInsuranceValue", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "bankingCharges"], ["type", "text", "name", "bankingCharges", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "expectedPaymentlastdate"], ["type", "text", "name", "expectedPaymentlastdate", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "AddedDate"], ["type", "text", "name", "AddedDate", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "modifiedDate"], ["type", "text", "name", "modifiedDate", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["id", "customers", 2, "margin-bottom", "5px"], [2, "text-align", "left !important"], [2, "height", "600px", "width", "600px", "margin-top", "6px", "margin-left", "19px", 3, "src"], [1, "modal-body"], [1, "row", "no-gutter"], [1, "col-md-7", 2, "margin", "10px"], [1, "login", "d-flex", "py-5", 2, "padding", "0px !important"], [1, "container", "popup"], [1, "col-lg-10", "col-xl-7", "mrg"], [1, "display-6"], ["width", "315%", "height", "500px", 3, "src"], ["type", "submit", 1, "submitBTN", 2, "margin-left", "250px", 3, "click"]],
    template: function BOEComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "BOE Documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "main", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, BOEComponent_div_5_Template, 9, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, BOEComponent_div_6_Template, 94, 10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, BOEComponent_div_9_Template, 3, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, BOEComponent_div_10_Template, 32, 10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, BOEComponent_ng_template_11_Template, 12, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.showInvoice);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.showInvoice);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.showInvoice);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.showInvoice);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgForm, _custom_Filter_filter_toggle_directive__WEBPACK_IMPORTED_MODULE_8__.FilterToggleDirective, _angular_common__WEBPACK_IMPORTED_MODULE_16__.SlicePipe],
    styles: ["*[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.heading[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 20px;\n  font-weight: 700;\n  margin-left: 23px;\n  color: #323e4a;\n}\n\n.table-heading[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 500;\n  color: #747474;\n}\n\ntable[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.box-shadow[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n\n.upload-button[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n  font-weight: 100;\n  font-family: Poppins, sans-serif;\n  padding: 5px 8px;\n  font-size: 14px;\n  background-color: #49A2D7;\n  border: none;\n  border-radius: 5px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  outline: none;\n}\n\n.table-row[_ngcontent-%COMP%] {\n  background-color: #ffffff !important;\n  color: #707683;\n}\n\n.table-row[_ngcontent-%COMP%]:hover {\n  background: #f6f9ff !important;\n  border-left: 5px solid #49a2d7;\n}\n\nselect[_ngcontent-%COMP%] {\n  text-decoration: none;\n  border: none;\n  background: none;\n  color: #49a2d7;\n}\n\nselect[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.rect[_ngcontent-%COMP%] {\n  text-align: right;\n  min-width: 80px !important;\n}\n\n.sb-no[_ngcontent-%COMP%] {\n  color: #49a2d7;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  height: 68px;\n  vertical-align: middle !important;\n}\n\n.image[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  margin-top: 12fvpx;\n}\n\n.image2[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  margin-left: -13px;\n}\n\n.fl[_ngcontent-%COMP%] {\n  float: \"left\";\n}\n\n.fr[_ngcontent-%COMP%] {\n  float: \"right\";\n}\n\nspan.fs20[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\nspan.fs16[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\np.fs14[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.fs12[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.p-4[_ngcontent-%COMP%] {\n  padding: 4px;\n}\n\n.p-8[_ngcontent-%COMP%] {\n  z-index: 5000;\n  transform: scale(1, 1);\n  display: grid;\n  grid-template-columns: 29% 70%;\n}\n\n.p-20[_ngcontent-%COMP%] {\n  padding: 20px !important;\n}\n\n.p-12[_ngcontent-%COMP%] {\n  padding: 12px !important;\n}\n\n.p-16[_ngcontent-%COMP%] {\n  padding: 16px !important;\n}\n\n.pr-4[_ngcontent-%COMP%] {\n  padding-right: 4px;\n}\n\n.pr-8[_ngcontent-%COMP%] {\n  padding-right: 8px !important;\n}\n\n.pr-16[_ngcontent-%COMP%] {\n  padding-right: 16px;\n}\n\n.pt-30[_ngcontent-%COMP%] {\n  padding-top: 30px !important;\n}\n\n.pt-28[_ngcontent-%COMP%] {\n  padding-top: 28px !important;\n}\n\n.pt-25[_ngcontent-%COMP%] {\n  padding-top: 25px !important;\n}\n\n.pt-24[_ngcontent-%COMP%] {\n  padding-top: 24px !important;\n}\n\n.pt-22[_ngcontent-%COMP%] {\n  padding-top: 22px !important;\n}\n\n.pt-20[_ngcontent-%COMP%] {\n  padding-top: 20px !important;\n}\n\n.pt-19[_ngcontent-%COMP%] {\n  padding-top: 19px !important;\n}\n\n.pt-16[_ngcontent-%COMP%] {\n  padding-top: 16px !important;\n}\n\n.pt-14[_ngcontent-%COMP%] {\n  padding-top: 14px !important;\n}\n\n.pt-10[_ngcontent-%COMP%] {\n  padding-top: 10px !important;\n}\n\n.pt-8[_ngcontent-%COMP%] {\n  padding-top: 8px !important;\n}\n\n.pt-4[_ngcontent-%COMP%] {\n  padding-top: 4px;\n}\n\n.pt-2[_ngcontent-%COMP%] {\n  padding-top: 2px;\n}\n\n.pt-0[_ngcontent-%COMP%] {\n  padding-top: 0px !important;\n}\n\n.pb-28[_ngcontent-%COMP%] {\n  padding-bottom: 28px !important;\n}\n\n.pb-16[_ngcontent-%COMP%] {\n  padding-bottom: 16px !important;\n}\n\n.pv-4[_ngcontent-%COMP%] {\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n\n.pv-8[_ngcontent-%COMP%] {\n  padding-top: 8px !important;\n  padding-bottom: 8px !important;\n}\n\n.pv-10[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.pv-20[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.pv-14[_ngcontent-%COMP%] {\n  padding-top: 14px !important;\n  padding-bottom: 14px !important;\n}\n\n.pv-16[_ngcontent-%COMP%] {\n  padding-top: 16px !important;\n  padding-bottom: 16px !important;\n}\n\n.ph-5[_ngcontent-%COMP%] {\n  padding-right: 5px !important;\n  padding-left: 5px !important;\n}\n\n.ph-16[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n.ph-8[_ngcontent-%COMP%] {\n  padding-left: 8px !important;\n  padding-right: 8px !important;\n}\n\n.ph-10[_ngcontent-%COMP%] {\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n}\n\n.ph-4[_ngcontent-%COMP%] {\n  padding-left: 4px;\n  padding-right: 4px;\n}\n\n.ph-32[_ngcontent-%COMP%] {\n  padding-left: 32px;\n  padding-right: 32px;\n}\n\n.ph-38[_ngcontent-%COMP%] {\n  padding-left: 38px;\n  padding-right: 38px;\n}\n\n.ph-44[_ngcontent-%COMP%] {\n  padding-left: 44px;\n  padding-right: 44px;\n}\n\n.bb[_ngcontent-%COMP%] {\n  border-bottom: 0.1px solid #d3d3d3;\n  border-right: 0.1px solid #d3d3d3;\n}\n\n.bc[_ngcontent-%COMP%] {\n  background-color: #f8fafd;\n}\n\n.bcw[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #323e4a !important;\n}\n\n\n\n\n\n.m-4[_ngcontent-%COMP%] {\n  margin: 4px !important;\n}\n\n.m-8[_ngcontent-%COMP%] {\n  margin: 8px !important;\n}\n\n.m-16[_ngcontent-%COMP%] {\n  margin: 16px !important;\n}\n\n.mr-20[_ngcontent-%COMP%] {\n  margin-right: 20px !important;\n}\n\n.mr-8[_ngcontent-%COMP%] {\n  margin-right: 8px !important;\n}\n\n.ml-20[_ngcontent-%COMP%] {\n  margin-left: 20px !important;\n}\n\n.ml-24[_ngcontent-%COMP%] {\n  margin-left: 24px !important;\n}\n\n.mt-4[_ngcontent-%COMP%] {\n  margin-top: 4px !important;\n}\n\n.mt-8[_ngcontent-%COMP%] {\n  margin-top: 8px !important;\n}\n\n.mt-16[_ngcontent-%COMP%] {\n  margin-top: 16px !important;\n}\n\n.mt-24[_ngcontent-%COMP%] {\n  margin-top: 24px !important;\n}\n\n.mt-38[_ngcontent-%COMP%] {\n  margin-top: 38px !important;\n}\n\n.mh-8[_ngcontent-%COMP%] {\n  margin-left: 8px !important;\n  margin-right: 8px !important;\n}\n\n.mh-16[_ngcontent-%COMP%] {\n  margin-left: 16px !important;\n  margin-right: 16px !important;\n}\n\n.mv-4[_ngcontent-%COMP%] {\n  margin-top: 4px !important;\n  margin-bottom: 4px !important;\n}\n\n.mv-16[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  margin-bottom: 16px;\n}\n\n.mv-24[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  margin-bottom: 24px;\n}\n\n.mh--16[_ngcontent-%COMP%] {\n  margin-left: -16px !important;\n  margin-right: -16px !important;\n}\n\n.mh-8[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n.w100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.w70[_ngcontent-%COMP%] {\n  width: 70%;\n}\n\n.w50[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.w30[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.pc1[_ngcontent-%COMP%] {\n  width: 44.5%;\n  height: 35px;\n  float: right;\n  border-left: 1px solid rgb(104, 103, 103);\n}\n\n.tabbed[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  \n  background-color: #f8fafd;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding-right: 28px;\n  padding-left: 32px;\n}\n\n.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  \n  display: none;\n}\n\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  list-style: none;\n  background-color: white;\n  height: 100%;\n  padding: 1% 0;\n  padding-left: 30px;\n  margin-left: -30px;\n  width: 113%;\n}\n\n.tabs[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.tab[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 10px;\n  padding-right: 12px;\n  color: #606670;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-right: 10px;\n  border-right: 1px solid black;\n}\n\n.tab[_ngcontent-%COMP%]:hover   label[_ngcontent-%COMP%] {\n  border-top-color: #333;\n  color: #333;\n}\n\n.tab-content[_ngcontent-%COMP%] {\n  display: none;\n  color: #777;\n  background: #f8fafd;\n  margin: 10px !important;\n}\n\n\n\n.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(1):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(1)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(2):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(2)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(3):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(3)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(4):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(4)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(5):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(5)   label[_ngcontent-%COMP%] {\n  color: #49a2d7;\n  margin-right: 10px;\n}\n\n.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(1):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(1), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(2):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(2), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(3):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(3), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(4):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(4) {\n  display: block;\n}\n\n.hhu[_ngcontent-%COMP%]:active, .hhu[_ngcontent-%COMP%]:focus {\n  border: 2px solid red;\n}\n\n.form[_ngcontent-%COMP%] {\n  margin-left: 38px !important;\n  margin-right: 5%;\n  top: 50%;\n  left: 50%;\n  height: 316px;\n  background-color: white;\n  border: 1px dashed rgba(0, 0, 0, 0.4);\n}\n\n.form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif !important;\n  text-align: center;\n  line-height: 30px;\n  color: #303030;\n}\n\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-family: \"EuropaNuova-Regular\", sans-serif !important;\n  position: absolute;\n  margin: 0;\n  width: 89%;\n  height: 313px;\n  padding: 0;\n  outline: none;\n  cursor: pointer;\n  opacity: 0;\n}\n\n.form[_ngcontent-%COMP%]   .form_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  margin-left: 36.5%;\n  height: 42px;\n  cursor: pointer;\n  width: 160px;\n  background-color: #49a2d7;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #149174;\n  color: #0c5645;\n}\n\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  border: 0;\n}\n\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.xbutton[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #49a2d7;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.ybutton[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #0c354d;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.zbutton[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #947551;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.border1[_ngcontent-%COMP%] {\n  border-left: 3px solid #174d72;\n}\n\n.border2[_ngcontent-%COMP%] {\n  border-left: 3px solid #5fe6e7;\n}\n\n.border3[_ngcontent-%COMP%] {\n  border-left: 3px solid #e7845f;\n}\n\n.form-wrapper1[_ngcontent-%COMP%] {\n  flex-direction: column;\n  width: 100%;\n}\n\n.form-wrapper1[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 5.5%;\n}\n\n.form-wrapper1.td[_ngcontent-%COMP%] {\n  width: 100%;\n  width: 7%;\n}\n\n.full-input[_ngcontent-%COMP%] {\n  margin-left: 18px;\n  margin-bottom: 10px;\n  display: inline-block;\n  padding: 3px;\n  height: 74px;\n  width: 177px;\n  background-color: white;\n  border-radius: 5px;\n  box-shadow: 4px 4px 8px 4px #eeeefa;\n}\n\n.smalll-input[_ngcontent-%COMP%] {\n  width: 160px !important;\n  outline: none;\n  border: none;\n  display: block;\n  border-radius: 4px;\n  border: 1px solid #d5dbe8;\n  height: 35px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  padding: 5px 0px 5px 5px;\n  margin-bottom: 0px !important;\n  font-size: 12px;\n  font-weight: 500;\n  color: #72768a;\n}\n\n.sh1[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  margin-top: 15px;\n  font-size: 16px;\n  color: #606670;\n}\n\n.ss[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n\n#customers[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100% !important;\n  margin-left: 19px !important;\n  border-right: 1px solid #ddd;\n  border-left: 1px solid #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  height: 52px !important;\n  text-align: left;\n  font-weight: 300;\n  background-color: #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 52px !important;\n}\n\n.tab1[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  \n  display: inline-block;\n  height: 17px;\n  width: 17px;\n  color: #49a2d7;\n  margin-bottom: 10px;\n}\n\n.tab1[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + input[_ngcontent-%COMP%] {\n  background-color: #bfb;\n  border-color: #4c4;\n}\n\n.label1[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 10px;\n  padding-right: 12px;\n  color: #606670;\n  font-size: 12px;\n  letter-spacing: 1px;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-left: 30px;\n}\n\n.tab1[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.at[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding-right: 20px;\n  padding-left: 10px;\n}\n\n.ctb[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin-left: 210px;\n  background-color: #49a2d7;\n  padding: 12px 30px 11px 30px;\n  color: white;\n  border-radius: 4px;\n  cursor: pointer;\n  font-weight: 500;\n}\n\n.radio1[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  \n  display: inline-block;\n  height: 17px;\n  width: 17px;\n  color: #49a2d7;\n  margin-bottom: 10px;\n  border: 2px solid #49a2d7;\n}\n\n.radio1[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + input[_ngcontent-%COMP%] {\n  background-color: #bfb;\n  border-color: #4c4;\n}\n\n.label1[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 10px;\n  padding-right: 12px;\n  color: #606670;\n  font-size: 12px;\n  letter-spacing: 1px;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-left: 30px;\n}\n\n.radio1[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.stp1[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 500;\n  margin-bottom: 10px;\n  color: black;\n}\n\n.stp2[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin-bottom: 10px;\n  color: black;\n}\n\n.stp3[_ngcontent-%COMP%] {\n  color: #4a4a4a;\n  font-size: 14px;\n}\n\n.of1[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  font: 16px/26px Georgia, Garamond, Serif;\n  overflow: auto;\n}\n\n\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.side_document_list[_ngcontent-%COMP%] {\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 80vh;\n  border-right: 0.3px solid rgba(0, 0, 0, 0.2);\n  margin-left: 27px;\n}\n\n.tblInput[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.profile_class[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  border-bottom: 0.3px solid rgba(0, 0, 0, 0.2);\n  padding: 3% 6%;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.activeBtn[_ngcontent-%COMP%] {\n  background-color: #f8fafd;\n  border-left: 8px solid rgb(61, 116, 197);\n}\n\n.table_top[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 29.55% 33% 30% 6%;\n  border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);\n  align-items: center;\n}\n\n.invoices_tab[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  height: 100vh;\n  background-color: #f8fafd;\n}\n\n.invoices_inner[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #f8fafd;\n}\n\n.inner_tab_content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  background-color: white;\n}\n\n.invoice_head[_ngcontent-%COMP%] {\n  width: 95%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 5%;\n}\n\n.serial_detail[_ngcontent-%COMP%] {\n  width: 93%;\n  margin-top: 10px;\n  display: flex;\n  justify-content: right;\n  text-align: right;\n  font-weight: 500;\n}\n\n.transaction_tab[_ngcontent-%COMP%] {\n  width: 770px;\n  height: 1387px;\n}\n\n.form_inner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  justify-content: center;\n}\n\n.opt[_ngcontent-%COMP%] {\n  background-color: #49a2d7;\n  padding: 0 3%;\n  height: 42px;\n  box-shadow: 4px 0px 7px #109cf1;\n  border: none;\n  color: white;\n}\n\n#container[_ngcontent-%COMP%] {\n  overflow: scroll;\n  overflow-x: auto;\n}\n\n.savBtn[_ngcontent-%COMP%] {\n  background-color: #49A2D7;\n  color: white;\n  border: 1px solid rgba(0, 0, 0, 0.4);\n  font-size: 14px;\n  cursor: pointer;\n  border-radius: 2px;\n}\n\n*[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.heading[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 20px;\n  font-weight: 700;\n  margin-left: 23px;\n  color: #323e4a;\n}\n\n.table-heading[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 500;\n  color: #747474;\n}\n\n.box-shadow[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n\n.table-padding[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fff;\n  border-radius: 10px;\n  margin: 0;\n  box-shadow: 0 2px 10px rgba(58, 53, 65, 0.1019607843);\n}\n\nbutton[_ngcontent-%COMP%] {\n  outline: none;\n}\n\n.table-row[_ngcontent-%COMP%] {\n  background-color: #ffffff !important;\n  color: #707683;\n  border-left: 2px solid #fff;\n}\n\n.table-row[_ngcontent-%COMP%]:hover {\n  background: #f6f9ff !important;\n  border-left: 2px solid #49a2d7;\n}\n\nselect[_ngcontent-%COMP%] {\n  text-decoration: none;\n  border: none;\n  background: none;\n  color: #49a2d7;\n}\n\nselect[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.rect[_ngcontent-%COMP%] {\n  text-align: right;\n  min-width: 80px !important;\n}\n\n.sb-no[_ngcontent-%COMP%] {\n  color: #49a2d7;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  height: 68px;\n  vertical-align: middle !important;\n}\n\n.image[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  margin-top: 12fvpx;\n}\n\n.image2[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  margin-left: -13px;\n}\n\n.fl[_ngcontent-%COMP%] {\n  float: \"left\";\n}\n\n.fr[_ngcontent-%COMP%] {\n  float: \"right\";\n}\n\nspan.fs20[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\nspan.fs16[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\np.fs14[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.fs12[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.p-4[_ngcontent-%COMP%] {\n  padding: 4px;\n}\n\n.p-8[_ngcontent-%COMP%] {\n  z-index: 5000;\n  transform: scale(1, 1);\n  display: grid;\n  grid-template-columns: 29% 70%;\n}\n\n.p-20[_ngcontent-%COMP%] {\n  padding: 20px !important;\n}\n\n.p-12[_ngcontent-%COMP%] {\n  padding: 12px !important;\n}\n\n.p-16[_ngcontent-%COMP%] {\n  padding: 16px !important;\n}\n\n.pr-4[_ngcontent-%COMP%] {\n  padding-right: 4px;\n}\n\n.pr-8[_ngcontent-%COMP%] {\n  padding-right: 8px !important;\n}\n\n.pr-16[_ngcontent-%COMP%] {\n  padding-right: 16px;\n}\n\n.pt-30[_ngcontent-%COMP%] {\n  padding-top: 30px !important;\n}\n\n.pt-28[_ngcontent-%COMP%] {\n  padding-top: 28px !important;\n}\n\n.pt-25[_ngcontent-%COMP%] {\n  padding-top: 25px !important;\n}\n\n.pt-24[_ngcontent-%COMP%] {\n  padding-top: 24px !important;\n}\n\n.pt-22[_ngcontent-%COMP%] {\n  padding-top: 22px !important;\n}\n\n.pt-20[_ngcontent-%COMP%] {\n  padding-top: 20px !important;\n}\n\n.pt-19[_ngcontent-%COMP%] {\n  padding-top: 19px !important;\n}\n\n.pt-16[_ngcontent-%COMP%] {\n  padding-top: 16px !important;\n}\n\n.pt-14[_ngcontent-%COMP%] {\n  padding-top: 14px !important;\n}\n\n.pt-10[_ngcontent-%COMP%] {\n  padding-top: 10px !important;\n}\n\n.pt-8[_ngcontent-%COMP%] {\n  padding-top: 8px !important;\n}\n\n.pt-4[_ngcontent-%COMP%] {\n  padding-top: 4px;\n}\n\n.pt-2[_ngcontent-%COMP%] {\n  padding-top: 2px;\n}\n\n.pt-0[_ngcontent-%COMP%] {\n  padding-top: 0px !important;\n}\n\n.pb-28[_ngcontent-%COMP%] {\n  padding-bottom: 28px !important;\n}\n\n.pb-16[_ngcontent-%COMP%] {\n  padding-bottom: 16px !important;\n}\n\n.pv-4[_ngcontent-%COMP%] {\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n\n.pv-8[_ngcontent-%COMP%] {\n  padding-top: 8px !important;\n  padding-bottom: 8px !important;\n}\n\n.pv-10[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.pv-20[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.pv-14[_ngcontent-%COMP%] {\n  padding-top: 14px !important;\n  padding-bottom: 14px !important;\n}\n\n.pv-16[_ngcontent-%COMP%] {\n  padding-top: 16px !important;\n  padding-bottom: 16px !important;\n}\n\n.ph-5[_ngcontent-%COMP%] {\n  padding-right: 5px !important;\n  padding-left: 5px !important;\n}\n\n.ph-16[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n.ph-8[_ngcontent-%COMP%] {\n  padding-left: 8px !important;\n  padding-right: 8px !important;\n}\n\n.ph-10[_ngcontent-%COMP%] {\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n}\n\n.ph-4[_ngcontent-%COMP%] {\n  padding-left: 4px;\n  padding-right: 4px;\n}\n\n.ph-32[_ngcontent-%COMP%] {\n  padding-left: 32px;\n  padding-right: 32px;\n}\n\n.ph-38[_ngcontent-%COMP%] {\n  padding-left: 38px;\n  padding-right: 38px;\n}\n\n.ph-44[_ngcontent-%COMP%] {\n  padding-left: 44px;\n  padding-right: 44px;\n}\n\n.bb[_ngcontent-%COMP%] {\n  border-bottom: 0.1px solid #d3d3d3;\n  border-right: 0.1px solid #d3d3d3;\n}\n\n.bc[_ngcontent-%COMP%] {\n  background-color: #f8fafd;\n}\n\n.bcw[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #323e4a !important;\n}\n\n\n\n\n\n.m-4[_ngcontent-%COMP%] {\n  margin: 4px !important;\n}\n\n.m-8[_ngcontent-%COMP%] {\n  margin: 8px !important;\n}\n\n.m-16[_ngcontent-%COMP%] {\n  margin: 16px !important;\n}\n\n.mr-20[_ngcontent-%COMP%] {\n  margin-right: 20px !important;\n}\n\n.mr-8[_ngcontent-%COMP%] {\n  margin-right: 8px !important;\n}\n\n.ml-20[_ngcontent-%COMP%] {\n  margin-left: 20px !important;\n}\n\n.ml-24[_ngcontent-%COMP%] {\n  margin-left: 24px !important;\n}\n\n.mt-4[_ngcontent-%COMP%] {\n  margin-top: 4px !important;\n}\n\n.mt-8[_ngcontent-%COMP%] {\n  margin-top: 8px !important;\n}\n\n.mt-16[_ngcontent-%COMP%] {\n  margin-top: 16px !important;\n}\n\n.mt-24[_ngcontent-%COMP%] {\n  margin-top: 24px !important;\n}\n\n.mt-38[_ngcontent-%COMP%] {\n  margin-top: 38px !important;\n}\n\n.mh-8[_ngcontent-%COMP%] {\n  margin-left: 8px !important;\n  margin-right: 8px !important;\n}\n\n.mh-16[_ngcontent-%COMP%] {\n  margin-left: 16px !important;\n  margin-right: 16px !important;\n}\n\n.mv-4[_ngcontent-%COMP%] {\n  margin-top: 4px !important;\n  margin-bottom: 4px !important;\n}\n\n.mv-16[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  margin-bottom: 16px;\n}\n\n.mv-24[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  margin-bottom: 24px;\n}\n\n.mh--16[_ngcontent-%COMP%] {\n  margin-left: -16px !important;\n  margin-right: -16px !important;\n}\n\n.mh-8[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n.w100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.w70[_ngcontent-%COMP%] {\n  width: 70%;\n}\n\n.w50[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.w30[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.pc1[_ngcontent-%COMP%] {\n  width: 44.5%;\n  height: 35px;\n  float: right;\n  border-left: 1px solid rgb(104, 103, 103);\n}\n\n.tabbed[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  \n  background-color: #f8fafd;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding-right: 28px;\n  padding-left: 32px;\n}\n\n.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  \n  display: none;\n}\n\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  list-style: none;\n  background-color: white;\n  height: 100%;\n  padding: 1% 0;\n  padding-left: 30px;\n  margin-left: -30px;\n  width: 113%;\n}\n\n.tabs[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.tab[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 10px;\n  padding-right: 12px;\n  color: #606670;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-right: 10px;\n  border-right: 1px solid black;\n}\n\n.tab[_ngcontent-%COMP%]:hover   label[_ngcontent-%COMP%] {\n  border-top-color: #333;\n  color: #333;\n}\n\n.tab-content[_ngcontent-%COMP%] {\n  display: none;\n  color: #777;\n  background: #f8fafd;\n  margin: 10px !important;\n}\n\n\n\n.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(1):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(1)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(2):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(2)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(3):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(3)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(4):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(4)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(5):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(5)   label[_ngcontent-%COMP%] {\n  color: #49a2d7;\n  margin-right: 10px;\n}\n\n.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(1):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(1), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(2):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(2), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(3):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(3), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(4):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(4) {\n  display: block;\n}\n\n.hhu[_ngcontent-%COMP%]:active, .hhu[_ngcontent-%COMP%]:focus {\n  border: 2px solid red;\n}\n\n.form[_ngcontent-%COMP%] {\n  margin-left: 38px !important;\n  margin-right: 5%;\n  top: 50%;\n  left: 50%;\n  height: 316px;\n  background-color: white;\n  border: 1px dashed rgba(0, 0, 0, 0.4);\n}\n\n.form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif !important;\n  text-align: center;\n  line-height: 30px;\n  color: #303030;\n}\n\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-family: \"EuropaNuova-Regular\", sans-serif !important;\n  position: absolute;\n  margin: 0;\n  width: 89%;\n  height: 313px;\n  padding: 0;\n  outline: none;\n  cursor: pointer;\n  opacity: 0;\n}\n\n.form[_ngcontent-%COMP%]   .form_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  margin-left: 36.5%;\n  height: 42px;\n  cursor: pointer;\n  width: 160px;\n  background-color: #49a2d7;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #149174;\n  color: #0c5645;\n}\n\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  border: 0;\n}\n\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.xbutton[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #49a2d7;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.ybutton[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #0c354d;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.zbutton[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #947551;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.border1[_ngcontent-%COMP%] {\n  border-left: 3px solid #174d72;\n}\n\n.border2[_ngcontent-%COMP%] {\n  border-left: 3px solid #5fe6e7;\n}\n\n.border3[_ngcontent-%COMP%] {\n  border-left: 3px solid #e7845f;\n}\n\n.form-wrapper1[_ngcontent-%COMP%] {\n  flex-direction: column;\n  width: 100%;\n}\n\n.form-wrapper1[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 5.5%;\n}\n\n.form-wrapper1.td[_ngcontent-%COMP%] {\n  width: 100%;\n  width: 7%;\n}\n\n.full-input[_ngcontent-%COMP%] {\n  margin-left: 18px;\n  margin-bottom: 10px;\n  display: inline-block;\n  padding: 3px;\n  height: 74px;\n  width: 177px;\n  background-color: white;\n  border-radius: 5px;\n  box-shadow: 4px 4px 8px 4px #eeeefa;\n}\n\n.smalll-input[_ngcontent-%COMP%] {\n  width: 160px !important;\n  outline: none;\n  border: none;\n  display: block;\n  border-radius: 4px;\n  border: 1px solid #d5dbe8;\n  height: 35px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  padding: 5px 0px 5px 5px;\n  margin-bottom: 0px !important;\n  font-size: 12px;\n  font-weight: 500;\n  color: #72768a;\n}\n\n.sh1[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  margin-top: 15px;\n  font-size: 16px;\n  color: #606670;\n}\n\n.ss[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n\n#customers[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100% !important;\n  margin-left: 19px !important;\n  border-right: 1px solid #ddd;\n  border-left: 1px solid #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  height: 52px !important;\n  text-align: left;\n  font-weight: 300;\n  background-color: #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 52px !important;\n}\n\n.tab1[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  \n  display: inline-block;\n  height: 17px;\n  width: 17px;\n  color: #49a2d7;\n  margin-bottom: 10px;\n}\n\n.tab1[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + input[_ngcontent-%COMP%] {\n  background-color: #bfb;\n  border-color: #4c4;\n}\n\n.label1[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 10px;\n  padding-right: 12px;\n  color: #606670;\n  font-size: 12px;\n  letter-spacing: 1px;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-left: 30px;\n}\n\n.tab1[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.at[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding-right: 20px;\n  padding-left: 10px;\n}\n\n.ctb[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin-left: 210px;\n  background-color: #49a2d7;\n  padding: 12px 30px 11px 30px;\n  color: white;\n  border-radius: 4px;\n  cursor: pointer;\n  font-weight: 500;\n}\n\n.radio1[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  \n  display: inline-block;\n  height: 17px;\n  width: 17px;\n  color: #49a2d7;\n  margin-bottom: 10px;\n  border: 2px solid #49a2d7;\n}\n\n.radio1[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + input[_ngcontent-%COMP%] {\n  background-color: #bfb;\n  border-color: #4c4;\n}\n\n.label1[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 10px;\n  padding-right: 12px;\n  color: #606670;\n  font-size: 12px;\n  letter-spacing: 1px;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-left: 30px;\n}\n\n.radio1[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.stp1[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 500;\n  margin-bottom: 10px;\n  color: black;\n}\n\n.stp2[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin-bottom: 10px;\n  color: black;\n}\n\n.stp3[_ngcontent-%COMP%] {\n  color: #4a4a4a;\n  font-size: 14px;\n}\n\n.of1[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  font: 16px/26px Georgia, Garamond, Serif;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.side_document_list[_ngcontent-%COMP%] {\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 170vh;\n  border-right: 0.3px solid rgba(0, 0, 0, 0.2);\n}\n\n.profile_class[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  border-bottom: 0.3px solid rgba(0, 0, 0, 0.2);\n  padding: 3% 6%;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.activeBtn[_ngcontent-%COMP%] {\n  background-color: #f8fafd;\n  border-left: 8px solid rgb(61, 116, 197);\n}\n\n.table_top[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 29.55% 33% 30% 6%;\n  border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);\n  align-items: center;\n}\n\n.invoices_tab[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  height: 100vh;\n  background-color: #f8fafd;\n}\n\n.invoices_inner[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #f8fafd;\n}\n\n.inner_tab_content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  background-color: white;\n}\n\n.invoice_head[_ngcontent-%COMP%] {\n  width: 95%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 5%;\n}\n\n.serial_detail[_ngcontent-%COMP%] {\n  width: 93%;\n  margin-top: 10px;\n  display: flex;\n  justify-content: right;\n  text-align: right;\n  font-weight: 500;\n}\n\n.transaction_tab[_ngcontent-%COMP%] {\n  width: 770px;\n  height: 1387px;\n}\n\n.form_inner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  justify-content: center;\n}\n\n.opt[_ngcontent-%COMP%] {\n  background-color: #49a2d7;\n  padding: 0 3%;\n  height: 42px;\n  box-shadow: 4px 0px 7px #109cf1;\n  border: none;\n  color: white;\n}\n\n#container[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n.content-wrap[_ngcontent-%COMP%] {\n  z-index: 0;\n  height: 100vh;\n  position: absolute;\n  left: 260px;\n  margin: auto;\n  width: 78vw;\n}\n\n#container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  min-height: 100%;\n}\n\ntable[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.analytics[_ngcontent-%COMP%]   .support[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.header-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n\n.analytics[_ngcontent-%COMP%]   .support[_ngcontent-%COMP%] {\n  margin: auto;\n  overflow: auto;\n}\n\n.view_edit_button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #777;\n  padding: 0 4px;\n  font-size: 15px;\n  display: inline-block;\n}\n\n.view_edit_button[_ngcontent-%COMP%]   .savBtn[_ngcontent-%COMP%]   .fa.fa-floppy-o[_ngcontent-%COMP%]:before {\n  color: green;\n  font-size: 16px;\n}\n\n.none[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.7;\n}"]
  });
  return BOEComponent;
})();

/***/ }),

/***/ 2287:
/*!****************************************!*\
  !*** ./src/app/home/boe/boe.module.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoeModule": () => (/* binding */ BoeModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7976);
/* harmony import */ var _confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../confirm-dialog/confirm-dialog.service */ 12579);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 93329);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ 35581);
/* harmony import */ var _shared_Data_Servies_shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared-Data-Servies/shared-data.service */ 10241);
/* harmony import */ var _shared_home_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-home.module */ 69408);
/* harmony import */ var _boe_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boe.component */ 24289);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 64537);










let BoeModule = /*#__PURE__*/(() => {
  class BoeModule {}

  BoeModule.ɵfac = function BoeModule_Factory(t) {
    return new (t || BoeModule)();
  };

  BoeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: BoeModule
  });
  BoeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    providers: [_confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialogService, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal, _shared_Data_Servies_shared_data_service__WEBPACK_IMPORTED_MODULE_1__.SharedDataService],
    imports: [_shared_home_module__WEBPACK_IMPORTED_MODULE_2__.SharedHomeModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild([{
      path: "",
      component: _boe_component__WEBPACK_IMPORTED_MODULE_3__.BOEComponent,
      pathMatch: "full"
    }]), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__.ModalModule.forRoot()]
  });
  return BoeModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](BoeModule, {
    declarations: [_boe_component__WEBPACK_IMPORTED_MODULE_3__.BOEComponent],
    imports: [_shared_home_module__WEBPACK_IMPORTED_MODULE_2__.SharedHomeModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__.ModalModule]
  });
})();

/***/ })

}]);