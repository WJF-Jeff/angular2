/**
 * Created by wjf on 4/14/16.
 */
System.register(["@angular/core", "./blocks/app.aside", "./blocks/app.content", "./blocks/app.footer", "./blocks/app.header", "./hero/dashboard.component", "./hero/heroes.component", "./hero/hero-detail.component", "@angular/router-deprecated"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, app_aside_1, app_content_1, app_footer_1, app_header_1, dashboard_component_1, heroes_component_1, hero_detail_component_1, router_deprecated_1;
    var AppRouteConfig;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_aside_1_1) {
                app_aside_1 = app_aside_1_1;
            },
            function (app_content_1_1) {
                app_content_1 = app_content_1_1;
            },
            function (app_footer_1_1) {
                app_footer_1 = app_footer_1_1;
            },
            function (app_header_1_1) {
                app_header_1 = app_header_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (heroes_component_1_1) {
                heroes_component_1 = heroes_component_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            }],
        execute: function() {
            let AppRouteConfig = class AppRouteConfig {
            };
            AppRouteConfig = __decorate([
                core_1.Component({
                    selector: 'my-app',
                    template: `
        <app-header>loading header...</app-header>
        <app-aside>loading aside...</app-aside>
        <app-content>loading content...</app-content>
        <app-footer>loading footer...</app-footer>
    `,
                    directives: [app_header_1.AppHeader, app_aside_1.AppAside, app_content_1.AppContent, app_footer_1.AppFooter]
                }),
                router_deprecated_1.RouteConfig([
                    {
                        path: '/dashboard',
                        name: 'Dashboard',
                        component: dashboard_component_1.DashboardComponent,
                        useAsDefault: true
                    },
                    {
                        path: '/detail/:id',
                        name: 'HeroDetail',
                        component: hero_detail_component_1.HeroDetailComponent
                    },
                    {
                        path: '/heroes',
                        name: 'Heroes',
                        component: heroes_component_1.HeroesComponent
                    }
                ]), 
                __metadata('design:paramtypes', [])
            ], AppRouteConfig);
            exports_1("AppRouteConfig", AppRouteConfig);
        }
    }
});
//# sourceMappingURL=app.route.config.js.map