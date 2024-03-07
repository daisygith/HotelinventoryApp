import {Component, ElementRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RoomsComponent} from "./rooms/rooms.component";
import {NgSwitch, NgSwitchCase, NgSwitchDefault} from "@angular/common";
import {ContainerComponent} from "./container/container.component";
import {EmployeeComponent} from "./employee/employee.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RoomsComponent, NgSwitchCase, NgSwitch, NgSwitchDefault, ContainerComponent,EmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  implements OnInit{
  title = 'hotelinventoryapp';

  @ViewChild('name', {static: true}) name!: ElementRef;

  ngOnInit(): void {
    this.name.nativeElement.innerText = "Hilton Hotel";
  }


  //
  // role = 'Admin';

  // @ViewChild('user', {read:ViewContainerRef}) vcr!: ViewContainerRef;
  //
  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 50;
  // }


}
