import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!:string;
  password!:string;

  constructor(private router: Router){}

  login(loginForm: NgForm){
    if (loginForm.valid) {
      this.email='';
      this.password='';
      localStorage.setItem('loginStatus', 'true');
      this.router.navigateByUrl('/');
    } else {
      alert('Por favor, complete todos los campos requeridos.');
    }
  }
}
