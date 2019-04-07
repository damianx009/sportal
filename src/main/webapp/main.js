(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _custom_components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-components/login/login.component */ "./src/app/custom-components/login/login.component.ts");
/* harmony import */ var _custom_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom-components/footer/footer.component */ "./src/app/custom-components/footer/footer.component.ts");
/* harmony import */ var _custom_components_faq_faq_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./custom-components/faq/faq.component */ "./src/app/custom-components/faq/faq.component.ts");






var routes = [
    { path: '', component: _custom_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"] },
    { path: 'help', component: _custom_components_faq_faq_component__WEBPACK_IMPORTED_MODULE_5__["FaqComponent"] },
    { path: 'login', component: _custom_components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-sidenav-container, mat-sidenav-content, mat-sidenav {\r\n    height: 100%;\r\n  }\r\n  \r\n  mat-sidenav {\r\n    width: 250px;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1zaWRlbmF2LWNvbnRhaW5lciwgbWF0LXNpZGVuYXYtY29udGVudCwgbWF0LXNpZGVuYXYge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBcclxuICBtYXQtc2lkZW5hdiB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n    <mat-sidenav position=\"end\" #sidenav role=\"navigation\">\n        <app-sidenav-list (closeSidenav)=\"sidenav.close()\"></app-sidenav-list>\n    </mat-sidenav>\n    <mat-sidenav-content>\n        <app-header (sidenavToggle)=\"sidenav.toggle()\"></app-header>\n        <main>\n            <router-outlet></router-outlet>\n        </main>\n        <app-footer></app-footer>\n    </mat-sidenav-content>\n</mat-sidenav-container>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'np-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _modules_angular_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/angular-material.module */ "./src/app/modules/angular-material.module.ts");
/* harmony import */ var _custom_components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./custom-components/login/login.component */ "./src/app/custom-components/login/login.component.ts");
/* harmony import */ var _custom_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./custom-components/footer/footer.component */ "./src/app/custom-components/footer/footer.component.ts");
/* harmony import */ var _custom_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./custom-components/page-not-found/page-not-found.component */ "./src/app/custom-components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _custom_components_navigation_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./custom-components/navigation/header/header.component */ "./src/app/custom-components/navigation/header/header.component.ts");
/* harmony import */ var _custom_components_navigation_sidenav_list_sidenav_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./custom-components/navigation/sidenav-list/sidenav-list.component */ "./src/app/custom-components/navigation/sidenav-list/sidenav-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular2_cookie_services_cookies_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular2-cookie/services/cookies.service */ "./node_modules/angular2-cookie/services/cookies.service.js");
/* harmony import */ var angular2_cookie_services_cookies_service__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(angular2_cookie_services_cookies_service__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _interceptors_http_headers_config_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./interceptors/http-headers-config.interceptor */ "./src/app/interceptors/http-headers-config.interceptor.ts");
/* harmony import */ var _custom_components_faq_faq_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./custom-components/faq/faq.component */ "./src/app/custom-components/faq/faq.component.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _custom_components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _custom_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _custom_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"],
                _custom_components_navigation_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _custom_components_navigation_sidenav_list_sidenav_list_component__WEBPACK_IMPORTED_MODULE_12__["SidenavListComponent"],
                _custom_components_faq_faq_component__WEBPACK_IMPORTED_MODULE_17__["FaqComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _modules_angular_material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"]
            ],
            providers: [angular2_cookie_services_cookies_service__WEBPACK_IMPORTED_MODULE_15__["CookieService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HTTP_INTERCEPTORS"], useClass: _interceptors_http_headers_config_interceptor__WEBPACK_IMPORTED_MODULE_16__["HttpHeadersConfigInterceptor"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/consts/cookie.const.ts":
/*!****************************************!*\
  !*** ./src/app/consts/cookie.const.ts ***!
  \****************************************/
/*! exports provided: TOKEN_LABEL, AUTHS_LABEL, USERNAME_LABEL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_LABEL", function() { return TOKEN_LABEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTHS_LABEL", function() { return AUTHS_LABEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERNAME_LABEL", function() { return USERNAME_LABEL; });
var TOKEN_LABEL = 'TOKEN';
var AUTHS_LABEL = 'AUTHORITIES';
var USERNAME_LABEL = 'USERNAME';


/***/ }),

