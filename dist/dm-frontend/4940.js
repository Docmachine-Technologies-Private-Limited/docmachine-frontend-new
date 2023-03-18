"use strict";
(self["webpackChunkdm_frontend"] = self["webpackChunkdm_frontend"] || []).push([[4940],{

/***/ 71828:
/*!***************************************************************!*\
  !*** ./src/app/home/view-document/view-document.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewDocumentComponent": () => (/* binding */ ViewDocumentComponent)
/* harmony export */ });
/* harmony import */ var D_Bharathexim_Repo_docmachine_frontend_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 8239);
/* harmony import */ var _service_document_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/document.service */ 76852);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 20092);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! xlsx */ 64841);
/* harmony import */ var _currency_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../currency.json */ 35743);
/* harmony import */ var _shared_Data_Servies_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared-Data-Servies/shared-data.service */ 10241);
/* harmony import */ var _service_homeservices_shippingbill_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/homeservices/shippingbill.service */ 61650);
/* harmony import */ var _service_window_information_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/window-information.service */ 23087);
/* harmony import */ var _service_aprroval_pending_reject_transactions_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/aprroval-pending-reject-transactions.service */ 56869);
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/user.service */ 84981);
/* harmony import */ var _confirm_dialog_box_confirm_dialog_box_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../confirm-dialog-box/confirm-dialog-box.component */ 43970);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 93329);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 64537);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 7976);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 5998);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-toastr */ 48292);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 88696);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 88692);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", Buyer_Name_r19, " ");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", Destination_r22, " ");
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

function ViewDocumentComponent_div_9_table_3_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ViewDocumentComponent_div_9_table_3_tr_19_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r44);
      const data_r41 = restoredCtx.$implicit;
      const i_r42 = restoredCtx.index;
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r43.getInvoices(data_r41, i_r42) && ctx_r43.getTransactions(data_r41.pi_poNo));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](data_r41.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](data_r41.pi_poNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r41.amount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](data_r41.buyerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r41.location, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](data_r41.benneName);
  }
}

function ViewDocumentComponent_div_9_table_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "table", 56)(1, "thead", 57)(2, "tr")(3, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "th", 60)(6, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "DATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "PI/PO No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "CONSIGNEE NAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "BRANCH");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "Bene Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, ViewDocumentComponent_div_9_table_3_tr_19_Template, 15, 6, "tr", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r37.item1);
  }
}

function ViewDocumentComponent_div_9_table_4_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ViewDocumentComponent_div_9_table_4_tr_19_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r49);
      const data_r46 = restoredCtx.$implicit;
      const i_r47 = restoredCtx.index;
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r48.getInvoices(data_r46, i_r47) && ctx_r48.getTransactions(data_r46.pi_poNo));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "Random Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "img", 21)(13, "img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, " Lindsey Stroud ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](data_r46.boeDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](data_r46.boeNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r46.adCode, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](data_r46.benneName);
  }
}

function ViewDocumentComponent_div_9_table_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "table", 56)(1, "thead", 57)(2, "tr", 66)(3, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "th", 60)(6, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "DATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "BOE NUMBER");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "AD CODE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "COMPANY NAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "UPLOADED BY");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "BENE NAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, ViewDocumentComponent_div_9_table_4_tr_19_Template, 17, 4, "tr", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r38.item1);
  }
}

function ViewDocumentComponent_div_9_table_5_tr_41_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r51.sbdate, " ");
  }
}

function ViewDocumentComponent_div_9_table_5_tr_41_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_9_table_5_tr_41_div_3_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r79);
      const data_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](data_r51.sbdate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", data_r51.sbdate);
  }
}

function ViewDocumentComponent_div_9_table_5_tr_41_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ViewDocumentComponent_div_9_table_5_tr_41_div_5_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r83);
      const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      const data_r51 = ctx_r82.$implicit;
      const i_r52 = ctx_r82.index;
      const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r81.getInvoices(data_r51, i_r52) && ctx_r81.getTransactions(data_r51.pi_poNo));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r51.sbno, " ");
  }
}

function ViewDocumentComponent_div_9_table_5_tr_41_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_9_table_5_tr_41_div_6_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r87);
      const data_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](data_r51.sbno = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", data_r51.sbno);
  }
}

function ViewDocumentComponent_div_9_table_5_tr_41_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r51.adCode, " ");
  }
}

function ViewDocumentComponent_div_9_table_5_tr_41_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_9_table_5_tr_41_div_9_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r92);
      const data_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](data_r51.adCode = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", data_r51.adCode);
  }
}

function ViewDocumentComponent_div_9_table_5_tr_41_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r51.adBillNo, " ");
  }
}

function ViewDocumentComponent_div_9_table_5_tr_41_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_9_table_5_tr_41_div_12_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r97);
      const data_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](data_r51.adBillNo = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", data_r51.adBillNo);
  }
}

function ViewDocumentComponent_div_9_table_5_tr_41_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r61.transform(data_r51.buyerName), " ");
  }
}

function ViewDocumentComponent_div_9_table_5_tr_41_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_9_table_5_tr_41_div_15_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r102);
      const data_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](data_r51.buyerName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", data_r51.buyerName);
  }
}

function ViewDocumentComponent_div_9_table_5_tr_41_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r51.consigneeName, " ");
  }
}

function ViewDocumentComponent_div_9_table_5_tr_41_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_9_table_5_tr_41_div_18_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r107);
      const data_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](data_r51.consigneeName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", data_r51.consigneeName);
  }
}

function ViewDocumentComponent_div_9_table_5_tr_41_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r51.exporterLocationCode, " ");
  }
}

function ViewDocumentComponent_div_9_table_5_tr_41_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_9_table_5_tr_41_div_21_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r112);
      const data_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](data_r51.exporterLocationCode = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", data_r51.exporterLocationCode);
  }
}

function ViewDocumentComponent_div_9_table_5_tr_41_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r51.countryOfFinaldestination, " ");
  }
}

function ViewDocumentComponent_div_9_table_5_tr_41_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_9_table_5_tr_41_div_24_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r117);
      const data_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](data_r51.countryOfFinaldestination = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", data_r51.countryOfFinaldestination);
  }
}

function ViewDocumentComponent_div_9_table_5_tr_41_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r51.fobCurrency, " ");
  }
}

function ViewDocumentComponent_div_9_table_5_tr_41_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_9_table_5_tr_41_div_27_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r122);
      const data_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](data_r51.fobCurrency = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", data_r51.fobCurrency);
  }
}

function ViewDocumentComponent_div_9_table_5_tr_41_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r51.fobValue, " ");
  }
}

function ViewDocumentComponent_div_9_table_5_tr_41_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_9_table_5_tr_41_div_30_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r127);
      const data_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](data_r51.fobValue = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", data_r51.fobValue);
  }
}

function ViewDocumentComponent_div_9_table_5_tr_41_button_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ViewDocumentComponent_div_9_table_5_tr_41_button_48_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r131);
      const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      const data_r51 = ctx_r130.$implicit;
      const i_r52 = ctx_r130.index;
      const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r129.toSave(data_r51, i_r52));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function ViewDocumentComponent_div_9_table_5_tr_41_button_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ViewDocumentComponent_div_9_table_5_tr_41_button_49_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r134);
      const i_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().index;
      const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r132.toEdit(i_r52));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function ViewDocumentComponent_div_9_table_5_tr_41_button_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ViewDocumentComponent_div_9_table_5_tr_41_button_50_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r137);
      const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      const data_r51 = ctx_r136.$implicit;
      const i_r52 = ctx_r136.index;
      const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r135.handleDelete(data_r51._id, i_r52));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "a", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}

