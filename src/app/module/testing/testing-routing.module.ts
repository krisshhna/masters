import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TDashboardComponent } from './component/t-dashboard/t-dashboard.component';
import { TTest1Component } from './component/t-test1/t-test1.component';
import { TLoginComponent } from './component/t-login/t-login.component';
import { TRegisterComponent } from './component/t-register/t-register.component';

const routes: Routes = [
  {
    path:'',
    component:TDashboardComponent,
    children:[
      {path:'test1',    component:TTest1Component},
      {path:'login',    component:TLoginComponent},
      {path:'register', component:TRegisterComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestingRoutingModule { }
export const TestComponent = [
  TDashboardComponent, TTest1Component, TLoginComponent, TRegisterComponent
];