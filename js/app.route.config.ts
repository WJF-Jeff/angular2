/**
 * Created by wjf on 4/14/16.
 */

import {Component} from "@angular/core";
import {AppAside} from "./blocks/app.aside";
import {AppContent} from "./blocks/app.content";
import {AppFooter} from "./blocks/app.footer";
import {AppHeader} from "./blocks/app.header";
import {DashboardComponent} from "./hero/dashboard.component";
import {HeroesComponent} from "./hero/heroes.component";
import {HeroDetailComponent} from "./hero/hero-detail.component";
import {RouteConfig} from "@angular/router-deprecated";


@Component({
    selector: 'my-app',
    template: `
        <app-header>loading header...</app-header>
        <app-aside>loading aside...</app-aside>
        <app-content>loading content...</app-content>
        <app-footer>loading footer...</app-footer>
    `,
    directives: [AppHeader, AppAside, AppContent, AppFooter]
})

@RouteConfig([
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/detail/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    },
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    }
])

export class AppRouteConfig {
}