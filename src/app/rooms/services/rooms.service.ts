import {Inject, Injectable} from '@angular/core';
import {RoomList} from "../rooms";
import {APP_SERVICE_CONFIG} from "../../AppConfig/appconfig.service";
import {AppConfig} from "../../AppConfig/appconfig.interface";
import { environment } from '../../../environments/environment';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})

export class RoomsService {

  roomList : RoomList[] = [];
  constructor(@Inject(APP_SERVICE_CONFIG) private config:AppConfig,
              private http: HttpClient) {
    console.log(environment.apiEndpoint);
    console.log('Room Service Initialized...');
  }

  getRooms(){
    return this.roomList;
  }
}
