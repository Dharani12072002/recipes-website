import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RecipeDashboardService } from './features/recipe-dashboard/services/recipe-dashboard/recipe-dashboard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchRecipe = new FormControl(null);

  onBackClick(){
    this.searchRecipe.patchValue(null);
    this.router.navigateByUrl("");
  }

  async onSearch(){
    this.router.navigate(['/recipe-overview'], {queryParams: {name: this.searchRecipe.value, view: 'search'}});
  }

  async onSearchAllRecipes(){
    this.router.navigate(['/recipe-overview'], { queryParams: { view: 'all' } });
  }

  constructor(private router: Router, private _recipeDashboardService: RecipeDashboardService){ }
}
