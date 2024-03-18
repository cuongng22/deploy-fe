import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {HomeComponent} from "./home.component";
import {MyPageModule} from "./my-page/my-page.module";
import {MyPageComponent} from "./my-page/my-page.component";


@NgModule({
  declarations: [HomeComponent, MyPageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MyPageModule
  ]
})
export class HomeModule { }
