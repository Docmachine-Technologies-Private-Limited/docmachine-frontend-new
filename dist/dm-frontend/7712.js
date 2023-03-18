"use strict";
(self["webpackChunkdm_frontend"] = self["webpackChunkdm_frontend"] || []).push([[7712],{

/***/ 39181:
/*!*****************************************************!*\
  !*** ./src/app/home/all-task/all-task.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllTaskComponent": () => (/* binding */ AllTaskComponent)
/* harmony export */ });
/* harmony import */ var _service_document_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/document.service */ 76852);
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/user.service */ 84981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 64537);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7976);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 20092);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 88692);











function AllTaskComponent_div_8_table_5_th_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function AllTaskComponent_div_8_table_5_tbody_15_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AllTaskComponent_div_8_table_5_tbody_15_tr_1_Template_tr_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.viewTask(data_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AllTaskComponent_div_8_table_5_tbody_15_tr_1_Template_td_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.viewTask(data_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " hshhs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", data_r5.transactionDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r5.pi_poNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", data_r5.file, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r5.bank);
  }
}

function AllTaskComponent_div_8_table_5_tbody_15_tr_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AllTaskComponent_div_8_table_5_tbody_15_tr_2_Template_tr_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      const data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.viewTask(data_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r5.transactionDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r5.pi_poNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", data_r5.file, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r5.bank);
  }
}

function AllTaskComponent_div_8_table_5_tbody_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tbody", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AllTaskComponent_div_8_table_5_tbody_15_tr_1_Template, 13, 4, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AllTaskComponent_div_8_table_5_tbody_15_tr_2_Template, 13, 4, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.pending && !data_r5.completed);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.completed && data_r5.completed);
  }
}

function AllTaskComponent_div_8_table_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table", 12)(1, "thead", 13)(2, "tr", 14)(3, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th", 17)(6, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "DATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "PI/PO No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Purpose Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Bank Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, AllTaskComponent_div_8_table_5_th_14_Template, 2, 0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, AllTaskComponent_div_8_table_5_tbody_15_Template, 3, 2, "tbody", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.pending || ctx_r1.completed);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.item1);
  }
}

function AllTaskComponent_div_8_table_6_tbody_16_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AllTaskComponent_div_8_table_6_tbody_16_tr_1_Template_tr_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26);
      const data_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r24.viewExportTask(data_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Yes Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r20.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r20.task.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", data_r20.fileType, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", data_r20.completed, " ");
  }
}

function AllTaskComponent_div_8_table_6_tbody_16_tr_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AllTaskComponent_div_8_table_6_tbody_16_tr_2_Template_tr_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30);
      const data_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r28.viewExportPendingTask(data_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Yes Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r20.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r20.task.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", data_r20.fileType, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", data_r20.completed, " ");
  }
}

function AllTaskComponent_div_8_table_6_tbody_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tbody", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AllTaskComponent_div_8_table_6_tbody_16_tr_1_Template, 13, 4, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AllTaskComponent_div_8_table_6_tbody_16_tr_2_Template, 13, 4, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r20 = ctx.$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", data_r20.completed == "yes" && ctx_r19.completed);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", data_r20.completed == "no" && ctx_r19.pending);
  }
}

function AllTaskComponent_div_8_table_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table", 12)(1, "thead", 13)(2, "tr", 14)(3, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th", 17)(6, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "DATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Number of task");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "File Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Bank Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, AllTaskComponent_div_8_table_6_tbody_16_Template, 3, 2, "tbody", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.item2);
  }
}

function AllTaskComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "section", 9)(4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AllTaskComponent_div_8_table_5_Template, 16, 2, "table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AllTaskComponent_div_8_table_6_Template, 17, 1, "table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.import);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.export);
  }
}

const _c0 = function (a0) {
  return {
    "my_class": a0
  };
};

