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
    var KeyUpComponent_v3;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            KeyUpComponent_v3 = (function () {
                function KeyUpComponent_v3() {
                    this.text = '';
                }
                KeyUpComponent_v3 = __decorate([
                    core_1.Component({
                        selector: 'key-up3',
                        template: "\n    <input #box (keyup.enter)=\"text=box.value\">\n    <p>{{text}}</p>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], KeyUpComponent_v3);
                return KeyUpComponent_v3;
            })();
            exports_1("KeyUpComponent_v3", KeyUpComponent_v3);
        }
    }
});
//# sourceMappingURL=keyup.component.js.map