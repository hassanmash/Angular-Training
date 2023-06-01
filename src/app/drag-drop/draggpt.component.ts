import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, ViewChild } from '@angular/core';
import { VirtualScrollerComponent } from 'ngx-virtual-scroller';

@Component({
  selector: 'app-drag-drop',
  template: `
  <virtual-scroller #scroll [items]="items" (vsEnd)="onScrollEnd()" cdkDropList (cdkDropListDropped)="onDrop($event)">
  <div class="drop-zone">
    <ng-container *ngFor="let item of items; let i = index">
      <div class="item" cdkDrag [cdkDragData]="item" (cdkDragEnded)="onDragEnded(i)">
        {{ item }}
      </div>
    </ng-container>
  </div>
</virtual-scroller>
  `,
  styleUrls: ['./drag-drop.component.css'],
})
export class DragGPTComponent{
    items = Array.from({length: 1000}).map((_, i) => `Item #${i}`);
  isDroppedOver = false;

  @ViewChild('scroll') virtualScroller: VirtualScrollerComponent;

  onScrollEnd() {
    // console.log('scrollend');
    // this.virtualScroller.refresh();
  }

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
    this.isDroppedOver = true;
  }

  onDragEnded(index: number) {
    console.log(`Item dragged to index ${index}`);
  }
}
