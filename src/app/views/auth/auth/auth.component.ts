import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent {
  account:boolean=true;

  switchAccountStatus(){
    if(this.account){
      this.account = false;
    } else {
      this.account = true;
    }
  }
}