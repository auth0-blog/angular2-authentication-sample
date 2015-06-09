/// <reference path="../../typings/tsd.d.ts" />

import {View, Component} from 'angular2/angular2';
import {Home} from '../home/home';
import {Login} from '../login/login';
import {Signup} from '../signup/signup';
import { Router } from 'angular2/router';
import {LoggedInOutlet} from './LoggedInOutlet';

let styles   = require('./home.css');
let template = require('./home.html');


@Component({
  selector: 'auth-app'
})
@View({
  template:`<style>${styles}</style>\n${template}`
  directives: [LoggedInOutlet]
})
export class App {
  router: Router;

  constructor(router: Router) {
    this.router = router;
    router
      .config('/home', Home)
      .then((_) => router.config('/login', Login, 'login'))
      .then((_) => router.config('/signup', Signup, 'signup'))
      .then((_) => router.navigate('/home'))
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
