import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counter = new BehaviorSubject(0);
  public counter$ = this.counter.asObservable();

  constructor() { }

  getValue(): Observable<number> {
    return this.counter$.pipe(
      tap(() => console.log('getValue eseguito'))
    )
  }

  // increase(value: number): Observable<number> {
    
  // }

  // increase(value: number = 1) {
  //   this.counter += value;
  //   return this.counter;
  // }

  // decrease(value: number = 1) {
  //   if (value > this.counter) {
  //     console.error('the counter cannot be negative');
  //     this.counter = 0;
  //   }
  //   this.counter -= value;
  //   return this.counter;
  // }


}
