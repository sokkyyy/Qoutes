import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  @Output() addQuote = new EventEmitter<Quote>();

  newQuote = new Quote(0, '', '', '', 0, 0, new Date());

  submitQuote() {
    if (this.newQuote.description !== '' &&  this.newQuote.author !== '' && this.newQuote.submittedBy !== '') {
      this.addQuote.emit(this.newQuote);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
