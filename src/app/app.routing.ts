import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentOverviewComponent } from './components/agents/overview';

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

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
