import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { FontService } from './font.service';
import { SnippetComponent } from './snippet.component';
import { Font } from './font';

@Component({
  directives: [SnippetComponent],
  selector: 'font-list',
  styleUrls: [ 'app/list.css' ],
  templateUrl: 'app/list.html'
})

export class ListComponent implements OnInit {
  fonts: Font[] = [];
  error: any;

  constructor(private fontService: FontService, private router: Router) { 
  }

  getFonts() { 
    this.fontService.getRandomizedFonts().then(fonts => this.fonts = this.checkAvailability(fonts)); 
  }

  ngOnInit() {
    this.getFonts();
  }

  orderFontsByName(fonts: Font[]) {
    return fonts.sort((f1, f2) => {
      if (f1.name > f2.name) return 1;
      if (f1.name < f2.name) return -1;
      return 0;
    });
  }

  checkAvailability(fonts: Font[]) {
    return fonts.filter(font => font.available);
  }

}
