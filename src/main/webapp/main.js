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

/***/ "./src/app/_models/user.ts":
/*!*********************************!*\
  !*** ./src/app/_models/user.ts ***!
  \*********************************/
/*! exports provided: user */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user", function() { return user; });
var user = /** @class */ (function () {
    function user() {
    }
    return user;
}());



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
/* harmony import */ var _custom_components_faq_faq_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom-components/faq/faq.component */ "./src/app/custom-components/faq/faq.component.ts");
/* harmony import */ var _guards_no_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/no-auth-guard.service */ "./src/app/guards/no-auth-guard.service.ts");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/auth-guard.service */ "./src/app/guards/auth-guard.service.ts");
/* harmony import */ var _custom_components_home_view_home_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./custom-components/home-view/home-view.component */ "./src/app/custom-components/home-view/home-view.component.ts");
/* harmony import */ var _custom_components_login_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./custom-components/login/register/register.component */ "./src/app/custom-components/login/register/register.component.ts");
/* harmony import */ var _custom_components_login_register_acceptregister_acceptregister_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./custom-components/login/register/acceptregister/acceptregister.component */ "./src/app/custom-components/login/register/acceptregister/acceptregister.component.ts");










var routes = [
    { path: '', component: _custom_components_home_view_home_view_component__WEBPACK_IMPORTED_MODULE_7__["HomeViewComponent"] },
    { path: 'help',
        component: _custom_components_faq_faq_component__WEBPACK_IMPORTED_MODULE_4__["FaqComponent"],
        canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        data: {
            roles: ['ROLE_CUSTOMER', 'ROLE_TEST']
        }
    },
    { path: 'login', component: _custom_components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], canActivate: [_guards_no_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["NoAuthGuard"]] },
    { path: 'register', component: _custom_components_login_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] },
    { path: 'acceptregister', component: _custom_components_login_register_acceptregister_acceptregister_component__WEBPACK_IMPORTED_MODULE_9__["AcceptRegisterComponent"] },
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

module.exports = "app-header {\r\n  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 2;\r\n}\r\n\r\n\r\nmain {\r\n  padding-top: 56px;\r\n}\r\n\r\n\r\n@media (min-width: 700px) {\r\n  main {\r\n    padding-top: 64px;\r\n  }\r\n}\r\n\r\n\r\nmat-sidenav-container, mat-sidenav-content, mat-sidenav {\r\n    height: 100%;\r\n  }\r\n\r\n\r\nmat-sidenav {\r\n    width: 250px;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtR0FBbUc7RUFDbkcsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFVBQVU7QUFDWjs7O0FBR0E7RUFDRSxpQkFBaUI7QUFDbkI7OztBQUNBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjs7O0FBR0E7SUFDSSxZQUFZO0VBQ2Q7OztBQUVBO0lBQ0UsWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtaGVhZGVyIHtcclxuICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDZweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDE4cHggMCByZ2JhKDAsMCwwLC4xMik7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcblxyXG5tYWluIHtcclxuICBwYWRkaW5nLXRvcDogNTZweDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcclxuICBtYWluIHtcclxuICAgIHBhZGRpbmctdG9wOiA2NHB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbm1hdC1zaWRlbmF2LWNvbnRhaW5lciwgbWF0LXNpZGVuYXYtY29udGVudCwgbWF0LXNpZGVuYXYge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBcclxuICBtYXQtc2lkZW5hdiB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\r\n    <mat-sidenav position=\"end\" #sidenav role=\"navigation\">\r\n        <app-sidenav-list (closeSidenav)=\"sidenav.close()\"></app-sidenav-list>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content>\r\n        <app-header (sidenavToggle)=\"sidenav.toggle()\"></app-header>\r\n        <main>\r\n            <router-outlet></router-outlet>\r\n        </main>\r\n        <app-footer></app-footer>\r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>"

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
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _custom_components_home_view_home_view_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./custom-components/home-view/home-view.component */ "./src/app/custom-components/home-view/home-view.component.ts");
/* harmony import */ var _custom_components_login_register_register_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./custom-components/login/register/register.component */ "./src/app/custom-components/login/register/register.component.ts");
/* harmony import */ var _custom_components_login_register_acceptregister_acceptregister_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./custom-components/login/register/acceptregister/acceptregister.component */ "./src/app/custom-components/login/register/acceptregister/acceptregister.component.ts");






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _custom_components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _custom_components_login_register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"],
                _custom_components_login_register_acceptregister_acceptregister_component__WEBPACK_IMPORTED_MODULE_21__["AcceptRegisterComponent"],
                _custom_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _custom_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"],
                _custom_components_navigation_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _custom_components_navigation_sidenav_list_sidenav_list_component__WEBPACK_IMPORTED_MODULE_12__["SidenavListComponent"],
                _custom_components_faq_faq_component__WEBPACK_IMPORTED_MODULE_17__["FaqComponent"],
                _custom_components_home_view_home_view_component__WEBPACK_IMPORTED_MODULE_19__["HomeViewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _modules_angular_material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_18__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyCGWO_MHhFm_yRmGtw-lWkUG6UsH7Xv58I',
                    libraries: ["places"]
                })
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

