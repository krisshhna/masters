import { Component } from '@angular/core';

@Component({
  selector: 'app-t-dashboard',
  standalone: false,
  templateUrl: './t-dashboard.component.html',
  styleUrl: './t-dashboard.component.scss'
})
export class TDashboardComponent {
    sidebarVisible = false;
  items: any[] = [];
 ngOnInit() {
    this.items = [
      { label: 'Dashboard', icon: 'pi pi-home', routerLink: ['/dashboard'] },
      {
        label: 'Users', icon: 'pi pi-users',
        items: [
          { label: 'List Users', icon: 'pi pi-list', routerLink: ['/users'] },
          { label: 'Add User', icon: 'pi pi-user-plus', routerLink: ['/users/add'] }
        ]
      },
      { label: 'Reports', icon: 'pi pi-chart-line', routerLink: ['/reports'] },
      { label: 'Settings', icon: 'pi pi-cog', routerLink: ['/settings'] }
    ];
  }
}
