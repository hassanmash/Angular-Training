import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  public first: number = 0;
  public totalRecords: number = 12;

  onPageChange(event:any) {
    console.log(event);
    this.first = event.first;
  }

  refresh() {
    this.first = 0
  }
}
