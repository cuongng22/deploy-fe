import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../../service/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css']
})
export class MyPageComponent implements OnInit {
  @Input() page : string
  constructor(
    private authenticationService: AuthService,
    private router  :Router
  ) { }

  ngOnInit(): void {
  }

  goPage(content: string, event: any) {
    if (event) {
      event.preventDefault();
    }
    this.page= content;
  }
  logout(event: MouseEvent) {
    event.preventDefault();
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
