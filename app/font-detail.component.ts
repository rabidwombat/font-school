import { RouteParams } from '@angular/router-deprecated';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { FontService } from './font.service';
import { Font } from './font';

@Component({
  selector: 'font-detail',
  templateUrl: 'app/font-detail.html'
})

export class FontDetailComponent {
  @Input() font: Font;
  @Input() displayText: string = 'Lazy brown fox and dumb ? 653';

  constructor(
    private fontService: FontService,
    private routeParams: RouteParams) {}
  
}