let AllTaskComponent = /*#__PURE__*/(() => {
  class AllTaskComponent {
    constructor(documentService, route, formBuilder, userService, router) {
      this.documentService = documentService;
      this.route = route;
      this.formBuilder = formBuilder;
      this.userService = userService;
      this.router = router;
      this.export = false;
      this.import = true;
      this.showPdf = false;
      this.greaterAmount = 0;
      this.selectedDoc = "";
      this.allTransactions = [];
    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        this.file = this.route.snapshot.params['file'];
        this.showInvoice = false;
        console.log("hello");

        if (this.file === 'pending') {
          console.log("hello1");
          this.pending = true;
          this.completed = false;
          this.all = false;
        } else if (this.file === 'completed') {
          this.pending = false;
          this.completed = true;
          this.all = false;
        } else if (this.file === 'all') {
          this.pending = false;
          this.completed = false;
          this.all = true;
        }
      });
      this.documentService.getAllExport("hhh").subscribe(res => {
        console.log("HEre Response", res), this.item2 = res.data;
        console.log(this.item2);
      }, err => console.log(err));
      this.documentService.getAllTask("hhh").subscribe(res => {
        console.log("HEre Response", res), this.item1 = res.task;
        console.log(this.item1);
      }, err => console.log(err));
    }

    clicked(data) {
      this.data = data;
      console.log(data);
    }

    viewTask(data) {
      console.log(data);

      if (!data.completed) {
        this.documentService.task = data;
        this.documentService.draft = true; //data.pipoDetail["_id"] = data._id;

        this.documentService.pdfData = data.pipoDetail;

        if (data.bank == 'axisBank') {
          if (data.file == "inland") {
            this.router.navigate(['home/letterOfCreditInlandAxis', {
              pipo: data.pi_poNo,
              file: this.file
            }]);
          } else if (data.file == "import") {
            this.router.navigate(['home/letterOfCreditImportAxis', {
              pipo: data.pi_poNo,
              file: this.file
            }]);
          } else if (data.file == "boe") {
            this.router.navigateByUrl(`/home/direct-import-axis/${data.boeNumber}`);
          } else if (data.file == "advance") {
            if (parseInt(data.pipoDetail.amount) < 200000) {
              console.log("h1");
              this.documentService.pdfData = this.selectedRow;
              this.router.navigateByUrl(`/home/advance-remittance/${data.pi_poNo}`);
            } else {
              console.log(this.selectedDoc);
              console.log("h2");
              console.log("pipo", data.pi_poNo);
              this.router.navigateByUrl(`/home/advance-remittance-fbg/${data.pi_poNo}`);
            }
          } else if (data.file.startsWith('s')) {
            this.router.navigate(['home/a2cumApplication', {
              pipo: data.pi_poNo,
              file: data.file
            }]);
          }
        } else if (data.bank == 'yesBank') {
          if (data.file == "inland") {
            this.router.navigate(['home/letter-of-credit', {
              pipo: data.pi_poNo,
              file: this.file
            }]);
          } else if (data.file == "import") {
            this.router.navigate(['home/letterOfCreditImport', {
              pipo: data.pi_poNo,
              file: this.file
            }]);
          } else if (data.file == "boe") {
            this.router.navigateByUrl(`/home/inwardRemittanceBoe/${data.boeNumber}`);
          } else if (data.file == 'advance') {
            if (parseInt(data.pipoDetail.amount) < 200000) {
              this.documentService.pdfData = this.selectedRow;
              this.router.navigateByUrl(`/home/inwardRemittance/${data.pi_poNo}`);
            } else {
              console.log(this.selectedDoc);
              this.router.navigateByUrl(`/home/fbg-wavier/${data.pi_poNo}`);
            }
          } else if (data.file.startsWith('s')) {
            this.router.navigate(['home/a2cum-application-yesbank', {
              pipo: data.pi_poNo,
              file: data.file
            }]);
          }
        }
      } else {
        this.router.navigateByUrl(`/home/completed-task/${data._id}`);
      }
    }

    showThisPdf(piPo) {
      this.documentService.draft = false;
      console.log(this.myRadio);

      if (this.myRadio == 'axisBank') {
        console.log("h");

        if (parseInt(this.selectedRow.amount) < 200000) {
          console.log("h1");
          this.documentService.pdfData = this.selectedRow;
          this.router.navigateByUrl(`/home/advance-remittance/${piPo}`);
        } else {
          console.log(this.selectedDoc);
          console.log("h2");
          console.log("pipo", piPo);
          this.router.navigateByUrl(`/home/advance-remittance-fbg/${piPo}`);
        }
      } else {
        if (parseInt(this.selectedRow.amount) < 200000) {
          this.documentService.pdfData = this.selectedRow;
          this.router.navigateByUrl(`/home/inwardRemittance/${piPo}`);
        } else {
          console.log(this.selectedDoc);
          this.router.navigateByUrl(`/home/fbg-wavier/${piPo}`);
        }
      }
    }

    viewExportTask(data) {
      console.log(data);
      this.router.navigateByUrl(`/home/completedExport/${data._id}`);
    }

    viewExportPendingTask(data) {
      this.documentService.draft = true;
      this.documentService.task = data;

      if (data.fileType == 'BL') {
        this.router.navigateByUrl(`/home/bill-lodgement`);
      } else if (data.fileType == 'PCR') {
        this.router.navigateByUrl(`/home/packing-credit-request`);
      } else if (data.fileType == 'IRD') {
        this.router.navigateByUrl(`/home/Export/export-home`);
      }
    }

    import1() {
      this.import = !this.import;
      this.export = !this.export;
    }

    export1() {
      console.log("inside export");
      this.import = !this.import;
      this.export = !this.export;
    }

  }

  AllTaskComponent.ɵfac = function AllTaskComponent_Factory(t) {
    return new (t || AllTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_document_service__WEBPACK_IMPORTED_MODULE_0__.DocumentService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };

  AllTaskComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AllTaskComponent,
    selectors: [["app-all-task"]],
    decls: 9,
    vars: 7,
    consts: [[1, "content-wrap", 2, "margin-left", "0px"], ["id", "content", "role", "main", 1, "content", "table-padding"], [1, "analytics"], [1, "flex-container", 2, "margin-left", "50px"], [3, "ngClass", "click"], ["style", "width: 100%", "class", "analytics-side", 4, "ngIf"], [1, "analytics-side", 2, "width", "100%"], [1, "row", 2, "width", "100%"], [1, "col-12", "mb-lg", "padding", 2, "width", "100%", "margin", "0 -1.5%"], [1, "widget", "pb-0", "box-shadow", 2, "width", "100%", "margin-left", "0"], [1, "widget-body", "p-0", "support", "table-wrapper", 2, "margin", "0 -2%"], ["style", "width: 100%", "class", "table table-striped mb-0", 4, "ngIf"], [1, "table", "table-striped", "mb-0", 2, "width", "100%"], [2, "width", "100%"], [1, "text-muted", "table-heading"], [1, "rect"], ["src", "./assets/Rectangle-13.png"], ["scope", "col", 1, "col-td-th-3"], [1, "pl-3"], ["scope", "col", 4, "ngIf"], ["class", "text-dark", 4, "ngFor", "ngForOf"], ["scope", "col"], [1, "text-dark"], ["class", "table-row", 3, "click", 4, "ngIf"], [1, "table-row", 3, "click"], [1, "pl-4", "fw-normal"], [1, "col-td-th-3"], [3, "click"], ["class", "table-tr", 3, "click", 4, "ngIf"], [1, "table-tr", 3, "click"]],
    template: function AllTaskComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "main", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AllTaskComponent_Template_div_click_4_listener() {
          return ctx.import1();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Import");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AllTaskComponent_Template_div_click_6_listener() {
          return ctx.export1();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Export ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AllTaskComponent_div_8_Template, 7, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, ctx.import == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c0, ctx.export == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.showInvoice);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
    styles: ["*[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.heading[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 20px;\n  font-weight: 700;\n  color: #323e4a;\n}\n\n.dropdown[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.table-heading[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 500;\n  color: #747474;\n}\n\ntable[_ngcontent-%COMP%] {\n  margin-left: 29px;\n  width: 98% !important;\n}\n\n.box-shadow[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n\n.table-padding[_ngcontent-%COMP%] {\n  background: white !important;\n  margin-top: 0px;\n}\n\n.upload-button[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 400;\n  border: none;\n  float: right;\n  margin-top: -12px;\n  margin-right: 30px;\n  height: 42px;\n  width: 160px;\n  background-color: #49a2d7;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n}\n\nbutton[_ngcontent-%COMP%] {\n  outline: none;\n}\n\n.table-row[_ngcontent-%COMP%] {\n  background-color: #ffffff !important;\n  color: #707683;\n  border-left: 2px solid #fff;\n}\n\n.table-row[_ngcontent-%COMP%]:hover {\n  background: #f6f9ff !important;\n  border-left: 2px solid #49a2d7;\n}\n\nselect[_ngcontent-%COMP%] {\n  text-decoration: none;\n  border: none;\n  background: none;\n  color: #49a2d7;\n}\n\nselect[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.rect[_ngcontent-%COMP%] {\n  text-align: right;\n  min-width: 80px !important;\n}\n\n.sb-no[_ngcontent-%COMP%] {\n  color: #49a2d7;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  height: 68px;\n  vertical-align: middle !important;\n}\n\n.image[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  margin-top: 12fvpx;\n}\n\n.image2[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  margin-left: -13px;\n}\n\n.fl[_ngcontent-%COMP%] {\n  float: \"left\";\n}\n\n.fr[_ngcontent-%COMP%] {\n  float: \"right\";\n}\n\nspan.fs20[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\nspan.fs16[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\np.fs14[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.fs12[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.p-4[_ngcontent-%COMP%] {\n  padding: 4px;\n}\n\n.p-8[_ngcontent-%COMP%] {\n  z-index: 5000;\n  transform: scale(1, 1);\n  display: grid;\n  grid-template-columns: 29% 70%;\n}\n\n.p-20[_ngcontent-%COMP%] {\n  padding: 20px !important;\n}\n\n.p-12[_ngcontent-%COMP%] {\n  padding: 12px !important;\n}\n\n.p-16[_ngcontent-%COMP%] {\n  padding: 16px !important;\n}\n\n.pr-4[_ngcontent-%COMP%] {\n  padding-right: 4px;\n}\n\n.pr-8[_ngcontent-%COMP%] {\n  padding-right: 8px !important;\n}\n\n.pr-16[_ngcontent-%COMP%] {\n  padding-right: 16px;\n}\n\n.pt-30[_ngcontent-%COMP%] {\n  padding-top: 30px !important;\n}\n\n.pt-28[_ngcontent-%COMP%] {\n  padding-top: 28px !important;\n}\n\n.pt-25[_ngcontent-%COMP%] {\n  padding-top: 25px !important;\n}\n\n.pt-24[_ngcontent-%COMP%] {\n  padding-top: 24px !important;\n}\n\n.pt-22[_ngcontent-%COMP%] {\n  padding-top: 22px !important;\n}\n\n.pt-20[_ngcontent-%COMP%] {\n  padding-top: 20px !important;\n}\n\n.pt-19[_ngcontent-%COMP%] {\n  padding-top: 19px !important;\n}\n\n.pt-16[_ngcontent-%COMP%] {\n  padding-top: 16px !important;\n}\n\n.pt-14[_ngcontent-%COMP%] {\n  padding-top: 14px !important;\n}\n\n.pt-10[_ngcontent-%COMP%] {\n  padding-top: 10px !important;\n}\n\n.pt-8[_ngcontent-%COMP%] {\n  padding-top: 8px !important;\n}\n\n.pt-4[_ngcontent-%COMP%] {\n  padding-top: 4px;\n}\n\n.pt-2[_ngcontent-%COMP%] {\n  padding-top: 2px;\n}\n\n.pt-0[_ngcontent-%COMP%] {\n  padding-top: 0px !important;\n}\n\n.pb-28[_ngcontent-%COMP%] {\n  padding-bottom: 28px !important;\n}\n\n.pb-16[_ngcontent-%COMP%] {\n  padding-bottom: 16px !important;\n}\n\n.pv-4[_ngcontent-%COMP%] {\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n\n.pv-8[_ngcontent-%COMP%] {\n  padding-top: 8px !important;\n  padding-bottom: 8px !important;\n}\n\n.pv-10[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.pv-20[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.pv-14[_ngcontent-%COMP%] {\n  padding-top: 14px !important;\n  padding-bottom: 14px !important;\n}\n\n.pv-16[_ngcontent-%COMP%] {\n  padding-top: 16px !important;\n  padding-bottom: 16px !important;\n}\n\n.ph-5[_ngcontent-%COMP%] {\n  padding-right: 5px !important;\n  padding-left: 5px !important;\n}\n\n.ph-16[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n.ph-8[_ngcontent-%COMP%] {\n  padding-left: 8px !important;\n  padding-right: 8px !important;\n}\n\n.ph-10[_ngcontent-%COMP%] {\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n}\n\n.ph-4[_ngcontent-%COMP%] {\n  padding-left: 4px;\n  padding-right: 4px;\n}\n\n.ph-32[_ngcontent-%COMP%] {\n  padding-left: 32px;\n  padding-right: 32px;\n}\n\n.ph-38[_ngcontent-%COMP%] {\n  padding-left: 38px;\n  padding-right: 38px;\n}\n\n.ph-44[_ngcontent-%COMP%] {\n  padding-left: 44px;\n  padding-right: 44px;\n}\n\n.bb[_ngcontent-%COMP%] {\n  border-bottom: 0.1px solid #d3d3d3;\n  border-right: 0.1px solid #d3d3d3;\n}\n\n.bc[_ngcontent-%COMP%] {\n  background-color: #f8fafd;\n}\n\n.bcw[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #323e4a !important;\n}\n\n\n\n\n\n.m-4[_ngcontent-%COMP%] {\n  margin: 4px !important;\n}\n\n.m-8[_ngcontent-%COMP%] {\n  margin: 8px !important;\n}\n\n.m-16[_ngcontent-%COMP%] {\n  margin: 16px !important;\n}\n\n.mr-20[_ngcontent-%COMP%] {\n  margin-right: 20px !important;\n}\n\n.mr-8[_ngcontent-%COMP%] {\n  margin-right: 8px !important;\n}\n\n.ml-20[_ngcontent-%COMP%] {\n  margin-left: 20px !important;\n}\n\n.ml-24[_ngcontent-%COMP%] {\n  margin-left: 24px !important;\n}\n\n.mt-4[_ngcontent-%COMP%] {\n  margin-top: 4px !important;\n}\n\n.mt-8[_ngcontent-%COMP%] {\n  margin-top: 8px !important;\n}\n\n.mt-16[_ngcontent-%COMP%] {\n  margin-top: 16px !important;\n}\n\n.mt-24[_ngcontent-%COMP%] {\n  margin-top: 24px !important;\n}\n\n.mt-38[_ngcontent-%COMP%] {\n  margin-top: 38px !important;\n}\n\n.mh-8[_ngcontent-%COMP%] {\n  margin-left: 8px !important;\n  margin-right: 8px !important;\n}\n\n.mh-16[_ngcontent-%COMP%] {\n  margin-left: 16px !important;\n  margin-right: 16px !important;\n}\n\n.mv-4[_ngcontent-%COMP%] {\n  margin-top: 4px !important;\n  margin-bottom: 4px !important;\n}\n\n.mv-16[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  margin-bottom: 16px;\n}\n\n.mv-24[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  margin-bottom: 24px;\n}\n\n.mh--16[_ngcontent-%COMP%] {\n  margin-left: -16px !important;\n  margin-right: -16px !important;\n}\n\n.mh-8[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n.w100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.w70[_ngcontent-%COMP%] {\n  width: 70%;\n}\n\n.w50[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.w30[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.pc1[_ngcontent-%COMP%] {\n  width: 44.5%;\n  height: 35px;\n  float: right;\n  border-left: 1px solid rgb(104, 103, 103);\n}\n\n.tabbed[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  \n  background-color: #f8fafd;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding-right: 28px;\n  padding-left: 32px;\n}\n\n.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  \n  display: none;\n}\n\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  list-style: none;\n  background-color: white;\n  height: 100%;\n  padding: 1% 0;\n  padding-left: 30px;\n  margin-left: -30px;\n  width: 109%;\n}\n\n.tabs[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.tab[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 10px;\n  padding-right: 12px;\n  color: #606670;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-right: 10px;\n  border-right: 1px solid black;\n}\n\n.tab[_ngcontent-%COMP%]:hover   label[_ngcontent-%COMP%] {\n  border-top-color: #333;\n  color: #333;\n}\n\n.tab-content[_ngcontent-%COMP%] {\n  display: none;\n  color: #777;\n  background: #f8fafd;\n  margin: 10px !important;\n}\n\n\n\n.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(1):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(1)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(2):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(2)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(3):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(3)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(4):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(4)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(5):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(5)   label[_ngcontent-%COMP%] {\n  color: #49a2d7;\n  margin-right: 10px;\n}\n\n.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(1):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(1), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(2):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(2), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(3):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(3), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(4):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(4) {\n  display: block;\n}\n\n.hhu[_ngcontent-%COMP%]:active, .hhu[_ngcontent-%COMP%]:focus {\n  border: 2px solid red;\n}\n\n.form[_ngcontent-%COMP%] {\n  margin-left: 38px !important;\n  margin-right: 5%;\n  top: 50%;\n  left: 50%;\n  height: 316px;\n  background-color: white;\n  border: 1px dashed rgba(0, 0, 0, 0.4);\n}\n\n.form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif !important;\n  text-align: center;\n  line-height: 30px;\n  color: #303030;\n}\n\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-family: \"EuropaNuova-Regular\", sans-serif !important;\n  position: absolute;\n  margin: 0;\n  width: 89%;\n  height: 313px;\n  padding: 0;\n  outline: none;\n  cursor: pointer;\n  opacity: 0;\n}\n\n.form[_ngcontent-%COMP%]   .form_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  margin-left: 36.5%;\n  height: 42px;\n  cursor: pointer;\n  width: 160px;\n  background-color: #49a2d7;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #149174;\n  color: #0c5645;\n}\n\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  border: 0;\n}\n\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.xbutton[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #49a2d7;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.ybutton[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #0c354d;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.zbutton[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #947551;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.border1[_ngcontent-%COMP%] {\n  border-left: 3px solid #174d72;\n}\n\n.border2[_ngcontent-%COMP%] {\n  border-left: 3px solid #5fe6e7;\n}\n\n.border3[_ngcontent-%COMP%] {\n  border-left: 3px solid #e7845f;\n}\n\n.form-wrapper1[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.form-wrapper1[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 5.5%;\n}\n\n.form-wrapper1.td[_ngcontent-%COMP%] {\n  width: 100%;\n  width: 7%;\n}\n\n.full-input[_ngcontent-%COMP%] {\n  margin-left: 18px;\n  margin-bottom: 10px;\n  display: inline-block;\n  padding: 3px;\n  height: 74px;\n  width: 177px;\n  background-color: white;\n  border-radius: 5px;\n  box-shadow: 4px 4px 8px 4px #eeeefa;\n}\n\n.smalll-input[_ngcontent-%COMP%] {\n  width: 160px !important;\n  outline: none;\n  border: none;\n  display: block;\n  border-radius: 4px;\n  border: 1px solid #d5dbe8;\n  height: 35px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  padding: 5px 0px 5px 5px;\n  margin-bottom: 0px !important;\n  font-size: 12px;\n  font-weight: 500;\n  color: #72768a;\n}\n\n.sh1[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  margin-top: 15px;\n  font-size: 16px;\n  color: #606670;\n}\n\n.ss[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n\n#customers[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100% !important;\n  margin-left: 23px !important;\n  border-right: 1px solid #ddd;\n  border-left: 1px solid #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  height: 52px !important;\n  text-align: left;\n  font-weight: 300;\n  background-color: #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 52px !important;\n}\n\n.tab1[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  \n  display: inline-block;\n  height: 17px;\n  width: 17px;\n  color: #49a2d7;\n  margin-bottom: 10px;\n}\n\n.tab1[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + input[_ngcontent-%COMP%] {\n  background-color: #bfb;\n  border-color: #4c4;\n}\n\n.label1[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 10px;\n  padding-right: 12px;\n  color: #606670;\n  font-size: 12px;\n  letter-spacing: 1px;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-left: 30px;\n}\n\n.tab1[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.at[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding-right: 20px;\n  padding-left: 10px;\n}\n\n.ctb[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin-left: 210px;\n  background-color: #49a2d7;\n  padding: 12px 30px 11px 30px;\n  color: white;\n  border-radius: 4px;\n  cursor: pointer;\n  font-weight: 500;\n}\n\n.radio1[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  \n  display: inline-block;\n  height: 17px;\n  width: 17px;\n  color: #49a2d7;\n  margin-bottom: 10px;\n  border: 2px solid #49a2d7;\n}\n\n.radio1[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + input[_ngcontent-%COMP%] {\n  background-color: #bfb;\n  border-color: #4c4;\n}\n\n.label1[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 10px;\n  padding-right: 12px;\n  color: #606670;\n  font-size: 12px;\n  letter-spacing: 1px;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-left: 30px;\n}\n\n.radio1[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.stp1[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 500;\n  margin-bottom: 10px;\n  color: black;\n}\n\n.stp2[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin-bottom: 10px;\n  color: black;\n}\n\n.stp3[_ngcontent-%COMP%] {\n  color: #4a4a4a;\n  font-size: 14px;\n}\n\n.of1[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  font: 16px/26px Georgia, Garamond, Serif;\n  overflow: auto;\n}\n\n\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.side_document_list[_ngcontent-%COMP%] {\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 170vh;\n  border-right: 0.3px solid rgba(0, 0, 0, 0.2);\n  margin-left: 27px;\n}\n\n.profile_class[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  border-bottom: 0.3px solid rgba(0, 0, 0, 0.2);\n  padding: 3% 6%;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.activeBtn[_ngcontent-%COMP%] {\n  background-color: #f8fafd;\n  border-left: 8px solid rgb(61, 116, 197);\n}\n\n.table_top[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 28.55% 33% 36%;\n  border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);\n  align-items: center;\n}\n\n.invoices_tab[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  height: 100vh;\n  background-color: #f8fafd;\n}\n\n.invoices_inner[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #f8fafd;\n}\n\n.inner_tab_content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  background-color: white;\n}\n\n.invoice_head[_ngcontent-%COMP%] {\n  width: 95%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 5%;\n}\n\n.serial_detail[_ngcontent-%COMP%] {\n  width: 93%;\n  margin-top: 10px;\n  display: flex;\n  justify-content: right;\n  text-align: right;\n  font-weight: 500;\n}\n\n.transaction_tab[_ngcontent-%COMP%] {\n  width: 770px;\n  height: 1387px;\n}\n\n.form_inner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  justify-content: center;\n}\n\n.opt[_ngcontent-%COMP%] {\n  background-color: #49a2d7;\n  padding: 0 3%;\n  height: 42px;\n  box-shadow: 4px 0px 7px #109cf1;\n  border: none;\n  color: white;\n}\n\n.customfile1[_ngcontent-%COMP%] {\n  content: \"Choose File\";\n  border: none !important;\n  outline: none !important;\n  color: transparent;\n  height: 52px;\n  width: 138px;\n  background-color: #EAEAEA;\n  box-shadow: 0px 4px 4px -2px #D5D7DD !important;\n  border-radius: 8px;\n  text-align: center;\n  align-items: center;\n}\n\n.customfile1[_ngcontent-%COMP%]::-webkit-file-upload-button {\n  visibility: hidden;\n}\n\n.customfile1[_ngcontent-%COMP%]::placeholder {\n  font-family: \"Poppins\", sans-serif !important;\n  color: #606670 !important;\n  font-size: 16px !important;\n  font-weight: 400 !important;\n}\n\n.customfile1[_ngcontent-%COMP%]::before {\n  content: \"Choose File\";\n  display: inline-block;\n  color: #606670;\n  height: 30px;\n  width: 138px;\n  margin-top: 12px;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  cursor: pointer;\n  text-align: center;\n  align-items: center;\n  vertical-align: center;\n}\n\n.customfile1[_ngcontent-%COMP%]:hover::before {\n  border-color: black;\n}\n\n.customfile1[_ngcontent-%COMP%]:active {\n  outline: 0;\n}\n\n.customfile1[_ngcontent-%COMP%]:active::before {\n  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);\n}\n\ninput[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n  border: 1px solid #DEDEDE;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.flex-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background-color: #f1f1f1;\n  width: 130px;\n  margin: 10px;\n  text-align: center;\n  font-size: 24px;\n}\n\n.my_class[_ngcontent-%COMP%] {\n  background-color: #0e8cd4 !important;\n}"]
  });
  return AllTaskComponent;
})();

