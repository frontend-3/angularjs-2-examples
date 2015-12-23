System.register(['angular2/platform/browser', 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1, core_2, core_3;
    var Zippy;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
                core_3 = core_1_1;
            }],
        execute: function() {
            Zippy = (function () {
                function Zippy() {
                    this.visible = true;
                    this.open = new core_3.EventEmitter();
                    this.close = new core_3.EventEmitter();
                }
                Zippy.prototype.toggle = function () {
                    this.visible = !this.visible;
                    if (this.visible) {
                        this.open.emit();
                    }
                    else {
                        this.close.emit();
                    }
                };
                Zippy.prototype.open = function () {
                    console.log('Fire open event');
                };
                __decorate([
                    core_2.Output(), 
                    __metadata('design:type', Object)
                ], Zippy.prototype, "open", void 0);
                __decorate([
                    core_2.Output(), 
                    __metadata('design:type', Object)
                ], Zippy.prototype, "close", void 0);
                Zippy = __decorate([
                    core_1.Component({
                        selector: 'zippy',
                        template: "\n  <div class=\"zippy\">\n    <div (click)=\"toggle()\" (open)=\"open()\">Toggle</div>\n    <div [hidden]=\"!visible\">\n      <p>Visible</p>\n      <ng-content></ng-content>\n    </div>\n </div>" }), 
                    __metadata('design:paramtypes', [])
                ], Zippy);
                return Zippy;
            })();
            exports_1("Zippy", Zippy);
            browser_1.bootstrap(Zippy);
        }
    }
});
//# sourceMappingURL=boot.js.map