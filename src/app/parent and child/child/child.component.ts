import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input()
  public parentString: string = "";

  @Output()
  public sendtext: EventEmitter<string> = new EventEmitter();

  @Output()
  public addItemToList: EventEmitter<string> = new EventEmitter();

  public childText: string = "";
  public listItem: string = "";

  public updateParent() {
    this.sendtext.emit(this.childText);
  }

  public AddToList(){
    this.addItemToList.emit(this.listItem);
  }

}
