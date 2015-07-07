/// <reference path="../../typings/tsd.d.ts" />

import {View, Component} from 'angular2/annotations';
import {Home} from '../home/home';
import {Login} from '../login/login';
import {Signup} from '../signup/signup';
import {Router, RouteConfig} from 'angular2/router';
import {Location} from 'angular2/router';
import {LoggedInRouterOutlet} from './LoggedInOutlet';

let template = require('./app.html');

@Component({
  selector: 'auth-app',
  viewInjector: [Location] 
})
@View({
  template:`${template}`,
  directives: [LoggedInRouterOutlet]
})
@RouteConfig([
  { path: '/home',      as: 'home',      component: Home },
  { path: '/login',     as: 'login', component: Login },
  { path: '/signup',    as: 'signup',      component: Signup }
])
export class App {
  router: Router;
  constructor(router:Router, location: Location) {
    // we need to manually go to the correct uri until the router is fixed
    this.router = router;
    let uri = location.path();
    if (uri === '' || uri === '/') {
      router.navigate('/home');
    //} else {
      //router.navigate(uri);
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