/***/ "./src/app/custom-components/faq/faq.component.css":
/*!*********************************************************!*\
  !*** ./src/app/custom-components/faq/faq.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbS1jb21wb25lbnRzL2ZhcS9mYXEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/custom-components/faq/faq.component.html":
/*!**********************************************************!*\
  !*** ./src/app/custom-components/faq/faq.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  faq works!\n</p>\n"

/***/ }),

/***/ "./src/app/custom-components/faq/faq.component.ts":
/*!********************************************************!*\
  !*** ./src/app/custom-components/faq/faq.component.ts ***!
  \********************************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_test_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/test.service */ "./src/app/services/test.service.ts");



var FaqComponent = /** @class */ (function () {
    function FaqComponent(testService) {
        this.testService = testService;
    }
    FaqComponent.prototype.ngOnInit = function () {
        this.testService.getProtectedWelcomeMessage()
            .then(function (response) {
            console.log(response);
        });
    };
    FaqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! ./faq.component.html */ "./src/app/custom-components/faq/faq.component.html"),
            styles: [__webpack_require__(/*! ./faq.component.css */ "./src/app/custom-components/faq/faq.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_test_service__WEBPACK_IMPORTED_MODULE_2__["TestService"]])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/custom-components/footer/footer.component.css":
/*!***************************************************************!*\
  !*** ./src/app/custom-components/footer/footer.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbS1jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/custom-components/footer/footer.component.html":
/*!****************************************************************!*\
  !*** ./src/app/custom-components/footer/footer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "./src/app/custom-components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/custom-components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/custom-components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/custom-components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/custom-components/login/login.component.css":
/*!*************************************************************!*\
  !*** ./src/app/custom-components/login/login.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-form {\r\n    padding: 0px 16px;\r\n}\r\n\r\n.login-form__container {\r\n    border: solid 3px #3f51b5;\r\n    margin-top: 10vh;\r\n    border-radius: 10px;\r\n    padding: 15px;\r\n}\r\n\r\nbutton {\r\n    width: 300px;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nmat-list-item div {\r\n    padding: 0!important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tLWNvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFHQTtJQUNJLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbS1jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tZm9ybSB7XHJcbiAgICBwYWRkaW5nOiAwcHggMTZweDtcclxufVxyXG5cclxuLmxvZ2luLWZvcm1fX2NvbnRhaW5lciB7XHJcbiAgICBib3JkZXI6IHNvbGlkIDNweCAjM2Y1MWI1O1xyXG4gICAgbWFyZ2luLXRvcDogMTB2aDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcblxyXG5tYXQtbGlzdC1pdGVtIGRpdiB7XHJcbiAgICBwYWRkaW5nOiAwIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/custom-components/login/login.component.html":
/*!**************************************************************!*\
  !*** ./src/app/custom-components/login/login.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n  <div class=\"login-form__container\">\n    <h4>Logowanie</h4>\n    <div *ngIf=\"invalidCrudentials\" id=\"invalid-crudential-alert\" class=\"mat-error\" style=\"font-size: 0.9rem\" fxLayout fxLayoutAlign=\"left center\">\n        <mat-icon>error</mat-icon>\n        <p>Nieprawidłowy login lub hasło.</p>\n    </div>\n    <form class=\"login-form\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\"\n          fxLayout=\"column\" >\n      <mat-form-field>\n        <input matInput \n              type=\"text\" \n              placeholder=\"Login\" \n              ngModel name=\"login\" \n              required>\n          <mat-error>Pole nie może być puste.</mat-error>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput \n              type=\"password\" \n              placeholder=\"Hasło\" \n              ngModel \n              name=\"password\"\n              required>\n        <mat-error>Pole nie może być puste.</mat-error>\n      </mat-form-field>\n      <mat-checkbox fxFlexAlign=\"left\" [(ngModel)]=\"rememberMe\" name=\"remebmerMeCheckbox\">Zapamiętaj mnie</mat-checkbox>\n        <button [disabled]=\"f.invalid\" mat-raised-button color=\"primary\" type=\"submit\">Zaloguj się</button>\n        <mat-divider></mat-divider>\n        <a mat-button routerLink=\"/login/recover\">Nie pamiętasz hasła?</a>  \n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/custom-components/login/login.component.ts":
/*!************************************************************!*\
  !*** ./src/app/custom-components/login/login.component.ts ***!
  \************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_authenticate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authenticate.service */ "./src/app/services/authenticate.service.ts");
/* harmony import */ var src_app_services_angular_material_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/angular-material.service */ "./src/app/services/angular-material.service.ts");
/* harmony import */ var src_app_services_router_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/router.service */ "./src/app/services/router.service.ts");
/* harmony import */ var src_app_services_view_action_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/view-action.service */ "./src/app/services/view-action.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(authenticateService, angularMaterialService, routerService, viewActionService, route, router) {
        this.authenticateService = authenticateService;
        this.angularMaterialService = angularMaterialService;
        this.routerService = routerService;
        this.viewActionService = viewActionService;
        this.route = route;
        this.router = router;
        this.rememberMe = false;
        this.invalidCrudentials = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParamMap.subscribe(function (queryParams) {
            _this.url = queryParams.get("url");
        });
    };
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.authenticateService.login(form.value.login, form.value.password).then(function () {
            _this.authenticateService.setUserLoggedIn(true);
            _this.authenticateService.getUserPrincipal();
            if (_this.rememberMe) {
                _this.authenticateService.storeTokenInLocalStorage();
            }
            if (_this.url) {
                _this.router.navigate([_this.url]);
            }
            else {
                _this.routerService.redirectToRoot();
            }
            _this.angularMaterialService.openSnackBar('Zostałeś zalogowany !');
        }).catch(function (err) {
            if (_this.invalidCrudentials) {
                _this.viewActionService.blinkElement('invalid-crudential-alert');
            }
            else {
                _this.invalidCrudentials = true;
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/custom-components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/custom-components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_authenticate_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticateService"],
            src_app_services_angular_material_service__WEBPACK_IMPORTED_MODULE_3__["AngularMaterialService"],
            src_app_services_router_service__WEBPACK_IMPORTED_MODULE_4__["RouterService"],
            src_app_services_view_action_service__WEBPACK_IMPORTED_MODULE_5__["ViewActionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/custom-components/navigation/header/header.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/custom-components/navigation/header/header.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\r\n  width: 60%;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n\r\na:hover,\r\na:active {\r\n  color: lightgray;\r\n}\r\n\r\n.navigation-items {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.navigation-item {\r\n  border: solid 2px white;\r\n  border-radius: 10px;\r\n}\r\n\r\n.navigation-item__padding {\r\n  padding: 5px;\r\n}\r\n\r\n.navigation-item:hover,\r\n.navigation-item__loged-user:hover,\r\n.navigation-item:active\r\n.navigation-item__loged-user:active {\r\n  background-color: white;\r\n  color: #3f51b5!important;\r\n}\r\n\r\n.menu-button {\r\n  font-size: inherit;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tLWNvbXBvbmVudHMvbmF2aWdhdGlvbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBOzs7O0VBSUUsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbS1jb21wb25lbnRzL25hdmlnYXRpb24vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmE6aG92ZXIsXHJcbmE6YWN0aXZlIHtcclxuICBjb2xvcjogbGlnaHRncmF5O1xyXG59XHJcblxyXG4ubmF2aWdhdGlvbi1pdGVtcyB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLm5hdmlnYXRpb24taXRlbSB7XHJcbiAgYm9yZGVyOiBzb2xpZCAycHggd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLm5hdmlnYXRpb24taXRlbV9fcGFkZGluZyB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4ubmF2aWdhdGlvbi1pdGVtOmhvdmVyLFxyXG4ubmF2aWdhdGlvbi1pdGVtX19sb2dlZC11c2VyOmhvdmVyLFxyXG4ubmF2aWdhdGlvbi1pdGVtOmFjdGl2ZVxyXG4ubmF2aWdhdGlvbi1pdGVtX19sb2dlZC11c2VyOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6ICMzZjUxYjUhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWVudS1idXR0b24ge1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/custom-components/navigation/header/header.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/custom-components/navigation/header/header.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <div>\n        <a routerLink=\"/\">\n          <img class=\"logo\" src=\"assets/images/sportal_logo.png\">\n        </a>\n    </div>\n    <div fxFlex fxLayout fxLayoutAlign=\"flex-end center\" fxHide.gt-xs>\n      <mat-icon *ngIf=\"authService.userLoggedIn\">account_circle</mat-icon>\n      <button mat-icon-button (click)=\"onToggleSidenav()\">\n        <mat-icon>menu</mat-icon>\n      </button>\n    </div>\n    <div fxFlex fxLayout fxLayoutAlign=\"flex-end\" fxHide.xs>\n      <ul fxLayout fxLayoutGap=\"20px\" class=\"navigation-items\">\n        <li>\n          <a routerLink=\"/help\" [ngStyle]=\"{ 'vertical-align' :  authService.userLoggedIn ? 'sub': 'unset'}\">Pomoc</a>\n        </li>\n        <li *ngIf=\"!authService.userLoggedIn\">\n          <a class=\"navigation-item navigation-item__padding\" routerLink=\"/login\">Zaloguj się</a>\n        </li>\n        <li *ngIf=\"authService.userLoggedIn\">\n            <button mat-button [matMenuTriggerFor]=\"menu\" class=\"menu-button navigation-item\">\n                <mat-icon>account_circle</mat-icon>\n                <span> {{username}}</span>\n                <mat-icon>more_vert</mat-icon>\n            </button>\n            <mat-menu #menu=\"matMenu\" [overlapTrigger]=\"false\">\n              <button mat-menu-item>\n                <mat-icon>home</mat-icon>\n                <span>Strona główna</span>\n              </button>\n              <button mat-menu-item>\n                <mat-icon>star</mat-icon>\n                <span>Ulubione</span>\n              </button>\n              <button mat-menu-item>\n                <mat-icon>history</mat-icon>\n                <span>Historia</span>\n              </button>\n              <button mat-menu-item>\n                <mat-icon>feedback</mat-icon>\n                <span>Opinie</span>\n              </button>\n              <button mat-menu-item (click)=\"authService.logout()\">\n                  <mat-icon>reply</mat-icon>\n                  <span>Wyloguj się</span>\n                </button>\n            </mat-menu>            \n        </li>\n      </ul>\n    </div>\n  </mat-toolbar>\n  "

/***/ }),

/***/ "./src/app/custom-components/navigation/header/header.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/custom-components/navigation/header/header.component.ts ***!
  \*************************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_authenticate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authenticate.service */ "./src/app/services/authenticate.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
        this.sidenavToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = this.authService.getToken();
        if (token) {
            this.authService.checkToken()
                .then(function () {
                _this.authService.setUserLoggedIn(true);
                _this.authService.getUserPrincipal();
            });
        }
        this.authService.userNameChange.subscribe(function (username) {
            _this.username = username;
        });
    };
    HeaderComponent.prototype.onToggleSidenav = function () {
        this.sidenavToggle.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "sidenavToggle", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/custom-components/navigation/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/custom-components/navigation/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_authenticate_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticateService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/custom-components/navigation/sidenav-list/sidenav-list.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/custom-components/navigation/sidenav-list/sidenav-list.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n  \r\n.nav-caption {\r\n  display: inline-block;\r\n  padding-left: 6px;\r\n  font-size: 1rem;\r\n}\r\n  \r\n.highlighed {\r\n  background-color: aliceblue;\r\n}\r\n  \r\n.favorite-icon {\r\n  color: gold;\r\n}\r\n  \r\n.feedback-icon {\r\n  color: deepskyblue;\r\n}\r\n  \r\n.info-icon {\r\n  color: darkblue;\r\n}\r\n  \r\na:hover .nav-caption,\r\na:active .nav-caption {\r\n  color: lightgray;\r\n}\r\n  \r\n.navigation-items {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tLWNvbXBvbmVudHMvbmF2aWdhdGlvbi9zaWRlbmF2LWxpc3Qvc2lkZW5hdi1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFNBQVM7QUFDWCIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbS1jb21wb25lbnRzL25hdmlnYXRpb24vc2lkZW5hdi1saXN0L3NpZGVuYXYtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4gIFxyXG4ubmF2LWNhcHRpb24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nLWxlZnQ6IDZweDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi5oaWdobGlnaGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbn1cclxuXHJcbi5mYXZvcml0ZS1pY29uIHtcclxuICBjb2xvcjogZ29sZDtcclxufVxyXG5cclxuLmZlZWRiYWNrLWljb24ge1xyXG4gIGNvbG9yOiBkZWVwc2t5Ymx1ZTtcclxufVxyXG5cclxuLmluZm8taWNvbiB7XHJcbiAgY29sb3I6IGRhcmtibHVlO1xyXG59XHJcbiAgXHJcbmE6aG92ZXIgLm5hdi1jYXB0aW9uLFxyXG5hOmFjdGl2ZSAubmF2LWNhcHRpb24ge1xyXG4gIGNvbG9yOiBsaWdodGdyYXk7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uLWl0ZW1zIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/custom-components/navigation/sidenav-list/sidenav-list.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/custom-components/navigation/sidenav-list/sidenav-list.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list>\n    <a *ngIf=\"!authService.userLoggedIn\" class=\"highlighed\" mat-list-item routerLink=\"/login\" (click)=\"onClose()\">\n      <mat-icon>input</mat-icon>\n      <span class=\"nav-caption\">Zaloguj się</span>\n    </a>\n    <a *ngIf=\"authService.userLoggedIn\" mat-list-item routerLink=\"/favorite\" (click)=\"onClose()\">\n      <mat-icon class=\"favorite-icon\">star</mat-icon>\n      <span class=\"nav-caption\">Ulubione</span>\n    </a>\n    <a *ngIf=\"authService.userLoggedIn\" mat-list-item routerLink=\"/history\" (click)=\"onClose()\">\n      <mat-icon>history</mat-icon>\n      <span class=\"nav-caption\">Historia</span>\n    </a>\n    <a mat-list-item routerLink=\"/feedback\" (click)=\"onClose()\">\n      <mat-icon class=\"feedback-icon\">feedback</mat-icon>\n      <span class=\"nav-caption\">Opinie</span>\n    </a>\n    <a mat-list-item routerLink=\"/help\" (click)=\"onClose()\">\n      <mat-icon class=\"info-icon\">info</mat-icon>\n      <span class=\"nav-caption\">Potrzebujesz pomocy?</span>\n    </a>\n    <mat-list-item *ngIf=\"authService.userLoggedIn\" class= \"highlighed\" (click)=\"onLogout()\">\n      <button mat-icon-button >\n        <mat-icon>reply</mat-icon>\n        <span class=\"nav-caption\">Wyloguj się</span>\n      </button>\n    </mat-list-item>\n  </mat-nav-list>\n  "

/***/ }),

/***/ "./src/app/custom-components/navigation/sidenav-list/sidenav-list.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/custom-components/navigation/sidenav-list/sidenav-list.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SidenavListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavListComponent", function() { return SidenavListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_authenticate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authenticate.service */ "./src/app/services/authenticate.service.ts");



var SidenavListComponent = /** @class */ (function () {
    function SidenavListComponent(authService) {
        this.authService = authService;
        this.closeSidenav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SidenavListComponent.prototype.ngOnInit = function () {
    };
    SidenavListComponent.prototype.onClose = function () {
        this.closeSidenav.emit();
    };
    SidenavListComponent.prototype.onLogout = function () {
        console.log('xdxd');
        this.onClose();
        this.authService.logout();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidenavListComponent.prototype, "closeSidenav", void 0);
    SidenavListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidenav-list',
            template: __webpack_require__(/*! ./sidenav-list.component.html */ "./src/app/custom-components/navigation/sidenav-list/sidenav-list.component.html"),
            styles: [__webpack_require__(/*! ./sidenav-list.component.css */ "./src/app/custom-components/navigation/sidenav-list/sidenav-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_authenticate_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticateService"]])
    ], SidenavListComponent);
    return SidenavListComponent;
}());



