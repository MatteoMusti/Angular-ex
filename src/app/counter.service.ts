import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  Counter: number = 0

  private subCounter = new BehaviorSubject(this.Counter);
  public counter$ = this.subCounter.asObservable();

  constructor() { }

  getValue(): Observable<number> {
    return this.counter$.pipe(
      tap((data) => console.log('getValue eseguito:', data))
    )
  }

  increase(value: number): Observable<number> {
    this.Counter += value;
    this.subCounter.next(this.Counter)
     return this.counter$.pipe(
          tap(data => console.log(data))
     )
    //  .pipe(
    //   map(x => x + value),
    //   tap(data => console.log(data))
    // )
  }

  decrease(value: number): Observable<number> {
    this.Counter -= value;
    this.subCounter.next(this.Counter)
     return this.counter$.pipe(
          tap(data => console.log(data))
     )
    //    return this.counter$.pipe(
  //     map(x => x - value),
  //     tap(data => console.log(data))
  //   )
  }

  
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
