import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/model/user';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {

  @Input() user!: IUser

  constructor() { }

  ngOnInit(): void {
  }

}
