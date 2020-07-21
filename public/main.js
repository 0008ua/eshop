(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/dashboard/dashboard.module": [
		"./src/app/modules/dashboard/dashboard.module.ts",
		"modules-dashboard-dashboard-module"
	],
	"./modules/user/user.module": [
		"./src/app/modules/user/user.module.ts",
		"modules-user-user-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  <app-header></app-header>\r\n<main class=\"main\">\r\n  \r\n  <router-outlet></router-outlet>\r\n</main>\r\n<footer>\r\n  <app-footer></app-footer>\r\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <p>footer works!</p>\r\n      <a mat-button class=\"link\" [routerLink]=\"['/']\" [routerLinkActive]=\"['link_active']\"\r\n        [routerLinkActiveOptions]=\"{exact: true}\">\r\n        <span class=\"link__text\">Link</span>\r\n      </a>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"homepage\">\n  <section [id]=\"product._id\" *ngFor=\"let product of products; let i = index\" class=\"homepage__section container-h container-v\" \n  appScrolling #scrollerMarker (elementOnScreen)=\"onElementOnScreen(product._id)\">\n    <app-product-feed [product]=\"product\"></app-product-feed>\n  </section>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page404/page404.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/page404/page404.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>page404 works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/header/header.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/header/header.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"header\" fxLayout=\"row wrap\">\r\n  <div class=\"header__logo\" fxFlex=\"20\" fxLayoutAlign=\"center center\">\r\n    <a class=\"link\" href=\"#\">Logo</a>\r\n  </div>\r\n  <!-- top position -->\r\n  <nav class=\"header__main-nav main-nav\" [ngClass]=\"['main-nav_' + navType, 'header__main-nav_' + navType]\"\r\n    fxHide.lt-md=\"true\" fxFlex=\"80\" fxLayoutAlign=\"start center\" appScrolling\r\n    (elementSticky)=\"elementSticky($event)\">\r\n    <app-main-nav fxFlex [navType]=\"navType\"></app-main-nav>\r\n  </nav>\r\n  <!-- aside position -->\r\n  <nav class=\"header__main-nav main-nav animationAppear05s\"\r\n    [ngClass]=\"['main-nav_' + navType, 'header__main-nav_' + navType, showMainMenu ? '' : 'display-none']\"\r\n    fxHide.gt-sm=\"true\" (click)=\"switchMainMenu()\">\r\n    <app-main-nav [navType]=\"navType\"></app-main-nav>\r\n  </nav>\r\n\r\n  <div fxFlex fxHide.gt-sm=\"true\" fxFlex=\"60\"></div>\r\n\r\n  <div class=\"header__menu-button\" fxHide.gt-sm=\"true\" fxFlex=\"20\" fxLayoutAlign=\"end center\">\r\n    <a class=\"link\" mat-button aria-label=\"Menu\" (click)=\"switchMainMenu()\">\r\n      <i *ngIf=\"!showMainMenu\" class=\"link__icon item fas fa-bars\"></i>\r\n      <i *ngIf=\"showMainMenu\" class=\"link__icon item fas fa-ellipsis-v\"></i>\r\n    </a>\r\n  </div>\r\n\r\n  <nav *ngIf=\"subNav?.length\" class=\"header__sub-nav sub-nav\" fxFlex=\"100\" fxLayoutAlign=\"center center\">\r\n    <app-sub-nav [nav]=\"subNav\"></app-sub-nav>\r\n  </nav>\r\n  <!-- top position -->\r\n  <nav *ngIf=\"scrollNav?.length\" class=\"header__scroll-nav scroll-nav\"\r\n    [ngClass]=\"['scroll-nav_' + navType, 'header__scroll-nav_' + navType, sticky ? 'scroll-nav_top_sticky stickyBarAnimation' : '']\"\r\n    fxHide.lt-md=\"true\" fxFlex=\"100\" fxLayoutAlign=\"center center\">\r\n    <app-scroll-nav [nav]=\"scrollNav\"></app-scroll-nav>\r\n  </nav>\r\n  <!-- aside position -->\r\n  <nav *ngIf=\"scrollNav?.length\" class=\"header__scroll-nav scroll-nav\"\r\n    [ngClass]=\"['scroll-nav_' + navType, 'header__scroll-nav_' + navType]\" fxHide.gt-sm=\"true\">\r\n    <app-scroll-nav [nav]=\"scrollNav\" [navType]=\"navType\"></app-scroll-nav>\r\n  </nav>\r\n</header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/header/main-nav/main-nav.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/header/main-nav/main-nav.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"main-nav__list\">\n  <!--  [fxLayout]=\"navType === 'top' ? 'row' : 'column'\"> -->\n  <li *ngFor=\"let navItem of mainNavCommon\" class=\"main-nav__item\" fxLayoutAlign=\"center center\">\n    <a mat-button class=\"link\" [routerLink]=\"['/', navItem._id]\" [routerLinkActive]=\"['link_active']\"\n      [routerLinkActiveOptions]=\"{exact: true}\">\n      <span class=\"link__text\">{{navItem.name}}</span>\n    </a>\n  </li>\n  <li fxFlex></li>\n\n  <!-- <ng-container  *ngFor=\"let navItem of mainNavSystem\"> -->\n  <li class=\"main-nav__item\" fxLayoutAlign=\"center center\">\n    <a mat-button class=\"link\" [routerLink]=\"['/', 'feedback']\" [routerLinkActive]=\"['link_active']\"\n      [routerLinkActiveOptions]=\"{exact: true}\">\n      <i class=\"link__icon item far fa-envelope\"></i>\n      <span class=\"link__text\">Feedback</span>\n    </a>\n  </li>\n\n  <li *ngIf=\"allowTo('notUser')\" class=\"main-nav__item\" fxLayoutAlign=\"center center\">\n    <a mat-button class=\"link\" [routerLink]=\"['/', 'user', 'login']\" [routerLinkActive]=\"['link_active']\"\n      [routerLinkActiveOptions]=\"{exact: true}\">\n      <i class=\"link__icon item fas fa-sign-in-alt\"></i>\n      <span class=\"link__text\">Login</span>\n    </a>\n  </li>\n\n  <li *ngIf=\"allowTo('user')\" class=\"main-nav__item\" fxLayoutAlign=\"center center\">\n    <a mat-button class=\"link\" [routerLink]=\"['/', 'user', 'profile']\" [routerLinkActive]=\"['link_active']\"\n      [routerLinkActiveOptions]=\"{exact: true}\">\n      <img class=\"link__photo\" src=\"{{user.photoUrl}}\" alt=\"users picture\">\n      <span class=\"link__text\">{{user.displayName}}</span>\n    </a>\n  </li>\n\n    <li *ngIf=\"allowTo('manager')\" class=\"main-nav__item\" fxLayoutAlign=\"center center\">\n      <a mat-button class=\"link\" [routerLink]=\"['/', 'user', 'dashboard']\" [routerLinkActive]=\"['link_active']\"\n        [routerLinkActiveOptions]=\"{exact: true}\">\n        <i class=\"link__icon item fas fa-cogs\"></i>\n        <span class=\"link__text\">Dashboard</span>\n      </a>\n    </li>\n\n        <li *ngIf=\"allowTo('guest')\" class=\"main-nav__item\" fxLayoutAlign=\"center center\">\n          <a mat-button class=\"link\" (click)=\"logout()\">\n            <i class=\"link__icon item fas fa-door-open\"></i>\n            <span class=\"link__text\">Logout</span>\n          </a>\n        </li>\n  <!-- </ng-container > -->\n  <!-- \n\n    <div class=\"cell\" fxFlex=\"100\">\n      <a mat-button class=\"link\" [routerLink]=\"['/', 'feedback']\" [routerLinkActive]=\"['link_active']\"\n        [routerLinkActiveOptions]=\"{exact: false}\">\n        <i class=\"link__icon far fa-envelope\"></i>\n        <span class=\"link__icon-text\">{{'feedback' | translate}}</span>\n      </a>\n    </div>\n    \n    <div *ngIf=\"allowTo('notUser')\" class=\"cell\" fxFlex=\"100\">\n      <a mat-button class=\"link\" [routerLink]=\"['/', 'user', 'login']\" [routerLinkActive]=\"['link_active']\"\n        [routerLinkActiveOptions]=\"{exact: false}\">\n        <i class=\"link__icon fas fa-sign-in-alt\"></i>\n        <span class=\"link__icon-text\">{{'signin' | translate}}</span>\n      </a>\n    </div>\n    \n    <div *ngIf=\"allowTo('user')\" class=\"cell\" fxFlex=\"100\">\n      <a mat-button class=\"link\" [routerLink]=\"['/', 'user', 'profile']\" [routerLinkActive]=\"['link_active']\"\n        [routerLinkActiveOptions]=\"{exact: false}\">\n        <img class=\"link__photo\" src=\"{{user.photoUrl}}\" aly=\"users picture\">\n        <span class=\"link__icon-text\">{{user.displayName}}</span>\n      </a>\n    </div>\n    \n    <div *ngIf=\"allowTo('manager')\" class=\"cell\" fxFlex=\"100\">\n      <a mat-button class=\"link\" [routerLink]=\"['/', 'dashboard', 'product-form']\" [routerLinkActive]=\"['link_active']\"\n        [routerLinkActiveOptions]=\"{exact: false}\">\n        <i class=\"link__icon fas fa-cogs\"></i>\n        <span class=\"link__icon-text\">{{'dashboard' | translate}}</span>\n      </a>\n    </div>\n    <div *ngIf=\"allowTo('guest')\" class=\"cell\" fxFlex=\"100\">\n      <a mat-button class=\"link\" (click)=\"logout()\">\n        <i class=\"link__icon fas fa-door-open\"></i>\n        <span class=\"link__icon-text\">{{'logout' | translate}}</span>\n      </a>\n    </div>\n    <div class=\"cell\" fxFlex=\"100\">\n      <a mat-button class=\"link\" (click)=\"switchLanguage()\">\n        <i class=\"link__icon fas fa-globe fa-1x\"></i>\n        <span class=\"link__icon-text\">{{language}}</span>\n      </a>\n    </div> -->\n\n</ul>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/header/scroll-nav/scroll-nav.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/header/scroll-nav/scroll-nav.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"scroll-nav__wrapper\">\r\n  <ul class=\"scroll-nav__list\" [ngClass]=\"{'scroll-nav__list_opened': showScrollMenu}\" (click)=\"switchScrollMenu()\">\r\n    <li *ngFor=\"let navItem of nav\" class=\"scroll-nav__item disabled\" fxFlex fxLayoutAlign=\"center center\">\r\n      <a mat-button class=\"link\" (click)=\"scrollTo(navItem._id)\" [ngClass]=\"{'link_active': elementOnScreen === navItem._id}\">\r\n        <!-- [routerLink]=\"['/', navItem.parent, navItem._id]\" [routerLinkActive]=\"['link_active']\"\r\n        [routerLinkActiveOptions]=\"{exact: true}\" -->\r\n        <span class=\"link__text\">{{navItem.name}}</span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n  <div *ngIf=\"navType === 'aside'\" class=\"scroll-nav__button\" fxFlexAlign=\"center\" [ngClass]=\"{'scroll-nav__button_opened': showScrollMenu}\"\r\n    (click)=\"switchScrollMenu()\">\r\n      <i class=\"fas\" [ngClass]=\"'fa-angle-right'\"></i>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/header/sub-nav/sub-nav.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/header/sub-nav/sub-nav.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"nscroll-nav__list\" fxLayout=\"row\">\n  <li *ngFor=\"let navItem of nav\" class=\"scroll-nav__item disabled\" fxFlex fxLayoutAlign=\"center center\">\n    <a mat-button class=\"link\" [routerLink]=\"['/', navItem.parent, navItem._id]\" [routerLinkActive]=\"['link_active']\"\n      [routerLinkActiveOptions]=\"{exact: true}\">\n      <span class=\"link__text\">{{navItem.name}}</span>\n    </a>\n  </li>\n</ul>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/product-detail/product-detail.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/product-detail/product-detail.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>product-detail works!</p>\r\n{{product | json}}");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/product-feed/product-feed.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/product-feed/product-feed.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"product-feed container\">\r\n  <div class=\"row\" fxLayout=\"row\">\r\n    <div class=\"cell\" fxFlex=\"100\">\r\n      <h2 class=\"product-feed__title\">{{product.name}}</h2>\r\n    </div>\r\n        <div class=\"cell\" fxFlex=\"20\">\r\n          <img class=\"product-feed__picture\" src=\"/assets/other/default_product.png\">\r\n        </div>\r\n    <div class=\"cell\" fxFlex=\"80\">\r\n      <p class=\"product-feed__description\">{{product.description}}</p>\r\n    </div>\r\n\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/products.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/products.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section *ngFor=\"let product of products\" [id]=\"product._id\" class=\"container-v\"\r\n(elementOnScreen)=\"onElementOnScreen(product._id)\" appScrolling #scrollerMarker>\r\n    <app-product-feed [product]=\"product\"></app-product-feed>\r\n\r\n</section>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/actions/screen.actions.ts":
