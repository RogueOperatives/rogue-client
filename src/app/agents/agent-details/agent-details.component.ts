import { Component, OnInit, Input } from '@angular/core';

import { Agent } from '../models/agent';

@Component({
  selector: 'app-agent-details',
  templateUrl: './agent-details.component.html',
  styleUrls: ['./agent-details.component.css']
})
export class AgentDetailsComponent implements OnInit {

  constructor() { }

  private agent: Agent;

  @Input()
  public set Agent(agent: Agent) {
    this.agent = agent;
  }

  public get Agent(): Agent {
    return this.agent;
  }

  ngOnInit() { }

}
