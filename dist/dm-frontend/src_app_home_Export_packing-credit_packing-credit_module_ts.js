"use strict";
(self["webpackChunkdm_frontend"] = self["webpackChunkdm_frontend"] || []).push([["src_app_home_Export_packing-credit_packing-credit_module_ts"],{

/***/ 11072:
/*!************************************************************************!*\
  !*** ./src/app/home/Export/packing-credit/packing-credit.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PackingCreditComponent": () => (/* binding */ PackingCreditComponent)
/* harmony export */ });
/* harmony import */ var _service_document_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../service/document.service */ 76852);
/* harmony import */ var _inward_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../inward.json */ 77485);
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/user.service */ 84981);
/* harmony import */ var _confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../confirm-dialog/confirm-dialog.service */ 12579);
/* harmony import */ var src_app_service_window_information_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/window-information.service */ 23087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);



















const _c0 = function () {
  return ["/home/upload"];
};

function PackingCreditComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Packing Credit Request");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "select", 9)(7, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Today");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " Type: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "select", 11)(11, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 12)(14, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, " Upload New ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](1, _c0));
  }
}

function PackingCreditComponent_div_5_div_13_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 30)(1, "label", 31)(2, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function PackingCreditComponent_div_5_div_13_div_3_Template_input_change_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const item_r5 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.changeCheckbox1(item_r5.pi_poNo));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate5"](" ", item_r5.pi_poNo, " [Amount: ", item_r5.amount, ", Date: ", item_r5.date, ", Bene Name: ", item_r5.benneName, ", Payment Term: ", item_r5.paymentTerm, " ] ");
  }
}

function PackingCreditComponent_div_5_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Select PI/PO numbers*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, PackingCreditComponent_div_5_div_13_div_3_Template, 4, 5, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.item1);
  }
}

function PackingCreditComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div")(2, "div", 14)(3, "div", 15)(4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Running PCFC?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function PackingCreditComponent_div_5_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.Question1 = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function PackingCreditComponent_div_5_Template_input_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.Question1 = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, PackingCreditComponent_div_5_div_13_Template, 4, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 14)(15, "div", 15)(16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Incoterm");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function PackingCreditComponent_div_5_Template_input_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r12.Question2 = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "FOB");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function PackingCreditComponent_div_5_Template_input_ngModelChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.Question2 = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "CIF");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, " Select a bank* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 22)(28, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModel", function PackingCreditComponent_div_5_Template_input_ngModel_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r14.myRadio);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Yes Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 22)(32, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModel", function PackingCreditComponent_div_5_Template_input_ngModel_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r15.myRadio);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Axis Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](36, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Any Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](39, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PackingCreditComponent_div_5_Template_button_click_41_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r16.generateDoc1());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, " Generate Document ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r1.Question1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r1.Question1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.Question1 == "no");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r1.Question2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r1.Question2);
  }
}

function PackingCreditComponent_div_6_div_6_div_109_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r20.arr[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r20.arr[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r20.arr[2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r20.arr[3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r20.arr[4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r20.arr[5]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r20.arr[6]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r20.arr[7]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r20.arr[8]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r20.arr[9]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r20.arr[10]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r20.arr[11]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r20.arr[12]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r20.arr[13]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r20.arr[14]);
  }
}

function PackingCreditComponent_div_6_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 37)(1, "div", 38)(2, "div")(3, "p", 39)(4, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "EPC / PCFC request letter (service export)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 41)(7, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "To, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " The Manager ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, " YES Bank Ltd., ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, " Branch address");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "span", 45)(19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Sub: Request for grant of EPC / PCFC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, " We enclose the following LC / purchase order as underlying for EPC / PCFC and request you to grant us EPC / PCFC of ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, " and credit the same to our account number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "for the purpose of payment to supplier. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "table")(32, "tr", 47)(33, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "LC order no & date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Loan requested up to (Date): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](38, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "tr", 50)(40, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Buyer:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](42, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "Type of service:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](45, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "tr", 50)(47, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](49, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "IEC:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](52, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "tr", 50)(54, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "Last date of service:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](56, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "A/c no to be debit for all charges: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](59, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](60, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "p")(62, "b", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "Declaration \u2013 Cum \u2013 Undertaking:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, " \uF0B7 We undertake to liquidate the above loan by submitting to you the relative export documents bills within the validity of LC / order or within maturity date of advance whichever is earlier. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](66, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, " \uF0B7 We are not in the caution list of RBI / ECGC. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](68, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](69, " \uF0B7 We will export the services as per the export schedule of the order / LC original copy enclosed without any delay. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](70, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, " \uF0B7 We are agreeable for commercial rate of interest in case of delay in liquidating the EPC within validity of order/ LC. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](72, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, " \uF0B7 We undertake that we have not taken any EPC from any other bank for this particular order. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](74, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, " \uF0B7 The proposal is a genuine case of export of services. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](76, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77, " \uF0B7 The item of service export is covered under Appendix 10 of HBPv1. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](78, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79, " \uF0B7 We are registered with \u25A1 Electronic and software EPC \u25A1 Services EPC \u25A1 Federation of Indian Export Organizations, as applicable. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](80, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81, " \uF0B7 There is an Export Contract for the export of the service. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](82, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](83, " \uF0B7 There is a time lag between the outlay of working capital expense and actual receipt of payment from the service consumer or his principal abroad. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](84, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](85, " \uF0B7 There is a valid Working Capital gap i.e. service is provided first while the payment is received some time after an invoice is raised. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](86, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](87, " \uF0B7 Inward remittance would be received in Foreign Exchange. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](88, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](89, " \uF0B7 We will raise the invoice as per the contract. Where payment is received from overseas party, we would utilize the funds to repay the export credit availed of from the bank. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](90, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "p")(92, "b", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](93, "Enclosed documents:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](94, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](95, " \u25A1 Purchase Order \u25A1 Letter of credit \u25A1 Labor Bill \u25A1 Any other ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "p")(97, "b", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](98, "Declaration \u2013 Cum \u2013 Undertaking:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](99, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100, " I/We hereby declare that the transaction, details of which are specifically mentioned in this request letter does not involve, and / is not designed for the purpose of any contravention or evasion of the provisions of FEMA 1999 or of any rules, regulations, notifications, directions or order made there under. I/We also hereby agree and undertake to give such information / documents as will reasonably satisfy you about this transaction in terms of the above declaration. I/We also understand that if I/We refuse to comply with any such requirement or make only unsatisfactory compliance therewith, the bank shall refuse in writing to undertake the transaction and shall, if it has reason to believe that any contravention / evasion is contemplated by me / us, report the matter to Reserve Bank of India. I/We further declare that the undersigned has / have the authority to give this declaration and undertaking on behalf of the company. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](101, "br")(102, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](103, " I/we also declare that the transaction does not have linkage with any Specially Designated Nationals and Blocked Persons (SDN)/countries listed under OFAC in any manner. If the transaction involves linkage with any Specially Designated Nationals and Blocked Persons (SDN)/countries listed under OFAC in any manner, I/we undertake not to hold YES Bank Limited responsible for any of its action or inaction in respect of the OFAC-linked transactions. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](104, "br")(105, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](106, " Note \u2013 Default GST registration details as updated in the Bank records will be considered for the said request. In case the no. to be considered is different, please notify below. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](108, " GSTIN Registration no. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](109, PackingCreditComponent_div_6_div_6_div_109_Template, 31, 15, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "div", 53)(111, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](112, " Yours faithfully, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](113, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](114, " Authorized Signatory ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](115, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](116, " Company Stamp / Seal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "div")(118, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](119, " Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](120, "span", 55)(121, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](122, " Place: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](123, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r17.totalAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r17.arr.length == 15);
  }
}

function PackingCreditComponent_div_6_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 58)(1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PackingCreditComponent_div_6_div_7_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r21.exportAsPDF1());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Proceed to Preview ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "Button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PackingCreditComponent_div_6_div_7_Template_Button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r23.onBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}

function PackingCreditComponent_div_6_div_8_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "PI/PO Documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function PackingCreditComponent_div_6_div_8_div_13_iframe_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "iframe", 66);
  }

  if (rf & 2) {
    const pipo_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", pipo_r27, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeResourceUrl"]);
  }
}

function PackingCreditComponent_div_6_div_8_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, PackingCreditComponent_div_6_div_8_div_13_iframe_1_Template, 1, 1, "iframe", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r25.mainDoc1);
  }
}

function PackingCreditComponent_div_6_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Setup: 3 Preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PackingCreditComponent_div_6_div_8_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r28.downloadPDF());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Send it via Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Generated Document ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "iframe", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, PackingCreditComponent_div_6_div_8_span_12_Template, 2, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, PackingCreditComponent_div_6_div_8_div_13_Template, 2, 1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "br")(15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PackingCreditComponent_div_6_div_8_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r30.edit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PackingCreditComponent_div_6_div_8_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r31.doneDox());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r19.data8, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeResourceUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r19.mainDoc1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r19.mainDoc1);
  }
}

function PackingCreditComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 33)(2, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PackingCreditComponent_div_6_Template_img_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r32.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, PackingCreditComponent_div_6_div_6_Template, 124, 2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, PackingCreditComponent_div_6_div_7_Template, 5, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, PackingCreditComponent_div_6_div_8_Template, 20, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.isProceed == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.isProceed == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.isProceed == true);
  }
}

