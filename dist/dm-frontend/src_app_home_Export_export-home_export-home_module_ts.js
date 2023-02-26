"use strict";
(self["webpackChunkdm_frontend"] = self["webpackChunkdm_frontend"] || []).push([["src_app_home_Export_export-home_export-home_module_ts"],{

/***/ 9361:
/*!******************************************************************!*\
  !*** ./src/app/home/Export/export-home/export-home.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExportHomeComponent": () => (/* binding */ ExportHomeComponent)
/* harmony export */ });
/* harmony import */ var D_Bharathexim_Repo_docmachine_frontend_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _service_document_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/document.service */ 76852);
/* harmony import */ var _inward_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../inward.json */ 77485);
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/user.service */ 84981);
/* harmony import */ var _confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../confirm-dialog/confirm-dialog.service */ 12579);
/* harmony import */ var pdf_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pdf-lib */ 45522);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! file-saver */ 65226);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var src_app_service_window_information_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/window-information.service */ 23087);
/* harmony import */ var src_app_service_aprroval_pending_reject_transactions_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/aprroval-pending-reject-transactions.service */ 56869);
/* harmony import */ var src_app_custom_custom_confirm_dialog_model_custom_confirm_dialog_model_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/custom/custom-confirm-dialog-model/custom-confirm-dialog-model.component */ 70560);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-select/ng-select */ 73054);
/* harmony import */ var _pdf_viewer_pdf_viewer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../pdf-viewer/pdf-viewer.component */ 36294);
































const _c0 = ["ngSelect"];

function ExportHomeComponent_div_20_div_1_div_3_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Matching Result ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" Number of Purpose Group = ", ctx_r17.pgNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" Number of Purpose Code or Description = ", ctx_r17.pcNumber, " ");
  }
}

function ExportHomeComponent_div_20_div_1_div_3_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 74)(1, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "b", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_div_20_div_1_div_3_div_4_div_1_Template_b_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r24);
      const i_r22 = restoredCtx.index;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r23.removeClick(i_r22));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const code_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](code_r21);
  }
}

function ExportHomeComponent_div_20_div_1_div_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ExportHomeComponent_div_20_div_1_div_3_div_4_div_1_Template, 5, 1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_div_20_div_1_div_3_div_4_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r25.proceedClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Proceed");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r18.selectedPurpose);
  }
}

function ExportHomeComponent_div_20_div_1_div_3_tr_15_td_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_div_20_div_1_div_3_tr_15_td_1_Template_td_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r34);
      const j_r31 = restoredCtx.index;
      const purposeRow_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r32.purposeClick(purposeRow_r27[j_r31]["text"], purposeRow_r27[j_r31 + 1]["text"], "#search_box_new"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const column_r30 = ctx.$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r29.onClass(column_r30.text));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵattribute"]("rowSpan", column_r30.rowSpan);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", column_r30.text, " ");
  }
}

function ExportHomeComponent_div_20_div_1_div_3_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ExportHomeComponent_div_20_div_1_div_3_tr_15_td_1_Template, 2, 3, "td", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const purposeRow_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", purposeRow_r27);
  }
}

function ExportHomeComponent_div_20_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 62)(1, "ng-select", 63, 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keyup", function ExportHomeComponent_div_20_div_1_div_3_Template_ng_select_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r35.searchData($event.target.value));
    })("change", function ExportHomeComponent_div_20_div_1_div_3_Template_ng_select_change_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r36);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r37.searchData(ctx_r37.selection));
    })("ngModelChange", function ExportHomeComponent_div_20_div_1_div_3_Template_ng_select_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r36);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r38.selection = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, ExportHomeComponent_div_20_div_1_div_3_div_3_Template, 6, 2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, ExportHomeComponent_div_20_div_1_div_3_div_4_Template, 5, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "table", 65)(6, "thead", 66)(7, "tr", 67)(8, "th", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, " Purpose Group Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "th", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, " PurposeCode");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "th", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, " Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "tbody", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](15, ExportHomeComponent_div_20_div_1_div_3_tr_15_Template, 2, 1, "tr", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("items", ctx_r15.Inward_Remittancefilter)("mulitple", true)("ngModel", ctx_r15.selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r15.pgNumber != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r15.selectedPurpose.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r15.purposeRows);
  }
}

function ExportHomeComponent_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Select a Purpose code*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, ExportHomeComponent_div_20_div_1_div_3_Template, 16, 6, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r14.purposeSelect);
  }
}

function ExportHomeComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ExportHomeComponent_div_20_div_1_Template, 4, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r0.selectPurpose);
  }
}

const _c1 = function (a0) {
  return {
    "my_class": a0
  };
};

function ExportHomeComponent_div_21_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_div_21_div_6_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r44);
      const code_r41 = restoredCtx.$implicit;
      const i_r42 = restoredCtx.index;
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r43.tabClick(code_r41, i_r42));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const code_r41 = ctx.$implicit;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](2, _c1, ctx_r39.c === code_r41));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", code_r41, "");
  }
}

function ExportHomeComponent_div_21_div_8_div_1_div_1_div_1_div_14_div_22_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "div", 107)(2, "div", 4)(3, "div", 108)(4, "div", 109)(5, "ng-select", 110, 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ExportHomeComponent_div_21_div_8_div_1_div_1_div_1_div_14_div_22_div_4_Template_ng_select_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r65);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](8);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r64.ThirdPartydataselection = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 111)(8, "div", 112)(9, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "img", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](11, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("items", ctx_r60.ThirdPartydata)("ngModel", ctx_r60.ThirdPartydataselection);
  }
}

function ExportHomeComponent_div_21_div_8_div_1_div_1_div_1_div_14_div_22_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "button", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_div_21_div_8_div_1_div_1_div_1_div_14_div_22_div_19_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r67);
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
      const code_r48 = ctx_r68.$implicit;
      const j_r49 = ctx_r68.index;
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r66.generateDoc2(ctx_r66.Lodgement[ctx_r66.selection]["InvoiceReduction2"]["Show"], code_r48, j_r49));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " Generate Invoice Reduction ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}

function ExportHomeComponent_div_21_div_8_div_1_div_1_div_1_div_14_div_22_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "button", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_div_21_div_8_div_1_div_1_div_1_div_14_div_22_div_20_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r70);
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
      const code_r48 = ctx_r71.$implicit;
      const j_r49 = ctx_r71.index;
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r69.generateDoc2(ctx_r69.Lodgement[ctx_r69.selection]["InvoiceReduction2"]["Show"], code_r48, j_r49));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " Proceed to preview ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}

function ExportHomeComponent_div_21_div_8_div_1_div_1_div_1_div_14_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 102)(1, "h3", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Select Tripartite agreement ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, ExportHomeComponent_div_21_div_8_div_1_div_1_div_1_div_14_div_22_div_4_Template, 12, 2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 106)(7, "div", 4)(8, "div", 92)(9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, "Is Invoice reduction?");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 93)(12, "div", 94)(13, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_div_21_div_8_div_1_div_1_div_1_div_14_div_22_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r73);
      const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](7);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r72.Changebutton("InvoiceReduction2", "Hide", "Show", "no"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](14, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_div_21_div_8_div_1_div_1_div_1_div_14_div_22_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r73);
      const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](7);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r74.Changebutton("InvoiceReduction2", "Show", "Hide", "yes"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](17, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](19, ExportHomeComponent_div_21_div_8_div_1_div_1_div_1_div_14_div_22_div_19_Template, 3, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](20, ExportHomeComponent_div_21_div_8_div_1_div_1_div_1_div_14_div_22_div_20_Template, 3, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r58.ThirdPartydata.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"](ctx_r58.ClassRetrun("InvoiceReduction2", "Hide", "btn no-button active1", "btn btn-primary remove-no-button", "no"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"](ctx_r58.ClassRetrun("InvoiceReduction2", "Show", "btn yes-button active", "btn yes-button", "yes"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r58.Lodgement[ctx_r58.selection]["InvoiceReduction2"]["Show"] == "yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r58.Lodgement[ctx_r58.selection]["InvoiceReduction2"]["Hide"] == "no");
  }
}

function ExportHomeComponent_div_21_div_8_div_1_div_1_div_1_div_14_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "Button", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_div_21_div_8_div_1_div_1_div_1_div_14_div_23_Template_Button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r77);
      const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      const j_r49 = ctx_r76.index;
      const code_r48 = ctx_r76.$implicit;
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r75.sendMail(j_r49, code_r48));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Send Mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}

function ExportHomeComponent_div_21_div_8_div_1_div_1_div_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "div", 4)(2, "div", 97)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, " bank reference number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "input", 98, 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keyup", function ExportHomeComponent_div_21_div_8_div_1_div_1_div_1_div_14_Template_input_keyup_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r79);
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r78.change($event));
    })("click", function ExportHomeComponent_div_21_div_8_div_1_div_1_div_1_div_14_Template_input_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r79);
      const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](6);

      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](25);

      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r80.loadPopup(ctx_r80.searchbankname, _r4.style.display = "flex"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "div", 91)(10, "div", 4)(11, "div", 92)(12, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, "Is Buyer remitter different?");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 93)(15, "div", 94)(16, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_div_21_div_8_div_1_div_1_div_1_div_14_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r79);
      const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r81.Changebutton("BuyerRemitterDifferent", "Hide", "Show", "no"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](17, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_div_21_div_8_div_1_div_1_div_1_div_14_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r79);
      const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r82.Changebutton("BuyerRemitterDifferent", "Show", "Hide", "yes"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](20, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](22, ExportHomeComponent_div_21_div_8_div_1_div_1_div_1_div_14_div_22_Template, 21, 7, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](23, ExportHomeComponent_div_21_div_8_div_1_div_1_div_1_div_14_div_23_Template, 3, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", ctx_r55.SELECT_bankreferencenumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"](ctx_r55.ClassRetrun("BuyerRemitterDifferent", "Hide", "btn no-button active1", "btn btn-primary remove-no-button", "no"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"](ctx_r55.ClassRetrun("BuyerRemitterDifferent", "Show", "btn yes-button active", "btn yes-button", "yes"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r55.Lodgement[ctx_r55.selection]["BuyerRemitterDifferent"]["Show"] == "yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r55.Lodgement[ctx_r55.selection]["BuyerRemitterDifferent"]["Hide"] == "no");
  }
}

function ExportHomeComponent_div_21_div_8_div_1_div_1_div_1_div_15_div_24_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "ng-select", 110, 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ExportHomeComponent_div_21_div_8_div_1_div_1_div_1_div_15_div_24_div_7_Template_ng_select_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r89);
      const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](8);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r88.ThirdPartydataselection = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("items", ctx_r86.ThirdPartydata)("ngModel", ctx_r86.ThirdPartydataselection);
  }
}

const _c2 = function () {
  return ["/home/upload"];
};

function ExportHomeComponent_div_21_div_8_div_1_div_1_div_1_div_15_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "div", 91)(2, "div", 4)(3, "div", 107)(4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Select Tripartite agreement ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, ExportHomeComponent_div_21_div_8_div_1_div_1_div_1_div_15_div_24_div_7_Template, 3, 2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 123)(9, "button", 124)(10, "label", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](11, "img", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
  }

  if (rf & 2) {
    const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r84.ThirdPartydata.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](2, _c2));
  }
}

function ExportHomeComponent_div_21_div_8_div_1_div_1_div_1_div_15_div_38_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 130)(1, "input", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModel", function ExportHomeComponent_div_21_div_8_div_1_div_1_div_1_div_15_div_38_div_5_Template_input_ngModel_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r93);
      const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](8);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r92.myRadio);
    })("click", function ExportHomeComponent_div_21_div_8_div_1_div_1_div_1_div_15_div_38_div_5_Template_input_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r93);
      const value_r91 = restoredCtx.$implicit;
      const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](8);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r94.model.option = value_r91);
    })("click", function ExportHomeComponent_div_21_div_8_div_1_div_1_div_1_div_15_div_38_div_5_Template_input_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r93);
      const value_r91 = restoredCtx.$implicit;
      const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](8);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r95.setradio(value_r91));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "label", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const value_r91 = ctx.$implicit;
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("checked", value_r91 === ctx_r90.model.option);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](value_r91);
  }
}

function ExportHomeComponent_div_21_div_8_div_1_div_1_div_1_div_15_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "h3", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Select a bank ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "span", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, ExportHomeComponent_div_21_div_8_div_1_div_1_div_1_div_15_div_38_div_5_Template, 4, 2, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "button", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_div_21_div_8_div_1_div_1_div_1_div_15_div_38_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r98);
      const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      const code_r48 = ctx_r97.$implicit;
      const j_r49 = ctx_r97.index;
      const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r96.generateDoc1(code_r48, j_r49));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, " Generate Document ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r85.bank);
  }
}

function ExportHomeComponent_div_21_div_8_div_1_div_1_div_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "div", 91)(2, "div", 4)(3, "div", 118)(4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, " Select Shipping Bill number*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 118)(8, "div", 119)(9, "input", 120, 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_div_21_div_8_div_1_div_1_div_1_div_15_Template_input_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r100);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](6);

      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](40);

      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](_r8.style.display = "flex");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 91)(12, "div", 4)(13, "div", 92)(14, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15, "Is Buyer remitter different?");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "div", 93)(17, "div", 94)(18, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_div_21_div_8_div_1_div_1_div_1_div_15_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r100);
      const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r101.Changebutton("BuyerRemitter", "Hide", "Show", "no"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](19, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_div_21_div_8_div_1_div_1_div_1_div_15_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r100);
      const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r102.Changebutton("BuyerRemitter", "Show", "Hide", "yes"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](22, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](24, ExportHomeComponent_div_21_div_8_div_1_div_1_div_1_div_15_div_24_Template, 12, 3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "div", 91)(26, "div", 4)(27, "div", 92)(28, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](29, "Is Invoice reduction?");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "div", 93)(31, "div", 94)(32, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_div_21_div_8_div_1_div_1_div_1_div_15_Template_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r100);
      const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r103.Changebutton("Invoicereduction", "Hide", "Show", "no"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](33, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](34, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_div_21_div_8_div_1_div_1_div_1_div_15_Template_button_click_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r100);
      const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r104.Changebutton("Invoicereduction", "Show", "Hide", "yes"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](36, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](37, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](38, ExportHomeComponent_div_21_div_8_div_1_div_1_div_1_div_15_div_38_Template, 9, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", ctx_r56.selectSB);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"](ctx_r56.ClassRetrun("BuyerRemitter", "Hide", "btn no-button active1", "btn btn-primary remove-no-button", "no"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"](ctx_r56.ClassRetrun("BuyerRemitter", "Show", "btn yes-button active", "btn yes-button", "yes"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r56.Lodgement[ctx_r56.selection]["BuyerRemitter"]["Show"] === "yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"](ctx_r56.ClassRetrun("Invoicereduction", "Hide", "btn no-button active1", "btn btn-primary remove-no-button", "no"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"](ctx_r56.ClassRetrun("Invoicereduction", "Show", "btn yes-button active", "btn yes-button", "yes"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r56.Lodgement[ctx_r56.selection]["BuyerRemitter"]["Hide"] === "no" || ctx_r56.Lodgement[ctx_r56.selection]["BuyerRemitter"]["Show"] === "yes" && ctx_r56.Lodgement[ctx_r56.selection]["Invoicereduction"]["Show"] == "yes" || ctx_r56.Lodgement[ctx_r56.selection]["Invoicereduction"]["Hide"] == "no");
  }
}

function ExportHomeComponent_div_21_div_8_div_1_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "div", 91)(2, "div", 4)(3, "div", 92)(4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Is Lodgement already done?");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 93)(7, "div", 94)(8, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_div_21_div_8_div_1_div_1_div_1_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r106);
      const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r105.Changebutton("Lodgement", "Hide", "Show", "no"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](9, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_div_21_div_8_div_1_div_1_div_1_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r106);
      const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r107.Changebutton("Lodgement", "Show", "Hide", "yes"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](12, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](14, ExportHomeComponent_div_21_div_8_div_1_div_1_div_1_div_14_Template, 24, 7, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](15, ExportHomeComponent_div_21_div_8_div_1_div_1_div_1_div_15_Template, 39, 11, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"](ctx_r50.ClassRetrun("Lodgement", "Hide", "btn no-button active1", "btn btn-primary remove-no-button", "no"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"](ctx_r50.ClassRetrun("Lodgement", "Show", "btn yes-button active", "btn yes-button", "yes"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r50.Lodgement[ctx_r50.selection]["Lodgement"]["Show"] === "yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r50.Lodgement[ctx_r50.selection]["Lodgement"]["Hide"] === "no");
  }
}

function ExportHomeComponent_div_21_div_8_div_1_div_1_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 135)(1, "div", 136)(2, "div", 137)(3, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Our Ref No.: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "span", 139)(6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, " Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "span", 139)(9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, " Dear Sir/ Madam, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](11, "br")(12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "span", 140)(14, "b", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15, "Subject: Reduction of Invoice Value in other Case");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "p", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, " We hereby provide C.17 declaration of RBI Master Circular on Exports of Goods and Services dated 01 July 2013 on reduction of invoice value in other cases. We have negotiated/sent the bills for collection and details of the bills are as below: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "table", 143)(19, "tr", 144)(20, "td", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21, " Sr");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "td", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23, " Negotiated/Sent ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25, " on Collection ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "td", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](27, " Bank\u2019s ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](29, " Bill ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "td", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](31, " Buyer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](32, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](33, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "td", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](35, " Invoice ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](36, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](37, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "td", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](39, " Bill ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](40, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](41, " Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](42, "td", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](43, " Outstanding ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](44, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](45, " Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](46, "td", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](47, " Reason ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](48, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](49, " for Reduction ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](50, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](51, " of Invoice ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](52, "tr", 144)(53, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](54, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](55, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](56, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](57, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](58, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](59, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](60, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](61, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](62, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](63, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](64, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](65, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](66, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](67, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](68, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](69, "tr", 144)(70, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](71, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](72, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](73, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](74, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](75, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](76, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](77, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](78, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](79, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](80, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](81, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](82, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](83, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](84, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](85, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](86, "tr", 144)(87, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](88, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](89, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](90, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](91, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](92, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](93, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](94, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](95, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](96, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](97, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](98, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](99, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](100, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](101, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](102, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](103, "tr", 144)(104, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](105, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](106, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](107, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](108, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](109, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](110, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](111, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](112, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](113, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](114, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](115, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](116, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](117, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](118, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](119, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](120, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](121, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](122, "2. We hereby provide the supporting documents for the reduction of invoice value as above. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](123, "br")(124, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](125, " 3. We hereby abide and confirm to the Clause (i) of the above mentioned RBI Circular and reads as: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](126, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](127, "(i) after a bill has been negotiated or sent for collection, its amount is to be reduced for any reason, AD Category - I banks may approve such reduction, if satisfied about genuineness of the request, provided: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](128, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](129, " a the reduction does not exceed 25 per cent of invoice value: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](130, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](131, "b.It does not relate to export of commodities subject to floor price stipulations ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](132, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](133, " c the exporter is not on the exporters caution list of the Reserve Bank, and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](134, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](135, "d. the exporter is advised to surrender proportionate export incentives availed of, if any. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](136, "br")(137, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](138, " 4. We request you to kindly knock-off the outstanding amount/s in your books and provide ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](139, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](140, " a confirmation for the same. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](141, "br")(142, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](143, " Thanking you, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](144, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](145, " Yours' Faithfully, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](146, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](147, " Authorised Signatory ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](148, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](149, " Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](150, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](151, " Designation: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](152, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](153, " Company Seal: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
}

function ExportHomeComponent_div_21_div_8_div_1_div_1_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 148)(1, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_div_21_div_8_div_1_div_1_div_2_div_2_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r113);
      const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      const code_r48 = ctx_r112.$implicit;
      const j_r49 = ctx_r112.index;
      const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r111.exportAsPDF2(code_r48, j_r49));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " Proceed to Preview ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}

function ExportHomeComponent_div_21_div_8_div_1_div_1_div_2_div_3_iframe_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "iframe", 155);
  }

  if (rf & 2) {
    const pipo_r116 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", pipo_r116, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeResourceUrl"]);
  }
}

function ExportHomeComponent_div_21_div_8_div_1_div_1_div_2_div_3_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_div_21_div_8_div_1_div_1_div_2_div_3_button_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r118);
      const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](7);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r117.doneDox());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function ExportHomeComponent_div_21_div_8_div_1_div_1_div_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Setup: 3 Preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "button", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_div_21_div_8_div_1_div_1_div_2_div_3_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r120);
      const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r119.downloadPDF());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "button", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "Send it via Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, " Generated Document ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "iframe", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, " Tri party document ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](14, ExportHomeComponent_div_21_div_8_div_1_div_1_div_2_div_3_iframe_14_Template, 1, 1, "iframe", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](15, "br")(16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "button", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_div_21_div_8_div_1_div_1_div_2_div_3_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r120);
      const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r121.edit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](19, ExportHomeComponent_div_21_div_8_div_1_div_1_div_2_div_3_button_19_Template, 2, 0, "button", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const j_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).index;
    const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx_r110.data9[j_r49], _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeResourceUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r110.mainDoc2[j_r49]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r110.isDone);
  }
}

function ExportHomeComponent_div_21_div_8_div_1_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ExportHomeComponent_div_21_div_8_div_1_div_1_div_2_div_1_Template, 154, 0, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, ExportHomeComponent_div_21_div_8_div_1_div_1_div_2_div_2_Template, 3, 0, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, ExportHomeComponent_div_21_div_8_div_1_div_1_div_2_div_3_Template, 20, 3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    const j_r49 = ctx_r123.index;
    const code_r48 = ctx_r123.$implicit;
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r51.doneImportPurpose[j_r49] != code_r48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r51.doneImportPurpose[j_r49] != code_r48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r51.doneImportPurpose[j_r49] == code_r48);
  }
}

function ExportHomeComponent_div_21_div_8_div_1_div_1_div_3_h1_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "h1", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Annex 7");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function ExportHomeComponent_div_21_div_8_div_1_div_1_div_3_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 160)(1, "div", 136)(2, "div")(3, "p", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Request Letter for Export Bill Processing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 162)(6, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, " Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "span", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, " To, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, " The Manager ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, " YES Bank Ltd., ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, " Branch address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](17, "span", 164)(18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20, " Dear Sir/Madam, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22, " Export Documents for \u25A1 Purchase \u25A1 Negotiation \u25A1 Discounting \u25A1 Collection \u25A1 Rupee Advance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](24, " Bill amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](25, "span", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](26, "Tenor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](27, "span", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "table", 168)(30, "tr", 144)(31, "td", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](32, " Documents ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](33, "td", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](34, " Drafts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "td", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](36, " Invoice ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "td", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](38, " Transport ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](39, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](40, " Doc. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](41, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](42, " B/L/AWB/ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](43, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](44, " LR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](45, "td", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](46, " Pkg. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](47, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](48, " List ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](49, "td", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](50, " Insurance. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](51, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](52, " policy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](53, "td", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](54, " Cert. Of ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](55, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](56, " Origin ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](57, "td", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](58, " Test ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](59, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](60, " Cert ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](61, "td", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](62, " Others ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](63, "td", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](64, " EDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](65, "tr", 144)(66, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](67, " Original ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](68, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](69, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](70, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](71, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](72, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](73, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](74, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](75, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](76, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](77, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](78, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](79, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](80, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](81, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](82, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](83, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](84, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](85, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](86, "tr", 144)(87, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](88, " Duplicate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](89, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](90, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](91, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](92, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](93, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](94, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](95, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](96, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](97, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](98, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](99, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](100, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](101, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](102, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](103, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](104, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](105, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](106, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](107, "tr", 144)(108, "td", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](109, " No. of documents to be sent to foreign bank / As per export L/C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](110, "tr", 144)(111, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](112, " Original ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](113, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](114, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](115, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](116, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](117, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](118, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](119, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](120, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](121, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](122, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](123, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](124, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](125, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](126, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](127, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](128, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](129, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](130, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](131, "tr", 144)(132, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](133, " Duplicate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](134, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](135, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](136, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](137, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](138, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](139, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](140, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](141, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](142, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](143, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](144, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](145, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](146, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](147, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](148, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](149, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](150, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](151, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](152, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](153, "p")(154, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](155, "Other documents enclosed:");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](156, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](157, " Original L/C No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](158, "span", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](159, " dated ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](160, "span", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](161, "of ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](162, "span", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](163, "along with all amendments (no. of amendments ____) and advising letters duly stamped with revenue stamp on the reverse. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](164, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](165, " amendments ____) and advising letters duly stamped with revenue stamp on the reverse. EDF form Nos.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](166, "span", 173)(167, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](168, " Date of Transport Doc. (AWB / BL / LR) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](169, "span", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](170, " ** If the above mentioned documents are being submitted after expiry of 21 days from date of shipment, than please briefly describe the reason for delay in submission of document_______________________________________________________________________________________________ __________________________________________________________________________________ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](171, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](172, " Debit account no. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](173, "span", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](174, "with your branch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](175, "span", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](176, "for all necessary charges and Interest. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](177, "p")(178, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](179, "Kindly note our following instructions: (mark X wherever applicable)");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](180, "table", 168)(181, "tr", 144)(182, "td", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](183, " 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](184, "td", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](185, " Documents to be delivered against ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](186, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](187, "PAYMENT / ACCEPTANCE **");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](188, "td", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](189, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](190, "tr", 144)(191, "td", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](192, " 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](193, "td", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](194, " All banking charges outside India are for our / their (drawee) A/C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](195, "td", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](196, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](197, "tr", 144)(198, "td", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](199, " 3");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](200, "td", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](201, " If unpaid / unaccepted, store and insure goods. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](202, "td", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](203, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](204, "tr", 144)(205, "td", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](206, " 4");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](207, "td", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](208, " Debit all charges including charges in connection with item 4 to our Account no. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](209, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](210, "with yourselves. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](211, "td", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](212, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](213, "tr", 144)(214, "td", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](215, " 5");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](216, "td", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](217, " Please forward the documents in one lot by courier / Regd. Air mail** at our cost, risk and responsibility to (name & address of bank) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](218, "td", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](219, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](220, "tr", 144)(221, "td", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](222, " 6");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](223, "td", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](224, " Other instructions if any: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](225, "td", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](226, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](227, "p", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](228, " (** Please strike out whichever is not applicable) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](229, "table", 168)(230, "tr", 144)(231, "td", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](232, " 7");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](233, "td", 176)(234, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](235, "Proceeds disposal instructions. (Mark X wherever applicable )");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](236, "td", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](237, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](238, "tr", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](239, "td", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](240, "td", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](241, " Please credit proceeds (Amount) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](242, "span", 180)(243, "span", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](244, "to packing credit account no. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](245, "span", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](246, " With you and balance to operative account No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](247, "span", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](248, "with you. We confirm that we have not availed packing credit from any other bank for the amount transferred to our operative account with you. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](249, "td", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](250, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](251, "tr", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](252, "td", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](253, "td", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](254, " Please credit (Amount) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](255, "span", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](256, "to EEFC A/C No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](257, "span", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](258, "With your Bank ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](259, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](260, " OR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](261, "br")(262, "span", 181)(263, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](264, " ( Name of the bank and branch with complete details) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](265, "td", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](266, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](267, "tr", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](268, "td", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](269, "td", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](270, " Please remit proceeds in INR by P.O. or remit through T.T. as per instructions enclosed. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](271, "td", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](272, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](273, "tr", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](274, "td", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](275, "td", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](276, " Please use the forward contract (s), as given below..... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](277, "td", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](278, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](279, "table", 168)(280, "tr", 144)(281, "td", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](282, " Forward Contract No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](283, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](284, " & Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](285, "td", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](286, " Forward Contract Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](287, "td", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](288, " Amount to be Utilized for this ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](289, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](290, " remittance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](291, "td", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](292, " Due Date of the Contract ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](293, "tr", 144)(294, "td", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](295, "span", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](296, "td", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](297, "span", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](298, "td", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](299, "span", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](300, "td", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](301, "span", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](302, "tr", 144)(303, "td", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](304, "span", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](305, "td", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](306, "span", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](307, "td", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](308, "span", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](309, "td", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](310, "span", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](311, "p")(312, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](313, "Declaration \u2013 Cum \u2013 Undertaking");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](314, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](315, " I/We hereby declare that the transaction the details of which are specifically mentioned in this request letter does not involve, and is not designed for the purpose of any contravention or evasion of the provisions of the FEMA 1999 or of any rules, regulation, notification, direction or order made there under. I /We also hereby agree and undertake to give such information/documents as will reasonably satisfy you about this transaction in terms of the above declaration. I/We also understand that if I/We refuse to comply with any such requirement or make only unsatisfactory compliance therewith, the bank shall refuse in writing to undertake the transaction and shall if it has reason to believe that any contravention/evasion is contemplated by me/us report the matter to Reserve Bank of India.. I/We further declare that the undersigned has/have the authority to give this declaration and undertaking on behalf of the company. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](316, "br")(317, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](318, " I/we also declare that the transaction does not have linkage with any Specially Designated Nationals and Blocked Persons (SDN)/countries listed under OFAC in any manner. If the transaction involves linkage with any Specially Designated Nationals and Blocked Persons (SDN)/countries listed under OFAC in any manner, I/we undertake not to hold YES Bank Limited responsible for any of its action or inaction in respect of the OFAC-linked transactions. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](319, "br")(320, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](321, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](322, "Note");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](323, " \u2013 Default GST registration details as updated in the Bank records will be considered for the said request. In case the no. to be considered is different, please notify below. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](324, "p", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](325, " GSTIN Registration no. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](326, "div", 186)(327, "span", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](328);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](329, "span", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](330);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](331, "span", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](332);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](333, "span", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](334);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](335, "span", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](336);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](337, "span", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](338);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](339, "span", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](340);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](341, "span", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](342);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](343, "span", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](344);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](345, "span", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](346);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](347, "span", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](348);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](349, "span", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](350);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](351, "span", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](352);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](353, "span", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](354);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](355, "span", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](356);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](357, "div", 189)(358, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](359, " Thanking You ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](360, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](361, " Warm Regards ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](362, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](363, " Authorized Signatory ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](364, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](365, " Company Stamp / Seal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](366, "div")(367, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](368, " Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](369, "span", 170)(370, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](371, " Place: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](372, "span", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](373, "p")(374, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](375, "Guidelines /checklist for the exporter for ensuring speedy & error free export bill processing");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](376, "div")(377, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](378, " 1. Request letter to be signed by authorized signatory of the company. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](379, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](380, " 2. Ensure that all columns are filled in the request letter. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](381, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](382, " 3. Declaration cum undertaking is required under sec.10 (5), Chapter III of FEMA 1999), mentioned in the request letter. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](383, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](384, " 4. EDF value to match with invoice amount. If differs, then reason to be stated. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](385, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](386, " 5. If EDF submitted states another bank name then letter to be obtained from concerned bank. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](387, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](388, " 6. Please give clear disposal instructions of credit proceeds. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](389, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](390, " 7. Prior approval from Relationship Officer is taken for direct dispatch of documents or in case of existing overdue bills. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](328);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r125.arr[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r125.arr[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r125.arr[2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r125.arr[3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r125.arr[4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r125.arr[5]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r125.arr[6]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r125.arr[7]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r125.arr[8]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r125.arr[9]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r125.arr[10]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r125.arr[11]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r125.arr[12]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r125.arr[13]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r125.arr[14]);
  }
}

function ExportHomeComponent_div_21_div_8_div_1_div_1_div_3_h1_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Invoice Reduction");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function ExportHomeComponent_div_21_div_8_div_1_div_1_div_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 135)(1, "div", 136)(2, "div", 190)(3, "div", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, " Our Ref No.: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "span", 139)(6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, " Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "span", 139)(9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, " Dear Sir/ Madam, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](11, "br")(12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "span", 140)(14, "b", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15, "Subject: Reduction of Invoice Value in other Case");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, " We hereby provide C.17 declaration of RBI Master Circular on Exports of Goods and Services dated 01 July 2013 on reduction of invoice value in other cases. We have negotiated/sent the bills for collection and details of the bills are as below: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "table")(20, "tr", 144)(21, "td", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22, " Sr");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "td", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](24, " Negotiated/Sent ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](26, " on Collection ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "td", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](28, " Bank\u2019s ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](29, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](30, " Bill ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "td", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](32, " Buyer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](33, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](34, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "td", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](36, " Invoice ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](37, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](38, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "td", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](40, " Bill ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](41, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](42, " Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](43, "td", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](44, " Outstanding ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](45, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](46, " Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](47, "td", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](48, " Reason ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](49, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](50, " for Reduction ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](51, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](52, " of Invoice ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](53, "tr", 144)(54, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](55, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](56, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](57, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](58, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](59, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](60, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](61, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](62, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](63, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](64, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](65, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](66, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](67, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](68, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](69, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](70, "tr", 144)(71, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](72, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](73, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](74, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](75, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](76, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](77, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](78, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](79, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](80, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](81, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](82, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](83, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](84, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](85, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](86, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](87, "tr", 144)(88, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](89, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](90, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](91, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](92, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](93, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](94, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](95, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](96, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](97, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](98, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](99, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](100, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](101, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](102, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](103, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](104, "tr", 144)(105, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](106, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](107, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](108, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](109, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](110, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](111, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](112, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](113, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](114, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](115, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](116, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](117, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](118, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](119, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](120, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](121, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](122, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](123, " 2. We hereby provide the supporting documents for the reduction of invoice value as above. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](124, "br")(125, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](126, " 3. We hereby abide and confirm to the Clause (i) of the above mentioned RBI Circular and reads as: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](127, "br")(128, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](129, " (i) after a bill has been negotiated or sent for collection, its amount is to be reduced for any reason, AD Category - I banks may approve such reduction, if satisfied about genuineness of the request, provided: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](130, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](131, " a the reduction does not exceed 25 per cent of invoice value: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](132, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](133, " b.It does not relate to export of commodities subject to floor price stipulations ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](134, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](135, " c the exporter is not on the exporters caution list of the Reserve Bank, and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](136, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](137, " d. the exporter is advised to surrender proportionate export incentives availed of, if any. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](138, "br")(139, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](140, " 4. We request you to kindly knock-off the outstanding amount/s in your books and provide a confirmation for the same. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](141, "br")(142, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](143, " Thanking you, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](144, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](145, " Yours' Faithfully, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](146, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](147, " Authorised Signatory ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](148, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](149, " Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](150, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](151, " Designation: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](152, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](153, " Company Seal: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
}

