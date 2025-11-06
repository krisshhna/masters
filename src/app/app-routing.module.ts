import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'}, // this is empty path match.
  {
    path:'home',
    loadChildren:()=>import('./module/home/home.module').then((a)=>a.HomeModule)
  },
  {
    path:'tailor',
    loadChildren:()=>import('./module/tailor/tailor.module').then((x)=>x.TailorModule),
  },
  {
    path:'poolTable',
    loadChildren:()=>import('./module/pool-table/pool-table.module').then((x)=>x.PoolTableModule),
  },
  {
    path:'classes',
    loadChildren:()=>import('./module/classes/classes.module').then((y)=>y.ClassesModule),
  },
  {
    path:'testing',
    loadChildren:()=>import('./module/testing/testing.module').then((z)=>z.TestingModule),
  },
  {path:'**', redirectTo:'home'} // this is wild card routing.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
