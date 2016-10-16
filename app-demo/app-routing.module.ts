import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AppContent1} from "./modal/app.content1";
import {AppContent} from "./base-template/app.content";
import {AppContent2} from "./modal/app.content2";

const routes:Routes = [
    {path: '', redirectTo: '/app', pathMatch: 'full'},
    {
        path: 'app', component: AppContent,
        children: [
            {path: "content1", component: AppContent1},
            {path: 'content2', component: AppContent2}
        ]
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */