import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from "../../service/auth/auth.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isDangKy: boolean = true;
  formData: FormGroup;

  constructor(private authenticationService: AuthService,
              private router: Router,
              private readonly fb: FormBuilder,) {
    this.formData = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
      confirmPassword: [null],
    })
  }

  ngOnInit() {
  }

  login() {
    this.authenticationService.login(this.formData.value.username, this.formData.value.password).subscribe(() => {
        this.router.navigate(['home']);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Đăng nhập thành công!',
          showConfirmButton: false,
          timer: 1500
        });
      }, error => {

      }
    );
  }

  showForm(status: boolean) {
    this.isDangKy = status;
  }

  register() {
    let singUpForm = {
      username  : this.formData.value.username,
      password  : this.formData.value.password,
      confirmPassword  : this.formData.value.confirmPassword,
    }
    this.authenticationService.register(singUpForm).subscribe(() => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Đăng ký thành công!',
          showConfirmButton: false,
          timer: 1500
        });
        this.isDangKy = true;
      }, error => {

      }
    );
  }
}
