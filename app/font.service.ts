import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Font } from './font';
declare var fontTest;

@Injectable()
export class FontService {
  
  private fontsPromise: Promise<Font[]> = null;
  private quotesPromise: Promise<string[]> = null;
  private fontsUrl: string = 'app/fonts';
  private quotesUrl: string = 'app/quotes';
  constructor(private http: Http) {}

  getFonts(): Promise<Font[]> {
    if (!this.fontsPromise) {
      this.fontsPromise = this.http.get(this.fontsUrl)
        .toPromise()
        .then(response => this.processList(response.json().data))
        .catch(this.handleError);
    }
    return this.fontsPromise;
  }

  getQuotes(): Promise<string[]> {
    if (!this.quotesPromise) {
      this.quotesPromise = this.http.get(this.quotesUrl)
        .toPromise()
        .then(response => response.json().data)
        .catch(this.handleError);
    }
    return this.quotesPromise;
  }

  getRandomQuote(): Promise<string> {
    return this.getQuotes().then(quotes => quotes[Math.floor(Math.random() * quotes.length)])
      .catch(this.handleError);
  }

  getRandomizedFonts(): Promise<Font[]> {
    return this.getFonts()
      .then(fonts => this.randomizeOrder(fonts));
  }

  getFontByName(name: string): Promise<Font> {
    return this.getFonts()
      .then(fonts => fonts.filter(font => font.name === name)[0]);
  }

  private randomizeOrder(fonts: Font[]): Font[] {
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
  
  private processList(fontList: Font[]): Font[] {
    fontTest.setup();
    for (var font of fontList) {
      font.available = fontTest.isInstalled(font.name);
    }

    return fontList;
  }

  private handleError(error: any) {
    return Promise.reject(error.message || error);
  }
}
