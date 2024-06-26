import { CanActivateChildFn } from '@angular/router';
import {LoginService} from "../../login/login.service";
import {inject} from "@angular/core";

export const roomGuard: CanActivateChildFn = (childRoute, state) => {
  const loginService: LoginService = inject(LoginService);
  return loginService.isAdmin;
};
