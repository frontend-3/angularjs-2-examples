System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var KeyUpComponent_v1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            KeyUpComponent_v1 = (function () {
                function KeyUpComponent_v1() {
                    this.values = '';
                }
                // without strong typing
                KeyUpComponent_v1.prototype.onKey = function (event) {
                    this.values += event.target.value + ' | ';
                };
                KeyUpComponent_v1 = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <input (keyup)=\"onKey($event)\">\n    <p>{{values}}</p>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], KeyUpComponent_v1);
                return KeyUpComponent_v1;
            })();
            exports_1("KeyUpComponent_v1", KeyUpComponent_v1);
        }
    }
});
//# sourceMappingURL=keyup.component.js.map