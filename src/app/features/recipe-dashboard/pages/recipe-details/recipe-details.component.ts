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

    
// this.isRecipeDataFound = true;
// this.recipeDetails = {
//   "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_c9bf37296a0126d18781c952dc45a230",
//   "label": "Chinese Sausage and Spinach Pizza",
//   "image": "https://edamam-product-images.s3.amazonaws.com/web-img/b7e/b7efd4fa5cdfd00f2363978bd2e8e93a?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLWVhc3QtMSJHMEUCIAW0y%2FBnZoG1N0pyyQazlGGs73bFaeFTuKTJKAagj9FwAiEA5wVNbM9bpQAkyEPY1f0YXuZxC5CjyxnVcK7braTZhWkquQUIYBAAGgwxODcwMTcxNTA5ODYiDM7LclHnCFLvdrNuCiqWBQgv0%2BW0VQdch6KMGEcIjnWMmNde1iUdvirst4ab2p8AFPYPeyJM8OL0UpWHWOJkBOMB4kRtotTmajxz4UCfNwfnb%2F02StnUxZlnu3ECl%2FJF7Mv%2BoIyenwdFt%2BajXEnlob0WeIZN1XcoZSkLVHZl5oK5%2FuqK5uPaKK05SE%2F7jUxgThNUkClccURkOgg9TzrL0HiStyEy4sp3o6zMlDZgUoaBVIxrInebuDsJwzlvKzbvJY4M7N0b728rMF5oOA8YUvXzoy%2FmGojUJ2ljURgMrc%2BpyoSPzOvDPXIyg3AWexn6MORyDRLb4eHtCGOPnnUTRzpvtcXWgMjP%2BK0qG3hiR6YYzsRt9w73vYIJtV7AV9RXbwUTL3l0JQCqFvpFcUCGPL0umrMHiQLK8N7m5IBfitaoOSCrNyb6Nm48XMITvJvglOCAPznjngSegU%2BwDCJ2qw8THEh2ulYhd82%2FWOrIUGtvpySt9eCT%2BIphEMq2%2FYxOVry7kAz0OYPA%2FKOWZVTFeWPTmbAFKZ%2BOghJaeHfXLhAtvsqjtb7SrzUYlFTzKE3qATX4xubrGUDbvPHjLUZmBHS5aFooy45PzDhMAfunQBdzvV3jJ8uxXyftPEAGZIbMxTRmNRLsfxZIzqu5qdPvw3cfhBXdjpjiBwZWqvjcLbpqZeSIf%2BCPnvP5FE48urB2OpUtpxBH0JdaPWOFeKtlm2LH1uqRLEVDowq%2BkTam2Onp0lg2h40Z4l7A8WTiVLfuWjFOsvyqSV%2F9yECWiZwRbcvHtAFN03za9OdNajm9PF3%2Bqt6qUg8NFEKUd%2FGoAscquVWg6M31ryTj64QuOMLbhWeAv%2F3G%2BcTyHwFpBRnpE13Bb8QdkGaOH%2FBGWJf5sA86QRLVaYXKMKqVk70GOrEBKAaIybdI2MI8TzTM7Ea8gaXAJdXItd0taR9ymf0Ls76d7Ljijd%2FqTs%2F%2B1CZ415H1zPQaY4apWecQQcLQ8zt7tYAeRXYnKmakA6ksllF1bghMvJKgP9MsG5IKs7CzYm%2FvoqvGxb6fJW%2Frn3ZnZo4fT0zMzJmKm0s%2BvJRXOKrD4D0xfZLcYBt%2By9Qg6ZkhB21GRWaCrVeg5%2FXuSYYpkqOHTt7KXi7Fqwob93VpBDZwKr0A&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250206T154926Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJLVPT74H%2F20250206%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5336b22b0b1dab01515db2da50baffcbe664e7c9e5d5965ce4a64a6905ff36bd",
//   "source": "Martha Stewart",
//   "url": "https://www.marthastewart.com/284463/pizza-frizza",
//   "shareAs": "http://www.edamam.com/recipe/pizza-frizza-c9bf37296a0126d18781c952dc45a230/pizza",
//   "yield": 4,
//   "dietLabels": [
//       "Low-Fat"
//   ],
//   "healthLabels": [
//       "Low Potassium",
//       "Kidney-Friendly",
//       "Vegetarian",
//       "Pescatarian",
//       "Egg-Free",
//       "Peanut-Free",
//       "Tree-Nut-Free",
//       "Soy-Free",
//       "Fish-Free",
//       "Shellfish-Free",
//       "Pork-Free",
//       "Red-Meat-Free",
//       "Crustacean-Free",
//       "Celery-Free",
//       "Mustard-Free",
//       "Sesame-Free",
//       "Lupine-Free",
//       "Mollusk-Free",
//       "Alcohol-Free",
//       "Kosher"
//   ],
//   "cautions": [],
//   "ingredientLines": [
//       "1 Pizza Dough for Personal Pizzas",
//       "Sugar",
//       "Oil"
//   ],
//   "ingredients": [
//       {
//           "text": "1 Pizza Dough for Personal Pizzas",
//           "quantity": 1,
//           "measure": "<unit>",
//           "food": "Pizza Dough",
//           "weight": 228,
//           "foodCategory": "bread, rolls and tortillas",
//           "foodId": "food_bq98fb1beuvdwxax58q1cayt7w6k",
//           "image": "https://www.edamam.com/food-img/19f/19fc0706f04d44f62fc79ab4d7a07d7b.jpg"
//       },
//       {
//           "text": "Sugar",
//           "quantity": 0,
//           "measure": null,
//           "food": "Sugar",
//           "weight": 2.736,
//           "foodCategory": "sugars",
//           "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
//           "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
//       },
//       {
//           "text": "Oil",
//           "quantity": 0,
//           "measure": null,
//           "food": "Oil",
//           "weight": 3.1008,
//           "foodCategory": "Oils",
//           "foodId": "food_bk9p9aaavhvoq4bqsnprobpsiuxs",
//           "image": "https://www.edamam.com/food-img/07e/07e106ab3536d57428e5c46d009038f8.jpg"
//       }
//   ],
//   "calories": 628.519392,
//   "totalWeight": 233.83679999999998,
//   "totalTime": 0,
//   "cuisineType": [
//       "italian"
//   ],
//   "mealType": [
//       "breakfast"
//   ],
//   "dishType": [
//       "main course"
//   ],
//   "totalNutrients": {
//       "ENERC_KCAL": {
//           "label": "Energy",
//           "quantity": 628.519392,
//           "unit": "kcal"
//       },
//       "FAT": {
//           "label": "Fat",
//           "quantity": 9.3252,
//           "unit": "g"
//       },
//       "FASAT": {
//           "label": "Saturated",
//           "quantity": 1.4685388800000003,
//           "unit": "g"
//       },
//       "FATRN": {
//           "label": "Trans",
//           "quantity": 0.05100816000000001,
//           "unit": "g"
//       },
//       "FAMS": {
//           "label": "Monounsaturated",
//           "quantity": 3.0868464,
//           "unit": "g"
//       },
//       "FAPU": {
//           "label": "Polyunsaturated",
//           "quantity": 3.8581248000000006,
//           "unit": "g"
//       },
//       "CHOCDF": {
//           "label": "Carbs",
//           "quantity": 112.40400000000002,
//           "unit": "g"
//       },
//       "CHOCDF.net": {
//           "label": "Carbohydrates (net)",
//           "quantity": 107.61600000000003,
//           "unit": "g"
//       },
//       "FIBTG": {
//           "label": "Fiber",
//           "quantity": 4.788000000000001,
//           "unit": "g"
//       },
//       "SUGAR": {
//           "label": "Sugars",
//           "quantity": 13.423728000000002,
//           "unit": "g"
//       },
//       "SUGAR.added": {
//           "label": "Sugars, added",
//           "quantity": 2.730528,
//           "unit": "g"
//       },
//       "PROCNT": {
//           "label": "Protein",
//           "quantity": 21.637200000000004,
//           "unit": "g"
//       },
//       "CHOLE": {
//           "label": "Cholesterol",
//           "quantity": 0,
//           "unit": "mg"
//       },
//       "NA": {
//           "label": "Sodium",
//           "quantity": 1409.0673600000002,
//           "unit": "mg"
//       },
//       "CA": {
//           "label": "Calcium",
//           "quantity": 239.42736000000002,
//           "unit": "mg"
//       },
//       "MG": {
//           "label": "Magnesium",
//           "quantity": 59.28000000000001,
//           "unit": "mg"
//       },
//       "K": {
//           "label": "Potassium",
//           "quantity": 282.77472,
//           "unit": "mg"
//       },
//       "FE": {
//           "label": "Iron",
//           "quantity": 7.867368000000002,
//           "unit": "mg"
//       },
//       "ZN": {
//           "label": "Zinc",
//           "quantity": 1.8014736000000005,
//           "unit": "mg"
//       },
//       "P": {
//           "label": "Phosphorus",
//           "quantity": 216.60000000000002,
//           "unit": "mg"
//       },
//       "VITA_RAE": {
//           "label": "Vitamin A",
//           "quantity": 0,
//           "unit": "µg"
//       },
//       "VITC": {
//           "label": "Vitamin C",
//           "quantity": 0,
//           "unit": "mg"
//       },
//       "THIA": {
//           "label": "Thiamin (B1)",
//           "quantity": 1.3269600000000001,
//           "unit": "mg"
//       },
//       "RIBF": {
//           "label": "Riboflavin (B2)",
//           "quantity": 0.7323998400000001,
//           "unit": "mg"
//       },
//       "NIA": {
//           "label": "Niacin (B3)",
//           "quantity": 10.3512,
//           "unit": "mg"
//       },
//       "VITB6A": {
//           "label": "Vitamin B6",
//           "quantity": 0.23712000000000003,
//           "unit": "mg"
//       },
//       "FOLDFE": {
//           "label": "Folate equivalent (total)",
//           "quantity": 300.96000000000004,
//           "unit": "µg"
//       },
//       "FOLFD": {
//           "label": "Folate (food)",
//           "quantity": 232.56000000000003,
//           "unit": "µg"
//       },
//       "FOLAC": {
//           "label": "Folic acid",
//           "quantity": 41.040000000000006,
//           "unit": "µg"
//       },
//       "VITB12": {
//           "label": "Vitamin B12",
//           "quantity": 0,
//           "unit": "µg"
//       },
//       "VITD": {
//           "label": "Vitamin D",
//           "quantity": 0,
//           "unit": "µg"
//       },
//       "TOCPHA": {
//           "label": "Vitamin E",
//           "quantity": 1.20384,
//           "unit": "mg"
//       },
//       "VITK1": {
//           "label": "Vitamin K",
//           "quantity": 9.0508704,
//           "unit": "µg"
//       },
//       "WATER": {
//           "label": "Water",
//           "quantity": 85.50054720000001,
//           "unit": "g"
//       }
//   },
//   "totalDaily": {
//       "ENERC_KCAL": {
//           "label": "Energy",
//           "quantity": 31.425969600000002,
//           "unit": "%"
//       },
//       "FAT": {
//           "label": "Fat",
//           "quantity": 14.34646153846154,
//           "unit": "%"
//       },
//       "FASAT": {
//           "label": "Saturated",
//           "quantity": 7.342694400000002,
//           "unit": "%"
//       },
//       "CHOCDF": {
//           "label": "Carbs",
//           "quantity": 37.46800000000001,
//           "unit": "%"
//       },
//       "FIBTG": {
//           "label": "Fiber",
//           "quantity": 19.152000000000005,
//           "unit": "%"
//       },
//       "PROCNT": {
//           "label": "Protein",
//           "quantity": 43.27440000000001,
//           "unit": "%"
//       },
//       "CHOLE": {
//           "label": "Cholesterol",
//           "quantity": 0,
//           "unit": "%"
//       },
//       "NA": {
//           "label": "Sodium",
//           "quantity": 58.711140000000015,
//           "unit": "%"
//       },
//       "CA": {
//           "label": "Calcium",
//           "quantity": 23.942736,
//           "unit": "%"
//       },
//       "MG": {
//           "label": "Magnesium",
//           "quantity": 14.114285714285716,
//           "unit": "%"
//       },
//       "K": {
//           "label": "Potassium",
//           "quantity": 6.01648340425532,
//           "unit": "%"
//       },
//       "FE": {
//           "label": "Iron",
//           "quantity": 43.707600000000006,
//           "unit": "%"
//       },
//       "ZN": {
//           "label": "Zinc",
//           "quantity": 16.37703272727273,
//           "unit": "%"
//       },
//       "P": {
//           "label": "Phosphorus",
//           "quantity": 30.942857142857147,
//           "unit": "%"
//       },
//       "VITA_RAE": {
//           "label": "Vitamin A",
//           "quantity": 0,
//           "unit": "%"
//       },
//       "VITC": {
//           "label": "Vitamin C",
//           "quantity": 0,
//           "unit": "%"
//       },
//       "THIA": {
//           "label": "Thiamin (B1)",
//           "quantity": 110.58000000000003,
//           "unit": "%"
//       },
//       "RIBF": {
//           "label": "Riboflavin (B2)",
//           "quantity": 56.338449230769235,
//           "unit": "%"
//       },
//       "NIA": {
//           "label": "Niacin (B3)",
//           "quantity": 64.69500000000001,
//           "unit": "%"
//       },
//       "VITB6A": {
//           "label": "Vitamin B6",
//           "quantity": 18.240000000000002,
//           "unit": "%"
//       },
//       "FOLDFE": {
//           "label": "Folate equivalent (total)",
//           "quantity": 75.24000000000001,
//           "unit": "%"
//       },
//       "VITB12": {
//           "label": "Vitamin B12",
//           "quantity": 0,
//           "unit": "%"
//       },
//       "VITD": {
//           "label": "Vitamin D",
//           "quantity": 0,
//           "unit": "%"
//       },
//       "TOCPHA": {
//           "label": "Vitamin E",
//           "quantity": 8.0256,
//           "unit": "%"
//       },
//       "VITK1": {
//           "label": "Vitamin K",
//           "quantity": 7.542392000000001,
//           "unit": "%"
//       }
//   },
//   "digest": [
//       {
//           "label": "Fat",
//           "tag": "FAT",
//           "schemaOrgTag": "fatContent",
//           "total": 9.3252,
//           "hasRDI": true,
//           "daily": 14.34646153846154,
//           "unit": "g",
//           "sub": [
//               {
//                   "label": "Saturated",
//                   "tag": "FASAT",
//                   "schemaOrgTag": "saturatedFatContent",
//                   "total": 1.4685388800000003,
//                   "hasRDI": true,
//                   "daily": 7.342694400000002,
//                   "unit": "g"
//               },
//               {
//                   "label": "Trans",
//                   "tag": "FATRN",
//                   "schemaOrgTag": "transFatContent",
//                   "total": 0.05100816000000001,
//                   "hasRDI": false,
//                   "daily": 0,
//                   "unit": "g"
//               },
//               {
//                   "label": "Monounsaturated",
//                   "tag": "FAMS",
//                   "schemaOrgTag": null,
//                   "total": 3.0868464,
//                   "hasRDI": false,
//                   "daily": 0,
//                   "unit": "g"
//               },
//               {
//                   "label": "Polyunsaturated",
//                   "tag": "FAPU",
//                   "schemaOrgTag": null,
//                   "total": 3.8581248000000006,
//                   "hasRDI": false,
//                   "daily": 0,
//                   "unit": "g"
//               }
//           ]
//       },
//       {
//           "label": "Carbs",
//           "tag": "CHOCDF",
//           "schemaOrgTag": "carbohydrateContent",
//           "total": 112.40400000000002,
//           "hasRDI": true,
//           "daily": 37.46800000000001,
//           "unit": "g",
//           "sub": [
//               {
//                   "label": "Carbs (net)",
//                   "tag": "CHOCDF.net",
//                   "schemaOrgTag": null,
//                   "total": 107.61600000000003,
//                   "hasRDI": false,
//                   "daily": 0,
//                   "unit": "g"
//               },
//               {
//                   "label": "Fiber",
//                   "tag": "FIBTG",
//                   "schemaOrgTag": "fiberContent",
//                   "total": 4.788000000000001,
//                   "hasRDI": true,
//                   "daily": 19.152000000000005,
//                   "unit": "g"
//               },
//               {
//                   "label": "Sugars",
//                   "tag": "SUGAR",
//                   "schemaOrgTag": "sugarContent",
//                   "total": 13.423728000000002,
//                   "hasRDI": false,
//                   "daily": 0,
//                   "unit": "g"
//               },
//               {
//                   "label": "Sugars, added",
//                   "tag": "SUGAR.added",
//                   "schemaOrgTag": null,
//                   "total": 2.730528,
//                   "hasRDI": false,
//                   "daily": 0,
//                   "unit": "g"
//               }
//           ]
//       },
//       {
//           "label": "Protein",
//           "tag": "PROCNT",
//           "schemaOrgTag": "proteinContent",
//           "total": 21.637200000000004,
//           "hasRDI": true,
//           "daily": 43.27440000000001,
//           "unit": "g"
//       },
//       {
//           "label": "Cholesterol",
//           "tag": "CHOLE",
//           "schemaOrgTag": "cholesterolContent",
//           "total": 0,
//           "hasRDI": true,
//           "daily": 0,
//           "unit": "mg"
//       },
//       {
//           "label": "Sodium",
//           "tag": "NA",
//           "schemaOrgTag": "sodiumContent",
//           "total": 1409.0673600000002,
//           "hasRDI": true,
//           "daily": 58.711140000000015,
//           "unit": "mg"
//       },
//       {
//           "label": "Calcium",
//           "tag": "CA",
//           "schemaOrgTag": null,
//           "total": 239.42736000000002,
//           "hasRDI": true,
//           "daily": 23.942736,
//           "unit": "mg"
//       },
//       {
//           "label": "Magnesium",
//           "tag": "MG",
//           "schemaOrgTag": null,
//           "total": 59.28000000000001,
//           "hasRDI": true,
//           "daily": 14.114285714285716,
//           "unit": "mg"
//       },
//       {
//           "label": "Potassium",
//           "tag": "K",
//           "schemaOrgTag": null,
//           "total": 282.77472,
//           "hasRDI": true,
//           "daily": 6.01648340425532,
//           "unit": "mg"
//       },
//       {
//           "label": "Iron",
//           "tag": "FE",
//           "schemaOrgTag": null,
//           "total": 7.867368000000002,
//           "hasRDI": true,
//           "daily": 43.707600000000006,
//           "unit": "mg"
//       },
//       {
//           "label": "Zinc",
//           "tag": "ZN",
//           "schemaOrgTag": null,
//           "total": 1.8014736000000005,
//           "hasRDI": true,
//           "daily": 16.37703272727273,
//           "unit": "mg"
//       },
//       {
//           "label": "Phosphorus",
//           "tag": "P",
//           "schemaOrgTag": null,
//           "total": 216.60000000000002,
//           "hasRDI": true,
//           "daily": 30.942857142857147,
//           "unit": "mg"
//       },
//       {
//           "label": "Vitamin A",
//           "tag": "VITA_RAE",
//           "schemaOrgTag": null,
//           "total": 0,
//           "hasRDI": true,
//           "daily": 0,
//           "unit": "µg"
//       },
//       {
//           "label": "Vitamin C",
//           "tag": "VITC",
//           "schemaOrgTag": null,
//           "total": 0,
//           "hasRDI": true,
//           "daily": 0,
//           "unit": "mg"
//       },
//       {
//           "label": "Thiamin (B1)",
//           "tag": "THIA",
//           "schemaOrgTag": null,
//           "total": 1.3269600000000001,
//           "hasRDI": true,
//           "daily": 110.58000000000003,
//           "unit": "mg"
//       },
//       {
//           "label": "Riboflavin (B2)",
//           "tag": "RIBF",
//           "schemaOrgTag": null,
//           "total": 0.7323998400000001,
//           "hasRDI": true,
//           "daily": 56.338449230769235,
//           "unit": "mg"
//       },
//       {
//           "label": "Niacin (B3)",
//           "tag": "NIA",
//           "schemaOrgTag": null,
//           "total": 10.3512,
//           "hasRDI": true,
//           "daily": 64.69500000000001,
//           "unit": "mg"
//       },
//       {
//           "label": "Vitamin B6",
//           "tag": "VITB6A",
//           "schemaOrgTag": null,
//           "total": 0.23712000000000003,
//           "hasRDI": true,
//           "daily": 18.240000000000002,
//           "unit": "mg"
//       },
//       {
//           "label": "Folate equivalent (total)",
//           "tag": "FOLDFE",
//           "schemaOrgTag": null,
//           "total": 300.96000000000004,
//           "hasRDI": true,
//           "daily": 75.24000000000001,
//           "unit": "µg"
//       },
//       {
//           "label": "Folate (food)",
//           "tag": "FOLFD",
//           "schemaOrgTag": null,
//           "total": 232.56000000000003,
//           "hasRDI": false,
//           "daily": 0,
//           "unit": "µg"
//       },
//       {
//           "label": "Folic acid",
//           "tag": "FOLAC",
//           "schemaOrgTag": null,
//           "total": 41.040000000000006,
//           "hasRDI": false,
//           "daily": 0,
//           "unit": "µg"
//       },
//       {
//           "label": "Vitamin B12",
//           "tag": "VITB12",
//           "schemaOrgTag": null,
//           "total": 0,
//           "hasRDI": true,
//           "daily": 0,
//           "unit": "µg"
//       },
//       {
//           "label": "Vitamin D",
//           "tag": "VITD",
//           "schemaOrgTag": null,
//           "total": 0,
//           "hasRDI": true,
//           "daily": 0,
//           "unit": "µg"
//       },
//       {
//           "label": "Vitamin E",
//           "tag": "TOCPHA",
//           "schemaOrgTag": null,
//           "total": 1.20384,
//           "hasRDI": true,
//           "daily": 8.0256,
//           "unit": "mg"
//       },
//       {
//           "label": "Vitamin K",
//           "tag": "VITK1",
//           "schemaOrgTag": null,
//           "total": 9.0508704,
//           "hasRDI": true,
//           "daily": 7.542392000000001,
//           "unit": "µg"
//       },
//       {
//           "label": "Sugar alcohols",
//           "tag": "Sugar.alcohol",
//           "schemaOrgTag": null,
//           "total": 0,
//           "hasRDI": false,
//           "daily": 0,
//           "unit": "g"
//       },
//       {
//           "label": "Water",
//           "tag": "WATER",
//           "schemaOrgTag": null,
//           "total": 85.50054720000001,
//           "hasRDI": false,
//           "daily": 0,
//           "unit": "g"
//       }
//   ]
// }
// console.log(this.recipeDetails)
  }

  async getRecipeDetailsByFilter(params: any, type:any){
    let filterData = await this._recipeDashboardService.getRecipeDetailsForFilter(params, type);
  }

  onBackClick(){
    this.router.navigateByUrl("");
  }

  getQuantity(value: any){
    return value?.quantity;
  }

  getUnit(value: any){
    return value?.unit;
  }

  constructor(private route: ActivatedRoute, private _recipeDashboardService: RecipeDashboardService, private router: Router){ }
}