/***/ }),

/***/ "./src/app/custom-components/page-not-found/page-not-found.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/custom-components/page-not-found/page-not-found.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbS1jb21wb25lbnRzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/custom-components/page-not-found/page-not-found.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/custom-components/page-not-found/page-not-found.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/custom-components/page-not-found/page-not-found.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/custom-components/page-not-found/page-not-found.component.ts ***!
  \******************************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/custom-components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/custom-components/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/interceptors/http-headers-config.interceptor.ts":
/*!*****************************************************************!*\
  !*** ./src/app/interceptors/http-headers-config.interceptor.ts ***!
  \*****************************************************************/
/*! exports provided: HttpHeadersConfigInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHeadersConfigInterceptor", function() { return HttpHeadersConfigInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_authenticate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authenticate.service */ "./src/app/services/authenticate.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_router_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/router.service */ "./src/app/services/router.service.ts");








var HttpHeadersConfigInterceptor = /** @class */ (function () {
    function HttpHeadersConfigInterceptor(authService, router, routerService) {
        this.authService = authService;
        this.router = router;
        this.routerService = routerService;
    }
    HttpHeadersConfigInterceptor.prototype.intercept = function (req, next) {
        var token = this.authService.getToken();
        var reqUrl = 'http://' + window.location.host + req.url;
        req = req.clone({ url: reqUrl });
        if (req.url.includes('/api/protected/')) {
            if (token) {
                req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
            }
            else {
                this.routerService.loginAndRedirectToUrl(this.router.url);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('request interrupted');
            }
        }
        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }
        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                console.log('event--->>>', event);
            }
            return event;
        }));
    };
    HttpHeadersConfigInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authenticate_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _services_router_service__WEBPACK_IMPORTED_MODULE_7__["RouterService"]])
    ], HttpHeadersConfigInterceptor);
    return HttpHeadersConfigInterceptor;
}());