module.exports = "<p>\r\n  faq works!\r\n</p>\r\n"

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

module.exports = "<p>\r\n  footer works!\r\n</p>\r\n"

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

/***/ "./src/app/custom-components/home-view/home-view.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/custom-components/home-view/home-view.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n    height: 60vh;\r\n    width: 100%\r\n}\r\n\r\nh1 {\r\n    font-weight: 300;\r\n    margin: 0;\r\n    font-size: 18px;\r\n}\r\n\r\nmat-card {\r\n  padding: 0;\r\n}\r\n\r\n.mat-expansion-panel-header {\r\n  padding-left: 30px;\r\n  padding-right: 14px;\r\n}\r\n\r\n.header-align .mat-expansion-panel-header-title,\r\n.header-align .mat-expansion-panel-header-description {\r\n  flex-basis: 0;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.user-location {\r\n  color: #3f51b5;\r\n}\r\n\r\n.user-location:active,\r\n.user-location:hover {\r\n  color:grey;\r\n  cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tLWNvbXBvbmVudHMvaG9tZS12aWV3L2hvbWUtdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaO0FBQ0o7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULGVBQWU7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxVQUFVO0VBQ1YsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbS1jb21wb25lbnRzL2hvbWUtdmlldy9ob21lLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xyXG4gICAgaGVpZ2h0OiA2MHZoO1xyXG4gICAgd2lkdGg6IDEwMCVcclxufVxyXG5cclxuaDEge1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE0cHg7XHJcbn1cclxuXHJcbi5oZWFkZXItYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlLFxyXG4uaGVhZGVyLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XHJcbiAgZmxleC1iYXNpczogMDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnVzZXItbG9jYXRpb24ge1xyXG4gIGNvbG9yOiAjM2Y1MWI1O1xyXG59XHJcblxyXG4udXNlci1sb2NhdGlvbjphY3RpdmUsXHJcbi51c2VyLWxvY2F0aW9uOmhvdmVyIHtcclxuICBjb2xvcjpncmV5O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/custom-components/home-view/home-view.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/custom-components/home-view/home-view.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n  <mat-toolbar color=\"primary\">\r\n    <h1>Znajdź swój wymarzony obiekt!</h1>\r\n  </mat-toolbar>\r\n  <mat-accordion class=\"header-align\" fxFlexFill>\r\n    <mat-expansion-panel hideToggle>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          Filtr i lokalizacja\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          <p fxHide.gt-xs></p>\r\n          <p fxHide.xs>Tutaj możesz zmienić swoje predyspozycje co do obiektu</p>\r\n          <mat-icon>filter_list</mat-icon>\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n        <mat-divider></mat-divider>\r\n          <mat-form-field>\r\n              <input matInput placeholder=\"Podaj lokalizację\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" #search [formControl]=\"searchControl\">\r\n          </mat-form-field>\r\n          <mat-icon matSuffix class=\"user-location\" (click)=\"setCurrentPosition()\">location_on</mat-icon>\r\n        <mat-divider></mat-divider>\r\n          <mat-slide-toggle>\r\n            Piłka nożna\r\n          </mat-slide-toggle>\r\n          <mat-slide-toggle>\r\n            Koszykówka\r\n          </mat-slide-toggle>\r\n\r\n    </mat-expansion-panel>\r\n  </mat-accordion>      \r\n\r\n  <agm-map [latitude]=\"latitude\" \r\n           [longitude]=\"longitude\" \r\n           [scrollwheel]=\"false\" \r\n           [clickableIcons]=\"false\"\r\n           [streetViewControl]=\"false\"\r\n           [zoom]=\"zoom\">\r\n      <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\r\n  </agm-map>\r\n</div>"