/*!*******************************************!*\
  !*** ./src/app/actions/screen.actions.ts ***!
  \*******************************************/
/*! exports provided: ScreenActionTypes, LoadScreens, ChangedScreens */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenActionTypes", function() { return ScreenActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadScreens", function() { return LoadScreens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangedScreens", function() { return ChangedScreens; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var ScreenActionTypes;
(function (ScreenActionTypes) {
    ScreenActionTypes["LoadScreens"] = "[Screen] Load Screens";
    ScreenActionTypes["ChangedScreens"] = "[Screen] Changed Screens";
})(ScreenActionTypes || (ScreenActionTypes = {}));
class LoadScreens {
    constructor() {
        this.type = ScreenActionTypes.LoadScreens;
    }
}
class ChangedScreens {
    constructor(payload) {
        this.payload = payload;
        this.type = ScreenActionTypes.ChangedScreens;
    }
}


/***/ }),

/***/ "./src/app/actions/scrolling.actions.ts":
/*!**********************************************!*\
  !*** ./src/app/actions/scrolling.actions.ts ***!
  \**********************************************/
/*! exports provided: ScrollingActionTypes, ElementOnScreen, ScrollTo, ElementSticky */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollingActionTypes", function() { return ScrollingActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementOnScreen", function() { return ElementOnScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollTo", function() { return ScrollTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementSticky", function() { return ElementSticky; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var ScrollingActionTypes;
(function (ScrollingActionTypes) {
    ScrollingActionTypes["ElementOnScreen"] = "[Scrolling] Element On Screen";
    ScrollingActionTypes["ScrollTo"] = "[Scrolling] Scroll To";
    ScrollingActionTypes["ElementSticky"] = "[Scrolling] Element sticky";
})(ScrollingActionTypes || (ScrollingActionTypes = {}));
class ElementOnScreen {
    constructor(payload) {
        this.payload = payload;
        this.type = ScrollingActionTypes.ElementOnScreen;
    }
}
class ScrollTo {
    constructor(payload) {
        this.payload = payload;
        this.type = ScrollingActionTypes.ScrollTo;
    }
}
class ElementSticky {
    constructor(payload) {
        this.payload = payload;
        this.type = ScrollingActionTypes.ElementSticky;
    }
}


/***/ }),

