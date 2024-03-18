import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css']
})
export class MyPageComponent implements OnInit {
  @Input() page : string
  constructor() { }

  ngOnInit(): void {
  }

}