/***/ }),

/***/ "./src/app/custom-components/home-view/home-view.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/custom-components/home-view/home-view.component.ts ***!
  \********************************************************************/
/*! exports provided: HomeViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeViewComponent", function() { return HomeViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");




var HomeViewComponent = /** @class */ (function () {
    function HomeViewComponent(mapsAPILoader, ngZone) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
    }
    HomeViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.zoom = 7;
        this.latitude = 52.22977;
        this.longitude = 21.01178;
        //create search FormControl
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        //set current position
        this.setCurrentPosition();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["geocode"],
                componentRestrictions: { country: 'pl' }
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    console.log(place);
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.zoom = 16;
                });
            });
        });
    };
    HomeViewComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                console.log(position);
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 16;
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("search"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HomeViewComponent.prototype, "searchElementRef", void 0);
    HomeViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-view',
            template: __webpack_require__(/*! ./home-view.component.html */ "./src/app/custom-components/home-view/home-view.component.html"),
            styles: [__webpack_require__(/*! ./home-view.component.css */ "./src/app/custom-components/home-view/home-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_agm_core__WEBPACK_IMPORTED_MODULE_3__["MapsAPILoader"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], HomeViewComponent);
    return HomeViewComponent;
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

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n  <a routerLink=\"/register\"> <button mat-raised-button color=\"primary\" type=\"submit\"> Rejestracja </button></a>\r\n  <div class=\"login-form__container\">\r\n    <h4>Logowanie</h4>\r\n    <div *ngIf=\"invalidCrudentials\" id=\"invalid-crudential-alert\" class=\"mat-error\" style=\"font-size: 0.9rem\" fxLayout fxLayoutAlign=\"left center\">\r\n        <mat-icon>error</mat-icon>\r\n        <p>Nieprawidłowy login lub hasło.</p>\r\n    </div>\r\n    <form class=\"login-form\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\"\r\n          fxLayout=\"column\" >\r\n      <mat-form-field>\r\n        <input matInput \r\n              type=\"text\" \r\n              placeholder=\"Login\" \r\n              ngModel name=\"login\" \r\n              required>\r\n          <mat-error>Pole nie może być puste.</mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput \r\n              type=\"password\" \r\n              placeholder=\"Hasło\" \r\n              ngModel \r\n              name=\"password\"\r\n              required>\r\n        <mat-error>Pole nie może być puste.</mat-error>\r\n      </mat-form-field>\r\n      <mat-checkbox fxFlexAlign=\"left\" [(ngModel)]=\"rememberMe\" name=\"remebmerMeCheckbox\">Zapamiętaj mnie</mat-checkbox>\r\n        <button [disabled]=\"f.invalid\" mat-raised-button color=\"primary\" type=\"submit\">Zaloguj się</button>\r\n        <mat-divider></mat-divider>\r\n        <a mat-button routerLink=\"/login/recover\">Nie pamiętasz hasła?</a>  \r\n    </form>\r\n  </div>\r\n</div>"

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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.authenticateService.login(form.value.login, form.value.password).then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                this.authenticateService.setUserLoggedIn(true);
                                return [4 /*yield*/, this.authenticateService.getUserPrincipal()];
                            case 1:
                                _a.sent();
                                if (this.rememberMe) {
                                    this.authenticateService.storeTokenInLocalStorage();
                                }
                                if (this.url) {
                                    this.router.navigate([this.url]);
                                }
                                else {
                                    this.routerService.redirectToRoot();
                                }
                                this.angularMaterialService.openSnackBar('Zostałeś zalogowany !');
                                return [2 /*return*/];
                        }
                    });
                }); }).catch(function (err) {
                    if (_this.invalidCrudentials) {
                        _this.viewActionService.blinkElement('invalid-crudential-alert');
                    }
                    else {
                        _this.invalidCrudentials = true;
                    }
                });
                return [2 /*return*/];
            });
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