/***/ "./src/app/actions/user.actions.ts":
/*!*****************************************!*\
  !*** ./src/app/actions/user.actions.ts ***!
  \*****************************************/
/*! exports provided: UserActionTypes, GetUser, Authenticated, NotAuthenticated, AuthError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserActionTypes", function() { return UserActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUser", function() { return GetUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Authenticated", function() { return Authenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotAuthenticated", function() { return NotAuthenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthError", function() { return AuthError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var UserActionTypes;
(function (UserActionTypes) {
    UserActionTypes["getUser"] = "[User] Get user";
    UserActionTypes["authenticated"] = "[User] Authenticated";
    UserActionTypes["notAuthenticated"] = "[User] Not Authenticated";
    // googleLogin = '[User] Google login attempt',
    // logout = '[User] Logout',
    UserActionTypes["authError"] = "[User] Error";
})(UserActionTypes || (UserActionTypes = {}));
// Get User AuthState
class GetUser {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.getUser;
    }
}
class Authenticated {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.authenticated;
    }
}
class NotAuthenticated {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.notAuthenticated;
    }
}
class AuthError {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.authError;
    }
}
// | Logout;


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/page404/page404.component */ "./src/app/components/page404/page404.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _modules_products_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/products/product-detail/product-detail.component */ "./src/app/modules/products/product-detail/product-detail.component.ts");
/* harmony import */ var _modules_products_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/products/products.component */ "./src/app/modules/products/products.component.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth.guard */ "./src/app/services/auth.guard.ts");








const routes = [
    {
        path: 'feedback',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-feedback-feedback-module */ "modules-feedback-feedback-module").then(__webpack_require__.bind(null, /*! ./modules/feedback/feedback.module */ "./src/app/modules/feedback/feedback.module.ts")).then(mod => mod.FeedbackModule),
    },
    // {
    //   path: 'products',
    //   loadChildren: () => import('./modules/products/products.module').then(mod => mod.ProductsModule),
    // },
    {
        path: 'products',
        component: _modules_products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"],
    },
    {
        path: 'products/:product',
        component: _modules_products_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_5__["ProductDetailComponent"],
    },
    {
        path: 'page-404',
        component: _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_3__["Page404Component"]
    },
    {
        path: 'user',
        loadChildren: './modules/user/user.module#UserModule',
    },
    {
        path: 'dashboard',
        loadChildren: './modules/dashboard/dashboard.module#DashboardModule',
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        data: { auth: 'manager' },
    },
    {
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        pathMatch: 'full'
    },
    { path: '**', component: _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_3__["Page404Component"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _actions_screen_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions/screen.actions */ "./src/app/actions/screen.actions.ts");




let AppComponent = class AppComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.store.dispatch(new _actions_screen_actions__WEBPACK_IMPORTED_MODULE_3__["LoadScreens"]());
    }
};
AppComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/page404/page404.component */ "./src/app/components/page404/page404.component.ts");
/* harmony import */ var _modules_header_header_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/header/header.module */ "./src/app/modules/header/header.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _modules_products_products_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/products/products.module */ "./src/app/modules/products/products.module.ts");
/* harmony import */ var _directives_directives_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directives/directives.module */ "./src/app/directives/directives.module.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _effects_app_effects__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./effects/app.effects */ "./src/app/effects/app.effects.ts");
/* harmony import */ var _effects_screen_effects__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./effects/screen.effects */ "./src/app/effects/screen.effects.ts");
/* harmony import */ var _services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/http-interceptor.service */ "./src/app/services/http-interceptor.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _effects_user_effects__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./effects/user.effects */ "./src/app/effects/user.effects.ts");

























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
            _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_10__["Page404Component"]
        ],
        imports: [
            _modules_products_products_module__WEBPACK_IMPORTED_MODULE_13__["ProductsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _directives_directives_module__WEBPACK_IMPORTED_MODULE_14__["DirectivesModule"],
            _modules_header_header_module__WEBPACK_IMPORTED_MODULE_11__["HeaderModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production }),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["StoreDevtoolsModule"].instrument({ maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production }),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_17__["reducers"], {
                metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_17__["metaReducers"],
                runtimeChecks: {
                    strictStateImmutability: true,
                    strictActionImmutability: true
                }
            }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_18__["EffectsModule"].forRoot([_effects_app_effects__WEBPACK_IMPORTED_MODULE_19__["AppEffects"], _effects_screen_effects__WEBPACK_IMPORTED_MODULE_20__["ScreenEffects"], _effects_user_effects__WEBPACK_IMPORTED_MODULE_23__["UserEffects"]])
        ],
        providers: [
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_22__["CookieService"],
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"], useClass: _services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_21__["HttpInterceptorService"], multi: true },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var src_app_actions_scrolling_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/actions/scrolling.actions */ "./src/app/actions/scrolling.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");





let HomeComponent = class HomeComponent {
    constructor(productService, store) {
        this.productService = productService;
        this.store = store;
    }
    ngOnInit() {
        this.productService.getProducts()
            .subscribe(products => this.products = products);
        this.store
            .select('scrolling')
            .subscribe(store => {
            const elementId = store.scrollTo;
            if (this.scrollerMarker) {
                this.scrollerMarker.forEach(el => {
                    if (el.nativeElement.id === elementId) {
                        el.nativeElement.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            }
        });
    }
    isNewElementOnScreen(elemId) {
        if (this.currentElementId !== elemId) {
            this.currentElementId = elemId;
            return true;
        }
        else {
            return false;
        }
    }
    onElementOnScreen(elementOnScreen) {
        if (this.isNewElementOnScreen(elementOnScreen)) {
            this.store.dispatch(new src_app_actions_scrolling_actions__WEBPACK_IMPORTED_MODULE_3__["ElementOnScreen"]({ elementOnScreen }));
        }
    }
};
HomeComponent.ctorParameters = () => [
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('scrollerMarker')
], HomeComponent.prototype, "scrollerMarker", void 0);
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/page404/page404.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/page404/page404.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZTQwNC9wYWdlNDA0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/page404/page404.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/page404/page404.component.ts ***!
  \*********************************************************/
/*! exports provided: Page404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page404Component", function() { return Page404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Page404Component = class Page404Component {
    constructor() { }
    ngOnInit() {
    }
};
Page404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page404',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page404.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page404/page404.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page404.component.scss */ "./src/app/components/page404/page404.component.scss")).default]
    })
], Page404Component);



/***/ }),

/***/ "./src/app/directives/directives.module.ts":
/*!*************************************************!*\
  !*** ./src/app/directives/directives.module.ts ***!
  \*************************************************/
/*! exports provided: DirectivesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectivesModule", function() { return DirectivesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _scrolling_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scrolling.directive */ "./src/app/directives/scrolling.directive.ts");
/* harmony import */ var _on_scroll_animation_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./on-scroll-animation.directive */ "./src/app/directives/on-scroll-animation.directive.ts");





let DirectivesModule = class DirectivesModule {
};
DirectivesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _scrolling_directive__WEBPACK_IMPORTED_MODULE_3__["ScrollingDirective"],
            _on_scroll_animation_directive__WEBPACK_IMPORTED_MODULE_4__["OnScrollAnimationDirective"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            _scrolling_directive__WEBPACK_IMPORTED_MODULE_3__["ScrollingDirective"],
            _on_scroll_animation_directive__WEBPACK_IMPORTED_MODULE_4__["OnScrollAnimationDirective"],
        ]
    })
], DirectivesModule);