function ViewDocumentComponent_div_9_table_5_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr", 72)(1, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, ViewDocumentComponent_div_9_table_5_tr_41_div_2_Template, 2, 1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, ViewDocumentComponent_div_9_table_5_tr_41_div_3_Template, 2, 1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, ViewDocumentComponent_div_9_table_5_tr_41_div_5_Template, 2, 1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, ViewDocumentComponent_div_9_table_5_tr_41_div_6_Template, 2, 1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, ViewDocumentComponent_div_9_table_5_tr_41_div_8_Template, 2, 1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, ViewDocumentComponent_div_9_table_5_tr_41_div_9_Template, 2, 1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, ViewDocumentComponent_div_9_table_5_tr_41_div_11_Template, 2, 1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, ViewDocumentComponent_div_9_table_5_tr_41_div_12_Template, 2, 1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "td", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, ViewDocumentComponent_div_9_table_5_tr_41_div_14_Template, 2, 1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, ViewDocumentComponent_div_9_table_5_tr_41_div_15_Template, 2, 1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "td", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, ViewDocumentComponent_div_9_table_5_tr_41_div_17_Template, 2, 1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, ViewDocumentComponent_div_9_table_5_tr_41_div_18_Template, 2, 1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, ViewDocumentComponent_div_9_table_5_tr_41_div_20_Template, 2, 1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, ViewDocumentComponent_div_9_table_5_tr_41_div_21_Template, 2, 1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](23, ViewDocumentComponent_div_9_table_5_tr_41_div_23_Template, 2, 1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](24, ViewDocumentComponent_div_9_table_5_tr_41_div_24_Template, 2, 1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](26, ViewDocumentComponent_div_9_table_5_tr_41_div_26_Template, 2, 1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](27, ViewDocumentComponent_div_9_table_5_tr_41_div_27_Template, 2, 1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "td", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](29, ViewDocumentComponent_div_9_table_5_tr_41_div_29_Template, 2, 1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](30, ViewDocumentComponent_div_9_table_5_tr_41_div_30_Template, 2, 1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "td", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "td", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "td", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "td", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "td", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "td", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "td", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "td", 75)(46, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ViewDocumentComponent_div_9_table_5_tr_41_Template_a_click_46_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r139);
      const data_r51 = restoredCtx.$implicit;
      const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);

      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](12);

      ctx_r138.openLetterOfCredit(_r5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r138.viewCN(data_r51));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](47, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](48, ViewDocumentComponent_div_9_table_5_tr_41_button_48_Template, 2, 0, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](49, ViewDocumentComponent_div_9_table_5_tr_41_button_49_Template, 2, 0, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](50, ViewDocumentComponent_div_9_table_5_tr_41_button_50_Template, 3, 0, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r51 = ctx.$implicit;
    const i_r52 = ctx.index;
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r50.AprrovalPendingRejectService.truefalse(data_r51["deleteflag"] == "0" || data_r51["deleteflag"] == 0) || ctx_r50.AprrovalPendingRejectService.truefalse((ctx_r50.USER_DATA == null ? null : ctx_r50.USER_DATA.result == null ? null : ctx_r50.USER_DATA.result.Role_Type) != "Approver"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r50.optionsVisibility[i_r52]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r50.optionsVisibility[i_r52]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r50.optionsVisibility[i_r52]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r50.optionsVisibility[i_r52]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r50.optionsVisibility[i_r52]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r50.optionsVisibility[i_r52]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r50.optionsVisibility[i_r52]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r50.optionsVisibility[i_r52]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r50.optionsVisibility[i_r52]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r50.optionsVisibility[i_r52]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r50.optionsVisibility[i_r52]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r50.optionsVisibility[i_r52]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r50.optionsVisibility[i_r52]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r50.optionsVisibility[i_r52]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r50.optionsVisibility[i_r52]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r50.optionsVisibility[i_r52]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r50.optionsVisibility[i_r52]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r50.optionsVisibility[i_r52]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r50.optionsVisibility[i_r52]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r50.optionsVisibility[i_r52]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r51.firxNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r51.firxDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r51.firxCurrency, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r51.firxAmount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r51.firxCommision, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r51.firxRecAmo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r51.balanceAvai, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r50.optionsVisibility[i_r52]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r50.optionsVisibility[i_r52]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r50.optionsVisibility[i_r52]);
  }
}

function ViewDocumentComponent_div_9_table_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "table", 68)(1, "thead")(2, "tr", 69)(3, "th", 60)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "SB DATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "SB NUMBER");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "AD CODE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "AD BILL NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "th", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "BUYER NAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "th", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "COMPANY NAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "ORIGIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "DESTINATION");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "CURRENCY");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "th", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "SB AMOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "th", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, "FIRX NUMBER ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "th", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "FIRX DATE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "th", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "FIRX CURRENCY ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "th", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, "FIRX AMOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "th", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "FIRX COMMISION ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "th", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35, "FIRX RECIEVED AMOUNT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "th", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37, "AVAILABLE BALANCE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "th", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39, "Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](41, ViewDocumentComponent_div_9_table_5_tr_41_Template, 51, 31, "tr", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r39.FILTER_VALUE_LIST);
  }
}

function ViewDocumentComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 51)(1, "section", 52)(2, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, ViewDocumentComponent_div_9_table_3_Template, 20, 1, "table", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, ViewDocumentComponent_div_9_table_4_Template, 20, 1, "table", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, ViewDocumentComponent_div_9_table_5_Template, 42, 1, "table", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r3.pipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r3.boe);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r3.sb);
  }
}

function ViewDocumentComponent_div_10_div_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 121)(1, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "p", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](data_r144.sbno);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r144.sbdate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](data_r144.buyerName);
  }
}

function ViewDocumentComponent_div_10_div_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 121)(1, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "p", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Continental carriers pvt ltd");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](data_r144.pi_poNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r144.date, "");
  }
}

function ViewDocumentComponent_div_10_div_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 121)(1, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "p", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Continental carriers pvt ltd");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](data_r144.boeNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r144.boeDate, "");
  }
}

function ViewDocumentComponent_div_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r153 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ViewDocumentComponent_div_10_div_2_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r153);
      const data_r144 = restoredCtx.$implicit;
      const i_r145 = restoredCtx.index;
      const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r152.getInvoices(data_r144, i_r145) && ctx_r152.getTransactions(data_r144.pi_poNo));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "img", 21)(3, "img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, ViewDocumentComponent_div_10_div_2_div_4_Template, 7, 3, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, ViewDocumentComponent_div_10_div_2_div_5_Template, 7, 2, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, ViewDocumentComponent_div_10_div_2_div_6_Template, 7, 2, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r145 = ctx.index;
    const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r140.lastIndex == i_r145 ? "activeBtn" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r140.sb);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r140.pipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r140.boe);
  }
}