/***/ "./src/app/custom-components/login/register/acceptregister/acceptregister.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/custom-components/login/register/acceptregister/acceptregister.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".acceptregister-form_container {\r\n    border: solid 3px #3f51b5;\r\n    margin-top: 10vh;\r\n    border-radius: 10px;\r\n    padding: 15px;\r\n}\r\n\r\nbutton {\r\n    margin-top: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tLWNvbXBvbmVudHMvbG9naW4vcmVnaXN0ZXIvYWNjZXB0cmVnaXN0ZXIvYWNjZXB0cmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jdXN0b20tY29tcG9uZW50cy9sb2dpbi9yZWdpc3Rlci9hY2NlcHRyZWdpc3Rlci9hY2NlcHRyZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjY2VwdHJlZ2lzdGVyLWZvcm1fY29udGFpbmVyIHtcclxuICAgIGJvcmRlcjogc29saWQgM3B4ICMzZjUxYjU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHZoO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/custom-components/login/register/acceptregister/acceptregister.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/custom-components/login/register/acceptregister/acceptregister.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n      <div class=\"acceptregister-form_container\">\r\n        <h4>Potwierdzenie</h4>\r\n        <p>Wprowadź otrzymany kod.</p>\r\n        <div *ngIf=\"invalidCrudentials\" id=\"invalid-crudential-alert\" class=\"mat-error\" style=\"font-size: 0.9rem\" fxLayout fxLayoutAlign=\"left center\">\r\n            <mat-icon>error</mat-icon>\r\n            <p>Nieprawidłowy kod potwierdzający.</p>\r\n        </div>\r\n        <form class=\"example-form\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\"\r\n              fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput \r\n                  type=\"text\" \r\n                  placeholder=\"Kod\" \r\n                  ngModel name=\"acceptcode\" \r\n                  required>\r\n              <mat-error>Wprowadź kod.</mat-error>\r\n          </mat-form-field>\r\n          <a>\r\n          <button [disabled]=\"f.invalid\" mat-raised-button color=\"primary\" type=\"submit\">Potwierdź.</button></a>\r\n        </form>\r\n      </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/custom-components/login/register/acceptregister/acceptregister.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/custom-components/login/register/acceptregister/acceptregister.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AcceptRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcceptRegisterComponent", function() { return AcceptRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AcceptRegisterComponent = /** @class */ (function () {
    function AcceptRegisterComponent() {
    }
    AcceptRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-acceptregister',
            template: __webpack_require__(/*! ./acceptregister.component.html */ "./src/app/custom-components/login/register/acceptregister/acceptregister.component.html"),
            styles: [__webpack_require__(/*! ./acceptregister.component.css */ "./src/app/custom-components/login/register/acceptregister/acceptregister.component.css")]
        })
    ], AcceptRegisterComponent);
    return AcceptRegisterComponent;
}());



/***/ }),

