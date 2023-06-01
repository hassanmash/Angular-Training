import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCharHighlight]'
})
export class CharHighlightDirective {

  @Input() appCharHighlight = '';

  constructor(private elem: ElementRef) { }

  @HostListener('keyup') onKeyEnter() {
    if(this.appCharHighlight.length > 10){
      this.borderColor("red");
    }
    else{
      this.borderColor("");
    }
  }

  private borderColor(color: string) {
    (<HTMLElement>this.elem.nativeElement).style.borderColor = color;
  }
}
