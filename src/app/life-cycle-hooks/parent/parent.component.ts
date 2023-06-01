import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
<p>parent works!</p>
<button (click)="loadChild()" class="btn btn-warning">{{isChild?'Destroy child':'Load child'}}</button>
<input type="text" class="form-control mt-3" placeholder="Enter your string" [(ngModel)]="ParentString">
<app-child *ngIf="isChild" [stringFromParent]="ParentString"></app-child>
  `
})
export class ParentComponent implements OnInit{

  public isChild: boolean = false;
  public ParentString: string = ""; 

  constructor(){
    console.log("Parent constructor is called");
  }
  // never use docheck and onchanges together in the same component
  // ngDoCheck(): void {
  //   console.log("Parent DoCheck is called");
  // }

  // onchange affects the child mostly
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log("Parent OnChanges is called");
  // }
  ngOnInit(): void {
    console.log("Parent OnInit is called");
  }

  public loadChild(){
    this.isChild = !this.isChild;
  }

}
