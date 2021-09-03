(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\User\Programs\Angular\country-info\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");




class AppComponent {
    constructor() {
        this.title = 'country-info';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "WUr/":
/*!*********************************************************!*\
  !*** ./src/app/components/country/country.component.ts ***!
  \*********************************************************/
/*! exports provided: CountryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryComponent", function() { return CountryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_models_country__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/country */ "pgfe");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");






class CountryComponent {
    constructor(router) {
        this.router = router;
        this.country = new src_app_models_country__WEBPACK_IMPORTED_MODULE_1__["Country"]();
    }
    ngOnInit() {
    }
    handleClick() {
        this.router.navigate(['details', this.country.alpha3Code.toLocaleLowerCase()]);
    }
}
CountryComponent.ɵfac = function CountryComponent_Factory(t) { return new (t || CountryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CountryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CountryComponent, selectors: [["country"]], inputs: { country: "country" }, decls: 22, vars: 8, consts: [[1, "country-card", 3, "click"], [1, "country-image", 3, "src", "alt"], [1, "country-info"], [1, "country-name", "mat-title"], [1, "country-brief"]], template: function CountryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryComponent_Template_mat_card_click_0_listener() { return ctx.handleClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "dl", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Population:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Region:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Capital:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.country.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.country.flag, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.country.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 6, ctx.country.population));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.country.region);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.country.capital);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]], styles: [".country-card[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 16px;\n  padding: 0;\n}\n\n.country-image[_ngcontent-%COMP%] {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  height: 160px;\n  width: 100%;\n}\n\n.country-info[_ngcontent-%COMP%] {\n  padding: 15px 20px 20px;\n}\n\n.country-name[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 800;\n}\n\n.country-brief[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-top: 10px;\n  line-height: 24px;\n}\n\n.country-brief[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-weight: 600;\n}\n\n.country-brief[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-weight: 300;\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb3VudHJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBQUk7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0FBRVI7O0FBQUk7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFFUiIsImZpbGUiOiJjb3VudHJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvdW50cnktY2FyZCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uY291bnRyeS1pbWFnZSB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgaGVpZ2h0OiAxNjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY291bnRyeS1pbmZvIHtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweCAyMHB4O1xyXG59XHJcblxyXG4uY291bnRyeS1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5jb3VudHJ5LWJyaWVmIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIGR0IHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICAgIGRkIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'country',
                templateUrl: './country.component.html',
                styleUrls: ['./country.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { country: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['country']
        }] }); })();


/***/ }),

/***/ "Xpb8":
/*!*********************************************!*\
  !*** ./src/app/services/country.service.ts ***!
  \*********************************************/
/*! exports provided: CountryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryService", function() { return CountryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _models_country__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/country */ "pgfe");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");





class CountryService {
    constructor(http) {
        this.http = http;
        this.completeListUrl = 'https://restcountries.eu/rest/v2/all';
        this.codeUrl = 'https://restcountries.eu/rest/v2/alpha/';
        this.regionUrl = 'https://restcountries.eu/rest/v2/region/';
        this.dataStore = {
            countries: new Array(),
            countryDetails: new _models_country__WEBPACK_IMPORTED_MODULE_2__["Country"](),
            filteredCountries: new Array(),
            filteredCountriesBackup: new Array(),
            regions: new Array()
        };
        this._countries = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new Array());
        this.countries$ = this._countries.asObservable();
        this._countryDetails = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new _models_country__WEBPACK_IMPORTED_MODULE_2__["Country"]());
        this.countryDetails$ = this._countryDetails.asObservable();
        this._filteredCountries = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new Array());
        this.filteredCountries$ = this._filteredCountries.asObservable();
        this._regions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new Array());
        this.regions$ = this._regions.asObservable();
    }
    getCountryList() {
        this.getCountries(this.completeListUrl);
    }
    getCountryByCode(code) {
        this.http.get(this.codeUrl + code, { responseType: 'json' }).subscribe((response) => {
            if (response !== undefined && response !== null) {
                let country = new _models_country__WEBPACK_IMPORTED_MODULE_2__["Country"]();
                country = response;
                this.dataStore.countryDetails = country;
                this._countryDetails.next(Object.assign({}, this.dataStore).countryDetails);
            }
        }, error => {
            console.log('error retrieving countries');
            console.log(error);
        });
    }
    getCountryByRegion(region) {
        this.getCountries(this.regionUrl + region);
    }
    restoreFilteredCountries() {
        if (this.dataStore.filteredCountriesBackup.length > 0) {
            this.dataStore.filteredCountries = this.dataStore.filteredCountriesBackup;
            this._filteredCountries.next(Object.assign({}, this.dataStore).filteredCountries);
            this.dataStore.filteredCountriesBackup = new Array();
        }
    }
    updateFilteredCountries(countries, filterMode) {
        if (filterMode && this.dataStore.filteredCountriesBackup.length == 0) {
            if (this.dataStore.filteredCountries.length == 0) {
                this.dataStore.filteredCountriesBackup = countries;
            }
            else {
                this.dataStore.filteredCountriesBackup = this.dataStore.filteredCountries;
            }
        }
        this.dataStore.filteredCountries = countries;
        if (!filterMode) {
            this.processRegions();
        }
        this._filteredCountries.next(Object.assign({}, this.dataStore).filteredCountries);
    }
    getCountries(url) {
        this.http.get(url, { responseType: 'json' }).subscribe((response) => {
            if (response !== undefined && response !== null) {
                let countries = new Array();
                countries = response;
                this.dataStore.countries = countries;
                this.dataStore.filteredCountries = countries;
                this.processRegions();
                this._countries.next(Object.assign({}, this.dataStore).countries);
                this._filteredCountries.next(Object.assign({}, this.dataStore).filteredCountries);
            }
        }, error => {
            console.log('error retrieving countries');
            console.log(error);
        });
    }
    processRegions() {
        let countries = this.dataStore.filteredCountries;
        this.dataStore.regions = new Array();
        this.dataStore.regions.push('');
        for (let country of countries) {
            if (!this.dataStore.regions.includes(country.region)) {
                this.dataStore.regions.push(country.region);
            }
        }
        this._regions.next(Object.assign({}, this.dataStore).regions);
    }
}
CountryService.ɵfac = function CountryService_Factory(t) { return new (t || CountryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
CountryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CountryService, factory: CountryService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Y2SJ":
/*!*************************************************************************!*\
  !*** ./src/app/components/country-details/country-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: CountryDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryDetailsComponent", function() { return CountryDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_models_country__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/country */ "pgfe");
/* harmony import */ var src_app_services_country_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/country.service */ "Xpb8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");









