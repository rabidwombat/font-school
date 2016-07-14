import { Injectable, Component, ViewChild, OnInit, DynamicComponentLoader, ElementRef, ApplicationRef } from '@angular/core';

import { Font } from './font';
import { FontTestComponent } from './font-test.component';

/*
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
*/

@Injectable()
export class FontTestService {
  testString: string = 'mmmmmmmmmwwwwwww';
  controlFont: string = 'Comic Sans MS';
  testingFont: string = 'Arial';
  @ViewChild('fontControl') controlElem;
  @ViewChild('fontTest') testElem;
  count: number = 1;
  elem;

  constructor(private appRef: ApplicationRef) {
    console.log('constructing - ' + this.count);
    this.elem = this.appRef['_rootComponents'];
    console.log(this.elem);
    this.count++;
  
  }
  // TODO set control font in constructor

  ngOnInit() {
    console.log('initting!');
    console.log(this.elem);

  }

  ngAfterViewInit() {
    console.log('this one has a view');
    console.log(this.controlElem);
    console.log('after');
  }

  blahdblah() {
    console.log('in blahdblah');
    console.log(this.elem);
  }
 
  isInstalled(font: string) {
    console.log(this.controlElem);
    console.log(this.count);
    this.count++;
    if (!this.controlElem || !this.controlElem.offsetWidth) { return 'up and'; }
    console.log('is Installed?????');
    console.log(this.controlElem.offsetWidth);
    console.log(this.testElem.offsetWidth);
    console.log(this.controlElem.offsetWidth == this.testElem.offsetWidth);
  }

}
