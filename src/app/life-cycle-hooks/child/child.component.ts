import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  <p>child works!</p>
  <p>String from parent: {{stringFromParent}}</p>
  `
})
export class ChildComponent implements OnInit, OnDestroy, OnChanges, DoCheck{

  private counter:number = 0;
  private interval: any;

  @Input()
  public stringFromParent: string = "";

  constructor(){
    console.log("Child constructor is called");
  }
  ngDoCheck(): void {
    console.log("Child DoCheck is called");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Child OnChanges is called");
  }
  ngOnInit(): void {
    console.log("Child OnInit is called");
    // this.interval = setInterval(()=>{
    //   this.counter += 1;
    //   console.log(this.counter);
    // },1000)
  }

  //used for memory leakage
  ngOnDestroy(): void {
    console.log("Child OnDestroy is called");
    // clearInterval(this.interval);
  }

}
