System.register(['angular2/core', './power.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, power_service_1;
    var HeroComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (power_service_1_1) {
                power_service_1 = power_service_1_1;
            }],
        execute: function() {
            HeroComponent = (function () {
                function HeroComponent(powerService) {
                    this.powers = powerService.getPowers();
                    this.id = 1;
                    this.name = 'Hero1';
                }
                HeroComponent = __decorate([
                    core_1.Component({
                        selector: 'hero',
                        providers: [power_service_1.PowerService],
                        template: "\n    <h1>{{name}}</h1>\n    <p>Powers:</p>\n    <ul>\n      <li *ngFor=\"#power of powers\">\n        {{ power.name }}\n        </li>\n    </ul>\n  "
                    }), 
                    __metadata('design:paramtypes', [power_service_1.PowerService])
                ], HeroComponent);
                return HeroComponent;
            })();
            exports_1("HeroComponent", HeroComponent);
        }
    }
});
//# sourceMappingURL=hero.component.js.map