/***/ "./src/app/custom-components/login/register/register.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/custom-components/login/register/register.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register-form_container {\r\n    border: solid 3px #3f51b5;\r\n    margin-top: 10vh;\r\n    border-radius: 10px;\r\n    padding: 15px;\r\n}\r\n\r\nbutton {\r\n    margin-top: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tLWNvbXBvbmVudHMvbG9naW4vcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jdXN0b20tY29tcG9uZW50cy9sb2dpbi9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdGVyLWZvcm1fY29udGFpbmVyIHtcclxuICAgIGJvcmRlcjogc29saWQgM3B4ICMzZjUxYjU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHZoO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/custom-components/login/register/register.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/custom-components/login/register/register.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n        <div class=\"register-form_container\">\r\n            <h4>Rejestracja</h4>\r\n            <form class=\"example-form\" #f=\"ngForm\" (ngSubmit)=\"onSubmit()\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                <mat-form-field class=\"example-full-width\">\r\n                    <input matInput type=\"text\" \r\n                        placeholder=\"Login\" \r\n                        [(ngModel)]=\"user.username\" \r\n                        name=\"username\" \r\n                        required\r\n                        #username=\"ngModel\">\r\n                    <mat-error>Pole nie może być puste.</mat-error>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"example-full-width\">\r\n                    <input matInput type=\"password\" \r\n                        placeholder=\"Hasło\" \r\n                        [(ngModel)]=\"user.password\" \r\n                        name=\"password\" \r\n                        required\r\n                        #password=\"ngModel\">\r\n                    <mat-error>Pole nie może być puste.</mat-error>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"example-full-width\">\r\n                    <input matInput type=\"text\" \r\n                        placeholder=\"Imię\" \r\n                        [(ngModel)]=\"user.name\" \r\n                        name=\"name\" \r\n                        required\r\n                        #name=\"ngModel\">\r\n                    <mat-error>Pole nie może być puste.</mat-error>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"example-full-width\">\r\n                     <input matInput type=\"text\" \r\n                           placeholder=\"Numer telefonu\" \r\n                           [(ngModel)]=\"user.phonenumber\" \r\n                           name=\"phonenumber\" \r\n                           required\r\n                           #phonenumber=\"ngModel\">\r\n                    <mat-error>Pole nie może być puste.</mat-error>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"example-full-width\">\r\n                    <input matInput type=\"text\" \r\n                           placeholder=\"Email\" \r\n                           [(ngModel)]=\"user.email\" \r\n                           name=\"email\" \r\n                           required\r\n                           #email=\"ngModel\">\r\n                    <mat-error>Pole nie może być puste.</mat-error>\r\n                </mat-form-field>\r\n             <button [disabled]=\"f.invalid\" mat-raised-button color=\"primary\" type=\"submit\">Zarejestruj.</button>\r\n            </form>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/custom-components/login/register/register.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/custom-components/login/register/register.component.ts ***!
  \************************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_authenticate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authenticate.service */ "./src/app/services/authenticate.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_models/user */ "./src/app/_models/user.ts");
/* harmony import */ var src_app_services_angular_material_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/angular-material.service */ "./src/app/services/angular-material.service.ts");
/* harmony import */ var src_app_services_view_action_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/view-action.service */ "./src/app/services/view-action.service.ts");
/* harmony import */ var src_app_services_router_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/router.service */ "./src/app/services/router.service.ts");








