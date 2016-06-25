import { Component, OnInit } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { FontService } from './font.service';
import { FontsComponent } from './fonts.component';
import { FontDetailComponent } from './font-detail.component';
import { FontTestComponent } from './font-test.component';
import { Font } from './font';

@Component({
  directives: [ ROUTER_DIRECTIVES ],
  providers: [ROUTER_PROVIDERS, FontService ],
  selector: 'my-app',
  templateUrl: 'app/main.html'
})

@RouteConfig([
  {
    path: '/fonts',
    name: 'Fonts',
    component: FontsComponent
  },
  {
    path: '/detail/:id',
    name: 'FontDetail',
    component: FontDetailComponent
  }
])

export class AppComponent {
  title = 'Weird font site';
}
