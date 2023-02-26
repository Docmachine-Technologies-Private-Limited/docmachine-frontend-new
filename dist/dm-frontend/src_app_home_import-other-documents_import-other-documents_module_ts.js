"use strict";
(self["webpackChunkdm_frontend"] = self["webpackChunkdm_frontend"] || []).push([["src_app_home_import-other-documents_import-other-documents_module_ts"],{

/***/ 27893:
/*!*********************************************************************************!*\
  !*** ./src/app/home/import-other-documents/import-other-documents.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImportOtherDocumentsComponent": () => (/* binding */ ImportOtherDocumentsComponent)
/* harmony export */ });
/* harmony import */ var D_Bharathexim_Repo_docmachine_frontend_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _shared_Data_Servies_shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared-Data-Servies/shared-data.service */ 10241);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! xlsx */ 4126);
/* harmony import */ var src_app_service_document_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/document.service */ 76852);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../service/user.service */ 84981);
/* harmony import */ var src_app_service_window_information_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/window-information.service */ 23087);
/* harmony import */ var src_app_service_aprroval_pending_reject_transactions_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/aprroval-pending-reject-transactions.service */ 56869);
/* harmony import */ var _confirm_dialog_box_confirm_dialog_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../confirm-dialog-box/confirm-dialog-box.component */ 43970);
/* harmony import */ var _currency_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../currency.json */ 35743);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _custom_Filter_filter_toggle_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../custom/Filter/filter-toggle.directive */ 72173);





























const _c0 = ["otherDoc"];

function ImportOtherDocumentsComponent_option_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const Buyer_Name_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", Buyer_Name_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", Buyer_Name_r10, " ");
  }
}

function ImportOtherDocumentsComponent_option_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const PI_PO_No_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", PI_PO_No_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", PI_PO_No_r11, " ");
  }
}

function ImportOtherDocumentsComponent_option_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const Origin_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", Origin_r12, " ");
  }
}

function ImportOtherDocumentsComponent_option_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const Currency_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", Currency_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", Currency_r13, " ");
  }
}

function ImportOtherDocumentsComponent_option_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const SB_DATE_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", SB_DATE_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", SB_DATE_r14, " ");
  }
}

function ImportOtherDocumentsComponent_tr_89_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", data_r15.packingListNumber, " ");
  }
}

function ImportOtherDocumentsComponent_tr_89_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ImportOtherDocumentsComponent_tr_89_div_7_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r29);
      const data_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](data_r15.packingListNumber = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", data_r15.packingListNumber);
  }
}

function ImportOtherDocumentsComponent_tr_89_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", data_r15.packingListAmount, " ");
  }
}

function ImportOtherDocumentsComponent_tr_89_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ImportOtherDocumentsComponent_tr_89_div_10_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r34);
      const data_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](data_r15.packingListAmount = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", data_r15.packingListAmount);
  }
}

function ImportOtherDocumentsComponent_tr_89_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", data_r15.currency, " ");
  }
}

function ImportOtherDocumentsComponent_tr_89_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ImportOtherDocumentsComponent_tr_89_div_13_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r39);
      const data_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](data_r15.currency = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", data_r15.currency);
  }
}

function ImportOtherDocumentsComponent_tr_89_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ImportOtherDocumentsComponent_tr_89_button_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r43);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      const data_r15 = ctx_r42.$implicit;
      const i_r16 = ctx_r42.index;
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r41.toSave(data_r15, i_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function ImportOtherDocumentsComponent_tr_89_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ImportOtherDocumentsComponent_tr_89_button_20_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r46);
      const i_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().index;
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r44.toEdit(i_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function ImportOtherDocumentsComponent_tr_89_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ImportOtherDocumentsComponent_tr_89_button_21_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r49);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      const data_r15 = ctx_r48.$implicit;
      const i_r16 = ctx_r48.index;
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r47.handleDelete(data_r15._id, i_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}

function ImportOtherDocumentsComponent_tr_89_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr", 46)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, ImportOtherDocumentsComponent_tr_89_div_6_Template, 2, 1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, ImportOtherDocumentsComponent_tr_89_div_7_Template, 2, 1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, ImportOtherDocumentsComponent_tr_89_div_9_Template, 2, 1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, ImportOtherDocumentsComponent_tr_89_div_10_Template, 2, 1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, ImportOtherDocumentsComponent_tr_89_div_12_Template, 2, 1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, ImportOtherDocumentsComponent_tr_89_div_13_Template, 2, 1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "td", 49)(17, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ImportOtherDocumentsComponent_tr_89_Template_a_click_17_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r51);
      const data_r15 = restoredCtx.$implicit;
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](91);

      ctx_r50.openCreditNote(_r8);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r50.viewCN(data_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](18, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, ImportOtherDocumentsComponent_tr_89_button_19_Template, 2, 0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, ImportOtherDocumentsComponent_tr_89_button_20_Template, 2, 0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](21, ImportOtherDocumentsComponent_tr_89_button_21_Template, 3, 0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx_r7.AprrovalPendingRejectService.truefalse(data_r15["deleteflag"] == "0") || ctx_r7.AprrovalPendingRejectService.truefalse((ctx_r7.USER_DATA == null ? null : ctx_r7.USER_DATA.result == null ? null : ctx_r7.USER_DATA.result.Role_Type) != "Approver"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r15.packingListDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r7.getPipoNumbers(data_r15), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r7.optionsVisibility[i_r16]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r7.optionsVisibility[i_r16]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r7.optionsVisibility[i_r16]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r7.optionsVisibility[i_r16]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r7.optionsVisibility[i_r16]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r7.optionsVisibility[i_r16]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r15.buyerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r7.optionsVisibility[i_r16]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r7.optionsVisibility[i_r16]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r7.optionsVisibility[i_r16]);
  }
}

function ImportOtherDocumentsComponent_ng_template_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 63)(1, "div", 64)(2, "div", 65)(3, "div", 66)(4, "div", 67)(5, "div", 5)(6, "div", 68)(7, "h6", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Packing List");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "iframe", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ImportOtherDocumentsComponent_ng_template_90_Template_button_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r54);
      const modal_r52 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](modal_r52.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()()();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx_r9.viewData, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeResourceUrl"]);
  }
}

