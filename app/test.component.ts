import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { FontService } from './font.service';
import { SnippetComponent } from './snippet.component';
import { Font } from './font';

@Component({
  directives: [SnippetComponent],
  selector: 'font-list',
  templateUrl: 'app/test.html'
})

export class TestComponent implements OnInit {
  fonts: Font[];
  selectedFonts: Font[];
  displayedFonts: string[];
  maxDisplayedFonts = 3;
  error: any;

  constructor(private fontService: FontService, private router: Router) { 
    this.selectedFonts = [];
    this.displayedFonts = [];
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
