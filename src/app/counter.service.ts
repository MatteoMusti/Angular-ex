import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counter = 0;

  constructor() { }

  getValue() {
    return this.counter
  }

  increase(value: number = 1) {
    this.counter += value;
    return this.counter;
  }

  decrease(value: number = 1) {
    if (value > this.counter) {
      console.error('the counter cannot be negative');
      this.counter = 0;
    }
    this.counter -= value;
    return this.counter;
  }


}
