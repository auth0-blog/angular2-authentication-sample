/// <reference path="../typings/custom.d.ts" />

import {Component, View, coreDirectives, Http, Headers} from 'angular2/angular2';
import {status, json} from '../utils/fetch';
import { Router, RouterLink } from 'angular2/router';

let styles   = require('./signup.css');
let template = require('./signup.html');

@Component({
  selector: 'signup'
})
@View({
  directives: [ RouterLink, coreDirectives ],
  styles: [ styles ],
  template: template
})
export class Signup {
  constructor(public router: Router, public http: Http) {
  }

  signup(event, username, password) {
    event.preventDefault();
    var headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    this.http.post('http://localhost:3001/users',
      JSON.stringify({
        username, password
      }),
      {
        headers: headers
      }
    )
    .toRx()
    .map(status)
    .map(json)
    .subscribe(
      response => {
        localStorage.setItem('jwt', response.id_token);
        this.router.navigate('/home');
      },
      error => {
        alert(error.message);
        console.log(error.message);
      }
    );
  }

  login(event) {
    event.preventDefault();
    this.router.parent.navigate('/login');
  }

}
