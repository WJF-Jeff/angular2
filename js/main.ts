/**
 * Created by wjf on 4/14/16.
 */

import {bootstrap} from "@angular/platform-browser-dynamic";
import {AppRouteConfig} from "./app.route.config";
import {provide} from "@angular/core";
import {ROUTER_PROVIDERS} from "@angular/router-deprecated";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";


bootstrap(AppRouteConfig, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy}),    // .../#/crisis-center/
    // provide(APP_BASE_HREF, {useValue: '/'})
]);