/***/ }),

/***/ "./src/app/modules/angular-material.module.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/angular-material.module.ts ***!
  \****************************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var AngularMaterialModule = /** @class */ (function () {
    function AngularMaterialModule() {
    }
    AngularMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"]],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"]]
        })
    ], AngularMaterialModule);
    return AngularMaterialModule;
}());



/***/ }),

/***/ "./src/app/services/angular-material.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/angular-material.service.ts ***!
  \******************************************************/
/*! exports provided: AngularMaterialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialService", function() { return AngularMaterialService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var AngularMaterialService = /** @class */ (function () {
    function AngularMaterialService(snackBar) {
        this.snackBar = snackBar;
    }
    AngularMaterialService.prototype.openSnackBar = function (message, duration) {
        if (duration === void 0) { duration = 2000; }
        var config = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarConfig"]();
        config.verticalPosition = 'bottom';
        config.horizontalPosition = 'right';
        config.duration = duration;
        config.panelClass = 'snack-primary-theme';
        this.snackBar.open(message, 'X', config);
    };
    AngularMaterialService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], AngularMaterialService);
    return AngularMaterialService;
}());



/***/ }),

/***/ "./src/app/services/authenticate.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/authenticate.service.ts ***!
  \**************************************************/
/*! exports provided: AuthenticateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateService", function() { return AuthenticateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular2_cookie_services_cookies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-cookie/services/cookies.service */ "./node_modules/angular2-cookie/services/cookies.service.js");
/* harmony import */ var angular2_cookie_services_cookies_service__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_cookie_services_cookies_service__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _router_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./router.service */ "./src/app/services/router.service.ts");
/* harmony import */ var _angular_material_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./angular-material.service */ "./src/app/services/angular-material.service.ts");
/* harmony import */ var _consts_cookie_const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../consts/cookie.const */ "./src/app/consts/cookie.const.ts");







