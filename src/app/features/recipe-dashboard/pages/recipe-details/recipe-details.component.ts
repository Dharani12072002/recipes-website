import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeDashboardService } from '../../services/recipe-dashboard/recipe-dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit{

  recipeDetails: any;
  isRecipeDataFound: boolean = false;
  ngOnInit() {
    
    this._recipeDashboardService.$recipeDataObservable.subscribe((item) => {
      let recipeData = JSON.parse(item);
      this.recipeDetails = recipeData;
      this.isRecipeDataFound = true;
    })

  }

  async getRecipeDetailsByFilter(params: any, type:any){
    let filterData = await this._recipeDashboardService.getRecipeDetailsForFilter(params, type);
  }

  onBackClick(){
    this.router.navigateByUrl("");
  }

  constructor(private route: ActivatedRoute, private _recipeDashboardService: RecipeDashboardService, private router: Router){ }
}
