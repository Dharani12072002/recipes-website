import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeDashboardService } from '../../services/recipe-dashboard/recipe-dashboard.service';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-overview',
  templateUrl: './recipe-overview.component.html',
  styleUrls: ['./recipe-overview.component.scss'],
})
export class RecipeOverviewComponent {
  recipeData: any;

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.getRecipeDetailsByFilter(params['name'], params['type'], params['view']);
    });
  }

  async getRecipeDetailsByFilter(params: any, type:any, view: any){
    if(view == 'filter'){
      let filterData: any = await this._recipeDashboardService.getRecipeDetailsForFilter(params, type);
      if(filterData && filterData["hits"] && filterData["hits"].length > 0){
        this.recipeData = filterData["hits"];
      }
    }
    else if(view == 'all'){
      let filterData: any = await this._recipeDashboardService.getAllRecipeDetails();
      if(filterData && filterData["hits"] && filterData["hits"].length > 0){
        this.recipeData = filterData["hits"];
      }
    }
  }

  onRecipeScroll(){
    
  }

  onBackClick(){
    this.router.navigateByUrl("");
  }

  onRecipeItemClick(recipeItem: any){
    this.router.navigateByUrl('/recipe-details');
    let data = recipeItem?.recipe;
    this._recipeDashboardService.getSelectedRecipeDetails(JSON.stringify(data, null, 2));
  }

  constructor(private activatedRoute: ActivatedRoute, private _recipeDashboardService: RecipeDashboardService, private router: Router){ }
}
