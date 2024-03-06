import {Component, OnInit} from '@angular/core';
import {Room, RoomList} from "./rooms";
import {
  CurrencyPipe,
  DatePipe, DecimalPipe,
  JsonPipe,
  LowerCasePipe,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  PercentPipe, SlicePipe
} from "@angular/common";

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    NgClass,
    NgStyle,
    DatePipe,
    LowerCasePipe,
    CurrencyPipe,
    PercentPipe,
    JsonPipe,
    SlicePipe,
    DecimalPipe
  ],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit {

  hotelName = 'Hilton Hotel';

  numberOfRooms = 10;

  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  };

  roomList : RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://unsplash.com/photos/black-laptop-computer-on-table-0IwypLLbHiA',
      checkinTime: new Date('11-Nov-2025'),
      checkoutTime:new Date('12-Nov-2025'),
      rating: 4.5,
    },
    {
      roomNumber: 2,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 1000,
      photos: 'https://unsplash.com/photos/black-laptop-computer-on-table-0IwypLLbHiA',
      checkinTime: new Date('11-Nov-2025'),
      checkoutTime:new Date('12-Nov-2025'),
      rating: 3.4,
    },
    {
      roomNumber:3,
      roomType: 'Private Suite',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 15000,
      photos: 'https://unsplash.com/photos/black-laptop-computer-on-table-0IwypLLbHiA',
      checkinTime: new Date('11-Nov-2025'),
      checkoutTime:new Date('12-Nov-2025'),
      rating: 2.6,
    },
];

  constructor() { }

  ngOnInit() { }
  toggle() {
    this.hideRooms = !this.hideRooms;
  }

}
