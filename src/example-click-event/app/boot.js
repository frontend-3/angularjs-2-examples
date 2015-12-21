System.register(['angular2/platform/browser', './click-me.component'], function(exports_1) {
    var browser_1, click_me_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (click_me_component_1_1) {
                click_me_component_1 = click_me_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(click_me_component_1.ClickMeComponent);
        }
    }
});
//# sourceMappingURL=boot.js.map