/***/ }),

/***/ "./src/app/directives/on-scroll-animation.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/directives/on-scroll-animation.directive.ts ***!
  \*************************************************************/
/*! exports provided: OnScrollAnimationDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnScrollAnimationDirective", function() { return OnScrollAnimationDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");



let OnScrollAnimationDirective = class OnScrollAnimationDirective {
    constructor(builder, el) {
        this.builder = builder;
        this.el = el;
    }
    slide(forwardAnimationDirection) {
        if (forwardAnimationDirection) {
            return [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    opacity: 0,
                    transform: 'translate(-100%, 0)'
                }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1000ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    opacity: 1,
                    transform: 'translate(0, 0)'
                })),
            ];
        }
        else {
            return [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    opacity: 1,
                    transform: 'translate(0, 0)'
                }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1000ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    opacity: 0,
                    transform: 'translate(-100%, 0)'
                })),
            ];
        }
    }
    fade(forwardAnimationDirection) {
        if (forwardAnimationDirection) {
            return [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 })),
            ];
        }
        else {
            return [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: '*' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 })),
            ];
        }
    }
    doAnimation(appOnScrollAnimation, forwardAnimationDirection) {
        if (!this.currentAppOnScrollAnimation ||
            this.currentAppOnScrollAnimation !== appOnScrollAnimation ||
            this.forwardAnimationDirection !== forwardAnimationDirection) {
            if (this.player) {
                this.player.destroy();
            }
            const metadata = this[appOnScrollAnimation](forwardAnimationDirection);
            const factory = this.builder.build(metadata);
            const player = factory.create(this.el.nativeElement);
            player.play();
            this.currentAppOnScrollAnimation = appOnScrollAnimation;
            this.forwardAnimationDirection = forwardAnimationDirection;
        }
        else {
            return;
        }
    }
    isElementOnScreen(elem) {
        const box = elem.getBoundingClientRect();
        const elementTop = box.top;
        const elementBottom = box.bottom;
        if (elementBottom > 0 && elementTop <= innerHeight - innerHeight * .4 && elementBottom > innerHeight - innerHeight * .4) {
            return true;
        }
        else {
            return false;
        }
    }
    onScroll() {
        if (this.isElementOnScreen(this.el.nativeElement)) {
            this.doAnimation(this.onScrollAnimation, true);
        }
        else {
            this.doAnimation(this.onScrollAnimation, false);
        }
    }
};
OnScrollAnimationDirective.ctorParameters = () => [
    { type: _angular_animations__WEBPACK_IMPORTED_MODULE_2__["AnimationBuilder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appOnScrollAnimation')
], OnScrollAnimationDirective.prototype, "onScrollAnimation", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', [])
], OnScrollAnimationDirective.prototype, "onScroll", null);
OnScrollAnimationDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appOnScrollAnimation]',
    })
], OnScrollAnimationDirective);



/***/ }),

/***/ "./src/app/directives/scrolling.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/directives/scrolling.directive.ts ***!
  \***************************************************/
/*! exports provided: ScrollingDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollingDirective", function() { return ScrollingDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ScrollingDirective = class ScrollingDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.elementOnScreen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.elementSticky = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    isElementSticky(elem) {
        // observing for bottom edge of above element
        const box = elem.getBoundingClientRect();
        const elementBottom = box.bottom;
        if (elementBottom >= 0 && this.lastBottom < 0) {
            this.lastBottom = box.bottom;
            this.sticky = false;
            return true;
        }
        else if (elementBottom < 0 && this.lastBottom >= 0) {
            this.lastBottom = box.bottom;
            this.sticky = true;
            return true;
        }
        else {
            this.lastBottom = box.bottom;
            return false;
        }
    }
    isElementOnScreen(elem) {
        // elem.getBoundingClientRect(); видима обасть екрану до елемента
        // pageYOffset верх сторінки до верху видимой обасті
        // innerHeight висота видимої області
        const box = elem.getBoundingClientRect();
        // const screenTop = pageYOffset;
        // const screenBottom = pageYOffset + innerHeight;
        const elementTop = box.top;
        const elementBottom = box.bottom;
        if (elementBottom > 0 && elementTop <= innerHeight - innerHeight * .4 && elementBottom > innerHeight - innerHeight * .4) {
            return true;
        }
        else {
            return false;
        }
    }
    onScroll(e) {
        if (this.isElementOnScreen(this.elementRef.nativeElement)) {
            this.elementOnScreen.emit();
        }
        if (this.isElementSticky(this.elementRef.nativeElement)) {
            this.elementSticky.emit(this.sticky);
        }
    }
};
ScrollingDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ScrollingDirective.prototype, "elementOnScreen", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ScrollingDirective.prototype, "elementSticky", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event'])
], ScrollingDirective.prototype, "onScroll", null);
ScrollingDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appScrolling]'
    })
], ScrollingDirective);



/***/ }),

/***/ "./src/app/effects/app.effects.ts":
/*!****************************************!*\
  !*** ./src/app/effects/app.effects.ts ***!
  \****************************************/
/*! exports provided: AppEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppEffects", function() { return AppEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");



let AppEffects = class AppEffects {
    constructor(actions$) {
        this.actions$ = actions$;
    }
};
AppEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }
];
AppEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AppEffects);



/***/ }),

/***/ "./src/app/effects/screen.effects.ts":
/*!*******************************************!*\
  !*** ./src/app/effects/screen.effects.ts ***!
  \*******************************************/
/*! exports provided: ScreenEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenEffects", function() { return ScreenEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _actions_screen_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/screen.actions */ "./src/app/actions/screen.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/shared.service */ "./src/app/services/shared.service.ts");






// import { LoadApp, LoadAppProductsSuccess } from '../actions/app.actions';
let ScreenEffects = class ScreenEffects {
    constructor(actions$, sharedService) {
        this.actions$ = actions$;
        this.sharedService = sharedService;
        this.getScreens = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_screen_actions__WEBPACK_IMPORTED_MODULE_3__["ScreenActionTypes"].LoadScreens), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(_ => this.sharedService.loadScreens().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(state => {
            return [
                new _actions_screen_actions__WEBPACK_IMPORTED_MODULE_3__["ChangedScreens"](state),
            ];
        }))));
    }
};
ScreenEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], ScreenEffects.prototype, "getScreens", void 0);
ScreenEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ScreenEffects);



/***/ }),

/***/ "./src/app/effects/user.effects.ts":
/*!*****************************************!*\
  !*** ./src/app/effects/user.effects.ts ***!
  \*****************************************/
/*! exports provided: UserEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEffects", function() { return UserEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/user.actions */ "./src/app/actions/user.actions.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");







let UserEffects = class UserEffects {
    // @Effect()
    // login: Observable<Action> = this.actions$.pipe(
    //   ofType(UserActionTypes.googleLogin),
    //   map((action: UserActions) => action.payload),
    //   switchMap(payload => from(this.fireService.googleSignin()).pipe(
    //     // successful login
    //     map(credential => new GetUser()))),
    //   catchError(err => of(new AuthError({ error: err.message })))
    // );
    // @Effect()
    // logout: Observable<Action> = this.actions$.pipe(
    //   ofType(UserActionTypes.logout),
    //   map((action: UserActions) => action.payload),
    //   switchMap(payload => of(this.afAuth.auth.signOut()).pipe(
    //     map(authData => new NotAuthenticated()),
    //     catchError(err => of(new AuthError({ error: err.message })))
    //   ))
    // );
    constructor(actions$, userService) {
        this.actions$ = actions$;
        this.userService = userService;
        this.getUser = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["UserActionTypes"].getUser), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(payload => this.userService.getUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(user => {
            if (user) {
                // User logged in
                return new _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["Authenticated"]({ user });
            }
            else {
                // User not logged in
                return new _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["NotAuthenticated"]();
            }
        }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["AuthError"]())));
    }
};
UserEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], UserEffects.prototype, "getUser", void 0);
UserEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserEffects);



