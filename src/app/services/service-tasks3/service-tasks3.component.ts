import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-service-tasks3',
  templateUrl: './service-tasks3.component.html',
  styleUrls: ['./service-tasks3.component.css']
})
export class ServiceTasks3Component implements OnInit{

  public UserList: any;

  constructor(private httpSvc: HttpService) {}
  ngOnInit(): void {
    this.httpSvc.getUserDetails().subscribe({
      next: (data) => {
        console.log(data);
        this.UserList = data;
      }
    })
  }
}
