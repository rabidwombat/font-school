System.register(['@angular/core', '@angular/router-deprecated', './font.service', './fonts.component', './font-detail.component'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, font_service_1, fonts_component_1, font_detail_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (font_service_1_1) {
                font_service_1 = font_service_1_1;
            },
            function (fonts_component_1_1) {
                fonts_component_1 = fonts_component_1_1;
            },
            function (font_detail_component_1_1) {
                font_detail_component_1 = font_detail_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Weird font site';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES],
                        providers: [router_deprecated_1.ROUTER_PROVIDERS, font_service_1.FontService],
                        selector: 'my-app',
                        templateUrl: 'app/main.html'
                    }),
                    router_deprecated_1.RouteConfig([
                        {
                            path: '/fonts',
                            name: 'Fonts',
                            component: fonts_component_1.FontsComponent
                        },
                        {
                            path: '/detail/:id',
                            name: 'FontDetail',
                            component: font_detail_component_1.FontDetailComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map