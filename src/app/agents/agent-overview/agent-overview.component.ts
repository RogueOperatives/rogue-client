import { Component, OnInit } from '@angular/core';

import {Agent} from '../models/agent';
import {AgentService} from '../services/agent.service';

@Component({
  selector: 'app-agent-overview',
  templateUrl: './agent-overview.component.html',
  styleUrls: ['./agent-overview.component.css'],
  providers: [AgentService]
})
export class AgentOverviewComponent implements OnInit {

  private agents: Agent[];

  public get Agents(): Agent[] {
    return this.agents;
  }

  constructor(private agentService: AgentService) {

  }

  ngOnInit() {
    // this.agentService.getAll().then((agents) => this.agents = agents);
    let mockAgents: Agent[] = [{FirstName: "John", LastName: "McClane"}];
    this.agents = mockAgents;
  }

}
