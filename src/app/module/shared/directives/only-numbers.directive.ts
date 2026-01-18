import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumb]',
  standalone: true
})
export class OnlyNumbersDirective {

  constructor(public el:ElementRef<HTMLInputElement>) { }

  @HostListener('input',['$event'])
  onInput(){
    let input = this.el.nativeElement.value;
    input     = input.replace(/[^0-9]/g,'');
    this.el.nativeElement.value = input;
  }

}
