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
  @Input() displayText: string = 'Lazy brown fox and dumb ? 654';

  constructor(
    private fontService: FontService,
    private routeParams: RouteParams) {}
  
  ngOnInit() {
    if (this.routeParams.get('id') !== null) {
      let id = +this.routeParams.get('id');

      this.fontService.getFont(id)
        .then(font => this.font = font);
    } else if (!this.font){
      this.font = new Font;
    }
  }

  goBack() {
    window.history.back();
  }

}