/***/ }),

/***/ "./src/app/interfaces.ts":
/*!*******************************!*\
  !*** ./src/app/interfaces.ts ***!
  \*******************************/
/*! exports provided: User, ScreenTypes, PictureTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenTypes", function() { return ScreenTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PictureTypes", function() { return PictureTypes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
    constructor(_id, displayName, role, photoURL, // TODO add default
    provider, // TODO add default
    loading, // TODO add default
    error) {
        this._id = _id;
        this.displayName = displayName;
        this.role = role;
        this.photoURL = photoURL;
        this.provider = provider;
        this.loading = loading;
        this.error = error;
    }
}
var ScreenTypes;
(function (ScreenTypes) {
    ScreenTypes["xs"] = "xs";
    ScreenTypes["sm"] = "sm";
    ScreenTypes["md"] = "md";
    ScreenTypes["lg"] = "lg";
    ScreenTypes["xl"] = "xl";
})(ScreenTypes || (ScreenTypes = {}));
var PictureTypes;
(function (PictureTypes) {
    PictureTypes["ProductPicture"] = "ProductPicture";
    PictureTypes["DashboardProductPicture"] = "DashboardProductPicture";
    PictureTypes["ModalProductPicture"] = "ModalProductPicture";
})(PictureTypes || (PictureTypes = {}));


/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");




let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
        ],
        exports: [
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
        ],
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/modules/header/header.component.scss":
/*!******************************************************!*\
  !*** ./src/app/modules/header/header.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/header/header.component.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/header/header.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_catalog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/catalog.service */ "./src/app/services/catalog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_interfaces__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/interfaces */ "./src/app/interfaces.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var src_app_actions_scrolling_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/actions/scrolling.actions */ "./src/app/actions/scrolling.actions.ts");









let HeaderComponent = class HeaderComponent {
    constructor(catalogService, router, store) {
        this.catalogService = catalogService;
        this.router = router;
        this.store = store;
        this.sticky = false;
        this.showMainMenu = false;
    }
    ngOnInit() {
        this.store.select('screen')
            .subscribe(store => {
            if (store && (store.screenSize === src_app_interfaces__WEBPACK_IMPORTED_MODULE_5__["ScreenTypes"].xs || store.screenSize === src_app_interfaces__WEBPACK_IMPORTED_MODULE_5__["ScreenTypes"].sm)) {
                this.navType = 'aside';
            }
            else {
                this.navType = 'top';
            }
        });
        this.store.select('scrolling')
            .subscribe(store => {
            this.sticky = store.elementSticky;
        });
        const routerEvents$ = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((event) => {
            const url = event.url.split('/');
            const lastUrlSegment = url[url.length - 1];
            this.lastParentSegment = '';
            if (url.length >= 2) {
                this.lastParentSegment = url[url.length - 2];
            }
            return lastUrlSegment;
        }));
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["combineLatest"])(routerEvents$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(lastUrlSegment => {
            return this.catalogService.getScrollableChildren(lastUrlSegment || 'common');
        })), routerEvents$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(lastUrlSegment => {
            return this.lastParentSegment === 'products' ? this.catalogService.getAllSiblingsOfCurrentCategory(lastUrlSegment) : Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])([]);
        })))
            .subscribe(nav => {
            this.scrollNav = nav[0];
            this.subNav = [];
            if (!nav[0].length) {
                this.subNav = nav[1];
            }
        });
    }
    elementSticky(e) {
        this.store.dispatch(new src_app_actions_scrolling_actions__WEBPACK_IMPORTED_MODULE_8__["ElementSticky"]({ elementSticky: e }));
    }
    switchMainMenu() {
        this.showMainMenu = !this.showMainMenu;
    }
};
HeaderComponent.ctorParameters = () => [
    { type: src_app_services_catalog_service__WEBPACK_IMPORTED_MODULE_2__["CatalogService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/modules/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/modules/header/header.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/header/header.module.ts ***!
  \*************************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.component */ "./src/app/modules/header/header.component.ts");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-nav/main-nav.component */ "./src/app/modules/header/main-nav/main-nav.component.ts");
/* harmony import */ var _scroll_nav_scroll_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scroll-nav/scroll-nav.component */ "./src/app/modules/header/scroll-nav/scroll-nav.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var _sub_nav_sub_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sub-nav/sub-nav.component */ "./src/app/modules/header/sub-nav/sub-nav.component.ts");
/* harmony import */ var src_app_directives_directives_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/directives/directives.module */ "./src/app/directives/directives.module.ts");










let HeaderModule = class HeaderModule {
};
HeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_4__["MainNavComponent"], _scroll_nav_scroll_nav_component__WEBPACK_IMPORTED_MODULE_5__["ScrollNavComponent"], _sub_nav_sub_nav_component__WEBPACK_IMPORTED_MODULE_8__["SubNavComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
            src_app_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            src_app_directives_directives_module__WEBPACK_IMPORTED_MODULE_9__["DirectivesModule"],
        ],
        exports: [_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]],
    })
], HeaderModule);



/***/ }),

/***/ "./src/app/modules/header/main-nav/main-nav.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/modules/header/main-nav/main-nav.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaGVhZGVyL21haW4tbmF2L21haW4tbmF2LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/header/main-nav/main-nav.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/header/main-nav/main-nav.component.ts ***!
  \***************************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_catalog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/catalog.service */ "./src/app/services/catalog.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_actions_user_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/actions/user.actions */ "./src/app/actions/user.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");








let MainNavComponent = class MainNavComponent {
    constructor(catalogService, userService, router, store) {
        this.catalogService = catalogService;
        this.userService = userService;
        this.router = router;
        this.store = store;
    }
    ngOnInit() {
        this.store.dispatch(new src_app_actions_user_actions__WEBPACK_IMPORTED_MODULE_6__["GetUser"]());
        this.store.select('auth')
            .subscribe(store => this.user = store.user);
        this.mainNavCommon$ = this.catalogService.getChildren('common');
        this.mainNavSystem$ = this.catalogService.getChildren('system');
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(this.mainNavCommon$, this.mainNavSystem$)
            .subscribe(data => {
            this.mainNavCommon = data[0];
            this.mainNavSystem = data[1];
        });
    }
    allowTo(permittedRole) {
        return this.userService.allowTo(permittedRole);
    }
    restrictTo(restrictedRoles) {
        return this.userService.restrictTo(restrictedRoles);
    }
    logout() {
        this.userService.logout().subscribe(_ => this.router.navigate(['/']));
    }
};
MainNavComponent.ctorParameters = () => [
    { type: src_app_services_catalog_service__WEBPACK_IMPORTED_MODULE_2__["CatalogService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MainNavComponent.prototype, "navType", void 0);
MainNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/header/main-nav/main-nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-nav.component.scss */ "./src/app/modules/header/main-nav/main-nav.component.scss")).default]
    })
], MainNavComponent);



/***/ }),

/***/ "./src/app/modules/header/scroll-nav/scroll-nav.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/modules/header/scroll-nav/scroll-nav.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaGVhZGVyL3Njcm9sbC1uYXYvc2Nyb2xsLW5hdi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/header/scroll-nav/scroll-nav.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/header/scroll-nav/scroll-nav.component.ts ***!
  \*******************************************************************/
