import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ButtonModule } from 'primeng/button';
import { SLabelComponent } from './component/s-label/s-label.component';
import { STextareaComponent } from './component/s-textarea/s-textarea.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

// primengModules 
import { MenubarModule } from 'primeng/menubar';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { Ripple } from 'primeng/ripple';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    SLabelComponent,
    STextareaComponent
  ],
  providers:[MessageService],
  imports: [
    CommonModule,
    SidebarModule,
    PanelMenuModule,
    ButtonModule,

    ReactiveFormsModule,
    HttpClientModule,
    MenubarModule,
    BreadcrumbModule,
    StepsModule,
    ToastModule,
    ProgressSpinnerModule,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    Ripple,
  ],
  exports:[
    CommonModule,
    SidebarModule,
    PanelMenuModule,
    ButtonModule,

    SLabelComponent,
    STextareaComponent,

    ReactiveFormsModule,
    HttpClientModule,

    MenubarModule,
    BreadcrumbModule,
    StepsModule,
    ToastModule,
    ProgressSpinnerModule,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    Ripple,
  ]
})
export class SharedModule { }
