(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _features_leaderboards_leaderboards_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/leaderboards/leaderboards.component */ "./src/app/features/leaderboards/leaderboards.component.ts");
/* harmony import */ var _features_log_daily_log_daily_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/log-daily/log-daily.component */ "./src/app/features/log-daily/log-daily.component.ts");
/* harmony import */ var _features_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features/profile/profile.component */ "./src/app/features/profile/profile.component.ts");







const routes = [
    { path: 'profile', component: _features_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
    { path: 'log-daily', component: _features_log_daily_log_daily_component__WEBPACK_IMPORTED_MODULE_3__["LogDailyComponent"] },
    { path: 'leaderboards', component: _features_leaderboards_leaderboards_component__WEBPACK_IMPORTED_MODULE_2__["LeaderboardsComponent"] },
    { path: '**', component: _features_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








class AppComponent {
    constructor() {
        this.title = 'hackathon';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 20, vars: 1, consts: [[1, "example-container"], ["color", "primary"], ["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 1, "example-icon", 3, "click"], [1, "example-sidenav-container"], [3, "mode"], ["snav", ""], ["mat-list-item", "", "routerLink", "/profile"], ["mat-list-item", "", "routerLink", "/log-daily"], ["mat-list-item", "", "routerLink", "/leaderboards"], [2, "padding", "20px", "max-width", "900px", "margin", "auto", "height", "100%"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Hackathon App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-sidenav-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-sidenav", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Log Daily Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Leaderboards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "side");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]], styles: [".example-sidenav-container[_ngcontent-%COMP%] {\n  \n  flex: 1;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7MEZBQUE7RUFFQSxPQUFBO0FBQ0o7O0FBRUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgbm90IGZpeGVkLCBzdHJldGNoIHRoZSBzaWRlbmF2IGNvbnRhaW5lciB0byBmaWxsIHRoZSBhdmFpbGFibGUgc3BhY2UuIFRoaXNcclxuICAgICAgIGNhdXNlcyBgPG1hdC1zaWRlbmF2LWNvbnRlbnQ+YCB0byBhY3QgYXMgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBkZXNrdG9wIGxheW91dHMuICovXHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxuXHJcbiAgLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/clipboard */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _features_profile_profile_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./features/profile/profile.component */ "./src/app/features/profile/profile.component.ts");
/* harmony import */ var _features_log_daily_log_daily_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./features/log-daily/log-daily.component */ "./src/app/features/log-daily/log-daily.component.ts");
/* harmony import */ var _features_leaderboards_leaderboards_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./features/leaderboards/leaderboards.component */ "./src/app/features/leaderboards/leaderboards.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





















































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_51__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["A11yModule"],
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_6__["ClipboardModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_11__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_12__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_13__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_15__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_16__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_18__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_42__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_27__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_29__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_30__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_33__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_34__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_35__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_36__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_37__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_39__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_38__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_40__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_41__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_43__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_44__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_45__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_46__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_47__["MatTreeModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__["ScrollingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _features_profile_profile_component__WEBPACK_IMPORTED_MODULE_48__["ProfileComponent"],
        _features_log_daily_log_daily_component__WEBPACK_IMPORTED_MODULE_49__["LogDailyComponent"],
        _features_leaderboards_leaderboards_component__WEBPACK_IMPORTED_MODULE_50__["LeaderboardsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_51__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_6__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_11__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_12__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_13__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_15__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_16__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_18__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_42__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_27__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_29__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_30__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_33__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_34__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_35__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_36__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_37__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_39__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_38__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_40__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_41__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_43__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_44__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_45__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_46__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_47__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__["ScrollingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _features_profile_profile_component__WEBPACK_IMPORTED_MODULE_48__["ProfileComponent"],
                    _features_log_daily_log_daily_component__WEBPACK_IMPORTED_MODULE_49__["LogDailyComponent"],
                    _features_leaderboards_leaderboards_component__WEBPACK_IMPORTED_MODULE_50__["LeaderboardsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_51__["FormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["A11yModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_6__["ClipboardModule"],
                    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_11__["CdkStepperModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_12__["CdkTableModule"],
                    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_13__["CdkTreeModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_15__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_16__["MatBottomSheetModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_18__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__["MatChipsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_42__["MatStepperModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_27__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_29__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_30__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatNativeDateModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_33__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_34__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_35__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_36__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_37__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_39__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_38__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_40__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_41__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_43__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_44__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_45__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_46__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_47__["MatTreeModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__["PortalModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__["ScrollingModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/leaderboards/leaderboards.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/features/leaderboards/leaderboards.component.ts ***!
  \*****************************************************************/
/*! exports provided: LeaderboardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderboardsComponent", function() { return LeaderboardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");



function LeaderboardsComponent_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LeaderboardsComponent_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r8.position, " ");
} }
function LeaderboardsComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LeaderboardsComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r9.name, " ");
} }
function LeaderboardsComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Percentage of Goal Complete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LeaderboardsComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r10.pctGoal, " ");
} }
function LeaderboardsComponent_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 10);
} }
function LeaderboardsComponent_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 11);
} }
const ELEMENT_DATA = [
    { position: 1, name: 'Bob Smith', pctGoal: 25 },
    { position: 2, name: 'Jane Doe', pctGoal: 78 },
    { position: 3, name: 'Frank Vognet', pctGoal: 10 },
    { position: 4, name: 'John T', pctGoal: 22 },
    { position: 5, name: 'Tom Hess', pctGoal: 11 },
    { position: 6, name: 'Charles A', pctGoal: 7 },
    { position: 7, name: 'Lacey', pctGoal: 67 },
    { position: 8, name: 'Lavanya G', pctGoal: 94 },
    { position: 9, name: 'Dan P', pctGoal: 84 },
    { position: 10, name: 'Fae A', pctGoal: 97 },
];
class LeaderboardsComponent {
    constructor() {
        this.displayedColumns = ['position', 'name', 'pctGoal'];
        this.dataSource = ELEMENT_DATA;
    }
    ngOnInit() {
    }
}
LeaderboardsComponent.ɵfac = function LeaderboardsComponent_Factory(t) { return new (t || LeaderboardsComponent)(); };
LeaderboardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LeaderboardsComponent, selectors: [["app-leaderboards"]], decls: 12, vars: 3, consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "pctGoal"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function LeaderboardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LeaderboardsComponent_th_2_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LeaderboardsComponent_td_3_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LeaderboardsComponent_th_5_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LeaderboardsComponent_td_6_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LeaderboardsComponent_th_8_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LeaderboardsComponent_td_9_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LeaderboardsComponent_tr_10_Template, 1, 0, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LeaderboardsComponent_tr_11_Template, 1, 0, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvbGVhZGVyYm9hcmRzL2xlYWRlcmJvYXJkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2xlYWRlcmJvYXJkcy9sZWFkZXJib2FyZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeaderboardsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-leaderboards',
                templateUrl: './leaderboards.component.html',
                styleUrls: ['./leaderboards.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/features/log-daily/log-daily.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/features/log-daily/log-daily.component.ts ***!
  \***********************************************************/
/*! exports provided: LogDailyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogDailyComponent", function() { return LogDailyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");








class LogDailyComponent {
    constructor() { }
    ngOnInit() {
    }
    logWork() {
        this.activity = '';
        this.duration = undefined;
    }
}
LogDailyComponent.ɵfac = function LogDailyComponent_Factory(t) { return new (t || LogDailyComponent)(); };
LogDailyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogDailyComponent, selectors: [["app-log-daily"]], decls: 26, vars: 2, consts: [[2, "display", "flex", "justify-content", "space-between"], ["appearance", "fill"], [3, "ngModel", "ngModelChange"], ["value", "option"], ["matInput", "", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function LogDailyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Log Daily Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LogDailyComponent_Template_mat_select_ngModelChange_7_listener($event) { return ctx.activity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Walking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Running");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cycling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Swimming");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Dog Walking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Duration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LogDailyComponent_Template_input_ngModelChange_22_listener($event) { return ctx.duration = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LogDailyComponent_Template_button_click_24_listener() { return ctx.logWork(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Log");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.activity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.duration);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_2__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatOption"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2xvZy1kYWlseS9sb2ctZGFpbHkuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogDailyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-log-daily',
                templateUrl: './log-daily.component.html',
                styleUrls: ['./log-daily.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/features/profile/profile.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/features/profile/profile.component.ts ***!
  \*******************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






class ProfileComponent {
    constructor() {
        this.disabled = true;
    }
    toggleEdit() {
        this.disabled = !this.disabled;
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 26, vars: 8, consts: [[2, "display", "flex", "justify-content", "space-between"], ["mat-button", "", 3, "click"], ["appearance", "fill"], ["matInput", "", 3, "disabled", "ngModel", "ngModelChange"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_4_listener() { return ctx.toggleEdit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_9_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_14_listener($event) { return ctx.age = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Weight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_19_listener($event) { return ctx.weight = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Goal Weight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_24_listener($event) { return ctx.goalWeight = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled)("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled)("ngModel", ctx.age);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled)("ngModel", ctx.weight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled)("ngModel", ctx.goalWeight);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\cbaddeley\Desktop\hackathon\hackathon\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map