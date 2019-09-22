import { Directive, ElementRef } from '@angular/core';
import { Quote } from './quote';

@Directive({
  selector: '[appHighlightUpvote]'
})
export class HighlightUpvoteDirective {


  constructor(private elem: ElementRef) {

    elem.nativeElement.style.fontWeight = 'bold';

  }

}
