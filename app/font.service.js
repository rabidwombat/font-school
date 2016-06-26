System.register(['@angular/core', '@angular/http', 'rxjs/add/operator/toPromise'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var FontService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            FontService = (function () {
                function FontService(http) {
                    this.http = http;
                    this.fontsUrl = 'app/fonts';
                }
                FontService.prototype.getFonts = function () {
                    var _this = this;
                    return this.http.get(this.fontsUrl)
                        .toPromise()
                        .then(function (response) { return _this.processList(response.json().data); })
                        .catch(this.handleError);
                };
                FontService.prototype.processList = function (fontList) {
                    fontTest.setup();
                    for (var _i = 0, fontList_1 = fontList; _i < fontList_1.length; _i++) {
                        var font = fontList_1[_i];
                        font.available = fontTest.isInstalled(font.name);
                    }
                    return fontList;
                };
                FontService.prototype.getFont = function (name) {
                    return this.getFonts()
                        .then(function (fonts) { return fonts.filter(function (font) { return font.name === name; })[0]; });
                };
                FontService.prototype.handleError = function (error) {
                    return Promise.reject(error.message || error);
                };
                FontService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], FontService);
                return FontService;
            }());
            exports_1("FontService", FontService);
        }
    }
});
//# sourceMappingURL=font.service.js.map