function ViewDocumentComponent_div_10_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 125)(1, "div", 126)(2, "span", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 128)(5, "div", 129)(6, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "PI/PO DETAILS");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 129)(9, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 132)(12, "div", 133)(13, "section", 134)(14, "div", 135)(15, "div", 136)(16, "label", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "PI/PO NO.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "p", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 139)(21, "div", 140)(22, "label", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "Benne Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "p", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "div", 135)(27, "div", 140)(28, "label", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "Currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "p", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "div", 135)(33, "div", 140)(34, "label", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "p", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "div", 139)(39, "div", 140)(40, "label", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41, "LEO DATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "p", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "div", 135)(45, "div", 140)(46, "label", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](47, "Last Day Of Shipment");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "p", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "div", 135)(51, "div", 140)(52, "label", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](53, "Payment Term");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "p", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "div", 139)(57, "div", 140)(58, "label", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](59, "PC Ref No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](60, "p", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](62, "div", 135)(63, "div", 140)(64, "label", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](65, "Due Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](66, "p", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](68, "iframe", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("PI/PO NUMBER:\u2003", ctx_r141.selectedRow.pi_poNo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("SHIPPING BILL DATE:\u2003", ctx_r141.selectedRow.date, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r141.selectedRow.pi_poNo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r141.selectedRow.benneName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r141.selectedRow.currency, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r141.selectedRow.amount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r141.selectedRow.incoterm, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r141.selectedRow.lastDayShipment, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r141.selectedRow.paymentTerm, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r141.selectedRow.pcRefNo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r141.selectedRow.dueDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r141.docu, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeResourceUrl"]);
  }
}

function ViewDocumentComponent_div_10_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r155 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 142)(1, "div", 143)(2, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 129)(5, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "SB DETAILS");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 132)(10, "div", 133)(11, "section", 146)(12, "tr", 147)(13, "td", 148)(14, "label", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "DISCHARGE PORT");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "input", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_20_Template_input_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r155);
      const ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r154.selectedRow.dischargePort = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "td", 151)(18, "label", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "IEC CODE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "input", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_20_Template_input_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r155);
      const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r156.selectedRow.iecCode = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "td", 154)(22, "label", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "IEC NAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "input", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_20_Template_input_ngModelChange_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r155);
      const ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r157.selectedRow.iecName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "td", 148)(27, "label", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, "AD CODE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "input", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_20_Template_input_ngModelChange_29_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r155);
      const ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r158.selectedRow.adCode = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "p", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, "INVOICE DETAILS");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "td", 148)(33, "label", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34, "INVOICE NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "input", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_20_Template_input_ngModelChange_35_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r155);
      const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r159.selectedRow.invoiceNumber = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "td", 151)(37, "label", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38, "INVOICE AMOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "input", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_20_Template_input_ngModelChange_39_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r155);
      const ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r160.selectedRow.invoiceAmount = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "td", 154)(41, "label", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](42, "CURRENCY");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "input", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_20_Template_input_ngModelChange_43_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r155);
      const ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r161.selectedRow.currency = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](44, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "td", 148)(46, "label", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](47, "SETTELED AMOIUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "input", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_20_Template_input_ngModelChange_48_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r155);
      const ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r162.selectedRow.settledAmount = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "td", 151)(50, "label", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](51, "STATUS");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "input", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_20_Template_input_ngModelChange_52_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r155);
      const ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r163.selectedRow.status = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](53, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "p", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](55, "FOB and FREIGHT");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "td", 151)(57, "label", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](58, "FREIGHT AMOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "input", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_20_Template_input_ngModelChange_59_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r155);
      const ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r164.selectedRow.freightAmount = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](60, "td", 154)(61, "label", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](62, "FREIGHT CURRENCY");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](63, "input", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_20_Template_input_ngModelChange_63_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r155);
      const ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r165.selectedRow.freightCurrency = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](64, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](65, "p", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](66, "INSURANCE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](67, "td", 151)(68, "label", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](69, "INSURANCE AMOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](70, "input", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_20_Template_input_ngModelChange_70_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r155);
      const ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r166.selectedRow.insuranceAmount = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](71, "td", 154)(72, "label", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](73, "INSURANCE CURRENCY");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](74, "input", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_20_Template_input_ngModelChange_74_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r155);
      const ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r167.selectedRow.insuranceCurrency = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](75, "p", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](76, "DISCOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](77, "td", 151)(78, "label", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](79, "DISCOUNT AMOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](80, "input", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_20_Template_input_ngModelChange_80_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r155);
      const ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r168.selectedRow.discountAmount = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](81, "td", 154)(82, "label", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](83, "DISCOUNT CURRENCY");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](84, "input", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_20_Template_input_ngModelChange_84_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r155);
      const ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r169.selectedRow.discountCurrency = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](85, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](86, "p", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](87, "MISCELLANEOUS");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](88, "td", 151)(89, "label", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](90, "MISCELLANEOUS AMOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](91, "input", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_20_Template_input_ngModelChange_91_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r155);
      const ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r170.selectedRow.miscellaneousAmount = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](92, "td", 154)(93, "label", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](94, "MISCELLANEOUS CURRENCY");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](95, "input", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_20_Template_input_ngModelChange_95_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r155);
      const ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r171.selectedRow.miscellaneousCurrency = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](96, "p", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](97, "COMMISSION");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](98, "td", 151)(99, "label", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](100, "COMMISSION AMOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](101, "input", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_20_Template_input_ngModelChange_101_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r155);
      const ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r172.selectedRow.commissionAmount = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](102, "td", 154)(103, "label", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](104, "COMMISSION CURRENCY");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](105, "input", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_20_Template_input_ngModelChange_105_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r155);
      const ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r173.selectedRow.commissionCurrency = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](106, "iframe", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("BOE NUMBER:\u2003", ctx_r142.selectedRow.boeNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("BOE DATE:\u2003", ctx_r142.selectedRow.boeDate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r142.selectedRow.dischargePort);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r142.selectedRow.iecCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r142.selectedRow.iecName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r142.selectedRow.adCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r142.selectedRow.invoiceNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r142.selectedRow.invoiceAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r142.selectedRow.currency);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r142.selectedRow.settledAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r142.selectedRow.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r142.selectedRow.freightAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r142.selectedRow.freightCurrency);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r142.selectedRow.insuranceAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r142.selectedRow.insuranceCurrency);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r142.selectedRow.discountAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r142.selectedRow.discountCurrency);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r142.selectedRow.miscellaneousAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r142.selectedRow.miscellaneousCurrency);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r142.selectedRow.commissionAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r142.selectedRow.commissionCurrency);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r142.docu, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeResourceUrl"]);
  }
}

function ViewDocumentComponent_div_10_div_21_tr_120_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const obj_r175 = ctx.$implicit;
    const i_r176 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](i_r176 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](obj_r175.invoiceno);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](obj_r175.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](obj_r175.currency);
  }
}

