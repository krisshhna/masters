import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TDashboardComponent } from './component/t-dashboard/t-dashboard.component';
import { TTest1Component } from './component/t-test1/t-test1.component';
import { TLoginComponent } from './component/t-login/t-login.component';
import { TRegisterComponent } from './component/t-register/t-register.component';
import { BasicFormComponent } from './component/register/basic-form/basic-form.component';
import { AddressComponent } from './component/register/address/address.component';
import { ProfessionalComponent } from './component/register/professional/professional.component';
import { TBasicFormComponent } from './component/test/t-basic-form/t-basic-form.component';
import { TAccFormComponent } from './component/test/t-acc-form/t-acc-form.component';
import { TDeclarationComponent } from './component/test/t-declaration/t-declaration.component';
import { TMarketingComponent } from './component/test/t-marketing/t-marketing.component';
import { TProdComponent } from './component/test/t-prod/t-prod.component';
import { TFinFormComponent } from './component/test/t-fin-form/t-fin-form.component';

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
  TDashboardComponent, TTest1Component, TLoginComponent, TRegisterComponent, BasicFormComponent, AddressComponent, ProfessionalComponent,
  TBasicFormComponent, TAccFormComponent, TDeclarationComponent, TMarketingComponent, TProdComponent, TFinFormComponent
];