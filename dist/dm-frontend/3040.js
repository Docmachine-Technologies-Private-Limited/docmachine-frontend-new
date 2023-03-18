"use strict";
(self["webpackChunkdm_frontend"] = self["webpackChunkdm_frontend"] || []).push([[3040],{

/***/ 95132:
/*!************************************************************************!*\
  !*** ./src/app/home/Export/bill-lodgement/bill-lodgement.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillLodgementComponent": () => (/* binding */ BillLodgementComponent)
/* harmony export */ });
/* harmony import */ var D_Bharathexim_Repo_docmachine_frontend_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 8239);
/* harmony import */ var _service_document_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/document.service */ 76852);
/* harmony import */ var _inward_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../inward.json */ 77485);
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/user.service */ 84981);
/* harmony import */ var _confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../confirm-dialog/confirm-dialog.service */ 12579);
/* harmony import */ var pdf_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pdf-lib */ 76184);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! xlsx */ 64841);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! file-saver */ 49457);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 93329);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 20092);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 35732);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 84967);
/* harmony import */ var _service_window_information_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/window-information.service */ 23087);
/* harmony import */ var _service_homeservices_shippingbill_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../service/homeservices/shippingbill.service */ 61650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 64537);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 7976);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 5998);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-toastr */ 48292);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 88692);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-select/ng-select */ 11208);
/* harmony import */ var _fiterbuyer_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../fiterbuyer.pipe */ 80766);

































const _c0 = ["table1"];
const _c1 = ["billLodge"];

function BillLodgementComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "div", 67)(2, "h3", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Bill Lodgement");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
}

function BillLodgementComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 69)(1, "img", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BillLodgementComponent_div_8_Template_img_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r21.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}

function BillLodgementComponent_div_17_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 75)(1, "label", 76)(2, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const item_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", item_r25.sbno, " - ", item_r25.buyerName, " ");
  }
}

function BillLodgementComponent_div_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 73)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "SHIPPING BILL NUMBER SELECTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, BillLodgementComponent_div_17_div_1_div_3_Template, 4, 2, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r23.itemArray);
  }
}

function BillLodgementComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, BillLodgementComponent_div_17_div_1_Template, 4, 1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r3.ship);
  }
}

function BillLodgementComponent_div_28_div_6_label_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "label", 87)(1, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](data_r31.valueInternal);
  }
}

function BillLodgementComponent_div_28_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 83)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 84)(4, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BillLodgementComponent_div_28_div_6_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r33);
      const i_r29 = restoredCtx.index;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

      const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](132);

      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r32.open2(_r18.style.display = "block", ctx_r32.sbArray[i_r29]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Enter Forex Advice");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, BillLodgementComponent_div_28_div_6_label_7_Template, 3, 1, "label", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const i_r29 = ctx.index;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroupName", i_r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r27.sbArray[i_r29], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r27.getForexInfo(ctx_r27.sbArray[i_r29]));
  }
}

function BillLodgementComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 78)(1, "div", 11)(2, "h3", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Advance reference Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "form", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngSubmit", function BillLodgementComponent_div_28_Template_form_ngSubmit_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r34.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, BillLodgementComponent_div_28_div_6_Template, 8, 3, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r4.advanceForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r4.getCourses(ctx_r4.advanceForm));
  }
}

function BillLodgementComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 89)(1, "div", 11)(2, "div", 10)(3, "div", 11)(4, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Select letter of credit");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 90)(7, "div", 91)(8, "ng-select", 92, 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function BillLodgementComponent_div_40_Template_ng_select_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r37.ThirdPartydataselection = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 94)(11, "div", 95)(12, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "img", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("items", ctx_r5.Letter_Of_Credit)("ngModel", ctx_r5.ThirdPartydataselection);
  }
}

const _c2 = function () {
  return ["/home/upload"];
};

function BillLodgementComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 98)(1, "div", 11)(2, "div", 10)(3, "div", 11)(4, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Select Tri party agreement");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 90)(7, "div", 91)(8, "ng-select", 99, 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function BillLodgementComponent_div_70_Template_ng_select_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r41);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r40.ThirPartyselection = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 94)(11, "div", 95)(12, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "img", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("items", ctx_r6.ThirdPartydata)("ngModel", ctx_r6.ThirPartyselection);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](3, _c2));
  }
}

function BillLodgementComponent_div_81_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", item_r43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r43);
  }
}

function BillLodgementComponent_div_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 101)(1, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Select a bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 102)(4, "select", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function BillLodgementComponent_div_81_Template_select_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r46);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r45.bankToggle = $event);
    })("change", function BillLodgementComponent_div_81_Template_select_change_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r46);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r47.setradio(ctx_r47.bankToggle));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, BillLodgementComponent_div_81_option_5_Template, 2, 2, "option", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r7.bankToggle);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r7.bank);
  }
}

function BillLodgementComponent_div_83_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 67)(1, "input", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BillLodgementComponent_div_83_div_3_Template_input_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r51);
      const value_r49 = restoredCtx.$implicit;
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r50.model1.option = value_r49);
    })("click", function BillLodgementComponent_div_83_div_3_Template_input_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r51);
      const value_r49 = restoredCtx.$implicit;
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r52.chargesTo(value_r49));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "label", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const value_r49 = ctx.$implicit;
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", value_r49)("checked", value_r49 === ctx_r48.model1.option);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", value_r49.bank, "-", value_r49.accType, "");
  }
}

function BillLodgementComponent_div_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 89)(1, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, BillLodgementComponent_div_83_div_3_Template, 4, 4, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" Charges to ", ctx_r8.bankValue, "* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r8.newBankArray);
  }
}

function BillLodgementComponent_div_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 89)(1, "button", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BillLodgementComponent_div_85_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r54);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r53.generateDoc1());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " Generate Document ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}

function BillLodgementComponent_div_86_h1_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "h1");
  }
}

function BillLodgementComponent_div_86_div_3_div_3_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Credit Note ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "iframe", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r67.creditNote, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeResourceUrl"]);
  }
}

function BillLodgementComponent_div_86_div_3_div_3_div_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Debit Note ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "iframe", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r68.debitNote, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeResourceUrl"]);
  }
}

function BillLodgementComponent_div_86_div_3_div_3_div_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " EBRC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "iframe", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r69.ebrc, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeResourceUrl"]);
  }
}

function BillLodgementComponent_div_86_div_3_div_3_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " BL Copyref ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "iframe", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r70.blcopyref, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeResourceUrl"]);
  }
}

function BillLodgementComponent_div_86_div_3_div_3_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " IRAdvice ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "iframe", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r71.irAdvice, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeResourceUrl"]);
  }
}

function BillLodgementComponent_div_86_div_3_div_3_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Swift Copy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "iframe", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r72.swiftCopy, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeResourceUrl"]);
  }
}

function BillLodgementComponent_div_86_div_3_div_3_div_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Opinion Report ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "iframe", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r73.opinionReport, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeResourceUrl"]);
  }
}

function BillLodgementComponent_div_86_div_3_div_3_div_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Letter Of Credit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "iframe", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r74.lcCopy, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeResourceUrl"]);
  }
}

function BillLodgementComponent_div_86_div_3_div_3_div_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Tri Party Agreement ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "iframe", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r75.tryPartyAgreement, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeResourceUrl"]);
  }
}

function BillLodgementComponent_div_86_div_3_div_3_div_1_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Airway/BlCopy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "iframe", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r76.airwayBlCopy, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeResourceUrl"]);
  }
}

function BillLodgementComponent_div_86_div_3_div_3_div_1_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Bill Of Exchange ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "iframe", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r77.billOfExchange, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeResourceUrl"]);
  }
}

function BillLodgementComponent_div_86_div_3_div_3_div_1_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Destruction ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "iframe", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r78.destruction, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeResourceUrl"]);
  }
}

function BillLodgementComponent_div_86_div_3_div_3_div_1_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Commercial ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "iframe", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r79.commercial, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeResourceUrl"]);
  }
}

function BillLodgementComponent_div_86_div_3_div_3_div_1_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Packing List Document ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "iframe", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r80.packingList, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeResourceUrl"]);
  }
}

function BillLodgementComponent_div_86_div_3_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "div", 117)(2, "div", 118)(3, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, " SB Documents ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "iframe", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, BillLodgementComponent_div_86_div_3_div_3_div_1_div_8_Template, 5, 1, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, BillLodgementComponent_div_86_div_3_div_3_div_1_div_9_Template, 5, 1, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, BillLodgementComponent_div_86_div_3_div_3_div_1_div_10_Template, 5, 1, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, BillLodgementComponent_div_86_div_3_div_3_div_1_div_11_Template, 5, 1, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, BillLodgementComponent_div_86_div_3_div_3_div_1_div_12_Template, 5, 1, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, BillLodgementComponent_div_86_div_3_div_3_div_1_div_13_Template, 5, 1, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, BillLodgementComponent_div_86_div_3_div_3_div_1_div_14_Template, 5, 1, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, BillLodgementComponent_div_86_div_3_div_3_div_1_div_15_Template, 5, 1, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, BillLodgementComponent_div_86_div_3_div_3_div_1_div_16_Template, 5, 1, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, BillLodgementComponent_div_86_div_3_div_3_div_1_div_17_Template, 5, 1, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, BillLodgementComponent_div_86_div_3_div_3_div_1_div_18_Template, 5, 1, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, BillLodgementComponent_div_86_div_3_div_3_div_1_div_19_Template, 5, 1, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, BillLodgementComponent_div_86_div_3_div_3_div_1_div_20_Template, 5, 1, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, BillLodgementComponent_div_86_div_3_div_3_div_1_div_21_Template, 5, 1, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "button", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BillLodgementComponent_div_86_div_3_div_3_div_1_Template_button_click_22_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r82);
      const pipo_r65 = restoredCtx.$implicit;
      const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);

      const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](90);

      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r81.openToPdf(_r13, pipo_r65));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "Open To Download/Send Mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const pipo_r65 = ctx.$implicit;
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", pipo_r65, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeResourceUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r62.randomArray[0].creditNote);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r62.randomArray[0].debitNote);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r62.randomArray[0].EBRC);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r62.randomArray[0].blcopyref);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r62.randomArray[0].irAdvice);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r62.randomArray[0].swiftCopy);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r62.randomArray[0].opinionReport);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r62.randomArray[0].lcCopy);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r62.randomArray[0].tryPartyAgreement);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r62.randomArray[0].airwayBlcopy);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r62.randomArray[0].billOfExchange);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r62.randomArray[0].destruction);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r62.randomArray[0].commercial);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r62.randomArray[0].packingList);
  }
}

function BillLodgementComponent_div_86_div_3_div_3_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Letter Of Credit (LC) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "iframe", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const pipo_r84 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", pipo_r84, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeResourceUrl"]);
  }
}

function BillLodgementComponent_div_86_div_3_div_3_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, BillLodgementComponent_div_86_div_3_div_3_div_3_div_1_Template, 5, 1, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r63.mainDoc4);
  }
}

function BillLodgementComponent_div_86_div_3_div_3_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Try Party Agreement ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "iframe", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const try_r86 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", try_r86, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeResourceUrl"]);
  }
}

function BillLodgementComponent_div_86_div_3_div_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, BillLodgementComponent_div_86_div_3_div_3_div_4_div_1_Template, 5, 1, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r64.mainDoc3);
  }
}

function BillLodgementComponent_div_86_div_3_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, BillLodgementComponent_div_86_div_3_div_3_div_1_Template, 24, 15, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, BillLodgementComponent_div_86_div_3_div_3_div_3_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, BillLodgementComponent_div_86_div_3_div_3_div_4_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r61.mainDoc1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r61.Question7 === "yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r61.Question2 === "yes");
  }
}

function BillLodgementComponent_div_86_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "iframe", 114)(2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, BillLodgementComponent_div_86_div_3_div_3_Template, 5, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r56.value, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeResourceUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r56.newDone);
  }
}

function BillLodgementComponent_div_86_h1_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "h1");
  }
}

function BillLodgementComponent_div_86_div_5_h1_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "h1", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Invoice Reduction");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function BillLodgementComponent_div_86_div_5_h1_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "h1", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Shipping Bill Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function BillLodgementComponent_div_86_div_5_tr_37_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const value_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", value_r92.pipoValue.damage, " ");
  }
}

function BillLodgementComponent_div_86_div_5_tr_37_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "input", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function BillLodgementComponent_div_86_div_5_tr_37_div_17_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r101);
      const value_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](value_r92.pipoValue.damage = $event);
    })("change", function BillLodgementComponent_div_86_div_5_tr_37_div_17_Template_input_change_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r101);
      const i_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().index;
      const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r102.updaterisevalue(i_r93));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const value_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", value_r92.pipoValue.damage);
  }
}

function BillLodgementComponent_div_86_div_5_tr_37_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BillLodgementComponent_div_86_div_5_tr_37_button_23_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r107);
      const i_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().index;
      const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r105.toSave(i_r93));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function BillLodgementComponent_div_86_div_5_tr_37_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BillLodgementComponent_div_86_div_5_tr_37_button_24_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r110);
      const i_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().index;
      const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r108.toEdit(i_r93));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function BillLodgementComponent_div_86_div_5_tr_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr", 131)(1, "td", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "td", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "td", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "td", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "td", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "td", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, BillLodgementComponent_div_86_div_5_tr_37_div_16_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, BillLodgementComponent_div_86_div_5_tr_37_div_17_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "td", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "td", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "td", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](23, BillLodgementComponent_div_86_div_5_tr_37_button_23_Template, 2, 0, "button", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](24, BillLodgementComponent_div_86_div_5_tr_37_button_24_Template, 2, 0, "button", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const value_r92 = ctx.$implicit;
    const i_r93 = ctx.index;
    const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", i_r93 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", value_r92.pipoValue.date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", value_r92.pipoValue.pi_poNo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", value_r92.portCode, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", value_r92.sbno, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", value_r92.sbdate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", value_r92.pipoValue.amount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r91.optionsVisibility[i_r93]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r91.optionsVisibility[i_r93]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", value_r92.pipoValue.realized, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", value_r92.advance, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r91.optionsVisibility[i_r93]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r91.optionsVisibility[i_r93]);
  }
}

function BillLodgementComponent_div_86_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 126, 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, BillLodgementComponent_div_86_div_5_h1_2_Template, 2, 0, "h1", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, BillLodgementComponent_div_86_div_5_h1_3_Template, 2, 0, "h1", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "table", 89, 130)(6, "tr", 131)(7, "td", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, " SL NO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "td", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, " Invoice Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "td", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, " Invoice No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "td", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, " Port Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "td", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, " Shipping ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, " Bill No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "td", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, " Shipping ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, " Bill Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "td", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, " Invoice Value ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "td", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, " Damage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, " Deduction ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "td", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30, " Value to be ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](31, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, " Realised ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "td", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34, " Forex Advice No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "td", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36, " Add Damage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](37, BillLodgementComponent_div_86_div_5_tr_37_Template, 25, 13, "tr", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r58.isProceed == false && ctx_r58.Question5 == "yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r58.isProceed == false && ctx_r58.Question5 == "no");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r58.invoiceArr);
  }
}

function BillLodgementComponent_div_86_div_6_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BillLodgementComponent_div_86_div_6_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r115);
      const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r114.hidePreview());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function BillLodgementComponent_div_86_div_6_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BillLodgementComponent_div_86_div_6_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r117);
      const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r116.showPreview());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Proceed to Preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function BillLodgementComponent_div_86_div_6_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BillLodgementComponent_div_86_div_6_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r119);
      const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r118.downloadAll("download"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Download All");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function BillLodgementComponent_div_86_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, BillLodgementComponent_div_86_div_6_button_1_Template, 2, 0, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, BillLodgementComponent_div_86_div_6_button_2_Template, 2, 0, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BillLodgementComponent_div_86_div_6_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r121);
      const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r120.exportToExcel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Download To Excel");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, BillLodgementComponent_div_86_div_6_button_5_Template, 2, 0, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r59.newDone);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r59.newDone);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r59.newDone);
  }
}

function BillLodgementComponent_div_86_div_7_iframe_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "iframe", 143);
  }

  if (rf & 2) {
    const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r122.dataImport, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeResourceUrl"]);
  }
}

function BillLodgementComponent_div_86_div_7_iframe_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "iframe", 125);
  }

  if (rf & 2) {
    const pipo_r126 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", pipo_r126, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeResourceUrl"]);
  }
}

function BillLodgementComponent_div_86_div_7_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Tri Party Documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function BillLodgementComponent_div_86_div_7_div_18_iframe_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "iframe", 125);
  }

  if (rf & 2) {
    const pipo_r128 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", pipo_r128, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeResourceUrl"]);
  }
}

function BillLodgementComponent_div_86_div_7_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, BillLodgementComponent_div_86_div_7_div_18_iframe_1_Template, 1, 1, "iframe", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r125.mainDoc3);
  }
}

function BillLodgementComponent_div_86_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r130 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Setup: 3 Preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "button", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Send it via Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, " Generated Document ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "iframe", 143)(9, "iframe", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, BillLodgementComponent_div_86_div_7_iframe_10_Template, 1, 1, "iframe", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, " SB Documents ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, BillLodgementComponent_div_86_div_7_iframe_14_Template, 1, 1, "iframe", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](15, "br")(16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, BillLodgementComponent_div_86_div_7_span_17_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, BillLodgementComponent_div_86_div_7_div_18_Template, 2, 1, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "br")(20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "button", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BillLodgementComponent_div_86_div_7_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r130);
      const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r129.edit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r60.data8, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeResourceUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r60.billOfCredit, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeResourceUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r60.Question5 == "yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r60.mainDoc1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r60.mainDoc3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r60.mainDoc3);
  }
}

function BillLodgementComponent_div_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, BillLodgementComponent_div_86_h1_2_Template, 1, 0, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, BillLodgementComponent_div_86_div_3_Template, 4, 2, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, BillLodgementComponent_div_86_h1_4_Template, 1, 0, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, BillLodgementComponent_div_86_div_5_Template, 38, 3, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, BillLodgementComponent_div_86_div_6_Template, 6, 3, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, BillLodgementComponent_div_86_div_7_Template, 23, 6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r10.isProceed == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r10.isProceed == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r10.isProceed == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r10.isProceed == false && ctx_r10.Question6 == "yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r10.isProceed == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r10.isProceed == true);
  }
}

function BillLodgementComponent_ng_template_87_option_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r136 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r136.como);
  }
}

function BillLodgementComponent_ng_template_87_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r138 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r138.loc);
  }
}

function BillLodgementComponent_ng_template_87_option_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r140 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r140.buyerName);
  }
}

function BillLodgementComponent_ng_template_87_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BillLodgementComponent_ng_template_87_tr_48_Template_tr_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r145);
      const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r144.changeCheckbox1(ctx_r144.item.sbno, ctx_r144.item));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "td", 135)(2, "input", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function BillLodgementComponent_ng_template_87_tr_48_Template_input_change_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r145);
      const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r146.changeCheckbox1(ctx_r146.item.sbno, ctx_r146.item));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "td", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "td", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "td", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "td", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r142 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r142.date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r142.pi_poNo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r142.buyerName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r142.commodity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r142.location, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r142.sbno, " ");
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

