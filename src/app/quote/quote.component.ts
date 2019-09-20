import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'All that we are is the result of what we have thought', 'Buddha', 'Ray', 11, 0),
    new Quote(2, 'I have no special talent. I am only passionately curious', 'Albert Einstein', 'Ray', 20, 3),
    new Quote(3, 'If you judge people, you have no time to love them', 'Mother Teresa', 'Ray', 30, 14),
    new Quote(4, 'Wisely, and slow. They stumble that run fast', 'William Shakespeare', 'Ray', 6, 3),
  ];

  showDetails(index) {
    this.quotes[index].showQuoteDetails = !this.quotes[index].showQuoteDetails;
  }

  upVote(index) {
    this.quotes[index].upVote++;
  }
  downVote(index) {
    this.quotes[index].downVote++;
  }

  deleteGoal(index) {
    const confirmDelete = confirm('Are you sure you want to delete this goal?');
    if (confirmDelete) {
      this.quotes.splice(index, 1);
    }
  }
  submitQuote(quote) {
    quote.id = this.quotes.length + 1;
    this.quotes.push(quote);
    console.log(this.quotes);
  }


  constructor() { }

  ngOnInit() {
  }

}
