import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPageRoutingModule } from './my-page-routing.module';
import {FriendsComponent} from "./friends/friends.component";
import {InfoComponent} from "./info/info.component";
import {PhotoComponent} from "./photo/photo.component";
import {TimelineComponent} from "./timeline/timeline.component";


@NgModule({
  declarations: [
    FriendsComponent,
    InfoComponent,
    PhotoComponent,
    TimelineComponent
  ],
  exports: [
    TimelineComponent,
    FriendsComponent,
    InfoComponent,
    PhotoComponent,
  ],
  imports: [
    CommonModule,
    MyPageRoutingModule
  ]
})
export class MyPageModule { }
