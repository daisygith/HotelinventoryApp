import {Component, ElementRef, Inject, OnInit, Optional, ViewChild, ViewContainerRef} from '@angular/core';
import {LoggerService} from "./logger.service";
import {BROWSER_STORAGE} from "./localstorage.token";
import {InitService} from "./init.service";
import {ConfigService} from "./serivces/config.service";
import {NavigationEnd, NavigationStart, Router} from "@angular/router";
import {filter} from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  implements OnInit{
  title = 'hotelinventoryapp';

  @ViewChild('name', {static: true}) name!: ElementRef;

  constructor(@Optional() private loggerService: LoggerService,
              @Inject(BROWSER_STORAGE) private localStorage : Storage,
              private initService: InitService,
              private configService: ConfigService,
              private router:Router
  ) {
    console.log(initService.config);
  }

  ngOnInit(){
    // this.router.events.subscribe((event) => {
    //   console.log(event);
    // })
    this.router.events.pipe(
      filter((event) => event instanceof NavigationStart)
    ).subscribe((event) =>{
    console.log('NavigationStart');
    });

    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event) =>{
    console.log('Navigation Completed');
    });

    this.loggerService?.log('AppComponent.ngOnInit()');
    // this.name.nativeElement.innerText = "Hilton Hotel";
    this.localStorage.setItem('name','Hilton Hotel');

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
