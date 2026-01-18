import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ButtonModule } from 'primeng/button';
import { SLabelComponent } from './component/s-label/s-label.component';
import { STextareaComponent } from './component/s-textarea/s-textarea.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { CheckboxModule } from 'primeng/checkbox';
import { AccordionModule } from 'primeng/accordion';
import { MessageModule } from 'primeng/message';
import { SelectModule } from 'primeng/select';
import { TagModule } from 'primeng/tag';
import { TexualDirective } from './directives/texual.directive';
import { OnlyNumbersDirective } from './directives/only-numbers.directive';

@NgModule({
  declarations: [
    SLabelComponent,
    STextareaComponent,
  ],
  providers:[MessageService],
  imports: [
    CommonModule,
    SidebarModule,
    PanelMenuModule,
    ButtonModule,
    TexualDirective,
    OnlyNumbersDirective,

    ReactiveFormsModule,
    MenubarModule,
    BreadcrumbModule,
    StepsModule,
    ToastModule,
    ProgressSpinnerModule,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    Ripple,
    CheckboxModule,
    AccordionModule,
    TagModule,
    MessageModule,
    SelectModule,
    FormsModule,
  ],
  exports:[
    CommonModule,
    SidebarModule,
    PanelMenuModule,
    ButtonModule,

    SLabelComponent,
    STextareaComponent,

    ReactiveFormsModule,
    TexualDirective,
    OnlyNumbersDirective,

    MenubarModule,
    BreadcrumbModule,
    StepsModule,
    ToastModule,
    ProgressSpinnerModule,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    Ripple,
    CheckboxModule,
    AccordionModule,
    TagModule,
    MessageModule,
    SelectModule,
    FormsModule,
  ]
})
export class SharedModule { }
