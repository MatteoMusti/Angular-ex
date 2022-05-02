import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-show-counter',
  templateUrl: './show-counter.component.html',
  styleUrls: ['./show-counter.component.css']
})
export class ShowCounterComponent implements OnInit, OnDestroy {

  counter!: number;
  subscription!: Subscription;

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.subscription = this.counterService.getValue().subscribe(data => this.counter = data)
    console.log(this.counter)
  }

  add(value: number): void {
    this.counterService.increase(value)
  }

  subtract(value: number): void {
    this.counterService.decrease(value)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
