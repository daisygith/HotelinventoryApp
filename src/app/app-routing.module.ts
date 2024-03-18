import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeComponent} from "./employee/employee.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {LoginComponent} from "./login/login.component";
import {loginActivateGuard} from "./guards/login.guard";


const routes: Routes = [
  { path:'employee',component: EmployeeComponent , canActivate: [loginActivateGuard]},
  { path: 'login', component:LoginComponent},
  { path: 'rooms',
    loadChildren:()=>import('./rooms/rooms.module').then((m)=>m.RoomsModule),
    canActivate: [loginActivateGuard]
  },
  // { path: 'rooms', loadChildren:()=>import('./rooms/rooms.module').then((m)=>m.RoomsModule), canActivate: [loginActivateGuard]},
  { path:'', redirectTo: '/login', pathMatch:'full'},
  { path: 'booking/:roomid', loadChildren:  () => import('./booking/booking.module').then(m => m.BookingModule) /*, canActivate: [loginActivateGuard]*/ },
  { path: 'comment', loadChildren: () => import('./comment/comment.module').then(m => m.CommentModule) },
  { path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
