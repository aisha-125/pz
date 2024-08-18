import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-btn-submit-order',
  templateUrl: './btn-submit-order.component.html',
  styleUrls: ['./btn-submit-order.component.css']
})
export class BtnSubmitOrderComponent {
  submitOrder(){
    Swal.fire({
      title: '¿Estás seguro/a?',
      text: "Una vez enviado no hay vuelta atrás",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Pedir',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Pedido enviado',
        )
      }
    })
  }
}