/*! exports provided: ScrollNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollNavComponent", function() { return ScrollNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var src_app_actions_scrolling_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/actions/scrolling.actions */ "./src/app/actions/scrolling.actions.ts");




let ScrollNavComponent = class ScrollNavComponent {
    constructor(store) {
        this.store = store;
        this.showScrollMenu = false;
    }
    ngOnInit() {
        this.store.select('scrolling')
            .subscribe(store => {
            this.elementOnScreen = store.elementOnScreen;
        });
    }
    scrollTo(elementId) {
        this.store.dispatch(new src_app_actions_scrolling_actions__WEBPACK_IMPORTED_MODULE_3__["ScrollTo"]({ scrollTo: elementId }));
    }
    switchScrollMenu() {
        this.showScrollMenu = !this.showScrollMenu;
    }
};
ScrollNavComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ScrollNavComponent.prototype, "nav", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ScrollNavComponent.prototype, "navType", void 0);
ScrollNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-scroll-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./scroll-nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/header/scroll-nav/scroll-nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./scroll-nav.component.scss */ "./src/app/modules/header/scroll-nav/scroll-nav.component.scss")).default]
    })
], ScrollNavComponent);



/***/ }),

/***/ "./src/app/modules/header/sub-nav/sub-nav.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/modules/header/sub-nav/sub-nav.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaGVhZGVyL3N1Yi1uYXYvc3ViLW5hdi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/header/sub-nav/sub-nav.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/header/sub-nav/sub-nav.component.ts ***!
  \*************************************************************/
/*! exports provided: SubNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubNavComponent", function() { return SubNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SubNavComponent = class SubNavComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SubNavComponent.prototype, "nav", void 0);
SubNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sub-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sub-nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/header/sub-nav/sub-nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sub-nav.component.scss */ "./src/app/modules/header/sub-nav/sub-nav.component.scss")).default]
    })
], SubNavComponent);



/***/ }),

/***/ "./src/app/modules/products/product-detail/product-detail.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/products/product-detail/product-detail.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvZHVjdHMvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/products/product-detail/product-detail.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/products/product-detail/product-detail.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ProductDetailComponent = class ProductDetailComponent {
    constructor(productService, route) {
        this.productService = productService;
        this.route = route;
    }
    ngOnInit() {
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(paramMap => {
            const id = paramMap.get('product');
            console.log('id', id);
            return this.productService.getProduct(id);
        }))
            .subscribe(product => this.product = product);
    }
};
ProductDetailComponent.ctorParameters = () => [
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ProductDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/product-detail/product-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-detail.component.scss */ "./src/app/modules/products/product-detail/product-detail.component.scss")).default]
    })
], ProductDetailComponent);



/***/ }),

/***/ "./src/app/modules/products/product-feed/product-feed.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/modules/products/product-feed/product-feed.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvZHVjdHMvcHJvZHVjdC1mZWVkL3Byb2R1Y3QtZmVlZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/products/product-feed/product-feed.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/products/product-feed/product-feed.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProductFeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFeedComponent", function() { return ProductFeedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductFeedComponent = class ProductFeedComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductFeedComponent.prototype, "product", void 0);
ProductFeedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-feed',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-feed.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/product-feed/product-feed.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-feed.component.scss */ "./src/app/modules/products/product-feed/product-feed.component.scss")).default]
    })
], ProductFeedComponent);



/***/ }),

/***/ "./src/app/modules/products/products.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/modules/products/products.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/products/products.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/products/products.component.ts ***!
  \********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var src_app_actions_scrolling_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/actions/scrolling.actions */ "./src/app/actions/scrolling.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");





let ProductsComponent = class ProductsComponent {
    constructor(productService, store) {
        this.productService = productService;
        this.store = store;
    }
    ngOnInit() {
        this.productService.getProducts()
            .subscribe(products => this.products = products);
        this.store
            .select('scrolling')
            .subscribe(store => {
            const elementId = store.scrollTo;
            if (this.scrollerMarker) {
                this.scrollerMarker.forEach(el => {
                    if (el.nativeElement.id === elementId) {
                        el.nativeElement.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            }
        });
    }
    isNewElementOnScreen(elemId) {
        if (this.currentElementId !== elemId) {
            this.currentElementId = elemId;
            return true;
        }
        else {
            return false;
        }
    }
    onElementOnScreen(elementOnScreen) {
        if (this.isNewElementOnScreen(elementOnScreen)) {
            this.store.dispatch(new src_app_actions_scrolling_actions__WEBPACK_IMPORTED_MODULE_3__["ElementOnScreen"]({ elementOnScreen }));
        }
    }
};
ProductsComponent.ctorParameters = () => [
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('scrollerMarker')
], ProductsComponent.prototype, "scrollerMarker", void 0);
ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/products.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./products.component.scss */ "./src/app/modules/products/products.component.scss")).default]
    })
], ProductsComponent);



/***/ }),

/***/ "./src/app/modules/products/products.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/products/products.module.ts ***!
  \*****************************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products.component */ "./src/app/modules/products/products.component.ts");
/* harmony import */ var _product_feed_product_feed_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-feed/product-feed.component */ "./src/app/modules/products/product-feed/product-feed.component.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/modules/products/product-detail/product-detail.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var src_app_directives_directives_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/directives/directives.module */ "./src/app/directives/directives.module.ts");









let ProductsModule = class ProductsModule {
};
ProductsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"], _product_feed_product_feed_component__WEBPACK_IMPORTED_MODULE_4__["ProductFeedComponent"], _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_5__["ProductDetailComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            // uncomment to use as lazy loading module
            // this module is using by home component (eager loading)
            // ProductsRoutingModule,
            src_app_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            src_app_directives_directives_module__WEBPACK_IMPORTED_MODULE_8__["DirectivesModule"],
        ],
        exports: [
            _product_feed_product_feed_component__WEBPACK_IMPORTED_MODULE_4__["ProductFeedComponent"]
        ]
    })
], ProductsModule);



/***/ }),

/***/ "./src/app/reducers/index.ts":
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/*! exports provided: reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _scrolling_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scrolling.reducer */ "./src/app/reducers/scrolling.reducer.ts");
/* harmony import */ var _screen_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screen.reducer */ "./src/app/reducers/screen.reducer.ts");
/* harmony import */ var _user_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.reducer */ "./src/app/reducers/user.reducer.ts");





const reducers = {
    scrolling: _scrolling_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"],
    screen: _screen_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"],
    auth: _user_reducer__WEBPACK_IMPORTED_MODULE_4__["reducer"],
};
const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production ? [] : [];


/***/ }),

/***/ "./src/app/reducers/screen.reducer.ts":
/*!********************************************!*\
  !*** ./src/app/reducers/screen.reducer.ts ***!
  \********************************************/
/*! exports provided: screenFeatureKey, initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "screenFeatureKey", function() { return screenFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_screen_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/screen.actions */ "./src/app/actions/screen.actions.ts");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces */ "./src/app/interfaces.ts");



