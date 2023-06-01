import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../data.model';

@Component({
  selector: 'app-book-data',
  templateUrl: './book-data.component.html',
  styleUrls: ['./book-data.component.css']
})
export class BookDataComponent {

  public books: Book[] = [];
  public posts: any;

  constructor(private http: BookService) {
    http.getBooks().then(bookData => this.books = bookData);
  }

  public loadPosts() {
    this.http.getPosts().subscribe({
      next: (data) => {
        this.posts = data;
        console.log(this.posts);
      },
      error: (err)=> console.log(err),
      complete: ()=> console.log('fetch complete.')
    })
  }
}