function CountryDetailsComponent_ng_container_59_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryDetailsComponent_ng_container_59_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const borderCountry_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.handleClick(borderCountry_r4.alpha3Code); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const borderCountry_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](borderCountry_r4.name);
} }
function CountryDetailsComponent_ng_container_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CountryDetailsComponent_ng_container_59_button_1_Template, 2, 1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.borderCountries);
} }
function CountryDetailsComponent_ng_template_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CountryDetailsComponent {
    constructor(countryService, route, router) {
        this.countryService = countryService;
        this.route = route;
        this.router = router;
        this.borderCountries = new Array();
        this.currencies = '';
        this.countries = new Array();
        this.countryDetails = new src_app_models_country__WEBPACK_IMPORTED_MODULE_2__["Country"]();
        this.countrySubscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.countryDetailsSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.id = '';
        this.languages = '';
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.id = params['code'];
        });
        this.countryDetailsSubscription = this.countryService.countryDetails$.subscribe(results => {
            if (results !== undefined && results !== null) {
                this.countryDetails = results;
                this.currencies = this.processCurrencies();
                this.languages = this.processLanguages();
                this.countrySubscription = this.countryService.countries$.subscribe(results => {
                    if (results !== undefined && results !== null) {
                        this.countries = results;
                        this.borderCountries = this.countries.filter(country => this.countryDetails.borders.includes(country.alpha3Code));
                    }
                }, error => {
                    console.log('error retrieving countries');
                });
            }
        }, error => {
            console.log('error retrieving countries');
        });
        this.countryService.getCountryByCode(this.id);
    }
    handleBack() {
        this.router.navigate(['/']);
    }
    handleClick(code) {
        this.countryService.getCountryByCode(code);
    }
    processCurrencies() {
        let currencies = this.countryDetails.currencies;
        let currencyString = '';
        for (let i = 0; i < currencies.length; i++) {
            currencyString += currencies[i].name;
            if (i < currencies.length - 1)
                currencyString += ', ';
        }
        return currencyString;
    }
    processLanguages() {
        let languages = this.countryDetails.languages;
        let languagesString = '';
        for (let i = 0; i < languages.length; i++) {
            languagesString += languages[i].name;
            if (i < languages.length - 1)
                languagesString += ', ';
        }
        return languagesString;
    }
    ngOnDestroy() {
        if (this.countryDetailsSubscription) {
            this.countryDetailsSubscription.unsubscribe();
        }
    }
}
CountryDetailsComponent.ɵfac = function CountryDetailsComponent_Factory(t) { return new (t || CountryDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_country_service__WEBPACK_IMPORTED_MODULE_3__["CountryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
CountryDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CountryDetailsComponent, selectors: [["country-details"]], decls: 62, vars: 15, consts: [[1, "country-details-container"], ["mat-raised-button", "", 1, "back-button", 3, "click"], ["fontSet", "material-icons-outlined"], [1, "row"], [1, "col-xs-12", "col-sm-6", "country-image-container"], [1, "country-details-image", 3, "src", "alt"], [1, "col-xs-12", "col-sm-6", "country-details"], [1, "country-name", "mat-title"], [1, "country-details-data"], [1, "col-xs-12", "col-sm-6"], [1, "row", "border-countries"], [1, "mat-label"], [4, "ngIf", "ngIfElse"], ["noBorderCountries", ""], ["mat-raised-button", "", "class", "border-country-button", 3, "click", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 1, "border-country-button", 3, "click"], [1, "no-border-countries"]], template: function CountryDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryDetailsComponent_Template_button_click_1_listener() { return ctx.handleBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "dl", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Native Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Population:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Region:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Sub Region:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Capital:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Top Level Domain:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Currencies:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Languages:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Border Countries:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, CountryDetailsComponent_ng_container_59_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, CountryDetailsComponent_ng_template_60_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.countryDetails.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.countryDetails.flag, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.countryDetails.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.countryDetails.nativeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 13, ctx.countryDetails.population));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.countryDetails.region);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.countryDetails.subregion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.countryDetails.capital);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.countryDetails.topLevelDomain);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currencies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.languages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.borderCountries.length > 0)("ngIfElse", _r1);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: [".back-button[_ngcontent-%COMP%] {\n  margin-bottom: 70px;\n  margin-left: 5px;\n  padding: 3px 35px;\n}\n@media (max-width: 511px) {\n  .back-button[_ngcontent-%COMP%] {\n    margin-bottom: 50px;\n  }\n}\n.border-countries[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n@media (max-width: 511px) {\n  .border-countries[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n}\n.border-country-button[_ngcontent-%COMP%] {\n  line-height: 24px;\n  padding: 2px 24px;\n  margin-right: 10px;\n  margin-top: 10px;\n}\n.country-details[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 35px 0;\n}\n@media (max-width: 511px) {\n  .country-details[_ngcontent-%COMP%] {\n    padding: 30px 0 0 10px;\n  }\n}\n.country-details[_ngcontent-%COMP%]   .mat-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-right: 10px;\n  margin-top: 10px;\n  padding-top: 7px;\n}\n@media (max-width: 511px) {\n  .country-details[_ngcontent-%COMP%]   .mat-label[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.country-details[_ngcontent-%COMP%]   .no-border-countries[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding-top: 7px;\n}\n.country-details-container[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n  box-shadow: inset 0 11px 15px -3px rgba(0, 0, 0, 0.12);\n  padding: 75px;\n}\n.dark-theme[_nghost-%COMP%]   .country-details-container[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .country-details-container[_ngcontent-%COMP%] {\n  background-color: #202c37;\n}\n@media (max-width: 511px) {\n  .country-details-container[_ngcontent-%COMP%] {\n    padding: 30px 20px;\n  }\n}\n.country-details-data[_ngcontent-%COMP%] {\n  line-height: 32px;\n  margin-top: 24px;\n}\n.country-details-data[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%], .country-details-data[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.country-details-data[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.country-details-data[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  font-weight: 300;\n  margin-left: 5px;\n}\n.country-details-data[_ngcontent-%COMP%]   .col-xs-12[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n@media (max-width: 511px) {\n  .country-details-data[_ngcontent-%COMP%]   .col-xs-12[_ngcontent-%COMP%]:nth-child(2) {\n    margin-top: 20px;\n  }\n}\n.country-details-image[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  max-height: 390px;\n  max-width: 550px;\n  width: 100%;\n}\n@media (max-width: 511px) {\n  .country-details-image[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n}\n.country-name.mat-title[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 800;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb3VudHJ5LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBREo7QUFFSTtFQUpKO0lBS1EsbUJBQUE7RUFDTjtBQUNGO0FBRUE7RUFDSSxnQkFBQTtBQUNKO0FBQUk7RUFGSjtJQUdRLGdCQUFBO0VBR047QUFDRjtBQUFBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFHSjtBQUFBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFHSjtBQUZJO0VBSEo7SUFJUSxzQkFBQTtFQUtOO0FBQ0Y7QUFKSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBTVI7QUFMUTtFQUxKO0lBTVEsV0FBQTtFQVFWO0FBQ0Y7QUFOSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFRUjtBQUpBO0VBQ0kseUJDL0NlO0VEZ0RmLHNEQUFBO0VBQ0EsYUFBQTtBQU9KO0FBTkk7RUFDSSx5QkM5Q1U7QURzRGxCO0FBTkk7RUFQSjtJQVFRLGtCQUFBO0VBU047QUFDRjtBQU5BO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQVNKO0FBUkk7O0VBRUkscUJBQUE7QUFVUjtBQVJJO0VBQ0ksZ0JBQUE7QUFVUjtBQVJJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQVVSO0FBUkk7RUFDSSxlQUFBO0FBVVI7QUFUUTtFQUNJO0lBQ0ksZ0JBQUE7RUFXZDtBQUNGO0FBTkE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBU0o7QUFSSTtFQUxKO0lBTVEsYUFBQTtFQVdOO0FBQ0Y7QUFSQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQVdKIiwiZmlsZSI6ImNvdW50cnktZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3Njc3MvdmFyaWFibGVzJztcclxuXHJcbi5iYWNrLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIHBhZGRpbmc6IDNweCAzNXB4O1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDUxMXB4KSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmJvcmRlci1jb3VudHJpZXMge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MTFweCkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ib3JkZXItY291bnRyeS1idXR0b24ge1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBwYWRkaW5nOiAycHggMjRweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5jb3VudHJ5LWRldGFpbHMge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZzogMzVweCAwO1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDUxMXB4KSB7XHJcbiAgICAgICAgcGFkZGluZzogMzBweCAwIDAgMTBweDtcclxuICAgIH1cclxuICAgIC5tYXQtbGFiZWwge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDdweDtcclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTExcHgpIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm5vLWJvcmRlci1jb3VudHJpZXMge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDdweDtcclxuICAgIH1cclxufVxyXG5cclxuLmNvdW50cnktZGV0YWlscy1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWJhY2tncm91bmQ7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDExcHggMTVweCAtM3B4IHJnYigwIDAgMCAvIDEyJSk7XHJcbiAgICBwYWRkaW5nOiA3NXB4O1xyXG4gICAgOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgJiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmstYmFja2dyb3VuZDtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MTFweCkge1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHggMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmNvdW50cnktZGV0YWlscy1kYXRhIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjRweDtcclxuICAgIGR0LFxyXG4gICAgZGQge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuICAgIGR0IHtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gICAgZGQge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIH1cclxuICAgIC5jb2wteHMtMTIge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTExcHgpIHtcclxuICAgICAgICAgICAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNvdW50cnktZGV0YWlscy1pbWFnZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWF4LWhlaWdodDogMzkwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDU1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTExcHgpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY291bnRyeS1uYW1lLm1hdC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG59XHJcbiIsIiRsaWdodC1iYWNrZ3JvdW5kOiBoc2woMCwgMCUsIDk4JSk7IC8vI0ZBRkFGQVxyXG4kbGlnaHQtZWxlbWVudHM6IHdoaXRlO1xyXG4kbGlnaHQtaW5wdXQ6IGhzbCgwLCAwJSwgNTIlKTsgLy8jODU4NTg1XHJcbiRsaWdodC10ZXh0OiBoc2woMjAwLCAxNSUsIDglKTsgLy8jMTExNTE3XHJcblxyXG4kZGFyay1iYWNrZ3JvdW5kOiBoc2woMjA3LCAyNiUsIDE3JSk7XHJcbiRkYXJrLWVsZW1lbnRzOiBoc2woMjA5LCAyMyUsIDIyJSk7IC8vIzJCMzc0M1xyXG4kZGFyay1pbnB1dDogaHNsKDIxMCwgMzYlLCAyMiUpOyAvLyMyQjM3NDNcclxuJGRhcmstdGV4dDogd2hpdGU7XHJcblxyXG4kZm9udC1mYW1pbHk6ICdOdW5pdG8gU2FucycsIHNhbnMtc2VyaWY7Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountryDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'country-details',
                templateUrl: './country-details.component.html',
                styleUrls: ['./country-details.component.scss']
            }]
    }], function () { return [{ type: src_app_services_country_service__WEBPACK_IMPORTED_MODULE_3__["CountryService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/autocomplete */ "vrAh");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_country_list_country_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/country-list/country-list.component */ "cUG7");
/* harmony import */ var _components_country_country_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/country/country.component */ "WUr/");
/* harmony import */ var _components_country_details_country_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/country-details/country-details.component */ "Y2SJ");
/* harmony import */ var _components_country_search_country_search_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/country-search/country-search.component */ "mex3");
/* harmony import */ var _components_country_filter_country_filter_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/country-filter/country-filter.component */ "etWA");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/country.service */ "Xpb8");






















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_country_service__WEBPACK_IMPORTED_MODULE_20__["CountryService"]], imports: [[
            _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__["NavbarComponent"],
        _components_country_list_country_list_component__WEBPACK_IMPORTED_MODULE_15__["CountryListComponent"],
        _components_country_country_component__WEBPACK_IMPORTED_MODULE_16__["CountryComponent"],
        _components_country_details_country_details_component__WEBPACK_IMPORTED_MODULE_17__["CountryDetailsComponent"],
        _components_country_search_country_search_component__WEBPACK_IMPORTED_MODULE_18__["CountrySearchComponent"],
        _components_country_filter_country_filter_component__WEBPACK_IMPORTED_MODULE_19__["CountryFilterComponent"]], imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__["NavbarComponent"],
                    _components_country_list_country_list_component__WEBPACK_IMPORTED_MODULE_15__["CountryListComponent"],
                    _components_country_country_component__WEBPACK_IMPORTED_MODULE_16__["CountryComponent"],
                    _components_country_details_country_details_component__WEBPACK_IMPORTED_MODULE_17__["CountryDetailsComponent"],
                    _components_country_search_country_search_component__WEBPACK_IMPORTED_MODULE_18__["CountrySearchComponent"],
                    _components_country_filter_country_filter_component__WEBPACK_IMPORTED_MODULE_19__["CountryFilterComponent"]
                ],
                imports: [
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
                ],
                providers: [_services_country_service__WEBPACK_IMPORTED_MODULE_20__["CountryService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cUG7":
/*!*******************************************************************!*\
  !*** ./src/app/components/country-list/country-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: CountryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryListComponent", function() { return CountryListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_services_country_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/country.service */ "Xpb8");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _country_search_country_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../country-search/country-search.component */ "mex3");
