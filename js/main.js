/**
 * Created by wjf on 4/14/16.
 */
System.register(["@angular/platform-browser-dynamic", "./app.route.config", "@angular/core", "@angular/router-deprecated", "@angular/common"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, app_route_config_1, core_1, router_deprecated_1, common_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_route_config_1_1) {
                app_route_config_1 = app_route_config_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(app_route_config_1.AppRouteConfig, [
                router_deprecated_1.ROUTER_PROVIDERS,
                core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy }),
            ]);
        }
    }
});
//# sourceMappingURL=main.js.map