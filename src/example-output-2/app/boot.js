System.register(['angular2/platform/browser', 'angular2/core', 'angular2/src/facade/async'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1, async_1;
    var IntervalDir, App;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (async_1_1) {
                async_1 = async_1_1;
            }],
        execute: function() {
            IntervalDir = (function () {
                function IntervalDir() {
                    var _this = this;
                    this.everySecond = new core_1.EventEmitter();
                    this.five5Secs = new core_1.EventEmitter();
                    setInterval(function () { return async_1.ObservableWrapper.callEmit(_this.everySecond, null); }, 1000);
                    setInterval(function () { return async_1.ObservableWrapper.callEmit(_this.five5Secs, null); }, 5000);
                }
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], IntervalDir.prototype, "everySecond", void 0);
                __decorate([
                    core_1.Output('everyFiveSeconds'), 
                    __metadata('design:type', Object)
                ], IntervalDir.prototype, "five5Secs", void 0);
                IntervalDir = __decorate([
                    core_1.Directive({
                        selector: 'interval-dir',
                    }), 
                    __metadata('design:paramtypes', [])
                ], IntervalDir);
                return IntervalDir;
            })();
            App = (function () {
                function App() {
                }
                App.prototype.everySecond = function () { console.log('second'); };
                App.prototype.everyFiveSeconds = function () { console.log('five seconds'); };
                App = __decorate([
                    core_1.Component({
                        selector: 'app',
                        template: "\n    <interval-dir (everySecond)=\"everySecond()\" (everyFiveSeconds)=\"everyFiveSeconds()\">\n    </interval-dir>\n  ",
                        directives: [IntervalDir]
                    }), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            })();
            browser_1.bootstrap(App);
        }
    }
});
//# sourceMappingURL=boot.js.map