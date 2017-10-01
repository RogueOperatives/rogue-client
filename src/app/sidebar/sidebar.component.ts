import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  public expanded: boolean = true;

  toggleSidebar(): void {
    this.expanded = !this.expanded;
  }

}