/* harmony import */ var _country_filter_country_filter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../country-filter/country-filter.component */ "etWA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _country_country_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../country/country.component */ "WUr/");









function CountryListComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "country", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("country", country_r1);
} }
class CountryListComponent {
    constructor(countryService) {
        this.countryService = countryService;
        this.countries = new Array();
        this.countrySubscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
    }
    ngOnInit() {
        this.countrySubscription = this.countryService.filteredCountries$.subscribe(results => {
            if (results !== undefined && results !== null) {
                this.countries = results;
            }
        }, error => {
            console.log('error retrieving countries');
        });
        this.countryService.getCountryList();
    }
    ngOnDestroy() {
        if (this.countrySubscription) {
            this.countrySubscription.unsubscribe();
        }
    }
}
CountryListComponent.ɵfac = function CountryListComponent_Factory(t) { return new (t || CountryListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_country_service__WEBPACK_IMPORTED_MODULE_2__["CountryService"])); };
CountryListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CountryListComponent, selectors: [["country-list"]], decls: 6, vars: 1, consts: [[1, "country-list-container"], [1, "row"], [1, "country-search-container", "col-xs-12", "col-sm-4"], [1, "country-filter-container", "col-xs-12", "col-sm-8"], [1, "country-list", "row"], ["class", "country col-xs-12 col-sm-3", 4, "ngFor", "ngForOf"], [1, "country", "col-xs-12", "col-sm-3"], [3, "country"]], template: function CountryListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "country-search", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "country-filter", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CountryListComponent_li_5_Template, 2, 1, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countries);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _country_search_country_search_component__WEBPACK_IMPORTED_MODULE_4__["CountrySearchComponent"], _country_filter_country_filter_component__WEBPACK_IMPORTED_MODULE_5__["CountryFilterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _country_country_component__WEBPACK_IMPORTED_MODULE_7__["CountryComponent"]], styles: [".country[_ngcontent-%COMP%] {\n  padding: 37px;\n}\n\n.country-filter-container[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  display: flex;\n  padding-right: 37px;\n}\n\n@media (max-width: 511px) {\n  .country-filter-container[_ngcontent-%COMP%] {\n    justify-content: flex-start !important;\n    padding-left: 20px;\n    padding-right: 0 !important;\n  }\n}\n\n.country-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n\n.country-list-container[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n  box-shadow: inset 0 11px 15px -3px rgba(0, 0, 0, 0.12);\n  padding: 43px;\n}\n\n.dark-theme[_nghost-%COMP%]   .country-list-container[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .country-list-container[_ngcontent-%COMP%] {\n  background-color: #202c37;\n}\n\n@media (max-width: 511px) {\n  .country-list-container[_ngcontent-%COMP%] {\n    padding: 20px 0;\n  }\n}\n\n.country-search-container[_ngcontent-%COMP%] {\n  padding-left: 37px;\n}\n\n@media (max-width: 511px) {\n  .country-search-container[_ngcontent-%COMP%] {\n    padding: 0 20px 10px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb3VudHJ5LWxpc3QuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtBQURGOztBQUlBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFFRTtFQUpGO0lBS0ksc0NBQUE7SUFDQSxrQkFBQTtJQUNBLDJCQUFBO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UseUJDdkJpQjtFRHdCakIsc0RBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBQUU7RUFDRSx5QkN0QmM7QUR3QmxCOztBQUFFO0VBUEY7SUFRTSxlQUFBO0VBR0o7QUFDRjs7QUFBQTtFQUNFLGtCQUFBO0FBR0Y7O0FBRkU7RUFGRjtJQUdJLCtCQUFBO0VBS0Y7QUFDRiIsImZpbGUiOiJjb3VudHJ5LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9zY3NzL3ZhcmlhYmxlcyc7XHJcblxyXG4uY291bnRyeSB7XHJcbiAgcGFkZGluZzogMzdweDtcclxufVxyXG5cclxuLmNvdW50cnktZmlsdGVyLWNvbnRhaW5lciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDM3cHg7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDUxMXB4KSB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5jb3VudHJ5LWxpc3Qge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmNvdW50cnktbGlzdC1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1iYWNrZ3JvdW5kO1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMTFweCAxNXB4IC0zcHggcmdiKDAgMCAwIC8gMTIlKTtcclxuICBwYWRkaW5nOiA0M3B4O1xyXG4gIDpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpICYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmstYmFja2dyb3VuZDtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDUxMXB4KSB7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHggMCA7XHJcbiAgfVxyXG59XHJcblxyXG4uY291bnRyeS1zZWFyY2gtY29udGFpbmVyIHtcclxuICBwYWRkaW5nLWxlZnQ6IDM3cHg7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDUxMXB4KSB7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHggMTBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCIkbGlnaHQtYmFja2dyb3VuZDogaHNsKDAsIDAlLCA5OCUpOyAvLyNGQUZBRkFcclxuJGxpZ2h0LWVsZW1lbnRzOiB3aGl0ZTtcclxuJGxpZ2h0LWlucHV0OiBoc2woMCwgMCUsIDUyJSk7IC8vIzg1ODU4NVxyXG4kbGlnaHQtdGV4dDogaHNsKDIwMCwgMTUlLCA4JSk7IC8vIzExMTUxN1xyXG5cclxuJGRhcmstYmFja2dyb3VuZDogaHNsKDIwNywgMjYlLCAxNyUpO1xyXG4kZGFyay1lbGVtZW50czogaHNsKDIwOSwgMjMlLCAyMiUpOyAvLyMyQjM3NDNcclxuJGRhcmstaW5wdXQ6IGhzbCgyMTAsIDM2JSwgMjIlKTsgLy8jMkIzNzQzXHJcbiRkYXJrLXRleHQ6IHdoaXRlO1xyXG5cclxuJGZvbnQtZmFtaWx5OiAnTnVuaXRvIFNhbnMnLCBzYW5zLXNlcmlmOyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountryListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'country-list',
                templateUrl: './country-list.component.html',
                styleUrls: ['./country-list.component.scss']
            }]
    }], function () { return [{ type: src_app_services_country_service__WEBPACK_IMPORTED_MODULE_2__["CountryService"] }]; }, null); })();


