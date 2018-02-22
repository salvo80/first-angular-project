import { Component, OnInit } from '@angular/core';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  public getUsername() {
    return this.userService.getUser().name;
  }

}
