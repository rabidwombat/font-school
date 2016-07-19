import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { FontService } from './font.service';
import { SnippetComponent } from './snippet.component';
import { Font } from './font';

@Component({
  directives: [SnippetComponent],
  selector: 'font-list',
  styleUrls: [ 'app/compare.css' ],
  templateUrl: 'app/compare.html'
})

export class CompareComponent implements OnInit {
  fonts: Font[];
  selectedFonts: Font[];
  displayedFonts: string[];
  maxDisplayedFonts = 3;
  compareText: string;
  quotes: string[] = [
    'So much of life is cobbled together when plans go awry.  That is often where happiness comes from.',
    'Only humans dread.  Dread is appropriate to nothing.  It\'s the surplus of animal fear, it\'s never indicated, it\'s nothing but itself.',
    'Most of the time what our patients need is a compassionate, rigorous, sympathetic interlocutor. Sometimes ' +
    'the externalized trauma-vectors in dysfunctional interpersonal codependent psychodynamics are powerful enough ' +
    'that more robust therapeutic intervention is necessary. I checked my ammunition.',
    '\"Our opponent is an alien starship packed with atomic bombs,\" I said. \"We have a protractor.\"'
  ]
  error: any;

  constructor(private fontService: FontService, private router: Router) { 
    this.selectedFonts = [];
    this.displayedFonts = [];
    this.compareText = this.quotes[Math.floor(Math.random() * this.quotes.length)];
  }
  
  getFonts() { 
    this.fontService.getFonts().then(fonts => this.fonts = this.orderFontsByName(this.checkAvailability(fonts))) 
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

  onSelect(font: Font) {
    if (this.selectedFonts[font.name]) {
      this.unselectFont(font.name);
      this.hideFont(font.name);
    } else {
      this.selectFont(font.name);
      this.displayFont(font.name);
    }
  }

  onUpdate(text) {
    this.compareText = text;
  }

  selectFont(fontName: string) {
    this.selectedFonts[fontName] = true;
  }

  unselectFont(fontName: string) {
    this.selectedFonts[fontName] = false;
  }

  displayFont(fontName) {
    if (this.displayedFonts.length == this.maxDisplayedFonts) {
      this.unselectFont(this.displayedFonts.shift());
    }
    this.displayedFonts.push(fontName);
  }

  hideFont(fontName) {
    var i = this.displayedFonts.indexOf(fontName);
    if (i != -1) this.displayedFonts.splice(i, 1);
  }

  findFontByName(fontName) {
    for (let font of this.fonts) {
      if (font.name == fontName) {
        return font;
      }
    }
    return new Font();
  }
}