let PackingCreditComponent = /*#__PURE__*/(() => {
  class PackingCreditComponent {
    constructor(documentService, router, sanitizer, route, toastr, userService, confirmDialogService, wininfo) {
      this.documentService = documentService;
      this.router = router;
      this.sanitizer = sanitizer;
      this.route = route;
      this.toastr = toastr;
      this.userService = userService;
      this.confirmDialogService = confirmDialogService;
      this.wininfo = wininfo;
      this.select = false;
      this.export = false;
      this.import = false;
      this.showPdf = false;
      this.greaterAmount = 0;
      this.selectedDoc = "";
      this.Question1 = '';
      this.Question2 = '';
      this.Question3 = '';
      this.Question4 = '';
      this.Question5 = '';
      this.Question6 = '';
      this.Question7 = '';
      this.Question8 = '';
      this.Question9 = '';
      this.Question10 = '';
      this.allTransactions = [];
      this.purposeSelect = false;
      this.selectPurpose = false;
      this.selectedPurpose = [];
      this.pgNumber = 0;
      this.pcNumber = 0;
      this.selectedPipo = false;
      this.selectedRowSb = false;
      this.proceed = true;
      this.pipoArray = [];
      this.sbArray = [];
      this.tryArray = [];
      this.generate0 = false;
      this.generate3 = false;
      this.generate1 = false;
      this.generate2 = false;
      this.generate4 = false;
      this.generate5 = false;
      this.generate6 = false;
      this.data7 = [];
      this.doc = [];
      this.generatePurpose = [];
      this.sbPurpose = [];
      this.sbPurpose1 = [];
      this.importPurpose = [];
      this.noImportPurpose = [];
      this.donePurpose = [];
      this.doneSbPurpose = [];
      this.doneImportPurpose = [];
      this.mainDoc = [];
      this.data9 = [];
      this.sbPurposeDone1 = [];
      this.item4 = [];
      this.item5 = [];
      this.newTask = [];
      this.zToggle = [];
      this.isGenerate = false;
      this.isProceed = false;
      this.arr = [];
      console.log("hello");
    }

    ngOnInit() {
      this.wininfo.set_controller_of_width(270, '.content-wrap'); //window.location.reload();

      console.log(_inward_json__WEBPACK_IMPORTED_MODULE_1__);
      this.jsondata = _inward_json__WEBPACK_IMPORTED_MODULE_1__;
      console.log(this.jsondata[0].purpose);
      this.dataJson = this.jsondata;
      this.route.params.subscribe(params => {
        this.file = this.route.snapshot.params['file'];
        this.showInvoice = false;
        console.log("hello");
      }); // this.documentService.getMaster(1).subscribe(
      //   (res: any) => {
      //     console.log(res), (this.item1 = res.data);
      //   },
      //   (err) => console.log(err)
      // );

      this.documentService.getPipo().subscribe(res => {
        console.log("HEre Response", res), this.item1 = res.data;
      }, err => console.log(err));
      this.documentService.getThird().subscribe(res => {
        console.log("HEre Response Third", res);
        this.item5 = res.data;

        for (let value of this.item5) {
          if (value['file'] == 'export') {
            this.item4.push(value);
            console.log('awwww', this.item4);
          }
        }
      }, err => console.log(err));
      this.userService.getTeam().subscribe(data => {
        console.log("king123");
        console.log(data['data'][0]);
        this.item3 = data['data'][0];
        console.log(this.item3);
        this.arr = this.item3.gst.split('');
        console.log(this.arr); //this.letterHead = data['data'][0].file[0]["Letter Head"]
        //this.router.navigate(['/addMember'], { queryParams: { id: data['data']._id } })
      }, error => {
        console.log("error");
      });

      if (this.documentService.task) {
        this.generate = true;
        this.isGenerate = true;

        if (this.documentService.task.task[0].pipoUrls) {
          let k = 0;
          let gene = [];

          for (let value of this.documentService.task.task[0].pipoUrls) {
            let r = value.changingThisBreaksApplicationSecurity;
            gene.push(this.sanitizer.bypassSecurityTrustResourceUrl(r));
            k++;
          }

          this.mainDoc1 = gene;
          this.pipoArray = this.documentService.task.task[0].pipoNumbers;
        }
      }
    }

    changeCheckbox1(value) {
      let j = this.pipoArray.indexOf(value);

      if (j == -1) {
        this.pipoArray.push(value);
      } else {
        this.pipoArray.splice(j, 1);
      }

      console.log(this.pipoArray);
    }

    changeCheckbox2(value) {
      let j = this.tryArray.indexOf(value);

      if (j == -1) {
        this.tryArray.push(value);
      } else {
        this.tryArray.splice(j, 1);
      }

      console.log(this.tryArray);
    }

    generateDoc1() {
      //console.log(code, j)
      this.generate = true;
      this.isGenerate = true;
      let generateDoc2 = [];
      let amount = 0;

      if (this.Question1 == 'no') {
        for (let item of this.item1) {
          for (let sb of this.pipoArray) {
            if (item.pi_poNo === sb) {
              generateDoc2.push(this.sanitizer.bypassSecurityTrustResourceUrl(item.doc));
              amount = amount + parseInt(item.amount);
            }
          }
        }

        this.totalAmount = amount;
        console.log(this.totalAmount);
        this.mainDoc1 = generateDoc2;
      }

      if (this.Question1 == 'no') {
        console.log('hhshshs');

        if (this.Question2 == 'fob') {
          console.log('1');
          this.totalAmount = this.totalAmount * 0.90;
        } else if (this.Question2 == 'cif') {
          console.log('2');
          this.totalAmount = this.totalAmount * 0.75;
        }
      } else if (this.Question1 == 'yes') {
        console.log('3');
        this.totalAmount = '';
      }

      this.newTask[0] = {
        pipoNumbers: this.pipoArray,
        pipoUrls: this.mainDoc1,
        purposeCode: '',
        bankRef: '',
        amount: this.totalAmount
      };
      console.log(this.totalAmount);
    }

    onBack() {
      this.isGenerate = false;
      this.pipoArray = [];
    }

    doneDox() {
      console.log(this.newTask);

      if (this.documentService.draft) {
        this.documentService.updateExportTask({
          task: this.newTask,
          completed: 'yes',
          fileType: 'PCR'
        }, this.documentService.task._id).subscribe(data => {
          console.log("king123");
          console.log(data);
          this.documentService.draft = false;
          this.documentService.task.id = '';
          this.isDoneAll = true;
          this.toastr.success('Task saved as completed successfully!');
          this.router.navigate(["/home/dashboardTask"]); //this.router.navigate(['/login'], { queryParams: { registered: true }});
        }, error => {
          console.log("error");
        });
      } else {
        this.documentService.addExportTask({
          task: this.newTask,
          completed: 'yes',
          fileType: 'PCR'
        }).subscribe(res => {
          this.isDoneAll = true;
          this.toastr.success('Task saved successfully!');
          console.log("Transaction Saved");
          this.router.navigate(["/home/dashboardTask"]);
        }, err => {
          this.toastr.error('Error!');
          console.log("Error saving the transaction");
        });
      }
    }

    exportAsPDF1() {
      if (this.Question7 == 'yes') {
        this.lc = 'lc';
      } else if (this.Question7 == 'no') {
        this.lc = 'nonLc';
      }

      this.scrutiny = this.Question8;
      this.withDiscount = this.Question9;
      const height = Math.round($("#mainId").outerHeight() * 0.0104166667 * 10) / 10;
      console.log($("#mainId").html());
      this.documentService.getPDF({
        data: $("#mainId").html(),
        filename: "Final Report",
        format: {
          paperWidth: 7,
          paperHeight: height + 5,
          marginTop: 0,
          marginBottom: 0,
          marginLeft: 0,
          marginRight: 0
        },
        template: "./app/modules/pdfGenerationModule/pdfTemplate/finalreport.ejs"
      }).subscribe(data => {
        if (data && data.success) {
          console.log(data);
          this.data4 = data;
          this.data5 = data.file.replace('application/octet-stream', 'application/pdf');
          console.log(this.data5);
          this.data6 = this.sanitizer.bypassSecurityTrustResourceUrl(this.data5);
          console.log(this.data6);
          this.data8 = this.data6; //this.newTask.url1 = this.data5;

          this.done = true;
          this.newTask[0] = {
            pipoNumbers: this.pipoArray,
            pipoUrls: this.mainDoc1,
            purposeCode: '',
            bankRef: '',
            generateDoc1: this.data8,
            amount: this.totalAmount
          };
          this.isProceed = true;
        }
      });
    }

    sendMail() {
      let val = {
        file: this.bankRef
      };
      this.documentService.exportEmail({
        task: val
      }).subscribe(res2 => {
        this.toastr.success('Message sent successfully!');
        console.log("Email Sent"); //this.router.navigate(["/home/advance-outward-remittance"]);
      }, err => console.log("ERROR"));
    }

    change(e) {
      console.log(e.target.value);
      this.advanceRef = e.target.value;
    }

    edit() {}

    downloadPDF() {}

    ngOnDestroy() {
      console.log("Inside draft");

      if (!this.isDoneAll && this.generate && !this.documentService.draft) {
        this.confirmDialogService.confirmThis('Do you want to save this task?', () => {
          if (this.isProceed) {
            this.documentService.addExportTask({
              task: this.newTask,
              completed: 'yes',
              fileType: 'PCR'
            }).subscribe(res => {
              this.toastr.success('Saved the transaction as completed');
              console.log("Transaction Saved"); //this.router.navigate(["/home/dashboardNew"]);
            }, err => {
              this.toastr.error('Error!');
              console.log("Error saving the transaction");
            });
          } else {
            this.documentService.addExportTask({
              task: this.newTask,
              completed: 'no',
              fileType: 'PCR'
            }).subscribe(res => {
              this.toastr.success('Saved the transaction as draft');
              console.log("Transaction Saved"); //this.router.navigate(["/home/dashboardNew"]);
            }, err => {
              this.toastr.error('Error!');
              console.log("Error saving the transaction");
            });
          }
        }, () => {
          console.log("no");
        });
      }
    }

    goBack() {
      this.isGenerate = false;
      this.generate = false;
    }

  }

  PackingCreditComponent.ɵfac = function PackingCreditComponent_Factory(t) {
    return new (t || PackingCreditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_document_service__WEBPACK_IMPORTED_MODULE_0__.DocumentService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_3__.ConfirmDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_window_information_service__WEBPACK_IMPORTED_MODULE_4__.WindowInformationService));
  };

  PackingCreditComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: PackingCreditComponent,
    selectors: [["app-packing-credit"]],
    decls: 7,
    vars: 3,
    consts: [[1, "content-wrap", "pb-2", "scroll-bar-main"], ["id", "content", "role", "main", 1, "content", "table-padding"], ["class", "header-panel", 4, "ngIf"], [1, "analytics", "pt-4"], [4, "ngIf"], [1, "header-panel"], [2, "display", "flex", "align-items", "center", "margin-left", "23px"], [1, "heading"], [1, "dropdown"], ["name", "subject", "id", "subject"], ["value", "", "selected", "selected"], ["name", "topic", "id", "topic"], [2, "padding-top", "0.7%"], [1, "upload-button", 3, "routerLink"], [1, "form-group"], [1, "form-group", "col-md-12", 2, "margin-left", "11px"], ["type", "radio", "name", "Question1", "value", "yes", 2, "margin-left", "10px", 3, "ngModel", "ngModelChange"], [2, "margin-left", "10px"], ["type", "radio", "name", "Question1", "value", "no", 2, "margin-left", "10px", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "Question2", "value", "fob", 2, "margin-left", "10px", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "Question2", "value", "cif", 2, "margin-left", "10px", 3, "ngModel", "ngModelChange"], [2, "margin-left", "27px"], [2, "display", "flex", "align-items", "center"], ["type", "radio", "id", "options1", "value", "yesBank", 1, "circular_input", 2, "margin-left", "10px", 3, "ngModel"], ["for", "male", 1, "label1", 2, "flex-direction", "row"], ["type", "radio", "id", "options2", "value", "axisBank", 1, "circular_input", 2, "margin-left", "10px", 3, "ngModel"], ["for", "female", 1, "label1", 2, "flex-direction", "row"], ["type", "radio", "name", "bank", "value", "Any Bank", 1, "circular_input", 2, "margin-left", "10px"], [1, "opt", 2, "margin-right", "25px", "line-height", "7px", "padding-top", "10px", "padding-bottom", "10px", 3, "click"], ["style", "margin-left:10px", "s", "", "class", "form-check", 4, "ngFor", "ngForOf"], ["s", "", 1, "form-check", 2, "margin-left", "10px"], [1, "form-check-label"], ["type", "checkbox", 1, "form-check-input", 3, "change"], [2, "margin", "10px"], ["src", "../../../../assets/back.png", 2, "width", "20px", "height", "20px", 3, "click"], ["id", "mainId", "class", "bc", 4, "ngIf"], ["style", "\n                                                                            float: left;\n                                                                            display: block;\n                                                                            width: 78%;\n                                                                            margin-top: 40px;\n                                                                            margin-left: 43px;display: flex; align-items: center;", 4, "ngIf"], ["id", "mainId", 1, "bc"], ["id", "first", 1, "bc"], [1, "heading", 2, "align-items", "center", "text-align", "center"], [2, "border-bottom", "1px solid black"], [1, "bc", 2, "margin-left", "40px", "margin-top", "20px", "width", "90%"], [2, "text-align", "right"], ["contenteditable", "true", 2, "outline", "none", "display", "inline-block", "width", "150px", "border-bottom", "1px solid black"], [2, "width", "80%", "margin-top", "-20px"], ["contenteditable", "true", 2, "outline", "none", "display", "inline-block", "width", "150px", "border-bottom", "1px solid #000000"], [2, "margin-top", "10px"], [1, "border1"], [1, "wtd3", "border1", 2, "width", "200px"], [1, "wtd3", "border1", 2, "width", "250px"], [1, "wtd3", "border1"], [1, "wtd3", "border1", 2, "width", "270px"], [2, "margin-bottom", "0px"], [2, "margin-top", "20px"], [2, "text-align", "end", "margin-top", "-50px"], ["contenteditable", "true", 2, "outline", "none", "display", "inline-block", "width", "100px", "border-bottom", "1px solid black"], ["contenteditable", "true", 2, "outline", "none", "display", "inline-block", "width", "20px", "border-bottom", "1px solid black", "border-top", "1px solid black", "border-left", "1px solid black"], ["contenteditable", "true", 2, "outline", "none", "display", "inline-block", "width", "20px", "border-bottom", "1px solid black", "border-top", "1px solid black", "border-left", "1px solid black", "border-right", "1px solid black"], [2, "float", "left", "display", "block", "width", "78%", "margin-top", "40px", "margin-left", "43px", "display", "flex", "align-items", "center"], ["title", "Share As PDF", 1, "button1", 2, "flex-direction", "row", 3, "click"], [1, "button1", 2, "flex-direction", "row", "margin-left", "10px", 3, "click"], [1, "button1", 2, "margin-right", "10px", 3, "click"], [1, "button1", 2, "margin-bottom", "40px"], ["height", "500px", "width", "400px", 3, "src"], ["style", "display: flex; align-items: center;", 4, "ngIf"], ["style", "flex-direction:row;", "height", "500px", "width", "400px", 3, "src", 4, "ngFor", "ngForOf"], ["height", "500px", "width", "400px", 2, "flex-direction", "row", 3, "src"]],
    template: function PackingCreditComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, PackingCreditComponent_div_2_Template, 16, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3)(4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, PackingCreditComponent_div_5_Template, 43, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, PackingCreditComponent_div_6_Template, 9, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.showInvoice);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isGenerate);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isGenerate);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink],
    styles: ["*[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.heading[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 20px;\n  font-weight: 700;\n  color: #323e4a;\n}\n\n.dropdown[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.table-heading[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 500;\n  color: #747474;\n}\n\n.box-shadow[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n\n.table-padding[_ngcontent-%COMP%] {\n  background: white !important;\n  margin-top: 0px;\n}\n\n.upload-button[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 400;\n  border: none;\n  float: right;\n  margin-top: -12px;\n  margin-right: 30px;\n  height: 42px;\n  width: 160px;\n  background-color: #49a2d7;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n}\n\nbutton[_ngcontent-%COMP%] {\n  outline: none;\n}\n\n.table-row[_ngcontent-%COMP%] {\n  background-color: #ffffff !important;\n  color: #707683;\n}\n\n.table-row[_ngcontent-%COMP%]:hover {\n  background: #f6f9ff !important;\n}\n\n.columH[_ngcontent-%COMP%]:hover {\n  background: #f6f9ff !important;\n}\n\n.columH[_ngcontent-%COMP%] {\n  border-left: 0.1px solid #d3d3d3;\n  border-right: 0.1px solid #d3d3d3;\n  padding: 5px;\n  height: 35px;\n}\n\nselect[_ngcontent-%COMP%] {\n  text-decoration: none;\n  border: none;\n  background: none;\n  color: #49a2d7;\n}\n\nselect[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.rect[_ngcontent-%COMP%] {\n  text-align: right;\n  min-width: 80px !important;\n}\n\n.sb-no[_ngcontent-%COMP%] {\n  color: #49a2d7;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  vertical-align: middle !important;\n}\n\n.image[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  margin-top: 12fvpx;\n}\n\n.image2[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  margin-left: -13px;\n}\n\n.form[_ngcontent-%COMP%] {\n  margin-left: 38px !important;\n  margin-right: 5%;\n  top: 50%;\n  left: 50%;\n  height: 316px;\n  background-color: white;\n  border: 1px dashed rgba(0, 0, 0, 0.4);\n}\n\n.form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif !important;\n  text-align: center;\n  line-height: 30px;\n  color: #303030;\n}\n\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-family: \"EuropaNuova-Regular\", sans-serif !important;\n  position: absolute;\n  margin: 0;\n  width: 89%;\n  height: 313px;\n  padding: 0;\n  outline: none;\n  cursor: pointer;\n  opacity: 0;\n}\n\n.form[_ngcontent-%COMP%]   .form_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  margin-left: 36.5%;\n  height: 42px;\n  cursor: pointer;\n  width: 160px;\n  background-color: #49a2d7;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #149174;\n  color: #0c5645;\n}\n\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  border: 0;\n}\n\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.xbutton[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #49a2d7;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.ybutton[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #0c354d;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.zbutton[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #947551;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.border2[_ngcontent-%COMP%] {\n  border-left: 3px solid #5fe6e7;\n}\n\n.border3[_ngcontent-%COMP%] {\n  border-left: 3px solid #e7845f;\n}\n\n.form-wrapper1[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.form-wrapper1[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 5.5%;\n}\n\n.form-wrapper1.td[_ngcontent-%COMP%] {\n  width: 100%;\n  width: 7%;\n}\n\n.full-input[_ngcontent-%COMP%] {\n  margin-left: 18px;\n  margin-bottom: 10px;\n  display: inline-block;\n  padding: 3px;\n  height: 74px;\n  width: 177px;\n  background-color: white;\n  border-radius: 5px;\n  box-shadow: 4px 4px 8px 4px #eeeefa;\n}\n\n.smalll-input[_ngcontent-%COMP%] {\n  width: 160px !important;\n  outline: none;\n  border: none;\n  display: block;\n  border-radius: 4px;\n  border: 1px solid #d5dbe8;\n  height: 35px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  padding: 5px 0px 5px 5px;\n  margin-bottom: 0px !important;\n  font-size: 12px;\n  font-weight: 500;\n  color: #72768a;\n}\n\n.sh1[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  margin-top: 15px;\n  font-size: 16px;\n  color: #606670;\n}\n\n.ss[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n\n#customers[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100% !important;\n  margin-left: 23px !important;\n  border-right: 1px solid #ddd;\n  border-left: 1px solid #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  height: 52px !important;\n  text-align: left;\n  font-weight: 300;\n  background-color: #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 52px !important;\n}\n\n.tab1[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  \n  display: inline-block;\n  height: 17px;\n  width: 17px;\n  color: #49a2d7;\n  margin-bottom: 10px;\n}\n\n.tab1[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + input[_ngcontent-%COMP%] {\n  background-color: #bfb;\n  border-color: #4c4;\n}\n\n.label1[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  padding-right: 12px;\n  color: #606670;\n  font-size: 12px;\n  letter-spacing: 1px;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-left: 15px;\n}\n\n.tab1[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.at[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding-right: 20px;\n  padding-left: 10px;\n}\n\n.ctb[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin-left: 210px;\n  background-color: #49a2d7;\n  padding: 12px 30px 11px 30px;\n  color: white;\n  border-radius: 4px;\n  cursor: pointer;\n  font-weight: 500;\n}\n\n.radio1[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  \n  display: inline-block;\n  height: 17px;\n  width: 17px;\n  color: #49a2d7;\n  border: 2px solid #49a2d7;\n}\n\n.radio1[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + input[_ngcontent-%COMP%] {\n  background-color: #bfb;\n  border-color: #4c4;\n}\n\n.label1[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 10px;\n  padding-right: 12px;\n  color: #606670;\n  font-size: 12px;\n  letter-spacing: 1px;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-left: 15px;\n}\n\n.radio1[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.stp1[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 500;\n  margin-bottom: 10px;\n  color: black;\n}\n\n.stp2[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin-bottom: 10px;\n  color: black;\n}\n\n.stp3[_ngcontent-%COMP%] {\n  color: #4a4a4a;\n  font-size: 14px;\n}\n\n.of1[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  font: 16px/26px Georgia, Garamond, Serif;\n  overflow: auto;\n}\n\n\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.side_document_list[_ngcontent-%COMP%] {\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 170vh;\n  border-right: 0.3px solid rgba(0, 0, 0, 0.2);\n  margin-left: 27px;\n}\n\n.profile_class[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  border-bottom: 0.3px solid rgba(0, 0, 0, 0.2);\n  padding: 3% 6%;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.activeBtn[_ngcontent-%COMP%] {\n  background-color: #f8fafd;\n  border-left: 8px solid rgb(61, 116, 197);\n}\n\n.table_top[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 28.55% 33% 36%;\n  border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);\n  align-items: center;\n}\n\n.invoices_tab[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  height: 100vh;\n  background-color: #f8fafd;\n}\n\n.invoices_inner[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #f8fafd;\n}\n\n.inner_tab_content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  background-color: white;\n}\n\n.invoice_head[_ngcontent-%COMP%] {\n  width: 95%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 5%;\n}\n\n.serial_detail[_ngcontent-%COMP%] {\n  width: 93%;\n  margin-top: 10px;\n  display: flex;\n  justify-content: right;\n  text-align: right;\n  font-weight: 500;\n}\n\n.transaction_tab[_ngcontent-%COMP%] {\n  width: 770px;\n  height: 1387px;\n}\n\n.form_inner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  justify-content: center;\n}\n\n.opt[_ngcontent-%COMP%] {\n  background-color: #49a2d7;\n  padding: 0 1%;\n  height: 25px;\n  min-width: 100px;\n  box-shadow: 4px 0px 7px #109cf1;\n  border: none;\n  color: white;\n  border-radius: 20px;\n}\n\ninput[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder {\n  color: rgb(212, 29, 29);\n}\n\n.button[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 400;\n  min-width: 60px;\n  border: none;\n  padding: 5px;\n  background-color: transparent;\n  border-radius: 4px;\n  color: #0e8cd4;\n}\n\n.button1[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 400;\n  min-width: 60px;\n  border: none;\n  padding: 5px;\n  background-color: #0e8cd4;\n  border-radius: 4px;\n  color: white;\n}\n\n.class1[_ngcontent-%COMP%] {\n  background-color: #97cceb;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.flex-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background-color: #f1f1f1;\n  width: 130px;\n  margin: 10px;\n  text-align: center;\n  font-size: 24px;\n}\n\n.my_class[_ngcontent-%COMP%] {\n  background-color: #0e8cd4 !important;\n}\n\n.heading[_ngcontent-%COMP%] {\n  height: 25px;\n}\n\ntr.border1[_ngcontent-%COMP%] {\n  border: 1px solid #070707;\n}\n\ntd.border1[_ngcontent-%COMP%] {\n  border-right: 1px solid #070707;\n}\n\n.wtd[_ngcontent-%COMP%] {\n  width: 441px;\n}\n\n.wtd1[_ngcontent-%COMP%] {\n  width: 600px;\n}\n\n.wtd1[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.wtd2[_ngcontent-%COMP%] {\n  width: 900px;\n}\n\nspan[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  border-bottom: 1px solid black;\n}\n\n.spli[_ngcontent-%COMP%] {\n  border-bottom: 1px solid black !important;\n}\n\n.ins[_ngcontent-%COMP%] {\n  border: none;\n  border-bottom: 1px solid black;\n  width: 400px;\n}\n\n.wtd7[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100px !important;\n  border: none;\n}\n\n.wtd8[_ngcontent-%COMP%] {\n  width: 160px !important;\n}\n\n.ind[_ngcontent-%COMP%] {\n  border: none;\n  border-bottom: 1px solid black;\n}\n\n.sl[_ngcontent-%COMP%] {\n  width: 30px;\n}\n\n.sl3[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  width: 100px;\n}\n\n.sl3[_ngcontent-%COMP%] {\n  width: 120px;\n}\n\n.w1[_ngcontent-%COMP%] {\n  width: 500px;\n}\n\n.w1[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 216px;\n  border: none;\n}\n\n.pdf_heading[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.button1[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 400;\n  width: 170px;\n  border: none;\n  padding: 5px;\n  background-color: #49a2d7;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n}\n\n*[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.heading[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 20px;\n  font-weight: 700;\n  margin-left: 23px;\n  color: #323e4a;\n}\n\n.table-heading[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 500;\n  color: #747474;\n}\n\n.box-shadow[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n\n.table-padding[_ngcontent-%COMP%] {\n  background: white !important;\n  width: 100%;\n  border-radius: 10px;\n  box-shadow: 0px 0px 2px 3px rgba(0, 0, 0, 0.168627451);\n  max-height: 100%;\n}\n\n.upload-button[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n  font-weight: 100;\n  font-family: Poppins, sans-serif;\n  padding: 5px 8px;\n  font-size: 14px;\n  background-color: #49A2D7;\n  border: none;\n  border-radius: 5px;\n  margin-left: 2px;\n  margin-right: 2rem;\n}\n\nbutton[_ngcontent-%COMP%] {\n  outline: none;\n}\n\n.table-row[_ngcontent-%COMP%] {\n  background-color: #ffffff !important;\n  color: #707683;\n}\n\n.table-row[_ngcontent-%COMP%]:hover {\n  background: #f6f9ff !important;\n  border-left: 5px solid #49a2d7;\n}\n\nselect[_ngcontent-%COMP%] {\n  text-decoration: none;\n  border: none;\n  background: none;\n  color: #49a2d7;\n}\n\nselect[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.rect[_ngcontent-%COMP%] {\n  text-align: right;\n  min-width: 80px !important;\n}\n\n.sb-no[_ngcontent-%COMP%] {\n  color: #49a2d7;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  height: 68px;\n  vertical-align: middle !important;\n}\n\n.image[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  margin-top: 12fvpx;\n}\n\n.image2[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  margin-left: -13px;\n}\n\n.fl[_ngcontent-%COMP%] {\n  float: \"left\";\n}\n\n.fr[_ngcontent-%COMP%] {\n  float: \"right\";\n}\n\nspan.fs20[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\nspan.fs16[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\np.fs14[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.fs12[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.p-4[_ngcontent-%COMP%] {\n  padding: 4px;\n}\n\n.p-8[_ngcontent-%COMP%] {\n  z-index: 5000;\n  transform: scale(1, 1);\n  display: grid;\n  grid-template-columns: 29% 70%;\n}\n\n.p-20[_ngcontent-%COMP%] {\n  padding: 20px !important;\n}\n\n.p-12[_ngcontent-%COMP%] {\n  padding: 12px !important;\n}\n\n.p-16[_ngcontent-%COMP%] {\n  padding: 16px !important;\n}\n\n.pr-4[_ngcontent-%COMP%] {\n  padding-right: 4px;\n}\n\n.pr-8[_ngcontent-%COMP%] {\n  padding-right: 8px !important;\n}\n\n.pr-16[_ngcontent-%COMP%] {\n  padding-right: 16px;\n}\n\n.pt-30[_ngcontent-%COMP%] {\n  padding-top: 30px !important;\n}\n\n.pt-28[_ngcontent-%COMP%] {\n  padding-top: 28px !important;\n}\n\n.pt-25[_ngcontent-%COMP%] {\n  padding-top: 25px !important;\n}\n\n.pt-24[_ngcontent-%COMP%] {\n  padding-top: 24px !important;\n}\n\n.pt-22[_ngcontent-%COMP%] {\n  padding-top: 22px !important;\n}\n\n.pt-20[_ngcontent-%COMP%] {\n  padding-top: 20px !important;\n}\n\n.pt-19[_ngcontent-%COMP%] {\n  padding-top: 19px !important;\n}\n\n.pt-16[_ngcontent-%COMP%] {\n  padding-top: 16px !important;\n}\n\n.pt-14[_ngcontent-%COMP%] {\n  padding-top: 14px !important;\n}\n\n.pt-10[_ngcontent-%COMP%] {\n  padding-top: 10px !important;\n}\n\n.pt-8[_ngcontent-%COMP%] {\n  padding-top: 8px !important;\n}\n\n.pt-4[_ngcontent-%COMP%] {\n  padding-top: 4px;\n}\n\n.pt-2[_ngcontent-%COMP%] {\n  padding-top: 2px;\n}\n\n.pt-0[_ngcontent-%COMP%] {\n  padding-top: 0px !important;\n}\n\n.pb-28[_ngcontent-%COMP%] {\n  padding-bottom: 28px !important;\n}\n\n.pb-16[_ngcontent-%COMP%] {\n  padding-bottom: 16px !important;\n}\n\n.pv-4[_ngcontent-%COMP%] {\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n\n.pv-8[_ngcontent-%COMP%] {\n  padding-top: 8px !important;\n  padding-bottom: 8px !important;\n}\n\n.pv-10[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.pv-20[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.pv-14[_ngcontent-%COMP%] {\n  padding-top: 14px !important;\n  padding-bottom: 14px !important;\n}\n\n.pv-16[_ngcontent-%COMP%] {\n  padding-top: 16px !important;\n  padding-bottom: 16px !important;\n}\n\n.ph-5[_ngcontent-%COMP%] {\n  padding-right: 5px !important;\n  padding-left: 5px !important;\n}\n\n.ph-16[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n.ph-8[_ngcontent-%COMP%] {\n  padding-left: 8px !important;\n  padding-right: 8px !important;\n}\n\n.ph-10[_ngcontent-%COMP%] {\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n}\n\n.ph-4[_ngcontent-%COMP%] {\n  padding-left: 4px;\n  padding-right: 4px;\n}\n\n.ph-32[_ngcontent-%COMP%] {\n  padding-left: 32px;\n  padding-right: 32px;\n}\n\n.ph-38[_ngcontent-%COMP%] {\n  padding-left: 38px;\n  padding-right: 38px;\n}\n\n.ph-44[_ngcontent-%COMP%] {\n  padding-left: 44px;\n  padding-right: 44px;\n}\n\n.bb[_ngcontent-%COMP%] {\n  border-bottom: 0.1px solid #d3d3d3;\n  border-right: 0.1px solid #d3d3d3;\n}\n\n.bc[_ngcontent-%COMP%] {\n  background-color: #f8fafd;\n}\n\n.bcw[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #323e4a !important;\n}\n\n\n\n\n\n.m-4[_ngcontent-%COMP%] {\n  margin: 4px !important;\n}\n\n.m-8[_ngcontent-%COMP%] {\n  margin: 8px !important;\n}\n\n.m-16[_ngcontent-%COMP%] {\n  margin: 16px !important;\n}\n\n.mr-20[_ngcontent-%COMP%] {\n  margin-right: 20px !important;\n}\n\n.mr-8[_ngcontent-%COMP%] {\n  margin-right: 8px !important;\n}\n\n.ml-20[_ngcontent-%COMP%] {\n  margin-left: 20px !important;\n}\n\n.ml-24[_ngcontent-%COMP%] {\n  margin-left: 24px !important;\n}\n\n.mt-4[_ngcontent-%COMP%] {\n  margin-top: 4px !important;\n}\n\n.mt-8[_ngcontent-%COMP%] {\n  margin-top: 8px !important;\n}\n\n.mt-16[_ngcontent-%COMP%] {\n  margin-top: 16px !important;\n}\n\n.mt-24[_ngcontent-%COMP%] {\n  margin-top: 24px !important;\n}\n\n.mt-38[_ngcontent-%COMP%] {\n  margin-top: 38px !important;\n}\n\n.mh-8[_ngcontent-%COMP%] {\n  margin-left: 8px !important;\n  margin-right: 8px !important;\n}\n\n.mh-16[_ngcontent-%COMP%] {\n  margin-left: 16px !important;\n  margin-right: 16px !important;\n}\n\n.mv-4[_ngcontent-%COMP%] {\n  margin-top: 4px !important;\n  margin-bottom: 4px !important;\n}\n\n.mv-16[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  margin-bottom: 16px;\n}\n\n.mv-24[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  margin-bottom: 24px;\n}\n\n.mh--16[_ngcontent-%COMP%] {\n  margin-left: -16px !important;\n  margin-right: -16px !important;\n}\n\n.mh-8[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n.w100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.w70[_ngcontent-%COMP%] {\n  width: 70%;\n}\n\n.w50[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.w30[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.pc1[_ngcontent-%COMP%] {\n  width: 44.5%;\n  height: 35px;\n  float: right;\n  border-left: 1px solid rgb(104, 103, 103);\n}\n\n.tabbed[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  \n  background-color: #f8fafd;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding-right: 28px;\n  padding-left: 32px;\n}\n\n.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  \n  display: none;\n}\n\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  list-style: none;\n  background-color: white;\n  height: 100%;\n  padding: 1% 0;\n  padding-left: 30px;\n  margin-left: -30px;\n  width: 113%;\n}\n\n.tabs[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.tab[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 10px;\n  padding-right: 12px;\n  color: #606670;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-right: 10px;\n  border-right: 1px solid black;\n}\n\n.tab[_ngcontent-%COMP%]:hover   label[_ngcontent-%COMP%] {\n  border-top-color: #333;\n  color: #333;\n}\n\n.tab-content[_ngcontent-%COMP%] {\n  display: none;\n  color: #777;\n  background: #f8fafd;\n  margin: 10px !important;\n}\n\n\n\n.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(1):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(1)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(2):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(2)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(3):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(3)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(4):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(4)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(5):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(5)   label[_ngcontent-%COMP%] {\n  color: #49a2d7;\n  margin-right: 10px;\n}\n\n.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(1):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(1), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(2):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(2), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(3):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(3), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(4):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(4) {\n  display: block;\n}\n\n.hhu[_ngcontent-%COMP%]:active, .hhu[_ngcontent-%COMP%]:focus {\n  border: 2px solid red;\n}\n\n.form[_ngcontent-%COMP%] {\n  margin-left: 38px !important;\n  margin-right: 5%;\n  top: 50%;\n  left: 50%;\n  height: 316px;\n  background-color: white;\n  border: 1px dashed rgba(0, 0, 0, 0.4);\n}\n\n.form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif !important;\n  text-align: center;\n  line-height: 30px;\n  color: #303030;\n}\n\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-family: \"EuropaNuova-Regular\", sans-serif !important;\n  position: absolute;\n  margin: 0;\n  width: 89%;\n  height: 313px;\n  padding: 0;\n  outline: none;\n  cursor: pointer;\n  opacity: 0;\n}\n\n.form[_ngcontent-%COMP%]   .form_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  margin-left: 36.5%;\n  height: 42px;\n  cursor: pointer;\n  width: 160px;\n  background-color: #49a2d7;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #149174;\n  color: #0c5645;\n}\n\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  border: 0;\n}\n\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.xbutton[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #49a2d7;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.ybutton[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #0c354d;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.zbutton[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #947551;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.border1[_ngcontent-%COMP%] {\n  border-left: 3px solid #174d72;\n}\n\n.border2[_ngcontent-%COMP%] {\n  border-left: 3px solid #5fe6e7;\n}\n\n.border3[_ngcontent-%COMP%] {\n  border-left: 3px solid #e7845f;\n}\n\n.form-wrapper1[_ngcontent-%COMP%] {\n  flex-direction: column;\n  width: 100%;\n}\n\n.form-wrapper1[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 5.5%;\n}\n\n.form-wrapper1.td[_ngcontent-%COMP%] {\n  width: 100%;\n  width: 7%;\n}\n\n.full-input[_ngcontent-%COMP%] {\n  margin-left: 18px;\n  margin-bottom: 10px;\n  display: inline-block;\n  padding: 3px;\n  height: 74px;\n  width: 177px;\n  background-color: white;\n  border-radius: 5px;\n  box-shadow: 4px 4px 8px 4px #eeeefa;\n}\n\n.smalll-input[_ngcontent-%COMP%] {\n  width: 160px !important;\n  outline: none;\n  border: none;\n  display: block;\n  border-radius: 4px;\n  border: 1px solid #d5dbe8;\n  height: 35px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  padding: 5px 0px 5px 5px;\n  margin-bottom: 0px !important;\n  font-size: 12px;\n  font-weight: 500;\n  color: #72768a;\n}\n\n.sh1[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  margin-top: 15px;\n  font-size: 16px;\n  color: #606670;\n}\n\n.ss[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n\n#customers[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100% !important;\n  margin-left: 19px !important;\n  border-right: 1px solid #ddd;\n  border-left: 1px solid #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  height: 52px !important;\n  text-align: left;\n  font-weight: 300;\n  background-color: #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 52px !important;\n}\n\n.tab1[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  \n  display: inline-block;\n  height: 17px;\n  width: 17px;\n  color: #49a2d7;\n  margin-bottom: 10px;\n}\n\n.tab1[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + input[_ngcontent-%COMP%] {\n  background-color: #bfb;\n  border-color: #4c4;\n}\n\n.label1[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 10px;\n  padding-right: 12px;\n  color: #606670;\n  font-size: 12px;\n  letter-spacing: 1px;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-left: 30px;\n}\n\n.tab1[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.at[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding-right: 20px;\n  padding-left: 10px;\n}\n\n.ctb[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin-left: 210px;\n  background-color: #49a2d7;\n  padding: 12px 30px 11px 30px;\n  color: white;\n  border-radius: 4px;\n  cursor: pointer;\n  font-weight: 500;\n}\n\n.radio1[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  \n  display: inline-block;\n  height: 17px;\n  width: 17px;\n  color: #49a2d7;\n  margin-bottom: 10px;\n  border: 2px solid #49a2d7;\n}\n\n.radio1[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + input[_ngcontent-%COMP%] {\n  background-color: #bfb;\n  border-color: #4c4;\n}\n\n.label1[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 10px;\n  padding-right: 12px;\n  color: #606670;\n  font-size: 12px;\n  letter-spacing: 1px;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-left: 30px;\n}\n\n.radio1[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.stp1[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 500;\n  margin-bottom: 10px;\n  color: black;\n}\n\n.stp2[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin-bottom: 10px;\n  color: black;\n}\n\n.stp3[_ngcontent-%COMP%] {\n  color: #4a4a4a;\n  font-size: 14px;\n}\n\n.of1[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  font: 16px/26px Georgia, Garamond, Serif;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.side_document_list[_ngcontent-%COMP%] {\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 170vh;\n  border-right: 0.3px solid rgba(0, 0, 0, 0.2);\n}\n\n.profile_class[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  border-bottom: 0.3px solid rgba(0, 0, 0, 0.2);\n  padding: 3% 6%;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.activeBtn[_ngcontent-%COMP%] {\n  background-color: #f8fafd;\n  border-left: 8px solid rgb(61, 116, 197);\n}\n\n.table_top[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 29.55% 33% 30% 6%;\n  border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);\n  align-items: center;\n}\n\n.invoices_tab[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  height: 100vh;\n  background-color: #f8fafd;\n}\n\n.invoices_inner[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #f8fafd;\n}\n\n.inner_tab_content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  background-color: white;\n}\n\n.invoice_head[_ngcontent-%COMP%] {\n  width: 95%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 5%;\n}\n\n.serial_detail[_ngcontent-%COMP%] {\n  width: 93%;\n  margin-top: 10px;\n  display: flex;\n  justify-content: right;\n  text-align: right;\n  font-weight: 500;\n}\n\n.transaction_tab[_ngcontent-%COMP%] {\n  width: 770px;\n  height: 1387px;\n}\n\n.form_inner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  justify-content: center;\n}\n\n.opt[_ngcontent-%COMP%] {\n  background-color: #49a2d7;\n  padding: 0 3%;\n  height: 42px;\n  box-shadow: 4px 0px 7px #109cf1;\n  border: none;\n  color: white;\n}\n\n#container[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n.savBtn[_ngcontent-%COMP%] {\n  background-color: #49A2D7;\n  color: white;\n  border: 1px solid rgba(0, 0, 0, 0.4);\n  font-size: 14px;\n  cursor: pointer;\n  border-radius: 2px;\n  width: 60px;\n  margin-left: -2%;\n}\n\n.content-wrap[_ngcontent-%COMP%] {\n  z-index: 0;\n  height: 100vh;\n  position: absolute;\n  left: 260px;\n  margin: auto;\n  width: 78vw;\n}\n\n#container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  min-height: 100%;\n}\n\ntable[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.analytics[_ngcontent-%COMP%]   .support[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.header-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 0.8%;\n  padding-left: 1%;\n  padding-bottom: 0.8%;\n  border-bottom: 1px solid black;\n  width: 99%;\n}\n\nselect[_ngcontent-%COMP%] {\n  text-decoration: none;\n  border: 1px solid black;\n  background: none;\n  color: #49a2d7;\n  padding: 5px;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2tpbmctY3JlZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0NBQUE7QUFDRjs7QUFDQTtFQUNFLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUVGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUVGOztBQUlBO0VBQ0UsMkJBQUE7QUFERjs7QUFJQTtFQUNFLDRCQUFBO0VBQ0EsZUFBQTtBQURGOztBQUlBO0VBQ0Usa0NBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxvQ0FBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtBQURGOztBQUlBO0VBQ0Usb0NBQUE7RUFDQSxjQUFBO0FBREY7O0FBSUE7RUFDRSw4QkFBQTtBQURGOztBQUlBO0VBQ0UsOEJBQUE7QUFERjs7QUFLQTtFQUNFLGdDQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUZGOztBQUtBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0FBRkY7O0FBS0E7RUFDRSxpQkFBQTtFQUNBLDBCQUFBO0FBRkY7O0FBS0E7RUFDRSxjQUFBO0FBRkY7O0FBS0E7O0VBR0UsaUNBQUE7QUFIRjs7QUFNQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQUhGOztBQVFBO0VBQ0UsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUNBQUE7QUFMRjs7QUFPQTtF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cmVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmhlYWRpbmcge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzMyM2U0YTtcclxufVxyXG5cclxuLmRyb3Bkb3duIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLnRhYmxlLWhlYWRpbmcge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjNzQ3NDc0O1xyXG4gIC8vb3BhY2l0eTogNTAlO1xyXG59XHJcblxyXG5cclxuXHJcbi5ib3gtc2hhZG93IHtcclxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50YWJsZS1wYWRkaW5nIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLnVwbG9hZC1idXR0b24ge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXRvcDogLTEycHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gIGhlaWdodDogNDJweDtcclxuICB3aWR0aDogMTYwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5YTJkNztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IDBweCAjNDlhMmQ3O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi50YWJsZS1yb3cge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICBjb2xvcjogIzcwNzY4MztcclxufVxyXG5cclxuLnRhYmxlLXJvdzpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2Y2ZjlmZiAhaW1wb3J0YW50O1xyXG4gIC8vYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDlhMmQ3O1xyXG59XHJcbi5jb2x1bUg6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmNmY5ZmYgIWltcG9ydGFudDtcclxuICAvL2JvcmRlci1sZWZ0OiA1cHggc29saWQgIzQ5YTJkNztcclxufVxyXG5cclxuLmNvbHVtSCB7XHJcbiAgYm9yZGVyLWxlZnQ6IDAuMXB4IHNvbGlkICNkM2QzZDM7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwLjFweCBzb2xpZCAjZDNkM2QzO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbn1cclxuXHJcbnNlbGVjdCB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGNvbG9yOiAjNDlhMmQ3O1xyXG59XHJcblxyXG5zZWxlY3Q6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5yZWN0IHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBtaW4td2lkdGg6IDgwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNiLW5vIHtcclxuICBjb2xvcjogIzQ5YTJkNztcclxufVxyXG5cclxudGgsXHJcbnRkIHtcclxuICAvL21pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW1hZ2Uge1xyXG4gIGhlaWdodDogMjVweDtcclxuICB3aWR0aDogMjVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbWFyZ2luLXRvcDogMTJmdnB4O1xyXG59XHJcblxyXG4uaW1hZ2UyIHtcclxuICBtYXJnaW4tdG9wOiAyMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTNweDtcclxufVxyXG5cclxuXHJcblxyXG4uZm9ybSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDM4cHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBoZWlnaHQ6IDMxNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IGRhc2hlZCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbn1cclxuLmZvcm0gcCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgLy8gbWFyZ2luLXRvcDogMjBweDtcclxuICAvLyB3aWR0aDogMTAwJTtcclxuICAvLyBoZWlnaHQ6IDIzcHggIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgY29sb3I6ICMzMDMwMzA7XHJcbn1cclxuLmZvcm0gaW5wdXQge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkV1cm9wYU51b3ZhLVJlZ3VsYXJcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW46IDA7XHJcbiAgd2lkdGg6IDg5JTtcclxuICBoZWlnaHQ6IDMxM3B4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG4uZm9ybSAuZm9ybV9pbm5lciBidXR0b24ge1xyXG4gIC8vIG1hcmdpbi1sZWZ0OiAzNiU7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDM2LjUlO1xyXG4gIGhlaWdodDogNDJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDE2MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OWEyZDc7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAwcHggIzQ5YTJkNztcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5mb3JtIGJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzE0OTE3NDtcclxuICBjb2xvcjogIzBjNTY0NTtcclxufVxyXG4uZm9ybSBidXR0b246YWN0aXZlIHtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuaW5wdXQ6Zm9jdXMsXHJcbnRleHRhcmVhOmZvY3VzLFxyXG5zZWxlY3Q6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi54YnV0dG9uIHtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGhlaWdodDogNDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDlhMmQ3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggMHB4ICM0OWEyZDc7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLnlidXR0b24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgaGVpZ2h0OiA0MnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYzM1NGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAwcHggIzQ5YTJkNztcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uemJ1dHRvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBoZWlnaHQ6IDQycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk0NzU1MTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IDBweCAjNDlhMmQ3O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcblxyXG5cclxuLmJvcmRlcjIge1xyXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzVmZTZlNztcclxufVxyXG5cclxuLmJvcmRlcjMge1xyXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2U3ODQ1ZjtcclxufVxyXG5cclxuLmZvcm0td3JhcHBlcjEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZvcm0td3JhcHBlcjEgZGl2IHRkIHtcclxuICB3aWR0aDogMzAlO1xyXG4gIGhlaWdodDogNS41JTtcclxufVxyXG5cclxuLmZvcm0td3JhcHBlcjEudGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHdpZHRoOiA3JTtcclxufVxyXG4uZnVsbC1pbnB1dCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogM3B4O1xyXG4gIGhlaWdodDogNzRweDtcclxuICB3aWR0aDogMTc3cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJveC1zaGFkb3c6IDRweCA0cHggOHB4IDRweCAjZWVlZWZhO1xyXG59XHJcblxyXG4uc21hbGxsLWlucHV0IHtcclxuICB3aWR0aDogMTYwcHggIWltcG9ydGFudDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q1ZGJlODtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbn1cclxubGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDVweCAwcHggNXB4IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzcyNzY4YTtcclxufVxyXG5cclxuLnNoMSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICM2MDY2NzA7XHJcbn1cclxuXHJcbi5zcyB7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNjdXN0b21lcnMge1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBtYXJnaW4tbGVmdDogMjNweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZGQ7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG4jY3VzdG9tZXJzIHRkLFxyXG4jY3VzdG9tZXJzIHRoIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxufVxyXG5cclxuI2N1c3RvbWVycyB0aCB7XHJcbiAgaGVpZ2h0OiA1MnB4ICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbn1cclxuXHJcbiNjdXN0b21lcnMgdGQge1xyXG4gIGhlaWdodDogNTJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGFiMSBbdHlwZT1cInJhZGlvXCJdIHtcclxuICAvKiBoaWRpbmcgdGhlIGlucHV0cyAqL1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6IDE3cHg7XHJcbiAgd2lkdGg6IDE3cHg7XHJcbiAgY29sb3I6ICM0OWEyZDc7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnRhYjEgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBpbnB1dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JmYjtcclxuICBib3JkZXItY29sb3I6ICM0YzQ7XHJcbn1cclxuXHJcbi5sYWJlbDEge1xyXG5cclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcbiAgY29sb3I6ICM2MDY2NzA7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4udGFiMSB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmF0IHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5jdGIge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBtYXJnaW4tbGVmdDogMjEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5YTJkNztcclxuICBwYWRkaW5nOiAxMnB4IDMwcHggMTFweCAzMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5yYWRpbzEgW3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgLyogaGlkaW5nIHRoZSBpbnB1dHMgKi9cclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiAxN3B4O1xyXG4gIHdpZHRoOiAxN3B4O1xyXG4gIGNvbG9yOiAjNDlhMmQ3O1xyXG5cclxuICBib3JkZXI6IDJweCBzb2xpZCAjNDlhMmQ3O1xyXG59XHJcblxyXG4ucmFkaW8xIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgaW5wdXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZmI7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNGM0O1xyXG59XHJcblxyXG4ubGFiZWwxIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xyXG4gIGNvbG9yOiAjNjA2NjcwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG5cclxuLnJhZGlvMSB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLnN0cDEge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uc3RwMiB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uc3RwMyB7XHJcbiAgY29sb3I6ICM0YTRhNGE7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4ub2YxIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGZvbnQ6IDE2cHgvMjZweCBHZW9yZ2lhLCBHYXJhbW9uZCwgU2VyaWY7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi8qICBEYXNoYm9hcmQgTWFpbiBQYWdlIFN0eWxpbmcgKEZyb250IFBhZ2UpICovXHJcblxyXG50YWJsZSB0Ym9keSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vL1NJREUgUEVPUExFIExJU1RcclxuXHJcbi5zaWRlX2RvY3VtZW50X2xpc3Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMTcwdmg7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwLjNweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgbWFyZ2luLWxlZnQ6IDI3cHg7XHJcbn1cclxuXHJcbi8vUFJPRklMRSBDTEFTU1NTUy9cclxuLnByb2ZpbGVfY2xhc3Mge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMC4zcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIHBhZGRpbmc6IDMlIDYlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLy8gLnByb2ZpbGVfY2xhc3M6aG92ZXIge1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmQ7XHJcbi8vICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCByZ2IoNjEsIDExNiwgMTk3KTtcclxuLy8gfVxyXG5cclxuLmFjdGl2ZUJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmZDtcclxuICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHJnYig2MSwgMTE2LCAxOTcpO1xyXG59XHJcblxyXG4udGFibGVfdG9wIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjguNTUlIDMzJSAzNiU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnZvaWNlc190YWIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZkO1xyXG59XHJcblxyXG4uaW52b2ljZXNfaW5uZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmQ7XHJcbn1cclxuXHJcbi5pbm5lcl90YWJfY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmludm9pY2VfaGVhZCB7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbn1cclxuXHJcbi5zZXJpYWxfZGV0YWlsIHtcclxuICB3aWR0aDogOTMlO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbl90YWIge1xyXG4gIHdpZHRoOiA3NzBweDtcclxuICBoZWlnaHQ6IDEzODdweDtcclxufVxyXG5cclxuLmZvcm1faW5uZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ub3B0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDlhMmQ3O1xyXG4gIHBhZGRpbmc6IDAgMSU7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgYm94LXNoYWRvdzogNHB4IDBweCA3cHggIzEwOWNmMTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbmlucHV0IDo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiByZ2IoMjEyLCAyOSwgMjkpO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtaW4td2lkdGg6IDYwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY29sb3I6ICMwZThjZDQ7XHJcbn1cclxuXHJcbi5idXR0b24xIHtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtaW4td2lkdGg6IDYwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGU4Y2Q0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jbGFzczEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5N2NjZWI7XHJcbn1cclxuXHJcbi5mbGV4LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyID4gZGl2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gIHdpZHRoOiAxMzBweDtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuLm15X2NsYXNzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZThjZDQgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcblxyXG4uaGVhZGluZyB7XHJcblxyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG50ci5ib3JkZXIxIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwNzA3MDc7XHJcbn1cclxuXHJcbnRkLmJvcmRlcjEge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzA3MDcwNztcclxufVxyXG5cclxuLnd0ZCB7XHJcbiAgICB3aWR0aDogNDQxcHg7XHJcbn1cclxuXHJcbi53dGQxIHtcclxuICAgIHdpZHRoOiA2MDBweDtcclxufVxyXG5cclxuLnd0ZDEgaW5wdXQge1xyXG4gICAvLyB3aWR0aDogNDAwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi53dGQyIHtcclxuICAgIHdpZHRoOiA5MDBweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuc3BhbiBpbnB1dCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi5zcGxpIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW5zIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgIHdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuLnd0ZDcgaW5wdXR7XHJcbiAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuXHJcbi53dGQ4IHtcclxuICAgIHdpZHRoOiAxNjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW5kIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLnNsIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG59XHJcbi5zbDMgaW5wdXR7XHJcbiBib3JkZXI6IG5vbmU7XHJcbiB3aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi5zbDMge1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG59XHJcblxyXG4udzEge1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG59XHJcblxyXG4udzEgaW5wdXQge1xyXG4gICB3aWR0aDogMjE2cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5wZGZfaGVhZGluZyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uYnV0dG9uMSB7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgd2lkdGg6IDE3MHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5YTJkNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IDBweCAjNDlhMmQ3O1xyXG59XHJcblxyXG5cclxuLy8gbmV3XHJcbioge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLy8gLnRhYmxlIHRoZWFkIHRoe1xyXG4vLyAgICAgYm9yZGVyOiBub25lO1xyXG4vLyB9XHJcblxyXG4uaGVhZGluZyB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAyM3B4O1xyXG4gIGNvbG9yOiAjMzIzZTRhO1xyXG59XHJcblxyXG4vLyAuZHJvcGRvd24ge1xyXG4vLyAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuLy8gfVxyXG5cclxuLnRhYmxlLWhlYWRpbmcge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjNzQ3NDc0O1xyXG4gIC8vb3BhY2l0eTogNTAlO1xyXG59XHJcblxyXG4uYm94LXNoYWRvdyB7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGFibGUtcGFkZGluZyB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IDNweCAjMDAwMDAwMmI7XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnVwbG9hZC1idXR0b24ge1xyXG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICBmb250LWZhbWlseTogUG9wcGlucywgc2Fucy1zZXJpZjtcclxuICBwYWRkaW5nOiA1cHggOHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDlBMkQ3O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLnRhYmxlLXJvdyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjNzA3NjgzO1xyXG59XHJcblxyXG4udGFibGUtcm93OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZjZmOWZmICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDlhMmQ3O1xyXG59XHJcblxyXG5zZWxlY3Qge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBjb2xvcjogIzQ5YTJkNztcclxufVxyXG5cclxuc2VsZWN0OmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ucmVjdCB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgbWluLXdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zYi1ubyB7XHJcbiAgY29sb3I6ICM0OWEyZDc7XHJcbn1cclxuXHJcbnRoLFxyXG50ZCB7XHJcbiAgaGVpZ2h0OiA2OHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmltYWdlIHtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG1hcmdpbi10b3A6IDEyZnZweDtcclxufVxyXG5cclxuLmltYWdlMiB7XHJcbiAgbWFyZ2luLXRvcDogMjJweDtcclxuICBtYXJnaW4tbGVmdDogLTEzcHg7XHJcbn1cclxuXHJcbi5mbCB7XHJcbiAgZmxvYXQ6IFwibGVmdFwiO1xyXG59XHJcblxyXG4uZnIge1xyXG4gIGZsb2F0OiBcInJpZ2h0XCI7XHJcbn1cclxuXHJcbnNwYW4uZnMyMCB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5zcGFuLmZzMTYge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxucC5mczE0IHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5mczEyIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5wLTQge1xyXG4gIHBhZGRpbmc6IDRweDtcclxufVxyXG5cclxuLnAtOCB7XHJcbiAgei1pbmRleDogNTAwMDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyOSUgNzAlO1xyXG59XHJcblxyXG4ucC0yMCB7XHJcbiAgcGFkZGluZzogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucC0xMiB7XHJcbiAgcGFkZGluZzogMTJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucC0xNiB7XHJcbiAgcGFkZGluZzogMTZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHItNCB7XHJcbiAgcGFkZGluZy1yaWdodDogNHB4O1xyXG59XHJcblxyXG4ucHItOCB7XHJcbiAgcGFkZGluZy1yaWdodDogOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wci0xNiB7XHJcbiAgcGFkZGluZy1yaWdodDogMTZweDtcclxufVxyXG5cclxuLnB0LTMwIHtcclxuICBwYWRkaW5nLXRvcDogMzBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHQtMjgge1xyXG4gIHBhZGRpbmctdG9wOiAyOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wdC0yNSB7XHJcbiAgcGFkZGluZy10b3A6IDI1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnB0LTI0IHtcclxuICBwYWRkaW5nLXRvcDogMjRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHQtMjIge1xyXG4gIHBhZGRpbmctdG9wOiAyMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wdC0yMCB7XHJcbiAgcGFkZGluZy10b3A6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnB0LTE5IHtcclxuICBwYWRkaW5nLXRvcDogMTlweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHQtMTYge1xyXG4gIHBhZGRpbmctdG9wOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wdC0xNCB7XHJcbiAgcGFkZGluZy10b3A6IDE0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnB0LTEwIHtcclxuICBwYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHQtOCB7XHJcbiAgcGFkZGluZy10b3A6IDhweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHQtNCB7XHJcbiAgcGFkZGluZy10b3A6IDRweDtcclxufVxyXG5cclxuLnB0LTIge1xyXG4gIHBhZGRpbmctdG9wOiAycHg7XHJcbn1cclxuXHJcbi5wdC0wIHtcclxuICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wYi0yOCB7XHJcbiAgcGFkZGluZy1ib3R0b206IDI4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBiLTE2IHtcclxuICBwYWRkaW5nLWJvdHRvbTogMTZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHYtNCB7XHJcbiAgcGFkZGluZy10b3A6IDRweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG59XHJcblxyXG4ucHYtOCB7XHJcbiAgcGFkZGluZy10b3A6IDhweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctYm90dG9tOiA4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnB2LTEwIHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnB2LTIwIHtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnB2LTE0IHtcclxuICBwYWRkaW5nLXRvcDogMTRweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wdi0xNiB7XHJcbiAgcGFkZGluZy10b3A6IDE2cHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGgtNSB7XHJcbiAgcGFkZGluZy1yaWdodDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBoLTE2IHtcclxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTZweDtcclxufVxyXG5cclxuLnBoLTgge1xyXG4gIHBhZGRpbmctbGVmdDogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1yaWdodDogOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5waC0xMCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGgtNCB7XHJcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgcGFkZGluZy1yaWdodDogNHB4O1xyXG59XHJcblxyXG4ucGgtMzIge1xyXG4gIHBhZGRpbmctbGVmdDogMzJweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAzMnB4O1xyXG59XHJcblxyXG4ucGgtMzgge1xyXG4gIHBhZGRpbmctbGVmdDogMzhweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAzOHB4O1xyXG59XHJcblxyXG4ucGgtNDQge1xyXG4gIHBhZGRpbmctbGVmdDogNDRweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA0NHB4O1xyXG59XHJcblxyXG4uYmIge1xyXG4gIGJvcmRlci1ib3R0b206IDAuMXB4IHNvbGlkICNkM2QzZDM7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwLjFweCBzb2xpZCAjZDNkM2QzO1xyXG59XHJcblxyXG4uYmMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmQ7XHJcbn1cclxuXHJcbi5iY3cge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiAjMzIzZTRhICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLXBhZGRpbmctLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS1tYXJnaW4tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuLm0tNCB7XHJcbiAgbWFyZ2luOiA0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm0tOCB7XHJcbiAgbWFyZ2luOiA4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm0tMTYge1xyXG4gIG1hcmdpbjogMTZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXItMjAge1xyXG4gIG1hcmdpbi1yaWdodDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXItOCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1sLTIwIHtcclxuICBtYXJnaW4tbGVmdDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWwtMjQge1xyXG4gIG1hcmdpbi1sZWZ0OiAyNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tdC00IHtcclxuICBtYXJnaW4tdG9wOiA0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm10LTgge1xyXG4gIG1hcmdpbi10b3A6IDhweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXQtMTYge1xyXG4gIG1hcmdpbi10b3A6IDE2cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm10LTI0IHtcclxuICBtYXJnaW4tdG9wOiAyNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tdC0zOCB7XHJcbiAgbWFyZ2luLXRvcDogMzhweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWgtOCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1yaWdodDogOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5taC0xNiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE2cHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tcmlnaHQ6IDE2cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm12LTQge1xyXG4gIG1hcmdpbi10b3A6IDRweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXYtMTYge1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuLm12LTI0IHtcclxuICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbn1cclxuXHJcbi5taC0tMTYge1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTZweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1yaWdodDogLTE2cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1oLTgge1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi53MTAwIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnc3MCB7XHJcbiAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuLnc1MCB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLnczMCB7XHJcbiAgd2lkdGg6IDMwJTtcclxufVxyXG5cclxuLnBjMSB7XHJcbiAgd2lkdGg6IDQ0LjUlO1xyXG4gIGhlaWdodDogMzVweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2IoMTA0LCAxMDMsIDEwMyk7XHJcbn1cclxuXHJcbi50YWJiZWQge1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAvKiBzbyB3ZSBjb3VsZCBlYXNpbHkgaGlkZSB0aGUgcmFkaW8gaW5wdXRzICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmZDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZy1yaWdodDogMjhweDtcclxuICBwYWRkaW5nLWxlZnQ6IDMycHg7XHJcbn1cclxuXHJcbi50YWJiZWQgW3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgLyogaGlkaW5nIHRoZSBpbnB1dHMgKi9cclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udGFicyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIC8vbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDElIDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMzBweDtcclxuICB3aWR0aDogMTEzJTtcclxufVxyXG5cclxuLnRhYnMgbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLnRhYj5sYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xyXG4gIGNvbG9yOiAjNjA2NjcwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4udGFiOmhvdmVyIGxhYmVsIHtcclxuICBib3JkZXItdG9wLWNvbG9yOiAjMzMzO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4udGFiLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgY29sb3I6ICM3Nzc7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZmFmZDtcclxuICAvLyBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIC8vIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW46IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi8qIEFzIHdlIGNhbm5vdCByZXBsYWNlIHRoZSBudW1iZXJzIHdpdGggdmFyaWFibGVzIG9yIGNhbGxzIHRvIGVsZW1lbnQgcHJvcGVydGllcywgdGhlIG51bWJlciBvZiB0aGlzIHNlbGVjdG9yIHBhcnRzIGlzIG91ciB0YWIgY291bnQgbGltaXQgKi9cclxuXHJcbi50YWJiZWQgW3R5cGU9XCJyYWRpb1wiXTpudGgtb2YtdHlwZSgxKTpjaGVja2Vkfi50YWJzIC50YWI6bnRoLW9mLXR5cGUoMSkgbGFiZWwsXHJcbi50YWJiZWQgW3R5cGU9XCJyYWRpb1wiXTpudGgtb2YtdHlwZSgyKTpjaGVja2Vkfi50YWJzIC50YWI6bnRoLW9mLXR5cGUoMikgbGFiZWwsXHJcbi50YWJiZWQgW3R5cGU9XCJyYWRpb1wiXTpudGgtb2YtdHlwZSgzKTpjaGVja2Vkfi50YWJzIC50YWI6bnRoLW9mLXR5cGUoMykgbGFiZWwsXHJcbi50YWJiZWQgW3R5cGU9XCJyYWRpb1wiXTpudGgtb2YtdHlwZSg0KTpjaGVja2Vkfi50YWJzIC50YWI6bnRoLW9mLXR5cGUoNCkgbGFiZWwsXHJcbi50YWJiZWQgW3R5cGU9XCJyYWRpb1wiXTpudGgtb2YtdHlwZSg1KTpjaGVja2Vkfi50YWJzIC50YWI6bnRoLW9mLXR5cGUoNSkgbGFiZWwge1xyXG4gIGNvbG9yOiAjNDlhMmQ3O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLnRhYmJlZCBbdHlwZT1cInJhZGlvXCJdOm50aC1vZi10eXBlKDEpOmNoZWNrZWR+LnRhYi1jb250ZW50Om50aC1vZi10eXBlKDEpLFxyXG4udGFiYmVkIFt0eXBlPVwicmFkaW9cIl06bnRoLW9mLXR5cGUoMik6Y2hlY2tlZH4udGFiLWNvbnRlbnQ6bnRoLW9mLXR5cGUoMiksXHJcbi50YWJiZWQgW3R5cGU9XCJyYWRpb1wiXTpudGgtb2YtdHlwZSgzKTpjaGVja2Vkfi50YWItY29udGVudDpudGgtb2YtdHlwZSgzKSxcclxuLnRhYmJlZCBbdHlwZT1cInJhZGlvXCJdOm50aC1vZi10eXBlKDQpOmNoZWNrZWR+LnRhYi1jb250ZW50Om50aC1vZi10eXBlKDQpIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmhodTphY3RpdmUsXHJcbi5oaHU6Zm9jdXMge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcclxufVxyXG5cclxuLmZvcm0ge1xyXG4gIG1hcmdpbi1sZWZ0OiAzOHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgaGVpZ2h0OiAzMTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBkYXNoZWQgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG59XHJcblxyXG4uZm9ybSBwIHtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICAvLyBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIC8vIHdpZHRoOiAxMDAlO1xyXG4gIC8vIGhlaWdodDogMjNweCAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICBjb2xvcjogIzMwMzAzMDtcclxufVxyXG5cclxuLmZvcm0gaW5wdXQge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkV1cm9wYU51b3ZhLVJlZ3VsYXJcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW46IDA7XHJcbiAgd2lkdGg6IDg5JTtcclxuICBoZWlnaHQ6IDMxM3B4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmZvcm0gLmZvcm1faW5uZXIgYnV0dG9uIHtcclxuICAvLyBtYXJnaW4tbGVmdDogMzYlO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG1hcmdpbi1sZWZ0OiAzNi41JTtcclxuICBoZWlnaHQ6IDQycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiAxNjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDlhMmQ3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggMHB4ICM0OWEyZDc7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmZvcm0gYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMTQ5MTc0O1xyXG4gIGNvbG9yOiAjMGM1NjQ1O1xyXG59XHJcblxyXG4uZm9ybSBidXR0b246YWN0aXZlIHtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzLFxyXG50ZXh0YXJlYTpmb2N1cyxcclxuc2VsZWN0OmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ueGJ1dHRvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBoZWlnaHQ6IDQycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5YTJkNztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IDBweCAjNDlhMmQ3O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi55YnV0dG9uIHtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGhlaWdodDogNDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGMzNTRkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggMHB4ICM0OWEyZDc7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLnpidXR0b24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgaGVpZ2h0OiA0MnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5NDc1NTE7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAwcHggIzQ5YTJkNztcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uYm9yZGVyMSB7XHJcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjMTc0ZDcyO1xyXG59XHJcblxyXG4uYm9yZGVyMiB7XHJcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjNWZlNmU3O1xyXG59XHJcblxyXG4uYm9yZGVyMyB7XHJcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjZTc4NDVmO1xyXG59XHJcblxyXG4uZm9ybS13cmFwcGVyMSB7XHJcbiAgLy9kaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mb3JtLXdyYXBwZXIxIGRpdiB0ZCB7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBoZWlnaHQ6IDUuNSU7XHJcbn1cclxuXHJcbi5mb3JtLXdyYXBwZXIxLnRkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB3aWR0aDogNyU7XHJcbn1cclxuXHJcbi5mdWxsLWlucHV0IHtcclxuICBtYXJnaW4tbGVmdDogMThweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgaGVpZ2h0OiA3NHB4O1xyXG4gIHdpZHRoOiAxNzdweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm94LXNoYWRvdzogNHB4IDRweCA4cHggNHB4ICNlZWVlZmE7XHJcbn1cclxuXHJcbi5zbWFsbGwtaW5wdXQge1xyXG4gIHdpZHRoOiAxNjBweCAhaW1wb3J0YW50O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZDVkYmU4O1xyXG4gIGhlaWdodDogMzVweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDVweCAwcHggNXB4IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzcyNzY4YTtcclxufVxyXG5cclxuLnNoMSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICM2MDY2NzA7XHJcbn1cclxuXHJcbi5zcyB7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNjdXN0b21lcnMge1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBtYXJnaW4tbGVmdDogMTlweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZGQ7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG4jY3VzdG9tZXJzIHRkLFxyXG4jY3VzdG9tZXJzIHRoIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxufVxyXG5cclxuI2N1c3RvbWVycyB0aCB7XHJcbiAgaGVpZ2h0OiA1MnB4ICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbn1cclxuXHJcbiNjdXN0b21lcnMgdGQge1xyXG4gIGhlaWdodDogNTJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGFiMSBbdHlwZT1cInJhZGlvXCJdIHtcclxuICAvKiBoaWRpbmcgdGhlIGlucHV0cyAqL1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6IDE3cHg7XHJcbiAgd2lkdGg6IDE3cHg7XHJcbiAgY29sb3I6ICM0OWEyZDc7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnRhYjEgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQraW5wdXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZmI7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNGM0O1xyXG59XHJcblxyXG4ubGFiZWwxIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xyXG4gIGNvbG9yOiAjNjA2NjcwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG5cclxuLnRhYjEge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5hdCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uY3RiIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OWEyZDc7XHJcbiAgcGFkZGluZzogMTJweCAzMHB4IDExcHggMzBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4ucmFkaW8xIFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gIC8qIGhpZGluZyB0aGUgaW5wdXRzICovXHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogMTdweDtcclxuICB3aWR0aDogMTdweDtcclxuICBjb2xvcjogIzQ5YTJkNztcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM0OWEyZDc7XHJcbn1cclxuXHJcbi5yYWRpbzEgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQraW5wdXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZmI7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNGM0O1xyXG59XHJcblxyXG4ubGFiZWwxIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xyXG4gIGNvbG9yOiAjNjA2NjcwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG5cclxuLnJhZGlvMSB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLnN0cDEge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uc3RwMiB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uc3RwMyB7XHJcbiAgY29sb3I6ICM0YTRhNGE7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4ub2YxIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGZvbnQ6IDE2cHgvMjZweCBHZW9yZ2lhLCBHYXJhbW9uZCwgU2VyaWY7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbnRhYmxlIHRib2R5IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8vU0lERSBQRU9QTEUgTElTVFxyXG4uc2lkZV9kb2N1bWVudF9saXN0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDE3MHZoO1xyXG4gIGJvcmRlci1yaWdodDogMC4zcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4vL1BST0ZJTEUgQ0xBU1NTU1MvXHJcbi5wcm9maWxlX2NsYXNzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1ib3R0b206IDAuM3B4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBwYWRkaW5nOiAzJSA2JTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8vIC5wcm9maWxlX2NsYXNzOmhvdmVyIHtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZkO1xyXG4vLyAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgcmdiKDYxLCAxMTYsIDE5Nyk7XHJcbi8vIH1cclxuLmFjdGl2ZUJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmZDtcclxuICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHJnYig2MSwgMTE2LCAxOTcpO1xyXG59XHJcblxyXG4udGFibGVfdG9wIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjkuNTUlIDMzJSAzMCUgNiU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnZvaWNlc190YWIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZkO1xyXG59XHJcblxyXG4uaW52b2ljZXNfaW5uZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmQ7XHJcbn1cclxuXHJcbi5pbm5lcl90YWJfY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmludm9pY2VfaGVhZCB7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbn1cclxuXHJcbi5zZXJpYWxfZGV0YWlsIHtcclxuICB3aWR0aDogOTMlO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbl90YWIge1xyXG4gIHdpZHRoOiA3NzBweDtcclxuICBoZWlnaHQ6IDEzODdweDtcclxufVxyXG5cclxuLmZvcm1faW5uZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ub3B0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDlhMmQ3O1xyXG4gIHBhZGRpbmc6IDAgMyU7XHJcbiAgaGVpZ2h0OiA0MnB4O1xyXG4gIGJveC1zaGFkb3c6IDRweCAwcHggN3B4ICMxMDljZjE7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2NvbnRhaW5lciB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5zYXZCdG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OUEyRDc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICB3aWR0aDogNjBweDtcclxuICBtYXJnaW4tbGVmdDogLTIlO1xyXG59XHJcblxyXG4uY29udGVudC13cmFwIHtcclxuICB6LWluZGV4OiAwO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDI2MHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogNzh2dztcclxufVxyXG5cclxuI2NvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uYW5hbHl0aWNzIC5zdXBwb3J0IHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5oZWFkZXItcGFuZWx7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDAuOCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDElO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuOCU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICB3aWR0aDogOTklO1xyXG59XHJcbnNlbGVjdHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBjb2xvcjogIzQ5YTJkNztcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbiJdfQ== */"]
  });
  return PackingCreditComponent;
})();