var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authenticateService, router, angularMaterialService, routerService, viewActionService, route) {
        this.authenticateService = authenticateService;
        this.router = router;
        this.angularMaterialService = angularMaterialService;
        this.routerService = routerService;
        this.viewActionService = viewActionService;
        this.route = route;
        this.loading = false;
        this.submitted = false;
        this.error = false;
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["user"]();
        if (this.authenticateService.userLoggedIn) {
            this.router.navigate(['/']);
        }
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.user);
        this.authenticateService.register(this.user).then(function (response) {
            console.log(response);
            _this.angularMaterialService.openSnackBar("Zostałeś zarejestrowany !");
            _this.router.navigate(['/']);
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/custom-components/login/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/custom-components/login/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_authenticate_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_angular_material_service__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialService"],
            src_app_services_router_service__WEBPACK_IMPORTED_MODULE_7__["RouterService"],
            src_app_services_view_action_service__WEBPACK_IMPORTED_MODULE_6__["ViewActionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/custom-components/navigation/header/header.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/custom-components/navigation/header/header.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.logo {\r\n  width: 60%;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n\r\na:hover,\r\na:active {\r\n  color: lightgray;\r\n}\r\n\r\n.navigation-items {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.navigation-item {\r\n  border: solid 2px white;\r\n  border-radius: 10px;\r\n}\r\n\r\n.navigation-item__padding {\r\n  padding: 5px;\r\n}\r\n\r\n.navigation-item:hover,\r\n.navigation-item__loged-user:hover,\r\n.navigation-item:active\r\n.navigation-item__loged-user:active {\r\n  background-color: white;\r\n  color: #3f51b5!important;\r\n}\r\n\r\n.menu-button {\r\n  font-size: inherit;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tLWNvbXBvbmVudHMvbmF2aWdhdGlvbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTs7OztFQUlFLHVCQUF1QjtFQUN2Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jdXN0b20tY29tcG9uZW50cy9uYXZpZ2F0aW9uL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubG9nbyB7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuYTpob3ZlcixcclxuYTphY3RpdmUge1xyXG4gIGNvbG9yOiBsaWdodGdyYXk7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uLWl0ZW1zIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ubmF2aWdhdGlvbi1pdGVtIHtcclxuICBib3JkZXI6IHNvbGlkIDJweCB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4ubmF2aWdhdGlvbi1pdGVtX19wYWRkaW5nIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uLWl0ZW06aG92ZXIsXHJcbi5uYXZpZ2F0aW9uLWl0ZW1fX2xvZ2VkLXVzZXI6aG92ZXIsXHJcbi5uYXZpZ2F0aW9uLWl0ZW06YWN0aXZlXHJcbi5uYXZpZ2F0aW9uLWl0ZW1fX2xvZ2VkLXVzZXI6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogIzNmNTFiNSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tZW51LWJ1dHRvbiB7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/custom-components/navigation/header/header.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/custom-components/navigation/header/header.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n    <div>\r\n        <a routerLink=\"/\">\r\n          <img class=\"logo\" src=\"\">\r\n        </a>\r\n    </div>\r\n    <div fxFlex fxLayout fxLayoutAlign=\"flex-end center\" fxHide.gt-xs>\r\n      <mat-icon *ngIf=\"authService.userLoggedIn\">account_circle</mat-icon>\r\n      <button mat-icon-button (click)=\"onToggleSidenav()\">\r\n        <mat-icon>menu</mat-icon>\r\n      </button>\r\n    </div>\r\n    <div fxFlex fxLayout fxLayoutAlign=\"flex-end\" fxHide.xs>\r\n      <ul fxLayout fxLayoutGap=\"20px\" class=\"navigation-items\">\r\n        <li>\r\n          <a routerLink=\"/help\" [ngStyle]=\"{ 'vertical-align' :  authService.userLoggedIn ? 'sub': 'unset'}\">Pomoc</a>\r\n        </li>\r\n        <li *ngIf=\"!authService.userLoggedIn\">\r\n          <a class=\"navigation-item navigation-item__padding\" routerLink=\"/login\">Zaloguj się</a>\r\n        </li>\r\n        <li *ngIf=\"authService.userLoggedIn\">\r\n            <button mat-button [matMenuTriggerFor]=\"menu\" class=\"menu-button navigation-item\">\r\n                <mat-icon>account_circle</mat-icon>\r\n                <span> {{username}}</span>\r\n                <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\" [overlapTrigger]=\"false\">\r\n              <button mat-menu-item>\r\n                <mat-icon>home</mat-icon>\r\n                <span>Strona główna</span>\r\n              </button>\r\n              <button mat-menu-item>\r\n                <mat-icon>star</mat-icon>\r\n                <span>Ulubione</span>\r\n              </button>\r\n              <button mat-menu-item>\r\n                <mat-icon>history</mat-icon>\r\n                <span>Historia</span>\r\n              </button>\r\n              <button mat-menu-item>\r\n                <mat-icon>feedback</mat-icon>\r\n                <span>Opinie</span>\r\n              </button>\r\n              <button mat-menu-item (click)=\"authService.logout()\">\r\n                  <mat-icon>reply</mat-icon>\r\n                  <span>Wyloguj się</span>\r\n                </button>\r\n            </mat-menu>            \r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </mat-toolbar>\r\n  "

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
                .then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.authService.setUserLoggedIn(true);
                            return [4 /*yield*/, this.authService.getUserPrincipal()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
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

module.exports = "<mat-nav-list>\r\n    <a *ngIf=\"!authService.userLoggedIn\" class=\"highlighed\" mat-list-item routerLink=\"/login\" (click)=\"onClose()\">\r\n      <mat-icon>input</mat-icon>\r\n      <span class=\"nav-caption\">Zaloguj się</span>\r\n    </a>\r\n    <a *ngIf=\"authService.userLoggedIn\" mat-list-item routerLink=\"/favorite\" (click)=\"onClose()\">\r\n      <mat-icon class=\"favorite-icon\">star</mat-icon>\r\n      <span class=\"nav-caption\">Ulubione</span>\r\n    </a>\r\n    <a *ngIf=\"authService.userLoggedIn\" mat-list-item routerLink=\"/history\" (click)=\"onClose()\">\r\n      <mat-icon>history</mat-icon>\r\n      <span class=\"nav-caption\">Historia</span>\r\n    </a>\r\n    <a mat-list-item routerLink=\"/feedback\" (click)=\"onClose()\">\r\n      <mat-icon class=\"feedback-icon\">feedback</mat-icon>\r\n      <span class=\"nav-caption\">Opinie</span>\r\n    </a>\r\n    <a mat-list-item routerLink=\"/help\" (click)=\"onClose()\">\r\n      <mat-icon class=\"info-icon\">info</mat-icon>\r\n      <span class=\"nav-caption\">Potrzebujesz pomocy?</span>\r\n    </a>\r\n    <mat-list-item *ngIf=\"authService.userLoggedIn\" class= \"highlighed\" (click)=\"onLogout()\">\r\n      <button mat-icon-button >\r\n        <mat-icon>reply</mat-icon>\r\n        <span class=\"nav-caption\">Wyloguj się</span>\r\n      </button>\r\n    </mat-list-item>\r\n  </mat-nav-list>\r\n  "

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

module.exports = "<p>\r\n  page-not-found works!\r\n</p>\r\n"

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

/***/ "./src/app/guards/auth-guard.service.ts":
/*!**********************************************!*\
  !*** ./src/app/guards/auth-guard.service.ts ***!
  \**********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authenticate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authenticate.service */ "./src/app/services/authenticate.service.ts");
/* harmony import */ var _services_router_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/router.service */ "./src/app/services/router.service.ts");
/* harmony import */ var _services_angular_material_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/angular-material.service */ "./src/app/services/angular-material.service.ts");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, routerService, angularMaterialService) {
        this.authService = authService;
        this.routerService = routerService;
        this.angularMaterialService = angularMaterialService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var expectedRoles = route.data.roles;
        if (this.authService.getToken()) {
            if (this.authService.hasRole(expectedRoles)) {
                return true;
            }
            else {
                this.angularMaterialService.openSnackBar('Nie posiadasz uprawnień by przebywać w tym miejscu.');
                this.routerService.redirectToRoot();
                return false;
            }
        }
        else {
            this.routerService.loginAndRedirectToUrl(state.url);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authenticate_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticateService"],
            _services_router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"],
            _services_angular_material_service__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/no-auth-guard.service.ts":
/*!*************************************************!*\
  !*** ./src/app/guards/no-auth-guard.service.ts ***!
  \*************************************************/
/*! exports provided: NoAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoAuthGuard", function() { return NoAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authenticate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authenticate.service */ "./src/app/services/authenticate.service.ts");
/* harmony import */ var _services_router_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/router.service */ "./src/app/services/router.service.ts");




