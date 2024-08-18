import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent {
  username!:string;
  email!:string;
  password!:string;

  singup(singupForm: NgForm){
    if (singupForm.valid) {
      console.log('hola');
    } else {
      alert('Por favor, complete todos los campos requeridos.');
    }  
  }
}