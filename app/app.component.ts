import { Component, OnInit } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { FontService } from './font.service';
import { ListComponent } from './list.component';
import { CompareComponent } from './compare.component';
import { TestComponent } from './test.component';
import { FontDetailComponent } from './font-detail.component';
import { Font } from './font';

@Component({
  directives: [ ROUTER_DIRECTIVES ],
  providers: [ ROUTER_PROVIDERS, FontService ],
  selector: 'my-app',
  templateUrl: 'app/main.html'
})

@RouteConfig([
  {
    path: '/list',
    name: 'List',
    component: ListComponent
  },
  {
    path: '/compare',
    name: 'Compare',
    component: CompareComponent
  },
  {
    path: '/test',
    name: 'Test',
    component: TestComponent
  },
  {
    path: '/detail/:id',
    name: 'FontDetail',
    component: FontDetailComponent
  }
])

export class AppComponent {

  constructor() {
  }
  title = 'BETA TEST';
}
