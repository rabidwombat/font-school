import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { FontService } from './font.service';
import { SnippetComponent } from './snippet.component';
import { Font } from './font';

@Component({
  directives: [SnippetComponent],
  selector: 'font-list',
  templateUrl: 'app/list.html'
})

export class ListComponent implements OnInit {
  fonts: Font[];
  error: any;
  quotes: string[] = [
    'So much of life is cobbled together when plans go awry.  That is often where happiness comes from.',
    'Only humans dread.  Dread is appropriate to nothing.  It\'s the surplus of animal fear, it\'s never indicated, it\'s nothing but itself.',
    'Most of the time what our patients need is a compassionate, rigorous, sympathetic interlocutor. Sometimes ' +
    'the externalized trauma-vectors in dysfunctional interpersonal codependent psychodynamics are powerful enough ' +
    'that more robust therapeutic intervention is necessary. I checked my ammunition.',
    '\"Our opponent is an alien starship packed with atomic bombs,\" I said. \"We have a protractor.\"'
  ]

  constructor(private fontService: FontService, private router: Router) { 
  }
  
  getRandomQuote() {
    return this.quotes[(Math.floor(Math.random() * this.quotes.length))];
  }
  getFonts() { 
    this.fontService.getFonts().then(fonts => this.fonts = this.randomizeOrder(this.checkAvailability(fonts))) 
  }

  ngOnInit() {
    this.getFonts();
  }

  randomizeOrder(fonts: Font[]) {
    let currentIndex: number = fonts.length,
    tempValue: Font,
    randomIndex: number;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      tempValue = fonts[currentIndex];
      fonts[currentIndex] = fonts[randomIndex];
      fonts[randomIndex] = tempValue;
    }

    return fonts;
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
