import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private subCounter = new BehaviorSubject(0);
  public counter$ = this.subCounter.asObservable();

  constructor() { }

  getValue(): Observable<number> {
    return this.counter$.pipe(
      tap((data) => { 
        if (data < 0){
          console.error('il counter non può essere negativo')
          this.subCounter.next(0)
        } else
      console.log('getValue eseguito:', data)
    })
    )
  }

  increase(value: number): void {
    this.subCounter.next(this.subCounter.value + value)
  }

  decrease(value: number): void {
    this.subCounter.next(this.subCounter.value - value)
  }

}


