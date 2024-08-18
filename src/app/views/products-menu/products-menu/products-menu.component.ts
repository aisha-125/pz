import { Component } from '@angular/core';

@Component({
  selector: 'app-products-menu',
  templateUrl: './products-menu.component.html',
  styleUrls: ['./products-menu.component.css']
})
export class ProductsMenuComponent {
  statusLogin!: boolean;

  ngOnInit() {
    this.statusLogin = JSON.parse(localStorage.getItem('loginStatus') || 'false');
  }
}
