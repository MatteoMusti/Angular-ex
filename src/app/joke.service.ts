import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, repeat, retry, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private http: HttpClient) { }

  joke = {}
  liked = [];
  disliked = [];

  getJoke() {
    return this.http.get('https://v2.jokeapi.dev/joke/Any').pipe(
      repeat({ delay: 5000 }),
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
