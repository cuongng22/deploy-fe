import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from "../../service/auth/auth.service";
import Swal from 'sweetalert2';
import {Notification} from "../../service/notification";

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
              private noti: Notification,
              private readonly fb: FormBuilder,) {
    this.formData = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
      name: [null, Validators.required],
      gender: ['00', Validators.required],
      email: [null, Validators.required],
      confirmPassword: [null],
    } , { validators: this.passwordMatchValidator })
  }

  ngOnInit() {
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password').value;
    const confirmPassword = formGroup.get('confirmPassword').value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  // Phương thức này được gọi khi người dùng nhập vào các trường mật khẩu
  checkPasswordsMatch() {
    if (this.formData.hasError('passwordMismatch')) {
      // Nếu hai trường mật khẩu không khớp nhau, sẽ có lỗi và thông báo sẽ được hiển thị
      this.formData.get('confirmPassword').setErrors({ 'passwordMismatch': true });
    } else {
      // Nếu hai trường mật khẩu khớp nhau, lỗi sẽ được xóa
      this.formData.get('confirmPassword').setErrors(null);
    }
  }

  async login() {
    let body = {
      username : this.formData.value.username,
      password : this.formData.value.password
    }
    this.authenticationService.login(body).subscribe(() => {
        this.router.navigate(['home']);
        this.noti.success("Đăng nhập thành công!");
      }, error => {
      this.noti.success("Đăng nhập thất bại, vui lòng kiểm tra lại thông tin.");
      }
    );
  }

  showForm(status: boolean) {
    this.isDangKy = status;
  }

  register() {
    let singUpForm = this.formData.value;
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
