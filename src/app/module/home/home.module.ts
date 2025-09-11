import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { homeComponent, HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [
    homeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
