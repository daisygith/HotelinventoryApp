import { Component } from '@angular/core';
import {RoomList} from "../rooms";
import {FormsModule, NgForm} from "@angular/forms";
import {JsonPipe, NgFor, NgIf} from "@angular/common";
import {RoomsService} from "../services/rooms.service";

@Component({
  selector: 'app-rooms-add',
  standalone: true,
  imports: [
    FormsModule,
    JsonPipe,
    NgIf
  ],
  templateUrl: './rooms-add.component.html',
  styleUrl: './rooms-add.component.scss'
})
export class RoomsAddComponent {

  room:RoomList = {
    roomType: '',
    amenities: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    photos: '',
    price: 0,
    rating:0,
  };

  sucessMessage: string = '';

  constructor(private roomsService: RoomsService) {
  }

  AddRoom(roomsForm: NgForm){
    this.roomsService
      .addRoom(this.room)
      .subscribe((data)=> {
        this.sucessMessage = 'Room Added Successfully';
        roomsForm.resetForm({
          roomType: '',
          amenities: '',
          checkinTime: new Date(),
          checkoutTime: new Date(),
          photos: '',
          price: 0,
          rating:0,
        });
      });
  }

}
