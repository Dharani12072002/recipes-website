import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeHomeComponent } from './pages/recipe-home/recipe-home.component';
import { RecipeDetailsComponent } from './pages/recipe-details/recipe-details.component';
import { RecipeOverviewComponent } from './pages/recipe-overview/recipe-overview.component';

const routes: Routes = [
  {
    path: '',
    component: RecipeHomeComponent
  },
  {
    path: 'recipe-overview',
    component: RecipeOverviewComponent
  },
  {
    path: 'recipe-details',
    component: RecipeDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeDashboardRoutingModule { }
