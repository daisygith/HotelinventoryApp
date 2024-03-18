
import {ContainerComponent} from "./container/container.component";
import {EmployeeComponent} from "./employee/employee.component";
import {APP_INITIALIZER, ErrorHandler, NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RouterOutlet} from "@angular/router";
import {NgSwitch, NgSwitchCase, NgSwitchDefault} from "@angular/common";
import {APP_CONFIG, APP_SERVICE_CONFIG} from "./AppConfig/appconfig.service";
import {RequestInterceptor} from "./request.interceptor";
import {InitService} from "./init.service";
import {AppRoutingModule} from "./app-routing.module";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppNavComponent } from './app-nav/app-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {FormsModule} from "@angular/forms";
import {RouteConfigToken} from "./serivces/routeConfig.service";
import {GlobalErrorHandler} from "./errorhandler.service";
// import {RoomsModule} from "./rooms/rooms.module";

function initFactory(initService: InitService){
  return() => initService.init();
}

@NgModule({
  declarations: [AppComponent, AppNavComponent],
  imports: [BrowserModule, HttpClientModule, EmployeeComponent,
    ContainerComponent,
    RouterOutlet, NgSwitchCase, NgSwitch, NgSwitchDefault, AppRoutingModule, MatToolbarModule,
    MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, FormsModule],
  providers: [
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG,
    },
    {
      provide: RouteConfigToken,
      useValue: {title: 'Home'},
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initFactory,
      deps: [InitService],
      multi:true,
    },
    {
      provide: ErrorHandler, useClass: GlobalErrorHandler
    },
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
})

export class AppModule {}
