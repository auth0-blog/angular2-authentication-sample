/// <reference path="../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {status, json} from '../utils/fetch'
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
  constructor(public router: Router) {
  }

  login(event, username, password) {
    event.preventDefault();
    window.fetch('http://localhost:3001/sessions/create', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username, password
      })
    })
    .then(status)
    .then(json)
    .then((response) => {
      localStorage.setItem('jwt', response.id_token);
      this.router.parent.navigate('/home');
    })
    .catch((error) => {
      alert(error.message);
      console.log(error.message);
    });
  }

  signup(event) {
    event.preventDefault();
    this.router.parent.navigate('/signup');
  }
}
