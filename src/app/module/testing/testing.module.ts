import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestingRoutingModule, TestComponent } from './testing-routing.module';

@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule,
    TestingRoutingModule
  ]
})
export class TestingModule { }
