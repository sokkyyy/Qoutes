import { Directive, ElementRef, Input } from '@angular/core';
import { Quote } from './quote';


@Directive({
  selector: '[appHighlightUpvote]'
})
export class HighlightUpvoteDirective {
  @Input() highlight: string;




  constructor(private elem: ElementRef) { }

  private textDeco(action: string) {
    this.elem.nativeElement.style.color = action;
  }
}
