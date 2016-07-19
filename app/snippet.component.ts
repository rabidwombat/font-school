import { RouteParams } from '@angular/router-deprecated';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { FontService } from './font.service';
import { Font } from './font';

@Component({
  selector: 'snippet',
  styleUrls: [ 'app/snippet.css' ],
  templateUrl: 'app/snippet.html'
})

export class SnippetComponent {
  @Input() font: Font;
  @Input() displayText: string = null;
  @Input() showName: boolean = true;
  @Output() updateText: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private fontService: FontService,
    private routeParams: RouteParams) {
    
    if (this.displayText == null) {
      this.getQuote();
    }
  }

  getQuote() {
    this.fontService.getRandomQuote().then(quote => this.displayText = quote);
  }

  onKeyup(text) {
    this.updateText.emit(text);
  }
  
}