var AuthenticateService = /** @class */ (function () {
    function AuthenticateService(http, cookieService, routerService, angularMaterialService) {
        this.http = http;
        this.cookieService = cookieService;
        this.routerService = routerService;
        this.angularMaterialService = angularMaterialService;
        this.userNameChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.userAuthsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.userLoggedIn = false;
    }
    AuthenticateService.prototype.login = function (username, password) {
        var body = {
            "username": username,
            "password": password
        };
        return this.http.post('/login', body).toPromise();
    };
    AuthenticateService.prototype.getUserPrincipal = function () {
        var _this = this;
        this.http.get('/api/protected/username').toPromise()
            .then(function (response) {
            console.log(response);
            _this.setUsername(response.name);
            _this.setUserAuthorities(response.authorities);
        });
    };
    AuthenticateService.prototype.setUserLoggedIn = function (userLoggedIn) {
        this.userLoggedIn = userLoggedIn;
    };
    AuthenticateService.prototype.logout = function () {
        localStorage.removeItem(_consts_cookie_const__WEBPACK_IMPORTED_MODULE_6__["TOKEN_LABEL"]);
        this.cookieService.remove(_consts_cookie_const__WEBPACK_IMPORTED_MODULE_6__["TOKEN_LABEL"]);
        this.setUserLoggedIn(false);
        this.routerService.redirectToRoot();
        this.angularMaterialService.openSnackBar('Zostałeś wylogowany...');
    };
    AuthenticateService.prototype.getToken = function () {
        var token;
        if (localStorage.getItem(_consts_cookie_const__WEBPACK_IMPORTED_MODULE_6__["TOKEN_LABEL"])) {
            token = localStorage.getItem(_consts_cookie_const__WEBPACK_IMPORTED_MODULE_6__["TOKEN_LABEL"]);
        }
        else {
            token = this.cookieService.get(_consts_cookie_const__WEBPACK_IMPORTED_MODULE_6__["TOKEN_LABEL"]);
        }
        return token;
    };
    AuthenticateService.prototype.storeTokenInLocalStorage = function () {
        localStorage.setItem(_consts_cookie_const__WEBPACK_IMPORTED_MODULE_6__["TOKEN_LABEL"], this.getToken());
        this.cookieService.remove(_consts_cookie_const__WEBPACK_IMPORTED_MODULE_6__["TOKEN_LABEL"]);
    };
    AuthenticateService.prototype.checkToken = function () {
        return this.http.get('/api/protected/checkToken').toPromise();
    };
    AuthenticateService.prototype.setUsername = function (name) {
        this.cookieService.put(_consts_cookie_const__WEBPACK_IMPORTED_MODULE_6__["USERNAME_LABEL"], name);
        this.userNameChange.emit(name);
    };
    AuthenticateService.prototype.setUserAuthorities = function (authorities) {
        var auths = [];
        for (var i = 0; i < authorities.length; i++) {
            auths.push(authorities[i].authority);
        }
        var authslist = auths.join(':');
        this.cookieService.put(_consts_cookie_const__WEBPACK_IMPORTED_MODULE_6__["AUTHS_LABEL"], authslist);
        this.userAuthsChange.emit(authslist);
    };
    AuthenticateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            angular2_cookie_services_cookies_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"],
            _router_service__WEBPACK_IMPORTED_MODULE_4__["RouterService"],
            _angular_material_service__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialService"]])
    ], AuthenticateService);
    return AuthenticateService;
}());



