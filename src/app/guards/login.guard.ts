import {CanActivateFn, CanMatchFn} from '@angular/router';
import {LoginService} from "../login/login.service";
import {inject} from "@angular/core";


export const loginActivateGuard: CanActivateFn = (route, state) => {
  const loginService: LoginService = inject(LoginService);
  // console.log(loginService);
  return loginService.isLoggedIn;
};


export const loginMatchGuard: CanMatchFn = (route, segments) => {
  return true;
};


