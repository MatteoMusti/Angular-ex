import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-show-counter',
  templateUrl: './show-counter.component.html',
  styleUrls: ['./show-counter.component.css']
})
export class ShowCounterComponent implements OnInit, OnDestroy {

  counter!: number
  subscription!: Subscription

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.subscription = this.counterService.getValue().subscribe(data => this.counter = data)
    console.log(this.counter)
  }

  add(value: number) {
    this.counterService.increase(value).subscribe(data => this.counter = data)
  }

  subtract(value: number) {
    this.counterService.decrease(value).subscribe(data => this.counter = data)

  }
    
  // subtract(value: number) {
    //   this.counter = this.counterService.decrease(value)
    // }
    
    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }
}
