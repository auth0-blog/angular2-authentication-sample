/// <reference path="../../typings/tsd.d.ts" />

import {coreDirectives} from 'angular2/directives';
import {Component, View} from 'angular2/angular2';
import {status, json} from '../utils/fetch';
import {Http} from 'angular2/http';
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
    this.http.post('http://localhost:3001/users', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username, password
      })
    })
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
