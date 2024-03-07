import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input, OnChanges, OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges, OnDestroy{

  @Input() rooms : RoomList[] = [];

  @Input() title : string = '';

  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() {  }

  // @Input() public param: any;
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes['title']){
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  ngOnInit(): void {
  }

  selectRoom(room : RoomList) {
    this.selectedRoom.emit(room);
  }

  ngOnDestroy() {
    console.log('on destroy is called');
  }

}
