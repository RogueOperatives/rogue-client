import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {CloseSidebarOnClickDirective} from '../../directives/closeSidebarOnClickDirective';

@Component({
    selector: 'rogue-sidebar',
    directives: [ROUTER_DIRECTIVES, CloseSidebarOnClickDirective],
    templateUrl: 'app/components/sidebar/sidebar.html'
})
export class RogueSidebarComponent {
    public expanded: boolean = true;

    toggleSidebar(): void {
        this.expanded = !this.expanded;
    }
}
