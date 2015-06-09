/// <reference path="../../typings/tsd.d.ts" />

import {View, Component} from 'angular2/angular2';
import {Home} from '../home/home';
import {Login} from '../login/login';
import {Signup} from '../signup/signup';
import {RouteConfig, RouterOutlet, RouterLink, Router} from 'angular2/router';
import {BrowserLocation} from 'angular2/src/router/browser_location';
import {LoggedInOutlet} from './LoggedInOutlet';

let template = require('./app.html');


@Component({
  selector: 'auth-app'
})
@View({
  template:`${template}`,
  directives: [RouterOutlet]
})
@RouteConfig([
  { path: '/',          as: 'home',      component: Home },
  { path: '/login',     as: 'login', component: Login },
  { path: '/signup',    as: 'signup',      component: Signup }
])
export class App {
  constructor(router: Router, browserLocation: BrowserLocation) {
    // we need to manually go to the correct uri until the router is fixed
    // let uri = browserLocation.path();
    // router.navigate(uri);
  }
}
