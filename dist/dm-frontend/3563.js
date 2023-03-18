"use strict";
(self["webpackChunkdm_frontend"] = self["webpackChunkdm_frontend"] || []).push([[3563],{

/***/ 61534:
/*!*******************************************************************************!*\
  !*** ./src/app/home/bill-under-collection/bill-under-collection.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillUnderCollectionComponent": () => (/* binding */ BillUnderCollectionComponent)
/* harmony export */ });
/* harmony import */ var _service_document_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/document.service */ 76852);
/* harmony import */ var src_app_service_window_information_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/window-information.service */ 23087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 64537);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7976);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 88692);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 20092);










function BillUnderCollectionComponent_div_2_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function BillUnderCollectionComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " All Documents ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 9)(5, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "People colaborated");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, BillUnderCollectionComponent_div_2_span_8_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](9, 1, ctx_r0.item1, 0, 3));
  }
}

const _c0 = function () {
  return ["/home/upload"];
};

function BillUnderCollectionComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7)(1, "div", 15)(2, "h3", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Bill Under Collection/ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "select", 18)(9, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Today");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Type: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "select", 20)(13, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 21)(16, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Upload New ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.doc);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c0));
  }
}

function BillUnderCollectionComponent_div_4_div_1_div_2_tr_22_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r15 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" 0", i_r15 + 1, ", ");
  }
}

function BillUnderCollectionComponent_div_4_div_1_div_2_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BillUnderCollectionComponent_div_4_div_1_div_2_tr_22_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      const data_r11 = restoredCtx.$implicit;
      const i_r12 = restoredCtx.index;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r16.getInvoices(data_r11, i_r12) && ctx_r16.getTransactions(data_r11.pi_poNo));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Invoice-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, BillUnderCollectionComponent_div_4_div_1_div_2_tr_22_span_9_Template, 2, 1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Random Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "img", 14)(14, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Lindsey Stroud ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r11.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r11.pi_poNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", data_r11.invoices);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r11.amount);
  }
}

function BillUnderCollectionComponent_div_4_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29)(1, "section", 30)(2, "div", 31)(3, "table", 32)(4, "thead", 33)(5, "tr", 34)(6, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "th", 37)(9, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "DATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "PI/PO No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "INVOICE NUMBER");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "COMPANY NAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "UPLOADED BY");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "AMOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, BillUnderCollectionComponent_div_4_div_1_div_2_tr_22_Template, 18, 4, "tr", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r9.item1);
  }
}

function BillUnderCollectionComponent_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26)(1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, BillUnderCollectionComponent_div_4_div_1_div_2_Template, 23, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r7.showInvoice);
  }
}

function BillUnderCollectionComponent_div_4_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BillUnderCollectionComponent_div_4_div_2_div_2_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27);
      const data_r24 = restoredCtx.$implicit;
      const i_r25 = restoredCtx.index;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r26.getInvoices(data_r24, i_r25) && ctx_r26.getTransactions(data_r24.pi_poNo));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 14)(3, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 90)(5, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Continental carriers pvt ltd");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const data_r24 = ctx.$implicit;
    const i_r25 = ctx.index;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r18.lastIndex == i_r25 ? "activeBtn" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r24.pi_poNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", data_r24.sbdate, "");
  }
}

function BillUnderCollectionComponent_div_4_div_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BillUnderCollectionComponent_div_4_div_2_div_3_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31);
      const data_r28 = restoredCtx.$implicit;
      const i_r29 = restoredCtx.index;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r30.getInvoices(data_r28, i_r29));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 14)(3, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 96)(5, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Continental carriers pvt ltd");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const data_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", data_r28.pi_poNo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", data_r28.boeDate, "");
  }
}

function BillUnderCollectionComponent_div_4_div_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BillUnderCollectionComponent_div_4_div_2_div_4_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r35);
      const data_r32 = restoredCtx.$implicit;
      const i_r33 = restoredCtx.index;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r34.getInvoices(data_r32, i_r33));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 14)(3, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 96)(5, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Continental carriers pvt ltd");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const data_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", data_r32.boeNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", data_r32.boeDate, "");
  }
}

