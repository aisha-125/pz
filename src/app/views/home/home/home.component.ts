import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  currentIndex = 0;
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % 3;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + 3) % 3;
  }
  
  selectStarter(){
    localStorage.setItem('menu','starters');
  }

  selectMain(){
    localStorage.setItem('menu','main-course');
    console.log(localStorage.getItem('menu'));
    
  }

  selectDessert(){
    localStorage.setItem('menu','desserts');
  }
}
