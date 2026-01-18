import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTexual]',
  standalone:true
})
export class TexualDirective {

  constructor(public el:ElementRef<HTMLInputElement>){}

  @HostListener('input',['$event'])
  onInput(event:Event){
    let input   = this.el.nativeElement.value;
    input   = input.replace(/[^a-zA-Z ]/g, '');
    input   = input.replace(/^\s+/, '');
    input   = input.replace(/\s{2,}/g, ' ');
    this.el.nativeElement.value = input;
  }
}
