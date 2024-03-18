import {AfterViewInit, Component, DoCheck, OnInit, QueryList, SkipSelf, ViewChild, ViewChildren} from '@angular/core';
import {Room, RoomList} from "./rooms";
import {
  AsyncPipe,
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  JsonPipe,
  LowerCasePipe,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  PercentPipe,
  SlicePipe
} from "@angular/common";
import {RoomsListComponent} from "./rooms-list/rooms-list.component";
import {HeaderComponent} from "../header/header.component";
import {RoomsService} from "./services/rooms.service";
import {catchError, map, Observable, of, Subject, Subscription} from "rxjs";
import {HttpEventType} from "@angular/common/http";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLink, RouterOutlet} from "@angular/router";
import {ConfigService} from "../serivces/config.service";

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
    HeaderComponent,
    AsyncPipe,
    FormsModule,
    RouterOutlet,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit{

  hotelName = 'Hilton Hotel';

  numberOfRooms = 10;

  hideRooms = true;

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  };

  title = 'Room List';

  roomList: RoomList[] = [];

  stream = new Observable(observe => {
    observe.next('user1');
    observe.next('user2');
    observe.next('user3');
    observe.complete();
    // observe.error('error');
  });

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  // roomService = new RoomsService();

  error: string = ' ';

  totalBytes = 0;

  subscription !: Subscription;

  error$ = new Subject<string> ;

  getError$  = this.error$.asObservable();

  rooms$ = this.roomsService.getRoom$.pipe(
    catchError((err) => {
      // console.log(err);
      this.error$.next(err.message);
    return of([]);
    })
  );

  priceFilter = new FormControl()



  roomsCount$ = this.roomsService.getRoom$.pipe(
    map((rooms) => rooms.length)
  )

  constructor(@SkipSelf() private roomsService: RoomsService,
              private configService:ConfigService) {
  }
  ngOnInit() {

    this.roomsService.getPhotos().subscribe((event) =>{
    // console.log(data);
      switch (event.type){
        case HttpEventType.Sent:{
          console.log('Request has been made!');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('Request success!');
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totalBytes += event.loaded;
          break;
        }
        case HttpEventType.Response: {
          console.log(event.body);
        }
      }
  });

    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('complete'),
      error: err => console.log(err)
    });
    this.stream.subscribe((data) => console.log(data));
    // console.log(this.headerComponent);
    // this.roomList = this.roomsService.getRooms();
    // console.log(this.roomsService.getRooms());
    // this.roomsService.getRoom$.subscribe(rooms => {
    //   this.roomList = rooms;
    // });

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
      // roomNumber: '4',
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
    this.roomsService.addRoom(room).subscribe((data) => {
      this.roomList = data;
    });
  }

  editRoom() {
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

    this.roomsService.editRoom(room).subscribe((data) => {
      this.roomList = data;
    });
    // this.roomList = [...this.roomList,room];
  }

  deleteRoom(){
    this.roomsService.delete('4').subscribe((data) => {
      this.roomList = data;
    })
  }

  ngOnDestroy() {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

}



//getDate -> addData ->getData

//getDate -> continuous stream of data -> addData
