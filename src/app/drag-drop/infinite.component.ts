import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-drag-drop',
  template: `
  <div
  class="search-results"
  infinite-scroll
  [infiniteScrollDistance]="scrollDistance"
  [infiniteScrollThrottle]="throttle"
  (scrolled)="onScrollDown()"
  [scrollWindow]="false"
  #scroll cdkDropList
  [cdkDropListData]="DisplayItems"
  (cdkDropListDropped)="drop($event)">
    <div class="example-box" *ngFor="let item of DisplayItems" cdkDrag cdkDragLockAxis="y">{{item}}</div>
</div>
  `,
  styleUrls: ['./drag-drop.component.css'],
})
export class InfiniteScrollComponent{

    
    scrollDistance = 2;
    throttle = 50;
    scrollUpDistance = 2;
    loadItemsLength: number = 10;
    items = Array.from({length: 10000}).map((_, i) => `Item #${i}`);
    DisplayItems: string[] = []
    index:number = 0;

    constructor(){
        let tempIndex = this.index + this.loadItemsLength
        for(this.index; this.index < tempIndex; this.index ++){
            this.DisplayItems.push(this.items[this.index])
        }
    }
    onScrollDown() {
        console.log('scrolled');
        
        let tempIndex: number = this.index + this.loadItemsLength;
        for(this.index; this.index < tempIndex; this.index ++){
            this.DisplayItems.push(this.items[this.index])
        }
    }

    scrollElements = 0;
//   ngDoCheck(): void {
//     let scrollposition = document.getElementById('scroll')?.scrollTop;
//     this.scrollElements = Math.floor( scrollposition / 62 );
//   }


  drop(event: CdkDragDrop<string[]>) {
    // let scrollposition = document.getElementById('cdkscroll')?.scrollTop;
    // let scrollElements = Math.floor( scrollposition / 62 );
    // console.log(scrollElements);
    // console.log('pI',this.items[event.previousIndex+scrollElements]);
    // console.log('cI',this.items[event.currentIndex+scrollElements]);
    
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    // moveItemInArray(event.container.data, event.previousIndex + scrollElements, event.currentIndex + scrollElements);
    // this.items = [...this.items];
    this.DisplayItems = [...this.DisplayItems]
  }

//   dropngx(event: CdkDragDrop<string[]>) {
//     console.log('pI',this.items[event.previousIndex+this.scrollElements]);
//     console.log('cI',this.items[event.currentIndex+this.scrollElements]);
//     moveItemInArray(event.container.data, event.previousIndex + this.scrollElements, event.currentIndex + this.scrollElements);
//     // moveItemInArray(event.container.data, event.previousIndex , event.currentIndex );
//     this.items = [...this.items];
//   }
}
