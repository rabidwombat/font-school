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
  @Input()
  set fontSize(size: string) {
    this._fontSize = size;
  } 
  @Output() updateText: EventEmitter<string> = new EventEmitter<string>();
  _fontSize: string;

  constructor(
    private fontService: FontService,
    private routeParams: RouteParams) {
    this.setInitialQuote();
  }

  setInitialQuote() {
    // only set the quote from the promise IF no quote is already set
    this.fontService.getRandomQuote().then(quote => this.displayText = (this.displayText == null ? quote : this.displayText));
  }

  onKeyup(text) {
    this.updateText.emit(text);
  }
  
}