const screenFeatureKey = 'screen';
const initialState = {
    pictureLink: {
        [_interfaces__WEBPACK_IMPORTED_MODULE_2__["PictureTypes"].ProductPicture]: { link: '/', size: { w: 0, h: 0 } },
        [_interfaces__WEBPACK_IMPORTED_MODULE_2__["PictureTypes"].DashboardProductPicture]: { link: '/', size: { w: 0, h: 0 } },
    },
    picturesOnPage: 6,
    screenSize: null,
};
function reducer(state = initialState, action) {
    switch (action.type) {
        case _actions_screen_actions__WEBPACK_IMPORTED_MODULE_1__["ScreenActionTypes"].ChangedScreens:
            return Object.assign({}, state, action.payload);
        case _actions_screen_actions__WEBPACK_IMPORTED_MODULE_1__["ScreenActionTypes"].LoadScreens:
            break;
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/reducers/scrolling.reducer.ts":
/*!***********************************************!*\
  !*** ./src/app/reducers/scrolling.reducer.ts ***!
  \***********************************************/
/*! exports provided: scrollingFeatureKey, initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollingFeatureKey", function() { return scrollingFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_scrolling_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/scrolling.actions */ "./src/app/actions/scrolling.actions.ts");


const scrollingFeatureKey = 'scrolling';
const initialState = {
    elementOnScreen: 'plankit',
    elementSticky: false,
    scrollTo: null,
};
function reducer(state = initialState, action) {
    switch (action.type) {
        case _actions_scrolling_actions__WEBPACK_IMPORTED_MODULE_1__["ScrollingActionTypes"].ElementOnScreen:
            return Object.assign({}, state, action.payload);
        case _actions_scrolling_actions__WEBPACK_IMPORTED_MODULE_1__["ScrollingActionTypes"].ScrollTo:
            return Object.assign({}, state, action.payload);
        case _actions_scrolling_actions__WEBPACK_IMPORTED_MODULE_1__["ScrollingActionTypes"].ElementSticky:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/reducers/user.reducer.ts":
/*!******************************************!*\
  !*** ./src/app/reducers/user.reducer.ts ***!
  \******************************************/
/*! exports provided: userFeatureKey, initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userFeatureKey", function() { return userFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interfaces */ "./src/app/interfaces.ts");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/user.actions */ "./src/app/actions/user.actions.ts");



const userFeatureKey = 'user';
const initialState = {
    user: new _interfaces__WEBPACK_IMPORTED_MODULE_1__["User"](null, 'Guest', 'guest')
};
function reducer(state = initialState, action) {
    // console.log('screen reducer');
    switch (action.type) {
        // fires and then effect fires on same action to fetch data
        // here is only for set loading to true (e. g. to show spinner)
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["UserActionTypes"].getUser:
            return Object.assign({}, state, { user: Object.assign({}, state.user, { loading: true }) });
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["UserActionTypes"].authenticated:
            return Object.assign({}, state, { user: Object.assign({}, action.payload.user, { loading: false }) });
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["UserActionTypes"].notAuthenticated:
            return Object.assign({}, state, { user: Object.assign({}, initialState.user, { loading: false }) });
        // case UserActionTypes.googleLogin:
        //   return { ...state, user: { ...state.user, loading: true } };
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["UserActionTypes"].authError:
            return Object.assign({}, state, { user: Object.assign({}, action.payload.user, { loading: false }) });
        // case UserActionTypes.logout:
        //   return { ...state, user: { ...state.user, loading: true } };
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/services/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");





let AuthGuard = class AuthGuard {
    constructor(userService) {
        this.userService = userService;
    }
    canActivate(next, state) {
        const requiredRoleForAuthorization = next.data.auth; // from routing.module
        return this.userService.userCheckAuthorization(requiredRoleForAuthorization)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((permission) => permission), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false)));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/services/catalog.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/catalog.service.ts ***!
  \*********************************************/
/*! exports provided: CatalogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogService", function() { return CatalogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CatalogService = class CatalogService {
    constructor(http) {
        this.http = http;
    }
    getChildren(id) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.get('api/catalog/get-children/' + id, httpOptions);
    }
    getScrollableChildren(id) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.get('api/catalog/get-scrollable-children/' + id, httpOptions);
    }
    /**
     * Get all siblings of category(_id)
     * ???included current category
     *
     */
    getAllSiblingsOfCurrentCategory(id) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('id', id)
        };
        return this.http.get('api/catalog/get-all-siblings-of-current-category', httpOptions);
    }
};
CatalogService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CatalogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CatalogService);



/***/ }),

/***/ "./src/app/services/http-interceptor.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/http-interceptor.service.ts ***!
  \******************************************************/
/*! exports provided: HttpInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInterceptorService", function() { return HttpInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/user.actions */ "./src/app/actions/user.actions.ts");






let HttpInterceptorService = class HttpInterceptorService {
    constructor(store) {
        this.store = store;
    }
    intercept(req, next) {
        // to modify request
        // req = req.clone();
        // return next.handle(req);
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                // fire action to check user auth
                this.store.dispatch(new _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["GetUser"]());
                // to modify response
                // event = event.clone({ body: this.modifyBody(event.body) });
            }
            return event;
        }));
    }
    modifyBody(body) {
        /*
        * write your logic to modify the body
        * */
        return body;
    }
};
HttpInterceptorService.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
];
HttpInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpInterceptorService);



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ProductService = class ProductService {
    constructor(http) {
        this.http = http;
    }
    getProduct(id) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.get('api/product/get-product/' + id, httpOptions);
    }
    getProducts() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.get('api/product/get-products/', httpOptions);
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductService);



/***/ }),

