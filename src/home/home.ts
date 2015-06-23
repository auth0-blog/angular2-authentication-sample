/// <reference path="../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {coreDirectives} from 'angular2/directives';
import {status, text} from '../utils/fetch'
import { Router} from 'angular2/router';

let styles   = require('./home.css');
let template = require('./home.html');


@Component({
  selector: 'home'
})
@View({
  template:`<style>${styles}</style>\n${template}`,
  directives: [coreDirectives]
})
export class Home {
  jwt: string;
  router: Router;
  response: string;
  api: string;

  constructor(router: Router) {
    this.router = router;
  }

  callAnonymousApi() {
    this._callApi('Anonymous', 'http://localhost:3001/api/random-quote');
  }

  callSecuredApi() {
    this._callApi('Secured', 'http://localhost:3001/api/protected/random-quote');
  }
  _callApi(type, url) {
    this.response = null;
    this.api = type;
    window.fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(status)
    .then(text)
    .then((response) => {
      this.response = response;
    })
    .catch((error) => {
      this.response = error.message;
    });
  }

}
