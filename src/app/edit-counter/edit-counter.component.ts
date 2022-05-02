import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.css']
})
export class EditCounterComponent implements OnInit {

  @Output() add = new EventEmitter();
  @Output() subtract = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toAdd(): void {
    let value = Number(document.querySelector('input')!.value);
    this.add.emit(value);
  }

  toSubtract(): void {
    let value = Number(document.querySelector('input')!.value);
    this.subtract.emit(value);
  }

}
