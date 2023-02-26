"use strict";
(self["webpackChunkdm_frontend"] = self["webpackChunkdm_frontend"] || []).push([["src_app_home_view-document_view-document_module_ts"],{

/***/ 71828:
/*!***************************************************************!*\
  !*** ./src/app/home/view-document/view-document.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewDocumentComponent": () => (/* binding */ ViewDocumentComponent)
/* harmony export */ });
/* harmony import */ var D_Bharathexim_Repo_docmachine_frontend_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _service_document_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/document.service */ 76852);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! xlsx */ 4126);
/* harmony import */ var _currency_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../currency.json */ 35743);
/* harmony import */ var _shared_Data_Servies_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared-Data-Servies/shared-data.service */ 10241);
/* harmony import */ var _service_homeservices_shippingbill_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/homeservices/shippingbill.service */ 61650);
/* harmony import */ var src_app_service_window_information_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/window-information.service */ 23087);
/* harmony import */ var src_app_service_aprroval_pending_reject_transactions_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/aprroval-pending-reject-transactions.service */ 56869);
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/user.service */ 84981);
/* harmony import */ var _confirm_dialog_box_confirm_dialog_box_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../confirm-dialog-box/confirm-dialog-box.component */ 43970);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _custom_Filter_filter_toggle_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../custom/Filter/filter-toggle.directive */ 72173);
































const _c0 = ["epltable"];
const _c1 = ["table"];
const _c2 = ["inputName"];

function ViewDocumentComponent_div_5_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function ViewDocumentComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 14)(5, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "People collaborated");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, ViewDocumentComponent_div_5_span_8_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 18)(11, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ViewDocumentComponent_div_5_Template_img_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r10.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r0.doc, " Documents ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind3"](9, 2, ctx_r0.item2, 0, 3));
  }
}

function ViewDocumentComponent_div_6_option_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const Buyer_Name_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", Buyer_Name_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", Buyer_Name_r19, " ");
  }
}

function ViewDocumentComponent_div_6_option_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const Company_Name_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", Company_Name_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", Company_Name_r20, " ");
  }
}

function ViewDocumentComponent_div_6_option_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const Origin_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", Origin_r21, " ");
  }
}

function ViewDocumentComponent_div_6_option_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const Destination_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", Destination_r22, " ");
  }
}

function ViewDocumentComponent_div_6_option_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const Currency_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", Currency_r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", Currency_r23, " ");
  }
}

function ViewDocumentComponent_div_6_option_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const SB_DATE_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", SB_DATE_r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", SB_DATE_r24, " ");
  }
}

function ViewDocumentComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 22)(1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 25)(4, "div", 26)(5, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ViewDocumentComponent_div_6_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r25.exportToExcel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "Export");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 29)(9, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ViewDocumentComponent_div_6_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r26);

      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](13);

      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](_r12.style.display = "block");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "Filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 32, 33)(14, "form", 34)(15, "div", 23)(16, "div", 35)(17, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "Buyer name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "select", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_6_Template_select_ngModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r26);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r28.commodity = $event);
    })("change", function ViewDocumentComponent_div_6_Template_select_change_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r26);

      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](13);

      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      ctx_r29.filter($event.target.value, "buyerName");
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](_r12.style.display = "none");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "Buyer name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](22, ViewDocumentComponent_div_6_option_22_Template, 2, 2, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "div", 35)(24, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, "Company name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "select", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function ViewDocumentComponent_div_6_Template_select_change_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r26);

      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](13);

      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      ctx_r30.filter($event.target.value, "consigneeName");
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](_r12.style.display = "none");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, "Company name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](29, ViewDocumentComponent_div_6_option_29_Template, 2, 2, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "div", 35)(31, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, "Origin");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "select", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function ViewDocumentComponent_div_6_Template_select_change_33_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r26);

      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](13);

      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      ctx_r31.filter($event.target.value, "exporterLocationCode");
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](_r12.style.display = "none");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35, "Origin");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](36, ViewDocumentComponent_div_6_option_36_Template, 2, 1, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "div", 35)(38, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39, "Destination");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "select", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function ViewDocumentComponent_div_6_Template_select_change_40_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r26);

      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](13);

      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      ctx_r32.filter($event.target.value, "countryOfFinaldestination");
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](_r12.style.display = "none");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](42, "Destination");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](43, ViewDocumentComponent_div_6_option_43_Template, 2, 1, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "div", 35)(45, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](46, "Currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "select", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function ViewDocumentComponent_div_6_Template_select_change_47_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r26);

      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](13);

      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      ctx_r33.filter($event.target.value, "freightCurrency");
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](_r12.style.display = "none");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](49, "Currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](50, ViewDocumentComponent_div_6_option_50_Template, 2, 2, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "div", 35)(52, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](53, "SB DATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "select", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function ViewDocumentComponent_div_6_Template_select_change_54_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r26);

      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](13);

      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      ctx_r34.filter($event.target.value, "sbdate");
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](_r12.style.display = "none");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](56, "SB DATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](57, ViewDocumentComponent_div_6_option_57_Template, 2, 2, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "div", 46)(59, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ViewDocumentComponent_div_6_Template_button_click_59_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r26);

      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](13);

      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      ctx_r35.resetFilter();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](_r12.style.display = "none");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](60, "RESET");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](61, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](62, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ViewDocumentComponent_div_6_Template_button_click_62_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r26);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r36.newShipping());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](63, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](64, " ADD NEW ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r1.commodity);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r1.ALL_FILTER_DATA == null ? null : ctx_r1.ALL_FILTER_DATA.Buyer_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r1.ALL_FILTER_DATA == null ? null : ctx_r1.ALL_FILTER_DATA.Company_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r1.ALL_FILTER_DATA == null ? null : ctx_r1.ALL_FILTER_DATA.Origin);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r1.ALL_FILTER_DATA == null ? null : ctx_r1.ALL_FILTER_DATA.Destination);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r1.ALL_FILTER_DATA == null ? null : ctx_r1.ALL_FILTER_DATA.Currency);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r1.ALL_FILTER_DATA == null ? null : ctx_r1.ALL_FILTER_DATA.SB_DATE);
  }
}

function ViewDocumentComponent_div_9_div_2_th_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function ViewDocumentComponent_div_9_div_2_td_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", element_r51.position, " ");
  }
}

function ViewDocumentComponent_div_9_div_2_th_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function ViewDocumentComponent_div_9_div_2_td_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", element_r52.name, " ");
  }
}

function ViewDocumentComponent_div_9_div_2_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Weight ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function ViewDocumentComponent_div_9_div_2_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", element_r53.weight, " ");
  }
}

function ViewDocumentComponent_div_9_div_2_th_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Symbol ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function ViewDocumentComponent_div_9_div_2_td_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", element_r54.symbol, " ");
  }
}

function ViewDocumentComponent_div_9_div_2_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tr", 72);
  }
}

function ViewDocumentComponent_div_9_div_2_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tr", 73);
  }
}

function ViewDocumentComponent_div_9_div_2_table_21_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ViewDocumentComponent_div_9_div_2_table_21_tr_19_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r60);
      const data_r57 = restoredCtx.$implicit;
      const i_r58 = restoredCtx.index;
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r59.getInvoices(data_r57, i_r58) && ctx_r59.getTransactions(data_r57.pi_poNo));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "th", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "img", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "th", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](data_r57.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](data_r57.pi_poNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r57.amount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](data_r57.buyerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r57.location, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](data_r57.benneName);
  }
}

function ViewDocumentComponent_div_9_div_2_table_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "table", 74)(1, "thead", 75)(2, "tr", 76)(3, "th", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "img", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "th", 79)(6, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "DATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "th", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "PI/PO No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "th", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "th", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "CONSIGNEE NAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "th", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "BRANCH");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "th", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "Bene Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "tbody", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, ViewDocumentComponent_div_9_div_2_table_21_tr_19_Template, 15, 6, "tr", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r48.item1);
  }
}

function ViewDocumentComponent_div_9_div_2_table_22_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ViewDocumentComponent_div_9_div_2_table_22_tr_19_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r65);
      const data_r62 = restoredCtx.$implicit;
      const i_r63 = restoredCtx.index;
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r64.getInvoices(data_r62, i_r63) && ctx_r64.getTransactions(data_r62.pi_poNo));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "th", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "img", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "th", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "Random Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "img", 21)(13, "img", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, " Lindsey Stroud ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](data_r62.boeDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](data_r62.boeNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r62.adCode, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](data_r62.benneName);
  }
}

function ViewDocumentComponent_div_9_div_2_table_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "table", 74)(1, "thead", 75)(2, "tr", 76)(3, "th", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "img", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "th", 79)(6, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "DATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "th", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "BOE NUMBER");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "th", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "AD CODE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "th", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "COMPANY NAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "th", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "UPLOADED BY");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "th", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "BENE NAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "tbody", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, ViewDocumentComponent_div_9_div_2_table_22_tr_19_Template, 17, 4, "tr", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r49.item1);
  }
}

function ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r67.sbdate, " ");
  }
}

function ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_3_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r95);
      const data_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](data_r67.sbdate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", data_r67.sbdate);
  }
}

function ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_5_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r99);
      const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      const data_r67 = ctx_r98.$implicit;
      const i_r68 = ctx_r98.index;
      const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r97.getInvoices(data_r67, i_r68) && ctx_r97.getTransactions(data_r67.pi_poNo));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r67.sbno, " ");
  }
}

function ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_6_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r103);
      const data_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](data_r67.sbno = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", data_r67.sbno);
  }
}

function ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r67.adCode, " ");
  }
}

function ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_9_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r108);
      const data_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](data_r67.adCode = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", data_r67.adCode);
  }
}

function ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r67.adBillNo, " ");
  }
}

function ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_12_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r113);
      const data_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](data_r67.adBillNo = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", data_r67.adBillNo);
  }
}

function ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r77.transform(data_r67.buyerName), " ");
  }
}

function ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "input", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_15_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r118);
      const data_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](data_r67.buyerName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", data_r67.buyerName);
  }
}

function ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r67.consigneeName, " ");
  }
}

function ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_18_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r123);
      const data_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](data_r67.consigneeName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", data_r67.consigneeName);
  }
}

function ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r67.exporterLocationCode, " ");
  }
}

function ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "input", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_21_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r128);
      const data_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](data_r67.exporterLocationCode = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", data_r67.exporterLocationCode);
  }
}

function ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r67.countryOfFinaldestination, " ");
  }
}

function ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r133 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_24_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r133);
      const data_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](data_r67.countryOfFinaldestination = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", data_r67.countryOfFinaldestination);
  }
}

function ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r67.fobCurrency, " ");
  }
}

function ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r138 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "input", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_27_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r138);
      const data_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](data_r67.fobCurrency = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", data_r67.fobCurrency);
  }
}

function ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r67.fobValue, " ");
  }
}

function ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r143 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "input", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_30_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r143);
      const data_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](data_r67.fobValue = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", data_r67.fobValue);
  }
}

function ViewDocumentComponent_div_9_div_2_table_23_tr_41_button_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r147 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ViewDocumentComponent_div_9_div_2_table_23_tr_41_button_48_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r147);
      const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      const data_r67 = ctx_r146.$implicit;
      const i_r68 = ctx_r146.index;
      const ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r145.toSave(data_r67, i_r68));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function ViewDocumentComponent_div_9_div_2_table_23_tr_41_button_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r150 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ViewDocumentComponent_div_9_div_2_table_23_tr_41_button_49_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r150);
      const i_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().index;
      const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r148.toEdit(i_r68));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function ViewDocumentComponent_div_9_div_2_table_23_tr_41_button_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r153 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ViewDocumentComponent_div_9_div_2_table_23_tr_41_button_50_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r153);
      const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      const data_r67 = ctx_r152.$implicit;
      const i_r68 = ctx_r152.index;
      const ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r151.handleDelete(data_r67._id, i_r68));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "a", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "i", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}

