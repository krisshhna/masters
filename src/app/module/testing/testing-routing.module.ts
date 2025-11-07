import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TDashboardComponent } from './component/t-dashboard/t-dashboard.component';
import { TTest1Component } from './component/t-test1/t-test1.component';

const routes: Routes = [
  {
    path:'',
    component:TDashboardComponent,
    children:[
      {path:'test1', component:TTest1Component},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestingRoutingModule { }
export const TestComponent = [
  TDashboardComponent, TTest1Component
];