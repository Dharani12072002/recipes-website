import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  // {
  //   path: 'login',
  //   component: LoginComponent,
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: '',
  //   redirectTo: 'login',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    loadChildren: () =>
      import(
        './features/recipe-dashboard/recipe-dashboard.module'
      ).then((mod) => mod.RecipeDashboardModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
