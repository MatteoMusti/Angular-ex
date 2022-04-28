import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-show-counter',
  templateUrl: './show-counter.component.html',
  styleUrls: ['./show-counter.component.css']
})
export class ShowCounterComponent implements OnInit {

  counter! : number

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.counter = this.counterService.getValue()
  }

  add(value: number) {
    this.counter = this.counterService.increase(value)
  }

  subtract(value: number) {
    this.counter = this.counterService.decrease(value)
  }
  
}