function BillUnderCollectionComponent_div_4_div_2_div_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 85)(1, "div", 97)(2, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 33)(5, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "SB DETAILS");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 27)(10, "div", 69)(11, "section", 30)(12, "tr", 100)(13, "td", 101)(14, "label", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "DISCHARGE PORT");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BillUnderCollectionComponent_div_4_div_2_div_93_Template_input_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r36.selectedRow.dischargePort = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "td", 104)(18, "label", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "IEC CODE");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "input", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BillUnderCollectionComponent_div_4_div_2_div_93_Template_input_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r38.selectedRow.iecCode = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "td", 107)(22, "label", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "IEC NAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "input", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BillUnderCollectionComponent_div_4_div_2_div_93_Template_input_ngModelChange_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r39.selectedRow.iecName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "td", 101)(27, "label", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "AD CODE");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "input", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BillUnderCollectionComponent_div_4_div_2_div_93_Template_input_ngModelChange_29_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r40.selectedRow.adCode = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "p", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "INVOICE DETAILS");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "td", 101)(33, "label", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "INVOICE NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "input", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BillUnderCollectionComponent_div_4_div_2_div_93_Template_input_ngModelChange_35_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r41.selectedRow.invoiceNumber = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "td", 104)(37, "label", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "INVOICE AMOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "input", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BillUnderCollectionComponent_div_4_div_2_div_93_Template_input_ngModelChange_39_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r42.selectedRow.invoiceAmount = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "td", 107)(41, "label", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "CURRENCY");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "input", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BillUnderCollectionComponent_div_4_div_2_div_93_Template_input_ngModelChange_43_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r43.selectedRow.currency = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "td", 101)(46, "label", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "SETTELED AMOIUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "input", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BillUnderCollectionComponent_div_4_div_2_div_93_Template_input_ngModelChange_48_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r44.selectedRow.settledAmount = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "td", 104)(50, "label", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "STATUS");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "input", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BillUnderCollectionComponent_div_4_div_2_div_93_Template_input_ngModelChange_52_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r45.selectedRow.status = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "p", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "FOB and FREIGHT");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "td", 104)(57, "label", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "FREIGHT AMOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "input", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BillUnderCollectionComponent_div_4_div_2_div_93_Template_input_ngModelChange_59_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r46.selectedRow.freightAmount = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "td", 107)(61, "label", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "FREIGHT CURRENCY");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "input", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BillUnderCollectionComponent_div_4_div_2_div_93_Template_input_ngModelChange_63_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r47.selectedRow.freightCurrency = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "p", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "INSURANCE");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "td", 104)(68, "label", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "INSURANCE AMOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "input", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BillUnderCollectionComponent_div_4_div_2_div_93_Template_input_ngModelChange_70_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r48.selectedRow.insuranceAmount = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "td", 107)(72, "label", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "INSURANCE CURRENCY");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "input", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BillUnderCollectionComponent_div_4_div_2_div_93_Template_input_ngModelChange_74_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r49.selectedRow.insuranceCurrency = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "p", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "DISCOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "td", 104)(78, "label", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "DISCOUNT AMOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "input", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BillUnderCollectionComponent_div_4_div_2_div_93_Template_input_ngModelChange_80_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r50.selectedRow.discountAmount = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "td", 107)(82, "label", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "DISCOUNT CURRENCY");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "input", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BillUnderCollectionComponent_div_4_div_2_div_93_Template_input_ngModelChange_84_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r51.selectedRow.discountCurrency = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](85, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "p", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "MISCELLANEOUS");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "td", 104)(89, "label", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "MISCELLANEOUS AMOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "input", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BillUnderCollectionComponent_div_4_div_2_div_93_Template_input_ngModelChange_91_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r52.selectedRow.miscellaneousAmount = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "td", 107)(93, "label", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "MISCELLANEOUS CURRENCY");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "input", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BillUnderCollectionComponent_div_4_div_2_div_93_Template_input_ngModelChange_95_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r53.selectedRow.miscellaneousCurrency = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "p", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "COMMISSION");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "td", 104)(99, "label", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "COMMISSION AMOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "input", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BillUnderCollectionComponent_div_4_div_2_div_93_Template_input_ngModelChange_101_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r54.selectedRow.commissionAmount = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "td", 107)(103, "label", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "COMMISSION CURRENCY");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "input", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BillUnderCollectionComponent_div_4_div_2_div_93_Template_input_ngModelChange_105_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r55.selectedRow.commissionCurrency = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
  }

  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("BOE NUMBER:\u2003", ctx_r21.selectedRow.boeNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("BOE DATE:\u2003", ctx_r21.selectedRow.boeDate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r21.selectedRow.dischargePort);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r21.selectedRow.iecCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r21.selectedRow.iecName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r21.selectedRow.adCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r21.selectedRow.invoiceNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r21.selectedRow.invoiceAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r21.selectedRow.currency);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r21.selectedRow.settledAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r21.selectedRow.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r21.selectedRow.freightAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r21.selectedRow.freightCurrency);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r21.selectedRow.insuranceAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r21.selectedRow.insuranceCurrency);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r21.selectedRow.discountAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r21.selectedRow.discountCurrency);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r21.selectedRow.miscellaneousAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r21.selectedRow.miscellaneousCurrency);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r21.selectedRow.commissionAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r21.selectedRow.commissionCurrency);
  }
}

function BillUnderCollectionComponent_div_4_div_2_div_109_tr_22_td_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Completed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function BillUnderCollectionComponent_div_4_div_2_div_109_tr_22_td_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Pending ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function BillUnderCollectionComponent_div_4_div_2_div_109_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BillUnderCollectionComponent_div_4_div_2_div_109_tr_22_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r61);
      const task_r57 = restoredCtx.$implicit;
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r60.viewTask(task_r57));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Submitted to Yes bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, BillUnderCollectionComponent_div_4_div_2_div_109_tr_22_td_5_Template, 2, 0, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, BillUnderCollectionComponent_div_4_div_2_div_109_tr_22_td_6_Template, 2, 0, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Download & Share icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const task_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", task_r57.transactionDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", task_r57.completed === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", task_r57.completed === false);
  }
}

function BillUnderCollectionComponent_div_4_div_2_div_109_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 143)(1, "section", 144)(2, "div")(3, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "All Transaction");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 147)(8, "span", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BillUnderCollectionComponent_div_4_div_2_div_109_Template_span_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r63);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r62.onNewTrans());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Create New Transaction");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "table", 149)(11, "thead")(12, "tr", 34)(13, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, BillUnderCollectionComponent_div_4_div_2_div_109_tr_22_Template, 9, 3, "tr", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r22.allTransactions);
  }
}

function BillUnderCollectionComponent_div_4_div_2_div_110_Template(rf, ctx) {
  if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 152)(1, "p", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Setup: 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Create Transaction:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Select a bank*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Yes Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "br")(11, "input", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Axis Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "br")(15, "input", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "label", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Any Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 161)(20, "button", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BillUnderCollectionComponent_div_4_div_2_div_110_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r65);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r64.showThisPdf(ctx_r64.selectedRow.pi_poNo));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Generate Document ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Assign Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}

function BillUnderCollectionComponent_div_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 45)(1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, BillUnderCollectionComponent_div_4_div_2_div_2_Template, 11, 3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, BillUnderCollectionComponent_div_4_div_2_div_3_Template, 11, 2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, BillUnderCollectionComponent_div_4_div_2_div_4_Template, 11, 2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 49)(6, "div", 50)(7, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 52)(9, "input", 53)(10, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ul", 55)(12, "div")(13, "ul", 55)(14, "li", 56)(15, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "li", 56)(18, "label", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Additional Documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "li", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BillUnderCollectionComponent_div_4_div_2_Template_li_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r67);
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r66.toggleStep1());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Transaction and Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 61)(24, "div", 62)(25, "div", 63)(26, "div", 64)(27, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 66)(30, "div", 33)(31, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "PI/PO DETAILS");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 33)(34, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 27)(37, "div", 69)(38, "section", 70)(39, "div", 71)(40, "div", 72)(41, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "PI/PO NO.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 75)(46, "div", 76)(47, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Benne Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 71)(52, "div", 76)(53, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 71)(58, "div", 76)(59, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 75)(64, "div", 76)(65, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "LEO DATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 71)(70, "div", 76)(71, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "Last Day Of Shipment");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 71)(76, "div", 76)(77, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Payment Term");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 75)(82, "div", 76)(83, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "PC Ref No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 71)(88, "div", 76)(89, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "Due Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](93, BillUnderCollectionComponent_div_4_div_2_div_93_Template, 106, 21, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "div", 78)(95, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](96, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div", 81)(98, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, "Drag a document here");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, "or");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "div", 83)(105, "div", 84)(106, "div", 85)(107, "div", 27)(108, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](109, BillUnderCollectionComponent_div_4_div_2_div_109_Template, 23, 1, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](110, BillUnderCollectionComponent_div_4_div_2_div_110_Template, 24, 0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r8.item1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r8.item2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r8.item2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-index", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-index", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-index", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-index", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-index", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-index", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-index", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("SB NUMBER:\u2003", ctx_r8.selectedRow.pi_poNo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("SHIPPING BILL DATE:\u2003", ctx_r8.selectedRow.sbdate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r8.selectedRow.pi_poNo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r8.selectedRow.benneName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r8.selectedRow.currency, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r8.selectedRow.amount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r8.selectedRow.incoterm, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r8.selectedRow.lastDayShipment, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r8.selectedRow.paymentTerm, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r8.selectedRow.pcRefNo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r8.selectedRow.dueDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.selectedRow.boeNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-index", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-index", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r8.step1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.step1);
  }
}

function BillUnderCollectionComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BillUnderCollectionComponent_div_4_div_1_Template, 3, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, BillUnderCollectionComponent_div_4_div_2_Template, 111, 26, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r2.showInvoice);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.showInvoice);
  }
}

function BillUnderCollectionComponent_div_5_p_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BillUnderCollectionComponent_div_5_p_13_Template_p_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r74);
      const bene_r72 = restoredCtx.$implicit;
      const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r73.clickPipo("PI", bene_r72.pi_poNo, bene_r72.benneName, bene_r72.amount));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const bene_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" PI-", bene_r72.pi_poNo, "-", bene_r72.benneName, "");
  }
}

function BillUnderCollectionComponent_div_5_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " You can't add PI/PO with different Beneficiary Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function BillUnderCollectionComponent_div_5_p_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "i", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BillUnderCollectionComponent_div_5_p_16_Template_i_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r78);
      const i_r76 = restoredCtx.index;
      const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r77.removePipo(i_r76));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r75 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", data_r75, " ");
  }
}

function BillUnderCollectionComponent_div_5_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 190)(1, "div", 191)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Invoice Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 191)(7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Total Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 191)(12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 191)(17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Remittance Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "input", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function BillUnderCollectionComponent_div_5_div_20_Template_input_input_19_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r82);
      const i_r80 = restoredCtx.index;
      const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r81.amountFun($event.target.value, i_r80));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const bene_r79 = ctx.$implicit;
    const i_r80 = ctx.index;
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](bene_r79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r71.amountArray[i_r80]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r71.amountArray[i_r80]);
  }
}

function BillUnderCollectionComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "h3", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 165)(4, "label", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Select PIPO*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 167)(7, "span", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 170)(11, "i", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, BillUnderCollectionComponent_div_5_p_13_Template, 3, 2, "p", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, BillUnderCollectionComponent_div_5_div_14_Template, 2, 0, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, BillUnderCollectionComponent_div_5_p_16_Template, 3, 1, "p", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 177)(18, "p", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Invoice Amount in USD (Amount mentioned while uploading Proforma Invoice)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, BillUnderCollectionComponent_div_5_div_20_Template, 20, 3, "div", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Total Amout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "p", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "USD");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 177)(27, "p", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Select a bank*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "input", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BillUnderCollectionComponent_div_5_Template_input_ngModelChange_29_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r84);
      const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r83.myRadio = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "label", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Yes Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "input", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BillUnderCollectionComponent_div_5_Template_input_ngModelChange_33_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r84);
      const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r85.myRadio = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "label", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Axis Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "br")(37, "input", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "label", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Any Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "button", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BillUnderCollectionComponent_div_5_Template_button_click_41_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r84);
      const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r86.showThisPdf1("aa"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("New Bill Lodgement/ ", ctx_r3.file1, " - Step 1 - Create transaction");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.pipoValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.item1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.alertToggle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.arrayData);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.pipoArr);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.amount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r3.myRadio);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r3.myRadio);
  }
}