/***/ }),

/***/ "etWA":
/*!***********************************************************************!*\
  !*** ./src/app/components/country-filter/country-filter.component.ts ***!
  \***********************************************************************/
/*! exports provided: CountryFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryFilterComponent", function() { return CountryFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_services_country_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/country.service */ "Xpb8");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "UhP/");









function CountryFilterComponent_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const region_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", region_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", region_r1, " ");
} }
class CountryFilterComponent {
    constructor(countryService) {
        this.countryService = countryService;
        this.filteredCountries = new Array();
        this.filteredCountrySubscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.regions = new Array();
        this.regionSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.selectedRegion = '';
    }
    ngOnInit() {
        this.filteredCountrySubscription = this.countryService.filteredCountries$.subscribe(results => {
            if (results !== undefined && results !== null) {
                this.filteredCountries = results;
            }
        }, error => {
            console.log('error retrieving countries');
        });
        this.regionSubscription = this.countryService.regions$.subscribe(results => {
            if (results !== undefined && results !== null) {
                this.regions = results.sort();
            }
        }, error => {
            console.log('error retrieving regions');
        });
    }
    handleSelectionChange(selectedRegion) {
        this.countryService.restoreFilteredCountries();
        if (selectedRegion !== '') {
            let results = this.filteredCountries.filter(country => country.region.toLowerCase().includes(selectedRegion.toLowerCase()));
            this.countryService.updateFilteredCountries(results, true);
        }
    }
    ngOnDestroy() {
        if (this.filteredCountrySubscription) {
            this.filteredCountrySubscription.unsubscribe();
        }
        if (this.regionSubscription) {
            this.regionSubscription.unsubscribe();
        }
    }
}
CountryFilterComponent.ɵfac = function CountryFilterComponent_Factory(t) { return new (t || CountryFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_country_service__WEBPACK_IMPORTED_MODULE_2__["CountryService"])); };
CountryFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CountryFilterComponent, selectors: [["country-filter"]], decls: 5, vars: 2, consts: [["appearance", "outline", 1, "country-filter"], ["disableOptionCentering", "true", "placeholder", "Filter by Region", 3, "ngModel", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function CountryFilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CountryFilterComponent_Template_mat_select_ngModelChange_1_listener($event) { return ctx.selectedRegion = $event; })("selectionChange", function CountryFilterComponent_Template_mat_select_selectionChange_1_listener() { return ctx.handleSelectionChange(ctx.selectedRegion); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-select-trigger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Filter by Region");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CountryFilterComponent_mat_option_4_Template, 2, 2, "mat-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedRegion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.regions);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectTrigger"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3VudHJ5LWZpbHRlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountryFilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'country-filter',
                templateUrl: './country-filter.component.html',
                styleUrls: ['./country-filter.component.scss']
            }]
    }], function () { return [{ type: src_app_services_country_service__WEBPACK_IMPORTED_MODULE_2__["CountryService"] }]; }, null); })();


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");





function NavbarComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.toggleTheme(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "dark_mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Dark Mode ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.toggleTheme(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "dark_mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Light Mode ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavbarComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.darkTheme = false;
    }
    ngOnInit() {
    }
    toggleTheme() {
        if (!this.darkTheme) {
            this.darkTheme = true;
            this.renderer.addClass(document.body, 'dark-theme');
        }
        else {
            this.darkTheme = false;
            this.renderer.removeClass(document.body, 'dark-theme');
        }
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["navbar"]], decls: 7, vars: 2, consts: [[1, "row"], [1, "col-xs-8", "col-sm-6", "nav-title"], [1, "mat-headline"], [1, "col-xs-4", "col-sm-6", "nav-mode-switch"], ["mat-button", "", 3, "click", 4, "ngIf"], ["mat-button", "", 3, "click"], ["fontSet", "material-icons-outlined"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Where in the world?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NavbarComponent_button_5_Template, 4, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavbarComponent_button_6_Template, 4, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.darkTheme);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.darkTheme);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: [".nav-mode-switch[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding-right: 80px;\n}\n@media (max-width: 511px) {\n  .nav-mode-switch[_ngcontent-%COMP%] {\n    padding-right: 0;\n  }\n}\n.nav-mode-switch[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%] {\n  font-weight: 600;\n  padding-right: 0;\n}\n@media (max-width: 511px) {\n  .nav-mode-switch[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%] {\n    margin-right: 20px;\n    padding-left: 0;\n  }\n}\n.nav-title[_ngcontent-%COMP%] {\n  padding: 22px 80px;\n}\n@media (max-width: 511px) {\n  .nav-title[_ngcontent-%COMP%] {\n    padding: 22px 0 22px 20px;\n  }\n  .nav-title[_ngcontent-%COMP%]   .mat-headline[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\nh1.mat-headline[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 800;\n  font-family: \"Nunito Sans\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQUk7RUFKSjtJQUtRLGdCQUFBO0VBR047QUFDRjtBQUZJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQUlSO0FBSFE7RUFISjtJQUlRLGtCQUFBO0lBQ0EsZUFBQTtFQU1WO0FBQ0Y7QUFGQTtFQUNJLGtCQUFBO0FBS0o7QUFKSTtFQUZKO0lBR1EseUJBQUE7RUFPTjtFQU5NO0lBQ0ksZUFBQTtFQVFWO0FBQ0Y7QUFKQTtFQUNJLFNBQUE7RUFDQSxnQkFBQTtFQUNBLHNDQUFBO0FBT0oiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1tb2RlLXN3aXRjaCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDgwcHg7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTExcHgpIHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgLm1hdC1idXR0b24ge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTExcHgpIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ubmF2LXRpdGxlIHtcclxuICAgIHBhZGRpbmc6IDIycHggODBweDtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MTFweCkge1xyXG4gICAgICAgIHBhZGRpbmc6IDIycHggMCAyMnB4IDIwcHg7XHJcbiAgICAgICAgLm1hdC1oZWFkbGluZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaDEubWF0LWhlYWRsaW5lIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LWZhbWlseTogJ051bml0byBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, null); })();


/***/ }),

