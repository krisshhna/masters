import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ButtonModule } from 'primeng/button';
import { SLabelComponent } from './component/s-label/s-label.component';
import { STextareaComponent } from './component/s-textarea/s-textarea.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    SLabelComponent,
    STextareaComponent
  ],
  imports: [
    CommonModule,
    SidebarModule,
    PanelMenuModule,
    ButtonModule,

    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    SidebarModule,
    PanelMenuModule,
    ButtonModule,

    SLabelComponent,
    STextareaComponent,

    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SharedModule { }