var NoAuthGuard = /** @class */ (function () {
    function NoAuthGuard(authService, routerService) {
        this.authService = authService;
        this.routerService = routerService;
    }
    NoAuthGuard.prototype.canActivate = function (route, state) {
        if (this.authService.getToken()) {
            this.routerService.redirectToRoot();
            return false;
        }
        else {
            return true;
        }
    };
    NoAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authenticate_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticateService"],
            _services_router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"]])
    ], NoAuthGuard);
    return NoAuthGuard;
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_authenticate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authenticate.service */ "./src/app/services/authenticate.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_router_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/router.service */ "./src/app/services/router.service.ts");







var HttpHeadersConfigInterceptor = /** @class */ (function () {
    function HttpHeadersConfigInterceptor(authService, router, routerService) {
        this.authService = authService;
        this.router = router;
        this.routerService = routerService;
    }
    HttpHeadersConfigInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        var token = this.authService.getToken();
        var reqUrl = 'http://' + window.location.host + req.url;
        req = req.clone({ url: reqUrl });
        if (req.url.includes('/api/protected/')) {
            if (token) {
                req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
            }
            else {
                this.routerService.loginAndRedirectToUrl(this.router.url);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('request interrupted');
            }
        }
        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }
        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            if (error.status === 401) {
                _this.authService.logout();
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    };
    HttpHeadersConfigInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authenticate_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_router_service__WEBPACK_IMPORTED_MODULE_6__["RouterService"]])
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
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"]],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"]]
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");