/***/ "./src/app/services/shared.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/shared.service.ts ***!
  \********************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interfaces */ "./src/app/interfaces.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let SharedService = class SharedService {
    constructor(http, media) {
        this.http = http;
        this.media = media;
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"];
        this.cloudinaryUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].cloudinary.cloudHost + '/' + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].cloudinary.cloudName;
    }
    checkPictureFile(file) {
        console.log('file.type', file.type);
        if (!file) {
            return ({ err: 'Файл не вибрано' });
        }
        else if (file.size > 26215000) { // 25 * 1024 * 1024
            return ({ err: 'Розмір файлу повинен бути менше 25Мб' });
        }
        else if (file.type !== 'image/jpg' &&
            file.type !== 'image/jpe' &&
            file.type !== 'image/gif' &&
            file.type !== 'image/jpeg' &&
            file.type !== 'image/bmp' &&
            file.type !== 'image/png' &&
            file.type !== 'image/svg+xml' &&
            file.type !== 'image/webp') {
            return ({ err: 'Виберіть інший тип файлу' });
        }
        else {
            return ({ err: null });
        }
    }
    uploadPicture(file, filePrefix, eager) {
        const formData = new FormData();
        formData.append('file', file, file.name);
        formData.append('filePrefix', filePrefix);
        formData.append('eager', JSON.stringify(eager));
        return this.http.post('api/shared/upload-picture', formData);
    }
    createPictureOptions(productPictureSize, screenType) {
        // tslint:disable-next-line: max-line-length
        return `c_fill,w_${productPictureSize[screenType].w},h_${productPictureSize[screenType].h},f_auto/w_${(productPictureSize[screenType].w) * 0.5},g_south_east,x_5,y_5,l_hmade_logo_light_watermark`;
    }
    createPictureLink(pictureType, screenType) {
        switch (pictureType) {
            case _interfaces__WEBPACK_IMPORTED_MODULE_3__["PictureTypes"].ProductPicture: {
                return this.cloudinaryUrl + '/' +
                    this.createPictureOptions(this.environment.cloudinary.pictureSize[_interfaces__WEBPACK_IMPORTED_MODULE_3__["PictureTypes"].ProductPicture], screenType);
            }
            case _interfaces__WEBPACK_IMPORTED_MODULE_3__["PictureTypes"].DashboardProductPicture: {
                return this.cloudinaryUrl + '/' +
                    this.createPictureOptions(this.environment.cloudinary.pictureSize[_interfaces__WEBPACK_IMPORTED_MODULE_3__["PictureTypes"].DashboardProductPicture], screenType);
            }
            case _interfaces__WEBPACK_IMPORTED_MODULE_3__["PictureTypes"].ModalProductPicture: {
                return this.cloudinaryUrl + '/' +
                    this.createPictureOptions(this.environment.cloudinary.pictureSize[_interfaces__WEBPACK_IMPORTED_MODULE_3__["PictureTypes"].ModalProductPicture], screenType);
            }
            default: {
                return this.cloudinaryUrl;
            }
        }
    }
    loadScreens() {
        return this.media.asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((_) => {
            const screenState = {};
            screenState.pictureLink = {};
            // link to cloudinary pictures depend on screen size
            for (const pictureType in _interfaces__WEBPACK_IMPORTED_MODULE_3__["PictureTypes"]) {
                if (_interfaces__WEBPACK_IMPORTED_MODULE_3__["PictureTypes"].hasOwnProperty(pictureType)) { //  && !isNaN(Number(pictureType))) {
                    screenState.pictureLink[pictureType] = {};
                    if (this.media.isActive(_interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].xs)) {
                        const { w, h } = this.environment.cloudinary.pictureSize[pictureType][_interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].xs];
                        screenState.pictureLink[pictureType].size = { w, h };
                        screenState.pictureLink[pictureType].link = this.createPictureLink(pictureType, _interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].xs);
                    }
                    else if (this.media.isActive(_interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].sm)) {
                        const { w, h } = this.environment.cloudinary.pictureSize[pictureType][_interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].sm];
                        screenState.pictureLink[pictureType].size = { w, h };
                        screenState.pictureLink[pictureType].link = this.createPictureLink(pictureType, _interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].sm);
                    }
                    else if (this.media.isActive(_interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].md)) {
                        const { w, h } = this.environment.cloudinary.pictureSize[pictureType][_interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].md];
                        screenState.pictureLink[pictureType].size = { w, h };
                        screenState.pictureLink[pictureType].link = this.createPictureLink(pictureType, _interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].md);
                    }
                    else if (this.media.isActive(_interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].lg)) {
                        const { w, h } = this.environment.cloudinary.pictureSize[pictureType][_interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].lg];
                        screenState.pictureLink[pictureType].size = { w, h };
                        screenState.pictureLink[pictureType].link = this.createPictureLink(pictureType, _interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].lg);
                    }
                    else {
                        const { w, h } = this.environment.cloudinary.pictureSize[pictureType][_interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].xl];
                        screenState.pictureLink[pictureType].size = { w, h };
                        screenState.pictureLink[pictureType].link = this.createPictureLink(pictureType, _interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].xl);
                    }
                }
            }
            // portion of pictures to load depend on screen size
            if (this.media.isActive(_interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].xs)) {
                screenState.picturesOnPage = this.environment.defaults.picturesOnPage[_interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].xs];
                screenState.screenSize = _interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].xs;
            }
            else if (this.media.isActive(_interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].sm)) {
                screenState.picturesOnPage = this.environment.defaults.picturesOnPage[_interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].sm];
                screenState.screenSize = _interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].sm;
            }
            else if (this.media.isActive(_interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].md)) {
                screenState.picturesOnPage = this.environment.defaults.picturesOnPage[_interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].md];
                screenState.screenSize = _interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].md;
            }
            else if (this.media.isActive(_interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].lg)) {
                screenState.picturesOnPage = this.environment.defaults.picturesOnPage[_interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].lg];
                screenState.screenSize = _interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].lg;
            }
            else {
                screenState.picturesOnPage = this.environment.defaults.picturesOnPage[_interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].xl];
                screenState.screenSize = _interfaces__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"].xl;
            }
            return screenState;
        }));
    }
    sendFeedbackMessage(feedback, recaptcha) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({
                fromObject: {
                    recaptcha
                }
            })
        };
        return this.http.post('api/shared/send-feedback-message', feedback, httpOptions);
    }
};
SharedService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["MediaObserver"] }
];
SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SharedService);



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");








let UserService = class UserService {
    constructor(http, cookieService, store) {
        this.http = http;
        this.cookieService = cookieService;
        this.store = store;
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"];
        this.store.select('auth')
            .subscribe(storeState => this.user = storeState.user);
    }
    getUser() {
        const cookie = this.cookieService.get('es');
        if (cookie) {
            const helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
            const user = helper.decodeToken(cookie).sub;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(user);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
    }
    logout() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.get('api/user/logout', httpOptions);
    }
    /** Session
     * Used for router guard (canActivate)
     *
     */
    userCheckAuthorization(requiredRoleForAuthentication) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]({ fromString: `role=${requiredRoleForAuthentication}` })
        };
        return this.http.get('api/user/checkAuthorization', httpOptions);
    }
    /**
     * Helper for frontend authorization
     * Check user permittion for some restricted actions
     * like menu displaying..
     *
     */
    allowTo(permitedRole) {
        const permissions = this.environment.permissions;
        if (!this.user._id && permitedRole === 'notUser') {
            return true;
        }
        if (!this.user._id) {
            return false;
        }
        const roleFromCookie = this.user.role;
        if (permissions[roleFromCookie].indexOf(permitedRole) >= 0) {
            return true;
        }
        else {
            return false;
        }
    }
    restrictTo(restrictedRoles) {
        if (!this.user) {
            return true;
        }
        const roleFromCookie = this.user.role;
        if (restrictedRoles.indexOf(roleFromCookie) >= 0) {
            return false;
        }
        else {
            return true;
        }
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    host: 'https://localhost:8083',
    // recaptchaSiteKey: '6Le5XoUUAAAAACCWkV0muQG0SFc75G_7udZzbqs1',
    cloudinary: {
        cloudName: 'hd1oejweg',
        cloudHost: 'https://res.cloudinary.com',
        pictureSize: {
            ProductPicture: {
                xs: {
                    w: 590,
                    h: 443
                },
                sm: {
                    w: 460,
                    h: 345
                },
                md: {
                    w: 300,
                    h: 225
                },
                lg: {
                    w: 360,
                    h: 270
                },
                xl: {
                    w: 360,
                    h: 270
                }
            },
            DashboardProductPicture: {
                xs: {
                    w: 590,
                    h: 443
                },
                sm: {
                    w: 460,
                    h: 345
                },
                md: {
                    w: 300,
                    h: 225
                },
                lg: {
                    w: 360,
                    h: 270
                },
                xl: {
                    w: 360,
                    h: 270
                }
            },
            ModalProductPicture: {
                xs: {
                    w: 590,
                    h: 443
                },
                sm: {
                    w: 760,
                    h: 570
                },
                md: {
                    w: 760,
                    h: 570
                },
                lg: {
                    w: 1100,
                    h: 825
                },
                xl: {
                    w: 1100,
                    h: 825
                }
            }
        }
    },
    defaults: {
        productPicture: 'default_product',
        userPicture: 'default_avatar',
        picturesOnPage: {
            xs: 2,
            sm: 6,
            md: 9,
            lg: 12,
            xl: 15
        }
    },
    permissions: {
        admin: ['casual', 'guest', 'user', 'manager', 'admin', 'google', 'facebook'],
        manager: ['casual', 'guest', 'user', 'manager', 'google', 'facebook'],
        user: ['casual', 'guest', 'user', 'google', 'facebook'],
        google: ['casual', 'guest', 'user', 'google'],
        facebook: ['casual', 'guest', 'user', 'facebook'],
        guest: ['casual', 'guest'],
        casual: ['casual']
    },
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\it\vs\eshop\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map