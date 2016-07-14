import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Font } from './font';
declare var fontTest;

@Injectable()
export class FontService {
  
  private listPromise: Promise<Font[]> = null;
  private fontsUrl: string = 'app/fonts';
  constructor(private http: Http) {}

  getFonts(): Promise<Font[]> {
    if (!this.listPromise) {
      this.listPromise = this.http.get(this.fontsUrl)
        .toPromise()
        .then(response => this.processList(response.json().data))
        .catch(this.handleError);
    }
    return this.listPromise;
  }

  processList(fontList: Font[]) {
    fontTest.setup();
    for (var font of fontList) {
      font.available = fontTest.isInstalled(font.name);
    }

    return fontList;
  }
  
  getFont(name: string) {
    return this.getFonts()
      .then(fonts => fonts.filter(font => font.name === name)[0]);
  }

  private handleError(error: any) {
    return Promise.reject(error.message || error);
  }
}