var AuthenticateService = /** @class */ (function () {
    function AuthenticateService(http, cookieService, routerService, angularMaterialService) {
        this.http = http;
        this.cookieService = cookieService;
        this.routerService = routerService;
        this.angularMaterialService = angularMaterialService;
        this.userNameChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.userAuthsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loginSubject = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get('/api/protected/username').toPromise()
                            .then(function (response) {
                            console.log(response);
                            _this.setUsername(response.name);
                            _this.setUserAuthorities(response.authorities);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthenticateService.prototype.setUserLoggedIn = function (userLoggedIn) {
        this.userLoggedIn = userLoggedIn;
    };
    AuthenticateService.prototype.logout = function () {
        localStorage.removeItem(_consts_cookie_const__WEBPACK_IMPORTED_MODULE_6__["TOKEN_LABEL"]);
        this.cookieService.removeAll();
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
    AuthenticateService.prototype.hasRole = function (roles) {
        var userRoles = this.cookieService.get(_consts_cookie_const__WEBPACK_IMPORTED_MODULE_6__["AUTHS_LABEL"]);
        for (var _i = 0, roles_1 = roles; _i < roles_1.length; _i++) {
            var role = roles_1[_i];
            if (userRoles.includes(role)) {
                return true;
            }
        }
        return false;
    };
    AuthenticateService.prototype.register = function (user) {
        return this.http.post('/api/register', user).toPromise();
    };
    AuthenticateService.prototype.sendLoginMessage = function () {
        this.loginSubject.next();
    };
    AuthenticateService.prototype.getLoginSubject = function () {
        return this.loginSubject.asObservable().toPromise();
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
    RouterService.prototype.redirectToRegisterPage = function () {
        this.router.navigate(["/register"]);
    };
    RouterService.prototype.redirectToAcceptRegisterPage = function () {
        this.router.navigate(["/acceptregister"]);
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

module.exports = __webpack_require__(/*! C:\app\sportal\src\main\web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map