/***/ "mex3":
/*!***********************************************************************!*\
  !*** ./src/app/components/country-search/country-search.component.ts ***!
  \***********************************************************************/
/*! exports provided: CountrySearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountrySearchComponent", function() { return CountrySearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services_country_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/country.service */ "Xpb8");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/autocomplete */ "vrAh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "UhP/");













function CountrySearchComponent_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", country_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", country_r2.name, " ");
} }
class CountrySearchComponent {
    constructor(countryService) {
        this.countryService = countryService;
        this.countries = new Array();
        this.countrySubscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.filteredCountries$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]();
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
    }
    ngOnInit() {
        this.countrySubscription = this.countryService.countries$.subscribe(results => {
            if (results !== undefined && results !== null) {
                this.countries = results;
            }
        }, error => {
            console.log('error retrieving countries');
        });
        this.countryService.getCountryList();
        this.filteredCountries$ = this.searchControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => this._filter(value)));
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        let results = this.countries.filter(country => country.name.toLowerCase().includes(filterValue));
        this.countryService.updateFilteredCountries(results, false);
        return results;
    }
    ngOnDestroy() {
        if (this.countrySubscription) {
            this.countrySubscription.unsubscribe();
        }
    }
}
CountrySearchComponent.ɵfac = function CountrySearchComponent_Factory(t) { return new (t || CountrySearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_country_service__WEBPACK_IMPORTED_MODULE_4__["CountryService"])); };
CountrySearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CountrySearchComponent, selectors: [["country-search"]], decls: 8, vars: 5, consts: [["appearance", "outline", 1, "country-search"], ["matPrefix", ""], ["type", "text", "placeholder", "Search for a country...", "aria-label", "Search for a country...", "matInput", "", 3, "formControl", "matAutocomplete"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function CountrySearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-autocomplete", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CountrySearchComponent_mat_option_6_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.searchControl)("matAutocomplete", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 3, ctx.filteredCountries$));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatPrefix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], styles: [".country-search[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.dark-theme[_ngcontent-%COMP%]   .country-search[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb3VudHJ5LXNlYXJjaC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFBO0FBREo7QUFFSTtFQUNJLFlDR0k7QURIWiIsImZpbGUiOiJjb3VudHJ5LXNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3Njc3MvdmFyaWFibGVzJztcclxuXHJcbi5jb3VudHJ5LXNlYXJjaCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC5kYXJrLXRoZW1lICYge1xyXG4gICAgICAgIGNvbG9yOiAkZGFyay10ZXh0O1xyXG4gICAgfVxyXG59IiwiJGxpZ2h0LWJhY2tncm91bmQ6IGhzbCgwLCAwJSwgOTglKTsgLy8jRkFGQUZBXHJcbiRsaWdodC1lbGVtZW50czogd2hpdGU7XHJcbiRsaWdodC1pbnB1dDogaHNsKDAsIDAlLCA1MiUpOyAvLyM4NTg1ODVcclxuJGxpZ2h0LXRleHQ6IGhzbCgyMDAsIDE1JSwgOCUpOyAvLyMxMTE1MTdcclxuXHJcbiRkYXJrLWJhY2tncm91bmQ6IGhzbCgyMDcsIDI2JSwgMTclKTtcclxuJGRhcmstZWxlbWVudHM6IGhzbCgyMDksIDIzJSwgMjIlKTsgLy8jMkIzNzQzXHJcbiRkYXJrLWlucHV0OiBoc2woMjEwLCAzNiUsIDIyJSk7IC8vIzJCMzc0M1xyXG4kZGFyay10ZXh0OiB3aGl0ZTtcclxuXHJcbiRmb250LWZhbWlseTogJ051bml0byBTYW5zJywgc2Fucy1zZXJpZjsiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountrySearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'country-search',
                templateUrl: './country-search.component.html',
                styleUrls: ['./country-search.component.scss']
            }]
    }], function () { return [{ type: src_app_services_country_service__WEBPACK_IMPORTED_MODULE_4__["CountryService"] }]; }, null); })();


/***/ }),

/***/ "pgfe":
/*!***********************************!*\
  !*** ./src/app/models/country.ts ***!
  \***********************************/
/*! exports provided: Country */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Country", function() { return Country; });
class Country {
    constructor() {
        this.alpha3Code = '';
        this.borders = new Array();
        this.capital = '';
        this.currencies = new Array();
        this.flag = '';
        this.languages = new Array();
        this.name = '';
        this.nativeName = '';
        this.population = 0;
        this.region = '';
        this.subregion = '';
        this.topLevelDomain = new Array();
    }
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _components_country_details_country_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/country-details/country-details.component */ "Y2SJ");
/* harmony import */ var _components_country_list_country_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/country-list/country-list.component */ "cUG7");






const routes = [
    { path: 'details', children: [
            { path: ':code', component: _components_country_details_country_details_component__WEBPACK_IMPORTED_MODULE_2__["CountryDetailsComponent"] }
        ] },
    { path: '', component: _components_country_list_country_list_component__WEBPACK_IMPORTED_MODULE_3__["CountryListComponent"] },
    { path: '**', redirectTo: '/', pathMatch: 'full' }
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

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map