import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {UserModel} from "../models/user.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() username;
  @Input() password;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  public logout() {
    this.userService.setLogged(null);
  }
  public login() {
    const user = new UserModel(1, this.username, ['']);
    this.userService.setLogged(user);
    this.router.navigateByUrl('');
  }
}
