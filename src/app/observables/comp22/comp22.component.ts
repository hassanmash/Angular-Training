import { Component } from '@angular/core';
import { SubjectBehaviourService } from '../subjectBehaviour.service';

@Component({
  selector: 'app-comp22',
  templateUrl: './comp22.component.html',
  styleUrls: ['./comp22.component.css']
})
export class Comp22Component {

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
