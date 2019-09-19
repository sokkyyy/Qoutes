import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightUpvote]'
})
export class HighlightUpvoteDirective {


  constructor(private elem: ElementRef) {

  }

}
