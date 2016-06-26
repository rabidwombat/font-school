System.register(['@angular/router-deprecated', '@angular/core', './font.service', './font'], function(exports_1, context_1) {
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
    var router_deprecated_1, core_1, font_service_1, font_1;
    var FontDetailComponent;
    return {
        setters:[
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (font_service_1_1) {
                font_service_1 = font_service_1_1;
            },
            function (font_1_1) {
                font_1 = font_1_1;
            }],
        execute: function() {
            FontDetailComponent = (function () {
                function FontDetailComponent(fontService, routeParams) {
                    this.fontService = fontService;
                    this.routeParams = routeParams;
                    this.displayText = 'Lazy brown fox and dumb ? 653';
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', font_1.Font)
                ], FontDetailComponent.prototype, "font", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], FontDetailComponent.prototype, "displayText", void 0);
                FontDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'font-detail',
                        templateUrl: 'app/font-detail.html'
                    }), 
                    __metadata('design:paramtypes', [font_service_1.FontService, router_deprecated_1.RouteParams])
                ], FontDetailComponent);
                return FontDetailComponent;
            }());
            exports_1("FontDetailComponent", FontDetailComponent);
        }
    }
});
//# sourceMappingURL=font-detail.component.js.map