function ViewDocumentComponent_div_9_div_2_table_23_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r155 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr", 89)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_2_Template, 2, 1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_3_Template, 2, 1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "td", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_5_Template, 2, 1, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_6_Template, 2, 1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_8_Template, 2, 1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_9_Template, 2, 1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_11_Template, 2, 1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_12_Template, 2, 1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_14_Template, 2, 1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_15_Template, 2, 1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_17_Template, 2, 1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_18_Template, 2, 1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_20_Template, 2, 1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_21_Template, 2, 1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](23, ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_23_Template, 2, 1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](24, ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_24_Template, 2, 1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](26, ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_26_Template, 2, 1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](27, ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_27_Template, 2, 1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](29, ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_29_Template, 2, 1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](30, ViewDocumentComponent_div_9_div_2_table_23_tr_41_div_30_Template, 2, 1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "td", 92)(46, "a", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ViewDocumentComponent_div_9_div_2_table_23_tr_41_Template_a_click_46_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r155);
      const data_r67 = restoredCtx.$implicit;
      const ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);

      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](12);

      ctx_r154.openLetterOfCredit(_r5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r154.viewCN(data_r67));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](47, "i", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](48, ViewDocumentComponent_div_9_div_2_table_23_tr_41_button_48_Template, 2, 0, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](49, ViewDocumentComponent_div_9_div_2_table_23_tr_41_button_49_Template, 2, 0, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](50, ViewDocumentComponent_div_9_div_2_table_23_tr_41_button_50_Template, 3, 0, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r67 = ctx.$implicit;
    const i_r68 = ctx.index;
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r66.AprrovalPendingRejectService.truefalse(data_r67["deleteflag"] == "0" || data_r67["deleteflag"] == 0) || ctx_r66.AprrovalPendingRejectService.truefalse((ctx_r66.USER_DATA == null ? null : ctx_r66.USER_DATA.result == null ? null : ctx_r66.USER_DATA.result.Role_Type) != "Approver"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r66.optionsVisibility[i_r68]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r66.optionsVisibility[i_r68]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r66.optionsVisibility[i_r68]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r66.optionsVisibility[i_r68]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r66.optionsVisibility[i_r68]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r66.optionsVisibility[i_r68]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r66.optionsVisibility[i_r68]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r66.optionsVisibility[i_r68]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r66.optionsVisibility[i_r68]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r66.optionsVisibility[i_r68]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r66.optionsVisibility[i_r68]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r66.optionsVisibility[i_r68]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r66.optionsVisibility[i_r68]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r66.optionsVisibility[i_r68]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r66.optionsVisibility[i_r68]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r66.optionsVisibility[i_r68]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r66.optionsVisibility[i_r68]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r66.optionsVisibility[i_r68]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r66.optionsVisibility[i_r68]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r66.optionsVisibility[i_r68]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r67.firxNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r67.firxDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r67.firxCurrency, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r67.firxAmount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r67.firxCommision, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r67.firxRecAmo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r67.balanceAvai, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r66.optionsVisibility[i_r68]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r66.optionsVisibility[i_r68]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r66.optionsVisibility[i_r68]);
  }
}

function ViewDocumentComponent_div_9_div_2_table_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "table", 74)(1, "thead", 75)(2, "tr", 87)(3, "th", 79)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "SB DATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "th", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "SB NUMBER");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "th", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "AD CODE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "th", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "AD BILL NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "th", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "BUYER NAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "th", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "COMPANY NAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "th", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "ORIGIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "th", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "DESTINATION");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "th", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "CURRENCY");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "th", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "SB AMOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "th", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, "FIRX NUMBER ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "th", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "FIRX DATE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "th", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "FIRX CURRENCY ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "th", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, "FIRX AMOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "th", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "FIRX COMMISION ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "th", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35, "FIRX RECIEVED AMOUNT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "th", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37, "AVAILABLE BALANCE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "th", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39, "Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "tbody", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](41, ViewDocumentComponent_div_9_div_2_table_23_tr_41_Template, 51, 31, "tr", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r50.FILTER_VALUE_LIST);
  }
}

const _c3 = function () {
  return [5, 10, 20];
};

function ViewDocumentComponent_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 54)(1, "div", 55)(2, "div", 56)(3, "table", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](4, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, ViewDocumentComponent_div_9_div_2_th_5_Template, 2, 0, "th", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, ViewDocumentComponent_div_9_div_2_td_6_Template, 2, 1, "td", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](7, 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, ViewDocumentComponent_div_9_div_2_th_8_Template, 2, 0, "th", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, ViewDocumentComponent_div_9_div_2_td_9_Template, 2, 1, "td", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](10, 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, ViewDocumentComponent_div_9_div_2_th_11_Template, 2, 0, "th", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, ViewDocumentComponent_div_9_div_2_td_12_Template, 2, 1, "td", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](13, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, ViewDocumentComponent_div_9_div_2_th_14_Template, 2, 0, "th", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, ViewDocumentComponent_div_9_div_2_td_15_Template, 2, 1, "td", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, ViewDocumentComponent_div_9_div_2_tr_16_Template, 1, 0, "tr", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, ViewDocumentComponent_div_9_div_2_tr_17_Template, 1, 0, "tr", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "mat-paginator", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "section", 67)(20, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, ViewDocumentComponent_div_9_div_2_table_21_Template, 20, 1, "table", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](22, ViewDocumentComponent_div_9_div_2_table_22_Template, 20, 1, "table", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](23, ViewDocumentComponent_div_9_div_2_table_23_Template, 42, 1, "table", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dataSource", ctx_r37.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matHeaderRowDef", ctx_r37.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matRowDefColumns", ctx_r37.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](7, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r37.pipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r37.boe);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r37.sb);
  }
}

function ViewDocumentComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 51)(1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, ViewDocumentComponent_div_9_div_2_Template, 24, 8, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r3.showInvoice);
  }
}

function ViewDocumentComponent_div_10_div_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 138)(1, "span", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "p", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](data_r160.sbno);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r160.sbdate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](data_r160.buyerName);
  }
}

function ViewDocumentComponent_div_10_div_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 138)(1, "span", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "p", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Continental carriers pvt ltd");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](data_r160.pi_poNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r160.date, "");
  }
}

function ViewDocumentComponent_div_10_div_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 138)(1, "span", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "p", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Continental carriers pvt ltd");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](data_r160.boeNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r160.boeDate, "");
  }
}

function ViewDocumentComponent_div_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r169 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ViewDocumentComponent_div_10_div_2_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r169);
      const data_r160 = restoredCtx.$implicit;
      const i_r161 = restoredCtx.index;
      const ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r168.getInvoices(data_r160, i_r161) && ctx_r168.getTransactions(data_r160.pi_poNo));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "img", 21)(3, "img", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, ViewDocumentComponent_div_10_div_2_div_4_Template, 7, 3, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, ViewDocumentComponent_div_10_div_2_div_5_Template, 7, 2, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, ViewDocumentComponent_div_10_div_2_div_6_Template, 7, 2, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r161 = ctx.index;
    const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r156.lastIndex == i_r161 ? "activeBtn" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r156.sb);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r156.pipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r156.boe);
  }
}

function ViewDocumentComponent_div_10_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 142)(1, "div", 143)(2, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 145)(5, "div", 146)(6, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "PI/PO DETAILS");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 146)(9, "span", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 52)(12, "div", 149)(13, "section", 150)(14, "div", 151)(15, "div", 152)(16, "label", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "PI/PO NO.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "p", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 155)(21, "div", 156)(22, "label", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "Benne Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "p", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "div", 151)(27, "div", 156)(28, "label", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "Currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "p", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "div", 151)(33, "div", 156)(34, "label", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "p", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "div", 155)(39, "div", 156)(40, "label", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41, "LEO DATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "p", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "div", 151)(45, "div", 156)(46, "label", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](47, "Last Day Of Shipment");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "p", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "div", 151)(51, "div", 156)(52, "label", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](53, "Payment Term");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "p", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "div", 155)(57, "div", 156)(58, "label", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](59, "PC Ref No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](60, "p", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](62, "div", 151)(63, "div", 156)(64, "label", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](65, "Due Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](66, "p", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](68, "iframe", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("PI/PO NUMBER:\u2003", ctx_r157.selectedRow.pi_poNo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("SHIPPING BILL DATE:\u2003", ctx_r157.selectedRow.date, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r157.selectedRow.pi_poNo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r157.selectedRow.benneName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r157.selectedRow.currency, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r157.selectedRow.amount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r157.selectedRow.incoterm, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r157.selectedRow.lastDayShipment, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r157.selectedRow.paymentTerm, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r157.selectedRow.pcRefNo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r157.selectedRow.dueDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r157.docu, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeResourceUrl"]);
  }
}

function ViewDocumentComponent_div_10_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r171 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 158)(1, "div", 159)(2, "span", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 146)(5, "span", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "SB DETAILS");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "span", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 52)(10, "div", 149)(11, "section", 162)(12, "tr", 163)(13, "td", 164)(14, "label", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "DISCHARGE PORT");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "input", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_20_Template_input_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r171);
      const ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r170.selectedRow.dischargePort = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "td", 167)(18, "label", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "IEC CODE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "input", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_20_Template_input_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r171);
      const ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r172.selectedRow.iecCode = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "td", 170)(22, "label", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "IEC NAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "input", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_20_Template_input_ngModelChange_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r171);
      const ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r173.selectedRow.iecName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "td", 164)(27, "label", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, "AD CODE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "input", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_20_Template_input_ngModelChange_29_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r171);
      const ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r174.selectedRow.adCode = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "p", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, "INVOICE DETAILS");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "td", 164)(33, "label", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34, "INVOICE NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "input", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_20_Template_input_ngModelChange_35_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r171);
      const ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r175.selectedRow.invoiceNumber = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "td", 167)(37, "label", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38, "INVOICE AMOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "input", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_20_Template_input_ngModelChange_39_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r171);
      const ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r176.selectedRow.invoiceAmount = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "td", 170)(41, "label", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](42, "CURRENCY");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "input", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_20_Template_input_ngModelChange_43_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r171);
      const ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r177.selectedRow.currency = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](44, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "td", 164)(46, "label", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](47, "SETTELED AMOIUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "input", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_20_Template_input_ngModelChange_48_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r171);
      const ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r178.selectedRow.settledAmount = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "td", 167)(50, "label", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](51, "STATUS");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "input", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_20_Template_input_ngModelChange_52_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r171);
      const ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r179.selectedRow.status = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](53, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "p", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](55, "FOB and FREIGHT");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "td", 167)(57, "label", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](58, "FREIGHT AMOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "input", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_20_Template_input_ngModelChange_59_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r171);
      const ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r180.selectedRow.freightAmount = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](60, "td", 170)(61, "label", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](62, "FREIGHT CURRENCY");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](63, "input", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_20_Template_input_ngModelChange_63_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r171);
      const ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r181.selectedRow.freightCurrency = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](64, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](65, "p", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](66, "INSURANCE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](67, "td", 167)(68, "label", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](69, "INSURANCE AMOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](70, "input", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_20_Template_input_ngModelChange_70_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r171);
      const ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r182.selectedRow.insuranceAmount = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](71, "td", 170)(72, "label", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](73, "INSURANCE CURRENCY");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](74, "input", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_20_Template_input_ngModelChange_74_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r171);
      const ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r183.selectedRow.insuranceCurrency = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](75, "p", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](76, "DISCOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](77, "td", 167)(78, "label", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](79, "DISCOUNT AMOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](80, "input", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_20_Template_input_ngModelChange_80_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r171);
      const ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r184.selectedRow.discountAmount = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](81, "td", 170)(82, "label", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](83, "DISCOUNT CURRENCY");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](84, "input", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_20_Template_input_ngModelChange_84_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r171);
      const ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r185.selectedRow.discountCurrency = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](85, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](86, "p", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](87, "MISCELLANEOUS");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](88, "td", 167)(89, "label", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](90, "MISCELLANEOUS AMOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](91, "input", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_20_Template_input_ngModelChange_91_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r171);
      const ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r186.selectedRow.miscellaneousAmount = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](92, "td", 170)(93, "label", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](94, "MISCELLANEOUS CURRENCY");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](95, "input", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_20_Template_input_ngModelChange_95_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r171);
      const ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r187.selectedRow.miscellaneousCurrency = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](96, "p", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](97, "COMMISSION");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](98, "td", 167)(99, "label", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](100, "COMMISSION AMOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](101, "input", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_20_Template_input_ngModelChange_101_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r171);
      const ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r188.selectedRow.commissionAmount = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](102, "td", 170)(103, "label", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](104, "COMMISSION CURRENCY");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](105, "input", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_20_Template_input_ngModelChange_105_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r171);
      const ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r189.selectedRow.commissionCurrency = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](106, "iframe", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("BOE NUMBER:\u2003", ctx_r158.selectedRow.boeNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("BOE DATE:\u2003", ctx_r158.selectedRow.boeDate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r158.selectedRow.dischargePort);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r158.selectedRow.iecCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r158.selectedRow.iecName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r158.selectedRow.adCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r158.selectedRow.invoiceNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r158.selectedRow.invoiceAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r158.selectedRow.currency);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r158.selectedRow.settledAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r158.selectedRow.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r158.selectedRow.freightAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r158.selectedRow.freightCurrency);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r158.selectedRow.insuranceAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r158.selectedRow.insuranceCurrency);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r158.selectedRow.discountAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r158.selectedRow.discountCurrency);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r158.selectedRow.miscellaneousAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r158.selectedRow.miscellaneousCurrency);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r158.selectedRow.commissionAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r158.selectedRow.commissionCurrency);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r158.docu, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeResourceUrl"]);
  }
}

function ViewDocumentComponent_div_10_div_21_tr_120_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const obj_r191 = ctx.$implicit;
    const i_r192 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](i_r192 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](obj_r191.invoiceno);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](obj_r191.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](obj_r191.currency);
  }
}

