import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectBehaviourService {

  public dataSubject = new BehaviorSubject<string>('Hassan');

  constructor() { }

  public sendData(data: string){
    this.dataSubject.next(data);
  }
}
