import { provideRouter, RouterConfig } from '@angular/router';
import {AgentOverviewComponent} from './components/agents/overview'

// Route config let's you map routes to components
const routes: RouterConfig = [
  // map '/persons' to the people list component
  {
    path: 'agents',
    component: AgentOverviewComponent,
  },
  // map '/' to '/persons' as our default route
  {
    path: '',
    redirectTo: '/agents',
    pathMatch: 'full'
  },
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
