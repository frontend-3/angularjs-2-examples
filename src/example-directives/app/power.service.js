System.register(['angular2/core', './power'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, power_1;
    var PowerService, POWERS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (power_1_1) {
                power_1 = power_1_1;
            }],
        execute: function() {
            PowerService = (function () {
                function PowerService() {
                }
                PowerService.prototype.getPowers = function () {
                    return POWERS;
                };
                PowerService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], PowerService);
                return PowerService;
            })();
            exports_1("PowerService", PowerService);
            POWERS = [
                new power_1.Power(1, 'Poder 1'),
                new power_1.Power(2, 'Poder 2')
            ];
        }
    }
});
//# sourceMappingURL=power.service.js.map