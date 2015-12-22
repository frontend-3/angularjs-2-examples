System.register(['angular2/platform/browser', './keyup.component'], function(exports_1) {
    var browser_1, keyup_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (keyup_component_1_1) {
                keyup_component_1 = keyup_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(keyup_component_1.KeyUpComponent_v2);
        }
    }
});
//# sourceMappingURL=boot.js.map