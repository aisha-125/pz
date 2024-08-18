import { Component, SimpleChanges } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  loginStatus: boolean = false;


  ngOnInit() {
    this.checkStatus();
  }

  checkStatus() {
    this.loginStatus = JSON.parse(localStorage.getItem('loginStatus') || 'false');
  }

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkStatus();
      }
    });
  }

}