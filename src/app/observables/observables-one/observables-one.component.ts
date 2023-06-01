import { Component } from '@angular/core';
import { SubjectServices } from '../subject.service';
import { SubjectBehaviourService } from '../subjectBehaviour.service';

@Component({
  selector: 'app-observables-one',
  templateUrl: './observables-one.component.html',
  styleUrls: ['./observables-one.component.css']
})
export class ObservablesOneComponent {

  public enteredString: string = "";
  public username: string = "";

  constructor(private svc: SubjectServices, private bhvrSvc: SubjectBehaviourService){}

  public onClick() {
    this.svc.dataObservable(this.enteredString);
  }

  public onCloseStream(){
    this.svc.closeObservable();
    console.log('Stream closed');
  }

  public addToStream(data: string) {
    this.bhvrSvc.sendData(data);
  }

}
