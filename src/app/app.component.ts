import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from "./service/auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app-fe';
  constructor(private authenticationService: AuthService,
              private router: Router) {

  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
