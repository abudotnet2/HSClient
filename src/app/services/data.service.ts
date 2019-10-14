import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpHeaders, HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Hero } from '../models/Hero';

@Injectable({
  providedIn: 'root'
})
export class DataService {

constructor(private http: HttpClient) { }
private heroesUrl: string;

private httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

public  download(url: string) {

  // this.downloaderService.getTextFile(url)
  //   .subscribe(results => this.contents = results);
}
/** POST: add a new hero to the database */
public post(hero: Hero): Observable<Hero> {
  return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions)
    .pipe(
      catchError(this.handleError('addHero'))
    );
}
/** DELETE: delete the hero from the server */
deleteHero(id: number): Observable<{}> {
  const url = `${this.heroesUrl}/${id}`; // DELETE api/heroes/42
  return this.http.delete(url, this.httpOptions)
    .pipe(
      catchError(this.handleError('deleteHero'))
    );
}
/** PUT: update the hero on the server. Returns the updated hero upon success. */
updateHero(hero: Hero): Observable<Hero> {
  return this.http.put<Hero>(this.heroesUrl, hero, this.httpOptions)
    .pipe(
      catchError(this.handleError('updateHero', hero))
    );
}
private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError('Something bad happened; please try again later.');
}

}
