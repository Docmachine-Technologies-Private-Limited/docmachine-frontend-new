"use strict";
(self["webpackChunkdm_frontend"] = self["webpackChunkdm_frontend"] || []).push([["src_app_home_import-commercial_import-commercial_module_ts"],{

/***/ 9843:
/*!***********************************************************************!*\
  !*** ./src/app/home/import-commercial/import-commercial.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImportCommercialComponent": () => (/* binding */ ImportCommercialComponent)
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





























const _c0 = ["importcommercial"];

function ImportCommercialComponent_option_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const Buyer_Name_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", Buyer_Name_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", Buyer_Name_r9, " ");
  }
}

function ImportCommercialComponent_option_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const PI_PO_No_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", PI_PO_No_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", PI_PO_No_r10, " ");
  }
}

function ImportCommercialComponent_option_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const Origin_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", Origin_r11, " ");
  }
}

function ImportCommercialComponent_option_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const SB_DATE_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", SB_DATE_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", SB_DATE_r12, " ");
  }
}

function ImportCommercialComponent_tr_78_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", data_r13.commercialNumber, " ");
  }
}

function ImportCommercialComponent_tr_78_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ImportCommercialComponent_tr_78_div_7_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r23);
      const data_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](data_r13.commercialNumber = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", data_r13.commercialNumber);
  }
}

function ImportCommercialComponent_tr_78_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ImportCommercialComponent_tr_78_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      const data_r13 = ctx_r26.$implicit;
      const i_r14 = ctx_r26.index;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r25.toSave(data_r13, i_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function ImportCommercialComponent_tr_78_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ImportCommercialComponent_tr_78_button_14_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r30);
      const i_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().index;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r28.toEdit(i_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function ImportCommercialComponent_tr_78_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ImportCommercialComponent_tr_78_button_15_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      const data_r13 = ctx_r32.$implicit;
      const i_r14 = ctx_r32.index;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r31.handleDelete(data_r13._id, i_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}

function ImportCommercialComponent_tr_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr", 46)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, ImportCommercialComponent_tr_78_div_6_Template, 2, 1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, ImportCommercialComponent_tr_78_div_7_Template, 2, 1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "td", 49)(11, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ImportCommercialComponent_tr_78_Template_a_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r35);
      const data_r13 = restoredCtx.$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](80);

      ctx_r34.openCreditNote(_r7);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r34.viewCN(data_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, ImportCommercialComponent_tr_78_button_13_Template, 2, 0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, ImportCommercialComponent_tr_78_button_14_Template, 2, 0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, ImportCommercialComponent_tr_78_button_15_Template, 3, 0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx_r6.AprrovalPendingRejectService.truefalse(data_r13["deleteflag"] == "0") || ctx_r6.AprrovalPendingRejectService.truefalse((ctx_r6.USER_DATA == null ? null : ctx_r6.USER_DATA.result == null ? null : ctx_r6.USER_DATA.result.Role_Type) != "Approver"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r13.commercialDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r6.getPipoNumbers(data_r13), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r6.optionsVisibility[i_r14]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r6.optionsVisibility[i_r14]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r13.buyerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r6.optionsVisibility[i_r14]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r6.optionsVisibility[i_r14]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r6.optionsVisibility[i_r14]);
  }
}

function ImportCommercialComponent_ng_template_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 61)(1, "div", 62)(2, "div", 63)(3, "div", 64)(4, "div", 65)(5, "div", 5)(6, "div", 66)(7, "h6", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Commercial Certificate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "iframe", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ImportCommercialComponent_ng_template_79_Template_button_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r38);
      const modal_r36 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](modal_r36.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()()();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx_r8.viewData, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeResourceUrl"]);
  }
}

let ImportCommercialComponent = /*#__PURE__*/(() => {
  class ImportCommercialComponent {
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
        Commercial_Invoice_No: [],
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

        _this.documentService.getCommercial().subscribe(res => {
          console.log('Res', res);

          for (let value of res.data) {
            if (value['file'] == 'import') {
              _this.item.push(value);

              if (_this.ALL_FILTER_DATA['PI_PO_No'].includes(value?.currency) == false) {
                _this.ALL_FILTER_DATA['PI_PO_No'].push(_this.getPipoNumbers(value));
              }

              value?.buyerName.forEach(element => {
                if (_this.ALL_FILTER_DATA['Buyer_Name'].includes(element) == false && element != '' && element != undefined) {
                  _this.ALL_FILTER_DATA['Buyer_Name'].push(element);
                }
              });

              if (_this.ALL_FILTER_DATA['Commercial_Invoice_No'].includes(value?.commercialNumber) == false) {
                _this.ALL_FILTER_DATA['Commercial_Invoice_No'].push(value?.commercialNumber);
              }

              if (_this.ALL_FILTER_DATA['DATE'].includes(value?.commercialDate) == false) {
                _this.ALL_FILTER_DATA['DATE'].push(value?.commercialDate);
              }
            }
          }

          _this.FILTER_VALUE_LIST = _this.item;
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
      this.viewData = this.sanitizer.bypassSecurityTrustResourceUrl(a['commercialDoc']);
    }

    toSave(data, index) {
      this.optionsVisibility[index] = false;
      console.log(data);
      this.documentService.updateCommercial(data, data._id).subscribe(data => {
        console.log('king123');
        this.toastr.success('Commercial invoie updated successfully.');
      }, error => {
        // this.toastr.error('Invalid inputs, please check!');
        console.log('error');
      });
    }

    newDest() {
      this.sharedData.changeretunurl('home/import-commercial');
      this.router.navigate(['home/upload', {
        file: 'import',
        document: 'import-commercial'
      }]);
    }

    exportToExcel() {
      const ws = xlsx__WEBPACK_IMPORTED_MODULE_11__.utils.table_to_sheet(this.importcommercial.nativeElement);
      const wb = xlsx__WEBPACK_IMPORTED_MODULE_11__.utils.book_new();
      xlsx__WEBPACK_IMPORTED_MODULE_11__.utils.book_append_sheet(wb, ws, 'Sheet1');
      xlsx__WEBPACK_IMPORTED_MODULE_11__.writeFile(wb, 'Commercial.xlsx');
    }

    toEdit(index) {
      this.optionsVisibility[index] = true;
      this.toastr.warning('Commercial Invoice Is In Edit Mode');
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
          tableName: 'commercials'
        }).subscribe(res => {
          console.log(res);

          if (res) {
            this.ngOnInit();
          }
        }, err => console.log(err));
      } else if (RoleCheckbox == 'Maker' || RoleCheckbox == 'Checker' || RoleCheckbox == 'Approver') {
        var approval_data = {
          id: id,
          tableName: 'commercials',
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

  ImportCommercialComponent.ɵfac = function ImportCommercialComponent_Factory(t) {
    return new (t || ImportCommercialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_service_document_service__WEBPACK_IMPORTED_MODULE_2__.DocumentService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_13__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_Data_Servies_shared_data_service__WEBPACK_IMPORTED_MODULE_1__.SharedDataService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_service_window_information_service__WEBPACK_IMPORTED_MODULE_4__.WindowInformationService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_service_aprroval_pending_reject_transactions_service__WEBPACK_IMPORTED_MODULE_5__.AprrovalPendingRejectTransactionsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog));
  };

  ImportCommercialComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: ImportCommercialComponent,
    selectors: [["app-commercial"]],
    viewQuery: function ImportCommercialComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 5);
      }

      if (rf & 2) {
        let _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.importcommercial = _t.first);
      }
    },
    decls: 81,
    vars: 6,
    consts: [[1, "content-wrap", "pb-2", "scroll-bar-main"], [1, "import_export_sec"], [1, "heading_common_tag"], ["id", "content", "role", "main", 1, "content", "table-padding"], [1, "filter_section_top"], [1, "row"], [1, "col-md-4", "col-sm-4", "col-12"], [1, "col-md-8", "col-sm-8", "col-12"], [1, "filter_right_new", "padding_new_top"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "ex_icon"], [1, "filter_posit"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "fi_icon"], ["appFilterToggle", "", 1, "bg-white", "filter_main_sec", "mt-2", 2, "display", "none"], ["filter_Popup", ""], [1, "select_filter_options"], [1, "col-md-6", "col-12"], ["for", "exampleFormControlInput1", 1, "form-label"], ["aria-label", "Default select example", "name", "Buyer_Name", 1, "form-select", "form-control", 3, "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["aria-label", "Default select example", "name", "Company_Name", 1, "form-select", "form-control", 3, "change"], ["aria-label", "Default select example", "name", "Origin", 1, "form-select", "form-control", 3, "change"], [4, "ngFor", "ngForOf"], ["aria-label", "Default select example", "name", "date", 1, "form-select", "form-control", 3, "change"], [1, "footer_buttons"], ["type", "button", 1, "btn", "btn-light", 3, "click"], [1, "upload-button", "btn", "btn-success", 3, "disabled", "click"], [1, "add_icon"], [1, "analytics"], [1, "analytics_top", 2, "width", "100%"], ["commercial", ""], [1, "row", 2, "width", "100%"], ["id", "container", 1, ""], [1, "middle_datatable"], [1, "widget-body", "p-0", "support", "table-wrapper"], [1, "table", "table-striped", "mb-0"], [2, "width", "100%", "background", "white", "position", "sticky", "top", "0"], [1, "text-muted", "table-heading", 2, "border-bottom", "1px solid #f2f4f8"], ["scope", "col"], [1, "pl-3", 2, "margin-left", "9px"], [1, "text-dark"], ["class", "table-row", 3, "ngClass", 4, "ngFor", "ngForOf"], ["content", ""], [3, "value"], [1, "table-row", 3, "ngClass"], [1, "sb-no"], [4, "ngIf"], [1, "view_edit_button"], ["title", "View", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-eye"], ["title", "Save", "class", "savBtn bgnone", 3, "click", 4, "ngIf"], ["title", "Edit", "class", "savBtn bgnone", 3, "click", 4, "ngIf"], ["name", "commercialNumber", "type", "text", "placeholder", "Commercial Number", 1, "tblInput", "form-control", 3, "ngModel", "ngModelChange"], ["title", "Save", 1, "savBtn", "bgnone", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-floppy-o"], ["title", "Edit", 1, "savBtn", "bgnone", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-pencil-square-o"], ["title", "Delete", "href", "javascript:void(0)"], ["aria-hidden", "true", 1, "fa", "fa-trash-o"], [1, "modal-body"], [1, "row", "no-gutter"], [1, "col-md-7", 2, "margin", "10px"], [1, "login", "d-flex", "py-5", 2, "padding", "0px !important"], [1, "container", "popup"], [1, "col-lg-10", "col-xl-7", "mrg"], [1, "display-6"], ["width", "315%", "height", "500px", 3, "src"], ["type", "submit", 1, "submitBTN", 2, "margin-left", "250px", 3, "click"]],
    template: function ImportCommercialComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Import Commercial Invoices");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "main", 3)(5, "div", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ImportCommercialComponent_Template_button_click_10_listener() {
          return ctx.exportToExcel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "Export");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 11)(14, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ImportCommercialComponent_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r39);

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
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function ImportCommercialComponent_Template_select_change_24_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r39);

          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](18);

          ctx.filter($event.target.value, "buyerName");
          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](_r0.style.display = "none");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "Buyer name");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](27, ImportCommercialComponent_option_27_Template, 2, 2, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "div", 17)(29, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, "PI/PO No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function ImportCommercialComponent_Template_select_change_31_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r39);

          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](18);

          ctx.filter($event.target.value, "pipo");
          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](_r0.style.display = "none");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, "PI/PO No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](34, ImportCommercialComponent_option_34_Template, 2, 2, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "div", 17)(36, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37, "Commercial Invoice No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function ImportCommercialComponent_Template_select_change_38_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r39);

          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](18);

          ctx.filter($event.target.value, "commercialNumber");
          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](_r0.style.display = "none");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40, "Commercial Invoice No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](41, ImportCommercialComponent_option_41_Template, 2, 1, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "div", 17)(43, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44, "DATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function ImportCommercialComponent_Template_select_change_45_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r39);

          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](18);

          ctx.filter($event.target.value, "commercialDate");
          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](_r0.style.display = "none");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](47, "DATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](48, ImportCommercialComponent_option_48_Template, 2, 2, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "div", 26)(50, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ImportCommercialComponent_Template_button_click_50_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r39);

          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](18);

          ctx.resetFilter();
          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](_r0.style.display = "none");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](51, "RESET");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](52, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ImportCommercialComponent_Template_button_click_53_listener() {
          return ctx.newDest();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](54, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](55, " ADD NEW ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "div", 30)(57, "div", 31, 32)(59, "div", 33)(60, "div", 34)(61, "section", 35)(62, "div", 36)(63, "table", 37)(64, "thead", 38)(65, "tr", 39)(66, "th", 40)(67, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](68, "DATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](69, "th", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](70, "PI/PO No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](71, "th", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](72, "Commercial Invoice No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](73, "th", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](74, "Beneficiary Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](75, "th", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](76, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](77, "tbody", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](78, ImportCommercialComponent_tr_78_Template, 16, 9, "tr", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](79, ImportCommercialComponent_ng_template_79_Template, 12, 1, "ng-template", null, 44, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.ALL_FILTER_DATA == null ? null : ctx.ALL_FILTER_DATA.Buyer_Name);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.ALL_FILTER_DATA == null ? null : ctx.ALL_FILTER_DATA.PI_PO_No);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.ALL_FILTER_DATA == null ? null : ctx.ALL_FILTER_DATA.Commercial_Invoice_No);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.ALL_FILTER_DATA == null ? null : ctx.ALL_FILTER_DATA.DATE);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", (ctx.USER_DATA == null ? null : ctx.USER_DATA.result == null ? null : ctx.USER_DATA.result.Role_Type) != "Approver" ? false : true);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.FILTER_VALUE_LIST);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgForm, _custom_Filter_filter_toggle_directive__WEBPACK_IMPORTED_MODULE_8__.FilterToggleDirective],
    styles: ["*[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.heading[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 20px;\n  font-weight: 700;\n  margin-left: 23px;\n  color: #323e4a;\n}\n\n.table-heading[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 500;\n  color: #747474;\n}\n\n.box-shadow[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n\n.table-padding[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fff;\n  border-radius: 10px;\n  margin: 0;\n  box-shadow: 0 2px 10px rgba(58, 53, 65, 0.1019607843);\n}\n\n.upload-button[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n  font-weight: 100;\n  font-family: Poppins, sans-serif;\n  padding: 5px 8px;\n  font-size: 14px;\n  background-color: #49A2D7;\n  border: none;\n  border-radius: 5px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  outline: none;\n}\n\n.table-row[_ngcontent-%COMP%] {\n  background-color: #ffffff !important;\n  color: #707683;\n  border-left: 2px solid #fff;\n}\n\n.table-row[_ngcontent-%COMP%]:hover {\n  background: #f6f9ff !important;\n  border-left: 2px solid #49a2d7;\n}\n\nselect[_ngcontent-%COMP%] {\n  text-decoration: none;\n  border: none;\n  background: none;\n  color: #49a2d7;\n}\n\nselect[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.rect[_ngcontent-%COMP%] {\n  text-align: right;\n  min-width: 80px !important;\n}\n\n.sb-no[_ngcontent-%COMP%] {\n  color: #49a2d7;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  height: 68px;\n  vertical-align: middle !important;\n}\n\n.image[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  margin-top: 12fvpx;\n}\n\n.image2[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  margin-left: -13px;\n}\n\n.fl[_ngcontent-%COMP%] {\n  float: \"left\";\n}\n\n.fr[_ngcontent-%COMP%] {\n  float: \"right\";\n}\n\nspan.fs20[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\nspan.fs16[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\np.fs14[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.fs12[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.p-4[_ngcontent-%COMP%] {\n  padding: 4px;\n}\n\n.p-8[_ngcontent-%COMP%] {\n  z-index: 5000;\n  transform: scale(1, 1);\n  display: grid;\n  grid-template-columns: 29% 70%;\n}\n\n.p-20[_ngcontent-%COMP%] {\n  padding: 20px !important;\n}\n\n.p-12[_ngcontent-%COMP%] {\n  padding: 12px !important;\n}\n\n.p-16[_ngcontent-%COMP%] {\n  padding: 16px !important;\n}\n\n.pr-4[_ngcontent-%COMP%] {\n  padding-right: 4px;\n}\n\n.pr-8[_ngcontent-%COMP%] {\n  padding-right: 8px !important;\n}\n\n.pr-16[_ngcontent-%COMP%] {\n  padding-right: 16px;\n}\n\n.pt-30[_ngcontent-%COMP%] {\n  padding-top: 30px !important;\n}\n\n.pt-28[_ngcontent-%COMP%] {\n  padding-top: 28px !important;\n}\n\n.pt-25[_ngcontent-%COMP%] {\n  padding-top: 25px !important;\n}\n\n.pt-24[_ngcontent-%COMP%] {\n  padding-top: 24px !important;\n}\n\n.pt-22[_ngcontent-%COMP%] {\n  padding-top: 22px !important;\n}\n\n.pt-20[_ngcontent-%COMP%] {\n  padding-top: 20px !important;\n}\n\n.pt-19[_ngcontent-%COMP%] {\n  padding-top: 19px !important;\n}\n\n.pt-16[_ngcontent-%COMP%] {\n  padding-top: 16px !important;\n}\n\n.pt-14[_ngcontent-%COMP%] {\n  padding-top: 14px !important;\n}\n\n.pt-10[_ngcontent-%COMP%] {\n  padding-top: 10px !important;\n}\n\n.pt-8[_ngcontent-%COMP%] {\n  padding-top: 8px !important;\n}\n\n.pt-4[_ngcontent-%COMP%] {\n  padding-top: 4px;\n}\n\n.pt-2[_ngcontent-%COMP%] {\n  padding-top: 2px;\n}\n\n.pt-0[_ngcontent-%COMP%] {\n  padding-top: 0px !important;\n}\n\n.pb-28[_ngcontent-%COMP%] {\n  padding-bottom: 28px !important;\n}\n\n.pb-16[_ngcontent-%COMP%] {\n  padding-bottom: 16px !important;\n}\n\n.pv-4[_ngcontent-%COMP%] {\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n\n.pv-8[_ngcontent-%COMP%] {\n  padding-top: 8px !important;\n  padding-bottom: 8px !important;\n}\n\n.pv-10[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.pv-20[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.pv-14[_ngcontent-%COMP%] {\n  padding-top: 14px !important;\n  padding-bottom: 14px !important;\n}\n\n.pv-16[_ngcontent-%COMP%] {\n  padding-top: 16px !important;\n  padding-bottom: 16px !important;\n}\n\n.ph-5[_ngcontent-%COMP%] {\n  padding-right: 5px !important;\n  padding-left: 5px !important;\n}\n\n.ph-16[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n.ph-8[_ngcontent-%COMP%] {\n  padding-left: 8px !important;\n  padding-right: 8px !important;\n}\n\n.ph-10[_ngcontent-%COMP%] {\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n}\n\n.ph-4[_ngcontent-%COMP%] {\n  padding-left: 4px;\n  padding-right: 4px;\n}\n\n.ph-32[_ngcontent-%COMP%] {\n  padding-left: 32px;\n  padding-right: 32px;\n}\n\n.ph-38[_ngcontent-%COMP%] {\n  padding-left: 38px;\n  padding-right: 38px;\n}\n\n.ph-44[_ngcontent-%COMP%] {\n  padding-left: 44px;\n  padding-right: 44px;\n}\n\n.bb[_ngcontent-%COMP%] {\n  border-bottom: 0.1px solid #d3d3d3;\n  border-right: 0.1px solid #d3d3d3;\n}\n\n.bc[_ngcontent-%COMP%] {\n  background-color: #f8fafd;\n}\n\n.bcw[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #323e4a !important;\n}\n\n\n\n\n\n.m-4[_ngcontent-%COMP%] {\n  margin: 4px !important;\n}\n\n.m-8[_ngcontent-%COMP%] {\n  margin: 8px !important;\n}\n\n.m-16[_ngcontent-%COMP%] {\n  margin: 16px !important;\n}\n\n.mr-20[_ngcontent-%COMP%] {\n  margin-right: 20px !important;\n}\n\n.mr-8[_ngcontent-%COMP%] {\n  margin-right: 8px !important;\n}\n\n.ml-20[_ngcontent-%COMP%] {\n  margin-left: 20px !important;\n}\n\n.ml-24[_ngcontent-%COMP%] {\n  margin-left: 24px !important;\n}\n\n.mt-4[_ngcontent-%COMP%] {\n  margin-top: 4px !important;\n}\n\n.mt-8[_ngcontent-%COMP%] {\n  margin-top: 8px !important;\n}\n\n.mt-16[_ngcontent-%COMP%] {\n  margin-top: 16px !important;\n}\n\n.mt-24[_ngcontent-%COMP%] {\n  margin-top: 24px !important;\n}\n\n.mt-38[_ngcontent-%COMP%] {\n  margin-top: 38px !important;\n}\n\n.mh-8[_ngcontent-%COMP%] {\n  margin-left: 8px !important;\n  margin-right: 8px !important;\n}\n\n.mh-16[_ngcontent-%COMP%] {\n  margin-left: 16px !important;\n  margin-right: 16px !important;\n}\n\n.mv-4[_ngcontent-%COMP%] {\n  margin-top: 4px !important;\n  margin-bottom: 4px !important;\n}\n\n.mv-16[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  margin-bottom: 16px;\n}\n\n.mv-24[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  margin-bottom: 24px;\n}\n\n.mh--16[_ngcontent-%COMP%] {\n  margin-left: -16px !important;\n  margin-right: -16px !important;\n}\n\n.mh-8[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n.w100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.w70[_ngcontent-%COMP%] {\n  width: 70%;\n}\n\n.w50[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.w30[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.pc1[_ngcontent-%COMP%] {\n  width: 44.5%;\n  height: 35px;\n  float: right;\n  border-left: 1px solid rgb(104, 103, 103);\n}\n\n.tabbed[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  \n  background-color: #f8fafd;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding-right: 28px;\n  padding-left: 32px;\n}\n\n.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  \n  display: none;\n}\n\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  list-style: none;\n  background-color: white;\n  height: 100%;\n  padding: 1% 0;\n  padding-left: 30px;\n  margin-left: -30px;\n  width: 113%;\n}\n\n.tabs[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.tab[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 10px;\n  padding-right: 12px;\n  color: #606670;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-right: 10px;\n  border-right: 1px solid black;\n}\n\n.tab[_ngcontent-%COMP%]:hover   label[_ngcontent-%COMP%] {\n  border-top-color: #333;\n  color: #333;\n}\n\n.tab-content[_ngcontent-%COMP%] {\n  display: none;\n  color: #777;\n  background: #f8fafd;\n  margin: 10px !important;\n}\n\n\n\n.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(1):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(1)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(2):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(2)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(3):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(3)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(4):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(4)   label[_ngcontent-%COMP%], .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(5):checked    ~ .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:nth-of-type(5)   label[_ngcontent-%COMP%] {\n  color: #49a2d7;\n  margin-right: 10px;\n}\n\n.tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(1):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(1), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(2):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(2), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(3):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(3), .tabbed[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:nth-of-type(4):checked    ~ .tab-content[_ngcontent-%COMP%]:nth-of-type(4) {\n  display: block;\n}\n\n.hhu[_ngcontent-%COMP%]:active, .hhu[_ngcontent-%COMP%]:focus {\n  border: 2px solid red;\n}\n\n.form[_ngcontent-%COMP%] {\n  margin-left: 38px !important;\n  margin-right: 5%;\n  top: 50%;\n  left: 50%;\n  height: 316px;\n  background-color: white;\n  border: 1px dashed rgba(0, 0, 0, 0.4);\n}\n\n.form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif !important;\n  text-align: center;\n  line-height: 30px;\n  color: #303030;\n}\n\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-family: \"EuropaNuova-Regular\", sans-serif !important;\n  position: absolute;\n  margin: 0;\n  width: 89%;\n  height: 313px;\n  padding: 0;\n  outline: none;\n  cursor: pointer;\n  opacity: 0;\n}\n\n.form[_ngcontent-%COMP%]   .form_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  margin-left: 36.5%;\n  height: 42px;\n  cursor: pointer;\n  width: 160px;\n  background-color: #49a2d7;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #149174;\n  color: #0c5645;\n}\n\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  border: 0;\n}\n\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.xbutton[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #49a2d7;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.ybutton[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #0c354d;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.zbutton[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-weight: 600;\n  border: none;\n  height: 42px;\n  background-color: #947551;\n  border-radius: 4px;\n  color: #ffffff;\n  box-shadow: 0px 4px 10px 0px #49a2d7;\n  outline: none;\n}\n\n.border1[_ngcontent-%COMP%] {\n  border-left: 3px solid #174d72;\n}\n\n.border2[_ngcontent-%COMP%] {\n  border-left: 3px solid #5fe6e7;\n}\n\n.border3[_ngcontent-%COMP%] {\n  border-left: 3px solid #e7845f;\n}\n\n.form-wrapper1[_ngcontent-%COMP%] {\n  flex-direction: column;\n  width: 100%;\n}\n\n.form-wrapper1[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 5.5%;\n}\n\n.form-wrapper1.td[_ngcontent-%COMP%] {\n  width: 100%;\n  width: 7%;\n}\n\n.full-input[_ngcontent-%COMP%] {\n  margin-left: 18px;\n  margin-bottom: 10px;\n  display: inline-block;\n  padding: 3px;\n  height: 74px;\n  width: 177px;\n  background-color: white;\n  border-radius: 5px;\n  box-shadow: 4px 4px 8px 4px #eeeefa;\n}\n\n.smalll-input[_ngcontent-%COMP%] {\n  width: 160px !important;\n  outline: none;\n  border: none;\n  display: block;\n  border-radius: 4px;\n  border: 1px solid #d5dbe8;\n  height: 35px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  padding: 5px 0px 5px 5px;\n  margin-bottom: 0px !important;\n  font-size: 12px;\n  font-weight: 500;\n  color: #72768a;\n}\n\n.sh1[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  margin-top: 15px;\n  font-size: 16px;\n  color: #606670;\n}\n\n.ss[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n\n#customers[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100% !important;\n  margin-left: 19px !important;\n  border-right: 1px solid #ddd;\n  border-left: 1px solid #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  height: 52px !important;\n  text-align: left;\n  font-weight: 300;\n  background-color: #ddd;\n}\n\n#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 52px !important;\n}\n\n.tab1[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  \n  display: inline-block;\n  height: 17px;\n  width: 17px;\n  color: #49a2d7;\n  margin-bottom: 10px;\n}\n\n.tab1[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + input[_ngcontent-%COMP%] {\n  background-color: #bfb;\n  border-color: #4c4;\n}\n\n.label1[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 10px;\n  padding-right: 12px;\n  color: #606670;\n  font-size: 12px;\n  letter-spacing: 1px;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-left: 30px;\n}\n\n.tab1[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.at[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding-right: 20px;\n  padding-left: 10px;\n}\n\n.ctb[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin-left: 210px;\n  background-color: #49a2d7;\n  padding: 12px 30px 11px 30px;\n  color: white;\n  border-radius: 4px;\n  cursor: pointer;\n  font-weight: 500;\n}\n\n.radio1[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%] {\n  \n  display: inline-block;\n  height: 17px;\n  width: 17px;\n  color: #49a2d7;\n  margin-bottom: 10px;\n  border: 2px solid #49a2d7;\n}\n\n.radio1[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + input[_ngcontent-%COMP%] {\n  background-color: #bfb;\n  border-color: #4c4;\n}\n\n.label1[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 10px;\n  padding-right: 12px;\n  color: #606670;\n  font-size: 12px;\n  letter-spacing: 1px;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-left: 30px;\n}\n\n.radio1[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.stp1[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 500;\n  margin-bottom: 10px;\n  color: black;\n}\n\n.stp2[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin-bottom: 10px;\n  color: black;\n}\n\n.stp3[_ngcontent-%COMP%] {\n  color: #4a4a4a;\n  font-size: 14px;\n}\n\n.of1[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  font: 16px/26px Georgia, Garamond, Serif;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.side_document_list[_ngcontent-%COMP%] {\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 170vh;\n  border-right: 0.3px solid rgba(0, 0, 0, 0.2);\n}\n\n.profile_class[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  border-bottom: 0.3px solid rgba(0, 0, 0, 0.2);\n  padding: 3% 6%;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.activeBtn[_ngcontent-%COMP%] {\n  background-color: #f8fafd;\n  border-left: 8px solid rgb(61, 116, 197);\n}\n\n.table_top[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 29.55% 33% 30% 6%;\n  border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);\n  align-items: center;\n}\n\n.invoices_tab[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  height: 100vh;\n  background-color: #f8fafd;\n}\n\n.invoices_inner[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #f8fafd;\n}\n\n.inner_tab_content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  background-color: white;\n}\n\n.invoice_head[_ngcontent-%COMP%] {\n  width: 95%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 5%;\n}\n\n.serial_detail[_ngcontent-%COMP%] {\n  width: 93%;\n  margin-top: 10px;\n  display: flex;\n  justify-content: right;\n  text-align: right;\n  font-weight: 500;\n}\n\n.transaction_tab[_ngcontent-%COMP%] {\n  width: 770px;\n  height: 1387px;\n}\n\n.form_inner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  justify-content: center;\n}\n\n.opt[_ngcontent-%COMP%] {\n  background-color: #49a2d7;\n  padding: 0 3%;\n  height: 42px;\n  box-shadow: 4px 0px 7px #109cf1;\n  border: none;\n  color: white;\n}\n\n#container[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n.savBtn[_ngcontent-%COMP%] {\n  background-color: #49A2D7;\n  color: white;\n  border: 1px solid rgba(0, 0, 0, 0.4);\n  font-size: 14px;\n  cursor: pointer;\n  border-radius: 2px;\n}\n\n.content-wrap[_ngcontent-%COMP%] {\n  z-index: 0;\n  height: 100vh;\n  position: absolute;\n  left: 260px;\n  margin: auto;\n  width: 78vw;\n}\n\n#container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  min-height: 100%;\n}\n\ntable[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.analytics[_ngcontent-%COMP%]   .support[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.header-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 0.8%;\n  padding-left: 1%;\n  padding-bottom: 0.8%;\n  border-bottom: 1px solid black;\n  width: 99%;\n}\n\n.view_edit_button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #777;\n  padding: 0 4px;\n  font-size: 15px;\n  display: inline-block;\n}\n\n.view_edit_button[_ngcontent-%COMP%]   .savBtn[_ngcontent-%COMP%]   .fa.fa-floppy-o[_ngcontent-%COMP%]:before {\n  color: green;\n  font-size: 16px;\n}\n\n.none[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltcG9ydC1jb21tZXJjaWFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0NBQUE7QUFDSjs7QUFLQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBRko7O0FBU0E7RUFDSSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQU5KOztBQVVBO0VBQ0ksMkJBQUE7QUFQSjs7QUFVQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLHFEQUFBO0FBUEo7O0FBVUE7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQVBKOztBQVVBO0VBQ0ksYUFBQTtBQVBKOztBQVVBO0VBQ0ksb0NBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7QUFQSjs7QUFVQTtFQUNJLDhCQUFBO0VBQ0EsOEJBQUE7QUFQSjs7QUFVQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQVBKOztBQVVBO0VBQ0ksYUFBQTtBQVBKOztBQVVBO0VBQ0ksaUJBQUE7RUFDQSwwQkFBQTtBQVBKOztBQVVBO0VBQ0ksY0FBQTtBQVBKOztBQVVBOztFQUVJLFlBQUE7RUFDQSxpQ0FBQTtBQVBKOztBQVVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBUEo7O0FBVUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBUEo7O0FBVUE7RUFDSSxhQUFBO0FBUEo7O0FBVUE7RUFDSSxjQUFBO0FBUEo7O0FBVUE7RUFDSSxlQUFBO0FBUEo7O0FBVUE7RUFDSSxlQUFBO0FBUEo7O0FBVUE7RUFDSSxlQUFBO0FBUEo7O0FBVUE7RUFDSSxlQUFBO0FBUEo7O0FBVUE7RUFDSSxZQUFBO0FBUEo7O0FBVUE7RUFDSSxhQUFB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OEJBO0VBQ0ksY0FBQTtBQTNCSjs7QUE4QkE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUEzQko7O0FBOEJBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQTNCSjs7QUE4QkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBM0JKOztBQThCQTtFQUNJLGdCQUFBO0FBM0JKOztBQThCQTtFQUNJLGdCQUFBO0FBM0JKOztBQThCQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7QUEzQko7O0FBOEJBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUEzQko7O0FBOEJBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUEzQko7O0FBNkJBO0VBQ0Usb0JBQUE7RUFDQSxZQUFBO0FBMUJGIiwiZmlsZSI6ImltcG9ydC1jb21tZXJjaWFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi8vIC50YWJsZSB0aGVhZCB0aHtcclxuLy8gICAgIGJvcmRlcjogbm9uZTtcclxuLy8gfVxyXG4uaGVhZGluZyB7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIzcHg7XHJcbiAgICBjb2xvcjogIzMyM2U0YTtcclxufVxyXG5cclxuLy8gLmRyb3Bkb3duIHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTRweDtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbi8vIH1cclxuLnRhYmxlLWhlYWRpbmcge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjNzQ3NDc0O1xyXG4gICAgLy9vcGFjaXR5OiA1MCU7XHJcbn1cclxuXHJcbi5ib3gtc2hhZG93IHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRhYmxlLXBhZGRpbmcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggIzNhMzU0MTFhO1xyXG59XHJcblxyXG4udXBsb2FkLWJ1dHRvbiB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLCBzYW5zLXNlcmlmO1xyXG4gICAgcGFkZGluZzogNXB4IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OUEyRDc7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4udGFibGUtcm93IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNzA3NjgzO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZmZmO1xyXG59XHJcblxyXG4udGFibGUtcm93OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmNmY5ZmYgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzQ5YTJkNztcclxufVxyXG5cclxuc2VsZWN0IHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBjb2xvcjogIzQ5YTJkNztcclxufVxyXG5cclxuc2VsZWN0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5yZWN0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbWluLXdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zYi1ubyB7XHJcbiAgICBjb2xvcjogIzQ5YTJkNztcclxufVxyXG5cclxudGgsXHJcbnRkIHtcclxuICAgIGhlaWdodDogNjhweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmltYWdlIHtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTJmdnB4O1xyXG59XHJcblxyXG4uaW1hZ2UyIHtcclxuICAgIG1hcmdpbi10b3A6IDIycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEzcHg7XHJcbn1cclxuXHJcbi5mbCB7XHJcbiAgICBmbG9hdDogXCJsZWZ0XCI7XHJcbn1cclxuXHJcbi5mciB7XHJcbiAgICBmbG9hdDogXCJyaWdodFwiO1xyXG59XHJcblxyXG5zcGFuLmZzMjAge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5zcGFuLmZzMTYge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5wLmZzMTQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uZnMxMiB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5wLTQge1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG59XHJcblxyXG4ucC04IHtcclxuICAgIHotaW5kZXg6IDUwMDA7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjklIDcwJTtcclxufVxyXG5cclxuLnAtMjAge1xyXG4gICAgcGFkZGluZzogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucC0xMiB7XHJcbiAgICBwYWRkaW5nOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wLTE2IHtcclxuICAgIHBhZGRpbmc6IDE2cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnByLTQge1xyXG4gICAgcGFkZGluZy1yaWdodDogNHB4O1xyXG59XHJcblxyXG4ucHItOCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnByLTE2IHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbi5wdC0zMCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHQtMjgge1xyXG4gICAgcGFkZGluZy10b3A6IDI4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnB0LTI1IHtcclxuICAgIHBhZGRpbmctdG9wOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wdC0yNCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHQtMjIge1xyXG4gICAgcGFkZGluZy10b3A6IDIycHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnB0LTIwIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wdC0xOSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTlweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHQtMTYge1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnB0LTE0IHtcclxuICAgIHBhZGRpbmctdG9wOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wdC0xMCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHQtOCB7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wdC00IHtcclxuICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbn1cclxuXHJcbi5wdC0yIHtcclxuICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbn1cclxuXHJcbi5wdC0wIHtcclxuICAgIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBiLTI4IHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wYi0xNiB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHYtNCB7XHJcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcclxufVxyXG5cclxuLnB2LTgge1xyXG4gICAgcGFkZGluZy10b3A6IDhweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDhweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHYtMTAge1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnB2LTIwIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5wdi0xNCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnB2LTE2IHtcclxuICAgIHBhZGRpbmctdG9wOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGgtNSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5waC0xNiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG59XHJcblxyXG4ucGgtOCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5waC0xMCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBoLTQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbn1cclxuXHJcbi5waC0zMiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMycHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMnB4O1xyXG59XHJcblxyXG4ucGgtMzgge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzOHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzhweDtcclxufVxyXG5cclxuLnBoLTQ0IHtcclxuICAgIHBhZGRpbmctbGVmdDogNDRweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDQ0cHg7XHJcbn1cclxuXHJcbi5iYiB7XHJcbiAgICBib3JkZXItYm90dG9tOiAwLjFweCBzb2xpZCAjZDNkM2QzO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwLjFweCBzb2xpZCAjZDNkM2QzO1xyXG59XHJcblxyXG4uYmMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmZDtcclxufVxyXG5cclxuLmJjdyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiAjMzIzZTRhICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLXBhZGRpbmctLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS1tYXJnaW4tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuLm0tNCB7XHJcbiAgICBtYXJnaW46IDRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubS04IHtcclxuICAgIG1hcmdpbjogOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tLTE2IHtcclxuICAgIG1hcmdpbjogMTZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXItMjAge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tci04IHtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tbC0yMCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWwtMjQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm10LTQge1xyXG4gICAgbWFyZ2luLXRvcDogNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tdC04IHtcclxuICAgIG1hcmdpbi10b3A6IDhweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXQtMTYge1xyXG4gICAgbWFyZ2luLXRvcDogMTZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXQtMjQge1xyXG4gICAgbWFyZ2luLXRvcDogMjRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXQtMzgge1xyXG4gICAgbWFyZ2luLXRvcDogMzhweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWgtOCB7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWgtMTYge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogMTZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXYtNCB7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXYtMTYge1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi5tdi0yNCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxufVxyXG5cclxuLm1oLS0xNiB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE2cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogLTE2cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1oLTgge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG4udzEwMCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnc3MCB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG4udzUwIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi53MzAge1xyXG4gICAgd2lkdGg6IDMwJTtcclxufVxyXG5cclxuLnBjMSB7XHJcbiAgICB3aWR0aDogNDQuNSU7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYigxMDQsIDEwMywgMTAzKTtcclxufVxyXG5cclxuLnRhYmJlZCB7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAvKiBzbyB3ZSBjb3VsZCBlYXNpbHkgaGlkZSB0aGUgcmFkaW8gaW5wdXRzICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZkO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDI4cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMycHg7XHJcbn1cclxuXHJcbi50YWJiZWQgW3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgICAvKiBoaWRpbmcgdGhlIGlucHV0cyAqL1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnRhYnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIC8vbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDElIDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTMwcHg7XHJcbiAgICB3aWR0aDogMTEzJTtcclxufVxyXG5cclxuLnRhYnMgbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4udGFiPmxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcbiAgICBjb2xvcjogIzYwNjY3MDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi50YWI6aG92ZXIgbGFiZWwge1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogIzMzMztcclxuICAgIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4udGFiLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZmFmZDtcclxuICAgIC8vIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi8qIEFzIHdlIGNhbm5vdCByZXBsYWNlIHRoZSBudW1iZXJzIHdpdGggdmFyaWFibGVzIG9yIGNhbGxzIHRvIGVsZW1lbnQgcHJvcGVydGllcywgdGhlIG51bWJlciBvZiB0aGlzIHNlbGVjdG9yIHBhcnRzIGlzIG91ciB0YWIgY291bnQgbGltaXQgKi9cclxuXHJcbi50YWJiZWQgW3R5cGU9XCJyYWRpb1wiXTpudGgtb2YtdHlwZSgxKTpjaGVja2Vkfi50YWJzIC50YWI6bnRoLW9mLXR5cGUoMSkgbGFiZWwsXHJcbi50YWJiZWQgW3R5cGU9XCJyYWRpb1wiXTpudGgtb2YtdHlwZSgyKTpjaGVja2Vkfi50YWJzIC50YWI6bnRoLW9mLXR5cGUoMikgbGFiZWwsXHJcbi50YWJiZWQgW3R5cGU9XCJyYWRpb1wiXTpudGgtb2YtdHlwZSgzKTpjaGVja2Vkfi50YWJzIC50YWI6bnRoLW9mLXR5cGUoMykgbGFiZWwsXHJcbi50YWJiZWQgW3R5cGU9XCJyYWRpb1wiXTpudGgtb2YtdHlwZSg0KTpjaGVja2Vkfi50YWJzIC50YWI6bnRoLW9mLXR5cGUoNCkgbGFiZWwsXHJcbi50YWJiZWQgW3R5cGU9XCJyYWRpb1wiXTpudGgtb2YtdHlwZSg1KTpjaGVja2Vkfi50YWJzIC50YWI6bnRoLW9mLXR5cGUoNSkgbGFiZWwge1xyXG4gICAgY29sb3I6ICM0OWEyZDc7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi50YWJiZWQgW3R5cGU9XCJyYWRpb1wiXTpudGgtb2YtdHlwZSgxKTpjaGVja2Vkfi50YWItY29udGVudDpudGgtb2YtdHlwZSgxKSxcclxuLnRhYmJlZCBbdHlwZT1cInJhZGlvXCJdOm50aC1vZi10eXBlKDIpOmNoZWNrZWR+LnRhYi1jb250ZW50Om50aC1vZi10eXBlKDIpLFxyXG4udGFiYmVkIFt0eXBlPVwicmFkaW9cIl06bnRoLW9mLXR5cGUoMyk6Y2hlY2tlZH4udGFiLWNvbnRlbnQ6bnRoLW9mLXR5cGUoMyksXHJcbi50YWJiZWQgW3R5cGU9XCJyYWRpb1wiXTpudGgtb2YtdHlwZSg0KTpjaGVja2Vkfi50YWItY29udGVudDpudGgtb2YtdHlwZSg0KSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmhodTphY3RpdmUsXHJcbi5oaHU6Zm9jdXMge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzhweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgaGVpZ2h0OiAzMTZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkIHJnYmEoMCwgMCwgMCwgMC40KTtcclxufVxyXG5cclxuLmZvcm0gcCB7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICAgIC8vIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgIC8vIGhlaWdodDogMjNweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBjb2xvcjogIzMwMzAzMDtcclxufVxyXG5cclxuLmZvcm0gaW5wdXQge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiRXVyb3BhTnVvdmEtUmVndWxhclwiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB3aWR0aDogODklO1xyXG4gICAgaGVpZ2h0OiAzMTNweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmZvcm0gLmZvcm1faW5uZXIgYnV0dG9uIHtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAzNiU7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW4tbGVmdDogMzYuNSU7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogMTYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDlhMmQ3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggMHB4ICM0OWEyZDc7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uZm9ybSBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzE0OTE3NDtcclxuICAgIGNvbG9yOiAjMGM1NjQ1O1xyXG59XHJcblxyXG4uZm9ybSBidXR0b246YWN0aXZlIHtcclxuICAgIGJvcmRlcjogMDtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMsXHJcbnRleHRhcmVhOmZvY3VzLFxyXG5zZWxlY3Q6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLnhidXR0b24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OWEyZDc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAwcHggIzQ5YTJkNztcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi55YnV0dG9uIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGMzNTRkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggMHB4ICM0OWEyZDc7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uemJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk0NzU1MTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IDBweCAjNDlhMmQ3O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmJvcmRlcjEge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjMTc0ZDcyO1xyXG59XHJcblxyXG4uYm9yZGVyMiB7XHJcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICM1ZmU2ZTc7XHJcbn1cclxuXHJcbi5ib3JkZXIzIHtcclxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2U3ODQ1ZjtcclxufVxyXG5cclxuLmZvcm0td3JhcHBlcjEge1xyXG4gICAgLy9kaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZm9ybS13cmFwcGVyMSBkaXYgdGQge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogNS41JTtcclxufVxyXG5cclxuLmZvcm0td3JhcHBlcjEudGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB3aWR0aDogNyU7XHJcbn1cclxuXHJcbi5mdWxsLWlucHV0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIGhlaWdodDogNzRweDtcclxuICAgIHdpZHRoOiAxNzdweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA4cHggNHB4ICNlZWVlZmE7XHJcbn1cclxuXHJcbi5zbWFsbGwtaW5wdXQge1xyXG4gICAgd2lkdGg6IDE2MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDVkYmU4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDVweCAwcHggNXB4IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjNzI3NjhhO1xyXG59XHJcblxyXG4uc2gxIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjNjA2NjcwO1xyXG59XHJcblxyXG4uc3Mge1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNjdXN0b21lcnMge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxOXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG4jY3VzdG9tZXJzIHRkLFxyXG4jY3VzdG9tZXJzIHRoIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG4jY3VzdG9tZXJzIHRoIHtcclxuICAgIGhlaWdodDogNTJweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG59XHJcblxyXG4jY3VzdG9tZXJzIHRkIHtcclxuICAgIGhlaWdodDogNTJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGFiMSBbdHlwZT1cInJhZGlvXCJdIHtcclxuICAgIC8qIGhpZGluZyB0aGUgaW5wdXRzICovXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDE3cHg7XHJcbiAgICB3aWR0aDogMTdweDtcclxuICAgIGNvbG9yOiAjNDlhMmQ3O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnRhYjEgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQraW5wdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JmYjtcclxuICAgIGJvcmRlci1jb2xvcjogIzRjNDtcclxufVxyXG5cclxuLmxhYmVsMSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTJweDtcclxuICAgIGNvbG9yOiAjNjA2NjcwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbi50YWIxIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5hdCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uY3RiIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OWEyZDc7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDMwcHggMTFweCAzMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLnJhZGlvMSBbdHlwZT1cInJhZGlvXCJdIHtcclxuICAgIC8qIGhpZGluZyB0aGUgaW5wdXRzICovXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDE3cHg7XHJcbiAgICB3aWR0aDogMTdweDtcclxuICAgIGNvbG9yOiAjNDlhMmQ3O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM0OWEyZDc7XHJcbn1cclxuXHJcbi5yYWRpbzEgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQraW5wdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JmYjtcclxuICAgIGJvcmRlci1jb2xvcjogIzRjNDtcclxufVxyXG5cclxuLmxhYmVsMSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTJweDtcclxuICAgIGNvbG9yOiAjNjA2NjcwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbi5yYWRpbzEge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLnN0cDEge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5zdHAyIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5zdHAzIHtcclxuICAgIGNvbG9yOiAjNGE0YTRhO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4ub2YxIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBmb250OiAxNnB4LzI2cHggR2VvcmdpYSwgR2FyYW1vbmQsIFNlcmlmO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbnRhYmxlIHRib2R5IHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLy9TSURFIFBFT1BMRSBMSVNUXHJcbi5zaWRlX2RvY3VtZW50X2xpc3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDE3MHZoO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwLjNweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbi8vUFJPRklMRSBDTEFTU1NTUy9cclxuLnByb2ZpbGVfY2xhc3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMC4zcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgcGFkZGluZzogMyUgNiU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLy8gLnByb2ZpbGVfY2xhc3M6aG92ZXIge1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmQ7XHJcbi8vICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCByZ2IoNjEsIDExNiwgMTk3KTtcclxuLy8gfVxyXG4uYWN0aXZlQnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmQ7XHJcbiAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHJnYig2MSwgMTE2LCAxOTcpO1xyXG59XHJcblxyXG4udGFibGVfdG9wIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI5LjU1JSAzMyUgMzAlIDYlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmludm9pY2VzX3RhYiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmZDtcclxufVxyXG5cclxuLmludm9pY2VzX2lubmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmZDtcclxufVxyXG5cclxuLmlubmVyX3RhYl9jb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5pbnZvaWNlX2hlYWQge1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcclxufVxyXG5cclxuLnNlcmlhbF9kZXRhaWwge1xyXG4gICAgd2lkdGg6IDkzJTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uX3RhYiB7XHJcbiAgICB3aWR0aDogNzcwcHg7XHJcbiAgICBoZWlnaHQ6IDEzODdweDtcclxufVxyXG5cclxuLmZvcm1faW5uZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ub3B0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OWEyZDc7XHJcbiAgICBwYWRkaW5nOiAwIDMlO1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgYm94LXNoYWRvdzogNHB4IDBweCA3cHggIzEwOWNmMTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2NvbnRhaW5lciB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLnNhdkJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDlBMkQ3O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG4uY29udGVudC13cmFwIHtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMjYwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogNzh2dztcclxufVxyXG5cclxuI2NvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5hbmFseXRpY3MgLnN1cHBvcnQge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmhlYWRlci1wYW5lbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMC44JTtcclxuICAgIHBhZGRpbmctbGVmdDogMSU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC44JTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgIHdpZHRoOiA5OSU7XHJcbn1cclxuXHJcbi52aWV3X2VkaXRfYnV0dG9uIGEgaSB7XHJcbiAgICBjb2xvcjogIzc3NztcclxuICAgIHBhZGRpbmc6IDAgNHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4udmlld19lZGl0X2J1dHRvbiAuc2F2QnRuIC5mYS5mYS1mbG9wcHktbzpiZWZvcmUge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5ub25le1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIG9wYWNpdHk6IC43O1xyXG59XHJcbiJdfQ== */"]
  });
  return ImportCommercialComponent;
})();

/***/ }),

/***/ 89332:
/*!********************************************************************!*\
  !*** ./src/app/home/import-commercial/import-commercial.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImportCommercialModule": () => (/* binding */ ImportCommercialModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../confirm-dialog/confirm-dialog.service */ 12579);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ 71010);
/* harmony import */ var _shared_Data_Servies_shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared-Data-Servies/shared-data.service */ 10241);
/* harmony import */ var _shared_home_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-home.module */ 69408);
/* harmony import */ var _import_commercial_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./import-commercial.component */ 9843);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);










let ImportCommercialModule = /*#__PURE__*/(() => {
  class ImportCommercialModule {}

  ImportCommercialModule.ɵfac = function ImportCommercialModule_Factory(t) {
    return new (t || ImportCommercialModule)();
  };

  ImportCommercialModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: ImportCommercialModule
  });
  ImportCommercialModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    providers: [_confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialogService, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal, _shared_Data_Servies_shared_data_service__WEBPACK_IMPORTED_MODULE_1__.SharedDataService],
    imports: [_shared_home_module__WEBPACK_IMPORTED_MODULE_2__.SharedHomeModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild([{
      path: "",
      component: _import_commercial_component__WEBPACK_IMPORTED_MODULE_3__.ImportCommercialComponent,
      pathMatch: "full"
    }]), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__.ModalModule.forRoot()]
  });
  return ImportCommercialModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ImportCommercialModule, {
    declarations: [_import_commercial_component__WEBPACK_IMPORTED_MODULE_3__.ImportCommercialComponent],
    imports: [_shared_home_module__WEBPACK_IMPORTED_MODULE_2__.SharedHomeModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__.ModalModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_home_import-commercial_import-commercial_module_ts.js.map