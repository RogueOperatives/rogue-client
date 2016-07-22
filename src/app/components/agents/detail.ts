import { Component, OnInit, Input } from '@angular/core';

import {Agent} from '../../models/agent';

@Component({
    selector: 'agentDetails',
    templateUrl: 'app/components/agents/detail.html'
})
export class AgentDetailComponent implements OnInit {
    constructor() { }

    private agent: Agent;

    @Input()
    public set Agent(agent: Agent) {
        this.agent = agent;
    }

    public get Agent() : Agent {
        return this.agent;
    }

    ngOnInit() { }

}