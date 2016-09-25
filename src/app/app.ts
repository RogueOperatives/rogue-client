import { Component, OnInit } from '@angular/core';

import {AgentOverviewComponent} from './components/agents/overview';

import {AgentService} from './services/AgentService';


@Component({
    selector: 'rogue-app',
    templateUrl: 'app/app.html'
})
export class RogueAppComponent implements OnInit {

    constructor() { }

    ngOnInit() { 

    }

}