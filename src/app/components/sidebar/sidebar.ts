import {Component} from '@angular/core';

@Component({
    selector: 'rogue-sidebar',
    templateUrl: 'app/components/sidebar/sidebar.html'
})
export class RogueSidebarComponent {
    public expanded: boolean = true;

    toggleSidebar(): void {
        this.expanded = !this.expanded;
    }
}
