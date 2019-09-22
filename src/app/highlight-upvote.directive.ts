import { Directive, ElementRef, Input } from '@angular/core';
import { Quote } from './quote';


@Directive({
  selector: '[appHighlightUpvote]'
})
export class HighlightUpvoteDirective {
  @Input() highlight: string;


  constructor(private elem: ElementRef) {

    elem.nativeElement.style.color = 'red';

  }

}
