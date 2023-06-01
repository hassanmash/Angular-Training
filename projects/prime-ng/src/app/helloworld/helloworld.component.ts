import { Component } from '@angular/core';
import { Book } from '../data.model';

@Component({
  selector: 'app-helloworld',
  templateUrl: './helloworld.component.html',
  styleUrls: ['./helloworld.component.css']
})
export class HelloworldComponent {
  public books: Book[];
  public selectedBook?: Book;
  // public selectedBook?: string;

  constructor () {
    this.books = [
      { name: 'Book1', author: 'Author1', price: 10 },
      { name: 'Book2', author: 'Author2', price: 10 },
      { name: 'Book3', author: 'Author3', price: 10 },
      { name: 'Book4', author: 'Author4', price: 10 },
      { name: 'Book5', author: 'Author5', price: 10 },
      { name: 'Book6', author: 'Author6', price: 10 },
    ]
  }

  clicked(){
    console.log(this.selectedBook);
  }
}
