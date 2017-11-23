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
  defaultFontSize: string;
  fontSize: string;
  selectedFonts: Font[];
  displayedFonts: string[];
  maxDisplayedFonts = 3;
  compareText: string;
  error: any;
  fontConditions: {} = {};

  constructor(private fontService: FontService, private router: Router) { 
    this.selectedFonts = [];
    this.displayedFonts = [];
    this.resetQuote();
    this.fontSize = this.defaultFontSize = '14px';
  }
  
  getAvailableFonts() { 
    this.fontService.getFonts().then(fonts => this.fonts = this.orderFontsByName(this.checkAvailability(fonts)));
  }

  ngOnInit() {
    this.getAvailableFonts();
  }

  resetFontsWithConditions(conditions: Function[]) {
    this.fontService.getFonts().then(fonts => this.fonts = this.orderFontsByName(this.applyConditions(this.checkAvailability(fonts), this.fontConditions)));
  }

  applyConditions(fonts: Font[], conditions: {}) {
    var tempFonts = fonts;
    Object.keys(conditions).forEach((c) => tempFonts = tempFonts.filter(conditions[c]));
    return tempFonts;
  }

  orderFontsByName(fonts: Font[]) {
    return fonts.sort((f1, f2) => {
      if (f1.name > f2.name) return 1;
      if (f1.name < f2.name) return -1;
      return 0;
    });
  }

  resetQuote() {
    this.fontService.getRandomQuote().then(quote => this.compareText = quote);
  }

  changeSize() {
  console.log(this.fontSize);
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
    //this.compareText = text;
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

  updateMono(event) {
    if (event.target.value == 'all') {
      event.target.innerHTML = 'Monospace Only';
      event.target.value = 'mono';
      this.fontConditions.mono = (f) => f.monospace == true;
    } else if (event.target.value == 'mono') {
      event.target.innerHTML = 'Non-Monospace';
      event.target.value = 'nomono';
      this.fontConditions.mono = (f) => f.monospace == false;
    } else {
      event.target.innerHTML = 'All Spacing';
      event.target.value = 'all';
      this.fontConditions.mono = (f) => true;
    }
    this.resetFontsWithConditions();
    console.log(this.fonts);
  }

  updateSerif(event) {
    if (event.target.value == 'all') {
      event.target.innerHTML = 'Serifs Only';
      event.target.value = 'serif';
      this.fontConditions.serif = (f) => f.isSerif == true;
    } else if (event.target.value == 'serif') {
      event.target.innerHTML = 'No Serifs';
      event.target.value = 'noserif';
      this.fontConditions.serif = (f) => f.isSerif == false;
    } else {
      event.target.innerHTML = 'Serif & Sans';
      event.target.value = 'all';
      this.fontConditions.serif = (f) => true;
    }
    this.resetFontsWithConditions();
  }
}
