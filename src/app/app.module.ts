import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { routing } from './app.routing';

import { RogueAppComponent }   from './app';
import { AgentOverviewComponent } from './components/agents/overview';
import { AgentDetailComponent } from './components/agents/detail';
import { RogueHeaderComponent } from './components/header/header';
import { RogueSidebarComponent } from './components/sidebar/sidebar';

import {BackButtonDirective} from './directives/backButtonDirective';
import {CloseSidebarOnClickDirective} from './directives/closeSidebarOnClickDirective';

@NgModule({
  imports: [
        BrowserModule,
        HttpModule,
        routing
    ],
  declarations: [
        RogueAppComponent,
        RogueHeaderComponent,
        RogueSidebarComponent,
        AgentOverviewComponent,
        AgentDetailComponent,
        BackButtonDirective,
        CloseSidebarOnClickDirective
    ],
  bootstrap:    [ RogueAppComponent ]
})
export class RogueAppModule { }
