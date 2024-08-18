import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusLoginService {

  constructor() { }

    login(){
      localStorage.setItem('login','true');
      //Busqueda de usuario
    }

    logout(){
      localStorage.setItem('login','false');
    }
}
