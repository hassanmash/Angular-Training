import { Component, OnInit } from '@angular/core';
import { SubjectServices } from '../subject.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  public userString: string = "";

  constructor(private svc: SubjectServices) {}
  ngOnInit(): void {
    this.svc.dataEmitter.subscribe({
      next: (data:string) => this.userString = data
    })
  }

}
