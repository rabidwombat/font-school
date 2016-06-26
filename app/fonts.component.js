System.register(['@angular/core', '@angular/router-deprecated', './font.service', './font-detail.component', './font'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, font_service_1, font_detail_component_1, font_1;
    var FontsComponent;
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
            function (font_detail_component_1_1) {
                font_detail_component_1 = font_detail_component_1_1;
            },
            function (font_1_1) {
                font_1 = font_1_1;
            }],
        execute: function() {
            FontsComponent = (function () {
                function FontsComponent(fontService, router) {
                    this.fontService = fontService;
                    this.router = router;
                    this.maxDisplayedFonts = 3;
                    this.selectedFonts = [];
                    this.displayedFonts = [];
                }
                FontsComponent.prototype.getFonts = function () {
                    var _this = this;
                    this.fontService.getFonts().then(function (fonts) { return _this.fonts = _this.orderFontsByName(_this.checkAvailability(fonts)); });
                };
                FontsComponent.prototype.ngOnInit = function () {
                    this.getFonts();
                };
                FontsComponent.prototype.orderFontsByName = function (fonts) {
                    return fonts.sort(function (f1, f2) {
                        if (f1.name > f2.name)
                            return 1;
                        if (f1.name < f2.name)
                            return -1;
                        return 0;
                    });
                };
                FontsComponent.prototype.checkAvailability = function (fonts) {
                    return fonts.filter(function (font) { return font.available; });
                };
                FontsComponent.prototype.onSelect = function (font) {
                    if (this.selectedFonts[font.name]) {
                        this.unselectFont(font.name);
                        this.hideFont(font.name);
                    }
                    else {
                        this.selectFont(font.name);
                        this.displayFont(font.name);
                    }
                };
                FontsComponent.prototype.selectFont = function (fontName) {
                    this.selectedFonts[fontName] = true;
                };
                FontsComponent.prototype.unselectFont = function (fontName) {
                    this.selectedFonts[fontName] = false;
                };
                FontsComponent.prototype.displayFont = function (fontName) {
                    if (this.displayedFonts.length == this.maxDisplayedFonts) {
                        console.log('too many selected!');
                        this.unselectFont(this.displayedFonts.shift());
                    }
                    this.displayedFonts.push(fontName);
                };
                FontsComponent.prototype.hideFont = function (fontName) {
                    var i = this.displayedFonts.indexOf(fontName);
                    if (i != -1)
                        this.displayedFonts.splice(i, 1);
                };
                FontsComponent.prototype.findFontByName = function (fontName) {
                    for (var _i = 0, _a = this.fonts; _i < _a.length; _i++) {
                        var font = _a[_i];
                        if (font.name == fontName) {
                            return font;
                        }
                    }
                    return new font_1.Font();
                };
                FontsComponent = __decorate([
                    core_1.Component({
                        directives: [font_detail_component_1.FontDetailComponent],
                        selector: 'my-fonts',
                        templateUrl: 'app/fonts.html'
                    }), 
                    __metadata('design:paramtypes', [font_service_1.FontService, router_deprecated_1.Router])
                ], FontsComponent);
                return FontsComponent;
            }());
            exports_1("FontsComponent", FontsComponent);
        }
    }
});
//# sourceMappingURL=fonts.component.js.map