import { Component, OnInit } from '@angular/core';
import { Observable, count, filter, firstValueFrom, from, lastValueFrom, map, of, take } from 'rxjs';

@Component({
  selector: 'app-observe-promise',
  templateUrl: './observe-promise.component.html',
  styleUrls: ['./observe-promise.component.css']
})
export class ObservePromiseComponent implements OnInit {
  // public data:string = "";
  ngOnInit(): void {
    // promise
    const promise = new Promise(resolve => {
      console.log('Promise call');
      setTimeout(() => {
        resolve('Promise Working...');
        resolve('Promise Working 1...');
        resolve('Promise Working 2...');
      }, 1000);
    });

    promise.then(res => console.log('Promise then: ',res) );


    // converting observable to PROMISE
    const observe = new Observable(sub => {
      let count = 1
      setInterval(()=>{
        sub.next('This is observable: '+count);
        count += 1;
      },5000);
    });

    // observe.subscribe({
    //   next: (data) => console.log(data)
    // });

    async function execute() {
      let data = await firstValueFrom(observe)
      console.log(data);
    }
    
    execute();

    // Operators of OBSERVABLES

    let myArray: number[] = [1, 2, 5, 6, 8, 9];
    let myObservable = from(myArray);

    let myTransformObservable = myObservable.pipe(map((val)=>{
      return val * 5;
    }));

    let myFilterObservable = myTransformObservable.pipe(filter((val)=>{
      return val > 25; 
    }))

    let combiningObservable = myObservable.pipe(map((val)=>{
      return val * 5;
    }), filter((val)=>{
      return val > 25; 
    }), take(2))
    
    console.log('Observable');
    this.executeObservable(myObservable);
    console.log('Transform Observable');
    this.executeObservable(myTransformObservable);
    console.log('Filter Observable');
    this.executeObservable(myFilterObservable);
    console.log('Combined Observable');
    this.executeObservable(combiningObservable);
    
    
  }
  
  private executeObservable(myObsrv: Observable<number>) {
    myObsrv.subscribe({
      next: (data) => console.log(data),
      error: (err) => console.warn(err),
      complete: () => console.warn('Observable complete...')
    })
  };
}
