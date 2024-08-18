import { Component } from '@angular/core';
import { Food } from 'src/app/models/food/food';
import { FoodService } from 'src/app/services/food/food.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  starters: Array<Food> = [];
  mainCourses: Array<Food> = [];
  desserts: Array<Food> = [];
  menuSelected!: string;

  constructor(private foodService:FoodService){}

  ngOnInit(): void {
    this.menuSelected = localStorage.getItem('menu') || 'main-course';
    console.log(this.menuSelected);
    this.loadFoods(); 
  }

  getDesserts() {
    this.menuSelected = 'desserts';
    localStorage.setItem('menu','desserts');
    this.loadFoods();
  }

  getMainCourse() {
    this.menuSelected = 'main-course';
    localStorage.setItem('menu','main-course');
    this.loadFoods();
  }

  getStarters() {
    this.menuSelected = 'starters';
    localStorage.setItem('menu','starters');
    this.loadFoods();
  }

  loadFoods() {
    this.foodService.getFoodByType(this.menuSelected).subscribe(data => {
      if (this.menuSelected === 'starters') {
        this.starters = data;
      } else if (this.menuSelected === 'main-course') {
        this.mainCourses = data;
      } else if (this.menuSelected === 'desserts') {
        this.desserts = data;
      }
    });
  }
}
