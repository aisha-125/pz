import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Food } from 'src/app/models/food/food';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

  // getFoods(): Observable<Food[]> {
  //   return this.http.get('assets/db_json/data.json').pipe(
  //     map((data: any) => {
  //       const allFoods:Food[] = [];
  
  //       data.food.forEach((foodItem: any) => {
  //         const type = Object.keys(foodItem)[0];
  //         allFoods.push(...foodItem[type]);
  //       });
  
  //       return allFoods;
  //     })
  //   );
  // }

  getFoodByType(type: string): Observable<Food[]> {
    return this.http.get('assets/db_json/data.json').pipe(
      map((data: any) => {
        const foodItem = data.food.find((item: {}) => Object.keys(item)[0] === type);
        return foodItem ? foodItem[type] : [];
      })
    );
  }
}