function ViewDocumentComponent_div_10_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r194 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 158)(1, "div", 159)(2, "span", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 146)(5, "span", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "SB DETAILS");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "span", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 52)(10, "div", 149)(11, "section", 162)(12, "tr", 206)(13, "div")(14, "td", 164)(15, "label", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "PORT CODE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "input", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_21_Template_input_ngModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r194);
      const ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r193.selectedRow.portCode = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "td", 167)(19, "label", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, "IEC CODE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "input", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_21_Template_input_ngModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r194);
      const ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r195.selectedRow.ieccode = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "td", 170)(23, "label", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, "IEC NAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "input", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_21_Template_input_ngModelChange_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r194);
      const ctx_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r196.selectedRow.iecName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "div")(28, "td", 164)(29, "label", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30, "AD CODE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "input", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_21_Template_input_ngModelChange_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r194);
      const ctx_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r197.selectedRow.adCode = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "td", 167)(33, "label", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34, "LEO DATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "input", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_21_Template_input_ngModelChange_35_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r194);
      const ctx_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r198.selectedRow.leodate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "td", 170)(37, "label", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38, "PROCESSING STATUS");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "input", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_21_Template_input_ngModelChange_39_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r194);
      const ctx_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r199.selectedRow.processingStaus = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](40, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "div")(42, "p", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43, "FOB and FREIGHT");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "td", 164)(45, "label", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](46, "FOB CURRENCY");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "input", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_21_Template_input_ngModelChange_47_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r194);
      const ctx_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r200.selectedRow.fobCurrency = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "td", 167)(49, "label", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](50, "FOB VALUE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "input", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_21_Template_input_ngModelChange_51_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r194);
      const ctx_r201 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r201.selectedRow.fobValue = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "td", 170)(53, "label", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](54, "REALIZED FOB VALUE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "input", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_21_Template_input_ngModelChange_55_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r194);
      const ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r202.selectedRow.realizedFobValue = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](56, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "div")(58, "td", 164)(59, "label", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](60, "EQUIVALENT FOB VALUE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](61, "input", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_21_Template_input_ngModelChange_61_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r194);
      const ctx_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r203.selectedRow.equivalentFobValue = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](62, "td", 167)(63, "label", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](64, "FREIGHT CURRENCY");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](65, "input", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_21_Template_input_ngModelChange_65_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r194);
      const ctx_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r204.selectedRow.freightCurrency = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](66, "td", 170)(67, "label", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](68, "FREIGHT VALUE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](69, "input", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_21_Template_input_ngModelChange_69_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r194);
      const ctx_r205 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r205.selectedRow.realizedFreightValue = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](70, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](71, "div")(72, "p", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](73, "INSURANCE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](74, "td", 167)(75, "label", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](76, "INSURANCE CURRENCY");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](77, "input", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_21_Template_input_ngModelChange_77_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r194);
      const ctx_r206 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r206.selectedRow.insuranceCurrency = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](78, "td", 170)(79, "label", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](80, "INSURANCE VALUE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](81, "input", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_21_Template_input_ngModelChange_81_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r194);
      const ctx_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r207.selectedRow.insuranceValue = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](82, "td", 164)(83, "label", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](84, "REALIZED INSURANCE VALUE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](85, "input", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_21_Template_input_ngModelChange_85_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r194);
      const ctx_r208 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r208.selectedRow.realizedInsuranceValue = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](86, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](87, "div")(88, "p", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](89, "Additional");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](90, "td", 167)(91, "label", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](92, "BANKING CHARGES");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](93, "input", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_21_Template_input_ngModelChange_93_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r194);
      const ctx_r209 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r209.selectedRow.bankingCharges = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](94, "td", 170)(95, "label", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](96, "PAYMENT LAST DATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](97, "input", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_21_Template_input_ngModelChange_97_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r194);
      const ctx_r210 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r210.selectedRow.expectedPaymentlastdate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](98, "td", 164)(99, "label", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](100, "ADDED DATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](101, "input", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_21_Template_input_ngModelChange_101_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r194);
      const ctx_r211 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r211.selectedRow.AddedDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](102, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](103, "div")(104, "td", 167)(105, "label", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](106, "MODIFIED DATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](107, "input", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_21_Template_input_ngModelChange_107_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r194);
      const ctx_r212 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r212.selectedRow.modifiedDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](108, "p", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](109, "Invoices");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](110, "table", 237)(111, "tr")(112, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](113, " Serial Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](114, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](115, "Invoice Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](116, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](117, "Invoice Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](118, "th", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](119, " Currency ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](120, ViewDocumentComponent_div_10_div_21_tr_120_Template, 9, 4, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](121, "iframe", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("SB NUMBER:\u2003", ctx_r159.selectedRow.sbno, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("SB DATE:\u2003", ctx_r159.selectedRow.sbdate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r159.selectedRow.portCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r159.selectedRow.ieccode);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r159.selectedRow.iecName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r159.selectedRow.adCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r159.selectedRow.leodate);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r159.selectedRow.processingStaus);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r159.selectedRow.fobCurrency);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r159.selectedRow.fobValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r159.selectedRow.realizedFobValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r159.selectedRow.equivalentFobValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r159.selectedRow.freightCurrency);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r159.selectedRow.realizedFreightValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r159.selectedRow.insuranceCurrency);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r159.selectedRow.insuranceValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r159.selectedRow.realizedInsuranceValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r159.selectedRow.bankingCharges);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r159.selectedRow.expectedPaymentlastdate);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r159.selectedRow.AddedDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r159.selectedRow.modifiedDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r159.selectedRow.invoices);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r159.docu, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeResourceUrl"]);
  }
}

function ViewDocumentComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 114)(1, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, ViewDocumentComponent_div_10_div_2_Template, 7, 4, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 117)(4, "div", 118)(5, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "input", 120)(7, "input", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "ul", 122)(9, "div")(10, "ul", 122)(11, "li", 123)(12, "label", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "li", 123)(15, "label", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "Additional Documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 126)(18, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, ViewDocumentComponent_div_10_div_19_Template, 69, 12, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, ViewDocumentComponent_div_10_div_20_Template, 107, 22, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, ViewDocumentComponent_div_10_div_21_Template, 122, 23, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "div", 130)(23, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](24, "input", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "div", 133)(26, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "Drag a document here");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "or");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "button", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()()();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r4.item1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("data-index", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("data-index", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("data-index", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("data-index", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("data-index", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r4.selectedRow.pi_poNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r4.selectedRow.boeNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r4.selectedRow.sbno);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("data-index", 2);
  }
}

function ViewDocumentComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r215 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 240)(1, "div", 241)(2, "div", 242)(3, "div", 243)(4, "div", 244)(5, "div", 23)(6, "div", 245)(7, "h6", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "Shipping Bill");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "iframe", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "button", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ViewDocumentComponent_ng_template_11_Template_button_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r215);
      const modal_r213 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](modal_r213.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()()();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r6.viewData, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeResourceUrl"]);
  }
}

