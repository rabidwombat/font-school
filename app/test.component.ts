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
  availableFonts: Font[];
  similarFonts: Font[];
  testingFonts: Font[];
  selectedFont: Font;
  displayedFonts: Font[];
  
  error: any;

  constructor(private fontService: FontService, private router: Router) { 
  }
  
  getFonts() { 
    this.fontService.getFonts().then(fonts => this.availableFonts = this.orderFontsByName(this.checkAvailability(fonts))); 
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

  onChange(fontId: number) {
    this.setFontToTest(this.getFontById(Number(fontId)));
  }

  setFontToTest(testingFont) {
    this.selectedFont = testingFont;
    this.similarFonts = this.availableFonts.filter(font => this.areFontsSimilar(font, testingFont));
    this.resetForm();
  }

  private areFontsSimilar(font1, font2) {
    return (font1.isSerif == font2.isSerif && font1.monospace == font2.monospace && font1.id != font2.id);
  }

  resetForm() {
    if (this.similarFonts.length < 2) { return; } // error - should handle this
    let testFont1 = this.getRandomFontFromList(this.similarFonts);
    let testFont2 = testFont1;
    while(testFont1 == testFont2) {
      testFont2 = this.getRandomFontFromList(this.similarFonts);
    }
    this.testingFonts = this.randomizeOrder([this.selectedFont, testFont1, testFont2]);
  }

  getRandomFontFromList(list: Font[]): Font {
    return list[Math.floor(Math.random() * list.length)];
  }

  getFontById(id: number): Font {
    return this.availableFonts.find(font => font.id === id);
  }

  randomizeOrder(list: Font[]) {
    let currentIndex = list.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      temporaryValue = list[currentIndex];
      list[currentIndex] = list[randomIndex];
      list[randomIndex] = temporaryValue;
    }

    return list;
  }


}
