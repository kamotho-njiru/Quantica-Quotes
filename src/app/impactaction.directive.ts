import { Directive } from '@angular/core';

@Directive({
  selector: '[appImpactaction]'
})
export class ImpactactionDirective {

  constructor(private elem:ElementRef) {   
  }
  @HostListener("click") onClicks(){
    this.textDeco("green")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("None")
}
