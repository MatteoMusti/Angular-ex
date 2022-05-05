import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CountryRoute } from './model/CountryRoute';

// import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<CountryRoute>('https://api.covid19api.com/')
  }

}