function ViewDocumentComponent_div_10_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r178 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 142)(1, "div", 143)(2, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 129)(5, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "SB DETAILS");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 132)(10, "div", 133)(11, "section", 146)(12, "tr", 190)(13, "div")(14, "td", 148)(15, "label", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "PORT CODE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "input", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_21_Template_input_ngModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r178);
      const ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r177.selectedRow.portCode = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "td", 151)(19, "label", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, "IEC CODE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "input", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_21_Template_input_ngModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r178);
      const ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r179.selectedRow.ieccode = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "td", 154)(23, "label", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, "IEC NAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "input", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_21_Template_input_ngModelChange_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r178);
      const ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r180.selectedRow.iecName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "div")(28, "td", 148)(29, "label", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30, "AD CODE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "input", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_21_Template_input_ngModelChange_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r178);
      const ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r181.selectedRow.adCode = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "td", 151)(33, "label", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34, "LEO DATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "input", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_21_Template_input_ngModelChange_35_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r178);
      const ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r182.selectedRow.leodate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "td", 154)(37, "label", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38, "PROCESSING STATUS");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "input", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_21_Template_input_ngModelChange_39_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r178);
      const ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r183.selectedRow.processingStaus = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](40, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "div")(42, "p", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43, "FOB and FREIGHT");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "td", 148)(45, "label", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](46, "FOB CURRENCY");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "input", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_21_Template_input_ngModelChange_47_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r178);
      const ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r184.selectedRow.fobCurrency = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "td", 151)(49, "label", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](50, "FOB VALUE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "input", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_21_Template_input_ngModelChange_51_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r178);
      const ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r185.selectedRow.fobValue = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "td", 154)(53, "label", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](54, "REALIZED FOB VALUE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "input", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_21_Template_input_ngModelChange_55_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r178);
      const ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r186.selectedRow.realizedFobValue = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](56, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "div")(58, "td", 148)(59, "label", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](60, "EQUIVALENT FOB VALUE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](61, "input", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_21_Template_input_ngModelChange_61_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r178);
      const ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r187.selectedRow.equivalentFobValue = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](62, "td", 151)(63, "label", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](64, "FREIGHT CURRENCY");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](65, "input", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_21_Template_input_ngModelChange_65_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r178);
      const ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r188.selectedRow.freightCurrency = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](66, "td", 154)(67, "label", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](68, "FREIGHT VALUE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](69, "input", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_21_Template_input_ngModelChange_69_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r178);
      const ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r189.selectedRow.realizedFreightValue = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](70, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](71, "div")(72, "p", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](73, "INSURANCE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](74, "td", 151)(75, "label", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](76, "INSURANCE CURRENCY");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](77, "input", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_21_Template_input_ngModelChange_77_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r178);
      const ctx_r190 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r190.selectedRow.insuranceCurrency = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](78, "td", 154)(79, "label", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](80, "INSURANCE VALUE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](81, "input", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_21_Template_input_ngModelChange_81_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r178);
      const ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r191.selectedRow.insuranceValue = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](82, "td", 148)(83, "label", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](84, "REALIZED INSURANCE VALUE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](85, "input", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_21_Template_input_ngModelChange_85_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r178);
      const ctx_r192 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r192.selectedRow.realizedInsuranceValue = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](86, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](87, "div")(88, "p", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](89, "Additional");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](90, "td", 151)(91, "label", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](92, "BANKING CHARGES");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](93, "input", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_21_Template_input_ngModelChange_93_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r178);
      const ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r193.selectedRow.bankingCharges = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](94, "td", 154)(95, "label", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](96, "PAYMENT LAST DATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](97, "input", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_21_Template_input_ngModelChange_97_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r178);
      const ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r194.selectedRow.expectedPaymentlastdate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](98, "td", 148)(99, "label", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](100, "ADDED DATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](101, "input", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_21_Template_input_ngModelChange_101_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r178);
      const ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r195.selectedRow.AddedDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](102, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](103, "div")(104, "td", 151)(105, "label", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](106, "MODIFIED DATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](107, "input", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ViewDocumentComponent_div_10_div_21_Template_input_ngModelChange_107_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r178);
      const ctx_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r196.selectedRow.modifiedDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](108, "p", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](109, "Invoices");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](110, "table", 221)(111, "tr")(112, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](113, " Serial Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](114, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](115, "Invoice Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](116, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](117, "Invoice Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](118, "th", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](119, " Currency ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](120, ViewDocumentComponent_div_10_div_21_tr_120_Template, 9, 4, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](121, "iframe", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("SB NUMBER:\u2003", ctx_r143.selectedRow.sbno, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("SB DATE:\u2003", ctx_r143.selectedRow.sbdate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r143.selectedRow.portCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r143.selectedRow.ieccode);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r143.selectedRow.iecName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r143.selectedRow.adCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r143.selectedRow.leodate);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r143.selectedRow.processingStaus);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r143.selectedRow.fobCurrency);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r143.selectedRow.fobValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r143.selectedRow.realizedFobValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r143.selectedRow.equivalentFobValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r143.selectedRow.freightCurrency);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r143.selectedRow.realizedFreightValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r143.selectedRow.insuranceCurrency);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r143.selectedRow.insuranceValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r143.selectedRow.realizedInsuranceValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r143.selectedRow.bankingCharges);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r143.selectedRow.expectedPaymentlastdate);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r143.selectedRow.AddedDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r143.selectedRow.modifiedDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r143.selectedRow.invoices);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r143.docu, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeResourceUrl"]);
  }
}

function ViewDocumentComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 97)(1, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, ViewDocumentComponent_div_10_div_2_Template, 7, 4, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 100)(4, "div", 101)(5, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "input", 103)(7, "input", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "ul", 105)(9, "div")(10, "ul", 105)(11, "li", 106)(12, "label", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "li", 106)(15, "label", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "Additional Documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 109)(18, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, ViewDocumentComponent_div_10_div_19_Template, 69, 12, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, ViewDocumentComponent_div_10_div_20_Template, 107, 22, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, ViewDocumentComponent_div_10_div_21_Template, 122, 23, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "div", 113)(23, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](24, "input", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "div", 116)(26, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "Drag a document here");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "or");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "button", 117);
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
    const _r199 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 224)(1, "div", 225)(2, "div", 226)(3, "div", 227)(4, "div", 228)(5, "div", 23)(6, "div", 229)(7, "h6", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "Shipping Bill");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "iframe", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "button", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ViewDocumentComponent_ng_template_11_Template_button_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r199);
      const modal_r197 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](modal_r197.dismiss("Cross click"));
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
    return new (t || ViewDocumentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_service_document_service__WEBPACK_IMPORTED_MODULE_1__.DocumentService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_service_homeservices_shippingbill_service__WEBPACK_IMPORTED_MODULE_4__.ShippingbillDataService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_16__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_Data_Servies_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_service_window_information_service__WEBPACK_IMPORTED_MODULE_5__.WindowInformationService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_7__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_service_aprroval_pending_reject_transactions_service__WEBPACK_IMPORTED_MODULE_6__.AprrovalPendingRejectTransactionsService));
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
    consts: [[1, "content-wrap", "pb-2", "scroll-bar-main"], [1, "import_export_sec"], [1, "heading_common_tag", "p-0"], ["id", "content", "role", "main", 1, "content", "table-padding"], ["class", "table_top", 4, "ngIf"], ["class", "filter_section_top", 4, "ngIf"], [1, "analytics"], ["epltable", ""], ["style", "width: 100%", "class", "analytics-side", 4, "ngIf"], ["class", "p-8 bc", 4, "ngIf"], ["content", ""], [1, "table_top"], [2, "width", "100%", "border-right", "0.5px solid rgba(0, 0, 0, 0.2)", "height", "100%", "padding-top", "2.3%"], [1, "bcw", 2, "font-size", "14px", "margin-left", "78px", "font-weight", "500"], [2, "width", "100%", "font-weight", "300"], [2, "font-weight", "400"], [2, "width", "100%", "padding-right", "5%"], ["style", "float: right; margin-right: 3%", 4, "ngFor", "ngForOf"], [2, "margin-right", "8%"], ["src", "../../../assets/cross.png", 2, "width", "20px", "height", "20px", "margin-left", "10px", "cursor", "pointer", 3, "click"], [2, "float", "right", "margin-right", "3%"], ["src", "./assets/images/cc1d1196dbafb374fe2d91e177dc16f8517532d6.png", "height", "30px", "width", "30px", 1, "image"], [1, "filter_section_top"], [1, "row"], [1, "col-md-4", "col-sm-4", "col-12"], [1, "col-md-8", "col-sm-8", "col-12"], [1, "filter_right_new", "padding_new_top"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "ex_icon"], [1, "filter_posit"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "fi_icon"], ["appFilterToggle", "", 1, "bg-white", "filter_main_sec", "mt-2", 2, "display", "none"], ["filter_Popup", ""], [1, "select_filter_options"], [1, "col-md-6", "col-12"], ["for", "exampleFormControlInput1", 1, "form-label"], ["aria-label", "Default select example", "name", "Buyer_Name", 1, "form-select", "form-control", 3, "ngModel", "ngModelChange", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["aria-label", "Default select example", "name", "Company_Name", 1, "form-select", "form-control", 3, "change"], ["aria-label", "Default select example", "name", "Origin", 1, "form-select", "form-control", 3, "change"], [4, "ngFor", "ngForOf"], ["aria-label", "Default select example", "name", "Destination", 1, "form-select", "form-control", 3, "change"], ["aria-label", "Default select example", "name", "Currency", 1, "form-select", "form-control", 3, "change"], ["aria-label", "Default select example", "name", "SB_DATE", 1, "form-select", "form-control", 3, "change"], [1, "footer_buttons"], ["type", "button", 1, "btn", "btn-light", 3, "click"], [1, "upload-button", "btn", "btn-success", 3, "click"], [1, "add_icon"], [3, "value"], [1, "analytics-side", 2, "width", "100%"], [1, "middle_datatable"], [1, "widget-body", "p-0", "support", "table-wrapper", 2, "margin", "auto"], ["style", "width: 100%", "class", "table table-striped mb-0", 4, "ngIf"], ["class", "table mb-0", 4, "ngIf"], [1, "table", "table-striped", "mb-0", 2, "width", "100%"], [2, "width", "100%", "height", "54px", "background", "white", "position", "sticky", "top", "0"], [1, "rect"], ["src", "./assets/Rectangle-13.png"], ["scope", "col", 1, "col-td-th-3"], [1, "pl-3"], ["class", "table-tr", 3, "click", 4, "ngFor", "ngForOf"], [1, "table-tr", 3, "click"], [1, "pl-4", "fw-normal"], [1, "col-td-th-3"], [1, "text-muted", "table-heading"], ["src", "./assets/images/cc1d1196dbafb374fe2d91e177dc16f8517532d6.png", "height", "30px", "width", "30px", 1, "image", "image2"], [1, "table", "mb-0"], [1, "table-tr"], ["scope", "col", 1, "col-td-th-2"], ["class", "table-tr", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "table-tr", 3, "ngClass"], [4, "ngIf"], [3, "click", 4, "ngIf"], [1, "col-td-th-2"], ["title", "View", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-eye"], ["title", "Save", "class", "savBtn bgnone", 3, "click", 4, "ngIf"], ["title", "Edit", "class", "savBtn bgnone", 3, "click", 4, "ngIf"], ["name", "sbdate", "type", "text", "placeholder", "Sb Date", 1, "tblInput", "form-control", 3, "ngModel", "ngModelChange"], [3, "click"], ["name", "sbno", "type", "text", "placeholder", "Sb No", 1, "tblInput", "form-control", 3, "ngModel", "ngModelChange"], ["name", "adCode", "type", "text", "placeholder", "adCode", 1, "tblInput", "form-control", 3, "ngModel", "ngModelChange"], ["name", "adBillNo", "type", "text", "placeholder", "ad Bill No", 1, "tblInput", "form-control", 3, "ngModel", "ngModelChange"], ["name", "buyerName", "type", "text", "placeholder", "Buyer Name", 1, "tblInput", "form-control", 3, "ngModel", "ngModelChange"], ["name", "consigneeName", "type", "text", "placeholder", "Consignee Name", 1, "tblInput", "form-control", 3, "ngModel", "ngModelChange"], ["name", "exporterLocationCode", "type", "text", "placeholder", "ORIGIN", 1, "tblInput", "form-control", 3, "ngModel", "ngModelChange"], ["name", "countryOfFinaldestination", "type", "text", "placeholder", "DESTINATION", 1, "tblInput", "form-control", 3, "ngModel", "ngModelChange"], ["name", "fobCurrency", "type", "text", "placeholder", "Fob Currency", 1, "tblInput", "form-control", 3, "ngModel", "ngModelChange"], ["name", "fobValue", "type", "text", "placeholder", "Fob Value", 1, "tblInput", "form-control", 3, "ngModel", "ngModelChange"], ["title", "Save", 1, "savBtn", "bgnone", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-floppy-o"], ["title", "Edit", 1, "savBtn", "bgnone", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-pencil-square-o"], ["title", "Delete", "href", "javascript:void(0)"], ["aria-hidden", "true", 1, "fa", "fa-trash-o"], [1, "p-8", "bc"], [1, "side_document_list"], ["id", "profile", "class", "profile_class", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "invoices_tab"], [1, "invoices_inner"], [1, "tabbed"], ["type", "radio", "id", "1", "name", "css-tabs", "checked", ""], ["type", "radio", "id", "2", "name", "css-tabs"], [1, "tabs"], [1, "tab"], ["for", "1"], ["for", "2"], [1, "tab-content", "form-wrapper"], [1, "inner_tab_content"], ["style", "\n                                        background-color: white;\n                                        width: 100%;\n                                        height: 100vh;\n                                        padding-right: 60px;\n                                        ", 4, "ngIf"], ["style", "width: 98%; background-color: 'white'", 4, "ngIf"], [1, "tab-content", "form-wrapper", 2, "height", "100vh", "padding-left", "20px", "padding-top", "4%", "background-color", "white", "width", "80%"], ["method", "POST", 1, "form"], ["id", "dropzone", 1, "dropzone", "dropzone-container"], [1, "form_inner"], ["type", "submit"], ["id", "profile", 1, "profile_class", 3, "ngClass", "click"], [1, "", 2, "display", "flex"], ["class", "", "style", "width: 100%; padding: 3%", 4, "ngIf"], [1, "", 2, "width", "100%", "padding", "3%"], [1, "fl", "fs16"], [1, "fr", "fs12", 2, "float", "right"], [1, "fs14"], [2, "background-color", "white", "width", "100%", "height", "100vh", "padding-right", "60px"], [1, "serial_detail"], [2, "width", "100%", "float", "right", "font-size", "14px", "margin-top", "18.77px", "color", "black"], [1, "invoice_head"], [2, "width", "100%"], [2, "width", "65%", "float", "left", "font-size", "20px", "font-weight", "500"], [2, "float", "right", "font-weight", "500", "font-size", "14px", "color", "black"], [1, "row", 2, "width", "100%"], [1, "col-12", "mb-lg", "padding", 2, "width", "100%"], [1, "widget", "pb-0", "box-shadow", 2, "padding-left", "45px", "display", "grid", "grid-template-columns", "33% 33% 33%", "margin-top", "3%"], [2, "width", "85%", "margin-bottom", "24px", "border-radius", "8px", "box-shadow", "4px 4px 8px 4px #eeeefa", "border-left", "3px solid #e7845f"], [2, "height", "100px", "padding-top", "5%", "padding-bottom", "17px", "padding-left", "3%"], [2, "color", "#72768a !important", "font-size", "102%"], [2, "margin-left", "5%", "color", "#000000", "font-size", "102%"], [2, "width", "85%", "margin-bottom", "24px", "border-radius", "8px", "box-shadow", "4px 4px 8px 4px #eeeefa", "border-left", "3px solid #5fe6e7"], [2, "height", "100px", "padding-top", "14px", "padding-bottom", "17px", "padding-left", "3%"], [2, "height", "600px", "width", "400px", "margin-left", "19px", 3, "src"], [2, "width", "98%", "background-color", "white"], [2, "width", "100%", "margin-top", "10px"], [2, "width", "35%", "float", "right", "font-size", "14px"], [2, "width", "65%", "float", "left", "font-size", "16px", "margin-top", "20px", "padding-left", "25px"], [1, "widget", "pb-0", "box-shadow"], [1, "form-wrapper1"], [1, "full-input", "border1"], ["for", "dischargePort"], ["type", "text", "name", "dischargePort", 1, "smalll-input", 3, "ngModel", "ngModelChange"], [1, "full-input", "border2"], ["for", "iecCode"], ["type", "text", "name", "iecCode", 1, "smalll-input", 3, "ngModel", "ngModelChange"], [1, "full-input", "border3"], ["for", "iecName"], ["type", "text", "name", "iecName", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "adCode"], ["type", "text", "name", "adCode", 1, "smalll-input", 3, "ngModel", "ngModelChange"], [1, "sh1"], ["for", "invoiceNumber"], ["type", "text", "name", "invoiceNumber", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "invoiceAmount"], ["type", "text", "name", "invoiceAmount", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "currency"], ["type", "text", "name", "currency", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "settledAmount"], ["type", "text", "name", "settledAmount", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "status"], ["type", "text", "name", "status", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "freightAmount"], ["type", "text", "name", "freightAmount", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "freightCurrency"], ["type", "text", "name", "freightCurrency", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "insuranceAmount"], ["type", "text", "name", "insuranceAmount", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "insuranceCurrency"], ["type", "text", "name", "insuranceCurrency", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "discountAmount"], ["type", "text", "name", "discountAmount", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "discountCurrency"], ["type", "text", "name", "discountCurrency", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "miscellaneousAmount"], ["type", "text", "name", "miscellaneousAmount", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "miscellaneousCurrency"], ["type", "text", "name", "miscellaneousCurrency", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "commissionAmount"], ["type", "text", "name", "commissionAmount", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "commissionCurrency"], ["type", "text", "name", "commissionCurrency", 1, "smalll-input", 3, "ngModel", "ngModelChange"], [1, "form-wrapper1", 2, "width", "100%"], ["for", "portCode"], ["type", "text", "name", "portCode", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "ieccode"], ["type", "text", "name", "ieccode", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "leodate"], ["type", "text", "name", "leodate", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "processingStaus"], ["type", "text", "name", "processingStaus", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "fobCurrency"], ["type", "text", "name", "fobCurrency", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "fobValue"], ["type", "text", "name", "fobValue", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "realizedFobValue"], ["type", "text", "name", "realizedFobValue", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "equivalentFobValue"], ["type", "text", "name", "equivalentFobValue", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "realizedFreightValue"], ["type", "text", "name", "realizedFreightValue", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "insuranceValue"], ["type", "text", "name", "insuranceValue", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "realizedInsuranceValue"], ["type", "text", "name", "realizedInsuranceValue", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "bankingCharges"], ["type", "text", "name", "bankingCharges", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "expectedPaymentlastdate"], ["type", "text", "name", "expectedPaymentlastdate", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "AddedDate"], ["type", "text", "name", "AddedDate", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "modifiedDate"], ["type", "text", "name", "modifiedDate", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["id", "customers", 2, "margin-bottom", "5px"], [2, "text-align", "left !important"], [2, "height", "600px", "width", "600px", "margin-top", "6px", "margin-left", "19px", 3, "src"], [1, "modal-body"], [1, "row", "no-gutter"], [1, "col-md-7", 2, "margin", "10px"], [1, "login", "d-flex", "py-5", 2, "padding", "0px !important"], [1, "container", "popup"], [1, "col-lg-10", "col-xl-7", "mrg"], [1, "display-6"], ["width", "315%", "height", "500px", 3, "src"], ["type", "submit", 1, "submitBTN", 2, "margin-left", "250px", 3, "click"]],
    template: function ViewDocumentComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "main", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, ViewDocumentComponent_div_5_Template, 12, 6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, ViewDocumentComponent_div_6_Template, 65, 7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, ViewDocumentComponent_div_9_Template, 6, 3, "div", 8);
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
    styles: ["*[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.heading[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 20px;\n  font-weight: 700;\n  margin-left: 23px;\n  color: #323e4a;\n}\n\n.table-heading[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 500;\n  color: #747474;\n}\n\n.box-shadow[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n\n.table-padding[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fff;\n  border-radius: 10px;\n  margin: 0;\n  box-shadow: 0 2px 10px rgba(58, 53, 65, 0.1019607843);\n}\n\nbutton[_ngcontent-%COMP%] {\n  outline: none;\n}\n\nselect[_ngcontent-%COMP%] {\n  text-decoration: none;\n  border: none;\n  background: none;\n  color: #49a2d7;\n}\n\nselect[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.rect[_ngcontent-%COMP%] {\n  text-align: right;\n  min-width: 80px !important;\n}\n\n.sb-no[_ngcontent-%COMP%] {\n  color: #49a2d7;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  vertical-align: middle !important;\n}\n\n.image[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  margin-top: 12fvpx;\n}\n\n.image2[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  margin-left: -13px;\n}\n\n.fl[_ngcontent-%COMP%] {\n  float: \"left\";\n}\n\n.fr[_ngcontent-%COMP%] {\n  float: \"right\";\n}\n\nspan.fs20[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\nspan.fs16[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\np.fs14[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.fs12[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.p-4[_ngcontent-%COMP%] {\n  padding: 4px;\n}\n\n.p-8[_ngcontent-%COMP%] {\n  z-index: 5000;\n  transform: scale(1, 1);\n  display: grid;\n  grid-template-columns: 29% 70%;\n}\n\n.p-20[_ngcontent-%COMP%] {\n  padding: 20px !important;\n}\n\n.p-12[_ngcontent-%COMP%] {\n  padding: 12px !important;\n}\n\n.p-16[_ngcontent-%COMP%] {\n  padding: 16px !important;\n}\n\n.pr-4[_ngcontent-%COMP%] {\n  padding-right: 4px;\n}\n\n.pr-8[_ngcontent-%COMP%] {\n  padding-right: 8px !important;\n}\n\n.pr-16[_ngcontent-%COMP%] {\n  padding-right: 16px;\n}\n\n.pt-30[_ngcontent-%COMP%] {\n  padding-top: 30px !important;\n}\n\n.pt-28[_ngcontent-%COMP%] {\n  padding-top: 28px !important;\n}\n\n.pt-25[_ngcontent-%COMP%] {\n  padding-top: 25px !important;\n}\n\n.pt-24[_ngcontent-%COMP%] {\n  padding-top: 24px !important;\n}\n\n.pt-22[_ngcontent-%COMP%] {\n  padding-top: 22px !important;\n}\n\n.pt-20[_ngcontent-%COMP%] {\n  padding-top: 20px !important;\n}\n\n.pt-19[_ngcontent-%COMP%] {\n  padding-top: 19px !important;\n}\n\n.pt-16[_ngcontent-%COMP%] {\n  padding-top: 16px !important;\n}\n\n.pt-14[_ngcontent-%COMP%] {\n  padding-top: 14px !important;\n}\n\n.pt-10[_ngcontent-%COMP%] {\n  padding-top: 10px !important;\n}\n\n.pt-8[_ngcontent-%COMP%] {\n  padding-top: 8px !important;\n}\n\n.pt-4[_ngcontent-%COMP%] {\n  padding-top: 4px;\n}\n\n.pt-2[_ngcontent-%COMP%] {\n  padding-top: 2px;\n}\n\n.pt-0[_ngcontent-%COMP%] {\n  padding-top: 0px !important;\n}\n\n.pb-28[_ngcontent-%COMP%] {\n  padding-bottom: 28px !important;\n}\n\n.pb-16[_ngcontent-%COMP%] {\n  padding-bottom: 16px !important;\n}\n\n.pv-4[_ngcontent-%COMP%] {\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n\n.pv-8[_ngcontent-%COMP%] {\n  padding-top: 8px !important;\n  padding-bottom: 8px !important;\n}\n\n.pv-10[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.pv-20[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.pv-14[_ngcontent-%COMP%] {\n  padding-top: 14px !important;\n  padding-bottom: 14px !important;\n}\n\n.pv-16[_ngcontent-%COMP%] {\n  padding-top: 16px !important;\n  padding-bottom: 16px !important;\n}\n\n.ph-5[_ngcontent-%COMP%] {\n  padding-right: 5px !important;\n  padding-left: 5px !important;\n}\n\n.ph-16[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n.ph-8[_ngcontent-%COMP%] {\n  padding-left: 8px !important;\n  padding-right: 8px !important;\n}\n\n.ph-10[_ngcontent-%COMP%] {\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n}\n\n.ph-4[_ngcontent-%COMP%] {\n  padding-left: 4px;\n  padding-right: 4px;\n}\n\n.ph-32[_ngcontent-%COMP%] {\n  padding-left: 32px;\n  padding-right: 32px;\n}\n\n.ph-38[_ngcontent-%COMP%] {\n  padding-left: 38px;\n  padding-right: 38px;\n}\n\n.ph-44[_ngcontent-%COMP%] {\n  padding-left: 44px;\n  padding-right: 44px;\n}\n\n.bb[_ngcontent-%COMP%] {\n  border-bottom: 0.1px solid #d3d3d3;\n  border-right: 0.1px solid #d3d3d3;\n}\n\n.bc[_ngcontent-%COMP%] {\n  background-color: #f8fafd;\n}\n\n.bcw[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #323e4a !important;\n}\n\n\n\n\n\n.m-4[_ngcontent-%COMP%] {\n  margin: 4px !important;\n}\n\n.m-8[_ngcontent-%COMP%] {\n  margin: 8px !important;\n}\n\n.m-16[_ngcontent-%COMP%] {\n  margin: 16px !important;\n}\n\n.mr-20[_ngcontent-%COMP%] {\n  margin-right: 20px !important;\n}\n\n.mr-8[_ngcontent-%COMP%] {\n  margin-right: 8px !important;\n}\n\n.ml-20[_ngcontent-%COMP%] {\n  margin-left: 20px !important;\n}\n\n.ml-24[_ngcontent-%COMP%] {\n  margin-left: 24px !important;\n}\n\n.mt-4[_ngcontent-%COMP%] {\n  margin-top: 4px !important;\n}\n\n.mt-8[_ngcontent-%COMP%] {\n  margin-top: 8px !important;\n}\n\n.mt-16[_ngcontent-%COMP%] {\n  margin-top: 16px !important;\n}\n\n.mt-24[_ngcontent-%COMP%] {\n  margin-top: 24px !important;\n}\n\n.mt-38[_ngcontent-%COMP%] {\n  margin-top: 38px !important;\n}\n\n.mh-8[_ngcontent-%COMP%] {\n  margin-left: 8px !important;\n  margin-right: 8px !important;\n}\n\n.mh-16[_ngcontent-%COMP%] {\n  margin-left: 16px !important;\n  margin-right: 16px !important;\n}\n\n.mv-4[_ngcontent-%COMP%] {\n  margin-top: 4px !important;\n  margin-bottom: 4px !important;\n}\n\n.mv-16[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  margin-bottom: 16px;\n}\n\n.mv-24[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  margin-bottom: 24px;\n}\n\n.mh--16[_ngcontent-%COMP%] {\n  margin-left: -16px !important;\n  margin-right: -16px !important;\n}\n\n.mh-8[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n.w100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.w70[_ngcontent-%COMP%] {\n  width: 70%;\n}\n\n.w50[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.w30[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.pc1[_ngcontent-%COMP%] {\n  width: 44.5%;\n  height: 35px;\n  float: right;\n  border-left: 1px solid rgb(104, 103, 103);\n}\n\n.tabbed[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  \n  background-color: #f8fafd;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding-right: 28px;\n  padding-left: 32px;\n}\n\n.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  \n  display: none;\n}\n\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  list-style: none;\n  background-color: white;\n  height: 100%;\n  padding: 1% 0;\n  padding-left: 30px;\n  margin-left: -30px;\n  width: 113%;\n}\n\n.tabs[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.tab[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 10px;\n  padding-right: 12px;\n  color: #606670;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-right: 10px;\n  border-right: 1px solid black;\n}\n\n.tab[_ngcontent-%COMP%]:hover   label[_ngcontent-%COMP%] {\n  border-top-color: #333;\n  color: #333;\n}\n\n.tab-content[_ngcontent-%COMP%] {\n  display: none;\n  color: #777;\n  background: #f8fafd;\n  margin: 10px !important;\n}\n\n\n\n.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(1):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(1)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(2):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(2)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(3):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(3)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(4):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(4)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(5):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(5)   label[_ngcontent-%COMP%] {\n  color: #49a2d7;\n  margin-right: 10px;\n}\n\n.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(1):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(1), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(2):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(2), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(3):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(3), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(4):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(4) {\n  display: block;\n}\n\n.hhu[_ngcontent-%COMP%]:active, .hhu[_ngcontent-%COMP%]:focus {\n  border: 2px solid red;\n}\n\n.form[_ngcontent-%COMP%] {\n  margin-left: 38px !important;\n  margin-right: 5%;\n  top: 50%;\n  left: 50%;\n  height: 316px;\n  background-color: white;\n  border: 1px dashed rgba(0, 0, 0, 0.4);\n}\n\n.form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif !important;\n  text-align: center;\n  line-height: 30px;\n  color: #303030;\n}\n\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-family: \"EuropaNuova-Regular\", sans-serif !important;\n  position: absolute;\n  margin: 0;\n  width: 89%;\n  height: 313px;\n  padding: 0;\n  outline: none;\n  cursor: pointer;\n  opacity: 0;\n}\n\n.form[_ngcontent-%COMP%]   .form_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  margin-left: 36.5%;\n  height: 42px;\n  cursor: pointer;\n  width: 160px;\n  background-color: #49a2d7;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #149174;\n  color: #0c5645;\n}\n\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  border: 0;\n}\n\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.xbutton[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #49a2d7;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.ybutton[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #0c354d;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.zbutton[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #947551;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.border1[_ngcontent-%COMP%] {\n  border-left: 3px solid #174d72;\n}\n\n.border2[_ngcontent-%COMP%] {\n  border-left: 3px solid #5fe6e7;\n}\n\n.border3[_ngcontent-%COMP%] {\n  border-left: 3px solid #e7845f;\n}\n\n.form-wrapper1[_ngcontent-%COMP%] {\n  flex-direction: column;\n  width: 100%;\n}\n\n.form-wrapper1[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 5.5%;\n}\n\n.form-wrapper1.td[_ngcontent-%COMP%] {\n  width: 100%;\n  width: 7%;\n}\n\n.full-input[_ngcontent-%COMP%] {\n  margin-left: 18px;\n  margin-bottom: 10px;\n  display: inline-block;\n  padding: 3px;\n  height: 74px;\n  width: 177px;\n  background-color: white;\n  border-radius: 5px;\n  box-shadow: 4px 4px 8px 4px #eeeefa;\n}\n\n.smalll-input[_ngcontent-%COMP%] {\n  width: 160px !important;\n  outline: none;\n  border: none;\n  display: block;\n  border-radius: 4px;\n  border: 1px solid #d5dbe8;\n  height: 35px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  padding: 5px 0px 5px 5px;\n  margin-bottom: 0px !important;\n  font-size: 12px;\n  font-weight: 500;\n  color: #72768a;\n}\n\n.sh1[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  margin-top: 15px;\n  font-size: 16px;\n  color: #606670;\n}\n\n.ss[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n\n#customers[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100% !important;\n  margin-left: 19px !important;\n  border-right: 1px solid #ddd;\n  border-left: 1px solid #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  height: 52px !important;\n  text-align: left;\n  font-weight: 300;\n  background-color: #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 52px !important;\n}\n\n.tab1[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  \n  display: inline-block;\n  height: 17px;\n  width: 17px;\n  color: #49a2d7;\n  margin-bottom: 10px;\n}\n\n.tab1[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + input[_ngcontent-%COMP%] {\n  background-color: #bfb;\n  border-color: #4c4;\n}\n\n.label1[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 10px;\n  padding-right: 12px;\n  color: #606670;\n  font-size: 12px;\n  letter-spacing: 1px;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-left: 30px;\n}\n\n.tab1[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.at[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding-right: 20px;\n  padding-left: 10px;\n}\n\n.ctb[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin-left: 210px;\n  background-color: #49a2d7;\n  padding: 12px 30px 11px 30px;\n  color: white;\n  border-radius: 4px;\n  cursor: pointer;\n  font-weight: 500;\n}\n\n.radio1[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  \n  display: inline-block;\n  height: 17px;\n  width: 17px;\n  color: #49a2d7;\n  margin-bottom: 10px;\n  border: 2px solid #49a2d7;\n}\n\n.radio1[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + input[_ngcontent-%COMP%] {\n  background-color: #bfb;\n  border-color: #4c4;\n}\n\n.label1[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 10px;\n  padding-right: 12px;\n  color: #606670;\n  font-size: 12px;\n  letter-spacing: 1px;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-left: 30px;\n}\n\n.radio1[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.stp1[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 500;\n  margin-bottom: 10px;\n  color: black;\n}\n\n.stp2[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin-bottom: 10px;\n  color: black;\n}\n\n.stp3[_ngcontent-%COMP%] {\n  color: #4a4a4a;\n  font-size: 14px;\n}\n\n.of1[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  font: 16px/26px Georgia, Garamond, Serif;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.side_document_list[_ngcontent-%COMP%] {\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 170vh;\n  border-right: 0.3px solid rgba(0, 0, 0, 0.2);\n}\n\n.profile_class[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  border-bottom: 0.3px solid rgba(0, 0, 0, 0.2);\n  padding: 3% 6%;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.activeBtn[_ngcontent-%COMP%] {\n  background-color: #f8fafd;\n  border-left: 8px solid rgb(61, 116, 197);\n}\n\n.table_top[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 29.55% 33% 30% 6%;\n  border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);\n  align-items: center;\n}\n\n.invoices_tab[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  height: 100vh;\n  background-color: #f8fafd;\n}\n\n.invoices_inner[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #f8fafd;\n}\n\n.inner_tab_content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  background-color: white;\n}\n\n.invoice_head[_ngcontent-%COMP%] {\n  width: 95%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 5%;\n}\n\n.serial_detail[_ngcontent-%COMP%] {\n  width: 93%;\n  margin-top: 10px;\n  display: flex;\n  justify-content: right;\n  text-align: right;\n  font-weight: 500;\n}\n\n.transaction_tab[_ngcontent-%COMP%] {\n  width: 770px;\n  height: 1387px;\n}\n\n.form_inner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  justify-content: center;\n}\n\n.opt[_ngcontent-%COMP%] {\n  background-color: #49a2d7;\n  padding: 0 3%;\n  height: 42px;\n  box-shadow: 4px 0px 7px #109cf1;\n  border: none;\n  color: white;\n}\n\n#container[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n.savBtn[_ngcontent-%COMP%] {\n  background-color: #49A2D7;\n  color: white;\n  border: 1px solid rgba(0, 0, 0, 0.4);\n  font-size: 14px;\n  cursor: pointer;\n  border-radius: 2px;\n}\n\n.content-wrap[_ngcontent-%COMP%] {\n  z-index: 0;\n  height: 100vh;\n  position: absolute;\n  left: 260px;\n  margin: auto;\n  width: 78vw;\n}\n\n#container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  min-height: 100%;\n}\n\ntable[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.analytics[_ngcontent-%COMP%]   .support[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.header-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid black;\n  width: 99%;\n}\n\n.analytics[_ngcontent-%COMP%]   .analytics-side[_ngcontent-%COMP%] {\n  padding-left: 0px !important;\n}\n\n.middle_datatable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  font-family: Poppins, sans-serif;\n  color: #0a3049;\n}\n\n.middle_datatable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #0a3049;\n}\n\n.middle_datatable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 11px !important;\n  color: #777;\n  font-family: Poppins, sans-serif;\n  font-weight: 500;\n}\n\n.heading_common_tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  font-size: 18px;\n  font-weight: 600;\n  color: #333;\n  padding: 13px 0 12px 0;\n}\n\n.top_exl_ddivs[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 15px 0;\n}\n\n.content[_ngcontent-%COMP%] {\n  min-height: inherit !important;\n}\n\n.view_edit_button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #777;\n  padding: 0 4px;\n  font-size: 15px;\n  display: inline-block;\n}\n\n.view_edit_button[_ngcontent-%COMP%]   .savBtn[_ngcontent-%COMP%]   .fa.fa-floppy-o[_ngcontent-%COMP%]:before {\n  color: green;\n  font-size: 16px;\n}\n\n.none[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.7;\n}"]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7976);
/* harmony import */ var _confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../confirm-dialog/confirm-dialog.service */ 12579);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 93329);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ 35581);
/* harmony import */ var _shared_Data_Servies_shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared-Data-Servies/shared-data.service */ 10241);
/* harmony import */ var _shared_home_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-home.module */ 69408);
/* harmony import */ var _view_document_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-document.component */ 71828);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 64537);










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