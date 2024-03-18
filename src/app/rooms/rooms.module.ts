import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import {RoomsListComponent} from "./rooms-list/rooms-list.component";
import {RoomsComponent} from "./rooms.component";
import {RoomsAddComponent} from "./rooms-add/rooms-add.component";
import {RoomsBookingComponent} from "./rooms-booking/rooms-booking.component";
import {HeaderModule} from "../header/header.module";
import {RouteConfigToken} from "../serivces/routeConfig.service";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    RoomsListComponent, RoomsComponent,RoomsAddComponent,RoomsBookingComponent, HeaderModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: RouteConfigToken,
      useValue: {title: 'Home'},
    },
  ],
})
export class RoomsModule { }
