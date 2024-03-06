import {Component, OnInit} from '@angular/core';
import {Room, RoomList} from "./rooms";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
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
    },
    {
      roomNumber: 2,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 1000,
      photos: 'https://unsplash.com/photos/black-laptop-computer-on-table-0IwypLLbHiA',
      checkinTime: new Date('11-Nov-2025'),
      checkoutTime:new Date('12-Nov-2025'),
    },
    {
      roomNumber:3,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 15000,
      photos: 'https://unsplash.com/photos/black-laptop-computer-on-table-0IwypLLbHiA',
      checkinTime: new Date('11-Nov-2025'),
      checkoutTime:new Date('12-Nov-2025'),
    },
];

  constructor() { }

  ngOnInit() { }
  toggle() {
    this.hideRooms = !this.hideRooms;
  }

}
