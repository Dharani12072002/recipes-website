import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeDashboardService {

  constructor(private http: HttpClient) { }

  getCusineData(cuisine: any){
    try{
      return new Promise((resolve,reject)=>{
        this.http.get(`https://api.edamam.com/search?q=pizza&app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&from=0&to=1&cuisineType=${cuisine}`,)
        .subscribe({
          next: (res: any)=> {
            return resolve(res)
          },
          error: (err)=>{
            return reject(err)}
        }
        )
      })
    }
    catch(err){
      return Promise.reject();
    }
  }

  getRecipeDetailsForFilter(params: any, type: any){
    try{
      return new Promise((resolve,reject)=>{
        let url = `https://api.edamam.com/search?q=pizza&app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&from=0&to=20&${type}=${params}`;
        if (type == 'dishType'){
          url = `https://api.edamam.com/search?q=''&app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&from=0&to=20&${type}=${params}`
        }
        this.http.get(url,)
        .subscribe({
          next: (res: any)=> {
            return resolve(res)
          },
          error: (err)=>{
            return reject(err)}
        }
        )
      })
    }
    catch(err){
      return Promise.reject();
    }
  }

  getAllRecipeDetails(){
    try{
      return new Promise((resolve,reject)=>{
        this.http.get(`https://api.edamam.com/search?q=pizza&app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&from=0&to=20`,)
        .subscribe({
          next: (res: any)=> {
            return resolve(res)
          },
          error: (err)=>{
            return reject(err)}
        }
        )
      })
    }
    catch(err){
      return Promise.reject(err);
    }
  }

  getRecipeDataOnSearch(searchData: any){
    try{
      return new Promise((resolve,reject)=>{
        this.http.get(`https://api.edamam.com/search?app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&from=0&to=20&q=pizza,%20${searchData}`,)
        .subscribe({
          next: (res: any)=> {
            return resolve(res)
          },
          error: (err)=>{
            return reject(err)}
        }
        )
      })
    }
    catch(err){
      return Promise.reject();
    }
  }

  // Using Subjects and Observables for component to component data communication (for unrelated components)
  private recipeDataSubject = new BehaviorSubject<any>(null);
  $recipeDataObservable = this.recipeDataSubject.asObservable();
  getSelectedRecipeDetails(recipeData:any){
    this.recipeDataSubject.next(recipeData);
  }
  // app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9
}
