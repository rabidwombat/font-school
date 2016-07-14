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
  @Input() displayText: string = 'Lazy brown fox and dumb ? 653';
  @Output() updateText: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private fontService: FontService,
    private routeParams: RouteParams) {
  
  }

  onKeyup(text) {
    this.updateText.emit(text);
  }
  
}
