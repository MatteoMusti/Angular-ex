import { Component, OnInit } from '@angular/core';
import { USERS } from 'src/app/model/mock-users';
import { IUser } from 'src/app/model/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public users: IUser[] = USERS;

  removedUsers: IUser[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  removeUser(user: IUser): void {
    this.removedUsers.push(user)
  }
}
