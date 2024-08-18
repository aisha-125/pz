import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  ngOnInit(){
    localStorage.getItem('menu')
  }

  getDesserts() {
    localStorage.setItem('menu','desserts');
    this.reloadPage()
  }

  getMainCourse() {
    localStorage.setItem('menu','main-course');
    this.reloadPage()
  }

  getStarters() {
    localStorage.setItem('menu','starters');
    this.reloadPage()
  }

  reloadPage() {
    window.location.reload();
  }
}
