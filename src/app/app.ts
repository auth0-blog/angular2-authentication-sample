/// <reference path="../../typings/tsd.d.ts" />

import {View, Component} from 'angular2/angular2';
import {Home} from '../home/home';
import {Login} from '../login/login';
import {Signup} from '../signup/signup';
import {RouteConfig, RouterOutlet, RouterLink, Router} from 'angular2/router';
import {BrowserLocation} from 'angular2/src/router/browser_location';
// import {LoggedInRouterOutlet} from './LoggedInOutlet';

let template = require('./app.html');


@Component({
  selector: 'auth-app'
})
@View({
  template:`${template}`,
  directives: [RouterOutlet]
})
@RouteConfig([
  { path: '/home',          as: 'home',      component: Home }
])
export class App {
  router: Router;
  constructor(router: Router, browserLocation: BrowserLocation) {
    // we need to manually go to the correct uri until the router is fixed
    this.router = router;
    let uri = browserLocation.path();
    if (uri === '' || uri === '/') {
      router.navigate('/home');
    } else {
      router.navigate(uri);
    }
  }

  goTo(event, url) {
    event.preventDefault();
    this.router.navigate(url).then(() => {
      console.log("Router successfully to", url);
    }, () => {
      console.log("Error going to URL", url);
    });
  }
}