let BillUnderCollectionComponent = /*#__PURE__*/(() => {
  class BillUnderCollectionComponent {
    constructor(documentService, router, route, wininfo) {
      this.documentService = documentService;
      this.router = router;
      this.route = route;
      this.wininfo = wininfo;
      this.item = [];
      this.item1 = [];
      this.export = false;
      this.import = false;
      this.showPdf = false;
      this.greaterAmount = 0;
      this.selectedDoc = "";
      this.allTransactions = [];
      this.outTog = false;
      this.pipoValue = 'Select PI/PO';
      this.arrayData = [];
      this.pipoArr = [];
      this.beneArray = [];
      this.amountArray = [];
      this.amountArray1 = [];
      console.log("hello");
    }

    ngOnInit() {
      //window.location.reload();
      this.wininfo.set_controller_of_width(270, '.content-wrap');
      this.route.params.subscribe(params => {
        this.file = this.route.snapshot.params['file'];
        this.showInvoice = false;
        console.log("hello");

        if (this.file === 'lcUsance') {
          console.log("hello1");
          this.doc = "Lc Usance";
        } else if (this.file === 'lcSight') {
          console.log("hello2");
          this.doc = "Lc Sight";
        } else if (this.file === 'nonlcUsance') {
          console.log("hello3");
          this.doc = "Non Lc Usance";
        } else if (this.file === 'nonlcSight') {
          console.log("hello4");
          this.doc = "Non Lc Sight";
        }
      });
      this.file = this.route.snapshot.paramMap.get('file');
      this.bene = this.route.snapshot.paramMap.get('bene');
      this.amount = parseInt(this.route.snapshot.paramMap.get('amount'));
      this.pipo = this.route.snapshot.paramMap.get('pipo');
      this.pipo_id = this.route.snapshot.paramMap.get('pipo_id');

      if (this.file == 'nonlcUsance') {
        this.file1 = 'Non LC Usance';
      } else if (this.file == 'nonlcSight') {
        this.file1 = 'Non LC Sight';
      } else if (this.file == 'lcSight') {
        this.file1 = 'LC Sight';
      } else if (this.file == 'lcUsance') {
        this.file1 = 'LC Usance';
      }

      if (this.pipo) {
        console.log(this.pipo);
        this.pipoValue = 'Select PI/PO';
        this.arrayData.push("PI" + "-" + this.pipo + "-" + this.bene);
        this.beneArray.push(this.bene);
        this.beneArray.push(this.bene);
        this.pipoArr.push(this.pipo);
        this.amountArray.push(this.amount);
        this.outTog = true;
      }

      this.documentService.getPipo().subscribe(res => {
        console.log("HEre Response", res);
        this.item = res.data;
        console.log("all pipo", this.item);

        for (let value of this.item) {
          console.log(value);

          if (value['file'] == 'import') {
            this.item1.push(value);
          }
        }
      }, err => console.log(err));
    }

    getTransactions(selectedRowValues) {
      this.documentService.getTask({
        pi_poNo: selectedRowValues,
        file: this.file
      }).subscribe(res => {
        this.allTransactions = res.task;
        console.log("ALL TRANSACTIONS", this.allTransactions);
      }, err => console.log(err));
    }

    getInvoices(selectedRowValues, i) {
      console.log("SELECTED", selectedRowValues);
      console.log("INDEX", i);
      this.lastIndex = i;
      return this.selectedRow = selectedRowValues, this.showInvoice = true, this.tableWidth = "30%", this.greaterAmount = parseInt(this.selectedRow.amount);
    }

    clickPipo(a, b, c, d) {
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
        this.router.navigate(['home/payment-acceptance', {
          pipo: data.pi_poNo,
          pipo_id: this.pipo_id,
          file: this.file
        }]);
      } else {
        this.router.navigateByUrl(`/home/completed-task/${data._id}`);
      }
    }

    showThisPdf(piPo) {
      let a = [];
      a.push(piPo);
      this.pipoArr = a;
      this.documentService.draft = false;
      this.router.navigate(['home/payment-acceptance', {
        pipo: this.pipoArr,
        amount: this.selectedRow.amount,
        pipo_id: this.pipo_id,
        file: this.file
      }]);
    }

    showThisPdf1(piPo) {
      this.documentService.draft = false;
      console.log(this.myRadio);

      if (this.myRadio == 'axisBank') {
        console.log("h");
        this.router.navigate(['home/payment-acceptance', {
          pipo: this.pipoArr,
          amount: this.amount,
          pipo_id: this.pipo_id,
          file: this.file
        }]);
      } else {
        this.router.navigate(['home/payment-acceptance', {
          pipo: this.pipoArr,
          amount: this.amount,
          pipo_id: this.pipo_id,
          file: this.file
        }]);
      }
    }

  }

  BillUnderCollectionComponent.ɵfac = function BillUnderCollectionComponent_Factory(t) {
    return new (t || BillUnderCollectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_document_service__WEBPACK_IMPORTED_MODULE_0__.DocumentService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_window_information_service__WEBPACK_IMPORTED_MODULE_1__.WindowInformationService));
  };

  BillUnderCollectionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: BillUnderCollectionComponent,
    selectors: [["app-bill-under-collection"]],
    decls: 6,
    vars: 4,
    consts: [[1, "content-wrap", "pb-2", "scroll-bar-main"], ["id", "content", "role", "main", 1, "content", "table-padding"], ["class", "table_top", 4, "ngIf"], ["class", "header-panel", 4, "ngIf"], ["class", "analytics", 4, "ngIf"], [4, "ngIf"], [1, "table_top"], [1, "header-panel"], [1, "bcw", 2, "font-size", "14px", "float", "left", "margin-left", "50px", "font-weight", "500"], [2, "width", "100%", "font-weight", "300", "padding-left", "1%"], [2, "font-weight", "400"], [2, "width", "100%", "padding-right", "4%"], ["style", "float: right; margin-right: 3%", 4, "ngFor", "ngForOf"], [2, "float", "right", "margin-right", "3%"], ["src", "./assets/images/cc1d1196dbafb374fe2d91e177dc16f8517532d6.png", "height", "30px", "width", "30px", 1, "image"], [2, "display", "flex", "align-items", "center"], [1, "heading1"], [1, "dropdown"], ["name", "subject", "id", "subject"], ["value", "", "selected", "selected"], ["name", "topic", "id", "topic"], [2, "padding-top", "0.7%"], [1, "upload-button", 3, "routerLink"], [1, "analytics"], ["style", "width: 100%", "class", "analytics-side", 4, "ngIf"], ["class", "p-8 bc", "style", "padding-left: 0.8%", 4, "ngIf"], [1, "analytics-side", 2, "width", "100%"], [1, "row", 2, "width", "100%"], ["class", "col-12 mb-lg padding", 4, "ngIf"], [1, "col-12", "mb-lg", "padding"], [1, "widget", "pb-0", "box-shadow"], [1, "widget-body", "p-0", "support", "table-wrapper"], [1, "table", "table-striped", "mb-0", 2, "width", "100%"], [2, "width", "100%"], [1, "text-muted", "table-heading"], [1, "rect"], ["src", "./assets/Rectangle-13.png"], ["scope", "col", 1, "col-td-th-3"], [1, "pl-3"], ["class", "table-tr", 3, "click", 4, "ngFor", "ngForOf"], [1, "table-tr", 3, "click"], [1, "pl-4", "fw-normal"], [1, "col-td-th-3"], [4, "ngFor", "ngForOf"], ["src", "./assets/images/cc1d1196dbafb374fe2d91e177dc16f8517532d6.png", "height", "30px", "width", "30px", 1, "image", "image2"], [1, "p-8", "bc", 2, "padding-left", "0.8%"], [1, "side_document_list"], ["id", "profile", "class", "profile_class", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["id", "profile", "class", "", 3, "click", 4, "ngFor", "ngForOf"], [1, "invoices_tab"], [1, "invoices_inner"], [1, "tabbed"], ["type", "radio", "id", "1", "name", "css-tabs", "checked", ""], ["type", "radio", "id", "2", "name", "css-tabs"], ["type", "radio", "id", "3", "name", "css-tabs"], [1, "tabs"], [1, "tab"], ["for", "1"], ["for", "2"], [1, "tab", 3, "click"], ["for", "3"], [1, "tab-content", "form-wrapper"], [1, "inner_tab_content"], [2, "background-color", "white", "width", "100%", "height", "100vh", "padding-right", "60px"], [1, "serial_detail"], [2, "width", "100%", "float", "right", "font-size", "14px", "margin-top", "18.77px", "color", "black"], [1, "invoice_head"], [2, "width", "65%", "float", "left", "font-size", "20px", "font-weight", "500"], [2, "float", "right", "font-weight", "500", "font-size", "14px", "color", "black"], [1, "col-12", "mb-lg", "padding", 2, "width", "100%"], [1, "widget", "pb-0", "box-shadow", 2, "padding-left", "45px", "display", "grid", "grid-template-columns", "33% 33% 33%", "margin-top", "3%"], [2, "width", "85%", "margin-bottom", "24px", "border-radius", "8px", "box-shadow", "4px 4px 8px 4px #eeeefa", "border-left", "3px solid #e7845f"], [2, "height", "100px", "padding-top", "5%", "padding-bottom", "17px", "padding-left", "3%"], [2, "color", "#72768a !important", "font-size", "102%"], [2, "margin-left", "5%", "color", "#000000", "font-size", "102%"], [2, "width", "85%", "margin-bottom", "24px", "border-radius", "8px", "box-shadow", "4px 4px 8px 4px #eeeefa", "border-left", "3px solid #5fe6e7"], [2, "height", "100px", "padding-top", "14px", "padding-bottom", "17px", "padding-left", "3%"], ["style", "width: 98%; background-color: 'white'", 4, "ngIf"], [1, "tab-content", "form-wrapper", 2, "height", "100vh", "padding-left", "20px", "padding-top", "4%", "background-color", "white", "width", "97%"], ["method", "POST", 1, "form"], ["id", "dropzone", 1, "dropzone", "dropzone-container"], [1, "form_inner"], ["type", "submit"], [1, "tab-content", "form-wrapper", 2, "height", "100vh", "overflow", "hidden", "padding", "4% 0", "background-color", "white"], [2, "width", "105%"], [2, "width", "98%", "background-color", "white"], ["style", "width: 100%", "class", "transaction_tab", 4, "ngIf"], ["class", "radio1", "style", "\n                            margin-left: 10px;\n                            padding: 4% 0;\n                            padding-left: 3%;\n                          ", 4, "ngIf"], ["id", "profile", 1, "profile_class", 3, "ngClass", "click"], [1, "", 2, "display", "flex"], [1, "", 2, "width", "100%", "padding", "3%"], [1, "fl", "fs16"], [1, "fr", "fs12", 2, "float", "right"], [1, "fs14"], ["id", "profile", 1, "", 3, "click"], [1, "ph-10", "fl"], [1, ""], [2, "width", "100%", "margin-top", "10px"], [2, "width", "35%", "float", "right", "font-size", "14px"], [2, "width", "65%", "float", "left", "font-size", "16px", "margin-top", "20px", "padding-left", "25px"], [1, "form-wrapper1"], [1, "full-input", "border1"], ["for", "dischargePort"], ["type", "text", "name", "dischargePort", 1, "smalll-input", 3, "ngModel", "ngModelChange"], [1, "full-input", "border2"], ["for", "iecCode"], ["type", "text", "name", "iecCode", 1, "smalll-input", 3, "ngModel", "ngModelChange"], [1, "full-input", "border3"], ["for", "iecName"], ["type", "text", "name", "iecName", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "adCode"], ["type", "text", "name", "adCode", 1, "smalll-input", 3, "ngModel", "ngModelChange"], [1, "sh1"], ["for", "invoiceNumber"], ["type", "text", "name", "invoiceNumber", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "invoiceAmount"], ["type", "text", "name", "invoiceAmount", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "currency"], ["type", "text", "name", "currency", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "settledAmount"], ["type", "text", "name", "settledAmount", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "status"], ["type", "text", "name", "status", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "freightAmount"], ["type", "text", "name", "freightAmount", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "freightCurrency"], ["type", "text", "name", "freightCurrency", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "insuranceAmount"], ["type", "text", "name", "insuranceAmount", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "insuranceCurrency"], ["type", "text", "name", "insuranceCurrency", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "discountAmount"], ["type", "text", "name", "discountAmount", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "discountCurrency"], ["type", "text", "name", "discountCurrency", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "miscellaneousAmount"], ["type", "text", "name", "miscellaneousAmount", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "miscellaneousCurrency"], ["type", "text", "name", "miscellaneousCurrency", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "commissionAmount"], ["type", "text", "name", "commissionAmount", 1, "smalll-input", 3, "ngModel", "ngModelChange"], ["for", "commissionCurrency"], ["type", "text", "name", "commissionCurrency", 1, "smalll-input", 3, "ngModel", "ngModelChange"], [1, "transaction_tab", 2, "width", "100%"], [1, "widget", "pb-0", "box-shadow", 2, "display", "flex", "justify-content", "space-between", "margin-bottom", "4%"], [1, "at", 2, "border-right", "1px solid black", "color", "#49a2d7"], [1, "at"], [2, "height", "100%"], [1, "ctb", 3, "click"], [1, "table", "table-hover"], ["class", "table-row", 3, "click", 4, "ngFor", "ngForOf"], [1, "table-row", 3, "click"], [1, "radio1", 2, "margin-left", "10px", "padding", "4% 0", "padding-left", "3%"], [1, "stp1"], [1, "stp2"], [1, "stp3"], ["type", "radio", "name", "bank", "value", "Yes Bank", 1, "circular_input"], ["for", "male", 1, "label1"], ["type", "radio", "name", "bank", "value", "Axis Bank", 1, "circular_input"], ["for", "female", 1, "label1"], ["type", "radio", "name", "bank", "value", "Any Bank", 1, "circular_input"], [2, "display", "flex", "width", "100%", "margin-top", "5%", "justify-content", "left"], [1, "opt", 2, "margin-right", "1%", 3, "click"], [1, "opt"], [1, "heading"], [2, "display", "flex", "align-items", "center", "margin-left", "67px"], [2, "flex-direction", "row", "font-size", "20px", "color", "RGB(48, 48, 48)", "margin-right", "30px"], [1, "customDropdown", 2, "flex-direction", "row"], [2, "color", "#323e4a !important", "min-width", "150px"], [1, "dropIco", 2, "float", "right"], ["id", "down3", 1, "fas", "fa-angle-down"], ["id", "up3", 1, "fas", "fa-angle-up", 2, "display", "none"], [1, "dropdown-content", 2, "margin-top", "-2px"], [3, "click", 4, "ngFor", "ngForOf"], ["style", "color: red;", 4, "ngIf"], [2, "margin-left", "224px"], ["class", "arrayData", 4, "ngFor", "ngForOf"], [2, "margin-left", "67px", "margin-top", "30px"], [2, "font-size", "20px", "color", "RGB(96, 102, 112)", "font-weight", "400"], ["style", "display: flex; margin-bottom: 20px;", 4, "ngFor", "ngForOf"], [2, "border", "1px solid RGBA(0, 0, 0, 0.05)", "height", "37px", "border-radius", "20px", "width", "40%", "color", "RGB(165, 170, 179)", "padding", "5px"], [2, "float", "right"], [2, "color", "RGB(74, 74, 74)", "font-size", "14px"], ["type", "radio", "id", "options1", "value", "yesBank", 1, "circular_input", 3, "ngModel", "ngModelChange"], ["type", "radio", "id", "options2", "value", "axisBank", 1, "circular_input", 3, "ngModel", "ngModelChange"], [2, "width", "70px", "height", "30px", "border", "none", "background-color", "#49a2d7", "outline", "none", "color", "white", "margin-left", "70px", "border-radius", "20px", "margin-top", "20px", 3, "click"], [3, "click"], [2, "color", "red"], [1, "arrayData"], [1, "fas", "fa-times", 2, "float", "right", "margin", "4px 10px", 3, "click"], [2, "display", "flex", "margin-bottom", "20px"], [2, "margin-right", "20px"], [2, "font-size", "14px", "padding", "5px", "border", "1px solid rgb(107, 107, 107)", "border-radius", "20px"], ["type", "text", "name", "", "id", "", 2, "font-size", "14px", "padding", "5px", "border", "1px solid rgb(107, 107, 107)", "border-radius", "20px", "width", "100px", "margin-top", "-2px", 3, "input"]],
    template: function BillUnderCollectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, BillUnderCollectionComponent_div_2_Template, 10, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, BillUnderCollectionComponent_div_3_Template, 18, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, BillUnderCollectionComponent_div_4_Template, 3, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, BillUnderCollectionComponent_div_5_Template, 43, 9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showInvoice && !ctx.outTog);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.showInvoice && !ctx.outTog);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.outTog);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.outTog);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_4__.SlicePipe],
    styles: ["*[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.heading[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 20px;\n  font-weight: 700;\n  margin-left: 23px;\n  color: #323e4a;\n}\n\n.table-heading[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 500;\n  color: #747474;\n}\n\n.box-shadow[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n\n.table-padding[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fff;\n  border-radius: 10px;\n  margin: 0;\n  box-shadow: 0 2px 10px rgba(58, 53, 65, 0.1019607843);\n}\n\n.upload-button[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n  font-weight: 100;\n  font-family: Poppins, sans-serif;\n  padding: 5px 8px;\n  font-size: 14px;\n  background-color: #49A2D7;\n  border: none;\n  border-radius: 5px;\n  margin-left: 2px;\n  margin-right: 2rem;\n}\n\nbutton[_ngcontent-%COMP%] {\n  outline: none;\n}\n\n.table-row[_ngcontent-%COMP%] {\n  background-color: #ffffff !important;\n  color: #707683;\n}\n\n.table-row[_ngcontent-%COMP%]:hover {\n  background: #f6f9ff !important;\n  border-left: 5px solid #49a2d7;\n}\n\nselect[_ngcontent-%COMP%] {\n  text-decoration: none;\n  border: none;\n  background: none;\n  color: #49a2d7;\n}\n\nselect[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.rect[_ngcontent-%COMP%] {\n  text-align: right;\n  min-width: 80px !important;\n}\n\n.sb-no[_ngcontent-%COMP%] {\n  color: #49a2d7;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  height: 68px;\n  vertical-align: middle !important;\n}\n\n.image[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  margin-top: 12fvpx;\n}\n\n.image2[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  margin-left: -13px;\n}\n\n.fl[_ngcontent-%COMP%] {\n  float: \"left\";\n}\n\n.fr[_ngcontent-%COMP%] {\n  float: \"right\";\n}\n\nspan.fs20[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\nspan.fs16[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\np.fs14[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.fs12[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.p-4[_ngcontent-%COMP%] {\n  padding: 4px;\n}\n\n.p-8[_ngcontent-%COMP%] {\n  z-index: 5000;\n  transform: scale(1, 1);\n  display: grid;\n  grid-template-columns: 29% 70%;\n}\n\n.p-20[_ngcontent-%COMP%] {\n  padding: 20px !important;\n}\n\n.p-12[_ngcontent-%COMP%] {\n  padding: 12px !important;\n}\n\n.p-16[_ngcontent-%COMP%] {\n  padding: 16px !important;\n}\n\n.pr-4[_ngcontent-%COMP%] {\n  padding-right: 4px;\n}\n\n.pr-8[_ngcontent-%COMP%] {\n  padding-right: 8px !important;\n}\n\n.pr-16[_ngcontent-%COMP%] {\n  padding-right: 16px;\n}\n\n.pt-30[_ngcontent-%COMP%] {\n  padding-top: 30px !important;\n}\n\n.pt-28[_ngcontent-%COMP%] {\n  padding-top: 28px !important;\n}\n\n.pt-25[_ngcontent-%COMP%] {\n  padding-top: 25px !important;\n}\n\n.pt-24[_ngcontent-%COMP%] {\n  padding-top: 24px !important;\n}\n\n.pt-22[_ngcontent-%COMP%] {\n  padding-top: 22px !important;\n}\n\n.pt-20[_ngcontent-%COMP%] {\n  padding-top: 20px !important;\n}\n\n.pt-19[_ngcontent-%COMP%] {\n  padding-top: 19px !important;\n}\n\n.pt-16[_ngcontent-%COMP%] {\n  padding-top: 16px !important;\n}\n\n.pt-14[_ngcontent-%COMP%] {\n  padding-top: 14px !important;\n}\n\n.pt-10[_ngcontent-%COMP%] {\n  padding-top: 10px !important;\n}\n\n.pt-8[_ngcontent-%COMP%] {\n  padding-top: 8px !important;\n}\n\n.pt-4[_ngcontent-%COMP%] {\n  padding-top: 4px;\n}\n\n.pt-2[_ngcontent-%COMP%] {\n  padding-top: 2px;\n}\n\n.pt-0[_ngcontent-%COMP%] {\n  padding-top: 0px !important;\n}\n\n.pb-28[_ngcontent-%COMP%] {\n  padding-bottom: 28px !important;\n}\n\n.pb-16[_ngcontent-%COMP%] {\n  padding-bottom: 16px !important;\n}\n\n.pv-4[_ngcontent-%COMP%] {\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n\n.pv-8[_ngcontent-%COMP%] {\n  padding-top: 8px !important;\n  padding-bottom: 8px !important;\n}\n\n.pv-10[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.pv-20[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.pv-14[_ngcontent-%COMP%] {\n  padding-top: 14px !important;\n  padding-bottom: 14px !important;\n}\n\n.pv-16[_ngcontent-%COMP%] {\n  padding-top: 16px !important;\n  padding-bottom: 16px !important;\n}\n\n.ph-5[_ngcontent-%COMP%] {\n  padding-right: 5px !important;\n  padding-left: 5px !important;\n}\n\n.ph-16[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n.ph-8[_ngcontent-%COMP%] {\n  padding-left: 8px !important;\n  padding-right: 8px !important;\n}\n\n.ph-10[_ngcontent-%COMP%] {\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n}\n\n.ph-4[_ngcontent-%COMP%] {\n  padding-left: 4px;\n  padding-right: 4px;\n}\n\n.ph-32[_ngcontent-%COMP%] {\n  padding-left: 32px;\n  padding-right: 32px;\n}\n\n.ph-38[_ngcontent-%COMP%] {\n  padding-left: 38px;\n  padding-right: 38px;\n}\n\n.ph-44[_ngcontent-%COMP%] {\n  padding-left: 44px;\n  padding-right: 44px;\n}\n\n.bb[_ngcontent-%COMP%] {\n  border-bottom: 0.1px solid #d3d3d3;\n  border-right: 0.1px solid #d3d3d3;\n}\n\n.bc[_ngcontent-%COMP%] {\n  background-color: #f8fafd;\n}\n\n.bcw[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #323e4a !important;\n}\n\n\n\n\n\n.m-4[_ngcontent-%COMP%] {\n  margin: 4px !important;\n}\n\n.m-8[_ngcontent-%COMP%] {\n  margin: 8px !important;\n}\n\n.m-16[_ngcontent-%COMP%] {\n  margin: 16px !important;\n}\n\n.mr-20[_ngcontent-%COMP%] {\n  margin-right: 20px !important;\n}\n\n.mr-8[_ngcontent-%COMP%] {\n  margin-right: 8px !important;\n}\n\n.ml-20[_ngcontent-%COMP%] {\n  margin-left: 20px !important;\n}\n\n.ml-24[_ngcontent-%COMP%] {\n  margin-left: 24px !important;\n}\n\n.mt-4[_ngcontent-%COMP%] {\n  margin-top: 4px !important;\n}\n\n.mt-8[_ngcontent-%COMP%] {\n  margin-top: 8px !important;\n}\n\n.mt-16[_ngcontent-%COMP%] {\n  margin-top: 16px !important;\n}\n\n.mt-24[_ngcontent-%COMP%] {\n  margin-top: 24px !important;\n}\n\n.mt-38[_ngcontent-%COMP%] {\n  margin-top: 38px !important;\n}\n\n.mh-8[_ngcontent-%COMP%] {\n  margin-left: 8px !important;\n  margin-right: 8px !important;\n}\n\n.mh-16[_ngcontent-%COMP%] {\n  margin-left: 16px !important;\n  margin-right: 16px !important;\n}\n\n.mv-4[_ngcontent-%COMP%] {\n  margin-top: 4px !important;\n  margin-bottom: 4px !important;\n}\n\n.mv-16[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  margin-bottom: 16px;\n}\n\n.mv-24[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  margin-bottom: 24px;\n}\n\n.mh--16[_ngcontent-%COMP%] {\n  margin-left: -16px !important;\n  margin-right: -16px !important;\n}\n\n.mh-8[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n.w100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.w70[_ngcontent-%COMP%] {\n  width: 70%;\n}\n\n.w50[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.w30[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.pc1[_ngcontent-%COMP%] {\n  width: 44.5%;\n  height: 35px;\n  float: right;\n  border-left: 1px solid rgb(104, 103, 103);\n}\n\n.tabbed[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  \n  background-color: #f8fafd;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding-right: 28px;\n  padding-left: 32px;\n}\n\n.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  \n  display: none;\n}\n\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  list-style: none;\n  background-color: white;\n  height: 100%;\n  padding: 1% 0;\n  padding-left: 30px;\n  margin-left: -30px;\n  width: 113%;\n}\n\n.tabs[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.tab[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 10px;\n  padding-right: 12px;\n  color: #606670;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-right: 10px;\n  border-right: 1px solid black;\n}\n\n.tab[_ngcontent-%COMP%]:hover   label[_ngcontent-%COMP%] {\n  border-top-color: #333;\n  color: #333;\n}\n\n.tab-content[_ngcontent-%COMP%] {\n  display: none;\n  color: #777;\n  background: #f8fafd;\n  margin: 10px !important;\n}\n\n\n\n.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(1):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(1)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(2):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(2)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(3):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(3)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(4):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(4)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(5):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(5)   label[_ngcontent-%COMP%] {\n  color: #49a2d7;\n  margin-right: 10px;\n}\n\n.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(1):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(1), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(2):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(2), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(3):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(3), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(4):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(4) {\n  display: block;\n}\n\n.hhu[_ngcontent-%COMP%]:active, .hhu[_ngcontent-%COMP%]:focus {\n  border: 2px solid red;\n}\n\n.form[_ngcontent-%COMP%] {\n  margin-left: 38px !important;\n  margin-right: 5%;\n  top: 50%;\n  left: 50%;\n  height: 316px;\n  background-color: white;\n  border: 1px dashed rgba(0, 0, 0, 0.4);\n}\n\n.form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif !important;\n  text-align: center;\n  line-height: 30px;\n  color: #303030;\n}\n\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-family: \"EuropaNuova-Regular\", sans-serif !important;\n  position: absolute;\n  margin: 0;\n  width: 89%;\n  height: 313px;\n  padding: 0;\n  outline: none;\n  cursor: pointer;\n  opacity: 0;\n}\n\n.form[_ngcontent-%COMP%]   .form_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  margin-left: 36.5%;\n  height: 42px;\n  cursor: pointer;\n  width: 160px;\n  background-color: #49a2d7;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #149174;\n  color: #0c5645;\n}\n\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  border: 0;\n}\n\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.xbutton[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #49a2d7;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.ybutton[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #0c354d;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.zbutton[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #947551;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.border1[_ngcontent-%COMP%] {\n  border-left: 3px solid #174d72;\n}\n\n.border2[_ngcontent-%COMP%] {\n  border-left: 3px solid #5fe6e7;\n}\n\n.border3[_ngcontent-%COMP%] {\n  border-left: 3px solid #e7845f;\n}\n\n.form-wrapper1[_ngcontent-%COMP%] {\n  flex-direction: column;\n  width: 100%;\n}\n\n.form-wrapper1[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 5.5%;\n}\n\n.form-wrapper1.td[_ngcontent-%COMP%] {\n  width: 100%;\n  width: 7%;\n}\n\n.full-input[_ngcontent-%COMP%] {\n  margin-left: 18px;\n  margin-bottom: 10px;\n  display: inline-block;\n  padding: 3px;\n  height: 74px;\n  width: 177px;\n  background-color: white;\n  border-radius: 5px;\n  box-shadow: 4px 4px 8px 4px #eeeefa;\n}\n\n.smalll-input[_ngcontent-%COMP%] {\n  width: 160px !important;\n  outline: none;\n  border: none;\n  display: block;\n  border-radius: 4px;\n  border: 1px solid #d5dbe8;\n  height: 35px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  padding: 5px 0px 5px 5px;\n  margin-bottom: 0px !important;\n  font-size: 12px;\n  font-weight: 500;\n  color: #72768a;\n}\n\n.sh1[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  margin-top: 15px;\n  font-size: 16px;\n  color: #606670;\n}\n\n.ss[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n\n#customers[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100% !important;\n  margin-left: 19px !important;\n  border-right: 1px solid #ddd;\n  border-left: 1px solid #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  height: 52px !important;\n  text-align: left;\n  font-weight: 300;\n  background-color: #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 52px !important;\n}\n\n.tab1[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  \n  display: inline-block;\n  height: 17px;\n  width: 17px;\n  color: #49a2d7;\n  margin-bottom: 10px;\n}\n\n.tab1[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + input[_ngcontent-%COMP%] {\n  background-color: #bfb;\n  border-color: #4c4;\n}\n\n.label1[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 10px;\n  padding-right: 12px;\n  color: #606670;\n  font-size: 12px;\n  letter-spacing: 1px;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-left: 30px;\n}\n\n.tab1[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.at[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding-right: 20px;\n  padding-left: 10px;\n}\n\n.ctb[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin-left: 210px;\n  background-color: #49a2d7;\n  padding: 12px 30px 11px 30px;\n  color: white;\n  border-radius: 4px;\n  cursor: pointer;\n  font-weight: 500;\n}\n\n.radio1[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  \n  display: inline-block;\n  height: 17px;\n  width: 17px;\n  color: #49a2d7;\n  margin-bottom: 10px;\n  border: 2px solid #49a2d7;\n}\n\n.radio1[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + input[_ngcontent-%COMP%] {\n  background-color: #bfb;\n  border-color: #4c4;\n}\n\n.label1[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 10px;\n  padding-right: 12px;\n  color: #606670;\n  font-size: 12px;\n  letter-spacing: 1px;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-left: 30px;\n}\n\n.radio1[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.stp1[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 500;\n  margin-bottom: 10px;\n  color: black;\n}\n\n.stp2[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin-bottom: 10px;\n  color: black;\n}\n\n.stp3[_ngcontent-%COMP%] {\n  color: #4a4a4a;\n  font-size: 14px;\n}\n\n.of1[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  font: 16px/26px Georgia, Garamond, Serif;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.side_document_list[_ngcontent-%COMP%] {\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 170vh;\n  border-right: 0.3px solid rgba(0, 0, 0, 0.2);\n}\n\n.profile_class[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  border-bottom: 0.3px solid rgba(0, 0, 0, 0.2);\n  padding: 3% 6%;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.activeBtn[_ngcontent-%COMP%] {\n  background-color: #f8fafd;\n  border-left: 8px solid rgb(61, 116, 197);\n}\n\n.table_top[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 29.55% 33% 30% 6%;\n  border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);\n  align-items: center;\n}\n\n.invoices_tab[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  height: 100vh;\n  background-color: #f8fafd;\n}\n\n.invoices_inner[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #f8fafd;\n}\n\n.inner_tab_content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  background-color: white;\n}\n\n.invoice_head[_ngcontent-%COMP%] {\n  width: 95%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 5%;\n}\n\n.serial_detail[_ngcontent-%COMP%] {\n  width: 93%;\n  margin-top: 10px;\n  display: flex;\n  justify-content: right;\n  text-align: right;\n  font-weight: 500;\n}\n\n.transaction_tab[_ngcontent-%COMP%] {\n  width: 770px;\n  height: 1387px;\n}\n\n.form_inner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  justify-content: center;\n}\n\n.opt[_ngcontent-%COMP%] {\n  background-color: #49a2d7;\n  padding: 0 3%;\n  height: 42px;\n  box-shadow: 4px 0px 7px #109cf1;\n  border: none;\n  color: white;\n}\n\n#container[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n.savBtn[_ngcontent-%COMP%] {\n  background-color: #49A2D7;\n  color: white;\n  border: 1px solid rgba(0, 0, 0, 0.4);\n  font-size: 14px;\n  cursor: pointer;\n  border-radius: 2px;\n  width: 60px;\n  margin-left: -2%;\n}\n\n.content-wrap[_ngcontent-%COMP%] {\n  z-index: 0;\n  height: 100vh;\n  position: absolute;\n  left: 260px;\n  margin: auto;\n  width: 78vw;\n}\n\n#container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  min-height: 100%;\n}\n\ntable[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.analytics[_ngcontent-%COMP%]   .support[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.header-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 0.8%;\n  padding-left: 1%;\n  padding-bottom: 0.8%;\n  border-bottom: 1px solid black;\n  width: 99%;\n}"]
  });
  return BillUnderCollectionComponent;
})();

