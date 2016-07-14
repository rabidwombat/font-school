import { Injectable, Component, ViewChild, DynamicComponentLoader, ElementRef, ApplicationRef } from '@angular/core';

import { Font } from './font';

@Component({
  selector: 'font-test',
  styles: [`
    #fontTestBed { 
      xposition: absolute; 
      xleft: -9999px; 
      xtop: 0; 
      xvisibility: hidden; 
    }
    #fontControl, #fontTest { 
      font-size: 50px !important;
    }
  `],
  template: `
    <div id="fontTestBed">
      <span #fontControl [style.font-family]="controlFont">{{testString}}</span>
      <span #fontTest [style.font-family]="testingFont + ', ' + controlFont">{{testString}}</span>
    </div>
  `
})

export class FontTestComponent {
  testString: string = 'mmmmmmmmmwwwwwww';
  controlFont: string = 'Comic Sans MS';
  testingFont: string = 'Arial';
  @ViewChild('fontControl') controlElem;
  @ViewChild('fontTest') testElem;
  count: number = 1;

  constructor() {
    console.log('loaded the test component');
  }

  ngAfterViewInit() {
    console.log('after the view init!');
  }

  isInstalled() {
    console.log('is it installed?');
  }

}

