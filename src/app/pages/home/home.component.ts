import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth/auth.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  formData: FormGroup
  constructor(private authenticationService: AuthService,
              private router: Router,
              private readonly fb: FormBuilder,) {
    this.formData = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    })
  }

  ngOnInit() {
  }
}
