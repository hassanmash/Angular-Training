import { Component, OnInit } from '@angular/core';
import { SubjectServices } from '../subject.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit{

  public userString: string = "";

  constructor(private svc: SubjectServices){}
  ngOnInit(): void {
    this.svc.dataEmitter.subscribe({
      next: (data:string) => this.userString = data
    })
  }
  
}
