import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router-deprecated";
import {Hero} from "./hero";
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroService} from "./hero.service";

@Component({
    selector: 'my-heroes',
    templateUrl: 'tpl/heroes.component.html',
    styleUrls: ['css/heroes.component.css'],
    directives: [HeroDetailComponent],
    providers: [
        HeroService
    ]
})
export class HeroesComponent implements OnInit {
    heroes:Hero[];
    selectedHero:Hero;

    constructor(private _router:Router,
                private _heroService:HeroService) {
    }

    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero:Hero) {
        this.selectedHero = hero;
    }

    gotoDetail() {
        this._router.navigate(['HeroDetail', {id: this.selectedHero.id}]);
    }
}

/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */