import { Component, OnInit } from '@angular/core';

import {Agent} from '../../models/agent';
import {AgentService} from '../../services/agentService';

import {AgentDetailComponent} from './detail';

@Component({
    templateUrl: 'app/components/agents/overview.html',
    providers: [AgentService],
    directives: [AgentDetailComponent]
})
export class AgentOverviewComponent implements OnInit {
    private agents: Agent[];

    public get Agents() : Agent[] {
        return this.agents;
    }
    
    constructor(private agentService: AgentService) {

    }

    ngOnInit() { 
        this.agents = this.agentService.getAll();
    }

}