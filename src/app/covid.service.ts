import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from './model/Country';

// import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<Country>('https://api.covid19api.com/')
  }

}