function ExportHomeComponent_div_21_div_8_div_1_div_1_div_3_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 193)(1, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_div_21_div_8_div_1_div_1_div_3_div_6_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r132);
      const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      const code_r48 = ctx_r131.$implicit;
      const j_r49 = ctx_r131.index;
      const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r130.exportAsPDF1(code_r48, j_r49));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Proceed to Preview ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}

function ExportHomeComponent_div_21_div_8_div_1_div_1_div_3_div_7_iframe_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "iframe", 152);
  }

  if (rf & 2) {
    const j_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3).index;
    const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx_r133.dataImport[j_r49], _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeResourceUrl"]);
  }
}

function ExportHomeComponent_div_21_div_8_div_1_div_1_div_3_div_7_iframe_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "iframe", 155);
  }

  if (rf & 2) {
    const pipo_r139 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", pipo_r139, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeResourceUrl"]);
  }
}

function ExportHomeComponent_div_21_div_8_div_1_div_1_div_3_div_7_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Tri Party Documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function ExportHomeComponent_div_21_div_8_div_1_div_1_div_3_div_7_div_19_iframe_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "iframe", 155);
  }

  if (rf & 2) {
    const pipo_r141 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", pipo_r141, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeResourceUrl"]);
  }
}

function ExportHomeComponent_div_21_div_8_div_1_div_1_div_3_div_7_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ExportHomeComponent_div_21_div_8_div_1_div_1_div_3_div_7_div_19_iframe_1_Template, 1, 1, "iframe", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const j_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3).index;
    const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r136.mainDoc3[j_r49]);
  }
}

function ExportHomeComponent_div_21_div_8_div_1_div_1_div_3_div_7_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r144 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_div_21_div_8_div_1_div_1_div_3_div_7_button_24_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r144);
      const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](7);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r143.doneDox());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function ExportHomeComponent_div_21_div_8_div_1_div_1_div_3_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r146 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Setup: 3 Preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "button", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_div_21_div_8_div_1_div_1_div_3_div_7_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r146);
      const ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r145.downloadPDF());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "button", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "Send it via Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, " Generated Document ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "iframe", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](11, ExportHomeComponent_div_21_div_8_div_1_div_1_div_3_div_7_iframe_11_Template, 1, 1, "iframe", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, " SB Documents ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](15, ExportHomeComponent_div_21_div_8_div_1_div_1_div_3_div_7_iframe_15_Template, 1, 1, "iframe", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](16, "br")(17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](18, ExportHomeComponent_div_21_div_8_div_1_div_1_div_3_div_7_span_18_Template, 2, 0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](19, ExportHomeComponent_div_21_div_8_div_1_div_1_div_3_div_7_div_19_Template, 2, 1, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](20, "br")(21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "button", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_div_21_div_8_div_1_div_1_div_3_div_7_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r146);
      const ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r147.edit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](24, ExportHomeComponent_div_21_div_8_div_1_div_1_div_3_div_7_button_24_Template, 2, 0, "button", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    const j_r49 = ctx_r148.index;
    const code_r48 = ctx_r148.$implicit;
    const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx_r129.data8[j_r49], _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeResourceUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r129.sbPurposeDone1[j_r49] == code_r48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r129.mainDoc1[j_r49]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r129.mainDoc3[j_r49]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r129.mainDoc3[j_r49]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r129.isDone);
  }
}

function ExportHomeComponent_div_21_div_8_div_1_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, ExportHomeComponent_div_21_div_8_div_1_div_1_div_3_h1_2_Template, 2, 0, "h1", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, ExportHomeComponent_div_21_div_8_div_1_div_1_div_3_div_3_Template, 391, 15, "div", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, ExportHomeComponent_div_21_div_8_div_1_div_1_div_3_h1_4_Template, 2, 0, "h1", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, ExportHomeComponent_div_21_div_8_div_1_div_1_div_3_div_5_Template, 154, 0, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, ExportHomeComponent_div_21_div_8_div_1_div_1_div_3_div_6_Template, 3, 0, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, ExportHomeComponent_div_21_div_8_div_1_div_1_div_3_div_7_Template, 25, 6, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    const j_r49 = ctx_r149.index;
    const code_r48 = ctx_r149.$implicit;
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r52.doneSbPurpose[j_r49] != code_r48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r52.doneSbPurpose[j_r49] != code_r48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r52.sbPurpose1[j_r49] == code_r48 && ctx_r52.sbPurposeDone1[j_r49] != code_r48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r52.sbPurpose1[j_r49] == code_r48 && ctx_r52.sbPurposeDone1[j_r49] != code_r48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r52.doneSbPurpose[j_r49] != code_r48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r52.doneSbPurpose[j_r49] == code_r48);
  }
}

function ExportHomeComponent_div_21_div_8_div_1_div_1_div_4_iframe_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "iframe", 155);
  }

  if (rf & 2) {
    const pipo_r151 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", pipo_r151, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeResourceUrl"]);
  }
}

function ExportHomeComponent_div_21_div_8_div_1_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r154 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Tri Party agreement");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, ExportHomeComponent_div_21_div_8_div_1_div_1_div_4_iframe_5_Template, 1, 1, "iframe", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "br")(7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "Button", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_div_21_div_8_div_1_div_1_div_4_Template_Button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r154);
      const ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      const j_r49 = ctx_r153.index;
      const code_r48 = ctx_r153.$implicit;
      const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r152.sendMail(j_r49, code_r48));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, "Send Mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const j_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().index;
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r53.mainDoc2[j_r49]);
  }
}

function ExportHomeComponent_div_21_div_8_div_1_div_1_div_5_a_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r158 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_div_21_div_8_div_1_div_1_div_5_a_7_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r158);
      const ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r157.doneDox());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function ExportHomeComponent_div_21_div_8_div_1_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span")(2, "div", 4)(3, "div", 196)(4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, " Mail Sent SuccessFully");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, ExportHomeComponent_div_21_div_8_div_1_div_1_div_5_a_7_Template, 2, 0, "a", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r54.isDone);
  }
}

function ExportHomeComponent_div_21_div_8_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ExportHomeComponent_div_21_div_8_div_1_div_1_div_1_Template, 16, 6, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, ExportHomeComponent_div_21_div_8_div_1_div_1_div_2_Template, 4, 3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, ExportHomeComponent_div_21_div_8_div_1_div_1_div_3_Template, 8, 6, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, ExportHomeComponent_div_21_div_8_div_1_div_1_div_4_Template, 10, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, ExportHomeComponent_div_21_div_8_div_1_div_1_div_5_Template, 9, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const code_r48 = ctx.$implicit;
    const j_r49 = ctx.index;
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", code_r48 === ctx_r47.c && ctx_r47.sbPurpose[j_r49] != code_r48 && ctx_r47.importPurpose[j_r49] != code_r48 && ctx_r47.noImportPurpose[j_r49] != code_r48 && ctx_r47.mailArray[j_r49] != code_r48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", code_r48 === ctx_r47.c && ctx_r47.importPurpose[j_r49] == code_r48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", code_r48 === ctx_r47.c && ctx_r47.sbPurpose[j_r49] == code_r48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", code_r48 === ctx_r47.c && ctx_r47.noImportPurpose[j_r49] == code_r48 && ctx_r47.mailArray[j_r49] != code_r48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", code_r48 === ctx_r47.c && ctx_r47.mailArray[j_r49] == code_r48);
  }
}

function ExportHomeComponent_div_21_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ExportHomeComponent_div_21_div_8_div_1_div_1_Template, 6, 5, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r45.selectedPurpose);
  }
}

function ExportHomeComponent_div_21_div_8_div_2_div_1_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Select PI/PO numbers*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function ExportHomeComponent_div_21_div_8_div_2_div_1_div_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r172 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 130)(1, "input", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_div_21_div_8_div_2_div_1_div_1_div_9_Template_input_click_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r172);
      const value_r170 = restoredCtx.$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();

      const _r166 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](2);

      const ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r171.setradio(value_r170, _r166.value, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "label", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const value_r170 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("name", value_r170.bank);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](value_r170);
  }
}

function ExportHomeComponent_div_21_div_8_div_2_div_1_div_1_div_11_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r177 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 130)(1, "input", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_div_21_div_8_div_2_div_1_div_1_div_11_div_3_Template_input_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r177);
      const value_r175 = restoredCtx.$implicit;
      const ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](7);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r176.creditTo(value_r175));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "label", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const value_r175 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", value_r175.bank, "-", value_r175.accType, "");
  }
}

function ExportHomeComponent_div_21_div_8_div_2_div_1_div_1_div_11_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r180 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 130)(1, "input", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_div_21_div_8_div_2_div_1_div_1_div_11_div_7_Template_input_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r180);
      const value_r178 = restoredCtx.$implicit;
      const ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](7);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r179.chargesTo(value_r178));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "label", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const value_r178 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", value_r178.bank, "-", value_r178.accType, "");
  }
}

function ExportHomeComponent_div_21_div_8_div_2_div_1_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, ExportHomeComponent_div_21_div_8_div_2_div_1_div_1_div_11_div_3_Template, 4, 2, "div", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, ExportHomeComponent_div_21_div_8_div_2_div_1_div_1_div_11_div_7_Template, 4, 2, "div", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" Credit to ", ctx_r169.bankValue, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r169.newBankArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" To ", ctx_r169.bankValue, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r169.newBankArray);
  }
}

function ExportHomeComponent_div_21_div_8_div_2_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r182 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "input", 200, 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_div_21_div_8_div_2_div_1_div_1_Template_input_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r182);
      const ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](5);

      const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](89);

      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r181.loadPopupPIPONumbers(ctx_r181.searchPIPONumbers, _r11.style.display = "flex"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, ExportHomeComponent_div_21_div_8_div_2_div_1_div_1_span_3_Template, 2, 0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "h3", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "Select a bank ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "span", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, ExportHomeComponent_div_21_div_8_div_2_div_1_div_1_div_9_Template, 4, 2, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](11, ExportHomeComponent_div_21_div_8_div_2_div_1_div_1_div_11_Template, 9, 4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "button", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_div_21_div_8_div_2_div_1_div_1_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r182);
      const ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      const code_r160 = ctx_r184.$implicit;
      const j_r161 = ctx_r184.index;
      const ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r183.generateDoc(code_r160, j_r161));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, " Generate Document ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", ctx_r162.StringConverter(ctx_r162.selectPIPO));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r162.filterToggle);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r162.bank);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r162.bankToggle);
  }
}

function ExportHomeComponent_div_21_div_8_div_2_div_1_div_2_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "app-pdf-viewer", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("downloadShow", (ctx_r186.GetDownloadStatus == null ? null : ctx_r186.GetDownloadStatus.status) == "Approved" ? true : false)("src", "data:application/pdf;base64," + ctx_r186.value);
  }
}

function ExportHomeComponent_div_21_div_8_div_2_div_1_div_2_div_1_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "app-pdf-viewer", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r190 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("downloadShow", (ctx_r190.GetDownloadStatus == null ? null : ctx_r190.GetDownloadStatus.status) == "Approved" ? true : false)("src", ctx_r190.MT103_URL);
  }
}

function ExportHomeComponent_div_21_div_8_div_2_div_1_div_2_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, ExportHomeComponent_div_21_div_8_div_2_div_1_div_2_div_1_div_3_div_2_Template, 2, 2, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r187.MT103_URL != "");
  }
}

function ExportHomeComponent_div_21_div_8_div_2_div_1_div_2_div_1_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "app-pdf-viewer", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const pipo_r192 = ctx.$implicit;
    const i_r193 = ctx.index;
    const ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("downloadShow", (ctx_r191.GetDownloadStatus == null ? null : ctx_r191.GetDownloadStatus.status) == "Approved" ? true : false)("name", "PIPO  Document " + (i_r193 + 1))("src", pipo_r192);
  }
}

function ExportHomeComponent_div_21_div_8_div_2_div_1_div_2_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ExportHomeComponent_div_21_div_8_div_2_div_1_div_2_div_1_div_4_div_1_Template, 2, 3, "div", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r188.ARRAY_BUFFER_PDF);
  }
}

function ExportHomeComponent_div_21_div_8_div_2_div_1_div_2_div_1_div_5_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r199 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_div_21_div_8_div_2_div_1_div_2_div_1_div_5_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r199);
      const ctx_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](8);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r198.doneDox());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Done ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function ExportHomeComponent_div_21_div_8_div_2_div_1_div_2_div_1_div_5_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r201 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_div_21_div_8_div_2_div_1_div_2_div_1_div_5_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r201);
      const ctx_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](8);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r200.hidePreview());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function ExportHomeComponent_div_21_div_8_div_2_div_1_div_2_div_1_div_5_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r203 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_div_21_div_8_div_2_div_1_div_2_div_1_div_5_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r203);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);

      const _r164 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](4);

      const ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r202.openToPdf(_r164, ctx_r202.PREVIWES_URL));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Send Mail / Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function ExportHomeComponent_div_21_div_8_div_2_div_1_div_2_div_1_div_5_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r206 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_div_21_div_8_div_2_div_1_div_2_div_1_div_5_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r206);
      const code_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4).$implicit;
      const ctx_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r204.showPreview(code_r160));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Proceed to Preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function ExportHomeComponent_div_21_div_8_div_2_div_1_div_2_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ExportHomeComponent_div_21_div_8_div_2_div_1_div_2_div_1_div_5_button_1_Template, 2, 0, "button", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, ExportHomeComponent_div_21_div_8_div_2_div_1_div_2_div_1_div_5_button_2_Template, 2, 0, "button", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, ExportHomeComponent_div_21_div_8_div_2_div_1_div_2_div_1_div_5_button_3_Template, 2, 0, "button", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, ExportHomeComponent_div_21_div_8_div_2_div_1_div_2_div_1_div_5_button_4_Template, 2, 0, "button", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r189.newDone);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r189.newDone);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r189.newDone);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r189.newDone);
  }
}

function ExportHomeComponent_div_21_div_8_div_2_div_1_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ExportHomeComponent_div_21_div_8_div_2_div_1_div_2_div_1_div_1_Template, 2, 2, "div", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, ExportHomeComponent_div_21_div_8_div_2_div_1_div_2_div_1_div_3_Template, 4, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, ExportHomeComponent_div_21_div_8_div_2_div_1_div_2_div_1_div_4_Template, 2, 1, "div", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, ExportHomeComponent_div_21_div_8_div_2_div_1_div_2_div_1_div_5_Template, 5, 4, "div", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    const j_r161 = ctx_r207.index;
    const code_r160 = ctx_r207.$implicit;
    const ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r185.donePurpose[j_r161] != code_r160);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r185.newDone);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r185.newDone);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r185.donePurpose[j_r161] != code_r160);
  }
}

function ExportHomeComponent_div_21_div_8_div_2_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ExportHomeComponent_div_21_div_8_div_2_div_1_div_2_div_1_Template, 6, 4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r163.value != "" && ctx_r163.value != undefined);
  }
}

function ExportHomeComponent_div_21_div_8_div_2_div_1_ng_template_3_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r216 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 228)(1, "input", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function ExportHomeComponent_div_21_div_8_div_2_div_1_ng_template_3_div_14_div_1_Template_input_change_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r216);
      const pipo_r213 = restoredCtx.$implicit;
      const ctx_r215 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](7);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r215.addPdfToSelectedPdf(pipo_r213, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "app-pdf-viewer", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const pipo_r213 = ctx.$implicit;
    const i_r214 = ctx.index;
    const ctx_r212 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("downloadShow", (ctx_r212.GetDownloadStatus == null ? null : ctx_r212.GetDownloadStatus.status) == "Approved" ? true : false)("name", "PIPO  Document " + (i_r214 + 1))("src", pipo_r213);
  }
}

function ExportHomeComponent_div_21_div_8_div_2_div_1_ng_template_3_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ExportHomeComponent_div_21_div_8_div_2_div_1_ng_template_3_div_14_div_1_Template, 3, 3, "div", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r209 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r209.ARRAY_BUFFER_PDF);
  }
}

function ExportHomeComponent_div_21_div_8_div_2_div_1_ng_template_3_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r218 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "button", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_div_21_div_8_div_2_div_1_ng_template_3_div_16_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r218);
      const ctx_r217 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r217.mergeAllPDFs("download"));
    })("click", function ExportHomeComponent_div_21_div_8_div_2_div_1_ng_template_3_div_16_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r218);
      const modal_r208 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](modal_r208.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Download PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "button", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_div_21_div_8_div_2_div_1_ng_template_3_div_16_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r218);
      const ctx_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r221.mergeAllPDFs("sendMail"));
    })("click", function ExportHomeComponent_div_21_div_8_div_2_div_1_ng_template_3_div_16_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r218);
      const modal_r208 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](modal_r208.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Send Mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}

function ExportHomeComponent_div_21_div_8_div_2_div_1_ng_template_3_div_17_div_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r228 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_div_21_div_8_div_2_div_1_ng_template_3_div_17_div_1_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r228);
      const code_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4).$implicit;
      const ctx_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r227.SendApproval(ctx_r227.GetDownloadStatus == null ? null : ctx_r227.GetDownloadStatus.status, code_r160 + "_" + (ctx_r227.Inward_Remittance_MT103[ctx_r227.Inward_Remittance_MT103.length - 1] == null ? null : ctx_r227.Inward_Remittance_MT103[ctx_r227.Inward_Remittance_MT103.length - 1]._id), ctx_r227.selectedPdfs));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Send for Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r226 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", (ctx_r226.GetDownloadStatus == null ? null : ctx_r226.GetDownloadStatus.status) == "pending" || (ctx_r226.GetDownloadStatus == null ? null : ctx_r226.GetDownloadStatus.status) == "verify");
  }
}

function ExportHomeComponent_div_21_div_8_div_2_div_1_ng_template_3_div_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ExportHomeComponent_div_21_div_8_div_2_div_1_ng_template_3_div_17_div_1_button_1_Template, 2, 1, "button", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r224 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r224.newDone);
  }
}

function ExportHomeComponent_div_21_div_8_div_2_div_1_ng_template_3_div_17_div_2_button_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Wait for Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r230 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", (ctx_r230.GetDownloadStatus == null ? null : ctx_r230.GetDownloadStatus.status) == "pending" || (ctx_r230.GetDownloadStatus == null ? null : ctx_r230.GetDownloadStatus.status) == "verify");
  }
}

function ExportHomeComponent_div_21_div_8_div_2_div_1_ng_template_3_div_17_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ExportHomeComponent_div_21_div_8_div_2_div_1_ng_template_3_div_17_div_2_button_1_Template, 2, 1, "button", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r225.newDone);
  }
}

function ExportHomeComponent_div_21_div_8_div_2_div_1_ng_template_3_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ExportHomeComponent_div_21_div_8_div_2_div_1_ng_template_3_div_17_div_1_Template, 2, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, ExportHomeComponent_div_21_div_8_div_2_div_1_ng_template_3_div_17_div_2_Template, 2, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r211 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (ctx_r211.GetDownloadStatus == null ? null : ctx_r211.GetDownloadStatus.status) == null || (ctx_r211.GetDownloadStatus == null ? null : ctx_r211.GetDownloadStatus.status) == "Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (ctx_r211.GetDownloadStatus == null ? null : ctx_r211.GetDownloadStatus.status) == "pending" || (ctx_r211.GetDownloadStatus == null ? null : ctx_r211.GetDownloadStatus.status) == "Verify");
  }
}

function ExportHomeComponent_div_21_div_8_div_2_div_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r232 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 221)(1, "div", 222)(2, "div", 223)(3, "div", 224)(4, "div", 225)(5, "div", 4)(6, "div", 226)(7, "p", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, " Select Document To Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "div", 228)(10, "p", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "Generated Document");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "input", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function ExportHomeComponent_div_21_div_8_div_2_div_1_ng_template_3_Template_input_change_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r232);
      const ctx_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r231.addPdfToSelectedPdf(ctx_r231.value, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "app-pdf-viewer", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](14, ExportHomeComponent_div_21_div_8_div_2_div_1_ng_template_3_div_14_Template, 2, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "div", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](16, ExportHomeComponent_div_21_div_8_div_2_div_1_ng_template_3_div_16_Template, 5, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](17, ExportHomeComponent_div_21_div_8_div_2_div_1_ng_template_3_div_17_Template, 3, 2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()()();
  }

  if (rf & 2) {
    const ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("downloadShow", (ctx_r165.GetDownloadStatus == null ? null : ctx_r165.GetDownloadStatus.status) == "Approved" ? true : false)("src", "data:application/pdf;base64," + ctx_r165.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r165.newDone);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (ctx_r165.GetDownloadStatus == null ? null : ctx_r165.GetDownloadStatus.status) == "Approved" && (ctx_r165.USER_DATA == null ? null : ctx_r165.USER_DATA.RoleCheckbox) != "" && (ctx_r165.USER_DATA == null ? null : ctx_r165.USER_DATA.RoleCheckbox) != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (ctx_r165.GetDownloadStatus == null ? null : ctx_r165.GetDownloadStatus.status) != "Approved");
  }
}

function ExportHomeComponent_div_21_div_8_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ExportHomeComponent_div_21_div_8_div_2_div_1_div_1_Template, 14, 4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, ExportHomeComponent_div_21_div_8_div_2_div_1_div_2_Template, 2, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, ExportHomeComponent_div_21_div_8_div_2_div_1_ng_template_3_Template, 18, 5, "ng-template", null, 199, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const code_r160 = ctx.$implicit;
    const j_r161 = ctx.index;
    const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", code_r160 === ctx_r159.c && ctx_r159.generatePurpose[j_r161] != code_r160 || ctx_r159.Select_A_bank[code_r160]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", code_r160 === ctx_r159.c && ctx_r159.generatePurpose[j_r161] == code_r160);
  }
}

function ExportHomeComponent_div_21_div_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ExportHomeComponent_div_21_div_8_div_2_div_1_Template, 5, 2, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r46.selectedPurpose);
  }
}

function ExportHomeComponent_div_21_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ExportHomeComponent_div_21_div_8_div_1_Template, 2, 1, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, ExportHomeComponent_div_21_div_8_div_2_Template, 2, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r40.c == "P0102" || ctx_r40.c == "P0104" || ctx_r40.c == "P0105" || ctx_r40.c == "P0107");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r40.c != "P0102" && ctx_r40.c != "P0104" && ctx_r40.c != "P0105" && ctx_r40.c != "P0107");
  }
}

function ExportHomeComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r234 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 81)(1, "div")(2, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_div_21_Template_img_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r234);
      const ctx_r233 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r233.hide(".search_box_new"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, ExportHomeComponent_div_21_div_6_Template, 2, 4, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, ExportHomeComponent_div_21_div_8_Template, 3, 2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.selectedPurpose);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.c);
  }
}

function ExportHomeComponent_ng_template_22_option_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "option", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r240 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", item_r240.como, "");
  }
}

function ExportHomeComponent_ng_template_22_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "option", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r242 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", item_r242.loc, "");
  }
}

function ExportHomeComponent_ng_template_22_option_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "option", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r244 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", item_r244.buyerName, "");
  }
}

function ExportHomeComponent_ng_template_22_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr", 254)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "input", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r246 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", data_r246.date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", data_r246.pi_poNo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", data_r246.amount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", data_r246.buyerName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", data_r246.commodity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", data_r246.location, " ");
  }
}

const _c3 = function (a0) {
  return {
    commodity: a0
  };
};

const _c4 = function (a0) {
  return {
    location: a0
  };
};

const _c5 = function (a0) {
  return {
    buyerName: a0
  };
};

const _c6 = function (a0, a1, a2) {
  return [a0, a1, a2];
};

function ExportHomeComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r249 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 28)(1, "div", 2)(2, "div", 238)(3, "button", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_ng_template_22_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r249);
      const modal_r235 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](modal_r235.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 240)(7, "div", 224)(8, "div", 241)(9, "div", 4)(10, "div", 226)(11, "h6", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "Select PI/PO");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "div", 243)(14, "select", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ExportHomeComponent_ng_template_22_Template_select_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r249);
      const ctx_r250 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r250.nameSearch = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "option", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, "commodity");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](17, ExportHomeComponent_ng_template_22_option_17_Template, 2, 1, "option", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "select", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ExportHomeComponent_ng_template_22_Template_select_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r249);
      const ctx_r251 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r251.nameSearch1 = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "option", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20, "location");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](21, ExportHomeComponent_ng_template_22_option_21_Template, 2, 1, "option", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "select", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ExportHomeComponent_ng_template_22_Template_select_ngModelChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r249);
      const ctx_r252 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r252.nameSearch2 = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "option", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](24, "BuyerName");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](25, ExportHomeComponent_ng_template_22_option_25_Template, 2, 1, "option", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "input", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ExportHomeComponent_ng_template_22_Template_input_ngModelChange_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r249);
      const ctx_r253 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r253.startDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "input", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ExportHomeComponent_ng_template_22_Template_input_ngModelChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r249);
      const ctx_r254 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r254.endDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "button", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_ng_template_22_Template_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r249);
      const ctx_r255 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      ctx_r255.startDate = "";
      ctx_r255.endDate = "";
      ctx_r255.nameSearch = "";
      ctx_r255.nameSearch1 = "";
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r255.nameSearch2 = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](29, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "section", 250)(31, "table", 251)(32, "thead", 46)(33, "tr", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](34, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](36, "DATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](38, "INVOICE NUMBER");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](40, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](42, "CONSIGNEE NAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](43, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](44, "COMMODITY");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](45, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](46, "LOCATION");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](47, "tbody", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](48, ExportHomeComponent_ng_template_22_tr_48_Template, 15, 6, "tr", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](49, "filtera");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](50, "filterb");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()()()()()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx_r3.nameSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r3.commoditydata);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx_r3.nameSearch1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r3.locationdata);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx_r3.nameSearch2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r3.buyerDetail);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx_r3.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx_r3.endDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](49, 9, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind3"](50, 12, ctx_r3.item3, ctx_r3.startDate, ctx_r3.endDate), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction3"](22, _c6, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](16, _c3, ctx_r3.nameSearch), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](18, _c4, ctx_r3.nameSearch1), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](20, _c5, ctx_r3.nameSearch2))));
  }
}

function ExportHomeComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r258 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "ng-select", 256, 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keyup", function ExportHomeComponent_div_36_Template_ng_select_keyup_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r258);
      const ctx_r257 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r257.SearchSelectValue(ctx_r257.PARTY_NAMEselection));
    })("change", function ExportHomeComponent_div_36_Template_ng_select_change_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r258);
      const ctx_r259 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r259.SearchSelectValue(ctx_r259.PARTY_NAMEselection));
    })("ngModelChange", function ExportHomeComponent_div_36_Template_ng_select_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r258);
      const ctx_r260 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r260.PARTY_NAMEselection = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("items", ctx_r5.PARTY_NAME)("ngModel", ctx_r5.PARTY_NAMEselection);
  }
}

function ExportHomeComponent_div_37_label_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r265 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "label", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_div_37_label_1_Template_label_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r265);
      const item_r262 = restoredCtx.$implicit;
      const ctx_r264 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);

      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](25);

      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r264.ClickbankNumber(item_r262["blcopyrefNumber"], ".bnk_reff", _r4.style.display = "none"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r262 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", item_r262["blcopyrefNumber"], "");
  }
}

function ExportHomeComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ExportHomeComponent_div_37_label_1_Template, 2, 1, "label", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r6.Blcopyref);
  }
}

function ExportHomeComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Data not found..");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function ExportHomeComponent_option_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "option", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r266 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", item_r266);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", item_r266, "");
  }
}

function ExportHomeComponent_tr_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r271 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr", 262)(1, "td")(2, "input", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function ExportHomeComponent_tr_82_Template_input_change_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r271);
      const data_r268 = restoredCtx.$implicit;
      const ctx_r270 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r270.changeCheckbox1(data_r268.sbno, data_r268));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r268 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", data_r268.sbdate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", data_r268.sbno, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", data_r268.buyerName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", data_r268.fobCurrency, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", data_r268.fobValue, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", data_r268.balanceAvai, " ");
  }
}

function ExportHomeComponent_option_111_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "option", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r272 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", item_r272);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](item_r272);
  }
}

function ExportHomeComponent_tbody_136_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r278 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr", 262)(1, "td")(2, "input", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function ExportHomeComponent_tbody_136_tr_1_Template_input_change_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r278);
      const data_r275 = restoredCtx.$implicit;
      const ctx_r277 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r277.changeCheckboxPIPO(data_r275["pi_poNo"]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r275 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", data_r275.pi_poNo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", data_r275.date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", data_r275.buyerName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", data_r275.fobCurrency, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", data_r275.location, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", data_r275.commodity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", data_r275.amount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", data_r275.paymentTerm[0].type, " ");
  }
}

function ExportHomeComponent_tbody_136_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tbody", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ExportHomeComponent_tbody_136_tr_1_Template, 19, 8, "tr", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r13.dataSource);
  }
}

