import {Inject, Injectable} from '@angular/core';
import {RoomList} from "../rooms";
import {APP_SERVICE_CONFIG} from "../../AppConfig/appconfig.service";
import {AppConfig} from "../../AppConfig/appconfig.interface";
import { environment } from '../../../environments/environment';
import {HttpClient, HttpHeaders, HttpRequest} from "@angular/common/http";
import {shareReplay} from "rxjs";
@Injectable({
  providedIn: 'root'
})

export class RoomsService {

  roomList : RoomList[] = [];
  // headers = new HttpHeaders({ 'token': '1020308iroifdhf'});
  getRoom$ = this.http.get<RoomList[]>('api/rooms' /*,
    {headers: this.headers,} */).pipe(
    shareReplay(1)
  );

  constructor(@Inject(APP_SERVICE_CONFIG) private config:AppConfig,
              private http: HttpClient) {
    console.log(environment.apiEndpoint);
    console.log('Room Service Initialized...');
  }

  getRooms(){
    // return this.roomList;
    return this.http.get<RoomList[]>('api/rooms');
  }

  addRoom(room: RoomList){
  return this.http.post<RoomList[]>('/api/rooms', room /*, {
    headers : this.headers,
  }*/);
}

  editRoom(room : RoomList) {
    return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}`,room);
  }

  delete(id:string){
    return this.http.delete<RoomList[]>(`/api/rooms/${id}`);
  }

  getPhotos(){
    const request = new HttpRequest('GET',`https://jsonplaceholder.typicode.com/photos`,
      {
            reportProgress: true,
          }
    );
    return this.http.request(request);
  }
}