/***/ }),

/***/ 73563:
/*!****************************************************************************!*\
  !*** ./src/app/home/bill-under-collection/bill-under-collection.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillUnderCollectionModule": () => (/* binding */ BillUnderCollectionModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7976);
/* harmony import */ var _confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../confirm-dialog/confirm-dialog.service */ 12579);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 93329);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ 35581);
/* harmony import */ var _shared_Data_Servies_shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared-Data-Servies/shared-data.service */ 10241);
/* harmony import */ var _shared_home_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-home.module */ 69408);
/* harmony import */ var _bill_under_collection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bill-under-collection.component */ 61534);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 64537);










let BillUnderCollectionModule = /*#__PURE__*/(() => {
  class BillUnderCollectionModule {}

  BillUnderCollectionModule.ɵfac = function BillUnderCollectionModule_Factory(t) {
    return new (t || BillUnderCollectionModule)();
  };

  BillUnderCollectionModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: BillUnderCollectionModule
  });
  BillUnderCollectionModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    providers: [_confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialogService, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal, _shared_Data_Servies_shared_data_service__WEBPACK_IMPORTED_MODULE_1__.SharedDataService],
    imports: [_shared_home_module__WEBPACK_IMPORTED_MODULE_2__.SharedHomeModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild([{
      path: "",
      component: _bill_under_collection_component__WEBPACK_IMPORTED_MODULE_3__.BillUnderCollectionComponent,
      pathMatch: "full"
    }]), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__.ModalModule.forRoot()]
  });
  return BillUnderCollectionModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](BillUnderCollectionModule, {
    declarations: [_bill_under_collection_component__WEBPACK_IMPORTED_MODULE_3__.BillUnderCollectionComponent],
    imports: [_shared_home_module__WEBPACK_IMPORTED_MODULE_2__.SharedHomeModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__.ModalModule]
  });
})();

/***/ })

}]);