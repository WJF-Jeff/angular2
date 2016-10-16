import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {AppAside} from "./base-template/app.aside";
import {AppContent} from "./base-template/app.content";
import {AppHeader} from "./base-template/app.header";
import {AppFooter} from "./base-template/app.footer";
import {AppComponent} from "./app.component";
import {AppContent2} from "./modal/app.content2";
import {AppContent1} from "./modal/app.content1";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        AppAside,
        AppContent,
        AppHeader,
        AppFooter,
        AppContent1,
        AppContent2
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */