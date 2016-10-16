import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <app-header>loading header...</app-header>
        <app-aside>loading aside...</app-aside>
        <app-content>loading content...</app-content>
        <app-footer>loading footer...</app-footer>
  `,
    styleUrls: ['app-demo/app.component.css'],

})
export class AppComponent {
    title = 'Tour of Heroes';
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */