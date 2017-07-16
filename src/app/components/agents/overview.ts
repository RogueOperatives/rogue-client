import { Component, OnInit } from '@angular/core';

import {Agent} from '../../models/agent';
import {AgentService} from '../../services/agentService';

@Component({
    templateUrl: 'app/components/agents/overview.html',
    providers: [AgentService]
})
export class AgentOverviewComponent implements OnInit {
    private agents: Agent[];

    public get Agents() : Agent[] {
        return this.agents;
    }
    
    constructor(private agentService: AgentService) {

    }

    ngOnInit() { 
        this.agentService
            .getAll()
            .subscribe(
                (agents) => this.agents = agents
            );
    }

}