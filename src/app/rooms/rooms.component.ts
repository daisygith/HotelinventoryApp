import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck, OnDestroy,
  OnInit,
  QueryList, SkipSelf,
  ViewChild,
  ViewChildren
} from '@angular/core';
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
  PercentPipe, SlicePipe} from "@angular/common";
import {RoomsListComponent} from "./rooms-list/rooms-list.component";
import {HeaderComponent} from "../header/header.component";
import {RoomsService} from "./services/rooms.service";

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
    DecimalPipe,
    RoomsListComponent,
    HeaderComponent
  ],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit{

  hotelName = 'Hilton Hotel';

  numberOfRooms = 10;

  hideRooms = false;

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  };

  title = 'Room List';

  roomList: RoomList[] = [];

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  // roomService = new RoomsService();

  constructor(@SkipSelf() private roomsService: RoomsService) {
  }
  ngOnInit() {
    // console.log(this.headerComponent);
    this.roomList = this.roomsService.getRooms();

  }


  ngAfterViewChecked(): void {

    }

  ngAfterViewInit(): void {
        // console.log(this.headerComponent);
    this.headerComponent.title = "Room View";

    this.headerChildrenComponent.last.title = 'Last Title';
    // this.headerComponent.get()
    }

  ngDoCheck(): void {
        console.log('on changes is called');
    }


  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List";
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: '4',
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://unsplash.com/photos/black-laptop-computer-on-table-0IwypLLbHiA',
      checkinTime: new Date('11-Nov-2025'),
      checkoutTime: new Date('12-Nov-2025'),
      rating: 4.5,
    };

    // this.roomList.push(room);
    this.roomList = [...this.roomList,room];
  }


}
