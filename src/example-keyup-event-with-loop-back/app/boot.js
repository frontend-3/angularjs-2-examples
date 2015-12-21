System.register(['angular2/platform/browser', './loop-back.component'], function(exports_1) {
    var browser_1, loop_back_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (loop_back_component_1_1) {
                loop_back_component_1 = loop_back_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(loop_back_component_1.LoopBackComponent);
        }
    }
});
//# sourceMappingURL=boot.js.map