let ImportOtherDocumentsComponent = /*#__PURE__*/(() => {
  class ImportOtherDocumentsComponent {
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
      this.filtervisible = false;
      this.USER_DATA = [];
      this.FILTER_VALUE_LIST = [];
      this.ALL_FILTER_DATA = {
        PI_PO_No: [],
        Buyer_Name: [],
        Packing_List_No: [],
        Currency: [],
        DATE: []
      };
    }

    ngOnInit() {
      var _this = this;

      return (0,D_Bharathexim_Repo_docmachine_frontend_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this.wininfo.set_controller_of_width(270, '.content-wrap');

        _this.USER_DATA = yield _this.userService.getUserDetail();

        for (let index = 0; index < _currency_json__WEBPACK_IMPORTED_MODULE_7__?.length; index++) {
          _this.ALL_FILTER_DATA['Currency'].push(_currency_json__WEBPACK_IMPORTED_MODULE_7__[index]['value']);
        }

        console.log("this.USER_DATA", _this.USER_DATA);
        _this.item = [];

        _this.documentService.getPackingListfile("import").subscribe(res => {
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

            if (_this.ALL_FILTER_DATA['Packing_List_No'].includes(value?.packingListNumber) == false) {
              _this.ALL_FILTER_DATA['Packing_List_No'].push(value?.packingListNumber);
            }

            if (_this.ALL_FILTER_DATA['DATE'].includes(value?.packingListDate) == false) {
              _this.ALL_FILTER_DATA['DATE'].push(value?.packingListDate);
            }
          }

          console.log(res, 'getPackingListfile');
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

    openCreditNote(content) {
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
      this.viewData = this.sanitizer.bypassSecurityTrustResourceUrl(a['packingDoc']);
    }

    toSave(data, index) {
      this.optionsVisibility[index] = false;
      console.log(data);
      this.documentService.updatePackingList(data, data._id).subscribe(data => {
        console.log('king123');
        this.toastr.success('Packing List updated successfully.');
      }, error => {
        // this.toastr.error('Invalid inputs, please check!');
        console.log('error');
      });
    }

    newComme() {
      //this.sharedData.changeretunurl('home/otherDoc')
      this.router.navigate(['home/upload', {
        file: 'import',
        document: 'import-packingList'
      }]);
    }

    exportToExcel() {
      const ws = xlsx__WEBPACK_IMPORTED_MODULE_11__.utils.table_to_sheet(this.otherDoc.nativeElement);
      const wb = xlsx__WEBPACK_IMPORTED_MODULE_11__.utils.book_new();
      xlsx__WEBPACK_IMPORTED_MODULE_11__.utils.book_append_sheet(wb, ws, 'Sheet1');
      xlsx__WEBPACK_IMPORTED_MODULE_11__.writeFile(wb, 'packingList.xlsx');
    }

    toEdit(index) {
      this.optionsVisibility[index] = true;
      this.toastr.warning('Packing List Is In Edit Mode');
    }

    handleDelete(id, index) {
      console.log(id, index, 'dfsfhsfgsdfgdss');
      const message = `Are you sure you want to delete this?`;
      const dialogData = new _confirm_dialog_box_confirm_dialog_box_component__WEBPACK_IMPORTED_MODULE_6__.ConfirmDialogModel("Confirm Action", message);
      const dialogRef = this.dialog.open(_confirm_dialog_box_confirm_dialog_box_component__WEBPACK_IMPORTED_MODULE_6__.ConfirmDialogBoxComponent, {
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
          tableName: 'packinglists'
        }).subscribe(res => {
          console.log(res);

          if (res) {
            this.ngOnInit();
          }
        }, err => console.log(err));
      } else if (RoleCheckbox == 'Maker' || RoleCheckbox == 'Checker' || RoleCheckbox == 'Approver') {
        var approval_data = {
          id: id,
          tableName: 'packinglists',
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

  ImportOtherDocumentsComponent.ɵfac = function ImportOtherDocumentsComponent_Factory(t) {
    return new (t || ImportOtherDocumentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_service_document_service__WEBPACK_IMPORTED_MODULE_2__.DocumentService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_13__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_Data_Servies_shared_data_service__WEBPACK_IMPORTED_MODULE_1__.SharedDataService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_service_window_information_service__WEBPACK_IMPORTED_MODULE_4__.WindowInformationService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_service_aprroval_pending_reject_transactions_service__WEBPACK_IMPORTED_MODULE_5__.AprrovalPendingRejectTransactionsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog));
  };

  ImportOtherDocumentsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: ImportOtherDocumentsComponent,
    selectors: [["app-import-other-documents"]],
    viewQuery: function ImportOtherDocumentsComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 5);
      }

      if (rf & 2) {
        let _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.otherDoc = _t.first);
      }
    },
    decls: 92,
    vars: 6,
    consts: [[1, "content-wrap", "pb-2", "scroll-bar-main"], [1, "import_export_sec"], [1, "heading_common_tag"], ["id", "content", "role", "main", 1, "content", "table-padding"], [1, "filter_section_top"], [1, "row"], [1, "col-md-4", "col-sm-4", "col-12"], [1, "col-md-8", "col-sm-8", "col-12"], [1, "filter_right_new", "padding_new_top"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "ex_icon"], [1, "filter_posit"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "fi_icon"], ["appFilterToggle", "", 1, "bg-white", "filter_main_sec", "mt-2", 2, "display", "none"], ["filter_Popup", ""], [1, "select_filter_options"], [1, "col-md-6", "col-12"], ["for", "exampleFormControlInput1", 1, "form-label"], ["aria-label", "Default select example", "name", "Buyer_Name", 1, "form-select", "form-control", 3, "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["aria-label", "Default select example", "name", "Company_Name", 1, "form-select", "form-control", 3, "change"], ["aria-label", "Default select example", "name", "Origin", 1, "form-select", "form-control", 3, "change"], [4, "ngFor", "ngForOf"], ["aria-label", "Default select example", "name", "Currency", 1, "form-select", "form-control", 3, "change"], ["aria-label", "Default select example", "name", "date", 1, "form-select", "form-control", 3, "change"], [1, "footer_buttons"], ["type", "button", 1, "btn", "btn-light", 3, "click"], [1, "upload-button", "btn", "btn-success", 3, "click"], [1, "add_icon"], [1, "analytics"], [1, "analytics_top", 2, "width", "100%"], ["otherDoc", ""], [1, "row", 2, "width", "100%"], ["id", "container", 1, ""], [1, "middle_datatable"], [1, "widget-body", "p-0", "support", "table-wrapper"], [1, "table", "table-striped", "mb-0"], [2, "width", "100%", "background", "white", "position", "sticky", "top", "0"], [1, "text-muted", "table-heading", 2, "border-bottom", "1px solid #f2f4f8"], ["scope", "col"], [1, "text-dark"], ["class", "table-row", 3, "ngClass", 4, "ngFor", "ngForOf"], ["content", ""], [3, "value"], [1, "table-row", 3, "ngClass"], [1, "sb-no"], [4, "ngIf"], [1, "view_edit_button"], ["title", "View", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-eye"], ["title", "Save", "class", "savBtn bgnone", 3, "click", 4, "ngIf"], ["title", "Edit", "class", "savBtn bgnone", 3, "click", 4, "ngIf"], ["name", "packingListNumber", "type", "text", "placeholder", "packing List Number", 1, "tblInput", "form-control", 3, "ngModel", "ngModelChange"], ["name", "packingListAmount", "type", "text", "placeholder", "Packing List Amount", 1, "tblInput", "form-control", 3, "ngModel", "ngModelChange"], ["name", "currency", "type", "text", "placeholder", "Currency", 1, "tblInput", "form-control", 3, "ngModel", "ngModelChange"], ["title", "Save", 1, "savBtn", "bgnone", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-floppy-o"], ["title", "Edit", 1, "savBtn", "bgnone", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-pencil-square-o"], ["title", "Delete", "href", "javascript:void(0)"], ["aria-hidden", "true", 1, "fa", "fa-trash-o"], [1, "modal-body"], [1, "row", "no-gutter"], [1, "col-md-7", 2, "margin", "10px"], [1, "login", "d-flex", "py-5", 2, "padding", "0px !important"], [1, "container", "popup"], [1, "col-lg-10", "col-xl-7", "mrg"], [1, "display-6"], ["width", "315%", "height", "500px", 3, "src"], ["type", "submit", 1, "submitBTN", 2, "margin-left", "250px", 3, "click"]],
    template: function ImportOtherDocumentsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Packing List Documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "main", 3)(5, "div", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ImportOtherDocumentsComponent_Template_button_click_10_listener() {
          return ctx.exportToExcel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "Export");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 11)(14, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ImportOtherDocumentsComponent_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r55);

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
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function ImportOtherDocumentsComponent_Template_select_change_24_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r55);

          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](18);

          ctx.filter($event.target.value, "buyerName");
          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](_r0.style.display = "none");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "Buyer name");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](27, ImportOtherDocumentsComponent_option_27_Template, 2, 2, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "div", 17)(29, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, "PI/PO No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function ImportOtherDocumentsComponent_Template_select_change_31_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r55);

          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](18);

          ctx.filter($event.target.value, "pipo");
          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](_r0.style.display = "none");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, "PI/PO No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](34, ImportOtherDocumentsComponent_option_34_Template, 2, 2, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "div", 17)(36, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37, "Packing List No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function ImportOtherDocumentsComponent_Template_select_change_38_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r55);

          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](18);

          ctx.filter($event.target.value, "packingListNumber");
          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](_r0.style.display = "none");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40, "Packing List No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](41, ImportOtherDocumentsComponent_option_41_Template, 2, 1, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "div", 17)(43, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44, "Currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function ImportOtherDocumentsComponent_Template_select_change_45_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r55);

          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](18);

          ctx.filter($event.target.value, "currency");
          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](_r0.style.display = "none");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](47, "Currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](48, ImportOtherDocumentsComponent_option_48_Template, 2, 2, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "div", 17)(50, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](51, "DATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "select", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function ImportOtherDocumentsComponent_Template_select_change_52_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r55);

          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](18);

          ctx.filter($event.target.value, "packingListDate");
          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](_r0.style.display = "none");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](54, "DATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](55, ImportOtherDocumentsComponent_option_55_Template, 2, 2, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "div", 27)(57, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ImportOtherDocumentsComponent_Template_button_click_57_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r55);

          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](18);

          ctx.resetFilter();
          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](_r0.style.display = "none");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](58, "RESET");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](59, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](60, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ImportOtherDocumentsComponent_Template_button_click_60_listener() {
          return ctx.newComme();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](61, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](62, " ADD NEW ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](63, "div", 31)(64, "div", 32, 33)(66, "div", 34)(67, "div", 35)(68, "section", 36)(69, "div", 37)(70, "table", 38)(71, "thead", 39)(72, "tr", 40)(73, "th", 41)(74, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](75, "DATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](76, "th", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](77, "PI/PO No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](78, "th", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](79, "Packing List No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](80, "th", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](81, "Packing List Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](82, "th", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](83, "Currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](84, "th", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](85, "Beneficiary Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](86, "th", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](87, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](88, "tbody", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](89, ImportOtherDocumentsComponent_tr_89_Template, 22, 13, "tr", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](90, ImportOtherDocumentsComponent_ng_template_90_Template, 12, 1, "ng-template", null, 44, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.ALL_FILTER_DATA == null ? null : ctx.ALL_FILTER_DATA.Buyer_Name);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.ALL_FILTER_DATA == null ? null : ctx.ALL_FILTER_DATA.PI_PO_No);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.ALL_FILTER_DATA == null ? null : ctx.ALL_FILTER_DATA.Packing_List_No);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.ALL_FILTER_DATA == null ? null : ctx.ALL_FILTER_DATA.Currency);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.ALL_FILTER_DATA == null ? null : ctx.ALL_FILTER_DATA.DATE);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.FILTER_VALUE_LIST);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgForm, _custom_Filter_filter_toggle_directive__WEBPACK_IMPORTED_MODULE_8__.FilterToggleDirective],
    styles: ["*[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.heading[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 20px;\n  font-weight: 700;\n  margin-left: 23px;\n  color: #323e4a;\n}\n\n.table-heading[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 500;\n  color: #747474;\n}\n\n.box-shadow[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n\n.table-padding[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fff;\n  border-radius: 10px;\n  margin: 0;\n  box-shadow: 0 2px 10px rgba(58, 53, 65, 0.1019607843);\n}\n\n.upload-button[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n  font-weight: 100;\n  font-family: Poppins, sans-serif;\n  padding: 5px 8px;\n  font-size: 14px;\n  background-color: #49A2D7;\n  border: none;\n  border-radius: 5px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  outline: none;\n}\n\n.table-row[_ngcontent-%COMP%] {\n  background-color: #ffffff !important;\n  color: #707683;\n  border-left: 2px solid #fff;\n}\n\n.table-row[_ngcontent-%COMP%]:hover {\n  background: #f6f9ff !important;\n  border-left: 2px solid #49a2d7;\n}\n\nselect[_ngcontent-%COMP%] {\n  text-decoration: none;\n  border: none;\n  background: none;\n  color: #49a2d7;\n}\n\nselect[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.rect[_ngcontent-%COMP%] {\n  text-align: right;\n  min-width: 80px !important;\n}\n\n.sb-no[_ngcontent-%COMP%] {\n  color: #49a2d7;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  height: 68px;\n  vertical-align: middle !important;\n}\n\n.image[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  margin-top: 12px;\n}\n\n.image2[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  margin-left: -13px;\n}\n\n.fl[_ngcontent-%COMP%] {\n  float: \"left\";\n}\n\n.fr[_ngcontent-%COMP%] {\n  float: \"right\";\n}\n\nspan.fs20[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\nspan.fs16[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\np.fs14[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.fs12[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.p-4[_ngcontent-%COMP%] {\n  padding: 4px;\n}\n\n.p-8[_ngcontent-%COMP%] {\n  z-index: 5000;\n  transform: scale(1, 1);\n  display: grid;\n  grid-template-columns: 29% 70%;\n}\n\n.p-20[_ngcontent-%COMP%] {\n  padding: 20px !important;\n}\n\n.p-12[_ngcontent-%COMP%] {\n  padding: 12px !important;\n}\n\n.p-16[_ngcontent-%COMP%] {\n  padding: 16px !important;\n}\n\n.pr-4[_ngcontent-%COMP%] {\n  padding-right: 4px;\n}\n\n.pr-8[_ngcontent-%COMP%] {\n  padding-right: 8px !important;\n}\n\n.pr-16[_ngcontent-%COMP%] {\n  padding-right: 16px;\n}\n\n.pt-30[_ngcontent-%COMP%] {\n  padding-top: 30px !important;\n}\n\n.pt-28[_ngcontent-%COMP%] {\n  padding-top: 28px !important;\n}\n\n.pt-25[_ngcontent-%COMP%] {\n  padding-top: 25px !important;\n}\n\n.pt-24[_ngcontent-%COMP%] {\n  padding-top: 24px !important;\n}\n\n.pt-22[_ngcontent-%COMP%] {\n  padding-top: 22px !important;\n}\n\n.pt-20[_ngcontent-%COMP%] {\n  padding-top: 20px !important;\n}\n\n.pt-19[_ngcontent-%COMP%] {\n  padding-top: 19px !important;\n}\n\n.pt-16[_ngcontent-%COMP%] {\n  padding-top: 16px !important;\n}\n\n.pt-14[_ngcontent-%COMP%] {\n  padding-top: 14px !important;\n}\n\n.pt-10[_ngcontent-%COMP%] {\n  padding-top: 10px !important;\n}\n\n.pt-8[_ngcontent-%COMP%] {\n  padding-top: 8px !important;\n}\n\n.pt-4[_ngcontent-%COMP%] {\n  padding-top: 4px;\n}\n\n.pt-2[_ngcontent-%COMP%] {\n  padding-top: 2px;\n}\n\n.pt-0[_ngcontent-%COMP%] {\n  padding-top: 0px !important;\n}\n\n.pb-28[_ngcontent-%COMP%] {\n  padding-bottom: 28px !important;\n}\n\n.pb-16[_ngcontent-%COMP%] {\n  padding-bottom: 16px !important;\n}\n\n.pv-4[_ngcontent-%COMP%] {\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n\n.pv-8[_ngcontent-%COMP%] {\n  padding-top: 8px !important;\n  padding-bottom: 8px !important;\n}\n\n.pv-10[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.pv-20[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.pv-14[_ngcontent-%COMP%] {\n  padding-top: 14px !important;\n  padding-bottom: 14px !important;\n}\n\n.pv-16[_ngcontent-%COMP%] {\n  padding-top: 16px !important;\n  padding-bottom: 16px !important;\n}\n\n.ph-5[_ngcontent-%COMP%] {\n  padding-right: 5px !important;\n  padding-left: 5px !important;\n}\n\n.ph-16[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n.ph-8[_ngcontent-%COMP%] {\n  padding-left: 8px !important;\n  padding-right: 8px !important;\n}\n\n.ph-10[_ngcontent-%COMP%] {\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n}\n\n.ph-4[_ngcontent-%COMP%] {\n  padding-left: 4px;\n  padding-right: 4px;\n}\n\n.ph-32[_ngcontent-%COMP%] {\n  padding-left: 32px;\n  padding-right: 32px;\n}\n\n.ph-38[_ngcontent-%COMP%] {\n  padding-left: 38px;\n  padding-right: 38px;\n}\n\n.ph-44[_ngcontent-%COMP%] {\n  padding-left: 44px;\n  padding-right: 44px;\n}\n\n.bb[_ngcontent-%COMP%] {\n  border-bottom: 0.1px solid #d3d3d3;\n  border-right: 0.1px solid #d3d3d3;\n}\n\n.bc[_ngcontent-%COMP%] {\n  background-color: #f8fafd;\n}\n\n.bcw[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #323e4a !important;\n}\n\n\n\n\n\n.m-4[_ngcontent-%COMP%] {\n  margin: 4px !important;\n}\n\n.m-8[_ngcontent-%COMP%] {\n  margin: 8px !important;\n}\n\n.m-16[_ngcontent-%COMP%] {\n  margin: 16px !important;\n}\n\n.mr-20[_ngcontent-%COMP%] {\n  margin-right: 20px !important;\n}\n\n.mr-8[_ngcontent-%COMP%] {\n  margin-right: 8px !important;\n}\n\n.ml-20[_ngcontent-%COMP%] {\n  margin-left: 20px !important;\n}\n\n.ml-24[_ngcontent-%COMP%] {\n  margin-left: 24px !important;\n}\n\n.mt-4[_ngcontent-%COMP%] {\n  margin-top: 4px !important;\n}\n\n.mt-8[_ngcontent-%COMP%] {\n  margin-top: 8px !important;\n}\n\n.mt-16[_ngcontent-%COMP%] {\n  margin-top: 16px !important;\n}\n\n.mt-24[_ngcontent-%COMP%] {\n  margin-top: 24px !important;\n}\n\n.mt-38[_ngcontent-%COMP%] {\n  margin-top: 38px !important;\n}\n\n.mh-8[_ngcontent-%COMP%] {\n  margin-left: 8px !important;\n  margin-right: 8px !important;\n}\n\n.mh-16[_ngcontent-%COMP%] {\n  margin-left: 16px !important;\n  margin-right: 16px !important;\n}\n\n.mv-4[_ngcontent-%COMP%] {\n  margin-top: 4px !important;\n  margin-bottom: 4px !important;\n}\n\n.mv-16[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  margin-bottom: 16px;\n}\n\n.mv-24[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  margin-bottom: 24px;\n}\n\n.mh--16[_ngcontent-%COMP%] {\n  margin-left: -16px !important;\n  margin-right: -16px !important;\n}\n\n.mh-8[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n.w100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.w70[_ngcontent-%COMP%] {\n  width: 70%;\n}\n\n.w50[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.w30[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.pc1[_ngcontent-%COMP%] {\n  width: 44.5%;\n  height: 35px;\n  float: right;\n  border-left: 1px solid rgb(104, 103, 103);\n}\n\n.tabbed[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  \n  background-color: #f8fafd;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding-right: 28px;\n  padding-left: 32px;\n}\n\n.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  \n  display: none;\n}\n\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  list-style: none;\n  background-color: white;\n  height: 100%;\n  padding: 1% 0;\n  padding-left: 30px;\n  margin-left: -30px;\n  width: 113%;\n}\n\n.tabs[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.tab[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 10px;\n  padding-right: 12px;\n  color: #606670;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-right: 10px;\n  border-right: 1px solid black;\n}\n\n.tab[_ngcontent-%COMP%]:hover   label[_ngcontent-%COMP%] {\n  border-top-color: #333;\n  color: #333;\n}\n\n.tab-content[_ngcontent-%COMP%] {\n  display: none;\n  color: #777;\n  background: #f8fafd;\n  margin: 10px !important;\n}\n\n\n\n.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(1):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(1)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(2):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(2)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(3):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(3)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(4):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(4)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(5):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(5)   label[_ngcontent-%COMP%] {\n  color: #49a2d7;\n  margin-right: 10px;\n}\n\n.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(1):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(1), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(2):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(2), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(3):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(3), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(4):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(4) {\n  display: block;\n}\n\n.hhu[_ngcontent-%COMP%]:active, .hhu[_ngcontent-%COMP%]:focus {\n  border: 2px solid red;\n}\n\n.form[_ngcontent-%COMP%] {\n  margin-left: 38px !important;\n  margin-right: 5%;\n  top: 50%;\n  left: 50%;\n  height: 316px;\n  background-color: white;\n  border: 1px dashed rgba(0, 0, 0, 0.4);\n}\n\n.form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif !important;\n  text-align: center;\n  line-height: 30px;\n  color: #303030;\n}\n\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-family: \"EuropaNuova-Regular\", sans-serif !important;\n  position: absolute;\n  margin: 0;\n  width: 89%;\n  height: 313px;\n  padding: 0;\n  outline: none;\n  cursor: pointer;\n  opacity: 0;\n}\n\n.form[_ngcontent-%COMP%]   .form_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  margin-left: 36.5%;\n  height: 42px;\n  cursor: pointer;\n  width: 160px;\n  background-color: #49a2d7;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #149174;\n  color: #0c5645;\n}\n\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  border: 0;\n}\n\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.xbutton[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #49a2d7;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.ybutton[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #0c354d;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.zbutton[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #947551;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.border1[_ngcontent-%COMP%] {\n  border-left: 3px solid #174d72;\n}\n\n.border2[_ngcontent-%COMP%] {\n  border-left: 3px solid #5fe6e7;\n}\n\n.border3[_ngcontent-%COMP%] {\n  border-left: 3px solid #e7845f;\n}\n\n.form-wrapper1[_ngcontent-%COMP%] {\n  flex-direction: column;\n  width: 100%;\n}\n\n.form-wrapper1[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 5.5%;\n}\n\n.form-wrapper1.td[_ngcontent-%COMP%] {\n  width: 100%;\n  width: 7%;\n}\n\n.full-input[_ngcontent-%COMP%] {\n  margin-left: 18px;\n  margin-bottom: 10px;\n  display: inline-block;\n  padding: 3px;\n  height: 74px;\n  width: 177px;\n  background-color: white;\n  border-radius: 5px;\n  box-shadow: 4px 4px 8px 4px #eeeefa;\n}\n\n.smalll-input[_ngcontent-%COMP%] {\n  width: 160px !important;\n  outline: none;\n  border: none;\n  display: block;\n  border-radius: 4px;\n  border: 1px solid #d5dbe8;\n  height: 35px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  padding: 5px 0px 5px 5px;\n  margin-bottom: 0px !important;\n  font-size: 12px;\n  font-weight: 500;\n  color: #72768a;\n}\n\n.sh1[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  margin-top: 15px;\n  font-size: 16px;\n  color: #606670;\n}\n\n.ss[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n\n#customers[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100% !important;\n  margin-left: 19px !important;\n  border-right: 1px solid #ddd;\n  border-left: 1px solid #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  height: 52px !important;\n  text-align: left;\n  font-weight: 300;\n  background-color: #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 52px !important;\n}\n\n.tab1[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  \n  display: inline-block;\n  height: 17px;\n  width: 17px;\n  color: #49a2d7;\n  margin-bottom: 10px;\n}\n\n.tab1[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + input[_ngcontent-%COMP%] {\n  background-color: #bfb;\n  border-color: #4c4;\n}\n\n.label1[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 10px;\n  padding-right: 12px;\n  color: #606670;\n  font-size: 12px;\n  letter-spacing: 1px;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-left: 30px;\n}\n\n.tab1[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.at[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding-right: 20px;\n  padding-left: 10px;\n}\n\n.ctb[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin-left: 210px;\n  background-color: #49a2d7;\n  padding: 12px 30px 11px 30px;\n  color: white;\n  border-radius: 4px;\n  cursor: pointer;\n  font-weight: 500;\n}\n\n.radio1[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  \n  display: inline-block;\n  height: 17px;\n  width: 17px;\n  color: #49a2d7;\n  margin-bottom: 10px;\n  border: 2px solid #49a2d7;\n}\n\n.radio1[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + input[_ngcontent-%COMP%] {\n  background-color: #bfb;\n  border-color: #4c4;\n}\n\n.label1[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 10px;\n  padding-right: 12px;\n  color: #606670;\n  font-size: 12px;\n  letter-spacing: 1px;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-left: 30px;\n}\n\n.radio1[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.stp1[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 500;\n  margin-bottom: 10px;\n  color: black;\n}\n\n.stp2[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin-bottom: 10px;\n  color: black;\n}\n\n.stp3[_ngcontent-%COMP%] {\n  color: #4a4a4a;\n  font-size: 14px;\n}\n\n.of1[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  font: 16px/26px Georgia, Garamond, Serif;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.side_document_list[_ngcontent-%COMP%] {\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 170vh;\n  border-right: 0.3px solid rgba(0, 0, 0, 0.2);\n}\n\n.profile_class[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  border-bottom: 0.3px solid rgba(0, 0, 0, 0.2);\n  padding: 3% 6%;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.activeBtn[_ngcontent-%COMP%] {\n  background-color: #f8fafd;\n  border-left: 8px solid rgb(61, 116, 197);\n}\n\n.table_top[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 29.55% 33% 30% 6%;\n  border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);\n  align-items: center;\n}\n\n.invoices_tab[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  height: 100vh;\n  background-color: #f8fafd;\n}\n\n.invoices_inner[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #f8fafd;\n}\n\n.inner_tab_content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  background-color: white;\n}\n\n.invoice_head[_ngcontent-%COMP%] {\n  width: 95%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 5%;\n}\n\n.serial_detail[_ngcontent-%COMP%] {\n  width: 93%;\n  margin-top: 10px;\n  display: flex;\n  justify-content: right;\n  text-align: right;\n  font-weight: 500;\n}\n\n.transaction_tab[_ngcontent-%COMP%] {\n  width: 770px;\n  height: 1387px;\n}\n\n.form_inner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  justify-content: center;\n}\n\n.opt[_ngcontent-%COMP%] {\n  background-color: #49a2d7;\n  padding: 0 3%;\n  height: 42px;\n  box-shadow: 4px 0px 7px #109cf1;\n  border: none;\n  color: white;\n}\n\n#container[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n.savBtn[_ngcontent-%COMP%] {\n  background-color: #49A2D7;\n  color: white;\n  border: 1px solid rgba(0, 0, 0, 0.4);\n  font-size: 14px;\n  cursor: pointer;\n  border-radius: 2px;\n}\n\n.content-wrap[_ngcontent-%COMP%] {\n  z-index: 0;\n  height: 100vh;\n  position: absolute;\n  left: 260px;\n  margin: auto;\n  width: 78vw;\n}\n\n#container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  min-height: 100%;\n}\n\ntable[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.analytics[_ngcontent-%COMP%]   .support[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.header-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 0.8%;\n  padding-left: 1%;\n  padding-bottom: 0.8%;\n  border-bottom: 1px solid black;\n  width: 99%;\n}\n\n.view_edit_button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #777;\n  padding: 0 4px;\n  font-size: 15px;\n  display: inline-block;\n}\n\n.view_edit_button[_ngcontent-%COMP%]   .savBtn[_ngcontent-%COMP%]   .fa.fa-floppy-o[_ngcontent-%COMP%]:before {\n  color: green;\n  font-size: 16px;\n}\n\n.filter_right_new[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 5px;\n  opacity: 1;\n  border: 1px solid #E1E1E1;\n  font-size: 14px;\n  font-weight: 500;\n  height: 38px;\n  color: #999999;\n}\n\n.filter_right_new[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 5px;\n  opacity: 1;\n  border: 1px solid #E1E1E1;\n  font-size: 14px;\n  font-weight: 500;\n  height: 38px;\n  color: #999999;\n  margin: 0 11px;\n}\n\n.none[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltcG9ydC1vdGhlci1kb2N1bWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtBQUNKOztBQUtBO0VBQ0ksa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFGSjs7QUFTQTtFQUNJLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBTko7O0FBVUE7RUFDSSwyQkFBQTtBQVBKOztBQVVBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EscURBQUE7QUFQSjs7QUFVQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBUEo7O0FBVUE7RUFDSSxhQUFBO0FBUEo7O0FBVUE7RUFDSSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtBQVBKOztBQVVBO0VBQ0ksOEJBQUE7RUFDQSw4QkFBQTtBQVBKOztBQVVBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBUEo7O0FBVUE7RUFDSSxhQUFBO0FBUEo7O0FBVUE7RUFDSSxpQkFBQTtFQUNBLDBCQUFBO0FBUEo7O0FBVUE7RUFDSSxjQUFBO0FBUEo7O0FBVUE7O0VBRUksWUFBQTtFQUNBLGlDQUFBO0FBUEo7O0FBVUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFQSjs7QUFVQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFQSjs7QUFVQTtFQUNJLGFBQUE7QUFQSjs7QUFVQTtFQUNJLGNBQUE7QUFQSjs7QUFVQTtFQUNJLGVBQUE7QUFQSjs7QUFVQTtFQUNJLGVBQUE7QUFQSjs7QUFVQTtFQUNJLGVBQUE7QUFQSjs7QUFVQTtFQUNJLGVBQUE7QUFQSjs7QUFVQTtFQUNJLFlBQUE7QUFQSjs7QUFVQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQVBKOztBQVVBO0VBQ0ksd0JBQUE7QUFQSjs7QUFVQTtFQUNJLHdCQUFBO0FBUEo7O0FBVUE7RUFDSSx3QkFBQTtBQVBKOztBQVVBO0VBQ0ksa0JBQUE7QUFQSjs7QUFVQTtFQUNJLDZCQUFBO0FBUEo7O0FBVUE7RUFDSSxtQkFBQTtBQVBKOztBQVVBO0VBQ0ksNEJBQUE7QUFQSjs7QUFVQTtFQUNJLDRCQUFBO0FBUEo7O0FBVUE7RUFDSSw0QkFBQTtBQVBKOztBQVVBO0VBQ0ksNEJBQUE7QUFQSjs7QUFVQTtFQUNJLDRCQUFBO0FBUEo7O0FBVUE7RUFDSSw0QkFBQTtBQVBKOztBQVVBO0VBQ0ksNEJBQUE7QUFQSjs7QUFVQTtFQUNJLDRCQUFBO0FBUEo7O0FBVUE7RUFDSSw0QkFBQTtBQVBKOztBQVVBO0VBQ0ksNEJBQUE7QUFQSjs7QUFVQTtFQUNJLDJCQUFBO0FBUEo7O0FBVUE7RUFDSSxnQkFBQTtBQVBKOztBQVVBO0VBQ0ksZ0JBQUE7QUFQSjs7QUFVQTtFQUNJLDJCQUFBO0FBUEo7O0FBVUE7RUFDSSwrQkFBQTtBQVBKOztBQVVBO0VBQ0ksK0JBQUE7QUFQSjs7QUFVQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUFQSjs7QUFVQTtFQUNJLDJCQUFBO0VBQ0EsOEJBQUE7QUFQSjs7QUFVQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7QUFQSjs7QUFVQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7QUFQSjs7QUFVQTtFQUNJLDRCQUFBO0VBQ0EsK0JBQUE7QUFQSjs7QUFVQTtFQUNJLDRCQUFBO0VBQ0EsK0JBQUE7QUFQSjs7QUFVQTtFQUNJLDZCQUFBO0VBQ0EsNEJBQUE7QUFQSjs7QUFVQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUFQSjs7QUFVQTtFQUNJLDRCQUFBO0VBQ0EsNkJBQUE7QUFQSjs7QUFVQTtFQUNJLDZCQUFBO0VBQ0EsOEJBQUE7QUFQSjs7QUFVQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFQSjs7QUFVQTtFQUNJ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Sjs7QUE4QkE7RUFDSSxjQUFBO0FBM0JKOztBQThCQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQTNCSjs7QUE4QkE7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBM0JKOztBQThCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUEzQko7O0FBOEJBO0VBQ0ksZ0JBQUE7QUEzQko7O0FBOEJBO0VBQ0ksZ0JBQUE7QUEzQko7O0FBOEJBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtBQTNCSjs7QUE4QkE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQTNCSjs7QUE4QkE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQTNCSjs7QUE4QkE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUEzQko7O0FBOEJBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQTNCSjs7QUE2QkE7RUFDSSxvQkFBQTtFQUNBLFlBQUE7QUExQkoiLCJmaWxlIjoiaW1wb3J0LW90aGVyLWRvY3VtZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLy8gLnRhYmxlIHRoZWFkIHRoe1xuLy8gICAgIGJvcmRlcjogbm9uZTtcbi8vIH1cbi5oZWFkaW5nIHtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luLWxlZnQ6IDIzcHg7XG4gICAgY29sb3I6ICMzMjNlNGE7XG59XG5cbi8vIC5kcm9wZG93biB7XG4vLyAgICAgZm9udC1zaXplOiAxNHB4O1xuLy8gICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4vLyB9XG4udGFibGUtaGVhZGluZyB7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICM3NDc0NzQ7XG4gICAgLy9vcGFjaXR5OiA1MCU7XG59XG5cbi5ib3gtc2hhZG93IHtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi50YWJsZS1wYWRkaW5nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggIzNhMzU0MTFhO1xufVxuXG4udXBsb2FkLWJ1dHRvbiB7XG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLCBzYW5zLXNlcmlmO1xuICAgIHBhZGRpbmc6IDVweCA4cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OUEyRDc7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuYnV0dG9uIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4udGFibGUtcm93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICM3MDc2ODM7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZmZmO1xufVxuXG4udGFibGUtcm93OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjZmOWZmICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjNDlhMmQ3O1xufVxuXG5zZWxlY3Qge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBjb2xvcjogIzQ5YTJkNztcbn1cblxuc2VsZWN0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4ucmVjdCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWluLXdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zYi1ubyB7XG4gICAgY29sb3I6ICM0OWEyZDc7XG59XG5cbnRoLFxudGQge1xuICAgIGhlaWdodDogNjhweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XG59XG5cbi5pbWFnZSB7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG4uaW1hZ2UyIHtcbiAgICBtYXJnaW4tdG9wOiAyMnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTNweDtcbn1cblxuLmZsIHtcbiAgICBmbG9hdDogXCJsZWZ0XCI7XG59XG5cbi5mciB7XG4gICAgZmxvYXQ6IFwicmlnaHRcIjtcbn1cblxuc3Bhbi5mczIwIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbnNwYW4uZnMxNiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5wLmZzMTQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmZzMTIge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnAtNCB7XG4gICAgcGFkZGluZzogNHB4O1xufVxuXG4ucC04IHtcbiAgICB6LWluZGV4OiA1MDAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI5JSA3MCU7XG59XG5cbi5wLTIwIHtcbiAgICBwYWRkaW5nOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wLTEyIHtcbiAgICBwYWRkaW5nOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wLTE2IHtcbiAgICBwYWRkaW5nOiAxNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wci00IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG59XG5cbi5wci04IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHggIWltcG9ydGFudDtcbn1cblxuLnByLTE2IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG4ucHQtMzAge1xuICAgIHBhZGRpbmctdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wdC0yOCB7XG4gICAgcGFkZGluZy10b3A6IDI4cHggIWltcG9ydGFudDtcbn1cblxuLnB0LTI1IHtcbiAgICBwYWRkaW5nLXRvcDogMjVweCAhaW1wb3J0YW50O1xufVxuXG4ucHQtMjQge1xuICAgIHBhZGRpbmctdG9wOiAyNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wdC0yMiB7XG4gICAgcGFkZGluZy10b3A6IDIycHggIWltcG9ydGFudDtcbn1cblxuLnB0LTIwIHtcbiAgICBwYWRkaW5nLXRvcDogMjBweCAhaW1wb3J0YW50O1xufVxuXG4ucHQtMTkge1xuICAgIHBhZGRpbmctdG9wOiAxOXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wdC0xNiB7XG4gICAgcGFkZGluZy10b3A6IDE2cHggIWltcG9ydGFudDtcbn1cblxuLnB0LTE0IHtcbiAgICBwYWRkaW5nLXRvcDogMTRweCAhaW1wb3J0YW50O1xufVxuXG4ucHQtMTAge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wdC04IHtcbiAgICBwYWRkaW5nLXRvcDogOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wdC00IHtcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xufVxuXG4ucHQtMiB7XG4gICAgcGFkZGluZy10b3A6IDJweDtcbn1cblxuLnB0LTAge1xuICAgIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnBiLTI4IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjhweCAhaW1wb3J0YW50O1xufVxuXG4ucGItMTYge1xuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wdi00IHtcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XG59XG5cbi5wdi04IHtcbiAgICBwYWRkaW5nLXRvcDogOHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDhweCAhaW1wb3J0YW50O1xufVxuXG4ucHYtMTAge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4ucHYtMjAge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG4ucHYtMTQge1xuICAgIHBhZGRpbmctdG9wOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDE0cHggIWltcG9ydGFudDtcbn1cblxuLnB2LTE2IHtcbiAgICBwYWRkaW5nLXRvcDogMTZweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5waC01IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG4ucGgtMTYge1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG4ucGgtOCB7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHggIWltcG9ydGFudDtcbn1cblxuLnBoLTEwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5waC00IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG59XG5cbi5waC0zMiB7XG4gICAgcGFkZGluZy1sZWZ0OiAzMnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMycHg7XG59XG5cbi5waC0zOCB7XG4gICAgcGFkZGluZy1sZWZ0OiAzOHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDM4cHg7XG59XG5cbi5waC00NCB7XG4gICAgcGFkZGluZy1sZWZ0OiA0NHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDQ0cHg7XG59XG5cbi5iYiB7XG4gICAgYm9yZGVyLWJvdHRvbTogMC4xcHggc29saWQgI2QzZDNkMztcbiAgICBib3JkZXItcmlnaHQ6IDAuMXB4IHNvbGlkICNkM2QzZDM7XG59XG5cbi5iYyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmZDtcbn1cblxuLmJjdyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6ICMzMjNlNGEgIWltcG9ydGFudDtcbn1cblxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLXBhZGRpbmctLS0tLS0tLS0tLS0tLS0tICovXG5cblxuLyogLS0tLS0tLS0tLS0tLS0tLS1tYXJnaW4tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4ubS00IHtcbiAgICBtYXJnaW46IDRweCAhaW1wb3J0YW50O1xufVxuXG4ubS04IHtcbiAgICBtYXJnaW46IDhweCAhaW1wb3J0YW50O1xufVxuXG4ubS0xNiB7XG4gICAgbWFyZ2luOiAxNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tci0yMCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tci04IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweCAhaW1wb3J0YW50O1xufVxuXG4ubWwtMjAge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tbC0yNCB7XG4gICAgbWFyZ2luLWxlZnQ6IDI0cHggIWltcG9ydGFudDtcbn1cblxuLm10LTQge1xuICAgIG1hcmdpbi10b3A6IDRweCAhaW1wb3J0YW50O1xufVxuXG4ubXQtOCB7XG4gICAgbWFyZ2luLXRvcDogOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tdC0xNiB7XG4gICAgbWFyZ2luLXRvcDogMTZweCAhaW1wb3J0YW50O1xufVxuXG4ubXQtMjQge1xuICAgIG1hcmdpbi10b3A6IDI0cHggIWltcG9ydGFudDtcbn1cblxuLm10LTM4IHtcbiAgICBtYXJnaW4tdG9wOiAzOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5taC04IHtcbiAgICBtYXJnaW4tbGVmdDogOHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHggIWltcG9ydGFudDtcbn1cblxuLm1oLTE2IHtcbiAgICBtYXJnaW4tbGVmdDogMTZweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogMTZweCAhaW1wb3J0YW50O1xufVxuXG4ubXYtNCB7XG4gICAgbWFyZ2luLXRvcDogNHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tdi0xNiB7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4ubXYtMjQge1xuICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cblxuLm1oLS0xNiB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweCAhaW1wb3J0YW50O1xufVxuXG4ubWgtOCB7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLncxMDAge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4udzcwIHtcbiAgICB3aWR0aDogNzAlO1xufVxuXG4udzUwIHtcbiAgICB3aWR0aDogNTAlO1xufVxuXG4udzMwIHtcbiAgICB3aWR0aDogMzAlO1xufVxuXG4ucGMxIHtcbiAgICB3aWR0aDogNDQuNSU7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYigxMDQsIDEwMywgMTAzKTtcbn1cblxuLnRhYmJlZCB7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIC8qIHNvIHdlIGNvdWxkIGVhc2lseSBoaWRlIHRoZSByYWRpbyBpbnB1dHMgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZkO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyOHB4O1xuICAgIHBhZGRpbmctbGVmdDogMzJweDtcbn1cblxuLnRhYmJlZCBbdHlwZT1cInJhZGlvXCJdIHtcbiAgICAvKiBoaWRpbmcgdGhlIGlucHV0cyAqL1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50YWJzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgLy9tYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMSUgMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xuICAgIHdpZHRoOiAxMTMlO1xufVxuXG4udGFicyBsYWJlbCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4udGFiPmxhYmVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XG4gICAgY29sb3I6ICM2MDY2NzA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XG59XG5cbi50YWI6aG92ZXIgbGFiZWwge1xuICAgIGJvcmRlci10b3AtY29sb3I6ICMzMzM7XG4gICAgY29sb3I6ICMzMzM7XG59XG5cbi50YWItY29udGVudCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBjb2xvcjogIzc3NztcbiAgICBiYWNrZ3JvdW5kOiAjZjhmYWZkO1xuICAgIC8vIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgLy8gcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMTBweCAhaW1wb3J0YW50O1xufVxuXG5cbi8qIEFzIHdlIGNhbm5vdCByZXBsYWNlIHRoZSBudW1iZXJzIHdpdGggdmFyaWFibGVzIG9yIGNhbGxzIHRvIGVsZW1lbnQgcHJvcGVydGllcywgdGhlIG51bWJlciBvZiB0aGlzIHNlbGVjdG9yIHBhcnRzIGlzIG91ciB0YWIgY291bnQgbGltaXQgKi9cblxuLnRhYmJlZCBbdHlwZT1cInJhZGlvXCJdOm50aC1vZi10eXBlKDEpOmNoZWNrZWR+LnRhYnMgLnRhYjpudGgtb2YtdHlwZSgxKSBsYWJlbCxcbi50YWJiZWQgW3R5cGU9XCJyYWRpb1wiXTpudGgtb2YtdHlwZSgyKTpjaGVja2Vkfi50YWJzIC50YWI6bnRoLW9mLXR5cGUoMikgbGFiZWwsXG4udGFiYmVkIFt0eXBlPVwicmFkaW9cIl06bnRoLW9mLXR5cGUoMyk6Y2hlY2tlZH4udGFicyAudGFiOm50aC1vZi10eXBlKDMpIGxhYmVsLFxuLnRhYmJlZCBbdHlwZT1cInJhZGlvXCJdOm50aC1vZi10eXBlKDQpOmNoZWNrZWR+LnRhYnMgLnRhYjpudGgtb2YtdHlwZSg0KSBsYWJlbCxcbi50YWJiZWQgW3R5cGU9XCJyYWRpb1wiXTpudGgtb2YtdHlwZSg1KTpjaGVja2Vkfi50YWJzIC50YWI6bnRoLW9mLXR5cGUoNSkgbGFiZWwge1xuICAgIGNvbG9yOiAjNDlhMmQ3O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnRhYmJlZCBbdHlwZT1cInJhZGlvXCJdOm50aC1vZi10eXBlKDEpOmNoZWNrZWR+LnRhYi1jb250ZW50Om50aC1vZi10eXBlKDEpLFxuLnRhYmJlZCBbdHlwZT1cInJhZGlvXCJdOm50aC1vZi10eXBlKDIpOmNoZWNrZWR+LnRhYi1jb250ZW50Om50aC1vZi10eXBlKDIpLFxuLnRhYmJlZCBbdHlwZT1cInJhZGlvXCJdOm50aC1vZi10eXBlKDMpOmNoZWNrZWR+LnRhYi1jb250ZW50Om50aC1vZi10eXBlKDMpLFxuLnRhYmJlZCBbdHlwZT1cInJhZGlvXCJdOm50aC1vZi10eXBlKDQpOmNoZWNrZWR+LnRhYi1jb250ZW50Om50aC1vZi10eXBlKDQpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmhodTphY3RpdmUsXG4uaGh1OmZvY3VzIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG59XG5cbi5mb3JtIHtcbiAgICBtYXJnaW4tbGVmdDogMzhweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIGhlaWdodDogMzE2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggZGFzaGVkIHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLmZvcm0gcCB7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gICAgLy8gbWFyZ2luLXRvcDogMjBweDtcbiAgICAvLyB3aWR0aDogMTAwJTtcbiAgICAvLyBoZWlnaHQ6IDIzcHggIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgY29sb3I6ICMzMDMwMzA7XG59XG5cbi5mb3JtIGlucHV0IHtcbiAgICBmb250LWZhbWlseTogXCJFdXJvcGFOdW92YS1SZWd1bGFyXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiA4OSU7XG4gICAgaGVpZ2h0OiAzMTNweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbi5mb3JtIC5mb3JtX2lubmVyIGJ1dHRvbiB7XG4gICAgLy8gbWFyZ2luLWxlZnQ6IDM2JTtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW4tbGVmdDogMzYuNSU7XG4gICAgaGVpZ2h0OiA0MnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogMTYwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5YTJkNztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IDBweCAjNDlhMmQ3O1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5mb3JtIGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzE0OTE3NDtcbiAgICBjb2xvcjogIzBjNTY0NTtcbn1cblxuLmZvcm0gYnV0dG9uOmFjdGl2ZSB7XG4gICAgYm9yZGVyOiAwO1xufVxuXG5pbnB1dDpmb2N1cyxcbnRleHRhcmVhOmZvY3VzLFxuc2VsZWN0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4ueGJ1dHRvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBoZWlnaHQ6IDQycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5YTJkNztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IDBweCAjNDlhMmQ3O1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi55YnV0dG9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGhlaWdodDogNDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGMzNTRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggMHB4ICM0OWEyZDc7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLnpidXR0b24ge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgaGVpZ2h0OiA0MnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NDc1NTE7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAwcHggIzQ5YTJkNztcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uYm9yZGVyMSB7XG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjMTc0ZDcyO1xufVxuXG4uYm9yZGVyMiB7XG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjNWZlNmU3O1xufVxuXG4uYm9yZGVyMyB7XG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjZTc4NDVmO1xufVxuXG4uZm9ybS13cmFwcGVyMSB7XG4gICAgLy9kaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb3JtLXdyYXBwZXIxIGRpdiB0ZCB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBoZWlnaHQ6IDUuNSU7XG59XG5cbi5mb3JtLXdyYXBwZXIxLnRkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB3aWR0aDogNyU7XG59XG5cbi5mdWxsLWlucHV0IHtcbiAgICBtYXJnaW4tbGVmdDogMThweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgaGVpZ2h0OiA3NHB4O1xuICAgIHdpZHRoOiAxNzdweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA4cHggNHB4ICNlZWVlZmE7XG59XG5cbi5zbWFsbGwtaW5wdXQge1xuICAgIHdpZHRoOiAxNjBweCAhaW1wb3J0YW50O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDVkYmU4O1xuICAgIGhlaWdodDogMzVweDtcbn1cblxubGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDVweCAwcHggNXB4IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzcyNzY4YTtcbn1cblxuLnNoMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICM2MDY2NzA7XG59XG5cbi5zcyB7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbiNjdXN0b21lcnMge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMTlweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZGQ7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGRkO1xufVxuXG4jY3VzdG9tZXJzIHRkLFxuI2N1c3RvbWVycyB0aCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG59XG5cbiNjdXN0b21lcnMgdGgge1xuICAgIGhlaWdodDogNTJweCAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuXG4jY3VzdG9tZXJzIHRkIHtcbiAgICBoZWlnaHQ6IDUycHggIWltcG9ydGFudDtcbn1cblxuLnRhYjEgW3R5cGU9XCJyYWRpb1wiXSB7XG4gICAgLyogaGlkaW5nIHRoZSBpbnB1dHMgKi9cbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAxN3B4O1xuICAgIHdpZHRoOiAxN3B4O1xuICAgIGNvbG9yOiAjNDlhMmQ3O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi50YWIxIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkK2lucHV0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZiO1xuICAgIGJvcmRlci1jb2xvcjogIzRjNDtcbn1cblxuLmxhYmVsMSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTJweDtcbiAgICBjb2xvcjogIzYwNjY3MDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbi50YWIxIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uYXQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmN0YiB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDlhMmQ3O1xuICAgIHBhZGRpbmc6IDEycHggMzBweCAxMXB4IDMwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnJhZGlvMSBbdHlwZT1cInJhZGlvXCJdIHtcbiAgICAvKiBoaWRpbmcgdGhlIGlucHV0cyAqL1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IDE3cHg7XG4gICAgd2lkdGg6IDE3cHg7XG4gICAgY29sb3I6ICM0OWEyZDc7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNDlhMmQ3O1xufVxuXG4ucmFkaW8xIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkK2lucHV0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZiO1xuICAgIGJvcmRlci1jb2xvcjogIzRjNDtcbn1cblxuLmxhYmVsMSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTJweDtcbiAgICBjb2xvcjogIzYwNjY3MDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbi5yYWRpbzEge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5zdHAxIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLnN0cDIge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLnN0cDMge1xuICAgIGNvbG9yOiAjNGE0YTRhO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm9mMSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBmb250OiAxNnB4LzI2cHggR2VvcmdpYSwgR2FyYW1vbmQsIFNlcmlmO1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG50YWJsZSB0Ym9keSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vL1NJREUgUEVPUExFIExJU1Rcbi5zaWRlX2RvY3VtZW50X2xpc3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTcwdmg7XG4gICAgYm9yZGVyLXJpZ2h0OiAwLjNweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi8vUFJPRklMRSBDTEFTU1NTUy9cbi5wcm9maWxlX2NsYXNzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1ib3R0b206IDAuM3B4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBwYWRkaW5nOiAzJSA2JTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8vIC5wcm9maWxlX2NsYXNzOmhvdmVyIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmZDtcbi8vICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCByZ2IoNjEsIDExNiwgMTk3KTtcbi8vIH1cbi5hY3RpdmVCdG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmQ7XG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCByZ2IoNjEsIDExNiwgMTk3KTtcbn1cblxuLnRhYmxlX3RvcCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI5LjU1JSAzMyUgMzAlIDYlO1xuICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW52b2ljZXNfdGFiIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmZDtcbn1cblxuLmludm9pY2VzX2lubmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZkO1xufVxuXG4uaW5uZXJfdGFiX2NvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5pbnZvaWNlX2hlYWQge1xuICAgIHdpZHRoOiA5NSU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xufVxuXG4uc2VyaWFsX2RldGFpbCB7XG4gICAgd2lkdGg6IDkzJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udHJhbnNhY3Rpb25fdGFiIHtcbiAgICB3aWR0aDogNzcwcHg7XG4gICAgaGVpZ2h0OiAxMzg3cHg7XG59XG5cbi5mb3JtX2lubmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm9wdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5YTJkNztcbiAgICBwYWRkaW5nOiAwIDMlO1xuICAgIGhlaWdodDogNDJweDtcbiAgICBib3gtc2hhZG93OiA0cHggMHB4IDdweCAjMTA5Y2YxO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbiNjb250YWluZXIge1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uc2F2QnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDlBMkQ3O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5jb250ZW50LXdyYXAge1xuICAgIHotaW5kZXg6IDA7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMjYwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiA3OHZ3O1xufVxuXG4jY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWluLWhlaWdodDogMTAwJTtcbn1cblxudGFibGUge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5hbmFseXRpY3MgLnN1cHBvcnQge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5oZWFkZXItcGFuZWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMC44JTtcbiAgICBwYWRkaW5nLWxlZnQ6IDElO1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjglO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgICB3aWR0aDogOTklO1xufVxuXG4udmlld19lZGl0X2J1dHRvbiBhIGkge1xuICAgIGNvbG9yOiAjNzc3O1xuICAgIHBhZGRpbmc6IDAgNHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi52aWV3X2VkaXRfYnV0dG9uIC5zYXZCdG4gLmZhLmZhLWZsb3BweS1vOmJlZm9yZSB7XG4gICAgY29sb3I6IGdyZWVuO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmZpbHRlcl9yaWdodF9uZXcgLmJ0bi1wcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFMUUxRTE7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICAgIGNvbG9yOiAjOTk5OTk5O1xufVxuXG4uZmlsdGVyX3JpZ2h0X25ldyAuYnRuLXNlY29uZGFyeSB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgb3BhY2l0eTogMTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRTFFMUUxO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGhlaWdodDogMzhweDtcbiAgICBjb2xvcjogIzk5OTk5OTtcbiAgICBtYXJnaW46IDAgMTFweDtcbn1cbi5ub25le1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIG9wYWNpdHk6IC43O1xuICB9Il19 */"]
  });
  return ImportOtherDocumentsComponent;
})();