let ExportHomeComponent = /*#__PURE__*/(() => {
  class ExportHomeComponent {
    constructor(documentService, router, sanitizer, route, toastr, userService, modalService, confirmDialogService, wininfo, AprrovalPendingRejectService, CustomConfirmDialogModel) {
      var _this = this;

      this.documentService = documentService;
      this.router = router;
      this.sanitizer = sanitizer;
      this.route = route;
      this.toastr = toastr;
      this.userService = userService;
      this.modalService = modalService;
      this.confirmDialogService = confirmDialogService;
      this.wininfo = wininfo;
      this.AprrovalPendingRejectService = AprrovalPendingRejectService;
      this.CustomConfirmDialogModel = CustomConfirmDialogModel;
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
      this.allTransactions = [];
      this.SBBuyerName = 'BuyerName';
      this.PIPONumbersBuyerName = 'BuyerName';
      this.buyerName = [];
      this.selectSB = '';
      this.buyerDetail = [];
      this.nameSearch = '';
      this.nameSearch1 = '';
      this.nameSearch2 = '';
      this.nameSearch3 = '';
      this.startDate = '';
      this.endDate = '';
      this.purposeSelect = false;
      this.selectPurpose = false;
      this.selectedPurpose = [];
      this.pgNumber = 0;
      this.pcNumber = 0;
      this.selectedPipo = false;
      this.selectedRowSb = false;
      this.item3 = [];
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
      this.mailArray = [];
      this.mainDoc = [];
      this.mainDoc1 = [];
      this.mainDoc2 = [];
      this.mainDoc3 = [];
      this.mainDoc4 = [];
      this.data8 = [];
      this.data9 = [];
      this.dataImport = [];
      this.sbPurposeDone1 = [];
      this.item4 = [];
      this.newTask = [];
      this.zToggle = [];
      this.item5 = [];
      this.item6 = [];
      this.item7 = [];
      this.draftPipo = [];
      this.ir = 'no';
      this.draftSb = [];
      this.drafttry = [];
      this.bankArray = [];
      this.bank = [];
      this.allBank = [];
      this.newBankArray = [];
      this.newDone = false;
      this.bgColor = false;
      this.jstoday = '';
      this.today = new Date();
      this.itemArray = [];
      this.model = {
        option: 'Bank options'
      };
      this.model1 = {
        option: 'Bank options'
      };
      this.model2 = {
        option: 'Bank options'
      };
      this.selectedPdfs = [];
      this.generateChecked = true;
      this.Inward_Remittance = ["P0102", "P0103", "P0104", "P0105", "P0107", "P0801", "P0802", "P0803", "P01P0804", "P0805", "P0806", "P1003", "P1004", "P1005", "P1006", "P1007", "P1008", "P1009", "P1011", "P1012", "P1013", "P1019"];
      this.default_value = [];
      this.old_data = [];
      this.INPUT_SERACH = [];
      this.Blcopyref = [];
      this.ThirdPartydata = [];
      this.Inward_Remittancefilter = [];
      this.SELECT_ThirdPartydata = '';
      this.SELECT_bankreferencenumber = '';
      this.Lodgement = [];
      this.selection = [];
      this.Select_A_bank = [];
      this.GetDownloadStatus = [];
      this.ThirdPartydataoldata = [];
      this.Blcopyrefoldata = [];
      this.buyer = '';
      this.location = '';
      this.commodity = '';
      this.page = 0;
      this.limit = 1000;
      this.filtervisible = false;
      this.dataSource = [];
      this.OLD_dataSource = [];
      this.USER_DATA = [];
      this.STORE_URL = [];
      this.Inward_Remittance_MT103 = [];
      this.MT103_URL = '';
      this.selectPIPO = [];

      this.handleSearch = (arr, searchInput) => {
        let filteredData = arr.filter(value => {
          return value.name.toLowerCase().includes(searchInput.toLowerCase()) || value.days.toString().includes(searchInput.toString());
        });
        console.log(filteredData); //this.setState({ list: filteredData });
      };

      this.PREVIWES_URL = '';
      this.ARRAY_BUFFER_PDF = [];
      this.OLD_INPUT_VALUE = '';

      this.mergeAllPDFs = /*#__PURE__*/function () {
        var _ref = (0,D_Bharathexim_Repo_docmachine_frontend_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (type) {
          let urls = _this.selectedPdfs;
          console.log("2542 Line", urls);
          const numDocs = urls.length;
          const pdfDoc = yield pdf_lib__WEBPACK_IMPORTED_MODULE_5__.PDFDocument.create();

          var appendEachPage = /*#__PURE__*/function () {
            var _ref2 = (0,D_Bharathexim_Repo_docmachine_frontend_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (donorPdfDoc, currentpage, docLength) {
              if (currentpage < docLength) {
                console.log('Inside Page', currentpage, 'total pages', docLength);
                const [donorPage] = yield pdfDoc.copyPages(donorPdfDoc, [currentpage]);
                pdfDoc.addPage(donorPage);
                yield appendEachPage(donorPdfDoc, currentpage + 1, docLength);
              }
            });

            return function appendEachPage(_x2, _x3, _x4) {
              return _ref2.apply(this, arguments);
            };
          }();

          var appendEachFile = /*#__PURE__*/function () {
            var _ref3 = (0,D_Bharathexim_Repo_docmachine_frontend_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (bytes) {
              const donorPdfDoc = yield pdf_lib__WEBPACK_IMPORTED_MODULE_5__.PDFDocument.load(bytes);
              const docLength = donorPdfDoc.getPageCount();
              console.log('donorPdfDoc', donorPdfDoc, 'docLength', docLength);
              yield appendEachPage(donorPdfDoc, 0, docLength);
            });

            return function appendEachFile(_x5) {
              return _ref3.apply(this, arguments);
            };
          }();

          var appendAllFiles = /*#__PURE__*/function () {
            var _ref4 = (0,D_Bharathexim_Repo_docmachine_frontend_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (pdflist, currentfile) {
              if (currentfile < numDocs) {
                yield appendEachFile(pdflist[currentfile]);
                console.log('Inside file', currentfile);
                yield appendAllFiles(pdflist, currentfile + 1);
              } else {
                if (type == 'download') {
                  _this.downloadAsSingleFile(pdfDoc);
                } else {
                  _this.sendMail2(pdfDoc);
                }
              }
            });

            return function appendAllFiles(_x6, _x7) {
              return _ref4.apply(this, arguments);
            };
          }(); // download single file;


          let downloadEachFile = filename => {
            return new Promise((resolve, reject) => {
              _this.userService.mergePdf(filename).subscribe(res => {
                console.log('downloadEachFile', res);
                resolve(res.arrayBuffer());
              }, err => reject('Failed to fetch the pdf'));
            });
          }; // download all the pdfs


          let downloadAllFiles = () => {
            var promises = [];

            for (var i = 0; i < urls.length; i++) {
              if (urls[i] != '' && urls[i] != undefined) {
                promises.push(urls[i]);
              }
            }

            Promise.all(promises).then(pdfList => {
              appendAllFiles(pdfList, 0);
              console.log('pdfList2', pdfList);
            }, error => {// write code to send error to user
              // res.send({"error": "failed to fetch the document try again later/ contact administrator"})''
            });
          };

          downloadAllFiles();
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }();

      this.downloadAsSingleFile = /*#__PURE__*/function () {
        var _ref5 = (0,D_Bharathexim_Repo_docmachine_frontend_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (pdfDoc) {
          const pdfDataUri = yield pdfDoc.saveAsBase64({
            dataUri: true
          });
          var data_pdf = pdfDataUri.substring(pdfDataUri.indexOf(',') + 1); //const byteCharacters = atob(data_pdf);

          if (_this.generateChecked == true) {
            var merge = 'data:application/pdf;base64,' + data_pdf; //this.value

            const mergedPdf = yield pdf_lib__WEBPACK_IMPORTED_MODULE_5__.PDFDocument.create();
            const pdfA = yield pdf_lib__WEBPACK_IMPORTED_MODULE_5__.PDFDocument.load(_this.formerge);
            const pdfB = yield pdf_lib__WEBPACK_IMPORTED_MODULE_5__.PDFDocument.load(merge);
            const copiedPagesA = yield mergedPdf.copyPages(pdfA, pdfA.getPageIndices());
            copiedPagesA.forEach(page => mergedPdf.addPage(page));
            const copiedPagesB = yield mergedPdf.copyPages(pdfB, pdfB.getPageIndices());
            copiedPagesB.forEach(page => mergedPdf.addPage(page));
            const mergedPdfFile = yield mergedPdf.save();

            var base64String = _this._arrayBufferToBase64(mergedPdfFile);

            const byteCharacters = atob(base64String);
            const byteNumbers = new Array(byteCharacters.length);

            for (let i = 0; i < byteCharacters.length; i++) {
              byteNumbers[i] = byteCharacters.charCodeAt(i); // console.log("bytenumbers", byteNumbers[i])
            }

            const byteArray = new Uint8Array(byteNumbers);
            (0,file_saver__WEBPACK_IMPORTED_MODULE_6__.saveAs)(new Blob([byteArray], {
              type: 'application/pdf'
            }), 'BankAttachment');
          } else {
            const byteCharacters1 = atob(data_pdf);
            const byteNumbers1 = new Array(byteCharacters1.length);

            for (let i = 0; i < byteCharacters1.length; i++) {
              byteNumbers1[i] = byteCharacters1.charCodeAt(i); // console.log("bytenumbers", byteNumbers[i])
            }

            const byteArray1 = new Uint8Array(byteNumbers1);
            (0,file_saver__WEBPACK_IMPORTED_MODULE_6__.saveAs)(new Blob([byteArray1], {
              type: 'application/pdf'
            }), 'InwardRemittanceDisposal');
          }
        });

        return function (_x8) {
          return _ref5.apply(this, arguments);
        };
      }();

      this.sendMail2 = /*#__PURE__*/function () {
        var _ref6 = (0,D_Bharathexim_Repo_docmachine_frontend_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (pdfDoc) {
          const pdfDataUri = yield pdfDoc.saveAsBase64({
            dataUri: true
          });
          console.log('5417****', pdfDataUri);
          var data_pdf = pdfDataUri.substring(pdfDataUri.indexOf(',') + 1);
          const byteCharacters = atob(data_pdf);
          const byteNumbers = new Array(byteCharacters.length);

          for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i); // console.log("bytenumbers", byteNumbers[i])
          }

          const byteArray = new Uint8Array(byteNumbers); // this.BytePdfDoc = byteArray.toString();
          // console.log("**BytePdfDoc",this.BytePdfDoc)

          console.log('**user id', _this.id);
          console.log('99999999999999999999999', data_pdf);

          if (_this.generateChecked == true) {
            var merge = 'data:application/pdf;base64,' + data_pdf; //this.value

            const mergedPdf = yield pdf_lib__WEBPACK_IMPORTED_MODULE_5__.PDFDocument.create();
            console.log('xx');
            console.log("2679", _this.formerge);
            const pdfA = yield pdf_lib__WEBPACK_IMPORTED_MODULE_5__.PDFDocument.load(_this.formerge);
            console.log('a');
            const pdfB = yield pdf_lib__WEBPACK_IMPORTED_MODULE_5__.PDFDocument.load(merge);
            console.log('b');
            const copiedPagesA = yield mergedPdf.copyPages(pdfA, pdfA.getPageIndices());
            copiedPagesA.forEach(page => mergedPdf.addPage(page));
            const copiedPagesB = yield mergedPdf.copyPages(pdfB, pdfB.getPageIndices());
            copiedPagesB.forEach(page => mergedPdf.addPage(page));
            const mergedPdfFile = yield mergedPdf.save();

            var base64String = _this._arrayBufferToBase64(mergedPdfFile);

            _this.userService.documentSend(_this.id, base64String).subscribe(data => {
              console.log('king123');
              console.log(data); // this.message = data['message']
              // this.no = false;
              //
            }, error => {
              // this.no = true;
              // this.message = null;
              console.log('error');
            });
          } else {
            _this.userService.documentSend(_this.id, data_pdf).subscribe(data => {
              console.log('king123');
              console.log(data); // this.message = data['message']
              // this.no = false;
              //
            }, error => {
              // this.no = true;
              // this.message = null;
              console.log('error');
            });
          }
        });

        return function (_x9) {
          return _ref6.apply(this, arguments);
        };
      }();

      this.ShippingbillNumberfilter = [];
      this.PARTY_NAME = [];
      console.log("hello");
      this.jstoday = (0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.formatDate)(this.today, 'dd-MM-yyyy', 'en-US', '+0530');
      console.log(this.jstoday);

      for (let index = 0; index < this.Inward_Remittance.length; index++) {
        this.Lodgement[this.Inward_Remittance[index]] = {
          'Lodgement': {
            Show: '',
            Hide: ''
          },
          'BuyerRemitter': {
            Show: '',
            Hide: ''
          },
          'Invoicereduction': {
            Show: '',
            Hide: ''
          },
          'BuyerRemitterDifferent': {
            Show: '',
            Hide: ''
          },
          'InvoiceReduction2': {
            Show: '',
            Hide: ''
          }
        };
      }

      console.log(this.Lodgement, 'dcsdsdsadsadsdasdasdsadsad');
    }

    ngOnInit() {
      var _this2 = this;

      return (0,D_Bharathexim_Repo_docmachine_frontend_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this2.wininfo.set_controller_of_width(250, '.content_top_common');

        yield _this2.userService.getUserDetail().then(res => {
          _this2.USER_DATA = res['result'];
        });
        console.log(_this2.USER_DATA, 'this.USER_DATA');
        _this2.redirectid = _this2.route.snapshot.paramMap.get('pipo');
        _this2.redirectindex = _this2.route.snapshot.paramMap.get('index');
        _this2.redirectpage = _this2.route.snapshot.paramMap.get('page');
        console.log("pipoId", _this2.redirectid);

        for (let index = 0; index < _inward_json__WEBPACK_IMPORTED_MODULE_2__.length; index++) {
          var temp = [];

          for (let j = 0; j < _inward_json__WEBPACK_IMPORTED_MODULE_2__[index]['purpose'].length; j++) {
            if (_this2.Inward_Remittance.includes(_inward_json__WEBPACK_IMPORTED_MODULE_2__[index]['purpose'][j].code)) {
              temp.push(_inward_json__WEBPACK_IMPORTED_MODULE_2__[index]['purpose'][j]);
            }
          }

          if (temp.length != 0) {
            _this2.default_value[_inward_json__WEBPACK_IMPORTED_MODULE_2__[index]['groupname']] = temp;
          }
        }

        _this2.documentService.getBlcopyrefPromies().then(res => {
          _this2.Blcopyref = res;
          _this2.Blcopyrefoldata = res;
          console.log(res, 'getBlcopyref');
        }).catch(error => {
          _this2.Blcopyref = [];
        });

        _this2.documentService.getMaster(1).subscribe(res => {
          console.log(res, 'res.data');
          res.data.forEach((element, i) => {
            if (element.buyerName != '' && element.buyerName != undefined) {
              _this2.PARTY_NAME.push(element.buyerName);
            }
          });
        }, err => console.log(err));

        _this2.Inward_Remittancefilter = _this2.Inward_Remittance;
        _this2.old_data = _this2.default_value;

        _this2.documentService.getPipos(_this2.page, _this2.limit, _this2.commodity, _this2.location, _this2.buyer, 'export').subscribe(res => {
          console.log(res, 'resssssssssssssss');
          _this2.OLD_dataSource = res.docs;
          _this2.dataSource = res.docs;
          console.log("res", _this2.dataSource); // this.paginator.length = res.totalDocs
        });

        console.log(_inward_json__WEBPACK_IMPORTED_MODULE_2__);
        _this2.jsondata = _inward_json__WEBPACK_IMPORTED_MODULE_2__;
        console.log(_this2.jsondata[0].purpose);
        _this2.dataJson = _this2.jsondata;

        _this2.purposeFun(_this2.default_value);

        _this2.documentService.getInward_remittance().subscribe(res => {
          _this2.Inward_Remittance_MT103 = res?.data;

          _this2.userService.mergePdf(_this2.Inward_Remittance_MT103[_this2.Inward_Remittance_MT103.length - 1]?.file).subscribe(res => {
            res.arrayBuffer().then(data => {
              _this2.MT103_URL = data;
              console.log('mergePdf_downloadEachFile', data);
            });
          });

          console.log(res, 'getInward_remittance');
        });

        _this2.documentService.getThird().subscribe(res => {
          console.log('Data fetched successfully', res);

          for (let value of res['data']) {
            if (value['file'] == 'export') {
              _this2.ThirdPartydata.push(value);

              _this2.ThirdPartydataoldata.push(value);

              console.log('ThirdPartydata', _this2.ThirdPartydata);
            }
          }
        }, err => console.log(err));

        _this2.route.params.subscribe(params => {
          _this2.file = _this2.route.snapshot.params['file'];
          _this2.showInvoice = false;
          console.log("hello");
        }); //buyer details


        _this2.userService.getBuyer(1).subscribe(res => {
          _this2.buyerDetail = res.data, console.log("Benne Detail4", _this2.buyerDetail);
        }, err => console.log("Error", err)); //pipo details


        _this2.documentService.getPipo().subscribe(res => {
          console.log("HEre Response cheching for", res), _this2.item3 = res.data;
          let value1 = [];

          for (let value of _this2.item3) {
            if (value.file == 'export') {
              value1.push(value);
            }
          }

          _this2.item3 = value1;
          console.log('Export Pipo', _this2.item3);
        }, err => console.log(err));

        _this2.documentService.getMaster(1).subscribe(res => {
          _this2.item1 = res.data;
          _this2.ShippingbillNumberfilter = res.data;

          _this2.item1.forEach((element, i) => {
            if (element.buyerName != null && element.buyerName != undefined) {
              _this2.buyerName[i] = element.buyerName;
            }
          });

          _this2.buyerName = _this2.buyerName.filter((value, index) => _this2.buyerName.indexOf(value) === index);
        }, err => console.log(err));

        _this2.documentService.getThird().subscribe(res => {
          console.log("HEre Response Third", res);
          _this2.item7 = res.data;

          for (let value of _this2.item7) {
            if (value['file'] == 'export') {
              _this2.item4.push(value);

              console.log('awwww', _this2.item4);
            }
          }
        }, err => console.log(err)); // used details


        _this2.userService.getUserDetail().then(res => {
          console.log('********USer Details', res);
          _this2.id = res.result.emailId;
          console.log('***********userId', _this2.id);
        });

        let date = ['27-JAN-21', '29-JAN-2021', '31-JAN-2021'];
        const myArray = date[0].split(" ");

        _this2.userService.getTeam().subscribe(data => {
          console.log("king123");
          console.log(data['data'][0]);
          _this2.item5 = data['data'][0];
          console.log("checking for location commodity", _this2.item5);
          _this2.commoditydata = _this2.item5.commodity;
          console.log("checking for commodity", _this2.commoditydata);
          _this2.locationdata = _this2.item5.location;
          console.log("checking for location", _this2.locationdata);
          _this2.arr = _this2.item5.gst.split('');
          _this2.bankArray = _this2.item5.bankDetails;

          for (let value of _this2.bankArray) {
            _this2.allBank.push(value.bank);
          }

          console.log(_this2.allBank);
          _this2.bank = _this2.allBank.filter(function (item, index, inputArray) {
            return inputArray.indexOf(item) == index;
          });
          console.log(_this2.bank, 'sallBankallBankallBankallBankallBank');
        }, error => {
          console.log("error");
        });

        if (_this2.documentService.draft) {
          console.log('inside');
          _this2.proceed = false;
          _this2.c = _this2.documentService.task.task[0].purposeCode;
          let newArray = [];
          let i = 0;

          for (let value of _this2.documentService.task.task) {
            newArray.push(value.purposeCode);

            if (value.purposeCode != "P0102" && value.purposeCode != "P0104" && value.purposeCode != "P0105" && value.purposeCode != "P0107") {
              //*ngIf='c != "P0102" && c != "P0104" && c != "P0105" && c != "P0107"'
              console.log('jdhdhjdhj');

              if (value.pipoUrls && !value.generateDoc1) {
                _this2.zToggle[i] = false;
                _this2.generatePurpose[i] = value.purposeCode;
                let gene = [];

                for (let value1 of value.pipoUrls) {
                  gene.push(_this2.sanitizer.bypassSecurityTrustResourceUrl(value1.changingThisBreaksApplicationSecurity));
                }

                _this2.draftPipo[i] = value.pipoNumbers;
                _this2.mainDoc[i] = gene;
                console.log("Line no. 287", _this2.mainDoc);
              } else if (value.pipoUrls && value.generateDoc1) {
                _this2.zToggle[i] = true;
                _this2.generatePurpose[i] = value.purposeCode;
                _this2.donePurpose[i] = value.purposeCode;
                let gene = [];

                for (let value1 of value.pipoUrls) {
                  gene.push(_this2.sanitizer.bypassSecurityTrustResourceUrl(value1.changingThisBreaksApplicationSecurity));
                }

                _this2.mainDoc[i] = gene;
                console.log("Line no. 301", _this2.mainDoc);

                if (value.generateDoc1) {
                  console.log('hshshsh');
                  _this2.data7[i] = _this2.sanitizer.bypassSecurityTrustResourceUrl(value.generateDoc1.changingThisBreaksApplicationSecurity);
                }
              }
            } else if (value.purposeCode == "P0102" || value.purposeCode == "P0104" || value.purposeCode == "P0105" || value.purposeCode == "P0107") {
              //*ngIf='c != "P0102" && c != "P0104" && c != "P0105" && c != "P0107"'
              console.log('hhhhh');

              if (value.lodgeDone == 'no') {
                if (!value.generateDoc1) {
                  if (value.ir == 'yes') {
                    _this2.sbPurpose1[i] = value.purposeCode;
                  }

                  _this2.zToggle[i] = false;
                  _this2.sbPurpose[i] = value.purposeCode;

                  if (value.sbUrls) {
                    let gene = [];

                    for (let value1 of value.sbUrls) {
                      gene.push(_this2.sanitizer.bypassSecurityTrustResourceUrl(value1.changingThisBreaksApplicationSecurity));
                    }

                    _this2.draftSb[i] = value.sbNumbers;
                    _this2.mainDoc1[i] = gene;
                  }

                  if (value.tryUrls) {
                    let gene1 = [];

                    for (let value1 of value.tryUrls) {
                      gene1.push(_this2.sanitizer.bypassSecurityTrustResourceUrl(value1.changingThisBreaksApplicationSecurity));
                    }

                    _this2.drafttry[i] = value.tryNumbers;
                    _this2.mainDoc3[i] = gene1;
                  }
                } else if (value.generateDoc1) {
                  _this2.sbPurpose[i] = value.purposeCode;
                  _this2.doneSbPurpose[i] = value.purposeCode;
                  console.log('ggggg');
                  _this2.zToggle[i] = true;

                  if (value.sbUrls) {
                    let gene = [];

                    for (let value1 of value.sbUrls) {
                      gene.push(_this2.sanitizer.bypassSecurityTrustResourceUrl(value1.changingThisBreaksApplicationSecurity));
                    }

                    _this2.draftSb[i] = value.sbNumbers;
                    _this2.mainDoc1[i] = gene;
                  }

                  if (value.tryUrls) {
                    let gene1 = [];

                    for (let value1 of value.tryUrls) {
                      gene1.push(_this2.sanitizer.bypassSecurityTrustResourceUrl(value1.changingThisBreaksApplicationSecurity));
                    }

                    _this2.drafttry[i] = value.tryNumbers;
                    _this2.mainDoc3[i] = gene1;

                    if (value.generateDoc1) {
                      console.log('hshshsh');
                      _this2.data8[i] = _this2.sanitizer.bypassSecurityTrustResourceUrl(value.generateDoc1.changingThisBreaksApplicationSecurity);
                    }

                    if (value.ir == 'yes') {
                      if (value.generateDoc2) {
                        console.log('hshshsh');
                        _this2.dataImport[i] = _this2.sanitizer.bypassSecurityTrustResourceUrl(value.generateDoc1.changingThisBreaksApplicationSecurity);
                      }

                      _this2.sbPurposeDone1[i] = value.purposeCode;
                    }
                  }
                }
              }

              if (value.lodgeDone == 'yes') {
                if (!value.generateDoc1) {
                  if (value.ir == 'yes') {
                    _this2.sbPurpose1[i] = value.purposeCode;
                  }

                  _this2.zToggle[i] = false;
                  _this2.sbPurpose[i] = value.purposeCode;

                  if (value.sbUrls) {
                    let gene = [];

                    for (let value1 of value.sbUrls) {
                      gene.push(_this2.sanitizer.bypassSecurityTrustResourceUrl(value1.changingThisBreaksApplicationSecurity));
                    }

                    _this2.draftSb[i] = value.sbNumbers;
                    _this2.mainDoc1[i] = gene;
                  }

                  if (value.tryUrls) {
                    let gene1 = [];

                    for (let value1 of value.tryUrls) {
                      gene1.push(_this2.sanitizer.bypassSecurityTrustResourceUrl(value1.changingThisBreaksApplicationSecurity));
                    }

                    _this2.drafttry[i] = value.tryNumbers;
                    _this2.mainDoc3[i] = gene1;
                  }
                } else if (value.generateDoc1) {
                  _this2.sbPurpose[i] = value.purposeCode;
                  _this2.doneSbPurpose[i] = value.purposeCode;
                  console.log('ggggg');
                  _this2.zToggle[i] = true;

                  if (value.sbUrls) {
                    let gene = [];

                    for (let value1 of value.sbUrls) {
                      gene.push(_this2.sanitizer.bypassSecurityTrustResourceUrl(value1.changingThisBreaksApplicationSecurity));
                    }

                    _this2.draftSb[i] = value.sbNumbers;
                    _this2.mainDoc1[i] = gene;
                  }

                  if (value.tryUrls) {
                    let gene1 = [];

                    for (let value1 of value.tryUrls) {
                      gene1.push(_this2.sanitizer.bypassSecurityTrustResourceUrl(value1.changingThisBreaksApplicationSecurity));
                    }

                    _this2.drafttry[i] = value.tryNumbers;
                    _this2.mainDoc3[i] = gene1;

                    if (value.generateDoc1) {
                      console.log('hshshsh');
                      _this2.data8[i] = _this2.sanitizer.bypassSecurityTrustResourceUrl(value.generateDoc1.changingThisBreaksApplicationSecurity);
                    }

                    if (value.ir == 'yes') {
                      if (value.generateDoc2) {
                        console.log('hshshsh');
                        _this2.dataImport[i] = _this2.sanitizer.bypassSecurityTrustResourceUrl(value.generateDoc1.changingThisBreaksApplicationSecurity);
                      }

                      _this2.sbPurposeDone1[i] = value.purposeCode;
                    }
                  }
                }
              }
            }

            i++;
          }

          _this2.selectedPurpose = newArray;
        } else {
          _this2.Question5 = '';
        }

        _this2.INPUT_SERACH = $('.search_box_new');
        console.log(_this2.mainDoc, 'dfsdfdfdfsd');
      })();
    }

    myFunction() {
      console.log("windwow", window.scroll);
    }

    open(content) {
      this.modalService.open(content, {
        ariaLabelledBy: 'modal-basic-title'
      }).result.then(result => {
        this.closeResult = `Closed with: ${result}`;
      }, reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }

    getDismissReason(reason) {
      console.log('ddhdhdhh');

      if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
    }

    changeCheckbox(value) {
      let j = this.selectPIPO.indexOf(value);

      if (j == -1) {
        this.selectPIPO.push(value);
      } else {
        this.selectPIPO.splice(j, 1);
      }

      console.log(this.selectPIPO);
    }

    changeCheckbox1(value) {
      let j = this.sbArray.indexOf(value);

      if (j == -1) {
        this.sbArray.push(value);
      } else {
        this.sbArray.splice(j, 1);
      }

      if (this.sbArray.length > 0) {
        this.selectSB = this.sbArray.toString();
      }

      console.log(this.sbArray);
    }

    changeCheckboxPIPO(value) {
      let j = this.selectPIPO.indexOf(value);

      if (j == -1) {
        this.selectPIPO.push(value);
      } else {
        this.selectPIPO.splice(j, 1);
      }

      console.log(this.selectPIPO, 'selectPIPO');
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

    searchData(e) {
      console.log(e);
      this.jsondata = [];

      if (e != null && e != '') {
        for (let data of this.dataJson) {
          if (data.groupname.toLowerCase().indexOf(e.toLowerCase()) != -1) {
            this.jsondata.push(data);
          } else {
            let purpose = [];

            for (let value of data.purpose) {
              if (value.code.toLowerCase().indexOf(e.toLowerCase()) != -1 || value.description.toLowerCase().indexOf(e.toLowerCase()) != -1) {
                purpose.push({
                  "code": value.code,
                  "description": value.description
                });
              }
            }

            if (purpose.length > 0) {
              this.jsondata[data.groupname] = purpose;
            }
          }
        }

        console.log(this.jsondata.length);
        this.pgNumber = Object.keys(this.jsondata).length;
        this.pcNumber = 0;

        for (let data of this.jsondata) {
          console.log(data.purpose.length);
          this.pcNumber = this.pcNumber + data.purpose.length;
        }

        this.default_value = this.jsondata;
        this.purposeFun(this.default_value);
      } else {
        this.default_value = this.old_data;
        this.purposeFun(this.default_value);
      }
    }

    searchMulitpleData(multipleselectedvalue) {
      console.log(multipleselectedvalue, 'multipleselectedvalue');
      this.jsondata = [];

      if (multipleselectedvalue.length != 0) {
        for (let index = 0; index < multipleselectedvalue.length; index++) {
          for (let data of this.dataJson) {
            if (data.groupname.toLowerCase().indexOf(multipleselectedvalue[index].toLowerCase()) != -1) {
              this.jsondata.push(data);
            } else {
              let purpose = [];

              for (let value of data.purpose) {
                if (value.code.toLowerCase().indexOf(multipleselectedvalue[index].toLowerCase()) != -1 || value.description.toLowerCase().indexOf(multipleselectedvalue[index].toLowerCase()) != -1) {
                  purpose.push({
                    "code": value.code,
                    "description": value.description
                  });
                }
              }

              if (purpose.length > 0) {
                this.jsondata[data.groupname] = purpose;
              }
            }
          }
        }

        console.log(this.jsondata.length);
        this.pgNumber = Object.keys(this.jsondata).length;
        this.pcNumber = 0;

        for (let data of this.jsondata) {
          console.log(data.purpose.length);
          this.pcNumber = this.pcNumber + data.purpose.length;
        }

        this.default_value = this.jsondata;
        this.purposeFun(this.default_value);
      } else {
        this.default_value = this.old_data;
        this.purposeFun(this.default_value);
      }
    }

    purposeFun(data) {
      this.purposeRows = [];

      for (let key in data) {
        for (let j = 0; j < data[key].length; j++) {
          let columns = [{
            text: key,
            rowSpan: data[key].length
          }, {
            text: data[key][j].code,
            rowSpan: 1
          }, {
            text: data[key][j].description,
            rowSpan: 1
          }];

          if (j != 0) {
            columns.splice(0, 1);
          }

          console.log(columns, 'column');
          this.purposeRows.push(columns);
        }
      }

      console.log(this.purposeRows, 'purposeRows');
    }

    generateDoc(code, j) {
      var _this3 = this;

      return (0,D_Bharathexim_Repo_docmachine_frontend_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this3.generate = true;
        _this3.generatePurpose[j] = code;
        console.log(_this3.item3, 'item');
        _this3.itemArray = _this3.item3;
        console.log(_this3.itemArray);
        let generateDoc1 = [];
        let pipo = false;
        let pipoValue = _this3.itemArray[0];
        let buyerValue;
        console.log(pipoValue);
        console.log("645 line", _this3.itemArray);

        for (let item of _this3.itemArray) {
          for (let pipo of _this3.selectPIPO) {
            console.log("item.doc");

            if (item.pi_poNo === pipo) {
              buyerValue = item.buyerName;

              if (item.doc) {
                generateDoc1.push(_this3.sanitizer.bypassSecurityTrustResourceUrl(item.doc //item.doc is Profoma Invoice document
                ));

                _this3.STORE_URL.push(item.doc);
              } else {
                generateDoc1.push(_this3.sanitizer.bypassSecurityTrustResourceUrl(item.doc1 //item.doc1 is purchase order document
                ));

                _this3.STORE_URL.push(item.doc1);
              }
            }
          }
        }

        console.log(buyerValue);
        const data = yield _this3.userService.getBuyerByName(buyerValue);
        console.log('shshhss', data.data);
        _this3.buyerAds = data.data.buyerAdrs;
        console.log(pipo);
        console.log("this is pipo", pipoValue);
        _this3.mainDoc[j] = generateDoc1;
        console.log("line no 664", _this3.mainDoc[j]);
        _this3.newTask[j] = {
          pipoNumbers: _this3.selectPIPO,
          pipoUrls: _this3.mainDoc[j],
          purposeCode: code
        };
        console.log(_this3.doc);
        console.log(_this3.generate1);
        console.log(_this3.c);

        _this3.fillForm(pipoValue);

        _this3.newTask[j] = {
          pipoNumbers: _this3.selectPIPO,
          pipoUrls: _this3.mainDoc[j],
          purposeCode: code
        };
        console.log("hello there", _this3.newTask);
      })();
    }

    replaceText(text, repl_text) {
      return text.replace(repl_text, '').trim();
    }

    fillForm(a) {
      var _this4 = this;

      return (0,D_Bharathexim_Repo_docmachine_frontend_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        console.log(a, 'dshdsfdsfdgjsdhfgdsjf');

        var data_temp = _this4.documentService.getSessionData('InwardSheet');

        const formUrl = './../../assets/DXB.pdf';

        if (data_temp == undefined || data_temp == null || data_temp == '') {
          const formPdfBytes = yield fetch(formUrl).then(res => res.arrayBuffer());
          const pdfDoc = yield pdf_lib__WEBPACK_IMPORTED_MODULE_5__.PDFDocument.load(formPdfBytes);
          const form = pdfDoc.getForm();
          const pages = pdfDoc.getPages();
          const firstpage = pages[0];
          const textField = form.createTextField('best.text');
          textField.setText('KOZHIKODE');
          textField.addToPage(firstpage, {
            x: 150,
            y: 728,
            width: 400,
            height: 16,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const rocketField = form.createCheckBox('favorite.rocket');
          rocketField.addToPage(firstpage, {
            x: 320,
            y: 705,
            width: 20,
            height: 20,
            borderWidth: 0
          });
          const rocket1Field = form.createCheckBox('favorite.rocket1');
          rocket1Field.addToPage(firstpage, {
            x: 540,
            y: 705,
            width: 20,
            height: 20,
            borderWidth: 0
          });
          const text1Field = form.createTextField('best.text1');
          text1Field.setText(_this4.item5.teamName);
          text1Field.addToPage(firstpage, {
            x: 150,
            y: 680,
            width: 400,
            height: 16,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text2Field = form.createTextField('best.text2');
          text2Field.setText(_this4.charge[0]);
          text2Field.addToPage(firstpage, {
            x: 155,
            y: 657,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text3Field = form.createTextField('best.text3');
          text3Field.setText(_this4.charge[1]);
          text3Field.addToPage(firstpage, {
            x: 190,
            y: 657,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text4Field = form.createTextField('best.text4');
          text4Field.setText(_this4.charge[2]);
          text4Field.addToPage(firstpage, {
            x: 220,
            y: 657,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text5Field = form.createTextField('best.text5');
          text5Field.setText(_this4.charge[3]);
          text5Field.addToPage(firstpage, {
            x: 250,
            y: 657,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text6Field = form.createTextField('best.text6');
          text6Field.setText(_this4.charge[4]);
          text6Field.addToPage(firstpage, {
            x: 270,
            y: 657,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text7Field = form.createTextField('best.text7');
          text7Field.setText(_this4.charge[5]);
          text7Field.addToPage(firstpage, {
            x: 300,
            y: 657,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text8Field = form.createTextField('best.text8');
          text8Field.setText(_this4.charge[6]);
          text8Field.addToPage(firstpage, {
            x: 330,
            y: 657,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text9Field = form.createTextField('best.text9');
          text9Field.setText(_this4.charge[7]);
          text9Field.addToPage(firstpage, {
            x: 360,
            y: 657,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text10Field = form.createTextField('best.text10');
          text10Field.setText(_this4.charge[8]);
          text10Field.addToPage(firstpage, {
            x: 390,
            y: 657,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text11Field = form.createTextField('best.text11');
          text11Field.setText(_this4.charge[9]);
          text11Field.addToPage(firstpage, {
            x: 420,
            y: 657,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text12Field = form.createTextField('best.text12');
          text12Field.setText(_this4.charge[10]);
          text12Field.addToPage(firstpage, {
            x: 450,
            y: 657,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text13Field = form.createTextField('best.text13');
          text13Field.setText(_this4.charge[11]);
          text13Field.addToPage(firstpage, {
            x: 480,
            y: 657,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text14Field = form.createTextField('best.text14');
          text14Field.setText(_this4.charge[12]);
          text14Field.addToPage(firstpage, {
            x: 510,
            y: 657,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text15Field = form.createTextField('best.text15');
          text15Field.setText(_this4.charge[13]);
          text15Field.addToPage(firstpage, {
            x: 540,
            y: 657,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          }); // const text16Field = form.createTextField('best.text16')
          // text16Field.setText('15')
          // text16Field.addToPage(firstpage, {
          //   x: 540, y: 657, width: 15,
          //   height: 15, textColor: rgb(0, 0, 0), backgroundColor: rgb(1, 1, 1), borderWidth: 0,
          // })

          const text17Field = form.createTextField('best.text17');
          text17Field.setText('Export');
          text17Field.addToPage(firstpage, {
            x: 192,
            y: 635,
            width: 75,
            height: 16,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text18Field = form.createTextField('best.text18');
          text18Field.setText('');
          text18Field.addToPage(firstpage, {
            x: 460,
            y: 635,
            width: 90,
            height: 16,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text19Field = form.createTextField('best.text19');
          text19Field.setText(a['currency']);
          text19Field.addToPage(firstpage, {
            x: 150,
            y: 590,
            width: 80,
            height: 16,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text20Field = form.createTextField('best.text20');
          let amount = a['amount'].toString();
          text20Field.setText(amount);
          text20Field.addToPage(firstpage, {
            x: 150,
            y: 565,
            width: 80,
            height: 16,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text21Field = form.createTextField('best.text21');
          text21Field.setText('');
          text21Field.addToPage(firstpage, {
            x: 340,
            y: 580,
            width: 220,
            height: 16,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text22Field = form.createTextField('best.text22');
          text22Field.setText(a['buyerName']);
          text22Field.addToPage(firstpage, {
            x: 150,
            y: 540,
            width: 90,
            height: 16,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text23Field = form.createTextField('best.text23');
          text23Field.setText(_this4.buyerAds);
          text23Field.addToPage(firstpage, {
            x: 150,
            y: 500,
            width: 400,
            height: 16,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text24Field = form.createTextField('best.text24');
          text24Field.setText('ADVANCE AGAINST EXPORT');
          text24Field.addToPage(firstpage, {
            x: 150,
            y: 450,
            width: 100,
            height: 16,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text25Field = form.createTextField('best.text25');
          text25Field.setText(_this4.generatePurpose[0]);
          text25Field.addToPage(firstpage, {
            x: 430,
            y: 450,
            width: 120,
            height: 16,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          }); // please mention theexpected date of shipment

          const text26Field = form.createTextField('best.text26');
          text26Field.setText('');
          text26Field.addToPage(firstpage, {
            x: 290,
            y: 420,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text27Field = form.createTextField('best.text27');
          text27Field.setText('');
          text27Field.addToPage(firstpage, {
            x: 327,
            y: 420,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text28Field = form.createTextField('best.text28');
          text28Field.setText('');
          text28Field.addToPage(firstpage, {
            x: 363,
            y: 420,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text29Field = form.createTextField('best.text29');
          text29Field.setText('');
          text29Field.addToPage(firstpage, {
            x: 401,
            y: 420,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text30Field = form.createTextField('best.text30');
          text30Field.setText('');
          text30Field.addToPage(firstpage, {
            x: 434,
            y: 420,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text31Field = form.createTextField('best.text31');
          text31Field.setText('');
          text31Field.addToPage(firstpage, {
            x: 471,
            y: 420,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text32Field = form.createTextField('best.text32');
          text32Field.setText('');
          text32Field.addToPage(firstpage, {
            x: 505,
            y: 420,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text33Field = form.createTextField('best.text33');
          text33Field.setText('');
          text33Field.addToPage(firstpage, {
            x: 540,
            y: 420,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          }); // Details of accounts for crediting the received amount
          //line1

          const text34Field = form.createTextField('best.text34');
          text34Field.setText('');
          text34Field.addToPage(firstpage, {
            x: 270,
            y: 375,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text35Field = form.createTextField('best.text35');
          text35Field.setText('');
          text35Field.addToPage(firstpage, {
            x: 294,
            y: 375,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text36Field = form.createTextField('best.text36');
          text36Field.setText('');
          text36Field.addToPage(firstpage, {
            x: 315,
            y: 375,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text37Field = form.createTextField('best.text37');
          text37Field.setText('');
          text37Field.addToPage(firstpage, {
            x: 337,
            y: 375,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text38Field = form.createTextField('best.text38');
          text38Field.setText('');
          text38Field.addToPage(firstpage, {
            x: 359,
            y: 375,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text39Field = form.createTextField('best.text39');
          text39Field.setText('');
          text39Field.addToPage(firstpage, {
            x: 380,
            y: 375,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text40Field = form.createTextField('best.text40');
          text40Field.setText('');
          text40Field.addToPage(firstpage, {
            x: 399,
            y: 375,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text41Field = form.createTextField('best.text41');
          text41Field.setText('');
          text41Field.addToPage(firstpage, {
            x: 419,
            y: 375,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text42Field = form.createTextField('best.text42');
          text42Field.setText('');
          text42Field.addToPage(firstpage, {
            x: 443,
            y: 375,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text43Field = form.createTextField('best.text43');
          text43Field.setText('');
          text43Field.addToPage(firstpage, {
            x: 464,
            y: 375,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text44Field = form.createTextField('best.text44');
          text44Field.setText('');
          text44Field.addToPage(firstpage, {
            x: 487,
            y: 375,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text45Field = form.createTextField('best.text45');
          text45Field.setText('');
          text45Field.addToPage(firstpage, {
            x: 507,
            y: 375,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text46Field = form.createTextField('best.text46');
          text46Field.setText('');
          text46Field.addToPage(firstpage, {
            x: 528,
            y: 375,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text47Field = form.createTextField('best.text47');
          text47Field.setText('');
          text47Field.addToPage(firstpage, {
            x: 549,
            y: 375,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          }); //line2

          const text48Field = form.createTextField('best.text48');
          text48Field.setText('');
          text48Field.addToPage(firstpage, {
            x: 270,
            y: 340,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text49Field = form.createTextField('best.text49');
          text49Field.setText('');
          text49Field.addToPage(firstpage, {
            x: 294,
            y: 340,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text50Field = form.createTextField('best.text50');
          text50Field.setText('');
          text50Field.addToPage(firstpage, {
            x: 315,
            y: 340,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text51Field = form.createTextField('best.text51');
          text51Field.setText('');
          text51Field.addToPage(firstpage, {
            x: 337,
            y: 340,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text52Field = form.createTextField('best.text52');
          text38Field.setText('');
          text38Field.addToPage(firstpage, {
            x: 359,
            y: 340,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text53Field = form.createTextField('best.text53');
          text53Field.setText('');
          text53Field.addToPage(firstpage, {
            x: 380,
            y: 340,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text54Field = form.createTextField('best.text54');
          text54Field.setText('');
          text54Field.addToPage(firstpage, {
            x: 399,
            y: 340,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text55Field = form.createTextField('best.text55');
          text55Field.setText('');
          text55Field.addToPage(firstpage, {
            x: 419,
            y: 340,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text56Field = form.createTextField('best.text56');
          text56Field.setText('');
          text56Field.addToPage(firstpage, {
            x: 443,
            y: 340,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text57Field = form.createTextField('best.text57');
          text57Field.setText('');
          text57Field.addToPage(firstpage, {
            x: 464,
            y: 340,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text58Field = form.createTextField('best.text58');
          text58Field.setText('');
          text58Field.addToPage(firstpage, {
            x: 487,
            y: 340,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text59Field = form.createTextField('best.text59');
          text59Field.setText('');
          text59Field.addToPage(firstpage, {
            x: 507,
            y: 340,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text60Field = form.createTextField('best.text60');
          text60Field.setText('');
          text60Field.addToPage(firstpage, {
            x: 528,
            y: 340,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text61Field = form.createTextField('best.text61');
          text61Field.setText('');
          text61Field.addToPage(firstpage, {
            x: 549,
            y: 340,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          }); //line3

          const text62Field = form.createTextField('best.text62');
          text62Field.setText('');
          text62Field.addToPage(firstpage, {
            x: 270,
            y: 310,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text63Field = form.createTextField('best.text63');
          text63Field.setText('');
          text63Field.addToPage(firstpage, {
            x: 294,
            y: 310,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text64Field = form.createTextField('best.text64');
          text64Field.setText('');
          text64Field.addToPage(firstpage, {
            x: 315,
            y: 310,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text65Field = form.createTextField('best.text65');
          text65Field.setText('');
          text65Field.addToPage(firstpage, {
            x: 337,
            y: 310,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text66Field = form.createTextField('best.text66');
          text66Field.setText('');
          text66Field.addToPage(firstpage, {
            x: 359,
            y: 310,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text67Field = form.createTextField('best.text67');
          text67Field.setText('');
          text67Field.addToPage(firstpage, {
            x: 380,
            y: 310,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text68Field = form.createTextField('best.text68');
          text68Field.setText('');
          text68Field.addToPage(firstpage, {
            x: 399,
            y: 310,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text69Field = form.createTextField('best.text69');
          text69Field.setText('');
          text69Field.addToPage(firstpage, {
            x: 419,
            y: 310,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text70Field = form.createTextField('best.text70');
          text70Field.setText('');
          text70Field.addToPage(firstpage, {
            x: 443,
            y: 310,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text71Field = form.createTextField('best.text71');
          text71Field.setText('');
          text71Field.addToPage(firstpage, {
            x: 464,
            y: 310,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text72Field = form.createTextField('best.text72');
          text72Field.setText('');
          text72Field.addToPage(firstpage, {
            x: 487,
            y: 310,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text73Field = form.createTextField('best.text73');
          text73Field.setText('');
          text73Field.addToPage(firstpage, {
            x: 507,
            y: 310,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text74Field = form.createTextField('best.text74');
          text74Field.setText('');
          text74Field.addToPage(firstpage, {
            x: 528,
            y: 310,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text75Field = form.createTextField('best.text75');
          text75Field.setText('');
          text75Field.addToPage(firstpage, {
            x: 549,
            y: 310,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          }); //line4

          const text76Field = form.createTextField('best.text76');
          text76Field.setText(_this4.credit[0]);
          text76Field.addToPage(firstpage, {
            x: 270,
            y: 280,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text77Field = form.createTextField('best.text77');
          text77Field.setText(_this4.credit[1]);
          text77Field.addToPage(firstpage, {
            x: 294,
            y: 280,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text78Field = form.createTextField('best.text78');
          text78Field.setText(_this4.credit[2]);
          text78Field.addToPage(firstpage, {
            x: 315,
            y: 280,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text79Field = form.createTextField('best.text79');
          text79Field.setText(_this4.credit[3]);
          text79Field.addToPage(firstpage, {
            x: 337,
            y: 280,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text80Field = form.createTextField('best.text80');
          text80Field.setText(_this4.credit[4]);
          text80Field.addToPage(firstpage, {
            x: 359,
            y: 280,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text81Field = form.createTextField('best.text81');
          text81Field.setText(_this4.credit[5]);
          text81Field.addToPage(firstpage, {
            x: 380,
            y: 280,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text82Field = form.createTextField('best.text82');
          text82Field.setText(_this4.credit[6]);
          text82Field.addToPage(firstpage, {
            x: 399,
            y: 280,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text83Field = form.createTextField('best.text83');
          text83Field.setText(_this4.credit[7]);
          text83Field.addToPage(firstpage, {
            x: 419,
            y: 280,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text84Field = form.createTextField('best.text84');
          text84Field.setText(_this4.credit[8]);
          text84Field.addToPage(firstpage, {
            x: 443,
            y: 280,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text85Field = form.createTextField('best.text85');
          text85Field.setText(_this4.credit[9]);
          text85Field.addToPage(firstpage, {
            x: 464,
            y: 280,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text86Field = form.createTextField('best.text86');
          text86Field.setText(_this4.credit[10]);
          text86Field.addToPage(firstpage, {
            x: 487,
            y: 280,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text87Field = form.createTextField('best.text87');
          text87Field.setText(_this4.credit[11]);
          text87Field.addToPage(firstpage, {
            x: 507,
            y: 280,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text88Field = form.createTextField('best.text88');
          text88Field.setText(_this4.credit[12]);
          text88Field.addToPage(firstpage, {
            x: 528,
            y: 280,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text89Field = form.createTextField('best.text89');
          text89Field.setText(_this4.credit[13]);
          text89Field.addToPage(firstpage, {
            x: 549,
            y: 280,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          }); //line5

          const text90Field = form.createTextField('best.text90');
          text90Field.setText('');
          text90Field.addToPage(firstpage, {
            x: 270,
            y: 250,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text91Field = form.createTextField('best.text91');
          text91Field.setText('');
          text91Field.addToPage(firstpage, {
            x: 294,
            y: 250,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text92Field = form.createTextField('best.text92');
          text92Field.setText('');
          text92Field.addToPage(firstpage, {
            x: 315,
            y: 250,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text93Field = form.createTextField('best.text93');
          text93Field.setText('');
          text93Field.addToPage(firstpage, {
            x: 337,
            y: 250,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text94Field = form.createTextField('best.text94');
          text94Field.setText('');
          text94Field.addToPage(firstpage, {
            x: 359,
            y: 250,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text95Field = form.createTextField('best.text95');
          text95Field.setText('');
          text95Field.addToPage(firstpage, {
            x: 380,
            y: 250,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text96Field = form.createTextField('best.text96');
          text96Field.setText('');
          text96Field.addToPage(firstpage, {
            x: 399,
            y: 250,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text97Field = form.createTextField('best.text97');
          text97Field.setText('');
          text97Field.addToPage(firstpage, {
            x: 419,
            y: 250,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text98Field = form.createTextField('best.text98');
          text98Field.setText('');
          text98Field.addToPage(firstpage, {
            x: 443,
            y: 250,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const text99Field = form.createTextField('best.text99');
          text99Field.setText('');
          text99Field.addToPage(firstpage, {
            x: 464,
            y: 250,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const texta1Field = form.createTextField('best.texta186');
          texta1Field.setText('');
          texta1Field.addToPage(firstpage, {
            x: 487,
            y: 250,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const texta2Field = form.createTextField('best.texta2');
          texta2Field.setText('');
          texta2Field.addToPage(firstpage, {
            x: 507,
            y: 250,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const texta3Field = form.createTextField('best.texta3');
          texta3Field.setText('');
          texta3Field.addToPage(firstpage, {
            x: 528,
            y: 250,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const texta4Field = form.createTextField('best.texta4');
          texta4Field.setText('');
          texta4Field.addToPage(firstpage, {
            x: 549,
            y: 250,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          }); //line 6

          const texta5Field = form.createTextField('best.texta5');
          texta5Field.setText(_this4.charge[0]);
          texta5Field.addToPage(firstpage, {
            x: 270,
            y: 220,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const texta6Field = form.createTextField('best.texta6');
          texta6Field.setText(_this4.charge[1]);
          texta6Field.addToPage(firstpage, {
            x: 294,
            y: 220,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const texta7Field = form.createTextField('best.texta7');
          texta7Field.setText(_this4.charge[2]);
          texta7Field.addToPage(firstpage, {
            x: 315,
            y: 220,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const texta8Field = form.createTextField('best.texta8');
          texta8Field.setText(_this4.charge[3]);
          texta8Field.addToPage(firstpage, {
            x: 337,
            y: 220,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const texta9Field = form.createTextField('best.texta9');
          texta9Field.setText(_this4.charge[4]);
          texta9Field.addToPage(firstpage, {
            x: 359,
            y: 220,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const textb1Field = form.createTextField('best.textb1');
          textb1Field.setText(_this4.charge[5]);
          textb1Field.addToPage(firstpage, {
            x: 380,
            y: 220,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const textb2Field = form.createTextField('best.textb2');
          textb2Field.setText(_this4.charge[6]);
          textb2Field.addToPage(firstpage, {
            x: 399,
            y: 220,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const textb3Field = form.createTextField('best.textb3');
          textb3Field.setText(_this4.charge[7]);
          textb3Field.addToPage(firstpage, {
            x: 419,
            y: 220,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const textb4Field = form.createTextField('best.textb4');
          textb4Field.setText(_this4.charge[8]);
          textb4Field.addToPage(firstpage, {
            x: 443,
            y: 220,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const textb5Field = form.createTextField('best.textb5');
          textb5Field.setText(_this4.charge[9]);
          textb5Field.addToPage(firstpage, {
            x: 464,
            y: 220,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const textb6Field = form.createTextField('best.texta1b6');
          textb6Field.setText(_this4.charge[10]);
          textb6Field.addToPage(firstpage, {
            x: 487,
            y: 220,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const textb7Field = form.createTextField('best.textb7');
          textb7Field.setText(_this4.charge[11]);
          textb7Field.addToPage(firstpage, {
            x: 507,
            y: 220,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const textb8Field = form.createTextField('best.textb8');
          textb8Field.setText(_this4.charge[12]);
          textb8Field.addToPage(firstpage, {
            x: 528,
            y: 220,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const textb9Field = form.createTextField('best.textb9');
          textb9Field.setText(_this4.charge[13]);
          textb9Field.addToPage(firstpage, {
            x: 550,
            y: 220,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const textc1Field = form.createTextField('best.textc1');
          textc1Field.setText(_this4.charge[14]);
          textc1Field.addToPage(firstpage, {
            x: 549,
            y: 220,
            width: 15,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          }); // *WE AUTHORISE YOU TO CONVERT THE UNUTILISED PORTION OF CAPTIONED INWARD REMITTANCE CREDITED

          const textc2Field = form.createTextField('best.textc2');
          textc2Field.setText('');
          textc2Field.addToPage(firstpage, {
            x: 160,
            y: 150,
            width: 110,
            height: 16,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const textc3Field = form.createTextField('best.textc3');
          textc3Field.setText('');
          textc3Field.addToPage(firstpage, {
            x: 160,
            y: 125,
            width: 110,
            height: 16,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const textc4Field = form.createTextField('best.textc4');
          textc4Field.setText('');
          textc4Field.addToPage(firstpage, {
            x: 160,
            y: 100,
            width: 110,
            height: 16,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          }); // Booking date

          const textaField = form.createTextField('best.texta');
          textaField.setText('');
          textaField.addToPage(firstpage, {
            x: 413,
            y: 150,
            width: 12,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const textbField = form.createTextField('best.textb');
          textbField.setText('');
          textbField.addToPage(firstpage, {
            x: 430,
            y: 150,
            width: 12,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const textcField = form.createTextField('best.textc');
          textcField.setText('');
          textcField.addToPage(firstpage, {
            x: 450,
            y: 150,
            width: 12,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const textdField = form.createTextField('best.textd');
          textdField.setText('');
          textdField.addToPage(firstpage, {
            x: 467,
            y: 150,
            width: 12,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const texteField = form.createTextField('best.texte');
          texteField.setText('');
          texteField.addToPage(firstpage, {
            x: 485,
            y: 150,
            width: 12,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const textfField = form.createTextField('best.textf');
          textfField.setText('');
          textfField.addToPage(firstpage, {
            x: 503,
            y: 150,
            width: 12,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const textgField = form.createTextField('best.textg');
          textgField.setText('');
          textgField.addToPage(firstpage, {
            x: 523,
            y: 150,
            width: 12,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const texthField = form.createTextField('best.texth');
          texthField.setText('');
          texthField.addToPage(firstpage, {
            x: 539,
            y: 150,
            width: 12,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          }); // Due date

          const textiField = form.createTextField('best.texti');
          textiField.setText('');
          textiField.addToPage(firstpage, {
            x: 413,
            y: 125,
            width: 12,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const textjField = form.createTextField('best.textj');
          textjField.setText('');
          textjField.addToPage(firstpage, {
            x: 430,
            y: 125,
            width: 12,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const textkField = form.createTextField('best.textk');
          textkField.setText('');
          textkField.addToPage(firstpage, {
            x: 450,
            y: 125,
            width: 12,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const textlField = form.createTextField('best.textl');
          textlField.setText('');
          textlField.addToPage(firstpage, {
            x: 467,
            y: 125,
            width: 12,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const textmField = form.createTextField('best.textm');
          textmField.setText('');
          textmField.addToPage(firstpage, {
            x: 485,
            y: 125,
            width: 12,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const textnField = form.createTextField('best.textn');
          textnField.setText('');
          textnField.addToPage(firstpage, {
            x: 503,
            y: 125,
            width: 12,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const textoField = form.createTextField('best.texto');
          textoField.setText('');
          textoField.addToPage(firstpage, {
            x: 523,
            y: 125,
            width: 12,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const textzField = form.createTextField('best.textz');
          textzField.setText('');
          textzField.addToPage(firstpage, {
            x: 539,
            y: 125,
            width: 12,
            height: 15,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const textc5Field = form.createTextField('best.textc5');
          textc5Field.setText('');
          textc5Field.addToPage(firstpage, {
            x: 420,
            y: 100,
            width: 130,
            height: 16,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const textc5Field1 = form.createTextField('best.textc5y');
          textc5Field1.setText(_this4.jstoday);
          textc5Field1.addToPage(firstpage, {
            x: 50,
            y: 52,
            width: 100,
            height: 16,
            textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
            backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
            borderWidth: 0
          });
          const pdfBytes = yield pdfDoc.save();
          console.log(pdfDoc, "pdf");
          console.log(pdfBytes, "pdfBytes");
          console.log(form, "form");

          var base64String = _this4._arrayBufferToBase64(pdfBytes);

          const x = 'data:application/pdf;base64,' + base64String;
          const url = window.URL.createObjectURL(new Blob([pdfBytes], {
            type: 'application/pdf'
          }));
          console.log(url, 'dsjkfhsdkjfsdhfksfhsd');
          _this4.formerge = x;
          _this4.value = base64String;
          _this4.newTask[0].generateDoc1 = x;
          const mergedPdf = yield pdf_lib__WEBPACK_IMPORTED_MODULE_5__.PDFDocument.create();
          const copiedPages = yield mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
          copiedPages.forEach(page => {
            mergedPdf.addPage(page);
          });
          const mergedPdfFile = yield mergedPdf.save();
          const mergedPdfload = yield pdf_lib__WEBPACK_IMPORTED_MODULE_5__.PDFDocument.load(mergedPdfFile);
          yield _this4.disabledTextbox(pdfDoc);
          const mergedPdfFileload = yield mergedPdfload.save();

          var base64String1 = _this4._arrayBufferToBase64(mergedPdfFileload);

          const x1 = 'data:application/pdf;base64,' + base64String1;
          _this4.PREVIWES_URL = _this4.sanitizer.bypassSecurityTrustResourceUrl(x1);
          console.log(_this4.PREVIWES_URL, 'this.PREVIWES_URL');
        } else {
          _this4.uploadingData(data_temp, a);
        }
      })();
    }

    sendFileDownload(fileName) {
      this.userService.mergePdfChecking({
        listFile: fileName
      });
    }

    getPdfFile(item) {
      return (0,D_Bharathexim_Repo_docmachine_frontend_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        let array = new Uint8Array(item);
        let blob = new Blob([array], {
          type: 'application/pdf'
        });
        var urlCreator = window.URL || window.webkitURL;
        let url = urlCreator.createObjectURL(blob);
        let fileName = new Date().toLocaleDateString();

        try {
          const link = document.createElement('a');

          if (link.download !== undefined) {
            link.setAttribute('href', url);
            link.setAttribute('download', fileName);
            link.target = '_blank';
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            var evt = document.createEvent('MouseEvents');
            evt.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
            link.dispatchEvent(evt);
            link.click();
            document.body.removeChild(link);
          }
        } catch (e) {
          console.error('BlobToSaveAs error', e);
        }
      })();
    }

    disabledTextbox(pdfDoc) {
      return (0,D_Bharathexim_Repo_docmachine_frontend_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        pdfDoc.getForm().getFields().forEach(field => {
          field.enableReadOnly();
          console.log(field);
        });
      })();
    }

    uploadingData(data_temp, a) {
      var _this5 = this;

      return (0,D_Bharathexim_Repo_docmachine_frontend_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        console.log(data_temp, 'PDF_DOCUMENTS_DATA');
        const formUrl = './../../assets/DXB.pdf';
        const formPdfBytes = yield fetch(formUrl).then(res => res.arrayBuffer());
        const pdfDoc = yield pdf_lib__WEBPACK_IMPORTED_MODULE_5__.PDFDocument.load(formPdfBytes);
        const form = pdfDoc.getForm();
        const pages = pdfDoc.getPages();
        const firstpage = pages[0];
        const textField = form.createTextField('best.text');
        textField.setText('KOZHIKODE');
        textField.addToPage(firstpage, {
          x: 150,
          y: 728,
          width: 400,
          height: 16,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const rocketField = form.createCheckBox('favorite.rocket');
        rocketField.addToPage(firstpage, {
          x: 320,
          y: 705,
          width: 20,
          height: 20,
          borderWidth: 0
        });
        const rocket1Field = form.createCheckBox('favorite.rocket1');
        rocket1Field.addToPage(firstpage, {
          x: 540,
          y: 705,
          width: 20,
          height: 20,
          borderWidth: 0
        });
        const text1Field = form.createTextField('best.text1');
        text1Field.setText(_this5.replaceText(data_temp['Beneficiary Customer Name'], ' 59A '));
        text1Field.addToPage(firstpage, {
          x: 150,
          y: 680,
          width: 400,
          height: 16,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });

        var ACCOUNT_NUMBER_SPLIT = _this5.replaceText(data_temp['Beneficiary Customer'], '59A /').split('');

        console.log(ACCOUNT_NUMBER_SPLIT, 'ACCOUNT_NUMBER_SPLIT');
        const text2Field = form.createTextField('best.text2');
        text2Field.setText(ACCOUNT_NUMBER_SPLIT[0]);
        text2Field.addToPage(firstpage, {
          x: 155,
          y: 657,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text3Field = form.createTextField('best.text3');
        text3Field.setText(ACCOUNT_NUMBER_SPLIT[1]);
        text3Field.addToPage(firstpage, {
          x: 190,
          y: 657,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text4Field = form.createTextField('best.text4');
        text4Field.setText(ACCOUNT_NUMBER_SPLIT[2]);
        text4Field.addToPage(firstpage, {
          x: 220,
          y: 657,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text5Field = form.createTextField('best.text5');
        text5Field.setText(ACCOUNT_NUMBER_SPLIT[3]);
        text5Field.addToPage(firstpage, {
          x: 250,
          y: 657,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text6Field = form.createTextField('best.text6');
        text6Field.setText(ACCOUNT_NUMBER_SPLIT[4]);
        text6Field.addToPage(firstpage, {
          x: 270,
          y: 657,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text7Field = form.createTextField('best.text7');
        text7Field.setText(ACCOUNT_NUMBER_SPLIT[5]);
        text7Field.addToPage(firstpage, {
          x: 300,
          y: 657,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text8Field = form.createTextField('best.text8');
        text8Field.setText(ACCOUNT_NUMBER_SPLIT[6]);
        text8Field.addToPage(firstpage, {
          x: 330,
          y: 657,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text9Field = form.createTextField('best.text9');
        text9Field.setText(ACCOUNT_NUMBER_SPLIT[7]);
        text9Field.addToPage(firstpage, {
          x: 360,
          y: 657,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text10Field = form.createTextField('best.text10');
        text10Field.setText(ACCOUNT_NUMBER_SPLIT[8]);
        text10Field.addToPage(firstpage, {
          x: 390,
          y: 657,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text11Field = form.createTextField('best.text11');
        text11Field.setText(ACCOUNT_NUMBER_SPLIT[9]);
        text11Field.addToPage(firstpage, {
          x: 420,
          y: 657,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text12Field = form.createTextField('best.text12');
        text12Field.setText(ACCOUNT_NUMBER_SPLIT[10]);
        text12Field.addToPage(firstpage, {
          x: 450,
          y: 657,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text13Field = form.createTextField('best.text13');
        text13Field.setText(ACCOUNT_NUMBER_SPLIT[11]);
        text13Field.addToPage(firstpage, {
          x: 480,
          y: 657,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text14Field = form.createTextField('best.text14');
        text14Field.setText(ACCOUNT_NUMBER_SPLIT[12]);
        text14Field.addToPage(firstpage, {
          x: 510,
          y: 657,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text15Field = form.createTextField('best.text15');
        text15Field.setText(ACCOUNT_NUMBER_SPLIT[13]);
        text15Field.addToPage(firstpage, {
          x: 540,
          y: 657,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text16Field = form.createTextField('best.text16');
        text16Field.setText(ACCOUNT_NUMBER_SPLIT[14]);
        text16Field.addToPage(firstpage, {
          x: 580,
          y: 657,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text17Field = form.createTextField('best.text17');
        text17Field.setText('Export');
        text17Field.addToPage(firstpage, {
          x: 192,
          y: 635,
          width: 75,
          height: 16,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text18Field = form.createTextField('best.text18');
        text18Field.setText('');
        text18Field.addToPage(firstpage, {
          x: 460,
          y: 635,
          width: 90,
          height: 16,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text19Field = form.createTextField('best.text19');
        text19Field.setText(_this5.replaceText(data_temp['Currency Code'], '32A '));
        text19Field.addToPage(firstpage, {
          x: 150,
          y: 590,
          width: 80,
          height: 16,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text20Field = form.createTextField('best.text20');
        let amount = a['amount'].toString();
        text20Field.setText(_this5.replaceText(data_temp['Amount'], '32A '));
        text20Field.addToPage(firstpage, {
          x: 150,
          y: 565,
          width: 80,
          height: 16,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text21Field = form.createTextField('best.text21');
        text21Field.setText(_this5.Number_to_word(_this5.replaceText(data_temp['Amount'], '32A ')));
        text21Field.addToPage(firstpage, {
          x: 340,
          y: 580,
          width: 220,
          height: 16,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text22Field = form.createTextField('best.text22');
        text22Field.setText('');
        text22Field.addToPage(firstpage, {
          x: 150,
          y: 540,
          width: 90,
          height: 16,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text23Field = form.createTextField('best.text23');
        text23Field.setText(_this5.replaceText(data_temp['Remitter Customer Details'], '50A/50K '));
        text23Field.addToPage(firstpage, {
          x: 150,
          y: 500,
          width: 400,
          height: 16,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text24Field = form.createTextField('best.text24');
        text24Field.setText('ADVANCE AGAINST EXPORT');
        text24Field.addToPage(firstpage, {
          x: 150,
          y: 450,
          width: 100,
          height: 16,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text25Field = form.createTextField('best.text25');
        text25Field.setText(_this5.generatePurpose[0]);
        text25Field.addToPage(firstpage, {
          x: 430,
          y: 450,
          width: 120,
          height: 16,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        }); // please mention theexpected date of shipment

        const text26Field = form.createTextField('best.text26');
        text26Field.setText('');
        text26Field.addToPage(firstpage, {
          x: 290,
          y: 420,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text27Field = form.createTextField('best.text27');
        text27Field.setText('');
        text27Field.addToPage(firstpage, {
          x: 327,
          y: 420,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text28Field = form.createTextField('best.text28');
        text28Field.setText('');
        text28Field.addToPage(firstpage, {
          x: 363,
          y: 420,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text29Field = form.createTextField('best.text29');
        text29Field.setText('');
        text29Field.addToPage(firstpage, {
          x: 401,
          y: 420,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text30Field = form.createTextField('best.text30');
        text30Field.setText('');
        text30Field.addToPage(firstpage, {
          x: 434,
          y: 420,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text31Field = form.createTextField('best.text31');
        text31Field.setText('');
        text31Field.addToPage(firstpage, {
          x: 471,
          y: 420,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text32Field = form.createTextField('best.text32');
        text32Field.setText('');
        text32Field.addToPage(firstpage, {
          x: 505,
          y: 420,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text33Field = form.createTextField('best.text33');
        text33Field.setText('');
        text33Field.addToPage(firstpage, {
          x: 540,
          y: 420,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        }); // Details of accounts for crediting the received amount
        //line1

        const text34Field = form.createTextField('best.text34');
        text34Field.setText('');
        text34Field.addToPage(firstpage, {
          x: 270,
          y: 375,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text35Field = form.createTextField('best.text35');
        text35Field.setText('');
        text35Field.addToPage(firstpage, {
          x: 294,
          y: 375,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text36Field = form.createTextField('best.text36');
        text36Field.setText('');
        text36Field.addToPage(firstpage, {
          x: 315,
          y: 375,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text37Field = form.createTextField('best.text37');
        text37Field.setText('');
        text37Field.addToPage(firstpage, {
          x: 337,
          y: 375,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text38Field = form.createTextField('best.text38');
        text38Field.setText('');
        text38Field.addToPage(firstpage, {
          x: 359,
          y: 375,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text39Field = form.createTextField('best.text39');
        text39Field.setText('');
        text39Field.addToPage(firstpage, {
          x: 380,
          y: 375,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text40Field = form.createTextField('best.text40');
        text40Field.setText('');
        text40Field.addToPage(firstpage, {
          x: 399,
          y: 375,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text41Field = form.createTextField('best.text41');
        text41Field.setText('');
        text41Field.addToPage(firstpage, {
          x: 419,
          y: 375,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text42Field = form.createTextField('best.text42');
        text42Field.setText('');
        text42Field.addToPage(firstpage, {
          x: 443,
          y: 375,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text43Field = form.createTextField('best.text43');
        text43Field.setText('');
        text43Field.addToPage(firstpage, {
          x: 464,
          y: 375,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text44Field = form.createTextField('best.text44');
        text44Field.setText('');
        text44Field.addToPage(firstpage, {
          x: 487,
          y: 375,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text45Field = form.createTextField('best.text45');
        text45Field.setText('');
        text45Field.addToPage(firstpage, {
          x: 507,
          y: 375,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text46Field = form.createTextField('best.text46');
        text46Field.setText('');
        text46Field.addToPage(firstpage, {
          x: 528,
          y: 375,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text47Field = form.createTextField('best.text47');
        text47Field.setText('');
        text47Field.addToPage(firstpage, {
          x: 549,
          y: 375,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        }); //line2

        const text48Field = form.createTextField('best.text48');
        text48Field.setText('');
        text48Field.addToPage(firstpage, {
          x: 270,
          y: 340,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text49Field = form.createTextField('best.text49');
        text49Field.setText('');
        text49Field.addToPage(firstpage, {
          x: 294,
          y: 340,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text50Field = form.createTextField('best.text50');
        text50Field.setText('');
        text50Field.addToPage(firstpage, {
          x: 315,
          y: 340,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text51Field = form.createTextField('best.text51');
        text51Field.setText('');
        text51Field.addToPage(firstpage, {
          x: 337,
          y: 340,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text52Field = form.createTextField('best.text52');
        text38Field.setText('');
        text38Field.addToPage(firstpage, {
          x: 359,
          y: 340,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text53Field = form.createTextField('best.text53');
        text53Field.setText('');
        text53Field.addToPage(firstpage, {
          x: 380,
          y: 340,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text54Field = form.createTextField('best.text54');
        text54Field.setText('');
        text54Field.addToPage(firstpage, {
          x: 399,
          y: 340,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text55Field = form.createTextField('best.text55');
        text55Field.setText('');
        text55Field.addToPage(firstpage, {
          x: 419,
          y: 340,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text56Field = form.createTextField('best.text56');
        text56Field.setText('');
        text56Field.addToPage(firstpage, {
          x: 443,
          y: 340,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text57Field = form.createTextField('best.text57');
        text57Field.setText('');
        text57Field.addToPage(firstpage, {
          x: 464,
          y: 340,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text58Field = form.createTextField('best.text58');
        text58Field.setText('');
        text58Field.addToPage(firstpage, {
          x: 487,
          y: 340,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text59Field = form.createTextField('best.text59');
        text59Field.setText('');
        text59Field.addToPage(firstpage, {
          x: 507,
          y: 340,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text60Field = form.createTextField('best.text60');
        text60Field.setText('');
        text60Field.addToPage(firstpage, {
          x: 528,
          y: 340,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text61Field = form.createTextField('best.text61');
        text61Field.setText('');
        text61Field.addToPage(firstpage, {
          x: 549,
          y: 340,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        }); //line3

        const text62Field = form.createTextField('best.text62');
        text62Field.setText('');
        text62Field.addToPage(firstpage, {
          x: 270,
          y: 310,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text63Field = form.createTextField('best.text63');
        text63Field.setText('');
        text63Field.addToPage(firstpage, {
          x: 294,
          y: 310,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text64Field = form.createTextField('best.text64');
        text64Field.setText('');
        text64Field.addToPage(firstpage, {
          x: 315,
          y: 310,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text65Field = form.createTextField('best.text65');
        text65Field.setText('');
        text65Field.addToPage(firstpage, {
          x: 337,
          y: 310,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text66Field = form.createTextField('best.text66');
        text66Field.setText('');
        text66Field.addToPage(firstpage, {
          x: 359,
          y: 310,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text67Field = form.createTextField('best.text67');
        text67Field.setText('');
        text67Field.addToPage(firstpage, {
          x: 380,
          y: 310,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text68Field = form.createTextField('best.text68');
        text68Field.setText('');
        text68Field.addToPage(firstpage, {
          x: 399,
          y: 310,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text69Field = form.createTextField('best.text69');
        text69Field.setText('');
        text69Field.addToPage(firstpage, {
          x: 419,
          y: 310,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text70Field = form.createTextField('best.text70');
        text70Field.setText('');
        text70Field.addToPage(firstpage, {
          x: 443,
          y: 310,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text71Field = form.createTextField('best.text71');
        text71Field.setText('');
        text71Field.addToPage(firstpage, {
          x: 464,
          y: 310,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text72Field = form.createTextField('best.text72');
        text72Field.setText('');
        text72Field.addToPage(firstpage, {
          x: 487,
          y: 310,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text73Field = form.createTextField('best.text73');
        text73Field.setText('');
        text73Field.addToPage(firstpage, {
          x: 507,
          y: 310,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text74Field = form.createTextField('best.text74');
        text74Field.setText('');
        text74Field.addToPage(firstpage, {
          x: 528,
          y: 310,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text75Field = form.createTextField('best.text75');
        text75Field.setText('');
        text75Field.addToPage(firstpage, {
          x: 549,
          y: 310,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        }); //line4

        const text76Field = form.createTextField('best.text76');
        text76Field.setText(_this5.credit[0]);
        text76Field.addToPage(firstpage, {
          x: 270,
          y: 280,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text77Field = form.createTextField('best.text77');
        text77Field.setText(_this5.credit[1]);
        text77Field.addToPage(firstpage, {
          x: 294,
          y: 280,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text78Field = form.createTextField('best.text78');
        text78Field.setText(_this5.credit[2]);
        text78Field.addToPage(firstpage, {
          x: 315,
          y: 280,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text79Field = form.createTextField('best.text79');
        text79Field.setText(_this5.credit[3]);
        text79Field.addToPage(firstpage, {
          x: 337,
          y: 280,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text80Field = form.createTextField('best.text80');
        text80Field.setText(_this5.credit[4]);
        text80Field.addToPage(firstpage, {
          x: 359,
          y: 280,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text81Field = form.createTextField('best.text81');
        text81Field.setText(_this5.credit[5]);
        text81Field.addToPage(firstpage, {
          x: 380,
          y: 280,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text82Field = form.createTextField('best.text82');
        text82Field.setText(_this5.credit[6]);
        text82Field.addToPage(firstpage, {
          x: 399,
          y: 280,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text83Field = form.createTextField('best.text83');
        text83Field.setText(_this5.credit[7]);
        text83Field.addToPage(firstpage, {
          x: 419,
          y: 280,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text84Field = form.createTextField('best.text84');
        text84Field.setText(_this5.credit[8]);
        text84Field.addToPage(firstpage, {
          x: 443,
          y: 280,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text85Field = form.createTextField('best.text85');
        text85Field.setText(_this5.credit[9]);
        text85Field.addToPage(firstpage, {
          x: 464,
          y: 280,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text86Field = form.createTextField('best.text86');
        text86Field.setText(_this5.credit[10]);
        text86Field.addToPage(firstpage, {
          x: 487,
          y: 280,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text87Field = form.createTextField('best.text87');
        text87Field.setText(_this5.credit[11]);
        text87Field.addToPage(firstpage, {
          x: 507,
          y: 280,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text88Field = form.createTextField('best.text88');
        text88Field.setText(_this5.credit[12]);
        text88Field.addToPage(firstpage, {
          x: 528,
          y: 280,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text89Field = form.createTextField('best.text89');
        text89Field.setText(_this5.credit[13]);
        text89Field.addToPage(firstpage, {
          x: 549,
          y: 280,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        }); //line5

        const text90Field = form.createTextField('best.text90');
        text90Field.setText('');
        text90Field.addToPage(firstpage, {
          x: 270,
          y: 250,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text91Field = form.createTextField('best.text91');
        text91Field.setText('');
        text91Field.addToPage(firstpage, {
          x: 294,
          y: 250,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text92Field = form.createTextField('best.text92');
        text92Field.setText('');
        text92Field.addToPage(firstpage, {
          x: 315,
          y: 250,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text93Field = form.createTextField('best.text93');
        text93Field.setText('');
        text93Field.addToPage(firstpage, {
          x: 337,
          y: 250,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text94Field = form.createTextField('best.text94');
        text94Field.setText('');
        text94Field.addToPage(firstpage, {
          x: 359,
          y: 250,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text95Field = form.createTextField('best.text95');
        text95Field.setText('');
        text95Field.addToPage(firstpage, {
          x: 380,
          y: 250,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text96Field = form.createTextField('best.text96');
        text96Field.setText('');
        text96Field.addToPage(firstpage, {
          x: 399,
          y: 250,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text97Field = form.createTextField('best.text97');
        text97Field.setText('');
        text97Field.addToPage(firstpage, {
          x: 419,
          y: 250,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text98Field = form.createTextField('best.text98');
        text98Field.setText('');
        text98Field.addToPage(firstpage, {
          x: 443,
          y: 250,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const text99Field = form.createTextField('best.text99');
        text99Field.setText('');
        text99Field.addToPage(firstpage, {
          x: 464,
          y: 250,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const texta1Field = form.createTextField('best.texta186');
        texta1Field.setText('');
        texta1Field.addToPage(firstpage, {
          x: 487,
          y: 250,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const texta2Field = form.createTextField('best.texta2');
        texta2Field.setText('');
        texta2Field.addToPage(firstpage, {
          x: 507,
          y: 250,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const texta3Field = form.createTextField('best.texta3');
        texta3Field.setText('');
        texta3Field.addToPage(firstpage, {
          x: 528,
          y: 250,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const texta4Field = form.createTextField('best.texta4');
        texta4Field.setText('');
        texta4Field.addToPage(firstpage, {
          x: 549,
          y: 250,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        }); //line 6

        const texta5Field = form.createTextField('best.texta5');
        texta5Field.setText(_this5.charge[0]);
        texta5Field.addToPage(firstpage, {
          x: 270,
          y: 220,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const texta6Field = form.createTextField('best.texta6');
        texta6Field.setText(_this5.charge[1]);
        texta6Field.addToPage(firstpage, {
          x: 294,
          y: 220,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const texta7Field = form.createTextField('best.texta7');
        texta7Field.setText(_this5.charge[2]);
        texta7Field.addToPage(firstpage, {
          x: 315,
          y: 220,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const texta8Field = form.createTextField('best.texta8');
        texta8Field.setText(_this5.charge[3]);
        texta8Field.addToPage(firstpage, {
          x: 337,
          y: 220,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const texta9Field = form.createTextField('best.texta9');
        texta9Field.setText(_this5.charge[4]);
        texta9Field.addToPage(firstpage, {
          x: 359,
          y: 220,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const textb1Field = form.createTextField('best.textb1');
        textb1Field.setText(_this5.charge[5]);
        textb1Field.addToPage(firstpage, {
          x: 380,
          y: 220,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const textb2Field = form.createTextField('best.textb2');
        textb2Field.setText(_this5.charge[6]);
        textb2Field.addToPage(firstpage, {
          x: 399,
          y: 220,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const textb3Field = form.createTextField('best.textb3');
        textb3Field.setText(_this5.charge[7]);
        textb3Field.addToPage(firstpage, {
          x: 419,
          y: 220,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const textb4Field = form.createTextField('best.textb4');
        textb4Field.setText(_this5.charge[8]);
        textb4Field.addToPage(firstpage, {
          x: 443,
          y: 220,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const textb5Field = form.createTextField('best.textb5');
        textb5Field.setText(_this5.charge[9]);
        textb5Field.addToPage(firstpage, {
          x: 464,
          y: 220,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const textb6Field = form.createTextField('best.texta1b6');
        textb6Field.setText(_this5.charge[10]);
        textb6Field.addToPage(firstpage, {
          x: 487,
          y: 220,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const textb7Field = form.createTextField('best.textb7');
        textb7Field.setText(_this5.charge[11]);
        textb7Field.addToPage(firstpage, {
          x: 507,
          y: 220,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const textb8Field = form.createTextField('best.textb8');
        textb8Field.setText(_this5.charge[12]);
        textb8Field.addToPage(firstpage, {
          x: 528,
          y: 220,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const textb9Field = form.createTextField('best.textb9');
        textb9Field.setText(_this5.charge[13]);
        textb9Field.addToPage(firstpage, {
          x: 550,
          y: 220,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const textc1Field = form.createTextField('best.textc1');
        textc1Field.setText(_this5.charge[14]);
        textc1Field.addToPage(firstpage, {
          x: 549,
          y: 220,
          width: 15,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        }); // *WE AUTHORISE YOU TO CONVERT THE UNUTILISED PORTION OF CAPTIONED INWARD REMITTANCE CREDITED

        const textc2Field = form.createTextField('best.textc2');
        textc2Field.setText('');
        textc2Field.addToPage(firstpage, {
          x: 160,
          y: 150,
          width: 110,
          height: 16,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const textc3Field = form.createTextField('best.textc3');
        textc3Field.setText('');
        textc3Field.addToPage(firstpage, {
          x: 160,
          y: 125,
          width: 110,
          height: 16,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const textc4Field = form.createTextField('best.textc4');
        textc4Field.setText('');
        textc4Field.addToPage(firstpage, {
          x: 160,
          y: 100,
          width: 110,
          height: 16,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        }); // Booking date

        const textaField = form.createTextField('best.texta');
        textaField.setText('');
        textaField.addToPage(firstpage, {
          x: 413,
          y: 150,
          width: 12,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const textbField = form.createTextField('best.textb');
        textbField.setText('');
        textbField.addToPage(firstpage, {
          x: 430,
          y: 150,
          width: 12,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const textcField = form.createTextField('best.textc');
        textcField.setText('');
        textcField.addToPage(firstpage, {
          x: 450,
          y: 150,
          width: 12,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const textdField = form.createTextField('best.textd');
        textdField.setText('');
        textdField.addToPage(firstpage, {
          x: 467,
          y: 150,
          width: 12,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const texteField = form.createTextField('best.texte');
        texteField.setText('');
        texteField.addToPage(firstpage, {
          x: 485,
          y: 150,
          width: 12,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const textfField = form.createTextField('best.textf');
        textfField.setText('');
        textfField.addToPage(firstpage, {
          x: 503,
          y: 150,
          width: 12,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const textgField = form.createTextField('best.textg');
        textgField.setText('');
        textgField.addToPage(firstpage, {
          x: 523,
          y: 150,
          width: 12,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const texthField = form.createTextField('best.texth');
        texthField.setText('');
        texthField.addToPage(firstpage, {
          x: 539,
          y: 150,
          width: 12,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        }); // Due date

        const textiField = form.createTextField('best.texti');
        textiField.setText('');
        textiField.addToPage(firstpage, {
          x: 413,
          y: 125,
          width: 12,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const textjField = form.createTextField('best.textj');
        textjField.setText('');
        textjField.addToPage(firstpage, {
          x: 430,
          y: 125,
          width: 12,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const textkField = form.createTextField('best.textk');
        textkField.setText('');
        textkField.addToPage(firstpage, {
          x: 450,
          y: 125,
          width: 12,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const textlField = form.createTextField('best.textl');
        textlField.setText('');
        textlField.addToPage(firstpage, {
          x: 467,
          y: 125,
          width: 12,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const textmField = form.createTextField('best.textm');
        textmField.setText('');
        textmField.addToPage(firstpage, {
          x: 485,
          y: 125,
          width: 12,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const textnField = form.createTextField('best.textn');
        textnField.setText('');
        textnField.addToPage(firstpage, {
          x: 503,
          y: 125,
          width: 12,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const textoField = form.createTextField('best.texto');
        textoField.setText('');
        textoField.addToPage(firstpage, {
          x: 523,
          y: 125,
          width: 12,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const textzField = form.createTextField('best.textz');
        textzField.setText('');
        textzField.addToPage(firstpage, {
          x: 539,
          y: 125,
          width: 12,
          height: 15,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const textc5Field = form.createTextField('best.textc5');
        textc5Field.setText('');
        textc5Field.addToPage(firstpage, {
          x: 420,
          y: 100,
          width: 130,
          height: 16,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const textc5Field1 = form.createTextField('best.textc5y');
        textc5Field1.setText(_this5.jstoday);
        textc5Field1.addToPage(firstpage, {
          x: 50,
          y: 52,
          width: 100,
          height: 16,
          textColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(0, 0, 0),
          backgroundColor: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_5__.rgb)(1, 1, 1),
          borderWidth: 0
        });
        const pdfBytes = yield pdfDoc.save(); //console.log(pdfBytes, "pdf")
        //console.log(pdfBytes, "pdf")

        var base64String = _this5._arrayBufferToBase64(pdfBytes); //console.log(base64String);


        var x = 'data:application/pdf;base64,' + base64String; //console.log(x);

        _this5.formerge = x;
        _this5.value = base64String;
        _this5.newTask[0].generateDoc1 = x;
        console.log('jhshshjshj', _this5.newTask[0]);
        console.log("line no. 1735asdsadsa", _this5.value);
        const link = document.createElement("a");
        link.id = "dwnldLnk";
        link.style = "display:none;";
        document.body.appendChild(link);
        const dlnk = document.getElementById("dwnldLnk");
        dlnk.href = x;
        dlnk.download = 'file.pdf';
        dlnk.click();
      })();
    }

    _arrayBufferToBase64(buffer) {
      var binary = '';
      var bytes = new Uint8Array(buffer);
      var len = bytes.byteLength;

      for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
      }

      return window.btoa(binary);
    }

    generateDoc1(code, j) {
      console.log(code, j);
      this.generate = true;
      this.sbPurpose[j] = code;
      this.ir = this.Question5;

      if (this.Question5 == 'yes') {
        console.log("shdhshs");
        this.sbPurpose1[j] = code;
      }

      let generateDoc2 = [];

      for (let item of this.item1) {
        for (let sb of this.sbArray) {
          if (item.sbno === sb) {
            generateDoc2.push(this.sanitizer.bypassSecurityTrustResourceUrl(item.doc));
          }
        }
      }

      this.mainDoc1[j] = generateDoc2;
      let generateDoc3 = [];

      if (this.Question2 == 'yes') {
        for (let item of this.item4) {
          for (let sb of this.tryArray) {
            if (item.thirdNumber === sb) {
              generateDoc3.push(this.sanitizer.bypassSecurityTrustResourceUrl(item.doc));
            }
          }
        }

        this.mainDoc3[j] = generateDoc3;
      }

      if (this.Question2 == 'yes') {
        this.newTask[j] = {
          sbNumbers: this.sbArray,
          sbUrls: this.mainDoc1[j],
          tryNumbers: this.tryArray,
          tryUrls: this.mainDoc3[j],
          purposeCode: code,
          lodgeDone: 'no',
          ir: this.ir
        };
      } else if (this.Question2 == 'no') {
        this.newTask[j] = {
          sbNumbers: this.sbArray,
          sbUrls: this.mainDoc1[j],
          purposeCode: code,
          lodgeDone: 'no',
          ir: this.ir
        };
      }

      console.log(this.mainDoc1[j]);
      console.log(this.generate1);
      console.log(this.c);
    }

    generateDoc2(SHOW_HIDE_CODE, code, j) {
      console.log(code, j);
      this.generate = true;
      this.ir = SHOW_HIDE_CODE;

      if (SHOW_HIDE_CODE == 'yes') {
        this.importPurpose[j] = code;
      } else if (SHOW_HIDE_CODE == 'no') {
        this.noImportPurpose[j] = code;
      }

      let generateDoc2 = [];

      for (let item of this.item4) {
        for (let sb of this.tryArray) {
          if (item.thirdNumber === sb) {
            generateDoc2.push(this.sanitizer.bypassSecurityTrustResourceUrl(item.doc));
          }
        }
      }

      this.mainDoc2[j] = generateDoc2;
      this.newTask[j] = {
        tryNumbers: this.tryArray,
        tryUrls: this.mainDoc2[j],
        purposeCode: code,
        lodgeDone: 'yes',
        ir: this.ir,
        br: 'yes'
      };
    }

    exportAsPDF(code, i) {
      if (this.documentService.draft == true) {
        if (this.documentService.task.task[i].pipoUrls) {
          this.selectPIPO = this.documentService.task.task[i].pipoNumbers;
        }
      }

      this.donePurpose[i] = code;
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
          this.data7[i] = this.data6; //this.newTask.url1 = this.data5;

          this.done = true; //this.downloadPDF(data);

          this.zToggle[i] = true;
          this.newTask[i] = {
            pipoNumbers: this.selectPIPO,
            pipoUrls: this.mainDoc[i],
            purposeCode: code,
            generateDoc1: this.data7[i]
          };
          console.log(this.newTask[i]);
          let allTrue = true;

          for (let value of this.zToggle) {
            allTrue = allTrue && value;
          }

          if (allTrue) {
            this.isDone = true;
          }
        }
      });
    }

    doneDox() {
      if (this.documentService.draft) {
        this.documentService.updateExportTask({
          task: this.newTask,
          completed: 'yes',
          fileType: 'IRD'
        }, this.documentService.task._id).subscribe(data => {
          console.log("king123");
          console.log(this.newTask);
          console.log("data");
          this.documentService.draft = false;
          this.documentService.task.id = '';
          this.isDoneAll = true;
          console.log("advanceOutward");
          this.userService.updateManyPipo(this.newTask[0]['pipoNumbers'], 'advanceOutward', this.newTask[0].generateDoc1).subscribe(data => {
            console.log("king123");
            console.log(data);
            this.toastr.success('Task saved as completed successfully!!!!!!!!!!!!');

            if (this.redirectid) {
              this.router.navigate(['home/pipo-export', {
                id: this.redirectid,
                page: this.redirectpage,
                index: this.redirectindex
              }]);
            } else {
              window.location.reload();
            } //this.router.navigate(["/home/advance-outward-remittance"]);

          }, error => {
            // this.toastr.error('Invalid inputs, please check!');
            console.log("error");
          }); //this.router.navigate(['/login'], { queryParams: { registered: true }});
        }, error => {
          console.log("error");
        });
      } else {
        console.log(this.newTask);
        console.log("advanceOutward");
        this.documentService.addExportTask({
          task: this.newTask,
          completed: 'yes',
          fileType: 'IRD'
        }).subscribe(res => {
          this.isDoneAll = true;
          console.log("advanceOutward");
          this.userService.updateManyPipo(this.newTask[0]['pipoNumbers'], 'advanceOutward', this.newTask[0].generateDoc1).subscribe(data => {
            console.log("king123");
            console.log(data);
            this.toastr.success('Task saved as completed successfully!');

            if (this.redirectid) {
              this.router.navigate(['home/pipo-export', {
                id: this.redirectid,
                page: this.redirectpage,
                index: this.redirectindex
              }]);
            } else {
              window.location.reload();
            } //this.router.navigate(["/home/dashboardTask"]);
            //this.router.navigate(["/home/advance-outward-remittance"]);

          }, error => {
            // this.toastr.error('Invalid inputs, please check!');
            console.log("error");
          });
        }, err => {
          this.toastr.error('Error!');
          console.log("Error saving the transaction");
        });
      }
    }

    exportAsPDF1(code, i) {
      console.log(code, i);
      this.doneSbPurpose[i] = code;
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
          this.data8[i] = this.data6;
          console.log(this.data8[i]); //this.newTask.url1 = this.data5;

          this.done = true;
          console.log(this.sbPurpose1[i]);
          console.log(code);

          if (this.sbPurpose1[i] == code) {
            const height1 = Math.round($("#mainId1").outerHeight() * 0.0104166667 * 10) / 10;
            console.log($("#mainId1").html());
            this.documentService.getPDF({
              data: $("#mainId1").html(),
              filename: "Final Report",
              format: {
                paperWidth: 7,
                paperHeight: height1 + 5,
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
                this.dataImport[i] = this.data6;
                this.sbPurposeDone1[i] = code;
                console.log(this.dataImport[i]); //this.newTask.url1 = this.data5;

                this.done = true; //this.downloadPDF(data);

                if (this.Question2 == 'yes') {
                  this.newTask[i] = {
                    sbNumbers: this.sbArray,
                    sbUrls: this.mainDoc1[i],
                    tryNumbers: this.tryArray,
                    tryUrls: this.mainDoc3[i],
                    purposeCode: code,
                    generateDoc1: this.data8[i],
                    generateDoc2: this.dataImport[i],
                    lodgeDone: 'no',
                    ir: 'yes'
                  };
                } else if (this.Question2 == 'no') {
                  this.newTask[i] = {
                    sbNumbers: this.sbArray,
                    sbUrls: this.mainDoc1[i],
                    tryNumbers: this.tryArray,
                    tryUrls: this.mainDoc3[i],
                    purposeCode: code,
                    generateDoc1: this.data8[i],
                    generateDoc2: this.dataImport[i],
                    lodgeDone: 'no',
                    ir: 'yes'
                  };
                }
              }
            });
            console.log(this.newTask[i]);
          } else {
            this.sbPurposeDone1[i] = '';
            this.newTask[i] = {
              sbNumbers: this.sbArray,
              sbUrls: this.mainDoc1[i],
              tryNumbers: this.tryArray,
              tryUrls: this.mainDoc3[i],
              purposeCode: code,
              generateDoc1: this.data8[i],
              lodgeDone: 'no',
              ir: 'no'
            };
            console.log(this.newTask[i]);
          }

          this.zToggle[i] = true;
          let allTrue = true;

          for (let value of this.zToggle) {
            allTrue = allTrue && value;
          }

          if (allTrue) {
            this.isDone = true;
          } //this.downloadPDF(data);

        }
      });
    }

    exportAsPDF2(code, i) {
      console.log(code, i);
      this.doneImportPurpose[i] = code;
      const height = Math.round($("#mainId1").outerHeight() * 0.0104166667 * 10) / 10;
      console.log($("#mainId1").html());
      this.documentService.getPDF({
        data: $("#mainId1").html(),
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
          this.data9[i] = this.data6;
          console.log(this.data9[i]); //this.newTask.url1 = this.data5;

          this.done = true; //this.downloadPDF(data);

          this.zToggle[i] = true;
          this.newTask[i] = {
            tryNumbers: this.tryArray,
            tryUrls: this.mainDoc2[i],
            purposeCode: code,
            generateDoc1: this.data9[i],
            lodgeDone: 'yes',
            ir: 'no',
            br: 'yes'
          };
          let allTrue = true;

          for (let value of this.zToggle) {
            allTrue = allTrue && value;
          }

          if (allTrue) {
            this.isDone = true;
          }
        }
      });
    }

    change(e) {
      console.log(e.target.value);
      this.bankRef = e.target.value;
    }

    showPreview(id) {
      // this.PREVIWES_URL='./../../assets/DXB.pdf'
      console.log("2214 line", this.STORE_URL);
      this.bgColor = true;
      this.newDone = true;

      for (let index = 0; index < this.STORE_URL.length; index++) {
        this.userService.mergePdf(this.STORE_URL[index]).subscribe(res => {
          res.arrayBuffer().then(data => {
            this.ARRAY_BUFFER_PDF.push(data);
            console.log('mergePdf_downloadEachFile', data);
          });
        });
      }

      this.documentService.getDownloadStatus({
        id: this.Inward_Remittance_MT103[this.Inward_Remittance_MT103.length - 1]?._id,
        deleteflag: '-1'
      }).subscribe(res => {
        console.log(res, 'dsdsdsdsdsdsds');
        this.GetDownloadStatus = res[0];

        if (res.length == 0) {
          this.documentService.getDownloadStatus({
            id: this.Inward_Remittance_MT103[this.Inward_Remittance_MT103.length - 1]?._id,
            deleteflag: '2'
          }).subscribe(res => {
            console.log(res, 'dsdsdsdsdsdsds');
            this.GetDownloadStatus = res[0];
          });
        }
      });
    }

    hidePreview() {
      this.bgColor = false;
      this.newDone = false;
    }

    sendMail(j, code) {
      let val = {
        file: this.bankRef
      };
      this.documentService.exportEmail({
        task: val
      }).subscribe(res2 => {
        this.toastr.success('Message sent successfully!');
        console.log("Email Sent");

        if (this.Question4 == 'no') {
          this.mailArray[j] = code;
          this.newTask[j] = {
            tryNumbers: this.tryArray,
            tryUrls: this.mainDoc2[j],
            purposeCode: code,
            bankRef: this.bankRef,
            lodgeDone: 'yes',
            ir: 'no',
            br: 'yes'
          };
          this.zToggle[j] = true;
          let allTrue = true;

          for (let value of this.zToggle) {
            allTrue = allTrue && value;
          }

          if (allTrue) {
            this.isDone = true;
          }
        } else {
          this.mailArray[j] = code;
          this.newTask[j] = {
            purposeCode: code,
            bankRef: this.bankRef,
            lodgeDone: 'yes',
            ir: 'no',
            br: 'no'
          };
          this.zToggle[j] = true;
          let allTrue = true;

          for (let value of this.zToggle) {
            allTrue = allTrue && value;
          }

          if (allTrue) {
            this.isDone = true;
          }
        } //this.router.navigate(["/home/advance-outward-remittance"]);

      }, err => console.log("ERROR"));
    }

    purposeClick(e, f, inputid) {
      if (e.startsWith("P0") || e.startsWith("P1")) {
        if (this.Inward_Remittance.includes(e)) {
          if (this.selectedPurpose.includes(e)) {
            this.toastr.warning(`This purpose code already added`);
          } else if (!this.selectedPurpose.includes(e)) {
            this.OLD_INPUT_VALUE = e; // $(inputid).val(e);
            // this.searchData(e)

            this.selectedPurpose.push(e);
            this.toastr.info(`Purpose code added`);
            this.selection = this.selectedPurpose[0];
          }
        } else {
          this.toastr.warning(`You can't add this purpose code`);
        }
      } else {
        this.toastr.error(`Click on purpose code`);
      } // this.select = true;
      // this.purposeCode = e
      // this.detail = f

    }

    removeClick(i) {
      this.selectedPurpose.splice(i, 1);
    }

    onChange() {
      this.purposeCode = '';
      this.detail = '';
      this.purposeSelect = false;
    }

    hide(id) {
      this.proceed = true;
      this.c = false;
    }

    hide1(code, j) {
      code === this.c;
      this.sbPurpose[j] != code;
      this.importPurpose[j] != code;
      this.noImportPurpose[j] != code;
      this.mailArray[j] != code;
      code !== this.c;
      this.importPurpose[j] != code; //  this.doneImportPurpose[j] == code
    }

    proceedClick() {
      console.log("gggg");
      this.proceed = false;
      this.c = this.selectedPurpose[0];
      let i = 0;

      for (let value of this.selectedPurpose) {
        this.generatePurpose.push('');
        this.donePurpose.push('');
        this.sbPurpose.push('');
        this.doneSbPurpose.push('');
        this.importPurpose.push('');
        this.noImportPurpose.push('');
        this.doneImportPurpose.push('');
        this.zToggle.push(false);
        this.mailArray.push('');
        this.newTask[i] = {
          purposeCode: value
        };
        i++;
      }

      this.z = this.selectedPurpose.length;
    }

    tabClick(a, i) {
      this.c = a;
      this.Question1 = '';
      this.Question2 = '';
      this.Question3 = '';
      this.Question4 = '';
      this.Question5 = '';
      this.selectPIPO = [];
      this.sbArray = [];
      this.tryArray = [];
      let allTrue = true;
      this.selection = a;
      console.log(this.Select_A_bank, 'Select_A_bank');

      for (let value of this.zToggle) {
        allTrue = allTrue && value;
      }

      if (allTrue) {
        this.isDone = true;
      }
    }

    onClass(e) {}

    edit() {}

    downloadPDF() {}

    ngOnDestroy() {
      console.log("Inside draft");

      if (!this.isDoneAll && !this.proceed && !this.documentService.draft) {
        console.log('hhhhh'); // this.confirmDialogService.confirmThis('Do you want to save this task?', () => {
        //   if (this.isDone) {
        //     this.documentService.addExportTask({ task: this.newTask, completed: 'yes', fileType: 'IRD' }).subscribe(
        //       (res) => {
        //         this.toastr.success('Saved the transaction as completed');
        //         console.log("Transaction Saved");
        //         //this.router.navigate(["/home/dashboardNew"]);
        //       },
        //       (err) => {
        //         this.toastr.error('Error!');
        //         console.log("Error saving the transaction")
        //       }
        //     );
        //   }
        //   else {
        //     this.documentService.addExportTask({ task: this.newTask, completed: 'no', fileType: 'IRD' }).subscribe(
        //       (res) => {
        //         this.toastr.success('Saved the transaction in draft');
        //         console.log("Transaction Saved");
        //         //this.router.navigate(["/home/dashboardNew"]);
        //       },
        //       (err) => {
        //         this.toastr.error('Error!');
        //         console.log("Error saving the transaction")
        //       }
        //     );
        //   }
        // }, () => {
        //   console.log("no");
        // });
      }
    }

    setradio(a, input, event) {
      console.log(a);

      if (input == '') {
        event.target.checked = false;
        alert('Please select pipo number');
        return;
      }

      this.bankToggle = true;
      this.bankValue = a;
      this.newBankArray = [];
      this.bankArray.forEach((value, index) => {
        console.log('shshsh');

        if (value.bank == a) {
          this.newBankArray.push(value);
        }
      });
      console.log(a);
    }

    creditTo(a) {
      var n = a.accNumber;
      this.credit = n.split("");
      console.log(this.credit);
    }

    chargesTo(a) {
      var n = a.accNumber;
      this.charge = n.split("");
      console.log(this.charge);
    }

    openToPdf(content2, pipo) {
      console.log("Line 2488", pipo, this.selectedPurpose, this.mainDoc);
      this.selectedPdfs = [];
      this.selectedPdfs[0] = this.value;
      this.selectedPdfs[1] = this.MT103_URL;

      for (let index = 0; index < this.ARRAY_BUFFER_PDF.length; index++) {
        this.selectedPdfs.push(this.ARRAY_BUFFER_PDF[index]);
      }

      console.log('line no. 2493', this.selectedPdfs);
      this.modalService.open(content2, {
        ariaLabelledBy: 'modal-basic-title',
        size: 'lg'
      }).result.then(result => {
        this.closeResult = `Closed with: ${result}`;
      }, reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }

    addPdfToSelectedPdf(value, e) {
      if (e.target.checked) {
        if (this.selectedPdfs.includes(value) === false) {
          this.selectedPdfs.push(value);
        }
      } else if (!e.target.checked) {
        this.selectedPdfs = this.selectedPdfs.filter(item => item !== value);
      }

      console.log("line no. 2495", this.selectedPdfs);
    }

    blobToSaveAs(fileName, exportText) {
      try {
        const linkSource = exportText;
        const downloadLink = document.createElement("a");
        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        downloadLink.click();
      } catch (e) {
        console.error('BlobToSaveAs error', e);
      }
    }

    changePurposeCode(value) {// this.Inward_Remittancefilter = this.filterPurposeCode(value)
    }

    filterPurposeCode(searchvalue) {
      this.Inward_Remittancefilter = [];

      if (searchvalue != null && searchvalue != undefined) {
        this.Inward_Remittancefilter = this.Inward_Remittance.filter(e => e.toLowerCase().indexOf(searchvalue.toLowerCase()) != -1);
      } else {
        this.Inward_Remittancefilter = this.Inward_Remittancefilter;
      }

      return this.Inward_Remittancefilter;
    }

    PIPOFilter(searchvalue) {
      if (searchvalue != null && searchvalue != undefined && searchvalue != 'BuyerName') {
        this.dataSource = this.OLD_dataSource.filter(e => {
          var temp = e['buyerName'];

          if (temp != null && temp != undefined) {
            if (temp.toLowerCase().indexOf(searchvalue.toLowerCase()) != -1) {
              return e;
            }
          }
        });
      } else {
        this.dataSource = this.OLD_dataSource;
      }
    }

    ShippingBillnumberFil(searchvalue) {
      if (searchvalue != null && searchvalue != undefined && searchvalue != 'BuyerName') {
        this.ShippingbillNumberfilter = this.item1.filter(e => {
          var temp = e['buyerName'];

          if (temp != null && temp != undefined) {
            if (temp.toLowerCase().indexOf(searchvalue.toLowerCase()) != -1) {
              return e;
            }
          }
        });
      } else {
        this.ShippingbillNumberfilter = this.item1;
      }

      console.log(this.ShippingbillNumberfilter, this.item1, 'ShippingbillNumberfilter');
    }

    ClickbankNumber(name, inputsetvalue, hiddenprops) {
      this.SELECT_bankreferencenumber = name;
      console.log(name, inputsetvalue, 'bnk_reff');
    }

    loadPopup(inputid, hidden_props) {
      var oldata = [];
      this.documentService.getBlcopyrefPromies().then(res => {
        this.Blcopyref = res;
        oldata = res;
        console.log(res, 'getBlcopyref');
      }).catch(error => {
        this.Blcopyref = [];
      });
      var timer = null;
      $(inputid).keyup(e => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          var value = $(inputid).val();

          if (value) {
            this.Blcopyref = this.filterBlcopyref(oldata, value);
          } else {
            this.Blcopyref = oldata;
          }
        }, 200);
      });
    }

    loadPopupThirdParty(event, dropdownid) {
      var timer = null;
      clearTimeout(timer);
      $(dropdownid).css('display', 'none');
      timer = setTimeout(() => {
        $(dropdownid).css('display', 'block');
        this.ThirdPartydata = this.filterThirdParty(this.ThirdPartydataoldata, event.target.value);

        if (this.ThirdPartydata.length == 0) {
          $(dropdownid).css('display', 'none');
        } else {
          this.ThirdPartydata = this.ThirdPartydataoldata;
        }
      }, 200);
    }

    SearchSelectValue(value) {
      if (value != null && value != undefined && value != '') {
        this.Blcopyref = this.filterBlcopyref(this.Blcopyrefoldata, value);
      }
    }

    loadPopupPIPONumbers(inputid, hidden_props) {}

    filterBlcopyref(data, searchvalue) {
      return data.filter(e => e.buyerName.toLowerCase().indexOf(searchvalue.toLowerCase()) != -1);
    }

    filterThirdParty(data, searchvalue) {
      return data.filter(e => e.buyerName.toLowerCase().indexOf(searchvalue.toLowerCase()) != -1);
    }

    filtershippingbillnumber(data, searchvalue) {
      return data.filter(e => e.sbno.toLowerCase().indexOf(searchvalue.toLowerCase()) != -1);
    }

    StringConverter(item) {
      // console.log(item,'itemmmmmmmmm')
      if (item.length == 0) {
        return '';
      } else {
        return item.toString();
      }
    }

    ClassRetrun(mainkey, key, class1, class2, condition) {
      if (this.Lodgement[this.selection][mainkey][key] === condition) {
        return class1;
      } else {
        return class2;
      }
    }

    Changebutton(mainkey, Showkey, hidekey, value) {
      this.Lodgement[this.selection][mainkey][Showkey] = value;
      this.Lodgement[this.selection][mainkey][hidekey] = ''; // console.log(this.Lodgement[this.selection],'Lodgement')
    }

    Number_to_word(numberInput) {
      let oneToTwenty = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
      let tenth = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']; //let num = ('0000000000'+ numberInput).slice(-10).match(/^(\d{1})(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);

      let num = ('0000000' + numberInput).slice(-7).match(/^(\d{1})(\d{1})(\d{2})(\d{1})(\d{2})$/);
      console.log(num);

      if (numberInput.toString().length > 7 || !num) {
        return '';
      } else {
        console.log(numberInput);
        let outputText = num[1] != 0 ? (oneToTwenty[Number(num[1])] || `${tenth[num[1][0]]} ${oneToTwenty[num[1][1]]}`) + ' million ' : '';
        outputText += num[2] != 0 ? (oneToTwenty[Number(num[2])] || `${tenth[num[2][0]]} ${oneToTwenty[num[2][1]]}`) + 'hundred ' : '';
        outputText += num[3] != 0 ? (oneToTwenty[Number(num[3])] || `${tenth[num[3][0]]} ${oneToTwenty[num[3][1]]}`) + ' thousand ' : '';
        outputText += num[4] != 0 ? (oneToTwenty[Number(num[4])] || `${tenth[num[4][0]]} ${oneToTwenty[num[4][1]]}`) + 'hundred ' : '';
        outputText += num[5] != 0 ? oneToTwenty[Number(num[5])] || `${tenth[num[5][0]]} ${oneToTwenty[num[5][1]]} ` : '';
        return outputText;
      }
    }

    SendApproval(Status, UniqueId, url) {
      var temp_doc = [];
      temp_doc[0] = 'data:application/pdf;base64,' + this.value;
      temp_doc[1] = this.Inward_Remittance_MT103[this.Inward_Remittance_MT103.length - 1]?.file;

      for (let index = 0; index < this.mainDoc[0].length; index++) {
        temp_doc.push(this.mainDoc[0][index]?.changingThisBreaksApplicationSecurity);
      }

      var approval_data = {
        id: UniqueId,
        tableName: 'Export-Home',
        deleteflag: '-1',
        userdetails: this.USER_DATA,
        status: 'pending',
        documents: temp_doc,
        Types: 'downloadPDF',
        TypeOfPage: 'Transaction',
        FileType: this.USER_DATA?.sideMenu
      };
      console.log(approval_data, this.mainDoc, 'approval_data');

      if (Status == '' || Status == null || Status == 'Rejected') {
        this.AprrovalPendingRejectService.DownloadByRole_Transaction_Type(this.USER_DATA['RoleCheckbox'], approval_data, () => {
          // this.router.navigate(['/home/dashboardTask'])
          this.documentService.getDownloadStatus({
            id: UniqueId,
            deleteflag: '-1'
          }).subscribe(res => {
            console.log(res, 'dsdsdsdsdsdsds');
            this.GetDownloadStatus = res[0];

            if (res.length == 0) {
              this.documentService.getDownloadStatus({
                id: UniqueId,
                deleteflag: '2'
              }).subscribe(res => {
                console.log(res, 'dsdsdsdsdsdsds');
                this.GetDownloadStatus = res[0];
              });
            }
          });
        });
      } else if (Status == 'pending') {
        this.CustomConfirmDialogModel.YesNoDialogModel('Are you sure you want to delete this item?', 'Yes or No', res => {});
      }

      console.log(UniqueId, approval_data, 'uiiiiiiiiiiiiii');
    }

  }

  ExportHomeComponent.ɵfac = function ExportHomeComponent_Factory(t) {
    return new (t || ExportHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_service_document_service__WEBPACK_IMPORTED_MODULE_1__.DocumentService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_16__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_4__.ConfirmDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_service_window_information_service__WEBPACK_IMPORTED_MODULE_7__.WindowInformationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_service_aprroval_pending_reject_transactions_service__WEBPACK_IMPORTED_MODULE_8__.AprrovalPendingRejectTransactionsService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_custom_custom_confirm_dialog_model_custom_confirm_dialog_model_component__WEBPACK_IMPORTED_MODULE_9__.CustomConfirmDialogModelComponent));
  };

  ExportHomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: ExportHomeComponent,
    selectors: [["app-export-home"]],
    viewQuery: function ExportHomeComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 5);
      }

      if (rf & 2) {
        let _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.ngSelect = _t);
      }
    },
    decls: 142,
    vars: 11,
    consts: [[1, "content_top_common", "scroll-bar-main"], [1, "content-wrap"], [1, "container-fluid"], [1, "import_export_sec"], [1, "row"], [1, "col-md-6", "col-sm-6", "col-xs-12"], [1, "Dashbord_sec"], [1, "title_dash"], [1, "float_right_page"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/home/pipo"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "content_white_background"], ["id", "content", "role", "main", 1, "content22", "table-padding"], ["cla", "", "ss", "analytics", 4, "ngIf"], ["class", "analytics", 4, "ngIf"], ["content", ""], [1, "bg-black-opacity"], ["custommodal", ""], ["tabindex", "-1", "role", "dialog", 1, "modal", "custom-modal"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [4, "ngIf"], ["id", "new_popups_added", "class", "", 4, "ngIf"], ["class", "text-center", 4, "ngIf"], ["ShippingBillnumber", ""], ["tabindex", "-1", "role", "dialog", 1, "modal", "custom-modal", "row", "no-gutter", "Select", "Shipping", "bill", "number", "Select_Shipping"], [1, "container_remove"], [1, "row_bt"], [1, "DDDD"], [1, "mt_bottom", 2, "margin-bottom", "20px"], [1, "col-md-6"], [1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["value", "BuyerName"], ["style", "color: black;", 3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-3"], [1, "filter1", "btn", "btn-primary", 3, "click"], [1, "box-shadow", 2, "width", "100%"], [1, "table", "table-striped", "mb-0"], [2, "width", "100%", "height", "54px"], [1, "text-muted", "table-heading", 2, "opacity", "50%", "font-size", "10px", "color", "black !important", "font-weight", "300 !important", "padding", "0px", "border-bottom", "1px solid #f2f4f8"], ["scope", "col"], [1, "text-dark"], ["class", "table-row", 4, "ngFor", "ngForOf"], [1, "submit_right_button", 2, "float", "right"], ["aria-label", "Close", 1, "filter1", "btn", "btn-secondary", 3, "click"], [1, "filter1", "btn", "btn-primary", 2, "margin-left", "16px", 3, "click"], ["PIPONumbers", ""], ["tabindex", "-1", "role", "dialog", 1, "modal", "custom-modal", "Select_Shipping"], [1, "Search_numbers"], [1, "box-shadow", 2, "width", "100%", "overflow", "auto", "height", "350px", "max-height", "800px"], ["class", "text-dark", 4, "ngIf"], ["cla", "", "ss", "analytics"], [1, "stp3"], ["class", "top_serah_section", 4, "ngIf"], [1, "top_serah_section"], ["placeholder", "Search purpose code,group name or description", "name", "commodity", 1, "mb-4", 2, "margin-bottom", "20px", 3, "items", "mulitple", "ngModel", "keyup", "change", "ngModelChange"], ["ngSelect", ""], [1, "table", "table-striped", "mb-0", "change_theheading", 2, "margin-left", "0px", "border-bottom", "0.5px solid rgb(228, 227, 227)"], [2, "width", "100%", "font-size", "10px", "font-weight", "300"], [1, "text-muted", "table-heading"], ["scope", "col", 2, "width", "17%", "border", "0.1px solid #d3d3d3"], ["scope", "col", 2, "width", "13%", "border", "0.1px solid #d3d3d3"], ["scope", "col", 2, "width", "60%", "border", "0.1px solid #d3d3d3"], ["class", "table-row", "style", "font-size: 12px;", 4, "ngFor", "ngForOf"], ["class", "tag_list_left", "style", "margin-top: 15px;", 4, "ngFor", "ngForOf"], [1, "button1", 2, "margin-top", "10px", 3, "click"], [1, "tag_list_left", 2, "margin-top", "15px"], [1, "tag_list"], [2, "color", "red", "cursor", "pointer", "padding", "0 0 0 8px", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-times"], [1, "table-row", 2, "font-size", "12px"], ["class", "columH", "style", "vertical-align: top !important;", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "columH", 2, "vertical-align", "top !important", 3, "ngClass", "click"], [1, "analytics"], ["src", "../../../assets/back.png", 2, "width", "20px", "height", "20px", 3, "click"], [2, "margin-left", "10px"], [1, "flex-container"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "border_bottt"], [3, "ngClass", "click"], ["class", "table_list_newss", 4, "ngIf"], [1, "table_list_newss"], [4, "ngFor", "ngForOf"], [1, "form-group"], [1, "col-lg-4", "col-md-4", "col-sm-8", "col-8"], [1, "col-lg-2", "col-md-2", "col-sm-4", "col-4"], [1, "toggle-button"], ["type", "button", 3, "click"], [1, "icon_top"], [1, "col-lg-6", "col-md-6", "col-sm-6", "col-12"], ["id", "bnk_reff", "type", "text", "autocomplete", "off", 1, "bnk_reff", "form-control", 3, "value", "keyup", "click"], ["bnk_reff", ""], [1, "space_div"], ["class", "Tripartite-agreement", 4, "ngIf"], [1, "Tripartite-agreement"], [2, "margin-left", "4px"], [1, "form-check-new", "list_top_tobtm"], [1, "space_bottom"], [1, "form-group", "mt-4"], [1, "col-md-12"], [1, "col-md-5", "col-sm-6", "col-6", "pl-0"], [1, "select_rol"], ["bindLabel", "buyerName", "placeholder", "Select Tripartite agreement", "name", "commodity", 3, "items", "ngModel", "ngModelChange"], [1, "col-md-1", "col-sm-2", "col-3", "pl-0", "collepse-btn-input"], [1, "uplod_doc"], ["type", "button", 1, "btn", "btn-danger"], ["src", "../../../assets/Icon-feather-upload.svg", "alt", ""], [1, "opt", "right_buttons_new", 2, "width", "200px", 3, "click"], [1, "opt", "right_buttons_new", 2, "margin-right", "1%", 3, "click"], [1, "button1", 2, "margin-bottom", "40px", 3, "click"], [1, "col-lg-6", "col-md-6", "col-sm-12", "col-12"], [1, "form-check-new"], ["autocomplete", "off", "type", "text", 1, "form-control", 3, "value", "click"], ["preantsearchShippingBillnumber", ""], [1, "col-lg-5", "col-md-5", "col-sm-10", "col-10"], [1, "col-lg-1", "col-md-1", "col-sm-2", "col-2"], [1, "new_upbuttons"], [2, "color", "#5dc9e9", "text-decoration", "underline", 3, "routerLink"], [1, "select_bg_new"], [1, "color:red;"], ["style", "display: flex; align-items: center;", 4, "ngFor", "ngForOf"], [1, "opt", 2, "float", "right", 3, "click"], [2, "display", "flex", "align-items", "center"], ["type", "radio", "id", "options1", "value", "value.bank", "s", "", 1, "circular_input", 2, "flex-direction", "row", 3, "checked", "ngModel", "click"], ["for", "male", 1, "label1", 2, "flex-direction", "row"], ["id", "mainId1", "class", "bc", 4, "ngIf"], ["style", "\n                                                        float: right;\n                                                        display: block;", 4, "ngIf"], ["id", "mainId1", 1, "bc"], ["id", "first", 1, "bc"], [1, "bc", "new_table_lits_view"], [1, "tablefulld_width"], ["contenteditable", "true", 2, "outline", "none", "display", "inline-block", "width", "150px"], [2, "border-bottom", "2px solid black"], [2, "font-weight", "600", "padding", "0 0 15px 0", "display", "inline-block"], [1, "text_newp"], [2, "width", "100%"], [1, "border1"], [1, "wtd4", "border1"], [1, "wtd3", "border1"], ["contenteditable", "true", 2, "outline", "none", "display", "inline-block", "width", "90px"], [2, "float", "right", "display", "block"], ["title", "Share As PDF", 1, "button1", 3, "click"], [1, "button1", 2, "margin-right", "10px", 3, "click"], [1, "button1", 2, "margin-bottom", "40px"], ["height", "500px", "width", "400px", 1, "iframe-controller", 3, "src"], ["class", "iframe-controller", "style", "flex-direction:row;", "height", "500px", "width", "400px", 3, "src", 4, "ngFor", "ngForOf"], ["class", "button1", "style", "margin-right: 10px;", 3, "click", 4, "ngIf"], ["height", "500px", "width", "400px", 1, "iframe-controller", 2, "flex-direction", "row", 3, "src"], ["style", "font-size:22px; color:#222;", 4, "ngIf"], ["id", "mainId", "class", "bc", 4, "ngIf"], ["style", "\n                                                                float: left;\n                                                                display: block;\n                                                                width:100%;\n                                                                margin-top: 16px;\n                                                                ", 4, "ngIf"], [2, "font-size", "22px", "color", "#222"], ["id", "mainId", 1, "bc"], [1, "heading"], [1, "bc", 2, "margin-top", "20px", "width", "100%"], [2, "text-align", "right"], ["contenteditable", "true", 2, "outline", "none", "display", "inline-block", "width", "150px", "border-bottom", "1px solid black"], [2, "width", "100%", "margin-top", "-20px"], [2, "margin-top", "10px"], ["contenteditable", "true", 2, "outline", "none", "display", "inline-block", "width", "160px", "border-bottom", "1px solid black"], ["id", "padding_common", 2, "width", "100%"], ["colspan", "10", 1, "border1"], ["contenteditable", "true", 2, "outline", "none", "display", "inline-block", "width", "100px", "border-bottom", "1px solid black"], ["contenteditable", "true", 2, "outline", "none", "display", "inline-block", "width", "80px", "border-bottom", "1px solid black"], ["contenteditable", "true", 2, "outline", "none", "display", "inline-block", "width", "60px", "border-bottom", "1px solid black"], ["contenteditable", "true", 2, "outline", "none", "display", "inline-block", "width", "300px", "border-bottom", "1px solid black"], ["contenteditable", "true", 2, "outline", "none", "display", "inline-block", "width", "200px", "border-bottom", "1px solid black"], [1, "sl", "border1"], [1, "sl2", "border1"], [1, "sl3", "border1"], [1, "wtd1", "border1"], [2, "margin-top", "0px", "margin-bottom", "0px"], ["contenteditable", "true", 2, "outline", "none", "display", "inline-block", "width", "90px", "border-bottom", "1px solid black"], ["contenteditable", "true", 2, "outline", "none", "display", "inline-block", "width", "400px", "border-bottom", "1px solid black"], [1, "sl3"], [1, "w1", "border1"], ["contenteditable", "true", 2, "outline", "none", "display", "inline-block", "width", "200px"], [2, "margin-bottom", "0px"], [1, "span_space"], ["contenteditable", "true", 2, "outline", "none", "display", "inline-block", "width", "20px", "border-bottom", "1px solid black", "border-top", "1px solid black", "border-left", "1px solid black"], ["contenteditable", "true", 2, "outline", "none", "display", "inline-block", "width", "20px", "border-bottom", "1px solid black", "border-top", "1px solid black", "border-left", "1px solid black", "border-right", "1px solid black"], [2, "margin-top", "20px"], [1, "bc", 2, "margin-top", "20px", "width", "75%"], [2, "width", "80%"], [2, "font-weight", "600"], [2, "float", "left", "display", "block", "width", "100%", "margin-top", "16px"], ["class", "iframe-controller", "height", "500px", "width", "400px", 3, "src", 4, "ngIf"], ["style", "display: flex; align-items: center;", 4, "ngIf"], [1, "col-md-4", "col-sm-8", "col-8"], [1, "col-md-2", "col-sm-4", "col-4"], ["class", "button1", "style", "margin-bottom: 40px;", 3, "click", 4, "ngIf"], ["content2", ""], ["placeholder", "Search for Buyer name or PI/PO Number to select PI/PO", "type", "text", "searchPIPONumbers", "", "id", "SearchShippingBill", "autocomplete", "off", 1, "form-control", 2, "width", "50%", "margin-top", "10px", "margin-bottom", "10px", 3, "value", "click"], ["SearchPIPONumbers", ""], [2, "color", "red"], ["type", "radio", "id", "options1", "value", "value.bank", 1, "circular_input", 2, "flex-direction", "row", 3, "name", "click"], ["style", "display: flex; align-items: center; ", 4, "ngFor", "ngForOf"], ["type", "radio", "id", "options1", "value", "value.bank", 1, "circular_input", 2, "flex-direction", "row", 3, "click"], ["style", "display: flex;flex-direction: column;gap: 20px;", 4, "ngIf"], ["style", "display: block; width: 78%;  margin-top: 40px;", 4, "ngIf"], ["name", "Documents", "width", "700px", "height", "500px", 3, "downloadShow", "src"], ["name", "MT103 Documents", "width", "700px", "height", "500px", 3, "downloadShow", "src"], [2, "display", "flex", "flex-direction", "column", "gap", "20px"], ["class", "docStyle", "style", "width: 500px;", 4, "ngFor", "ngForOf"], [1, "docStyle", 2, "width", "500px"], ["width", "700px", "height", "500px", 3, "downloadShow", "name", "src"], [2, "display", "block", "width", "78%", "margin-top", "40px"], ["class", "button1", "style", "margin-right: 10px;", "title", "Share As PDF", 3, "click", 4, "ngIf"], ["class", "button1", "style", "margin-right: 10px; width:200px", 3, "click", 4, "ngIf"], ["class", "button1", "style", "margin-right: 10px; margin-bottom: 30px;", 3, "click", 4, "ngIf"], ["title", "Share As PDF", 1, "button1", 2, "margin-right", "10px", 3, "click"], [1, "button1", 2, "margin-right", "10px", "width", "200px", 3, "click"], [1, "button1", 2, "margin-right", "10px", "margin-bottom", "30px", 3, "click"], [1, "modal-body2"], [1, "row", "no-gutter"], [1, "col-md-7", 2, "margin", "10px"], [1, "login", "d-flex", "py-5", 2, "padding", "0px !important"], [1, "container", "popup"], [1, "col-lg-10", "col-xl-7", "mrg"], [1, "display-5", 2, "text-align", "center", "margin-left", "180px"], [1, "docStyle"], [1, "display-4", 2, "margin-top", "10px", "width", "6 0px", "border-bottom", "4px solid #49A2D7"], ["type", "checkBox", "checked", "", 3, "change"], [2, "display", "flex", "width", "100%", "margin-left", "240px", "margin-top", "20px", "margin-bottom", "20px"], ["class", "docStyle", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "submitBTN", 3, "click"], ["class", "button1", "style", "margin-right: 10px; width:200px", 3, "disabled", "click", 4, "ngIf"], [1, "button1", 2, "margin-right", "10px", "width", "200px", 3, "disabled", "click"], ["class", "button1", "style", "margin-right: 10px; width:200px", 3, "disabled", 4, "ngIf"], [1, "button1", 2, "margin-right", "10px", "width", "200px", 3, "disabled"], [1, "row", "no-gutter", 2, "margin-right", "-3px !important"], ["type", "button", "aria-label", "Close", 1, "button2", "topright", 3, "click"], [1, "col-md-7"], [1, "container"], [1, "display-5"], [1, "d-flex", "justify-content-between", "mb-1"], [2, "border", "1px solid #C6CBD4", "color", "black", "padding", "0px 2px", "font-weight", "100", "margin-right", "5px", "font-size", "11px", "height", "25px", 3, "ngModel", "ngModelChange"], ["value", ""], ["style", "color: black;", 4, "ngFor", "ngForOf"], ["type", "date", "placeholder", "Start Date", "required", "", 2, "border", "1px solid #C6CBD4", "color", "black", "padding", "0px 2px", "font-weight", "100", "margin-right", "5px", "font-size", "11px", "height", "25px", 3, "ngModel", "ngModelChange"], ["type", "date", "placeholder", "End Date", "required", "", 2, "border", "1px solid #C6CBD4", "color", "black", "padding", "0px 2px", "font-weight", "100", "margin-right", "5px", "font-size", "11px", "height", "25px", 3, "ngModel", "ngModelChange"], [1, "filter", 3, "click"], [1, "box-shadow", 2, "width", "157%"], [1, "table", "table-striped", "mb-0", 2, "margin-left", "-2.7rem", "width", "250% !important"], ["class", "table-row1", 4, "ngFor", "ngForOf"], [2, "color", "black"], [1, "table-row1"], ["type", "checkbox"], ["placeholder", "Search party name", "name", "commodity", 3, "items", "ngModel", "keyup", "change", "ngModelChange"], ["id", "new_popups_added", 1, ""], ["class", "h5 class-append-text", 3, "click", 4, "ngFor", "ngForOf"], [1, "h5", "class-append-text", 3, "click"], [1, "text-center"], [2, "color", "black", 3, "value"], [1, "table-row"], ["type", "checkbox", 3, "change"]],
    template: function ExportHomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r279 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "Purpose code");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "div", 5)(10, "div", 8)(11, "nav", 9)(12, "ol", 10)(13, "li", 11)(14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15, "Transactions");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, "Inward remittance settlement or disposal");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "div", 14)(19, "main", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](20, ExportHomeComponent_div_20_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](21, ExportHomeComponent_div_21_Template, 9, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](22, ExportHomeComponent_ng_template_22_Template, 51, 26, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "div", 19, 20)(26, "div", 21)(27, "div", 22)(28, "div", 23)(29, "div", 24)(30, "h5", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](31, "Search bank reference number");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_Template_button_click_32_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r279);

          const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](25);

          return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](_r4.style.display = "none");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](33, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](34, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](36, ExportHomeComponent_div_36_Template, 3, 2, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](37, ExportHomeComponent_div_37_Template, 2, 1, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](38, ExportHomeComponent_div_38_Template, 2, 0, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "div", 19, 32)(41, "div", 33)(42, "div", 22)(43, "div", 23)(44, "div", 24)(45, "h5", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](46, "Select Shipping bill number");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](47, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_Template_button_click_47_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r279);

          const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](40);

          return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](_r8.style.display = "none");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](48, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](49, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](50, "div", 28)(51, "div", 34)(52, "div", 35)(53, "div", 36)(54, "div", 37)(55, "div", 4)(56, "div", 38)(57, "select", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ExportHomeComponent_Template_select_ngModelChange_57_listener($event) {
          return ctx.SBBuyerName = $event;
        })("change", function ExportHomeComponent_Template_select_change_57_listener() {
          return ctx.ShippingBillnumberFil(ctx.SBBuyerName);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](58, "option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](59, "BuyerName");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](60, ExportHomeComponent_option_60_Template, 2, 2, "option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](61, "div", 42)(62, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_Template_button_click_62_listener() {
          ctx.SBBuyerName = "BuyerName";
          return ctx.ShippingBillnumberFil(ctx.SBBuyerName);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](63, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](64, "section", 44)(65, "table", 45)(66, "thead", 46)(67, "tr", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](68, "th", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](69, "th", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](70, "SB DATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](71, "th", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](72, "SB NUMBER");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](73, "th", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](74, "BUYER NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](75, "th", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](76, "CURRENCY");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](77, "th", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](78, "SB AMOUNT");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](79, "th", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](80, "AVAILABLE AMOUNT");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](81, "tbody", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](82, ExportHomeComponent_tr_82_Template, 15, 6, "tr", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](83, "div", 51)(84, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_Template_button_click_84_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r279);

          const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](40);

          return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](_r8.style.display = "none");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](85, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](86, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_Template_button_click_86_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r279);

          const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](40);

          return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](_r8.style.display = "none");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](87, "Sumbit");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](88, "div", 19, 54)(90, "div", 55)(91, "div", 22)(92, "div", 23)(93, "div", 24)(94, "h5", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](95, "Search PI/PO numbers*");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](96, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_Template_button_click_96_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r279);

          const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](89);

          return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](_r11.style.display = "none");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](97, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](98, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](99, "div", 28)(100, "div", 56)(101, "div", 28)(102, "div", 34)(103, "div", 35)(104, "div", 36)(105, "div", 37)(106, "div", 4)(107, "div", 38)(108, "select", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ExportHomeComponent_Template_select_ngModelChange_108_listener($event) {
          return ctx.PIPONumbersBuyerName = $event;
        })("change", function ExportHomeComponent_Template_select_change_108_listener() {
          return ctx.PIPOFilter(ctx.PIPONumbersBuyerName);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](109, "option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](110, "BuyerName");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](111, ExportHomeComponent_option_111_Template, 2, 2, "option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](112, "div", 42)(113, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_Template_button_click_113_listener() {
          ctx.PIPONumbersBuyerName = "BuyerName";
          return ctx.PIPOFilter(ctx.PIPONumbersBuyerName);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](114, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](115, "section", 57)(116, "table", 45)(117, "thead", 46)(118, "tr", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](119, "th", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](120, "th", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](121, "Invoice No");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](122, "th", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](123, "Invoice Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](124, "th", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](125, "Consignee Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](126, "th", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](127, "Branch");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](128, "th", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](129, "Commodity");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](130, "th", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](131, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](132, "th", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](133, "Incoterm");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](134, "th", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](135, "Payment Term");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](136, ExportHomeComponent_tbody_136_Template, 2, 1, "tbody", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](137, "div", 51)(138, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_Template_button_click_138_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r279);

          const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](89);

          return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](_r11.style.display = "none");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](139, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](140, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ExportHomeComponent_Template_button_click_140_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r279);

          const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](89);

          return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](_r11.style.display = "none");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](141, "Sumbit");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()()()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.proceed);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.proceed);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.PARTY_NAME.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.Blcopyref.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.Blcopyref.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.SBBuyerName);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.buyerName);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.ShippingbillNumberfilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.PIPONumbersBuyerName);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.buyerName);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.dataSource.length != 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__.NgSelectComponent, _pdf_viewer_pdf_viewer_component__WEBPACK_IMPORTED_MODULE_10__.PDFVIEWERComponent, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLinkWithHref],
    styles: ["*[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.content_top_common[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 389px;\n  left: 240px;\n  top: 80px;\n  height: calc(100vh - 80px);\n  overflow: auto;\n}\n\n.heading[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 20px;\n  font-weight: 700;\n  color: #323e4a;\n}\n\n.dropdown[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.table-heading[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 500;\n  color: #747474;\n}\n\n.box-shadow[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n\n.table-padding[_ngcontent-%COMP%] {\n  background: white !important;\n}\n\n.upload-button[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 400;\n  border: none;\n  float: right;\n  margin-top: -12px;\n  margin-right: 30px;\n  height: 42px;\n  width: 160px;\n  background-color: #49a2d7;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n}\n\nbutton[_ngcontent-%COMP%] {\n  outline: none;\n}\n\n.table-row[_ngcontent-%COMP%] {\n  background-color: #ffffff !important;\n  color: #707683;\n}\n\n.table-row[_ngcontent-%COMP%]:hover {\n  background: #f6f9ff !important;\n}\n\n.columH[_ngcontent-%COMP%]:hover {\n  background: #f6f9ff !important;\n}\n\n.columH[_ngcontent-%COMP%] {\n  border-left: 1px dashed #e1e1e1;\n  border-right: 1px dashed #e1e1e1;\n  padding: 5px;\n  height: 35px;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-top: 1px dashed #e1e1e1;\n}\n\nselect[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.rect[_ngcontent-%COMP%] {\n  text-align: right;\n  min-width: 80px !important;\n}\n\n.sb-no[_ngcontent-%COMP%] {\n  color: #49a2d7;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  vertical-align: middle !important;\n}\n\n.image[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  margin-top: 12fvpx;\n}\n\n.image2[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  margin-left: -13px;\n}\n\n.form[_ngcontent-%COMP%] {\n  margin-left: 38px !important;\n  margin-right: 5%;\n  top: 50%;\n  left: 50%;\n  height: 316px;\n  background-color: white;\n  border: 1px dashed rgba(0, 0, 0, 0.4);\n}\n\n.form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif !important;\n  text-align: center;\n  line-height: 30px;\n  color: #303030;\n}\n\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-family: \"EuropaNuova-Regular\", sans-serif !important;\n  position: absolute;\n  margin: 0;\n  width: 89%;\n  height: 313px;\n  padding: 0;\n  outline: none;\n  cursor: pointer;\n  opacity: 0;\n}\n\n.form[_ngcontent-%COMP%]   .form_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  margin-left: 36.5%;\n  height: 42px;\n  cursor: pointer;\n  width: 160px;\n  background-color: #49a2d7;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #149174;\n  color: #0c5645;\n}\n\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  border: 0;\n}\n\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.xbutton[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #49a2d7;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.ybutton[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #0c354d;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.zbutton[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #947551;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.border2[_ngcontent-%COMP%] {\n  border-left: 3px solid #5fe6e7;\n}\n\n.border3[_ngcontent-%COMP%] {\n  border-left: 3px solid #e7845f;\n}\n\n.form-wrapper1[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.form-wrapper1[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 5.5%;\n}\n\n.form-wrapper1.td[_ngcontent-%COMP%] {\n  width: 100%;\n  width: 7%;\n}\n\n.full-input[_ngcontent-%COMP%] {\n  margin-left: 18px;\n  margin-bottom: 10px;\n  display: inline-block;\n  padding: 3px;\n  height: 74px;\n  width: 177px;\n  background-color: white;\n  border-radius: 5px;\n  box-shadow: 4px 4px 8px 4px #eeeefa;\n}\n\n.smalll-input[_ngcontent-%COMP%] {\n  width: 160px !important;\n  outline: none;\n  border: none;\n  display: block;\n  border-radius: 4px;\n  border: 1px solid #d5dbe8;\n  height: 35px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  padding: 5px 0px 5px 5px;\n  margin-bottom: 0px !important;\n  font-size: 14px;\n  font-weight: 500;\n  color: #72768a;\n  vertical-align: middle;\n  padding: 0 8px 0 0;\n}\n\nlabel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0 0px 0 5px;\n}\n\n.sh1[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  margin-top: 15px;\n  font-size: 16px;\n  color: #606670;\n}\n\n.ss[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n\n#customers[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100% !important;\n  margin-left: 23px !important;\n  border-right: 1px solid #ddd;\n  border-left: 1px solid #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  height: 52px !important;\n  text-align: left;\n  font-weight: 300;\n  background-color: #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 52px !important;\n}\n\n.tab1[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  \n  display: inline-block;\n  height: 17px;\n  width: 17px;\n  color: #49a2d7;\n  margin-bottom: 10px;\n}\n\n.tab1[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + input[_ngcontent-%COMP%] {\n  background-color: #bfb;\n  border-color: #4c4;\n}\n\n.label1[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  padding-right: 12px;\n  color: #606670;\n  font-size: 12px;\n  letter-spacing: 1px;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-left: 0px;\n}\n\n.tab1[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.at[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding-right: 20px;\n  padding-left: 10px;\n}\n\n.ctb[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin-left: 210px;\n  background-color: #49a2d7;\n  padding: 12px 30px 11px 30px;\n  color: white;\n  border-radius: 4px;\n  cursor: pointer;\n  font-weight: 500;\n}\n\n.radio1[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  \n  display: inline-block;\n  height: 17px;\n  width: 17px;\n  color: #49a2d7;\n  border: 2px solid #49a2d7;\n}\n\n.radio1[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + input[_ngcontent-%COMP%] {\n  background-color: #bfb;\n  border-color: #4c4;\n}\n\n.label1[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 10px;\n  padding-right: 12px;\n  color: #606670;\n  font-size: 12px;\n  letter-spacing: 1px;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-left: 15px;\n}\n\n.radio1[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.stp1[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 500;\n  margin-bottom: 10px;\n  color: black;\n}\n\n.stp2[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin-bottom: 10px;\n  color: black;\n}\n\n.stp3[_ngcontent-%COMP%] {\n  color: #4a4a4a;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.of1[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  font: 16px/26px Georgia, Garamond, Serif;\n  overflow: auto;\n}\n\n\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.side_document_list[_ngcontent-%COMP%] {\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 170vh;\n  border-right: 0.3px solid rgba(0, 0, 0, 0.2);\n  margin-left: 27px;\n}\n\n.profile_class[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  border-bottom: 0.3px solid rgba(0, 0, 0, 0.2);\n  padding: 3% 6%;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.activeBtn[_ngcontent-%COMP%] {\n  background-color: #f8fafd;\n  border-left: 8px solid rgb(61, 116, 197);\n}\n\n.table_top[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 28.55% 33% 36%;\n  border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);\n  align-items: center;\n}\n\n.invoices_tab[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  height: 100vh;\n  background-color: #f8fafd;\n}\n\n.invoices_inner[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #f8fafd;\n}\n\n.inner_tab_content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  background-color: white;\n}\n\n.invoice_head[_ngcontent-%COMP%] {\n  width: 95%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 5%;\n}\n\n.serial_detail[_ngcontent-%COMP%] {\n  width: 93%;\n  margin-top: 10px;\n  display: flex;\n  justify-content: right;\n  text-align: right;\n  font-weight: 500;\n}\n\n.transaction_tab[_ngcontent-%COMP%] {\n  width: 770px;\n  height: 1387px;\n}\n\n.form_inner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  justify-content: center;\n}\n\n.opt[_ngcontent-%COMP%] {\n  font-family: \"Nunito Sans\", sans-serif !important;\n  min-width: 160px;\n  padding: 6px;\n  font-size: 12px;\n  font-weight: 700;\n  background-color: RGB(81, 174, 229);\n  border-radius: 20px;\n  border: none;\n  outline: none;\n  height: 40px;\n  margin-left: 0px;\n  color: RGB(255, 255, 255);\n}\n\ninput[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder {\n  color: rgb(212, 29, 29);\n}\n\n.button[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 400;\n  min-width: 60px;\n  border: none;\n  padding: 5px;\n  background-color: transparent;\n  border-radius: 4px;\n  color: #0e8cd4;\n}\n\n.button1[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 400;\n  min-width: 60px;\n  border: none;\n  margin: 0px 0 22px 0;\n  text-align: center;\n  display: inline-block;\n  padding: 5px;\n  line-height: 28px;\n  background-color: #0e8cd4;\n  border-radius: 4px;\n  height: 40px;\n  color: white;\n}\n\n.class1[_ngcontent-%COMP%] {\n  color: #97cceb !important;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.flex-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background-color: #fff;\n  cursor: pointer;\n  margin: 10px;\n  text-align: left;\n  font-size: 20px;\n  margin: 19px 20px 9px 0;\n}\n\n.flex-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   .my_class[_ngcontent-%COMP%] {\n  background-color: #fff;\n  color: #0e8cd4;\n}\n\n.ng-star-inserted.my_class[_ngcontent-%COMP%] {\n  color: #0e8cd4;\n}\n\n.heading[_ngcontent-%COMP%] {\n  height: 25px;\n}\n\ntr.border1[_ngcontent-%COMP%] {\n  border-right: 1px dashed #e3e3e3;\n}\n\ntd.border1[_ngcontent-%COMP%] {\n  border-right: 1px dashed #e3e3e3;\n}\n\n.wtd[_ngcontent-%COMP%] {\n  width: 441px;\n}\n\n.wtd1[_ngcontent-%COMP%] {\n  width: 600px;\n}\n\n.wtd1[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.wtd2[_ngcontent-%COMP%] {\n  width: 900px;\n}\n\nspan[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  border-bottom: 1px solid black;\n}\n\n.spli[_ngcontent-%COMP%] {\n  border-bottom: 1px solid black !important;\n}\n\n.ins[_ngcontent-%COMP%] {\n  border: none;\n  border-bottom: 1px solid black;\n  width: 400px;\n}\n\n.wtd7[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100px !important;\n  border: none;\n}\n\n.wtd8[_ngcontent-%COMP%] {\n  width: 160px !important;\n}\n\n.ind[_ngcontent-%COMP%] {\n  border: none;\n  border-bottom: 1px solid black;\n}\n\n.sl[_ngcontent-%COMP%] {\n  width: 30px;\n}\n\n.sl3[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  width: 100px;\n}\n\n.sl3[_ngcontent-%COMP%] {\n  width: 120px;\n}\n\n.w1[_ngcontent-%COMP%] {\n  width: 500px;\n}\n\n.w1[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 216px;\n  border: none;\n}\n\n.pdf_heading[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.button1[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 400;\n  width: 170px;\n  border: none;\n  padding: 5px;\n  background-color: #49a2d7;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n}\n\n.sizes[_ngcontent-%COMP%] {\n  width: 601px;\n  height: 600px;\n}\n\n.sizem[_ngcontent-%COMP%] {\n  width: 700px;\n  height: 900px;\n}\n\n.customDropdown[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  font-size: 14px;\n  padding-left: 12px;\n  padding-right: 10px;\n  padding-top: 5px;\n  height: 32px;\n  border-radius: 2px;\n  margin-right: 12px;\n  cursor: pointer;\n  z-index: 1;\n}\n\n.customDropdown[_ngcontent-%COMP%]:hover {\n  border: 1px solid #4b74ff !important;\n  color: #4b74ff !important;\n}\n\n.dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  position: relative;\n  background: white;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  z-index: 1;\n  border-radius: 6px;\n  transform: translate(-14px, 4px);\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  cursor: pointer;\n  padding: 4px 6px;\n  min-width: 70px;\n  color: black;\n  transition: 0.4s ease;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #49a2d7;\n  color: white;\n}\n\n.customDropdown[_ngcontent-%COMP%]   .dropIco[_ngcontent-%COMP%] {\n  margin-left: 7px;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: black;\n  padding: 6px 10px;\n}\n\n.customDropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.customDropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.topright[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n}\n\n.button2[_ngcontent-%COMP%] {\n  font-family: \"Nunito Sans\", sans-serif !important;\n  font-size: 12px;\n  width: 3rem;\n  height: 2rem;\n  font-weight: 200;\n  margin-right: 1rem;\n  background-color: RGB(81, 174, 229);\n  border-radius: 20px;\n  border: none;\n  outline: none;\n  color: RGB(255, 255, 255);\n}\n\n.display-4[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: #606670;\n  font-size: 16px;\n  padding-bottom: 10px;\n  margin-bottom: 10px;\n}\n\n.display-5[_ngcontent-%COMP%] {\n  width: 400px;\n  font-weight: 400;\n  color: #606670;\n  font-size: 24px;\n  border-bottom: 4px solid #49A2D7;\n  padding-bottom: 10px;\n  margin-bottom: 40px;\n}\n\n.submitBTN[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  width: 160px;\n  height: 40px;\n  border: 2px white solid;\n  border-radius: 20px;\n  background-color: #51AEE5;\n  font-size: 12px;\n  color: #ffffff;\n}\n\n.heading[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 20px;\n  font-weight: 700;\n  color: #323e4a;\n}\n\n.filter[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  color: #ffffff !important;\n  font-weight: 100;\n  font-family: Poppins, sans-serif;\n  font-size: 12px;\n  background-color: #49A2D7;\n  border: none;\n  border-radius: 5px;\n}\n\n.table-row1[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: black !important;\n  font-weight: 400 !important;\n}\n\n.table-row1[_ngcontent-%COMP%]:hover {\n  background: #f6f9ff !important;\n  border-left: 5px solid #49a2d7;\n}\n\n.content_top_common[_ngcontent-%COMP%]   .content-wrap[_ngcontent-%COMP%] {\n  left: 0px !important;\n  width: 100%;\n  padding-left: 0 !important;\n  flex: 1 0 auto;\n  padding-right: 0px;\n}\n\n.float_right_page[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.import_export_sec[_ngcontent-%COMP%]   .float_right_page[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\n.import_export_sec[_ngcontent-%COMP%]   .title_dash[_ngcontent-%COMP%] {\n  font-size: 21px;\n  font-weight: 500;\n  margin: 0px;\n}\n\n.float_right_page[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .float_right_page[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 500;\n}\n\n.content_white_background[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  padding: 16px;\n  background: #fff;\n  border-radius: 10px;\n  margin: 0;\n  box-shadow: 0 2px 10px rgba(58, 53, 65, 0.1019607843);\n}\n\n.form-control.search_box_new[_ngcontent-%COMP%] {\n  width: 50%;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border-radius: 30px;\n  height: 40px;\n  border: 1px solid #e5e5e5;\n}\n\n.change_theheading[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #333;\n  padding: 14px 20px;\n}\n\n.change_theheading[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 400;\n  color: #999;\n  padding: 14px 20px;\n}\n\n.tag_list[_ngcontent-%COMP%] {\n  display: inline-block;\n  border: 1px solid #51AEE5;\n  color: #51AEE5;\n  font-size: 14px;\n  font-weight: 400;\n  padding: 8px 17px;\n  border-radius: 30px;\n}\n\n.tag_list_left[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0 7px 0 0px;\n}\n\n.table_list_newss[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 0px 0 8px;\n}\n\n.table_list_newss[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  font-weight: 400;\n  margin: 7px 0 9px 0;\n  font-size: 15px;\n}\n\n.select_bg_new[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  margin: 0 0 11px 0;\n  font-size: 18px;\n  color: #070707;\n  font-weight: 500;\n}\n\n.right_buttons_new[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.bc.new_table_lits_view[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.bc.new_table_lits_view[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.wtd4[_ngcontent-%COMP%] {\n  color: #51AEE5;\n  font-weight: 500;\n  padding: 10px 17px;\n  font-size: 15px;\n}\n\n.bc.new_table_lits_view[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.wtd3[_ngcontent-%COMP%] {\n  color: #777777;\n  font-weight: 400;\n  font-size: 14px;\n  padding: 10px 17px;\n}\n\n.text_newp[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  font-weight: 400;\n  color: #777777;\n  font-size: 14px;\n}\n\n.new_table_lits_view[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  font-weight: 400;\n  color: #777777;\n  font-size: 14px;\n}\n\n.tablefulld_width[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  font-weight: 400;\n  color: #777777;\n  font-size: 14px;\n}\n\n.Purpose_auto_serah[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 500px;\n  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.5215686275);\n  border-radius: 5px;\n  background-color: #fff;\n  margin-bottom: 20px;\n  min-height: 70px;\n  max-height: 250px;\n  overflow: auto;\n  position: absolute;\n  display: none;\n}\n\n.Purpose_auto_serah[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 14px 21px;\n  margin: 0;\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  gap: 11px;\n}\n\n.Purpose_auto_serah[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 7px 0;\n  margin: 0;\n  display: inline-block;\n  width: 100%;\n  font-size: 15px;\n  font-weight: 500;\n  color: #777;\n  border-radius: 6px;\n  cursor: pointer;\n}\n\n.Purpose_auto_serah[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  color: #218bc3;\n}\n\n.d-flex[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n\n.custom-modal[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.bg-black-opacity[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.231372549);\n  display: none;\n  z-index: 99999;\n}\n\n.modal[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1050;\n  overflow: hidden;\n  outline: 0;\n  max-height: 600px;\n}\n\n.modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n  max-width: 100%;\n  width: 960px;\n}\n\n.appending-search-text[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  padding: 20px;\n  flex-wrap: wrap;\n  align-items: baseline;\n  justify-content: flex-start;\n  width: 100%;\n  height: 380px;\n  overflow: auto;\n  margin-left: 40px;\n}\n\n.class-append-text[_ngcontent-%COMP%] {\n  text-align: center;\n  border: 1px solid #51AEE5;\n  border-radius: 50px;\n  padding: 9px 32px;\n  color: #51AEE5;\n  margin: 8px 0;\n  display: inline-block;\n  cursor: pointer;\n}\n\n.modal-body[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-radius: 50px;\n  height: 50px;\n}\n\n.btn-tripartite-agreement[_ngcontent-%COMP%] {\n  background-color: transparent;\n  outline: none;\n  border: none;\n  font-size: 15px;\n  color: #72768a;\n  width: 80px;\n}\n\n.Tripartite-agreement[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.btn-Shipping-Bill-number[_ngcontent-%COMP%] {\n  background-color: transparent;\n  outline: none;\n  border: none;\n  font-size: 15px;\n  color: #72768a;\n  width: 80px;\n}\n\n.new-value[_ngcontent-%COMP%] {\n  color: #0c354d;\n}\n\n.class-append-text-1[_ngcontent-%COMP%] {\n  flex-basis: 89%;\n  text-align: center;\n  border: 1px solid #51AEE5;\n  border-radius: 50px;\n  padding: 10px;\n  color: #51aee5;\n  cursor: pointer;\n  margin-top: 0;\n}\n\n.appending-search-text-1[_ngcontent-%COMP%] {\n  flex-basis: 90%;\n  max-height: 380px;\n  min-height: auto;\n  height: auto;\n}\n\n.form-select[_ngcontent-%COMP%] {\n  text-decoration: none;\n  border: none;\n  background: none;\n  color: #49a2d7;\n  width: 200px;\n  padding: 4px;\n  border: 2px solid;\n  border-radius: 5px;\n}\n\n.form-select-1[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 15px;\n  border-radius: 50px;\n  padding-left: 30px;\n}\n\n.toggle-button[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background: #51AEE5 !important;\n  color: #fff;\n  box-shadow: none !important;\n  outline: none;\n}\n\n.toggle-button[_ngcontent-%COMP%]   .active1[_ngcontent-%COMP%] {\n  background: #FC5E5E;\n  color: white;\n}\n\n.toggle-button[_ngcontent-%COMP%]   .removebg[_ngcontent-%COMP%] {\n  background: white;\n  color: black;\n}\n\n.no-button[_ngcontent-%COMP%] {\n  float: left;\n  padding: 0 10px;\n  margin: 0;\n  height: 32px;\n  border-radius: 0;\n  background: #FC5E5E;\n  border: 1px solid #FC5E5E;\n  border-top-left-radius: 6px;\n  border-bottom-left-radius: 6px;\n}\n\n.yes-button[_ngcontent-%COMP%] {\n  float: left;\n  padding: 0 10px;\n  margin: 0;\n  border-radius: 0;\n  height: 32px;\n  background: #fff;\n  border: 1px solid #D9D9D9;\n  color: #777;\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n\n.remove-no-button[_ngcontent-%COMP%] {\n  float: left;\n  padding: 0 10px;\n  margin: 0;\n  border-radius: 0;\n  height: 32px;\n  background: #fff;\n  border: 1px solid #D9D9D9;\n  color: #777;\n  border-bottom-left-radius: 6px;\n  border-top-left-radius: 6px;\n}\n\n.middle_data_new_se[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 500px;\n}\n\n.border_bottt[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  border-bottom: 1px solid #E1E1E1;\n  margin: 7px 0 21px 0;\n}\n\n.new_upbuttons[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #ced4da;\n  display: inline-block;\n  width: 100%;\n  height: 36px;\n  border-radius: 4px;\n}\n\n.middle_data_new_se[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #999999;\n}\n\n#new_popups_added[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  padding-top: 20px;\n}\n\n.modal-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #999;\n}\n\n.toggle-button[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.Select_Shipping[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #222;\n  padding: 0px;\n}\n\n.Select_Shipping[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #222;\n  padding: 0px;\n}\n\n.space_div[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n}\n\n#mainId[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  line-height: 31px;\n  font-size: 14px;\n  padding: 2px 0;\n  color: #999;\n}\n\n#padding_common[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  font-size: 14px;\n  color: #999;\n}\n\n.span_space[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 4px;\n}\n\n.uplod_doc[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fff;\n  border: 1px solid #D9D9D9;\n  border-radius: 0 5px 5px 0;\n  height: 35px;\n}\n\n.collepse-btn-input[_ngcontent-%COMP%] {\n  margin: auto;\n  margin-left: -22px;\n}\n\niframe[_ngcontent-%COMP%]   #toolbar[_ngcontent-%COMP%]   #end[_ngcontent-%COMP%]   #downloads[_ngcontent-%COMP%]   #download[_ngcontent-%COMP%]   #icon[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cG9ydC1ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0NBQUE7QUFDSjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBQ0E7RUFDSSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFFSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUNBO0VBQ0ksa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFFSjs7QUFFQTtFQUNJLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSw0QkFBQTtBQUNKOztBQUVBO0VBQ0ksa0NBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxvQ0FBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtBQUNKOztBQUVBO0VBQ0ksb0NBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSw4QkFBQTtBQUNKOztBQUdBO0VBQ0ksOEJBQUE7QUFBSjs7QUFJQTtFQUNJLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQURKOztBQUlBOztFQUVJLDhCQUFBO0FBREo7O0FBVUE7RUFDSSxhQUFBO0FBUEo7O0FBVUE7RUFDSSxpQkFBQTtFQUNBLDBCQUFBO0FBUEo7O0FBVUE7RUFDSSxjQUFBO0FBUEo7O0FBVUE7O0VBR0ksaUNBQUE7QUFSSjs7QUFXQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQVJKOztBQVdBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQVJKOztBQVdBO0VBQ0ksNEJBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUNBQUE7QUFSSjs7QUFXQTtFQUNJLDZDQUFBO0VBSUEsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFYSjs7QUFjQTtFQUNJLHlEQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBWEo7O0FBY0E7RUFFSSw2Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7QUFaSjs7QUFlQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQVpKOztBQWVBO0VBQ0ksU0FBQTtBQVpKOztBQWVBOzs7RUFHSSxhQUFBO0FBWko7O0FBZUE7RUFDSSxtQkFBQTtFQUNBLDZDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0FBWko7O0FBZUE7RUFDSSxtQkFBQTtFQUNBLDZDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0FBWko7O0FBZUE7RUFDSSxtQkFBQTtFQUNBLDZDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0FBWko7O0FBZUE7RUFDSSw4QkFBQTtBQVpKOztBQWVBO0VBQ0ksOEJBQUE7QUFaSjs7QUFlQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFaSjs7QUFlQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FBWko7O0FBZUE7RUFDSSxXQUFBO0VBQ0EsU0FBQTtBQVpKOztBQWVBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0FBWko7O0FBZUE7RUFDSSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBWko7O0FBZUE7RUFDSSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBWko7O0FBZUE7RUFDSSxvQkFBQTtBQVpKOztBQWVBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBWko7O0FBZUE7RUFDSSx1QkFBQTtBQVpKOztBQWVBO0VBQ0kseUNBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FBWko7O0FBZUE7O0VBRUksNkJBQUE7QUFaSjs7QUFlQTtFQUNJLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBWko7O0FBZUE7RUFDSSx1QkFBQTtBQVpKOztBQWVBO0VBQ0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBWko7O0FBZUE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0FBWko7O0FBZUE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBWko7O0FBZUE7RUFDSSxnQkFBQTtBQVpKOztBQWVBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFaSjs7QUFlQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFaSjs7QUFlQTtFQUNJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQVpKOztBQWVBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtBQVpKOztBQWVBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBWko7O0FBZUE7RUFDSSxnQkFBQTtBQVpKOztBQWVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBWko7O0FBZUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBWko7O0FBZUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBWko7O0FBZUE7RUFDSSxzQkFBQTtFQUNBLHdDQUFBO0VBQ0EsY0FBQTtBQVpKOztBQWVBLDhDQUFBOztBQUVBO0VBQ0ksZUFBQTtBQWJKOztBQWlCQTtFQUNJLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsNENBQUE7RUFDQSxpQkFBQTtBQWRKOztBQWtCQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsNkNBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBZko7O0FBc0JBO0VBQ0kseUJBQUE7RUFDQSx3Q0FBQTtBQW5CSjs7QUFzQkE7RUFDSSxhQUFBO0VBQ0EscUNBQUE7RUFDQSw2Q0FBQTtFQUNBLG1CQUFBO0FBbkJKOztBQXNCQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBbkJKOztBQXNCQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtBQW5CSjs7QUFzQkE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7QUFuQko7O0FBc0JBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFuQko7O0FBc0JBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQW5CSjs7QUFzQkE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQW5CSjs7QUFzQkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFuQko7O0FBc0JBO0VBQ0ksaURBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQW5CSjs7QUFzQkE7RUFDSSx1QkFBQTtBQW5CSjs7QUFzQkE7RUFDSSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFuQko7O0FBc0JBO0VBQ0ksa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBbkJKOztBQXNCQTtFQUVJLHlCQUFBO0FBcEJKOztBQXVCQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtBQXBCSjs7QUF1QkE7RUFDSSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFwQko7O0FBdUJBO0VBQ0ksc0JBQUE7RUFDQSxjQUFBO0FBcEJKOztBQXVCQTtFQUNJLGNBQUE7QUFwQko7O0FBdUJBO0VBQ0ksWUFBQTtBQXBCSjs7QUF1QkE7RUFDSSxnQ0FBQTtBQXBCSjs7QUF1QkE7RUFDSSxnQ0FBQTtBQXBCSjs7QUF1QkE7RUFDSSxZQUFBO0FBcEJKOztBQXVCQTtFQUNJLFlBQUE7QUFwQko7O0FBdUJBO0VBRUksWUFBQTtBQXJCSjs7QUF3QkE7RUFDSSxZQUFBO0FBckJKOztBQXdCQTtFQUNJLFlBQUE7RUFDQSw4QkFBQTtBQXJCSjs7QUF3QkE7RUFDSSx5Q0FBQTtBQXJCSjs7QUF3QkE7RUFDSSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FBckJKOztBQXdCQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtBQXJCSjs7QUF3QkE7RUFDSSx1QkFBQTtBQXJCSjs7QUF3QkE7RUFDSSxZQUFBO0VBQ0EsOEJBQUE7QUFyQko7O0FBd0JBO0VBQ0ksV0FBQTtBQXJCSjs7QUF3QkE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQXJCSjs7QUF3QkE7RUFDSSxZQUFBO0FBckJKOztBQXdCQTtFQUNJLFlBQUE7QUFyQko7O0FBd0JBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFyQko7O0FBd0JBO0VBQ0ksYUFBQTtBQXJCSjs7QUF3QkE7RUFDSSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxvQ0FBQTtBQXJCSjs7QUF3QkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQXJCSjs7QUF3QkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQXJCSjs7QUF3QkE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFyQko7O0FBd0JBO0VBQ0ksb0NBQUE7RUFDQSx5QkFBQTtBQXJCSjs7QUF3QkE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFFQSxpQkFBQTtFQUNBLDJDQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUF0Qko7O0FBMEJBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBdkJKOztBQTBCQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQXZCSjs7QUEwQkE7RUFDSSxnQkFBQTtBQXZCSjs7QUEwQkE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQXZCSjs7QUEwQkE7RUFDSSxjQUFBO0FBdkJKOztBQTBCQTtFQUNJLGNBQUE7QUF2Qko7O0FBMEJBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0FBdkJKOztBQTBCQTtFQUNJLGlEQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBdkJKOztBQTBCQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBdkJKOztBQTBCQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBdkJKOztBQTBCQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQXZCSjs7QUEyQkE7RUFDSSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUF4Qko7O0FBMkJBO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUF4Qko7O0FBMkJBO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7QUF4Qko7O0FBMkJBO0VBQ0ksOEJBQUE7RUFDQSw4QkFBQTtBQXhCSjs7QUEyQkE7RUFDSSxvQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQXhCSjs7QUEyQkE7RUFDSSxZQUFBO0FBeEJKOztBQTJCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBeEJKOztBQTJCQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUF4Qko7O0FBMkJBOztFQUVJLGVBQUE7RUFDQSxnQkFBQTtBQXhCSjs7QUEyQkE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxxREFBQTtBQXhCSjs7QUEyQkE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBeEJKOztBQTJCQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQXhCSjs7QUEyQkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUF4Qko7O0FBMkJBO0VBQ0kscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBeEJKOztBQTJCQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7QUF4Qko7O0FBMkJBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtBQXhCSjs7QUEyQkE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQXhCSjs7QUEyQkE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUF4Qko7O0FBMkJBO0VBQ0ksWUFBQTtBQXhCSjs7QUEyQkE7RUFDSSxXQUFBO0FBeEJKOztBQTJCQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQXhCSjs7QUEyQkE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUF4Qko7O0FBMkJBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQXhCSjs7QUEyQkE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBeEJKOztBQTJCQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUF4Qko7O0FBMkJBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsaURBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQXhCSjs7QUEyQkE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQXhCSjs7QUEyQkE7RUFDSSxjQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUF4Qko7O0FBMkJBO0VBQ0ksY0FBQTtBQXhCSjs7QUEyQkE7RUFDSSxhQUFBO0VBQ0EsU0FBQTtBQXhCSjs7QUEyQkE7RUFDSSxjQUFBO0FBeEJKOztBQTJCQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLDRDQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUF4Qko7O0FBMkJBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUF4Qko7O0FBMkJBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUF4Qko7O0FBMkJBO0VBQ0ksYUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQXhCSjs7QUEyQkE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBeEJKOztBQTJCQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBQXhCSjs7QUEyQkE7RUFDSSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBeEJKOztBQTJCQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUF4Qko7O0FBMkJBO0VBQ0ksNkJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQXhCSjs7QUEyQkE7RUFDSSxjQUFBO0FBeEJKOztBQTJCQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBeEJKOztBQTJCQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQXhCSjs7QUEyQkE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUF4Qko7O0FBMkJBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBeEJKOztBQTJCQTtFQUNJLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtBQXhCSjs7QUEyQkE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUF4Qko7O0FBMkJBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0FBeEJKOztBQTJCQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FBeEJKOztBQTJCQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtBQXhCSjs7QUEyQkE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7QUF4Qko7O0FBMkJBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0FBeEJKOztBQTJCQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7QUF4Qko7O0FBMkJBO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQXhCSjs7QUEyQkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQXhCSjs7QUEyQkE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQXhCSjs7QUEyQkE7RUFDSSxXQUFBO0FBeEJKOztBQTJCQTtFQUNJLFlBQUE7QUF4Qko7O0FBMkJBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUF4Qko7O0FBMkJBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUF4Qko7O0FBMkJBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FBeEJKOztBQTJCQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBeEJKOztBQTJCQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUF4Qko7O0FBMkJBO0VBQ0ksWUFBQTtBQXhCSjs7QUEyQkE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtBQXhCRjs7QUEwQkE7RUFDRSxZQUFBO0VBQ0Usa0JBQUE7QUF2Qko7O0FBeUJBO0VBQ0UsYUFBQTtBQXRCRiIsImZpbGUiOiJleHBvcnQtaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uY29udGVudF90b3BfY29tbW9ue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMzg5cHg7XHJcbiAgbGVmdDogMjQwcHg7XHJcbiAgdG9wOiA4MHB4O1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbi5oZWFkaW5nIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzMyM2U0YTtcclxufVxyXG5cclxuLmRyb3Bkb3duIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi50YWJsZS1oZWFkaW5nIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzc0NzQ3NDtcclxuICAgIC8vb3BhY2l0eTogNTAlO1xyXG59XHJcblxyXG4uYm94LXNoYWRvdyB7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50YWJsZS1wYWRkaW5nIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51cGxvYWQtYnV0dG9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTJweDtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OWEyZDc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAwcHggIzQ5YTJkNztcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi50YWJsZS1yb3cge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM3MDc2ODM7XHJcbn1cclxuXHJcbi50YWJsZS1yb3c6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2Y2ZjlmZiAhaW1wb3J0YW50O1xyXG4gICAgLy9ib3JkZXItbGVmdDogNXB4IHNvbGlkICM0OWEyZDc7XHJcbn1cclxuXHJcbi5jb2x1bUg6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2Y2ZjlmZiAhaW1wb3J0YW50O1xyXG4gICAgLy9ib3JkZXItbGVmdDogNXB4IHNvbGlkICM0OWEyZDc7XHJcbn1cclxuXHJcbi5jb2x1bUgge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBkYXNoZWQgI2UxZTFlMTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IGRhc2hlZCAjZTFlMWUxO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG59XHJcblxyXG4udGFibGUgdGQsXHJcbi50YWJsZSB0aCB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggZGFzaGVkICNlMWUxZTE7XHJcbn1cclxuXHJcbi8vIHNlbGVjdCB7XHJcbi8vICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbi8vICAgICBib3JkZXI6IG5vbmU7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4vLyAgICAgY29sb3I6ICM0OWEyZDc7XHJcbi8vIH1cclxuc2VsZWN0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5yZWN0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbWluLXdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zYi1ubyB7XHJcbiAgICBjb2xvcjogIzQ5YTJkNztcclxufVxyXG5cclxudGgsXHJcbnRkIHtcclxuICAgIC8vbWluLWhlaWdodDogNTBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmltYWdlIHtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTJmdnB4O1xyXG59XHJcblxyXG4uaW1hZ2UyIHtcclxuICAgIG1hcmdpbi10b3A6IDIycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEzcHg7XHJcbn1cclxuXHJcbi5mb3JtIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBoZWlnaHQ6IDMxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG59XHJcblxyXG4uZm9ybSBwIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMjBweDtcclxuICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gaGVpZ2h0OiAyM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIGNvbG9yOiAjMzAzMDMwO1xyXG59XHJcblxyXG4uZm9ybSBpbnB1dCB7XHJcbiAgICBmb250LWZhbWlseTogXCJFdXJvcGFOdW92YS1SZWd1bGFyXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHdpZHRoOiA4OSU7XHJcbiAgICBoZWlnaHQ6IDMxM3B4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uZm9ybSAuZm9ybV9pbm5lciBidXR0b24ge1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IDM2JTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzNi41JTtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OWEyZDc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAwcHggIzQ5YTJkNztcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5mb3JtIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTQ5MTc0O1xyXG4gICAgY29sb3I6ICMwYzU2NDU7XHJcbn1cclxuXHJcbi5mb3JtIGJ1dHRvbjphY3RpdmUge1xyXG4gICAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyxcclxudGV4dGFyZWE6Zm9jdXMsXHJcbnNlbGVjdDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ueGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5YTJkNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IDBweCAjNDlhMmQ3O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLnlidXR0b24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYzM1NGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAwcHggIzQ5YTJkNztcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi56YnV0dG9uIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTQ3NTUxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggMHB4ICM0OWEyZDc7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uYm9yZGVyMiB7XHJcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICM1ZmU2ZTc7XHJcbn1cclxuXHJcbi5ib3JkZXIzIHtcclxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2U3ODQ1ZjtcclxufVxyXG5cclxuLmZvcm0td3JhcHBlcjEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZvcm0td3JhcHBlcjEgZGl2IHRkIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDUuNSU7XHJcbn1cclxuXHJcbi5mb3JtLXdyYXBwZXIxLnRkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgd2lkdGg6IDclO1xyXG59XHJcblxyXG4uZnVsbC1pbnB1dCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMThweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBoZWlnaHQ6IDc0cHg7XHJcbiAgICB3aWR0aDogMTc3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggOHB4IDRweCAjZWVlZWZhO1xyXG59XHJcblxyXG4uc21hbGxsLWlucHV0IHtcclxuICAgIHdpZHRoOiAxNjBweCAhaW1wb3J0YW50O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q1ZGJlODtcclxuICAgIGhlaWdodDogMzVweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA1cHggMHB4IDVweCA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzcyNzY4YTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBwYWRkaW5nOiAwIDhweCAwIDA7XHJcbn1cclxuXHJcbmxhYmVsIHNwYW4ge1xyXG4gICAgcGFkZGluZzogMCAwcHggMCA1cHg7XHJcbn1cclxuXHJcbi5zaDEge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM2MDY2NzA7XHJcbn1cclxuXHJcbi5zcyB7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuI2N1c3RvbWVycyB7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIzcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkZGQ7XHJcbn1cclxuXHJcbiNjdXN0b21lcnMgdGQsXHJcbiNjdXN0b21lcnMgdGgge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbn1cclxuXHJcbiNjdXN0b21lcnMgdGgge1xyXG4gICAgaGVpZ2h0OiA1MnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbn1cclxuXHJcbiNjdXN0b21lcnMgdGQge1xyXG4gICAgaGVpZ2h0OiA1MnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50YWIxIFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgLyogaGlkaW5nIHRoZSBpbnB1dHMgKi9cclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGhlaWdodDogMTdweDtcclxuICAgIHdpZHRoOiAxN3B4O1xyXG4gICAgY29sb3I6ICM0OWEyZDc7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4udGFiMSBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCtpbnB1dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZiO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNGM0O1xyXG59XHJcblxyXG4ubGFiZWwxIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xyXG4gICAgY29sb3I6ICM2MDY2NzA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG59XHJcblxyXG4udGFiMSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uYXQge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuLmN0YiB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDlhMmQ3O1xyXG4gICAgcGFkZGluZzogMTJweCAzMHB4IDExcHggMzBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5yYWRpbzEgW3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgICAvKiBoaWRpbmcgdGhlIGlucHV0cyAqL1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxN3B4O1xyXG4gICAgd2lkdGg6IDE3cHg7XHJcbiAgICBjb2xvcjogIzQ5YTJkNztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM0OWEyZDc7XHJcbn1cclxuXHJcbi5yYWRpbzEgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQraW5wdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JmYjtcclxuICAgIGJvcmRlci1jb2xvcjogIzRjNDtcclxufVxyXG5cclxuLmxhYmVsMSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTJweDtcclxuICAgIGNvbG9yOiAjNjA2NjcwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5yYWRpbzEge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLnN0cDEge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5zdHAyIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5zdHAzIHtcclxuICAgIGNvbG9yOiAjNGE0YTRhO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLm9mMSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgZm9udDogMTZweC8yNnB4IEdlb3JnaWEsIEdhcmFtb25kLCBTZXJpZjtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4vKiAgRGFzaGJvYXJkIE1haW4gUGFnZSBTdHlsaW5nIChGcm9udCBQYWdlKSAqL1xyXG5cclxudGFibGUgdGJvZHkge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vL1NJREUgUEVPUExFIExJU1RcclxuLnNpZGVfZG9jdW1lbnRfbGlzdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTcwdmg7XHJcbiAgICBib3JkZXItcmlnaHQ6IDAuM3B4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyN3B4O1xyXG59XHJcblxyXG4vL1BST0ZJTEUgQ0xBU1NTU1MvXHJcbi5wcm9maWxlX2NsYXNzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1ib3R0b206IDAuM3B4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIHBhZGRpbmc6IDMlIDYlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8vIC5wcm9maWxlX2NsYXNzOmhvdmVyIHtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZkO1xyXG4vLyAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgcmdiKDYxLCAxMTYsIDE5Nyk7XHJcbi8vIH1cclxuLmFjdGl2ZUJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZkO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCByZ2IoNjEsIDExNiwgMTk3KTtcclxufVxyXG5cclxuLnRhYmxlX3RvcCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyOC41NSUgMzMlIDM2JTtcclxuICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnZvaWNlc190YWIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmQ7XHJcbn1cclxuXHJcbi5pbnZvaWNlc19pbm5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmQ7XHJcbn1cclxuXHJcbi5pbm5lcl90YWJfY29udGVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaW52b2ljZV9oZWFkIHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbn1cclxuXHJcbi5zZXJpYWxfZGV0YWlsIHtcclxuICAgIHdpZHRoOiA5MyU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogcmlnaHQ7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbl90YWIge1xyXG4gICAgd2lkdGg6IDc3MHB4O1xyXG4gICAgaGVpZ2h0OiAxMzg3cHg7XHJcbn1cclxuXHJcbi5mb3JtX2lubmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLm9wdCB7XHJcbiAgICBmb250LWZhbWlseTogJ051bml0byBTYW5zJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiAxNjBweDtcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBSR0IoODEsIDE3NCwgMjI5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIGNvbG9yOiBSR0IoMjU1LCAyNTUsIDI1NSk7XHJcbn1cclxuXHJcbmlucHV0IDo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHJnYigyMTIsIDI5LCAyOSk7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1pbi13aWR0aDogNjBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgY29sb3I6ICMwZThjZDQ7XHJcbn1cclxuXHJcbi5idXR0b24xIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtaW4td2lkdGg6IDYwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW46IDBweCAwIDIycHggMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBlOGNkNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNsYXNzMSB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjOTdjY2ViO1xyXG4gICAgY29sb3I6ICM5N2NjZWIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyPmRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbjogMTlweCAyMHB4IDlweCAwO1xyXG59XHJcblxyXG4uZmxleC1jb250YWluZXI+ZGl2IC5teV9jbGFzcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgY29sb3I6ICMwZThjZDQ7XHJcbn1cclxuXHJcbi5uZy1zdGFyLWluc2VydGVkLm15X2NsYXNzIHtcclxuICAgIGNvbG9yOiAjMGU4Y2Q0O1xyXG59XHJcblxyXG4uaGVhZGluZyB7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbnRyLmJvcmRlcjEge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggZGFzaGVkICNlM2UzZTM7XHJcbn1cclxuXHJcbnRkLmJvcmRlcjEge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggZGFzaGVkICNlM2UzZTM7XHJcbn1cclxuXHJcbi53dGQge1xyXG4gICAgd2lkdGg6IDQ0MXB4O1xyXG59XHJcblxyXG4ud3RkMSB7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbn1cclxuXHJcbi53dGQxIGlucHV0IHtcclxuICAgIC8vIHdpZHRoOiA0MDBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLnd0ZDIge1xyXG4gICAgd2lkdGg6IDkwMHB4O1xyXG59XHJcblxyXG5zcGFuIGlucHV0IHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLnNwbGkge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbnMge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG4ud3RkNyBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLnd0ZDgge1xyXG4gICAgd2lkdGg6IDE2MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbmQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uc2wge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbn1cclxuXHJcbi5zbDMgaW5wdXQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG4uc2wzIHtcclxuICAgIHdpZHRoOiAxMjBweDtcclxufVxyXG5cclxuLncxIHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxufVxyXG5cclxuLncxIGlucHV0IHtcclxuICAgIHdpZHRoOiAyMTZweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLnBkZl9oZWFkaW5nIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5idXR0b24xIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB3aWR0aDogMTcwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDlhMmQ3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggMHB4ICM0OWEyZDc7XHJcbn1cclxuXHJcbi5zaXplcyB7XHJcbiAgICB3aWR0aDogNjAxcHg7XHJcbiAgICBoZWlnaHQ6IDYwMHB4XHJcbn1cclxuXHJcbi5zaXplbSB7XHJcbiAgICB3aWR0aDogNzAwcHg7XHJcbiAgICBoZWlnaHQ6IDkwMHB4XHJcbn1cclxuXHJcbi5jdXN0b21Ecm9wZG93biB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5jdXN0b21Ecm9wZG93bjpob3ZlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNGI3NGZmICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzRiNzRmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZHJvcGRvd24tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLy8gbWluLXdpZHRoOiA3MHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNHB4LCA0cHgpO1xyXG4gICAgLy8gaGVpZ2h0OiAxNTBweDtcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiA0cHggNnB4O1xyXG4gICAgbWluLXdpZHRoOiA3MHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xyXG59XHJcblxyXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OWEyZDc7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jdXN0b21Ecm9wZG93biAuZHJvcEljbyB7XHJcbiAgICBtYXJnaW4tbGVmdDogN3B4O1xyXG59XHJcblxyXG4uZHJvcGRvd24tY29udGVudCBwIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogNnB4IDEwcHg7XHJcbn1cclxuXHJcbi5jdXN0b21Ecm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmN1c3RvbURyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4udG9wcmlnaHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5idXR0b24yIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHdpZHRoOiAzcmVtO1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IFJHQig4MSwgMTc0LCAyMjkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjb2xvcjogUkdCKDI1NSwgMjU1LCAyNTUpO1xyXG59XHJcblxyXG4uZGlzcGxheS00IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzYwNjY3MDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmRpc3BsYXktNSB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICM2MDY2NzA7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzQ5QTJENztcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLnN1Ym1pdEJUTiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyOiAycHggd2hpdGUgc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUxQUVFNTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkaW5nIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzMyM2U0YTtcclxufVxyXG5cclxuLmZpbHRlciB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnMsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDlBMkQ3O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4udGFibGUtcm93MSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRhYmxlLXJvdzE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2Y2ZjlmZiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDlhMmQ3O1xyXG59XHJcblxyXG4uY29udGVudF90b3BfY29tbW9uIC5jb250ZW50LXdyYXAge1xyXG4gICAgbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgZmxleDogMSAwIGF1dG87XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5mbG9hdF9yaWdodF9wYWdlIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmltcG9ydF9leHBvcnRfc2VjIC5mbG9hdF9yaWdodF9wYWdlIG9sIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4uaW1wb3J0X2V4cG9ydF9zZWMgLnRpdGxlX2Rhc2gge1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4uZmxvYXRfcmlnaHRfcGFnZSAuYnJlYWRjcnVtYiBsaSBhLFxyXG4uZmxvYXRfcmlnaHRfcGFnZSAuYnJlYWRjcnVtYiBsaSB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uY29udGVudF93aGl0ZV9iYWNrZ3JvdW5kIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCAjM2EzNTQxMWE7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wuc2VhcmNoX2JveF9uZXcge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbn1cclxuXHJcbi5jaGFuZ2VfdGhlaGVhZGluZyB0aGVhZCB0ciB0aCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbn1cclxuXHJcbi5jaGFuZ2VfdGhlaGVhZGluZyB0Ym9keSB0ciB0ZCB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbn1cclxuXHJcbi50YWdfbGlzdCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTFBRUU1O1xyXG4gICAgY29sb3I6ICM1MUFFRTU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgcGFkZGluZzogOHB4IDE3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG59XHJcblxyXG4udGFnX2xpc3RfbGVmdCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAwIDdweCAwIDBweDtcclxufVxyXG5cclxuLnRhYmxlX2xpc3RfbmV3c3MgbGFiZWwge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIDBweCAwIDhweDtcclxufVxyXG5cclxuLnRhYmxlX2xpc3RfbmV3c3MgaDMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luOiA3cHggMCA5cHggMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLnNlbGVjdF9iZ19uZXcge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgMCAxMXB4IDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogIzA3MDcwNztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5yaWdodF9idXR0b25zX25ldyB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5iYy5uZXdfdGFibGVfbGl0c192aWV3IHRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlXHJcbn1cclxuXHJcbi5iYy5uZXdfdGFibGVfbGl0c192aWV3IHRhYmxlIHRyIHRkLnd0ZDQge1xyXG4gICAgY29sb3I6ICM1MUFFRTU7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgcGFkZGluZzogMTBweCAxN3B4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4uYmMubmV3X3RhYmxlX2xpdHNfdmlldyB0YWJsZSB0ciB0ZC53dGQzIHtcclxuICAgIGNvbG9yOiAjNzc3Nzc3O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTdweDtcclxufVxyXG5cclxuLnRleHRfbmV3cCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzc3Nzc3NztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLm5ld190YWJsZV9saXRzX3ZpZXcgcCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzc3Nzc3NztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnRhYmxlZnVsbGRfd2lkdGgge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICM3Nzc3Nzc7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5QdXJwb3NlX2F1dG9fc2VyYWgge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggOHB4ICMwMDAwMDA4NTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgbWluLWhlaWdodDogNzBweDtcclxuICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uUHVycG9zZV9hdXRvX3NlcmFoIHVsIHtcclxuICAgIHBhZGRpbmc6IDE0cHggMjFweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDExcHg7XHJcbn1cclxuXHJcbi5QdXJwb3NlX2F1dG9fc2VyYWggdWwgbGkge1xyXG4gICAgcGFkZGluZzogN3B4IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzc3NztcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLlB1cnBvc2VfYXV0b19zZXJhaCB1bCBsaTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzIxOGJjMztcclxufVxyXG5cclxuLmQtZmxleCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4uY3VzdG9tLW1vZGFsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uYmctYmxhY2stb3BhY2l0eSB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAzYjtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB6LWluZGV4OiA5OTk5OTtcclxufVxyXG5cclxuLm1vZGFsIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDEwNTA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xyXG59XHJcblxyXG4ubW9kYWwgLm1vZGFsLWRpYWxvZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB3aWR0aDogOTYwcHg7XHJcbn1cclxuXHJcbi5hcHBlbmRpbmctc2VhcmNoLXRleHQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMTBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzgwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG59XHJcblxyXG4uY2xhc3MtYXBwZW5kLXRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzUxQUVFNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiA5cHggMzJweDtcclxuICAgIGNvbG9yOiAjNTFBRUU1O1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm1vZGFsLWJvZHkgaW5wdXQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLmJ0bi10cmlwYXJ0aXRlLWFncmVlbWVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogIzcyNzY4YTtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG59XHJcblxyXG4uVHJpcGFydGl0ZS1hZ3JlZW1lbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5idG4tU2hpcHBpbmctQmlsbC1udW1iZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICM3Mjc2OGE7XHJcbiAgICB3aWR0aDogODBweDtcclxufVxyXG5cclxuLm5ldy12YWx1ZSB7XHJcbiAgICBjb2xvcjogIzBjMzU0ZDtcclxufVxyXG5cclxuLmNsYXNzLWFwcGVuZC10ZXh0LTEge1xyXG4gICAgZmxleC1iYXNpczogODklO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzUxQUVFNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY29sb3I6ICM1MWFlZTU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4uYXBwZW5kaW5nLXNlYXJjaC10ZXh0LTEge1xyXG4gICAgZmxleC1iYXNpczogOTAlO1xyXG4gICAgbWF4LWhlaWdodDogMzgwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uZm9ybS1zZWxlY3Qge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGNvbG9yOiAjNDlhMmQ3O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5mb3JtLXNlbGVjdC0xIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbi50b2dnbGUtYnV0dG9uIC5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogIzUxQUVFNSFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi50b2dnbGUtYnV0dG9uIC5hY3RpdmUxIHtcclxuICAgIGJhY2tncm91bmQ6ICNGQzVFNUU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi50b2dnbGUtYnV0dG9uIC5yZW1vdmViZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLm5vLWJ1dHRvbiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkM1RTVFO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0ZDNUU1RTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDZweDtcclxufVxyXG5cclxuLnllcy1idXR0b24ge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEOUQ5RDk7XHJcbiAgICBjb2xvcjogIzc3NztcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNnB4O1xyXG59XHJcblxyXG4ucmVtb3ZlLW5vLWJ1dHRvbiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Q5RDlEOTtcclxuICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNnB4O1xyXG59XHJcblxyXG4ubWlkZGxlX2RhdGFfbmV3X3NlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA1MDBweDtcclxufVxyXG5cclxuLmJvcmRlcl9ib3R0dCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTFFMUUxO1xyXG4gICAgbWFyZ2luOiA3cHggMCAyMXB4IDA7XHJcbn1cclxuXHJcbi5uZXdfdXBidXR0b25zIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5taWRkbGVfZGF0YV9uZXdfc2UgaDMge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICM5OTk5OTk7XHJcbn1cclxuXHJcbiNuZXdfcG9wdXBzX2FkZGVkIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIgaDUge1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbn1cclxuXHJcbi50b2dnbGUtYnV0dG9uIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLlNlbGVjdF9TaGlwcGluZyB0YWJsZSB0aGVhZCB0ciB0aCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICMyMjI7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5TZWxlY3RfU2hpcHBpbmcgdGFibGUgdGJvZHkgdHIgdGQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4uc3BhY2VfZGl2IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jbWFpbklkIHAge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsaW5lLWhlaWdodDogMzFweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBhZGRpbmc6IDJweCAwO1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbn1cclxuXHJcbiNwYWRkaW5nX2NvbW1vbiB0ZCB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG59XHJcblxyXG4uc3Bhbl9zcGFjZSBzcGFuIHtcclxuICAgIHBhZGRpbmc6IDRweDtcclxufVxyXG5cclxuLnVwbG9kX2RvYyAuYnRuLWRhbmdlcntcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNEOUQ5RDk7XHJcbiAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG59XHJcbi5jb2xsZXBzZS1idG4taW5wdXR7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yMnB4O1xyXG59XHJcbmlmcmFtZSAjdG9vbGJhciAjZW5kICNkb3dubG9hZHMgI2Rvd25sb2FkICNpY29ue1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuIl19 */"]
  });
  return ExportHomeComponent;
})();

/***/ }),

/***/ 48601:
/*!***************************************************************!*\
  !*** ./src/app/home/Export/export-home/export-home.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExportHomeModule": () => (/* binding */ ExportHomeModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../confirm-dialog/confirm-dialog.service */ 12579);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _shared_Data_Servies_shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared-Data-Servies/shared-data.service */ 10241);
/* harmony import */ var _shared_home_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared-home.module */ 69408);
/* harmony import */ var _export_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./export-home.component */ 9361);
/* harmony import */ var _upload_doc_upload_doc_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./upload-doc/upload-doc.component */ 96665);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);










let ExportHomeModule = /*#__PURE__*/(() => {
  class ExportHomeModule {}

  ExportHomeModule.ɵfac = function ExportHomeModule_Factory(t) {
    return new (t || ExportHomeModule)();
  };

  ExportHomeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: ExportHomeModule
  });
  ExportHomeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    providers: [_confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialogService, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal, _shared_Data_Servies_shared_data_service__WEBPACK_IMPORTED_MODULE_1__.SharedDataService],
    imports: [_shared_home_module__WEBPACK_IMPORTED_MODULE_2__.SharedHomeModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{
      path: "",
      component: _export_home_component__WEBPACK_IMPORTED_MODULE_3__.ExportHomeComponent
    }])]
  });
  return ExportHomeModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ExportHomeModule, {
    declarations: [_export_home_component__WEBPACK_IMPORTED_MODULE_3__.ExportHomeComponent, _upload_doc_upload_doc_component__WEBPACK_IMPORTED_MODULE_4__.UploadDocComponent],
    imports: [_shared_home_module__WEBPACK_IMPORTED_MODULE_2__.SharedHomeModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_home_Export_export-home_export-home_module_ts.js.map