let ViewDocumentComponent = /*#__PURE__*/(() => {
  class ViewDocumentComponent {
    constructor(documentService, shippingBillService, router, route, sanitizer, modalService, toastr, sharedData, wininfo, userService, dialog, AprrovalPendingRejectService) {
      this.documentService = documentService;
      this.shippingBillService = shippingBillService;
      this.router = router;
      this.route = route;
      this.sanitizer = sanitizer;
      this.modalService = modalService;
      this.toastr = toastr;
      this.sharedData = sharedData;
      this.wininfo = wininfo;
      this.userService = userService;
      this.dialog = dialog;
      this.AprrovalPendingRejectService = AprrovalPendingRejectService;
      this.item1 = [];
      this.item2 = [];
      this.item3 = [];
      this.item4 = [];
      this.export = false;
      this.import = false;
      this.showPdf = false;
      this.greaterAmount = 0;
      this.selectedDoc = '';
      this.allTransactions = [];
      this.optionsVisibility = [];
      this.filtervisible = false;
      this.piPoForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroup({
        pi_poNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(''),
        benneName: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(''),
        currency: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(''),
        amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(''),
        incoterm: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(''),
        lastDayShipment: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(''),
        paymentTerm: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(''),
        pcRefNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('')
      });
      this.USER_DATA = [];
      this.PENDING_DATA = [];
      this.FILTER_VALUE_LIST = [];
      this.ALL_FILTER_DATA = {
        Buyer_Name: [],
        Company_Name: [],
        Origin: [],
        Destination: [],
        Currency: [],
        SB_DATE: []
      };
    }

    ngOnInit() {
      var _this = this;

      return (0,D_Bharathexim_Repo_docmachine_frontend_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this.wininfo.set_controller_of_width(270, '.content-wrap');

        _this.USER_DATA = yield _this.userService.getUserDetail();
        console.log("this.USER_DATA", _this.USER_DATA);

        _this.documentService.getRejectStatus(_this.USER_DATA?.result?.sideMenu).subscribe(res => {
          _this.PENDING_DATA = res;
          console.log("this.PENDING_DATA", res);
        });

        for (let index = 0; index < _currency_json__WEBPACK_IMPORTED_MODULE_2__?.length; index++) {
          _this.ALL_FILTER_DATA['Currency'].push(_currency_json__WEBPACK_IMPORTED_MODULE_2__[index]['value']);
        }

        _this.route.params.subscribe(params => {
          _this.file = _this.route.snapshot.params['file'];

          if (_this.file === 'sb') {
            _this.doc = 'Shipping Bill';
            _this.pipo = false;
            _this.boe = false;
            _this.sb = true;

            _this.shippingBillService.getShippingBillList_Master().then(data => {
              console.log('getShippingBillList_Master', data);
              _this.item1 = data;
              _this.FILTER_VALUE_LIST = data;

              for (let index = 0; index < data.length; index++) {
                if (_this.ALL_FILTER_DATA['Buyer_Name'].includes(data[index]?.buyerName[0]) == false) {
                  _this.ALL_FILTER_DATA['Buyer_Name'].push(data[index]?.buyerName[0]);
                }

                if (_this.ALL_FILTER_DATA['Company_Name'].includes(data[index]?.consigneeName) == false) {
                  _this.ALL_FILTER_DATA['Company_Name'].push(data[index]?.consigneeName);
                }

                if (_this.ALL_FILTER_DATA['Origin'].includes(data[index]?.exporterLocationCode) == false) {
                  _this.ALL_FILTER_DATA['Origin'].push(data[index]?.exporterLocationCode);
                }

                if (_this.ALL_FILTER_DATA['Destination'].includes(data[index]?.countryOfFinaldestination) == false) {
                  _this.ALL_FILTER_DATA['Destination'].push(data[index]?.countryOfFinaldestination);
                }

                if (_this.ALL_FILTER_DATA['SB_DATE'].includes(data[index]?.sbdate) == false) {
                  _this.ALL_FILTER_DATA['SB_DATE'].push(data[index]?.sbdate);
                }
              }
            });
          } else if (_this.file === 'boe') {
            _this.doc = 'BOE';
            _this.pipo = false;
            _this.boe = true;
            _this.sb = false;

            _this.documentService.getBoe(1).subscribe(res => {
              console.log(res), _this.item2 = res.data;
            }, err => console.log(err));
          } else if (_this.file === 'pipo') {
            _this.doc = 'PI/PO';
            _this.pipo = true;
            _this.boe = false;
            _this.sb = false;

            _this.documentService.getPipo().subscribe(res => {
              console.log('Data fetched successfully', res);
              _this.item2 = res.data;
            }, err => console.log(err));
          }

          _this.showInvoice = false;
          console.log('hello'); // setTimeout(()=>{this.documentService.loading=false;},1000)
        });
      })();
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

    onclick() {
      this.filtervisible = !this.filtervisible;
    }

    exportToExcel() {
      const ws = xlsx__WEBPACK_IMPORTED_MODULE_12__.utils.table_to_sheet(this.epltable.nativeElement);
      const wb = xlsx__WEBPACK_IMPORTED_MODULE_12__.utils.book_new();
      xlsx__WEBPACK_IMPORTED_MODULE_12__.utils.book_append_sheet(wb, ws, 'Sheet1');
      xlsx__WEBPACK_IMPORTED_MODULE_12__.writeFile(wb, 'ShippingBill.xlsx');
    }

    hide() {
      this.sb = true;
      this.showInvoice = false;
    }

    newShipping() {
      this.sharedData.changeretunurl('home/view-document/sb');
      this.router.navigate(['home/upload', {
        file: 'export',
        document: 'sb'
      }]);
    }

    getTransactions(selectedRowValues) {
      this.documentService.getTask({
        pi_poNo: selectedRowValues,
        file: 'advance'
      }).subscribe(res => {
        this.allTransactions = res.task;
        console.log('ALL TRANSACTIONS', this.allTransactions);
      }, err => console.log(err));
    }

    getInvoices(selectedRowValues, i) {
      console.log('SELECTED', selectedRowValues);
      console.log('INDEX', i);
      console.log(selectedRowValues.doc);
      this.lastIndex = i; //this.docu = selectedRowValues.doc;

      this.docu = this.sanitizer.bypassSecurityTrustResourceUrl(selectedRowValues.doc);
      return this.selectedRow = selectedRowValues, this.showInvoice = true, this.tableWidth = '30%', this.greaterAmount = parseInt(this.selectedRow.amount);
    }

    onExport() {
      this.export = !this.export;
    }

    onImport() {
      this.import = !this.import;
    }

    exBill() {
      this.Ax1 = !this.Ax1;
    }

    withBill() {
      this.Ax2 = !this.Ax2;
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

      if (!data.completed) {
        this.documentService.task = data;
        this.documentService.draft = true; //data.pipoDetail["_id"] = data._id;

        this.documentService.pdfData = data.pipoDetail;

        if (parseInt(this.selectedRow.amount) < 200000) {
          this.documentService.pdfData = this.selectedRow;
          this.router.navigateByUrl(`/home/inwardRemittance/${data.pi_poNo}`);
        } else {
          console.log(this.selectedDoc);
          this.router.navigateByUrl(`/home/fbg-wavier/${data.pi_poNo}`);
        }
      } else {
        this.router.navigateByUrl(`/home/completed-task/${data._id}`);
      }
    }

    showThisPdf(piPo) {
      this.documentService.draft = false;

      if (parseInt(this.selectedRow.amount) < 200000) {
        this.documentService.pdfData = this.selectedRow;
        this.router.navigateByUrl(`/home/inwardRemittance/${piPo}`);
      } else {
        console.log(this.selectedDoc);
        this.router.navigateByUrl(`/home/fbg-wavier/${piPo}`);
      }
    }

    openLetterOfCredit(content) {
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
      if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
    }

    viewCN(a) {
      this.viewData = this.sanitizer.bypassSecurityTrustResourceUrl(a['doc']);
    }

    toSave(data, index) {
      this.optionsVisibility[index] = false;
      console.log(data); // this.res = new ShippingBill(data[1].data);

      this.documentService.updateMaster(data, data._id).subscribe(data => {
        console.log('king123');
        console.log(data);
        this.toastr.success('Shipping Bill row is updated'); // this.router.navigate(["home/view-document/sb"]);
        //this.router.navigate(['/login'], { queryParams: { registered: true }});
      }, error => {
        console.log('error');
      });
    }

    toEdit(index) {
      this.optionsVisibility[index] = true;
      this.toastr.warning('Shipping Bill Row Is In Edit Mode');
    }

    handleDelete(id, index) {
      const message = `Are you sure you want to delete this?`;
      const dialogData = new _confirm_dialog_box_confirm_dialog_box_component__WEBPACK_IMPORTED_MODULE_8__.ConfirmDialogModel("Confirm Action", message);
      const dialogRef = this.dialog.open(_confirm_dialog_box_confirm_dialog_box_component__WEBPACK_IMPORTED_MODULE_8__.ConfirmDialogBoxComponent, {
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
          tableName: 'masterrecord'
        }).subscribe(res => {
          console.log(res);

          if (res) {
            this.ngOnInit();
          }
        }, err => console.log(err));
      } else if (RoleCheckbox == 'Maker' || RoleCheckbox == 'Checker' || RoleCheckbox == 'Approver') {
        var approval_data = {
          id: id,
          tableName: 'masterrecord',
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

    transform(input) {
      return input.join(',');
    }

  }

  ViewDocumentComponent.ɵfac = function ViewDocumentComponent_Factory(t) {
    return new (t || ViewDocumentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_service_document_service__WEBPACK_IMPORTED_MODULE_1__.DocumentService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_service_homeservices_shippingbill_service__WEBPACK_IMPORTED_MODULE_4__.ShippingbillDataService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_16__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_Data_Servies_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_service_window_information_service__WEBPACK_IMPORTED_MODULE_5__.WindowInformationService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_service_user_service__WEBPACK_IMPORTED_MODULE_7__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_service_aprroval_pending_reject_transactions_service__WEBPACK_IMPORTED_MODULE_6__.AprrovalPendingRejectTransactionsService));
  };

  ViewDocumentComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: ViewDocumentComponent,
    selectors: [["app-view-document"]],
    viewQuery: function ViewDocumentComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c2, 7);
      }

      if (rf & 2) {
        let _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.epltable = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.inputRef = _t.first);
      }
    },
    decls: 13,
    vars: 5,
    consts: [[1, "content-wrap", "pb-2", "scroll-bar-main"], [1, "import_export_sec"], [1, "heading_common_tag"], ["id", "content", "role", "main", 1, "content", "table-padding"], ["class", "table_top", 4, "ngIf"], ["class", "filter_section_top", 4, "ngIf"], [1, "analytics"], ["epltable", ""], ["style", "width: 100%", "class", "analytics-side", 4, "ngIf"], ["class", "p-8 bc", 4, "ngIf"], ["content", ""], [1, "table_top"], [2, "width", "100%", "border-right", "0.5px solid rgba(0, 0, 0, 0.2)", "height", "100%", "padding-top", "2.3%"], [1, "bcw", 2, "font-size", "14px", "margin-left", "78px", "font-weight", "500"], [2, "width", "100%", "font-weight", "300"], [2, "font-weight", "400"], [2, "width", "100%", "padding-right", "5%"], ["style", "float: right; margin-right: 3%", 4, "ngFor", "ngForOf"], [2, "margin-right", "8%"], ["src", "../../../assets/cross.png", 2, "width", "20px", "height", "20px", "margin-left", "10px", "cursor", "pointer", 3, "click"], [2, "float", "right", "margin-right", "3%"], ["src", "./assets/images/cc1d1196dbafb374fe2d91e177dc16f8517532d6.png", "height", "30px", "width", "30px", 1, "image"], [1, "filter_section_top"], [1, "row"], [1, "col-md-4", "col-sm-4", "col-12"], [1, "col-md-8", "col-sm-8", "col-12"], [1, "filter_right_new", "padding_new_top"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "ex_icon"], [1, "filter_posit"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "fi_icon"], ["appFilterToggle", "", 1, "bg-white", "filter_main_sec", "mt-2", 2, "display", "none"], ["filter_Popup", ""], [1, "select_filter_options"], [1, "col-md-6", "col-12"], ["for", "exampleFormControlInput1", 1, "form-label"], ["aria-label", "Default select example", "name", "Buyer_Name", 1, "form-select", "form-control", 3, "ngModel", "ngModelChange", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["aria-label", "Default select example", "name", "Company_Name", 1, "form-select", "form-control", 3, "change"], ["aria-label", "Default select example", "name", "Origin", 1, "form-select", "form-control", 3, "change"], [4, "ngFor", "ngForOf"], ["aria-label", "Default select example", "name", "Destination", 1, "form-select", "form-control", 3, "change"], ["aria-label", "Default select example", "name", "Currency", 1, "form-select", "form-control", 3, "change"], ["aria-label", "Default select example", "name", "SB_DATE", 1, "form-select", "form-control", 3, "change"], [1, "footer_buttons"], ["type", "button", 1, "btn", "btn-light", 3, "click"], [1, "upload-button", "btn", "btn-success", 3, "click"], [1, "add_icon"], [3, "value"], [1, "analytics-side", 2, "width", "100%"], [1, "row", 2, "width", "100%"], ["class", "", "id", "container", 4, "ngIf"], ["id", "container", 1, ""], [1, "new_data_tableUI"], [1, "mat-elevation-z8"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Select page of periodic elements", 3, "pageSizeOptions"], [1, "middle_datatable"], [1, "widget-body", "p-0", "support", "table-wrapper", 2, "margin", "auto"], ["style", "width: 100%", "class", "table table-striped mb-0", 4, "ngIf"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""], [1, "table", "table-striped", "mb-0", 2, "width", "100%"], [2, "width", "100%", "height", "54px", "background", "white", "position", "sticky", "top", "0"], [1, "text-muted", "table-heading"], [1, "rect"], ["src", "./assets/Rectangle-13.png"], ["scope", "col"], [1, "pl-3"], [1, "text-dark"], ["class", "table-row", 3, "click", 4, "ngFor", "ngForOf"], [1, "table-row", 3, "click"], [1, "pl-4", "fw-normal"], [1, "sb-no"], ["src", "./assets/images/cc1d1196dbafb374fe2d91e177dc16f8517532d6.png", "height", "30px", "width", "30px", 1, "image", "image2"], [1, "text-muted", "table-heading", 2, "font-size", "14px", "color", "black !important", "font-weight", "300 !important", "padding", "5px", "border-bottom", "1px solid #f2f4f8"], ["class", "table-row", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "table-row", 3, "ngClass"], [4, "ngIf"], [3, "click", 4, "ngIf"], [1, "view_edit_button"], ["title", "View", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-eye"], ["title", "Save", "class", "savBtn bgnone", 3, "click", 4, "ngIf"], ["title", "Edit", "class", "savBtn bgnone", 3, "click", 4, "ngIf"], ["name", "sbdate", "type", "text", "placeholder", "Sb Date", 1, "tblInput", "form-control", 3, "ngModel", "ngModelChange"], [3, "click"], ["name", "sbno", "type", "text", "placeholder", "Sb No", 1, "tblInput", "form-control", 3, "ngModel", "ngModelChange"], ["name", "adCode", "type", "text", "placeholder", "adCode", 1, "tblInput", "form-control", 3, "ngModel", "ngModelChange"], ["name", "adBillNo", "type", "text", "placeholder", "ad Bill No", 1, "tblInput", "form-control", 3, "ngModel", "ngModelChange"], ["name", "buyerName", "type", "text", "placeholder", "Buyer Name", 1, "tblInput", "form-control", 3, "ngModel", "ngModelChange"], ["name", "consigneeName", "type", "text", "placeholder", "Consignee Name", 1, "tblInput", "form-control", 3, "ngModel", "ngModelChange"], ["name", "exporterLocationCode", "type", "text", "placeholder", "ORIGIN", 1, "tblInput", "form-control", 3, "ngModel", "ngModelChange"], ["name", "countryOfFinaldestination", "type", "text", "placeholder", "DESTINATION", 1, "tblInput", "form-control", 3, "ngModel", "ngModelChange"], ["name", "fobCurrency", "type", "text", "placeholder", "Fob Currency", 1, "tblInput", "form-control", 3, "ngModel", "ngModelChange"], ["name", "fobValue", "type", "text", "placeholder", "Fob Value", 1, "tblInput", "form-control", 3, "ngModel", "ngModelChange"], ["title", "Save", 1, "savBtn", "bgnone", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-floppy-o"], ["title", "Edit", 1, "savBtn", "bgnone", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-pencil-square-o"], ["title", "Delete", "href", "javascript:void(0)"], ["aria-hidden", "true", 1, "fa", "fa-trash-o"], [1, "p-8", "bc"], [1, "side_document_list"], ["id", "profile", "class", "profile_class", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "invoices_tab"], [1, "invoices_inner"], [1, "tabbed"], ["type", "radio", "id", "1", "name", "css-tabs", "checked", ""], ["type", "radio", "id", "2", "name", "css-tabs"], [1, "tabs"], [1, "tab"], ["for", "1"], ["for", "2"], [1, "tab-content", "form-wrapper"], [1, "inner_tab_content"], ["style", "\n                                        background-color: white;\n                                        width: 100%;\n                                        height: 100vh;\n                                        padding-right: 60px;\n                                        ", 4, "ngIf"], ["style", "width: 98%; background-color: 'white'", 4, "ngIf"], [1, "tab-content", "form-wrapper", 2, "height", "100vh", "padding-left", "20px", "padding-top", "4%", "background-color", "white", "width", "80%"], ["method", "POST", 1, "form"], ["id", "dropzone", 1, "dropzone", "dropzone-container"], [1, "form_inner"], ["type", "submit"], ["id", "profile", 1, "profile_class", 3, "ngClass", "click"], [1, "", 2, "display", "flex"], ["class", "", "style", "width: 100%; padding: 3%", 4, "ngIf"], [1, "", 2, "width", "100%", "padding", "3%"], [1, "fl", "fs16"], [1, "fr", "fs12", 2, "float", "right"], [1, "fs14"], [2, "background-color", "white", "width", "100%", "height", "100vh", "padding-right", "60px"], [1, "serial_detail"], [2, "width", "100%", "float", "right", "font-size", "14px", "margin-top", "18.77px", "color", "black"], [1, "invoice_head"], [2, "width", "100%"], [2, "width", "65%", "float", "left", "font-size", "20px", "font-weight", "500"], [2, "float", "right", "font-weight", "500", "font-size", "14px", "color", "black"], [1, "col-12", "mb-lg", "padding", 2, "width", "100%"], [1, "widget", "pb-0", "box-shadow", 2, "padding-left", "45px", "display", "grid", "grid-template-columns", "33% 33% 33%", "margin-top", "3%"], [2, "width", "85%", "margin-bottom", "24px", "border-radius", "8px", "box-shadow", "4px 4px 8px 4px #eeeefa", "border-left", "3px solid #e7845f"], [2, "height", "100px", "padding-top", "5%", "padding-bottom", "17px", "padding-left", "3%"], [2, "color", "#72768a !important", "font-size", "102%"], [2, "margin-left", "5%", "color", "#000000", "font-size", "102%"], [2, "width", "85%", "margin-bottom", "24px", "border-radius", "8px", "box-shadow", "4px 4px 8px 4px #eeeefa", "border-left", "3px solid #5fe6e7"], [2, "height", "100px", "padding-top", "14px", "padding-bottom", "17px", "padding-left", "3%"], [2, "height", "600px", "width", "400px", "margin-left", "19px", 3, "src"], [2, "width", "98%", "background-color", "white"], [2, "width", "100%", "margin-top", "10px"], [2, "width", "35%", "float", "right", "font-size", "14px"], [2, "width", "65%", "float", "left", "font-size", "16px", "margin-top", "20px", "padding-left", "25px"], [1, "widget", "pb-0", "box-shadow"], [1, "form-wrapper1"], [1, "full-input", "border1"], ["for", "dischargePort"], ["type", "text", "name", "dischargePort", 1, "smalll-input", 3, "ngModel", "ngModelChange"], [1, "full-input", "border2"], ["for", "iecCode"], ["type", "text", "name", "iecCode", 1, "smalll-input", 3, "ngModel", "ngModelChange"], [1, "full-input", "border3"], ["for", "iecName"], ["type", "text", "name", "iecName", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "adCode"], ["type", "text", "name", "adCode", 1, "smalll-input", 3, "ngModel", "ngModelChange"], [1, "sh1"], ["for", "invoiceNumber"], ["type", "text", "name", "invoiceNumber", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "invoiceAmount"], ["type", "text", "name", "invoiceAmount", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "currency"], ["type", "text", "name", "currency", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "settledAmount"], ["type", "text", "name", "settledAmount", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "status"], ["type", "text", "name", "status", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "freightAmount"], ["type", "text", "name", "freightAmount", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "freightCurrency"], ["type", "text", "name", "freightCurrency", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "insuranceAmount"], ["type", "text", "name", "insuranceAmount", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "insuranceCurrency"], ["type", "text", "name", "insuranceCurrency", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "discountAmount"], ["type", "text", "name", "discountAmount", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "discountCurrency"], ["type", "text", "name", "discountCurrency", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "miscellaneousAmount"], ["type", "text", "name", "miscellaneousAmount", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "miscellaneousCurrency"], ["type", "text", "name", "miscellaneousCurrency", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "commissionAmount"], ["type", "text", "name", "commissionAmount", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "commissionCurrency"], ["type", "text", "name", "commissionCurrency", 1, "smalll-input", 3, "ngModel", "ngModelChange"], [1, "form-wrapper1", 2, "width", "100%"], ["for", "portCode"], ["type", "text", "name", "portCode", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "ieccode"], ["type", "text", "name", "ieccode", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "leodate"], ["type", "text", "name", "leodate", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "processingStaus"], ["type", "text", "name", "processingStaus", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "fobCurrency"], ["type", "text", "name", "fobCurrency", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "fobValue"], ["type", "text", "name", "fobValue", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "realizedFobValue"], ["type", "text", "name", "realizedFobValue", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "equivalentFobValue"], ["type", "text", "name", "equivalentFobValue", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "realizedFreightValue"], ["type", "text", "name", "realizedFreightValue", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "insuranceValue"], ["type", "text", "name", "insuranceValue", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "realizedInsuranceValue"], ["type", "text", "name", "realizedInsuranceValue", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "bankingCharges"], ["type", "text", "name", "bankingCharges", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "expectedPaymentlastdate"], ["type", "text", "name", "expectedPaymentlastdate", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "AddedDate"], ["type", "text", "name", "AddedDate", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "modifiedDate"], ["type", "text", "name", "modifiedDate", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["id", "customers", 2, "margin-bottom", "5px"], [2, "text-align", "left !important"], [2, "height", "600px", "width", "600px", "margin-top", "6px", "margin-left", "19px", 3, "src"], [1, "modal-body"], [1, "row", "no-gutter"], [1, "col-md-7", 2, "margin", "10px"], [1, "login", "d-flex", "py-5", 2, "padding", "0px !important"], [1, "container", "popup"], [1, "col-lg-10", "col-xl-7", "mrg"], [1, "display-6"], ["width", "315%", "height", "500px", 3, "src"], ["type", "submit", 1, "submitBTN", 2, "margin-left", "250px", 3, "click"]],
    template: function ViewDocumentComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "main", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, ViewDocumentComponent_div_5_Template, 12, 6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, ViewDocumentComponent_div_6_Template, 65, 7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, ViewDocumentComponent_div_9_Template, 3, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, ViewDocumentComponent_div_10_Template, 32, 10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, ViewDocumentComponent_ng_template_11_Template, 12, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx.doc, " Documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.showInvoice);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.showInvoice);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.showInvoice);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.showInvoice);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm, _custom_Filter_filter_toggle_directive__WEBPACK_IMPORTED_MODULE_9__.FilterToggleDirective, _angular_common__WEBPACK_IMPORTED_MODULE_18__.SlicePipe],
    styles: ["*[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.heading[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 20px;\n  font-weight: 700;\n  margin-left: 23px;\n  color: #323e4a;\n}\n\n.table-heading[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 500;\n  color: #747474;\n}\n\n.box-shadow[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n\n.table-padding[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fff;\n  border-radius: 10px;\n  margin: 0;\n  box-shadow: 0 2px 10px rgba(58, 53, 65, 0.1019607843);\n}\n\nbutton[_ngcontent-%COMP%] {\n  outline: none;\n}\n\nselect[_ngcontent-%COMP%] {\n  text-decoration: none;\n  border: none;\n  background: none;\n  color: #49a2d7;\n}\n\nselect[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.rect[_ngcontent-%COMP%] {\n  text-align: right;\n  min-width: 80px !important;\n}\n\n.sb-no[_ngcontent-%COMP%] {\n  color: #49a2d7;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  vertical-align: middle !important;\n}\n\n.image[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  margin-top: 12fvpx;\n}\n\n.image2[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  margin-left: -13px;\n}\n\n.fl[_ngcontent-%COMP%] {\n  float: \"left\";\n}\n\n.fr[_ngcontent-%COMP%] {\n  float: \"right\";\n}\n\nspan.fs20[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\nspan.fs16[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\np.fs14[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.fs12[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.p-4[_ngcontent-%COMP%] {\n  padding: 4px;\n}\n\n.p-8[_ngcontent-%COMP%] {\n  z-index: 5000;\n  transform: scale(1, 1);\n  display: grid;\n  grid-template-columns: 29% 70%;\n}\n\n.p-20[_ngcontent-%COMP%] {\n  padding: 20px !important;\n}\n\n.p-12[_ngcontent-%COMP%] {\n  padding: 12px !important;\n}\n\n.p-16[_ngcontent-%COMP%] {\n  padding: 16px !important;\n}\n\n.pr-4[_ngcontent-%COMP%] {\n  padding-right: 4px;\n}\n\n.pr-8[_ngcontent-%COMP%] {\n  padding-right: 8px !important;\n}\n\n.pr-16[_ngcontent-%COMP%] {\n  padding-right: 16px;\n}\n\n.pt-30[_ngcontent-%COMP%] {\n  padding-top: 30px !important;\n}\n\n.pt-28[_ngcontent-%COMP%] {\n  padding-top: 28px !important;\n}\n\n.pt-25[_ngcontent-%COMP%] {\n  padding-top: 25px !important;\n}\n\n.pt-24[_ngcontent-%COMP%] {\n  padding-top: 24px !important;\n}\n\n.pt-22[_ngcontent-%COMP%] {\n  padding-top: 22px !important;\n}\n\n.pt-20[_ngcontent-%COMP%] {\n  padding-top: 20px !important;\n}\n\n.pt-19[_ngcontent-%COMP%] {\n  padding-top: 19px !important;\n}\n\n.pt-16[_ngcontent-%COMP%] {\n  padding-top: 16px !important;\n}\n\n.pt-14[_ngcontent-%COMP%] {\n  padding-top: 14px !important;\n}\n\n.pt-10[_ngcontent-%COMP%] {\n  padding-top: 10px !important;\n}\n\n.pt-8[_ngcontent-%COMP%] {\n  padding-top: 8px !important;\n}\n\n.pt-4[_ngcontent-%COMP%] {\n  padding-top: 4px;\n}\n\n.pt-2[_ngcontent-%COMP%] {\n  padding-top: 2px;\n}\n\n.pt-0[_ngcontent-%COMP%] {\n  padding-top: 0px !important;\n}\n\n.pb-28[_ngcontent-%COMP%] {\n  padding-bottom: 28px !important;\n}\n\n.pb-16[_ngcontent-%COMP%] {\n  padding-bottom: 16px !important;\n}\n\n.pv-4[_ngcontent-%COMP%] {\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n\n.pv-8[_ngcontent-%COMP%] {\n  padding-top: 8px !important;\n  padding-bottom: 8px !important;\n}\n\n.pv-10[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.pv-20[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.pv-14[_ngcontent-%COMP%] {\n  padding-top: 14px !important;\n  padding-bottom: 14px !important;\n}\n\n.pv-16[_ngcontent-%COMP%] {\n  padding-top: 16px !important;\n  padding-bottom: 16px !important;\n}\n\n.ph-5[_ngcontent-%COMP%] {\n  padding-right: 5px !important;\n  padding-left: 5px !important;\n}\n\n.ph-16[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n.ph-8[_ngcontent-%COMP%] {\n  padding-left: 8px !important;\n  padding-right: 8px !important;\n}\n\n.ph-10[_ngcontent-%COMP%] {\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n}\n\n.ph-4[_ngcontent-%COMP%] {\n  padding-left: 4px;\n  padding-right: 4px;\n}\n\n.ph-32[_ngcontent-%COMP%] {\n  padding-left: 32px;\n  padding-right: 32px;\n}\n\n.ph-38[_ngcontent-%COMP%] {\n  padding-left: 38px;\n  padding-right: 38px;\n}\n\n.ph-44[_ngcontent-%COMP%] {\n  padding-left: 44px;\n  padding-right: 44px;\n}\n\n.bb[_ngcontent-%COMP%] {\n  border-bottom: 0.1px solid #d3d3d3;\n  border-right: 0.1px solid #d3d3d3;\n}\n\n.bc[_ngcontent-%COMP%] {\n  background-color: #f8fafd;\n}\n\n.bcw[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #323e4a !important;\n}\n\n\n\n\n\n.m-4[_ngcontent-%COMP%] {\n  margin: 4px !important;\n}\n\n.m-8[_ngcontent-%COMP%] {\n  margin: 8px !important;\n}\n\n.m-16[_ngcontent-%COMP%] {\n  margin: 16px !important;\n}\n\n.mr-20[_ngcontent-%COMP%] {\n  margin-right: 20px !important;\n}\n\n.mr-8[_ngcontent-%COMP%] {\n  margin-right: 8px !important;\n}\n\n.ml-20[_ngcontent-%COMP%] {\n  margin-left: 20px !important;\n}\n\n.ml-24[_ngcontent-%COMP%] {\n  margin-left: 24px !important;\n}\n\n.mt-4[_ngcontent-%COMP%] {\n  margin-top: 4px !important;\n}\n\n.mt-8[_ngcontent-%COMP%] {\n  margin-top: 8px !important;\n}\n\n.mt-16[_ngcontent-%COMP%] {\n  margin-top: 16px !important;\n}\n\n.mt-24[_ngcontent-%COMP%] {\n  margin-top: 24px !important;\n}\n\n.mt-38[_ngcontent-%COMP%] {\n  margin-top: 38px !important;\n}\n\n.mh-8[_ngcontent-%COMP%] {\n  margin-left: 8px !important;\n  margin-right: 8px !important;\n}\n\n.mh-16[_ngcontent-%COMP%] {\n  margin-left: 16px !important;\n  margin-right: 16px !important;\n}\n\n.mv-4[_ngcontent-%COMP%] {\n  margin-top: 4px !important;\n  margin-bottom: 4px !important;\n}\n\n.mv-16[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  margin-bottom: 16px;\n}\n\n.mv-24[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  margin-bottom: 24px;\n}\n\n.mh--16[_ngcontent-%COMP%] {\n  margin-left: -16px !important;\n  margin-right: -16px !important;\n}\n\n.mh-8[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n.w100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.w70[_ngcontent-%COMP%] {\n  width: 70%;\n}\n\n.w50[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.w30[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.pc1[_ngcontent-%COMP%] {\n  width: 44.5%;\n  height: 35px;\n  float: right;\n  border-left: 1px solid rgb(104, 103, 103);\n}\n\n.tabbed[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  \n  background-color: #f8fafd;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding-right: 28px;\n  padding-left: 32px;\n}\n\n.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  \n  display: none;\n}\n\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  list-style: none;\n  background-color: white;\n  height: 100%;\n  padding: 1% 0;\n  padding-left: 30px;\n  margin-left: -30px;\n  width: 113%;\n}\n\n.tabs[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.tab[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 10px;\n  padding-right: 12px;\n  color: #606670;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-right: 10px;\n  border-right: 1px solid black;\n}\n\n.tab[_ngcontent-%COMP%]:hover   label[_ngcontent-%COMP%] {\n  border-top-color: #333;\n  color: #333;\n}\n\n.tab-content[_ngcontent-%COMP%] {\n  display: none;\n  color: #777;\n  background: #f8fafd;\n  margin: 10px !important;\n}\n\n\n\n.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(1):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(1)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(2):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(2)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(3):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(3)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(4):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(4)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(5):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(5)   label[_ngcontent-%COMP%] {\n  color: #49a2d7;\n  margin-right: 10px;\n}\n\n.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(1):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(1), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(2):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(2), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(3):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(3), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(4):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(4) {\n  display: block;\n}\n\n.hhu[_ngcontent-%COMP%]:active, .hhu[_ngcontent-%COMP%]:focus {\n  border: 2px solid red;\n}\n\n.form[_ngcontent-%COMP%] {\n  margin-left: 38px !important;\n  margin-right: 5%;\n  top: 50%;\n  left: 50%;\n  height: 316px;\n  background-color: white;\n  border: 1px dashed rgba(0, 0, 0, 0.4);\n}\n\n.form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif !important;\n  text-align: center;\n  line-height: 30px;\n  color: #303030;\n}\n\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-family: \"EuropaNuova-Regular\", sans-serif !important;\n  position: absolute;\n  margin: 0;\n  width: 89%;\n  height: 313px;\n  padding: 0;\n  outline: none;\n  cursor: pointer;\n  opacity: 0;\n}\n\n.form[_ngcontent-%COMP%]   .form_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  margin-left: 36.5%;\n  height: 42px;\n  cursor: pointer;\n  width: 160px;\n  background-color: #49a2d7;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #149174;\n  color: #0c5645;\n}\n\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  border: 0;\n}\n\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.xbutton[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #49a2d7;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.ybutton[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #0c354d;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.zbutton[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #947551;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.border1[_ngcontent-%COMP%] {\n  border-left: 3px solid #174d72;\n}\n\n.border2[_ngcontent-%COMP%] {\n  border-left: 3px solid #5fe6e7;\n}\n\n.border3[_ngcontent-%COMP%] {\n  border-left: 3px solid #e7845f;\n}\n\n.form-wrapper1[_ngcontent-%COMP%] {\n  flex-direction: column;\n  width: 100%;\n}\n\n.form-wrapper1[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 5.5%;\n}\n\n.form-wrapper1.td[_ngcontent-%COMP%] {\n  width: 100%;\n  width: 7%;\n}\n\n.full-input[_ngcontent-%COMP%] {\n  margin-left: 18px;\n  margin-bottom: 10px;\n  display: inline-block;\n  padding: 3px;\n  height: 74px;\n  width: 177px;\n  background-color: white;\n  border-radius: 5px;\n  box-shadow: 4px 4px 8px 4px #eeeefa;\n}\n\n.smalll-input[_ngcontent-%COMP%] {\n  width: 160px !important;\n  outline: none;\n  border: none;\n  display: block;\n  border-radius: 4px;\n  border: 1px solid #d5dbe8;\n  height: 35px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  padding: 5px 0px 5px 5px;\n  margin-bottom: 0px !important;\n  font-size: 12px;\n  font-weight: 500;\n  color: #72768a;\n}\n\n.sh1[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  margin-top: 15px;\n  font-size: 16px;\n  color: #606670;\n}\n\n.ss[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n\n#customers[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100% !important;\n  margin-left: 19px !important;\n  border-right: 1px solid #ddd;\n  border-left: 1px solid #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  height: 52px !important;\n  text-align: left;\n  font-weight: 300;\n  background-color: #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 52px !important;\n}\n\n.tab1[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  \n  display: inline-block;\n  height: 17px;\n  width: 17px;\n  color: #49a2d7;\n  margin-bottom: 10px;\n}\n\n.tab1[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + input[_ngcontent-%COMP%] {\n  background-color: #bfb;\n  border-color: #4c4;\n}\n\n.label1[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 10px;\n  padding-right: 12px;\n  color: #606670;\n  font-size: 12px;\n  letter-spacing: 1px;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-left: 30px;\n}\n\n.tab1[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.at[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding-right: 20px;\n  padding-left: 10px;\n}\n\n.ctb[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin-left: 210px;\n  background-color: #49a2d7;\n  padding: 12px 30px 11px 30px;\n  color: white;\n  border-radius: 4px;\n  cursor: pointer;\n  font-weight: 500;\n}\n\n.radio1[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  \n  display: inline-block;\n  height: 17px;\n  width: 17px;\n  color: #49a2d7;\n  margin-bottom: 10px;\n  border: 2px solid #49a2d7;\n}\n\n.radio1[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + input[_ngcontent-%COMP%] {\n  background-color: #bfb;\n  border-color: #4c4;\n}\n\n.label1[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 10px;\n  padding-right: 12px;\n  color: #606670;\n  font-size: 12px;\n  letter-spacing: 1px;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-left: 30px;\n}\n\n.radio1[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.stp1[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 500;\n  margin-bottom: 10px;\n  color: black;\n}\n\n.stp2[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin-bottom: 10px;\n  color: black;\n}\n\n.stp3[_ngcontent-%COMP%] {\n  color: #4a4a4a;\n  font-size: 14px;\n}\n\n.of1[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  font: 16px/26px Georgia, Garamond, Serif;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.side_document_list[_ngcontent-%COMP%] {\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 170vh;\n  border-right: 0.3px solid rgba(0, 0, 0, 0.2);\n}\n\n.profile_class[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  border-bottom: 0.3px solid rgba(0, 0, 0, 0.2);\n  padding: 3% 6%;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.activeBtn[_ngcontent-%COMP%] {\n  background-color: #f8fafd;\n  border-left: 8px solid rgb(61, 116, 197);\n}\n\n.table_top[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 29.55% 33% 30% 6%;\n  border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);\n  align-items: center;\n}\n\n.invoices_tab[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  height: 100vh;\n  background-color: #f8fafd;\n}\n\n.invoices_inner[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #f8fafd;\n}\n\n.inner_tab_content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  background-color: white;\n}\n\n.invoice_head[_ngcontent-%COMP%] {\n  width: 95%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 5%;\n}\n\n.serial_detail[_ngcontent-%COMP%] {\n  width: 93%;\n  margin-top: 10px;\n  display: flex;\n  justify-content: right;\n  text-align: right;\n  font-weight: 500;\n}\n\n.transaction_tab[_ngcontent-%COMP%] {\n  width: 770px;\n  height: 1387px;\n}\n\n.form_inner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  justify-content: center;\n}\n\n.opt[_ngcontent-%COMP%] {\n  background-color: #49a2d7;\n  padding: 0 3%;\n  height: 42px;\n  box-shadow: 4px 0px 7px #109cf1;\n  border: none;\n  color: white;\n}\n\n#container[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n.savBtn[_ngcontent-%COMP%] {\n  background-color: #49A2D7;\n  color: white;\n  border: 1px solid rgba(0, 0, 0, 0.4);\n  font-size: 14px;\n  cursor: pointer;\n  border-radius: 2px;\n}\n\n.content-wrap[_ngcontent-%COMP%] {\n  z-index: 0;\n  height: 100vh;\n  position: absolute;\n  left: 260px;\n  margin: auto;\n  width: 78vw;\n}\n\n#container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  min-height: 100%;\n}\n\ntable[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.analytics[_ngcontent-%COMP%]   .support[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.header-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid black;\n  width: 99%;\n}\n\n.analytics[_ngcontent-%COMP%]   .analytics-side[_ngcontent-%COMP%] {\n  padding-left: 0px !important;\n}\n\n.middle_datatable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 3px 10px;\n  font-weight: 600;\n  font-family: Poppins, sans-serif;\n  color: #0a3049;\n}\n\n.middle_datatable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #0a3049;\n}\n\n.middle_datatable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 13px !important;\n  padding: 3px 10px;\n  color: #777;\n  font-family: Poppins, sans-serif;\n  font-weight: 500;\n}\n\n.heading_common_tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  font-size: 18px;\n  font-weight: 600;\n  color: #333;\n  padding: 13px 0 12px 0;\n}\n\n.top_exl_ddivs[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 15px 0;\n}\n\n.content[_ngcontent-%COMP%] {\n  min-height: inherit !important;\n}\n\n.view_edit_button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #777;\n  padding: 0 4px;\n  font-size: 15px;\n  display: inline-block;\n}\n\n.view_edit_button[_ngcontent-%COMP%]   .savBtn[_ngcontent-%COMP%]   .fa.fa-floppy-o[_ngcontent-%COMP%]:before {\n  color: green;\n  font-size: 16px;\n}\n\n.none[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctZG9jdW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtBQUNKOztBQUtBO0VBQ0ksa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFGSjs7QUFTQTtFQUNJLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBTko7O0FBVUE7RUFDSSwyQkFBQTtBQVBKOztBQVVBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EscURBQUE7QUFQSjs7QUFzQkE7RUFDSSxhQUFBO0FBbkJKOztBQThCQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQTNCSjs7QUE4QkE7RUFDSSxhQUFBO0FBM0JKOztBQThCQTtFQUNJLGlCQUFBO0VBQ0EsMEJBQUE7QUEzQko7O0FBOEJBO0VBQ0ksY0FBQTtBQTNCSjs7QUE4QkE7O0VBRUksaUNBQUE7QUEzQko7O0FBOEJBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBM0JKOztBQThCQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUEzQko7O0FBOEJBO0VBQ0ksYUFBQTtBQTNCSjs7QUE4QkE7RUFDSSxjQUFBO0FBM0JKOztBQThCQTtFQUNJLGVBQUE7QUEzQko7O0FBOEJBO0VBQ0ksZUFBQTtBQTNCSjs7QUE4QkE7RUFDSSxlQUFBO0FBM0JKOztBQThCQTtFQUNJLGVBQUE7QUEzQko7O0FBOEJBO0VBQ0ksWUFBQTtBQTNCSjs7QUE4QkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUEzQko7O0FBOEJBO0VBQ0ksd0JBQUE7QUEzQko7O0FBOEJBO0VBQ0ksd0JBQUE7QUEzQko7O0FBOEJBO0VBQ0ksd0JBQUE7QUEzQko7O0FBOEJBO0VBQ0ksa0JBQUE7QUEzQko7O0FBOEJBO0VBQ0ksNkJBQUE7QUEzQko7O0FBOEJBO0VBQ0ksbUJBQUE7QUEzQko7O0FBOEJBO0VBQ0ksNEJBQUE7QUEzQko7O0FBOEJBO0VBQ0ksNEJBQUE7QUEzQko7O0FBOEJBO0VBQ0ksNEJBQUE7QUEzQko7O0FBOEJBO0VBQ0ksNEJBQUE7QUEzQko7O0FBOEJBO0VBQ0ksNEJBQUE7QUEzQko7O0FBOEJBO0VBQ0ksNEJBQUE7QUEzQko7O0FBOEJBO0VBQ0ksNEJBQUE7QUEzQko7O0FBOEJBO0VBQ0ksNEJBQUE7QUEzQko7O0FBOEJBO0VBQ0ksNEJBQUE7QUEzQko7O0FBOEJBO0VBQ0ksNEJBQUE7QUEzQko7O0FBOEJBO0VBQ0ksMkJBQUE7QUEzQko7O0FBOEJBO0VBQ0ksZ0JBQUE7QUEzQko7O0FBOEJBO0VBQ0ksZ0JBQUE7QUEzQko7O0FBOEJBO0VBQ0ksMkJBQUE7QUEzQko7O0FBOEJBO0VBQ0ksK0JBQUE7QUEzQko7O0FBOEJBO0VBQ0ksK0JBQUE7QUEzQko7O0FBOEJBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQTNCSjs7QUE4QkE7RUFDSSwyQkFBQTtFQUNBLDhCQUFBO0FBM0JKOztBQThCQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7QUEzQko7O0FBOEJBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtBQTNCSjs7QUE4QkE7RUFDSSw0QkFBQTtFQUNBLCtCQUFBO0FBM0JKOztBQThCQTtFQUNJLDRCQUFBO0VBQ0EsK0JBQUE7QUEzQko7O0FBOEJBO0VBQ0ksNkJBQUE7RUFDQSw0QkFBQTtBQTNCSjs7QUE4QkE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FBM0JKOztBQThCQTtFQUNJLDRCQUFBO0VBQ0EsNkJBQUE7QUEzQko7O0FBOEJBO0VBQ0ksNkJBQUE7RUFDQSw4QkFBQTtBQTNCSjs7QUE4QkE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBM0JKOztBQThCQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUEzQko7O0FBOEJBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQTNCSjs7QUE4QkE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FBM0JKOztBQThCQTtFQUNJLGtDQUFBO0VBQ0EsaUNBQUE7QUEzQko7O0FBOEJBO0VBQ0kseUJBQUE7QUEzQko7O0FBOEJBO0VBQ0ksdUJBQUE7RUFDQSx5QkFBQTtBQTNCSjs7QUErQkEsNkNBQUE7O0FBR0EsNkNBQUE7O0FBRUE7RUFDSSxzQkFBQTtBQS9CSjs7QUFrQ0E7RUFDSSxzQkFBQTtBQS9CSjs7QUFrQ0E7RUFDSSx1QkFBQTtBQS9CSjs7QUFrQ0E7RUFDSSw2QkFBQTtBQS9CSjs7QUFrQ0E7RUFDSSw0QkFBQTtBQS9CSjs7QUFrQ0E7RUFDSSw0QkFBQTtBQS9CSjs7QUFrQ0E7RUFDSSw0QkFBQTtBQS9CSjs7QUFrQ0E7RUFDSSwwQkFBQTtBQS9CSjs7QUFrQ0E7RUFDSSwwQkFBQTtBQS9CSjs7QUFrQ0E7RUFDSSwyQkFBQTtBQS9CSjs7QUFrQ0E7RUFDSSwyQkFBQTtBQS9CSjs7QUFrQ0E7RUFDSSwyQkFBQTtBQS9CSjs7QUFrQ0E7RUFDSSwyQkFBQTtFQUNBLDRCQUFBO0FBL0JKOztBQWtDQTtFQUNJLDRCQUFBO0VBQ0EsNkJBQUE7QUEvQko7O0FBa0NBO0VBQ0ksMEJBQUE7RUFDQSw2QkFBQTtBQS9CSjs7QUFrQ0E7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBL0JKOztBQWtDQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUEvQko7O0FBa0NBO0VBQ0ksNkJBQUE7RUFDQSw4QkFBQTtBQS9CSjs7QUFrQ0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FBL0JKOztBQWtDQTtFQUNJLFdBQUE7QUEvQko7O0FBa0NBO0VBQ0ksVUFBQTtBQS9CSjs7QUFrQ0E7RUFDSSxVQUFBO0FBL0JKOztBQWtDQTtFQUNJLFVBQUE7QUEvQko7O0FBa0NBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUNBQUE7QUEvQko7O0FBa0NBO0VBQ0ksa0JBQUE7RUFDQSw2Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBL0JKOztBQWtDQTtFQUNJLHNCQUFBO0VBQ0EsYUFBQTtBQS9CSjs7QUFrQ0E7RUFDSSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUVBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQWhDSjs7QUFtQ0E7RUFDSSxlQUFBO0FBaENKOztBQW1DQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FBaENKOztBQW1DQTtFQUNJLHNCQUFBO0VBQ0EsV0FBQTtBQWhDSjs7QUFtQ0E7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBR0EsdUJBQUE7QUFsQ0o7O0FBc0NBLDZJQUFBOztBQUVBOzs7OztFQUtJLGNBQUE7RUFDQSxrQkFBQTtBQXBDSjs7QUF1Q0E7Ozs7RUFJSSxjQUFBO0FBcENKOztBQXVDQTs7RUFFSSxxQkFBQTtBQXBDSjs7QUF1Q0E7RUFDSSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQ0FBQTtBQXBDSjs7QUF1Q0E7RUFDSSw2Q0FBQTtFQUlBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBdkNKOztBQTBDQTtFQUNJLHlEQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBdkNKOztBQTBDQTtFQUVJLDZDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtBQXhDSjs7QUEyQ0E7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUF4Q0o7O0FBMkNBO0VBQ0ksU0FBQTtBQXhDSjs7QUEyQ0E7OztFQUdJLGFBQUE7QUF4Q0o7O0FBMkNBO0VBQ0ksbUJBQUE7RUFDQSw2Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtBQXhDSjs7QUEyQ0E7RUFDSSxtQkFBQTtFQUNBLDZDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0FBeENKOztBQTJDQTtFQUNJLG1CQUFBO0VBQ0EsNkNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7QUF4Q0o7O0FBMkNBO0VBQ0ksOEJBQUE7QUF4Q0o7O0FBMkNBO0VBQ0ksOEJBQUE7QUF4Q0o7O0FBMkNBO0VBQ0ksOEJBQUE7QUF4Q0o7O0FBMkNBO0VBRUksc0JBQUE7RUFDQSxXQUFBO0FBekNKOztBQTRDQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FBekNKOztBQTRDQTtFQUNJLFdBQUE7RUFDQSxTQUFBO0FBekNKOztBQTRDQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtBQXpDSjs7QUE0Q0E7RUFDSSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBekNKOztBQTRDQTtFQUNJLGNBQUE7RUFDQSx3QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQXpDSjs7QUE0Q0E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUF6Q0o7O0FBNENBO0VBQ0ksdUJBQUE7QUF6Q0o7O0FBNENBO0VBQ0kseUNBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FBekNKOztBQTRDQTs7RUFFSSw2QkFBQTtBQXpDSjs7QUE0Q0E7RUFDSSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQXpDSjs7QUE0Q0E7RUFDSSx1QkFBQTtBQXpDSjs7QUE0Q0E7RUFDSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUF6Q0o7O0FBNENBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtBQXpDSjs7QUE0Q0E7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUF6Q0o7O0FBNENBO0VBQ0ksZ0JBQUE7QUF6Q0o7O0FBNENBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUF6Q0o7O0FBNENBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQXpDSjs7QUE0Q0E7RUFDSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQXpDSjs7QUE0Q0E7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0FBekNKOztBQTRDQTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQXpDSjs7QUE0Q0E7RUFDSSxnQkFBQTtBQXpDSjs7QUE0Q0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUF6Q0o7O0FBNENBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQXpDSjs7QUE0Q0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQXpDSjs7QUE0Q0E7RUFDSSxzQkFBQTtFQUNBLHdDQUFBO0VBQ0EsY0FBQTtBQXpDSjs7QUE0Q0E7RUFDSSxlQUFBO0FBekNKOztBQTZDQTtFQUNJLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsNENBQUE7QUExQ0o7O0FBOENBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSw2Q0FBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUEzQ0o7O0FBa0RBO0VBQ0kseUJBQUE7RUFDQSx3Q0FBQTtBQS9DSjs7QUFrREE7RUFDSSxhQUFBO0VBQ0Esd0NBQUE7RUFDQSw2Q0FBQTtFQUNBLG1CQUFBO0FBL0NKOztBQWtEQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBL0NKOztBQWtEQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtBQS9DSjs7QUFrREE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7QUEvQ0o7O0FBa0RBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUEvQ0o7O0FBa0RBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQS9DSjs7QUFrREE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQS9DSjs7QUFrREE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUEvQ0o7O0FBa0RBO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUEvQ0o7O0FBa0RBO0VBQ0ksY0FBQTtBQS9DSjs7QUFrREE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUEvQ0o7O0FBa0RBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQS9DSjs7QUFrREE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBL0NKOztBQWtEQTtFQUNJLGdCQUFBO0FBL0NKOztBQWtEQTtFQUNJLGdCQUFBO0FBL0NKOztBQWtEQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7QUEvQ0o7O0FBa0RBO0VBQ0ksNEJBQUE7QUEvQ0o7O0FBa0RBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGNBQUE7QUEvQ0o7O0FBa0RBO0VBQ0ksY0FBQTtBQS9DSjs7QUFrREE7RUFDSSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QUEvQ0o7O0FBa0RBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBL0NKOztBQWtEQTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtBQS9DSjs7QUFrREE7RUFDSSw4QkFBQTtBQS9DSjs7QUFrREE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQS9DSjs7QUFrREE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQS9DSjs7QUFrREE7RUFDRSxvQkFBQTtFQUNBLFlBQUE7QUEvQ0YiLCJmaWxlIjoidmlldy1kb2N1bWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4vLyAudGFibGUgdGhlYWQgdGh7XHJcbi8vICAgICBib3JkZXI6IG5vbmU7XHJcbi8vIH1cclxuLmhlYWRpbmcge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyM3B4O1xyXG4gICAgY29sb3I6ICMzMjNlNGE7XHJcbn1cclxuXHJcbi8vIC5kcm9wZG93biB7XHJcbi8vICAgICBmb250LXNpemU6IDE0cHg7XHJcbi8vICAgICBmb250LXdlaWdodDogMTAwO1xyXG4vLyB9XHJcbi50YWJsZS1oZWFkaW5nIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzc0NzQ3NDtcclxuICAgIC8vb3BhY2l0eTogNTAlO1xyXG59XHJcblxyXG4uYm94LXNoYWRvdyB7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50YWJsZS1wYWRkaW5nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4ICMzYTM1NDExYTtcclxufVxyXG5cclxuLy8gLnVwbG9hZC1idXR0b24ge1xyXG4vLyAgICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbi8vICAgICBmb250LWZhbWlseTogUG9wcGlucywgc2Fucy1zZXJpZjtcclxuLy8gICAgIHBhZGRpbmc6IDVweCA4cHg7XHJcbi8vICAgICBmb250LXNpemU6IDE0cHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDlBMkQ3O1xyXG4vLyAgICAgYm9yZGVyOiBub25lO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuLy8gICAgIG1hcmdpbi1yaWdodDogMDtcclxuLy8gfVxyXG5idXR0b24ge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLy8gLnRhYmxlLXJvdyB7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbi8vICAgICBjb2xvcjogIzcwNzY4MztcclxuLy8gfVxyXG4vLyAudGFibGUtcm93OmhvdmVyIHtcclxuLy8gICAgIGJhY2tncm91bmQ6ICNmNmY5ZmYgIWltcG9ydGFudDtcclxuLy8gICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzQ5YTJkNztcclxuLy8gfVxyXG5zZWxlY3Qge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGNvbG9yOiAjNDlhMmQ3O1xyXG59XHJcblxyXG5zZWxlY3Q6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLnJlY3Qge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBtaW4td2lkdGg6IDgwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNiLW5vIHtcclxuICAgIGNvbG9yOiAjNDlhMmQ3O1xyXG59XHJcblxyXG50aCxcclxudGQge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW1hZ2Uge1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMmZ2cHg7XHJcbn1cclxuXHJcbi5pbWFnZTIge1xyXG4gICAgbWFyZ2luLXRvcDogMjJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTNweDtcclxufVxyXG5cclxuLmZsIHtcclxuICAgIGZsb2F0OiBcImxlZnRcIjtcclxufVxyXG5cclxuLmZyIHtcclxuICAgIGZsb2F0OiBcInJpZ2h0XCI7XHJcbn1cclxuXHJcbnNwYW4uZnMyMCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbnNwYW4uZnMxNiB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbnAuZnMxNCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5mczEyIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLnAtNCB7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbn1cclxuXHJcbi5wLTgge1xyXG4gICAgei1pbmRleDogNTAwMDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyOSUgNzAlO1xyXG59XHJcblxyXG4ucC0yMCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wLTEyIHtcclxuICAgIHBhZGRpbmc6IDEycHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnAtMTYge1xyXG4gICAgcGFkZGluZzogMTZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHItNCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbn1cclxuXHJcbi5wci04IHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDhweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHItMTYge1xyXG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcclxufVxyXG5cclxuLnB0LTMwIHtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wdC0yOCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjhweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHQtMjUge1xyXG4gICAgcGFkZGluZy10b3A6IDI1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnB0LTI0IHtcclxuICAgIHBhZGRpbmctdG9wOiAyNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wdC0yMiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHQtMjAge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnB0LTE5IHtcclxuICAgIHBhZGRpbmctdG9wOiAxOXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wdC0xNiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHQtMTQge1xyXG4gICAgcGFkZGluZy10b3A6IDE0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnB0LTEwIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wdC04IHtcclxuICAgIHBhZGRpbmctdG9wOiA4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnB0LTQge1xyXG4gICAgcGFkZGluZy10b3A6IDRweDtcclxufVxyXG5cclxuLnB0LTIge1xyXG4gICAgcGFkZGluZy10b3A6IDJweDtcclxufVxyXG5cclxuLnB0LTAge1xyXG4gICAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGItMjgge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDI4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBiLTE2IHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wdi00IHtcclxuICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG59XHJcblxyXG4ucHYtOCB7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wdi0xMCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ucHYtMjAge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnB2LTE0IHtcclxuICAgIHBhZGRpbmctdG9wOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHYtMTYge1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5waC01IHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBoLTE2IHtcclxuICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbi5waC04IHtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBoLTEwIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGgtNCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcclxufVxyXG5cclxuLnBoLTMyIHtcclxuICAgIHBhZGRpbmctbGVmdDogMzJweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMycHg7XHJcbn1cclxuXHJcbi5waC0zOCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDM4cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzOHB4O1xyXG59XHJcblxyXG4ucGgtNDQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0NHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNDRweDtcclxufVxyXG5cclxuLmJiIHtcclxuICAgIGJvcmRlci1ib3R0b206IDAuMXB4IHNvbGlkICNkM2QzZDM7XHJcbiAgICBib3JkZXItcmlnaHQ6IDAuMXB4IHNvbGlkICNkM2QzZDM7XHJcbn1cclxuXHJcbi5iYyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZkO1xyXG59XHJcblxyXG4uYmN3IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6ICMzMjNlNGEgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tcGFkZGluZy0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLW1hcmdpbi0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4ubS00IHtcclxuICAgIG1hcmdpbjogNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tLTgge1xyXG4gICAgbWFyZ2luOiA4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm0tMTYge1xyXG4gICAgbWFyZ2luOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tci0yMCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1yLTgge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1sLTIwIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tbC0yNCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXQtNCB7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm10LTgge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tdC0xNiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tdC0yNCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tdC0zOCB7XHJcbiAgICBtYXJnaW4tdG9wOiAzOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5taC04IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5taC0xNiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tdi00IHtcclxuICAgIG1hcmdpbi10b3A6IDRweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tdi0xNiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuLm12LTI0IHtcclxuICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG59XHJcblxyXG4ubWgtLTE2IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTZweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWgtOCB7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi53MTAwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udzcwIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbn1cclxuXHJcbi53NTAge1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLnczMCB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG4ucGMxIHtcclxuICAgIHdpZHRoOiA0NC41JTtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiKDEwNCwgMTAzLCAxMDMpO1xyXG59XHJcblxyXG4udGFiYmVkIHtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIC8qIHNvIHdlIGNvdWxkIGVhc2lseSBoaWRlIHRoZSByYWRpbyBpbnB1dHMgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZy1yaWdodDogMjhweDtcclxuICAgIHBhZGRpbmctbGVmdDogMzJweDtcclxufVxyXG5cclxuLnRhYmJlZCBbdHlwZT1cInJhZGlvXCJdIHtcclxuICAgIC8qIGhpZGluZyB0aGUgaW5wdXRzICovXHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udGFicyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgLy9tYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMSUgMDtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMzBweDtcclxuICAgIHdpZHRoOiAxMTMlO1xyXG59XHJcblxyXG4udGFicyBsYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi50YWI+bGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTJweDtcclxuICAgIGNvbG9yOiAjNjA2NjcwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLnRhYjpob3ZlciBsYWJlbCB7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjMzMzO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi50YWItY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgY29sb3I6ICM3Nzc7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhmYWZkO1xyXG4gICAgLy8gcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIC8vIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLyogQXMgd2UgY2Fubm90IHJlcGxhY2UgdGhlIG51bWJlcnMgd2l0aCB2YXJpYWJsZXMgb3IgY2FsbHMgdG8gZWxlbWVudCBwcm9wZXJ0aWVzLCB0aGUgbnVtYmVyIG9mIHRoaXMgc2VsZWN0b3IgcGFydHMgaXMgb3VyIHRhYiBjb3VudCBsaW1pdCAqL1xyXG5cclxuLnRhYmJlZCBbdHlwZT1cInJhZGlvXCJdOm50aC1vZi10eXBlKDEpOmNoZWNrZWR+LnRhYnMgLnRhYjpudGgtb2YtdHlwZSgxKSBsYWJlbCxcclxuLnRhYmJlZCBbdHlwZT1cInJhZGlvXCJdOm50aC1vZi10eXBlKDIpOmNoZWNrZWR+LnRhYnMgLnRhYjpudGgtb2YtdHlwZSgyKSBsYWJlbCxcclxuLnRhYmJlZCBbdHlwZT1cInJhZGlvXCJdOm50aC1vZi10eXBlKDMpOmNoZWNrZWR+LnRhYnMgLnRhYjpudGgtb2YtdHlwZSgzKSBsYWJlbCxcclxuLnRhYmJlZCBbdHlwZT1cInJhZGlvXCJdOm50aC1vZi10eXBlKDQpOmNoZWNrZWR+LnRhYnMgLnRhYjpudGgtb2YtdHlwZSg0KSBsYWJlbCxcclxuLnRhYmJlZCBbdHlwZT1cInJhZGlvXCJdOm50aC1vZi10eXBlKDUpOmNoZWNrZWR+LnRhYnMgLnRhYjpudGgtb2YtdHlwZSg1KSBsYWJlbCB7XHJcbiAgICBjb2xvcjogIzQ5YTJkNztcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLnRhYmJlZCBbdHlwZT1cInJhZGlvXCJdOm50aC1vZi10eXBlKDEpOmNoZWNrZWR+LnRhYi1jb250ZW50Om50aC1vZi10eXBlKDEpLFxyXG4udGFiYmVkIFt0eXBlPVwicmFkaW9cIl06bnRoLW9mLXR5cGUoMik6Y2hlY2tlZH4udGFiLWNvbnRlbnQ6bnRoLW9mLXR5cGUoMiksXHJcbi50YWJiZWQgW3R5cGU9XCJyYWRpb1wiXTpudGgtb2YtdHlwZSgzKTpjaGVja2Vkfi50YWItY29udGVudDpudGgtb2YtdHlwZSgzKSxcclxuLnRhYmJlZCBbdHlwZT1cInJhZGlvXCJdOm50aC1vZi10eXBlKDQpOmNoZWNrZWR+LnRhYi1jb250ZW50Om50aC1vZi10eXBlKDQpIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uaGh1OmFjdGl2ZSxcclxuLmhodTpmb2N1cyB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcbi5mb3JtIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBoZWlnaHQ6IDMxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG59XHJcblxyXG4uZm9ybSBwIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMjBweDtcclxuICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gaGVpZ2h0OiAyM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIGNvbG9yOiAjMzAzMDMwO1xyXG59XHJcblxyXG4uZm9ybSBpbnB1dCB7XHJcbiAgICBmb250LWZhbWlseTogXCJFdXJvcGFOdW92YS1SZWd1bGFyXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHdpZHRoOiA4OSU7XHJcbiAgICBoZWlnaHQ6IDMxM3B4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uZm9ybSAuZm9ybV9pbm5lciBidXR0b24ge1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IDM2JTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzNi41JTtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OWEyZDc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAwcHggIzQ5YTJkNztcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5mb3JtIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTQ5MTc0O1xyXG4gICAgY29sb3I6ICMwYzU2NDU7XHJcbn1cclxuXHJcbi5mb3JtIGJ1dHRvbjphY3RpdmUge1xyXG4gICAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyxcclxudGV4dGFyZWE6Zm9jdXMsXHJcbnNlbGVjdDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ueGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5YTJkNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IDBweCAjNDlhMmQ3O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLnlidXR0b24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYzM1NGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAwcHggIzQ5YTJkNztcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi56YnV0dG9uIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTQ3NTUxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggMHB4ICM0OWEyZDc7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uYm9yZGVyMSB7XHJcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICMxNzRkNzI7XHJcbn1cclxuXHJcbi5ib3JkZXIyIHtcclxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzVmZTZlNztcclxufVxyXG5cclxuLmJvcmRlcjMge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjZTc4NDVmO1xyXG59XHJcblxyXG4uZm9ybS13cmFwcGVyMSB7XHJcbiAgICAvL2Rpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mb3JtLXdyYXBwZXIxIGRpdiB0ZCB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiA1LjUlO1xyXG59XHJcblxyXG4uZm9ybS13cmFwcGVyMS50ZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHdpZHRoOiA3JTtcclxufVxyXG5cclxuLmZ1bGwtaW5wdXQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgaGVpZ2h0OiA3NHB4O1xyXG4gICAgd2lkdGg6IDE3N3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDhweCA0cHggI2VlZWVmYTtcclxufVxyXG5cclxuLnNtYWxsbC1pbnB1dCB7XHJcbiAgICB3aWR0aDogMTYwcHggIWltcG9ydGFudDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNWRiZTg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogNXB4IDBweCA1cHggNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICM3Mjc2OGE7XHJcbn1cclxuXHJcbi5zaDEge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM2MDY2NzA7XHJcbn1cclxuXHJcbi5zcyB7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuI2N1c3RvbWVycyB7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE5cHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkZGQ7XHJcbn1cclxuXHJcbiNjdXN0b21lcnMgdGQsXHJcbiNjdXN0b21lcnMgdGgge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbn1cclxuXHJcbiNjdXN0b21lcnMgdGgge1xyXG4gICAgaGVpZ2h0OiA1MnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbn1cclxuXHJcbiNjdXN0b21lcnMgdGQge1xyXG4gICAgaGVpZ2h0OiA1MnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50YWIxIFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgLyogaGlkaW5nIHRoZSBpbnB1dHMgKi9cclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGhlaWdodDogMTdweDtcclxuICAgIHdpZHRoOiAxN3B4O1xyXG4gICAgY29sb3I6ICM0OWEyZDc7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4udGFiMSBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCtpbnB1dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZiO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNGM0O1xyXG59XHJcblxyXG4ubGFiZWwxIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xyXG4gICAgY29sb3I6ICM2MDY2NzA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG5cclxuLnRhYjEge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmF0IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5jdGIge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5YTJkNztcclxuICAgIHBhZGRpbmc6IDEycHggMzBweCAxMXB4IDMwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4ucmFkaW8xIFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgLyogaGlkaW5nIHRoZSBpbnB1dHMgKi9cclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGhlaWdodDogMTdweDtcclxuICAgIHdpZHRoOiAxN3B4O1xyXG4gICAgY29sb3I6ICM0OWEyZDc7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzQ5YTJkNztcclxufVxyXG5cclxuLnJhZGlvMSBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCtpbnB1dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZiO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNGM0O1xyXG59XHJcblxyXG4ubGFiZWwxIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xyXG4gICAgY29sb3I6ICM2MDY2NzA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG5cclxuLnJhZGlvMSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uc3RwMSB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnN0cDIge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnN0cDMge1xyXG4gICAgY29sb3I6ICM0YTRhNGE7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5vZjEge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGZvbnQ6IDE2cHgvMjZweCBHZW9yZ2lhLCBHYXJhbW9uZCwgU2VyaWY7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxudGFibGUgdGJvZHkge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vL1NJREUgUEVPUExFIExJU1RcclxuLnNpZGVfZG9jdW1lbnRfbGlzdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTcwdmg7XHJcbiAgICBib3JkZXItcmlnaHQ6IDAuM3B4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuLy9QUk9GSUxFIENMQVNTU1NTL1xyXG4ucHJvZmlsZV9jbGFzcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItYm90dG9tOiAwLjNweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBwYWRkaW5nOiAzJSA2JTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vLyAucHJvZmlsZV9jbGFzczpob3ZlciB7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmZDtcclxuLy8gICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHJnYig2MSwgMTE2LCAxOTcpO1xyXG4vLyB9XHJcbi5hY3RpdmVCdG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmZDtcclxuICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgcmdiKDYxLCAxMTYsIDE5Nyk7XHJcbn1cclxuXHJcbi50YWJsZV90b3Age1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjkuNTUlIDMzJSAzMCUgNiU7XHJcbiAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaW52b2ljZXNfdGFiIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZkO1xyXG59XHJcblxyXG4uaW52b2ljZXNfaW5uZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZkO1xyXG59XHJcblxyXG4uaW5uZXJfdGFiX2NvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmludm9pY2VfaGVhZCB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG59XHJcblxyXG4uc2VyaWFsX2RldGFpbCB7XHJcbiAgICB3aWR0aDogOTMlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb25fdGFiIHtcclxuICAgIHdpZHRoOiA3NzBweDtcclxuICAgIGhlaWdodDogMTM4N3B4O1xyXG59XHJcblxyXG4uZm9ybV9pbm5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5vcHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5YTJkNztcclxuICAgIHBhZGRpbmc6IDAgMyU7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBib3gtc2hhZG93OiA0cHggMHB4IDdweCAjMTA5Y2YxO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jY29udGFpbmVyIHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uc2F2QnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OUEyRDc7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuXHJcbi5jb250ZW50LXdyYXAge1xyXG4gICAgei1pbmRleDogMDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAyNjBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiA3OHZ3O1xyXG59XHJcblxyXG4jY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmFuYWx5dGljcyAuc3VwcG9ydCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uaGVhZGVyLXBhbmVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgIHdpZHRoOiA5OSU7XHJcbn1cclxuXHJcbi5hbmFseXRpY3MgLmFuYWx5dGljcy1zaWRlIHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4IWltcG9ydGFudDtcclxufVxyXG5cclxuLm1pZGRsZV9kYXRhdGFibGUgdGFibGUgdHIgdGgge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZzogM3B4IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnMsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzBhMzA0OTtcclxufVxyXG5cclxuLm1pZGRsZV9kYXRhdGFibGUgdGFibGUgdHIgdGggc3BhbiB7XHJcbiAgICBjb2xvcjogIzBhMzA0OTtcclxufVxyXG5cclxuLm1pZGRsZV9kYXRhdGFibGUgdGFibGUgdHIgdGQge1xyXG4gICAgZm9udC1zaXplOiAxM3B4IWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDNweCAxMHB4O1xyXG4gICAgY29sb3I6ICM3Nzc7XHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5oZWFkaW5nX2NvbW1vbl90YWcge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBwYWRkaW5nOiAxM3B4IDAgMTJweCAwO1xyXG59XHJcblxyXG4udG9wX2V4bF9kZGl2cyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDA7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgIG1pbi1oZWlnaHQ6IGluaGVyaXQhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udmlld19lZGl0X2J1dHRvbiBhIGkge1xyXG4gICAgY29sb3I6ICM3Nzc7XHJcbiAgICBwYWRkaW5nOiAwIDRweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnZpZXdfZWRpdF9idXR0b24gLnNhdkJ0biAuZmEuZmEtZmxvcHB5LW86YmVmb3JlIHtcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLm5vbmV7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgb3BhY2l0eTogLjc7XHJcbn1cclxuIl19 */"]
  });
  return ViewDocumentComponent;
})();

