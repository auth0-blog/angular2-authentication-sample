/// <reference path="../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {coreDirectives} from 'angular2/directives';
import {status, text} from '../utils/fetch';
import {Http} from 'angular2/http';
import { Router} from 'angular2/router';

let styles   = require('./home.css');
let template = require('./home.html');


@Component({
  selector: 'home'
})
@View({
  styles: [ styles ],
  template: template,
  directives: [ coreDirectives ]
})
export class Home {
  jwt: string;
  decodedJwt: string;
  response: string;
  api: string;

  constructor(public router: Router, public http: Http) {
    this.jwt = localStorage.getItem('jwt');
    this.decodedJwt = this.jwt && window.jwt_decode(this.jwt);
  }

  logout() {
    localStorage.removeItem('jwt');
    this.router.parent.navigate('/login');
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
    this.http.get(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + this.jwt
      }
    })
    .toRx()
    .map(status)
    .map(text)
    .subscribe(
      response => {
          this.response = response;
      },
      error => {
          this.response = error.message;
      }
    )
  }

}
