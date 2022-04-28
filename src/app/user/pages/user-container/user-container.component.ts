import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {

  details! : boolean

  constructor() { }

  ngOnInit(): void {
  }

 showDetails(value: boolean) {
   this.details = value
 }

}
