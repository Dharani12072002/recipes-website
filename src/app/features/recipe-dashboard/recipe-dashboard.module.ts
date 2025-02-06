import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

import { RecipeDashboardRoutingModule } from './recipe-dashboard-routing.module';
import { RecipeHomeComponent } from './pages/recipe-home/recipe-home.component';
import { RecipeDetailsComponent } from './pages/recipe-details/recipe-details.component';
import { RecipeOverviewComponent } from './pages/recipe-overview/recipe-overview.component';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    RecipeHomeComponent,
    RecipeDetailsComponent,
    RecipeOverviewComponent
  ],
  imports: [
    CommonModule,
    RecipeDashboardRoutingModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatTooltipModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RecipeDashboardModule { }
