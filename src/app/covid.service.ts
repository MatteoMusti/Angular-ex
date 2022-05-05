import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CountryRoute } from './model/CountryRoute';

import { throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<CountryRoute>('https://api.covid19api.com/').pipe(
      tap((data) => console.log(`getAll eseguito: ${data}`)),
      retry(3),
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent){
      console.error('An error occurred:', error.error.message)
    } else {
      console.error(
        `Backend returned code ${error.status} ` +
        `body was: ${error.error}`);
    }
    return throwError(() => new Error(
      'Something bad happened; please try again later')
    )
  }   

}

