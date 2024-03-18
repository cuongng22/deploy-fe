import { Injectable } from '@angular/core'
import Swal from "sweetalert2";
@Injectable({
  providedIn: 'root'
})
export class Notification {
  constructor() {

  }

  success(title) {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: title,
      showConfirmButton: false,
      timer: 1500
    });
  }

  error(title) {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: title,
      showConfirmButton: false,
      timer: 1500
    });
  }

  warning(title) {
    Swal.fire({
      position: 'top-end',
      icon: 'warning',
      title: title,
      showConfirmButton: false,
      timer: 1500
    });
  }
}
