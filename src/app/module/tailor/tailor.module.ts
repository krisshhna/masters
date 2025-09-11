import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TailorRoutingModule, tComponent } from './tailor-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    tComponent,
  ],
  imports: [
    CommonModule,
    TailorRoutingModule,
    SharedModule,
  ]
})
export class TailorModule { }
