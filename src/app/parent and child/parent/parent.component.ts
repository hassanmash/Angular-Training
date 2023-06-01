import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  public parentText: string = "";

  public childString: string = "";

  public listOfData: string[] = ["This","is","sample","data"];

  public HandleChildString(strFromChild: string){
    this.childString = strFromChild;
  }

  public HandleAddToList(item: string){
    this.listOfData.push(item);
  }

}