/***/ }),

/***/ 77712:
/*!**************************************************!*\
  !*** ./src/app/home/all-task/all-task.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllTaskModule": () => (/* binding */ AllTaskModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7976);
/* harmony import */ var _confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../confirm-dialog/confirm-dialog.service */ 12579);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 93329);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ 35581);
/* harmony import */ var _shared_Data_Servies_shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared-Data-Servies/shared-data.service */ 10241);
/* harmony import */ var _shared_home_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-home.module */ 69408);
/* harmony import */ var _all_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-task.component */ 39181);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 88692);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 20092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 64537);












let AllTaskModule = /*#__PURE__*/(() => {
  class AllTaskModule {}

  AllTaskModule.ɵfac = function AllTaskModule_Factory(t) {
    return new (t || AllTaskModule)();
  };

  AllTaskModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: AllTaskModule
  });
  AllTaskModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    providers: [_confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialogService, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal, _shared_Data_Servies_shared_data_service__WEBPACK_IMPORTED_MODULE_1__.SharedDataService],
    imports: [_shared_home_module__WEBPACK_IMPORTED_MODULE_2__.SharedHomeModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{
      path: ":id",
      component: _all_task_component__WEBPACK_IMPORTED_MODULE_3__.AllTaskComponent,
      pathMatch: "full"
    }]), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__.ModalModule.forRoot()]
  });
  return AllTaskModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AllTaskModule, {
    declarations: [_all_task_component__WEBPACK_IMPORTED_MODULE_3__.AllTaskComponent],
    imports: [_shared_home_module__WEBPACK_IMPORTED_MODULE_2__.SharedHomeModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__.ModalModule]
  });
})();

/***/ })

}]);