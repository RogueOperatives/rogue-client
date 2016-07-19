import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {AgentOverviewComponent} from './components/agents/overview';
import {RogueHeaderComponent} from './components/header/header';
import {RogueSidebarComponent} from './components/sidebar/sidebar';


@Component({
    selector: 'rogue-app',
    templateUrl: 'app/app.html',
    directives: [ROUTER_DIRECTIVES, RogueHeaderComponent, RogueSidebarComponent],
    precompile: [AgentOverviewComponent]
})
export class RogueAppComponent implements OnInit {

    constructor() { }

    ngOnInit() { 

    }

}