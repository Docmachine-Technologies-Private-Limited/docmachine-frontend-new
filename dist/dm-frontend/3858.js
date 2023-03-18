"use strict";
(self["webpackChunkdm_frontend"] = self["webpackChunkdm_frontend"] || []).push([[3858],{

/***/ 23858:
/*!********************************************************************************!*\
  !*** ./src/app/home/import-bill-of-exchange/import-bill-of-exchange.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImportBillOfExchangeModule": () => (/* binding */ ImportBillOfExchangeModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7976);
/* harmony import */ var _confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../confirm-dialog/confirm-dialog.service */ 12579);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 93329);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ 35581);
/* harmony import */ var _shared_Data_Servies_shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared-Data-Servies/shared-data.service */ 10241);
/* harmony import */ var _shared_home_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-home.module */ 69408);
/* harmony import */ var _import_bill_of_exchange_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./import-bill-of-exchange.component */ 33192);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 64537);










let ImportBillOfExchangeModule = /*#__PURE__*/(() => {
  class ImportBillOfExchangeModule {}

  ImportBillOfExchangeModule.ɵfac = function ImportBillOfExchangeModule_Factory(t) {
    return new (t || ImportBillOfExchangeModule)();
  };

  ImportBillOfExchangeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: ImportBillOfExchangeModule
  });
  ImportBillOfExchangeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    providers: [_confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialogService, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal, _shared_Data_Servies_shared_data_service__WEBPACK_IMPORTED_MODULE_1__.SharedDataService],
    imports: [_shared_home_module__WEBPACK_IMPORTED_MODULE_2__.SharedHomeModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild([{
      path: "",
      component: _import_bill_of_exchange_component__WEBPACK_IMPORTED_MODULE_3__.ImportBillOfExchangeComponent,
      pathMatch: "full"
    }]), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__.ModalModule.forRoot()]
  });
  return ImportBillOfExchangeModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ImportBillOfExchangeModule, {
    declarations: [_import_bill_of_exchange_component__WEBPACK_IMPORTED_MODULE_3__.ImportBillOfExchangeComponent],
    imports: [_shared_home_module__WEBPACK_IMPORTED_MODULE_2__.SharedHomeModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__.ModalModule]
  });
})();

/***/ })

}]);