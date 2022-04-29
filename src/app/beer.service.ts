import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { BEERS } from './mock/mock-beers';
import { Beer } from './models/beer';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  private beers: Beer[] = BEERS;

  private subjectBeer = new BehaviorSubject<Beer[]>(this.beers);
  public beer$ = this.subjectBeer.asObservable();

  constructor() { }

  getBeers(): Observable<Beer[]> {
    return this.beer$
  }

  getBeerById(id: number){
    const beer = this.beers.filter(beer => beer.id === id);
    return from(beer)
  }

}
