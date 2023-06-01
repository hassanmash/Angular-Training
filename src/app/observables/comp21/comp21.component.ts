import { Component, OnInit } from '@angular/core';
import { SubjectBehaviourService } from '../subjectBehaviour.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-comp21',
  templateUrl: './comp21.component.html',
  styleUrls: ['./comp21.component.css']
})
export class Comp21Component implements OnInit{

  public username: string = "";

  public subcriptionToStream: any;

  constructor(private svc: SubjectBehaviourService) {}
  ngOnInit(): void {
    this.subcriptionToStream = this.svc.dataSubject.subscribe({
      next:(data) => this.username = data,
      error: (data) => console.log(data),
      complete: () => console.log('datatransfer completed')
    })
  }
  public subscribeToStream() {
    this.subcriptionToStream = this.svc.dataSubject.subscribe({
      next:(data) => this.username = data,
      error: (data) => console.log(data),
      complete: () => console.log('datatransfer completed')
    })
  }
  public unsubscribeToStream() {
    this.subcriptionToStream.unsubscribe();
  }
}
