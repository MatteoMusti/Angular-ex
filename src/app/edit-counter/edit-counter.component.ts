import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.css']
})
export class EditCounterComponent implements OnInit {

  // editValue: number = document.querySelector('input').value

  @Output() add = new EventEmitter();
  @Output() subtract = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toAdd() {
    let value = Number(document.querySelector('input')!.value);
    this.add.emit(value)
  }

  toSubtract() {
    let value = Number(document.querySelector('input')!.value);
    this.subtract.emit(value)
  }

}
