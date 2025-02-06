import { Component, OnInit } from '@angular/core';
import { RecipeDashboardService } from '../../services/recipe-dashboard/recipe-dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-home',
  templateUrl: './recipe-home.component.html',
  styleUrls: ['./recipe-home.component.scss']
})
export class RecipeHomeComponent implements OnInit{

  cuisineDetails: any = [];
  isToShowCuisines: boolean = false;

  constructor(private _recipeDashboardService: RecipeDashboardService, private router: Router,){

  }

  ngOnInit(): void {
    this.getCuisineData();
  }

  async getCuisineData(){
    let cuisines = ['Chinese', 'Mexican', 'Japanese', 'French', 'Korean', 'American', 'Indian', 'Mediterranean', 'Italian'];
    for(let i=0; i<cuisines.length; i++){
      let data: any = await this._recipeDashboardService.getCusineData(cuisines[i]);
      if(data && data["hits"] && data["hits"].length > 0){
        data.hits[0].recipe.cuisine = cuisines[i];
        this.cuisineDetails = this.cuisineDetails.concat(data?.hits);
      }
    }
    this.isToShowCuisines = true;
  }

  // Group images into arrays of three for carousel
  getGroupedDataForCarousel(): any[][] {
    const chunkSize = 3;
    let groupedData: string[][] = [];
    for (let i = 0; i < this.cuisineDetails.length; i += chunkSize) {
      groupedData.push(this.cuisineDetails.slice(i, i + chunkSize));
    }
    return groupedData;
  }

  onFilterChange(filterType: any, type:any){
    this.router.navigate(['/recipe-overview'], { queryParams: { view: 'filter', name: filterType, type: type } });
  }
  
  viewAllRecipes(){
    this.router.navigate(['/recipe-overview'], { queryParams: { view: 'all' } });
  }
}