/***/ }),

/***/ 64940:
/*!************************************************************!*\
  !*** ./src/app/home/view-document/view-document.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewDocumentModule": () => (/* binding */ ViewDocumentModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../confirm-dialog/confirm-dialog.service */ 12579);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ 71010);
/* harmony import */ var _shared_Data_Servies_shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared-Data-Servies/shared-data.service */ 10241);
/* harmony import */ var _shared_home_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-home.module */ 69408);
/* harmony import */ var _view_document_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-document.component */ 71828);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);










let ViewDocumentModule = /*#__PURE__*/(() => {
  class ViewDocumentModule {}

  ViewDocumentModule.ɵfac = function ViewDocumentModule_Factory(t) {
    return new (t || ViewDocumentModule)();
  };

  ViewDocumentModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: ViewDocumentModule
  });
  ViewDocumentModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    providers: [_confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialogService, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal, _shared_Data_Servies_shared_data_service__WEBPACK_IMPORTED_MODULE_1__.SharedDataService],
    imports: [_shared_home_module__WEBPACK_IMPORTED_MODULE_2__.SharedHomeModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild([{
      path: ":file",
      component: _view_document_component__WEBPACK_IMPORTED_MODULE_3__.ViewDocumentComponent,
      pathMatch: "full"
    }]), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__.ModalModule.forRoot()]
  });
  return ViewDocumentModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ViewDocumentModule, {
    declarations: [_view_document_component__WEBPACK_IMPORTED_MODULE_3__.ViewDocumentComponent],
    imports: [_shared_home_module__WEBPACK_IMPORTED_MODULE_2__.SharedHomeModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__.ModalModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_home_view-document_view-document_module_ts.js.map