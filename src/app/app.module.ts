import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { AgentOverviewComponent } from './agents/agent-overview/agent-overview.component';
import { AgentDetailsComponent } from './agents/agent-details/agent-details.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const appRoutes: Routes = [
  {
    path: 'agents',
    component: AgentOverviewComponent
  },
  {
    path: '',
    redirectTo: '/agents',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    AgentOverviewComponent,
    AgentDetailsComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
