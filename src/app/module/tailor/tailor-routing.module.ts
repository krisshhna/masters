import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TDashboardComponent } from './component/t-dashboard/t-dashboard.component';
import { TAllDetailsComponent } from './component/t-all-details/t-all-details.component';
import { TTestingComponent } from './component/t-testing/t-testing.component';

const routes: Routes = [
  {
    path:'',
    component:TDashboardComponent,
    children:[
      {path:'details',  component:TAllDetailsComponent},
      {path:'testing',  component:TTestingComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TailorRoutingModule { }
export const tComponent = [
  TDashboardComponent, TAllDetailsComponent, TTestingComponent
]