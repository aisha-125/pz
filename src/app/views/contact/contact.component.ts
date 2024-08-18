import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  name:string="";
  message:string="";

  contact(contactForm: NgForm){
    if (contactForm.valid) {
      this.name = "";
      this.message = "";
      //mensaje enviado PopUp
    } else {
      alert('Por favor, complete todos los campos requeridos.');
    }
  }
}
