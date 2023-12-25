import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOver]',
  standalone: true
})
export class OverDirective {

  constructor(public ele: ElementRef) { }
  @HostListener('mouseover') mouseOver() {
    this.ele.nativeElement.style.color = 'red';
  }
  @HostListener('mouseleave') mouseLeave() {
    this.ele.nativeElement.style.color = 'black'
  }
}
