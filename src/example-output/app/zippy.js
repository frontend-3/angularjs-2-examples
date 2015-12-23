System.register(['angular2/core', 'angular2/src/facade/async'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, async_1;
    var Zippy;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (async_1_1) {
                async_1 = async_1_1;
            }],
        execute: function() {
            Zippy = (function () {
                function Zippy() {
                    this.visible = true;
                    this.title = '';
                    this.open = new core_1.EventEmitter();
                    this.close = new core_1.EventEmitter();
                }
                Zippy.prototype.toggle = function () {
                    this.visible = !this.visible;
                    if (this.visible) {
                        async_1.ObservableWrapper.callEmit(this.open, null);
                    }
                    else {
                        async_1.ObservableWrapper.callEmit(this.close, null);
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Zippy.prototype, "title", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], Zippy.prototype, "open", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], Zippy.prototype, "close", void 0);
                Zippy = __decorate([
                    core_1.Component({ selector: 'zippy', templateUrl: 'app/zippy.html' }), 
                    __metadata('design:paramtypes', [])
                ], Zippy);
                return Zippy;
            })();
            exports_1("Zippy", Zippy);
        }
    }
});
//# sourceMappingURL=zippy.js.map