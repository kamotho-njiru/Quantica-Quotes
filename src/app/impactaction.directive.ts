import { Directive } from '@angular/core';

@Directive({
  selector: '[appImpactaction]'
})
export class ImpactactionDirective {

  constructor(private elem:ElementRef) { }

}
