import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uSPhoneNumber'
})
export class USPhoneNumberPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    let temp: string = value.toString();
    if(temp.length < 10){
      return "Not a valid number";
    }
    else{
      let USFormat: string = "+1 ";
      let i = 0;
      for(;i <= 3; i = i + 3){
        USFormat += temp.slice(i,i+3) + "-";
      }
      USFormat += temp.slice(i);
      // USFormat = USFormat + temp.slice(0,3) + "-" + temp.slice(3,6) + "-" + temp.slice(6);
      return USFormat;
    }
  }

}
