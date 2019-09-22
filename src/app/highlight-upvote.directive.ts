import { Directive, ElementRef, Input } from '@angular/core';
import { Quote } from './quote';


@Directive({
  selector: '[appHighlightUpvote]'
})
export class HighlightUpvoteDirective {
  @Input() quote: Quote;


  constructor(private elem: ElementRef) {

    elem.nativeElement.style.fontWeight = 'bold';

  }

}