/***/ }),

/***/ 75222:
/*!******************************************************************************!*\
  !*** ./src/app/home/import-other-documents/import-other-documents.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImportOtherDocumentsModule": () => (/* binding */ ImportOtherDocumentsModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../confirm-dialog/confirm-dialog.service */ 12579);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ 71010);
/* harmony import */ var _shared_Data_Servies_shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared-Data-Servies/shared-data.service */ 10241);
/* harmony import */ var _shared_home_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-home.module */ 69408);
/* harmony import */ var _import_other_documents_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./import-other-documents.component */ 27893);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);










let ImportOtherDocumentsModule = /*#__PURE__*/(() => {
  class ImportOtherDocumentsModule {}

  ImportOtherDocumentsModule.ɵfac = function ImportOtherDocumentsModule_Factory(t) {
    return new (t || ImportOtherDocumentsModule)();
  };

  ImportOtherDocumentsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: ImportOtherDocumentsModule
  });
  ImportOtherDocumentsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    providers: [_confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialogService, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal, _shared_Data_Servies_shared_data_service__WEBPACK_IMPORTED_MODULE_1__.SharedDataService],
    imports: [_shared_home_module__WEBPACK_IMPORTED_MODULE_2__.SharedHomeModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild([{
      path: "",
      component: _import_other_documents_component__WEBPACK_IMPORTED_MODULE_3__.ImportOtherDocumentsComponent,
      pathMatch: "full"
    }]), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__.ModalModule.forRoot()]
  });
  return ImportOtherDocumentsModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ImportOtherDocumentsModule, {
    declarations: [_import_other_documents_component__WEBPACK_IMPORTED_MODULE_3__.ImportOtherDocumentsComponent],
    imports: [_shared_home_module__WEBPACK_IMPORTED_MODULE_2__.SharedHomeModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__.ModalModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_home_import-other-documents_import-other-documents_module_ts.js.map