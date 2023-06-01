import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url:string = "https://jsonplaceholder.typicode.com/users";
  constructor(private httpReq: HttpClient) { }

  public getUserDetails() {
    return this.httpReq.get(this.url).pipe(
      catchError((err) => {
        console.log("Error caught");
        console.log(err);
        return throwError(() => new Error(err.message));
      })
    );
  }
}