function BillLodgementComponent_ng_template_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r148 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 27)(1, "div", 2)(2, "div", 148)(3, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BillLodgementComponent_ng_template_87_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r148);
      const modal_r131 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](modal_r131.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 149)(7, "div", 150)(8, "div", 151)(9, "div", 10)(10, "div", 152)(11, "h6", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "Select PI/PO");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 35)(14, "select", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function BillLodgementComponent_ng_template_87_Template_select_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r148);
      const ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r149.nameSearch = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "commodity");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, BillLodgementComponent_ng_template_87_option_17_Template, 2, 1, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "select", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function BillLodgementComponent_ng_template_87_Template_select_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r148);
      const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r150.nameSearch1 = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, "location");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, BillLodgementComponent_ng_template_87_option_21_Template, 2, 1, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "select", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function BillLodgementComponent_ng_template_87_Template_select_ngModelChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r148);
      const ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r151.nameSearch2 = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, "BuyerName");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](25, BillLodgementComponent_ng_template_87_option_25_Template, 2, 1, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "input", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function BillLodgementComponent_ng_template_87_Template_input_ngModelChange_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r148);
      const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r152.startDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "input", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function BillLodgementComponent_ng_template_87_Template_input_ngModelChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r148);
      const ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r153.endDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "button", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BillLodgementComponent_ng_template_87_Template_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r148);
      const ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      ctx_r154.startDate = "";
      ctx_r154.endDate = "";
      ctx_r154.nameSearch = "";
      ctx_r154.nameSearch1 = "";
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r154.nameSearch2 = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "section", 157)(31, "table", 158)(32, "thead", 42)(33, "tr", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](34, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36, "DATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38, "INVOICE NUMBER");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40, "CONSIGNEE NAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](42, "COMMODITY");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44, "LOCATION");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](46, "SB NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](48, BillLodgementComponent_ng_template_87_tr_48_Template, 15, 6, "tr", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](49, "filtera");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](50, "filterb");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()()()()()();
  }

  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r12.nameSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r12.item6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r12.nameSearch1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r12.item7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r12.nameSearch2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r12.buyerDetail);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r12.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r12.endDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](49, 9, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind3"](50, 12, ctx_r12.item, ctx_r12.startDate, ctx_r12.endDate), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction3"](22, _c6, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](16, _c3, ctx_r12.nameSearch), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](18, _c4, ctx_r12.nameSearch1), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](20, _c5, ctx_r12.nameSearch2))));
  }
}

function BillLodgementComponent_ng_template_89_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r171 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 167)(1, "h6", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " Credit Note");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "input", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function BillLodgementComponent_ng_template_89_div_19_Template_input_change_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r171);
      const ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r170.addPdfToSelectedPdf(ctx_r170.creditNote, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "iframe", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r156.creditNote, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeResourceUrl"]);
  }
}

function BillLodgementComponent_ng_template_89_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r173 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 167)(1, "h6", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " Debit Note ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "input", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function BillLodgementComponent_ng_template_89_div_20_Template_input_change_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r173);
      const ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r172.addPdfToSelectedPdf(ctx_r172.debitNote, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "iframe", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r157.debitNote, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeResourceUrl"]);
  }
}

function BillLodgementComponent_ng_template_89_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r175 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 167)(1, "h6", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "EBRC");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "input", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function BillLodgementComponent_ng_template_89_div_21_Template_input_change_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r175);
      const ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r174.addPdfToSelectedPdf(ctx_r174.ebrc, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "iframe", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r158.ebrc, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeResourceUrl"]);
  }
}

function BillLodgementComponent_ng_template_89_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r177 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 167)(1, "h6", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "BL Copyref");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "input", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function BillLodgementComponent_ng_template_89_div_22_Template_input_change_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r177);
      const ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r176.addPdfToSelectedPdf(ctx_r176.blcopyref, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "iframe", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r159.blcopyref, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeResourceUrl"]);
  }
}

function BillLodgementComponent_ng_template_89_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r179 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 167)(1, "h6", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "IRAdvice");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "input", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function BillLodgementComponent_ng_template_89_div_23_Template_input_change_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r179);
      const ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r178.addPdfToSelectedPdf(ctx_r178.irAdvice, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "iframe", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r160.irAdvice, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeResourceUrl"]);
  }
}

function BillLodgementComponent_ng_template_89_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r181 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 167)(1, "h6", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Swift Copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "input", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function BillLodgementComponent_ng_template_89_div_24_Template_input_change_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r181);
      const ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r180.addPdfToSelectedPdf(ctx_r180.swiftCopy, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "iframe", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r161.swiftCopy, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeResourceUrl"]);
  }
}

function BillLodgementComponent_ng_template_89_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r183 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 167)(1, "h6", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Letter Of Credit");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "input", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function BillLodgementComponent_ng_template_89_div_25_Template_input_change_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r183);
      const ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r182.addPdfToSelectedPdf(ctx_r182.lcCopy, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "iframe", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r162.lcCopy, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeResourceUrl"]);
  }
}

function BillLodgementComponent_ng_template_89_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r185 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 167)(1, "h6", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Tri Party Agreement");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "input", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function BillLodgementComponent_ng_template_89_div_26_Template_input_change_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r185);
      const ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r184.addPdfToSelectedPdf(ctx_r184.tryPartyAgreement, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "iframe", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r163.tryPartyAgreement, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeResourceUrl"]);
  }
}

function BillLodgementComponent_ng_template_89_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r187 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 167)(1, "h6", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Opinion Report");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "input", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function BillLodgementComponent_ng_template_89_div_27_Template_input_change_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r187);
      const ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r186.addPdfToSelectedPdf(ctx_r186.opinionReport, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "iframe", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r164.opinionReport, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeResourceUrl"]);
  }
}

function BillLodgementComponent_ng_template_89_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r189 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 167)(1, "h6", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Airway/BlCopy");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "input", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function BillLodgementComponent_ng_template_89_div_28_Template_input_change_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r189);
      const ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r188.addPdfToSelectedPdf(ctx_r188.airwayBlCopy, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "iframe", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r165.airwayBlCopy, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeResourceUrl"]);
  }
}

function BillLodgementComponent_ng_template_89_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r191 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 167)(1, "h6", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Bill Of Exchange");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "input", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function BillLodgementComponent_ng_template_89_div_29_Template_input_change_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r191);
      const ctx_r190 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r190.addPdfToSelectedPdf(ctx_r190.billOfExchange, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "iframe", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r166.billOfExchange, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeResourceUrl"]);
  }
}

function BillLodgementComponent_ng_template_89_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r193 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 167)(1, "h6", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Destruction");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "input", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function BillLodgementComponent_ng_template_89_div_30_Template_input_change_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r193);
      const ctx_r192 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r192.addPdfToSelectedPdf(ctx_r192.destruction, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "iframe", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r167.destruction, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeResourceUrl"]);
  }
}

function BillLodgementComponent_ng_template_89_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r195 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 167)(1, "h6", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Commercial");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "input", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function BillLodgementComponent_ng_template_89_div_31_Template_input_change_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r195);
      const ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r194.addPdfToSelectedPdf(ctx_r194.commercial, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "iframe", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r168.commercial, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeResourceUrl"]);
  }
}

function BillLodgementComponent_ng_template_89_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r197 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 167)(1, "h6", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Packing List Document");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "input", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function BillLodgementComponent_ng_template_89_div_32_Template_input_change_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r197);
      const ctx_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r196.addPdfToSelectedPdf(ctx_r196.otherDoc, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "iframe", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r169.packingList, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeResourceUrl"]);
  }
}

function BillLodgementComponent_ng_template_89_Template(rf, ctx) {
  if (rf & 1) {
    const _r199 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 163)(1, "div", 148)(2, "div", 164)(3, "div", 150)(4, "div", 165)(5, "div", 10)(6, "div", 152)(7, "p", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "Select Document To Download or Send to mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 167)(10, "p", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "Generated Document");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "input", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function BillLodgementComponent_ng_template_89_Template_input_change_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r199);
      const ctx_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r198.addPdfToSelectedPdf2(ctx_r198.value, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "iframe", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 167)(15, "p", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "SB Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "input", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function BillLodgementComponent_ng_template_89_Template_input_change_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r199);
      const ctx_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r200.addPdfToSelectedPdf(ctx_r200.currentDownloadPdf, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "iframe", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, BillLodgementComponent_ng_template_89_div_19_Template, 5, 1, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, BillLodgementComponent_ng_template_89_div_20_Template, 5, 1, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, BillLodgementComponent_ng_template_89_div_21_Template, 5, 1, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](22, BillLodgementComponent_ng_template_89_div_22_Template, 5, 1, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](23, BillLodgementComponent_ng_template_89_div_23_Template, 5, 1, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](24, BillLodgementComponent_ng_template_89_div_24_Template, 5, 1, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](25, BillLodgementComponent_ng_template_89_div_25_Template, 5, 1, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](26, BillLodgementComponent_ng_template_89_div_26_Template, 5, 1, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](27, BillLodgementComponent_ng_template_89_div_27_Template, 5, 1, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](28, BillLodgementComponent_ng_template_89_div_28_Template, 5, 1, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](29, BillLodgementComponent_ng_template_89_div_29_Template, 5, 1, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](30, BillLodgementComponent_ng_template_89_div_30_Template, 5, 1, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](31, BillLodgementComponent_ng_template_89_div_31_Template, 5, 1, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](32, BillLodgementComponent_ng_template_89_div_32_Template, 5, 1, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "div", 172)(34, "button", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BillLodgementComponent_ng_template_89_Template_button_click_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r199);
      const ctx_r201 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r201.mergeAllPDFs("download"));
    })("click", function BillLodgementComponent_ng_template_89_Template_button_click_34_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r199);
      const modal_r155 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](modal_r155.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35, "download PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "button", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BillLodgementComponent_ng_template_89_Template_button_click_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r199);
      const ctx_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r203.mergeAllPDFs("sendMail"));
    })("click", function BillLodgementComponent_ng_template_89_Template_button_click_36_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r199);
      const modal_r155 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](modal_r155.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37, "Send Mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()()()();
  }

  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r14.value, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeResourceUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r14.currentDownloadPdf, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeResourceUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r14.randomArray[0].creditNote);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r14.randomArray[0].debitNote);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r14.randomArray[0].EBRC);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r14.randomArray[0].blcopyref);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r14.randomArray[0].irAdvice);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r14.randomArray[0].swiftCopy);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r14.randomArray[0].lcCopy);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r14.randomArray[0].tryPartyAgreement);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r14.randomArray[0].opinionReport);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r14.randomArray[0].airwayBlCopy);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r14.randomArray[0].billOfExchange);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r14.randomArray[0].destruction);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r14.randomArray[0].commercial);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r14.randomArray[0].packingList);
  }
}

function BillLodgementComponent_option_108_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r205 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r205);
  }
}

function BillLodgementComponent_tr_129_Template(rf, ctx) {
  if (rf & 1) {
    const _r210 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr", 175)(1, "td", 135)(2, "input", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function BillLodgementComponent_tr_129_Template_input_change_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r210);
      const data_r207 = restoredCtx.$implicit;
      const ctx_r209 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      ctx_r209.changeCheckbox1(data_r207.sbno, data_r207);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r209.addTofilter1($event, data_r207._id, data_r207));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "td", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "td", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "td", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "td", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r207 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r207.sbdate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r207.sbno, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r207.buyerName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r207.fobCurrency, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r207.fobValue, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r207.balanceAvai, " ");
  }
}

function BillLodgementComponent_option_154_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r211 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r211);
  }
}

function BillLodgementComponent_tbody_171_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r217 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr", 175)(1, "td", 135)(2, "input", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function BillLodgementComponent_tbody_171_tr_1_Template_input_change_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r217);
      const data_r214 = restoredCtx.$implicit;
      const ctx_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r216.addToSbArray(data_r214, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "td", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "td", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r214 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r214.billNo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r214.partyName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r214.amount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r214.BalanceAvail, " ");
  }
}

const _c7 = function (a0) {
  return {
    partyName: a0
  };
};

const _c8 = function (a0) {
  return [a0];
};

function BillLodgementComponent_tbody_171_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, BillLodgementComponent_tbody_171_tr_1_Template, 11, 4, "tr", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "fiterbuyer");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](2, 1, ctx_r20.item13, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](6, _c8, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](4, _c7, ctx_r20.nameSearch3))));
  }
}

