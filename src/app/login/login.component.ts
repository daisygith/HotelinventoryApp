import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HoverDirective} from "../hover.directive";
import {JsonPipe} from "@angular/common";
import {Router} from "@angular/router";
import {LoginService} from "./login.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    HoverDirective,
    JsonPipe
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  email: string ='';
  password: string='';

  constructor(private router:Router, private loginService: LoginService) {
  }

  ngOnInit(): void {
  }

  login(){
    if(this.loginService.login(this.email,this.password)){
      // this.router.navigateByUrl('/rooms/add');
      this.router.navigate(['/rooms']);
      // alert("Login Successful");
    }
  }

}
