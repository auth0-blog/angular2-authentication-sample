/// <reference path="../typings/custom.d.ts" />

import {Component, View, coreDirectives, Http, Headers} from 'angular2/angular2';
import {status, text} from '../utils/fetch';
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
    var headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'bearer ' + this.jwt);
    this.http.get(url, {headers: headers})
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
