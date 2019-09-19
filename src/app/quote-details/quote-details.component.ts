import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote: Quote;

  @Output() addUpVote = new EventEmitter<Quote>();
  @Output() addDownVote = new EventEmitter<Quote>();
  @Output() goalDelete = new EventEmitter<Quote>();

  upVote() {
    this.addUpVote.emit();
  }
  downVote() {
    this.addDownVote.emit();
  }
  deleteGoal() {
    this.goalDelete.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
