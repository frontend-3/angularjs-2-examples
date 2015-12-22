System.register([], function(exports_1) {
    var Hero;
    return {
        setters:[],
        execute: function() {
            Hero = (function () {
                function Hero(id, name, power, alterEgo, age) {
                    this.id = id;
                    this.name = name;
                    this.power = power;
                    this.alterEgo = alterEgo;
                    this.age = age;
                }
                return Hero;
            })();
            exports_1("Hero", Hero);
        }
    }
});
//# sourceMappingURL=hero.js.map