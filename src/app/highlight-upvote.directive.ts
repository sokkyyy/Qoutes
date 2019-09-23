import { Directive, ElementRef, Input } from '@angular/core';



@Directive({
  selector: '[appHighlightUpvote]'
})
export class HighlightUpvoteDirective {
  @Input() highlight: string;

  constructor(private elem: ElementRef) {
    elem.nativeElement.style.color = this.highlight;
  }


}
