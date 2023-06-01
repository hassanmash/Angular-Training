import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Book } from './data.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  public getBooks(){
    return firstValueFrom(this.http.get<any>('assets/books.json'))
      .then(res=> <Book[]>res.data)
      .then(data=> 
        { 
          console.log(data);
          return data; 
        });
  }

  public getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/photos')
  }
}
