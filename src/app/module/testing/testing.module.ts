import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestingRoutingModule, TestComponent } from './testing-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule,
    TestingRoutingModule,
    SharedModule
  ]
})
export class TestingModule { }
