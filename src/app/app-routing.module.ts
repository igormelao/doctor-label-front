import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo: 'home'
  },
  {
    path:'home',
    loadChildren:()=> import('./home/home.module').then((m)=> m.HomeModule),
  },
  {
    path: 'cases',
    loadChildren: ()=> import('./cases/cases.module').then((m)=> m.CasesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