let BillLodgementComponent = /*#__PURE__*/(() => {
  class BillLodgementComponent {
    constructor(documentService, router, sanitizer, route, toastr, userService, confirmDialogService, formBuilder, modalService, wininfo, shippingBillService) {
      var _this = this;

      this.documentService = documentService;
      this.router = router;
      this.sanitizer = sanitizer;
      this.route = route;
      this.toastr = toastr;
      this.userService = userService;
      this.confirmDialogService = confirmDialogService;
      this.formBuilder = formBuilder;
      this.modalService = modalService;
      this.wininfo = wininfo;
      this.shippingBillService = shippingBillService;
      this.item1 = [];
      this.itemArray = [];
      this.select = false;
      this.export = false;
      this.import = false;
      this.showPdf = false;
      this.greaterAmount = 0;
      this.selectedDoc = '';
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
      this.optionsVisibility = [];
      this.itemArray1 = [];
      this.irBuyerName = [];
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
      this.lcArray = [];
      this.generate0 = false;
      this.generate3 = false;
      this.generate1 = false;
      this.generate2 = false;
      this.generate4 = false;
      this.generate5 = false;
      this.generate6 = false;
      this.data7 = [];
      this.doc = [];
      this.randomArray = [];
      this.generatePurpose = [];
      this.sbPurpose = [];
      this.sbPurpose1 = [];
      this.importPurpose = [];
      this.noImportPurpose = [];
      this.donePurpose = [];
      this.doneSbPurpose = [];
      this.doneImportPurpose = [];
      this.mainDoc = [];
      this.mainDoc1 = [];
      this.data9 = [];
      this.sbPurposeDone1 = [];
      this.item4 = [];
      this.item13 = [];
      this.newTask = [];
      this.Task = [];
      this.zToggle = [];
      this.isGenerate = false;
      this.isProceed = false;
      this.advanceRef = '';
      this.arr = [];
      this.LcNumber = '';
      this.bankArray = [];
      this.bankToggle = '';
      this.bank = [];
      this.allBank = [];
      this.newBankArray = [];
      this.arrayPipo = [];
      this.myArr = [];
      this.dateArray = [];
      this.teamName1 = '';
      this.teamName2 = [];
      this.teamName3 = [];
      this.teamName4 = [];
      this.completewords = '';
      this.devideContent = '';
      this.address1 = '';
      this.address2 = '';
      this.address3 = '';
      this.team1 = '';
      this.team2 = '';
      this.team3 = '';
      this.completewords2 = '';
      this.devideContent2 = '';
      this.addressLine1 = '';
      this.addressLine2 = [];
      this.addressLine3 = [];
      this.addressLine4 = [];
      this.completewords3 = '';
      this.devideContent3 = '';
      this.buyer1 = '';
      this.buyer2 = [];
      this.buyer3 = [];
      this.buyName1 = ' ';
      this.buyName2 = ' ';
      this.completewords4 = '';
      this.devideContent4 = '';
      this.buyerAdd2 = [];
      this.buyerAdd3 = [];
      this.buyerAdd4 = [];
      this.buyerAds1 = ' ';
      this.buyerAds2 = ' ';
      this.buyerAds3 = ' ';
      this.amArr = [];
      this.pipo = false;
      this.ship = false;
      this.nameSearch = '';
      this.nameSearch1 = '';
      this.nameSearch2 = '';
      this.nameSearch3 = '';
      this.nameSearch4 = '';
      this.item6 = [];
      this.item7 = [];
      this.item = [];
      this.item8 = [];
      this.item9 = [];
      this.item10 = [];
      this.item11 = [];
      this.buyerDetail = [];
      this.startDate = '';
      this.endDate = '';
      this.model = {
        option: 'Bank options'
      };
      this.model1 = {
        option: 'Bank options'
      };
      this.selectedPdfs = [];
      this.advanceArray = [];
      this.buyerName = [];
      this.advanceForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroup({
        advance: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormArray([this.initCourse()], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required)
      });
      this.sbDataArray = [];
      this.filterToggle = false;
      this.generateChecked = true;
      this.SHIPPING_BILL = '';
      this.SHIPPING_BILL_LIST = [{
        value: 'Shipping bill'
      }];
      this.ThirdPartydata = [];
      this.Letter_Of_Credit = [];
      this.changevalue = '';
      this.shippingMap = new Map();

      this.downloadAsSingleFile = /*#__PURE__*/function () {
        var _ref = (0,D_Bharathexim_Repo_docmachine_frontend_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (pdfDoc) {
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

            console.log('merge doc', base64String);
            var genDoc = 'data:application/pdf;base64,' + base64String;
            const byteCharacters = atob(base64String);
            const byteNumbers = new Array(byteCharacters.length);

            for (let i = 0; i < byteCharacters.length; i++) {
              byteNumbers[i] = byteCharacters.charCodeAt(i); // console.log("bytenumbers", byteNumbers[i])
            }

            _this.doneDox(genDoc);

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

            _this.doneDox(genDoc);

            const byteArray1 = new Uint8Array(byteNumbers1);
            (0,file_saver__WEBPACK_IMPORTED_MODULE_6__.saveAs)(new Blob([byteArray1], {
              type: 'application/pdf'
            }), 'BankAttachment');
          }
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }();

      this.sendMail = /*#__PURE__*/function () {
        var _ref2 = (0,D_Bharathexim_Repo_docmachine_frontend_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (pdfDoc) {
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

            var genDoc = 'data:application/pdf;base64,' + base64String; // console.log("line no. 3328", this.genDoc)

            _this.doneDox(genDoc);

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

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }();

      this.mergeAllPDFs = /*#__PURE__*/function () {
        var _ref3 = (0,D_Bharathexim_Repo_docmachine_frontend_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (type) {
          let urls = _this.selectedPdfs;
          const numDocs = urls.length;
          const pdfDoc = yield pdf_lib__WEBPACK_IMPORTED_MODULE_5__.PDFDocument.create(); // download the single file to local.
          // Append each pdfs to a single file

          var appendEachPage = /*#__PURE__*/function () {
            var _ref4 = (0,D_Bharathexim_Repo_docmachine_frontend_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (donorPdfDoc, currentpage, docLength) {
              if (currentpage < docLength) {
                console.log('Inside Page', currentpage, 'total pages', docLength);
                const [donorPage] = yield pdfDoc.copyPages(donorPdfDoc, [currentpage]);
                pdfDoc.addPage(donorPage);
                yield appendEachPage(donorPdfDoc, currentpage + 1, docLength);
              }
            });

            return function appendEachPage(_x4, _x5, _x6) {
              return _ref4.apply(this, arguments);
            };
          }();

          var appendEachFile = /*#__PURE__*/function () {
            var _ref5 = (0,D_Bharathexim_Repo_docmachine_frontend_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (bytes) {
              const donorPdfDoc = yield pdf_lib__WEBPACK_IMPORTED_MODULE_5__.PDFDocument.load(bytes);
              const docLength = donorPdfDoc.getPageCount();
              console.log('donorPdfDoc', donorPdfDoc, 'docLength', docLength);
              yield appendEachPage(donorPdfDoc, 0, docLength);
            });

            return function appendEachFile(_x7) {
              return _ref5.apply(this, arguments);
            };
          }();

          var appendAllFiles = /*#__PURE__*/function () {
            var _ref6 = (0,D_Bharathexim_Repo_docmachine_frontend_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (pdflist, currentfile) {
              if (currentfile < numDocs) {
                yield appendEachFile(pdflist[currentfile]);
                console.log('Inside file', currentfile);
                yield appendAllFiles(pdflist, currentfile + 1);
              } else {
                if (type == 'download') {
                  _this.downloadAsSingleFile(pdfDoc);
                } else {
                  _this.sendMail(pdfDoc);
                }
              }
            });

            return function appendAllFiles(_x8, _x9) {
              return _ref6.apply(this, arguments);
            };
          }(); // download single file;


          let downloadEachFile = filename => {
            return new Promise((resolve, reject) => {
              _this.userService.mergePdf(filename).subscribe(res => {
                console.log('res', res);
                resolve(res.arrayBuffer());
              }, err => reject('Failed to fetch the pdf'));
            });
          }; // download all the pdfs


          let downloadAllFiles = () => {
            var promises = [];

            for (var i = 0; i < numDocs; i++) {
              let filename = urls[i].substring(urls[i].lastIndexOf('/') + 1);
              promises.push(downloadEachFile(filename));
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

        return function (_x3) {
          return _ref3.apply(this, arguments);
        };
      }();

      this.downloadFile2 = (blob, fileName) => {
        const link = document.createElement('a'); // create a blobURI pointing to our Blob

        link.href = URL.createObjectURL(blob);
        link.download = fileName; // some browser needs the anchor to be in the doc

        document.body.append(link);
        link.click();
        link.remove(); // in case the Blob uses a lot of memory

        setTimeout(() => URL.revokeObjectURL(link.href), 7000);
      }; // downloadFile(new Blob(['random data']), "myfile.txt");


      this.downloadAll = /*#__PURE__*/function () {
        var _ref7 = (0,D_Bharathexim_Repo_docmachine_frontend_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (type) {
          // this.downloadALL = [];
          var proceedtoDownloadPdf = /*#__PURE__*/function () {
            var _ref8 = (0,D_Bharathexim_Repo_docmachine_frontend_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (download, sbno) {
              console.log('line 3377', download);
              let urls = download;
              const numDocs = urls.length;
              const pdfDoc = yield pdf_lib__WEBPACK_IMPORTED_MODULE_5__.PDFDocument.create();

              var appendEachPage = /*#__PURE__*/function () {
                var _ref9 = (0,D_Bharathexim_Repo_docmachine_frontend_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (donorPdfDoc, currentpage, docLength) {
                  console.log('line 3383', currentpage);

                  if (currentpage < docLength) {
                    console.log('Inside Page', currentpage, 'total pages', docLength);
                    const [donorPage] = yield pdfDoc.copyPages(donorPdfDoc, [currentpage]);
                    pdfDoc.addPage(donorPage);
                    yield appendEachPage(donorPdfDoc, currentpage + 1, docLength);
                  }
                });

                return function appendEachPage(_x13, _x14, _x15) {
                  return _ref9.apply(this, arguments);
                };
              }();

              var appendEachFile = /*#__PURE__*/function () {
                var _ref10 = (0,D_Bharathexim_Repo_docmachine_frontend_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (bytes) {
                  const donorPdfDoc = yield pdf_lib__WEBPACK_IMPORTED_MODULE_5__.PDFDocument.load(bytes);
                  const docLength = donorPdfDoc.getPageCount();
                  console.log('donorPdfDoc', donorPdfDoc, 'docLength', docLength);
                  yield appendEachPage(donorPdfDoc, 0, docLength);
                });

                return function appendEachFile(_x16) {
                  return _ref10.apply(this, arguments);
                };
              }();

              var appendAllFiles = /*#__PURE__*/function () {
                var _ref11 = (0,D_Bharathexim_Repo_docmachine_frontend_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (pdflist, currentfile) {
                  if (currentfile < numDocs) {
                    yield appendEachFile(pdflist[currentfile]);
                    console.log('Inside file', currentfile);
                    yield appendAllFiles(pdflist, currentfile + 1);
                  } else {
                    if (type == 'download') {
                      console.log(pdfDoc);
                      yield _this.BulkDOwnload(pdfDoc, sbno);
                    } //   // else {
                    //   //   this.sendMail(pdfDoc);
                    //   // }

                  }
                });

                return function appendAllFiles(_x17, _x18) {
                  return _ref11.apply(this, arguments);
                };
              }(); // download single file;


              let downloadEachFile = filename => {
                return new Promise((resolve, reject) => {
                  _this.userService.mergePdf(filename).subscribe(res => {
                    console.log('res', res);
                    resolve(res.arrayBuffer());
                  }, err => reject('Failed to fetch the pdf'));
                });
              }; // download all the pdfs


              let downloadAllFiles = () => {
                var promises = [];

                for (var i = 0; i < numDocs; i++) {
                  let filename = urls[i].substring(urls[i].lastIndexOf('/') + 1);
                  promises.push(downloadEachFile(filename));
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

            return function proceedtoDownloadPdf(_x11, _x12) {
              return _ref8.apply(this, arguments);
            };
          }();

          var bulkDownloadSingle = /*#__PURE__*/function () {
            var _ref12 = (0,D_Bharathexim_Repo_docmachine_frontend_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (mainDoc1, index) {
              if (mainDoc1[index]) {
                let sb = mainDoc1[index];
                var downloadALL = [];
                downloadALL.push(sb.changingThisBreaksApplicationSecurity);

                if (_this.creditNote.changingThisBreaksApplicationSecurity) {
                  downloadALL.push(_this.creditNote.changingThisBreaksApplicationSecurity);
                }

                if (_this.debitNote.changingThisBreaksApplicationSecurity) {
                  downloadALL.push(_this.debitNote.changingThisBreaksApplicationSecurity);
                }

                if (_this.ebrc.changingThisBreaksApplicationSecurity) {
                  downloadALL.push(_this.ebrc.changingThisBreaksApplicationSecurity);
                }

                if (_this.blcopyref.changingThisBreaksApplicationSecurity) {
                  downloadALL.push(_this.blcopyref.changingThisBreaksApplicationSecurity);
                }

                if (_this.irAdvice.changingThisBreaksApplicationSecurity) {
                  downloadALL.push(_this.irAdvice.changingThisBreaksApplicationSecurity);
                }

                if (_this.swiftCopy.changingThisBreaksApplicationSecurity) {
                  downloadALL.push(_this.swiftCopy.changingThisBreaksApplicationSecurity);
                }

                if (_this.tryPartyAgreement.changingThisBreaksApplicationSecurity) {
                  downloadALL.push(_this.tryPartyAgreement.changingThisBreaksApplicationSecurity);
                }

                if (_this.airwayBlCopy.changingThisBreaksApplicationSecurity) {
                  downloadALL.push(_this.airwayBlCopy.changingThisBreaksApplicationSecurity);
                }

                if (_this.billOfExchange.changingThisBreaksApplicationSecurity) {
                  downloadALL.push(_this.billOfExchange.changingThisBreaksApplicationSecurity);
                }

                if (_this.destruction.changingThisBreaksApplicationSecurity) {
                  downloadALL.push(_this.destruction.changingThisBreaksApplicationSecurity);
                }

                if (_this.commercial.changingThisBreaksApplicationSecurity) {
                  downloadALL.push(_this.commercial.changingThisBreaksApplicationSecurity);
                }

                if (_this.packingList.changingThisBreaksApplicationSecurity) {
                  downloadALL.push(_this.packingList.changingThisBreaksApplicationSecurity);
                }

                if (_this.lcCopy.changingThisBreaksApplicationSecurity) {
                  downloadALL.push(_this.lcCopy.changingThisBreaksApplicationSecurity);
                }

                for (let lc of _this.mainDoc4) {
                  downloadALL.push(lc.changingThisBreaksApplicationSecurity);
                }

                for (let tri of _this.mainDoc3) {
                  downloadALL.push(tri.changingThisBreaksApplicationSecurity);
                }

                console.log('line 3448', downloadALL);
                yield proceedtoDownloadPdf(downloadALL, _this.sbArray[index]);
                yield bulkDownloadSingle(mainDoc1, index + 1); // this.downloadALL.push(sb.changingThisBreaksApplicationSecurity)
              }
            });

            return function bulkDownloadSingle(_x19, _x20) {
              return _ref12.apply(this, arguments);
            };
          }();

          yield bulkDownloadSingle(_this.mainDoc1, 0); // console.log("3530", thi)
          // if (this.currentDownloadPdf.changingThisBreaksApplicationSecurity) {
          //   this.downloadALL.push(
          //     this.currentDownloadPdf.changingThisBreaksApplicationSecurity
          //   );
          // }
        });

        return function (_x10) {
          return _ref7.apply(this, arguments);
        };
      }();

      this.BulkDOwnload = /*#__PURE__*/function () {
        var _ref13 = (0,D_Bharathexim_Repo_docmachine_frontend_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (pdfDoc, sbno) {
          const pdfDataUri = yield pdfDoc.saveAsBase64({
            dataUri: true
          });
          var data_pdf = pdfDataUri.substring(pdfDataUri.indexOf(',') + 1);
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

          console.log('mergeDoc', base64String);
          var genDoc = 'data:application/pdf;base64,' + base64String;
          const byteCharacters = atob(base64String);
          const byteNumbers = new Array(byteCharacters.length);

          for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i); // console.log("bytenumbers", byteNumbers[i])
          }

          _this.doneDox(genDoc);

          let filenameforDoc = sbno && sbno.length ? sbno : 'BankAttachment';
          const byteArray = new Uint8Array(byteNumbers);
          (0,file_saver__WEBPACK_IMPORTED_MODULE_6__.saveAs)(new Blob([byteArray], {
            type: 'application/pdf'
          }), filenameforDoc);
        });

        return function (_x21, _x22) {
          return _ref13.apply(this, arguments);
        };
      }();

      this.Lodgement = {
        'AgainstAdvanceReceipt': {
          Show: '',
          Hide: ''
        },
        'UnderLC': {
          Show: '',
          Hide: ''
        },
        'BuyerRemitterDifferent': {
          Show: '',
          Hide: ''
        },
        'InvoiceReduction': {
          Show: '',
          Hide: ''
        },
        'WithDiscount': {
          Show: '',
          Hide: ''
        },
        'WithScrutiny': {
          Show: '',
          Hide: ''
        }
      };
      console.log('hello'); // this.onAddCourse("e")
    }

    ngOnInit() {
      this.wininfo.set_controller_of_width(230, '.content_top_common');
      this.redirectid = this.route.snapshot.paramMap.get('pipo');
      this.redirectindex = this.route.snapshot.paramMap.get('index');
      this.redirectpage = this.route.snapshot.paramMap.get('page');
      console.log('pipoId', this.redirectid);
      console.log(_inward_json__WEBPACK_IMPORTED_MODULE_2__);
      this.jsondata = _inward_json__WEBPACK_IMPORTED_MODULE_2__;
      console.log(this.jsondata[0].purpose);
      this.dataJson = this.jsondata; //PI/PO API

      this.documentService.getPipo().subscribe(res => {
        console.log('Data fetched successfully', res);
        this.item = res.data, console.log('pipo', this.item);
      }, err => console.log(err));
      this.userService.getBuyer(1).subscribe(res => {
        this.buyerDetail = res.data, console.log('Benne Detail4', this.buyerDetail);
      }, err => console.log('Error', err)); // used details

      this.userService.getUserDetail().then(res => {
        console.log('********USer Details', res);
        this.id = res.result.emailId;
        console.log('***********userId', this.id);
      });
      this.documentService.getIrAdvice(1).subscribe(res => {
        console.log(res), this.item9 = res.data;
        console.log('line no. 324 data', this.item9);
        this.mergeIr();
        this.mergeIr2();
        this.item9.forEach((element, i) => {
          this.irBuyerName[i] = element.partyName;
        });
        this.irBuyerName = this.irBuyerName.filter((value, index) => this.irBuyerName.indexOf(value) === index);
        console.log('line no. 329 data', this.irBuyerName);
      }, err => console.log(err));
      this.documentService.getLetterLC().subscribe(res => {
        console.log(res), this.item8 = res.data;
        console.log('LC Data', this.item8);
      }, err => console.log(err));
      this.route.params.subscribe(params => {
        this.file = this.route.snapshot.params['file'];
        this.showInvoice = false;
        console.log('hello');
      });
      this.shippingBillService.getShippingBillList().then(res => {
        this.shippingBillService.shippingbills$.subscribe(data => {
          console.log('getShippingBillList', data);
          this.documentService.getMaster(1).subscribe(res => {
            console.log(res);
            this.item1 = res?.data;
            console.log('getMaster Data', this.item1);
            this.item1.forEach((element, i) => {
              this.buyerName[i] = element.buyerName;
            });

            for (let index = 0; index < data.length; index++) {
              this.item1[index]['balanceAvai'] = data[index]?.balanceAvai != null && data[index]?.balanceAvai != undefined ? data[index]?.balanceAvai : '0';
            } // this.mergeIr();
            // this.mergeIr2();


            console.log('buyerName', this.buyerName);
          }, err => console.log(err));
        });
      });
      this.documentService.getThird().subscribe(res => {
        console.log('HEre Response Third', res);
        this.item12 = res.data;
        console.log('Try Party', this.item12);
        var temp = [];

        for (let value of this.item12) {
          if (value['file'] == 'export') {
            temp.push(value?.triPartyAgreementNumber);
            this.item4.push(value);
            console.log('awwww', this.item4);
          }
        }

        for (let index = 0; index < temp.length; index++) {
          if (!this.ThirdPartydata.includes(temp[index])) {
            this.ThirdPartydata.push({
              try_part_agreement: temp[index]
            });
          }
        }
      }, err => console.log(err)); // // credit note Api

      this.documentService.getCredit().subscribe(res => {
        console.log('HEre Responsesssssssss', res);
        this.item10 = res.data;
        console.log('credit data', this.item10);

        for (let value of this.item10) {
          if (value['file'] == 'export') {
            this.item11.push(value);
            console.log('awwww', this.item11);
          }
        }
      }, err => console.log(err));
      this.userService.getTeam().subscribe(data => {
        console.log('king123');
        console.log(data['data'][0]);
        this.item5 = data['data'][0];
        console.log('this is exporter addres', this.item5);
        this.arr = this.item5.gst.split('');
        console.log(this.arr);
        this.teamName1 = this.item5.teamName;
        this.addressLine1 = this.item5.adress;
        this.completewords = this.teamName1.split(' ');
        this.devideContent = this.completewords.length;

        for (let i = 0; i < this.completewords.length; i++) {
          if (i < 6) {
            this.teamName2.push(this.completewords[i]);
          } else if (i > 5 && i <= 11) {
            this.teamName3.push(this.completewords[i]);
          }
        }

        this.team1 = this.teamName2.join(' ');
        this.team2 = this.teamName3.join(' ');
        console.log('*************************Shailendra', this.team1);
        console.log('*************************ShailendraAddress', this.team2);
        this.completewords2 = this.addressLine1.split(' ');
        this.devideContent2 = this.completewords2.length;

        for (let i = 0; i < this.completewords2.length; i++) {
          if (i < 6) {
            this.addressLine2.push(this.completewords2[i]);
          } else if (i > 5 && i <= 11) {
            this.addressLine3.push(this.completewords2[i]);
          } else if (i > 11) {
            this.addressLine4.push(this.completewords2[i]);
          }
        }

        this.address1 = this.addressLine2.join(' ');
        this.address2 = this.addressLine3.join(' ');
        this.address3 = this.addressLine4.join(' ');
        this.bankArray = this.item5.bankDetails;

        for (let value of this.bankArray) {
          this.allBank.push(value.bank);
        }

        console.log(this.allBank);
        this.bank = this.allBank.filter(function (item, index, inputArray) {
          return inputArray.indexOf(item) == index;
        });
        console.log(this.bank, 'bank.....................');
      }, error => {
        console.log('error');
      });
      this.Letter_Of_Credit = [];
      this.documentService.getLetterLC().subscribe(res => {
        console.log('Res', res);

        for (let value of res.data) {
          if (value['file'] == 'export') {
            this.Letter_Of_Credit.push(value);
          }
        }
      }, err => console.log(err));
      console.log('this is me');
      console.log('main array*********', this.sbArray);

      if (this.documentService.draft) {
        this.generate = true;
        this.isGenerate = true;
        console.log(this.documentService.task);
        console.log(this.documentService.task.task[0]);

        if (this.documentService.task.task[0].ir == 'yes') {
          console.log('this is ir');
          this.Question5 == this.documentService.task.task[0].ir;
        } else if (this.documentService.task.task[0].ir == 'no') {
          this.Question5 == this.documentService.task.task[0].ir;
        }

        if (this.documentService.task.task[0].sbUrls) {
          console.log('this is sb');
          let k = 0;
          let gene = [];

          for (let value of this.documentService.task.task[0].sbUrls) {
            let r = value.changingThisBreaksApplicationSecurity;
            gene.push(this.sanitizer.bypassSecurityTrustResourceUrl(r));
            k++;
          }

          this.mainDoc1 = gene;
          this.sbArray = this.documentService.task.task[0].sbNumbers;
        }

        if (this.documentService.task.task[0].tryUrls) {
          let h = 0;
          let gene = [];

          for (let value of this.documentService.task.task[0].tryUrls) {
            gene.push(this.sanitizer.bypassSecurityTrustResourceUrl(value.changingThisBreaksApplicationSecurity));
            h++;
          }

          this.mainDoc3 = gene;
          this.tryArray = this.documentService.task.task[0].triPartyAgreementNumber;
        }

        if (this.documentService.task.task[0].lcUrls) {
          let h = 0;
          let gene = [];

          for (let value of this.documentService.task.task[0].lcUrls) {
            gene.push(this.sanitizer.bypassSecurityTrustResourceUrl(value.changingThisBreaksApplicationSecurity));
            h++;
          }

          this.mainDoc4 = gene;
          this.lcArray = this.documentService.task.task[0].letterOfCreditNumber;
        }
      } else {
        // this.Question5 = ''
        console.log('line no.505 question5 data', this.Question5);
      }
    }

    searchData1(a) {
      console.log('hello', a);
      console.log(a.length);

      if (a.length > 0) {
        let arr = [];

        for (let value of this.item1) {
          console.log('value of buyername****', value);
          console.log('value of buyername', value.buyerName);

          if (value.buyerName.includes(a) || value.sbno.includes(a)) {
            console.log('shaile***************', value.buyerName);
            arr.push(value);
          }
        }

        this.itemArray = arr;
        this.filterToggle = true; // console.log("shaile***************", this.itemArray)
      } else {
        this.filterToggle = false;
        console.log('else');
      } // console.log("shailendra buyerName", a.buyerName)

    }

    fireEvent() {
      const ws = xlsx__WEBPACK_IMPORTED_MODULE_12__.utils.table_to_sheet(this.table.nativeElement);
      const wb = xlsx__WEBPACK_IMPORTED_MODULE_12__.utils.book_new();
      console.log(wb);
      xlsx__WEBPACK_IMPORTED_MODULE_12__.utils.book_append_sheet(wb, ws, 'Sheet1');
      console.log(wb);
      /* save to file */

      xlsx__WEBPACK_IMPORTED_MODULE_12__.writeFile(wb, 'SheetJS.xlsx');
    }

    changeCheckbox1(a, data) {
      // let value = a + " - " +
      if (data.blCopyDoc) {
        if (data.commercialDoc) {
          if (data.packingDoc) {
            let j = this.sbArray.indexOf(a);

            if (j == -1) {
              this.sbArray.push(a);
            } else {
              this.sbArray.splice(j, 1);
            }

            console.log('Shailendra//////////--', this.sbArray);
          } else {
            console.log("You Don't have packingDoc Document");
          }
        } else {
          console.log("You Don't have Commercial Invoice");
        }
      } else {
        console.log("You Don't have BLCopy Document");
      } // randomArray = []
      // for(value of this.pipoArray){
      //   for(value1 of ){
      //     if(value.pi_poNo == value1){
      //       randomArray.push(value)
      //     }
      //   }
      // }
      // console.log("ALL Data",)

    }

    hello() {
      // for (let value of this.sbArray) {
      //   this.onAddCourse(value)
      // }
      for (var i = 1; i < this.sbArray.length; i++) {
        //binary += String.fromCharCode(bytes[i]);
        this.onAddCourse(i);
      }

      console.log();
      console.log('ssjskskssk');
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

    changeCheckbox3(value) {
      let j = this.lcArray.indexOf(value);

      if (j == -1) {
        this.lcArray.push(value);
      } else {
        this.lcArray.splice(j, 1);
      }

      console.log(this.lcArray);
    }

    initCourse() {
      return this.formBuilder.group({
        value: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormArray([this.initCourse1()], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required)
      });
    }

    initCourse1() {
      return this.formBuilder.group({
        valueInternal: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        sb: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]
      });
    }

    getCourses(form) {
      return form.get('advance').controls;
    }

    getForexInfo(sbno) {
      return this.shippingMap.get(sbno);
    }

    onAddCourse(e) {
      // if (e.controls.bankDetails.invalid) {
      //   //this.submitted1 = true
      //   this.toastr.error('You can add another bank after filling first one!');
      //   console.log("2")
      //   //this.isDisabled = false;
      //   return;
      // }
      console.log('fffff'); // this.currencyName.push('')
      // this.bankName.push('')

      const control = this.advanceForm.controls.advance;
      control.push(this.initCourse()); //this.isDisabled = false;
    }

    onAddCourse1(e) {
      // if (e.controls.bankDetails.invalid) {
      //   //this.submitted1 = true
      //   this.toastr.error('You can add another bank after filling first one!');
      //   console.log("2")
      //   //this.isDisabled = false;
      //   return;
      // }
      console.log('fffff');
      console.log(e); // this.currencyName.push('')
      // this.bankName.push('') .controls.contacts

      console.log(this.advanceForm.controls.advance['controls'][e].controls.value); // console.log(this.advanceForm.controls.advance[e].controls.value)
      // console.log(this.advanceForm.controls.advance[e])

      const control = this.advanceForm.controls.advance['controls'][e].controls.value;
      control.push(this.initCourse1()); //this.isDisabled = false;
    }

    removeAddress(i) {
      // console.log(i)
      // //console.log(this.control)
      let control1 = this.advanceForm.controls.advance; // console.log(control1)
      // console.log(control1.length)
      // console.log(this.bankName)
      // console.log(this.currencyName)

      control1.removeAt(i); // this.bankName.splice(i, 1)
      // this.currencyName.splice(i, 1)
      // console.log(this.bankName)
      // console.log(this.currencyName)
      // console.log(control1.length)
    }

    onSubmit() {
      console.log('Testing *******************', this.advanceForm.value);
    }

    generateDoc1() {
      var _this2 = this;

      return (0,D_Bharathexim_Repo_docmachine_frontend_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        //console.log(code, j)
        _this2.generate = true;
        _this2.isGenerate = true;
        let generateDoc2 = [];
        let pipoValue;
        let value;
        let buyerValue;
        let newVal = {};

        for (let item of _this2.itemArray) {
          for (let sb of _this2.sbArray) {
            if (item.sbno === sb) {
              pipoValue = item;
              value = item.pipo;
              buyerValue = item.buyerName;

              _this2.dateArray.push(item.sbdate);

              _this2.sbDataArray.push(item);

              console.log('value', value); // console.log("Line no. 715", item)
              // newVal['sbno'] = item.sbno;
              // newVal['doc'] = item.doc
              // console.log("line no. 718", newVal)

              generateDoc2.push(_this2.sanitizer.bypassSecurityTrustResourceUrl(item.doc));
            }
          }
        }

        console.log(pipoValue, 'pipovalue*****************************');

        for (value of _this2.item) {
          for (let value1 of pipoValue.pipo) {
            if (value.pi_poNo == value1.pi_poNo) {
              _this2.randomArray.push(value);
            }
          }
        }

        console.log('random Array', _this2.randomArray);
        console.log('random Array', _this2.randomArray[0].creditNote);
        _this2.sb = _this2.sanitizer.bypassSecurityTrustResourceUrl(_this2.randomArray[0]['sb']);
        _this2.creditNote = _this2.sanitizer.bypassSecurityTrustResourceUrl(_this2.randomArray[0]['creditNote']);
        console.log('////*********************Credit Note', _this2.creditNote);
        _this2.debitNote = _this2.sanitizer.bypassSecurityTrustResourceUrl(_this2.randomArray[0]['debitNote']);
        console.log('////*********************debit Note', _this2.debitNote);
        _this2.advanceOutward = _this2.sanitizer.bypassSecurityTrustResourceUrl(_this2.randomArray[0]['advanceOutward']);
        console.log('////*********************advanceOutward', _this2.advanceOutward);
        _this2.ebrc = _this2.sanitizer.bypassSecurityTrustResourceUrl(_this2.randomArray[0]['EBRC']);
        console.log('////*********************Ebrc', _this2.ebrc);
        _this2.blcopyref = _this2.sanitizer.bypassSecurityTrustResourceUrl(_this2.randomArray[0]['blcopyref']);
        _this2.irAdvice = _this2.sanitizer.bypassSecurityTrustResourceUrl(_this2.randomArray[0]['irAdvice']);
        _this2.lcCopy = _this2.sanitizer.bypassSecurityTrustResourceUrl(_this2.randomArray[0]['lcCopy']);
        console.log('****************Lc Copy', _this2.lcCopy);
        _this2.swiftCopy = _this2.sanitizer.bypassSecurityTrustResourceUrl(_this2.randomArray[0]['swiftCopy']);
        _this2.tryPartyAgreement = _this2.sanitizer.bypassSecurityTrustResourceUrl(_this2.randomArray[0]['tryPartyAgreement']);
        _this2.opinionReport = _this2.sanitizer.bypassSecurityTrustResourceUrl(_this2.randomArray[0]['opinionReport']);
        _this2.airwayBlCopy = _this2.sanitizer.bypassSecurityTrustResourceUrl(_this2.randomArray[0]['airwayBlcopy']);
        _this2.billOfExchange = _this2.sanitizer.bypassSecurityTrustResourceUrl(_this2.randomArray[0]['billOfExchange']);
        _this2.commercial = _this2.sanitizer.bypassSecurityTrustResourceUrl(_this2.randomArray[0]['commercial']);
        _this2.destruction = _this2.sanitizer.bypassSecurityTrustResourceUrl(_this2.randomArray[0]['destruction']);
        _this2.packingList = _this2.sanitizer.bypassSecurityTrustResourceUrl(_this2.randomArray[0]['packingList']);
        console.log('Random Array', _this2.randomArray);
        console.log('Airway Docs****************--------------------------------', _this2.airwayBlCopy);
        console.log('ALL Data');
        let mainArr = [];
        let invoicearray = []; // this.Question5 = 'no';

        console.log('line no.796 question5 data', _this2.Question5);

        _this2.sbDataArray.forEach((value, index) => {
          for (let a of value.pipo) {
            _this2.arrayPipo.push(a);
          }
        });

        if (_this2.Question6 == 'yes') {
          let adArr = [];
          console.log('Shipping Map For', _this2.shippingMap);

          _this2.shippingMap.forEach(value => {
            console.log('Shipping Map For loop', value);
            adArr = adArr.concat(value);
          }); // let adArr = [];
          // for (let x of this.advanceForm.value.advance) {
          //   for (let z of x.value) {
          //     adArr.push(z);
          //   }
          // }


          console.log('advArr', adArr);
          console.log('sbDataArray', _this2.sbDataArray);
          (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.forkJoin)(_this2.sbDataArray.map(value => {
            let piponumbers = [];

            for (let i in value.pipo) {
              piponumbers.push(value.pipo[i].pi_poNo);
            }

            return _this2.userService.getManyPipo(piponumbers);
          })).subscribe(resp => {
            console.log('Fork join resp', resp);
            resp.forEach((data, i) => {
              for (let item of data['data']) {
                console.log(item);
                const newVal = { ..._this2.sbDataArray[i]
                };
                newVal['pipoValue'] = item;
                mainArr.push(newVal);
                console.log('fggfgfgf', mainArr);
              }
            }); // Invoice Reductionn logic

            console.log('sjjssjjsjsjsjsjsjsjsjsjsjssjsjjsjsjsjsjsjs');
            console.log(_this2.advanceForm.value);
            mainArr.forEach((value1, index) => {
              console.log('shshsh');
              console.log(_this2.advanceForm.value.advance);

              for (let a of adArr) {
                if (a.sb == value1.sbno) {
                  const newVal = { ...value1
                  };
                  newVal['advance'] = a.valueInternal;
                  newVal['irAdviceId'] = a.irDataItem._id;
                  invoicearray.push(newVal);
                }
              }

              console.log('aajsjss');
            });
            let amountArr = [];

            for (let item of invoicearray) {
              amountArr.push(item.pipoValue.amount);
            }

            console.log(amountArr);
            _this2.amArr = amountArr;
            console.log('111111111111111111111111111111111111111111111111111111111111111');
            console.log('t', invoicearray);
            _this2.invoiceArr = invoicearray;
            console.log('hello line 884', _this2.invoiceArr); // this.Question5 = 'yes';

            console.log('line no.866 question5 data', _this2.Question5); // Logic Ends
          }); // this.sbDataArray.forEach((value, index) => {
          //   this.userService.getManyPipo(value.pipo).subscribe(
          //     (data) => {
          //       console.log('king123');
          //       console.log(data);
          //       for (let item of data['data']) {
          //         console.log(item);
          //         const newVal = { ...value };
          //         newVal['pipoValue'] = item;
          //         mainArr.push(newVal);
          //         console.log('fggfgfgf', mainArr);
          //       }
          //       //this.getBeneDetaile()
          //       //this.router.navigate(['/login'], { queryParams: { registered: true }});
          //     },
          //     (error) => {
          //       console.log('error');
          //     }
          //   );
          // });
          // setTimeout(() => {
          //   console.log('sjjssjjsjsjsjsjsjsjsjsjsjssjsjjsjsjsjsjsjs');
          //   console.log("mainArr");
          //   console.log(this.advanceForm.value);
          //   mainArr.forEach((value1, index) => {
          //     console.log('shshsh');
          //     console.log(this.advanceForm.value.advance);
          //     for (let a of adArr) {
          //       if (a.sb == value1.sbno) {
          //         const newVal = {...value1};
          //         newVal['advance'] = a.valueInternal;
          //         invoicearray.push(newVal);
          //       }
          //     }
          //     console.log('aajsjss');
          //   });
          //   let amountArr = [];
          //   for (let item of invoicearray) {
          //     amountArr.push(item.pipoValue.amount);
          //   }
          //   console.log(amountArr);
          //   this.amArr = amountArr;
          //   console.log(
          //     '111111111111111111111111111111111111111111111111111111111111111'
          //   );
          //   console.log('t', invoicearray);
          //   this.invoiceArr = invoicearray;
          //   this.Question5 = 'yes';
          // }, 8000);
        }

        console.log('Rajuuuuu', pipoValue); //this.arrayPipo = value

        _this2.mainDoc1 = generateDoc2;
        console.log(_this2.mainDoc1);
        console.log('950', generateDoc2);
        let generateDoc3 = [];

        if (_this2.Question2 == 'yes') {
          for (let item of _this2.item4) {
            for (let sb of _this2.tryArray) {
              if (item.triPartyAgreementNumber === sb) {
                generateDoc3.push(_this2.sanitizer.bypassSecurityTrustResourceUrl(item.doc));
              }
            }
          }
        }

        let generateDoc4 = [];

        if (_this2.Question7 == 'yes') {
          for (let item of _this2.item8) {
            for (let sb of _this2.lcArray) {
              if (item.letterOfCreditNumber === sb) {
                generateDoc4.push(_this2.sanitizer.bypassSecurityTrustResourceUrl(item.doc));
              }
            }
          }
        }

        console.log(buyerValue);
        const data = yield _this2.userService.getBuyerByName(buyerValue);
        console.log('shshhss', data.data);
        _this2.buyerAds = data.data.buyerAdrs;
        _this2.completewords4 = _this2.buyerAds.split(' ');
        _this2.devideContent4 = _this2.completewords4.length;

        for (let i = 0; i < _this2.completewords4.length; i++) {
          if (i < 6) {
            _this2.buyerAdd2.push(_this2.completewords4[i]);
          } else if (i > 5 && i <= 11) {
            _this2.buyerAdd3.push(_this2.completewords4[i]);
          } else if (i > 11) {
            _this2.buyerAdd4.push(_this2.completewords4[i]);
          }
        }

        _this2.buyerAds1 = _this2.buyerAdd2.join(' ');
        _this2.buyerAds2 = _this2.buyerAdd3.join(' ');
        _this2.buyerAds3 = _this2.buyerAdd4.join(' ');
        console.log('Shailendra Buyer Address*************', _this2.buyerAds1);
        console.log('Shailendra Buyer Address*************', _this2.buyerAds2);
        console.log('89999999999999999999999999999', _this2.buyerAds);
        _this2.mainDoc3 = generateDoc3;
        _this2.mainDoc4 = generateDoc4;
        _this2.newTask[0] = {
          sbNumbers: _this2.sbArray,
          sbUrls: _this2.mainDoc1,
          triPartyAgreementNumber: _this2.tryArray,
          tryUrls: _this2.mainDoc3,
          purposeCode: '',
          isLc: _this2.lc,
          letterOfCreditNumber: _this2.lcArray,
          lcUrls: _this2.mainDoc4,
          withScrutiny: _this2.scrutiny,
          withDiscount: _this2.withDiscount,
          bankRef: '',
          advanceRef: _this2.advanceRef,
          ir: _this2.Question5
        }; //let date = ['31-JAN-21', '29-AUG-21', '01-FEB-20'];
        // const myArray = date[0].split('-');
        // console.log(myArray);
        // let str = '';

        for (let value of _this2.dateArray) {
          _this2.getProper(value);
        }

        _this2.myArr.sort(function (a, b) {
          a = a.split('-').reverse().join('');
          b = b.split('-').reverse().join('');
          return a > b ? 1 : a < b ? -1 : 0; // return a.localeCompare(b);         // <-- alternative
        });

        console.log('Datesss', _this2.myArr);
        console.log(_this2.myArr[0]);
        console.log(_this2.myArr[_this2.myArr.length - 1]);
        console.log(_this2.generate1);
        console.log(_this2.c);

        _this2.fillForm(pipoValue);

        _this2.newTask[0] = {
          sbNumbers: _this2.sbArray,
          sbUrls: _this2.mainDoc1,
          triPartyAgreementNumber: _this2.tryArray,
          tryUrls: _this2.mainDoc3,
          purposeCode: '',
          isLc: _this2.lc,
          letterOfCreditNumber: _this2.lcArray,
          lcUrls: _this2.mainDoc4,
          withScrutiny: _this2.scrutiny,
          withDiscount: _this2.withDiscount,
          bankRef: '',
          advanceRef: _this2.advanceRef,
          ir: _this2.Question5
        };
      })();
    }

    getProper(a) {
      const myArray = a.split('-');
      myArray.forEach((value, index) => {
        if (index == 0) {
          this.str = value + '.';
        } else if (index == 1) {
          if (value.toUpperCase() == 'JAN') {
            this.str = this.str + '01.';
          } else if (value.toUpperCase() == 'FEB') {
            this.str = this.str + '02.';
          } else if (value.toUpperCase() == 'MAR') {
            this.str = this.str + '03.';
          } else if (value.toUpperCase() == 'APR') {
            this.str = this.str + '04.';
          } else if (value.toUpperCase() == 'MAY') {
            this.str = this.str + '05.';
          } else if (value.toUpperCase() == 'JUN') {
            this.str = this.str + '06.';
          } else if (value.toUpperCase() == 'JUL') {
            this.str = this.str + '07.';
          } else if (value.toUpperCase() == 'AUG') {
            this.str = this.str + '08.';
          } else if (value.toUpperCase() == 'SEP') {
            this.str = this.str + '09.';
          } else if (value.toUpperCase() == 'OCT') {
            this.str = this.str + '10.';
          } else if (value.toUpperCase() == 'NOV') {
            this.str = this.str + '11.';
          } else if (value.toUpperCase() == 'DEC') {
            this.str = this.str + '12.';
          }
        } else if (index == 2) {
          this.str = this.str + '20' + value;
        }
      });
      this.myArr.push(this.str);
      this.str = '';
      console.log(this.str);
    }

    searchData(a, i) {
      console.log(i);
      console.log(a);
      var reg = /^\d+$/;
      let x = reg.test(a);
      console.log(x);

      if (x) {
        this.amArr[i] = this.amArr[i] - a;
        this.invoiceArr[i].pipoValue['damage'] = a;
        this.invoiceArr[i].pipoValue['realized'] = this.amArr[i];
      }

      console.log('this is invice array', this.invoiceArr);
      console.log(a);
      console.log(this.amArr);
    }

    toEdit(index) {
      console.log('this is damage value', this.invoiceArr[index].pipoValue['damage']);
      this.optionsVisibility[index] = true;
      this.toastr.warning('table Is In Edit Mode');
    }

    toSave(index) {
      this.optionsVisibility[index] = false;
      this.toastr.success('table updated successfully.');
    }

    updaterisevalue(i) {
      this.invoiceArr[i].pipoValue.realized = this.invoiceArr[i].pipoValue.amount - this.invoiceArr[i].pipoValue.damage;
      console.log('this is rised', this.invoiceArr[i].pipoValue.realized);
    }

    fillForm(a) {
      var _this3 = this;

      return (0,D_Bharathexim_Repo_docmachine_frontend_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        console.log('Shailendra *************', a.buyerName);
        _this3.buyer1 = a.buyerName;
        _this3.completewords3 = _this3.buyer1;
        ;
        _this3.devideContent3 = _this3.completewords3.length;

        for (let i = 0; i < _this3.completewords3.length; i++) {
          if (i < 6) {
            _this3.buyer2.push(_this3.completewords3[i]);
          } else if (i > 5 && i <= 11) {
            _this3.buyer3.push(_this3.completewords3[i]);
          }
        }

        _this3.buyName1 = _this3.buyer2.join(' ');
        _this3.buyName2 = _this3.buyer3.join(' ');
        console.log('Shailendra *************', _this3.buyName1);
        console.log('Shailendra *************', _this3.buyName2);
        const formUrl = './../../assets/billUnder.pdf';
        const formPdfBytes = yield fetch(formUrl).then(res => res.arrayBuffer());
        const pdfDoc = yield pdf_lib__WEBPACK_IMPORTED_MODULE_5__.PDFDocument.load(formPdfBytes);
        const form = pdfDoc.getForm();
        const pages = pdfDoc.getPages();
        const firstpage = pages[0];
        const text1 = form.createTextField('favorite0');
        text1.setText('');
        text1.addToPage(firstpage, {
          x: 156,
          y: 752,
          width: 250,
          height: 12,
          borderWidth: 0 //backgroundColor: rgb(255, 255, 255)

        });
        const text2 = form.createTextField('favorite1');
        text2.setText('');
        text2.addToPage(firstpage, {
          x: 482,
          y: 752,
          width: 20,
          height: 13,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const textf3 = form.createTextField('favorite2');
        textf3.setText('');
        textf3.addToPage(firstpage, {
          x: 510,
          y: 752,
          width: 20,
          height: 13,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text4 = form.createTextField('favorite3');
        text4.setText('');
        text4.addToPage(firstpage, {
          x: 539,
          y: 752,
          width: 15,
          height: 13,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text5 = form.createTextField('favorite4');
        text5.setText('');
        text5.addToPage(firstpage, {
          x: 570,
          y: 752,
          width: 12,
          height: 13,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        }); //exporter

        const text6 = form.createTextField('favorite5');
        text6.setText(_this3.team1);
        text6.addToPage(firstpage, {
          x: 18,
          y: 684,
          width: 295,
          height: 14,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text7 = form.createTextField('favorite6'); // if(this.team2.length > 0){

        text7.setText(_this3.team2);
        text7.addToPage(firstpage, {
          x: 18,
          y: 665,
          width: 295,
          height: 14,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        }); // }
        // else{
        //   text7.setText(this.item5.adress)
        //   text7.addToPage(firstpage, {
        //     x: 18,
        //     y: 665,
        //     width: 295,
        //     height: 14,
        //     borderWidth: 0,
        //     // backgroundColor: rgb(255, 255, 255)
        //   })
        // }

        const text8 = form.createTextField('favorite7'); // if(this.team2.length > 0 && this.team3.length == 0){

        text8.setText(_this3.address1);
        text8.addToPage(firstpage, {
          x: 18,
          y: 646,
          width: 295,
          height: 14,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        }); // }
        // else{
        //   text8.setText(this.team3)
        //   text8.addToPage(firstpage, {
        //     x: 18,
        //     y: 646,
        //     width: 295,
        //     height: 14,
        //     borderWidth: 0,
        //     // backgroundColor: rgb(255, 255, 255)
        //   })
        // }

        const text9 = form.createTextField('favorite8'); //  if(this.team2.length > 0 && this.team3.length > 0){

        text9.setText(_this3.address2);
        text9.addToPage(firstpage, {
          x: 18,
          y: 628,
          width: 295,
          height: 14,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        }); // }

        const text10 = form.createTextField('favorite9');
        text10.setText(_this3.address3);
        text10.addToPage(firstpage, {
          x: 18,
          y: 612,
          width: 295,
          height: 14,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text11 = form.createTextField('favorite10');
        text11.setText('');
        text11.addToPage(firstpage, {
          x: 18,
          y: 594,
          width: 295,
          height: 14,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        }); //buyer

        const text12 = form.createTextField('favorite11');
        text12.setText(_this3.buyName1);
        text12.addToPage(firstpage, {
          x: 320,
          y: 684,
          width: 255,
          height: 14,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text13 = form.createTextField('favorite12');
        text13.setText(_this3.buyName2);
        text13.addToPage(firstpage, {
          x: 320,
          y: 665,
          width: 255,
          height: 14,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text14 = form.createTextField('favorite13');
        text14.setText(_this3.buyerAds1);
        text14.addToPage(firstpage, {
          x: 320,
          y: 646,
          width: 255,
          height: 14,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text15 = form.createTextField('favorite14');
        text15.setText(_this3.buyerAds2);
        text15.addToPage(firstpage, {
          x: 320,
          y: 628,
          width: 255,
          height: 14,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text16 = form.createTextField('favorite15');
        text16.setText(_this3.buyerAds3);
        text16.addToPage(firstpage, {
          x: 320,
          y: 612,
          width: 255,
          height: 14,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text17 = form.createTextField('favorite16');
        text17.setText('');
        text17.addToPage(firstpage, {
          x: 320,
          y: 594,
          width: 255,
          height: 14,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        }); //checkbox

        const checkbox1 = form.createCheckBox('check1');
        checkbox1.addToPage(firstpage, {
          x: 150,
          y: 575,
          width: 8,
          height: 8,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const checkbox2 = form.createCheckBox('check2');
        checkbox2.addToPage(firstpage, {
          x: 369,
          y: 575,
          width: 8,
          height: 8,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const checkbox3 = form.createCheckBox('check3');
        checkbox3.addToPage(firstpage, {
          x: 570,
          y: 575,
          width: 8,
          height: 8,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        }); //draw bank details

        const text18 = form.createTextField('favorite17');
        text18.setText('');
        text18.addToPage(firstpage, {
          x: 219,
          y: 553,
          width: 360,
          height: 14,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text19 = form.createTextField('favorite18');
        text19.setText('');
        text19.addToPage(firstpage, {
          x: 219,
          y: 538,
          width: 360,
          height: 14,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text20 = form.createTextField('favorite19');
        text20.setText('');
        text20.addToPage(firstpage, {
          x: 219,
          y: 521,
          width: 360,
          height: 14,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text21 = form.createTextField('favorite20');
        text21.setText('');
        text21.addToPage(firstpage, {
          x: 219,
          y: 506,
          width: 360,
          height: 14,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text22 = form.createTextField('favorite21');
        text22.setText('');
        text22.addToPage(firstpage, {
          x: 219,
          y: 491,
          width: 360,
          height: 14,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text23 = form.createTextField('favorite22');
        text23.setText('');
        text23.addToPage(firstpage, {
          x: 219,
          y: 478,
          width: 360,
          height: 10,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        }); //checkbox

        const checkbox4 = form.createCheckBox('check4');
        checkbox4.addToPage(firstpage, {
          x: 245,
          y: 456,
          width: 5,
          height: 5,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const checkbox5 = form.createCheckBox('check5');
        checkbox5.addToPage(firstpage, {
          x: 453,
          y: 463,
          width: 5,
          height: 5,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        }); //text

        const text24 = form.createTextField('favorite23');
        text24.setText('');
        text24.addToPage(firstpage, {
          x: 219,
          y: 412,
          width: 360,
          height: 18,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text25 = form.createTextField('favorite24');
        text25.setText('');
        text25.addToPage(firstpage, {
          x: 219,
          y: 390,
          width: 360,
          height: 16,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        }); //checkbox

        const checkbox6 = form.createCheckBox('check6');
        checkbox6.addToPage(firstpage, {
          x: 389,
          y: 375,
          width: 8,
          height: 8,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const checkbox7 = form.createCheckBox('check7');
        checkbox7.addToPage(firstpage, {
          x: 550,
          y: 375,
          width: 8,
          height: 8,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        }); // firx

        const text26 = form.createTextField('favorite25');
        text26.setText('');
        text26.addToPage(firstpage, {
          x: 128,
          y: 348,
          width: 187,
          height: 20,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text27 = form.createTextField('favorite26');
        text27.setText('');
        text27.addToPage(firstpage, {
          x: 128,
          y: 324,
          width: 187,
          height: 18,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text28 = form.createTextField('favorite27');
        text28.setText('');
        text28.addToPage(firstpage, {
          x: 421,
          y: 348,
          width: 160,
          height: 20,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text29 = form.createTextField('favorite28');
        text29.setText('');
        text29.addToPage(firstpage, {
          x: 421,
          y: 324,
          width: 160,
          height: 18,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        }); //bill details

        const text30 = form.createTextField('favorite29');
        text30.setText('');
        text30.addToPage(firstpage, {
          x: 128,
          y: 287,
          width: 140,
          height: 18,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text31 = form.createTextField('favorite30');
        text31.setText('');
        text31.addToPage(firstpage, {
          x: 128,
          y: 266,
          width: 140,
          height: 18,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text32 = form.createTextField('favorite31');
        text32.setText('');
        text32.addToPage(firstpage, {
          x: 388,
          y: 287,
          width: 188,
          height: 18,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text33 = form.createTextField('favorite32');
        text33.setText('');
        text33.addToPage(firstpage, {
          x: 388,
          y: 266,
          width: 188,
          height: 18,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        }); //checkbox

        const checkbox8 = form.createCheckBox('check8');
        checkbox8.addToPage(firstpage, {
          x: 141,
          y: 251,
          width: 5,
          height: 5,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const checkbox9 = form.createCheckBox('check9');
        checkbox9.addToPage(firstpage, {
          x: 288,
          y: 251,
          width: 5,
          height: 5,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text01 = form.createTextField('favorite01');
        text01.setText('');
        text01.addToPage(firstpage, {
          x: 393,
          y: 253,
          width: 30,
          height: 10,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text02 = form.createTextField('favorite02');
        text02.setText('');
        text02.addToPage(firstpage, {
          x: 453,
          y: 242,
          width: 60,
          height: 10,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        }); // description of goods

        const text34 = form.createTextField('favorite33');
        text34.setText('');
        text34.addToPage(firstpage, {
          x: 128,
          y: 211,
          width: 250,
          height: 20,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text35 = form.createTextField('favorite34');
        text35.setText('');
        text35.addToPage(firstpage, {
          x: 128,
          y: 190,
          width: 140,
          height: 18,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text36 = form.createTextField('favorite35');
        text36.setText('');
        text36.addToPage(firstpage, {
          x: 448,
          y: 211,
          width: 132,
          height: 18,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text37 = form.createTextField('favorite36');
        text37.setText('');
        text37.addToPage(firstpage, {
          x: 388,
          y: 190,
          width: 188,
          height: 18,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text38 = form.createTextField('favorite37');
        text38.setText('');
        text38.addToPage(firstpage, {
          x: 275,
          y: 170,
          width: 300,
          height: 18,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text39 = form.createTextField('favorite38');
        text39.setText('');
        text39.addToPage(firstpage, {
          x: 275,
          y: 146,
          width: 300,
          height: 18,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text40 = form.createTextField('favorite39');
        text40.setText('');
        text40.addToPage(firstpage, {
          x: 128,
          y: 126,
          width: 140,
          height: 18,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text41 = form.createTextField('favorite40');
        text41.setText(`${_this3.myArr[0]}  to  ${_this3.myArr[_this3.myArr.length - 1]}`); // console.log(this.myArr[0])
        // console.log(this.myArr[this.myArr.length - 1])

        text41.addToPage(firstpage, {
          x: 388,
          y: 126,
          width: 188,
          height: 18,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        }); // const texta41 = form.createTextField('favorite404')
        // texta41.setText(`${this.myArr.length}`)
        // // console.log(this.myArr[0])
        // // console.log(this.myArr[this.myArr.length - 1])
        // texta41.addToPage(firstpage, {
        //   x: 266,
        //   y: 106,
        //   width: 188,
        //   height: 18,
        //   borderWidth: 0,
        //   // backgroundColor: rgb(255, 255, 255)
        // })
        //table1

        const text421 = form.createTextField('favorite411');
        text421.setText(`${_this3.myArr.length}`);
        text421.addToPage(firstpage, {
          x: 228,
          y: 108,
          width: 10,
          height: 16,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text42 = form.createTextField('favorite41');
        text42.setText('');
        text42.addToPage(firstpage, {
          x: 97,
          y: 62,
          width: 45,
          height: 14,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text43 = form.createTextField('favorite42');
        text43.setText('');
        text43.addToPage(firstpage, {
          x: 148,
          y: 62,
          width: 50,
          height: 14,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text44 = form.createTextField('favorite43');
        text44.setText('');
        text44.addToPage(firstpage, {
          x: 206,
          y: 62,
          width: 65,
          height: 14,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text45 = form.createTextField('favorite44');
        text45.setText('');
        text45.addToPage(firstpage, {
          x: 276,
          y: 62,
          width: 41,
          height: 14,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text46 = form.createTextField('favorite45');
        text46.setText('');
        text46.addToPage(firstpage, {
          x: 320,
          y: 62,
          width: 45,
          height: 14,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text47 = form.createTextField('favorite46');
        text47.setText('');
        text47.addToPage(firstpage, {
          x: 370,
          y: 62,
          width: 33,
          height: 14,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text48 = form.createTextField('favorite47');
        text48.setText('');
        text48.addToPage(firstpage, {
          x: 408,
          y: 62,
          width: 80,
          height: 14,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text49 = form.createTextField('favorite48');
        text49.setText('');
        text49.addToPage(firstpage, {
          x: 492,
          y: 62,
          width: 50,
          height: 14,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text50 = form.createTextField('favorite49');
        text50.setText('');
        text50.addToPage(firstpage, {
          x: 547,
          y: 62,
          width: 33,
          height: 14,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text51 = form.createTextField('favorite50');
        text51.setText('');
        text51.addToPage(firstpage, {
          x: 97,
          y: 51,
          width: 45,
          height: 9,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text52 = form.createTextField('favorite51');
        text52.setText('');
        text52.addToPage(firstpage, {
          x: 148,
          y: 51,
          width: 50,
          height: 9,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text53 = form.createTextField('favorite52');
        text53.setText('');
        text53.addToPage(firstpage, {
          x: 206,
          y: 51,
          width: 65,
          height: 9,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text54 = form.createTextField('favorite53');
        text54.setText('');
        text54.addToPage(firstpage, {
          x: 276,
          y: 51,
          width: 41,
          height: 9,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text55 = form.createTextField('favorite54');
        text55.setText('');
        text55.addToPage(firstpage, {
          x: 320,
          y: 51,
          width: 45,
          height: 9,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text56 = form.createTextField('favorite55');
        text56.setText('');
        text56.addToPage(firstpage, {
          x: 370,
          y: 51,
          width: 33,
          height: 9,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text57 = form.createTextField('favorite56');
        text57.setText('');
        text57.addToPage(firstpage, {
          x: 408,
          y: 51,
          width: 80,
          height: 9,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text58 = form.createTextField('favorite57');
        text58.setText('');
        text58.addToPage(firstpage, {
          x: 492,
          y: 51,
          width: 50,
          height: 9,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text59 = form.createTextField('favorite58');
        text59.setText('');
        text59.addToPage(firstpage, {
          x: 547,
          y: 51,
          width: 33,
          height: 9,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        }); //table2

        const text60 = form.createTextField('favorite59');
        text60.setText(_this3.charge[0]);
        text60.addToPage(firstpage, {
          x: 135,
          y: 10,
          width: 30,
          height: 25,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text61 = form.createTextField('favorite60');
        text61.setText(_this3.charge[1]);
        text61.addToPage(firstpage, {
          x: 167,
          y: 10,
          width: 30,
          height: 25,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text62 = form.createTextField('favorite61');
        text62.setText(_this3.charge[2]);
        text62.addToPage(firstpage, {
          x: 201,
          y: 10,
          width: 30,
          height: 25,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text63 = form.createTextField('favorite62');
        text63.setText(_this3.charge[3]);
        text63.addToPage(firstpage, {
          x: 235,
          y: 10,
          width: 30,
          height: 25,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text64 = form.createTextField('favorite63');
        text64.setText(_this3.charge[4]);
        text64.addToPage(firstpage, {
          x: 266,
          y: 10,
          width: 30,
          height: 25,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text65 = form.createTextField('favorite64');
        text65.setText(_this3.charge[5]);
        text65.addToPage(firstpage, {
          x: 300,
          y: 10,
          width: 30,
          height: 25,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text66 = form.createTextField('favorite65');
        text66.setText(_this3.charge[6]);
        text66.addToPage(firstpage, {
          x: 331,
          y: 10,
          width: 30,
          height: 25,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text67 = form.createTextField('favorite66');
        text67.setText(_this3.charge[7]);
        text67.addToPage(firstpage, {
          x: 363,
          y: 10,
          width: 30,
          height: 25,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text68 = form.createTextField('favorite67');
        text68.setText(_this3.charge[8]);
        text68.addToPage(firstpage, {
          x: 397,
          y: 10,
          width: 34,
          height: 25,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text69 = form.createTextField('favorite68');
        text69.setText(_this3.charge[9]);
        text69.addToPage(firstpage, {
          x: 434,
          y: 10,
          width: 30,
          height: 25,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text70 = form.createTextField('favorite69');
        text70.setText(_this3.charge[10]);
        text70.addToPage(firstpage, {
          x: 469,
          y: 10,
          width: 27,
          height: 25,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text71 = form.createTextField('favorite70');
        text71.setText(_this3.charge[11]);
        text71.addToPage(firstpage, {
          x: 501,
          y: 10,
          width: 28,
          height: 25,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text72 = form.createTextField('favorite71');
        text72.setText(_this3.charge[12]);
        text72.addToPage(firstpage, {
          x: 534,
          y: 10,
          width: 28,
          height: 25,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const text73 = form.createTextField('favorite72');
        text73.setText(_this3.charge[13]);
        text73.addToPage(firstpage, {
          x: 565,
          y: 10,
          width: 15,
          height: 25,
          borderWidth: 0 // backgroundColor: rgb(255, 255, 255)

        });
        const pdfBytes = yield pdfDoc.save();
        console.log(pdfBytes, 'pdf');
        console.log(pdfBytes, 'pdf');

        var base64String = _this3._arrayBufferToBase64(pdfBytes);

        console.log(base64String);
        const x = 'data:application/pdf;base64,' + base64String;
        console.log(x);
        _this3.formerge = x;
        _this3.value = _this3.sanitizer.bypassSecurityTrustResourceUrl(x);
        _this3.newTask[0].generateDoc1 = x; // const link: any = document.createElement("a");
        // link.id = "dwnldLnk";
        // link.style = "display:none;";
        // document.body.appendChild(link);
        // const dlnk: any = document.getElementById("dwnldLnk");
        // dlnk.href = x;
        // dlnk.download = 'file.pdf';
        // dlnk.click();
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

    onBack() {
      this.isGenerate = false;
      this.sbArray = [];
      this.tryArray = [];
      this.lcArray = [];
    }

    doneDox(genDoc) {
      this.doneToDox();
      console.log('genDoc', genDoc);
      console.log(this.newTask);
      console.log(this.invoiceArr);

      if (this.documentService.draft) {
        this.documentService.updateExportTask({
          task: this.newTask,
          completed: 'yes',
          fileType: 'BL'
        }, this.documentService.task._id).subscribe(data => {
          console.log('king123');
          console.log(data);
          this.documentService.draft = false;
          this.documentService.task.id = '';
          this.isDoneAll = true;
          this.userService.updateManyPipo(this.arrayPipo, 'billUnder', genDoc).subscribe(data => {
            console.log('king123');
            console.log(data);

            if (this.Question5 == 'yes') {
              this.userService.updateManyPipo(this.arrayPipo, 'invoiceReduction', this.invoiceArr).subscribe(data1 => {
                console.log('king123');
                console.log(data1);
                this.toastr.success('Task saved as completed successfully!');

                if (this.redirectid) {// this.router.navigate([
                  //   'home/pipo-export',
                  //   {
                  //     id: this.redirectid,
                  //     page: this.redirectpage,
                  //     index: this.redirectindex,
                  //   },
                  // ]);
                } else {
                  window.location.reload();
                } //this.router.navigate(["/home/advance-outward-remittance"]);

              }, error => {
                // this.toastr.error('Invalid inputs, please check!');
                console.log('error');
              });
            } else {
              this.toastr.success('Task saved as completed successfully!'); // this.router.navigate(["/home/dashboardTask"]);
            } // this.toastr.success('Task saved as completed successfully!');
            // this.router.navigate(["/home/dashboardTask"]);
            //this.router.navigate(["/home/advance-outward-remittance"]);

          }, error => {
            // this.toastr.error('Invalid inputs, please check!');
            console.log('error');
          }); //this.router.navigate(["/home/dashboardTask"]);
          //this.router.navigate(['/login'], { queryParams: { registered: true }});
        }, error => {
          console.log('error');
        });
      } else {
        this.documentService.addExportTask({
          task: this.newTask,
          completed: 'yes',
          fileType: 'BL'
        }).subscribe(res => {
          this.isDoneAll = true; //this.toastr.success('Task saved successfully!');

          console.log('Transaction Saved');
          this.userService.updateManyPipo(this.arrayPipo, 'billUnder', genDoc).subscribe(data => {
            console.log('king123');
            console.log(data);

            if (this.Question5 == 'yes') {
              this.userService.updateManyPipo(this.arrayPipo, 'invoiceReduction', this.invoiceArr).subscribe(data1 => {
                console.log('king123');
                console.log(data1);
                this.toastr.success('Task saved as completed successfully!');

                if (this.redirectid) {// this.router.navigate([
                  //   'home/pipo-export',
                  //   {
                  //     id: this.redirectid,
                  //     page: this.redirectpage,
                  //     index: this.redirectindex,
                  //   },
                  // ]);
                } else {// window.location.reload();
                } //this.router.navigate(["/home/advance-outward-remittance"]);

              }, error => {
                // this.toastr.error('Invalid inputs, please check!');
                console.log('error');
              });
            } else {
              this.toastr.success('Task saved as completed successfully!'); // this.router.navigate(["/home/dashboardTask"]);
            } //this.router.navigate(["/home/advance-outward-remittance"]);

          }, error => {
            // this.toastr.error('Invalid inputs, please check!');
            console.log('error');
          }); //this.router.navigate(["/home/dashboardTask"]);
        }, err => {
          this.toastr.error('Error!');
          console.log('Error saving the transaction');
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
      const height = Math.round($('#mainId').outerHeight() * 0.0104166667 * 10) / 10;
      console.log($('#mainId').html());
      this.documentService.getPDF({
        data: $('#mainId').html(),
        filename: 'Final Report',
        format: {
          paperWidth: 7,
          paperHeight: height + 5,
          marginTop: 0,
          marginBottom: 0,
          marginLeft: 0,
          marginRight: 0
        },
        template: './app/modules/pdfGenerationModule/pdfTemplate/finalreport.ejs'
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
          const height = Math.round($('#mainId').outerHeight() * 0.0104166667 * 10) / 10;
          console.log($('#mainId').html());
          this.documentService.getPDF({
            data: $('#mainId2').html(),
            filename: 'Final Report',
            format: {
              paperWidth: 7,
              paperHeight: 15,
              marginTop: 0,
              marginBottom: 0,
              marginLeft: 0,
              marginRight: 0
            },
            template: './app/modules/pdfGenerationModule/pdfTemplate/finalreport.ejs'
          }).subscribe(data => {
            if (data && data.success) {
              console.log(data);
              this.data4 = data;
              this.data5 = data.file.replace('application/octet-stream', 'application/pdf');
              console.log(this.data5);
              this.data6 = this.sanitizer.bypassSecurityTrustResourceUrl(this.data5);
              this.billOfCredit = this.data6;

              if (this.Question5 == 'yes') {
                const height1 = Math.round($('#mainId1').outerHeight() * 0.0104166667 * 10) / 10;
                console.log($('#mainId1').html());
                this.documentService.getPDF({
                  data: $('#mainId1').html(),
                  filename: 'Final Report',
                  format: {
                    paperWidth: 7,
                    paperHeight: height1 + 5,
                    marginTop: 0,
                    marginBottom: 0,
                    marginLeft: 0,
                    marginRight: 0
                  },
                  template: './app/modules/pdfGenerationModule/pdfTemplate/finalreport.ejs'
                }).subscribe(data => {
                  if (data && data.success) {
                    console.log(data);
                    this.data4 = data;
                    this.data5 = data.file.replace('application/octet-stream', 'application/pdf');
                    console.log(this.data5);
                    this.data6 = this.sanitizer.bypassSecurityTrustResourceUrl(this.data5);
                    console.log(this.data6);
                    this.dataImport = this.data6;
                    this.dataImport2 = this.data6; //this.newTask.url1 = this.data5;

                    this.done = true;
                    this.newTask[0] = {
                      sbNumbers: this.sbArray,
                      sbUrls: this.mainDoc1,
                      triPartyAgreementNumber: this.tryArray,
                      tryUrls: this.mainDoc3,
                      purposeCode: '',
                      isLc: this.lc,
                      letterOfCreditNumber: this.lcArray,
                      lcUrls: this.mainDoc4,
                      withScrutiny: this.scrutiny,
                      withDiscount: this.withDiscount,
                      bankRef: '',
                      advanceRef: this.advanceRef,
                      generateDoc1: this.data8,
                      generateDoc2: this.billOfCredit,
                      generateDoc3: this.dataImport,
                      generateDoc4: this.dataImport2,
                      ir: this.Question5
                    }; //this.downloadPDF(data);
                  }
                });
                this.isProceed = true;
              } else {
                this.isProceed = true;
                this.newTask[0] = {
                  sbNumbers: this.sbArray,
                  sbUrls: this.mainDoc1,
                  triPartyAgreementNumber: this.tryArray,
                  tryUrls: this.mainDoc3,
                  purposeCode: '',
                  isLc: this.lc,
                  letterOfCreditNumber: this.lcArray,
                  lcUrls: this.mainDoc4,
                  withScrutiny: this.scrutiny,
                  withDiscount: this.withDiscount,
                  advanceRef: this.advanceRef,
                  generateDoc1: this.data8,
                  generateDoc2: this.billOfCredit,
                  bankRef: '',
                  ir: this.Question5
                };
              }
            }
          }); //this.zToggle[i] = true;
          // let allTrue = true;
          // for (let value of this.zToggle) {
          //   allTrue = allTrue && value;
          // }
          // if (allTrue) {
          //   this.isDone = true;
          // }
          //this.downloadPDF(data);
        }
      });
    }

    change(e) {
      console.log(e.target.value);
      this.advanceRef = e.target.value;
    }

    change1(e) {
      console.log(e.target.value);
      this.LcNumber = e.target.value;
    }

    downloadPDF() {
      console.log(JSON.stringify(this.creditNote));
      let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpHeaders();
      headers = headers.set('Accept', 'application/pdf');
      let data = {
        headers: headers,
        url: this.creditNote['changingThisBreaksApplicationSecurity']
      };
      this.documentService.downloadDocuments(data).subscribe(d => {
        console.log('sub', d);
        (0,file_saver__WEBPACK_IMPORTED_MODULE_6__.saveAs)(new Blob([d], {
          type: 'application/pdf'
        }), 'CreditNote');
      }); // console.log(this.mainDoc1.changingThisBreaksApplicationSecurity)
      // console.log("hello",this.creditNote.changingThisBreaksApplicationSecurity)
      // window.location.href = this.creditNote
      // let pdfName= this.creditNote.changingThisBreaksApplicationSecurity.substring(this.creditNote.changingThisBreaksApplicationSecurity.lastIndexOf('/')+1);
      // console.log(pdfName)
      // const link = document.createElement('a');
      // // link.id = "dwnldLnk";
      // document.body.appendChild(link);
      // // const dlnk: any = document.getElementById("dwnldLnk");
      // // dlnk.href =
      // // dlnk.download = this.creditNote.changingThisBreaksApplicationSecurity;
      // // dlnk.click();
      // link.setAttribute('target', '_blank');
      // link.setAttribute('href', this.creditNote.changingThisBreaksApplicationSecurity);
      // link.setAttribute('download', pdfName);
      // link.download = pdfName;
      // link.click();
      // link.remove();
      // this.durl = this.data3.replace('application/pdf', 'application/octet-stream')
      //   console.log("DATA")
      //   const link: any = document.createElement("a");
      //   link.id = "dwnldLnk";
      //   link.style = "display:none;";
      //   document.body.appendChild(link);
      //   const dlnk: any = document.getElementById("dwnldLnk");
      //   dlnk.href = this.durl;
      //   console.log(dlnk)
      //   console.log(dlnk.href)
      //   dlnk.download = "finalReport.pdf";
      //   dlnk.click();
      //     let link = document.createElement('a');
      // link.setAttribute('type', 'hidden');
      // link.href = 'abc.net/files/test.ino';
      // link.download = 'https://storage.googleapis.com/doc-machine-bucket1/BOE-2.pdf';
      // document.body.appendChild(link);
      // link.click();
      // link.remove();
      // const link = document.createElement('a');
      //     link.setAttribute('target', '_blank');
      //     link.setAttribute('href', 'https://storage.googleapis.com/doc-machine-bucket1/BOE-2.pdf');
      //     link.setAttribute('download', `products.pdf`);
      //     document.body.appendChild(link);
      //     link.click();
      //     link.remove();
    }

    ngOnDestroy() {
      console.log('Inside draft'); // if (!this.isDoneAll && this.generate) {
      //   this.confirmDialogService.confirmThis('Do you want to save this task?', () => {
      //     if (this.isProceed) {
      //       this.documentService.addExportTask({ task: this.newTask, completed: 'yes', fileType: 'BL' }).subscribe(
      //         (res) => {
      //           this.toastr.success('Saved the transaction as completed');
      //           console.log("Transaction Saved");
      //           //this.router.navigate(["/home/dashboardNew"]);
      //         },
      //         (err) => {
      //           this.toastr.error('Error!');
      //           console.log("Error saving the transaction")
      //         }
      //       );
      //     }
      //     else {
      //       this.documentService.addExportTask({ task: this.newTask, completed: 'no', fileType: 'BL' }).subscribe(
      //         (res) => {
      //           this.toastr.success('Saved the transaction in draft');
      //           console.log("Transaction Saved");
      //           //this.router.navigate(["/home/dashboardNew"]);
      //         },
      //         (err) => {
      //           this.toastr.error('Error!');
      //           console.log("Error saving the transaction")
      //         }
      //       );
      //     }
      //   }, () => {
      //     console.log("no");
      //   });
      // }
    }

    setradio(a) {
      console.log(a, 'setradio');
      this.bankToggle = a;
      this.bankValue = a;
      this.newBankArray = [];
      this.bankArray.forEach((value, index) => {
        console.log('shshsh');

        if (value.bank == a) {
          this.newBankArray.push(value);
        }
      });
    }

    creditTo(a) {
      var n = a.accNumber;
      this.credit = n.split('');
      console.log(this.credit);
    }

    chargesTo(a) {
      var n = a.accNumber;
      this.charge = n.split('');
      console.log(this.charge);
    }

    getDismissReason(reason) {
      if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
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

    open1(content1) {
      this.modalService.open(content1, {
        ariaLabelledBy: 'modal-basic-title'
      }).result.then(result => {
        this.closeResult = `Closed with: ${result}`;
      }, reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }

    open2(content2, sbno) {
      this.currentSbForAdvance = sbno;
      this.refSbNo = sbno; // this.modalService
      //   .open(content2, { ariaLabelledBy: 'modal-basic-title' })
      //   .result.then(
      //     (result) => {
      //       this.closeResult = `Closed with: ${result}`;
      //     },
      //     (reason) => {
      //       this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      //     }
      //   );
    }

    showPreview() {
      console.log('All Details', this.invoiceArr); // {_id:ObjectId('626a527df13ff52fd4871243')}

      this.bgColor = true;
      this.newDone = true;
    }

    hidePreview() {
      this.bgColor = false;
      this.newDone = false;
    }

    removepipo(i) {
      this.itemArray1.splice(i, 1);
    }

    removeshipping(i) {
      this.itemArray.splice(i, 1);
      console.log('this is remove');
    }

    addTofilter(event, id) {
      let removeArray = [];
      this.pipo = true;
      this.ship = false;
      this.itemArray1 = [];

      if (event.target.checked) {
        for (let element of this.item) {
          if (element._id == id) {
            this.itemArray.push(element);
          }
        }
      } else {
        if (this.itemArray.length) {
          this.itemArray.forEach(element => {
            if (element._id != id) {
              removeArray.push(element);
            }
          });
          this.itemArray = removeArray;
        }
      }

      console.log('test', this.itemArray);
    }

    addTofilter1(event, id, data) {
      // this.itemArray = [];
      if (data.blCopyDoc) {
        if (data.commercialDoc) {
          if (data.packingDoc) {
            let removeArray = [];
            this.ship = true;
            this.pipo = false;

            if (event.target.checked) {
              for (let element of this.item1) {
                if (element._id == id) {
                  this.itemArray.push(element);
                }
              }
            } else {
              if (this.itemArray.length) {
                this.itemArray.forEach(element => {
                  if (element._id != id) {
                    removeArray.push(element);
                  }
                });
                this.itemArray = removeArray;
              }
            }

            console.log('test2', this.itemArray);
          } else {
            this.toastr.error("You Don't Have Any Packing List Documnet Linkend with this Shipping Bill");
          }
        } else {
          this.toastr.error("You Don't Have Any Commercial Invoice Linkend with this Shipping Bill");
        }
      } else {
        this.toastr.error("You Don't Have Any AirWay / BLCopy Documnet Linkend with this Shipping Bill");
      }
    }

    addToSbArray(irDataItem, e) {
      if (e.target.checked) {
        console.log('Checked');
        let advance = this.advanceArray.some(item => item.valueInternal === irDataItem.billNo);

        if (!advance) {
          console.log('Adding');
          let details = {
            valueInternal: irDataItem.billNo,
            irDataItem: irDataItem,
            sb: this.currentSbForAdvance
          };
          this.advanceArray.push(details);
        }
      } else {
        console.log('removing, uncheked');
        this.advanceArray = this.advanceArray.filter(item => item.valueInternal !== irDataItem.billNo);
      }

      this.shippingMap.set(this.refSbNo, JSON.parse(JSON.stringify(this.advanceArray)));
      console.log(this.advanceArray, 'Deva Hello0*************************');
    }

    clearData() {
      this.advanceArray = [];
      console.log('Shippoinhg', this.shippingMap);
    }

    goBack() {
      this.isGenerate = false;
      window.location.reload();
    }

    exportToExcel() {
      const ws = xlsx__WEBPACK_IMPORTED_MODULE_12__.utils.table_to_sheet(this.billLodge.nativeElement);
      const wb = xlsx__WEBPACK_IMPORTED_MODULE_12__.utils.book_new();
      xlsx__WEBPACK_IMPORTED_MODULE_12__.utils.book_append_sheet(wb, ws, 'Sheet1');

      if (this.Question5 == 'yes') {
        xlsx__WEBPACK_IMPORTED_MODULE_12__.writeFile(wb, 'Invoice Reduction.xlsx');
      } else if (this.Question5 == 'no') {
        xlsx__WEBPACK_IMPORTED_MODULE_12__.writeFile(wb, 'Shipping Details.xlsx');
      }
    }

    openToPdf(content3, pipo) {
      this.generateChecked = true;
      this.currentDownloadPdf = pipo;
      this.selectedPdfs = [];
      this.selectedPdfs2 = [];
      console.log('selectedPdfs in line no 2958', this.selectedPdfs);
      console.log('selectedPdfs in line no 2959', this.selectedPdfs2);

      if (this.currentDownloadPdf.changingThisBreaksApplicationSecurity) {
        this.selectedPdfs.push(this.currentDownloadPdf.changingThisBreaksApplicationSecurity);
      }

      if (this.creditNote.changingThisBreaksApplicationSecurity) {
        this.selectedPdfs.push(this.creditNote.changingThisBreaksApplicationSecurity);
      }

      if (this.debitNote.changingThisBreaksApplicationSecurity) {
        this.selectedPdfs.push(this.debitNote.changingThisBreaksApplicationSecurity);
      }

      if (this.ebrc.changingThisBreaksApplicationSecurity) {
        this.selectedPdfs.push(this.ebrc.changingThisBreaksApplicationSecurity);
      }

      if (this.blcopyref.changingThisBreaksApplicationSecurity) {
        this.selectedPdfs.push(this.blcopyref.changingThisBreaksApplicationSecurity);
      }

      if (this.irAdvice.changingThisBreaksApplicationSecurity) {
        this.selectedPdfs.push(this.irAdvice.changingThisBreaksApplicationSecurity);
      }

      if (this.swiftCopy.changingThisBreaksApplicationSecurity) {
        this.selectedPdfs.push(this.swiftCopy.changingThisBreaksApplicationSecurity);
      }

      if (this.tryPartyAgreement.changingThisBreaksApplicationSecurity) {
        this.selectedPdfs.push(this.tryPartyAgreement.changingThisBreaksApplicationSecurity);
      }

      if (this.airwayBlCopy.changingThisBreaksApplicationSecurity) {
        this.selectedPdfs.push(this.airwayBlCopy.changingThisBreaksApplicationSecurity);
      }

      if (this.billOfExchange.changingThisBreaksApplicationSecurity) {
        this.selectedPdfs.push(this.billOfExchange.changingThisBreaksApplicationSecurity);
      }

      if (this.destruction.changingThisBreaksApplicationSecurity) {
        this.selectedPdfs.push(this.destruction.changingThisBreaksApplicationSecurity);
      }

      if (this.commercial.changingThisBreaksApplicationSecurity) {
        this.selectedPdfs.push(this.commercial.changingThisBreaksApplicationSecurity);
      }

      if (this.packingList.changingThisBreaksApplicationSecurity) {
        this.selectedPdfs.push(this.packingList.changingThisBreaksApplicationSecurity);
      }

      if (this.lcCopy.changingThisBreaksApplicationSecurity) {
        this.selectedPdfs.push(this.lcCopy.changingThisBreaksApplicationSecurity);
      }

      console.log('selectedPDFs', this.selectedPdfs);
      this.modalService.open(content3, {
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
        if (this.selectedPdfs.includes(value.changingThisBreaksApplicationSecurity) === false) {
          this.selectedPdfs.push(value.changingThisBreaksApplicationSecurity);
        }
      } else if (!e.target.checked) {
        this.selectedPdfs = this.selectedPdfs.filter(item => item !== value.changingThisBreaksApplicationSecurity);
      }

      console.log(this.selectedPdfs);
    }

    addPdfToSelectedPdf2(value, e) {
      if (e.target.checked) {
        this.generateChecked = true;
      } else {
        this.generateChecked = false;
      }
    }

    mergeIr() {
      let filterSBdata = [];
      let completedsb = [];
      let sbindex = 0;

      for (let sbNum of this.item1) {
        let totalForex = 0; // item1 have pipo details

        let currentpipo = this.item1[sbindex];
        console.log('Line no. 3658', currentpipo);
        console.log('Line no. 3659', sbNum);

        for (let irData of this.item9) {
          console.log('line 3661', irData);

          for (let i = 0; i <= irData.sbNo.length; i++) {
            console.log('a');

            if (sbNum.sbno == irData.sbNo[i]) {
              let irAmount = parseFloat(irData.amount);
              totalForex = totalForex + irAmount;
              console.log('145', totalForex);
            } else {
              filterSBdata.push(this.item1);
            }
          }
        }

        const newVal = { ...sbNum
        };
        let sbAmount = newVal.fobValue;
        newVal['balanceAvai'] = (sbAmount - totalForex).toFixed(2);
        console.log('hello sj', newVal);
        filterSBdata.push(newVal);

        if (completedsb.indexOf(sbindex) == -1) {
          completedsb.push(sbindex);
        }

        sbindex = sbindex + 1;
      }

      for (let i = completedsb.length - 1; i >= 0; i--) {
        this.item1.splice(completedsb[i], 1);
      }

      for (let sb of filterSBdata) {
        console.log('data of pipo', sb);

        if (sb.balanceAvai > 0) {
          this.item1.push(sb);
        }
      }
    }

    mergeIr2() {
      let filterIrdata = [];

      if (this.item1 && this.item1.length) {
        for (let irData of this.item9) {
          // item9 have forex details
          console.log('Line no. 3700', irData); // if(irData.sbNo.length){

          for (let sbNum of this.item1) {
            console.log('line 3701', sbNum);

            for (let i = 0; i <= irData.sbNo.length; i++) {
              console.log('a');

              if (sbNum.sbno == irData.sbNo[i]) {
                const newVal = { ...irData
                };
                console.log('Line no. 3706', newVal);
                let sbBalance = sbNum.fobValue;
                let irAmount = parseFloat(irData.amount);
                let availableBalance = irAmount - sbBalance;

                if (availableBalance <= 0) {
                  newVal['BalanceAvail'] = 0;
                } else {
                  newVal['BalanceAvail'] = availableBalance.toFixed(2);
                }

                if (newVal.BalanceAvail > 0) {
                  console.log("BalanceAvailable", newVal.BalanceAvail);
                  filterIrdata.push(newVal);
                }

                console.log('Line no. 3723', filterIrdata);
              }
            }
          }
        }

        for (let irData of this.item9) {
          if (irData.sbNo.length == 0) {
            const newVal = { ...irData
            };
            let availableBal = irData.amount;
            newVal['BalanceAvail'] = availableBal;
            filterIrdata.push(newVal);
            console.log('235', filterIrdata);
          }
        }
      } else {
        for (let ir of this.item9) {
          const newVal = { ...ir
          };
          let availableBal = ir.amount;
          newVal['BalanceAvail'] = availableBal;
          filterIrdata.push(newVal);
        }
      }

      this.item13 = filterIrdata;
      console.log("filterForex", filterIrdata, this.item13);
    }

    doneToDox() {
      console.log('All Details', this.invoiceArr);
      let iradvice = {};

      function checkIfSbExist(list, checker) {
        for (let i in list) {
          if (list[i] == checker) {
            return true;
          }
        }

        return false;
      }

      for (let i in this.invoiceArr) {
        console.log('2758', this.invoiceArr[i].advance);

        if (iradvice[this.invoiceArr[i].advance] == undefined) {
          iradvice[this.invoiceArr[i].advance] = {
            sbNo: [this.invoiceArr[i]._id],
            billNo: this.invoiceArr[i].irAdviceId
          };
        } else {
          if (!checkIfSbExist(iradvice[this.invoiceArr[i].advance].sbNo, this.invoiceArr[i]._id)) {
            iradvice[this.invoiceArr[i].advance].sbNo.push(this.invoiceArr[i]._id);
          }
        }
      }

      console.log('My details', iradvice);

      if (this.Question6 == 'yes') {
        for (let ir in iradvice) {
          this.documentService.updateByIr(iradvice[ir], iradvice[ir].billNo).subscribe(data => {
            console.log('my ir', ir);
            console.log('IrAdvice and sb connected successfully');
            console.log('2759', iradvice);
            console.log('line no. 2760', data);
          });
        }
      }
    }

    ShowPopup(callback) {}

    ClassRetrun(mainkey, key, class1, class2, condition) {
      if (this.Lodgement[mainkey][key] === condition) {
        return class1;
      } else {
        return class2;
      }
    }

    Changebutton(mainkey, Showkey, hidekey, value) {
      this.Lodgement[mainkey][Showkey] = value;
      this.Lodgement[mainkey][hidekey] = '';
      console.log(this.Lodgement, 'Lodgement');
    }

    DUMP_FUNCTION(condition1, condition2, popupshow) {
      console.log(condition1, 'condition1');

      if (condition1 === condition2) {
        popupshow.style.display = 'flex';
      } else {
        popupshow.style.display = 'none';
      }
    }

  }

  BillLodgementComponent.ɵfac = function BillLodgementComponent_Factory(t) {
    return new (t || BillLodgementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_service_document_service__WEBPACK_IMPORTED_MODULE_1__.DocumentService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_18__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_4__.ConfirmDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_service_window_information_service__WEBPACK_IMPORTED_MODULE_7__.WindowInformationService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_service_homeservices_shippingbill_service__WEBPACK_IMPORTED_MODULE_8__.ShippingbillDataService));
  };

  BillLodgementComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: BillLodgementComponent,
    selectors: [["app-bill-lodgement"]],
    viewQuery: function BillLodgementComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c1, 5);
      }

      if (rf & 2) {
        let _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.billLodge = _t.first);
      }
    },
    decls: 177,
    vars: 49,
    consts: [[1, "content_top_common", "scroll-bar-main"], [1, "content-wrap"], [1, "container-fluid"], [1, "content_white_background"], ["id", "content", "role", "main", 1, "content"], [4, "ngIf"], [1, "analytics"], ["style", "margin-top:15px;", 4, "ngIf"], [1, "space_bottom"], [1, "bill_lod_section"], [1, "row"], [1, "col-md-12"], ["for", "email", 1, "form-label"], ["bindLabel", "value", "placeholder", "Select PI/PO or shipping bill", 3, "items", "multiple", "change"], ["PI_PO_shipping_bill", ""], [1, "col-md-8", "col-sm-8", "col-7"], [1, "col-md-4", "col-sm-4", "col-5"], [1, "check_box_button"], ["type", "button", 3, "click"], ["style", "margin: 10px 0px;", 4, "ngIf"], ["style", "width:100%;", 4, "ngIf"], ["style", " margin-bottom: 10px;", 4, "ngIf"], ["class", "col-md-12 col-sm-12 col-12", 4, "ngIf"], ["content", ""], ["content3", ""], [1, "content1"], ["content1", ""], [1, "modal-body"], [1, "xdtr"], ["type", "button", "aria-label", "Close", 1, "button2", "topright", 3, "click"], ["aria-hidden", "true"], [1, "middle_bts"], [1, "login", "py-5", 2, "padding", "0px !important", "width", "100%"], [1, "container_innser"], [1, "display-5", 2, "font-size", "17px"], [1, "d-flex", "justify-content-between", "mb-1"], [2, "border", "1px solid #C6CBD4", "color", "black", "padding", "0px 2px", "font-weight", "100", "margin-right", "5px", "font-size", "11px", "height", "25px", 3, "ngModel", "ngModelChange"], ["value", ""], ["style", "color: black;", 4, "ngFor", "ngForOf"], [1, "filter1", 2, "margin-left", "-20px", 3, "click"], [1, "box-shadow"], [1, "table", "table-hover"], [2, "width", "100%", "height", "54px"], [1, "text-muted", "table-heading", 2, "opacity", "50%", "font-size", "10px", "color", "black !important", "font-weight", "300 !important", "padding", "0px", "border-bottom", "1px solid #f2f4f8"], ["scope", "col", 1, "col-td-th-3"], ["class", "table-tr", 4, "ngFor", "ngForOf"], [1, "bg-black-opacity"], ["content2", ""], ["tabindex", "-1", "role", "dialog", 1, "modal", "custom-modal", "Select_Shipping"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], [1, "Search_numbers"], [1, "container_remove"], [1, "row_bt"], [1, "DDDD"], [1, "mt_bottom", 2, "margin-bottom", "20px"], [1, "col-md-6"], [1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-md-3"], [1, "filter1", "btn", "btn-primary", 3, "click"], [1, "box-shadow", 2, "width", "100%"], [1, "submit_right_button", "mt-2", 2, "float", "right"], ["aria-label", "Close", 1, "filter1", "btn", "btn-secondary", 3, "click"], [1, "filter1", "btn", "btn-primary", 2, "margin-left", "16px", 3, "click"], [2, "display", "flex", "align-items", "center"], [1, "heading"], [2, "margin-top", "15px"], ["src", "../../../assets/back.png", 2, "width", "20px", "height", "20px", 3, "click"], [2, "margin-left", "10px"], ["class", "shpt_bill_sec", 4, "ngIf"], [1, "shpt_bill_sec"], ["class", "form-check2", 4, "ngFor", "ngForOf"], [1, "form-check2"], [1, "form-check-label"], [1, "arrayData", 2, "display", "inline-block"], [2, "margin", "10px 0px"], [2, "font-size", "17px"], [1, "", 3, "formGroup", "ngSubmit"], ["formArrayName", "advance"], ["style", "margin-bottom: 10px;", 3, "formGroupName", 4, "ngFor", "ngForOf"], [2, "margin-bottom", "10px", 3, "formGroupName"], ["formArrayName", "value"], [1, "button1", 3, "click"], ["style", "display: inline-block;", 4, "ngFor", "ngForOf"], [2, "display", "inline-block"], [1, "selecter1"], [2, "width", "100%"], [1, "col-md-10", "col-sm-10", "col-9", "pr-0"], [1, "select_rol"], ["bindLabel", "letterOfCreditNumber", "placeholder", "Select letter of credit", "name", "commodity", 3, "items", "ngModel", "ngModelChange"], ["ngSelect", ""], [1, "col-md-2", "col-sm-2", "col-3", "pl-0"], [1, "uplod_doc"], ["type", "button", 1, "btn", "btn-danger"], ["src", "../../../assets/Icon-feather-upload.svg", "alt", ""], [2, "margin-bottom", "10px"], ["bindLabel", "try_part_agreement", "placeholder", "Select Tripartite agreement", "name", "commodity", 3, "items", "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-danger", 3, "routerLink"], [1, "col-md-12", "col-sm-12", "col-12"], [1, "select_rol", "withborder"], ["aria-label", "Default select example", 1, "form-select", 3, "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["style", "display: flex; align-items: center;", 4, "ngFor", "ngForOf"], ["type", "radio", "id", "options1", 1, "circular_input1", 2, "flex-direction", "row", 3, "value", "checked", "click"], ["for", "male", 1, "label1", 2, "flex-direction", "row"], [1, "opt", 2, "float", "right", "padding", "0 16px", 3, "click"], ["id", "mainId", "class", "bc", "style", "margin-top:15px ;", 4, "ngIf"], ["id", "mainId1", "class", "bc", "style", " margin-top: 25px;", 4, "ngIf"], ["style", "float: left;display: block;width: 78%;margin-top: 40px;margin-left: 43px;display: flex; align-items: center;", 4, "ngIf"], ["id", "mainId", 1, "bc", 2, "margin-top", "15px"], ["id", "fileRequest", "frameborder", "0", 1, "sizes", 3, "src"], [4, "ngFor", "ngForOf"], [2, "width", "100%", "display", "flex"], [2, "display", "flex", "margin-top", "40px", "margin-left", "28px"], [2, "height", "670px", "width", "570px", "border", "1px solid #ccc", "overflow", "auto"], [2, "margin-top", "10px"], [2, "display", "flex", "align-items", "center", "margin-right", "5px"], ["height", "650px", "width", "550px", 2, "flex-direction", "row", 3, "src"], ["style", "margin-top: 10px;", 4, "ngIf"], [1, "button3", 2, "margin-left", "180px", "margin-top", "20px", 3, "click"], [2, "display", "flex", "align-items", "center", "margin-right", "20px"], ["height", "500px", "width", "400px", 2, "flex-direction", "row", 3, "src"], ["id", "mainId1", 1, "bc", 2, "margin-top", "25px"], ["billLodge", ""], ["style", "    font-size: 23px;\n                                        margin-bottom: 20px;", 4, "ngIf"], ["style", "    font-size: 23px;\n                                        margin-bottom: 20px; ", 4, "ngIf"], ["table1", ""], [2, "border", "0.5px solid rgb(103, 103, 103)"], ["style", "border: 0.5px solid rgb(103, 103, 103);", 4, "ngFor", "ngForOf"], [2, "font-size", "23px", "margin-bottom", "20px"], [2, "border", "0.5px solid black"], [1, "col-td-th-3"], ["class", "savBtn", 3, "click", 4, "ngIf"], ["name", "Add Damage Dection", "type", "number", "placeholder", "Add Damage Dection", 1, "tblInput", "form-control", "input5", 3, "ngModel", "ngModelChange", "change"], [1, "savBtn", 3, "click"], [2, "float", "left", "display", "block", "width", "78%", "margin-top", "40px", "margin-left", "43px", "display", "flex", "align-items", "center"], ["class", "button1", "style", "margin-right: 10px; margin-bottom: 30px;", 3, "click", 4, "ngIf"], [1, "button1", 2, "margin-right", "10px", "margin-bottom", "30px", 3, "click"], [1, "button1", 2, "margin-bottom", "40px"], ["height", "500px", "width", "400px", 3, "src"], ["height", "500px", "width", "400px", 3, "src", 4, "ngIf"], ["style", "flex-direction:row;", "height", "500px", "width", "400px", 3, "src", 4, "ngFor", "ngForOf"], ["style", "display: flex; align-items: center;", 4, "ngIf"], [1, "button1", 2, "margin-right", "10px", 3, "click"], [1, "row", "no-gutter"], [1, "col-md-7"], [1, "login", "d-flex", "py-5", 2, "padding", "0px !important"], [1, "container"], [1, "col-lg-10", "col-xl-7", "mrg"], [1, "display-5"], ["type", "date", "placeholder", "Start Date", "required", "", 2, "border", "1px solid #C6CBD4", "color", "black", "padding", "0px 2px", "font-weight", "100", "margin-right", "5px", "font-size", "11px", "height", "25px", 3, "ngModel", "ngModelChange"], ["type", "date", "placeholder", "End Date", "required", "", 2, "border", "1px solid #C6CBD4", "color", "black", "padding", "0px 2px", "font-weight", "100", "margin-right", "5px", "font-size", "11px", "height", "25px", 3, "ngModel", "ngModelChange"], [1, "filter", 3, "click"], [1, "box-shadow", 2, "width", "157%"], [1, "table", "table-striped", "mb-0", 2, "margin-left", "-2.7rem"], ["class", "table-tr", 3, "click", 4, "ngFor", "ngForOf"], [2, "color", "black"], [1, "table-tr", 3, "click"], ["type", "checkbox", 3, "change"], [1, "modal-body2"], [1, "col-md-7", 2, "margin", "10px"], [1, "container", "popup"], [1, "display-5", 2, "text-align", "center", "margin-left", "180px"], [1, "docStyle"], [1, "display-4", 2, "margin-top", "10px", "width", "6 0px", "border-bottom", "4px solid #49A2D7"], ["type", "checkBox", "checked", "", 3, "change"], ["height", "500px", "width", "600px", 3, "src"], ["class", "docStyle", 4, "ngIf"], [2, "display", "flex", "width", "100%", "margin-left", "240px", "margin-top", "20px", "margin-bottom", "20px"], ["type", "submit", 1, "submitBTN", 3, "click"], ["height", "500px", "width", "600px", 2, "flex-direction", "row", 3, "src"], [1, "table-tr"]],
    template: function BillLodgementComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r218 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "main", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, BillLodgementComponent_div_5_Template, 4, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 6)(7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, BillLodgementComponent_div_8_Template, 4, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "Select PI/PO or shipping bill");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "ng-select", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function BillLodgementComponent_Template_ng_select_change_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r218);

          const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](92);

          return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.DUMP_FUNCTION($event == null ? null : $event.value, "Shipping bill", _r15));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, BillLodgementComponent_div_17_Template, 3, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 15)(20, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "Against advance receipt?");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "div", 16)(23, "div", 17)(24, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BillLodgementComponent_Template_button_click_24_listener() {
          return ctx.Changebutton("AgainstAdvanceReceipt", "Hide", "Show", "no");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BillLodgementComponent_Template_button_click_26_listener() {
          return ctx.Changebutton("AgainstAdvanceReceipt", "Show", "Hide", "yes");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](28, BillLodgementComponent_div_28_Template, 7, 2, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "div", 15)(31, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, "Under LC?");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "div", 16)(34, "div", 17)(35, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BillLodgementComponent_Template_button_click_35_listener() {
          return ctx.Changebutton("UnderLC", "Hide", "Show", "no");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BillLodgementComponent_Template_button_click_37_listener() {
          return ctx.Changebutton("UnderLC", "Show", "Hide", "yes");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](39, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](40, BillLodgementComponent_div_40_Template, 15, 2, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "div", 15)(42, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43, "With Scrutiny?");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "div", 16)(45, "div", 17)(46, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BillLodgementComponent_Template_button_click_46_listener() {
          return ctx.Changebutton("WithScrutiny", "Hide", "Show", "no");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](47, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BillLodgementComponent_Template_button_click_48_listener() {
          return ctx.Changebutton("WithScrutiny", "Show", "Hide", "yes");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](49, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](50, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "div", 15)(52, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](53, "With Discount?");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "div", 16)(55, "div", 17)(56, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BillLodgementComponent_Template_button_click_56_listener() {
          return ctx.Changebutton("WithDiscount", "Hide", "Show", "no");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](57, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BillLodgementComponent_Template_button_click_58_listener() {
          return ctx.Changebutton("WithDiscount", "Show", "Hide", "yes");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](59, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](60, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](61, "div", 15)(62, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](63, "Is Buyer remitter different?");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](64, "div", 16)(65, "div", 17)(66, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BillLodgementComponent_Template_button_click_66_listener() {
          return ctx.Changebutton("BuyerRemitterDifferent", "Hide", "Show", "no");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](67, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](68, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BillLodgementComponent_Template_button_click_68_listener() {
          return ctx.Changebutton("BuyerRemitterDifferent", "Show", "Hide", "yes");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](69, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](70, BillLodgementComponent_div_70_Template, 14, 4, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](71, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](72, "div", 15)(73, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](74, "Is Invoice reduction?");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](75, "div", 16)(76, "div", 17)(77, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BillLodgementComponent_Template_button_click_77_listener() {
          return ctx.Changebutton("InvoiceReduction", "Hide", "Show", "no");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](78, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](79, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BillLodgementComponent_Template_button_click_79_listener() {
          return ctx.Changebutton("InvoiceReduction", "Show", "Hide", "yes");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](80, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](81, BillLodgementComponent_div_81_Template, 6, 2, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](82, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](83, BillLodgementComponent_div_83_Template, 5, 2, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](84, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](85, BillLodgementComponent_div_85_Template, 3, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](86, BillLodgementComponent_div_86_Template, 8, 6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](87, BillLodgementComponent_ng_template_87_Template, 51, 26, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](89, BillLodgementComponent_ng_template_89_Template, 38, 16, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](91, "div", 25, 26)(93, "div", 27)(94, "div", 2)(95, "div", 28)(96, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BillLodgementComponent_Template_button_click_96_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r218);

          const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](92);

          return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](_r15.style.display = "none");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](97, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](98, "OK");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](99, "div", 31)(100, "div", 32)(101, "div", 33)(102, "h6", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](103, "Select Shipping Bill");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](104, "div", 35)(105, "select", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function BillLodgementComponent_Template_select_ngModelChange_105_listener($event) {
          return ctx.nameSearch4 = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](106, "option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](107, "BuyerName");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](108, BillLodgementComponent_option_108_Template, 2, 1, "option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](109, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BillLodgementComponent_Template_button_click_109_listener() {
          return ctx.nameSearch4 = "";
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](110, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](111, "section", 40)(112, "table", 41)(113, "thead", 42)(114, "tr", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](115, "th", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](116, "th", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](117, "SB DATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](118, "th", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](119, "SB NUMBER");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](120, "th", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](121, "BUYER NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](122, "th", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](123, "CURRENCY");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](124, "th", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](125, "SB AMOUNT");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](126, "th", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](127, "AVAILABLE AMOUNT");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](128, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](129, BillLodgementComponent_tr_129_Template, 15, 6, "tr", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](130, "fiterbuyer");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](131, "div", 46, 47)(133, "div", 48)(134, "div", 49)(135, "div", 50)(136, "div", 51)(137, "h5", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](138, "Search PI/PO numbers*");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](139, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BillLodgementComponent_Template_button_click_139_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r218);

          const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](132);

          return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](_r18.style.display = "none");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](140, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](141, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](142, "div", 27)(143, "div", 54)(144, "div", 27)(145, "div", 55)(146, "div", 56)(147, "div", 57)(148, "div", 58)(149, "div", 10)(150, "div", 59)(151, "select", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function BillLodgementComponent_Template_select_ngModelChange_151_listener($event) {
          return ctx.nameSearch3 = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](152, "option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](153, "Party Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](154, BillLodgementComponent_option_154_Template, 2, 1, "option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](155, "div", 61)(156, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BillLodgementComponent_Template_button_click_156_listener() {
          return ctx.nameSearch3 = "";
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](157, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](158, "section", 63)(159, "table", 41)(160, "thead", 42)(161, "tr", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](162, "th", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](163, "th", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](164, "FIRX Number/ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](165, "th", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](166, "Party Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](167, "th", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](168, "Recieved Amount USD");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](169, "th", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](170, "Available Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](171, BillLodgementComponent_tbody_171_Template, 3, 8, "tbody", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](172, "div", 64)(173, "button", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BillLodgementComponent_Template_button_click_173_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r218);

          const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](132);

          return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](_r18.style.display = "none");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](174, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](175, "button", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BillLodgementComponent_Template_button_click_175_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r218);

          const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](132);

          return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](_r18.style.display = "none");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](176, "Sumbit");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()()()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.showInvoice);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.newDone);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("items", ctx.SHIPPING_BILL_LIST)("multiple", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx.itemArray == null ? null : ctx.itemArray.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"](ctx.ClassRetrun("AgainstAdvanceReceipt", "Hide", "btn no-button active1", "btn btn-primary remove-no-button", "no"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"](ctx.ClassRetrun("AgainstAdvanceReceipt", "Show", "btn yes-button active", "btn yes-button", "yes"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.Lodgement["AgainstAdvanceReceipt"]["Show"] === "yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"](ctx.ClassRetrun("UnderLC", "Hide", "btn no-button active1", "btn btn-primary remove-no-button", "no"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"](ctx.ClassRetrun("UnderLC", "Show", "btn yes-button active", "btn yes-button", "yes"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.Lodgement["UnderLC"]["Show"] === "yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"](ctx.ClassRetrun("WithScrutiny", "Hide", "btn no-button active1", "btn btn-primary remove-no-button", "no"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"](ctx.ClassRetrun("WithScrutiny", "Show", "btn yes-button active", "btn yes-button", "yes"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"](ctx.ClassRetrun("WithDiscount", "Hide", "btn no-button active1", "btn btn-primary remove-no-button", "no"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"](ctx.ClassRetrun("WithDiscount", "Show", "btn yes-button active", "btn yes-button", "yes"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"](ctx.ClassRetrun("BuyerRemitterDifferent", "Hide", "btn no-button active1", "btn btn-primary remove-no-button", "no"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"](ctx.ClassRetrun("BuyerRemitterDifferent", "Show", "btn yes-button active", "btn yes-button", "yes"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.Lodgement["BuyerRemitterDifferent"]["Show"] === "yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"](ctx.ClassRetrun("InvoiceReduction", "Hide", "btn no-button active1", "btn btn-primary remove-no-button", "no"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"](ctx.ClassRetrun("InvoiceReduction", "Show", "btn yes-button active", "btn yes-button", "yes"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.Lodgement["InvoiceReduction"]["Show"] === "yes" || ctx.Lodgement["InvoiceReduction"]["Hide"] === "no" || ctx.Lodgement["BuyerRemitterDifferent"]["Show"] === "yes" || ctx.Lodgement["BuyerRemitterDifferent"]["Hide"] === "no");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.bankToggle != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.Lodgement["InvoiceReduction"]["Show"] === "yes" || ctx.Lodgement["InvoiceReduction"]["Hide"] === "no" || ctx.Lodgement["BuyerRemitterDifferent"]["Show"] === "yes" || ctx.Lodgement["BuyerRemitterDifferent"]["Hide"] === "no");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isGenerate);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.nameSearch4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.buyerName);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](130, 42, ctx.item1, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](47, _c8, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](45, _c5, ctx.nameSearch4))));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.nameSearch3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.irBuyerName);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.item13.length != 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormArrayName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__.NgSelectComponent, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterLink, _fiterbuyer_pipe__WEBPACK_IMPORTED_MODULE_9__.FiterbuyerPipe],
    styles: ["*[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.arrayData[_ngcontent-%COMP%] {\n  border: 1px solid #51aee5;\n  padding: 5px 11px;\n  border-radius: 30px;\n  cursor: pointer;\n}\n\n.filter[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  color: #ffffff !important;\n  font-weight: 100;\n  font-family: Poppins, sans-serif;\n  font-size: 12px;\n  background-color: #49A2D7;\n  border: none;\n  border-radius: 5px;\n}\n\n.topright[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n}\n\n.button2[_ngcontent-%COMP%] {\n  font-family: \"Nunito Sans\", sans-serif !important;\n  font-size: 12px;\n  width: 3rem;\n  height: 2rem;\n  font-weight: 200;\n  margin-right: 1rem;\n  background-color: RGB(81, 174, 229);\n  border-radius: 20px;\n  border: none;\n  outline: none;\n  color: RGB(255, 255, 255);\n  z-index: 999999;\n}\n\n.table-row[_ngcontent-%COMP%] {\n  background-color: #ffffff !important;\n  color: #707683;\n  border-left: 2px solid #fff;\n}\n\n.table-row[_ngcontent-%COMP%]:hover {\n  background: #f6f9ff !important;\n  border-left: 2px solid #49a2d7;\n}\n\ninput[_ngcontent-wpv-c252][_ngcontent-%COMP%] {\n  box-shadow: none !important;\n  border: 1px solid #DEDEDE;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  width: 100% !important;\n  background-color: white;\n}\n\n.modal-body2[_ngcontent-%COMP%] {\n  width: 100% !important;\n  background-color: white;\n}\n\n.customDropdown[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  font-size: 14px;\n  padding-left: 12px;\n  padding-right: 10px;\n  padding-top: 5px;\n  height: 32px;\n  border-radius: 2px;\n  margin-right: 12px;\n  cursor: pointer;\n  z-index: 1;\n}\n\n.customDropdown[_ngcontent-%COMP%]:hover {\n  border: 1px solid #4b74ff !important;\n  color: #4b74ff !important;\n}\n\n.dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  position: relative;\n  background: white;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  z-index: 1;\n  border-radius: 6px;\n  transform: translate(-14px, 4px);\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  cursor: pointer;\n  padding: 4px 6px;\n  min-width: 70px;\n  color: black;\n  transition: 0.4s ease;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #49a2d7;\n  color: white;\n}\n\n.customDropdown[_ngcontent-%COMP%]   .dropIco[_ngcontent-%COMP%] {\n  margin-left: 7px;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: black;\n  padding: 6px 10px;\n}\n\n.customDropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.customDropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.display-5[_ngcontent-%COMP%] {\n  width: 100%;\n  font-weight: 400;\n  color: #606670;\n  font-size: 18px;\n  border-bottom: 2px solid #49A2D7;\n  padding-bottom: 10px;\n  margin-bottom: 40px;\n}\n\n.display-4[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: #606670;\n  font-size: 16px;\n  padding-bottom: 10px;\n  margin-bottom: 10px;\n}\n\n.docStyle[_ngcontent-%COMP%] {\n  margin-left: 75px;\n}\n\n.heading[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 20px;\n  font-weight: 700;\n  color: #323e4a;\n}\n\n.dropdown[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.table-heading[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 500;\n  color: #747474;\n}\n\n.box-shadow[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n\n.table-padding[_ngcontent-%COMP%] {\n  background: white !important;\n}\n\n.upload-button[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 400;\n  border: none;\n  float: right;\n  margin-top: -12px;\n  margin-right: 0px;\n  height: 42px;\n  width: 160px;\n  background-color: #49a2d7;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 2px 2px 7px 0px #109cf1;\n}\n\nbutton[_ngcontent-%COMP%] {\n  outline: none;\n}\n\n.table-row[_ngcontent-%COMP%] {\n  background-color: #ffffff !important;\n  color: #707683;\n}\n\n.table-row[_ngcontent-%COMP%]:hover {\n  background: #f6f9ff !important;\n}\n\n.columH[_ngcontent-%COMP%]:hover {\n  background: #f6f9ff !important;\n}\n\n.columH[_ngcontent-%COMP%] {\n  border-left: 0.1px solid #d3d3d3;\n  border-right: 0.1px solid #d3d3d3;\n  padding: 5px;\n  height: 35px;\n}\n\n.rect[_ngcontent-%COMP%] {\n  text-align: right;\n  min-width: 80px !important;\n}\n\n.sb-no[_ngcontent-%COMP%] {\n  color: #49a2d7;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  vertical-align: middle !important;\n}\n\n.image[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  margin-top: 12fvpx;\n}\n\n.image2[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  margin-left: -13px;\n}\n\n.form[_ngcontent-%COMP%] {\n  margin-left: 38px !important;\n  margin-right: 5%;\n  top: 50%;\n  left: 50%;\n  height: 316px;\n  background-color: white;\n  border: 1px dashed rgba(0, 0, 0, 0.4);\n}\n\n.form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif !important;\n  text-align: center;\n  line-height: 30px;\n  color: #303030;\n}\n\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-family: \"EuropaNuova-Regular\", sans-serif !important;\n  position: absolute;\n  margin: 0;\n  width: 89%;\n  height: 313px;\n  padding: 0;\n  outline: none;\n  cursor: pointer;\n  opacity: 0;\n}\n\n.form[_ngcontent-%COMP%]   .form_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  margin-left: 36.5%;\n  height: 42px;\n  cursor: pointer;\n  width: 160px;\n  background-color: #49a2d7;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #149174;\n  color: #0c5645;\n}\n\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  border: 0;\n}\n\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.xbutton[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #49a2d7;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.ybutton[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #0c354d;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.zbutton[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #947551;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.border2[_ngcontent-%COMP%] {\n  border-left: 3px solid #5fe6e7;\n}\n\n.border3[_ngcontent-%COMP%] {\n  border-left: 3px solid #e7845f;\n}\n\n.form-wrapper1[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.form-wrapper1[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 5.5%;\n}\n\n.form-wrapper1.td[_ngcontent-%COMP%] {\n  width: 100%;\n  width: 7%;\n}\n\n.full-input[_ngcontent-%COMP%] {\n  margin-left: 18px;\n  margin-bottom: 10px;\n  display: inline-block;\n  padding: 3px;\n  height: 74px;\n  width: 177px;\n  background-color: white;\n  border-radius: 5px;\n  box-shadow: 4px 4px 8px 4px #eeeefa;\n}\n\n.smalll-input[_ngcontent-%COMP%] {\n  width: 160px !important;\n  outline: none;\n  border: none;\n  display: block;\n  border-radius: 4px;\n  border: 1px solid #d5dbe8;\n  height: 35px;\n}\n\n.Against_list[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  padding: 5px 0 5px 5px;\n  margin-bottom: 0 !important;\n  font-size: 15px;\n  font-weight: 500;\n  color: #72768a;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.Against_list[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0 0 0 5px;\n}\n\n.radiobtn[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.circular_input[_ngcontent-%COMP%] {\n  margin-left: 17px;\n}\n\n.sh1[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  margin-top: 15px;\n  font-size: 16px;\n  color: #606670;\n}\n\n.ss[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n\n#customers[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100% !important;\n  margin-left: 23px !important;\n  border-right: 1px solid #ddd;\n  border-left: 1px solid #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  height: 52px !important;\n  text-align: left;\n  font-weight: 300;\n  background-color: #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 52px !important;\n}\n\n.tab1[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  \n  display: inline-block;\n  height: 17px;\n  width: 17px;\n  color: #49a2d7;\n  margin-bottom: 10px;\n}\n\n.tab1[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + input[_ngcontent-%COMP%] {\n  background-color: #bfb;\n  border-color: #4c4;\n}\n\n.tab1[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.at[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding-right: 20px;\n  padding-left: 10px;\n}\n\n.ctb[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin-left: 210px;\n  background-color: #49a2d7;\n  padding: 12px 30px 11px 30px;\n  color: white;\n  border-radius: 4px;\n  cursor: pointer;\n  font-weight: 500;\n}\n\n.radio1[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  \n  display: inline-block;\n  height: 17px;\n  width: 17px;\n  color: #49a2d7;\n  border: 2px solid #49a2d7;\n}\n\n.radio1[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + input[_ngcontent-%COMP%] {\n  background-color: #bfb;\n  border-color: #4c4;\n}\n\n.label1[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 0px;\n  padding-right: 12px;\n  color: #606670;\n  font-size: 12px;\n  letter-spacing: 1px;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-left: 15px;\n}\n\n.radio1[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.stp1[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 500;\n  margin-bottom: 10px;\n  color: black;\n}\n\n.stp2[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin-bottom: 10px;\n  color: black;\n}\n\n.stp3[_ngcontent-%COMP%] {\n  color: #4a4a4a;\n  font-size: 14px;\n}\n\n.of1[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  font: 16px/26px Georgia, Garamond, Serif;\n  overflow: auto;\n}\n\n\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.side_document_list[_ngcontent-%COMP%] {\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 170vh;\n  border-right: 0.3px solid rgba(0, 0, 0, 0.2);\n  margin-left: 27px;\n}\n\n.profile_class[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  border-bottom: 0.3px solid rgba(0, 0, 0, 0.2);\n  padding: 3% 6%;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.activeBtn[_ngcontent-%COMP%] {\n  background-color: #f8fafd;\n  border-left: 8px solid rgb(61, 116, 197);\n}\n\n.table_top[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 28.55% 33% 36%;\n  border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);\n  align-items: center;\n}\n\n.invoices_tab[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  height: 100vh;\n  background-color: #f8fafd;\n}\n\n.invoices_inner[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #f8fafd;\n}\n\n.inner_tab_content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  background-color: white;\n}\n\n.invoice_head[_ngcontent-%COMP%] {\n  width: 95%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 5%;\n}\n\n.serial_detail[_ngcontent-%COMP%] {\n  width: 93%;\n  margin-top: 10px;\n  display: flex;\n  justify-content: right;\n  text-align: right;\n  font-weight: 500;\n}\n\n.transaction_tab[_ngcontent-%COMP%] {\n  width: 770px;\n  height: 1387px;\n}\n\n.form_inner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  justify-content: center;\n}\n\n.opt[_ngcontent-%COMP%] {\n  background-color: #49a2d7;\n  padding: 3px;\n  margin-bottom: 18px;\n  height: 41px;\n  min-width: 100px;\n  box-shadow: 2px 2px 7px 0px #109cf1;\n  border: none;\n  margin-left: 15px;\n  color: white;\n  border-radius: 4px;\n}\n\ninput[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder {\n  color: rgb(212, 29, 29);\n}\n\n.button[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 400;\n  min-width: 60px;\n  border: none;\n  padding: 5px;\n  background-color: transparent;\n  border-radius: 4px;\n  color: #0e8cd4;\n}\n\n.button1[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 400;\n  min-width: 60px;\n  border: none;\n  padding: 5px;\n  background-color: #0e8cd4;\n  box-shadow: 2px 2px 7px 0px #109cf1;\n  border-radius: 4px;\n  color: white;\n}\n\n.button3[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 400;\n  min-width: 100px;\n  border: none;\n  padding: 5px;\n  background-color: #0e8cd4;\n  box-shadow: 2px 2px 7px 0px #109cf1;\n  border-radius: 4px;\n  color: white;\n}\n\n.class1[_ngcontent-%COMP%] {\n  background-color: #97cceb;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.flex-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background-color: #f1f1f1;\n  width: 130px;\n  margin: 10px;\n  text-align: center;\n  font-size: 24px;\n}\n\n.my_class[_ngcontent-%COMP%] {\n  background-color: #0e8cd4 !important;\n}\n\n.heading[_ngcontent-%COMP%] {\n  height: 25px;\n}\n\ntr.border1[_ngcontent-%COMP%] {\n  border: 1px solid #070707;\n}\n\ntd.border1[_ngcontent-%COMP%] {\n  border-right: 1px solid #070707;\n}\n\n.wtd[_ngcontent-%COMP%] {\n  width: 441px;\n}\n\n.wtd1[_ngcontent-%COMP%] {\n  width: 600px;\n}\n\n.wtd1[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.wtd2[_ngcontent-%COMP%] {\n  width: 900px;\n}\n\nspan[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  border-bottom: 1px solid black;\n}\n\n.spli[_ngcontent-%COMP%] {\n  border-bottom: 1px solid black !important;\n}\n\n.ins[_ngcontent-%COMP%] {\n  border: none;\n  border-bottom: 1px solid black;\n  width: 400px;\n}\n\n.wtd7[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100px !important;\n  border: none;\n}\n\n.wtd8[_ngcontent-%COMP%] {\n  width: 160px !important;\n}\n\n.ind[_ngcontent-%COMP%] {\n  border: none;\n  border-bottom: 1px solid black;\n}\n\n.sl[_ngcontent-%COMP%] {\n  width: 30px;\n}\n\n.sl3[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  width: 100px;\n}\n\n.sl3[_ngcontent-%COMP%] {\n  width: 120px;\n}\n\n.w1[_ngcontent-%COMP%] {\n  width: 500px;\n}\n\n.w1[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 216px;\n  border: none;\n}\n\n.pdf_heading[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.button1[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 400;\n  width: 170px;\n  border: none;\n  padding: 5px;\n  background-color: #49a2d7;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n}\n\n.selecter1[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  width: 150px;\n  text-align: center;\n  text-decoration: none;\n  color: white;\n  display: inline-block;\n  background-color: #51AEE5;\n  position: relative;\n  padding: 5px 5px;\n  border: 1px solid;\n  border-radius: 6px;\n}\n\n.sizes[_ngcontent-%COMP%] {\n  width: 700px;\n  height: 900px;\n  margin-left: 28px;\n  margin-top: 30px;\n}\n\n.sizem[_ngcontent-%COMP%] {\n  width: 700px;\n  height: 900px;\n  margin-left: 28px;\n}\n\n.savBtn[_ngcontent-%COMP%] {\n  background-color: #49A2D7;\n  color: white;\n  border: 1px solid rgba(0, 0, 0, 0.4);\n  font-size: 14px;\n  cursor: pointer;\n  border-radius: 2px;\n  width: 60px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 12px;\n}\n\n.submitBTN[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  width: 160px;\n  height: 40px;\n  border: 2px white solid;\n  border-radius: 20px;\n  background-color: #51AEE5;\n  font-size: 12px;\n  color: #ffffff;\n}\n\n@media (min-width: 1000px) {\n  .col-md-7[_ngcontent-%COMP%] {\n    flex: 0 0 58.333333% !important;\n    max-width: 42.333333% !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .col-md-7[_ngcontent-%COMP%] {\n    flex: 0 0 58.333333% !important;\n    max-width: 58.333333% !important;\n  }\n}\n\n.content_top_common[_ngcontent-%COMP%]   .content-wrap[_ngcontent-%COMP%] {\n  left: 0 !important;\n  width: 100%;\n  padding-left: 0 !important;\n  flex: 1 0 auto;\n  padding-right: 0px;\n}\n\n.content.table-padding[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.Against_list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 15px;\n  width: 100%;\n  color: #333;\n  margin: 9px 0;\n}\n\n.form-check[_ngcontent-%COMP%] {\n  padding: 10px 0 13px 18px;\n}\n\n.shippingbilldrp[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  left: 3px;\n  width: 100%;\n  margin: 28px 0 0 11px;\n}\n\n.bill_lod_section[_ngcontent-%COMP%] {\n  width: 500px;\n}\n\n.check_box_button[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.bill_lod_section[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  text-align: left;\n  display: inline-block;\n  color: #999999;\n  width: 100%;\n}\n\n.space_bottom[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  min-height: 28px;\n}\n\n.pl-0[_ngcontent-%COMP%] {\n  padding-left: 0px;\n}\n\n.pr-0[_ngcontent-%COMP%] {\n  padding-right: 0px;\n}\n\n.uplod_doc[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fff;\n  border: 1px solid #D9D9D9;\n  border-radius: 0px 5px 5px 0px;\n  height: 35px;\n}\n\n.select_rol[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {\n  border: 1px solid #D9D9D9;\n  border-right: 1px solid #fff;\n  border-radius: 5px 0px 0 5px;\n  color: #777;\n}\n\n.select_rol.withborder[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {\n  border: 1px solid #D9D9D9 !important;\n  border-right: 1px solid #d3d3d3 !important;\n  border-radius: 5px !important;\n  color: #777;\n}\n\n.bill_lod_section[_ngcontent-%COMP%]   .select_rol[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {\n  border: 1px solid #D9D9D9;\n  width: 100%;\n  height: 35px;\n  color: #777;\n  border-right: 1px solid #fff;\n  border-radius: 5px 0px 0 5px;\n}\n\n.content1[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  box-shadow: 0 0 2px 2px #d3d3d3;\n  border-radius: 10px;\n  width: 100vw;\n  margin-left: 0;\n  margin-top: 0;\n  height: 100vh;\n  background-color: rgba(42, 40, 40, 0.231372549);\n  z-index: 999999999;\n  align-items: baseline;\n  justify-content: center;\n  padding: 10px;\n}\n\n.shipping-bill-select[_ngcontent-%COMP%] {\n  border: 1px solid #D9D9D9;\n  width: 100%;\n  height: 35px;\n  color: #777;\n  border-right: 1px solid #fff;\n  border-radius: 5px 0 0 5px;\n}\n\n.check_box_button[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background: #51AEE5 !important;\n  color: #fff;\n  box-shadow: none !important;\n  outline: none;\n}\n\n.check_box_button[_ngcontent-%COMP%]   .active1[_ngcontent-%COMP%] {\n  background: #FC5E5E;\n  color: white;\n}\n\n.check_box_button[_ngcontent-%COMP%]   .removebg[_ngcontent-%COMP%] {\n  background: white;\n  color: black;\n}\n\n.no-button[_ngcontent-%COMP%] {\n  float: left;\n  padding: 0 10px;\n  margin: 0;\n  height: 32px;\n  border-radius: 0;\n  background: #FC5E5E;\n  border: 1px solid #FC5E5E;\n  border-top-left-radius: 6px;\n  border-bottom-left-radius: 6px;\n  color: white;\n}\n\n.yes-button[_ngcontent-%COMP%] {\n  float: left;\n  padding: 0 10px;\n  margin: 0;\n  border-radius: 0;\n  height: 32px;\n  background: #fff;\n  border: 1px solid #D9D9D9;\n  color: #777;\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n\n.remove-no-button[_ngcontent-%COMP%] {\n  float: left;\n  padding: 0 10px;\n  margin: 0;\n  border-radius: 0;\n  height: 32px;\n  background: #fff;\n  border: 1px solid #D9D9D9;\n  color: #777;\n  border-bottom-left-radius: 6px;\n  border-top-left-radius: 6px;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  width: 500px !important;\n  max-width: 800px !important;\n  background-color: #fff;\n  margin-top: 80px;\n  margin-left: 190px;\n  border-radius: 10px;\n}\n\n.main-drop-down-class[_ngcontent-%COMP%] {\n  padding: 0px;\n  line-height: inherit;\n}\n\n.shpt_bill_sec[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n}\n\n.shpt_bill_sec[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  color: #999;\n  margin: 10px 0;\n}\n\n.custom-modal[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.bg-black-opacity[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.231372549);\n  display: none;\n  z-index: 99999;\n}\n\n.modal[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1050;\n  overflow: hidden;\n  outline: 0;\n  max-height: 600px;\n}\n\n.modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n  max-width: 100%;\n  width: 960px;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  width: 100% !important;\n  max-width: 100%;\n  background-color: #fff;\n  margin-top: 0;\n  margin-left: 0;\n  border-radius: 10px;\n}\n\n.scroll-bar-main[_ngcontent-%COMP%] {\n  left: 230px;\n}"]
  });
  return BillLodgementComponent;
})();

/***/ }),

/***/ 33040:
/*!*********************************************************************!*\
  !*** ./src/app/home/Export/bill-lodgement/bill-lodgement.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillLodgementModule": () => (/* binding */ BillLodgementModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7976);
/* harmony import */ var _confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../confirm-dialog/confirm-dialog.service */ 12579);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 93329);
/* harmony import */ var _shared_Data_Servies_shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared-Data-Servies/shared-data.service */ 10241);
/* harmony import */ var _shared_home_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared-home.module */ 69408);
/* harmony import */ var _bill_lodgement_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bill-lodgement.component */ 95132);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ 11208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 64537);









let BillLodgementModule = /*#__PURE__*/(() => {
  class BillLodgementModule {}

  BillLodgementModule.ɵfac = function BillLodgementModule_Factory(t) {
    return new (t || BillLodgementModule)();
  };

  BillLodgementModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: BillLodgementModule
  });
  BillLodgementModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    providers: [_confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialogService, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal, _shared_Data_Servies_shared_data_service__WEBPACK_IMPORTED_MODULE_1__.SharedDataService],
    imports: [_shared_home_module__WEBPACK_IMPORTED_MODULE_2__.SharedHomeModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild([{
      path: "",
      component: _bill_lodgement_component__WEBPACK_IMPORTED_MODULE_3__.BillLodgementComponent
    }])]
  });
  return BillLodgementModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](BillLodgementModule, {
    declarations: [_bill_lodgement_component__WEBPACK_IMPORTED_MODULE_3__.BillLodgementComponent],
    imports: [_shared_home_module__WEBPACK_IMPORTED_MODULE_2__.SharedHomeModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ })

}]);