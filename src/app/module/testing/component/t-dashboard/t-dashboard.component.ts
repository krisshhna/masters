import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { Ripple } from 'primeng/ripple';


@Component({
  selector: 'app-t-dashboard',
  standalone: false,
  templateUrl: './t-dashboard.component.html',
  styleUrl: './t-dashboard.component.scss',
})
export class TDashboardComponent {
  items:any;
  
  ngOnInit(){
     this.items = [
            {
                label: 'Test',
                icon: 'pi pi-home',
                route:  '/test/test1',
            },
            {
                label:  'Login',
                icon:   'pi pi-home',
                route:  '/test/login'
            },
            {
                label:  'Register',
                icon:   'pi pi-home',
                route:  '/test/register'
            }
            // {
            //     label: 'Projects',
            //     icon: 'pi pi-search',
            //     badge: '3',
            //     items: [
            //         {
            //             label: 'Core',
            //             icon: 'pi pi-bolt',
            //             shortcut: '⌘+S',
            //             route:'/tailor/details'
            //         },
            //         {
            //             label: 'Blocks',
            //             icon: 'pi pi-server',
            //             shortcut: '⌘+B',
            //         },
            //         {
            //             separator: true,
            //         },
            //         {
            //             label: 'UI Kit',
            //             icon: 'pi pi-pencil',
            //             shortcut: '⌘+U',
            //         },
            //     ],
            // },
        ];
  }
}
