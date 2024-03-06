import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  LowerCasePipe,
  NgClass,
  NgForOf,
  PercentPipe,
  SlicePipe,
} from "@angular/common";
import {RoomList} from "../rooms/rooms";

@Component({
  selector: 'app-rooms-list',
  standalone: true,
  imports: [
    NgClass,
    SlicePipe,
    PercentPipe,
    CurrencyPipe,
    LowerCasePipe,
    DatePipe,
    DecimalPipe,
    NgForOf
  ],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit{

  @Input() rooms : RoomList[] = [];

  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() {
  }
  ngOnInit(): void {
  }

  selectRoom(room : RoomList) {
    this.selectedRoom.emit(room);
  }

}
