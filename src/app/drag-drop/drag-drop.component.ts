import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Subject, debounce, interval, of, timer } from 'rxjs';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragDropComponent{

  x: Array<string> = ["hassan", "dasi"];
  y = [];
  scrollElements = 0;

  isEnabled = new Subject<boolean>();
  debounceName: boolean = true;

  ngDoCheck(): void {
    let scrollposition = document.getElementById('scroll')?.scrollTop;
    this.scrollElements = Math.floor( scrollposition / 62 );
  }

  items = Array.from({length: 10000}).map((_, i) => `Item #${i}`);

  dragclick(itemid:any){
    console.log(itemid);
  }

  debounceEx(){
    this.isEnabled.next(false);
    this.callmeDebunce();
  }

  callmeDebunce() {
    this.isEnabled.pipe(
      debounce(()=>timer(1000))
    )
    .subscribe( val => {
      console.log(val);
      this.debounceName = val;
      this.isEnabled.next(true);
    })
    console.log("this is first")
  }

  capitlise() {
    this.x.forEach((e,idx) => {
      this.x[idx] = this.capitalizeFirstLetter(e);
    });
    console.log(this.x);
  }

  capitalizeFirstLetter(str: string): string {
    // return str.charAt(0).toUpperCase() + str.slice(1);
    return str.replace(/^\w/, (c) => c.toUpperCase());
  }

  drop(event: CdkDragDrop<string[]>) {
    let scrollposition = document.getElementById('cdkscroll')?.scrollTop;
    let scrollElements = Math.floor( scrollposition / 62 );
    console.log(scrollElements);
    console.log('pI',this.items[event.previousIndex+scrollElements]);
    console.log('cI',this.items[event.currentIndex+scrollElements]);
    
    moveItemInArray(event.container.data, event.previousIndex + scrollElements, event.currentIndex + scrollElements);
    this.items = [...this.items];
  }

  dropngx(event: CdkDragDrop<string[]>) {
    console.log('pI',this.items[event.previousIndex+this.scrollElements]);
    console.log('cI',this.items[event.currentIndex+this.scrollElements]);
    moveItemInArray(event.container.data, event.previousIndex + this.scrollElements, event.currentIndex + this.scrollElements);
    // moveItemInArray(event.container.data, event.previousIndex , event.currentIndex );
    this.items = [...this.items];
  }





  textdisable= false;
  onChange(e) {
    let val = e.target.value;
    if(val == 'radio1'){
      this.textdisable = false;
    }
    else{
      this.textdisable = true;
    }
  }
}
