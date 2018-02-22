import { Injectable } from '@angular/core';
import {UserModel} from './models/user.model';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService implements CanActivate {
  private user: UserModel;
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log(route.routeConfig.path);
    return route.routeConfig.path === 'login' || this.isLogged() && this.user.allow.includes(route.routeConfig.path);
  }

  constructor() { }

  public isLogged() {
    return this.user != null;
  }

  public setLogged(um) {
    if (this.user != null && this.user.name === 'pippo') {
      this.user.allow = [''];
    }
    this.user = um;
  }
  public getUser() {
    return this.user;
  }
}
