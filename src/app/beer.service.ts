import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable} from 'rxjs';
import { BEERS } from './mock/mock-beers';
import { Beer } from './models/beer';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  private beers: Beer[] = BEERS;

  private subjectBeer = new BehaviorSubject<Beer[]>(this.beers);
  public beers$ = this.subjectBeer.asObservable();

  constructor() { }

  getBeers(): Observable<Beer[]> {
    return this.beers$
  }

  getBeerById(id: number): Observable<Beer>{
    const beer = this.beers.filter(beer => beer.id === id);
    return from(beer)
  }

}
