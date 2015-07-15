/// <reference path="../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {status, json} from '../utils/fetch';
import {Http} from 'angular2/http';
import { Router, RouterLink } from 'angular2/router';


let styles   = require('./login.css');
let template = require('./login.html');


@Component({
  selector: 'login'
})
@View({
  styles: [ styles ],
  template: template,
  directives: [RouterLink]
})
export class Login {
  constructor(public router: Router, public http: Http) {
  }

  login(event, username, password) {
    event.preventDefault();
    this.http.post('http://localhost:3001/sessions/create', {
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
        this.router.parent.navigate('/home');
      },
      error => {
        alert(error.message);
        console.log(error.message);
      }
    );
  }

  signup(event) {
    event.preventDefault();
    this.router.parent.navigate('/signup');
  }
}