/***/ }),

/***/ 95733:
/*!*********************************************************************!*\
  !*** ./src/app/home/Export/packing-credit/packing-credit.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PackingCreditModule": () => (/* binding */ PackingCreditModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../confirm-dialog/confirm-dialog.service */ 12579);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ 71010);
/* harmony import */ var _shared_Data_Servies_shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared-Data-Servies/shared-data.service */ 10241);
/* harmony import */ var _shared_home_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared-home.module */ 69408);
/* harmony import */ var _packing_credit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./packing-credit.component */ 11072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);










let PackingCreditModule = /*#__PURE__*/(() => {
  class PackingCreditModule {}

  PackingCreditModule.ɵfac = function PackingCreditModule_Factory(t) {
    return new (t || PackingCreditModule)();
  };

  PackingCreditModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: PackingCreditModule
  });
  PackingCreditModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    providers: [_confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialogService, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal, _shared_Data_Servies_shared_data_service__WEBPACK_IMPORTED_MODULE_1__.SharedDataService],
    imports: [_shared_home_module__WEBPACK_IMPORTED_MODULE_2__.SharedHomeModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild([{
      path: "",
      component: _packing_credit_component__WEBPACK_IMPORTED_MODULE_3__.PackingCreditComponent,
      pathMatch: "full"
    }]), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__.ModalModule.forRoot()]
  });
  return PackingCreditModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PackingCreditModule, {
    declarations: [_packing_credit_component__WEBPACK_IMPORTED_MODULE_3__.PackingCreditComponent],
    imports: [_shared_home_module__WEBPACK_IMPORTED_MODULE_2__.SharedHomeModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__.ModalModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_home_Export_packing-credit_packing-credit_module_ts.js.map