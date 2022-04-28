import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.css']
})
export class EditCounterComponent implements OnInit {

  // editValue: number = document.querySelector('input').value

  @Output() valueToAdd = new EventEmitter();
  @Output() valueToSubtract = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toAdd() {
    let value = Number(document.querySelector('input')!.value);
    this.valueToAdd.emit(value)
  }

  toSubtract() {
    let value = Number(document.querySelector('input')!.value);
    this.valueToSubtract.emit(value)
  }

}