/***/ }),

/***/ "./src/app/services/router.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/router.service.ts ***!
  \********************************************/
/*! exports provided: RouterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterService", function() { return RouterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var RouterService = /** @class */ (function () {
    function RouterService(router) {
        this.router = router;
    }
    RouterService.prototype.redirectToRoot = function () {
        this.router.navigate(["/"]);
    };
    RouterService.prototype.redirectToLoginPage = function () {
        this.router.navigate(["/login"]);
    };
    RouterService.prototype.loginAndRedirectToUrl = function (url) {
        this.router.navigate(["/login"], { queryParams: { url: url } });
    };
    RouterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RouterService);
    return RouterService;
}());



/***/ }),

/***/ "./src/app/services/test.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/test.service.ts ***!
  \******************************************/
/*! exports provided: TestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestService", function() { return TestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var TestService = /** @class */ (function () {
    function TestService(http) {
        this.http = http;
    }
    TestService.prototype.getProtectedWelcomeMessage = function () {
        return this.http.get('/api/protected/hello').toPromise();
    };
    TestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TestService);
    return TestService;
}());



/***/ }),

/***/ "./src/app/services/view-action.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/view-action.service.ts ***!
  \*************************************************/
/*! exports provided: ViewActionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewActionService", function() { return ViewActionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ViewActionService = /** @class */ (function () {
    function ViewActionService() {
    }
    ViewActionService.prototype.blinkElement = function (id) {
        var div = document.getElementById(id);
        div.classList.remove('blink_me');
        setTimeout(function () {
            div.classList.add('blink_me');
        }, 100);
    };
    ViewActionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ViewActionService);
    return ViewActionService;
}());



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
var environment = {
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ASUS\Desktop\Sportal\src\main\web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map